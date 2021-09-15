// https://www.terraform.io/docs/providers/aws/r/amplify_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig[];
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

function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  private _accessToken?: string;
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string ) {
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
  private _autoBranchCreationPatterns?: string[];
  public get autoBranchCreationPatterns() {
    return this.getListAttribute('auto_branch_creation_patterns');
  }
  public set autoBranchCreationPatterns(value: string[] ) {
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
  private _basicAuthCredentials?: string;
  public get basicAuthCredentials() {
    return this.getStringAttribute('basic_auth_credentials');
  }
  public set basicAuthCredentials(value: string ) {
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
  private _buildSpec?: string;
  public get buildSpec() {
    return this.getStringAttribute('build_spec');
  }
  public set buildSpec(value: string) {
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _enableAutoBranchCreation?: boolean | cdktf.IResolvable;
  public get enableAutoBranchCreation() {
    return this.getBooleanAttribute('enable_auto_branch_creation');
  }
  public set enableAutoBranchCreation(value: boolean | cdktf.IResolvable ) {
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
  private _enableBasicAuth?: boolean | cdktf.IResolvable;
  public get enableBasicAuth() {
    return this.getBooleanAttribute('enable_basic_auth');
  }
  public set enableBasicAuth(value: boolean | cdktf.IResolvable ) {
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
  private _enableBranchAutoBuild?: boolean | cdktf.IResolvable;
  public get enableBranchAutoBuild() {
    return this.getBooleanAttribute('enable_branch_auto_build');
  }
  public set enableBranchAutoBuild(value: boolean | cdktf.IResolvable ) {
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
  private _enableBranchAutoDeletion?: boolean | cdktf.IResolvable;
  public get enableBranchAutoDeletion() {
    return this.getBooleanAttribute('enable_branch_auto_deletion');
  }
  public set enableBranchAutoDeletion(value: boolean | cdktf.IResolvable ) {
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
  private _environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
  }
  public set environmentVariables(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _iamServiceRoleArn?: string;
  public get iamServiceRoleArn() {
    return this.getStringAttribute('iam_service_role_arn');
  }
  public set iamServiceRoleArn(value: string ) {
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

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken?: string;
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }
  public set oauthToken(value: string ) {
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
  private _platform?: string;
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string ) {
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
  private _repository?: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string ) {
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

  // auto_branch_creation_config - computed: false, optional: true, required: false
  private _autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig[];
  public get autoBranchCreationConfig() {
    return this.interpolationForAttribute('auto_branch_creation_config') as any;
  }
  public set autoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig[] ) {
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
  private _customRule?: AmplifyAppCustomRule[];
  public get customRule() {
    return this.interpolationForAttribute('custom_rule') as any;
  }
  public set customRule(value: AmplifyAppCustomRule[] ) {
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
      auto_branch_creation_config: cdktf.listMapper(amplifyAppAutoBranchCreationConfigToTerraform)(this._autoBranchCreationConfig),
      custom_rule: cdktf.listMapper(amplifyAppCustomRuleToTerraform)(this._customRule),
    };
  }
}
