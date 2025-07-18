/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client#region DataAwsCognitoUserPoolClient#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}
  */
  readonly userPoolId: string;
}
export interface DataAwsCognitoUserPoolClientAnalyticsConfiguration {
}

export function dataAwsCognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: DataAwsCognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolClientAnalyticsConfigurationToHclTerraform(struct?: DataAwsCognitoUserPoolClientAnalyticsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCognitoUserPoolClientAnalyticsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolClientAnalyticsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // user_data_shared - computed: true, optional: false, required: false
  public get userDataShared() {
    return this.getBooleanAttribute('user_data_shared');
  }
}

export class DataAwsCognitoUserPoolClientAnalyticsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference {
    return new DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolClientRefreshTokenRotation {
}

export function dataAwsCognitoUserPoolClientRefreshTokenRotationToTerraform(struct?: DataAwsCognitoUserPoolClientRefreshTokenRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolClientRefreshTokenRotationToHclTerraform(struct?: DataAwsCognitoUserPoolClientRefreshTokenRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolClientRefreshTokenRotationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCognitoUserPoolClientRefreshTokenRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolClientRefreshTokenRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature - computed: true, optional: false, required: false
  public get feature() {
    return this.getStringAttribute('feature');
  }

  // retry_grace_period_seconds - computed: true, optional: false, required: false
  public get retryGracePeriodSeconds() {
    return this.getNumberAttribute('retry_grace_period_seconds');
  }
}

export class DataAwsCognitoUserPoolClientRefreshTokenRotationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolClientRefreshTokenRotationOutputReference {
    return new DataAwsCognitoUserPoolClientRefreshTokenRotationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolClientTokenValidityUnits {
}

export function dataAwsCognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: DataAwsCognitoUserPoolClientTokenValidityUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolClientTokenValidityUnitsToHclTerraform(struct?: DataAwsCognitoUserPoolClientTokenValidityUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCognitoUserPoolClientTokenValidityUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolClientTokenValidityUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // id_token - computed: true, optional: false, required: false
  public get idToken() {
    return this.getStringAttribute('id_token');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
}

export class DataAwsCognitoUserPoolClientTokenValidityUnitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference {
    return new DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client aws_cognito_user_pool_client}
*/
export class DataAwsCognitoUserPoolClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_user_pool_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsCognitoUserPoolClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsCognitoUserPoolClient to import
  * @param importFromId The id of the existing DataAwsCognitoUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsCognitoUserPoolClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_user_pool_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/cognito_user_pool_client aws_cognito_user_pool_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCognitoUserPoolClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolClientConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_client',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._clientId = config.clientId;
    this._id = config.id;
    this._region = config.region;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity - computed: true, optional: false, required: false
  public get accessTokenValidity() {
    return this.getNumberAttribute('access_token_validity');
  }

  // allowed_oauth_flows - computed: true, optional: false, required: false
  public get allowedOauthFlows() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_flows'));
  }

  // allowed_oauth_flows_user_pool_client - computed: true, optional: false, required: false
  public get allowedOauthFlowsUserPoolClient() {
    return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
  }

  // allowed_oauth_scopes - computed: true, optional: false, required: false
  public get allowedOauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_oauth_scopes'));
  }

  // analytics_configuration - computed: true, optional: false, required: false
  private _analyticsConfiguration = new DataAwsCognitoUserPoolClientAnalyticsConfigurationList(this, "analytics_configuration", false);
  public get analyticsConfiguration() {
    return this._analyticsConfiguration;
  }

  // callback_urls - computed: true, optional: false, required: false
  public get callbackUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('callback_urls'));
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // default_redirect_uri - computed: true, optional: false, required: false
  public get defaultRedirectUri() {
    return this.getStringAttribute('default_redirect_uri');
  }

  // enable_propagate_additional_user_context_data - computed: true, optional: false, required: false
  public get enablePropagateAdditionalUserContextData() {
    return this.getBooleanAttribute('enable_propagate_additional_user_context_data');
  }

  // enable_token_revocation - computed: true, optional: false, required: false
  public get enableTokenRevocation() {
    return this.getBooleanAttribute('enable_token_revocation');
  }

  // explicit_auth_flows - computed: true, optional: false, required: false
  public get explicitAuthFlows() {
    return cdktf.Fn.tolist(this.getListAttribute('explicit_auth_flows'));
  }

  // generate_secret - computed: true, optional: false, required: false
  public get generateSecret() {
    return this.getBooleanAttribute('generate_secret');
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

  // id_token_validity - computed: true, optional: false, required: false
  public get idTokenValidity() {
    return this.getNumberAttribute('id_token_validity');
  }

  // logout_urls - computed: true, optional: false, required: false
  public get logoutUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('logout_urls'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prevent_user_existence_errors - computed: true, optional: false, required: false
  public get preventUserExistenceErrors() {
    return this.getStringAttribute('prevent_user_existence_errors');
  }

  // read_attributes - computed: true, optional: false, required: false
  public get readAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('read_attributes'));
  }

  // refresh_token_rotation - computed: true, optional: false, required: false
  private _refreshTokenRotation = new DataAwsCognitoUserPoolClientRefreshTokenRotationList(this, "refresh_token_rotation", false);
  public get refreshTokenRotation() {
    return this._refreshTokenRotation;
  }

  // refresh_token_validity - computed: true, optional: false, required: false
  public get refreshTokenValidity() {
    return this.getNumberAttribute('refresh_token_validity');
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

  // supported_identity_providers - computed: true, optional: false, required: false
  public get supportedIdentityProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_identity_providers'));
  }

  // token_validity_units - computed: true, optional: false, required: false
  private _tokenValidityUnits = new DataAwsCognitoUserPoolClientTokenValidityUnitsList(this, "token_validity_units", false);
  public get tokenValidityUnits() {
    return this._tokenValidityUnits;
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

  // write_attributes - computed: true, optional: false, required: false
  public get writeAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('write_attributes'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_id: {
        value: cdktf.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
