// https://www.terraform.io/docs/providers/aws/r/default_security_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  readonly egress?: DefaultSecurityGroupEgress[];
  readonly ingress?: DefaultSecurityGroupIngress[];
  readonly revokeRulesOnDelete?: boolean;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** timeouts block */
  readonly timeouts?: DefaultSecurityGroupTimeouts;
}
export interface DefaultSecurityGroupEgress {
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

function defaultSecurityGroupEgressToTerraform(struct?: DefaultSecurityGroupEgress): any {
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

export interface DefaultSecurityGroupIngress {
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

function defaultSecurityGroupIngressToTerraform(struct?: DefaultSecurityGroupIngress): any {
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

export interface DefaultSecurityGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function defaultSecurityGroupTimeoutsToTerraform(struct?: DefaultSecurityGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class DefaultSecurityGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultSecurityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_default_security_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._egress = config.egress;
    this._ingress = config.ingress;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: DefaultSecurityGroupEgress[];
  public get egress() {
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: DefaultSecurityGroupEgress[] ) {
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

  // ingress - computed: false, optional: true, required: false
  private _ingress?: DefaultSecurityGroupIngress[];
  public get ingress() {
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: DefaultSecurityGroupIngress[] ) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
  private _timeouts?: DefaultSecurityGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DefaultSecurityGroupTimeouts ) {
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
      egress: cdktf.listMapper(defaultSecurityGroupEgressToTerraform)(this._egress),
      ingress: cdktf.listMapper(defaultSecurityGroupIngressToTerraform)(this._ingress),
      revoke_rules_on_delete: cdktf.booleanToTerraform(this._revokeRulesOnDelete),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: defaultSecurityGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
