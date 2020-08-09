// https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "caller_reference": {
        "type": "string",
        "computed": true
      },
      "comment": {
        "type": "string",
        "optional": true
      },
      "encoded_key": {
        "type": "string",
        "required": true
      },
      "etag": {
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

export interface CloudfrontPublicKeyConfig extends TerraformMetaArguments {
  readonly comment?: string;
  readonly encodedKey: string;
  readonly name?: string;
  readonly namePrefix?: string;
}

// Resource

export class CloudfrontPublicKey extends TerraformResource {

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

  // caller_reference - computed: true, optional: false, required: true
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this._comment;
  }
  public set comment(value: string | undefined) {
    this._comment = value;
  }

  // encoded_key - computed: false, optional: false, required: true
  private _encodedKey: string;
  public get encodedKey() {
    return this._encodedKey;
  }
  public set encodedKey(value: string) {
    this._encodedKey = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix ?? this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: this._comment,
      encoded_key: this._encodedKey,
      name: this._name,
      name_prefix: this._namePrefix,
    };
  }
}
