// https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#name SagemakerEndpointConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags SagemakerEndpointConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#tags_all SagemakerEndpointConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * async_inference_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#async_inference_config SagemakerEndpointConfiguration#async_inference_config}
  */
  readonly asyncInferenceConfig?: SagemakerEndpointConfigurationAsyncInferenceConfig[];
  /**
  * data_capture_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#data_capture_config SagemakerEndpointConfiguration#data_capture_config}
  */
  readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig[];
  /**
  * production_variants block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#production_variants SagemakerEndpointConfiguration#production_variants}
  */
  readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[];
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}
  */
  readonly maxConcurrentInvocationsPerInstance?: number;
}

function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_concurrent_invocations_per_instance: cdktf.numberToTerraform(struct!.maxConcurrentInvocationsPerInstance),
  }
}

export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#error_topic SagemakerEndpointConfiguration#error_topic}
  */
  readonly errorTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#success_topic SagemakerEndpointConfiguration#success_topic}
  */
  readonly successTopic?: string;
}

function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_topic: cdktf.stringToTerraform(struct!.errorTopic),
    success_topic: cdktf.stringToTerraform(struct!.successTopic),
  }
}

export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#s3_output_path SagemakerEndpointConfiguration#s3_output_path}
  */
  readonly s3OutputPath: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#notification_config SagemakerEndpointConfiguration#notification_config}
  */
  readonly notificationConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig[];
}

function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
    notification_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform)(struct!.notificationConfig),
  }
}

export interface SagemakerEndpointConfigurationAsyncInferenceConfig {
  /**
  * client_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#client_config SagemakerEndpointConfiguration#client_config}
  */
  readonly clientConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig[];
  /**
  * output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#output_config SagemakerEndpointConfiguration#output_config}
  */
  readonly outputConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig[];
}

function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform)(struct!.clientConfig),
    output_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform)(struct!.outputConfig),
  }
}

export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#csv_content_types SagemakerEndpointConfiguration#csv_content_types}
  */
  readonly csvContentTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#json_content_types SagemakerEndpointConfiguration#json_content_types}
  */
  readonly jsonContentTypes?: string[];
}

function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.csvContentTypes),
    json_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.jsonContentTypes),
  }
}

export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_mode SagemakerEndpointConfiguration#capture_mode}
  */
  readonly captureMode: string;
}

function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
  }
}

export interface SagemakerEndpointConfigurationDataCaptureConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
  */
  readonly destinationS3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#enable_capture SagemakerEndpointConfiguration#enable_capture}
  */
  readonly enableCapture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}
  */
  readonly initialSamplingPercentage: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * capture_content_type_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}
  */
  readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader[];
  /**
  * capture_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#capture_options SagemakerEndpointConfiguration#capture_options}
  */
  readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[];
}

function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_s3_uri: cdktf.stringToTerraform(struct!.destinationS3Uri),
    enable_capture: cdktf.booleanToTerraform(struct!.enableCapture),
    initial_sampling_percentage: cdktf.numberToTerraform(struct!.initialSamplingPercentage),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    capture_content_type_header: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform)(struct!.captureContentTypeHeader),
    capture_options: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform)(struct!.captureOptions),
  }
}

export interface SagemakerEndpointConfigurationProductionVariants {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
  */
  readonly initialInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
  */
  readonly initialVariantWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#instance_type SagemakerEndpointConfiguration#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#model_name SagemakerEndpointConfiguration#model_name}
  */
  readonly modelName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html#variant_name SagemakerEndpointConfiguration#variant_name}
  */
  readonly variantName?: string;
}

function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationProductionVariants): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    initial_instance_count: cdktf.numberToTerraform(struct!.initialInstanceCount),
    initial_variant_weight: cdktf.numberToTerraform(struct!.initialVariantWeight),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    variant_name: cdktf.stringToTerraform(struct!.variantName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration}
*/
export class SagemakerEndpointConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_endpoint_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerEndpointConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._asyncInferenceConfig = config.asyncInferenceConfig;
    this._dataCaptureConfig = config.dataCaptureConfig;
    this._productionVariants = config.productionVariants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string ) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
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
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // async_inference_config - computed: false, optional: true, required: false
  private _asyncInferenceConfig?: SagemakerEndpointConfigurationAsyncInferenceConfig[];
  public get asyncInferenceConfig() {
    return this.interpolationForAttribute('async_inference_config') as any;
  }
  public set asyncInferenceConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfig[] ) {
    this._asyncInferenceConfig = value;
  }
  public resetAsyncInferenceConfig() {
    this._asyncInferenceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInferenceConfigInput() {
    return this._asyncInferenceConfig
  }

  // data_capture_config - computed: false, optional: true, required: false
  private _dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig[];
  public get dataCaptureConfig() {
    return this.interpolationForAttribute('data_capture_config') as any;
  }
  public set dataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig[] ) {
    this._dataCaptureConfig = value;
  }
  public resetDataCaptureConfig() {
    this._dataCaptureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCaptureConfigInput() {
    return this._dataCaptureConfig
  }

  // production_variants - computed: false, optional: false, required: true
  private _productionVariants: SagemakerEndpointConfigurationProductionVariants[];
  public get productionVariants() {
    return this.interpolationForAttribute('production_variants') as any;
  }
  public set productionVariants(value: SagemakerEndpointConfigurationProductionVariants[]) {
    this._productionVariants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productionVariantsInput() {
    return this._productionVariants
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      async_inference_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform)(this._asyncInferenceConfig),
      data_capture_config: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigToTerraform)(this._dataCaptureConfig),
      production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform)(this._productionVariants),
    };
  }
}
