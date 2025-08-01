/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}
  */
  readonly accessTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}
  */
  readonly allowedOauthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}
  */
  readonly allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}
  */
  readonly allowedOauthScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}
  */
  readonly authSessionValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}
  */
  readonly callbackUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}
  */
  readonly defaultRedirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}
  */
  readonly enablePropagateAdditionalUserContextData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}
  */
  readonly enableTokenRevocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}
  */
  readonly explicitAuthFlows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}
  */
  readonly generateSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}
  */
  readonly idTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}
  */
  readonly logoutUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#name CognitoUserPoolClient#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}
  */
  readonly preventUserExistenceErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}
  */
  readonly readAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}
  */
  readonly refreshTokenValidity?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#region CognitoUserPoolClient#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}
  */
  readonly supportedIdentityProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}
  */
  readonly writeAttributes?: string[];
  /**
  * analytics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}
  */
  readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable;
  /**
  * refresh_token_rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#refresh_token_rotation CognitoUserPoolClient#refresh_token_rotation}
  */
  readonly refreshTokenRotation?: CognitoUserPoolClientRefreshTokenRotation[] | cdktf.IResolvable;
  /**
  * token_validity_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}
  */
  readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits[] | cdktf.IResolvable;
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}
  */
  readonly applicationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}
  */
  readonly userDataShared?: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_arn: cdktf.stringToTerraform(struct!.applicationArn),
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_data_shared: cdktf.booleanToTerraform(struct!.userDataShared),
  }
}


