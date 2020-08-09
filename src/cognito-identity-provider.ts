// https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "attribute_mapping": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "idp_identifiers": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "provider_details": {
        "type": [
          "map",
          "string"
        ],
        "required": true
      },
      "provider_name": {
        "type": "string",
        "required": true
      },
      "provider_type": {
        "type": "string",
        "required": true
      },
      "user_pool_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CognitoIdentityProviderConfig extends TerraformMetaArguments {
  readonly attributeMapping?: { [key: string]: string };
  readonly idpIdentifiers?: string[];
  readonly providerDetails: { [key: string]: string };
  readonly providerName: string;
  readonly providerType: string;
  readonly userPoolId: string;
}

// Resource

export class CognitoIdentityProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitoIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attributeMapping = config.attributeMapping;
    this._idpIdentifiers = config.idpIdentifiers;
    this._providerDetails = config.providerDetails;
    this._providerName = config.providerName;
    this._providerType = config.providerType;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_mapping - computed: true, optional: true, required: false
  private _attributeMapping?: { [key: string]: string }
  public get attributeMapping(): { [key: string]: string } | undefined {
    return this._attributeMapping; // Getting the computed value is not yet implemented
  }
  public set attributeMapping(value: { [key: string]: string } | undefined) {
    this._attributeMapping = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // idp_identifiers - computed: false, optional: true, required: false
  private _idpIdentifiers?: string[];
  public get idpIdentifiers() {
    return this._idpIdentifiers;
  }
  public set idpIdentifiers(value: string[] | undefined) {
    this._idpIdentifiers = value;
  }

  // provider_details - computed: false, optional: false, required: true
  private _providerDetails: { [key: string]: string };
  public get providerDetails() {
    return this._providerDetails;
  }
  public set providerDetails(value: { [key: string]: string }) {
    this._providerDetails = value;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName: string;
  public get providerName() {
    return this._providerName;
  }
  public set providerName(value: string) {
    this._providerName = value;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType: string;
  public get providerType() {
    return this._providerType;
  }
  public set providerType(value: string) {
    this._providerType = value;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this._userPoolId;
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_mapping: this._attributeMapping,
      idp_identifiers: this._idpIdentifiers,
      provider_details: this._providerDetails,
      provider_name: this._providerName,
      provider_type: this._providerType,
      user_pool_id: this._userPoolId,
    };
  }
}
