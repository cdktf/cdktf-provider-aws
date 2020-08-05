// https://www.terraform.io/docs/providers/aws/r/iam_user.html
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
      "force_destroy": {
        "type": "bool",
        "description": "Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices",
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

export interface IamUserConfig extends TerraformMetaArguments {
  /** Delete user even if it has non-Terraform-managed IAM access keys, login profile or MFA devices */
  readonly forceDestroy?: boolean;
  readonly name: string;
  readonly path?: string;
  readonly permissionsBoundary?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class IamUser extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
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
      force_destroy: this._forceDestroy,
      name: this._name,
      path: this._path,
      permissions_boundary: this._permissionsBoundary,
      tags: this._tags,
    };
  }
}
