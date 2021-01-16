// https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
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

export class SecurityGroupRule extends cdktf.TerraformResource {

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
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[] ) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort: number;
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_cidr_blocks - computed: false, optional: true, required: false
  private _ipv6CidrBlocks?: string[];
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6_cidr_blocks');
  }
  public set ipv6CidrBlocks(value: string[] ) {
    this._ipv6CidrBlocks = value;
  }
  public resetIpv6CidrBlocks() {
    this._ipv6CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlocksInput() {
    return this._ipv6CidrBlocks
  }

  // prefix_list_ids - computed: false, optional: true, required: false
  private _prefixListIds?: string[];
  public get prefixListIds() {
    return this.getListAttribute('prefix_list_ids');
  }
  public set prefixListIds(value: string[] ) {
    this._prefixListIds = value;
  }
  public resetPrefixListIds() {
    this._prefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId: string;
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId
  }

  // self - computed: false, optional: true, required: false
  private _self?: boolean;
  public get selfAttribute() {
    return this.getBooleanAttribute('self');
  }
  public set selfAttribute(value: boolean ) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self
  }

  // source_security_group_id - computed: true, optional: true, required: false
  private _sourceSecurityGroupId?: string;
  public get sourceSecurityGroupId() {
    return this.getStringAttribute('source_security_group_id');
  }
  public set sourceSecurityGroupId(value: string) {
    this._sourceSecurityGroupId = value;
  }
  public resetSourceSecurityGroupId() {
    this._sourceSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupIdInput() {
    return this._sourceSecurityGroupId
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort: number;
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrBlocks),
      description: cdktf.stringToTerraform(this._description),
      from_port: cdktf.numberToTerraform(this._fromPort),
      ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6CidrBlocks),
      prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._prefixListIds),
      protocol: cdktf.stringToTerraform(this._protocol),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      self: cdktf.booleanToTerraform(this._self),
      source_security_group_id: cdktf.stringToTerraform(this._sourceSecurityGroupId),
      to_port: cdktf.numberToTerraform(this._toPort),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
