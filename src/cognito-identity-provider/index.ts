// https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#attribute_mapping CognitoIdentityProvider#attribute_mapping}
  */
  readonly attributeMapping?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#id CognitoIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#idp_identifiers CognitoIdentityProvider#idp_identifiers}
  */
  readonly idpIdentifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_details CognitoIdentityProvider#provider_details}
  */
  readonly providerDetails: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_name CognitoIdentityProvider#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#provider_type CognitoIdentityProvider#provider_type}
  */
  readonly providerType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider#user_pool_id CognitoIdentityProvider#user_pool_id}
  */
  readonly userPoolId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider aws_cognito_identity_provider}
*/
export class CognitoIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_identity_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider aws_cognito_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeMapping = config.attributeMapping;
    this._id = config.id;
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
  private _attributeMapping?: { [key: string]: string }; 
  public get attributeMapping() {
    return this.getStringMapAttribute('attribute_mapping');
  }
  public set attributeMapping(value: { [key: string]: string }) {
    this._attributeMapping = value;
  }
  public resetAttributeMapping() {
    this._attributeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingInput() {
    return this._attributeMapping;
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

  // idp_identifiers - computed: false, optional: true, required: false
  private _idpIdentifiers?: string[]; 
  public get idpIdentifiers() {
    return this.getListAttribute('idp_identifiers');
  }
  public set idpIdentifiers(value: string[]) {
    this._idpIdentifiers = value;
  }
  public resetIdpIdentifiers() {
    this._idpIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdentifiersInput() {
    return this._idpIdentifiers;
  }

  // provider_details - computed: false, optional: false, required: true
  private _providerDetails?: { [key: string]: string }; 
  public get providerDetails() {
    return this.getStringMapAttribute('provider_details');
  }
  public set providerDetails(value: { [key: string]: string }) {
    this._providerDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDetailsInput() {
    return this._providerDetails;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributeMapping),
      id: cdktf.stringToTerraform(this._id),
      idp_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idpIdentifiers),
      provider_details: cdktf.hashMapper(cdktf.stringToTerraform)(this._providerDetails),
      provider_name: cdktf.stringToTerraform(this._providerName),
      provider_type: cdktf.stringToTerraform(this._providerType),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }
}
