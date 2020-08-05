# Terraform CDK AWS Provider

This repo builds and publishes the Terraform AWS Provider bindings for [cdktf](https://cdk.tf).

Current build targets are:

- [npm]()
- [Pypi]()

## Versioning

This project is explicitly not tracking the Terraform AWS Provider version 1:1. In fact, it always tracks `latest` of `~> 2.0` with every release. If there scenarios where you explicitly have to pin your provider version, you can do so by generating the [provider constructs manually]().

These are the upstream dependencies:

- [Terraform CDK](https://cdk.tf)
- [Terraform AWS Provider](https://cdk.tf/provider/aws-native)
- [Terraform Engine](https://cdk.tf/terraform)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped. While the Terraform Engine and the Terraform AWS Provider are relatively stable, the Terraform CDK is in an early stage. Therefore, it's likely that there will be breaking changes.

## Features / Issues / Bugs

Please report bugs and issues to the [terraform cdk](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

## projen

This is mostly based on [projen](https://github.com/eladb/projen), which takes care of generating the entire repository.

## cdktf-provider-project based on projen

There's a custom [project builder](https://github.com/skorfmann/cdktf-provider-project) which encapsulate the common settings for all `cdktf` providers.

## provider version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js)
