// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Network Firewall
*/
export namespace NetworkFirewall {
  export interface NetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#delete_protection NetworkfirewallFirewall#delete_protection}
    */
    readonly deleteProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#description NetworkfirewallFirewall#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}
    */
    readonly firewallPolicyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}
    */
    readonly firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#name NetworkfirewallFirewall#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}
    */
    readonly subnetChangeProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags NetworkfirewallFirewall#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags_all NetworkfirewallFirewall#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#vpc_id NetworkfirewallFirewall#vpc_id}
    */
    readonly vpcId: string;
    /**
    * subnet_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_mapping NetworkfirewallFirewall#subnet_mapping}
    */
    readonly subnetMapping: NetworkfirewallFirewallSubnetMapping[];
  }
  export class NetworkfirewallFirewallFirewallStatusSyncStatesAttachment extends cdktf.ComplexComputedList {

    // endpoint_id - computed: true, optional: false, required: false
    public get endpointId() {
      return this.getStringAttribute('endpoint_id');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
  }
  export class NetworkfirewallFirewallFirewallStatusSyncStates extends cdktf.ComplexComputedList {

    // attachment - computed: true, optional: false, required: false
    public get attachment() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('attachment') as any;
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
  }
  export class NetworkfirewallFirewallFirewallStatus extends cdktf.ComplexComputedList {

    // sync_states - computed: true, optional: false, required: false
    public get syncStates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('sync_states') as any;
    }
  }
  export interface NetworkfirewallFirewallSubnetMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_id NetworkfirewallFirewall#subnet_id}
    */
    readonly subnetId: string;
  }

  function networkfirewallFirewallSubnetMappingToTerraform(struct?: NetworkfirewallFirewallSubnetMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall}
  */
  export class NetworkfirewallFirewall extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_firewall";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_firewall',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deleteProtection = config.deleteProtection;
      this._description = config.description;
      this._firewallPolicyArn = config.firewallPolicyArn;
      this._firewallPolicyChangeProtection = config.firewallPolicyChangeProtection;
      this._name = config.name;
      this._subnetChangeProtection = config.subnetChangeProtection;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
      this._subnetMapping = config.subnetMapping;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // delete_protection - computed: false, optional: true, required: false
    private _deleteProtection?: boolean | cdktf.IResolvable | undefined; 
    public get deleteProtection() {
      return this.getBooleanAttribute('delete_protection') as any;
    }
    public set deleteProtection(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteProtection = value;
    }
    public resetDeleteProtection() {
      this._deleteProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteProtectionInput() {
      return this._deleteProtection
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // firewall_policy_arn - computed: false, optional: false, required: true
    private _firewallPolicyArn?: string; 
    public get firewallPolicyArn() {
      return this.getStringAttribute('firewall_policy_arn');
    }
    public set firewallPolicyArn(value: string) {
      this._firewallPolicyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallPolicyArnInput() {
      return this._firewallPolicyArn
    }

    // firewall_policy_change_protection - computed: false, optional: true, required: false
    private _firewallPolicyChangeProtection?: boolean | cdktf.IResolvable | undefined; 
    public get firewallPolicyChangeProtection() {
      return this.getBooleanAttribute('firewall_policy_change_protection') as any;
    }
    public set firewallPolicyChangeProtection(value: boolean | cdktf.IResolvable | undefined) {
      this._firewallPolicyChangeProtection = value;
    }
    public resetFirewallPolicyChangeProtection() {
      this._firewallPolicyChangeProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallPolicyChangeProtectionInput() {
      return this._firewallPolicyChangeProtection
    }

    // firewall_status - computed: true, optional: false, required: false
    public firewallStatus(index: string) {
      return new NetworkfirewallFirewallFirewallStatus(this, 'firewall_status', index);
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
      return this._name
    }

    // subnet_change_protection - computed: false, optional: true, required: false
    private _subnetChangeProtection?: boolean | cdktf.IResolvable | undefined; 
    public get subnetChangeProtection() {
      return this.getBooleanAttribute('subnet_change_protection') as any;
    }
    public set subnetChangeProtection(value: boolean | cdktf.IResolvable | undefined) {
      this._subnetChangeProtection = value;
    }
    public resetSubnetChangeProtection() {
      this._subnetChangeProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetChangeProtectionInput() {
      return this._subnetChangeProtection
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
      return this._vpcId
    }

    // subnet_mapping - computed: false, optional: false, required: true
    private _subnetMapping?: NetworkfirewallFirewallSubnetMapping[]; 
    public get subnetMapping() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('subnet_mapping') as any;
    }
    public set subnetMapping(value: NetworkfirewallFirewallSubnetMapping[]) {
      this._subnetMapping = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetMappingInput() {
      return this._subnetMapping
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
        description: cdktf.stringToTerraform(this._description),
        firewall_policy_arn: cdktf.stringToTerraform(this._firewallPolicyArn),
        firewall_policy_change_protection: cdktf.booleanToTerraform(this._firewallPolicyChangeProtection),
        name: cdktf.stringToTerraform(this._name),
        subnet_change_protection: cdktf.booleanToTerraform(this._subnetChangeProtection),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        subnet_mapping: cdktf.listMapper(networkfirewallFirewallSubnetMappingToTerraform)(this._subnetMapping),
      };
    }
  }
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

  function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any {
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

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any {
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

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any {
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
      return this._dimension
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

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any {
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

    // publish_metric_action - computed: false, optional: false, required: true
    private _publishMetricAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction; 
    private __publishMetricActionOutput = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference(this as any, "publish_metric_action", true);
    public get publishMetricAction() {
      return this.__publishMetricActionOutput;
    }
    public putPublishMetricAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction) {
      this._publishMetricAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get publishMetricActionInput() {
      return this._publishMetricAction
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

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction): any {
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

  function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference): any {
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

  function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyOutputReference | NetworkfirewallFirewallPolicyFirewallPolicy): any {
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
      return this._statelessDefaultActions
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
      return this._statelessFragmentDefaultActions
    }

    // stateful_rule_group_reference - computed: false, optional: true, required: false
    private _statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[] | undefined; 
    public get statefulRuleGroupReference() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stateful_rule_group_reference') as any;
    }
    public set statefulRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[] | undefined) {
      this._statefulRuleGroupReference = value;
    }
    public resetStatefulRuleGroupReference() {
      this._statefulRuleGroupReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statefulRuleGroupReferenceInput() {
      return this._statefulRuleGroupReference
    }

    // stateless_custom_action - computed: false, optional: true, required: false
    private _statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[] | undefined; 
    public get statelessCustomAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stateless_custom_action') as any;
    }
    public set statelessCustomAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[] | undefined) {
      this._statelessCustomAction = value;
    }
    public resetStatelessCustomAction() {
      this._statelessCustomAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessCustomActionInput() {
      return this._statelessCustomAction
    }

    // stateless_rule_group_reference - computed: false, optional: true, required: false
    private _statelessRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[] | undefined; 
    public get statelessRuleGroupReference() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stateless_rule_group_reference') as any;
    }
    public set statelessRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[] | undefined) {
      this._statelessRuleGroupReference = value;
    }
    public resetStatelessRuleGroupReference() {
      this._statelessRuleGroupReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessRuleGroupReferenceInput() {
      return this._statelessRuleGroupReference
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _firewallPolicy?: NetworkfirewallFirewallPolicyFirewallPolicy; 
    private __firewallPolicyOutput = new NetworkfirewallFirewallPolicyFirewallPolicyOutputReference(this as any, "firewall_policy", true);
    public get firewallPolicy() {
      return this.__firewallPolicyOutput;
    }
    public putFirewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy) {
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
        firewall_policy: networkfirewallFirewallPolicyFirewallPolicyToTerraform(this._firewallPolicy),
      };
    }
  }
  export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}
    */
    readonly firewallArn: string;
    /**
    * logging_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
    */
    readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration;
  }
  export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination NetworkfirewallLoggingConfiguration#log_destination}
    */
    readonly logDestination: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
    */
    readonly logDestinationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_type NetworkfirewallLoggingConfiguration#log_type}
    */
    readonly logType: string;
  }

  function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      log_destination: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.logDestination),
      log_destination_type: cdktf.stringToTerraform(struct!.logDestinationType),
      log_type: cdktf.stringToTerraform(struct!.logType),
    }
  }

  export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
    /**
    * log_destination_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}
    */
    readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
  }

  function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference | NetworkfirewallLoggingConfigurationLoggingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      log_destination_config: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform)(struct!.logDestinationConfig),
    }
  }

  export class NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // log_destination_config - computed: false, optional: false, required: true
    private _logDestinationConfig?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[]; 
    public get logDestinationConfig() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('log_destination_config') as any;
    }
    public set logDestinationConfig(value: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[]) {
      this._logDestinationConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationConfigInput() {
      return this._logDestinationConfig
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration}
  */
  export class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_logging_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallLoggingConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_logging_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._firewallArn = config.firewallArn;
      this._loggingConfiguration = config.loggingConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // firewall_arn - computed: false, optional: false, required: true
    private _firewallArn?: string; 
    public get firewallArn() {
      return this.getStringAttribute('firewall_arn');
    }
    public set firewallArn(value: string) {
      this._firewallArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallArnInput() {
      return this._firewallArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // logging_configuration - computed: false, optional: false, required: true
    private _loggingConfiguration?: NetworkfirewallLoggingConfigurationLoggingConfiguration; 
    private __loggingConfigurationOutput = new NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(this as any, "logging_configuration", true);
    public get loggingConfiguration() {
      return this.__loggingConfigurationOutput;
    }
    public putLoggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration) {
      this._loggingConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
      return this._loggingConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        firewall_arn: cdktf.stringToTerraform(this._firewallArn),
        logging_configuration: networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(this._loggingConfiguration),
      };
    }
  }
  export interface NetworkfirewallResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html#policy NetworkfirewallResourcePolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html#resource_arn NetworkfirewallResourcePolicy#resource_arn}
    */
    readonly resourceArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html aws_networkfirewall_resource_policy}
  */
  export class NetworkfirewallResourcePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_resource_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html aws_networkfirewall_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallResourcePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallResourcePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_resource_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policy = config.policy;
      this._resourceArn = config.resourceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy: cdktf.stringToTerraform(this._policy),
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
      };
    }
  }
  export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#capacity NetworkfirewallRuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#description NetworkfirewallRuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#name NetworkfirewallRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules NetworkfirewallRuleGroup#rules}
    */
    readonly rules?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags NetworkfirewallRuleGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags_all NetworkfirewallRuleGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#type NetworkfirewallRuleGroup#type}
    */
    readonly type: string;
    /**
    * rule_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_group NetworkfirewallRuleGroup#rule_group}
    */
    readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup;
  }
  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // definition - computed: false, optional: false, required: true
    private _definition?: string[]; 
    public get definition() {
      return this.getListAttribute('definition');
    }
    public set definition(value: string[]) {
      this._definition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
      return this._definition
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * ip_set block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_set NetworkfirewallRuleGroup#ip_set}
    */
    readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet;
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      ip_set: networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct!.ipSet),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // definition - computed: false, optional: false, required: true
    private _definition?: string[]; 
    public get definition() {
      return this.getListAttribute('definition');
    }
    public set definition(value: string[]) {
      this._definition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
      return this._definition
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * port_set block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_set NetworkfirewallRuleGroup#port_set}
    */
    readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet;
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      port_set: networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct!.portSet),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
    /**
    * ip_sets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_sets NetworkfirewallRuleGroup#ip_sets}
    */
    readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
    /**
    * port_sets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_sets NetworkfirewallRuleGroup#port_sets}
    */
    readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariables): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      ip_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform)(struct!.ipSets),
      port_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform)(struct!.portSets),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // ip_sets - computed: false, optional: true, required: false
    private _ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | undefined; 
    public get ipSets() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ip_sets') as any;
    }
    public set ipSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | undefined) {
      this._ipSets = value;
    }
    public resetIpSets() {
      this._ipSets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipSetsInput() {
      return this._ipSets
    }

    // port_sets - computed: false, optional: true, required: false
    private _portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | undefined; 
    public get portSets() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('port_sets') as any;
    }
    public set portSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | undefined) {
      this._portSets = value;
    }
    public resetPortSets() {
      this._portSets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portSetsInput() {
      return this._portSets
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}
    */
    readonly generatedRulesType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#target_types NetworkfirewallRuleGroup#target_types}
    */
    readonly targetTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#targets NetworkfirewallRuleGroup#targets}
    */
    readonly targets: string[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      generated_rules_type: cdktf.stringToTerraform(struct!.generatedRulesType),
      target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetTypes),
      targets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targets),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // generated_rules_type - computed: false, optional: false, required: true
    private _generatedRulesType?: string; 
    public get generatedRulesType() {
      return this.getStringAttribute('generated_rules_type');
    }
    public set generatedRulesType(value: string) {
      this._generatedRulesType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get generatedRulesTypeInput() {
      return this._generatedRulesType
    }

    // target_types - computed: false, optional: false, required: true
    private _targetTypes?: string[]; 
    public get targetTypes() {
      return this.getListAttribute('target_types');
    }
    public set targetTypes(value: string[]) {
      this._targetTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypesInput() {
      return this._targetTypes
    }

    // targets - computed: false, optional: false, required: true
    private _targets?: string[]; 
    public get targets() {
      return this.getListAttribute('targets');
    }
    public set targets(value: string[]) {
      this._targets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
      return this._targets
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#direction NetworkfirewallRuleGroup#direction}
    */
    readonly direction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocol NetworkfirewallRuleGroup#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      destination: cdktf.stringToTerraform(struct!.destination),
      destination_port: cdktf.stringToTerraform(struct!.destinationPort),
      direction: cdktf.stringToTerraform(struct!.direction),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      source: cdktf.stringToTerraform(struct!.source),
      source_port: cdktf.stringToTerraform(struct!.sourcePort),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // destination - computed: false, optional: false, required: true
    private _destination?: string; 
    public get destination() {
      return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
      this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
      return this._destination
    }

    // destination_port - computed: false, optional: false, required: true
    private _destinationPort?: string; 
    public get destinationPort() {
      return this.getStringAttribute('destination_port');
    }
    public set destinationPort(value: string) {
      this._destinationPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortInput() {
      return this._destinationPort
    }

    // direction - computed: false, optional: false, required: true
    private _direction?: string; 
    public get direction() {
      return this.getStringAttribute('direction');
    }
    public set direction(value: string) {
      this._direction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directionInput() {
      return this._direction
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
      return this.getStringAttribute('source');
    }
    public set source(value: string) {
      this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // source_port - computed: false, optional: false, required: true
    private _sourcePort?: string; 
    public get sourcePort() {
      return this.getStringAttribute('source_port');
    }
    public set sourcePort(value: string) {
      this._sourcePort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortInput() {
      return this._sourcePort
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#keyword NetworkfirewallRuleGroup#keyword}
    */
    readonly keyword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#settings NetworkfirewallRuleGroup#settings}
    */
    readonly settings?: string[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      keyword: cdktf.stringToTerraform(struct!.keyword),
      settings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.settings),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action NetworkfirewallRuleGroup#action}
    */
    readonly action: string;
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#header NetworkfirewallRuleGroup#header}
    */
    readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader;
    /**
    * rule_option block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_option NetworkfirewallRuleGroup#rule_option}
    */
    readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: cdktf.stringToTerraform(struct!.action),
      header: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct!.header),
      rule_option: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform)(struct!.ruleOption),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#value NetworkfirewallRuleGroup#value}
    */
    readonly value: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
    /**
    * dimension block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#dimension NetworkfirewallRuleGroup#dimension}
    */
    readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      dimension: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct!.dimension),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // dimension - computed: false, optional: false, required: true
    private _dimension?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[]; 
    public get dimension() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dimension') as any;
    }
    public set dimension(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[]) {
      this._dimension = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionInput() {
      return this._dimension
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
    /**
    * publish_metric_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
    */
    readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      publish_metric_action: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // publish_metric_action - computed: false, optional: false, required: true
    private _publishMetricAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction; 
    private __publishMetricActionOutput = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference(this as any, "publish_metric_action", true);
    public get publishMetricAction() {
      return this.__publishMetricActionOutput;
    }
    public putPublishMetricAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction) {
      this._publishMetricAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get publishMetricActionInput() {
      return this._publishMetricAction
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_name NetworkfirewallRuleGroup#action_name}
    */
    readonly actionName: string;
    /**
    * action_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_definition NetworkfirewallRuleGroup#action_definition}
    */
    readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action_name: cdktf.stringToTerraform(struct!.actionName),
      action_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct!.actionDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#flags NetworkfirewallRuleGroup#flags}
    */
    readonly flags: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#masks NetworkfirewallRuleGroup#masks}
    */
    readonly masks?: string[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      flags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.flags),
      masks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.masks),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocols NetworkfirewallRuleGroup#protocols}
    */
    readonly protocols?: number[];
    /**
    * destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
    /**
    * destination_port block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
    */
    readonly source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
    /**
    * source_port block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
    /**
    * tcp_flag block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tcp_flag NetworkfirewallRuleGroup#tcp_flag}
    */
    readonly tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct!.protocols),
      destination: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform)(struct!.destination),
      destination_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform)(struct!.destinationPort),
      source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform)(struct!.source),
      source_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform)(struct!.sourcePort),
      tcp_flag: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform)(struct!.tcpFlag),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // protocols - computed: false, optional: true, required: false
    private _protocols?: number[] | undefined; 
    public get protocols() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('protocols') as any;
    }
    public set protocols(value: number[] | undefined) {
      this._protocols = value;
    }
    public resetProtocols() {
      this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
      return this._protocols
    }

    // destination - computed: false, optional: true, required: false
    private _destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | undefined; 
    public get destination() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('destination') as any;
    }
    public set destination(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | undefined) {
      this._destination = value;
    }
    public resetDestination() {
      this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
      return this._destination
    }

    // destination_port - computed: false, optional: true, required: false
    private _destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | undefined; 
    public get destinationPort() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('destination_port') as any;
    }
    public set destinationPort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | undefined) {
      this._destinationPort = value;
    }
    public resetDestinationPort() {
      this._destinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortInput() {
      return this._destinationPort
    }

    // source - computed: false, optional: true, required: false
    private _source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | undefined; 
    public get source() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('source') as any;
    }
    public set source(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | undefined) {
      this._source = value;
    }
    public resetSource() {
      this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // source_port - computed: false, optional: true, required: false
    private _sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | undefined; 
    public get sourcePort() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('source_port') as any;
    }
    public set sourcePort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | undefined) {
      this._sourcePort = value;
    }
    public resetSourcePort() {
      this._sourcePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortInput() {
      return this._sourcePort
    }

    // tcp_flag - computed: false, optional: true, required: false
    private _tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | undefined; 
    public get tcpFlag() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tcp_flag') as any;
    }
    public set tcpFlag(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | undefined) {
      this._tcpFlag = value;
    }
    public resetTcpFlag() {
      this._tcpFlag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpFlagInput() {
      return this._tcpFlag
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#actions NetworkfirewallRuleGroup#actions}
    */
    readonly actions: string[];
    /**
    * match_attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#match_attributes NetworkfirewallRuleGroup#match_attributes}
    */
    readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
      match_attributes: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct!.matchAttributes),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // actions - computed: false, optional: false, required: true
    private _actions?: string[]; 
    public get actions() {
      return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
      this._actions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
      return this._actions
    }

    // match_attributes - computed: false, optional: false, required: true
    private _matchAttributes?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes; 
    private __matchAttributesOutput = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference(this as any, "match_attributes", true);
    public get matchAttributes() {
      return this.__matchAttributesOutput;
    }
    public putMatchAttributes(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes) {
      this._matchAttributes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAttributesInput() {
      return this._matchAttributes
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#priority NetworkfirewallRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * rule_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_definition NetworkfirewallRuleGroup#rule_definition}
    */
    readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      rule_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct!.ruleDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    /**
    * custom_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#custom_action NetworkfirewallRuleGroup#custom_action}
    */
    readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
    /**
    * stateless_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rule NetworkfirewallRuleGroup#stateless_rule}
    */
    readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      custom_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform)(struct!.customAction),
      stateless_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform)(struct!.statelessRule),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // custom_action - computed: false, optional: true, required: false
    private _customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | undefined; 
    public get customAction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('custom_action') as any;
    }
    public set customAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | undefined) {
      this._customAction = value;
    }
    public resetCustomAction() {
      this._customAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customActionInput() {
      return this._customAction
    }

    // stateless_rule - computed: false, optional: false, required: true
    private _statelessRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[]; 
    public get statelessRule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stateless_rule') as any;
    }
    public set statelessRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[]) {
      this._statelessRule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessRuleInput() {
      return this._statelessRule
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_string NetworkfirewallRuleGroup#rules_string}
    */
    readonly rulesString?: string;
    /**
    * rules_source_list block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
    */
    readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList;
    /**
    * stateful_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateful_rule NetworkfirewallRuleGroup#stateful_rule}
    */
    readonly statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[];
    /**
    * stateless_rules_and_custom_actions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
    */
    readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      rules_string: cdktf.stringToTerraform(struct!.rulesString),
      rules_source_list: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct!.rulesSourceList),
      stateful_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform)(struct!.statefulRule),
      stateless_rules_and_custom_actions: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct!.statelessRulesAndCustomActions),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // rules_string - computed: false, optional: true, required: false
    private _rulesString?: string | undefined; 
    public get rulesString() {
      return this.getStringAttribute('rules_string');
    }
    public set rulesString(value: string | undefined) {
      this._rulesString = value;
    }
    public resetRulesString() {
      this._rulesString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesStringInput() {
      return this._rulesString
    }

    // rules_source_list - computed: false, optional: true, required: false
    private _rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined; 
    private __rulesSourceListOutput = new NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference(this as any, "rules_source_list", true);
    public get rulesSourceList() {
      return this.__rulesSourceListOutput;
    }
    public putRulesSourceList(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined) {
      this._rulesSourceList = value;
    }
    public resetRulesSourceList() {
      this._rulesSourceList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesSourceListInput() {
      return this._rulesSourceList
    }

    // stateful_rule - computed: false, optional: true, required: false
    private _statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | undefined; 
    public get statefulRule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stateful_rule') as any;
    }
    public set statefulRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | undefined) {
      this._statefulRule = value;
    }
    public resetStatefulRule() {
      this._statefulRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statefulRuleInput() {
      return this._statefulRule
    }

    // stateless_rules_and_custom_actions - computed: false, optional: true, required: false
    private _statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined; 
    private __statelessRulesAndCustomActionsOutput = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(this as any, "stateless_rules_and_custom_actions", true);
    public get statelessRulesAndCustomActions() {
      return this.__statelessRulesAndCustomActionsOutput;
    }
    public putStatelessRulesAndCustomActions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined) {
      this._statelessRulesAndCustomActions = value;
    }
    public resetStatelessRulesAndCustomActions() {
      this._statelessRulesAndCustomActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessRulesAndCustomActionsInput() {
      return this._statelessRulesAndCustomActions
    }
  }
  export interface NetworkfirewallRuleGroupRuleGroup {
    /**
    * rule_variables block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_variables NetworkfirewallRuleGroup#rule_variables}
    */
    readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables;
    /**
    * rules_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source NetworkfirewallRuleGroup#rules_source}
    */
    readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource;
  }

  function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupOutputReference | NetworkfirewallRuleGroupRuleGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      rule_variables: networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct!.ruleVariables),
      rules_source: networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct!.rulesSource),
    }
  }

  export class NetworkfirewallRuleGroupRuleGroupOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // rule_variables - computed: false, optional: true, required: false
    private _ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined; 
    private __ruleVariablesOutput = new NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(this as any, "rule_variables", true);
    public get ruleVariables() {
      return this.__ruleVariablesOutput;
    }
    public putRuleVariables(value: NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined) {
      this._ruleVariables = value;
    }
    public resetRuleVariables() {
      this._ruleVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleVariablesInput() {
      return this._ruleVariables
    }

    // rules_source - computed: false, optional: false, required: true
    private _rulesSource?: NetworkfirewallRuleGroupRuleGroupRulesSource; 
    private __rulesSourceOutput = new NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(this as any, "rules_source", true);
    public get rulesSource() {
      return this.__rulesSourceOutput;
    }
    public putRulesSource(value: NetworkfirewallRuleGroupRuleGroupRulesSource) {
      this._rulesSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesSourceInput() {
      return this._rulesSource
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group}
  */
  export class NetworkfirewallRuleGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_rule_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallRuleGroupConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_rule_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._capacity = config.capacity;
      this._description = config.description;
      this._name = config.name;
      this._rules = config.rules;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._ruleGroup = config.ruleGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // capacity - computed: false, optional: false, required: true
    private _capacity?: number; 
    public get capacity() {
      return this.getNumberAttribute('capacity');
    }
    public set capacity(value: number) {
      this._capacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
      return this._capacity
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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

    // rules - computed: false, optional: true, required: false
    private _rules?: string | undefined; 
    public get rules() {
      return this.getStringAttribute('rules');
    }
    public set rules(value: string | undefined) {
      this._rules = value;
    }
    public resetRules() {
      this._rules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
      return this._rules
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // update_token - computed: true, optional: false, required: false
    public get updateToken() {
      return this.getStringAttribute('update_token');
    }

    // rule_group - computed: false, optional: true, required: false
    private _ruleGroup?: NetworkfirewallRuleGroupRuleGroup | undefined; 
    private __ruleGroupOutput = new NetworkfirewallRuleGroupRuleGroupOutputReference(this as any, "rule_group", true);
    public get ruleGroup() {
      return this.__ruleGroupOutput;
    }
    public putRuleGroup(value: NetworkfirewallRuleGroupRuleGroup | undefined) {
      this._ruleGroup = value;
    }
    public resetRuleGroup() {
      this._ruleGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleGroupInput() {
      return this._ruleGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        capacity: cdktf.numberToTerraform(this._capacity),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        rules: cdktf.stringToTerraform(this._rules),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        rule_group: networkfirewallRuleGroupRuleGroupToTerraform(this._ruleGroup),
      };
    }
  }
}
