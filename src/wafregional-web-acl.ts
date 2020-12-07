// https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** default_action block */
  readonly defaultAction: WafregionalWebAclDefaultAction[];
  /** logging_configuration block */
  readonly loggingConfiguration?: WafregionalWebAclLoggingConfiguration[];
  /** rule block */
  readonly rule?: WafregionalWebAclRule[];
}
export interface WafregionalWebAclDefaultAction {
  readonly type: string;
}

function wafregionalWebAclDefaultActionToTerraform(struct?: WafregionalWebAclDefaultAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
  readonly data?: string;
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
  /** field_to_match block */
  readonly fieldToMatch: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}

function wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}

export interface WafregionalWebAclLoggingConfiguration {
  readonly logDestination: string;
  /** redacted_fields block */
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
  readonly type: string;
}

function wafregionalWebAclRuleActionToTerraform(struct?: WafregionalWebAclRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalWebAclRuleOverrideAction {
  readonly type: string;
}

function wafregionalWebAclRuleOverrideActionToTerraform(struct?: WafregionalWebAclRuleOverrideAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalWebAclRule {
  readonly priority: number;
  readonly ruleId: string;
  readonly type?: string;
  /** action block */
  readonly action?: WafregionalWebAclRuleAction[];
  /** override_action block */
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


// Resource

export class WafregionalWebAcl extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      default_action: cdktf.listMapper(wafregionalWebAclDefaultActionToTerraform)(this._defaultAction),
      logging_configuration: cdktf.listMapper(wafregionalWebAclLoggingConfigurationToTerraform)(this._loggingConfiguration),
      rule: cdktf.listMapper(wafregionalWebAclRuleToTerraform)(this._rule),
    };
  }
}
