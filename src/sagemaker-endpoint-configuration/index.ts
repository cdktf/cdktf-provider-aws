/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#name_prefix SagemakerEndpointConfiguration#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#region SagemakerEndpointConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * async_inference_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#async_inference_config SagemakerEndpointConfiguration#async_inference_config}
  */
  readonly asyncInferenceConfig?: SagemakerEndpointConfigurationAsyncInferenceConfig;
  /**
  * data_capture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#data_capture_config SagemakerEndpointConfiguration#data_capture_config}
  */
  readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig;
  /**
  * production_variants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#production_variants SagemakerEndpointConfiguration#production_variants}
  */
  readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable;
  /**
  * shadow_production_variants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#shadow_production_variants SagemakerEndpointConfiguration#shadow_production_variants}
  */
  readonly shadowProductionVariants?: SagemakerEndpointConfigurationShadowProductionVariants[] | cdktf.IResolvable;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}
  */
  readonly maxConcurrentInvocationsPerInstance?: number;
}

export function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_invocations_per_instance: cdktf.numberToTerraform(struct!.maxConcurrentInvocationsPerInstance),
  }
}


export function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_invocations_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentInvocationsPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentInvocationsPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentInvocationsPerInstance = this._maxConcurrentInvocationsPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentInvocationsPerInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentInvocationsPerInstance = value.maxConcurrentInvocationsPerInstance;
    }
  }

  // max_concurrent_invocations_per_instance - computed: false, optional: true, required: false
  private _maxConcurrentInvocationsPerInstance?: number; 
  public get maxConcurrentInvocationsPerInstance() {
    return this.getNumberAttribute('max_concurrent_invocations_per_instance');
  }
  public set maxConcurrentInvocationsPerInstance(value: number) {
    this._maxConcurrentInvocationsPerInstance = value;
  }
  public resetMaxConcurrentInvocationsPerInstance() {
    this._maxConcurrentInvocationsPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentInvocationsPerInstanceInput() {
    return this._maxConcurrentInvocationsPerInstance;
  }
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}
  */
  readonly errorTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#include_inference_response_in SagemakerEndpointConfiguration#include_inference_response_in}
  */
  readonly includeInferenceResponseIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}
  */
  readonly successTopic?: string;
}

export function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_topic: cdktf.stringToTerraform(struct!.errorTopic),
    include_inference_response_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeInferenceResponseIn),
    success_topic: cdktf.stringToTerraform(struct!.successTopic),
  }
}


export function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_topic: {
      value: cdktf.stringToHclTerraform(struct!.errorTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_inference_response_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeInferenceResponseIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    success_topic: {
      value: cdktf.stringToHclTerraform(struct!.successTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorTopic = this._errorTopic;
    }
    if (this._includeInferenceResponseIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInferenceResponseIn = this._includeInferenceResponseIn;
    }
    if (this._successTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.successTopic = this._successTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorTopic = undefined;
      this._includeInferenceResponseIn = undefined;
      this._successTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorTopic = value.errorTopic;
      this._includeInferenceResponseIn = value.includeInferenceResponseIn;
      this._successTopic = value.successTopic;
    }
  }

  // error_topic - computed: false, optional: true, required: false
  private _errorTopic?: string; 
  public get errorTopic() {
    return this.getStringAttribute('error_topic');
  }
  public set errorTopic(value: string) {
    this._errorTopic = value;
  }
  public resetErrorTopic() {
    this._errorTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorTopicInput() {
    return this._errorTopic;
  }

  // include_inference_response_in - computed: false, optional: true, required: false
  private _includeInferenceResponseIn?: string[]; 
  public get includeInferenceResponseIn() {
    return cdktf.Fn.tolist(this.getListAttribute('include_inference_response_in'));
  }
  public set includeInferenceResponseIn(value: string[]) {
    this._includeInferenceResponseIn = value;
  }
  public resetIncludeInferenceResponseIn() {
    this._includeInferenceResponseIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInferenceResponseInInput() {
    return this._includeInferenceResponseIn;
  }

  // success_topic - computed: false, optional: true, required: false
  private _successTopic?: string; 
  public get successTopic() {
    return this.getStringAttribute('success_topic');
  }
  public set successTopic(value: string) {
    this._successTopic = value;
  }
  public resetSuccessTopic() {
    this._successTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successTopicInput() {
    return this._successTopic;
  }
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#s3_failure_path SagemakerEndpointConfiguration#s3_failure_path}
  */
  readonly s3FailurePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}
  */
  readonly s3OutputPath: string;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#notification_config SagemakerEndpointConfiguration#notification_config}
  */
  readonly notificationConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
}

export function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_failure_path: cdktf.stringToTerraform(struct!.s3FailurePath),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    notification_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct!.notificationConfig),
  }
}


