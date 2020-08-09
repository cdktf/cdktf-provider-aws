// https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
// generated from terraform resource schema

/*
{
  "version": 2,
  "block": {
    "attributes": {
      "cidr_blocks": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "from_port": {
        "type": "number",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_cidr_blocks": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "prefix_list_ids": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "security_group_id": {
        "type": "string",
        "required": true
      },
      "self": {
        "type": "bool",
        "optional": true
      },
      "source_security_group_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "to_port": {
        "type": "number",
        "required": true
      },
      "type": {
        "type": "string",
        "description": "Type of rule, ingress (inbound) or egress (outbound).",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecurityGroupRuleConfig extends TerraformMetaArguments {
  readonly cidrBlocks?: string[];
  readonly description?: string;
  readonly fromPort: number;
  readonly ipv6CidrBlocks?: string[];
  readonly prefixListIds?: string[];
  readonly protocol: string;
  readonly securityGroupId: string;
  readonly selfAttribute?: boolean;
  readonly sourceSecurityGroupId?: string;
  readonly toPort: number;
  /** Type of rule, ingress (inbound) or egress (outbound). */
  readonly type: string;
}

// Resource

export class SecurityGroupRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_security_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidrBlocks = config.cidrBlocks;
    this._description = config.description;
    this._fromPort = config.fromPort;
    this._ipv6CidrBlocks = config.ipv6CidrBlocks;
    this._prefixListIds = config.prefixListIds;
    this._protocol = config.protocol;
    this._securityGroupId = config.securityGroupId;
    this._self = config.selfAttribute;
    this._sourceSecurityGroupId = config.sourceSecurityGroupId;
    this._toPort = config.toPort;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: string[];
  public get cidrBlocks() {
    return this._cidrBlocks;
  }
  public set cidrBlocks(value: string[] | undefined) {
    this._cidrBlocks = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort: number;
  public get fromPort() {
    return this._fromPort;
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_cidr_blocks - computed: false, optional: true, required: false
  private _ipv6CidrBlocks?: string[];
  public get ipv6CidrBlocks() {
    return this._ipv6CidrBlocks;
  }
  public set ipv6CidrBlocks(value: string[] | undefined) {
    this._ipv6CidrBlocks = value;
  }

  // prefix_list_ids - computed: false, optional: true, required: false
  private _prefixListIds?: string[];
  public get prefixListIds() {
    return this._prefixListIds;
  }
  public set prefixListIds(value: string[] | undefined) {
    this._prefixListIds = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId: string;
  public get securityGroupId() {
    return this._securityGroupId;
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }

  // self - computed: false, optional: true, required: false
  private _self?: boolean;
  public get selfAttribute() {
    return this._self;
  }
  public set selfAttribute(value: boolean | undefined) {
    this._self = value;
  }

  // source_security_group_id - computed: true, optional: true, required: false
  private _sourceSecurityGroupId?: string;
  public get sourceSecurityGroupId() {
    return this._sourceSecurityGroupId ?? this.getStringAttribute('source_security_group_id');
  }
  public set sourceSecurityGroupId(value: string | undefined) {
    this._sourceSecurityGroupId = value;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort: number;
  public get toPort() {
    return this._toPort;
  }
  public set toPort(value: number) {
    this._toPort = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_blocks: this._cidrBlocks,
      description: this._description,
      from_port: this._fromPort,
      ipv6_cidr_blocks: this._ipv6CidrBlocks,
      prefix_list_ids: this._prefixListIds,
      protocol: this._protocol,
      security_group_id: this._securityGroupId,
      self: this._self,
      source_security_group_id: this._sourceSecurityGroupId,
      to_port: this._toPort,
      type: this._type,
    };
  }
}
