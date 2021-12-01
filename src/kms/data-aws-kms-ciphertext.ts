// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export interface DataAwsKmsCiphertextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html#context DataAwsKmsCiphertext#context}
  */
  readonly context?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html#key_id DataAwsKmsCiphertext#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html#plaintext DataAwsKmsCiphertext#plaintext}
  */
  readonly plaintext: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html aws_kms_ciphertext}
*/
export class DataAwsKmsCiphertext extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kms_ciphertext";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html aws_kms_ciphertext} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKmsCiphertextConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsKmsCiphertextConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_ciphertext',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._context = config.context;
    this._keyId = config.keyId;
    this._plaintext = config.plaintext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphertext_blob - computed: true, optional: false, required: false
  public get ciphertextBlob() {
    return this.getStringAttribute('ciphertext_blob');
  }

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string } | cdktf.IResolvable; 
  public get context() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('context') as any;
  }
  public set context(value: { [key: string]: string } | cdktf.IResolvable) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext?: string; 
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.hashMapper(cdktf.anyToTerraform)(this._context),
      key_id: cdktf.stringToTerraform(this._keyId),
      plaintext: cdktf.stringToTerraform(this._plaintext),
    };
  }
}
