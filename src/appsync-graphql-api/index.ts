/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#api_type AppsyncGraphqlApi#api_type}
  */
  readonly apiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#id AppsyncGraphqlApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#introspection_config AppsyncGraphqlApi#introspection_config}
  */
  readonly introspectionConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#merged_api_execution_role_arn AppsyncGraphqlApi#merged_api_execution_role_arn}
  */
  readonly mergedApiExecutionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#name AppsyncGraphqlApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#query_depth_limit AppsyncGraphqlApi#query_depth_limit}
  */
  readonly queryDepthLimit?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#region AppsyncGraphqlApi#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#resolver_count_limit AppsyncGraphqlApi#resolver_count_limit}
  */
  readonly resolverCountLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#schema AppsyncGraphqlApi#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#tags AppsyncGraphqlApi#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#visibility AppsyncGraphqlApi#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}
  */
  readonly xrayEnabled?: boolean | cdktf.IResolvable;
  /**
  * additional_authentication_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}
  */
  readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | cdktf.IResolvable;
  /**
  * enhanced_metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#enhanced_metrics_config AppsyncGraphqlApi#enhanced_metrics_config}
  */
  readonly enhancedMetricsConfig?: AppsyncGraphqlApiEnhancedMetricsConfig;
  /**
  * lambda_authorizer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}
  */
  readonly lambdaAuthorizerConfig?: AppsyncGraphqlApiLambdaAuthorizerConfig;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}
  */
  readonly logConfig?: AppsyncGraphqlApiLogConfig;
  /**
  * openid_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig;
  /**
  * user_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}
  */
  readonly authorizerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
}

export function appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(struct!.authorizerResultTtlInSeconds),
    authorizer_uri: cdktf.stringToTerraform(struct!.authorizerUri),
    identity_validation_expression: cdktf.stringToTerraform(struct!.identityValidationExpression),
  }
}


export function appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_result_ttl_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.authorizerResultTtlInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorizer_uri: {
      value: cdktf.stringToHclTerraform(struct!.authorizerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_validation_expression: {
      value: cdktf.stringToHclTerraform(struct!.identityValidationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerResultTtlInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
    }
    if (this._authorizerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerUri = this._authorizerUri;
    }
    if (this._identityValidationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityValidationExpression = this._identityValidationExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerResultTtlInSeconds = undefined;
      this._authorizerUri = undefined;
      this._identityValidationExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
      this._authorizerUri = value.authorizerUri;
      this._identityValidationExpression = value.identityValidationExpression;
    }
  }

  // authorizer_result_ttl_in_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number; 
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds;
  }

  // authorizer_uri - computed: false, optional: false, required: true
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}
  */
  readonly issuer: string;
}

