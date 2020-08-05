// https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html
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
      "end_time": {
        "type": "string",
        "optional": true
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
      "resource_id": {
        "type": "string",
        "required": true
      },
      "scalable_dimension": {
        "type": "string",
        "optional": true
      },
      "schedule": {
        "type": "string",
        "optional": true
      },
      "service_namespace": {
        "type": "string",
        "required": true
      },
      "start_time": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "scalable_target_action": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "max_capacity": {
              "type": "number",
              "optional": true
            },
            "min_capacity": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppautoscalingScheduledActionConfig extends TerraformMetaArguments {
  readonly endTime?: string;
  readonly name: string;
  readonly resourceId: string;
  readonly scalableDimension?: string;
  readonly schedule?: string;
  readonly serviceNamespace: string;
  readonly startTime?: string;
  /** scalable_target_action block */
  readonly scalableTargetAction?: AppautoscalingScheduledActionScalableTargetAction[];
}
export interface AppautoscalingScheduledActionScalableTargetAction {
  readonly maxCapacity?: number;
  readonly minCapacity?: number;
}

// Resource

export class AppautoscalingScheduledAction extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppautoscalingScheduledActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_scheduled_action',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endTime = config.endTime;
    this._name = config.name;
    this._resourceId = config.resourceId;
    this._scalableDimension = config.scalableDimension;
    this._schedule = config.schedule;
    this._serviceNamespace = config.serviceNamespace;
    this._startTime = config.startTime;
    this._scalableTargetAction = config.scalableTargetAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this._endTime;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // scalable_dimension - computed: false, optional: true, required: false
  private _scalableDimension?: string;
  public get scalableDimension() {
    return this._scalableDimension;
  }
  public set scalableDimension(value: string | undefined) {
    this._scalableDimension = value;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: string | undefined) {
    this._schedule = value;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace: string;
  public get serviceNamespace() {
    return this._serviceNamespace;
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this._startTime;
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }

  // scalable_target_action - computed: false, optional: true, required: false
  private _scalableTargetAction?: AppautoscalingScheduledActionScalableTargetAction[];
  public get scalableTargetAction() {
    return this._scalableTargetAction;
  }
  public set scalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction[] | undefined) {
    this._scalableTargetAction = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: this._endTime,
      name: this._name,
      resource_id: this._resourceId,
      scalable_dimension: this._scalableDimension,
      schedule: this._schedule,
      service_namespace: this._serviceNamespace,
      start_time: this._startTime,
      scalable_target_action: this._scalableTargetAction,
    };
  }
}
