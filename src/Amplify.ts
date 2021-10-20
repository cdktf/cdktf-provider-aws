// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Amplify
*/
export namespace Amplify {
  export interface AmplifyAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#access_token AmplifyApp#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}
    */
    readonly autoBranchCreationPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#basic_auth_credentials AmplifyApp#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#build_spec AmplifyApp#build_spec}
    */
    readonly buildSpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#description AmplifyApp#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}
    */
    readonly enableAutoBranchCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_basic_auth AmplifyApp#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}
    */
    readonly enableBranchAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}
    */
    readonly enableBranchAutoDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#environment_variables AmplifyApp#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#iam_service_role_arn AmplifyApp#iam_service_role_arn}
    */
    readonly iamServiceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#name AmplifyApp#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#oauth_token AmplifyApp#oauth_token}
    */
    readonly oauthToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#platform AmplifyApp#platform}
    */
    readonly platform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#repository AmplifyApp#repository}
    */
    readonly repository?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#tags AmplifyApp#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#tags_all AmplifyApp#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * auto_branch_creation_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}
    */
    readonly autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
    /**
    * custom_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#custom_rule AmplifyApp#custom_rule}
    */
    readonly customRule?: AmplifyAppCustomRule[];
  }
  export class AmplifyAppProductionBranch extends cdktf.ComplexComputedList {

    // branch_name - computed: true, optional: false, required: false
    public get branchName() {
      return this.getStringAttribute('branch_name');
    }

    // last_deploy_time - computed: true, optional: false, required: false
    public get lastDeployTime() {
      return this.getStringAttribute('last_deploy_time');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // thumbnail_url - computed: true, optional: false, required: false
    public get thumbnailUrl() {
      return this.getStringAttribute('thumbnail_url');
    }
  }
  export interface AmplifyAppAutoBranchCreationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#basic_auth_credentials AmplifyApp#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#build_spec AmplifyApp#build_spec}
    */
    readonly buildSpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_auto_build AmplifyApp#enable_auto_build}
    */
    readonly enableAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_basic_auth AmplifyApp#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_performance_mode AmplifyApp#enable_performance_mode}
    */
    readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}
    */
    readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#environment_variables AmplifyApp#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#framework AmplifyApp#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#pull_request_environment_name AmplifyApp#pull_request_environment_name}
    */
    readonly pullRequestEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#stage AmplifyApp#stage}
    */
    readonly stage?: string;
  }

  function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfigOutputReference | AmplifyAppAutoBranchCreationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      basic_auth_credentials: cdktf.stringToTerraform(struct!.basicAuthCredentials),
      build_spec: cdktf.stringToTerraform(struct!.buildSpec),
      enable_auto_build: cdktf.booleanToTerraform(struct!.enableAutoBuild),
      enable_basic_auth: cdktf.booleanToTerraform(struct!.enableBasicAuth),
      enable_performance_mode: cdktf.booleanToTerraform(struct!.enablePerformanceMode),
      enable_pull_request_preview: cdktf.booleanToTerraform(struct!.enablePullRequestPreview),
      environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environmentVariables),
      framework: cdktf.stringToTerraform(struct!.framework),
      pull_request_environment_name: cdktf.stringToTerraform(struct!.pullRequestEnvironmentName),
      stage: cdktf.stringToTerraform(struct!.stage),
    }
  }

  export class AmplifyAppAutoBranchCreationConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // basic_auth_credentials - computed: false, optional: true, required: false
    private _basicAuthCredentials?: string | undefined; 
    public get basicAuthCredentials() {
      return this.getStringAttribute('basic_auth_credentials');
    }
    public set basicAuthCredentials(value: string | undefined) {
      this._basicAuthCredentials = value;
    }
    public resetBasicAuthCredentials() {
      this._basicAuthCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthCredentialsInput() {
      return this._basicAuthCredentials
    }

    // build_spec - computed: false, optional: true, required: false
    private _buildSpec?: string | undefined; 
    public get buildSpec() {
      return this.getStringAttribute('build_spec');
    }
    public set buildSpec(value: string | undefined) {
      this._buildSpec = value;
    }
    public resetBuildSpec() {
      this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildSpecInput() {
      return this._buildSpec
    }

    // enable_auto_build - computed: false, optional: true, required: false
    private _enableAutoBuild?: boolean | cdktf.IResolvable | undefined; 
    public get enableAutoBuild() {
      return this.getBooleanAttribute('enable_auto_build') as any;
    }
    public set enableAutoBuild(value: boolean | cdktf.IResolvable | undefined) {
      this._enableAutoBuild = value;
    }
    public resetEnableAutoBuild() {
      this._enableAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAutoBuildInput() {
      return this._enableAutoBuild
    }

    // enable_basic_auth - computed: false, optional: true, required: false
    private _enableBasicAuth?: boolean | cdktf.IResolvable | undefined; 
    public get enableBasicAuth() {
      return this.getBooleanAttribute('enable_basic_auth') as any;
    }
    public set enableBasicAuth(value: boolean | cdktf.IResolvable | undefined) {
      this._enableBasicAuth = value;
    }
    public resetEnableBasicAuth() {
      this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBasicAuthInput() {
      return this._enableBasicAuth
    }

    // enable_performance_mode - computed: false, optional: true, required: false
    private _enablePerformanceMode?: boolean | cdktf.IResolvable | undefined; 
    public get enablePerformanceMode() {
      return this.getBooleanAttribute('enable_performance_mode') as any;
    }
    public set enablePerformanceMode(value: boolean | cdktf.IResolvable | undefined) {
      this._enablePerformanceMode = value;
    }
    public resetEnablePerformanceMode() {
      this._enablePerformanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePerformanceModeInput() {
      return this._enablePerformanceMode
    }

    // enable_pull_request_preview - computed: false, optional: true, required: false
    private _enablePullRequestPreview?: boolean | cdktf.IResolvable | undefined; 
    public get enablePullRequestPreview() {
      return this.getBooleanAttribute('enable_pull_request_preview') as any;
    }
    public set enablePullRequestPreview(value: boolean | cdktf.IResolvable | undefined) {
      this._enablePullRequestPreview = value;
    }
    public resetEnablePullRequestPreview() {
      this._enablePullRequestPreview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePullRequestPreviewInput() {
      return this._enablePullRequestPreview
    }

    // environment_variables - computed: false, optional: true, required: false
    private _environmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get environmentVariables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('environment_variables') as any;
    }
    public set environmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
      this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
      return this._environmentVariables
    }

    // framework - computed: false, optional: true, required: false
    private _framework?: string | undefined; 
    public get framework() {
      return this.getStringAttribute('framework');
    }
    public set framework(value: string | undefined) {
      this._framework = value;
    }
    public resetFramework() {
      this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkInput() {
      return this._framework
    }

    // pull_request_environment_name - computed: false, optional: true, required: false
    private _pullRequestEnvironmentName?: string | undefined; 
    public get pullRequestEnvironmentName() {
      return this.getStringAttribute('pull_request_environment_name');
    }
    public set pullRequestEnvironmentName(value: string | undefined) {
      this._pullRequestEnvironmentName = value;
    }
    public resetPullRequestEnvironmentName() {
      this._pullRequestEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pullRequestEnvironmentNameInput() {
      return this._pullRequestEnvironmentName
    }

    // stage - computed: false, optional: true, required: false
    private _stage?: string | undefined; 
    public get stage() {
      return this.getStringAttribute('stage');
    }
    public set stage(value: string | undefined) {
      this._stage = value;
    }
    public resetStage() {
      this._stage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
      return this._stage
    }
  }
  export interface AmplifyAppCustomRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#condition AmplifyApp#condition}
    */
    readonly condition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#source AmplifyApp#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#status AmplifyApp#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#target AmplifyApp#target}
    */
    readonly target: string;
  }

  function amplifyAppCustomRuleToTerraform(struct?: AmplifyAppCustomRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      condition: cdktf.stringToTerraform(struct!.condition),
      source: cdktf.stringToTerraform(struct!.source),
      status: cdktf.stringToTerraform(struct!.status),
      target: cdktf.stringToTerraform(struct!.target),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app}
  */
  export class AmplifyApp extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_amplify_app";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyAppConfig
    */
    public constructor(scope: Construct, id: string, config: AmplifyAppConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_amplify_app',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessToken = config.accessToken;
      this._autoBranchCreationPatterns = config.autoBranchCreationPatterns;
      this._basicAuthCredentials = config.basicAuthCredentials;
      this._buildSpec = config.buildSpec;
      this._description = config.description;
      this._enableAutoBranchCreation = config.enableAutoBranchCreation;
      this._enableBasicAuth = config.enableBasicAuth;
      this._enableBranchAutoBuild = config.enableBranchAutoBuild;
      this._enableBranchAutoDeletion = config.enableBranchAutoDeletion;
      this._environmentVariables = config.environmentVariables;
      this._iamServiceRoleArn = config.iamServiceRoleArn;
      this._name = config.name;
      this._oauthToken = config.oauthToken;
      this._platform = config.platform;
      this._repository = config.repository;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._autoBranchCreationConfig = config.autoBranchCreationConfig;
      this._customRule = config.customRule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_token - computed: false, optional: true, required: false
    private _accessToken?: string | undefined; 
    public get accessToken() {
      return this.getStringAttribute('access_token');
    }
    public set accessToken(value: string | undefined) {
      this._accessToken = value;
    }
    public resetAccessToken() {
      this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenInput() {
      return this._accessToken
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_branch_creation_patterns - computed: false, optional: true, required: false
    private _autoBranchCreationPatterns?: string[] | undefined; 
    public get autoBranchCreationPatterns() {
      return this.getListAttribute('auto_branch_creation_patterns');
    }
    public set autoBranchCreationPatterns(value: string[] | undefined) {
      this._autoBranchCreationPatterns = value;
    }
    public resetAutoBranchCreationPatterns() {
      this._autoBranchCreationPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoBranchCreationPatternsInput() {
      return this._autoBranchCreationPatterns
    }

    // basic_auth_credentials - computed: false, optional: true, required: false
    private _basicAuthCredentials?: string | undefined; 
    public get basicAuthCredentials() {
      return this.getStringAttribute('basic_auth_credentials');
    }
    public set basicAuthCredentials(value: string | undefined) {
      this._basicAuthCredentials = value;
    }
    public resetBasicAuthCredentials() {
      this._basicAuthCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthCredentialsInput() {
      return this._basicAuthCredentials
    }

    // build_spec - computed: true, optional: true, required: false
    private _buildSpec?: string | undefined; 
    public get buildSpec() {
      return this.getStringAttribute('build_spec');
    }
    public set buildSpec(value: string | undefined) {
      this._buildSpec = value;
    }
    public resetBuildSpec() {
      this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildSpecInput() {
      return this._buildSpec
    }

    // default_domain - computed: true, optional: false, required: false
    public get defaultDomain() {
      return this.getStringAttribute('default_domain');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // enable_auto_branch_creation - computed: false, optional: true, required: false
    private _enableAutoBranchCreation?: boolean | cdktf.IResolvable | undefined; 
    public get enableAutoBranchCreation() {
      return this.getBooleanAttribute('enable_auto_branch_creation') as any;
    }
    public set enableAutoBranchCreation(value: boolean | cdktf.IResolvable | undefined) {
      this._enableAutoBranchCreation = value;
    }
    public resetEnableAutoBranchCreation() {
      this._enableAutoBranchCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAutoBranchCreationInput() {
      return this._enableAutoBranchCreation
    }

    // enable_basic_auth - computed: false, optional: true, required: false
    private _enableBasicAuth?: boolean | cdktf.IResolvable | undefined; 
    public get enableBasicAuth() {
      return this.getBooleanAttribute('enable_basic_auth') as any;
    }
    public set enableBasicAuth(value: boolean | cdktf.IResolvable | undefined) {
      this._enableBasicAuth = value;
    }
    public resetEnableBasicAuth() {
      this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBasicAuthInput() {
      return this._enableBasicAuth
    }

    // enable_branch_auto_build - computed: false, optional: true, required: false
    private _enableBranchAutoBuild?: boolean | cdktf.IResolvable | undefined; 
    public get enableBranchAutoBuild() {
      return this.getBooleanAttribute('enable_branch_auto_build') as any;
    }
    public set enableBranchAutoBuild(value: boolean | cdktf.IResolvable | undefined) {
      this._enableBranchAutoBuild = value;
    }
    public resetEnableBranchAutoBuild() {
      this._enableBranchAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBranchAutoBuildInput() {
      return this._enableBranchAutoBuild
    }

    // enable_branch_auto_deletion - computed: false, optional: true, required: false
    private _enableBranchAutoDeletion?: boolean | cdktf.IResolvable | undefined; 
    public get enableBranchAutoDeletion() {
      return this.getBooleanAttribute('enable_branch_auto_deletion') as any;
    }
    public set enableBranchAutoDeletion(value: boolean | cdktf.IResolvable | undefined) {
      this._enableBranchAutoDeletion = value;
    }
    public resetEnableBranchAutoDeletion() {
      this._enableBranchAutoDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBranchAutoDeletionInput() {
      return this._enableBranchAutoDeletion
    }

    // environment_variables - computed: false, optional: true, required: false
    private _environmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get environmentVariables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('environment_variables') as any;
    }
    public set environmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
      this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
      return this._environmentVariables
    }

    // iam_service_role_arn - computed: false, optional: true, required: false
    private _iamServiceRoleArn?: string | undefined; 
    public get iamServiceRoleArn() {
      return this.getStringAttribute('iam_service_role_arn');
    }
    public set iamServiceRoleArn(value: string | undefined) {
      this._iamServiceRoleArn = value;
    }
    public resetIamServiceRoleArn() {
      this._iamServiceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamServiceRoleArnInput() {
      return this._iamServiceRoleArn
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

    // oauth_token - computed: false, optional: true, required: false
    private _oauthToken?: string | undefined; 
    public get oauthToken() {
      return this.getStringAttribute('oauth_token');
    }
    public set oauthToken(value: string | undefined) {
      this._oauthToken = value;
    }
    public resetOauthToken() {
      this._oauthToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauthTokenInput() {
      return this._oauthToken
    }

    // platform - computed: false, optional: true, required: false
    private _platform?: string | undefined; 
    public get platform() {
      return this.getStringAttribute('platform');
    }
    public set platform(value: string | undefined) {
      this._platform = value;
    }
    public resetPlatform() {
      this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformInput() {
      return this._platform
    }

    // production_branch - computed: true, optional: false, required: false
    public productionBranch(index: string) {
      return new AmplifyAppProductionBranch(this, 'production_branch', index);
    }

    // repository - computed: false, optional: true, required: false
    private _repository?: string | undefined; 
    public get repository() {
      return this.getStringAttribute('repository');
    }
    public set repository(value: string | undefined) {
      this._repository = value;
    }
    public resetRepository() {
      this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryInput() {
      return this._repository
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

    // auto_branch_creation_config - computed: false, optional: true, required: false
    private _autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig | undefined; 
    private __autoBranchCreationConfigOutput = new AmplifyAppAutoBranchCreationConfigOutputReference(this as any, "auto_branch_creation_config", true);
    public get autoBranchCreationConfig() {
      return this.__autoBranchCreationConfigOutput;
    }
    public putAutoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig | undefined) {
      this._autoBranchCreationConfig = value;
    }
    public resetAutoBranchCreationConfig() {
      this._autoBranchCreationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoBranchCreationConfigInput() {
      return this._autoBranchCreationConfig
    }

    // custom_rule - computed: false, optional: true, required: false
    private _customRule?: AmplifyAppCustomRule[] | undefined; 
    public get customRule() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('custom_rule') as any;
    }
    public set customRule(value: AmplifyAppCustomRule[] | undefined) {
      this._customRule = value;
    }
    public resetCustomRule() {
      this._customRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customRuleInput() {
      return this._customRule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_token: cdktf.stringToTerraform(this._accessToken),
        auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._autoBranchCreationPatterns),
        basic_auth_credentials: cdktf.stringToTerraform(this._basicAuthCredentials),
        build_spec: cdktf.stringToTerraform(this._buildSpec),
        description: cdktf.stringToTerraform(this._description),
        enable_auto_branch_creation: cdktf.booleanToTerraform(this._enableAutoBranchCreation),
        enable_basic_auth: cdktf.booleanToTerraform(this._enableBasicAuth),
        enable_branch_auto_build: cdktf.booleanToTerraform(this._enableBranchAutoBuild),
        enable_branch_auto_deletion: cdktf.booleanToTerraform(this._enableBranchAutoDeletion),
        environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
        iam_service_role_arn: cdktf.stringToTerraform(this._iamServiceRoleArn),
        name: cdktf.stringToTerraform(this._name),
        oauth_token: cdktf.stringToTerraform(this._oauthToken),
        platform: cdktf.stringToTerraform(this._platform),
        repository: cdktf.stringToTerraform(this._repository),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        auto_branch_creation_config: amplifyAppAutoBranchCreationConfigToTerraform(this._autoBranchCreationConfig),
        custom_rule: cdktf.listMapper(amplifyAppCustomRuleToTerraform)(this._customRule),
      };
    }
  }
  export interface AmplifyBackendEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#app_id AmplifyBackendEnvironment#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#deployment_artifacts AmplifyBackendEnvironment#deployment_artifacts}
    */
    readonly deploymentArtifacts?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#environment_name AmplifyBackendEnvironment#environment_name}
    */
    readonly environmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#stack_name AmplifyBackendEnvironment#stack_name}
    */
    readonly stackName?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment}
  */
  export class AmplifyBackendEnvironment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_amplify_backend_environment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBackendEnvironmentConfig
    */
    public constructor(scope: Construct, id: string, config: AmplifyBackendEnvironmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_amplify_backend_environment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appId = config.appId;
      this._deploymentArtifacts = config.deploymentArtifacts;
      this._environmentName = config.environmentName;
      this._stackName = config.stackName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_id - computed: false, optional: false, required: true
    private _appId?: string; 
    public get appId() {
      return this.getStringAttribute('app_id');
    }
    public set appId(value: string) {
      this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdInput() {
      return this._appId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // deployment_artifacts - computed: true, optional: true, required: false
    private _deploymentArtifacts?: string | undefined; 
    public get deploymentArtifacts() {
      return this.getStringAttribute('deployment_artifacts');
    }
    public set deploymentArtifacts(value: string | undefined) {
      this._deploymentArtifacts = value;
    }
    public resetDeploymentArtifacts() {
      this._deploymentArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentArtifactsInput() {
      return this._deploymentArtifacts
    }

    // environment_name - computed: false, optional: false, required: true
    private _environmentName?: string; 
    public get environmentName() {
      return this.getStringAttribute('environment_name');
    }
    public set environmentName(value: string) {
      this._environmentName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentNameInput() {
      return this._environmentName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // stack_name - computed: true, optional: true, required: false
    private _stackName?: string | undefined; 
    public get stackName() {
      return this.getStringAttribute('stack_name');
    }
    public set stackName(value: string | undefined) {
      this._stackName = value;
    }
    public resetStackName() {
      this._stackName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackNameInput() {
      return this._stackName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_id: cdktf.stringToTerraform(this._appId),
        deployment_artifacts: cdktf.stringToTerraform(this._deploymentArtifacts),
        environment_name: cdktf.stringToTerraform(this._environmentName),
        stack_name: cdktf.stringToTerraform(this._stackName),
      };
    }
  }
  export interface AmplifyBranchConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#app_id AmplifyBranch#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#backend_environment_arn AmplifyBranch#backend_environment_arn}
    */
    readonly backendEnvironmentArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#basic_auth_credentials AmplifyBranch#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#branch_name AmplifyBranch#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#description AmplifyBranch#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#display_name AmplifyBranch#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_auto_build AmplifyBranch#enable_auto_build}
    */
    readonly enableAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_basic_auth AmplifyBranch#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_notification AmplifyBranch#enable_notification}
    */
    readonly enableNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_performance_mode AmplifyBranch#enable_performance_mode}
    */
    readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}
    */
    readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#environment_variables AmplifyBranch#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#framework AmplifyBranch#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#pull_request_environment_name AmplifyBranch#pull_request_environment_name}
    */
    readonly pullRequestEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#stage AmplifyBranch#stage}
    */
    readonly stage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#tags AmplifyBranch#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#tags_all AmplifyBranch#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#ttl AmplifyBranch#ttl}
    */
    readonly ttl?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html aws_amplify_branch}
  */
  export class AmplifyBranch extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_amplify_branch";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html aws_amplify_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBranchConfig
    */
    public constructor(scope: Construct, id: string, config: AmplifyBranchConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_amplify_branch',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appId = config.appId;
      this._backendEnvironmentArn = config.backendEnvironmentArn;
      this._basicAuthCredentials = config.basicAuthCredentials;
      this._branchName = config.branchName;
      this._description = config.description;
      this._displayName = config.displayName;
      this._enableAutoBuild = config.enableAutoBuild;
      this._enableBasicAuth = config.enableBasicAuth;
      this._enableNotification = config.enableNotification;
      this._enablePerformanceMode = config.enablePerformanceMode;
      this._enablePullRequestPreview = config.enablePullRequestPreview;
      this._environmentVariables = config.environmentVariables;
      this._framework = config.framework;
      this._pullRequestEnvironmentName = config.pullRequestEnvironmentName;
      this._stage = config.stage;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._ttl = config.ttl;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_id - computed: false, optional: false, required: true
    private _appId?: string; 
    public get appId() {
      return this.getStringAttribute('app_id');
    }
    public set appId(value: string) {
      this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdInput() {
      return this._appId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // associated_resources - computed: true, optional: false, required: false
    public get associatedResources() {
      return this.getListAttribute('associated_resources');
    }

    // backend_environment_arn - computed: false, optional: true, required: false
    private _backendEnvironmentArn?: string | undefined; 
    public get backendEnvironmentArn() {
      return this.getStringAttribute('backend_environment_arn');
    }
    public set backendEnvironmentArn(value: string | undefined) {
      this._backendEnvironmentArn = value;
    }
    public resetBackendEnvironmentArn() {
      this._backendEnvironmentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backendEnvironmentArnInput() {
      return this._backendEnvironmentArn
    }

    // basic_auth_credentials - computed: false, optional: true, required: false
    private _basicAuthCredentials?: string | undefined; 
    public get basicAuthCredentials() {
      return this.getStringAttribute('basic_auth_credentials');
    }
    public set basicAuthCredentials(value: string | undefined) {
      this._basicAuthCredentials = value;
    }
    public resetBasicAuthCredentials() {
      this._basicAuthCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthCredentialsInput() {
      return this._basicAuthCredentials
    }

    // branch_name - computed: false, optional: false, required: true
    private _branchName?: string; 
    public get branchName() {
      return this.getStringAttribute('branch_name');
    }
    public set branchName(value: string) {
      this._branchName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get branchNameInput() {
      return this._branchName
    }

    // custom_domains - computed: true, optional: false, required: false
    public get customDomains() {
      return this.getListAttribute('custom_domains');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // destination_branch - computed: true, optional: false, required: false
    public get destinationBranch() {
      return this.getStringAttribute('destination_branch');
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
      this._displayName = value;
    }
    public resetDisplayName() {
      this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
      return this._displayName
    }

    // enable_auto_build - computed: false, optional: true, required: false
    private _enableAutoBuild?: boolean | cdktf.IResolvable | undefined; 
    public get enableAutoBuild() {
      return this.getBooleanAttribute('enable_auto_build') as any;
    }
    public set enableAutoBuild(value: boolean | cdktf.IResolvable | undefined) {
      this._enableAutoBuild = value;
    }
    public resetEnableAutoBuild() {
      this._enableAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAutoBuildInput() {
      return this._enableAutoBuild
    }

    // enable_basic_auth - computed: false, optional: true, required: false
    private _enableBasicAuth?: boolean | cdktf.IResolvable | undefined; 
    public get enableBasicAuth() {
      return this.getBooleanAttribute('enable_basic_auth') as any;
    }
    public set enableBasicAuth(value: boolean | cdktf.IResolvable | undefined) {
      this._enableBasicAuth = value;
    }
    public resetEnableBasicAuth() {
      this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBasicAuthInput() {
      return this._enableBasicAuth
    }

    // enable_notification - computed: false, optional: true, required: false
    private _enableNotification?: boolean | cdktf.IResolvable | undefined; 
    public get enableNotification() {
      return this.getBooleanAttribute('enable_notification') as any;
    }
    public set enableNotification(value: boolean | cdktf.IResolvable | undefined) {
      this._enableNotification = value;
    }
    public resetEnableNotification() {
      this._enableNotification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableNotificationInput() {
      return this._enableNotification
    }

    // enable_performance_mode - computed: false, optional: true, required: false
    private _enablePerformanceMode?: boolean | cdktf.IResolvable | undefined; 
    public get enablePerformanceMode() {
      return this.getBooleanAttribute('enable_performance_mode') as any;
    }
    public set enablePerformanceMode(value: boolean | cdktf.IResolvable | undefined) {
      this._enablePerformanceMode = value;
    }
    public resetEnablePerformanceMode() {
      this._enablePerformanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePerformanceModeInput() {
      return this._enablePerformanceMode
    }

    // enable_pull_request_preview - computed: false, optional: true, required: false
    private _enablePullRequestPreview?: boolean | cdktf.IResolvable | undefined; 
    public get enablePullRequestPreview() {
      return this.getBooleanAttribute('enable_pull_request_preview') as any;
    }
    public set enablePullRequestPreview(value: boolean | cdktf.IResolvable | undefined) {
      this._enablePullRequestPreview = value;
    }
    public resetEnablePullRequestPreview() {
      this._enablePullRequestPreview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePullRequestPreviewInput() {
      return this._enablePullRequestPreview
    }

    // environment_variables - computed: false, optional: true, required: false
    private _environmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get environmentVariables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('environment_variables') as any;
    }
    public set environmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
      this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
      return this._environmentVariables
    }

    // framework - computed: false, optional: true, required: false
    private _framework?: string | undefined; 
    public get framework() {
      return this.getStringAttribute('framework');
    }
    public set framework(value: string | undefined) {
      this._framework = value;
    }
    public resetFramework() {
      this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkInput() {
      return this._framework
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pull_request_environment_name - computed: false, optional: true, required: false
    private _pullRequestEnvironmentName?: string | undefined; 
    public get pullRequestEnvironmentName() {
      return this.getStringAttribute('pull_request_environment_name');
    }
    public set pullRequestEnvironmentName(value: string | undefined) {
      this._pullRequestEnvironmentName = value;
    }
    public resetPullRequestEnvironmentName() {
      this._pullRequestEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pullRequestEnvironmentNameInput() {
      return this._pullRequestEnvironmentName
    }

    // source_branch - computed: true, optional: false, required: false
    public get sourceBranch() {
      return this.getStringAttribute('source_branch');
    }

    // stage - computed: false, optional: true, required: false
    private _stage?: string | undefined; 
    public get stage() {
      return this.getStringAttribute('stage');
    }
    public set stage(value: string | undefined) {
      this._stage = value;
    }
    public resetStage() {
      this._stage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
      return this._stage
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

    // ttl - computed: false, optional: true, required: false
    private _ttl?: string | undefined; 
    public get ttl() {
      return this.getStringAttribute('ttl');
    }
    public set ttl(value: string | undefined) {
      this._ttl = value;
    }
    public resetTtl() {
      this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
      return this._ttl
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_id: cdktf.stringToTerraform(this._appId),
        backend_environment_arn: cdktf.stringToTerraform(this._backendEnvironmentArn),
        basic_auth_credentials: cdktf.stringToTerraform(this._basicAuthCredentials),
        branch_name: cdktf.stringToTerraform(this._branchName),
        description: cdktf.stringToTerraform(this._description),
        display_name: cdktf.stringToTerraform(this._displayName),
        enable_auto_build: cdktf.booleanToTerraform(this._enableAutoBuild),
        enable_basic_auth: cdktf.booleanToTerraform(this._enableBasicAuth),
        enable_notification: cdktf.booleanToTerraform(this._enableNotification),
        enable_performance_mode: cdktf.booleanToTerraform(this._enablePerformanceMode),
        enable_pull_request_preview: cdktf.booleanToTerraform(this._enablePullRequestPreview),
        environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
        framework: cdktf.stringToTerraform(this._framework),
        pull_request_environment_name: cdktf.stringToTerraform(this._pullRequestEnvironmentName),
        stage: cdktf.stringToTerraform(this._stage),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ttl: cdktf.stringToTerraform(this._ttl),
      };
    }
  }
  export interface AmplifyDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#app_id AmplifyDomainAssociation#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#domain_name AmplifyDomainAssociation#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#wait_for_verification AmplifyDomainAssociation#wait_for_verification}
    */
    readonly waitForVerification?: boolean | cdktf.IResolvable;
    /**
    * sub_domain block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#sub_domain AmplifyDomainAssociation#sub_domain}
    */
    readonly subDomain: AmplifyDomainAssociationSubDomain[];
  }
  export interface AmplifyDomainAssociationSubDomain {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#branch_name AmplifyDomainAssociation#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#prefix AmplifyDomainAssociation#prefix}
    */
    readonly prefix: string;
  }

  function amplifyDomainAssociationSubDomainToTerraform(struct?: AmplifyDomainAssociationSubDomain): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      branch_name: cdktf.stringToTerraform(struct!.branchName),
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association}
  */
  export class AmplifyDomainAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_amplify_domain_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyDomainAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: AmplifyDomainAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_amplify_domain_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appId = config.appId;
      this._domainName = config.domainName;
      this._waitForVerification = config.waitForVerification;
      this._subDomain = config.subDomain;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_id - computed: false, optional: false, required: true
    private _appId?: string; 
    public get appId() {
      return this.getStringAttribute('app_id');
    }
    public set appId(value: string) {
      this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdInput() {
      return this._appId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_verification_dns_record - computed: true, optional: false, required: false
    public get certificateVerificationDnsRecord() {
      return this.getStringAttribute('certificate_verification_dns_record');
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // wait_for_verification - computed: false, optional: true, required: false
    private _waitForVerification?: boolean | cdktf.IResolvable | undefined; 
    public get waitForVerification() {
      return this.getBooleanAttribute('wait_for_verification') as any;
    }
    public set waitForVerification(value: boolean | cdktf.IResolvable | undefined) {
      this._waitForVerification = value;
    }
    public resetWaitForVerification() {
      this._waitForVerification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForVerificationInput() {
      return this._waitForVerification
    }

    // sub_domain - computed: false, optional: false, required: true
    private _subDomain?: AmplifyDomainAssociationSubDomain[]; 
    public get subDomain() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('sub_domain') as any;
    }
    public set subDomain(value: AmplifyDomainAssociationSubDomain[]) {
      this._subDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subDomainInput() {
      return this._subDomain
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_id: cdktf.stringToTerraform(this._appId),
        domain_name: cdktf.stringToTerraform(this._domainName),
        wait_for_verification: cdktf.booleanToTerraform(this._waitForVerification),
        sub_domain: cdktf.listMapper(amplifyDomainAssociationSubDomainToTerraform)(this._subDomain),
      };
    }
  }
  export interface AmplifyWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html#app_id AmplifyWebhook#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html#branch_name AmplifyWebhook#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html#description AmplifyWebhook#description}
    */
    readonly description?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html aws_amplify_webhook}
  */
  export class AmplifyWebhook extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_amplify_webhook";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html aws_amplify_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyWebhookConfig
    */
    public constructor(scope: Construct, id: string, config: AmplifyWebhookConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_amplify_webhook',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._appId = config.appId;
      this._branchName = config.branchName;
      this._description = config.description;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_id - computed: false, optional: false, required: true
    private _appId?: string; 
    public get appId() {
      return this.getStringAttribute('app_id');
    }
    public set appId(value: string) {
      this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdInput() {
      return this._appId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // branch_name - computed: false, optional: false, required: true
    private _branchName?: string; 
    public get branchName() {
      return this.getStringAttribute('branch_name');
    }
    public set branchName(value: string) {
      this._branchName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get branchNameInput() {
      return this._branchName
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // url - computed: true, optional: false, required: false
    public get url() {
      return this.getStringAttribute('url');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        app_id: cdktf.stringToTerraform(this._appId),
        branch_name: cdktf.stringToTerraform(this._branchName),
        description: cdktf.stringToTerraform(this._description),
      };
    }
  }
}
