// https://www.terraform.io/docs/providers/aws/r/data_aws_secretsmanager_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
}
export class DataAwsSecretsmanagerSecretRotationRules extends cdktf.ComplexComputedList {

  // automatically_after_days - computed: true, optional: false, required: false
  public get automaticallyAfterDays() {
    return this.getNumberAttribute('automatically_after_days');
  }
}

// Resource

export class DataAwsSecretsmanagerSecret extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
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
    return new DataAwsSecretsmanagerSecretRotationRules(this, 'rotation_rules', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
