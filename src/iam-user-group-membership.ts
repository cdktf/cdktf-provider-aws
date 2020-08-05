// https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "groups": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "user": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamUserGroupMembershipConfig extends TerraformMetaArguments {
  readonly groups: string[];
  readonly user: string;
}

// Resource

export class IamUserGroupMembership extends TerraformResource {

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
    return this._groups;
  }
  public set groups(value: string[]) {
    this._groups = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      groups: this._groups,
      user: this._user,
    };
  }
}
