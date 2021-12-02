// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Network Firewall
*/
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

export function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._definition) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined) {
    if (value === undefined) {
      this._definition = undefined;
    }
    else {
      this._definition = value.definition;
    }
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
    return this._definition;
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

export function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any {
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

export function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._definition) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined) {
    if (value === undefined) {
      this._definition = undefined;
    }
    else {
      this._definition = value.definition;
    }
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
    return this._definition;
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

export function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any {
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

export function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariables): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._ipSets) {
      hasAnyValues = true;
      internalValueResult.ipSets = this._ipSets;
    }
    if (this._portSets) {
      hasAnyValues = true;
      internalValueResult.portSets = this._portSets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined) {
    if (value === undefined) {
      this._ipSets = undefined;
      this._portSets = undefined;
    }
    else {
      this._ipSets = value.ipSets;
      this._portSets = value.portSets;
    }
  }

  // ip_sets - computed: false, optional: true, required: false
  private _ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[]; 
  public get ipSets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_sets') as any;
  }
  public set ipSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[]) {
    this._ipSets = value;
  }
  public resetIpSets() {
    this._ipSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets;
  }

  // port_sets - computed: false, optional: true, required: false
  private _portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[]; 
  public get portSets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port_sets') as any;
  }
  public set portSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[]) {
    this._portSets = value;
  }
  public resetPortSets() {
    this._portSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetsInput() {
    return this._portSets;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._generatedRulesType) {
      hasAnyValues = true;
      internalValueResult.generatedRulesType = this._generatedRulesType;
    }
    if (this._targetTypes) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._targets) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined) {
    if (value === undefined) {
      this._generatedRulesType = undefined;
      this._targetTypes = undefined;
      this._targets = undefined;
    }
    else {
      this._generatedRulesType = value.generatedRulesType;
      this._targetTypes = value.targetTypes;
      this._targets = value.targets;
    }
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
    return this._generatedRulesType;
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
    return this._targetTypes;
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
    return this._targets;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._destination) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationPort) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._direction) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._protocol) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourcePort) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined) {
    if (value === undefined) {
      this._destination = undefined;
      this._destinationPort = undefined;
      this._direction = undefined;
      this._protocol = undefined;
      this._source = undefined;
      this._sourcePort = undefined;
    }
    else {
      this._destination = value.destination;
      this._destinationPort = value.destinationPort;
      this._direction = value.direction;
      this._protocol = value.protocol;
      this._source = value.source;
      this._sourcePort = value.sourcePort;
    }
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
    return this._destination;
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
    return this._destinationPort;
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
    return this._direction;
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
    return this._protocol;
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
    return this._source;
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
    return this._sourcePort;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._dimension) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined) {
    if (value === undefined) {
      this._dimension = undefined;
    }
    else {
      this._dimension = value.dimension;
    }
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
    return this._dimension;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._publishMetricAction) {
      hasAnyValues = true;
      internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined) {
    if (value === undefined) {
      this._publishMetricAction.internalValue = undefined;
    }
    else {
      this._publishMetricAction.internalValue = value.publishMetricAction;
    }
  }

  // publish_metric_action - computed: false, optional: false, required: true
  private _publishMetricAction = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference(this as any, "publish_metric_action", true);
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
  public putPublishMetricAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction) {
    this._publishMetricAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMetricActionInput() {
    return this._publishMetricAction.internalValue;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._protocols) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._destination) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationPort) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._source) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourcePort) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._tcpFlag) {
      hasAnyValues = true;
      internalValueResult.tcpFlag = this._tcpFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined) {
    if (value === undefined) {
      this._protocols = undefined;
      this._destination = undefined;
      this._destinationPort = undefined;
      this._source = undefined;
      this._sourcePort = undefined;
      this._tcpFlag = undefined;
    }
    else {
      this._protocols = value.protocols;
      this._destination = value.destination;
      this._destinationPort = value.destinationPort;
      this._source = value.source;
      this._sourcePort = value.sourcePort;
      this._tcpFlag = value.tcpFlag;
    }
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('protocols') as any;
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[]; 
  public get destination() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[]; 
  public get destinationPort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('destination_port') as any;
  }
  public set destinationPort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[]) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // source - computed: false, optional: true, required: false
  private _source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[]; 
  public get source() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[]; 
  public get sourcePort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source_port') as any;
  }
  public set sourcePort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[]) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // tcp_flag - computed: false, optional: true, required: false
  private _tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[]; 
  public get tcpFlag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_flag') as any;
  }
  public set tcpFlag(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[]) {
    this._tcpFlag = value;
  }
  public resetTcpFlag() {
    this._tcpFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagInput() {
    return this._tcpFlag;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._actions) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._matchAttributes) {
      hasAnyValues = true;
      internalValueResult.matchAttributes = this._matchAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined) {
    if (value === undefined) {
      this._actions = undefined;
      this._matchAttributes.internalValue = undefined;
    }
    else {
      this._actions = value.actions;
      this._matchAttributes.internalValue = value.matchAttributes;
    }
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
    return this._actions;
  }

  // match_attributes - computed: false, optional: false, required: true
  private _matchAttributes = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference(this as any, "match_attributes", true);
  public get matchAttributes() {
    return this._matchAttributes;
  }
  public putMatchAttributes(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes) {
    this._matchAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAttributesInput() {
    return this._matchAttributes.internalValue;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule): any {
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

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._customAction) {
      hasAnyValues = true;
      internalValueResult.customAction = this._customAction;
    }
    if (this._statelessRule) {
      hasAnyValues = true;
      internalValueResult.statelessRule = this._statelessRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined) {
    if (value === undefined) {
      this._customAction = undefined;
      this._statelessRule = undefined;
    }
    else {
      this._customAction = value.customAction;
      this._statelessRule = value.statelessRule;
    }
  }

  // custom_action - computed: false, optional: true, required: false
  private _customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[]; 
  public get customAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_action') as any;
  }
  public set customAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[]) {
    this._customAction = value;
  }
  public resetCustomAction() {
    this._customAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionInput() {
    return this._customAction;
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
    return this._statelessRule;
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

export function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSource): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSource | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._rulesString) {
      hasAnyValues = true;
      internalValueResult.rulesString = this._rulesString;
    }
    if (this._rulesSourceList) {
      hasAnyValues = true;
      internalValueResult.rulesSourceList = this._rulesSourceList?.internalValue;
    }
    if (this._statefulRule) {
      hasAnyValues = true;
      internalValueResult.statefulRule = this._statefulRule;
    }
    if (this._statelessRulesAndCustomActions) {
      hasAnyValues = true;
      internalValueResult.statelessRulesAndCustomActions = this._statelessRulesAndCustomActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSource | undefined) {
    if (value === undefined) {
      this._rulesString = undefined;
      this._rulesSourceList.internalValue = undefined;
      this._statefulRule = undefined;
      this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    else {
      this._rulesString = value.rulesString;
      this._rulesSourceList.internalValue = value.rulesSourceList;
      this._statefulRule = value.statefulRule;
      this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
    }
  }

  // rules_string - computed: false, optional: true, required: false
  private _rulesString?: string; 
  public get rulesString() {
    return this.getStringAttribute('rules_string');
  }
  public set rulesString(value: string) {
    this._rulesString = value;
  }
  public resetRulesString() {
    this._rulesString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesStringInput() {
    return this._rulesString;
  }

  // rules_source_list - computed: false, optional: true, required: false
  private _rulesSourceList = new NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference(this as any, "rules_source_list", true);
  public get rulesSourceList() {
    return this._rulesSourceList;
  }
  public putRulesSourceList(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList) {
    this._rulesSourceList.internalValue = value;
  }
  public resetRulesSourceList() {
    this._rulesSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceListInput() {
    return this._rulesSourceList.internalValue;
  }

  // stateful_rule - computed: false, optional: true, required: false
  private _statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[]; 
  public get statefulRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stateful_rule') as any;
  }
  public set statefulRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[]) {
    this._statefulRule = value;
  }
  public resetStatefulRule() {
    this._statefulRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleInput() {
    return this._statefulRule;
  }

  // stateless_rules_and_custom_actions - computed: false, optional: true, required: false
  private _statelessRulesAndCustomActions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(this as any, "stateless_rules_and_custom_actions", true);
  public get statelessRulesAndCustomActions() {
    return this._statelessRulesAndCustomActions;
  }
  public putStatelessRulesAndCustomActions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions) {
    this._statelessRulesAndCustomActions.internalValue = value;
  }
  public resetStatelessRulesAndCustomActions() {
    this._statelessRulesAndCustomActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRulesAndCustomActionsInput() {
    return this._statelessRulesAndCustomActions.internalValue;
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

export function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupOutputReference | NetworkfirewallRuleGroupRuleGroup): any {
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

  public get internalValue(): NetworkfirewallRuleGroupRuleGroup | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._ruleVariables) {
      hasAnyValues = true;
      internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
    }
    if (this._rulesSource) {
      hasAnyValues = true;
      internalValueResult.rulesSource = this._rulesSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroup | undefined) {
    if (value === undefined) {
      this._ruleVariables.internalValue = undefined;
      this._rulesSource.internalValue = undefined;
    }
    else {
      this._ruleVariables.internalValue = value.ruleVariables;
      this._rulesSource.internalValue = value.rulesSource;
    }
  }

  // rule_variables - computed: false, optional: true, required: false
  private _ruleVariables = new NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(this as any, "rule_variables", true);
  public get ruleVariables() {
    return this._ruleVariables;
  }
  public putRuleVariables(value: NetworkfirewallRuleGroupRuleGroupRuleVariables) {
    this._ruleVariables.internalValue = value;
  }
  public resetRuleVariables() {
    this._ruleVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVariablesInput() {
    return this._ruleVariables.internalValue;
  }

  // rules_source - computed: false, optional: false, required: true
  private _rulesSource = new NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(this as any, "rules_source", true);
  public get rulesSource() {
    return this._rulesSource;
  }
  public putRulesSource(value: NetworkfirewallRuleGroupRuleGroupRulesSource) {
    this._rulesSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceInput() {
    return this._rulesSource.internalValue;
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
    this._ruleGroup.internalValue = config.ruleGroup;
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
    return this._capacity;
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

  // rules - computed: false, optional: true, required: false
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
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
    return this._type;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup = new NetworkfirewallRuleGroupRuleGroupOutputReference(this as any, "rule_group", true);
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: NetworkfirewallRuleGroupRuleGroup) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
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
      rule_group: networkfirewallRuleGroupRuleGroupToTerraform(this._ruleGroup.internalValue),
    };
  }
}
