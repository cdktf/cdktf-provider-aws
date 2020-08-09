// https://www.terraform.io/docs/providers/aws/r/gamelift_build.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "operating_system": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "version": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "storage_location": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket": {
              "type": "string",
              "required": true
            },
            "key": {
              "type": "string",
              "required": true
            },
            "role_arn": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GameliftBuildConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly operatingSystem: string;
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** storage_location block */
  readonly storageLocation: GameliftBuildStorageLocation[];
}
export interface GameliftBuildStorageLocation {
  readonly bucket: string;
  readonly key: string;
  readonly roleArn: string;
}

// Resource

export class GameliftBuild extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameliftBuildConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_build',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._tags = config.tags;
    this._version = config.version;
    this._storageLocation = config.storageLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem: string;
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version;
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation: GameliftBuildStorageLocation[];
  public get storageLocation() {
    return this._storageLocation;
  }
  public set storageLocation(value: GameliftBuildStorageLocation[]) {
    this._storageLocation = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      operating_system: this._operatingSystem,
      tags: this._tags,
      version: this._version,
      storage_location: this._storageLocation,
    };
  }
}
