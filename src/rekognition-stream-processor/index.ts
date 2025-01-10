/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RekognitionStreamProcessorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier for your AWS Key Management Service key (AWS KMS key). You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#kms_key_id RekognitionStreamProcessor#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * An identifier you assign to the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#name RekognitionStreamProcessor#name}
  */
  readonly name: string;
  /**
  * The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#role_arn RekognitionStreamProcessor#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#tags RekognitionStreamProcessor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * data_sharing_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#data_sharing_preference RekognitionStreamProcessor#data_sharing_preference}
  */
  readonly dataSharingPreference?: RekognitionStreamProcessorDataSharingPreference[] | cdktf.IResolvable;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#input RekognitionStreamProcessor#input}
  */
  readonly input?: RekognitionStreamProcessorInput[] | cdktf.IResolvable;
  /**
  * notification_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#notification_channel RekognitionStreamProcessor#notification_channel}
  */
  readonly notificationChannel?: RekognitionStreamProcessorNotificationChannel[] | cdktf.IResolvable;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#output RekognitionStreamProcessor#output}
  */
  readonly output?: RekognitionStreamProcessorOutput[] | cdktf.IResolvable;
  /**
  * regions_of_interest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#regions_of_interest RekognitionStreamProcessor#regions_of_interest}
  */
  readonly regionsOfInterest?: RekognitionStreamProcessorRegionsOfInterest[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#settings RekognitionStreamProcessor#settings}
  */
  readonly settings?: RekognitionStreamProcessorSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#timeouts RekognitionStreamProcessor#timeouts}
  */
  readonly timeouts?: RekognitionStreamProcessorTimeouts;
}
export interface RekognitionStreamProcessorDataSharingPreference {
  /**
  * Do you want to share data with Rekognition to improve model performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#opt_in RekognitionStreamProcessor#opt_in}
  */
  readonly optIn: boolean | cdktf.IResolvable;
}

export function rekognitionStreamProcessorDataSharingPreferenceToTerraform(struct?: RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opt_in: cdktf.booleanToTerraform(struct!.optIn),
  }
}


