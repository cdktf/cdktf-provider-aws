// https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamUserGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  readonly groups: string[];
  readonly user: string;
}

// Resource

export class IamUserGroupMembership extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamUserGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_user_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groups = config.groups;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: false, optional: false, required: true
  private _groups: string[];
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}
