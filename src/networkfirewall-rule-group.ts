// https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
  readonly capacity: number;
  readonly description?: string;
  readonly name: string;
  readonly rules?: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
  /** rule_group block */
  readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet {
  readonly definition: string[];
}

function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
  readonly key: string;
  /** ip_set block */
  readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet[];
}

function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    ip_set: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform)(struct!.ipSet),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
  readonly definition: string[];
}

function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
  readonly key: string;
  /** port_set block */
  readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet[];
}

function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    port_set: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform)(struct!.portSet),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
  /** ip_sets block */
  readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
  /** port_sets block */
  readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
}

function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariables): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform)(struct!.ipSets),
    port_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform)(struct!.portSets),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
  readonly generatedRulesType: string;
  readonly targetTypes: string[];
  readonly targets: string[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    generated_rules_type: cdktf.stringToTerraform(struct!.generatedRulesType),
    target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetTypes),
    targets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targets),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
  readonly destination: string;
  readonly destinationPort: string;
  readonly direction: string;
  readonly protocol: string;
  readonly source: string;
  readonly sourcePort: string;
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    direction: cdktf.stringToTerraform(struct!.direction),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source: cdktf.stringToTerraform(struct!.source),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
  readonly keyword: string;
  readonly settings?: string[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    keyword: cdktf.stringToTerraform(struct!.keyword),
    settings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.settings),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
  readonly action: string;
  /** header block */
  readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader[];
  /** rule_option block */
  readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    header: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform)(struct!.header),
    rule_option: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform)(struct!.ruleOption),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
  readonly value: string;
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
  /** dimension block */
  readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct!.dimension),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
  /** publish_metric_action block */
  readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_metric_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform)(struct!.publishMetricAction),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
  readonly actionName: string;
  /** action_definition block */
  readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    action_definition: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform)(struct!.actionDefinition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
  readonly addressDefinition: string;
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
  readonly fromPort: number;
  readonly toPort?: number;
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
  readonly addressDefinition: string;
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
  readonly fromPort: number;
  readonly toPort?: number;
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
  readonly flags: string[];
  readonly masks?: string[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.flags),
    masks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.masks),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
  readonly protocols?: number[];
  /** destination block */
  readonly destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
  /** destination_port block */
  readonly destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
  /** source block */
  readonly source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
  /** source_port block */
  readonly sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
  /** tcp_flag block */
  readonly tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct!.protocols),
    destination: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform)(struct!.destination),
    destination_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform)(struct!.destinationPort),
    source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform)(struct!.source),
    source_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform)(struct!.sourcePort),
    tcp_flag: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform)(struct!.tcpFlag),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
  readonly actions: string[];
  /** match_attributes block */
  readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    match_attributes: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform)(struct!.matchAttributes),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
  readonly priority: number;
  /** rule_definition block */
  readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_definition: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform)(struct!.ruleDefinition),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
  /** custom_action block */
  readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
  /** stateless_rule block */
  readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform)(struct!.customAction),
    stateless_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform)(struct!.statelessRule),
  }
}

export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
  readonly rulesString?: string;
  /** rules_source_list block */
  readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList[];
  /** stateful_rule block */
  readonly statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[];
  /** stateless_rules_and_custom_actions block */
  readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions[];
}

function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rules_string: cdktf.stringToTerraform(struct!.rulesString),
    rules_source_list: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform)(struct!.rulesSourceList),
    stateful_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform)(struct!.statefulRule),
    stateless_rules_and_custom_actions: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform)(struct!.statelessRulesAndCustomActions),
  }
}

export interface NetworkfirewallRuleGroupRuleGroup {
  /** rule_variables block */
  readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables[];
  /** rules_source block */
  readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource[];
}

function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule_variables: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform)(struct!.ruleVariables),
    rules_source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceToTerraform)(struct!.rulesSource),
  }
}


// Resource

export class NetworkfirewallRuleGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _capacity: number;
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

  // rules - computed: false, optional: true, required: false
  private _rules?: string;
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string ) {
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

  // type - computed: false, optional: false, required: true
  private _type: string;
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
  private _ruleGroup?: NetworkfirewallRuleGroupRuleGroup[];
  public get ruleGroup() {
    return this.interpolationForAttribute('rule_group') as any;
  }
  public set ruleGroup(value: NetworkfirewallRuleGroupRuleGroup[] ) {
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
      type: cdktf.stringToTerraform(this._type),
      rule_group: cdktf.listMapper(networkfirewallRuleGroupRuleGroupToTerraform)(this._ruleGroup),
    };
  }
}
