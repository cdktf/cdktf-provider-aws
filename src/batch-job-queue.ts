// https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html
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
      "compute_environments": {
        "type": [
          "list",
          "string"
        ],
        "required": true
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
        "required": true
      },
      "state": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BatchJobQueueConfig extends TerraformMetaArguments {
  readonly computeEnvironments: string[];
  readonly name: string;
  readonly priority: number;
  readonly state: string;
}

// Resource

export class BatchJobQueue extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchJobQueueConfig) {
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
    this._computeEnvironments = config.computeEnvironments;
    this._name = config.name;
    this._priority = config.priority;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environments - computed: false, optional: false, required: true
  private _computeEnvironments: string[];
  public get computeEnvironments() {
    return this._computeEnvironments;
  }
  public set computeEnvironments(value: string[]) {
    this._computeEnvironments = value;
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

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number) {
    this._priority = value;
  }

  // state - computed: false, optional: false, required: true
  private _state: string;
  public get state() {
    return this._state;
  }
  public set state(value: string) {
    this._state = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environments: this._computeEnvironments,
      name: this._name,
      priority: this._priority,
      state: this._state,
    };
  }
}
