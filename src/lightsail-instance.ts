// https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html
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
      "availability_zone": {
        "type": "string",
        "required": true
      },
      "blueprint_id": {
        "type": "string",
        "required": true
      },
      "bundle_id": {
        "type": "string",
        "required": true
      },
      "cpu_count": {
        "type": "number",
        "computed": true
      },
      "created_at": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_address": {
        "type": "string",
        "computed": true
      },
      "is_static_ip": {
        "type": "bool",
        "computed": true
      },
      "key_pair_name": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "private_ip_address": {
        "type": "string",
        "computed": true
      },
      "public_ip_address": {
        "type": "string",
        "computed": true
      },
      "ram_size": {
        "type": "number",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "user_data": {
        "type": "string",
        "optional": true
      },
      "username": {
        "type": "string",
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

export interface LightsailInstanceConfig extends TerraformMetaArguments {
  readonly availabilityZone: string;
  readonly blueprintId: string;
  readonly bundleId: string;
  readonly keyPairName?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly userData?: string;
}

// Resource

export class LightsailInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LightsailInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._blueprintId = config.blueprintId;
    this._bundleId = config.bundleId;
    this._keyPairName = config.keyPairName;
    this._name = config.name;
    this._tags = config.tags;
    this._userData = config.userData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone: string;
  public get availabilityZone() {
    return this._availabilityZone;
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId: string;
  public get blueprintId() {
    return this._blueprintId;
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId: string;
  public get bundleId() {
    return this._bundleId;
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }

  // cpu_count - computed: true, optional: false, required: true
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // created_at - computed: true, optional: false, required: true
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_address - computed: true, optional: false, required: true
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // is_static_ip - computed: true, optional: false, required: true
  public get isStaticIp() {
    return this.getBooleanAttribute('is_static_ip');
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string;
  public get keyPairName() {
    return this._keyPairName;
  }
  public set keyPairName(value: string | undefined) {
    this._keyPairName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: true
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // ram_size - computed: true, optional: false, required: true
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this._userData;
  }
  public set userData(value: string | undefined) {
    this._userData = value;
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      blueprint_id: this._blueprintId,
      bundle_id: this._bundleId,
      key_pair_name: this._keyPairName,
      name: this._name,
      tags: this._tags,
      user_data: this._userData,
    };
  }
}
