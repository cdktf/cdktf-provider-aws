const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "aws@~> 4.0",
  cdktfVersion: "^0.15.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.53.0",
  devDeps: ["@cdktf/provider-project@^0.2.95"],
});

project.synth();
