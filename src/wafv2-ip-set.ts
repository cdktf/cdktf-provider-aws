// https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "addresses": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address_version": {
        "type": "string",
        "required": true
      },
      "lock_token": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "scope": {
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

export interface Wafv2IpSetConfig extends TerraformMetaArguments {
  readonly addresses?: string[];
  readonly description?: string;
  readonly ipAddressVersion: string;
  readonly name: string;
  readonly scope: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Wafv2IpSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2IpSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_ip_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addresses = config.addresses;
    this._description = config.description;
    this._ipAddressVersion = config.ipAddressVersion;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[];
  public get addresses() {
    return this._addresses;
  }
  public set addresses(value: string[] | undefined) {
    this._addresses = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address_version - computed: false, optional: false, required: true
  private _ipAddressVersion: string;
  public get ipAddressVersion() {
    return this._ipAddressVersion;
  }
  public set ipAddressVersion(value: string) {
    this._ipAddressVersion = value;
  }

  // lock_token - computed: true, optional: false, required: true
  public get lockToken() {
    return this.getStringAttribute('lock_token');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
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
      addresses: this._addresses,
      description: this._description,
      ip_address_version: this._ipAddressVersion,
      name: this._name,
      scope: this._scope,
      tags: this._tags,
    };
  }
}
