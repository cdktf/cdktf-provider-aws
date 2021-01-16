// https://www.terraform.io/docs/providers/aws/r/data_aws_imagebuilder_image_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsImagebuilderImagePipelineConfig extends TerraformMetaArguments {
  readonly arn: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsImagebuilderImagePipelineImageTestsConfiguration extends ComplexComputedList {

  // image_tests_enabled - computed: true, optional: false, required: true
  public get imageTestsEnabled() {
    return this.getBooleanAttribute('image_tests_enabled');
  }

  // timeout_minutes - computed: true, optional: false, required: true
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
}
export class DataAwsImagebuilderImagePipelineSchedule extends ComplexComputedList {

  // pipeline_execution_start_condition - computed: true, optional: false, required: true
  public get pipelineExecutionStartCondition() {
    return this.getStringAttribute('pipeline_execution_start_condition');
  }

  // schedule_expression - computed: true, optional: false, required: true
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}

// Resource

export class DataAwsImagebuilderImagePipeline extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsImagebuilderImagePipelineConfig) {
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
    this._arn = config.arn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
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

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribution_configuration_arn - computed: true, optional: false, required: true
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }

  // enhanced_image_metadata_enabled - computed: true, optional: false, required: true
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_recipe_arn - computed: true, optional: false, required: true
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }

  // image_tests_configuration - computed: true, optional: false, required: true
  public imageTestsConfiguration(index: string) {
    return new DataAwsImagebuilderImagePipelineImageTestsConfiguration(this, 'image_tests_configuration', index);
  }

  // infrastructure_configuration_arn - computed: true, optional: false, required: true
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform - computed: true, optional: false, required: true
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // schedule - computed: true, optional: false, required: true
  public schedule(index: string) {
    return new DataAwsImagebuilderImagePipelineSchedule(this, 'schedule', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
      tags: this._tags,
    };
  }
}
