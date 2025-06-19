/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_role_policy_attachments_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamRolePolicyAttachmentsExclusiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_role_policy_attachments_exclusive#policy_arns IamRolePolicyAttachmentsExclusive#policy_arns}
  */
  readonly policyArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_role_policy_attachments_exclusive#role_name IamRolePolicyAttachmentsExclusive#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_role_policy_attachments_exclusive aws_iam_role_policy_attachments_exclusive}
*/
export class IamRolePolicyAttachmentsExclusive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_role_policy_attachments_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamRolePolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamRolePolicyAttachmentsExclusive to import
  * @param importFromId The id of the existing IamRolePolicyAttachmentsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_role_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamRolePolicyAttachmentsExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_role_policy_attachments_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iam_role_policy_attachments_exclusive aws_iam_role_policy_attachments_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamRolePolicyAttachmentsExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: IamRolePolicyAttachmentsExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_role_policy_attachments_exclusive',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._policyArns = config.policyArns;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policy_arns - computed: false, optional: false, required: true
  private _policyArns?: string[]; 
  public get policyArns() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_arns'));
  }
  public set policyArns(value: string[]) {
    this._policyArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyArns),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
