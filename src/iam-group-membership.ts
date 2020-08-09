// https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "group": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "users": {
        "type": [
          "set",
          "string"
        ],
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

export interface IamGroupMembershipConfig extends TerraformMetaArguments {
  readonly group: string;
  readonly name: string;
  readonly users: string[];
}

// Resource

export class IamGroupMembership extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
    this._name = config.name;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group: string;
  public get group() {
    return this._group;
  }
  public set group(value: string) {
    this._group = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // users - computed: false, optional: false, required: true
  private _users: string[];
  public get users() {
    return this._users;
  }
  public set users(value: string[]) {
    this._users = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group: this._group,
      name: this._name,
      users: this._users,
    };
  }
}
