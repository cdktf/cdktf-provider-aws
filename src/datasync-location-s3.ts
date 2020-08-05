// https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html
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
      "s3_bucket_arn": {
        "type": "string",
        "required": true
      },
      "subdirectory": {
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
      "uri": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "s3_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_access_role_arn": {
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

export interface DatasyncLocationS3Config extends TerraformMetaArguments {
  readonly s3BucketArn: string;
  readonly subdirectory: string;
  readonly tags?: { [key: string]: string };
  /** s3_config block */
  readonly s3Config: DatasyncLocationS3S3Config[];
}
export interface DatasyncLocationS3S3Config {
  readonly bucketAccessRoleArn: string;
}

// Resource

export class DatasyncLocationS3 extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatasyncLocationS3Config) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_s3',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._s3BucketArn = config.s3BucketArn;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._s3Config = config.s3Config;
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

  // s3_bucket_arn - computed: false, optional: false, required: true
  private _s3BucketArn: string;
  public get s3BucketArn() {
    return this._s3BucketArn;
  }
  public set s3BucketArn(value: string) {
    this._s3BucketArn = value;
  }

  // subdirectory - computed: false, optional: false, required: true
  private _subdirectory: string;
  public get subdirectory() {
    return this._subdirectory;
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // s3_config - computed: false, optional: false, required: true
  private _s3Config: DatasyncLocationS3S3Config[];
  public get s3Config() {
    return this._s3Config;
  }
  public set s3Config(value: DatasyncLocationS3S3Config[]) {
    this._s3Config = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      s3_bucket_arn: this._s3BucketArn,
      subdirectory: this._subdirectory,
      tags: this._tags,
      s3_config: this._s3Config,
    };
  }
}
