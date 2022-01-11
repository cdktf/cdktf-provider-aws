// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lightsail
*/
export interface LightsailKeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair#name LightsailKeyPair#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair#name_prefix LightsailKeyPair#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair#pgp_key LightsailKeyPair#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair#public_key LightsailKeyPair#public_key}
  */
  readonly publicKey?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair aws_lightsail_key_pair}
*/
export class LightsailKeyPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lightsail_key_pair";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair aws_lightsail_key_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailKeyPairConfig = {}
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encrypted_fingerprint - computed: true, optional: false, required: false
  public get encryptedFingerprint() {
    return this.getStringAttribute('encrypted_fingerprint');
  }

  // encrypted_private_key - computed: true, optional: false, required: false
  public get encryptedPrivateKey() {
    return this.getStringAttribute('encrypted_private_key');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string; 
  public get pgpKey() {
    return this.getStringAttribute('pgp_key');
  }
  public set pgpKey(value: string) {
    this._pgpKey = value;
  }
  public resetPgpKey() {
    this._pgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeyInput() {
    return this._pgpKey;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
    };
  }
}
