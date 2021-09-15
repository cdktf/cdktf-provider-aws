// https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#metric_name WafRuleGroup#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#name WafRuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags WafRuleGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#tags_all WafRuleGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * activated_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#activated_rule WafRuleGroup#activated_rule}
  */
  readonly activatedRule?: WafRuleGroupActivatedRule[];
}
export interface WafRuleGroupActivatedRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}
  */
  readonly type: string;
}

function wafRuleGroupActivatedRuleActionToTerraform(struct?: WafRuleGroupActivatedRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafRuleGroupActivatedRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#priority WafRuleGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#rule_id WafRuleGroup#rule_id}
  */
  readonly ruleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#type WafRuleGroup#type}
  */
  readonly type?: string;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html#action WafRuleGroup#action}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group}
*/
export class WafRuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_waf_rule_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html aws_waf_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafRuleGroupConfig
  */
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
    this._tagsAll = config.tagsAll;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      activated_rule: cdktf.listMapper(wafRuleGroupActivatedRuleToTerraform)(this._activatedRule),
    };
  }
}
