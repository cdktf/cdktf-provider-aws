// https://www.terraform.io/docs/providers/aws/r/data_aws_secretsmanager_secret_rotation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
  readonly secretId: string;
}
export class DataAwsSecretsmanagerSecretRotationRotationRules extends cdktf.ComplexComputedList {

  // automatically_after_days - computed: true, optional: false, required: false
  public get automaticallyAfterDays() {
    return this.getNumberAttribute('automatically_after_days');
  }
}

// Resource

export class DataAwsSecretsmanagerSecretRotation extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_rotation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._secretId = config.secretId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rotation_enabled - computed: true, optional: false, required: false
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }

  // rotation_lambda_arn - computed: true, optional: false, required: false
  public get rotationLambdaArn() {
    return this.getStringAttribute('rotation_lambda_arn');
  }

  // rotation_rules - computed: true, optional: false, required: false
  public rotationRules(index: string) {
    return new DataAwsSecretsmanagerSecretRotationRotationRules(this, 'rotation_rules', index);
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_id: cdktf.stringToTerraform(this._secretId),
    };
  }
}
