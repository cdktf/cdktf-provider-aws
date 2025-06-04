/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");

const project = new CdktfProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "aws@~> 5.0",
  cdktfVersion: "^0.21.0",
  constructsVersion: "^10.4.2",
  minNodeVersion: "20.9.0",
  typescriptVersion: "~5.7.0", // JSII and TS should always use the same major/minor version range
  jsiiVersion: "~5.7.0", // JSII and TS should always use the same major/minor version range
  devDeps: ["@cdktf/provider-project@^0.7.0"],
  isDeprecated: false,
});

project.synth();
