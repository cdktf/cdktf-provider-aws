// https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkfirewallRuleGroupConfig extends TerraformMetaArguments {
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
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
  readonly key: string;
  /** ip_set block */
  readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
  readonly definition: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
  readonly key: string;
  /** port_set block */
  readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
  /** ip_sets block */
  readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
  /** port_sets block */
  readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
  readonly generatedRulesType: string;
  readonly targetTypes: string[];
  readonly targets: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
  readonly destination: string;
  readonly destinationPort: string;
  readonly direction: string;
  readonly protocol: string;
  readonly source: string;
  readonly sourcePort: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
  readonly keyword: string;
  readonly settings?: string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
  readonly action: string;
  /** header block */
  readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader[];
  /** rule_option block */
  readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
  readonly value: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
  /** dimension block */
  readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
  /** publish_metric_action block */
  readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
  readonly actionName: string;
  /** action_definition block */
  readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
  readonly addressDefinition: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
  readonly fromPort: number;
  readonly toPort?: number;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
  readonly addressDefinition: string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
  readonly fromPort: number;
  readonly toPort?: number;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
  readonly flags: string[];
  readonly masks?: string[];
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
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
  readonly actions: string[];
  /** match_attributes block */
  readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
  readonly priority: number;
  /** rule_definition block */
  readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
  /** custom_action block */
  readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
  /** stateless_rule block */
  readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
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
export interface NetworkfirewallRuleGroupRuleGroup {
  /** rule_variables block */
  readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables[];
  /** rules_source block */
  readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource[];
}

// Resource

export class NetworkfirewallRuleGroup extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity: number;
  public get capacity() {
    return this._capacity;
  }
  public set capacity(value: number) {
    this._capacity = value;
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

  // rules - computed: false, optional: true, required: false
  private _rules?: string;
  public get rules() {
    return this._rules;
  }
  public set rules(value: string | undefined) {
    this._rules = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // update_token - computed: true, optional: false, required: true
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup?: NetworkfirewallRuleGroupRuleGroup[];
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public set ruleGroup(value: NetworkfirewallRuleGroupRuleGroup[] | undefined) {
    this._ruleGroup = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: this._capacity,
      description: this._description,
      name: this._name,
      rules: this._rules,
      tags: this._tags,
      type: this._type,
      rule_group: this._ruleGroup,
    };
  }
}
