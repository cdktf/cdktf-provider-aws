/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}
  */
  readonly allowClassicFlow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}
  */
  readonly allowUnauthenticatedIdentities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}
  */
  readonly developerProviderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#id CognitoIdentityPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}
  */
  readonly identityPoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}
  */
  readonly openidConnectProviderArns?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#region CognitoIdentityPool#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}
  */
  readonly samlProviderArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}
  */
  readonly supportedLoginProviders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#tags CognitoIdentityPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cognito_identity_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}
  */
  readonly cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable;
}
export interface CognitoIdentityPoolCognitoIdentityProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#client_id CognitoIdentityPool#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}
  */
  readonly providerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}
  */
  readonly serverSideTokenCheck?: boolean | cdktf.IResolvable;
}

export function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct?: CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    server_side_token_check: cdktf.booleanToTerraform(struct!.serverSideTokenCheck),
  }
}


export function cognitoIdentityPoolCognitoIdentityProvidersToHclTerraform(struct?: CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_token_check: {
      value: cdktf.booleanToHclTerraform(struct!.serverSideTokenCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoIdentityPoolCognitoIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._serverSideTokenCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideTokenCheck = this._serverSideTokenCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoIdentityPoolCognitoIdentityProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._providerName = undefined;
      this._serverSideTokenCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._providerName = value.providerName;
      this._serverSideTokenCheck = value.serverSideTokenCheck;
    }
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

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // server_side_token_check - computed: false, optional: true, required: false
  private _serverSideTokenCheck?: boolean | cdktf.IResolvable; 
  public get serverSideTokenCheck() {
    return this.getBooleanAttribute('server_side_token_check');
  }
  public set serverSideTokenCheck(value: boolean | cdktf.IResolvable) {
    this._serverSideTokenCheck = value;
  }
  public resetServerSideTokenCheck() {
    this._serverSideTokenCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideTokenCheckInput() {
    return this._serverSideTokenCheck;
  }
}

export class CognitoIdentityPoolCognitoIdentityProvidersList extends cdktf.ComplexList {
  public internalValue? : CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable

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
  public get(index: number): CognitoIdentityPoolCognitoIdentityProvidersOutputReference {
    return new CognitoIdentityPoolCognitoIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool aws_cognito_identity_pool}
*/
export class CognitoIdentityPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_identity_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CognitoIdentityPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoIdentityPool to import
  * @param importFromId The id of the existing CognitoIdentityPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoIdentityPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_identity_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cognito_identity_pool aws_cognito_identity_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoIdentityPoolConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoIdentityPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_pool',
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
    this._allowClassicFlow = config.allowClassicFlow;
    this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
    this._developerProviderName = config.developerProviderName;
    this._id = config.id;
    this._identityPoolName = config.identityPoolName;
    this._openidConnectProviderArns = config.openidConnectProviderArns;
    this._region = config.region;
    this._samlProviderArns = config.samlProviderArns;
    this._supportedLoginProviders = config.supportedLoginProviders;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cognitoIdentityProviders.internalValue = config.cognitoIdentityProviders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_classic_flow - computed: false, optional: true, required: false
  private _allowClassicFlow?: boolean | cdktf.IResolvable; 
  public get allowClassicFlow() {
    return this.getBooleanAttribute('allow_classic_flow');
  }
  public set allowClassicFlow(value: boolean | cdktf.IResolvable) {
    this._allowClassicFlow = value;
  }
  public resetAllowClassicFlow() {
    this._allowClassicFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClassicFlowInput() {
    return this._allowClassicFlow;
  }

  // allow_unauthenticated_identities - computed: false, optional: true, required: false
  private _allowUnauthenticatedIdentities?: boolean | cdktf.IResolvable; 
  public get allowUnauthenticatedIdentities() {
    return this.getBooleanAttribute('allow_unauthenticated_identities');
  }
  public set allowUnauthenticatedIdentities(value: boolean | cdktf.IResolvable) {
    this._allowUnauthenticatedIdentities = value;
  }
  public resetAllowUnauthenticatedIdentities() {
    this._allowUnauthenticatedIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedIdentitiesInput() {
    return this._allowUnauthenticatedIdentities;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // developer_provider_name - computed: false, optional: true, required: false
  private _developerProviderName?: string; 
  public get developerProviderName() {
    return this.getStringAttribute('developer_provider_name');
  }
  public set developerProviderName(value: string) {
    this._developerProviderName = value;
  }
  public resetDeveloperProviderName() {
    this._developerProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerProviderNameInput() {
    return this._developerProviderName;
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

  // identity_pool_name - computed: false, optional: false, required: true
  private _identityPoolName?: string; 
  public get identityPoolName() {
    return this.getStringAttribute('identity_pool_name');
  }
  public set identityPoolName(value: string) {
    this._identityPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolNameInput() {
    return this._identityPoolName;
  }

  // openid_connect_provider_arns - computed: false, optional: true, required: false
  private _openidConnectProviderArns?: string[]; 
  public get openidConnectProviderArns() {
    return cdktf.Fn.tolist(this.getListAttribute('openid_connect_provider_arns'));
  }
  public set openidConnectProviderArns(value: string[]) {
    this._openidConnectProviderArns = value;
  }
  public resetOpenidConnectProviderArns() {
    this._openidConnectProviderArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectProviderArnsInput() {
    return this._openidConnectProviderArns;
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

  // saml_provider_arns - computed: false, optional: true, required: false
  private _samlProviderArns?: string[]; 
  public get samlProviderArns() {
    return this.getListAttribute('saml_provider_arns');
  }
  public set samlProviderArns(value: string[]) {
    this._samlProviderArns = value;
  }
  public resetSamlProviderArns() {
    this._samlProviderArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlProviderArnsInput() {
    return this._samlProviderArns;
  }

  // supported_login_providers - computed: false, optional: true, required: false
  private _supportedLoginProviders?: { [key: string]: string }; 
  public get supportedLoginProviders() {
    return this.getStringMapAttribute('supported_login_providers');
  }
  public set supportedLoginProviders(value: { [key: string]: string }) {
    this._supportedLoginProviders = value;
  }
  public resetSupportedLoginProviders() {
    this._supportedLoginProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLoginProvidersInput() {
    return this._supportedLoginProviders;
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

  // cognito_identity_providers - computed: false, optional: true, required: false
  private _cognitoIdentityProviders = new CognitoIdentityPoolCognitoIdentityProvidersList(this, "cognito_identity_providers", true);
  public get cognitoIdentityProviders() {
    return this._cognitoIdentityProviders;
  }
  public putCognitoIdentityProviders(value: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable) {
    this._cognitoIdentityProviders.internalValue = value;
  }
  public resetCognitoIdentityProviders() {
    this._cognitoIdentityProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoIdentityProvidersInput() {
    return this._cognitoIdentityProviders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_classic_flow: cdktf.booleanToTerraform(this._allowClassicFlow),
      allow_unauthenticated_identities: cdktf.booleanToTerraform(this._allowUnauthenticatedIdentities),
      developer_provider_name: cdktf.stringToTerraform(this._developerProviderName),
      id: cdktf.stringToTerraform(this._id),
      identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
      openid_connect_provider_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._openidConnectProviderArns),
      region: cdktf.stringToTerraform(this._region),
      saml_provider_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._samlProviderArns),
      supported_login_providers: cdktf.hashMapper(cdktf.stringToTerraform)(this._supportedLoginProviders),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      cognito_identity_providers: cdktf.listMapper(cognitoIdentityPoolCognitoIdentityProvidersToTerraform, true)(this._cognitoIdentityProviders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_classic_flow: {
        value: cdktf.booleanToHclTerraform(this._allowClassicFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_unauthenticated_identities: {
        value: cdktf.booleanToHclTerraform(this._allowUnauthenticatedIdentities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      developer_provider_name: {
        value: cdktf.stringToHclTerraform(this._developerProviderName),
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
      identity_pool_name: {
        value: cdktf.stringToHclTerraform(this._identityPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openid_connect_provider_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._openidConnectProviderArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_provider_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._samlProviderArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      supported_login_providers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._supportedLoginProviders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      cognito_identity_providers: {
        value: cdktf.listMapperHcl(cognitoIdentityPoolCognitoIdentityProvidersToHclTerraform, true)(this._cognitoIdentityProviders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CognitoIdentityPoolCognitoIdentityProvidersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
