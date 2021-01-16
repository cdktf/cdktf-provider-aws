// https://www.terraform.io/docs/providers/aws/r/data_aws_imagebuilder_image_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
  readonly arn: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsImagebuilderImagePipelineImageTestsConfiguration extends cdktf.ComplexComputedList {

  // image_tests_enabled - computed: true, optional: false, required: false
  public get imageTestsEnabled() {
    return this.getBooleanAttribute('image_tests_enabled');
  }

  // timeout_minutes - computed: true, optional: false, required: false
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
}
export class DataAwsImagebuilderImagePipelineSchedule extends cdktf.ComplexComputedList {

  // pipeline_execution_start_condition - computed: true, optional: false, required: false
  public get pipelineExecutionStartCondition() {
    return this.getStringAttribute('pipeline_execution_start_condition');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}

// Resource

export class DataAwsImagebuilderImagePipeline extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribution_configuration_arn - computed: true, optional: false, required: false
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }

  // enhanced_image_metadata_enabled - computed: true, optional: false, required: false
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_recipe_arn - computed: true, optional: false, required: false
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }

  // image_tests_configuration - computed: true, optional: false, required: false
  public imageTestsConfiguration(index: string) {
    return new DataAwsImagebuilderImagePipelineImageTestsConfiguration(this, 'image_tests_configuration', index);
  }

  // infrastructure_configuration_arn - computed: true, optional: false, required: false
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // schedule - computed: true, optional: false, required: false
  public schedule(index: string) {
    return new DataAwsImagebuilderImagePipelineSchedule(this, 'schedule', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
