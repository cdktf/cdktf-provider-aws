// https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}
  */
  readonly blockOverrideDnsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}
  */
  readonly blockOverrideDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}
  */
  readonly blockOverrideTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}
  */
  readonly blockResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}
  */
  readonly firewallDomainListId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}
  */
  readonly firewallRuleGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}
  */
  readonly priority: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule}
*/
export class Route53ResolverFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_resolver_firewall_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._blockOverrideDnsType = config.blockOverrideDnsType;
    this._blockOverrideDomain = config.blockOverrideDomain;
    this._blockOverrideTtl = config.blockOverrideTtl;
    this._blockResponse = config.blockResponse;
    this._firewallDomainListId = config.firewallDomainListId;
    this._firewallRuleGroupId = config.firewallRuleGroupId;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // block_override_dns_type - computed: false, optional: true, required: false
  private _blockOverrideDnsType?: string; 
  public get blockOverrideDnsType() {
    return this.getStringAttribute('block_override_dns_type');
  }
  public set blockOverrideDnsType(value: string) {
    this._blockOverrideDnsType = value;
  }
  public resetBlockOverrideDnsType() {
    this._blockOverrideDnsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOverrideDnsTypeInput() {
    return this._blockOverrideDnsType;
  }

  // block_override_domain - computed: false, optional: true, required: false
  private _blockOverrideDomain?: string; 
  public get blockOverrideDomain() {
    return this.getStringAttribute('block_override_domain');
  }
  public set blockOverrideDomain(value: string) {
    this._blockOverrideDomain = value;
  }
  public resetBlockOverrideDomain() {
    this._blockOverrideDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOverrideDomainInput() {
    return this._blockOverrideDomain;
  }

  // block_override_ttl - computed: false, optional: true, required: false
  private _blockOverrideTtl?: number; 
  public get blockOverrideTtl() {
    return this.getNumberAttribute('block_override_ttl');
  }
  public set blockOverrideTtl(value: number) {
    this._blockOverrideTtl = value;
  }
  public resetBlockOverrideTtl() {
    this._blockOverrideTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOverrideTtlInput() {
    return this._blockOverrideTtl;
  }

  // block_response - computed: false, optional: true, required: false
  private _blockResponse?: string; 
  public get blockResponse() {
    return this.getStringAttribute('block_response');
  }
  public set blockResponse(value: string) {
    this._blockResponse = value;
  }
  public resetBlockResponse() {
    this._blockResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockResponseInput() {
    return this._blockResponse;
  }

  // firewall_domain_list_id - computed: false, optional: false, required: true
  private _firewallDomainListId?: string; 
  public get firewallDomainListId() {
    return this.getStringAttribute('firewall_domain_list_id');
  }
  public set firewallDomainListId(value: string) {
    this._firewallDomainListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDomainListIdInput() {
    return this._firewallDomainListId;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      block_override_dns_type: cdktf.stringToTerraform(this._blockOverrideDnsType),
      block_override_domain: cdktf.stringToTerraform(this._blockOverrideDomain),
      block_override_ttl: cdktf.numberToTerraform(this._blockOverrideTtl),
      block_response: cdktf.stringToTerraform(this._blockResponse),
      firewall_domain_list_id: cdktf.stringToTerraform(this._firewallDomainListId),
      firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
    };
  }
}
