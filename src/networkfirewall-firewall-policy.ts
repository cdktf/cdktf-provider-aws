// https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** firewall_policy block */
  readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
  readonly resourceArn: string;
}

function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
  readonly value: string;
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
  /** dimension block */
  readonly dimension: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct!.dimension),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
  /** publish_metric_action block */
  readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction[];
}

function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_metric_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform)(struct!.publishMetricAction),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
  readonly actionName: string;
  /** action_definition block */
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
  readonly priority: number;
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
  readonly statelessDefaultActions: string[];
  readonly statelessFragmentDefaultActions: string[];
  /** stateful_rule_group_reference block */
  readonly statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[];
  /** stateless_custom_action block */
  readonly statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[];
  /** stateless_rule_group_reference block */
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


// Resource

export class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      firewall_policy: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyToTerraform)(this._firewallPolicy),
    };
  }
}
