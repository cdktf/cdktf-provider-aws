// https://www.terraform.io/docs/providers/aws/r/data_aws_lambda_code_signing_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsLambdaCodeSigningConfigConfig extends TerraformMetaArguments {
  readonly arn: string;
}
export class DataAwsLambdaCodeSigningConfigAllowedPublishers extends ComplexComputedList {

  // signing_profile_version_arns - computed: true, optional: false, required: true
  public get signingProfileVersionArns() {
    return this.getListAttribute('signing_profile_version_arns');
  }
}
export class DataAwsLambdaCodeSigningConfigPolicies extends ComplexComputedList {

  // untrusted_artifact_on_deployment - computed: true, optional: false, required: true
  public get untrustedArtifactOnDeployment() {
    return this.getStringAttribute('untrusted_artifact_on_deployment');
  }
}

// Resource

export class DataAwsLambdaCodeSigningConfig extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLambdaCodeSigningConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_code_signing_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_publishers - computed: true, optional: false, required: true
  public allowedPublishers(index: string) {
    return new DataAwsLambdaCodeSigningConfigAllowedPublishers(this, 'allowed_publishers', index);
  }

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
  }

  // config_id - computed: true, optional: false, required: true
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_modified - computed: true, optional: false, required: true
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // policies - computed: true, optional: false, required: true
  public policies(index: string) {
    return new DataAwsLambdaCodeSigningConfigPolicies(this, 'policies', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
    };
  }
}
