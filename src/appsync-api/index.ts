/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#name AppsyncApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}
  */
  readonly ownerContact?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#region AppsyncApi#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#tags AppsyncApi#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * event_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}
  */
  readonly eventConfig?: AppsyncApiEventConfig[] | cdktf.IResolvable;
}
export interface AppsyncApiEventConfigAuthProviderCognitoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}
  */
  readonly userPoolId: string;
}

export function appsyncApiEventConfigAuthProviderCognitoConfigToTerraform(struct?: AppsyncApiEventConfigAuthProviderCognitoConfig | cdktf.IResolvable): any {
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


export function appsyncApiEventConfigAuthProviderCognitoConfigToHclTerraform(struct?: AppsyncApiEventConfigAuthProviderCognitoConfig | cdktf.IResolvable): any {
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

export class AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigAuthProviderCognitoConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AppsyncApiEventConfigAuthProviderCognitoConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._userPoolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
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

export class AppsyncApiEventConfigAuthProviderCognitoConfigList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigAuthProviderCognitoConfig[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference {
    return new AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}
  */
  readonly authorizerResultTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}
  */
  readonly authorizerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
}

export function appsyncApiEventConfigAuthProviderLambdaAuthorizerConfigToTerraform(struct?: AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig | cdktf.IResolvable): any {
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


export function appsyncApiEventConfigAuthProviderLambdaAuthorizerConfigToHclTerraform(struct?: AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig | cdktf.IResolvable): any {
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

export class AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerResultTtlInSeconds = undefined;
      this._authorizerUri = undefined;
      this._identityValidationExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizerResultTtlInSeconds = value.authorizerResultTtlInSeconds;
      this._authorizerUri = value.authorizerUri;
      this._identityValidationExpression = value.identityValidationExpression;
    }
  }

  // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
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

export class AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference {
    return new AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigAuthProviderOpenidConnectConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}
  */
  readonly issuer: string;
}

export function appsyncApiEventConfigAuthProviderOpenidConnectConfigToTerraform(struct?: AppsyncApiEventConfigAuthProviderOpenidConnectConfig | cdktf.IResolvable): any {
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


export function appsyncApiEventConfigAuthProviderOpenidConnectConfigToHclTerraform(struct?: AppsyncApiEventConfigAuthProviderOpenidConnectConfig | cdktf.IResolvable): any {
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

export class AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigAuthProviderOpenidConnectConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AppsyncApiEventConfigAuthProviderOpenidConnectConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authTtl = value.authTtl;
      this._clientId = value.clientId;
      this._iatTtl = value.iatTtl;
      this._issuer = value.issuer;
    }
  }

  // auth_ttl - computed: true, optional: true, required: false
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

  // iat_ttl - computed: true, optional: true, required: false
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

