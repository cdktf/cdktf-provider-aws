// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityPoolProviderPrincipalTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}
  */
  readonly identityProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}
  */
  readonly principalTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}
  */
  readonly useDefaults?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag}
*/
export class CognitoIdentityPoolProviderPrincipalTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_identity_pool_provider_principal_tag";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoIdentityPoolProviderPrincipalTagConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoIdentityPoolProviderPrincipalTagConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_pool_provider_principal_tag',
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
    this._id = config.id;
    this._identityPoolId = config.identityPoolId;
    this._identityProviderName = config.identityProviderName;
    this._principalTags = config.principalTags;
    this._useDefaults = config.useDefaults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
  }

  // identity_provider_name - computed: false, optional: false, required: true
  private _identityProviderName?: string; 
  public get identityProviderName() {
    return this.getStringAttribute('identity_provider_name');
  }
  public set identityProviderName(value: string) {
    this._identityProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderNameInput() {
    return this._identityProviderName;
  }

  // principal_tags - computed: false, optional: true, required: false
  private _principalTags?: { [key: string]: string }; 
  public get principalTags() {
    return this.getStringMapAttribute('principal_tags');
  }
  public set principalTags(value: { [key: string]: string }) {
    this._principalTags = value;
  }
  public resetPrincipalTags() {
    this._principalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTagsInput() {
    return this._principalTags;
  }

  // use_defaults - computed: false, optional: true, required: false
  private _useDefaults?: boolean | cdktf.IResolvable; 
  public get useDefaults() {
    return this.getBooleanAttribute('use_defaults');
  }
  public set useDefaults(value: boolean | cdktf.IResolvable) {
    this._useDefaults = value;
  }
  public resetUseDefaults() {
    this._useDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultsInput() {
    return this._useDefaults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identity_pool_id: cdktf.stringToTerraform(this._identityPoolId),
      identity_provider_name: cdktf.stringToTerraform(this._identityProviderName),
      principal_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._principalTags),
      use_defaults: cdktf.booleanToTerraform(this._useDefaults),
    };
  }
}
