const { CdktfProviderProject } = require('cdktf-provider');

const project = new CdktfProviderProject({
  name: "@skorfmann/cdktf-provider-aws",
  authorName: "Sebastian Korfmann",
  authorEmail: "sebastian@korfmann.net",
  repository: "https://github.com/skorfmann/cdktf-provider-aws.git",
  terraformProvider: "aws@~> 2.0"
});

project.synth();
