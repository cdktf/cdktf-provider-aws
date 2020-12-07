// https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketNotificationConfig extends cdktf.TerraformMetaArguments {
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

function s3BucketNotificationLambdaFunctionToTerraform(struct?: S3BucketNotificationLambdaFunction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    id: cdktf.stringToTerraform(struct!.id),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export interface S3BucketNotificationQueue {
  readonly events: string[];
  readonly filterPrefix?: string;
  readonly filterSuffix?: string;
  readonly id?: string;
  readonly queueArn: string;
}

function s3BucketNotificationQueueToTerraform(struct?: S3BucketNotificationQueue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    id: cdktf.stringToTerraform(struct!.id),
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
  }
}

export interface S3BucketNotificationTopic {
  readonly events: string[];
  readonly filterPrefix?: string;
  readonly filterSuffix?: string;
  readonly id?: string;
  readonly topicArn: string;
}

function s3BucketNotificationTopicToTerraform(struct?: S3BucketNotificationTopic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    id: cdktf.stringToTerraform(struct!.id),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}


// Resource

export class S3BucketNotification extends cdktf.TerraformResource {

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
      bucket: cdktf.stringToTerraform(this._bucket),
      lambda_function: cdktf.listMapper(s3BucketNotificationLambdaFunctionToTerraform)(this._lambdaFunction),
      queue: cdktf.listMapper(s3BucketNotificationQueueToTerraform)(this._queue),
      topic: cdktf.listMapper(s3BucketNotificationTopicToTerraform)(this._topic),
    };
  }
}
