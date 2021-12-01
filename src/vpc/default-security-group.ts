// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DefaultSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#egress DefaultSecurityGroup#egress}
  */
  readonly egress?: DefaultSecurityGroupEgress[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ingress DefaultSecurityGroup#ingress}
  */
  readonly ingress?: DefaultSecurityGroupIngress[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}
  */
  readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags DefaultSecurityGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags_all DefaultSecurityGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#vpc_id DefaultSecurityGroup#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DefaultSecurityGroupEgress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
  */
  readonly prefixListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}
  */
  readonly selfAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}
  */
  readonly toPort?: number;
}

export function defaultSecurityGroupEgressToTerraform(struct?: DefaultSecurityGroupEgress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
    prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface DefaultSecurityGroupIngress {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}
  */
  readonly fromPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
  */
  readonly ipv6CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
  */
  readonly prefixListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}
  */
  readonly selfAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}
  */
  readonly toPort?: number;
}

export function defaultSecurityGroupIngressToTerraform(struct?: DefaultSecurityGroupIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: struct!.cidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrBlocks),
    description: struct!.description === undefined ? null : cdktf.stringToTerraform(struct!.description),
    from_port: struct!.fromPort === undefined ? null : cdktf.numberToTerraform(struct!.fromPort),
    ipv6_cidr_blocks: struct!.ipv6CidrBlocks === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipv6CidrBlocks),
    prefix_list_ids: struct!.prefixListIds === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefixListIds),
    protocol: struct!.protocol === undefined ? null : cdktf.stringToTerraform(struct!.protocol),
    security_groups: struct!.securityGroups === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    self: struct!.selfAttribute === undefined ? null : cdktf.booleanToTerraform(struct!.selfAttribute),
    to_port: struct!.toPort === undefined ? null : cdktf.numberToTerraform(struct!.toPort),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group}
*/
export class DefaultSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_default_security_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultSecurityGroupConfig = {}
  */
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
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
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

  // egress - computed: true, optional: true, required: false
  private _egress?: DefaultSecurityGroupEgress[]; 
  public get egress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: DefaultSecurityGroupEgress[]) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress?: DefaultSecurityGroupIngress[]; 
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: DefaultSecurityGroupIngress[]) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
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
  private _revokeRulesOnDelete?: boolean | cdktf.IResolvable; 
  public get revokeRulesOnDelete() {
    return this.getBooleanAttribute('revoke_rules_on_delete') as any;
  }
  public set revokeRulesOnDelete(value: boolean | cdktf.IResolvable) {
    this._revokeRulesOnDelete = value;
  }
  public resetRevokeRulesOnDelete() {
    this._revokeRulesOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeRulesOnDeleteInput() {
    return this._revokeRulesOnDelete;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
    return this._vpcId;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
