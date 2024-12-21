/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoIdentityPoolProviderPrincipalTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag#id CognitoIdentityPoolProviderPrincipalTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag#identity_pool_id CognitoIdentityPoolProviderPrincipalTag#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag#identity_provider_name CognitoIdentityPoolProviderPrincipalTag#identity_provider_name}
  */
  readonly identityProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag#principal_tags CognitoIdentityPoolProviderPrincipalTag#principal_tags}
  */
  readonly principalTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag#use_defaults CognitoIdentityPoolProviderPrincipalTag#use_defaults}
  */
  readonly useDefaults?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag}
*/
export class CognitoIdentityPoolProviderPrincipalTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_identity_pool_provider_principal_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CognitoIdentityPoolProviderPrincipalTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoIdentityPoolProviderPrincipalTag to import
  * @param importFromId The id of the existing CognitoIdentityPoolProviderPrincipalTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoIdentityPoolProviderPrincipalTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_identity_pool_provider_principal_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/cognito_identity_pool_provider_principal_tag aws_cognito_identity_pool_provider_principal_tag} Resource
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
        providerVersion: '5.82.2',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_pool_id: {
        value: cdktf.stringToHclTerraform(this._identityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_name: {
        value: cdktf.stringToHclTerraform(this._identityProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._principalTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_defaults: {
        value: cdktf.booleanToHclTerraform(this._useDefaults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
