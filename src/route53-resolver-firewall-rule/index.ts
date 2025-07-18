/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}
  */
  readonly blockOverrideDnsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}
  */
  readonly blockOverrideDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}
  */
  readonly blockOverrideTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}
  */
  readonly blockResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}
  */
  readonly firewallDomainListId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}
  */
  readonly firewallDomainRedirectionAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}
  */
  readonly firewallRuleGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}
  */
  readonly qType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#region Route53ResolverFirewallRule#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule}
*/
export class Route53ResolverFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_resolver_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53ResolverFirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53ResolverFirewallRule to import
  * @param importFromId The id of the existing Route53ResolverFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53ResolverFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_resolver_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule} Resource
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
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
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
    this._firewallDomainRedirectionAction = config.firewallDomainRedirectionAction;
    this._firewallRuleGroupId = config.firewallRuleGroupId;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._qType = config.qType;
    this._region = config.region;
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

  // firewall_domain_redirection_action - computed: false, optional: true, required: false
  private _firewallDomainRedirectionAction?: string; 
  public get firewallDomainRedirectionAction() {
    return this.getStringAttribute('firewall_domain_redirection_action');
  }
  public set firewallDomainRedirectionAction(value: string) {
    this._firewallDomainRedirectionAction = value;
  }
  public resetFirewallDomainRedirectionAction() {
    this._firewallDomainRedirectionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallDomainRedirectionActionInput() {
    return this._firewallDomainRedirectionAction;
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

  // q_type - computed: false, optional: true, required: false
  private _qType?: string; 
  public get qType() {
    return this.getStringAttribute('q_type');
  }
  public set qType(value: string) {
    this._qType = value;
  }
  public resetQType() {
    this._qType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qTypeInput() {
    return this._qType;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      firewall_domain_redirection_action: cdktf.stringToTerraform(this._firewallDomainRedirectionAction),
      firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      q_type: cdktf.stringToTerraform(this._qType),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_override_dns_type: {
        value: cdktf.stringToHclTerraform(this._blockOverrideDnsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_override_domain: {
        value: cdktf.stringToHclTerraform(this._blockOverrideDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_override_ttl: {
        value: cdktf.numberToHclTerraform(this._blockOverrideTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_response: {
        value: cdktf.stringToHclTerraform(this._blockResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_domain_list_id: {
        value: cdktf.stringToHclTerraform(this._firewallDomainListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_domain_redirection_action: {
        value: cdktf.stringToHclTerraform(this._firewallDomainRedirectionAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_rule_group_id: {
        value: cdktf.stringToHclTerraform(this._firewallRuleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      q_type: {
        value: cdktf.stringToHclTerraform(this._qType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
