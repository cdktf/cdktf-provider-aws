// generated from terraform resource schema

import { Wafv2RuleGroupCustomResponseBody, 
Wafv2RuleGroupRule, 
Wafv2RuleGroupVisibilityConfig} from './wafv2-rule-group-structs'
import { wafv2RuleGroupCustomResponseBodyToTerraform, 
wafv2RuleGroupRuleToTerraform, 
wafv2RuleGroupVisibilityConfigToTerraform} from './wafv2-rule-group-structs'
import { Wafv2RuleGroupVisibilityConfigOutputReference } from './wafv2-rule-group-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF V2
*/
export interface Wafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#capacity Wafv2RuleGroup#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#description Wafv2RuleGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#name Wafv2RuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#scope Wafv2RuleGroup#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#tags Wafv2RuleGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#tags_all Wafv2RuleGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * custom_response_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#custom_response_body Wafv2RuleGroup#custom_response_body}
  */
  readonly customResponseBody?: Wafv2RuleGroupCustomResponseBody[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#rule Wafv2RuleGroup#rule}
  */
  readonly rule?: Wafv2RuleGroupRule[];
  /**
  * visibility_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html#visibility_config Wafv2RuleGroup#visibility_config}
  */
  readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group}
*/
export class Wafv2RuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafv2_rule_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2RuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2RuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_rule_group',
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
    this._scope = config.scope;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._customResponseBody = config.customResponseBody;
    this._rule = config.rule;
    this._visibilityConfig.internalValue = config.visibilityConfig;
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

  // lock_token - computed: true, optional: false, required: false
  public get lockToken() {
    return this.getStringAttribute('lock_token');
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // custom_response_body - computed: false, optional: true, required: false
  private _customResponseBody?: Wafv2RuleGroupCustomResponseBody[]; 
  public get customResponseBody() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_response_body') as any;
  }
  public set customResponseBody(value: Wafv2RuleGroupCustomResponseBody[]) {
    this._customResponseBody = value;
  }
  public resetCustomResponseBody() {
    this._customResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyInput() {
    return this._customResponseBody;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: Wafv2RuleGroupRule[]; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: Wafv2RuleGroupRule[]) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new Wafv2RuleGroupVisibilityConfigOutputReference(this as any, "visibility_config", true);
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2RuleGroupVisibilityConfig) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      custom_response_body: cdktf.listMapper(wafv2RuleGroupCustomResponseBodyToTerraform)(this._customResponseBody),
      rule: cdktf.listMapper(wafv2RuleGroupRuleToTerraform)(this._rule),
      visibility_config: wafv2RuleGroupVisibilityConfigToTerraform(this._visibilityConfig.internalValue),
    };
  }
}
