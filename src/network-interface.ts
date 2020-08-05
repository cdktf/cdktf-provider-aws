// https://www.terraform.io/docs/providers/aws/r/network_interface.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "mac_address": {
        "type": "string",
        "computed": true
      },
      "outpost_arn": {
        "type": "string",
        "computed": true
      },
      "private_dns_name": {
        "type": "string",
        "computed": true
      },
      "private_ip": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "private_ips": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "private_ips_count": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "security_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "source_dest_check": {
        "type": "bool",
        "optional": true
      },
      "subnet_id": {
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
      "attachment": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "attachment_id": {
              "type": "string",
              "computed": true
            },
            "device_index": {
              "type": "number",
              "required": true
            },
            "instance": {
              "type": "string",
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly privateIp?: string;
  readonly privateIps?: string[];
  readonly privateIpsCount?: number;
  readonly securityGroups?: string[];
  readonly sourceDestCheck?: boolean;
  readonly subnetId: string;
  readonly tags?: { [key: string]: string };
  /** attachment block */
  readonly attachment?: NetworkInterfaceAttachment[];
}
export interface NetworkInterfaceAttachment {
  readonly deviceIndex: number;
  readonly instance: string;
}

// Resource

export class NetworkInterface extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._privateIp = config.privateIp;
    this._privateIps = config.privateIps;
    this._privateIpsCount = config.privateIpsCount;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._attachment = config.attachment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mac_address - computed: true, optional: false, required: true
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // outpost_arn - computed: true, optional: false, required: true
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // private_dns_name - computed: true, optional: false, required: true
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string;
  public get privateIp() {
    return this._privateIp ?? this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string | undefined) {
    this._privateIp = value;
  }

  // private_ips - computed: true, optional: true, required: false
  private _privateIps?: string[];
  public get privateIps() {
    return this._privateIps ?? this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[] | undefined) {
    this._privateIps = value;
  }

  // private_ips_count - computed: true, optional: true, required: false
  private _privateIpsCount?: number;
  public get privateIpsCount() {
    return this._privateIpsCount ?? this.getNumberAttribute('private_ips_count');
  }
  public set privateIpsCount(value: number | undefined) {
    this._privateIpsCount = value;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[];
  public get securityGroups() {
    return this._securityGroups ?? this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean;
  public get sourceDestCheck() {
    return this._sourceDestCheck;
  }
  public set sourceDestCheck(value: boolean | undefined) {
    this._sourceDestCheck = value;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment?: NetworkInterfaceAttachment[];
  public get attachment() {
    return this._attachment;
  }
  public set attachment(value: NetworkInterfaceAttachment[] | undefined) {
    this._attachment = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      private_ip: this._privateIp,
      private_ips: this._privateIps,
      private_ips_count: this._privateIpsCount,
      security_groups: this._securityGroups,
      source_dest_check: this._sourceDestCheck,
      subnet_id: this._subnetId,
      tags: this._tags,
      attachment: this._attachment,
    };
  }
}
