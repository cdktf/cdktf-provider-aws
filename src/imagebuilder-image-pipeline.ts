// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ImagebuilderImagePipelineConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly distributionConfigurationArn?: string;
  readonly enhancedImageMetadataEnabled?: boolean;
  readonly imageRecipeArn: string;
  readonly infrastructureConfigurationArn: string;
  readonly name: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  /** image_tests_configuration block */
  readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration[];
  /** schedule block */
  readonly schedule?: ImagebuilderImagePipelineSchedule[];
}
export interface ImagebuilderImagePipelineImageTestsConfiguration {
  readonly imageTestsEnabled?: boolean;
  readonly timeoutMinutes?: number;
}
export interface ImagebuilderImagePipelineSchedule {
  readonly pipelineExecutionStartCondition?: string;
  readonly scheduleExpression: string;
}

// Resource

export class ImagebuilderImagePipeline extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._imageTestsConfiguration = config.imageTestsConfiguration;
    this._schedule = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: true
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_last_run - computed: true, optional: false, required: true
  public get dateLastRun() {
    return this.getStringAttribute('date_last_run');
  }

  // date_next_run - computed: true, optional: false, required: true
  public get dateNextRun() {
    return this.getStringAttribute('date_next_run');
  }

  // date_updated - computed: true, optional: false, required: true
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // distribution_configuration_arn - computed: false, optional: true, required: false
  private _distributionConfigurationArn?: string;
  public get distributionConfigurationArn() {
    return this._distributionConfigurationArn;
  }
  public set distributionConfigurationArn(value: string | undefined) {
    this._distributionConfigurationArn = value;
  }

  // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean;
  public get enhancedImageMetadataEnabled() {
    return this._enhancedImageMetadataEnabled;
  }
  public set enhancedImageMetadataEnabled(value: boolean | undefined) {
    this._enhancedImageMetadataEnabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_recipe_arn - computed: false, optional: false, required: true
  private _imageRecipeArn: string;
  public get imageRecipeArn() {
    return this._imageRecipeArn;
  }
  public set imageRecipeArn(value: string) {
    this._imageRecipeArn = value;
  }

  // infrastructure_configuration_arn - computed: false, optional: false, required: true
  private _infrastructureConfigurationArn: string;
  public get infrastructureConfigurationArn() {
    return this._infrastructureConfigurationArn;
  }
  public set infrastructureConfigurationArn(value: string) {
    this._infrastructureConfigurationArn = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform - computed: true, optional: false, required: true
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // image_tests_configuration - computed: false, optional: true, required: false
  private _imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration[];
  public get imageTestsConfiguration() {
    return this._imageTestsConfiguration;
  }
  public set imageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration[] | undefined) {
    this._imageTestsConfiguration = value;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: ImagebuilderImagePipelineSchedule[];
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: ImagebuilderImagePipelineSchedule[] | undefined) {
    this._schedule = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      distribution_configuration_arn: this._distributionConfigurationArn,
      enhanced_image_metadata_enabled: this._enhancedImageMetadataEnabled,
      image_recipe_arn: this._imageRecipeArn,
      infrastructure_configuration_arn: this._infrastructureConfigurationArn,
      name: this._name,
      status: this._status,
      tags: this._tags,
      image_tests_configuration: this._imageTestsConfiguration,
      schedule: this._schedule,
    };
  }
}
