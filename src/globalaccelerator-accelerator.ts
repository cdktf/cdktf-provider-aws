// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "hosted_zone_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address_type": {
        "type": "string",
        "optional": true
      },
      "ip_sets": {
        "type": [
          "list",
          [
            "object",
            {
              "ip_addresses": [
                "list",
                "string"
              ],
              "ip_family": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
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
    },
    "block_types": {
      "attributes": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "flow_logs_enabled": {
              "type": "bool",
              "optional": true
            },
            "flow_logs_s3_bucket": {
              "type": "string",
              "optional": true
            },
            "flow_logs_s3_prefix": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface GlobalacceleratorAcceleratorConfig extends TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly ipAddressType?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** attributes block */
  readonly attributes?: GlobalacceleratorAcceleratorAttributes[];
}
export class GlobalacceleratorAcceleratorIpSets extends ComplexComputedList {

  // ip_addresses - computed: true, optional: false, required: true
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ip_family - computed: true, optional: false, required: true
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
}
export interface GlobalacceleratorAcceleratorAttributes {
  readonly flowLogsEnabled?: boolean;
  readonly flowLogsS3Bucket?: string;
  readonly flowLogsS3Prefix?: string;
}

// Resource

export class GlobalacceleratorAccelerator extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_accelerator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._ipAddressType = config.ipAddressType;
    this._name = config.name;
    this._tags = config.tags;
    this._attributes = config.attributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string;
  public get ipAddressType() {
    return this._ipAddressType;
  }
  public set ipAddressType(value: string | undefined) {
    this._ipAddressType = value;
  }

  // ip_sets - computed: true, optional: false, required: true
  public ipSets(index: string) {
    return new GlobalacceleratorAcceleratorIpSets(this, 'ip_sets', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: GlobalacceleratorAcceleratorAttributes[];
  public get attributes() {
    return this._attributes;
  }
  public set attributes(value: GlobalacceleratorAcceleratorAttributes[] | undefined) {
    this._attributes = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: this._enabled,
      ip_address_type: this._ipAddressType,
      name: this._name,
      tags: this._tags,
      attributes: this._attributes,
    };
  }
}
