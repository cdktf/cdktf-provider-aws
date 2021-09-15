// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#description SsmMaintenanceWindowTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_concurrency SsmMaintenanceWindowTask#max_concurrency}
  */
  readonly maxConcurrency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_errors SsmMaintenanceWindowTask#max_errors}
  */
  readonly maxErrors: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#priority SsmMaintenanceWindowTask#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_arn SsmMaintenanceWindowTask#task_arn}
  */
  readonly taskArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_type SsmMaintenanceWindowTask#task_type}
  */
  readonly taskType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#window_id SsmMaintenanceWindowTask#window_id}
  */
  readonly windowId: string;
  /**
  * targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#targets SsmMaintenanceWindowTask#targets}
  */
  readonly targets?: SsmMaintenanceWindowTaskTargets[];
  /**
  * task_invocation_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
  */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters[];
}
export interface SsmMaintenanceWindowTaskTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#key SsmMaintenanceWindowTask#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

function ssmMaintenanceWindowTaskTargetsToTerraform(struct?: SsmMaintenanceWindowTaskTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
  */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
}

function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform)(struct!.parameter),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#client_context SsmMaintenanceWindowTask#client_context}
  */
  readonly clientContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#payload SsmMaintenanceWindowTask#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#qualifier SsmMaintenanceWindowTask#qualifier}
  */
  readonly qualifier?: string;
}

function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_context: cdktf.stringToTerraform(struct!.clientContext),
    payload: cdktf.stringToTerraform(struct!.payload),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}
  */
  readonly cloudwatchLogGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}
  */
  readonly cloudwatchOutputEnabled?: boolean | cdktf.IResolvable;
}

function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_log_group_name: cdktf.stringToTerraform(struct!.cloudwatchLogGroupName),
    cloudwatch_output_enabled: cdktf.booleanToTerraform(struct!.cloudwatchOutputEnabled),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_arn SsmMaintenanceWindowTask#notification_arn}
  */
  readonly notificationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_events SsmMaintenanceWindowTask#notification_events}
  */
  readonly notificationEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_type SsmMaintenanceWindowTask#notification_type}
  */
  readonly notificationType?: string;
}

function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notification_arn: cdktf.stringToTerraform(struct!.notificationArn),
    notification_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notificationEvents),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#comment SsmMaintenanceWindowTask#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash SsmMaintenanceWindowTask#document_hash}
  */
  readonly documentHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash_type SsmMaintenanceWindowTask#document_hash_type}
  */
  readonly documentHashType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}
  */
  readonly outputS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}
  */
  readonly outputS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * cloudwatch_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}
  */
  readonly cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig[];
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_config SsmMaintenanceWindowTask#notification_config}
  */
  readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig[];
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
  */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
}

function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    document_hash: cdktf.stringToTerraform(struct!.documentHash),
    document_hash_type: cdktf.stringToTerraform(struct!.documentHashType),
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    output_s3_bucket: cdktf.stringToTerraform(struct!.outputS3Bucket),
    output_s3_key_prefix: cdktf.stringToTerraform(struct!.outputS3KeyPrefix),
    service_role_arn: cdktf.stringToTerraform(struct!.serviceRoleArn),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    cloudwatch_config: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform)(struct!.cloudwatchConfig),
    notification_config: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform)(struct!.notificationConfig),
    parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform)(struct!.parameter),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#input SsmMaintenanceWindowTask#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
}

function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
  /**
  * automation_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#automation_parameters SsmMaintenanceWindowTask#automation_parameters}
  */
  readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters[];
  /**
  * lambda_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}
  */
  readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters[];
  /**
  * run_command_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}
  */
  readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters[];
  /**
  * step_functions_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}
  */
  readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters[];
}

function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automation_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform)(struct!.automationParameters),
    lambda_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform)(struct!.lambdaParameters),
    run_command_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform)(struct!.runCommandParameters),
    step_functions_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform)(struct!.stepFunctionsParameters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task}
*/
export class SsmMaintenanceWindowTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_maintenance_window_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmMaintenanceWindowTaskConfig
  */
  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window_task',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._priority = config.priority;
    this._serviceRoleArn = config.serviceRoleArn;
    this._taskArn = config.taskArn;
    this._taskType = config.taskType;
    this._windowId = config.windowId;
    this._targets = config.targets;
    this._taskInvocationParameters = config.taskInvocationParameters;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency: string;
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string) {
    this._maxConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency
  }

  // max_errors - computed: false, optional: false, required: true
  private _maxErrors: string;
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string) {
    this._maxErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // service_role_arn - computed: true, optional: true, required: false
  private _serviceRoleArn?: string;
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn
  }

  // task_arn - computed: false, optional: false, required: true
  private _taskArn: string;
  public get taskArn() {
    return this.getStringAttribute('task_arn');
  }
  public set taskArn(value: string) {
    this._taskArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskArnInput() {
    return this._taskArn
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType: string;
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId: string;
  public get windowId() {
    return this.getStringAttribute('window_id');
  }
  public set windowId(value: string) {
    this._windowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowIdInput() {
    return this._windowId
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: SsmMaintenanceWindowTaskTargets[];
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmMaintenanceWindowTaskTargets[] ) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // task_invocation_parameters - computed: false, optional: true, required: false
  private _taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters[];
  public get taskInvocationParameters() {
    return this.interpolationForAttribute('task_invocation_parameters') as any;
  }
  public set taskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters[] ) {
    this._taskInvocationParameters = value;
  }
  public resetTaskInvocationParameters() {
    this._taskInvocationParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInvocationParametersInput() {
    return this._taskInvocationParameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      max_errors: cdktf.stringToTerraform(this._maxErrors),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      task_arn: cdktf.stringToTerraform(this._taskArn),
      task_type: cdktf.stringToTerraform(this._taskType),
      window_id: cdktf.stringToTerraform(this._windowId),
      targets: cdktf.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform)(this._targets),
      task_invocation_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform)(this._taskInvocationParameters),
    };
  }
}
