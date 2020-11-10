// https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html
// generated from terraform resource schema

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
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_function - computed: false, optional: true, required: false
  private _lambdaFunction?: S3BucketNotificationLambdaFunction[];
  public get lambdaFunction() {
    return this.interpolationForAttribute('lambda_function') as any;
  }
  public set lambdaFunction(value: S3BucketNotificationLambdaFunction[] ) {
    this._lambdaFunction = value;
  }
  public resetLambdaFunction() {
    this._lambdaFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: S3BucketNotificationQueue[];
  public get queue() {
    return this.interpolationForAttribute('queue') as any;
  }
  public set queue(value: S3BucketNotificationQueue[] ) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: S3BucketNotificationTopic[];
  public get topic() {
    return this.interpolationForAttribute('topic') as any;
  }
  public set topic(value: S3BucketNotificationTopic[] ) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      lambda_function: this._lambdaFunction,
      queue: this._queue,
      topic: this._topic,
    };
  }
}
