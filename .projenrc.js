const { CdktfProviderProject } = require('@cdktf/provider-project');

const project = new CdktfProviderProject({
  terraformProvider: 'aws@~> 3.0',
  eslint: false,
});

project.synth();
