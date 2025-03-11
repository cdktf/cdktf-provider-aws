/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/iam_user_policies_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserPoliciesExclusiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}
  */
  readonly policyNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/iam_user_policies_exclusive aws_iam_user_policies_exclusive}
*/
export class IamUserPoliciesExclusive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_user_policies_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamUserPoliciesExclusive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamUserPoliciesExclusive to import
  * @param importFromId The id of the existing IamUserPoliciesExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/iam_user_policies_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamUserPoliciesExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_user_policies_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/iam_user_policies_exclusive aws_iam_user_policies_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamUserPoliciesExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: IamUserPoliciesExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_user_policies_exclusive',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.1',
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
    this._policyNames = config.policyNames;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policy_names - computed: false, optional: false, required: true
  private _policyNames?: string[]; 
  public get policyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_names'));
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyNames),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
