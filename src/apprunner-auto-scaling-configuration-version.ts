// https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerAutoScalingConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
  readonly autoScalingConfigurationName: string;
  readonly maxConcurrency?: number;
  readonly maxSize?: number;
  readonly minSize?: number;
  readonly tags?: { [key: string]: string };
  readonly tagsAll?: { [key: string]: string };
}

// Resource

export class ApprunnerAutoScalingConfigurationVersion extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApprunnerAutoScalingConfigurationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_auto_scaling_configuration_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoScalingConfigurationName = config.autoScalingConfigurationName;
    this._maxConcurrency = config.maxConcurrency;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_configuration_name - computed: false, optional: false, required: true
  private _autoScalingConfigurationName: string;
  public get autoScalingConfigurationName() {
    return this.getStringAttribute('auto_scaling_configuration_name');
  }
  public set autoScalingConfigurationName(value: string) {
    this._autoScalingConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationNameInput() {
    return this._autoScalingConfigurationName
  }

  // auto_scaling_configuration_revision - computed: true, optional: false, required: false
  public get autoScalingConfigurationRevision() {
    return this.getNumberAttribute('auto_scaling_configuration_revision');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getBooleanAttribute('latest');
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number;
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number ) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number;
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number ) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number;
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number ) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_configuration_name: cdktf.stringToTerraform(this._autoScalingConfigurationName),
      max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