export function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_failure_path: {
      value: cdktf.stringToHclTerraform(struct!.s3FailurePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_config: {
      value: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct!.notificationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3FailurePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FailurePath = this._s3FailurePath;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._s3FailurePath = undefined;
      this._s3OutputPath = undefined;
      this._notificationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._s3FailurePath = value.s3FailurePath;
      this._s3OutputPath = value.s3OutputPath;
      this._notificationConfig.internalValue = value.notificationConfig;
    }
  }

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

  // s3_failure_path - computed: false, optional: true, required: false
  private _s3FailurePath?: string; 
  public get s3FailurePath() {
    return this.getStringAttribute('s3_failure_path');
  }
  public set s3FailurePath(value: string) {
    this._s3FailurePath = value;
  }
  public resetS3FailurePath() {
    this._s3FailurePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FailurePathInput() {
    return this._s3FailurePath;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfig {
  /**
  * client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#client_config SagemakerEndpointConfiguration#client_config}
  */
  readonly clientConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#output_config SagemakerEndpointConfiguration#output_config}
  */
  readonly outputConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
}

export function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_config: sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct!.clientConfig),
    output_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct!.outputConfig),
  }
}


export function sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_config: {
      value: sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigList",
    },
    output_config: {
      value: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform(struct!.outputConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._outputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfig = this._outputConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientConfig.internalValue = undefined;
      this._outputConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientConfig.internalValue = value.clientConfig;
      this._outputConfig.internalValue = value.outputConfig;
    }
  }

  // client_config - computed: false, optional: true, required: false
  private _clientConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig) {
    this._clientConfig.internalValue = value;
  }
  public resetClientConfig() {
    this._clientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}
  */
  readonly csvContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}
  */
  readonly jsonContentTypes?: string[];
}

export function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.csvContentTypes),
    json_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonContentTypes),
  }
}


export function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.csvContentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonContentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csvContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvContentTypes = this._csvContentTypes;
    }
    if (this._jsonContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonContentTypes = this._jsonContentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csvContentTypes = undefined;
      this._jsonContentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csvContentTypes = value.csvContentTypes;
      this._jsonContentTypes = value.jsonContentTypes;
    }
  }

  // csv_content_types - computed: false, optional: true, required: false
  private _csvContentTypes?: string[]; 
  public get csvContentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('csv_content_types'));
  }
  public set csvContentTypes(value: string[]) {
    this._csvContentTypes = value;
  }
  public resetCsvContentTypes() {
    this._csvContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvContentTypesInput() {
    return this._csvContentTypes;
  }

  // json_content_types - computed: false, optional: true, required: false
  private _jsonContentTypes?: string[]; 
  public get jsonContentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('json_content_types'));
  }
  public set jsonContentTypes(value: string[]) {
    this._jsonContentTypes = value;
  }
  public resetJsonContentTypes() {
    this._jsonContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonContentTypesInput() {
    return this._jsonContentTypes;
  }
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}
  */
  readonly captureMode: string;
}

export function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
  }
}


export function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureMode = value.captureMode;
    }
  }

  // capture_mode - computed: false, optional: false, required: true
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }
}

export class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable

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
  public get(index: number): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference {
    return new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerEndpointConfigurationDataCaptureConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}
  */
  readonly enableCapture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}
  */
  readonly initialSamplingPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * capture_content_type_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}
  */
  readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
  /**
  * capture_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#capture_options SagemakerEndpointConfiguration#capture_options}
  */
  readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable;
}

export function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
    enable_capture: cdktf.booleanToTerraform(struct!.enableCapture),
    initial_sampling_percentage: cdktf.numberToTerraform(struct!.initialSamplingPercentage),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    capture_content_type_header: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct!.captureContentTypeHeader),
    capture_options: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform, true)(struct!.captureOptions),
  }
}