export function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_ttl: {
      value: cdktf.numberToHclTerraform(struct!.authTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iat_ttl: {
      value: cdktf.numberToHclTerraform(struct!.iatTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTtl = this._authTtl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._iatTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iatTtl = this._iatTtl;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}
  */
  readonly userPoolId: string;
}

export function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}


export function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id_client_regex: {
      value: cdktf.stringToHclTerraform(struct!.appIdClientRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIdClientRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIdClientRegex = this._appIdClientRegex;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._userPoolId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * lambda_authorizer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}
  */
  readonly lambdaAuthorizerConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;
  /**
  * openid_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
  /**
  * user_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
}

export function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    lambda_authorizer_config: appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform(struct!.lambdaAuthorizerConfig),
    openid_connect_config: appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct!.openidConnectConfig),
    user_pool_config: appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct!.userPoolConfig),
  }
}


export function appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_authorizer_config: {
      value: appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform(struct!.lambdaAuthorizerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigList",
    },
    openid_connect_config: {
      value: appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform(struct!.openidConnectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigList",
    },
    user_pool_config: {
      value: appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform(struct!.userPoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._lambdaAuthorizerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaAuthorizerConfig = this._lambdaAuthorizerConfig?.internalValue;
    }
    if (this._openidConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openidConnectConfig = this._openidConnectConfig?.internalValue;
    }
    if (this._userPoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolConfig = this._userPoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._lambdaAuthorizerConfig.internalValue = undefined;
      this._openidConnectConfig.internalValue = undefined;
      this._userPoolConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._lambdaAuthorizerConfig.internalValue = value.lambdaAuthorizerConfig;
      this._openidConnectConfig.internalValue = value.openidConnectConfig;
      this._userPoolConfig.internalValue = value.userPoolConfig;
    }
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

  // lambda_authorizer_config - computed: false, optional: true, required: false
  private _lambdaAuthorizerConfig = new AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }
  public putLambdaAuthorizerConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig) {
    this._lambdaAuthorizerConfig.internalValue = value;
  }
  public resetLambdaAuthorizerConfig() {
    this._lambdaAuthorizerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaAuthorizerConfigInput() {
    return this._lambdaAuthorizerConfig.internalValue;
  }

  // openid_connect_config - computed: false, optional: true, required: false
  private _openidConnectConfig = new AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference(this, "openid_connect_config");
  public get openidConnectConfig() {
    return this._openidConnectConfig;
  }
  public putOpenidConnectConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig) {
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
  private _userPoolConfig = new AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference(this, "user_pool_config");
  public get userPoolConfig() {
    return this._userPoolConfig;
  }
  public putUserPoolConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig) {
    this._userPoolConfig.internalValue = value;
  }
  public resetUserPoolConfig() {
    this._userPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolConfigInput() {
    return this._userPoolConfig.internalValue;
  }
}

export class AppsyncGraphqlApiAdditionalAuthenticationProviderList extends cdktf.ComplexList {
  public internalValue? : AppsyncGraphqlApiAdditionalAuthenticationProvider[] | cdktf.IResolvable

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
  public get(index: number): AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference {
    return new AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncGraphqlApiEnhancedMetricsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#data_source_level_metrics_behavior AppsyncGraphqlApi#data_source_level_metrics_behavior}
  */
  readonly dataSourceLevelMetricsBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#operation_level_metrics_config AppsyncGraphqlApi#operation_level_metrics_config}
  */
  readonly operationLevelMetricsConfig: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#resolver_level_metrics_behavior AppsyncGraphqlApi#resolver_level_metrics_behavior}
  */
  readonly resolverLevelMetricsBehavior: string;
}

export function appsyncGraphqlApiEnhancedMetricsConfigToTerraform(struct?: AppsyncGraphqlApiEnhancedMetricsConfigOutputReference | AppsyncGraphqlApiEnhancedMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_level_metrics_behavior: cdktf.stringToTerraform(struct!.dataSourceLevelMetricsBehavior),
    operation_level_metrics_config: cdktf.stringToTerraform(struct!.operationLevelMetricsConfig),
    resolver_level_metrics_behavior: cdktf.stringToTerraform(struct!.resolverLevelMetricsBehavior),
  }
}


