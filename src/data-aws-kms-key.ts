// https://www.terraform.io/docs/providers/aws/r/data_aws_kms_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsKmsKeyConfig extends TerraformMetaArguments {
  readonly grantTokens?: string[];
  readonly keyId: string;
}

// Resource

export class DataAwsKmsKey extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsKmsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._grantTokens = config.grantTokens;
    this._keyId = config.keyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: true
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // creation_date - computed: true, optional: false, required: true
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // customer_master_key_spec - computed: true, optional: false, required: true
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }

  // deletion_date - computed: true, optional: false, required: true
  public get deletionDate() {
    return this.getStringAttribute('deletion_date');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration_model - computed: true, optional: false, required: true
  public get expirationModel() {
    return this.getStringAttribute('expiration_model');
  }

  // grant_tokens - computed: false, optional: true, required: false
  private _grantTokens?: string[];
  public get grantTokens() {
    return this._grantTokens;
  }
  public set grantTokens(value: string[] | undefined) {
    this._grantTokens = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this._keyId;
  }
  public set keyId(value: string) {
    this._keyId = value;
  }

  // key_manager - computed: true, optional: false, required: true
  public get keyManager() {
    return this.getStringAttribute('key_manager');
  }

  // key_state - computed: true, optional: false, required: true
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_usage - computed: true, optional: false, required: true
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // origin - computed: true, optional: false, required: true
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // valid_to - computed: true, optional: false, required: true
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_tokens: this._grantTokens,
      key_id: this._keyId,
    };
  }
}
