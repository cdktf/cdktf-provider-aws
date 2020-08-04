const { CdktfProviderProject } = require('cdktf-provider');
const { PROJEN_VERSION } = require('projen')

const project = new CdktfProviderProject({
  name: "@skorfmann/cdktf-provider-aws",
  authorName: "Sebastian Korfmann",
  authorEmail: "sebastian@korfmann.net",
  repository: "https://github.com/skorfmann/cdktf-provider-aws.git",
  terraformProvider: "aws@~> 2.0",
  workflowBootstrapSteps: [{ run: `npm install cdktf-project && npx projen${PROJEN_VERSION}` }, { run: 'yarn install --frozen-lockfile' }]
});

project.synth();
