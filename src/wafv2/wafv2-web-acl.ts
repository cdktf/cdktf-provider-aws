// generated from terraform resource schema

import { Wafv2WebAclCustomResponseBody, 
Wafv2WebAclDefaultAction, 
Wafv2WebAclRule, 
Wafv2WebAclVisibilityConfig} from './wafv2-web-acl-structs'
import { wafv2WebAclCustomResponseBodyToTerraform, 
wafv2WebAclDefaultActionToTerraform, 
wafv2WebAclRuleToTerraform, 
wafv2WebAclVisibilityConfigToTerraform} from './wafv2-web-acl-structs'
import { Wafv2WebAclDefaultActionOutputReference,
Wafv2WebAclVisibilityConfigOutputReference } from './wafv2-web-acl-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF V2
*/
export interface Wafv2WebAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#description Wafv2WebAcl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#tags Wafv2WebAcl#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#tags_all Wafv2WebAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * custom_response_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#custom_response_body Wafv2WebAcl#custom_response_body}
  */
  readonly customResponseBody?: Wafv2WebAclCustomResponseBody[];
  /**
  * default_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#default_action Wafv2WebAcl#default_action}
  */
  readonly defaultAction: Wafv2WebAclDefaultAction;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#rule Wafv2WebAcl#rule}
  */
  readonly rule?: Wafv2WebAclRule[];
  /**
  * visibility_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#visibility_config Wafv2WebAcl#visibility_config}
  */
  readonly visibilityConfig: Wafv2WebAclVisibilityConfig;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html aws_wafv2_web_acl}
*/
export class Wafv2WebAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafv2_web_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html aws_wafv2_web_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2WebAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._customResponseBody = config.customResponseBody;
    this._defaultAction.internalValue = config.defaultAction;
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

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
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
  private _customResponseBody?: Wafv2WebAclCustomResponseBody[]; 
  public get customResponseBody() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_response_body') as any;
  }
  public set customResponseBody(value: Wafv2WebAclCustomResponseBody[]) {
    this._customResponseBody = value;
  }
  public resetCustomResponseBody() {
    this._customResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyInput() {
    return this._customResponseBody;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new Wafv2WebAclDefaultActionOutputReference(this as any, "default_action", true);
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: Wafv2WebAclDefaultAction) {
    this._defaultAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: Wafv2WebAclRule[]; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: Wafv2WebAclRule[]) {
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
  private _visibilityConfig = new Wafv2WebAclVisibilityConfigOutputReference(this as any, "visibility_config", true);
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2WebAclVisibilityConfig) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      custom_response_body: cdktf.listMapper(wafv2WebAclCustomResponseBodyToTerraform)(this._customResponseBody),
      default_action: wafv2WebAclDefaultActionToTerraform(this._defaultAction.internalValue),
      rule: cdktf.listMapper(wafv2WebAclRuleToTerraform)(this._rule),
      visibility_config: wafv2WebAclVisibilityConfigToTerraform(this._visibilityConfig.internalValue),
    };
  }
}
