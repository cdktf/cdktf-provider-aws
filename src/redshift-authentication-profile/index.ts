/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/redshift_authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/redshift_authentication_profile#authentication_profile_content RedshiftAuthenticationProfile#authentication_profile_content}
  */
  readonly authenticationProfileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/redshift_authentication_profile#authentication_profile_name RedshiftAuthenticationProfile#authentication_profile_name}
  */
  readonly authenticationProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/redshift_authentication_profile#id RedshiftAuthenticationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/redshift_authentication_profile aws_redshift_authentication_profile}
*/
export class RedshiftAuthenticationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftAuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftAuthenticationProfile to import
  * @param importFromId The id of the existing RedshiftAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/redshift_authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftAuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/redshift_authentication_profile aws_redshift_authentication_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.70.0',
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
    this._authenticationProfileContent = config.authenticationProfileContent;
    this._authenticationProfileName = config.authenticationProfileName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_profile_content - computed: false, optional: false, required: true
  private _authenticationProfileContent?: string; 
  public get authenticationProfileContent() {
    return this.getStringAttribute('authentication_profile_content');
  }
  public set authenticationProfileContent(value: string) {
    this._authenticationProfileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileContentInput() {
    return this._authenticationProfileContent;
  }

  // authentication_profile_name - computed: false, optional: false, required: true
  private _authenticationProfileName?: string; 
  public get authenticationProfileName() {
    return this.getStringAttribute('authentication_profile_name');
  }
  public set authenticationProfileName(value: string) {
    this._authenticationProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileNameInput() {
    return this._authenticationProfileName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_profile_content: cdktf.stringToTerraform(this._authenticationProfileContent),
      authentication_profile_name: cdktf.stringToTerraform(this._authenticationProfileName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_profile_content: {
        value: cdktf.stringToHclTerraform(this._authenticationProfileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_profile_name: {
        value: cdktf.stringToHclTerraform(this._authenticationProfileName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
