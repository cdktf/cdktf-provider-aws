// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_role.html
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
      "assume_role_policy": {
        "type": "string",
        "computed": true
      },
      "assume_role_policy_document": {
        "type": "string",
        "computed": true
      },
      "create_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_session_duration": {
        "type": "number",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "path": {
        "type": "string",
        "computed": true
      },
      "permissions_boundary": {
        "type": "string",
        "computed": true
      },
      "role_id": {
        "type": "string",
        "computed": true
      },
      "role_name": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "unique_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIamRoleConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly roleName?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsIamRole extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
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

  // assume_role_policy - computed: true, optional: false, required: true
  public get assumeRolePolicy() {
    return this.getStringAttribute('assume_role_policy');
  }

  // assume_role_policy_document - computed: true, optional: false, required: true
  public get assumeRolePolicyDocument() {
    return this.getStringAttribute('assume_role_policy_document');
  }

  // create_date - computed: true, optional: false, required: true
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_session_duration - computed: true, optional: false, required: true
  public get maxSessionDuration() {
    return this.getNumberAttribute('max_session_duration');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions_boundary - computed: true, optional: false, required: true
  public get permissionsBoundary() {
    return this.getStringAttribute('permissions_boundary');
  }

  // role_id - computed: true, optional: false, required: true
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string;
  public get roleName() {
    return this._roleName;
  }
  public set roleName(value: string | undefined) {
    this._roleName = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // unique_id - computed: true, optional: false, required: true
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      role_name: this._roleName,
      tags: this._tags,
    };
  }
}
