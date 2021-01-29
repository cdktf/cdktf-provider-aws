const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: 'aws@~> 3.0',
  eslint: false,
});

project.synth();
