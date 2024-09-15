/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfabricAppAuthorizationConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}
  */
  readonly appAuthorizationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}
  */
  readonly appBundleArn: string;
  /**
  * auth_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}
  */
  readonly authRequest?: AppfabricAppAuthorizationConnectionAuthRequest[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}
  */
  readonly timeouts?: AppfabricAppAuthorizationConnectionTimeouts;
}
export interface AppfabricAppAuthorizationConnectionTenant {
}

export function appfabricAppAuthorizationConnectionTenantToTerraform(struct?: AppfabricAppAuthorizationConnectionTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appfabricAppAuthorizationConnectionTenantToHclTerraform(struct?: AppfabricAppAuthorizationConnectionTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppfabricAppAuthorizationConnectionTenantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppfabricAppAuthorizationConnectionTenant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricAppAuthorizationConnectionTenant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tenant_display_name - computed: true, optional: false, required: false
  public get tenantDisplayName() {
    return this.getStringAttribute('tenant_display_name');
  }

  // tenant_identifier - computed: true, optional: false, required: false
  public get tenantIdentifier() {
    return this.getStringAttribute('tenant_identifier');
  }
}

export class AppfabricAppAuthorizationConnectionTenantList extends cdktf.ComplexList {

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
  public get(index: number): AppfabricAppAuthorizationConnectionTenantOutputReference {
    return new AppfabricAppAuthorizationConnectionTenantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricAppAuthorizationConnectionAuthRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}
  */
  readonly code: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}
  */
  readonly redirectUri: string;
}

export function appfabricAppAuthorizationConnectionAuthRequestToTerraform(struct?: AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}


export function appfabricAppAuthorizationConnectionAuthRequestToHclTerraform(struct?: AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricAppAuthorizationConnectionAuthRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._redirectUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._redirectUri = value.redirectUri;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // redirect_uri - computed: false, optional: false, required: true
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}

export class AppfabricAppAuthorizationConnectionAuthRequestList extends cdktf.ComplexList {
  public internalValue? : AppfabricAppAuthorizationConnectionAuthRequest[] | cdktf.IResolvable

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
  public get(index: number): AppfabricAppAuthorizationConnectionAuthRequestOutputReference {
    return new AppfabricAppAuthorizationConnectionAuthRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppfabricAppAuthorizationConnectionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#create AppfabricAppAuthorizationConnection#create}
  */
  readonly create?: string;
}

export function appfabricAppAuthorizationConnectionTimeoutsToTerraform(struct?: AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function appfabricAppAuthorizationConnectionTimeoutsToHclTerraform(struct?: AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppfabricAppAuthorizationConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection}
*/
export class AppfabricAppAuthorizationConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appfabric_app_authorization_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfabricAppAuthorizationConnection to import
  * @param importFromId The id of the existing AppfabricAppAuthorizationConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfabricAppAuthorizationConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appfabric_app_authorization_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfabricAppAuthorizationConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AppfabricAppAuthorizationConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appfabric_app_authorization_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.67.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appAuthorizationArn = config.appAuthorizationArn;
    this._appBundleArn = config.appBundleArn;
    this._authRequest.internalValue = config.authRequest;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: true, optional: false, required: false
  public get app() {
    return this.getStringAttribute('app');
  }

  // app_authorization_arn - computed: false, optional: false, required: true
  private _appAuthorizationArn?: string; 
  public get appAuthorizationArn() {
    return this.getStringAttribute('app_authorization_arn');
  }
  public set appAuthorizationArn(value: string) {
    this._appAuthorizationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appAuthorizationArnInput() {
    return this._appAuthorizationArn;
  }

  // app_bundle_arn - computed: false, optional: false, required: true
  private _appBundleArn?: string; 
  public get appBundleArn() {
    return this.getStringAttribute('app_bundle_arn');
  }
  public set appBundleArn(value: string) {
    this._appBundleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appBundleArnInput() {
    return this._appBundleArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tenant - computed: true, optional: false, required: false
  private _tenant = new AppfabricAppAuthorizationConnectionTenantList(this, "tenant", false);
  public get tenant() {
    return this._tenant;
  }

  // auth_request - computed: false, optional: true, required: false
  private _authRequest = new AppfabricAppAuthorizationConnectionAuthRequestList(this, "auth_request", false);
  public get authRequest() {
    return this._authRequest;
  }
  public putAuthRequest(value: AppfabricAppAuthorizationConnectionAuthRequest[] | cdktf.IResolvable) {
    this._authRequest.internalValue = value;
  }
  public resetAuthRequest() {
    this._authRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRequestInput() {
    return this._authRequest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppfabricAppAuthorizationConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppfabricAppAuthorizationConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_authorization_arn: cdktf.stringToTerraform(this._appAuthorizationArn),
      app_bundle_arn: cdktf.stringToTerraform(this._appBundleArn),
      auth_request: cdktf.listMapper(appfabricAppAuthorizationConnectionAuthRequestToTerraform, true)(this._authRequest.internalValue),
      timeouts: appfabricAppAuthorizationConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_authorization_arn: {
        value: cdktf.stringToHclTerraform(this._appAuthorizationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_bundle_arn: {
        value: cdktf.stringToHclTerraform(this._appBundleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_request: {
        value: cdktf.listMapperHcl(appfabricAppAuthorizationConnectionAuthRequestToHclTerraform, true)(this._authRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppfabricAppAuthorizationConnectionAuthRequestList",
      },
      timeouts: {
        value: appfabricAppAuthorizationConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppfabricAppAuthorizationConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
