// https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftScheduledActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#description RedshiftScheduledAction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#enable RedshiftScheduledAction#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#end_time RedshiftScheduledAction#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#iam_role RedshiftScheduledAction#iam_role}
  */
  readonly iamRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#name RedshiftScheduledAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#schedule RedshiftScheduledAction#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#start_time RedshiftScheduledAction#start_time}
  */
  readonly startTime?: string;
  /**
  * target_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#target_action RedshiftScheduledAction#target_action}
  */
  readonly targetAction: RedshiftScheduledActionTargetAction[];
}
export interface RedshiftScheduledActionTargetActionPauseCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
}

function redshiftScheduledActionTargetActionPauseClusterToTerraform(struct?: RedshiftScheduledActionTargetActionPauseCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
  }
}

export interface RedshiftScheduledActionTargetActionResizeCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#classic RedshiftScheduledAction#classic}
  */
  readonly classic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_type RedshiftScheduledAction#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#node_type RedshiftScheduledAction#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#number_of_nodes RedshiftScheduledAction#number_of_nodes}
  */
  readonly numberOfNodes?: number;
}

function redshiftScheduledActionTargetActionResizeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResizeCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classic: cdktf.booleanToTerraform(struct!.classic),
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
  }
}

export interface RedshiftScheduledActionTargetActionResumeCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
}

function redshiftScheduledActionTargetActionResumeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResumeCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
  }
}

export interface RedshiftScheduledActionTargetAction {
  /**
  * pause_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#pause_cluster RedshiftScheduledAction#pause_cluster}
  */
  readonly pauseCluster?: RedshiftScheduledActionTargetActionPauseCluster[];
  /**
  * resize_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resize_cluster RedshiftScheduledAction#resize_cluster}
  */
  readonly resizeCluster?: RedshiftScheduledActionTargetActionResizeCluster[];
  /**
  * resume_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resume_cluster RedshiftScheduledAction#resume_cluster}
  */
  readonly resumeCluster?: RedshiftScheduledActionTargetActionResumeCluster[];
}

function redshiftScheduledActionTargetActionToTerraform(struct?: RedshiftScheduledActionTargetAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pause_cluster: cdktf.listMapper(redshiftScheduledActionTargetActionPauseClusterToTerraform)(struct!.pauseCluster),
    resize_cluster: cdktf.listMapper(redshiftScheduledActionTargetActionResizeClusterToTerraform)(struct!.resizeCluster),
    resume_cluster: cdktf.listMapper(redshiftScheduledActionTargetActionResumeClusterToTerraform)(struct!.resumeCluster),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action}
*/
export class RedshiftScheduledAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_redshift_scheduled_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftScheduledActionConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftScheduledActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_scheduled_action',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enable = config.enable;
    this._endTime = config.endTime;
    this._iamRole = config.iamRole;
    this._name = config.name;
    this._schedule = config.schedule;
    this._startTime = config.startTime;
    this._targetAction = config.targetAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable;
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable ) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
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

  // iam_role - computed: false, optional: false, required: true
  private _iamRole: string;
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole
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

  // target_action - computed: false, optional: false, required: true
  private _targetAction: RedshiftScheduledActionTargetAction[];
  public get targetAction() {
    return this.interpolationForAttribute('target_action') as any;
  }
  public set targetAction(value: RedshiftScheduledActionTargetAction[]) {
    this._targetAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetActionInput() {
    return this._targetAction
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable: cdktf.booleanToTerraform(this._enable),
      end_time: cdktf.stringToTerraform(this._endTime),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      start_time: cdktf.stringToTerraform(this._startTime),
      target_action: cdktf.listMapper(redshiftScheduledActionTargetActionToTerraform)(this._targetAction),
    };
  }
}
