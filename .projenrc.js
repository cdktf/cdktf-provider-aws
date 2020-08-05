const { CdktfProviderProject } = require('cdktf-provider');

const project = new CdktfProviderProject({
  name: "@skorfmann/cdktf-provider-aws",
  description: "Prebuilt AWS Provider for Terraform CDK (cdktf)",
  keywords: ["cdktf", "terraform", "cdk", "aws", "provider"],
  authorName: "Sebastian Korfmann",
  authorEmail: "sebastian@korfmann.net",
  repository: "https://github.com/skorfmann/cdktf-provider-aws.git",
  terraformProvider: "aws@~> 2.0",
  python: {
    distName: 'skorfmann-cdktf-provider-aws',
    module: 'skorfmann_cdktf_provider_aws'
  }
});

project.synth();
