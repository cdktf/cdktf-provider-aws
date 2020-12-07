// https://www.terraform.io/docs/providers/aws/r/data_aws_batch_compute_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
  readonly computeEnvironmentName: string;
}

// Resource

export class DataAwsBatchComputeEnvironment extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environment_name - computed: false, optional: false, required: true
  private _computeEnvironmentName: string;
  public get computeEnvironmentName() {
    return this.getStringAttribute('compute_environment_name');
  }
  public set computeEnvironmentName(value: string) {
    this._computeEnvironmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentNameInput() {
    return this._computeEnvironmentName
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
    };
  }
}