export class AppsyncApiEventConfigAuthProviderOpenidConnectConfigList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigAuthProviderOpenidConnectConfig[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference {
    return new AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigAuthProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType: string;
  /**
  * cognito_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}
  */
  readonly cognitoConfig?: AppsyncApiEventConfigAuthProviderCognitoConfig[] | cdktf.IResolvable;
  /**
  * lambda_authorizer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}
  */
  readonly lambdaAuthorizerConfig?: AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig[] | cdktf.IResolvable;
  /**
  * openid_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#openid_connect_config AppsyncApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AppsyncApiEventConfigAuthProviderOpenidConnectConfig[] | cdktf.IResolvable;
}

export function appsyncApiEventConfigAuthProviderToTerraform(struct?: AppsyncApiEventConfigAuthProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    cognito_config: cdktf.listMapper(appsyncApiEventConfigAuthProviderCognitoConfigToTerraform, true)(struct!.cognitoConfig),
    lambda_authorizer_config: cdktf.listMapper(appsyncApiEventConfigAuthProviderLambdaAuthorizerConfigToTerraform, true)(struct!.lambdaAuthorizerConfig),
    openid_connect_config: cdktf.listMapper(appsyncApiEventConfigAuthProviderOpenidConnectConfigToTerraform, true)(struct!.openidConnectConfig),
  }
}


export function appsyncApiEventConfigAuthProviderToHclTerraform(struct?: AppsyncApiEventConfigAuthProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cognito_config: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigAuthProviderCognitoConfigToHclTerraform, true)(struct!.cognitoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigAuthProviderCognitoConfigList",
    },
    lambda_authorizer_config: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigAuthProviderLambdaAuthorizerConfigToHclTerraform, true)(struct!.lambdaAuthorizerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList",
    },
    openid_connect_config: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigAuthProviderOpenidConnectConfigToHclTerraform, true)(struct!.openidConnectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigAuthProviderOpenidConnectConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigAuthProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigAuthProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._cognitoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoConfig = this._cognitoConfig?.internalValue;
    }
    if (this._lambdaAuthorizerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaAuthorizerConfig = this._lambdaAuthorizerConfig?.internalValue;
    }
    if (this._openidConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openidConnectConfig = this._openidConnectConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigAuthProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._cognitoConfig.internalValue = undefined;
      this._lambdaAuthorizerConfig.internalValue = undefined;
      this._openidConnectConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._cognitoConfig.internalValue = value.cognitoConfig;
      this._lambdaAuthorizerConfig.internalValue = value.lambdaAuthorizerConfig;
      this._openidConnectConfig.internalValue = value.openidConnectConfig;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // cognito_config - computed: false, optional: true, required: false
  private _cognitoConfig = new AppsyncApiEventConfigAuthProviderCognitoConfigList(this, "cognito_config", false);
  public get cognitoConfig() {
    return this._cognitoConfig;
  }
  public putCognitoConfig(value: AppsyncApiEventConfigAuthProviderCognitoConfig[] | cdktf.IResolvable) {
    this._cognitoConfig.internalValue = value;
  }
  public resetCognitoConfig() {
    this._cognitoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoConfigInput() {
    return this._cognitoConfig.internalValue;
  }

  // lambda_authorizer_config - computed: false, optional: true, required: false
  private _lambdaAuthorizerConfig = new AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList(this, "lambda_authorizer_config", false);
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }
  public putLambdaAuthorizerConfig(value: AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig[] | cdktf.IResolvable) {
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
  private _openidConnectConfig = new AppsyncApiEventConfigAuthProviderOpenidConnectConfigList(this, "openid_connect_config", false);
  public get openidConnectConfig() {
    return this._openidConnectConfig;
  }
  public putOpenidConnectConfig(value: AppsyncApiEventConfigAuthProviderOpenidConnectConfig[] | cdktf.IResolvable) {
    this._openidConnectConfig.internalValue = value;
  }
  public resetOpenidConnectConfig() {
    this._openidConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectConfigInput() {
    return this._openidConnectConfig.internalValue;
  }
}

export class AppsyncApiEventConfigAuthProviderList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigAuthProvider[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigAuthProviderOutputReference {
    return new AppsyncApiEventConfigAuthProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigConnectionAuthMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType: string;
}

export function appsyncApiEventConfigConnectionAuthModeToTerraform(struct?: AppsyncApiEventConfigConnectionAuthMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
  }
}


export function appsyncApiEventConfigConnectionAuthModeToHclTerraform(struct?: AppsyncApiEventConfigConnectionAuthMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigConnectionAuthModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigConnectionAuthMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigConnectionAuthMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncApiEventConfigConnectionAuthModeList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigConnectionAuthMode[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigConnectionAuthModeOutputReference {
    return new AppsyncApiEventConfigConnectionAuthModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigDefaultPublishAuthMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType: string;
}

export function appsyncApiEventConfigDefaultPublishAuthModeToTerraform(struct?: AppsyncApiEventConfigDefaultPublishAuthMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
  }
}


export function appsyncApiEventConfigDefaultPublishAuthModeToHclTerraform(struct?: AppsyncApiEventConfigDefaultPublishAuthMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigDefaultPublishAuthModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigDefaultPublishAuthMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigDefaultPublishAuthMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncApiEventConfigDefaultPublishAuthModeList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigDefaultPublishAuthMode[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigDefaultPublishAuthModeOutputReference {
    return new AppsyncApiEventConfigDefaultPublishAuthModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigDefaultSubscribeAuthMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}
  */
  readonly authType: string;
}

export function appsyncApiEventConfigDefaultSubscribeAuthModeToTerraform(struct?: AppsyncApiEventConfigDefaultSubscribeAuthMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
  }
}


export function appsyncApiEventConfigDefaultSubscribeAuthModeToHclTerraform(struct?: AppsyncApiEventConfigDefaultSubscribeAuthMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigDefaultSubscribeAuthMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigDefaultSubscribeAuthMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }
}

export class AppsyncApiEventConfigDefaultSubscribeAuthModeList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigDefaultSubscribeAuthMode[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference {
    return new AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfigLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}
  */
  readonly cloudwatchLogsRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}
  */
  readonly logLevel: string;
}

export function appsyncApiEventConfigLogConfigToTerraform(struct?: AppsyncApiEventConfigLogConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsRoleArn),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function appsyncApiEventConfigLogConfigToHclTerraform(struct?: AppsyncApiEventConfigLogConfig | cdktf.IResolvable): any {
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
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigLogConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfigLogConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsRoleArn = this._cloudwatchLogsRoleArn;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfigLogConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogsRoleArn = undefined;
      this._logLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogsRoleArn = value.cloudwatchLogsRoleArn;
      this._logLevel = value.logLevel;
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

  // log_level - computed: false, optional: false, required: true
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}

