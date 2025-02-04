/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockModelInvocationLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#logging_config BedrockModelInvocationLoggingConfiguration#logging_config}
  */
  readonly loggingConfig?: BedrockModelInvocationLoggingConfigurationLoggingConfig;
}
export interface BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#bucket_name BedrockModelInvocationLoggingConfiguration#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#key_prefix BedrockModelInvocationLoggingConfiguration#key_prefix}
  */
  readonly keyPrefix?: string;
}

export function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
  }
}


export function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
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

export class BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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
export interface BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#log_group_name BedrockModelInvocationLoggingConfiguration#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#role_arn BedrockModelInvocationLoggingConfiguration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * large_data_delivery_s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#large_data_delivery_s3_config BedrockModelInvocationLoggingConfiguration#large_data_delivery_s3_config}
  */
  readonly largeDataDeliveryS3Config?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config;
}

export function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    large_data_delivery_s3_config: bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigToTerraform(struct!.largeDataDeliveryS3Config),
  }
}


export function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_data_delivery_s3_config: {
      value: bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigToHclTerraform(struct!.largeDataDeliveryS3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._largeDataDeliveryS3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeDataDeliveryS3Config = this._largeDataDeliveryS3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupName = undefined;
      this._roleArn = undefined;
      this._largeDataDeliveryS3Config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupName = value.logGroupName;
      this._roleArn = value.roleArn;
      this._largeDataDeliveryS3Config.internalValue = value.largeDataDeliveryS3Config;
    }
  }

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // large_data_delivery_s3_config - computed: false, optional: true, required: false
  private _largeDataDeliveryS3Config = new BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigOutputReference(this, "large_data_delivery_s3_config");
  public get largeDataDeliveryS3Config() {
    return this._largeDataDeliveryS3Config;
  }
  public putLargeDataDeliveryS3Config(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config) {
    this._largeDataDeliveryS3Config.internalValue = value;
  }
  public resetLargeDataDeliveryS3Config() {
    this._largeDataDeliveryS3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeDataDeliveryS3ConfigInput() {
    return this._largeDataDeliveryS3Config.internalValue;
  }
}
export interface BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#bucket_name BedrockModelInvocationLoggingConfiguration#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#key_prefix BedrockModelInvocationLoggingConfiguration#key_prefix}
  */
  readonly keyPrefix?: string;
}

export function bedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
  }
}


export function bedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
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

export class BedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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
export interface BedrockModelInvocationLoggingConfigurationLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#embedding_data_delivery_enabled BedrockModelInvocationLoggingConfiguration#embedding_data_delivery_enabled}
  */
  readonly embeddingDataDeliveryEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#image_data_delivery_enabled BedrockModelInvocationLoggingConfiguration#image_data_delivery_enabled}
  */
  readonly imageDataDeliveryEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#text_data_delivery_enabled BedrockModelInvocationLoggingConfiguration#text_data_delivery_enabled}
  */
  readonly textDataDeliveryEnabled: boolean | cdktf.IResolvable;
  /**
  * cloudwatch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#cloudwatch_config BedrockModelInvocationLoggingConfiguration#cloudwatch_config}
  */
  readonly cloudwatchConfig?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig;
  /**
  * s3_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#s3_config BedrockModelInvocationLoggingConfiguration#s3_config}
  */
  readonly s3Config?: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config;
}

export function bedrockModelInvocationLoggingConfigurationLoggingConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_data_delivery_enabled: cdktf.booleanToTerraform(struct!.embeddingDataDeliveryEnabled),
    image_data_delivery_enabled: cdktf.booleanToTerraform(struct!.imageDataDeliveryEnabled),
    text_data_delivery_enabled: cdktf.booleanToTerraform(struct!.textDataDeliveryEnabled),
    cloudwatch_config: bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigToTerraform(struct!.cloudwatchConfig),
    s3_config: bedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigToTerraform(struct!.s3Config),
  }
}


