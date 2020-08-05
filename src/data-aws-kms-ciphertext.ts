// https://www.terraform.io/docs/providers/aws/r/data_aws_kms_ciphertext.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ciphertext_blob": {
        "type": "string",
        "computed": true
      },
      "context": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_id": {
        "type": "string",
        "required": true
      },
      "plaintext": {
        "type": "string",
        "required": true,
        "sensitive": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsKmsCiphertextConfig extends TerraformMetaArguments {
  readonly context?: { [key: string]: string };
  readonly keyId: string;
  readonly plaintext: string;
}

// Resource

export class DataAwsKmsCiphertext extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // ciphertext_blob - computed: true, optional: false, required: true
  public get ciphertextBlob() {
    return this.getStringAttribute('ciphertext_blob');
  }

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string };
  public get context() {
    return this._context;
  }
  public set context(value: { [key: string]: string } | undefined) {
    this._context = value;
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

  // plaintext - computed: false, optional: false, required: true
  private _plaintext: string;
  public get plaintext() {
    return this._plaintext;
  }
  public set plaintext(value: string) {
    this._plaintext = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      context: this._context,
      key_id: this._keyId,
      plaintext: this._plaintext,
    };
  }
}
