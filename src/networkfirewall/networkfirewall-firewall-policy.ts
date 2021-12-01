// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Network Firewall
*/
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
  readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
  */
  readonly resourceArn: string;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct!.dimension),
  }
}

export class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._dimension) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined) {
    if (value === undefined) {
      this._dimension = undefined;
    }
    else {
      this._dimension = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[]; 
  public get dimension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension') as any;
  }
  public set dimension(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[]) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
  /**
  * publish_metric_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
  */
  readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_metric_action: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}

export class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._publishMetricAction) {
      hasAnyValues = true;
      internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined) {
    if (value === undefined) {
      this._publishMetricAction.internalValue = undefined;
    }
    else {
      this._publishMetricAction.internalValue = value.publishMetricAction;
    }
  }

  // publish_metric_action - computed: false, optional: false, required: true
  private _publishMetricAction = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference(this as any, "publish_metric_action", true);
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
  public putPublishMetricAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction) {
    this._publishMetricAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMetricActionInput() {
    return this._publishMetricAction.internalValue;
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
  readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    action_definition: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct!.actionDefinition),
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

export function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyOutputReference | NetworkfirewallFirewallPolicyFirewallPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessDefaultActions),
    stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessFragmentDefaultActions),
    stateful_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform)(struct!.statefulRuleGroupReference),
    stateless_custom_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform)(struct!.statelessCustomAction),
    stateless_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform)(struct!.statelessRuleGroupReference),
  }
}

export class NetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._statelessDefaultActions) {
      hasAnyValues = true;
      internalValueResult.statelessDefaultActions = this._statelessDefaultActions;
    }
    if (this._statelessFragmentDefaultActions) {
      hasAnyValues = true;
      internalValueResult.statelessFragmentDefaultActions = this._statelessFragmentDefaultActions;
    }
    if (this._statefulRuleGroupReference) {
      hasAnyValues = true;
      internalValueResult.statefulRuleGroupReference = this._statefulRuleGroupReference;
    }
    if (this._statelessCustomAction) {
      hasAnyValues = true;
      internalValueResult.statelessCustomAction = this._statelessCustomAction;
    }
    if (this._statelessRuleGroupReference) {
      hasAnyValues = true;
      internalValueResult.statelessRuleGroupReference = this._statelessRuleGroupReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicy | undefined) {
    if (value === undefined) {
      this._statelessDefaultActions = undefined;
      this._statelessFragmentDefaultActions = undefined;
      this._statefulRuleGroupReference = undefined;
      this._statelessCustomAction = undefined;
      this._statelessRuleGroupReference = undefined;
    }
    else {
      this._statelessDefaultActions = value.statelessDefaultActions;
      this._statelessFragmentDefaultActions = value.statelessFragmentDefaultActions;
      this._statefulRuleGroupReference = value.statefulRuleGroupReference;
      this._statelessCustomAction = value.statelessCustomAction;
      this._statelessRuleGroupReference = value.statelessRuleGroupReference;
    }
  }

  // stateless_default_actions - computed: false, optional: false, required: true
  private _statelessDefaultActions?: string[]; 
  public get statelessDefaultActions() {
    return this.getListAttribute('stateless_default_actions');
  }
  public set statelessDefaultActions(value: string[]) {
    this._statelessDefaultActions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessDefaultActionsInput() {
    return this._statelessDefaultActions;
  }

  // stateless_fragment_default_actions - computed: false, optional: false, required: true
  private _statelessFragmentDefaultActions?: string[]; 
  public get statelessFragmentDefaultActions() {
    return this.getListAttribute('stateless_fragment_default_actions');
  }
  public set statelessFragmentDefaultActions(value: string[]) {
    this._statelessFragmentDefaultActions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessFragmentDefaultActionsInput() {
    return this._statelessFragmentDefaultActions;
  }

  // stateful_rule_group_reference - computed: false, optional: true, required: false
  private _statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[]; 
  public get statefulRuleGroupReference() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stateful_rule_group_reference') as any;
  }
  public set statefulRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[]) {
    this._statefulRuleGroupReference = value;
  }
  public resetStatefulRuleGroupReference() {
    this._statefulRuleGroupReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleGroupReferenceInput() {
    return this._statefulRuleGroupReference;
  }

  // stateless_custom_action - computed: false, optional: true, required: false
  private _statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[]; 
  public get statelessCustomAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stateless_custom_action') as any;
  }
  public set statelessCustomAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[]) {
    this._statelessCustomAction = value;
  }
  public resetStatelessCustomAction() {
    this._statelessCustomAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessCustomActionInput() {
    return this._statelessCustomAction;
  }

  // stateless_rule_group_reference - computed: false, optional: true, required: false
  private _statelessRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[]; 
  public get statelessRuleGroupReference() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stateless_rule_group_reference') as any;
  }
  public set statelessRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[]) {
    this._statelessRuleGroupReference = value;
  }
  public resetStatelessRuleGroupReference() {
    this._statelessRuleGroupReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRuleGroupReferenceInput() {
    return this._statelessRuleGroupReference;
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
    this._firewallPolicy.internalValue = config.firewallPolicy;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy = new NetworkfirewallFirewallPolicyFirewallPolicyOutputReference(this as any, "firewall_policy", true);
  public get firewallPolicy() {
    return this._firewallPolicy;
  }
  public putFirewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy) {
    this._firewallPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy.internalValue;
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
      firewall_policy: networkfirewallFirewallPolicyFirewallPolicyToTerraform(this._firewallPolicy.internalValue),
    };
  }
}
