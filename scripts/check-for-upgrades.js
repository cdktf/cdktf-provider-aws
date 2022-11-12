
const fetch = require("node-fetch");
const semver = require("semver");
const actions = require("@actions/core");

// Code is inlined below, as this import requires us to add all dev dependencies of cdktf-cli as we're not
// using the bundle. A better alternative would be to refactor this method to move to its own package, that
// the cdktf-cli and others can use (we have the same "problem" with some other code in cdktf, cdktf-cli and
// the @cdktf/provider-generator package, too)
// const { versionMatchesConstraint } = require('cdktf-cli/lib/dependencies/version-constraints');

// set by the projen file that generates this script
const CONSTRAINT = "~> 4.0";
const FQ_PROVIDER_NAME = "hashicorp/aws";

(async function main() {
  if (await newerMatchingProviderVersionExists()) {
    console.log(
      `Found newer Terraform provider version matching the current constraint: ${CONSTRAINT}`
    );
    setGithubStepOutput("new_version", "available");
  } else {
    console.log("No changes detected.");
    setGithubStepOutput("new_version", "unavailable");
  }
})();

function setGithubStepOutput(name, value) {
  actions.setOutput(name, value);
}

async function newerMatchingProviderVersionExists() {
  const res = await fetch(
    `https://registry.terraform.io/v2/providers/${FQ_PROVIDER_NAME}/provider-versions`
  );
  const body = await res.json();

  const currentVersion = await getCurrentProviderVersion();

  const availableVersions = body.data.map((it) => it.attributes.version);
  const versionsMatching = availableVersions.filter((v) =>
    versionMatchesConstraint(v, CONSTRAINT)
  );
  if (versionsMatching.length <= 0) {
    throw new Error(
      `Unexpected Error: Found no matching versions for constraint ${CONSTRAINT} in [${availableVersions.join(
        ", "
      )}]`
    );
  }

  const versionsGreaterThanCurrent = versionsMatching.filter((v) =>
    semver.gt(v, currentVersion)
  );
  if (versionsGreaterThanCurrent.length > 0) {
    console.log(
      `One or more matching versions (${CONSTRAINT}) are greater than the current version (${currentVersion}): [${versionsGreaterThanCurrent.join(
        ", "
      )}]`
    );
    return true;
  } else {
    console.log(
      `Found no matching versions (${CONSTRAINT}) greater than the current version (${currentVersion}). Matching versions: [${versionsMatching.join(
        ", "
      )}]`
    );
  }
  return false;
}

// e.g. cdktf 0.12.x -> 0.13.x but not 0.12.y -> 0.12.z
async function cdktfVersionMajorChanged() {
  throw new Error("todo implement");
}

async function getCurrentProviderVersion() {
  const json = require("../src/version.json");
  return json[`registry.terraform.io/${FQ_PROVIDER_NAME.toLowerCase()}`];
}

// SEE NOTICE AT THE TOP WHY THIS IS INLINED CURRENTLY
// copied from https://github.com/hashicorp/terraform-cdk/blob/b23fc173715e90c0a5b8c8633d9ec7f71edf9ed4/packages/cdktf-cli/lib/dependencies/version-constraints.ts
// and converted to JavaScript

// constraints can be prefixed with "~>", ">", "<", "=", ">=", "<=" or "!="
// no prefix means "="
function parseConstraint(constraint) {
  const cleaned = constraint.trim();

  const operator = cleaned.match(/(~>|>=|<=|>|<|=|!=)/)?.[0] || "=";
  const version = cleaned.replace(operator, "").trim();

  return {
    operator,
    version,
  };
}

function versionMatchesConstraint(version, constraint) {
  // https://www.terraform.io/language/expressions/version-constraints
  // version can contain multiple constraints split by ","

  const constraints = constraint.split(",");
  version = semver.coerce(version)?.version ?? version;

  // each constraint needs to be satisfied
  return constraints.every((c) => {
    const parsed = parseConstraint(c);

    const cleanedParsedVersion =
      semver.coerce(parsed.version)?.version ?? parsed.version;

    switch (parsed.operator) {
      case "=":
        return version === cleanedParsedVersion;
      case "!=":
        return version !== cleanedParsedVersion;
      case "~>": {
        // allows rightmost version component to increment

        // ~>2.0 which allows 2.1 and 2.1.1 needs special handling as
        // npm semver handles "~" differently for ~2.0 than for ~2 or ~2.1.0
        // So we need to use "^" (e.g. ^2.0) for this case
        // see: https://github.com/npm/node-semver/issues/11
        const allowMinorAndPatchOnly = parsed.version.split(".").length === 2;

        const range = allowMinorAndPatchOnly
          ? `^${parsed.version}`
          : `~${parsed.version}`;

        return semver.satisfies(version, range);
      }
      case ">=":
        return semver.gte(version, cleanedParsedVersion);
      case "<=":
        return semver.lte(version, cleanedParsedVersion);
      case ">":
        return semver.gt(version, cleanedParsedVersion);
      case "<":
        return semver.lt(version, cleanedParsedVersion);
      default:
        throw Errors.External(
          `Unknown constraint operator: ${parsed.operator} in version constraint ${constraint}`
        );
    }
  });
}
