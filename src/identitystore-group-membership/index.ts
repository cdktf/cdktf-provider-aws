/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentitystoreGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership#group_id IdentitystoreGroupMembership#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership#id IdentitystoreGroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership#identity_store_id IdentitystoreGroupMembership#identity_store_id}
  */
  readonly identityStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership#member_id IdentitystoreGroupMembership#member_id}
  */
  readonly memberId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership#region IdentitystoreGroupMembership#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership aws_identitystore_group_membership}
*/
export class IdentitystoreGroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_identitystore_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentitystoreGroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentitystoreGroupMembership to import
  * @param importFromId The id of the existing IdentitystoreGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentitystoreGroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_identitystore_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/identitystore_group_membership aws_identitystore_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentitystoreGroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: IdentitystoreGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_identitystore_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._identityStoreId = config.identityStoreId;
    this._memberId = config.memberId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // identity_store_id - computed: false, optional: false, required: true
  private _identityStoreId?: string; 
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreIdInput() {
    return this._identityStoreId;
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      member_id: cdktf.stringToTerraform(this._memberId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      identity_store_id: {
        value: cdktf.stringToHclTerraform(this._identityStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_id: {
        value: cdktf.stringToHclTerraform(this._memberId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
