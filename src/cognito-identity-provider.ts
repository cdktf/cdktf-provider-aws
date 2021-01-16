// https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  readonly attributeMapping?: { [key: string]: string };
  readonly idpIdentifiers?: string[];
  readonly providerDetails: { [key: string]: string };
  readonly providerName: string;
  readonly providerType: string;
  readonly userPoolId: string;
}

// Resource

export class CognitoIdentityProvider extends cdktf.TerraformResource {

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
  public get attributeMapping(): { [key: string]: string } {
    return this.interpolationForAttribute('attribute_mapping') as any; // Getting the computed value is not yet implemented
  }
  public set attributeMapping(value: { [key: string]: string }) {
    this._attributeMapping = value;
  }
  public resetAttributeMapping() {
    this._attributeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingInput() {
    return this._attributeMapping
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_identifiers - computed: false, optional: true, required: false
  private _idpIdentifiers?: string[];
  public get idpIdentifiers() {
    return this.getListAttribute('idp_identifiers');
  }
  public set idpIdentifiers(value: string[] ) {
    this._idpIdentifiers = value;
  }
  public resetIdpIdentifiers() {
    this._idpIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdentifiersInput() {
    return this._idpIdentifiers
  }

  // provider_details - computed: false, optional: false, required: true
  private _providerDetails: { [key: string]: string };
  public get providerDetails() {
    return this.interpolationForAttribute('provider_details') as any;
  }
  public set providerDetails(value: { [key: string]: string }) {
    this._providerDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDetailsInput() {
    return this._providerDetails
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName: string;
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType: string;
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_mapping: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributeMapping),
      idp_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._idpIdentifiers),
      provider_details: cdktf.hashMapper(cdktf.anyToTerraform)(this._providerDetails),
      provider_name: cdktf.stringToTerraform(this._providerName),
      provider_type: cdktf.stringToTerraform(this._providerType),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }
}
