// https://www.terraform.io/docs/providers/aws/r/data_aws_workspaces_bundle.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bundle_id": {
        "type": "string",
        "optional": true
      },
      "compute_type": {
        "type": [
          "list",
          [
            "object",
            {
              "name": "string"
            }
          ]
        ],
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
      "name": {
        "type": "string",
        "optional": true
      },
      "owner": {
        "type": "string",
        "optional": true
      },
      "root_storage": {
        "type": [
          "list",
          [
            "object",
            {
              "capacity": "string"
            }
          ]
        ],
        "computed": true
      },
      "user_storage": {
        "type": [
          "list",
          [
            "object",
            {
              "capacity": "string"
            }
          ]
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsWorkspacesBundleConfig extends TerraformMetaArguments {
  readonly bundleId?: string;
  readonly name?: string;
  readonly owner?: string;
}
export class DataAwsWorkspacesBundleComputeType extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAwsWorkspacesBundleRootStorage extends ComplexComputedList {

  // capacity - computed: true, optional: false, required: true
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
}
export class DataAwsWorkspacesBundleUserStorage extends ComplexComputedList {

  // capacity - computed: true, optional: false, required: true
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
}

// Resource

export class DataAwsWorkspacesBundle extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsWorkspacesBundleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_bundle',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bundleId = config.bundleId;
    this._name = config.name;
    this._owner = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string;
  public get bundleId() {
    return this._bundleId;
  }
  public set bundleId(value: string | undefined) {
    this._bundleId = value;
  }

  // compute_type - computed: true, optional: false, required: true
  public computeType(index: string) {
    return new DataAwsWorkspacesBundleComputeType(this, 'compute_type', index);
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string;
  public get owner() {
    return this._owner;
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }

  // root_storage - computed: true, optional: false, required: true
  public rootStorage(index: string) {
    return new DataAwsWorkspacesBundleRootStorage(this, 'root_storage', index);
  }

  // user_storage - computed: true, optional: false, required: true
  public userStorage(index: string) {
    return new DataAwsWorkspacesBundleUserStorage(this, 'user_storage', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: this._bundleId,
      name: this._name,
      owner: this._owner,
    };
  }
}
