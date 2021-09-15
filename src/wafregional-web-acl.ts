// https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#metric_name WafregionalWebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#name WafregionalWebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags WafregionalWebAcl#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags_all WafregionalWebAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * default_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#default_action WafregionalWebAcl#default_action}
  */
  readonly defaultAction: WafregionalWebAclDefaultAction[];
  /**
  * logging_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#logging_configuration WafregionalWebAcl#logging_configuration}
  */
  readonly loggingConfiguration?: WafregionalWebAclLoggingConfiguration[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule WafregionalWebAcl#rule}
  */
  readonly rule?: WafregionalWebAclRule[];
}
export interface WafregionalWebAclDefaultAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
  */
  readonly type: string;
}

function wafregionalWebAclDefaultActionToTerraform(struct?: WafregionalWebAclDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#data WafregionalWebAcl#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
  */
  readonly type: string;
}

function wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalWebAclLoggingConfigurationRedactedFields {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#field_to_match WafregionalWebAcl#field_to_match}
  */
  readonly fieldToMatch: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}

function wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}

export interface WafregionalWebAclLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#log_destination WafregionalWebAcl#log_destination}
  */
  readonly logDestination: string;
  /**
  * redacted_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#redacted_fields WafregionalWebAcl#redacted_fields}
  */
  readonly redactedFields?: WafregionalWebAclLoggingConfigurationRedactedFields[];
}

function wafregionalWebAclLoggingConfigurationToTerraform(struct?: WafregionalWebAclLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
    redacted_fields: cdktf.listMapper(wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform)(struct!.redactedFields),
  }
}

export interface WafregionalWebAclRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
  */
  readonly type: string;
}

function wafregionalWebAclRuleActionToTerraform(struct?: WafregionalWebAclRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalWebAclRuleOverrideAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
  */
  readonly type: string;
}

function wafregionalWebAclRuleOverrideActionToTerraform(struct?: WafregionalWebAclRuleOverrideAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalWebAclRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#priority WafregionalWebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule_id WafregionalWebAcl#rule_id}
  */
  readonly ruleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
  */
  readonly type?: string;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#action WafregionalWebAcl#action}
  */
  readonly action?: WafregionalWebAclRuleAction[];
  /**
  * override_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#override_action WafregionalWebAcl#override_action}
  */
  readonly overrideAction?: WafregionalWebAclRuleOverrideAction[];
}

function wafregionalWebAclRuleToTerraform(struct?: WafregionalWebAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    type: cdktf.stringToTerraform(struct!.type),
    action: cdktf.listMapper(wafregionalWebAclRuleActionToTerraform)(struct!.action),
    override_action: cdktf.listMapper(wafregionalWebAclRuleOverrideActionToTerraform)(struct!.overrideAction),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl}
*/
export class WafregionalWebAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafregional_web_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalWebAclConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalWebAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_web_acl',
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
    this._defaultAction = config.defaultAction;
    this._loggingConfiguration = config.loggingConfiguration;
    this._rule = config.rule;
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
  private _metricName: string;
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
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

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: WafregionalWebAclDefaultAction[];
  public get defaultAction() {
    return this.interpolationForAttribute('default_action') as any;
  }
  public set defaultAction(value: WafregionalWebAclDefaultAction[]) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration?: WafregionalWebAclLoggingConfiguration[];
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: WafregionalWebAclLoggingConfiguration[] ) {
    this._loggingConfiguration = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: WafregionalWebAclRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: WafregionalWebAclRule[] ) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
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
      default_action: cdktf.listMapper(wafregionalWebAclDefaultActionToTerraform)(this._defaultAction),
      logging_configuration: cdktf.listMapper(wafregionalWebAclLoggingConfigurationToTerraform)(this._loggingConfiguration),
      rule: cdktf.listMapper(wafregionalWebAclRuleToTerraform)(this._rule),
    };
  }
}
