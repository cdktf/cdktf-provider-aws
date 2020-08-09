// https://www.terraform.io/docs/providers/aws/r/key_pair.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "fingerprint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_name_prefix": {
        "type": "string",
        "optional": true
      },
      "key_pair_id": {
        "type": "string",
        "computed": true
      },
      "public_key": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KeyPairConfig extends TerraformMetaArguments {
  readonly keyName?: string;
  readonly keyNamePrefix?: string;
  readonly publicKey: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class KeyPair extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KeyPairConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyName = config.keyName;
    this._keyNamePrefix = config.keyNamePrefix;
    this._publicKey = config.publicKey;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string;
  public get keyName() {
    return this._keyName ?? this.getStringAttribute('key_name');
  }
  public set keyName(value: string | undefined) {
    this._keyName = value;
  }

  // key_name_prefix - computed: false, optional: true, required: false
  private _keyNamePrefix?: string;
  public get keyNamePrefix() {
    return this._keyNamePrefix;
  }
  public set keyNamePrefix(value: string | undefined) {
    this._keyNamePrefix = value;
  }

  // key_pair_id - computed: true, optional: false, required: true
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey: string;
  public get publicKey() {
    return this._publicKey;
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_name: this._keyName,
      key_name_prefix: this._keyNamePrefix,
      public_key: this._publicKey,
      tags: this._tags,
    };
  }
}
