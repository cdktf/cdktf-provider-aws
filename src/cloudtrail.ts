// https://www.terraform.io/docs/providers/aws/r/cloudtrail.html
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
      "cloud_watch_logs_group_arn": {
        "type": "string",
        "optional": true
      },
      "cloud_watch_logs_role_arn": {
        "type": "string",
        "optional": true
      },
      "enable_log_file_validation": {
        "type": "bool",
        "optional": true
      },
      "enable_logging": {
        "type": "bool",
        "optional": true
      },
      "home_region": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "include_global_service_events": {
        "type": "bool",
        "optional": true
      },
      "is_multi_region_trail": {
        "type": "bool",
        "optional": true
      },
      "is_organization_trail": {
        "type": "bool",
        "optional": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "s3_bucket_name": {
        "type": "string",
        "required": true
      },
      "s3_key_prefix": {
        "type": "string",
        "optional": true
      },
      "sns_topic_name": {
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
    },
    "block_types": {
      "event_selector": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "include_management_events": {
              "type": "bool",
              "optional": true
            },
            "read_write_type": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "data_resource": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "type": {
                    "type": "string",
                    "required": true
                  },
                  "values": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "required": true
                  }
                }
              }
            }
          }
        },
        "max_items": 5
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudtrailConfig extends TerraformMetaArguments {
  readonly cloudWatchLogsGroupArn?: string;
  readonly cloudWatchLogsRoleArn?: string;
  readonly enableLogFileValidation?: boolean;
  readonly enableLogging?: boolean;
  readonly includeGlobalServiceEvents?: boolean;
  readonly isMultiRegionTrail?: boolean;
  readonly isOrganizationTrail?: boolean;
  readonly kmsKeyId?: string;
  readonly name: string;
  readonly s3BucketName: string;
  readonly s3KeyPrefix?: string;
  readonly snsTopicName?: string;
  readonly tags?: { [key: string]: string };
  /** event_selector block */
  readonly eventSelector?: CloudtrailEventSelector[];
}
export interface CloudtrailEventSelectorDataResource {
  readonly type: string;
  readonly values: string[];
}
export interface CloudtrailEventSelector {
  readonly includeManagementEvents?: boolean;
  readonly readWriteType?: string;
  /** data_resource block */
  readonly dataResource?: CloudtrailEventSelectorDataResource[];
}

// Resource

export class Cloudtrail extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudtrailConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudtrail',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudWatchLogsGroupArn = config.cloudWatchLogsGroupArn;
    this._cloudWatchLogsRoleArn = config.cloudWatchLogsRoleArn;
    this._enableLogFileValidation = config.enableLogFileValidation;
    this._enableLogging = config.enableLogging;
    this._includeGlobalServiceEvents = config.includeGlobalServiceEvents;
    this._isMultiRegionTrail = config.isMultiRegionTrail;
    this._isOrganizationTrail = config.isOrganizationTrail;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._snsTopicName = config.snsTopicName;
    this._tags = config.tags;
    this._eventSelector = config.eventSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloud_watch_logs_group_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsGroupArn?: string;
  public get cloudWatchLogsGroupArn() {
    return this._cloudWatchLogsGroupArn;
  }
  public set cloudWatchLogsGroupArn(value: string | undefined) {
    this._cloudWatchLogsGroupArn = value;
  }

  // cloud_watch_logs_role_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsRoleArn?: string;
  public get cloudWatchLogsRoleArn() {
    return this._cloudWatchLogsRoleArn;
  }
  public set cloudWatchLogsRoleArn(value: string | undefined) {
    this._cloudWatchLogsRoleArn = value;
  }

  // enable_log_file_validation - computed: false, optional: true, required: false
  private _enableLogFileValidation?: boolean;
  public get enableLogFileValidation() {
    return this._enableLogFileValidation;
  }
  public set enableLogFileValidation(value: boolean | undefined) {
    this._enableLogFileValidation = value;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean;
  public get enableLogging() {
    return this._enableLogging;
  }
  public set enableLogging(value: boolean | undefined) {
    this._enableLogging = value;
  }

  // home_region - computed: true, optional: false, required: true
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // include_global_service_events - computed: false, optional: true, required: false
  private _includeGlobalServiceEvents?: boolean;
  public get includeGlobalServiceEvents() {
    return this._includeGlobalServiceEvents;
  }
  public set includeGlobalServiceEvents(value: boolean | undefined) {
    this._includeGlobalServiceEvents = value;
  }

  // is_multi_region_trail - computed: false, optional: true, required: false
  private _isMultiRegionTrail?: boolean;
  public get isMultiRegionTrail() {
    return this._isMultiRegionTrail;
  }
  public set isMultiRegionTrail(value: boolean | undefined) {
    this._isMultiRegionTrail = value;
  }

  // is_organization_trail - computed: false, optional: true, required: false
  private _isOrganizationTrail?: boolean;
  public get isOrganizationTrail() {
    return this._isOrganizationTrail;
  }
  public set isOrganizationTrail(value: boolean | undefined) {
    this._isOrganizationTrail = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName: string;
  public get s3BucketName() {
    return this._s3BucketName;
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string;
  public get s3KeyPrefix() {
    return this._s3KeyPrefix;
  }
  public set s3KeyPrefix(value: string | undefined) {
    this._s3KeyPrefix = value;
  }

  // sns_topic_name - computed: false, optional: true, required: false
  private _snsTopicName?: string;
  public get snsTopicName() {
    return this._snsTopicName;
  }
  public set snsTopicName(value: string | undefined) {
    this._snsTopicName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // event_selector - computed: false, optional: true, required: false
  private _eventSelector?: CloudtrailEventSelector[];
  public get eventSelector() {
    return this._eventSelector;
  }
  public set eventSelector(value: CloudtrailEventSelector[] | undefined) {
    this._eventSelector = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_watch_logs_group_arn: this._cloudWatchLogsGroupArn,
      cloud_watch_logs_role_arn: this._cloudWatchLogsRoleArn,
      enable_log_file_validation: this._enableLogFileValidation,
      enable_logging: this._enableLogging,
      include_global_service_events: this._includeGlobalServiceEvents,
      is_multi_region_trail: this._isMultiRegionTrail,
      is_organization_trail: this._isOrganizationTrail,
      kms_key_id: this._kmsKeyId,
      name: this._name,
      s3_bucket_name: this._s3BucketName,
      s3_key_prefix: this._s3KeyPrefix,
      sns_topic_name: this._snsTopicName,
      tags: this._tags,
      event_selector: this._eventSelector,
    };
  }
}
