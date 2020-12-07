// https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontPublicKeyConfig extends cdktf.TerraformMetaArguments {
  readonly comment?: string;
  readonly encodedKey: string;
  readonly name?: string;
  readonly namePrefix?: string;
}

// Resource

export class CloudfrontPublicKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudfrontPublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_public_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._encodedKey = config.encodedKey;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string ) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // encoded_key - computed: false, optional: false, required: true
  private _encodedKey: string;
  public get encodedKey() {
    return this.getStringAttribute('encoded_key');
  }
  public set encodedKey(value: string) {
    this._encodedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedKeyInput() {
    return this._encodedKey
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
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
    return this._namePrefix
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      encoded_key: cdktf.stringToTerraform(this._encodedKey),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
    };
  }
}
