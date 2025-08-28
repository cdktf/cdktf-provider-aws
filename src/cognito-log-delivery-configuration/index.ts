/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoLogDeliveryConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#region CognitoLogDeliveryConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#user_pool_id CognitoLogDeliveryConfiguration#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * log_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#log_configurations CognitoLogDeliveryConfiguration#log_configurations}
  */
  readonly logConfigurations?: CognitoLogDeliveryConfigurationLogConfigurations[] | cdktf.IResolvable;
}
export interface CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#log_group_arn CognitoLogDeliveryConfiguration#log_group_arn}
  */
  readonly logGroupArn?: string;
}

export function cognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationToTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
  }
}


export function cognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationToHclTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}

export class CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList extends cdktf.ComplexList {
  public internalValue? : CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference {
    return new CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#stream_arn CognitoLogDeliveryConfiguration#stream_arn}
  */
  readonly streamArn?: string;
}

export function cognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationToTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}


export function cognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationToHclTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._streamArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._streamArn = value.streamArn;
    }
  }

  // stream_arn - computed: false, optional: true, required: false
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  public resetStreamArn() {
    this._streamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}

export class CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList extends cdktf.ComplexList {
  public internalValue? : CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference {
    return new CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#bucket_arn CognitoLogDeliveryConfiguration#bucket_arn}
  */
  readonly bucketArn?: string;
}

export function cognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationToTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
  }
}


export function cognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationToHclTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
    }
  }

  // bucket_arn - computed: false, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }
}

export class CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList extends cdktf.ComplexList {
  public internalValue? : CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration[] | cdktf.IResolvable

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
  public get(index: number): CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference {
    return new CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CognitoLogDeliveryConfigurationLogConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#event_source CognitoLogDeliveryConfiguration#event_source}
  */
  readonly eventSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#log_level CognitoLogDeliveryConfiguration#log_level}
  */
  readonly logLevel: string;
  /**
  * cloud_watch_logs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#cloud_watch_logs_configuration CognitoLogDeliveryConfiguration#cloud_watch_logs_configuration}
  */
  readonly cloudWatchLogsConfiguration?: CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration[] | cdktf.IResolvable;
  /**
  * firehose_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#firehose_configuration CognitoLogDeliveryConfiguration#firehose_configuration}
  */
  readonly firehoseConfiguration?: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration[] | cdktf.IResolvable;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#s3_configuration CognitoLogDeliveryConfiguration#s3_configuration}
  */
  readonly s3Configuration?: CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration[] | cdktf.IResolvable;
}

export function cognitoLogDeliveryConfigurationLogConfigurationsToTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_source: cdktf.stringToTerraform(struct!.eventSource),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    cloud_watch_logs_configuration: cdktf.listMapper(cognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationToTerraform, true)(struct!.cloudWatchLogsConfiguration),
    firehose_configuration: cdktf.listMapper(cognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationToTerraform, true)(struct!.firehoseConfiguration),
    s3_configuration: cdktf.listMapper(cognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationToTerraform, true)(struct!.s3Configuration),
  }
}


export function cognitoLogDeliveryConfigurationLogConfigurationsToHclTerraform(struct?: CognitoLogDeliveryConfigurationLogConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_source: {
      value: cdktf.stringToHclTerraform(struct!.eventSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_watch_logs_configuration: {
      value: cdktf.listMapperHcl(cognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationToHclTerraform, true)(struct!.cloudWatchLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList",
    },
    firehose_configuration: {
      value: cdktf.listMapperHcl(cognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationToHclTerraform, true)(struct!.firehoseConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList",
    },
    s3_configuration: {
      value: cdktf.listMapperHcl(cognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoLogDeliveryConfigurationLogConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CognitoLogDeliveryConfigurationLogConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._cloudWatchLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsConfiguration = this._cloudWatchLogsConfiguration?.internalValue;
    }
    if (this._firehoseConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firehoseConfiguration = this._firehoseConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoLogDeliveryConfigurationLogConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventSource = undefined;
      this._logLevel = undefined;
      this._cloudWatchLogsConfiguration.internalValue = undefined;
      this._firehoseConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventSource = value.eventSource;
      this._logLevel = value.logLevel;
      this._cloudWatchLogsConfiguration.internalValue = value.cloudWatchLogsConfiguration;
      this._firehoseConfiguration.internalValue = value.firehoseConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // event_source - computed: false, optional: false, required: true
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // log_level - computed: false, optional: false, required: true
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // cloud_watch_logs_configuration - computed: false, optional: true, required: false
  private _cloudWatchLogsConfiguration = new CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList(this, "cloud_watch_logs_configuration", false);
  public get cloudWatchLogsConfiguration() {
    return this._cloudWatchLogsConfiguration;
  }
  public putCloudWatchLogsConfiguration(value: CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration[] | cdktf.IResolvable) {
    this._cloudWatchLogsConfiguration.internalValue = value;
  }
  public resetCloudWatchLogsConfiguration() {
    this._cloudWatchLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsConfigurationInput() {
    return this._cloudWatchLogsConfiguration.internalValue;
  }

  // firehose_configuration - computed: false, optional: true, required: false
  private _firehoseConfiguration = new CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList(this, "firehose_configuration", false);
  public get firehoseConfiguration() {
    return this._firehoseConfiguration;
  }
  public putFirehoseConfiguration(value: CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration[] | cdktf.IResolvable) {
    this._firehoseConfiguration.internalValue = value;
  }
  public resetFirehoseConfiguration() {
    this._firehoseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseConfigurationInput() {
    return this._firehoseConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration[] | cdktf.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}

export class CognitoLogDeliveryConfigurationLogConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CognitoLogDeliveryConfigurationLogConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CognitoLogDeliveryConfigurationLogConfigurationsOutputReference {
    return new CognitoLogDeliveryConfigurationLogConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration aws_cognito_log_delivery_configuration}
*/
export class CognitoLogDeliveryConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_log_delivery_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CognitoLogDeliveryConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoLogDeliveryConfiguration to import
  * @param importFromId The id of the existing CognitoLogDeliveryConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoLogDeliveryConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_log_delivery_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cognito_log_delivery_configuration aws_cognito_log_delivery_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoLogDeliveryConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoLogDeliveryConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_log_delivery_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.11.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._region = config.region;
    this._userPoolId = config.userPoolId;
    this._logConfigurations.internalValue = config.logConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // log_configurations - computed: false, optional: true, required: false
  private _logConfigurations = new CognitoLogDeliveryConfigurationLogConfigurationsList(this, "log_configurations", false);
  public get logConfigurations() {
    return this._logConfigurations;
  }
  public putLogConfigurations(value: CognitoLogDeliveryConfigurationLogConfigurations[] | cdktf.IResolvable) {
    this._logConfigurations.internalValue = value;
  }
  public resetLogConfigurations() {
    this._logConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationsInput() {
    return this._logConfigurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      log_configurations: cdktf.listMapper(cognitoLogDeliveryConfigurationLogConfigurationsToTerraform, true)(this._logConfigurations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_id: {
        value: cdktf.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_configurations: {
        value: cdktf.listMapperHcl(cognitoLogDeliveryConfigurationLogConfigurationsToHclTerraform, true)(this._logConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CognitoLogDeliveryConfigurationLogConfigurationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
