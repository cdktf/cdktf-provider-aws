// https://www.terraform.io/docs/providers/aws/r/default_network_acl.html
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
      "default_network_acl_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "egress": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "action": {
              "type": "string",
              "required": true
            },
            "cidr_block": {
              "type": "string",
              "optional": true
            },
            "from_port": {
              "type": "number",
              "required": true
            },
            "icmp_code": {
              "type": "number",
              "optional": true
            },
            "icmp_type": {
              "type": "number",
              "optional": true
            },
            "ipv6_cidr_block": {
              "type": "string",
              "optional": true
            },
            "protocol": {
              "type": "string",
              "required": true
            },
            "rule_no": {
              "type": "number",
              "required": true
            },
            "to_port": {
              "type": "number",
              "required": true
            }
          }
        }
      },
      "ingress": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "action": {
              "type": "string",
              "required": true
            },
            "cidr_block": {
              "type": "string",
              "optional": true
            },
            "from_port": {
              "type": "number",
              "required": true
            },
            "icmp_code": {
              "type": "number",
              "optional": true
            },
            "icmp_type": {
              "type": "number",
              "optional": true
            },
            "ipv6_cidr_block": {
              "type": "string",
              "optional": true
            },
            "protocol": {
              "type": "string",
              "required": true
            },
            "rule_no": {
              "type": "number",
              "required": true
            },
            "to_port": {
              "type": "number",
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

export interface DefaultNetworkAclConfig extends TerraformMetaArguments {
  readonly defaultNetworkAclId: string;
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** egress block */
  readonly egress?: DefaultNetworkAclEgress[];
  /** ingress block */
  readonly ingress?: DefaultNetworkAclIngress[];
}
export interface DefaultNetworkAclEgress {
  readonly action: string;
  readonly cidrBlock?: string;
  readonly fromPort: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol: string;
  readonly ruleNo: number;
  readonly toPort: number;
}
export interface DefaultNetworkAclIngress {
  readonly action: string;
  readonly cidrBlock?: string;
  readonly fromPort: number;
  readonly icmpCode?: number;
  readonly icmpType?: number;
  readonly ipv6CidrBlock?: string;
  readonly protocol: string;
  readonly ruleNo: number;
  readonly toPort: number;
}

// Resource

export class DefaultNetworkAcl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultNetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultNetworkAclId = config.defaultNetworkAclId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._egress = config.egress;
    this._ingress = config.ingress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_network_acl_id - computed: false, optional: false, required: true
  private _defaultNetworkAclId: string;
  public get defaultNetworkAclId() {
    return this._defaultNetworkAclId;
  }
  public set defaultNetworkAclId(value: string) {
    this._defaultNetworkAclId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: DefaultNetworkAclEgress[];
  public get egress() {
    return this._egress;
  }
  public set egress(value: DefaultNetworkAclEgress[] | undefined) {
    this._egress = value;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: DefaultNetworkAclIngress[];
  public get ingress() {
    return this._ingress;
  }
  public set ingress(value: DefaultNetworkAclIngress[] | undefined) {
    this._ingress = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_network_acl_id: this._defaultNetworkAclId,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      egress: this._egress,
      ingress: this._ingress,
    };
  }
}
