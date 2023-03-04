// https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}
  */
  readonly eventbridge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lambda_function block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}
  */
  readonly lambdaFunction?: S3BucketNotificationLambdaFunction[] | cdktf.IResolvable;
  /**
  * queue block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue S3BucketNotification#queue}
  */
  readonly queue?: S3BucketNotificationQueue[] | cdktf.IResolvable;
  /**
  * topic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic S3BucketNotification#topic}
  */
  readonly topic?: S3BucketNotificationTopic[] | cdktf.IResolvable;
}
export interface S3BucketNotificationLambdaFunction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function s3BucketNotificationLambdaFunctionToTerraform(struct?: S3BucketNotificationLambdaFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    id: cdktf.stringToTerraform(struct!.id),
    lambda_function_arn: cdktf.stringToTerraform(struct!.lambdaFunctionArn),
  }
}

export class S3BucketNotificationLambdaFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3BucketNotificationLambdaFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPrefix = this._filterPrefix;
    }
    if (this._filterSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSuffix = this._filterSuffix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationLambdaFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filterPrefix = undefined;
      this._filterSuffix = undefined;
      this._id = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filterPrefix = value.filterPrefix;
      this._filterSuffix = value.filterSuffix;
      this._id = value.id;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
  }

  // filter_suffix - computed: false, optional: true, required: false
  private _filterSuffix?: string; 
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }
  public set filterSuffix(value: string) {
    this._filterSuffix = value;
  }
  public resetFilterSuffix() {
    this._filterSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSuffixInput() {
    return this._filterSuffix;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lambda_function_arn - computed: false, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}

export class S3BucketNotificationLambdaFunctionList extends cdktf.ComplexList {
  public internalValue? : S3BucketNotificationLambdaFunction[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3BucketNotificationLambdaFunctionOutputReference {
    return new S3BucketNotificationLambdaFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationQueue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}
  */
  readonly queueArn: string;
}

export function s3BucketNotificationQueueToTerraform(struct?: S3BucketNotificationQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    id: cdktf.stringToTerraform(struct!.id),
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
  }
}

export class S3BucketNotificationQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3BucketNotificationQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPrefix = this._filterPrefix;
    }
    if (this._filterSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSuffix = this._filterSuffix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._queueArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueArn = this._queueArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filterPrefix = undefined;
      this._filterSuffix = undefined;
      this._id = undefined;
      this._queueArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filterPrefix = value.filterPrefix;
      this._filterSuffix = value.filterSuffix;
      this._id = value.id;
      this._queueArn = value.queueArn;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
  }

  // filter_suffix - computed: false, optional: true, required: false
  private _filterSuffix?: string; 
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }
  public set filterSuffix(value: string) {
    this._filterSuffix = value;
  }
  public resetFilterSuffix() {
    this._filterSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSuffixInput() {
    return this._filterSuffix;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // queue_arn - computed: false, optional: false, required: true
  private _queueArn?: string; 
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }
  public set queueArn(value: string) {
    this._queueArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueArnInput() {
    return this._queueArn;
  }
}

export class S3BucketNotificationQueueList extends cdktf.ComplexList {
  public internalValue? : S3BucketNotificationQueue[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3BucketNotificationQueueOutputReference {
    return new S3BucketNotificationQueueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketNotificationTopic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}
  */
  readonly filterPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}
  */
  readonly filterSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}
  */
  readonly topicArn: string;
}

export function s3BucketNotificationTopicToTerraform(struct?: S3BucketNotificationTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    filter_prefix: cdktf.stringToTerraform(struct!.filterPrefix),
    filter_suffix: cdktf.stringToTerraform(struct!.filterSuffix),
    id: cdktf.stringToTerraform(struct!.id),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export class S3BucketNotificationTopicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3BucketNotificationTopic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._filterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPrefix = this._filterPrefix;
    }
    if (this._filterSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSuffix = this._filterSuffix;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketNotificationTopic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._filterPrefix = undefined;
      this._filterSuffix = undefined;
      this._id = undefined;
      this._topicArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._filterPrefix = value.filterPrefix;
      this._filterSuffix = value.filterSuffix;
      this._id = value.id;
      this._topicArn = value.topicArn;
    }
  }

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // filter_prefix - computed: false, optional: true, required: false
  private _filterPrefix?: string; 
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }
  public set filterPrefix(value: string) {
    this._filterPrefix = value;
  }
  public resetFilterPrefix() {
    this._filterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPrefixInput() {
    return this._filterPrefix;
  }

  // filter_suffix - computed: false, optional: true, required: false
  private _filterSuffix?: string; 
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }
  public set filterSuffix(value: string) {
    this._filterSuffix = value;
  }
  public resetFilterSuffix() {
    this._filterSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSuffixInput() {
    return this._filterSuffix;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class S3BucketNotificationTopicList extends cdktf.ComplexList {
  public internalValue? : S3BucketNotificationTopic[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3BucketNotificationTopicOutputReference {
    return new S3BucketNotificationTopicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification aws_s3_bucket_notification}
*/
export class S3BucketNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_notification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification aws_s3_bucket_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_notification',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._eventbridge = config.eventbridge;
    this._id = config.id;
    this._lambdaFunction.internalValue = config.lambdaFunction;
    this._queue.internalValue = config.queue;
    this._topic.internalValue = config.topic;
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

  // eventbridge - computed: false, optional: true, required: false
  private _eventbridge?: boolean | cdktf.IResolvable; 
  public get eventbridge() {
    return this.getBooleanAttribute('eventbridge');
  }
  public set eventbridge(value: boolean | cdktf.IResolvable) {
    this._eventbridge = value;
  }
  public resetEventbridge() {
    this._eventbridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventbridgeInput() {
    return this._eventbridge;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lambda_function - computed: false, optional: true, required: false
  private _lambdaFunction = new S3BucketNotificationLambdaFunctionList(this, "lambda_function", false);
  public get lambdaFunction() {
    return this._lambdaFunction;
  }
  public putLambdaFunction(value: S3BucketNotificationLambdaFunction[] | cdktf.IResolvable) {
    this._lambdaFunction.internalValue = value;
  }
  public resetLambdaFunction() {
    this._lambdaFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction.internalValue;
  }

  // queue - computed: false, optional: true, required: false
  private _queue = new S3BucketNotificationQueueList(this, "queue", false);
  public get queue() {
    return this._queue;
  }
  public putQueue(value: S3BucketNotificationQueue[] | cdktf.IResolvable) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // topic - computed: false, optional: true, required: false
  private _topic = new S3BucketNotificationTopicList(this, "topic", false);
  public get topic() {
    return this._topic;
  }
  public putTopic(value: S3BucketNotificationTopic[] | cdktf.IResolvable) {
    this._topic.internalValue = value;
  }
  public resetTopic() {
    this._topic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      eventbridge: cdktf.booleanToTerraform(this._eventbridge),
      id: cdktf.stringToTerraform(this._id),
      lambda_function: cdktf.listMapper(s3BucketNotificationLambdaFunctionToTerraform, true)(this._lambdaFunction.internalValue),
      queue: cdktf.listMapper(s3BucketNotificationQueueToTerraform, true)(this._queue.internalValue),
      topic: cdktf.listMapper(s3BucketNotificationTopicToTerraform, true)(this._topic.internalValue),
    };
  }
}