export function rekognitionStreamProcessorDataSharingPreferenceToHclTerraform(struct?: RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opt_in: {
      value: cdktf.booleanToHclTerraform(struct!.optIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorDataSharingPreferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.optIn = this._optIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorDataSharingPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optIn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optIn = value.optIn;
    }
  }

  // opt_in - computed: false, optional: false, required: true
  private _optIn?: boolean | cdktf.IResolvable; 
  public get optIn() {
    return this.getBooleanAttribute('opt_in');
  }
  public set optIn(value: boolean | cdktf.IResolvable) {
    this._optIn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInInput() {
    return this._optIn;
  }
}

export class RekognitionStreamProcessorDataSharingPreferenceList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorDataSharingPreference[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorDataSharingPreferenceOutputReference {
    return new RekognitionStreamProcessorDataSharingPreferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorInputKinesisVideoStream {
  /**
  * ARN of the Kinesis video stream stream that streams the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}
  */
  readonly arn: string;
}

export function rekognitionStreamProcessorInputKinesisVideoStreamToTerraform(struct?: RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function rekognitionStreamProcessorInputKinesisVideoStreamToHclTerraform(struct?: RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorInputKinesisVideoStreamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorInputKinesisVideoStream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class RekognitionStreamProcessorInputKinesisVideoStreamList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorInputKinesisVideoStream[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorInputKinesisVideoStreamOutputReference {
    return new RekognitionStreamProcessorInputKinesisVideoStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorInput {
  /**
  * kinesis_video_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#kinesis_video_stream RekognitionStreamProcessor#kinesis_video_stream}
  */
  readonly kinesisVideoStream?: RekognitionStreamProcessorInputKinesisVideoStream[] | cdktf.IResolvable;
}

export function rekognitionStreamProcessorInputToTerraform(struct?: RekognitionStreamProcessorInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kinesis_video_stream: cdktf.listMapper(rekognitionStreamProcessorInputKinesisVideoStreamToTerraform, true)(struct!.kinesisVideoStream),
  }
}


export function rekognitionStreamProcessorInputToHclTerraform(struct?: RekognitionStreamProcessorInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kinesis_video_stream: {
      value: cdktf.listMapperHcl(rekognitionStreamProcessorInputKinesisVideoStreamToHclTerraform, true)(struct!.kinesisVideoStream),
      isBlock: true,
      type: "list",
      storageClassType: "RekognitionStreamProcessorInputKinesisVideoStreamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisVideoStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisVideoStream = this._kinesisVideoStream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesisVideoStream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesisVideoStream.internalValue = value.kinesisVideoStream;
    }
  }

  // kinesis_video_stream - computed: false, optional: true, required: false
  private _kinesisVideoStream = new RekognitionStreamProcessorInputKinesisVideoStreamList(this, "kinesis_video_stream", false);
  public get kinesisVideoStream() {
    return this._kinesisVideoStream;
  }
  public putKinesisVideoStream(value: RekognitionStreamProcessorInputKinesisVideoStream[] | cdktf.IResolvable) {
    this._kinesisVideoStream.internalValue = value;
  }
  public resetKinesisVideoStream() {
    this._kinesisVideoStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisVideoStreamInput() {
    return this._kinesisVideoStream.internalValue;
  }
}

export class RekognitionStreamProcessorInputList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorInput[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorInputOutputReference {
    return new RekognitionStreamProcessorInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorNotificationChannel {
  /**
  * The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon Rekognition posts the completion status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#sns_topic_arn RekognitionStreamProcessor#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}

export function rekognitionStreamProcessorNotificationChannelToTerraform(struct?: RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}


export function rekognitionStreamProcessorNotificationChannelToHclTerraform(struct?: RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sns_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorNotificationChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorNotificationChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class RekognitionStreamProcessorNotificationChannelList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorNotificationChannel[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorNotificationChannelOutputReference {
    return new RekognitionStreamProcessorNotificationChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorOutputKinesisDataStream {
  /**
  * ARN of the output Amazon Kinesis Data Streams stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#arn RekognitionStreamProcessor#arn}
  */
  readonly arn?: string;
}

export function rekognitionStreamProcessorOutputKinesisDataStreamToTerraform(struct?: RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function rekognitionStreamProcessorOutputKinesisDataStreamToHclTerraform(struct?: RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorOutputKinesisDataStreamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorOutputKinesisDataStream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class RekognitionStreamProcessorOutputKinesisDataStreamList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorOutputKinesisDataStream[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorOutputKinesisDataStreamOutputReference {
    return new RekognitionStreamProcessorOutputKinesisDataStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorOutputS3Destination {
  /**
  * The name of the Amazon S3 bucket you want to associate with the streaming video project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#bucket RekognitionStreamProcessor#bucket}
  */
  readonly bucket?: string;
  /**
  * The prefix value of the location within the bucket that you want the information to be published to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#key_prefix RekognitionStreamProcessor#key_prefix}
  */
  readonly keyPrefix?: string;
}

export function rekognitionStreamProcessorOutputS3DestinationToTerraform(struct?: RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
  }
}


export function rekognitionStreamProcessorOutputS3DestinationToHclTerraform(struct?: RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorOutputS3DestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorOutputS3Destination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}

export class RekognitionStreamProcessorOutputS3DestinationList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorOutputS3Destination[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorOutputS3DestinationOutputReference {
    return new RekognitionStreamProcessorOutputS3DestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorOutput {
  /**
  * kinesis_data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#kinesis_data_stream RekognitionStreamProcessor#kinesis_data_stream}
  */
  readonly kinesisDataStream?: RekognitionStreamProcessorOutputKinesisDataStream[] | cdktf.IResolvable;
  /**
  * s3_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#s3_destination RekognitionStreamProcessor#s3_destination}
  */
  readonly s3Destination?: RekognitionStreamProcessorOutputS3Destination[] | cdktf.IResolvable;
}

export function rekognitionStreamProcessorOutputToTerraform(struct?: RekognitionStreamProcessorOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kinesis_data_stream: cdktf.listMapper(rekognitionStreamProcessorOutputKinesisDataStreamToTerraform, true)(struct!.kinesisDataStream),
    s3_destination: cdktf.listMapper(rekognitionStreamProcessorOutputS3DestinationToTerraform, true)(struct!.s3Destination),
  }
}


export function rekognitionStreamProcessorOutputToHclTerraform(struct?: RekognitionStreamProcessorOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kinesis_data_stream: {
      value: cdktf.listMapperHcl(rekognitionStreamProcessorOutputKinesisDataStreamToHclTerraform, true)(struct!.kinesisDataStream),
      isBlock: true,
      type: "list",
      storageClassType: "RekognitionStreamProcessorOutputKinesisDataStreamList",
    },
    s3_destination: {
      value: cdktf.listMapperHcl(rekognitionStreamProcessorOutputS3DestinationToHclTerraform, true)(struct!.s3Destination),
      isBlock: true,
      type: "list",
      storageClassType: "RekognitionStreamProcessorOutputS3DestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesisDataStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataStream = this._kinesisDataStream?.internalValue;
    }
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesisDataStream.internalValue = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesisDataStream.internalValue = value.kinesisDataStream;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // kinesis_data_stream - computed: false, optional: true, required: false
  private _kinesisDataStream = new RekognitionStreamProcessorOutputKinesisDataStreamList(this, "kinesis_data_stream", false);
  public get kinesisDataStream() {
    return this._kinesisDataStream;
  }
  public putKinesisDataStream(value: RekognitionStreamProcessorOutputKinesisDataStream[] | cdktf.IResolvable) {
    this._kinesisDataStream.internalValue = value;
  }
  public resetKinesisDataStream() {
    this._kinesisDataStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataStreamInput() {
    return this._kinesisDataStream.internalValue;
  }

  // s3_destination - computed: false, optional: true, required: false
  private _s3Destination = new RekognitionStreamProcessorOutputS3DestinationList(this, "s3_destination", false);
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: RekognitionStreamProcessorOutputS3Destination[] | cdktf.IResolvable) {
    this._s3Destination.internalValue = value;
  }
  public resetS3Destination() {
    this._s3Destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}

export class RekognitionStreamProcessorOutputList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorOutput[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorOutputOutputReference {
    return new RekognitionStreamProcessorOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorRegionsOfInterestBoundingBox {
  /**
  * Height of the bounding box as a ratio of the overall image height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#height RekognitionStreamProcessor#height}
  */
  readonly height?: number;
  /**
  * Left coordinate of the bounding box as a ratio of overall image width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#left RekognitionStreamProcessor#left}
  */
  readonly left?: number;
  /**
  * Top coordinate of the bounding box as a ratio of overall image height.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#top RekognitionStreamProcessor#top}
  */
  readonly top?: number;
  /**
  * Width of the bounding box as a ratio of the overall image width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#width RekognitionStreamProcessor#width}
  */
  readonly width?: number;
}

export function rekognitionStreamProcessorRegionsOfInterestBoundingBoxToTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    left: cdktf.numberToTerraform(struct!.left),
    top: cdktf.numberToTerraform(struct!.top),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function rekognitionStreamProcessorRegionsOfInterestBoundingBoxToHclTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    left: {
      value: cdktf.numberToHclTerraform(struct!.left),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top: {
      value: cdktf.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorRegionsOfInterestBoundingBox | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._left = undefined;
      this._top = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._left = value.left;
      this._top = value.top;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // left - computed: false, optional: true, required: false
  private _left?: number; 
  public get left() {
    return this.getNumberAttribute('left');
  }
  public set left(value: number) {
    this._left = value;
  }
  public resetLeft() {
    this._left = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // top - computed: false, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface RekognitionStreamProcessorRegionsOfInterestPolygon {
  /**
  * The value of the X coordinate for a point on a Polygon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#x RekognitionStreamProcessor#x}
  */
  readonly x?: number;
  /**
  * The value of the Y coordinate for a point on a Polygon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#y RekognitionStreamProcessor#y}
  */
  readonly y?: number;
}

export function rekognitionStreamProcessorRegionsOfInterestPolygonToTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function rekognitionStreamProcessorRegionsOfInterestPolygonToHclTerraform(struct?: RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorRegionsOfInterestPolygon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class RekognitionStreamProcessorRegionsOfInterestPolygonList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorRegionsOfInterestPolygon[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference {
    return new RekognitionStreamProcessorRegionsOfInterestPolygonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorRegionsOfInterest {
  /**
  * bounding_box block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#bounding_box RekognitionStreamProcessor#bounding_box}
  */
  readonly boundingBox?: RekognitionStreamProcessorRegionsOfInterestBoundingBox;
  /**
  * polygon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#polygon RekognitionStreamProcessor#polygon}
  */
  readonly polygon?: RekognitionStreamProcessorRegionsOfInterestPolygon[] | cdktf.IResolvable;
}

export function rekognitionStreamProcessorRegionsOfInterestToTerraform(struct?: RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounding_box: rekognitionStreamProcessorRegionsOfInterestBoundingBoxToTerraform(struct!.boundingBox),
    polygon: cdktf.listMapper(rekognitionStreamProcessorRegionsOfInterestPolygonToTerraform, true)(struct!.polygon),
  }
}


export function rekognitionStreamProcessorRegionsOfInterestToHclTerraform(struct?: RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bounding_box: {
      value: rekognitionStreamProcessorRegionsOfInterestBoundingBoxToHclTerraform(struct!.boundingBox),
      isBlock: true,
      type: "struct",
      storageClassType: "RekognitionStreamProcessorRegionsOfInterestBoundingBox",
    },
    polygon: {
      value: cdktf.listMapperHcl(rekognitionStreamProcessorRegionsOfInterestPolygonToHclTerraform, true)(struct!.polygon),
      isBlock: true,
      type: "list",
      storageClassType: "RekognitionStreamProcessorRegionsOfInterestPolygonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorRegionsOfInterestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._polygon?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.polygon = this._polygon?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorRegionsOfInterest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._polygon.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._polygon.internalValue = value.polygon;
    }
  }

  // bounding_box - computed: false, optional: true, required: false
  private _boundingBox = new RekognitionStreamProcessorRegionsOfInterestBoundingBoxOutputReference(this, "bounding_box");
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: RekognitionStreamProcessorRegionsOfInterestBoundingBox) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // polygon - computed: false, optional: true, required: false
  private _polygon = new RekognitionStreamProcessorRegionsOfInterestPolygonList(this, "polygon", false);
  public get polygon() {
    return this._polygon;
  }
  public putPolygon(value: RekognitionStreamProcessorRegionsOfInterestPolygon[] | cdktf.IResolvable) {
    this._polygon.internalValue = value;
  }
  public resetPolygon() {
    this._polygon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polygonInput() {
    return this._polygon.internalValue;
  }
}

export class RekognitionStreamProcessorRegionsOfInterestList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorRegionsOfInterest[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorRegionsOfInterestOutputReference {
    return new RekognitionStreamProcessorRegionsOfInterestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorSettingsConnectedHome {
  /**
  * Specifies what you want to detect in the video, such as people, packages, or pets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#labels RekognitionStreamProcessor#labels}
  */
  readonly labels?: string[];
  /**
  * The minimum confidence required to label an object in the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#min_confidence RekognitionStreamProcessor#min_confidence}
  */
  readonly minConfidence?: number;
}

export function rekognitionStreamProcessorSettingsConnectedHomeToTerraform(struct?: RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    min_confidence: cdktf.numberToTerraform(struct!.minConfidence),
  }
}


export function rekognitionStreamProcessorSettingsConnectedHomeToHclTerraform(struct?: RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_confidence: {
      value: cdktf.numberToHclTerraform(struct!.minConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorSettingsConnectedHomeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._minConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.minConfidence = this._minConfidence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorSettingsConnectedHome | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._minConfidence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._minConfidence = value.minConfidence;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // min_confidence - computed: true, optional: true, required: false
  private _minConfidence?: number; 
  public get minConfidence() {
    return this.getNumberAttribute('min_confidence');
  }
  public set minConfidence(value: number) {
    this._minConfidence = value;
  }
  public resetMinConfidence() {
    this._minConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minConfidenceInput() {
    return this._minConfidence;
  }
}

export class RekognitionStreamProcessorSettingsConnectedHomeList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorSettingsConnectedHome[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorSettingsConnectedHomeOutputReference {
    return new RekognitionStreamProcessorSettingsConnectedHomeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorSettingsFaceSearch {
  /**
  * The ID of a collection that contains faces that you want to search for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#collection_id RekognitionStreamProcessor#collection_id}
  */
  readonly collectionId: string;
  /**
  * Minimum face match confidence score that must be met to return a result for a recognized face.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#face_match_threshold RekognitionStreamProcessor#face_match_threshold}
  */
  readonly faceMatchThreshold?: number;
}

export function rekognitionStreamProcessorSettingsFaceSearchToTerraform(struct?: RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_id: cdktf.stringToTerraform(struct!.collectionId),
    face_match_threshold: cdktf.numberToTerraform(struct!.faceMatchThreshold),
  }
}


export function rekognitionStreamProcessorSettingsFaceSearchToHclTerraform(struct?: RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_id: {
      value: cdktf.stringToHclTerraform(struct!.collectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    face_match_threshold: {
      value: cdktf.numberToHclTerraform(struct!.faceMatchThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorSettingsFaceSearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionId = this._collectionId;
    }
    if (this._faceMatchThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceMatchThreshold = this._faceMatchThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorSettingsFaceSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionId = undefined;
      this._faceMatchThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionId = value.collectionId;
      this._faceMatchThreshold = value.faceMatchThreshold;
    }
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // face_match_threshold - computed: true, optional: true, required: false
  private _faceMatchThreshold?: number; 
  public get faceMatchThreshold() {
    return this.getNumberAttribute('face_match_threshold');
  }
  public set faceMatchThreshold(value: number) {
    this._faceMatchThreshold = value;
  }
  public resetFaceMatchThreshold() {
    this._faceMatchThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceMatchThresholdInput() {
    return this._faceMatchThreshold;
  }
}

export class RekognitionStreamProcessorSettingsFaceSearchList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorSettingsFaceSearch[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorSettingsFaceSearchOutputReference {
    return new RekognitionStreamProcessorSettingsFaceSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorSettings {
  /**
  * connected_home block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#connected_home RekognitionStreamProcessor#connected_home}
  */
  readonly connectedHome?: RekognitionStreamProcessorSettingsConnectedHome[] | cdktf.IResolvable;
  /**
  * face_search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#face_search RekognitionStreamProcessor#face_search}
  */
  readonly faceSearch?: RekognitionStreamProcessorSettingsFaceSearch[] | cdktf.IResolvable;
}

export function rekognitionStreamProcessorSettingsToTerraform(struct?: RekognitionStreamProcessorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected_home: cdktf.listMapper(rekognitionStreamProcessorSettingsConnectedHomeToTerraform, true)(struct!.connectedHome),
    face_search: cdktf.listMapper(rekognitionStreamProcessorSettingsFaceSearchToTerraform, true)(struct!.faceSearch),
  }
}


export function rekognitionStreamProcessorSettingsToHclTerraform(struct?: RekognitionStreamProcessorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected_home: {
      value: cdktf.listMapperHcl(rekognitionStreamProcessorSettingsConnectedHomeToHclTerraform, true)(struct!.connectedHome),
      isBlock: true,
      type: "list",
      storageClassType: "RekognitionStreamProcessorSettingsConnectedHomeList",
    },
    face_search: {
      value: cdktf.listMapperHcl(rekognitionStreamProcessorSettingsFaceSearchToHclTerraform, true)(struct!.faceSearch),
      isBlock: true,
      type: "list",
      storageClassType: "RekognitionStreamProcessorSettingsFaceSearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RekognitionStreamProcessorSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectedHome?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedHome = this._connectedHome?.internalValue;
    }
    if (this._faceSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceSearch = this._faceSearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectedHome.internalValue = undefined;
      this._faceSearch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectedHome.internalValue = value.connectedHome;
      this._faceSearch.internalValue = value.faceSearch;
    }
  }

  // connected_home - computed: false, optional: true, required: false
  private _connectedHome = new RekognitionStreamProcessorSettingsConnectedHomeList(this, "connected_home", false);
  public get connectedHome() {
    return this._connectedHome;
  }
  public putConnectedHome(value: RekognitionStreamProcessorSettingsConnectedHome[] | cdktf.IResolvable) {
    this._connectedHome.internalValue = value;
  }
  public resetConnectedHome() {
    this._connectedHome.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedHomeInput() {
    return this._connectedHome.internalValue;
  }

  // face_search - computed: false, optional: true, required: false
  private _faceSearch = new RekognitionStreamProcessorSettingsFaceSearchList(this, "face_search", false);
  public get faceSearch() {
    return this._faceSearch;
  }
  public putFaceSearch(value: RekognitionStreamProcessorSettingsFaceSearch[] | cdktf.IResolvable) {
    this._faceSearch.internalValue = value;
  }
  public resetFaceSearch() {
    this._faceSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceSearchInput() {
    return this._faceSearch.internalValue;
  }
}

export class RekognitionStreamProcessorSettingsList extends cdktf.ComplexList {
  public internalValue? : RekognitionStreamProcessorSettings[] | cdktf.IResolvable

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
  public get(index: number): RekognitionStreamProcessorSettingsOutputReference {
    return new RekognitionStreamProcessorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RekognitionStreamProcessorTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#create RekognitionStreamProcessor#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#delete RekognitionStreamProcessor#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#update RekognitionStreamProcessor#update}
  */
  readonly update?: string;
}

export function rekognitionStreamProcessorTimeoutsToTerraform(struct?: RekognitionStreamProcessorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function rekognitionStreamProcessorTimeoutsToHclTerraform(struct?: RekognitionStreamProcessorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RekognitionStreamProcessorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RekognitionStreamProcessorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RekognitionStreamProcessorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor}
*/
export class RekognitionStreamProcessor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rekognition_stream_processor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RekognitionStreamProcessor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RekognitionStreamProcessor to import
  * @param importFromId The id of the existing RekognitionStreamProcessor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RekognitionStreamProcessor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rekognition_stream_processor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/rekognition_stream_processor aws_rekognition_stream_processor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RekognitionStreamProcessorConfig
  */
  public constructor(scope: Construct, id: string, config: RekognitionStreamProcessorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rekognition_stream_processor',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.83.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._dataSharingPreference.internalValue = config.dataSharingPreference;
    this._input.internalValue = config.input;
    this._notificationChannel.internalValue = config.notificationChannel;
    this._output.internalValue = config.output;
    this._regionsOfInterest.internalValue = config.regionsOfInterest;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stream_processor_arn - computed: true, optional: false, required: false
  public get streamProcessorArn() {
    return this.getStringAttribute('stream_processor_arn');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // data_sharing_preference - computed: false, optional: true, required: false
  private _dataSharingPreference = new RekognitionStreamProcessorDataSharingPreferenceList(this, "data_sharing_preference", false);
  public get dataSharingPreference() {
    return this._dataSharingPreference;
  }
  public putDataSharingPreference(value: RekognitionStreamProcessorDataSharingPreference[] | cdktf.IResolvable) {
    this._dataSharingPreference.internalValue = value;
  }
  public resetDataSharingPreference() {
    this._dataSharingPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSharingPreferenceInput() {
    return this._dataSharingPreference.internalValue;
  }

  // input - computed: false, optional: true, required: false
  private _input = new RekognitionStreamProcessorInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: RekognitionStreamProcessorInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // notification_channel - computed: false, optional: true, required: false
  private _notificationChannel = new RekognitionStreamProcessorNotificationChannelList(this, "notification_channel", false);
  public get notificationChannel() {
    return this._notificationChannel;
  }
  public putNotificationChannel(value: RekognitionStreamProcessorNotificationChannel[] | cdktf.IResolvable) {
    this._notificationChannel.internalValue = value;
  }
  public resetNotificationChannel() {
    this._notificationChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelInput() {
    return this._notificationChannel.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new RekognitionStreamProcessorOutputList(this, "output", false);
  public get output() {
    return this._output;
  }
  public putOutput(value: RekognitionStreamProcessorOutput[] | cdktf.IResolvable) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // regions_of_interest - computed: false, optional: true, required: false
  private _regionsOfInterest = new RekognitionStreamProcessorRegionsOfInterestList(this, "regions_of_interest", false);
  public get regionsOfInterest() {
    return this._regionsOfInterest;
  }
  public putRegionsOfInterest(value: RekognitionStreamProcessorRegionsOfInterest[] | cdktf.IResolvable) {
    this._regionsOfInterest.internalValue = value;
  }
  public resetRegionsOfInterest() {
    this._regionsOfInterest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsOfInterestInput() {
    return this._regionsOfInterest.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new RekognitionStreamProcessorSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: RekognitionStreamProcessorSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RekognitionStreamProcessorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RekognitionStreamProcessorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      data_sharing_preference: cdktf.listMapper(rekognitionStreamProcessorDataSharingPreferenceToTerraform, true)(this._dataSharingPreference.internalValue),
      input: cdktf.listMapper(rekognitionStreamProcessorInputToTerraform, true)(this._input.internalValue),
      notification_channel: cdktf.listMapper(rekognitionStreamProcessorNotificationChannelToTerraform, true)(this._notificationChannel.internalValue),
      output: cdktf.listMapper(rekognitionStreamProcessorOutputToTerraform, true)(this._output.internalValue),
      regions_of_interest: cdktf.listMapper(rekognitionStreamProcessorRegionsOfInterestToTerraform, true)(this._regionsOfInterest.internalValue),
      settings: cdktf.listMapper(rekognitionStreamProcessorSettingsToTerraform, true)(this._settings.internalValue),
      timeouts: rekognitionStreamProcessorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      data_sharing_preference: {
        value: cdktf.listMapperHcl(rekognitionStreamProcessorDataSharingPreferenceToHclTerraform, true)(this._dataSharingPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RekognitionStreamProcessorDataSharingPreferenceList",
      },
      input: {
        value: cdktf.listMapperHcl(rekognitionStreamProcessorInputToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RekognitionStreamProcessorInputList",
      },
      notification_channel: {
        value: cdktf.listMapperHcl(rekognitionStreamProcessorNotificationChannelToHclTerraform, true)(this._notificationChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RekognitionStreamProcessorNotificationChannelList",
      },
      output: {
        value: cdktf.listMapperHcl(rekognitionStreamProcessorOutputToHclTerraform, true)(this._output.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RekognitionStreamProcessorOutputList",
      },
      regions_of_interest: {
        value: cdktf.listMapperHcl(rekognitionStreamProcessorRegionsOfInterestToHclTerraform, true)(this._regionsOfInterest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RekognitionStreamProcessorRegionsOfInterestList",
      },
      settings: {
        value: cdktf.listMapperHcl(rekognitionStreamProcessorSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RekognitionStreamProcessorSettingsList",
      },
      timeouts: {
        value: rekognitionStreamProcessorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RekognitionStreamProcessorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
