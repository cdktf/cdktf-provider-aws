// https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html
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
      "autoscaling_group_name": {
        "type": "string",
        "required": true
      },
      "desired_capacity": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "end_time": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_size": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "min_size": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "recurrence": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "scheduled_action_name": {
        "type": "string",
        "required": true
      },
      "start_time": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutoscalingScheduleConfig extends TerraformMetaArguments {
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

export class AutoscalingSchedule extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName: string;
  public get autoscalingGroupName() {
    return this._autoscalingGroupName;
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number;
  public get desiredCapacity() {
    return this._desiredCapacity ?? this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number | undefined) {
    this._desiredCapacity = value;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this._endTime ?? this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number;
  public get maxSize() {
    return this._maxSize ?? this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number | undefined) {
    this._maxSize = value;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number;
  public get minSize() {
    return this._minSize ?? this.getNumberAttribute('min_size');
  }
  public set minSize(value: number | undefined) {
    this._minSize = value;
  }

  // recurrence - computed: true, optional: true, required: false
  private _recurrence?: string;
  public get recurrence() {
    return this._recurrence ?? this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string | undefined) {
    this._recurrence = value;
  }

  // scheduled_action_name - computed: false, optional: false, required: true
  private _scheduledActionName: string;
  public get scheduledActionName() {
    return this._scheduledActionName;
  }
  public set scheduledActionName(value: string) {
    this._scheduledActionName = value;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this._startTime ?? this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: this._autoscalingGroupName,
      desired_capacity: this._desiredCapacity,
      end_time: this._endTime,
      max_size: this._maxSize,
      min_size: this._minSize,
      recurrence: this._recurrence,
      scheduled_action_name: this._scheduledActionName,
      start_time: this._startTime,
    };
  }
}
