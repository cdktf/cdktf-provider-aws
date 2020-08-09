// https://www.terraform.io/docs/providers/aws/r/data_aws_batch_compute_environment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "compute_environment_name": {
        "type": "string",
        "required": true
      },
      "ecs_cluster_arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "service_role": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "status_reason": {
        "type": "string",
        "computed": true
      },
      "type": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsBatchComputeEnvironmentConfig extends TerraformMetaArguments {
  readonly computeEnvironmentName: string;
}

// Resource

export class DataAwsBatchComputeEnvironment extends TerraformDataSource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environment_name - computed: false, optional: false, required: true
  private _computeEnvironmentName: string;
  public get computeEnvironmentName() {
    return this._computeEnvironmentName;
  }
  public set computeEnvironmentName(value: string) {
    this._computeEnvironmentName = value;
  }

  // ecs_cluster_arn - computed: true, optional: false, required: true
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // service_role - computed: true, optional: false, required: true
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: true
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environment_name: this._computeEnvironmentName,
    };
  }
}
