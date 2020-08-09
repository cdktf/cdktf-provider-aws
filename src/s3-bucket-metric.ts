// https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bucket": {
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
        "required": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "prefix": {
              "type": "string",
              "optional": true
            },
            "tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            }
          }
        },
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

export interface S3BucketMetricConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly name: string;
  /** filter block */
  readonly filter?: S3BucketMetricFilter[];
}
export interface S3BucketMetricFilter {
  readonly prefix?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class S3BucketMetric extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3BucketMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_metric',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._name = config.name;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: S3BucketMetricFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: S3BucketMetricFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      name: this._name,
      filter: this._filter,
    };
  }
}
