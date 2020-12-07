// https://www.terraform.io/docs/providers/aws/r/security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupConfig extends cdktf.TerraformMetaArguments {
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

function securityGroupEgressToTerraform(struct?: SecurityGroupEgress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
    description: cdktf.stringToTerraform(struct!.description),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
    prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    self: cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
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

function securityGroupIngressToTerraform(struct?: SecurityGroupIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
    description: cdktf.stringToTerraform(struct!.description),
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
    prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    self: cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface SecurityGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function securityGroupTimeoutsToTerraform(struct?: SecurityGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class SecurityGroup extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // egress - computed: true, optional: true, required: false
  private _egress?: SecurityGroupEgress[]
  public get egress(): SecurityGroupEgress[] {
    return this.interpolationForAttribute('egress') as any; // Getting the computed value is not yet implemented
  }
  public set egress(value: SecurityGroupEgress[]) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress?: SecurityGroupIngress[]
  public get ingress(): SecurityGroupIngress[] {
    return this.interpolationForAttribute('ingress') as any; // Getting the computed value is not yet implemented
  }
  public set ingress(value: SecurityGroupIngress[]) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // revoke_rules_on_delete - computed: false, optional: true, required: false
  private _revokeRulesOnDelete?: boolean;
  public get revokeRulesOnDelete() {
    return this.getBooleanAttribute('revoke_rules_on_delete');
  }
  public set revokeRulesOnDelete(value: boolean ) {
    this._revokeRulesOnDelete = value;
  }
  public resetRevokeRulesOnDelete() {
    this._revokeRulesOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeRulesOnDeleteInput() {
    return this._revokeRulesOnDelete
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      egress: cdktf.listMapper(securityGroupEgressToTerraform)(this._egress),
      ingress: cdktf.listMapper(securityGroupIngressToTerraform)(this._ingress),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: securityGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