export function appsyncGraphqlApiEnhancedMetricsConfigToHclTerraform(struct?: AppsyncGraphqlApiEnhancedMetricsConfigOutputReference | AppsyncGraphqlApiEnhancedMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_level_metrics_behavior: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceLevelMetricsBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_level_metrics_config: {
      value: cdktf.stringToHclTerraform(struct!.operationLevelMetricsConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolver_level_metrics_behavior: {
      value: cdktf.stringToHclTerraform(struct!.resolverLevelMetricsBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiEnhancedMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiEnhancedMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceLevelMetricsBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceLevelMetricsBehavior = this._dataSourceLevelMetricsBehavior;
    }
    if (this._operationLevelMetricsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationLevelMetricsConfig = this._operationLevelMetricsConfig;
    }
    if (this._resolverLevelMetricsBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverLevelMetricsBehavior = this._resolverLevelMetricsBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiEnhancedMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSourceLevelMetricsBehavior = undefined;
      this._operationLevelMetricsConfig = undefined;
      this._resolverLevelMetricsBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSourceLevelMetricsBehavior = value.dataSourceLevelMetricsBehavior;
      this._operationLevelMetricsConfig = value.operationLevelMetricsConfig;
      this._resolverLevelMetricsBehavior = value.resolverLevelMetricsBehavior;
    }
  }

  // data_source_level_metrics_behavior - computed: false, optional: false, required: true
  private _dataSourceLevelMetricsBehavior?: string; 
  public get dataSourceLevelMetricsBehavior() {
    return this.getStringAttribute('data_source_level_metrics_behavior');
  }
  public set dataSourceLevelMetricsBehavior(value: string) {
    this._dataSourceLevelMetricsBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceLevelMetricsBehaviorInput() {
    return this._dataSourceLevelMetricsBehavior;
  }

  // operation_level_metrics_config - computed: false, optional: false, required: true
  private _operationLevelMetricsConfig?: string; 
  public get operationLevelMetricsConfig() {
    return this.getStringAttribute('operation_level_metrics_config');
  }
  public set operationLevelMetricsConfig(value: string) {
    this._operationLevelMetricsConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationLevelMetricsConfigInput() {
    return this._operationLevelMetricsConfig;
  }

  // resolver_level_metrics_behavior - computed: false, optional: false, required: true
  private _resolverLevelMetricsBehavior?: string; 
  public get resolverLevelMetricsBehavior() {
    return this.getStringAttribute('resolver_level_metrics_behavior');
  }
  public set resolverLevelMetricsBehavior(value: string) {
    this._resolverLevelMetricsBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverLevelMetricsBehaviorInput() {
    return this._resolverLevelMetricsBehavior;
  }
}
export interface AppsyncGraphqlApiLambdaAuthorizerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}
  */
  readonly authorizerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
}

export function appsyncGraphqlApiLambdaAuthorizerConfigToTerraform(struct?: AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(struct!.authorizerResultTtlInSeconds),
    authorizer_uri: cdktf.stringToTerraform(struct!.authorizerUri),
    identity_validation_expression: cdktf.stringToTerraform(struct!.identityValidationExpression),
  }
}


export function appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform(struct?: AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_result_ttl_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.authorizerResultTtlInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorizer_uri: {
      value: cdktf.stringToHclTerraform(struct!.authorizerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_validation_expression: {
      value: cdktf.stringToHclTerraform(struct!.identityValidationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiLambdaAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerResultTtlInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerResultTtlInSeconds = this._authorizerResultTtlInSeconds;
    }
    if (this._authorizerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerUri = this._authorizerUri;
    }
    if (this._identityValidationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityValidationExpression = this._identityValidationExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiLambdaAuthorizerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerResultTtlInSeconds = undefined;
      this._authorizerUri = undefined;
      this._identityValidationExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
      this._authorizerUri = value.authorizerUri;
      this._identityValidationExpression = value.identityValidationExpression;
    }
  }

  // authorizer_result_ttl_in_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number; 
  public get authorizerResultTtlInSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
  }
  public set authorizerResultTtlInSeconds(value: number) {
    this._authorizerResultTtlInSeconds = value;
  }
  public resetAuthorizerResultTtlInSeconds() {
    this._authorizerResultTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlInSecondsInput() {
    return this._authorizerResultTtlInSeconds;
  }

  // authorizer_uri - computed: false, optional: false, required: true
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }
}
export interface AppsyncGraphqlApiLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}
  */
  readonly cloudwatchLogsRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}
  */
  readonly excludeVerboseContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}
  */
  readonly fieldLogLevel: string;
}

export function appsyncGraphqlApiLogConfigToTerraform(struct?: AppsyncGraphqlApiLogConfigOutputReference | AppsyncGraphqlApiLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsRoleArn),
    exclude_verbose_content: cdktf.booleanToTerraform(struct!.excludeVerboseContent),
    field_log_level: cdktf.stringToTerraform(struct!.fieldLogLevel),
  }
}


