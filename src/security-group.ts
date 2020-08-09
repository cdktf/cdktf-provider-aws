// https://www.terraform.io/docs/providers/aws/r/security_group.html
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
      "description": {
        "type": "string",
        "optional": true
      },
      "egress": {
        "type": [
          "set",
          [
            "object",
            {
              "cidr_blocks": [
                "list",
                "string"
              ],
              "description": "string",
              "from_port": "number",
              "ipv6_cidr_blocks": [
                "list",
                "string"
              ],
              "prefix_list_ids": [
                "list",
                "string"
              ],
              "protocol": "string",
              "security_groups": [
                "set",
                "string"
              ],
              "self": "bool",
              "to_port": "number"
            }
          ]
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ingress": {
        "type": [
          "set",
          [
            "object",
            {
              "cidr_blocks": [
                "list",
                "string"
              ],
              "description": "string",
              "from_port": "number",
              "ipv6_cidr_blocks": [
                "list",
                "string"
              ],
              "prefix_list_ids": [
                "list",
                "string"
              ],
              "protocol": "string",
              "security_groups": [
                "set",
                "string"
              ],
              "self": "bool",
              "to_port": "number"
            }
          ]
        ],
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
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "revoke_rules_on_delete": {
        "type": "bool",
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
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
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

export interface SecurityGroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly egress?: SecurityGroupEgress[];
  readonly ingress?: SecurityGroupIngress[];
  readonly name?: string;
  readonly namePrefix?: string;
  readonly revokeRulesOnDelete?: boolean;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** timeouts block */
  readonly timeouts?: SecurityGroupTimeouts;
}
export interface SecurityGroupEgress {
  readonly cidrBlocks?: string[];
  readonly description?: string;
  readonly fromPort?: number;
  readonly ipv6CidrBlocks?: string[];
  readonly prefixListIds?: string[];
  readonly protocol?: string;
  readonly securityGroups?: string[];
  readonly selfAttribute?: boolean;
  readonly toPort?: number;
}
export interface SecurityGroupIngress {
  readonly cidrBlocks?: string[];
  readonly description?: string;
  readonly fromPort?: number;
  readonly ipv6CidrBlocks?: string[];
  readonly prefixListIds?: string[];
  readonly protocol?: string;
  readonly securityGroups?: string[];
  readonly selfAttribute?: boolean;
  readonly toPort?: number;
}
export interface SecurityGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class SecurityGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_security_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._egress = config.egress;
    this._ingress = config.ingress;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._revokeRulesOnDelete = config.revokeRulesOnDelete;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // egress - computed: true, optional: true, required: false
  private _egress?: SecurityGroupEgress[]
  public get egress(): SecurityGroupEgress[] | undefined {
    return this._egress; // Getting the computed value is not yet implemented
  }
  public set egress(value: SecurityGroupEgress[] | undefined) {
    this._egress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress?: SecurityGroupIngress[]
  public get ingress(): SecurityGroupIngress[] | undefined {
    return this._ingress; // Getting the computed value is not yet implemented
  }
  public set ingress(value: SecurityGroupIngress[] | undefined) {
    this._ingress = value;
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

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // revoke_rules_on_delete - computed: false, optional: true, required: false
  private _revokeRulesOnDelete?: boolean;
  public get revokeRulesOnDelete() {
    return this._revokeRulesOnDelete;
  }
  public set revokeRulesOnDelete(value: boolean | undefined) {
    this._revokeRulesOnDelete = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId ?? this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SecurityGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      egress: this._egress,
      ingress: this._ingress,
      name: this._name,
      name_prefix: this._namePrefix,
      revoke_rules_on_delete: this._revokeRulesOnDelete,
      tags: this._tags,
      vpc_id: this._vpcId,
      timeouts: this._timeouts,
    };
  }
}
