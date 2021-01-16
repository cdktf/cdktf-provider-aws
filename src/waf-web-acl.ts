// https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafWebAclConfig extends cdktf.TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** default_action block */
  readonly defaultAction: WafWebAclDefaultAction[];
  /** logging_configuration block */
  readonly loggingConfiguration?: WafWebAclLoggingConfiguration[];
  /** rules block */
  readonly rules?: WafWebAclRules[];
}
export interface WafWebAclDefaultAction {
  readonly type: string;
}

function wafWebAclDefaultActionToTerraform(struct?: WafWebAclDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
  readonly data?: string;
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
  /** field_to_match block */
  readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}

function wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}

export interface WafWebAclLoggingConfiguration {
  readonly logDestination: string;
  /** redacted_fields block */
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
  readonly type: string;
}

function wafWebAclRulesActionToTerraform(struct?: WafWebAclRulesAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafWebAclRulesOverrideAction {
  readonly type: string;
}

function wafWebAclRulesOverrideActionToTerraform(struct?: WafWebAclRulesOverrideAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafWebAclRules {
  readonly priority: number;
  readonly ruleId: string;
  readonly type?: string;
  /** action block */
  readonly action?: WafWebAclRulesAction[];
  /** override_action block */
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


// Resource

export class WafWebAcl extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      default_action: cdktf.listMapper(wafWebAclDefaultActionToTerraform)(this._defaultAction),
      logging_configuration: cdktf.listMapper(wafWebAclLoggingConfigurationToTerraform)(this._loggingConfiguration),
      rules: cdktf.listMapper(wafWebAclRulesToTerraform)(this._rules),
    };
  }
}
