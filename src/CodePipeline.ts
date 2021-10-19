// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodePipeline
*/
export namespace CodePipeline {
  export interface CodepipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#role_arn Codepipeline#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#tags Codepipeline#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#tags_all Codepipeline#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * artifact_store block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#artifact_store Codepipeline#artifact_store}
    */
    readonly artifactStore: CodepipelineArtifactStore[];
    /**
    * stage block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#stage Codepipeline#stage}
    */
    readonly stage: CodepipelineStage[];
  }
  export interface CodepipelineArtifactStoreEncryptionKey {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#id Codepipeline#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#type Codepipeline#type}
    */
    readonly type: string;
  }

  function codepipelineArtifactStoreEncryptionKeyToTerraform(struct?: CodepipelineArtifactStoreEncryptionKeyOutputReference | CodepipelineArtifactStoreEncryptionKey): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      id: cdktf.stringToTerraform(struct!.id),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class CodepipelineArtifactStoreEncryptionKeyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface CodepipelineArtifactStore {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#location Codepipeline#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#type Codepipeline#type}
    */
    readonly type: string;
    /**
    * encryption_key block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#encryption_key Codepipeline#encryption_key}
    */
    readonly encryptionKey?: CodepipelineArtifactStoreEncryptionKey;
  }

  function codepipelineArtifactStoreToTerraform(struct?: CodepipelineArtifactStore): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      location: cdktf.stringToTerraform(struct!.location),
      region: cdktf.stringToTerraform(struct!.region),
      type: cdktf.stringToTerraform(struct!.type),
      encryption_key: codepipelineArtifactStoreEncryptionKeyToTerraform(struct!.encryptionKey),
    }
  }

  export interface CodepipelineStageAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#category Codepipeline#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#configuration Codepipeline#configuration}
    */
    readonly configuration?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#input_artifacts Codepipeline#input_artifacts}
    */
    readonly inputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#namespace Codepipeline#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#output_artifacts Codepipeline#output_artifacts}
    */
    readonly outputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#owner Codepipeline#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#provider Codepipeline#provider}
    */
    readonly provider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#role_arn Codepipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#run_order Codepipeline#run_order}
    */
    readonly runOrder?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#version Codepipeline#version}
    */
    readonly version: string;
  }

  function codepipelineStageActionToTerraform(struct?: CodepipelineStageAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      category: cdktf.stringToTerraform(struct!.category),
      configuration: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.configuration),
      input_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.inputArtifacts),
      name: cdktf.stringToTerraform(struct!.name),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      output_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outputArtifacts),
      owner: cdktf.stringToTerraform(struct!.owner),
      provider: cdktf.stringToTerraform(struct!.provider),
      region: cdktf.stringToTerraform(struct!.region),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      run_order: cdktf.numberToTerraform(struct!.runOrder),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export interface CodepipelineStage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#action Codepipeline#action}
    */
    readonly action: CodepipelineStageAction[];
  }

  function codepipelineStageToTerraform(struct?: CodepipelineStage): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      action: cdktf.listMapper(codepipelineStageActionToTerraform)(struct!.action),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline}
  */
  export class Codepipeline extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codepipeline";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineConfig
    */
    public constructor(scope: Construct, id: string, config: CodepipelineConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codepipeline',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._roleArn = config.roleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._artifactStore = config.artifactStore;
      this._stage = config.stage;
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
      return this._name
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // artifact_store - computed: false, optional: false, required: true
    private _artifactStore?: CodepipelineArtifactStore[]; 
    public get artifactStore() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('artifact_store') as any;
    }
    public set artifactStore(value: CodepipelineArtifactStore[]) {
      this._artifactStore = value;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactStoreInput() {
      return this._artifactStore
    }

    // stage - computed: false, optional: false, required: true
    private _stage?: CodepipelineStage[]; 
    public get stage() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stage') as any;
    }
    public set stage(value: CodepipelineStage[]) {
      this._stage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
      return this._stage
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        artifact_store: cdktf.listMapper(codepipelineArtifactStoreToTerraform)(this._artifactStore),
        stage: cdktf.listMapper(codepipelineStageToTerraform)(this._stage),
      };
    }
  }
  export interface CodepipelineWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#authentication CodepipelineWebhook#authentication}
    */
    readonly authentication: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#name CodepipelineWebhook#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#tags CodepipelineWebhook#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#tags_all CodepipelineWebhook#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#target_action CodepipelineWebhook#target_action}
    */
    readonly targetAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#target_pipeline CodepipelineWebhook#target_pipeline}
    */
    readonly targetPipeline: string;
    /**
    * authentication_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#authentication_configuration CodepipelineWebhook#authentication_configuration}
    */
    readonly authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration;
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#filter CodepipelineWebhook#filter}
    */
    readonly filter: CodepipelineWebhookFilter[];
  }
  export interface CodepipelineWebhookAuthenticationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#allowed_ip_range CodepipelineWebhook#allowed_ip_range}
    */
    readonly allowedIpRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#secret_token CodepipelineWebhook#secret_token}
    */
    readonly secretToken?: string;
  }

  function codepipelineWebhookAuthenticationConfigurationToTerraform(struct?: CodepipelineWebhookAuthenticationConfigurationOutputReference | CodepipelineWebhookAuthenticationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allowed_ip_range: cdktf.stringToTerraform(struct!.allowedIpRange),
      secret_token: cdktf.stringToTerraform(struct!.secretToken),
    }
  }

  export class CodepipelineWebhookAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allowed_ip_range - computed: false, optional: true, required: false
    private _allowedIpRange?: string | undefined; 
    public get allowedIpRange() {
      return this.getStringAttribute('allowed_ip_range');
    }
    public set allowedIpRange(value: string | undefined) {
      this._allowedIpRange = value;
    }
    public resetAllowedIpRange() {
      this._allowedIpRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedIpRangeInput() {
      return this._allowedIpRange
    }

    // secret_token - computed: false, optional: true, required: false
    private _secretToken?: string | undefined; 
    public get secretToken() {
      return this.getStringAttribute('secret_token');
    }
    public set secretToken(value: string | undefined) {
      this._secretToken = value;
    }
    public resetSecretToken() {
      this._secretToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretTokenInput() {
      return this._secretToken
    }
  }
  export interface CodepipelineWebhookFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#json_path CodepipelineWebhook#json_path}
    */
    readonly jsonPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#match_equals CodepipelineWebhook#match_equals}
    */
    readonly matchEquals: string;
  }

  function codepipelineWebhookFilterToTerraform(struct?: CodepipelineWebhookFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      json_path: cdktf.stringToTerraform(struct!.jsonPath),
      match_equals: cdktf.stringToTerraform(struct!.matchEquals),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook}
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
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook} Resource
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
      this._authenticationConfiguration = config.authenticationConfiguration;
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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
      return this._authentication
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
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
      return this._targetAction
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
      return this._targetPipeline
    }

    // url - computed: true, optional: false, required: false
    public get url() {
      return this.getStringAttribute('url');
    }

    // authentication_configuration - computed: false, optional: true, required: false
    private _authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration | undefined; 
    private __authenticationConfigurationOutput = new CodepipelineWebhookAuthenticationConfigurationOutputReference(this as any, "authentication_configuration", true);
    public get authenticationConfiguration() {
      return this.__authenticationConfigurationOutput;
    }
    public putAuthenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration | undefined) {
      this._authenticationConfiguration = value;
    }
    public resetAuthenticationConfiguration() {
      this._authenticationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationConfigurationInput() {
      return this._authenticationConfiguration
    }

    // filter - computed: false, optional: false, required: true
    private _filter?: CodepipelineWebhookFilter[]; 
    public get filter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: CodepipelineWebhookFilter[]) {
      this._filter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        authentication: cdktf.stringToTerraform(this._authentication),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_action: cdktf.stringToTerraform(this._targetAction),
        target_pipeline: cdktf.stringToTerraform(this._targetPipeline),
        authentication_configuration: codepipelineWebhookAuthenticationConfigurationToTerraform(this._authenticationConfiguration),
        filter: cdktf.listMapper(codepipelineWebhookFilterToTerraform)(this._filter),
      };
    }
  }
}
