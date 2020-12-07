// https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCiphertextConfig extends cdktf.TerraformMetaArguments {
  readonly context?: { [key: string]: string };
  readonly keyId: string;
  readonly plaintext: string;
}

// Resource

export class KmsCiphertext extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsCiphertextConfig) {
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
  private _context?: { [key: string]: string };
  public get context() {
    return this.interpolationForAttribute('context') as any;
  }
  public set context(value: { [key: string]: string } ) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId
  }

  // plaintext - computed: false, optional: false, required: true
  private _plaintext: string;
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext
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
