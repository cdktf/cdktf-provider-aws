// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}
  */
  readonly pipelineDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}
  */
  readonly pipelineDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}
  */
  readonly pipelineDisplayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}
  */
  readonly pipelineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * parallelism_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}
  */
  readonly parallelismConfiguration?: SagemakerPipelineParallelismConfiguration;
  /**
  * pipeline_definition_s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}
  */
  readonly pipelineDefinitionS3Location?: SagemakerPipelinePipelineDefinitionS3Location;
}
export interface SagemakerPipelineParallelismConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}
  */
  readonly maxParallelExecutionSteps: number;
}

export function sagemakerPipelineParallelismConfigurationToTerraform(struct?: SagemakerPipelineParallelismConfigurationOutputReference | SagemakerPipelineParallelismConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_parallel_execution_steps: cdktf.numberToTerraform(struct!.maxParallelExecutionSteps),
  }
}

export class SagemakerPipelineParallelismConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerPipelineParallelismConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxParallelExecutionSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelExecutionSteps = this._maxParallelExecutionSteps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPipelineParallelismConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxParallelExecutionSteps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxParallelExecutionSteps = value.maxParallelExecutionSteps;
    }
  }

  // max_parallel_execution_steps - computed: false, optional: false, required: true
  private _maxParallelExecutionSteps?: number; 
  public get maxParallelExecutionSteps() {
    return this.getNumberAttribute('max_parallel_execution_steps');
  }
  public set maxParallelExecutionSteps(value: number) {
    this._maxParallelExecutionSteps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelExecutionStepsInput() {
    return this._maxParallelExecutionSteps;
  }
}
export interface SagemakerPipelinePipelineDefinitionS3Location {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}
  */
  readonly objectKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}
  */
  readonly versionId?: string;
}

export function sagemakerPipelinePipelineDefinitionS3LocationToTerraform(struct?: SagemakerPipelinePipelineDefinitionS3LocationOutputReference | SagemakerPipelinePipelineDefinitionS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object_key: cdktf.stringToTerraform(struct!.objectKey),
    version_id: cdktf.stringToTerraform(struct!.versionId),
  }
}

export class SagemakerPipelinePipelineDefinitionS3LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerPipelinePipelineDefinitionS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._objectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKey = this._objectKey;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerPipelinePipelineDefinitionS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._objectKey = undefined;
      this._versionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._objectKey = value.objectKey;
      this._versionId = value.versionId;
    }
  }

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

  // object_key - computed: false, optional: false, required: true
  private _objectKey?: string; 
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
  public set objectKey(value: string) {
    this._objectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyInput() {
    return this._objectKey;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline aws_sagemaker_pipeline}
*/
export class SagemakerPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/sagemaker_pipeline aws_sagemaker_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._id = config.id;
    this._pipelineDefinition = config.pipelineDefinition;
    this._pipelineDescription = config.pipelineDescription;
    this._pipelineDisplayName = config.pipelineDisplayName;
    this._pipelineName = config.pipelineName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._parallelismConfiguration.internalValue = config.parallelismConfiguration;
    this._pipelineDefinitionS3Location.internalValue = config.pipelineDefinitionS3Location;
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

  // pipeline_definition - computed: false, optional: true, required: false
  private _pipelineDefinition?: string; 
  public get pipelineDefinition() {
    return this.getStringAttribute('pipeline_definition');
  }
  public set pipelineDefinition(value: string) {
    this._pipelineDefinition = value;
  }
  public resetPipelineDefinition() {
    this._pipelineDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDefinitionInput() {
    return this._pipelineDefinition;
  }

  // pipeline_description - computed: false, optional: true, required: false
  private _pipelineDescription?: string; 
  public get pipelineDescription() {
    return this.getStringAttribute('pipeline_description');
  }
  public set pipelineDescription(value: string) {
    this._pipelineDescription = value;
  }
  public resetPipelineDescription() {
    this._pipelineDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDescriptionInput() {
    return this._pipelineDescription;
  }

  // pipeline_display_name - computed: false, optional: false, required: true
  private _pipelineDisplayName?: string; 
  public get pipelineDisplayName() {
    return this.getStringAttribute('pipeline_display_name');
  }
  public set pipelineDisplayName(value: string) {
    this._pipelineDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDisplayNameInput() {
    return this._pipelineDisplayName;
  }

  // pipeline_name - computed: false, optional: false, required: true
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
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

  // parallelism_configuration - computed: false, optional: true, required: false
  private _parallelismConfiguration = new SagemakerPipelineParallelismConfigurationOutputReference(this, "parallelism_configuration");
  public get parallelismConfiguration() {
    return this._parallelismConfiguration;
  }
  public putParallelismConfiguration(value: SagemakerPipelineParallelismConfiguration) {
    this._parallelismConfiguration.internalValue = value;
  }
  public resetParallelismConfiguration() {
    this._parallelismConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismConfigurationInput() {
    return this._parallelismConfiguration.internalValue;
  }

  // pipeline_definition_s3_location - computed: false, optional: true, required: false
  private _pipelineDefinitionS3Location = new SagemakerPipelinePipelineDefinitionS3LocationOutputReference(this, "pipeline_definition_s3_location");
  public get pipelineDefinitionS3Location() {
    return this._pipelineDefinitionS3Location;
  }
  public putPipelineDefinitionS3Location(value: SagemakerPipelinePipelineDefinitionS3Location) {
    this._pipelineDefinitionS3Location.internalValue = value;
  }
  public resetPipelineDefinitionS3Location() {
    this._pipelineDefinitionS3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineDefinitionS3LocationInput() {
    return this._pipelineDefinitionS3Location.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pipeline_definition: cdktf.stringToTerraform(this._pipelineDefinition),
      pipeline_description: cdktf.stringToTerraform(this._pipelineDescription),
      pipeline_display_name: cdktf.stringToTerraform(this._pipelineDisplayName),
      pipeline_name: cdktf.stringToTerraform(this._pipelineName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      parallelism_configuration: sagemakerPipelineParallelismConfigurationToTerraform(this._parallelismConfiguration.internalValue),
      pipeline_definition_s3_location: sagemakerPipelinePipelineDefinitionS3LocationToTerraform(this._pipelineDefinitionS3Location.internalValue),
    };
  }
}