export function sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_capture: {
      value: cdktf.booleanToHclTerraform(struct!.enableCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_sampling_percentage: {
      value: cdktf.numberToHclTerraform(struct!.initialSamplingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_content_type_header: {
      value: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct!.captureContentTypeHeader),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderList",
    },
    capture_options: {
      value: cdktf.listMapperHcl(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform, true)(struct!.captureOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationDataCaptureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationDataCaptureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._enableCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCapture = this._enableCapture;
    }
    if (this._initialSamplingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSamplingPercentage = this._initialSamplingPercentage;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._captureContentTypeHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureContentTypeHeader = this._captureContentTypeHeader?.internalValue;
    }
    if (this._captureOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureOptions = this._captureOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationS3Uri = undefined;
      this._enableCapture = undefined;
      this._initialSamplingPercentage = undefined;
      this._kmsKeyId = undefined;
      this._captureContentTypeHeader.internalValue = undefined;
      this._captureOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationS3Uri = value.destinationS3Uri;
      this._enableCapture = value.enableCapture;
      this._initialSamplingPercentage = value.initialSamplingPercentage;
      this._kmsKeyId = value.kmsKeyId;
      this._captureContentTypeHeader.internalValue = value.captureContentTypeHeader;
      this._captureOptions.internalValue = value.captureOptions;
    }
  }

  // destination_s3_uri - computed: false, optional: false, required: true
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
  }

  // enable_capture - computed: false, optional: true, required: false
  private _enableCapture?: boolean | cdktf.IResolvable; 
  public get enableCapture() {
    return this.getBooleanAttribute('enable_capture');
  }
  public set enableCapture(value: boolean | cdktf.IResolvable) {
    this._enableCapture = value;
  }
  public resetEnableCapture() {
    this._enableCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCaptureInput() {
    return this._enableCapture;
  }

  // initial_sampling_percentage - computed: false, optional: false, required: true
  private _initialSamplingPercentage?: number; 
  public get initialSamplingPercentage() {
    return this.getNumberAttribute('initial_sampling_percentage');
  }
  public set initialSamplingPercentage(value: number) {
    this._initialSamplingPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSamplingPercentageInput() {
    return this._initialSamplingPercentage;
  }

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

  // capture_content_type_header - computed: false, optional: true, required: false
  private _captureContentTypeHeader = new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(this, "capture_content_type_header");
  public get captureContentTypeHeader() {
    return this._captureContentTypeHeader;
  }
  public putCaptureContentTypeHeader(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader) {
    this._captureContentTypeHeader.internalValue = value;
  }
  public resetCaptureContentTypeHeader() {
    this._captureContentTypeHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureContentTypeHeaderInput() {
    return this._captureContentTypeHeader.internalValue;
  }

  // capture_options - computed: false, optional: false, required: true
  private _captureOptions = new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList(this, "capture_options", false);
  public get captureOptions() {
    return this._captureOptions;
  }
  public putCaptureOptions(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable) {
    this._captureOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureOptionsInput() {
    return this._captureOptions.internalValue;
  }
}
export interface SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function sagemakerEndpointConfigurationProductionVariantsCoreDumpConfigToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function sagemakerEndpointConfigurationProductionVariantsCoreDumpConfigToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationS3Uri = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationS3Uri = value.destinationS3Uri;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // destination_s3_uri - computed: false, optional: false, required: true
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
  }

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
}
export interface SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#max_instance_count SagemakerEndpointConfiguration#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#min_instance_count SagemakerEndpointConfiguration#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#status SagemakerEndpointConfiguration#status}
  */
  readonly status?: string;
}

export function sagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
      this._status = value.status;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface SagemakerEndpointConfigurationProductionVariantsRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#routing_strategy SagemakerEndpointConfiguration#routing_strategy}
  */
  readonly routingStrategy: string;
}

export function sagemakerEndpointConfigurationProductionVariantsRoutingConfigToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_strategy: cdktf.stringToTerraform(struct!.routingStrategy),
  }
}


export function sagemakerEndpointConfigurationProductionVariantsRoutingConfigToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.routingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationProductionVariantsRoutingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingStrategy = this._routingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingStrategy = value.routingStrategy;
    }
  }

  // routing_strategy - computed: false, optional: false, required: true
  private _routingStrategy?: string; 
  public get routingStrategy() {
    return this.getStringAttribute('routing_strategy');
  }
  public set routingStrategy(value: string) {
    this._routingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStrategyInput() {
    return this._routingStrategy;
  }
}

export class SagemakerEndpointConfigurationProductionVariantsRoutingConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointConfigurationProductionVariantsRoutingConfig[] | cdktf.IResolvable

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
  public get(index: number): SagemakerEndpointConfigurationProductionVariantsRoutingConfigOutputReference {
    return new SagemakerEndpointConfigurationProductionVariantsRoutingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerEndpointConfigurationProductionVariantsServerlessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}
  */
  readonly maxConcurrency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}
  */
  readonly memorySizeInMb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#provisioned_concurrency SagemakerEndpointConfiguration#provisioned_concurrency}
  */
  readonly provisionedConcurrency?: number;
}

export function sagemakerEndpointConfigurationProductionVariantsServerlessConfigToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    memory_size_in_mb: cdktf.numberToTerraform(struct!.memorySizeInMb),
    provisioned_concurrency: cdktf.numberToTerraform(struct!.provisionedConcurrency),
  }
}


