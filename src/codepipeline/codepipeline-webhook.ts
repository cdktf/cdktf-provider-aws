// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodePipeline
*/
export interface CodepipelineWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}
  */
  readonly authentication: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}
  */
  readonly targetAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}
  */
  readonly targetPipeline: string;
  /**
  * authentication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}
  */
  readonly authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#filter CodepipelineWebhook#filter}
  */
  readonly filter: CodepipelineWebhookFilter[] | cdktf.IResolvable;
}
export interface CodepipelineWebhookAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}
  */
  readonly allowedIpRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}
  */
  readonly secretToken?: string;
}

export function codepipelineWebhookAuthenticationConfigurationToTerraform(struct?: CodepipelineWebhookAuthenticationConfigurationOutputReference | CodepipelineWebhookAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_range: cdktf.stringToTerraform(struct!.allowedIpRange),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}

export class CodepipelineWebhookAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CodepipelineWebhookAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpRange = this._allowedIpRange;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodepipelineWebhookAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIpRange = undefined;
      this._secretToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIpRange = value.allowedIpRange;
      this._secretToken = value.secretToken;
    }
  }

  // allowed_ip_range - computed: false, optional: true, required: false
  private _allowedIpRange?: string; 
  public get allowedIpRange() {
    return this.getStringAttribute('allowed_ip_range');
  }
  public set allowedIpRange(value: string) {
    this._allowedIpRange = value;
  }
  public resetAllowedIpRange() {
    this._allowedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangeInput() {
    return this._allowedIpRange;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface CodepipelineWebhookFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#json_path CodepipelineWebhook#json_path}
  */
  readonly jsonPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}
  */
  readonly matchEquals: string;
}

export function codepipelineWebhookFilterToTerraform(struct?: CodepipelineWebhookFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    match_equals: cdktf.stringToTerraform(struct!.matchEquals),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook aws_codepipeline_webhook}
*/
export class CodepipelineWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codepipeline_webhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook aws_codepipeline_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodepipelineWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: CodepipelineWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codepipeline_webhook',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authentication = config.authentication;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetAction = config.targetAction;
    this._targetPipeline = config.targetPipeline;
    this._authenticationConfiguration.internalValue = config.authenticationConfiguration;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // target_action - computed: false, optional: false, required: true
  private _targetAction?: string; 
  public get targetAction() {
    return this.getStringAttribute('target_action');
  }
  public set targetAction(value: string) {
    this._targetAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetActionInput() {
    return this._targetAction;
  }

  // target_pipeline - computed: false, optional: false, required: true
  private _targetPipeline?: string; 
  public get targetPipeline() {
    return this.getStringAttribute('target_pipeline');
  }
  public set targetPipeline(value: string) {
    this._targetPipeline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPipelineInput() {
    return this._targetPipeline;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration = new CodepipelineWebhookAuthenticationConfigurationOutputReference(this, "authentication_configuration", true);
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: CodepipelineWebhookFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: CodepipelineWebhookFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      target_action: cdktf.stringToTerraform(this._targetAction),
      target_pipeline: cdktf.stringToTerraform(this._targetPipeline),
      authentication_configuration: codepipelineWebhookAuthenticationConfigurationToTerraform(this._authenticationConfiguration.internalValue),
      filter: cdktf.listMapper(codepipelineWebhookFilterToTerraform)(this._filter),
    };
  }
}
