// https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#enable_network_isolation SagemakerModel#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#execution_role_arn SagemakerModel#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#name SagemakerModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags SagemakerModel#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags_all SagemakerModel#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container SagemakerModel#container}
  */
  readonly container?: SagemakerModelContainer[];
  /**
  * inference_execution_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#inference_execution_config SagemakerModel#inference_execution_config}
  */
  readonly inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig[];
  /**
  * primary_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#primary_container SagemakerModel#primary_container}
  */
  readonly primaryContainer?: SagemakerModelPrimaryContainer[];
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#vpc_config SagemakerModel#vpc_config}
  */
  readonly vpcConfig?: SagemakerModelVpcConfig[];
}
export interface SagemakerModelContainerImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
}

function sagemakerModelContainerImageConfigToTerraform(struct?: SagemakerModelContainerImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
  }
}

export interface SagemakerModelContainer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * image_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
  */
  readonly imageConfig?: SagemakerModelContainerImageConfig[];
}

function sagemakerModelContainerToTerraform(struct?: SagemakerModelContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    image_config: cdktf.listMapper(sagemakerModelContainerImageConfigToTerraform)(struct!.imageConfig),
  }
}

export interface SagemakerModelInferenceExecutionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
  */
  readonly mode: string;
}

function sagemakerModelInferenceExecutionConfigToTerraform(struct?: SagemakerModelInferenceExecutionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface SagemakerModelPrimaryContainerImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
}

function sagemakerModelPrimaryContainerImageConfigToTerraform(struct?: SagemakerModelPrimaryContainerImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
  }
}

export interface SagemakerModelPrimaryContainer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * image_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
  */
  readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig[];
}

function sagemakerModelPrimaryContainerToTerraform(struct?: SagemakerModelPrimaryContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    image_config: cdktf.listMapper(sagemakerModelPrimaryContainerImageConfigToTerraform)(struct!.imageConfig),
  }
}

export interface SagemakerModelVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#security_group_ids SagemakerModel#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#subnets SagemakerModel#subnets}
  */
  readonly subnets: string[];
}

function sagemakerModelVpcConfigToTerraform(struct?: SagemakerModelVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model}
*/
export class SagemakerModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._executionRoleArn = config.executionRoleArn;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._container = config.container;
    this._inferenceExecutionConfig = config.inferenceExecutionConfig;
    this._primaryContainer = config.primaryContainer;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktf.IResolvable;
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktf.IResolvable ) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // container - computed: false, optional: true, required: false
  private _container?: SagemakerModelContainer[];
  public get container() {
    return this.interpolationForAttribute('container') as any;
  }
  public set container(value: SagemakerModelContainer[] ) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // inference_execution_config - computed: false, optional: true, required: false
  private _inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig[];
  public get inferenceExecutionConfig() {
    return this.interpolationForAttribute('inference_execution_config') as any;
  }
  public set inferenceExecutionConfig(value: SagemakerModelInferenceExecutionConfig[] ) {
    this._inferenceExecutionConfig = value;
  }
  public resetInferenceExecutionConfig() {
    this._inferenceExecutionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceExecutionConfigInput() {
    return this._inferenceExecutionConfig
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer?: SagemakerModelPrimaryContainer[];
  public get primaryContainer() {
    return this.interpolationForAttribute('primary_container') as any;
  }
  public set primaryContainer(value: SagemakerModelPrimaryContainer[] ) {
    this._primaryContainer = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: SagemakerModelVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: SagemakerModelVpcConfig[] ) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_network_isolation: cdktf.booleanToTerraform(this._enableNetworkIsolation),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      container: cdktf.listMapper(sagemakerModelContainerToTerraform)(this._container),
      inference_execution_config: cdktf.listMapper(sagemakerModelInferenceExecutionConfigToTerraform)(this._inferenceExecutionConfig),
      primary_container: cdktf.listMapper(sagemakerModelPrimaryContainerToTerraform)(this._primaryContainer),
      vpc_config: cdktf.listMapper(sagemakerModelVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
