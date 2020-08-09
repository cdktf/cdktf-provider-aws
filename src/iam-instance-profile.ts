// https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html
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
      "create_date": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
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
      "role": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "roles": {
        "type": [
          "set",
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamInstanceProfileConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly namePrefix?: string;
  readonly path?: string;
  readonly role?: string;
  readonly roles?: string[];
}

// Resource

export class IamInstanceProfile extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamInstanceProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_instance_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._path = config.path;
    this._role = config.role;
    this._roles = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_date - computed: true, optional: false, required: true
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // role - computed: true, optional: true, required: false
  private _role?: string;
  public get role() {
    return this._role ?? this.getStringAttribute('role');
  }
  public set role(value: string | undefined) {
    this._role = value;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[];
  public get roles() {
    return this._roles ?? this.getListAttribute('roles');
  }
  public set roles(value: string[] | undefined) {
    this._roles = value;
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
      name_prefix: this._namePrefix,
      path: this._path,
      role: this._role,
      roles: this._roles,
    };
  }
}
