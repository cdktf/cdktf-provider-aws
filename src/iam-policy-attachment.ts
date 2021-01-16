// https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly groups?: string[];
  readonly name: string;
  readonly policyArn: string;
  readonly roles?: string[];
  readonly users?: string[];
}

// Resource

export class IamPolicyAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groups = config.groups;
    this._name = config.name;
    this._policyArn = config.policyArn;
    this._roles = config.roles;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: false, optional: true, required: false
  private _groups?: string[];
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[] ) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn: string;
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[];
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[] ) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[];
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[] ) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      name: cdktf.stringToTerraform(this._name),
      policy_arn: cdktf.stringToTerraform(this._policyArn),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      users: cdktf.listMapper(cdktf.stringToTerraform)(this._users),
    };
  }
}
