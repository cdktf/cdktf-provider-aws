// https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppautoscalingScheduledActionConfig extends cdktf.TerraformMetaArguments {
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

function appautoscalingScheduledActionScalableTargetActionToTerraform(struct?: AppautoscalingScheduledActionScalableTargetAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}


// Resource

export class AppautoscalingScheduledAction extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string ) {
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // scalable_dimension - computed: false, optional: true, required: false
  private _scalableDimension?: string;
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string ) {
    this._scalableDimension = value;
  }
  public resetScalableDimension() {
    this._scalableDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace: string;
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string ) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // scalable_target_action - computed: false, optional: true, required: false
  private _scalableTargetAction?: AppautoscalingScheduledActionScalableTargetAction[];
  public get scalableTargetAction() {
    return this.interpolationForAttribute('scalable_target_action') as any;
  }
  public set scalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction[] ) {
    this._scalableTargetAction = value;
  }
  public resetScalableTargetAction() {
    this._scalableTargetAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableTargetActionInput() {
    return this._scalableTargetAction
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      name: cdktf.stringToTerraform(this._name),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
      schedule: cdktf.stringToTerraform(this._schedule),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
      start_time: cdktf.stringToTerraform(this._startTime),
      scalable_target_action: cdktf.listMapper(appautoscalingScheduledActionScalableTargetActionToTerraform)(this._scalableTargetAction),
    };
  }
}