export function appsyncGraphqlApiLogConfigToHclTerraform(struct?: AppsyncGraphqlApiLogConfigOutputReference | AppsyncGraphqlApiLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_logs_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchLogsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_verbose_content: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVerboseContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_log_level: {
      value: cdktf.stringToHclTerraform(struct!.fieldLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsRoleArn = this._cloudwatchLogsRoleArn;
    }
    if (this._excludeVerboseContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVerboseContent = this._excludeVerboseContent;
    }
    if (this._fieldLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLogLevel = this._fieldLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogsRoleArn = undefined;
      this._excludeVerboseContent = undefined;
      this._fieldLogLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return this.getBooleanAttribute('exclude_verbose_content');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}
  */
  readonly issuer: string;
}

export function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfigOutputReference | AppsyncGraphqlApiOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function appsyncGraphqlApiOpenidConnectConfigToHclTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfigOutputReference | AppsyncGraphqlApiOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_ttl: {
      value: cdktf.numberToHclTerraform(struct!.authTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iat_ttl: {
      value: cdktf.numberToHclTerraform(struct!.iatTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiOpenidConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTtl = this._authTtl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._iatTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iatTtl = this._iatTtl;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiOpenidConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}
  */
  readonly userPoolId: string;
}

export function appsyncGraphqlApiUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiUserPoolConfigOutputReference | AppsyncGraphqlApiUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function appsyncGraphqlApiUserPoolConfigToHclTerraform(struct?: AppsyncGraphqlApiUserPoolConfigOutputReference | AppsyncGraphqlApiUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id_client_regex: {
      value: cdktf.stringToHclTerraform(struct!.appIdClientRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncGraphqlApiUserPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncGraphqlApiUserPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIdClientRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIdClientRegex = this._appIdClientRegex;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncGraphqlApiUserPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._defaultAction = undefined;
      this._userPoolId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api aws_appsync_graphql_api}
*/
export class AppsyncGraphqlApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_graphql_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsyncGraphqlApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncGraphqlApi to import
  * @param importFromId The id of the existing AppsyncGraphqlApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncGraphqlApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_graphql_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/appsync_graphql_api aws_appsync_graphql_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncGraphqlApiConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncGraphqlApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_graphql_api',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiType = config.apiType;
    this._authenticationType = config.authenticationType;
    this._id = config.id;
    this._introspectionConfig = config.introspectionConfig;
    this._mergedApiExecutionRoleArn = config.mergedApiExecutionRoleArn;
    this._name = config.name;
    this._queryDepthLimit = config.queryDepthLimit;
    this._region = config.region;
    this._resolverCountLimit = config.resolverCountLimit;
    this._schema = config.schema;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._visibility = config.visibility;
    this._xrayEnabled = config.xrayEnabled;
    this._additionalAuthenticationProvider.internalValue = config.additionalAuthenticationProvider;
    this._enhancedMetricsConfig.internalValue = config.enhancedMetricsConfig;
    this._lambdaAuthorizerConfig.internalValue = config.lambdaAuthorizerConfig;
    this._logConfig.internalValue = config.logConfig;
    this._openidConnectConfig.internalValue = config.openidConnectConfig;
    this._userPoolConfig.internalValue = config.userPoolConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_type - computed: false, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
  }

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

  // introspection_config - computed: false, optional: true, required: false
  private _introspectionConfig?: string; 
  public get introspectionConfig() {
    return this.getStringAttribute('introspection_config');
  }
  public set introspectionConfig(value: string) {
    this._introspectionConfig = value;
  }
  public resetIntrospectionConfig() {
    this._introspectionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionConfigInput() {
    return this._introspectionConfig;
  }

  // merged_api_execution_role_arn - computed: false, optional: true, required: false
  private _mergedApiExecutionRoleArn?: string; 
  public get mergedApiExecutionRoleArn() {
    return this.getStringAttribute('merged_api_execution_role_arn');
  }
  public set mergedApiExecutionRoleArn(value: string) {
    this._mergedApiExecutionRoleArn = value;
  }
  public resetMergedApiExecutionRoleArn() {
    this._mergedApiExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedApiExecutionRoleArnInput() {
    return this._mergedApiExecutionRoleArn;
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

  // query_depth_limit - computed: false, optional: true, required: false
  private _queryDepthLimit?: number; 
  public get queryDepthLimit() {
    return this.getNumberAttribute('query_depth_limit');
  }
  public set queryDepthLimit(value: number) {
    this._queryDepthLimit = value;
  }
  public resetQueryDepthLimit() {
    this._queryDepthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDepthLimitInput() {
    return this._queryDepthLimit;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resolver_count_limit - computed: false, optional: true, required: false
  private _resolverCountLimit?: number; 
  public get resolverCountLimit() {
    return this.getNumberAttribute('resolver_count_limit');
  }
  public set resolverCountLimit(value: number) {
    this._resolverCountLimit = value;
  }
  public resetResolverCountLimit() {
    this._resolverCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverCountLimitInput() {
    return this._resolverCountLimit;
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

  // uris - computed: true, optional: false, required: false
  private _uris = new cdktf.StringMap(this, "uris");
  public get uris() {
    return this._uris;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // xray_enabled - computed: false, optional: true, required: false
  private _xrayEnabled?: boolean | cdktf.IResolvable; 
  public get xrayEnabled() {
    return this.getBooleanAttribute('xray_enabled');
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
  private _additionalAuthenticationProvider = new AppsyncGraphqlApiAdditionalAuthenticationProviderList(this, "additional_authentication_provider", false);
  public get additionalAuthenticationProvider() {
    return this._additionalAuthenticationProvider;
  }
  public putAdditionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | cdktf.IResolvable) {
    this._additionalAuthenticationProvider.internalValue = value;
  }
  public resetAdditionalAuthenticationProvider() {
    this._additionalAuthenticationProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAuthenticationProviderInput() {
    return this._additionalAuthenticationProvider.internalValue;
  }

  // enhanced_metrics_config - computed: false, optional: true, required: false
  private _enhancedMetricsConfig = new AppsyncGraphqlApiEnhancedMetricsConfigOutputReference(this, "enhanced_metrics_config");
  public get enhancedMetricsConfig() {
    return this._enhancedMetricsConfig;
  }
  public putEnhancedMetricsConfig(value: AppsyncGraphqlApiEnhancedMetricsConfig) {
    this._enhancedMetricsConfig.internalValue = value;
  }
  public resetEnhancedMetricsConfig() {
    this._enhancedMetricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMetricsConfigInput() {
    return this._enhancedMetricsConfig.internalValue;
  }

  // lambda_authorizer_config - computed: false, optional: true, required: false
  private _lambdaAuthorizerConfig = new AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }
  public putLambdaAuthorizerConfig(value: AppsyncGraphqlApiLambdaAuthorizerConfig) {
    this._lambdaAuthorizerConfig.internalValue = value;
  }
  public resetLambdaAuthorizerConfig() {
    this._lambdaAuthorizerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaAuthorizerConfigInput() {
    return this._lambdaAuthorizerConfig.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new AppsyncGraphqlApiLogConfigOutputReference(this, "log_config");
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
  private _openidConnectConfig = new AppsyncGraphqlApiOpenidConnectConfigOutputReference(this, "openid_connect_config");
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
  private _userPoolConfig = new AppsyncGraphqlApiUserPoolConfigOutputReference(this, "user_pool_config");
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
      api_type: cdktf.stringToTerraform(this._apiType),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      id: cdktf.stringToTerraform(this._id),
      introspection_config: cdktf.stringToTerraform(this._introspectionConfig),
      merged_api_execution_role_arn: cdktf.stringToTerraform(this._mergedApiExecutionRoleArn),
      name: cdktf.stringToTerraform(this._name),
      query_depth_limit: cdktf.numberToTerraform(this._queryDepthLimit),
      region: cdktf.stringToTerraform(this._region),
      resolver_count_limit: cdktf.numberToTerraform(this._resolverCountLimit),
      schema: cdktf.stringToTerraform(this._schema),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      visibility: cdktf.stringToTerraform(this._visibility),
      xray_enabled: cdktf.booleanToTerraform(this._xrayEnabled),
      additional_authentication_provider: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform, true)(this._additionalAuthenticationProvider.internalValue),
      enhanced_metrics_config: appsyncGraphqlApiEnhancedMetricsConfigToTerraform(this._enhancedMetricsConfig.internalValue),
      lambda_authorizer_config: appsyncGraphqlApiLambdaAuthorizerConfigToTerraform(this._lambdaAuthorizerConfig.internalValue),
      log_config: appsyncGraphqlApiLogConfigToTerraform(this._logConfig.internalValue),
      openid_connect_config: appsyncGraphqlApiOpenidConnectConfigToTerraform(this._openidConnectConfig.internalValue),
      user_pool_config: appsyncGraphqlApiUserPoolConfigToTerraform(this._userPoolConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_type: {
        value: cdktf.stringToHclTerraform(this._apiType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      introspection_config: {
        value: cdktf.stringToHclTerraform(this._introspectionConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merged_api_execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._mergedApiExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_depth_limit: {
        value: cdktf.numberToHclTerraform(this._queryDepthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolver_count_limit: {
        value: cdktf.numberToHclTerraform(this._resolverCountLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xray_enabled: {
        value: cdktf.booleanToHclTerraform(this._xrayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_authentication_provider: {
        value: cdktf.listMapperHcl(appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform, true)(this._additionalAuthenticationProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncGraphqlApiAdditionalAuthenticationProviderList",
      },
      enhanced_metrics_config: {
        value: appsyncGraphqlApiEnhancedMetricsConfigToHclTerraform(this._enhancedMetricsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncGraphqlApiEnhancedMetricsConfigList",
      },
      lambda_authorizer_config: {
        value: appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform(this._lambdaAuthorizerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncGraphqlApiLambdaAuthorizerConfigList",
      },
      log_config: {
        value: appsyncGraphqlApiLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncGraphqlApiLogConfigList",
      },
      openid_connect_config: {
        value: appsyncGraphqlApiOpenidConnectConfigToHclTerraform(this._openidConnectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncGraphqlApiOpenidConnectConfigList",
      },
      user_pool_config: {
        value: appsyncGraphqlApiUserPoolConfigToHclTerraform(this._userPoolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncGraphqlApiUserPoolConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
