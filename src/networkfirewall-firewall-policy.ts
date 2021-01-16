// https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkfirewallFirewallPolicyConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** firewall_policy block */
  readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
  readonly resourceArn: string;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
  readonly value: string;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
  /** dimension block */
  readonly dimension: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
  /** publish_metric_action block */
  readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
  readonly actionName: string;
  /** action_definition block */
  readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
  readonly priority: number;
  readonly resourceArn: string;
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

// Resource

export class NetworkfirewallFirewallPolicy extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // update_token - computed: true, optional: false, required: true
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
  public get firewallPolicy() {
    return this._firewallPolicy;
  }
  public set firewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy[]) {
    this._firewallPolicy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      tags: this._tags,
      firewall_policy: this._firewallPolicy,
    };
  }
}
