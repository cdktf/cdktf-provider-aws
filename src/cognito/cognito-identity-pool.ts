// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cognito
*/
export interface CognitoIdentityPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}
  */
  readonly allowClassicFlow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}
  */
  readonly allowUnauthenticatedIdentities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}
  */
  readonly developerProviderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}
  */
  readonly identityPoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}
  */
  readonly openidConnectProviderArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}
  */
  readonly samlProviderArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}
  */
  readonly supportedLoginProviders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cognito_identity_providers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}
  */
  readonly cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable;
}
export interface CognitoIdentityPoolCognitoIdentityProviders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}
  */
  readonly providerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool aws_cognito_identity_pool}
*/
export class CognitoIdentityPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cognito_identity_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool aws_cognito_identity_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoIdentityPoolConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoIdentityPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowClassicFlow = config.allowClassicFlow;
    this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
    this._developerProviderName = config.developerProviderName;
    this._identityPoolName = config.identityPoolName;
    this._openidConnectProviderArns = config.openidConnectProviderArns;
    this._samlProviderArns = config.samlProviderArns;
    this._supportedLoginProviders = config.supportedLoginProviders;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cognitoIdentityProviders = config.cognitoIdentityProviders;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable; 
  public get cognitoIdentityProviders() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('cognito_identity_providers')));
  }
  public set cognitoIdentityProviders(value: CognitoIdentityPoolCognitoIdentityProviders[] | cdktf.IResolvable) {
    this._cognitoIdentityProviders = value;
  }
  public resetCognitoIdentityProviders() {
    this._cognitoIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoIdentityProvidersInput() {
    return this._cognitoIdentityProviders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_classic_flow: cdktf.booleanToTerraform(this._allowClassicFlow),
      allow_unauthenticated_identities: cdktf.booleanToTerraform(this._allowUnauthenticatedIdentities),
      developer_provider_name: cdktf.stringToTerraform(this._developerProviderName),
      identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
      openid_connect_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._openidConnectProviderArns),
      saml_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._samlProviderArns),
      supported_login_providers: cdktf.hashMapper(cdktf.stringToTerraform)(this._supportedLoginProviders),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      cognito_identity_providers: cdktf.listMapper(cognitoIdentityPoolCognitoIdentityProvidersToTerraform)(this._cognitoIdentityProviders),
    };
  }
}
