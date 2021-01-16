// https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
  readonly kmsKeyArn?: string;
  readonly name?: string;
  readonly tags?: { [key: string]: string };
  /** data_capture_config block */
  readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig[];
  /** production_variants block */
  readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[];
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
  readonly csvContentTypes?: string[];
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
  readonly captureMode: string;
}

function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
  }
}

export interface SagemakerEndpointConfigurationDataCaptureConfig {
  readonly destinationS3Uri: string;
  readonly enableCapture?: boolean;
  readonly initialSamplingPercentage: number;
  readonly kmsKeyId?: string;
  /** capture_content_type_header block */
  readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader[];
  /** capture_options block */
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
  readonly acceleratorType?: string;
  readonly initialInstanceCount: number;
  readonly initialVariantWeight?: number;
  readonly instanceType: string;
  readonly modelName: string;
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


// Resource

export class SagemakerEndpointConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      data_capture_config: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigToTerraform)(this._dataCaptureConfig),
      production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform)(this._productionVariants),
    };
  }
}
