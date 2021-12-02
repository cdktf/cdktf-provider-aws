// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS AppSync
*/
export interface AppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#name AppsyncGraphqlApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#schema AppsyncGraphqlApi#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags AppsyncGraphqlApi#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags_all AppsyncGraphqlApi#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#xray_enabled AppsyncGraphqlApi#xray_enabled}
  */
  readonly xrayEnabled?: boolean | cdktf.IResolvable;
  /**
  * additional_authentication_provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}
  */
  readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#log_config AppsyncGraphqlApi#log_config}
  */
  readonly logConfig?: AppsyncGraphqlApiLogConfig;
  /**
  * openid_connect_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig;
  /**
  * user_pool_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}
  */
  readonly issuer: string;
}

export function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}

export class AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._authTtl) {
      hasAnyValues = true;
      internalValueResult.authTtl = this._authTtl;
    }
    if (this._clientId) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._iatTtl) {
      hasAnyValues = true;
      internalValueResult.iatTtl = this._iatTtl;
    }
    if (this._issuer) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined) {
    if (value === undefined) {
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else {
      this._authTtl = value.authTtl;
      this._clientId = value.clientId;
      this._iatTtl = value.iatTtl;
      this._issuer = value.issuer;
    }
  }

  // auth_ttl - computed: false, optional: true, required: false
  private _authTtl?: number; 
  public get authTtl() {
    return this.getNumberAttribute('auth_ttl');
  }
  public set authTtl(value: number) {
    this._authTtl = value;
  }
  public resetAuthTtl() {
    this._authTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTtlInput() {
    return this._authTtl;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // iat_ttl - computed: false, optional: true, required: false
  private _iatTtl?: number; 
  public get iatTtl() {
    return this.getNumberAttribute('iat_ttl');
  }
  public set iatTtl(value: number) {
    this._iatTtl = value;
  }
  public resetIatTtl() {
    this._iatTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iatTtlInput() {
    return this._iatTtl;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}
  */
  readonly userPoolId: string;
}

export function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}

export class AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._appIdClientRegex) {
      hasAnyValues = true;
      internalValueResult.appIdClientRegex = this._appIdClientRegex;
    }
    if (this._awsRegion) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._userPoolId) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined) {
    if (value === undefined) {
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._userPoolId = undefined;
    }
    else {
      this._appIdClientRegex = value.appIdClientRegex;
      this._awsRegion = value.awsRegion;
      this._userPoolId = value.userPoolId;
    }
  }

  // app_id_client_regex - computed: false, optional: true, required: false
  private _appIdClientRegex?: string; 
  public get appIdClientRegex() {
    return this.getStringAttribute('app_id_client_regex');
  }
  public set appIdClientRegex(value: string) {
    this._appIdClientRegex = value;
  }
  public resetAppIdClientRegex() {
    this._appIdClientRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdClientRegexInput() {
    return this._appIdClientRegex;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * openid_connect_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
  /**
  * user_pool_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
}

export function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    openid_connect_config: appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct!.openidConnectConfig),
    user_pool_config: appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct!.userPoolConfig),
  }
}

export interface AppsyncGraphqlApiLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}
  */
  readonly cloudwatchLogsRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}
  */
  readonly excludeVerboseContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#field_log_level AppsyncGraphqlApi#field_log_level}
  */
  readonly fieldLogLevel: string;
}

export function appsyncGraphqlApiLogConfigToTerraform(struct?: AppsyncGraphqlApiLogConfigOutputReference | AppsyncGraphqlApiLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsRoleArn),
    exclude_verbose_content: cdktf.booleanToTerraform(struct!.excludeVerboseContent),
    field_log_level: cdktf.stringToTerraform(struct!.fieldLogLevel),
  }
}

export class AppsyncGraphqlApiLogConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncGraphqlApiLogConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cloudwatchLogsRoleArn) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsRoleArn = this._cloudwatchLogsRoleArn;
    }
    if (this._excludeVerboseContent) {
      hasAnyValues = true;
      internalValueResult.excludeVerboseContent = this._excludeVerboseContent;
    }
    if (this._fieldLogLevel) {
      hasAnyValues = true;
      internalValueResult.fieldLogLevel = this._fieldLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiLogConfig | undefined) {
    if (value === undefined) {
      this._cloudwatchLogsRoleArn = undefined;
      this._excludeVerboseContent = undefined;
      this._fieldLogLevel = undefined;
    }
    else {
      this._cloudwatchLogsRoleArn = value.cloudwatchLogsRoleArn;
      this._excludeVerboseContent = value.excludeVerboseContent;
      this._fieldLogLevel = value.fieldLogLevel;
    }
  }

  // cloudwatch_logs_role_arn - computed: false, optional: false, required: true
  private _cloudwatchLogsRoleArn?: string; 
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }
  public set cloudwatchLogsRoleArn(value: string) {
    this._cloudwatchLogsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsRoleArnInput() {
    return this._cloudwatchLogsRoleArn;
  }

  // exclude_verbose_content - computed: false, optional: true, required: false
  private _excludeVerboseContent?: boolean | cdktf.IResolvable; 
  public get excludeVerboseContent() {
    return this.getBooleanAttribute('exclude_verbose_content') as any;
  }
  public set excludeVerboseContent(value: boolean | cdktf.IResolvable) {
    this._excludeVerboseContent = value;
  }
  public resetExcludeVerboseContent() {
    this._excludeVerboseContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVerboseContentInput() {
    return this._excludeVerboseContent;
  }

  // field_log_level - computed: false, optional: false, required: true
  private _fieldLogLevel?: string; 
  public get fieldLogLevel() {
    return this.getStringAttribute('field_log_level');
  }
  public set fieldLogLevel(value: string) {
    this._fieldLogLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLogLevelInput() {
    return this._fieldLogLevel;
  }
}
export interface AppsyncGraphqlApiOpenidConnectConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}
  */
  readonly issuer: string;
}

export function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfigOutputReference | AppsyncGraphqlApiOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}

export class AppsyncGraphqlApiOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncGraphqlApiOpenidConnectConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._authTtl) {
      hasAnyValues = true;
      internalValueResult.authTtl = this._authTtl;
    }
    if (this._clientId) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._iatTtl) {
      hasAnyValues = true;
      internalValueResult.iatTtl = this._iatTtl;
    }
    if (this._issuer) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiOpenidConnectConfig | undefined) {
    if (value === undefined) {
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else {
      this._authTtl = value.authTtl;
      this._clientId = value.clientId;
      this._iatTtl = value.iatTtl;
      this._issuer = value.issuer;
    }
  }

  // auth_ttl - computed: false, optional: true, required: false
  private _authTtl?: number; 
  public get authTtl() {
    return this.getNumberAttribute('auth_ttl');
  }
  public set authTtl(value: number) {
    this._authTtl = value;
  }
  public resetAuthTtl() {
    this._authTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTtlInput() {
    return this._authTtl;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // iat_ttl - computed: false, optional: true, required: false
  private _iatTtl?: number; 
  public get iatTtl() {
    return this.getNumberAttribute('iat_ttl');
  }
  public set iatTtl(value: number) {
    this._iatTtl = value;
  }
  public resetIatTtl() {
    this._iatTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iatTtlInput() {
    return this._iatTtl;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface AppsyncGraphqlApiUserPoolConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#default_action AppsyncGraphqlApi#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}
  */
  readonly userPoolId: string;
}

export function appsyncGraphqlApiUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiUserPoolConfigOutputReference | AppsyncGraphqlApiUserPoolConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}

export class AppsyncGraphqlApiUserPoolConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncGraphqlApiUserPoolConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._appIdClientRegex) {
      hasAnyValues = true;
      internalValueResult.appIdClientRegex = this._appIdClientRegex;
    }
    if (this._awsRegion) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._defaultAction) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._userPoolId) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiUserPoolConfig | undefined) {
    if (value === undefined) {
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._defaultAction = undefined;
      this._userPoolId = undefined;
    }
    else {
      this._appIdClientRegex = value.appIdClientRegex;
      this._awsRegion = value.awsRegion;
      this._defaultAction = value.defaultAction;
      this._userPoolId = value.userPoolId;
    }
  }

  // app_id_client_regex - computed: false, optional: true, required: false
  private _appIdClientRegex?: string; 
  public get appIdClientRegex() {
    return this.getStringAttribute('app_id_client_regex');
  }
  public set appIdClientRegex(value: string) {
    this._appIdClientRegex = value;
  }
  public resetAppIdClientRegex() {
    this._appIdClientRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdClientRegexInput() {
    return this._appIdClientRegex;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api}
*/
export class AppsyncGraphqlApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appsync_graphql_api";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncGraphqlApiConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncGraphqlApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_graphql_api',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authenticationType = config.authenticationType;
    this._name = config.name;
    this._schema = config.schema;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._xrayEnabled = config.xrayEnabled;
    this._additionalAuthenticationProvider = config.additionalAuthenticationProvider;
    this._logConfig.internalValue = config.logConfig;
    this._openidConnectConfig.internalValue = config.openidConnectConfig;
    this._userPoolConfig.internalValue = config.userPoolConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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

  // uris - computed: true, optional: false, required: false
  public uris(key: string): string {
    return new cdktf.StringMap(this, 'uris').lookup(key);
  }

  // xray_enabled - computed: false, optional: true, required: false
  private _xrayEnabled?: boolean | cdktf.IResolvable; 
  public get xrayEnabled() {
    return this.getBooleanAttribute('xray_enabled') as any;
  }
  public set xrayEnabled(value: boolean | cdktf.IResolvable) {
    this._xrayEnabled = value;
  }
  public resetXrayEnabled() {
    this._xrayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayEnabledInput() {
    return this._xrayEnabled;
  }

  // additional_authentication_provider - computed: false, optional: true, required: false
  private _additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[]; 
  public get additionalAuthenticationProvider() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_authentication_provider') as any;
  }
  public set additionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[]) {
    this._additionalAuthenticationProvider = value;
  }
  public resetAdditionalAuthenticationProvider() {
    this._additionalAuthenticationProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAuthenticationProviderInput() {
    return this._additionalAuthenticationProvider;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new AppsyncGraphqlApiLogConfigOutputReference(this as any, "log_config", true);
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: AppsyncGraphqlApiLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // openid_connect_config - computed: false, optional: true, required: false
  private _openidConnectConfig = new AppsyncGraphqlApiOpenidConnectConfigOutputReference(this as any, "openid_connect_config", true);
  public get openidConnectConfig() {
    return this._openidConnectConfig;
  }
  public putOpenidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig) {
    this._openidConnectConfig.internalValue = value;
  }
  public resetOpenidConnectConfig() {
    this._openidConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectConfigInput() {
    return this._openidConnectConfig.internalValue;
  }

  // user_pool_config - computed: false, optional: true, required: false
  private _userPoolConfig = new AppsyncGraphqlApiUserPoolConfigOutputReference(this as any, "user_pool_config", true);
  public get userPoolConfig() {
    return this._userPoolConfig;
  }
  public putUserPoolConfig(value: AppsyncGraphqlApiUserPoolConfig) {
    this._userPoolConfig.internalValue = value;
  }
  public resetUserPoolConfig() {
    this._userPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolConfigInput() {
    return this._userPoolConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      xray_enabled: cdktf.booleanToTerraform(this._xrayEnabled),
      additional_authentication_provider: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform)(this._additionalAuthenticationProvider),
      log_config: appsyncGraphqlApiLogConfigToTerraform(this._logConfig.internalValue),
      openid_connect_config: appsyncGraphqlApiOpenidConnectConfigToTerraform(this._openidConnectConfig.internalValue),
      user_pool_config: appsyncGraphqlApiUserPoolConfigToTerraform(this._userPoolConfig.internalValue),
    };
  }
}
