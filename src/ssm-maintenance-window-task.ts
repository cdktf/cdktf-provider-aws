// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowTaskConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly maxConcurrency: string;
  readonly maxErrors: string;
  readonly name?: string;
  readonly priority?: number;
  readonly serviceRoleArn: string;
  readonly taskArn: string;
  readonly taskType: string;
  readonly windowId: string;
  /** logging_info block */
  readonly loggingInfo?: SsmMaintenanceWindowTaskLoggingInfo[];
  /** targets block */
  readonly targets: SsmMaintenanceWindowTaskTargets[];
  /** task_invocation_parameters block */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters[];
  /** task_parameters block */
  readonly taskParameters?: SsmMaintenanceWindowTaskTaskParameters[];
}
export interface SsmMaintenanceWindowTaskLoggingInfo {
  readonly s3BucketName: string;
  readonly s3BucketPrefix?: string;
  readonly s3Region: string;
}
export interface SsmMaintenanceWindowTaskTargets {
  readonly key: string;
  readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
  readonly name: string;
  readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
  readonly documentVersion?: string;
  /** parameter block */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
  readonly clientContext?: string;
  readonly payload?: string;
  readonly qualifier?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
  readonly notificationArn?: string;
  readonly notificationEvents?: string[];
  readonly notificationType?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
  readonly name: string;
  readonly values: string[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
  readonly comment?: string;
  readonly documentHash?: string;
  readonly documentHashType?: string;
  readonly outputS3Bucket?: string;
  readonly outputS3KeyPrefix?: string;
  readonly serviceRoleArn?: string;
  readonly timeoutSeconds?: number;
  /** notification_config block */
  readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig[];
  /** parameter block */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
  readonly input?: string;
  readonly name?: string;
}
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
  /** automation_parameters block */
  readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters[];
  /** lambda_parameters block */
  readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters[];
  /** run_command_parameters block */
  readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters[];
  /** step_functions_parameters block */
  readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters[];
}
export interface SsmMaintenanceWindowTaskTaskParameters {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class SsmMaintenanceWindowTask extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._loggingInfo = config.loggingInfo;
    this._targets = config.targets;
    this._taskInvocationParameters = config.taskInvocationParameters;
    this._taskParameters = config.taskParameters;
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

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn: string;
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
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

  // logging_info - computed: false, optional: true, required: false
  private _loggingInfo?: SsmMaintenanceWindowTaskLoggingInfo[];
  public get loggingInfo() {
    return this.interpolationForAttribute('logging_info') as any;
  }
  public set loggingInfo(value: SsmMaintenanceWindowTaskLoggingInfo[] ) {
    this._loggingInfo = value;
  }
  public resetLoggingInfo() {
    this._loggingInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInfoInput() {
    return this._loggingInfo
  }

  // targets - computed: false, optional: false, required: true
  private _targets: SsmMaintenanceWindowTaskTargets[];
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmMaintenanceWindowTaskTargets[]) {
    this._targets = value;
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

  // task_parameters - computed: false, optional: true, required: false
  private _taskParameters?: SsmMaintenanceWindowTaskTaskParameters[];
  public get taskParameters() {
    return this.interpolationForAttribute('task_parameters') as any;
  }
  public set taskParameters(value: SsmMaintenanceWindowTaskTaskParameters[] ) {
    this._taskParameters = value;
  }
  public resetTaskParameters() {
    this._taskParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParametersInput() {
    return this._taskParameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      max_concurrency: this._maxConcurrency,
      max_errors: this._maxErrors,
      name: this._name,
      priority: this._priority,
      service_role_arn: this._serviceRoleArn,
      task_arn: this._taskArn,
      task_type: this._taskType,
      window_id: this._windowId,
      logging_info: this._loggingInfo,
      targets: this._targets,
      task_invocation_parameters: this._taskInvocationParameters,
      task_parameters: this._taskParameters,
    };
  }
}
