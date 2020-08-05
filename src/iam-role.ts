// https://www.terraform.io/docs/providers/aws/r/iam_role.html
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
        "required": true
      },
      "create_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "force_detach_policies": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_session_duration": {
        "type": "number",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "path": {
        "type": "string",
        "optional": true
      },
      "permissions_boundary": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamRoleConfig extends TerraformMetaArguments {
  readonly assumeRolePolicy: string;
  readonly description?: string;
  readonly forceDetachPolicies?: boolean;
  readonly maxSessionDuration?: number;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly path?: string;
  readonly permissionsBoundary?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class IamRole extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamRoleConfig) {
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
    this._assumeRolePolicy = config.assumeRolePolicy;
    this._description = config.description;
    this._forceDetachPolicies = config.forceDetachPolicies;
    this._maxSessionDuration = config.maxSessionDuration;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._path = config.path;
    this._permissionsBoundary = config.permissionsBoundary;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assume_role_policy - computed: false, optional: false, required: true
  private _assumeRolePolicy: string;
  public get assumeRolePolicy() {
    return this._assumeRolePolicy;
  }
  public set assumeRolePolicy(value: string) {
    this._assumeRolePolicy = value;
  }

  // create_date - computed: true, optional: false, required: true
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // force_detach_policies - computed: false, optional: true, required: false
  private _forceDetachPolicies?: boolean;
  public get forceDetachPolicies() {
    return this._forceDetachPolicies;
  }
  public set forceDetachPolicies(value: boolean | undefined) {
    this._forceDetachPolicies = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_session_duration - computed: false, optional: true, required: false
  private _maxSessionDuration?: number;
  public get maxSessionDuration() {
    return this._maxSessionDuration;
  }
  public set maxSessionDuration(value: number | undefined) {
    this._maxSessionDuration = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string;
  public get path() {
    return this._path;
  }
  public set path(value: string | undefined) {
    this._path = value;
  }

  // permissions_boundary - computed: false, optional: true, required: false
  private _permissionsBoundary?: string;
  public get permissionsBoundary() {
    return this._permissionsBoundary;
  }
  public set permissionsBoundary(value: string | undefined) {
    this._permissionsBoundary = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
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
      assume_role_policy: this._assumeRolePolicy,
      description: this._description,
      force_detach_policies: this._forceDetachPolicies,
      max_session_duration: this._maxSessionDuration,
      name: this._name,
      name_prefix: this._namePrefix,
      path: this._path,
      permissions_boundary: this._permissionsBoundary,
      tags: this._tags,
    };
  }
}
