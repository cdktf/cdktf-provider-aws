// https://www.terraform.io/docs/providers/aws/r/data_aws_kms_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsKmsAliasConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
}

// Resource

export class DataAwsKmsAlias extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsKmsAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_alias',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // target_key_arn - computed: true, optional: false, required: false
  public get targetKeyArn() {
    return this.getStringAttribute('target_key_arn');
  }

  // target_key_id - computed: true, optional: false, required: false
  public get targetKeyId() {
    return this.getStringAttribute('target_key_id');
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
