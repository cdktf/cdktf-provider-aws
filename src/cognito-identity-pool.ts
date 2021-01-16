// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityPoolConfig extends cdktf.TerraformMetaArguments {
  readonly allowUnauthenticatedIdentities?: boolean;
  readonly developerProviderName?: string;
  readonly identityPoolName: string;
  readonly openidConnectProviderArns?: string[];
  readonly samlProviderArns?: string[];
  readonly supportedLoginProviders?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  /** cognito_identity_providers block */
  readonly cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[];
}
export interface CognitoIdentityPoolCognitoIdentityProviders {
  readonly clientId?: string;
  readonly providerName?: string;
  readonly serverSideTokenCheck?: boolean;
}

function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct?: CognitoIdentityPoolCognitoIdentityProviders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    server_side_token_check: cdktf.booleanToTerraform(struct!.serverSideTokenCheck),
  }
}


// Resource

export class CognitoIdentityPool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
    this._developerProviderName = config.developerProviderName;
    this._identityPoolName = config.identityPoolName;
    this._openidConnectProviderArns = config.openidConnectProviderArns;
    this._samlProviderArns = config.samlProviderArns;
    this._supportedLoginProviders = config.supportedLoginProviders;
    this._tags = config.tags;
    this._cognitoIdentityProviders = config.cognitoIdentityProviders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unauthenticated_identities - computed: false, optional: true, required: false
  private _allowUnauthenticatedIdentities?: boolean;
  public get allowUnauthenticatedIdentities() {
    return this.getBooleanAttribute('allow_unauthenticated_identities');
  }
  public set allowUnauthenticatedIdentities(value: boolean ) {
    this._allowUnauthenticatedIdentities = value;
  }
  public resetAllowUnauthenticatedIdentities() {
    this._allowUnauthenticatedIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedIdentitiesInput() {
    return this._allowUnauthenticatedIdentities
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
  public set developerProviderName(value: string ) {
    this._developerProviderName = value;
  }
  public resetDeveloperProviderName() {
    this._developerProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerProviderNameInput() {
    return this._developerProviderName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_pool_name - computed: false, optional: false, required: true
  private _identityPoolName: string;
  public get identityPoolName() {
    return this.getStringAttribute('identity_pool_name');
  }
  public set identityPoolName(value: string) {
    this._identityPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolNameInput() {
    return this._identityPoolName
  }

  // openid_connect_provider_arns - computed: false, optional: true, required: false
  private _openidConnectProviderArns?: string[];
  public get openidConnectProviderArns() {
    return this.getListAttribute('openid_connect_provider_arns');
  }
  public set openidConnectProviderArns(value: string[] ) {
    this._openidConnectProviderArns = value;
  }
  public resetOpenidConnectProviderArns() {
    this._openidConnectProviderArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectProviderArnsInput() {
    return this._openidConnectProviderArns
  }

  // saml_provider_arns - computed: false, optional: true, required: false
  private _samlProviderArns?: string[];
  public get samlProviderArns() {
    return this.getListAttribute('saml_provider_arns');
  }
  public set samlProviderArns(value: string[] ) {
    this._samlProviderArns = value;
  }
  public resetSamlProviderArns() {
    this._samlProviderArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlProviderArnsInput() {
    return this._samlProviderArns
  }

  // supported_login_providers - computed: false, optional: true, required: false
  private _supportedLoginProviders?: { [key: string]: string };
  public get supportedLoginProviders() {
    return this.interpolationForAttribute('supported_login_providers') as any;
  }
  public set supportedLoginProviders(value: { [key: string]: string } ) {
    this._supportedLoginProviders = value;
  }
  public resetSupportedLoginProviders() {
    this._supportedLoginProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLoginProvidersInput() {
    return this._supportedLoginProviders
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // cognito_identity_providers - computed: false, optional: true, required: false
  private _cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[];
  public get cognitoIdentityProviders() {
    return this.interpolationForAttribute('cognito_identity_providers') as any;
  }
  public set cognitoIdentityProviders(value: CognitoIdentityPoolCognitoIdentityProviders[] ) {
    this._cognitoIdentityProviders = value;
  }
  public resetCognitoIdentityProviders() {
    this._cognitoIdentityProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoIdentityProvidersInput() {
    return this._cognitoIdentityProviders
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unauthenticated_identities: cdktf.booleanToTerraform(this._allowUnauthenticatedIdentities),
      developer_provider_name: cdktf.stringToTerraform(this._developerProviderName),
      identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
      openid_connect_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._openidConnectProviderArns),
      saml_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._samlProviderArns),
      supported_login_providers: cdktf.hashMapper(cdktf.anyToTerraform)(this._supportedLoginProviders),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      cognito_identity_providers: cdktf.listMapper(cognitoIdentityPoolCognitoIdentityProvidersToTerraform)(this._cognitoIdentityProviders),
    };
  }
}
