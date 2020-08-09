// https://www.terraform.io/docs/providers/aws/r/datasync_task.html
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
      "cloudwatch_log_group_arn": {
        "type": "string",
        "optional": true
      },
      "destination_location_arn": {
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
        "optional": true
      },
      "source_location_arn": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "atime": {
              "type": "string",
              "optional": true
            },
            "bytes_per_second": {
              "type": "number",
              "optional": true
            },
            "gid": {
              "type": "string",
              "optional": true
            },
            "mtime": {
              "type": "string",
              "optional": true
            },
            "posix_permissions": {
              "type": "string",
              "optional": true
            },
            "preserve_deleted_files": {
              "type": "string",
              "optional": true
            },
            "preserve_devices": {
              "type": "string",
              "optional": true
            },
            "uid": {
              "type": "string",
              "optional": true
            },
            "verify_mode": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatasyncTaskConfig extends TerraformMetaArguments {
  readonly cloudwatchLogGroupArn?: string;
  readonly destinationLocationArn: string;
  readonly name?: string;
  readonly sourceLocationArn: string;
  readonly tags?: { [key: string]: string };
  /** options block */
  readonly options?: DatasyncTaskOptions[];
  /** timeouts block */
  readonly timeouts?: DatasyncTaskTimeouts;
}
export interface DatasyncTaskOptions {
  readonly atime?: string;
  readonly bytesPerSecond?: number;
  readonly gid?: string;
  readonly mtime?: string;
  readonly posixPermissions?: string;
  readonly preserveDeletedFiles?: string;
  readonly preserveDevices?: string;
  readonly uid?: string;
  readonly verifyMode?: string;
}
export interface DatasyncTaskTimeouts {
  readonly create?: string;
}

// Resource

export class DatasyncTask extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatasyncTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_task',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._destinationLocationArn = config.destinationLocationArn;
    this._name = config.name;
    this._sourceLocationArn = config.sourceLocationArn;
    this._tags = config.tags;
    this._options = config.options;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string;
  public get cloudwatchLogGroupArn() {
    return this._cloudwatchLogGroupArn;
  }
  public set cloudwatchLogGroupArn(value: string | undefined) {
    this._cloudwatchLogGroupArn = value;
  }

  // destination_location_arn - computed: false, optional: false, required: true
  private _destinationLocationArn: string;
  public get destinationLocationArn() {
    return this._destinationLocationArn;
  }
  public set destinationLocationArn(value: string) {
    this._destinationLocationArn = value;
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

  // source_location_arn - computed: false, optional: false, required: true
  private _sourceLocationArn: string;
  public get sourceLocationArn() {
    return this._sourceLocationArn;
  }
  public set sourceLocationArn(value: string) {
    this._sourceLocationArn = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // options - computed: false, optional: true, required: false
  private _options?: DatasyncTaskOptions[];
  public get options() {
    return this._options;
  }
  public set options(value: DatasyncTaskOptions[] | undefined) {
    this._options = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatasyncTaskTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatasyncTaskTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_log_group_arn: this._cloudwatchLogGroupArn,
      destination_location_arn: this._destinationLocationArn,
      name: this._name,
      source_location_arn: this._sourceLocationArn,
      tags: this._tags,
      options: this._options,
      timeouts: this._timeouts,
    };
  }
}
