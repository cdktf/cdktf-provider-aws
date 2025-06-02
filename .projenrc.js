/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");

const typescriptVersion = "~5.4.0";
const project = new CdktfProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "aws@~> 5.0",
  cdktfVersion: "^0.20.0",
  constructsVersion: "^10.3.0",
  minNodeVersion: "18.12.0",
  typescriptVersion: "~5.7.0", // JSII and TS should always use the same major/minor version range
  jsiiVersion: "~5.7.0", // JSII and TS should always use the same major/minor version range
  devDeps: ["@cdktf/provider-project@^0.6.0"],
  isDeprecated: false,
});

project.synth();
