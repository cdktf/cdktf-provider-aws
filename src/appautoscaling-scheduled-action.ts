// https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppautoscalingScheduledActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#end_time AppautoscalingScheduledAction#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#name AppautoscalingScheduledAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#resource_id AppautoscalingScheduledAction#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#schedule AppautoscalingScheduledAction#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#service_namespace AppautoscalingScheduledAction#service_namespace}
  */
  readonly serviceNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#start_time AppautoscalingScheduledAction#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#timezone AppautoscalingScheduledAction#timezone}
  */
  readonly timezone?: string;
  /**
  * scalable_target_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}
  */
  readonly scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction[];
}
export interface AppautoscalingScheduledActionScalableTargetAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#max_capacity AppautoscalingScheduledAction#max_capacity}
  */
  readonly maxCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#min_capacity AppautoscalingScheduledAction#min_capacity}
  */
  readonly minCapacity?: string;
}

function appautoscalingScheduledActionScalableTargetActionToTerraform(struct?: AppautoscalingScheduledActionScalableTargetAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action}
*/
export class AppautoscalingScheduledAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appautoscaling_scheduled_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppautoscalingScheduledActionConfig
  */
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
    this._timezone = config.timezone;
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

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension: string;
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string ) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // scalable_target_action - computed: false, optional: false, required: true
  private _scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction[];
  public get scalableTargetAction() {
    return this.interpolationForAttribute('scalable_target_action') as any;
  }
  public set scalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction[]) {
    this._scalableTargetAction = value;
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
      timezone: cdktf.stringToTerraform(this._timezone),
      scalable_target_action: cdktf.listMapper(appautoscalingScheduledActionScalableTargetActionToTerraform)(this._scalableTargetAction),
    };
  }
}
