// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}
  */
  readonly firewallRuleGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}
  */
  readonly mutationProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#name Route53ResolverFirewallRuleGroupAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#priority Route53ResolverFirewallRuleGroupAssociation#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags Route53ResolverFirewallRuleGroupAssociation#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association}
*/
export class Route53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_resolver_firewall_rule_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverFirewallRuleGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_firewall_rule_group_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firewallRuleGroupId = config.firewallRuleGroupId;
    this._mutationProtection = config.mutationProtection;
    this._name = config.name;
    this._priority = config.priority;
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

  // firewall_rule_group_id - computed: false, optional: false, required: true
  private _firewallRuleGroupId?: string; 
  public get firewallRuleGroupId() {
    return this.getStringAttribute('firewall_rule_group_id');
  }
  public set firewallRuleGroupId(value: string) {
    this._firewallRuleGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleGroupIdInput() {
    return this._firewallRuleGroupId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mutation_protection - computed: true, optional: true, required: false
  private _mutationProtection?: string; 
  public get mutationProtection() {
    return this.getStringAttribute('mutation_protection');
  }
  public set mutationProtection(value: string) {
    this._mutationProtection = value;
  }
  public resetMutationProtection() {
    this._mutationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationProtectionInput() {
    return this._mutationProtection;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
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
      firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
      mutation_protection: cdktf.stringToTerraform(this._mutationProtection),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
