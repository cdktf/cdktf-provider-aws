// https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html
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
      },
      "storage_class_analysis": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "data_export": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "output_schema_version": {
                    "type": "string",
                    "optional": true
                  }
                },
                "block_types": {
                  "destination": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "s3_bucket_destination": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "bucket_account_id": {
                                "type": "string",
                                "optional": true
                              },
                              "bucket_arn": {
                                "type": "string",
                                "required": true
                              },
                              "format": {
                                "type": "string",
                                "optional": true
                              },
                              "prefix": {
                                "type": "string",
                                "optional": true
                              }
                            }
                          },
                          "min_items": 1,
                          "max_items": 1
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
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

export interface S3BucketAnalyticsConfigurationConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly name: string;
  /** filter block */
  readonly filter?: S3BucketAnalyticsConfigurationFilter[];
  /** storage_class_analysis block */
  readonly storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis[];
}
export interface S3BucketAnalyticsConfigurationFilter {
  readonly prefix?: string;
  readonly tags?: { [key: string]: string };
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
  readonly bucketAccountId?: string;
  readonly bucketArn: string;
  readonly format?: string;
  readonly prefix?: string;
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
  /** s3_bucket_destination block */
  readonly s3BucketDestination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination[];
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport {
  readonly outputSchemaVersion?: string;
  /** destination block */
  readonly destination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination[];
}
export interface S3BucketAnalyticsConfigurationStorageClassAnalysis {
  /** data_export block */
  readonly dataExport: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport[];
}

// Resource

export class S3BucketAnalyticsConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3BucketAnalyticsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_analytics_configuration',
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
    this._storageClassAnalysis = config.storageClassAnalysis;
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
  private _filter?: S3BucketAnalyticsConfigurationFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: S3BucketAnalyticsConfigurationFilter[] | undefined) {
    this._filter = value;
  }

  // storage_class_analysis - computed: false, optional: true, required: false
  private _storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis[];
  public get storageClassAnalysis() {
    return this._storageClassAnalysis;
  }
  public set storageClassAnalysis(value: S3BucketAnalyticsConfigurationStorageClassAnalysis[] | undefined) {
    this._storageClassAnalysis = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      name: this._name,
      filter: this._filter,
      storage_class_analysis: this._storageClassAnalysis,
    };
  }
}
