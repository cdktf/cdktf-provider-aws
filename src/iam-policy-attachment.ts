// https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html
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
        "optional": true
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
      "policy_arn": {
        "type": "string",
        "required": true
      },
      "roles": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "users": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamPolicyAttachmentConfig extends TerraformMetaArguments {
  readonly groups?: string[];
  readonly name: string;
  readonly policyArn: string;
  readonly roles?: string[];
  readonly users?: string[];
}

// Resource

export class IamPolicyAttachment extends TerraformResource {

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
    return this._groups;
  }
  public set groups(value: string[] | undefined) {
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn: string;
  public get policyArn() {
    return this._policyArn;
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[];
  public get roles() {
    return this._roles;
  }
  public set roles(value: string[] | undefined) {
    this._roles = value;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[];
  public get users() {
    return this._users;
  }
  public set users(value: string[] | undefined) {
    this._users = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      groups: this._groups,
      name: this._name,
      policy_arn: this._policyArn,
      roles: this._roles,
      users: this._users,
    };
  }
}
