// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export interface DataAwsKmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#grant_tokens DataAwsKmsKey#grant_tokens}
  */
  readonly grantTokens?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#key_id DataAwsKmsKey#key_id}
  */
  readonly keyId: string;
}
export class DataAwsKmsKeyMultiRegionConfigurationPrimaryKey extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export class DataAwsKmsKeyMultiRegionConfigurationReplicaKeys extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export class DataAwsKmsKeyMultiRegionConfiguration extends cdktf.ComplexComputedList {

  // multi_region_key_type - computed: true, optional: false, required: false
  public get multiRegionKeyType() {
    return this.getStringAttribute('multi_region_key_type');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('primary_key') as any;
  }

  // replica_keys - computed: true, optional: false, required: false
  public get replicaKeys() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('replica_keys') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key}
*/
export class DataAwsKmsKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kms_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKmsKeyConfig
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // customer_master_key_spec - computed: true, optional: false, required: false
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }

  // deletion_date - computed: true, optional: false, required: false
  public get deletionDate() {
    return this.getStringAttribute('deletion_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // expiration_model - computed: true, optional: false, required: false
  public get expirationModel() {
    return this.getStringAttribute('expiration_model');
  }

  // grant_tokens - computed: false, optional: true, required: false
  private _grantTokens?: string[]; 
  public get grantTokens() {
    return this.getListAttribute('grant_tokens');
  }
  public set grantTokens(value: string[]) {
    this._grantTokens = value;
  }
  public resetGrantTokens() {
    this._grantTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTokensInput() {
    return this._grantTokens;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_manager - computed: true, optional: false, required: false
  public get keyManager() {
    return this.getStringAttribute('key_manager');
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // multi_region - computed: true, optional: false, required: false
  public get multiRegion() {
    return this.getBooleanAttribute('multi_region') as any;
  }

  // multi_region_configuration - computed: true, optional: false, required: false
  public multiRegionConfiguration(index: string) {
    return new DataAwsKmsKeyMultiRegionConfiguration(this, 'multi_region_configuration', index);
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTokens),
      key_id: cdktf.stringToTerraform(this._keyId),
    };
  }
}
