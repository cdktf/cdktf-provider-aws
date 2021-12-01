// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Batch
*/
export interface DataAwsBatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html#compute_environment_name DataAwsBatchComputeEnvironment#compute_environment_name}
  */
  readonly computeEnvironmentName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html#tags DataAwsBatchComputeEnvironment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment}
*/
export class DataAwsBatchComputeEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_batch_compute_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBatchComputeEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBatchComputeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_compute_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeEnvironmentName = config.computeEnvironmentName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environment_name - computed: false, optional: false, required: true
  private _computeEnvironmentName?: string; 
  public get computeEnvironmentName() {
    return this.getStringAttribute('compute_environment_name');
  }
  public set computeEnvironmentName(value: string) {
    this._computeEnvironmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentNameInput() {
    return this._computeEnvironmentName;
  }

  // ecs_cluster_arn - computed: true, optional: false, required: false
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
