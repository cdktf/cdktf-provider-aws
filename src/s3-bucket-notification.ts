// https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html
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
      }
    },
    "block_types": {
      "lambda_function": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "events": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "filter_prefix": {
              "type": "string",
              "optional": true
            },
            "filter_suffix": {
              "type": "string",
              "optional": true
            },
            "id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "lambda_function_arn": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "queue": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "events": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "filter_prefix": {
              "type": "string",
              "optional": true
            },
            "filter_suffix": {
              "type": "string",
              "optional": true
            },
            "id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "queue_arn": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "topic": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "events": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "filter_prefix": {
              "type": "string",
              "optional": true
            },
            "filter_suffix": {
              "type": "string",
              "optional": true
            },
            "id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "topic_arn": {
              "type": "string",
              "required": true
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

export interface S3BucketNotificationConfig extends TerraformMetaArguments {
  readonly bucket: string;
  /** lambda_function block */
  readonly lambdaFunction?: S3BucketNotificationLambdaFunction[];
  /** queue block */
  readonly queue?: S3BucketNotificationQueue[];
  /** topic block */
  readonly topic?: S3BucketNotificationTopic[];
}
export interface S3BucketNotificationLambdaFunction {
  readonly events: string[];
  readonly filterPrefix?: string;
  readonly filterSuffix?: string;
  readonly id?: string;
  readonly lambdaFunctionArn?: string;
}
export interface S3BucketNotificationQueue {
  readonly events: string[];
  readonly filterPrefix?: string;
  readonly filterSuffix?: string;
  readonly id?: string;
  readonly queueArn: string;
}
export interface S3BucketNotificationTopic {
  readonly events: string[];
  readonly filterPrefix?: string;
  readonly filterSuffix?: string;
  readonly id?: string;
  readonly topicArn: string;
}

// Resource

export class S3BucketNotification extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: S3BucketNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_notification',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._lambdaFunction = config.lambdaFunction;
    this._queue = config.queue;
    this._topic = config.topic;
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

  // lambda_function - computed: false, optional: true, required: false
  private _lambdaFunction?: S3BucketNotificationLambdaFunction[];
  public get lambdaFunction() {
    return this._lambdaFunction;
  }
  public set lambdaFunction(value: S3BucketNotificationLambdaFunction[] | undefined) {
    this._lambdaFunction = value;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: S3BucketNotificationQueue[];
  public get queue() {
    return this._queue;
  }
  public set queue(value: S3BucketNotificationQueue[] | undefined) {
    this._queue = value;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: S3BucketNotificationTopic[];
  public get topic() {
    return this._topic;
  }
  public set topic(value: S3BucketNotificationTopic[] | undefined) {
    this._topic = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      lambda_function: this._lambdaFunction,
      queue: this._queue,
      topic: this._topic,
    };
  }
}
