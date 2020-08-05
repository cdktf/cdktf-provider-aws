// https://www.terraform.io/docs/providers/aws/r/organizations_account.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "email": {
        "type": "string",
        "required": true
      },
      "iam_user_access_to_billing": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "joined_method": {
        "type": "string",
        "computed": true
      },
      "joined_timestamp": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "parent_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "role_name": {
        "type": "string",
        "optional": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
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

export interface OrganizationsAccountConfig extends TerraformMetaArguments {
  readonly email: string;
  readonly iamUserAccessToBilling?: string;
  readonly name: string;
  readonly parentId?: string;
  readonly roleName?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class OrganizationsAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_organizations_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._email = config.email;
    this._iamUserAccessToBilling = config.iamUserAccessToBilling;
    this._name = config.name;
    this._parentId = config.parentId;
    this._roleName = config.roleName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  // iam_user_access_to_billing - computed: false, optional: true, required: false
  private _iamUserAccessToBilling?: string;
  public get iamUserAccessToBilling() {
    return this._iamUserAccessToBilling;
  }
  public set iamUserAccessToBilling(value: string | undefined) {
    this._iamUserAccessToBilling = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // joined_method - computed: true, optional: false, required: true
  public get joinedMethod() {
    return this.getStringAttribute('joined_method');
  }

  // joined_timestamp - computed: true, optional: false, required: true
  public get joinedTimestamp() {
    return this.getStringAttribute('joined_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string;
  public get parentId() {
    return this._parentId ?? this.getStringAttribute('parent_id');
  }
  public set parentId(value: string | undefined) {
    this._parentId = value;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string;
  public get roleName() {
    return this._roleName;
  }
  public set roleName(value: string | undefined) {
    this._roleName = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      email: this._email,
      iam_user_access_to_billing: this._iamUserAccessToBilling,
      name: this._name,
      parent_id: this._parentId,
      role_name: this._roleName,
      tags: this._tags,
    };
  }
}