export class AppsyncApiEventConfigLogConfigList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfigLogConfig[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigLogConfigOutputReference {
    return new AppsyncApiEventConfigLogConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsyncApiEventConfig {
  /**
  * auth_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#auth_provider AppsyncApi#auth_provider}
  */
  readonly authProvider?: AppsyncApiEventConfigAuthProvider[] | cdktf.IResolvable;
  /**
  * connection_auth_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#connection_auth_mode AppsyncApi#connection_auth_mode}
  */
  readonly connectionAuthMode?: AppsyncApiEventConfigConnectionAuthMode[] | cdktf.IResolvable;
  /**
  * default_publish_auth_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#default_publish_auth_mode AppsyncApi#default_publish_auth_mode}
  */
  readonly defaultPublishAuthMode?: AppsyncApiEventConfigDefaultPublishAuthMode[] | cdktf.IResolvable;
  /**
  * default_subscribe_auth_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#default_subscribe_auth_mode AppsyncApi#default_subscribe_auth_mode}
  */
  readonly defaultSubscribeAuthMode?: AppsyncApiEventConfigDefaultSubscribeAuthMode[] | cdktf.IResolvable;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}
  */
  readonly logConfig?: AppsyncApiEventConfigLogConfig[] | cdktf.IResolvable;
}

export function appsyncApiEventConfigToTerraform(struct?: AppsyncApiEventConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_provider: cdktf.listMapper(appsyncApiEventConfigAuthProviderToTerraform, true)(struct!.authProvider),
    connection_auth_mode: cdktf.listMapper(appsyncApiEventConfigConnectionAuthModeToTerraform, true)(struct!.connectionAuthMode),
    default_publish_auth_mode: cdktf.listMapper(appsyncApiEventConfigDefaultPublishAuthModeToTerraform, true)(struct!.defaultPublishAuthMode),
    default_subscribe_auth_mode: cdktf.listMapper(appsyncApiEventConfigDefaultSubscribeAuthModeToTerraform, true)(struct!.defaultSubscribeAuthMode),
    log_config: cdktf.listMapper(appsyncApiEventConfigLogConfigToTerraform, true)(struct!.logConfig),
  }
}


