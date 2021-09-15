// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#description ImagebuilderImagePipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}
  */
  readonly distributionConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}
  */
  readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}
  */
  readonly imageRecipeArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}
  */
  readonly infrastructureConfigurationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#name ImagebuilderImagePipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#status ImagebuilderImagePipeline#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags ImagebuilderImagePipeline#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#tags_all ImagebuilderImagePipeline#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * image_tests_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}
  */
  readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration[];
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule ImagebuilderImagePipeline#schedule}
  */
  readonly schedule?: ImagebuilderImagePipelineSchedule[];
}
export interface ImagebuilderImagePipelineImageTestsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}
  */
  readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageTestsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_tests_enabled: cdktf.booleanToTerraform(struct!.imageTestsEnabled),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}

export interface ImagebuilderImagePipelineSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}
  */
  readonly pipelineExecutionStartCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html#schedule_expression ImagebuilderImagePipeline#schedule_expression}
  */
  readonly scheduleExpression: string;
}

function imagebuilderImagePipelineScheduleToTerraform(struct?: ImagebuilderImagePipelineSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pipeline_execution_start_condition: cdktf.stringToTerraform(struct!.pipelineExecutionStartCondition),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}
*/
export class ImagebuilderImagePipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_image_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImagePipelineConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_image_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._distributionConfigurationArn = config.distributionConfigurationArn;
    this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
    this._imageRecipeArn = config.imageRecipeArn;
    this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
    this._name = config.name;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._imageTestsConfiguration = config.imageTestsConfiguration;
    this._schedule = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_last_run - computed: true, optional: false, required: false
  public get dateLastRun() {
    return this.getStringAttribute('date_last_run');
  }

  // date_next_run - computed: true, optional: false, required: false
  public get dateNextRun() {
    return this.getStringAttribute('date_next_run');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // distribution_configuration_arn - computed: false, optional: true, required: false
  private _distributionConfigurationArn?: string;
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }
  public set distributionConfigurationArn(value: string ) {
    this._distributionConfigurationArn = value;
  }
  public resetDistributionConfigurationArn() {
    this._distributionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigurationArnInput() {
    return this._distributionConfigurationArn
  }

  // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }
  public set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable ) {
    this._enhancedImageMetadataEnabled = value;
  }
  public resetEnhancedImageMetadataEnabled() {
    this._enhancedImageMetadataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedImageMetadataEnabledInput() {
    return this._enhancedImageMetadataEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_recipe_arn - computed: false, optional: false, required: true
  private _imageRecipeArn: string;
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }
  public set imageRecipeArn(value: string) {
    this._imageRecipeArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRecipeArnInput() {
    return this._imageRecipeArn
  }

  // infrastructure_configuration_arn - computed: false, optional: false, required: true
  private _infrastructureConfigurationArn: string;
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }
  public set infrastructureConfigurationArn(value: string) {
    this._infrastructureConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationArnInput() {
    return this._infrastructureConfigurationArn
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
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

  // image_tests_configuration - computed: false, optional: true, required: false
  private _imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration[];
  public get imageTestsConfiguration() {
    return this.interpolationForAttribute('image_tests_configuration') as any;
  }
  public set imageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration[] ) {
    this._imageTestsConfiguration = value;
  }
  public resetImageTestsConfiguration() {
    this._imageTestsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsConfigurationInput() {
    return this._imageTestsConfiguration
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: ImagebuilderImagePipelineSchedule[];
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: ImagebuilderImagePipelineSchedule[] ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
      enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
      image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
      infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      image_tests_configuration: cdktf.listMapper(imagebuilderImagePipelineImageTestsConfigurationToTerraform)(this._imageTestsConfiguration),
      schedule: cdktf.listMapper(imagebuilderImagePipelineScheduleToTerraform)(this._schedule),
    };
  }
}
