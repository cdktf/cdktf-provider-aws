// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_unauthenticated_identities": {
        "type": "bool",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "developer_provider_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_pool_name": {
        "type": "string",
        "required": true
      },
      "openid_connect_provider_arns": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "saml_provider_arns": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "supported_login_providers": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "cognito_identity_providers": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "client_id": {
              "type": "string",
              "optional": true
            },
            "provider_name": {
              "type": "string",
              "optional": true
            },
            "server_side_token_check": {
              "type": "bool",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CognitoIdentityPoolConfig extends TerraformMetaArguments {
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

// Resource

export class CognitoIdentityPool extends TerraformResource {

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
    return this._allowUnauthenticatedIdentities;
  }
  public set allowUnauthenticatedIdentities(value: boolean | undefined) {
    this._allowUnauthenticatedIdentities = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // developer_provider_name - computed: false, optional: true, required: false
  private _developerProviderName?: string;
  public get developerProviderName() {
    return this._developerProviderName;
  }
  public set developerProviderName(value: string | undefined) {
    this._developerProviderName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_pool_name - computed: false, optional: false, required: true
  private _identityPoolName: string;
  public get identityPoolName() {
    return this._identityPoolName;
  }
  public set identityPoolName(value: string) {
    this._identityPoolName = value;
  }

  // openid_connect_provider_arns - computed: false, optional: true, required: false
  private _openidConnectProviderArns?: string[];
  public get openidConnectProviderArns() {
    return this._openidConnectProviderArns;
  }
  public set openidConnectProviderArns(value: string[] | undefined) {
    this._openidConnectProviderArns = value;
  }

  // saml_provider_arns - computed: false, optional: true, required: false
  private _samlProviderArns?: string[];
  public get samlProviderArns() {
    return this._samlProviderArns;
  }
  public set samlProviderArns(value: string[] | undefined) {
    this._samlProviderArns = value;
  }

  // supported_login_providers - computed: false, optional: true, required: false
  private _supportedLoginProviders?: { [key: string]: string };
  public get supportedLoginProviders() {
    return this._supportedLoginProviders;
  }
  public set supportedLoginProviders(value: { [key: string]: string } | undefined) {
    this._supportedLoginProviders = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // cognito_identity_providers - computed: false, optional: true, required: false
  private _cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[];
  public get cognitoIdentityProviders() {
    return this._cognitoIdentityProviders;
  }
  public set cognitoIdentityProviders(value: CognitoIdentityPoolCognitoIdentityProviders[] | undefined) {
    this._cognitoIdentityProviders = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unauthenticated_identities: this._allowUnauthenticatedIdentities,
      developer_provider_name: this._developerProviderName,
      identity_pool_name: this._identityPoolName,
      openid_connect_provider_arns: this._openidConnectProviderArns,
      saml_provider_arns: this._samlProviderArns,
      supported_login_providers: this._supportedLoginProviders,
      tags: this._tags,
      cognito_identity_providers: this._cognitoIdentityProviders,
    };
  }
}
