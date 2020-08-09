// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html
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
      "aws_kms_key_arn": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "input_bucket": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "output_bucket": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "role": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "content_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "storage_class": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "content_config_permissions": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "access": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "grantee": {
              "type": "string",
              "optional": true
            },
            "grantee_type": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "notifications": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "completed": {
              "type": "string",
              "optional": true
            },
            "error": {
              "type": "string",
              "optional": true
            },
            "progressing": {
              "type": "string",
              "optional": true
            },
            "warning": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "thumbnail_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "storage_class": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "thumbnail_config_permissions": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "access": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "grantee": {
              "type": "string",
              "optional": true
            },
            "grantee_type": {
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

export interface ElastictranscoderPipelineConfig extends TerraformMetaArguments {
  readonly awsKmsKeyArn?: string;
  readonly inputBucket: string;
  readonly name?: string;
  readonly outputBucket?: string;
  readonly role: string;
  /** content_config block */
  readonly contentConfig?: ElastictranscoderPipelineContentConfig[];
  /** content_config_permissions block */
  readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
  /** notifications block */
  readonly notifications?: ElastictranscoderPipelineNotifications[];
  /** thumbnail_config block */
  readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig[];
  /** thumbnail_config_permissions block */
  readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
}
export interface ElastictranscoderPipelineContentConfig {
  readonly bucket?: string;
  readonly storageClass?: string;
}
export interface ElastictranscoderPipelineContentConfigPermissions {
  readonly access?: string[];
  readonly grantee?: string;
  readonly granteeType?: string;
}
export interface ElastictranscoderPipelineNotifications {
  readonly completed?: string;
  readonly error?: string;
  readonly progressing?: string;
  readonly warning?: string;
}
export interface ElastictranscoderPipelineThumbnailConfig {
  readonly bucket?: string;
  readonly storageClass?: string;
}
export interface ElastictranscoderPipelineThumbnailConfigPermissions {
  readonly access?: string[];
  readonly grantee?: string;
  readonly granteeType?: string;
}

// Resource

export class ElastictranscoderPipeline extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElastictranscoderPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastictranscoder_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsKmsKeyArn = config.awsKmsKeyArn;
    this._inputBucket = config.inputBucket;
    this._name = config.name;
    this._outputBucket = config.outputBucket;
    this._role = config.role;
    this._contentConfig = config.contentConfig;
    this._contentConfigPermissions = config.contentConfigPermissions;
    this._notifications = config.notifications;
    this._thumbnailConfig = config.thumbnailConfig;
    this._thumbnailConfigPermissions = config.thumbnailConfigPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_kms_key_arn - computed: false, optional: true, required: false
  private _awsKmsKeyArn?: string;
  public get awsKmsKeyArn() {
    return this._awsKmsKeyArn;
  }
  public set awsKmsKeyArn(value: string | undefined) {
    this._awsKmsKeyArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input_bucket - computed: false, optional: false, required: true
  private _inputBucket: string;
  public get inputBucket() {
    return this._inputBucket;
  }
  public set inputBucket(value: string) {
    this._inputBucket = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // output_bucket - computed: true, optional: true, required: false
  private _outputBucket?: string;
  public get outputBucket() {
    return this._outputBucket ?? this.getStringAttribute('output_bucket');
  }
  public set outputBucket(value: string | undefined) {
    this._outputBucket = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // content_config - computed: false, optional: true, required: false
  private _contentConfig?: ElastictranscoderPipelineContentConfig[];
  public get contentConfig() {
    return this._contentConfig;
  }
  public set contentConfig(value: ElastictranscoderPipelineContentConfig[] | undefined) {
    this._contentConfig = value;
  }

  // content_config_permissions - computed: false, optional: true, required: false
  private _contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
  public get contentConfigPermissions() {
    return this._contentConfigPermissions;
  }
  public set contentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[] | undefined) {
    this._contentConfigPermissions = value;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: ElastictranscoderPipelineNotifications[];
  public get notifications() {
    return this._notifications;
  }
  public set notifications(value: ElastictranscoderPipelineNotifications[] | undefined) {
    this._notifications = value;
  }

  // thumbnail_config - computed: false, optional: true, required: false
  private _thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig[];
  public get thumbnailConfig() {
    return this._thumbnailConfig;
  }
  public set thumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig[] | undefined) {
    this._thumbnailConfig = value;
  }

  // thumbnail_config_permissions - computed: false, optional: true, required: false
  private _thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
  public get thumbnailConfigPermissions() {
    return this._thumbnailConfigPermissions;
  }
  public set thumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[] | undefined) {
    this._thumbnailConfigPermissions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_kms_key_arn: this._awsKmsKeyArn,
      input_bucket: this._inputBucket,
      name: this._name,
      output_bucket: this._outputBucket,
      role: this._role,
      content_config: this._contentConfig,
      content_config_permissions: this._contentConfigPermissions,
      notifications: this._notifications,
      thumbnail_config: this._thumbnailConfig,
      thumbnail_config_permissions: this._thumbnailConfigPermissions,
    };
  }
}
