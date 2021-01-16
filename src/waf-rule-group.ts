// https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafRuleGroupConfig extends cdktf.TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** activated_rule block */
  readonly activatedRule?: WafRuleGroupActivatedRule[];
}
export interface WafRuleGroupActivatedRuleAction {
  readonly type: string;
}

function wafRuleGroupActivatedRuleActionToTerraform(struct?: WafRuleGroupActivatedRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafRuleGroupActivatedRule {
  readonly priority: number;
  readonly ruleId: string;
  readonly type?: string;
  /** action block */
  readonly action: WafRuleGroupActivatedRuleAction[];
}

function wafRuleGroupActivatedRuleToTerraform(struct?: WafRuleGroupActivatedRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    type: cdktf.stringToTerraform(struct!.type),
    action: cdktf.listMapper(wafRuleGroupActivatedRuleActionToTerraform)(struct!.action),
  }
}


// Resource

export class WafRuleGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_rule_group',
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
    this._activatedRule = config.activatedRule;
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

  // activated_rule - computed: false, optional: true, required: false
  private _activatedRule?: WafRuleGroupActivatedRule[];
  public get activatedRule() {
    return this.interpolationForAttribute('activated_rule') as any;
  }
  public set activatedRule(value: WafRuleGroupActivatedRule[] ) {
    this._activatedRule = value;
  }
  public resetActivatedRule() {
    this._activatedRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activatedRuleInput() {
    return this._activatedRule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      activated_rule: cdktf.listMapper(wafRuleGroupActivatedRuleToTerraform)(this._activatedRule),
    };
  }
}
