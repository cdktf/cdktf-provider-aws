/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightRoleMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership#aws_account_id QuicksightRoleMembership#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership#member_name QuicksightRoleMembership#member_name}
  */
  readonly memberName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership#namespace QuicksightRoleMembership#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership#role QuicksightRoleMembership#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership aws_quicksight_role_membership}
*/
export class QuicksightRoleMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_role_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuicksightRoleMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightRoleMembership to import
  * @param importFromId The id of the existing QuicksightRoleMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightRoleMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_role_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/resources/quicksight_role_membership aws_quicksight_role_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightRoleMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightRoleMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_role_membership',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.0',
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
    this._awsAccountId = config.awsAccountId;
    this._memberName = config.memberName;
    this._namespace = config.namespace;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // member_name - computed: false, optional: false, required: true
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      member_name: cdktf.stringToTerraform(this._memberName),
      namespace: cdktf.stringToTerraform(this._namespace),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_name: {
        value: cdktf.stringToHclTerraform(this._memberName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
