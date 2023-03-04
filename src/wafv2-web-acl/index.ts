// generated from terraform resource schema

import { Wafv2WebAclCustomResponseBody, 
wafv2WebAclCustomResponseBodyToTerraform, 
Wafv2WebAclCustomResponseBodyList, 
Wafv2WebAclDefaultAction, 
wafv2WebAclDefaultActionToTerraform, 
Wafv2WebAclDefaultActionOutputReference, 
Wafv2WebAclRule, 
wafv2WebAclRuleToTerraform, 
Wafv2WebAclRuleList, 
Wafv2WebAclVisibilityConfig, 
wafv2WebAclVisibilityConfigToTerraform, 
Wafv2WebAclVisibilityConfigOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2WebAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#description Wafv2WebAcl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#id Wafv2WebAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#scope Wafv2WebAcl#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#tags Wafv2WebAcl#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * custom_response_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#custom_response_body Wafv2WebAcl#custom_response_body}
  */
  readonly customResponseBody?: Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable;
  /**
  * default_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#default_action Wafv2WebAcl#default_action}
  */
  readonly defaultAction: Wafv2WebAclDefaultAction;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#rule Wafv2WebAcl#rule}
  */
  readonly rule?: Wafv2WebAclRule[] | cdktf.IResolvable;
  /**
  * visibility_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}
  */
  readonly visibilityConfig: Wafv2WebAclVisibilityConfig;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl aws_wafv2_web_acl}
*/
export class Wafv2WebAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_web_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl aws_wafv2_web_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2WebAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._customResponseBody.internalValue = config.customResponseBody;
    this._defaultAction.internalValue = config.defaultAction;
    this._rule.internalValue = config.rule;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
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
  private _customResponseBody = new Wafv2WebAclCustomResponseBodyList(this, "custom_response_body", true);
  public get customResponseBody() {
    return this._customResponseBody;
  }
  public putCustomResponseBody(value: Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable) {
    this._customResponseBody.internalValue = value;
  }
  public resetCustomResponseBody() {
    this._customResponseBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyInput() {
    return this._customResponseBody.internalValue;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new Wafv2WebAclDefaultActionOutputReference(this, "default_action");
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
  private _rule = new Wafv2WebAclRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: Wafv2WebAclRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new Wafv2WebAclVisibilityConfigOutputReference(this, "visibility_config");
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      custom_response_body: cdktf.listMapper(wafv2WebAclCustomResponseBodyToTerraform, true)(this._customResponseBody.internalValue),
      default_action: wafv2WebAclDefaultActionToTerraform(this._defaultAction.internalValue),
      rule: cdktf.listMapper(wafv2WebAclRuleToTerraform, true)(this._rule.internalValue),
      visibility_config: wafv2WebAclVisibilityConfigToTerraform(this._visibilityConfig.internalValue),
    };
  }
}
