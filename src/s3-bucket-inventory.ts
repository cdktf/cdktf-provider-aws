// https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html
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
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "included_object_versions": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "optional_fields": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "destination": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "bucket": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "account_id": {
                    "type": "string",
                    "optional": true
                  },
                  "bucket_arn": {
                    "type": "string",
                    "required": true
                  },
                  "format": {
                    "type": "string",
                    "required": true
                  },
                  "prefix": {
                    "type": "string",
                    "optional": true
                  }
                },
                "block_types": {
                  "encryption": {
                    "nesting_mode": "list",
                    "block": {
                      "block_types": {
                        "sse_kms": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "key_id": {
                                "type": "string",
                                "required": true
                              }
                            }
                          },
                          "max_items": 1
                        },
                        "sse_s3": {
                          "nesting_mode": "list",
                          "block": {},
                          "max_items": 1
                        }
                      }
                    },
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
      },
      "filter": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "prefix": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "schedule": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "frequency": {
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

export interface S3BucketInventoryConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly enabled?: boolean;
  readonly includedObjectVersions: string;
  readonly name: string;
  readonly optionalFields?: string[];
  /** destination block */
  readonly destination: S3BucketInventoryDestination[];
  /** filter block */
  readonly filter?: S3BucketInventoryFilter[];
  /** schedule block */
  readonly schedule: S3BucketInventorySchedule[];
}
export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
  readonly keyId: string;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
}
export interface S3BucketInventoryDestinationBucketEncryption {
  /** sse_kms block */
  readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms[];
  /** sse_s3 block */
  readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3[];
}
export interface S3BucketInventoryDestinationBucket {
  readonly accountId?: string;
  readonly bucketArn: string;
  readonly format: string;
  readonly prefix?: string;
  /** encryption block */
  readonly encryption?: S3BucketInventoryDestinationBucketEncryption[];
}
export interface S3BucketInventoryDestination {
  /** bucket block */
  readonly bucket: S3BucketInventoryDestinationBucket[];
}
export interface S3BucketInventoryFilter {
  readonly prefix?: string;
}
export interface S3BucketInventorySchedule {
  readonly frequency: string;
}

// Resource

export class S3BucketInventory extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3BucketInventoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_inventory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._enabled = config.enabled;
    this._includedObjectVersions = config.includedObjectVersions;
    this._name = config.name;
    this._optionalFields = config.optionalFields;
    this._destination = config.destination;
    this._filter = config.filter;
    this._schedule = config.schedule;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // included_object_versions - computed: false, optional: false, required: true
  private _includedObjectVersions: string;
  public get includedObjectVersions() {
    return this._includedObjectVersions;
  }
  public set includedObjectVersions(value: string) {
    this._includedObjectVersions = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // optional_fields - computed: false, optional: true, required: false
  private _optionalFields?: string[];
  public get optionalFields() {
    return this._optionalFields;
  }
  public set optionalFields(value: string[] | undefined) {
    this._optionalFields = value;
  }

  // destination - computed: false, optional: false, required: true
  private _destination: S3BucketInventoryDestination[];
  public get destination() {
    return this._destination;
  }
  public set destination(value: S3BucketInventoryDestination[]) {
    this._destination = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: S3BucketInventoryFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: S3BucketInventoryFilter[] | undefined) {
    this._filter = value;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: S3BucketInventorySchedule[];
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: S3BucketInventorySchedule[]) {
    this._schedule = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      enabled: this._enabled,
      included_object_versions: this._includedObjectVersions,
      name: this._name,
      optional_fields: this._optionalFields,
      destination: this._destination,
      filter: this._filter,
      schedule: this._schedule,
    };
  }
}
