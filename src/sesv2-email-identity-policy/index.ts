/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2EmailIdentityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy#email_identity Sesv2EmailIdentityPolicy#email_identity}
  */
  readonly emailIdentity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy#id Sesv2EmailIdentityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy#policy Sesv2EmailIdentityPolicy#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy#policy_name Sesv2EmailIdentityPolicy#policy_name}
  */
  readonly policyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy aws_sesv2_email_identity_policy}
*/
export class Sesv2EmailIdentityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_email_identity_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sesv2EmailIdentityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sesv2EmailIdentityPolicy to import
  * @param importFromId The id of the existing Sesv2EmailIdentityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sesv2EmailIdentityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_email_identity_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/sesv2_email_identity_policy aws_sesv2_email_identity_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2EmailIdentityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2EmailIdentityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_email_identity_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.48.0',
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
    this._emailIdentity = config.emailIdentity;
    this._id = config.id;
    this._policy = config.policy;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_identity - computed: false, optional: false, required: true
  private _emailIdentity?: string; 
  public get emailIdentity() {
    return this.getStringAttribute('email_identity');
  }
  public set emailIdentity(value: string) {
    this._emailIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdentityInput() {
    return this._emailIdentity;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_identity: cdktf.stringToTerraform(this._emailIdentity),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_identity: {
        value: cdktf.stringToHclTerraform(this._emailIdentity),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