export function bedrockModelInvocationLoggingConfigurationLoggingConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_data_delivery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.embeddingDataDeliveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_data_delivery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.imageDataDeliveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_data_delivery_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.textDataDeliveryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloudwatch_config: {
      value: bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigToHclTerraform(struct!.cloudwatchConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig",
    },
    s3_config: {
      value: bedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockModelInvocationLoggingConfigurationLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDataDeliveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDataDeliveryEnabled = this._embeddingDataDeliveryEnabled;
    }
    if (this._imageDataDeliveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDataDeliveryEnabled = this._imageDataDeliveryEnabled;
    }
    if (this._textDataDeliveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.textDataDeliveryEnabled = this._textDataDeliveryEnabled;
    }
    if (this._cloudwatchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchConfig = this._cloudwatchConfig?.internalValue;
    }
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDataDeliveryEnabled = undefined;
      this._imageDataDeliveryEnabled = undefined;
      this._textDataDeliveryEnabled = undefined;
      this._cloudwatchConfig.internalValue = undefined;
      this._s3Config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDataDeliveryEnabled = value.embeddingDataDeliveryEnabled;
      this._imageDataDeliveryEnabled = value.imageDataDeliveryEnabled;
      this._textDataDeliveryEnabled = value.textDataDeliveryEnabled;
      this._cloudwatchConfig.internalValue = value.cloudwatchConfig;
      this._s3Config.internalValue = value.s3Config;
    }
  }

  // embedding_data_delivery_enabled - computed: false, optional: false, required: true
  private _embeddingDataDeliveryEnabled?: boolean | cdktf.IResolvable; 
  public get embeddingDataDeliveryEnabled() {
    return this.getBooleanAttribute('embedding_data_delivery_enabled');
  }
  public set embeddingDataDeliveryEnabled(value: boolean | cdktf.IResolvable) {
    this._embeddingDataDeliveryEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDataDeliveryEnabledInput() {
    return this._embeddingDataDeliveryEnabled;
  }

  // image_data_delivery_enabled - computed: false, optional: false, required: true
  private _imageDataDeliveryEnabled?: boolean | cdktf.IResolvable; 
  public get imageDataDeliveryEnabled() {
    return this.getBooleanAttribute('image_data_delivery_enabled');
  }
  public set imageDataDeliveryEnabled(value: boolean | cdktf.IResolvable) {
    this._imageDataDeliveryEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDataDeliveryEnabledInput() {
    return this._imageDataDeliveryEnabled;
  }

  // text_data_delivery_enabled - computed: false, optional: false, required: true
  private _textDataDeliveryEnabled?: boolean | cdktf.IResolvable; 
  public get textDataDeliveryEnabled() {
    return this.getBooleanAttribute('text_data_delivery_enabled');
  }
  public set textDataDeliveryEnabled(value: boolean | cdktf.IResolvable) {
    this._textDataDeliveryEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textDataDeliveryEnabledInput() {
    return this._textDataDeliveryEnabled;
  }

  // cloudwatch_config - computed: false, optional: true, required: false
  private _cloudwatchConfig = new BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigOutputReference(this, "cloudwatch_config");
  public get cloudwatchConfig() {
    return this._cloudwatchConfig;
  }
  public putCloudwatchConfig(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig) {
    this._cloudwatchConfig.internalValue = value;
  }
  public resetCloudwatchConfig() {
    this._cloudwatchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchConfigInput() {
    return this._cloudwatchConfig.internalValue;
  }

  // s3_config - computed: false, optional: true, required: false
  private _s3Config = new BedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigOutputReference(this, "s3_config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration aws_bedrock_model_invocation_logging_configuration}
*/
export class BedrockModelInvocationLoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_model_invocation_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockModelInvocationLoggingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockModelInvocationLoggingConfiguration to import
  * @param importFromId The id of the existing BedrockModelInvocationLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockModelInvocationLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_model_invocation_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrock_model_invocation_logging_configuration aws_bedrock_model_invocation_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockModelInvocationLoggingConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BedrockModelInvocationLoggingConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_model_invocation_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.85.0',
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
    this._loggingConfig.internalValue = config.loggingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new BedrockModelInvocationLoggingConfigurationLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: BedrockModelInvocationLoggingConfigurationLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      logging_config: bedrockModelInvocationLoggingConfigurationLoggingConfigToTerraform(this._loggingConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      logging_config: {
        value: bedrockModelInvocationLoggingConfigurationLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockModelInvocationLoggingConfigurationLoggingConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
