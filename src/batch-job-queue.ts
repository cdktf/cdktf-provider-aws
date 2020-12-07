// https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchJobQueueConfig extends cdktf.TerraformMetaArguments {
  readonly computeEnvironments: string[];
  readonly name: string;
  readonly priority: number;
  readonly state: string;
}

// Resource

export class BatchJobQueue extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environments - computed: false, optional: false, required: true
  private _computeEnvironments: string[];
  public get computeEnvironments() {
    return this.getListAttribute('compute_environments');
  }
  public set computeEnvironments(value: string[]) {
    this._computeEnvironments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentsInput() {
    return this._computeEnvironments
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // state - computed: false, optional: false, required: true
  private _state: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environments: cdktf.listMapper(cdktf.stringToTerraform)(this._computeEnvironments),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      state: cdktf.stringToTerraform(this._state),
    };
  }
}