export function appsyncApiEventConfigToHclTerraform(struct?: AppsyncApiEventConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_provider: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigAuthProviderToHclTerraform, true)(struct!.authProvider),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigAuthProviderList",
    },
    connection_auth_mode: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigConnectionAuthModeToHclTerraform, true)(struct!.connectionAuthMode),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigConnectionAuthModeList",
    },
    default_publish_auth_mode: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigDefaultPublishAuthModeToHclTerraform, true)(struct!.defaultPublishAuthMode),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigDefaultPublishAuthModeList",
    },
    default_subscribe_auth_mode: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigDefaultSubscribeAuthModeToHclTerraform, true)(struct!.defaultSubscribeAuthMode),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigDefaultSubscribeAuthModeList",
    },
    log_config: {
      value: cdktf.listMapperHcl(appsyncApiEventConfigLogConfigToHclTerraform, true)(struct!.logConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncApiEventConfigLogConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncApiEventConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsyncApiEventConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProvider = this._authProvider?.internalValue;
    }
    if (this._connectionAuthMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionAuthMode = this._connectionAuthMode?.internalValue;
    }
    if (this._defaultPublishAuthMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPublishAuthMode = this._defaultPublishAuthMode?.internalValue;
    }
    if (this._defaultSubscribeAuthMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSubscribeAuthMode = this._defaultSubscribeAuthMode?.internalValue;
    }
    if (this._logConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfig = this._logConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncApiEventConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProvider.internalValue = undefined;
      this._connectionAuthMode.internalValue = undefined;
      this._defaultPublishAuthMode.internalValue = undefined;
      this._defaultSubscribeAuthMode.internalValue = undefined;
      this._logConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProvider.internalValue = value.authProvider;
      this._connectionAuthMode.internalValue = value.connectionAuthMode;
      this._defaultPublishAuthMode.internalValue = value.defaultPublishAuthMode;
      this._defaultSubscribeAuthMode.internalValue = value.defaultSubscribeAuthMode;
      this._logConfig.internalValue = value.logConfig;
    }
  }

  // auth_provider - computed: false, optional: true, required: false
  private _authProvider = new AppsyncApiEventConfigAuthProviderList(this, "auth_provider", false);
  public get authProvider() {
    return this._authProvider;
  }
  public putAuthProvider(value: AppsyncApiEventConfigAuthProvider[] | cdktf.IResolvable) {
    this._authProvider.internalValue = value;
  }
  public resetAuthProvider() {
    this._authProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderInput() {
    return this._authProvider.internalValue;
  }

  // connection_auth_mode - computed: false, optional: true, required: false
  private _connectionAuthMode = new AppsyncApiEventConfigConnectionAuthModeList(this, "connection_auth_mode", false);
  public get connectionAuthMode() {
    return this._connectionAuthMode;
  }
  public putConnectionAuthMode(value: AppsyncApiEventConfigConnectionAuthMode[] | cdktf.IResolvable) {
    this._connectionAuthMode.internalValue = value;
  }
  public resetConnectionAuthMode() {
    this._connectionAuthMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAuthModeInput() {
    return this._connectionAuthMode.internalValue;
  }

  // default_publish_auth_mode - computed: false, optional: true, required: false
  private _defaultPublishAuthMode = new AppsyncApiEventConfigDefaultPublishAuthModeList(this, "default_publish_auth_mode", false);
  public get defaultPublishAuthMode() {
    return this._defaultPublishAuthMode;
  }
  public putDefaultPublishAuthMode(value: AppsyncApiEventConfigDefaultPublishAuthMode[] | cdktf.IResolvable) {
    this._defaultPublishAuthMode.internalValue = value;
  }
  public resetDefaultPublishAuthMode() {
    this._defaultPublishAuthMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPublishAuthModeInput() {
    return this._defaultPublishAuthMode.internalValue;
  }

  // default_subscribe_auth_mode - computed: false, optional: true, required: false
  private _defaultSubscribeAuthMode = new AppsyncApiEventConfigDefaultSubscribeAuthModeList(this, "default_subscribe_auth_mode", false);
  public get defaultSubscribeAuthMode() {
    return this._defaultSubscribeAuthMode;
  }
  public putDefaultSubscribeAuthMode(value: AppsyncApiEventConfigDefaultSubscribeAuthMode[] | cdktf.IResolvable) {
    this._defaultSubscribeAuthMode.internalValue = value;
  }
  public resetDefaultSubscribeAuthMode() {
    this._defaultSubscribeAuthMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubscribeAuthModeInput() {
    return this._defaultSubscribeAuthMode.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new AppsyncApiEventConfigLogConfigList(this, "log_config", false);
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: AppsyncApiEventConfigLogConfig[] | cdktf.IResolvable) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }
}

export class AppsyncApiEventConfigList extends cdktf.ComplexList {
  public internalValue? : AppsyncApiEventConfig[] | cdktf.IResolvable

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
  public get(index: number): AppsyncApiEventConfigOutputReference {
    return new AppsyncApiEventConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api aws_appsync_api}
*/
export class AppsyncApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsyncApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncApi to import
  * @param importFromId The id of the existing AppsyncApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/appsync_api aws_appsync_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncApiConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_api',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
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
    this._name = config.name;
    this._ownerContact = config.ownerContact;
    this._region = config.region;
    this._tags = config.tags;
    this._eventConfig.internalValue = config.eventConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_arn - computed: true, optional: false, required: false
  public get apiArn() {
    return this.getStringAttribute('api_arn');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new cdktf.StringMap(this, "dns");
  public get dns() {
    return this._dns;
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

  // owner_contact - computed: false, optional: true, required: false
  private _ownerContact?: string; 
  public get ownerContact() {
    return this.getStringAttribute('owner_contact');
  }
  public set ownerContact(value: string) {
    this._ownerContact = value;
  }
  public resetOwnerContact() {
    this._ownerContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerContactInput() {
    return this._ownerContact;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // waf_web_acl_arn - computed: true, optional: false, required: false
  public get wafWebAclArn() {
    return this.getStringAttribute('waf_web_acl_arn');
  }

  // xray_enabled - computed: true, optional: false, required: false
  public get xrayEnabled() {
    return this.getBooleanAttribute('xray_enabled');
  }

  // event_config - computed: false, optional: true, required: false
  private _eventConfig = new AppsyncApiEventConfigList(this, "event_config", false);
  public get eventConfig() {
    return this._eventConfig;
  }
  public putEventConfig(value: AppsyncApiEventConfig[] | cdktf.IResolvable) {
    this._eventConfig.internalValue = value;
  }
  public resetEventConfig() {
    this._eventConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConfigInput() {
    return this._eventConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      owner_contact: cdktf.stringToTerraform(this._ownerContact),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      event_config: cdktf.listMapper(appsyncApiEventConfigToTerraform, true)(this._eventConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_contact: {
        value: cdktf.stringToHclTerraform(this._ownerContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      event_config: {
        value: cdktf.listMapperHcl(appsyncApiEventConfigToHclTerraform, true)(this._eventConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncApiEventConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
