// https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "encrypted_fingerprint": {
        "type": "string",
        "computed": true
      },
      "encrypted_private_key": {
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
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "pgp_key": {
        "type": "string",
        "optional": true
      },
      "private_key": {
        "type": "string",
        "computed": true
      },
      "public_key": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LightsailKeyPairConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly namePrefix?: string;
  readonly pgpKey?: string;
  readonly publicKey?: string;
}

// Resource

export class LightsailKeyPair extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LightsailKeyPairConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._pgpKey = config.pgpKey;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encrypted_fingerprint - computed: true, optional: false, required: true
  public get encryptedFingerprint() {
    return this.getStringAttribute('encrypted_fingerprint');
  }

  // encrypted_private_key - computed: true, optional: false, required: true
  public get encryptedPrivateKey() {
    return this.getStringAttribute('encrypted_private_key');
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

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string;
  public get pgpKey() {
    return this._pgpKey;
  }
  public set pgpKey(value: string | undefined) {
    this._pgpKey = value;
  }

  // private_key - computed: true, optional: false, required: true
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string;
  public get publicKey() {
    return this._publicKey ?? this.getStringAttribute('public_key');
  }
  public set publicKey(value: string | undefined) {
    this._publicKey = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      name_prefix: this._namePrefix,
      pgp_key: this._pgpKey,
      public_key: this._publicKey,
    };
  }
}
