
// Note: This script is currently not handling pre-releases
const execSync = require("child_process").execSync;

(async function main() {
  console.log(
    "Determining whether changes warrant a new release. Non-zero exit code indicates that a release should be skipped"
  );

  // inspired by https://github.com/projen/projen/blob/08378c40d1453288053abcddce82475329b4506e/src/release/bump-version.ts#L281
  const prefixFilter = `v*`;
  const listGitTags = [
    "git",
    '-c "versionsort.suffix=-"', // makes sure pre-release versions are listed after the primary version
    "tag",
    '--sort="-version:refname"', // sort as versions and not lexicographically
    "--list",
    `"${prefixFilter}"`,
  ].join(" ");

  const stdout = execSync(listGitTags).toString();
  const tags = stdout.split("\n");

  if (tags.length > 0 && tags[0].trim() !== "") {
    const latestTag = tags[0];
    console.log(`Found latest tag ${latestTag}`);

    const previousPackageJsonGit = [
      "git",
      "show",
      `${latestTag}:package.json`,
    ].join(" ");
    const prevPackageJson = JSON.parse(
      execSync(previousPackageJsonGit).toString()
    );
    const currPackageJson = require("../package.json");

    const thingsToDiff = [
      {
        name: "Terraform provider version",
        previous: prevPackageJson.cdktf.provider.version,
        current: currPackageJson.cdktf.provider.version,
      },
      {
        name: "cdktf peer dependency",
        previous: prevPackageJson.peerDependencies.cdktf,
        current: currPackageJson.peerDependencies.cdktf,
      },
    ];

    thingsToDiff.forEach((x) =>
      console.log(
        `${x.name}: ${x.previous} => ${x.current} ${
          x.current !== x.previous ? "<<CHANGED" : ""
        }`
      )
    );
    const changes = thingsToDiff.some((x) => x.previous !== x.current);
    if (changes) {
      console.log(
        "Found one or more relevant changes, not skipping the release."
      );
    } else {
      console.log(
        "No changes in versions detected, skipping the release via exit code 1"
      );
      process.exit(1);
    }
  } else {
    console.log(
      "No git tags found, this seems to be the first release, hence not skipping it."
    );
  }
})();