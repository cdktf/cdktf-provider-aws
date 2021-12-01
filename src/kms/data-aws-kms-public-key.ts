// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export interface DataAwsKmsPublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html#grant_tokens DataAwsKmsPublicKey#grant_tokens}
  */
  readonly grantTokens?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html#key_id DataAwsKmsPublicKey#key_id}
  */
  readonly keyId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key}
*/
export class DataAwsKmsPublicKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kms_public_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKmsPublicKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsKmsPublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_public_key',
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

  // customer_master_key_spec - computed: true, optional: false, required: false
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }

  // encryption_algorithms - computed: true, optional: false, required: false
  public get encryptionAlgorithms() {
    return this.getListAttribute('encryption_algorithms');
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

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // signing_algorithms - computed: true, optional: false, required: false
  public get signingAlgorithms() {
    return this.getListAttribute('signing_algorithms');
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