export function sagemakerEndpointConfigurationProductionVariantsServerlessConfigToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_size_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.provisionedConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationProductionVariantsServerlessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memorySizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeInMb = this._memorySizeInMb;
    }
    if (this._provisionedConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConcurrency = this._provisionedConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationProductionVariantsServerlessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrency = undefined;
      this._memorySizeInMb = undefined;
      this._provisionedConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrency = value.maxConcurrency;
      this._memorySizeInMb = value.memorySizeInMb;
      this._provisionedConcurrency = value.provisionedConcurrency;
    }
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_size_in_mb - computed: false, optional: false, required: true
  private _memorySizeInMb?: number; 
  public get memorySizeInMb() {
    return this.getNumberAttribute('memory_size_in_mb');
  }
  public set memorySizeInMb(value: number) {
    this._memorySizeInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInMbInput() {
    return this._memorySizeInMb;
  }

  // provisioned_concurrency - computed: false, optional: true, required: false
  private _provisionedConcurrency?: number; 
  public get provisionedConcurrency() {
    return this.getNumberAttribute('provisioned_concurrency');
  }
  public set provisionedConcurrency(value: number) {
    this._provisionedConcurrency = value;
  }
  public resetProvisionedConcurrency() {
    this._provisionedConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrencyInput() {
    return this._provisionedConcurrency;
  }
}
export interface SagemakerEndpointConfigurationProductionVariants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#enable_ssm_access SagemakerEndpointConfiguration#enable_ssm_access}
  */
  readonly enableSsmAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#inference_ami_version SagemakerEndpointConfiguration#inference_ami_version}
  */
  readonly inferenceAmiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
  */
  readonly initialInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
  */
  readonly initialVariantWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}
  */
  readonly modelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}
  */
  readonly variantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * core_dump_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}
  */
  readonly coreDumpConfig?: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig;
  /**
  * managed_instance_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#managed_instance_scaling SagemakerEndpointConfiguration#managed_instance_scaling}
  */
  readonly managedInstanceScaling?: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#routing_config SagemakerEndpointConfiguration#routing_config}
  */
  readonly routingConfig?: SagemakerEndpointConfigurationProductionVariantsRoutingConfig[] | cdktf.IResolvable;
  /**
  * serverless_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}
  */
  readonly serverlessConfig?: SagemakerEndpointConfigurationProductionVariantsServerlessConfig;
}

export function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    container_startup_health_check_timeout_in_seconds: cdktf.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    enable_ssm_access: cdktf.booleanToTerraform(struct!.enableSsmAccess),
    inference_ami_version: cdktf.stringToTerraform(struct!.inferenceAmiVersion),
    initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
    initial_variant_weight: cdktf.numberToTerraform(struct!.initialVariantWeight),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    model_data_download_timeout_in_seconds: cdktf.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    variant_name: cdktf.stringToTerraform(struct!.variantName),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
    core_dump_config: sagemakerEndpointConfigurationProductionVariantsCoreDumpConfigToTerraform(struct!.coreDumpConfig),
    managed_instance_scaling: sagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingToTerraform(struct!.managedInstanceScaling),
    routing_config: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsRoutingConfigToTerraform, true)(struct!.routingConfig),
    serverless_config: sagemakerEndpointConfigurationProductionVariantsServerlessConfigToTerraform(struct!.serverlessConfig),
  }
}


