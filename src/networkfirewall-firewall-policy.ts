// https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#description NetworkfirewallFirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#name NetworkfirewallFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags NetworkfirewallFirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags_all NetworkfirewallFirewallPolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * firewall_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}
  */
  readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
  */
  readonly resourceArn: string;
}

function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#value NetworkfirewallFirewallPolicy#value}
  */
  readonly value: string;
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#dimension NetworkfirewallFirewallPolicy#dimension}
  */
  readonly dimension: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct!.dimension),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
  /**
  * publish_metric_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
  */
  readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction[];
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_metric_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform)(struct!.publishMetricAction),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_name NetworkfirewallFirewallPolicy#action_name}
  */
  readonly actionName: string;
  /**
  * action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_definition NetworkfirewallFirewallPolicy#action_definition}
  */
  readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition[];
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    action_definition: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform)(struct!.actionDefinition),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#priority NetworkfirewallFirewallPolicy#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
  */
  readonly resourceArn: string;
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}
  */
  readonly statelessDefaultActions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}
  */
  readonly statelessFragmentDefaultActions: string[];
  /**
  * stateful_rule_group_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateful_rule_group_reference NetworkfirewallFirewallPolicy#stateful_rule_group_reference}
  */
  readonly statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[];
  /**
  * stateless_custom_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_custom_action NetworkfirewallFirewallPolicy#stateless_custom_action}
  */
  readonly statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[];
  /**
  * stateless_rule_group_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_rule_group_reference NetworkfirewallFirewallPolicy#stateless_rule_group_reference}
  */
  readonly statelessRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[];
}

function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessDefaultActions),
    stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessFragmentDefaultActions),
    stateful_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform)(struct!.statefulRuleGroupReference),
    stateless_custom_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform)(struct!.statelessCustomAction),
    stateless_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform)(struct!.statelessRuleGroupReference),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy}
*/
export class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_networkfirewall_firewall_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._firewallPolicy = config.firewallPolicy;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
  public get firewallPolicy() {
    return this.interpolationForAttribute('firewall_policy') as any;
  }
  public set firewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy[]) {
    this._firewallPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      firewall_policy: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyToTerraform)(this._firewallPolicy),
    };
  }
}
