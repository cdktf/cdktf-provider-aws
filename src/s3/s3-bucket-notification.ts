// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#bucket S3BucketNotification#bucket}
  */
  readonly bucket: string;
  /**
  * lambda_function block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#lambda_function S3BucketNotification#lambda_function}
  */
  readonly lambdaFunction?: S3BucketNotificationLambdaFunction[];
  /**
  * queue block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#queue S3BucketNotification#queue}
  */
  readonly queue?: S3BucketNotificationQueue[];
  /**
  * topic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#topic S3BucketNotification#topic}
  */
  readonly topic?: S3BucketNotificationTopic[];
}
export interface S3BucketNotificationLambdaFunction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#lambda_function_arn S3BucketNotification#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function s3BucketNotificationLambdaFunctionToTerraform(struct?: S3BucketNotificationLambdaFunction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export interface S3BucketNotificationQueue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#queue_arn S3BucketNotification#queue_arn}
  */
  readonly queueArn: string;
}

export function s3BucketNotificationQueueToTerraform(struct?: S3BucketNotificationQueue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
  }
}

export interface S3BucketNotificationTopic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#events S3BucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_prefix S3BucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#filter_suffix S3BucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#id S3BucketNotification#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html#topic_arn S3BucketNotification#topic_arn}
  */
  readonly topicArn: string;
}

export function s3BucketNotificationTopicToTerraform(struct?: S3BucketNotificationTopic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification}
*/
export class S3BucketNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_notification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketNotificationConfig
  */
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
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_function - computed: false, optional: true, required: false
  private _lambdaFunction?: S3BucketNotificationLambdaFunction[]; 
  public get lambdaFunction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lambda_function') as any;
  }
  public set lambdaFunction(value: S3BucketNotificationLambdaFunction[]) {
    this._lambdaFunction = value;
  }
  public resetLambdaFunction() {
    this._lambdaFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: S3BucketNotificationQueue[]; 
  public get queue() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('queue') as any;
  }
  public set queue(value: S3BucketNotificationQueue[]) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: S3BucketNotificationTopic[]; 
  public get topic() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('topic') as any;
  }
  public set topic(value: S3BucketNotificationTopic[]) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
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