export function sagemakerEndpointConfigurationProductionVariantsToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_startup_health_check_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ssm_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsmAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inference_ami_version: {
      value: cdktf.stringToHclTerraform(struct!.inferenceAmiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_variant_weight: {
      value: cdktf.numberToHclTerraform(struct!.initialVariantWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant_name: {
      value: cdktf.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    core_dump_config: {
      value: sagemakerEndpointConfigurationProductionVariantsCoreDumpConfigToHclTerraform(struct!.coreDumpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigList",
    },
    managed_instance_scaling: {
      value: sagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingToHclTerraform(struct!.managedInstanceScaling),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingList",
    },
    routing_config: {
      value: cdktf.listMapperHcl(sagemakerEndpointConfigurationProductionVariantsRoutingConfigToHclTerraform, true)(struct!.routingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationProductionVariantsRoutingConfigList",
    },
    serverless_config: {
      value: sagemakerEndpointConfigurationProductionVariantsServerlessConfigToHclTerraform(struct!.serverlessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationProductionVariantsServerlessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationProductionVariantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._enableSsmAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsmAccess = this._enableSsmAccess;
    }
    if (this._inferenceAmiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAmiVersion = this._inferenceAmiVersion;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._initialVariantWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialVariantWeight = this._initialVariantWeight;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._coreDumpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDumpConfig = this._coreDumpConfig?.internalValue;
    }
    if (this._managedInstanceScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceScaling = this._managedInstanceScaling?.internalValue;
    }
    if (this._routingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingConfig = this._routingConfig?.internalValue;
    }
    if (this._serverlessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessConfig = this._serverlessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._enableSsmAccess = undefined;
      this._inferenceAmiVersion = undefined;
      this._initialInstanceCount = undefined;
      this._initialVariantWeight = undefined;
      this._instanceType = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
      this._modelName = undefined;
      this._variantName = undefined;
      this._volumeSizeInGb = undefined;
      this._coreDumpConfig.internalValue = undefined;
      this._managedInstanceScaling.internalValue = undefined;
      this._routingConfig.internalValue = undefined;
      this._serverlessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._enableSsmAccess = value.enableSsmAccess;
      this._inferenceAmiVersion = value.inferenceAmiVersion;
      this._initialInstanceCount = value.initialInstanceCount;
      this._initialVariantWeight = value.initialVariantWeight;
      this._instanceType = value.instanceType;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
      this._modelName = value.modelName;
      this._variantName = value.variantName;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._coreDumpConfig.internalValue = value.coreDumpConfig;
      this._managedInstanceScaling.internalValue = value.managedInstanceScaling;
      this._routingConfig.internalValue = value.routingConfig;
      this._serverlessConfig.internalValue = value.serverlessConfig;
    }
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // container_startup_health_check_timeout_in_seconds - computed: false, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // enable_ssm_access - computed: false, optional: true, required: false
  private _enableSsmAccess?: boolean | cdktf.IResolvable; 
  public get enableSsmAccess() {
    return this.getBooleanAttribute('enable_ssm_access');
  }
  public set enableSsmAccess(value: boolean | cdktf.IResolvable) {
    this._enableSsmAccess = value;
  }
  public resetEnableSsmAccess() {
    this._enableSsmAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmAccessInput() {
    return this._enableSsmAccess;
  }

  // inference_ami_version - computed: false, optional: true, required: false
  private _inferenceAmiVersion?: string; 
  public get inferenceAmiVersion() {
    return this.getStringAttribute('inference_ami_version');
  }
  public set inferenceAmiVersion(value: string) {
    this._inferenceAmiVersion = value;
  }
  public resetInferenceAmiVersion() {
    this._inferenceAmiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAmiVersionInput() {
    return this._inferenceAmiVersion;
  }

  // initial_instance_count - computed: false, optional: true, required: false
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  public resetInitialInstanceCount() {
    this._initialInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // initial_variant_weight - computed: false, optional: true, required: false
  private _initialVariantWeight?: number; 
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }
  public set initialVariantWeight(value: number) {
    this._initialVariantWeight = value;
  }
  public resetInitialVariantWeight() {
    this._initialVariantWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVariantWeightInput() {
    return this._initialVariantWeight;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_data_download_timeout_in_seconds - computed: false, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }

  // model_name - computed: false, optional: false, required: true
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }

  // volume_size_in_gb - computed: true, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // core_dump_config - computed: false, optional: true, required: false
  private _coreDumpConfig = new SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference(this, "core_dump_config");
  public get coreDumpConfig() {
    return this._coreDumpConfig;
  }
  public putCoreDumpConfig(value: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig) {
    this._coreDumpConfig.internalValue = value;
  }
  public resetCoreDumpConfig() {
    this._coreDumpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDumpConfigInput() {
    return this._coreDumpConfig.internalValue;
  }

  // managed_instance_scaling - computed: false, optional: true, required: false
  private _managedInstanceScaling = new SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference(this, "managed_instance_scaling");
  public get managedInstanceScaling() {
    return this._managedInstanceScaling;
  }
  public putManagedInstanceScaling(value: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling) {
    this._managedInstanceScaling.internalValue = value;
  }
  public resetManagedInstanceScaling() {
    this._managedInstanceScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceScalingInput() {
    return this._managedInstanceScaling.internalValue;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new SagemakerEndpointConfigurationProductionVariantsRoutingConfigList(this, "routing_config", false);
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: SagemakerEndpointConfigurationProductionVariantsRoutingConfig[] | cdktf.IResolvable) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // serverless_config - computed: false, optional: true, required: false
  private _serverlessConfig = new SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: SagemakerEndpointConfigurationProductionVariantsServerlessConfig) {
    this._serverlessConfig.internalValue = value;
  }
  public resetServerlessConfig() {
    this._serverlessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigInput() {
    return this._serverlessConfig.internalValue;
  }
}

export class SagemakerEndpointConfigurationProductionVariantsList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable

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
  public get(index: number): SagemakerEndpointConfigurationProductionVariantsOutputReference {
    return new SagemakerEndpointConfigurationProductionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId: string;
}

export function sagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function sagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.destinationS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationS3Uri = this._destinationS3Uri;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationS3Uri = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationS3Uri = value.destinationS3Uri;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // destination_s3_uri - computed: false, optional: false, required: true
  private _destinationS3Uri?: string; 
  public get destinationS3Uri() {
    return this.getStringAttribute('destination_s3_uri');
  }
  public set destinationS3Uri(value: string) {
    this._destinationS3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationS3UriInput() {
    return this._destinationS3Uri;
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#max_instance_count SagemakerEndpointConfiguration#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#min_instance_count SagemakerEndpointConfiguration#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#status SagemakerEndpointConfiguration#status}
  */
  readonly status?: string;
}

export function sagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
      this._status = value.status;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#routing_strategy SagemakerEndpointConfiguration#routing_strategy}
  */
  readonly routingStrategy: string;
}

export function sagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_strategy: cdktf.stringToTerraform(struct!.routingStrategy),
  }
}


export function sagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.routingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingStrategy = this._routingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingStrategy = value.routingStrategy;
    }
  }

  // routing_strategy - computed: false, optional: false, required: true
  private _routingStrategy?: string; 
  public get routingStrategy() {
    return this.getStringAttribute('routing_strategy');
  }
  public set routingStrategy(value: string) {
    this._routingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingStrategyInput() {
    return this._routingStrategy;
  }
}

export class SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig[] | cdktf.IResolvable

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
  public get(index: number): SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigOutputReference {
    return new SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}
  */
  readonly maxConcurrency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}
  */
  readonly memorySizeInMb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#provisioned_concurrency SagemakerEndpointConfiguration#provisioned_concurrency}
  */
  readonly provisionedConcurrency?: number;
}

export function sagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    memory_size_in_mb: cdktf.numberToTerraform(struct!.memorySizeInMb),
    provisioned_concurrency: cdktf.numberToTerraform(struct!.provisionedConcurrency),
  }
}


export function sagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_size_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.provisionedConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memorySizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeInMb = this._memorySizeInMb;
    }
    if (this._provisionedConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedConcurrency = this._provisionedConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrency = undefined;
      this._memorySizeInMb = undefined;
      this._provisionedConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrency = value.maxConcurrency;
      this._memorySizeInMb = value.memorySizeInMb;
      this._provisionedConcurrency = value.provisionedConcurrency;
    }
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_size_in_mb - computed: false, optional: false, required: true
  private _memorySizeInMb?: number; 
  public get memorySizeInMb() {
    return this.getNumberAttribute('memory_size_in_mb');
  }
  public set memorySizeInMb(value: number) {
    this._memorySizeInMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInMbInput() {
    return this._memorySizeInMb;
  }

  // provisioned_concurrency - computed: false, optional: true, required: false
  private _provisionedConcurrency?: number; 
  public get provisionedConcurrency() {
    return this.getNumberAttribute('provisioned_concurrency');
  }
  public set provisionedConcurrency(value: number) {
    this._provisionedConcurrency = value;
  }
  public resetProvisionedConcurrency() {
    this._provisionedConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedConcurrencyInput() {
    return this._provisionedConcurrency;
  }
}
export interface SagemakerEndpointConfigurationShadowProductionVariants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#enable_ssm_access SagemakerEndpointConfiguration#enable_ssm_access}
  */
  readonly enableSsmAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#inference_ami_version SagemakerEndpointConfiguration#inference_ami_version}
  */
  readonly inferenceAmiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
  */
  readonly initialInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
  */
  readonly initialVariantWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}
  */
  readonly modelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}
  */
  readonly variantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
  /**
  * core_dump_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}
  */
  readonly coreDumpConfig?: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig;
  /**
  * managed_instance_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#managed_instance_scaling SagemakerEndpointConfiguration#managed_instance_scaling}
  */
  readonly managedInstanceScaling?: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#routing_config SagemakerEndpointConfiguration#routing_config}
  */
  readonly routingConfig?: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig[] | cdktf.IResolvable;
  /**
  * serverless_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}
  */
  readonly serverlessConfig?: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig;
}

export function sagemakerEndpointConfigurationShadowProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    container_startup_health_check_timeout_in_seconds: cdktf.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    enable_ssm_access: cdktf.booleanToTerraform(struct!.enableSsmAccess),
    inference_ami_version: cdktf.stringToTerraform(struct!.inferenceAmiVersion),
    initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
    initial_variant_weight: cdktf.numberToTerraform(struct!.initialVariantWeight),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    model_data_download_timeout_in_seconds: cdktf.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    variant_name: cdktf.stringToTerraform(struct!.variantName),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
    core_dump_config: sagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigToTerraform(struct!.coreDumpConfig),
    managed_instance_scaling: sagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingToTerraform(struct!.managedInstanceScaling),
    routing_config: cdktf.listMapper(sagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigToTerraform, true)(struct!.routingConfig),
    serverless_config: sagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigToTerraform(struct!.serverlessConfig),
  }
}


export function sagemakerEndpointConfigurationShadowProductionVariantsToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_startup_health_check_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ssm_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsmAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inference_ami_version: {
      value: cdktf.stringToHclTerraform(struct!.inferenceAmiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.initialInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_variant_weight: {
      value: cdktf.numberToHclTerraform(struct!.initialVariantWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant_name: {
      value: cdktf.stringToHclTerraform(struct!.variantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    core_dump_config: {
      value: sagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigToHclTerraform(struct!.coreDumpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigList",
    },
    managed_instance_scaling: {
      value: sagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingToHclTerraform(struct!.managedInstanceScaling),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingList",
    },
    routing_config: {
      value: cdktf.listMapperHcl(sagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigToHclTerraform, true)(struct!.routingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigList",
    },
    serverless_config: {
      value: sagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigToHclTerraform(struct!.serverlessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerEndpointConfigurationShadowProductionVariantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._enableSsmAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsmAccess = this._enableSsmAccess;
    }
    if (this._inferenceAmiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAmiVersion = this._inferenceAmiVersion;
    }
    if (this._initialInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialInstanceCount = this._initialInstanceCount;
    }
    if (this._initialVariantWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialVariantWeight = this._initialVariantWeight;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._variantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantName = this._variantName;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    if (this._coreDumpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDumpConfig = this._coreDumpConfig?.internalValue;
    }
    if (this._managedInstanceScaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedInstanceScaling = this._managedInstanceScaling?.internalValue;
    }
    if (this._routingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingConfig = this._routingConfig?.internalValue;
    }
    if (this._serverlessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessConfig = this._serverlessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._enableSsmAccess = undefined;
      this._inferenceAmiVersion = undefined;
      this._initialInstanceCount = undefined;
      this._initialVariantWeight = undefined;
      this._instanceType = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
      this._modelName = undefined;
      this._variantName = undefined;
      this._volumeSizeInGb = undefined;
      this._coreDumpConfig.internalValue = undefined;
      this._managedInstanceScaling.internalValue = undefined;
      this._routingConfig.internalValue = undefined;
      this._serverlessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._enableSsmAccess = value.enableSsmAccess;
      this._inferenceAmiVersion = value.inferenceAmiVersion;
      this._initialInstanceCount = value.initialInstanceCount;
      this._initialVariantWeight = value.initialVariantWeight;
      this._instanceType = value.instanceType;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
      this._modelName = value.modelName;
      this._variantName = value.variantName;
      this._volumeSizeInGb = value.volumeSizeInGb;
      this._coreDumpConfig.internalValue = value.coreDumpConfig;
      this._managedInstanceScaling.internalValue = value.managedInstanceScaling;
      this._routingConfig.internalValue = value.routingConfig;
      this._serverlessConfig.internalValue = value.serverlessConfig;
    }
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // container_startup_health_check_timeout_in_seconds - computed: false, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // enable_ssm_access - computed: false, optional: true, required: false
  private _enableSsmAccess?: boolean | cdktf.IResolvable; 
  public get enableSsmAccess() {
    return this.getBooleanAttribute('enable_ssm_access');
  }
  public set enableSsmAccess(value: boolean | cdktf.IResolvable) {
    this._enableSsmAccess = value;
  }
  public resetEnableSsmAccess() {
    this._enableSsmAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmAccessInput() {
    return this._enableSsmAccess;
  }

  // inference_ami_version - computed: false, optional: true, required: false
  private _inferenceAmiVersion?: string; 
  public get inferenceAmiVersion() {
    return this.getStringAttribute('inference_ami_version');
  }
  public set inferenceAmiVersion(value: string) {
    this._inferenceAmiVersion = value;
  }
  public resetInferenceAmiVersion() {
    this._inferenceAmiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAmiVersionInput() {
    return this._inferenceAmiVersion;
  }

  // initial_instance_count - computed: false, optional: true, required: false
  private _initialInstanceCount?: number; 
  public get initialInstanceCount() {
    return this.getNumberAttribute('initial_instance_count');
  }
  public set initialInstanceCount(value: number) {
    this._initialInstanceCount = value;
  }
  public resetInitialInstanceCount() {
    this._initialInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInstanceCountInput() {
    return this._initialInstanceCount;
  }

  // initial_variant_weight - computed: false, optional: true, required: false
  private _initialVariantWeight?: number; 
  public get initialVariantWeight() {
    return this.getNumberAttribute('initial_variant_weight');
  }
  public set initialVariantWeight(value: number) {
    this._initialVariantWeight = value;
  }
  public resetInitialVariantWeight() {
    this._initialVariantWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVariantWeightInput() {
    return this._initialVariantWeight;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // model_data_download_timeout_in_seconds - computed: false, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }

  // model_name - computed: false, optional: false, required: true
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }

  // core_dump_config - computed: false, optional: true, required: false
  private _coreDumpConfig = new SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference(this, "core_dump_config");
  public get coreDumpConfig() {
    return this._coreDumpConfig;
  }
  public putCoreDumpConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig) {
    this._coreDumpConfig.internalValue = value;
  }
  public resetCoreDumpConfig() {
    this._coreDumpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDumpConfigInput() {
    return this._coreDumpConfig.internalValue;
  }

  // managed_instance_scaling - computed: false, optional: true, required: false
  private _managedInstanceScaling = new SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference(this, "managed_instance_scaling");
  public get managedInstanceScaling() {
    return this._managedInstanceScaling;
  }
  public putManagedInstanceScaling(value: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling) {
    this._managedInstanceScaling.internalValue = value;
  }
  public resetManagedInstanceScaling() {
    this._managedInstanceScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceScalingInput() {
    return this._managedInstanceScaling.internalValue;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigList(this, "routing_config", false);
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig[] | cdktf.IResolvable) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // serverless_config - computed: false, optional: true, required: false
  private _serverlessConfig = new SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig) {
    this._serverlessConfig.internalValue = value;
  }
  public resetServerlessConfig() {
    this._serverlessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigInput() {
    return this._serverlessConfig.internalValue;
  }
}

export class SagemakerEndpointConfigurationShadowProductionVariantsList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointConfigurationShadowProductionVariants[] | cdktf.IResolvable

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
  public get(index: number): SagemakerEndpointConfigurationShadowProductionVariantsOutputReference {
    return new SagemakerEndpointConfigurationShadowProductionVariantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}
*/
export class SagemakerEndpointConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_endpoint_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerEndpointConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerEndpointConfiguration to import
  * @param importFromId The id of the existing SagemakerEndpointConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerEndpointConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_endpoint_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerEndpointConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._asyncInferenceConfig.internalValue = config.asyncInferenceConfig;
    this._dataCaptureConfig.internalValue = config.dataCaptureConfig;
    this._productionVariants.internalValue = config.productionVariants;
    this._shadowProductionVariants.internalValue = config.shadowProductionVariants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // async_inference_config - computed: false, optional: true, required: false
  private _asyncInferenceConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference(this, "async_inference_config");
  public get asyncInferenceConfig() {
    return this._asyncInferenceConfig;
  }
  public putAsyncInferenceConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfig) {
    this._asyncInferenceConfig.internalValue = value;
  }
  public resetAsyncInferenceConfig() {
    this._asyncInferenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInferenceConfigInput() {
    return this._asyncInferenceConfig.internalValue;
  }

  // data_capture_config - computed: false, optional: true, required: false
  private _dataCaptureConfig = new SagemakerEndpointConfigurationDataCaptureConfigOutputReference(this, "data_capture_config");
  public get dataCaptureConfig() {
    return this._dataCaptureConfig;
  }
  public putDataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig) {
    this._dataCaptureConfig.internalValue = value;
  }
  public resetDataCaptureConfig() {
    this._dataCaptureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCaptureConfigInput() {
    return this._dataCaptureConfig.internalValue;
  }

  // production_variants - computed: false, optional: false, required: true
  private _productionVariants = new SagemakerEndpointConfigurationProductionVariantsList(this, "production_variants", false);
  public get productionVariants() {
    return this._productionVariants;
  }
  public putProductionVariants(value: SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable) {
    this._productionVariants.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionVariantsInput() {
    return this._productionVariants.internalValue;
  }

  // shadow_production_variants - computed: false, optional: true, required: false
  private _shadowProductionVariants = new SagemakerEndpointConfigurationShadowProductionVariantsList(this, "shadow_production_variants", false);
  public get shadowProductionVariants() {
    return this._shadowProductionVariants;
  }
  public putShadowProductionVariants(value: SagemakerEndpointConfigurationShadowProductionVariants[] | cdktf.IResolvable) {
    this._shadowProductionVariants.internalValue = value;
  }
  public resetShadowProductionVariants() {
    this._shadowProductionVariants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowProductionVariantsInput() {
    return this._shadowProductionVariants.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      async_inference_config: sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(this._asyncInferenceConfig.internalValue),
      data_capture_config: sagemakerEndpointConfigurationDataCaptureConfigToTerraform(this._dataCaptureConfig.internalValue),
      production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform, true)(this._productionVariants.internalValue),
      shadow_production_variants: cdktf.listMapper(sagemakerEndpointConfigurationShadowProductionVariantsToTerraform, true)(this._shadowProductionVariants.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      async_inference_config: {
        value: sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform(this._asyncInferenceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerEndpointConfigurationAsyncInferenceConfigList",
      },
      data_capture_config: {
        value: sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform(this._dataCaptureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerEndpointConfigurationDataCaptureConfigList",
      },
      production_variants: {
        value: cdktf.listMapperHcl(sagemakerEndpointConfigurationProductionVariantsToHclTerraform, true)(this._productionVariants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerEndpointConfigurationProductionVariantsList",
      },
      shadow_production_variants: {
        value: cdktf.listMapperHcl(sagemakerEndpointConfigurationShadowProductionVariantsToHclTerraform, true)(this._shadowProductionVariants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerEndpointConfigurationShadowProductionVariantsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
