// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF
*/
export interface WafWebAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#metric_name WafWebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#name WafWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags WafWebAcl#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags_all WafWebAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * default_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#default_action WafWebAcl#default_action}
  */
  readonly defaultAction: WafWebAclDefaultAction;
  /**
  * logging_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#logging_configuration WafWebAcl#logging_configuration}
  */
  readonly loggingConfiguration?: WafWebAclLoggingConfiguration;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rules WafWebAcl#rules}
  */
  readonly rules?: WafWebAclRules[];
}
export interface WafWebAclDefaultAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
  */
  readonly type: string;
}

export function wafWebAclDefaultActionToTerraform(struct?: WafWebAclDefaultActionOutputReference | WafWebAclDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WafWebAclDefaultActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafWebAclDefaultAction | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAclDefaultAction | undefined) {
    if (value === undefined) {
      this._type = undefined;
    }
    else {
      this._type = value.type;
    }
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
}
export interface WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#data WafWebAcl#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
  */
  readonly type: string;
}

export function wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafWebAclLoggingConfigurationRedactedFields {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#field_to_match WafWebAcl#field_to_match}
  */
  readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}

export function wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsOutputReference | WafWebAclLoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: cdktf.listMapper(wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}

export class WafWebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafWebAclLoggingConfigurationRedactedFields | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fieldToMatch) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAclLoggingConfigurationRedactedFields | undefined) {
    if (value === undefined) {
      this._fieldToMatch = undefined;
    }
    else {
      this._fieldToMatch = value.fieldToMatch;
    }
  }

  // field_to_match - computed: false, optional: false, required: true
  private _fieldToMatch?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]; 
  public get fieldToMatch() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('field_to_match') as any;
  }
  public set fieldToMatch(value: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]) {
    this._fieldToMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch;
  }
}
export interface WafWebAclLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#log_destination WafWebAcl#log_destination}
  */
  readonly logDestination: string;
  /**
  * redacted_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#redacted_fields WafWebAcl#redacted_fields}
  */
  readonly redactedFields?: WafWebAclLoggingConfigurationRedactedFields;
}

export function wafWebAclLoggingConfigurationToTerraform(struct?: WafWebAclLoggingConfigurationOutputReference | WafWebAclLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
    redacted_fields: wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct!.redactedFields),
  }
}

export class WafWebAclLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafWebAclLoggingConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._logDestination) {
      hasAnyValues = true;
      internalValueResult.logDestination = this._logDestination;
    }
    if (this._redactedFields) {
      hasAnyValues = true;
      internalValueResult.redactedFields = this._redactedFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAclLoggingConfiguration | undefined) {
    if (value === undefined) {
      this._logDestination = undefined;
      this._redactedFields.internalValue = undefined;
    }
    else {
      this._logDestination = value.logDestination;
      this._redactedFields.internalValue = value.redactedFields;
    }
  }

  // log_destination - computed: false, optional: false, required: true
  private _logDestination?: string; 
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string) {
    this._logDestination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination;
  }

  // redacted_fields - computed: false, optional: true, required: false
  private _redactedFields = new WafWebAclLoggingConfigurationRedactedFieldsOutputReference(this as any, "redacted_fields", true);
  public get redactedFields() {
    return this._redactedFields;
  }
  public putRedactedFields(value: WafWebAclLoggingConfigurationRedactedFields) {
    this._redactedFields.internalValue = value;
  }
  public resetRedactedFields() {
    this._redactedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactedFieldsInput() {
    return this._redactedFields.internalValue;
  }
}
export interface WafWebAclRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
  */
  readonly type: string;
}

export function wafWebAclRulesActionToTerraform(struct?: WafWebAclRulesActionOutputReference | WafWebAclRulesAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WafWebAclRulesActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafWebAclRulesAction | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAclRulesAction | undefined) {
    if (value === undefined) {
      this._type = undefined;
    }
    else {
      this._type = value.type;
    }
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
}
export interface WafWebAclRulesOverrideAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
  */
  readonly type: string;
}

export function wafWebAclRulesOverrideActionToTerraform(struct?: WafWebAclRulesOverrideActionOutputReference | WafWebAclRulesOverrideAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WafWebAclRulesOverrideActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafWebAclRulesOverrideAction | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafWebAclRulesOverrideAction | undefined) {
    if (value === undefined) {
      this._type = undefined;
    }
    else {
      this._type = value.type;
    }
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
}
export interface WafWebAclRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#priority WafWebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rule_id WafWebAcl#rule_id}
  */
  readonly ruleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
  */
  readonly type?: string;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#action WafWebAcl#action}
  */
  readonly action?: WafWebAclRulesAction;
  /**
  * override_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#override_action WafWebAcl#override_action}
  */
  readonly overrideAction?: WafWebAclRulesOverrideAction;
}

export function wafWebAclRulesToTerraform(struct?: WafWebAclRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    type: cdktf.stringToTerraform(struct!.type),
    action: wafWebAclRulesActionToTerraform(struct!.action),
    override_action: wafWebAclRulesOverrideActionToTerraform(struct!.overrideAction),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl}
*/
export class WafWebAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_waf_web_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafWebAclConfig
  */
  public constructor(scope: Construct, id: string, config: WafWebAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_web_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metricName = config.metricName;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._defaultAction.internalValue = config.defaultAction;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new WafWebAclDefaultActionOutputReference(this as any, "default_action", true);
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: WafWebAclDefaultAction) {
    this._defaultAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new WafWebAclLoggingConfigurationOutputReference(this as any, "logging_configuration", true);
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: WafWebAclLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: WafWebAclRules[]; 
  public get rules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: WafWebAclRules[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      default_action: wafWebAclDefaultActionToTerraform(this._defaultAction.internalValue),
      logging_configuration: wafWebAclLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
      rules: cdktf.listMapper(wafWebAclRulesToTerraform)(this._rules),
    };
  }
}
