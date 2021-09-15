// https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly defaultAction: WafWebAclDefaultAction[];
  /**
  * logging_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#logging_configuration WafWebAcl#logging_configuration}
  */
  readonly loggingConfiguration?: WafWebAclLoggingConfiguration[];
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

function wafWebAclDefaultActionToTerraform(struct?: WafWebAclDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
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

function wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct!.fieldToMatch),
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
  readonly redactedFields?: WafWebAclLoggingConfigurationRedactedFields[];
}

function wafWebAclLoggingConfigurationToTerraform(struct?: WafWebAclLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
    redacted_fields: cdktf.listMapper(wafWebAclLoggingConfigurationRedactedFieldsToTerraform)(struct!.redactedFields),
  }
}

export interface WafWebAclRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
  */
  readonly type: string;
}

function wafWebAclRulesActionToTerraform(struct?: WafWebAclRulesAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafWebAclRulesOverrideAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
  */
  readonly type: string;
}

function wafWebAclRulesOverrideActionToTerraform(struct?: WafWebAclRulesOverrideAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
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
  readonly action?: WafWebAclRulesAction[];
  /**
  * override_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#override_action WafWebAcl#override_action}
  */
  readonly overrideAction?: WafWebAclRulesOverrideAction[];
}

function wafWebAclRulesToTerraform(struct?: WafWebAclRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    type: cdktf.stringToTerraform(struct!.type),
    action: cdktf.listMapper(wafWebAclRulesActionToTerraform)(struct!.action),
    override_action: cdktf.listMapper(wafWebAclRulesOverrideActionToTerraform)(struct!.overrideAction),
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
    this._defaultAction = config.defaultAction;
    this._loggingConfiguration = config.loggingConfiguration;
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
  private _defaultAction: WafWebAclDefaultAction[];
  public get defaultAction() {
    return this.interpolationForAttribute('default_action') as any;
  }
  public set defaultAction(value: WafWebAclDefaultAction[]) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration?: WafWebAclLoggingConfiguration[];
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: WafWebAclLoggingConfiguration[] ) {
    this._loggingConfiguration = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: WafWebAclRules[];
  public get rules() {
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: WafWebAclRules[] ) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules
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
      default_action: cdktf.listMapper(wafWebAclDefaultActionToTerraform)(this._defaultAction),
      logging_configuration: cdktf.listMapper(wafWebAclLoggingConfigurationToTerraform)(this._loggingConfiguration),
      rules: cdktf.listMapper(wafWebAclRulesToTerraform)(this._rules),
    };
  }
}
