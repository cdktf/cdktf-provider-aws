// https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingScheduleConfig extends cdktf.TerraformMetaArguments {
  readonly autoscalingGroupName: string;
  readonly desiredCapacity?: number;
  readonly endTime?: string;
  readonly maxSize?: number;
  readonly minSize?: number;
  readonly recurrence?: string;
  readonly scheduledActionName: string;
  readonly startTime?: string;
}

// Resource

export class AutoscalingSchedule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_schedule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._desiredCapacity = config.desiredCapacity;
    this._endTime = config.endTime;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._recurrence = config.recurrence;
    this._scheduledActionName = config.scheduledActionName;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName: string;
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number;
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number;
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number;
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize
  }

  // recurrence - computed: true, optional: true, required: false
  private _recurrence?: string;
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence
  }

  // scheduled_action_name - computed: false, optional: false, required: true
  private _scheduledActionName: string;
  public get scheduledActionName() {
    return this.getStringAttribute('scheduled_action_name');
  }
  public set scheduledActionName(value: string) {
    this._scheduledActionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActionNameInput() {
    return this._scheduledActionName
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      end_time: cdktf.stringToTerraform(this._endTime),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      recurrence: cdktf.stringToTerraform(this._recurrence),
      scheduled_action_name: cdktf.stringToTerraform(this._scheduledActionName),
      start_time: cdktf.stringToTerraform(this._startTime),
    };
  }
}
