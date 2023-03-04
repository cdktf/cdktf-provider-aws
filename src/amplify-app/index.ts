// https://www.terraform.io/docs/providers/aws/r/amplify_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmplifyAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}
  */
  readonly autoBranchCreationPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}
  */
  readonly basicAuthCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}
  */
  readonly buildSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}
  */
  readonly enableAutoBranchCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}
  */
  readonly enableBasicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}
  */
  readonly enableBranchAutoBuild?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}
  */
  readonly enableBranchAutoDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}
  */
  readonly iamServiceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}
  */
  readonly oauthToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}
  */
  readonly repository?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * auto_branch_creation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}
  */
  readonly autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
  /**
  * custom_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#custom_rule AmplifyApp#custom_rule}
  */
  readonly customRule?: AmplifyAppCustomRule[] | cdktf.IResolvable;
}
export interface AmplifyAppProductionBranch {
}

export function amplifyAppProductionBranchToTerraform(struct?: AmplifyAppProductionBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AmplifyAppProductionBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AmplifyAppProductionBranch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppProductionBranch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class AmplifyAppProductionBranchList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AmplifyAppProductionBranchOutputReference {
    return new AmplifyAppProductionBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmplifyAppAutoBranchCreationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}
  */
  readonly basicAuthCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}
  */
  readonly buildSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}
  */
  readonly enableAutoBuild?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}
  */
  readonly enableBasicAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}
  */
  readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}
  */
  readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}
  */
  readonly framework?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}
  */
  readonly pullRequestEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}
  */
  readonly stage?: string;
}

export function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfigOutputReference | AmplifyAppAutoBranchCreationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    framework: cdktf.stringToTerraform(struct!.framework),
    pull_request_environment_name: cdktf.stringToTerraform(struct!.pullRequestEnvironmentName),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}

export class AmplifyAppAutoBranchCreationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AmplifyAppAutoBranchCreationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuthCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthCredentials = this._basicAuthCredentials;
    }
    if (this._buildSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildSpec = this._buildSpec;
    }
    if (this._enableAutoBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoBuild = this._enableAutoBuild;
    }
    if (this._enableBasicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBasicAuth = this._enableBasicAuth;
    }
    if (this._enablePerformanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerformanceMode = this._enablePerformanceMode;
    }
    if (this._enablePullRequestPreview !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePullRequestPreview = this._enablePullRequestPreview;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._pullRequestEnvironmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestEnvironmentName = this._pullRequestEnvironmentName;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppAutoBranchCreationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAuthCredentials = undefined;
      this._buildSpec = undefined;
      this._enableAutoBuild = undefined;
      this._enableBasicAuth = undefined;
      this._enablePerformanceMode = undefined;
      this._enablePullRequestPreview = undefined;
      this._environmentVariables = undefined;
      this._framework = undefined;
      this._pullRequestEnvironmentName = undefined;
      this._stage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAuthCredentials = value.basicAuthCredentials;
      this._buildSpec = value.buildSpec;
      this._enableAutoBuild = value.enableAutoBuild;
      this._enableBasicAuth = value.enableBasicAuth;
      this._enablePerformanceMode = value.enablePerformanceMode;
      this._enablePullRequestPreview = value.enablePullRequestPreview;
      this._environmentVariables = value.environmentVariables;
      this._framework = value.framework;
      this._pullRequestEnvironmentName = value.pullRequestEnvironmentName;
      this._stage = value.stage;
    }
  }

  // basic_auth_credentials - computed: false, optional: true, required: false
  private _basicAuthCredentials?: string; 
  public get basicAuthCredentials() {
    return this.getStringAttribute('basic_auth_credentials');
  }
  public set basicAuthCredentials(value: string) {
    this._basicAuthCredentials = value;
  }
  public resetBasicAuthCredentials() {
    this._basicAuthCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthCredentialsInput() {
    return this._basicAuthCredentials;
  }

  // build_spec - computed: false, optional: true, required: false
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
    return this._buildSpec;
  }

  // enable_auto_build - computed: false, optional: true, required: false
  private _enableAutoBuild?: boolean | cdktf.IResolvable; 
  public get enableAutoBuild() {
    return this.getBooleanAttribute('enable_auto_build');
  }
  public set enableAutoBuild(value: boolean | cdktf.IResolvable) {
    this._enableAutoBuild = value;
  }
  public resetEnableAutoBuild() {
    this._enableAutoBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoBuildInput() {
    return this._enableAutoBuild;
  }

  // enable_basic_auth - computed: false, optional: true, required: false
  private _enableBasicAuth?: boolean | cdktf.IResolvable; 
  public get enableBasicAuth() {
    return this.getBooleanAttribute('enable_basic_auth');
  }
  public set enableBasicAuth(value: boolean | cdktf.IResolvable) {
    this._enableBasicAuth = value;
  }
  public resetEnableBasicAuth() {
    this._enableBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBasicAuthInput() {
    return this._enableBasicAuth;
  }

  // enable_performance_mode - computed: false, optional: true, required: false
  private _enablePerformanceMode?: boolean | cdktf.IResolvable; 
  public get enablePerformanceMode() {
    return this.getBooleanAttribute('enable_performance_mode');
  }
  public set enablePerformanceMode(value: boolean | cdktf.IResolvable) {
    this._enablePerformanceMode = value;
  }
  public resetEnablePerformanceMode() {
    this._enablePerformanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerformanceModeInput() {
    return this._enablePerformanceMode;
  }

  // enable_pull_request_preview - computed: false, optional: true, required: false
  private _enablePullRequestPreview?: boolean | cdktf.IResolvable; 
  public get enablePullRequestPreview() {
    return this.getBooleanAttribute('enable_pull_request_preview');
  }
  public set enablePullRequestPreview(value: boolean | cdktf.IResolvable) {
    this._enablePullRequestPreview = value;
  }
  public resetEnablePullRequestPreview() {
    this._enablePullRequestPreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePullRequestPreviewInput() {
    return this._enablePullRequestPreview;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // pull_request_environment_name - computed: false, optional: true, required: false
  private _pullRequestEnvironmentName?: string; 
  public get pullRequestEnvironmentName() {
    return this.getStringAttribute('pull_request_environment_name');
  }
  public set pullRequestEnvironmentName(value: string) {
    this._pullRequestEnvironmentName = value;
  }
  public resetPullRequestEnvironmentName() {
    this._pullRequestEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestEnvironmentNameInput() {
    return this._pullRequestEnvironmentName;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }
}
export interface AmplifyAppCustomRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#condition AmplifyApp#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#source AmplifyApp#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#status AmplifyApp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#target AmplifyApp#target}
  */
  readonly target: string;
}

export function amplifyAppCustomRuleToTerraform(struct?: AmplifyAppCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class AmplifyAppCustomRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AmplifyAppCustomRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._source = undefined;
      this._status = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._source = value.source;
      this._status = value.status;
      this._target = value.target;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class AmplifyAppCustomRuleList extends cdktf.ComplexList {
  public internalValue? : AmplifyAppCustomRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AmplifyAppCustomRuleOutputReference {
    return new AmplifyAppCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app aws_amplify_app}
*/
export class AmplifyApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_amplify_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_app aws_amplify_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyAppConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyAppConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_amplify_app',
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
    this._id = config.id;
    this._name = config.name;
    this._oauthToken = config.oauthToken;
    this._platform = config.platform;
    this._repository = config.repository;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._autoBranchCreationConfig.internalValue = config.autoBranchCreationConfig;
    this._customRule.internalValue = config.customRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_branch_creation_patterns - computed: false, optional: true, required: false
  private _autoBranchCreationPatterns?: string[]; 
  public get autoBranchCreationPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_branch_creation_patterns'));
  }
  public set autoBranchCreationPatterns(value: string[]) {
    this._autoBranchCreationPatterns = value;
  }
  public resetAutoBranchCreationPatterns() {
    this._autoBranchCreationPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBranchCreationPatternsInput() {
    return this._autoBranchCreationPatterns;
  }

  // basic_auth_credentials - computed: false, optional: true, required: false
  private _basicAuthCredentials?: string; 
  public get basicAuthCredentials() {
    return this.getStringAttribute('basic_auth_credentials');
  }
  public set basicAuthCredentials(value: string) {
    this._basicAuthCredentials = value;
  }
  public resetBasicAuthCredentials() {
    this._basicAuthCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthCredentialsInput() {
    return this._basicAuthCredentials;
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
    return this._buildSpec;
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

  // enable_auto_branch_creation - computed: false, optional: true, required: false
  private _enableAutoBranchCreation?: boolean | cdktf.IResolvable; 
  public get enableAutoBranchCreation() {
    return this.getBooleanAttribute('enable_auto_branch_creation');
  }
  public set enableAutoBranchCreation(value: boolean | cdktf.IResolvable) {
    this._enableAutoBranchCreation = value;
  }
  public resetEnableAutoBranchCreation() {
    this._enableAutoBranchCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoBranchCreationInput() {
    return this._enableAutoBranchCreation;
  }

  // enable_basic_auth - computed: false, optional: true, required: false
  private _enableBasicAuth?: boolean | cdktf.IResolvable; 
  public get enableBasicAuth() {
    return this.getBooleanAttribute('enable_basic_auth');
  }
  public set enableBasicAuth(value: boolean | cdktf.IResolvable) {
    this._enableBasicAuth = value;
  }
  public resetEnableBasicAuth() {
    this._enableBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBasicAuthInput() {
    return this._enableBasicAuth;
  }

  // enable_branch_auto_build - computed: false, optional: true, required: false
  private _enableBranchAutoBuild?: boolean | cdktf.IResolvable; 
  public get enableBranchAutoBuild() {
    return this.getBooleanAttribute('enable_branch_auto_build');
  }
  public set enableBranchAutoBuild(value: boolean | cdktf.IResolvable) {
    this._enableBranchAutoBuild = value;
  }
  public resetEnableBranchAutoBuild() {
    this._enableBranchAutoBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBranchAutoBuildInput() {
    return this._enableBranchAutoBuild;
  }

  // enable_branch_auto_deletion - computed: false, optional: true, required: false
  private _enableBranchAutoDeletion?: boolean | cdktf.IResolvable; 
  public get enableBranchAutoDeletion() {
    return this.getBooleanAttribute('enable_branch_auto_deletion');
  }
  public set enableBranchAutoDeletion(value: boolean | cdktf.IResolvable) {
    this._enableBranchAutoDeletion = value;
  }
  public resetEnableBranchAutoDeletion() {
    this._enableBranchAutoDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBranchAutoDeletionInput() {
    return this._enableBranchAutoDeletion;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // iam_service_role_arn - computed: false, optional: true, required: false
  private _iamServiceRoleArn?: string; 
  public get iamServiceRoleArn() {
    return this.getStringAttribute('iam_service_role_arn');
  }
  public set iamServiceRoleArn(value: string) {
    this._iamServiceRoleArn = value;
  }
  public resetIamServiceRoleArn() {
    this._iamServiceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceRoleArnInput() {
    return this._iamServiceRoleArn;
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

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken?: string; 
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }
  public set oauthToken(value: string) {
    this._oauthToken = value;
  }
  public resetOauthToken() {
    this._oauthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // production_branch - computed: true, optional: false, required: false
  private _productionBranch = new AmplifyAppProductionBranchList(this, "production_branch", false);
  public get productionBranch() {
    return this._productionBranch;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
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

  // auto_branch_creation_config - computed: false, optional: true, required: false
  private _autoBranchCreationConfig = new AmplifyAppAutoBranchCreationConfigOutputReference(this, "auto_branch_creation_config");
  public get autoBranchCreationConfig() {
    return this._autoBranchCreationConfig;
  }
  public putAutoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig) {
    this._autoBranchCreationConfig.internalValue = value;
  }
  public resetAutoBranchCreationConfig() {
    this._autoBranchCreationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBranchCreationConfigInput() {
    return this._autoBranchCreationConfig.internalValue;
  }

  // custom_rule - computed: false, optional: true, required: false
  private _customRule = new AmplifyAppCustomRuleList(this, "custom_rule", false);
  public get customRule() {
    return this._customRule;
  }
  public putCustomRule(value: AmplifyAppCustomRule[] | cdktf.IResolvable) {
    this._customRule.internalValue = value;
  }
  public resetCustomRule() {
    this._customRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleInput() {
    return this._customRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoBranchCreationPatterns),
      basic_auth_credentials: cdktf.stringToTerraform(this._basicAuthCredentials),
      build_spec: cdktf.stringToTerraform(this._buildSpec),
      description: cdktf.stringToTerraform(this._description),
      enable_auto_branch_creation: cdktf.booleanToTerraform(this._enableAutoBranchCreation),
      enable_basic_auth: cdktf.booleanToTerraform(this._enableBasicAuth),
      enable_branch_auto_build: cdktf.booleanToTerraform(this._enableBranchAutoBuild),
      enable_branch_auto_deletion: cdktf.booleanToTerraform(this._enableBranchAutoDeletion),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      iam_service_role_arn: cdktf.stringToTerraform(this._iamServiceRoleArn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oauth_token: cdktf.stringToTerraform(this._oauthToken),
      platform: cdktf.stringToTerraform(this._platform),
      repository: cdktf.stringToTerraform(this._repository),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      auto_branch_creation_config: amplifyAppAutoBranchCreationConfigToTerraform(this._autoBranchCreationConfig.internalValue),
      custom_rule: cdktf.listMapper(amplifyAppCustomRuleToTerraform, true)(this._customRule.internalValue),
    };
  }
}
