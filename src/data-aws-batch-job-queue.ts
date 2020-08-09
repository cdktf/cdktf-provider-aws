// https://www.terraform.io/docs/providers/aws/r/data_aws_batch_job_queue.html
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
      "compute_environment_order": {
        "type": [
          "list",
          [
            "object",
            {
              "compute_environment": "string",
              "order": "number"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "priority": {
        "type": "number",
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsBatchJobQueueConfig extends TerraformMetaArguments {
  readonly name: string;
}
export class DataAwsBatchJobQueueComputeEnvironmentOrder extends ComplexComputedList {

  // compute_environment - computed: true, optional: false, required: true
  public get computeEnvironment() {
    return this.getStringAttribute('compute_environment');
  }

  // order - computed: true, optional: false, required: true
  public get order() {
    return this.getNumberAttribute('order');
  }
}

// Resource

export class DataAwsBatchJobQueue extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsBatchJobQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_job_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environment_order - computed: true, optional: false, required: true
  public computeEnvironmentOrder(index: string) {
    return new DataAwsBatchJobQueueComputeEnvironmentOrder(this, 'compute_environment_order', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // priority - computed: true, optional: false, required: true
  public get priority() {
    return this.getNumberAttribute('priority');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