export function cognitoUserPoolClientAnalyticsConfigurationToHclTerraform(struct?: CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_arn: {
      value: cdktf.stringToHclTerraform(struct!.applicationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data_shared: {
      value: cdktf.booleanToHclTerraform(struct!.userDataShared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationArn = this._applicationArn;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._userDataShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDataShared = this._userDataShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationArn = undefined;
      this._applicationId = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
      this._userDataShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationArn = value.applicationArn;
      this._applicationId = value.applicationId;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
      this._userDataShared = value.userDataShared;
    }
  }

  // application_arn - computed: false, optional: true, required: false
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  public resetApplicationArn() {
    this._applicationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // user_data_shared - computed: true, optional: true, required: false
  private _userDataShared?: boolean | cdktf.IResolvable; 
  public get userDataShared() {
    return this.getBooleanAttribute('user_data_shared');
  }
  public set userDataShared(value: boolean | cdktf.IResolvable) {
    this._userDataShared = value;
  }
  public resetUserDataShared() {
    this._userDataShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataSharedInput() {
    return this._userDataShared;
  }
}

export class CognitoUserPoolClientAnalyticsConfigurationList extends cdktf.ComplexList {
  public internalValue? : CognitoUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CognitoUserPoolClientAnalyticsConfigurationOutputReference {
    return new CognitoUserPoolClientAnalyticsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitoUserPoolClientRefreshTokenRotation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#feature CognitoUserPoolClient#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#retry_grace_period_seconds CognitoUserPoolClient#retry_grace_period_seconds}
  */
  readonly retryGracePeriodSeconds?: number;
}

export function cognitoUserPoolClientRefreshTokenRotationToTerraform(struct?: CognitoUserPoolClientRefreshTokenRotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    retry_grace_period_seconds: cdktf.numberToTerraform(struct!.retryGracePeriodSeconds),
  }
}


export function cognitoUserPoolClientRefreshTokenRotationToHclTerraform(struct?: CognitoUserPoolClientRefreshTokenRotation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.retryGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolClientRefreshTokenRotationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoUserPoolClientRefreshTokenRotation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._retryGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryGracePeriodSeconds = this._retryGracePeriodSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolClientRefreshTokenRotation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feature = undefined;
      this._retryGracePeriodSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feature = value.feature;
      this._retryGracePeriodSeconds = value.retryGracePeriodSeconds;
    }
  }

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // retry_grace_period_seconds - computed: false, optional: true, required: false
  private _retryGracePeriodSeconds?: number; 
  public get retryGracePeriodSeconds() {
    return this.getNumberAttribute('retry_grace_period_seconds');
  }
  public set retryGracePeriodSeconds(value: number) {
    this._retryGracePeriodSeconds = value;
  }
  public resetRetryGracePeriodSeconds() {
    this._retryGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryGracePeriodSecondsInput() {
    return this._retryGracePeriodSeconds;
  }
}

export class CognitoUserPoolClientRefreshTokenRotationList extends cdktf.ComplexList {
  public internalValue? : CognitoUserPoolClientRefreshTokenRotation[] | cdktf.IResolvable

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
  public get(index: number): CognitoUserPoolClientRefreshTokenRotationOutputReference {
    return new CognitoUserPoolClientRefreshTokenRotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitoUserPoolClientTokenValidityUnits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}
  */
  readonly idToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}
  */
  readonly refreshToken?: string;
}

export function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    id_token: cdktf.stringToTerraform(struct!.idToken),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}


export function cognitoUserPoolClientTokenValidityUnitsToHclTerraform(struct?: CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token: {
      value: cdktf.stringToHclTerraform(struct!.idToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._idToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idToken = this._idToken;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._idToken = undefined;
      this._refreshToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._idToken = value.idToken;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: true, optional: true, required: false
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

  // id_token - computed: true, optional: true, required: false
  private _idToken?: string; 
  public get idToken() {
    return this.getStringAttribute('id_token');
  }
  public set idToken(value: string) {
    this._idToken = value;
  }
  public resetIdToken() {
    this._idToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}

export class CognitoUserPoolClientTokenValidityUnitsList extends cdktf.ComplexList {
  public internalValue? : CognitoUserPoolClientTokenValidityUnits[] | cdktf.IResolvable

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
  public get(index: number): CognitoUserPoolClientTokenValidityUnitsOutputReference {
    return new CognitoUserPoolClientTokenValidityUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client}
*/
export class CognitoUserPoolClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_user_pool_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CognitoUserPoolClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoUserPoolClient to import
  * @param importFromId The id of the existing CognitoUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoUserPoolClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_user_pool_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolClientConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_client',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.7.0',
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
    this._accessTokenValidity = config.accessTokenValidity;
    this._allowedOauthFlows = config.allowedOauthFlows;
    this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
    this._allowedOauthScopes = config.allowedOauthScopes;
    this._authSessionValidity = config.authSessionValidity;
    this._callbackUrls = config.callbackUrls;
    this._defaultRedirectUri = config.defaultRedirectUri;
    this._enablePropagateAdditionalUserContextData = config.enablePropagateAdditionalUserContextData;
    this._enableTokenRevocation = config.enableTokenRevocation;
    this._explicitAuthFlows = config.explicitAuthFlows;
    this._generateSecret = config.generateSecret;
    this._idTokenValidity = config.idTokenValidity;
    this._logoutUrls = config.logoutUrls;
    this._name = config.name;
    this._preventUserExistenceErrors = config.preventUserExistenceErrors;
    this._readAttributes = config.readAttributes;
    this._refreshTokenValidity = config.refreshTokenValidity;
    this._region = config.region;
    this._supportedIdentityProviders = config.supportedIdentityProviders;
    this._userPoolId = config.userPoolId;
    this._writeAttributes = config.writeAttributes;
    this._analyticsConfiguration.internalValue = config.analyticsConfiguration;
    this._refreshTokenRotation.internalValue = config.refreshTokenRotation;
    this._tokenValidityUnits.internalValue = config.tokenValidityUnits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity - computed: true, optional: true, required: false
  private _accessTokenValidity?: number; 
  public get accessTokenValidity() {
    return this.getNumberAttribute('access_token_validity');
  }
  public set accessTokenValidity(value: number) {
    this._accessTokenValidity = value;
  }
  public resetAccessTokenValidity() {
    this._accessTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidityInput() {
    return this._accessTokenValidity;
  }

  // allowed_oauth_flows - computed: true, optional: true, required: false
  private _allowedOauthFlows?: string[]; 
  public get allowedOauthFlows() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_flows'));
  }
  public set allowedOauthFlows(value: string[]) {
    this._allowedOauthFlows = value;
  }
  public resetAllowedOauthFlows() {
    this._allowedOauthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsInput() {
    return this._allowedOauthFlows;
  }

  // allowed_oauth_flows_user_pool_client - computed: true, optional: true, required: false
  private _allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable; 
  public get allowedOauthFlowsUserPoolClient() {
    return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
  }
  public set allowedOauthFlowsUserPoolClient(value: boolean | cdktf.IResolvable) {
    this._allowedOauthFlowsUserPoolClient = value;
  }
  public resetAllowedOauthFlowsUserPoolClient() {
    this._allowedOauthFlowsUserPoolClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthFlowsUserPoolClientInput() {
    return this._allowedOauthFlowsUserPoolClient;
  }

  // allowed_oauth_scopes - computed: true, optional: true, required: false
  private _allowedOauthScopes?: string[]; 
  public get allowedOauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_scopes'));
  }
  public set allowedOauthScopes(value: string[]) {
    this._allowedOauthScopes = value;
  }
  public resetAllowedOauthScopes() {
    this._allowedOauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOauthScopesInput() {
    return this._allowedOauthScopes;
  }

  // auth_session_validity - computed: true, optional: true, required: false
  private _authSessionValidity?: number; 
  public get authSessionValidity() {
    return this.getNumberAttribute('auth_session_validity');
  }
  public set authSessionValidity(value: number) {
    this._authSessionValidity = value;
  }
  public resetAuthSessionValidity() {
    this._authSessionValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionValidityInput() {
    return this._authSessionValidity;
  }

  // callback_urls - computed: true, optional: true, required: false
  private _callbackUrls?: string[]; 
  public get callbackUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('callback_urls'));
  }
  public set callbackUrls(value: string[]) {
    this._callbackUrls = value;
  }
  public resetCallbackUrls() {
    this._callbackUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlsInput() {
    return this._callbackUrls;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // default_redirect_uri - computed: true, optional: true, required: false
  private _defaultRedirectUri?: string; 
  public get defaultRedirectUri() {
    return this.getStringAttribute('default_redirect_uri');
  }
  public set defaultRedirectUri(value: string) {
    this._defaultRedirectUri = value;
  }
  public resetDefaultRedirectUri() {
    this._defaultRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectUriInput() {
    return this._defaultRedirectUri;
  }

  // enable_propagate_additional_user_context_data - computed: true, optional: true, required: false
  private _enablePropagateAdditionalUserContextData?: boolean | cdktf.IResolvable; 
  public get enablePropagateAdditionalUserContextData() {
    return this.getBooleanAttribute('enable_propagate_additional_user_context_data');
  }
  public set enablePropagateAdditionalUserContextData(value: boolean | cdktf.IResolvable) {
    this._enablePropagateAdditionalUserContextData = value;
  }
  public resetEnablePropagateAdditionalUserContextData() {
    this._enablePropagateAdditionalUserContextData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePropagateAdditionalUserContextDataInput() {
    return this._enablePropagateAdditionalUserContextData;
  }

  // enable_token_revocation - computed: true, optional: true, required: false
  private _enableTokenRevocation?: boolean | cdktf.IResolvable; 
  public get enableTokenRevocation() {
    return this.getBooleanAttribute('enable_token_revocation');
  }
  public set enableTokenRevocation(value: boolean | cdktf.IResolvable) {
    this._enableTokenRevocation = value;
  }
  public resetEnableTokenRevocation() {
    this._enableTokenRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTokenRevocationInput() {
    return this._enableTokenRevocation;
  }

  // explicit_auth_flows - computed: true, optional: true, required: false
  private _explicitAuthFlows?: string[]; 
  public get explicitAuthFlows() {
    return cdktf.Fn.tolist(this.getListAttribute('explicit_auth_flows'));
  }
  public set explicitAuthFlows(value: string[]) {
    this._explicitAuthFlows = value;
  }
  public resetExplicitAuthFlows() {
    this._explicitAuthFlows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitAuthFlowsInput() {
    return this._explicitAuthFlows;
  }

  // generate_secret - computed: false, optional: true, required: false
  private _generateSecret?: boolean | cdktf.IResolvable; 
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret');
  }
  public set generateSecret(value: boolean | cdktf.IResolvable) {
    this._generateSecret = value;
  }
  public resetGenerateSecret() {
    this._generateSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSecretInput() {
    return this._generateSecret;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validity - computed: true, optional: true, required: false
  private _idTokenValidity?: number; 
  public get idTokenValidity() {
    return this.getNumberAttribute('id_token_validity');
  }
  public set idTokenValidity(value: number) {
    this._idTokenValidity = value;
  }
  public resetIdTokenValidity() {
    this._idTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidityInput() {
    return this._idTokenValidity;
  }

  // logout_urls - computed: true, optional: true, required: false
  private _logoutUrls?: string[]; 
  public get logoutUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('logout_urls'));
  }
  public set logoutUrls(value: string[]) {
    this._logoutUrls = value;
  }
  public resetLogoutUrls() {
    this._logoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlsInput() {
    return this._logoutUrls;
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

  // prevent_user_existence_errors - computed: true, optional: true, required: false
  private _preventUserExistenceErrors?: string; 
  public get preventUserExistenceErrors() {
    return this.getStringAttribute('prevent_user_existence_errors');
  }
  public set preventUserExistenceErrors(value: string) {
    this._preventUserExistenceErrors = value;
  }
  public resetPreventUserExistenceErrors() {
    this._preventUserExistenceErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUserExistenceErrorsInput() {
    return this._preventUserExistenceErrors;
  }

  // read_attributes - computed: true, optional: true, required: false
  private _readAttributes?: string[]; 
  public get readAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('read_attributes'));
  }
  public set readAttributes(value: string[]) {
    this._readAttributes = value;
  }
  public resetReadAttributes() {
    this._readAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAttributesInput() {
    return this._readAttributes;
  }

  // refresh_token_validity - computed: true, optional: true, required: false
  private _refreshTokenValidity?: number; 
  public get refreshTokenValidity() {
    return this.getNumberAttribute('refresh_token_validity');
  }
  public set refreshTokenValidity(value: number) {
    this._refreshTokenValidity = value;
  }
  public resetRefreshTokenValidity() {
    this._refreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenValidityInput() {
    return this._refreshTokenValidity;
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

  // supported_identity_providers - computed: true, optional: true, required: false
  private _supportedIdentityProviders?: string[]; 
  public get supportedIdentityProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_identity_providers'));
  }
  public set supportedIdentityProviders(value: string[]) {
    this._supportedIdentityProviders = value;
  }
  public resetSupportedIdentityProviders() {
    this._supportedIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedIdentityProvidersInput() {
    return this._supportedIdentityProviders;
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

  // write_attributes - computed: true, optional: true, required: false
  private _writeAttributes?: string[]; 
  public get writeAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('write_attributes'));
  }
  public set writeAttributes(value: string[]) {
    this._writeAttributes = value;
  }
  public resetWriteAttributes() {
    this._writeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAttributesInput() {
    return this._writeAttributes;
  }

  // analytics_configuration - computed: false, optional: true, required: false
  private _analyticsConfiguration = new CognitoUserPoolClientAnalyticsConfigurationList(this, "analytics_configuration", false);
  public get analyticsConfiguration() {
    return this._analyticsConfiguration;
  }
  public putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable) {
    this._analyticsConfiguration.internalValue = value;
  }
  public resetAnalyticsConfiguration() {
    this._analyticsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsConfigurationInput() {
    return this._analyticsConfiguration.internalValue;
  }

  // refresh_token_rotation - computed: false, optional: true, required: false
  private _refreshTokenRotation = new CognitoUserPoolClientRefreshTokenRotationList(this, "refresh_token_rotation", false);
  public get refreshTokenRotation() {
    return this._refreshTokenRotation;
  }
  public putRefreshTokenRotation(value: CognitoUserPoolClientRefreshTokenRotation[] | cdktf.IResolvable) {
    this._refreshTokenRotation.internalValue = value;
  }
  public resetRefreshTokenRotation() {
    this._refreshTokenRotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRotationInput() {
    return this._refreshTokenRotation.internalValue;
  }

  // token_validity_units - computed: false, optional: true, required: false
  private _tokenValidityUnits = new CognitoUserPoolClientTokenValidityUnitsList(this, "token_validity_units", false);
  public get tokenValidityUnits() {
    return this._tokenValidityUnits;
  }
  public putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits[] | cdktf.IResolvable) {
    this._tokenValidityUnits.internalValue = value;
  }
  public resetTokenValidityUnits() {
    this._tokenValidityUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValidityUnitsInput() {
    return this._tokenValidityUnits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
      allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOauthFlows),
      allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
      allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOauthScopes),
      auth_session_validity: cdktf.numberToTerraform(this._authSessionValidity),
      callback_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._callbackUrls),
      default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
      enable_propagate_additional_user_context_data: cdktf.booleanToTerraform(this._enablePropagateAdditionalUserContextData),
      enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
      explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._explicitAuthFlows),
      generate_secret: cdktf.booleanToTerraform(this._generateSecret),
      id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
      logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logoutUrls),
      name: cdktf.stringToTerraform(this._name),
      prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
      read_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readAttributes),
      refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
      region: cdktf.stringToTerraform(this._region),
      supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedIdentityProviders),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      write_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._writeAttributes),
      analytics_configuration: cdktf.listMapper(cognitoUserPoolClientAnalyticsConfigurationToTerraform, true)(this._analyticsConfiguration.internalValue),
      refresh_token_rotation: cdktf.listMapper(cognitoUserPoolClientRefreshTokenRotationToTerraform, true)(this._refreshTokenRotation.internalValue),
      token_validity_units: cdktf.listMapper(cognitoUserPoolClientTokenValidityUnitsToTerraform, true)(this._tokenValidityUnits.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_validity: {
        value: cdktf.numberToHclTerraform(this._accessTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_oauth_flows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOauthFlows),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_oauth_flows_user_pool_client: {
        value: cdktf.booleanToHclTerraform(this._allowedOauthFlowsUserPoolClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_oauth_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOauthScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auth_session_validity: {
        value: cdktf.numberToHclTerraform(this._authSessionValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      callback_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._callbackUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_redirect_uri: {
        value: cdktf.stringToHclTerraform(this._defaultRedirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_propagate_additional_user_context_data: {
        value: cdktf.booleanToHclTerraform(this._enablePropagateAdditionalUserContextData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_token_revocation: {
        value: cdktf.booleanToHclTerraform(this._enableTokenRevocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      explicit_auth_flows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._explicitAuthFlows),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      generate_secret: {
        value: cdktf.booleanToHclTerraform(this._generateSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id_token_validity: {
        value: cdktf.numberToHclTerraform(this._idTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logout_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logoutUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_user_existence_errors: {
        value: cdktf.stringToHclTerraform(this._preventUserExistenceErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_token_validity: {
        value: cdktf.numberToHclTerraform(this._refreshTokenValidity),
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
      supported_identity_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedIdentityProviders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_pool_id: {
        value: cdktf.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._writeAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      analytics_configuration: {
        value: cdktf.listMapperHcl(cognitoUserPoolClientAnalyticsConfigurationToHclTerraform, true)(this._analyticsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitoUserPoolClientAnalyticsConfigurationList",
      },
      refresh_token_rotation: {
        value: cdktf.listMapperHcl(cognitoUserPoolClientRefreshTokenRotationToHclTerraform, true)(this._refreshTokenRotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitoUserPoolClientRefreshTokenRotationList",
      },
      token_validity_units: {
        value: cdktf.listMapperHcl(cognitoUserPoolClientTokenValidityUnitsToHclTerraform, true)(this._tokenValidityUnits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitoUserPoolClientTokenValidityUnitsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
