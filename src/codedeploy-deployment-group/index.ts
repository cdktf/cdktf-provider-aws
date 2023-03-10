// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodedeployDeploymentGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}
  */
  readonly autoscalingGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}
  */
  readonly deploymentConfigName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}
  */
  readonly deploymentGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}
  */
  readonly serviceRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * alarm_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}
  */
  readonly alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration;
  /**
  * auto_rollback_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration;
  /**
  * blue_green_deployment_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}
  */
  readonly blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig;
  /**
  * deployment_style block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}
  */
  readonly deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle;
  /**
  * ec2_tag_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
  */
  readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[] | cdktf.IResolvable;
  /**
  * ec2_tag_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}
  */
  readonly ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[] | cdktf.IResolvable;
  /**
  * ecs_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ecs_service CodedeployDeploymentGroup#ecs_service}
  */
  readonly ecsService?: CodedeployDeploymentGroupEcsService;
  /**
  * load_balancer_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}
  */
  readonly loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo;
  /**
  * on_premises_instance_tag_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}
  */
  readonly onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | cdktf.IResolvable;
  /**
  * trigger_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}
  */
  readonly triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[] | cdktf.IResolvable;
}
export interface CodedeployDeploymentGroupAlarmConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}
  */
  readonly alarms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}
  */
  readonly ignorePollAlarmFailure?: boolean | cdktf.IResolvable;
}

export function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct?: CodedeployDeploymentGroupAlarmConfigurationOutputReference | CodedeployDeploymentGroupAlarmConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarms),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ignore_poll_alarm_failure: cdktf.booleanToTerraform(struct!.ignorePollAlarmFailure),
  }
}

export class CodedeployDeploymentGroupAlarmConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupAlarmConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignorePollAlarmFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePollAlarmFailure = this._ignorePollAlarmFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupAlarmConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms = undefined;
      this._enabled = undefined;
      this._ignorePollAlarmFailure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms = value.alarms;
      this._enabled = value.enabled;
      this._ignorePollAlarmFailure = value.ignorePollAlarmFailure;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return cdktf.Fn.tolist(this.getListAttribute('alarms'));
  }
  public set alarms(value: string[]) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ignore_poll_alarm_failure - computed: false, optional: true, required: false
  private _ignorePollAlarmFailure?: boolean | cdktf.IResolvable; 
  public get ignorePollAlarmFailure() {
    return this.getBooleanAttribute('ignore_poll_alarm_failure');
  }
  public set ignorePollAlarmFailure(value: boolean | cdktf.IResolvable) {
    this._ignorePollAlarmFailure = value;
  }
  public resetIgnorePollAlarmFailure() {
    this._ignorePollAlarmFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePollAlarmFailureInput() {
    return this._ignorePollAlarmFailure;
  }
}
export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}
  */
  readonly events?: string[];
}

export function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct?: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference | CodedeployDeploymentGroupAutoRollbackConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
  }
}

export class CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupAutoRollbackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupAutoRollbackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._events = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._events = value.events;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}
  */
  readonly actionOnTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}
  */
  readonly waitTimeInMinutes?: number;
}

export function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_timeout: cdktf.stringToTerraform(struct!.actionOnTimeout),
    wait_time_in_minutes: cdktf.numberToTerraform(struct!.waitTimeInMinutes),
  }
}

export class CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnTimeout = this._actionOnTimeout;
    }
    if (this._waitTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeInMinutes = this._waitTimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionOnTimeout = undefined;
      this._waitTimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionOnTimeout = value.actionOnTimeout;
      this._waitTimeInMinutes = value.waitTimeInMinutes;
    }
  }

  // action_on_timeout - computed: false, optional: true, required: false
  private _actionOnTimeout?: string; 
  public get actionOnTimeout() {
    return this.getStringAttribute('action_on_timeout');
  }
  public set actionOnTimeout(value: string) {
    this._actionOnTimeout = value;
  }
  public resetActionOnTimeout() {
    this._actionOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnTimeoutInput() {
    return this._actionOnTimeout;
  }

  // wait_time_in_minutes - computed: false, optional: true, required: false
  private _waitTimeInMinutes?: number; 
  public get waitTimeInMinutes() {
    return this.getNumberAttribute('wait_time_in_minutes');
  }
  public set waitTimeInMinutes(value: number) {
    this._waitTimeInMinutes = value;
  }
  public resetWaitTimeInMinutes() {
    this._waitTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInMinutesInput() {
    return this._waitTimeInMinutes;
  }
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}
  */
  readonly action?: string;
}

export function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export class CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}
  */
  readonly terminationWaitTimeInMinutes?: number;
}

export function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    termination_wait_time_in_minutes: cdktf.numberToTerraform(struct!.terminationWaitTimeInMinutes),
  }
}

export class CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._terminationWaitTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationWaitTimeInMinutes = this._terminationWaitTimeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._terminationWaitTimeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._terminationWaitTimeInMinutes = value.terminationWaitTimeInMinutes;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // termination_wait_time_in_minutes - computed: false, optional: true, required: false
  private _terminationWaitTimeInMinutes?: number; 
  public get terminationWaitTimeInMinutes() {
    return this.getNumberAttribute('termination_wait_time_in_minutes');
  }
  public set terminationWaitTimeInMinutes(value: number) {
    this._terminationWaitTimeInMinutes = value;
  }
  public resetTerminationWaitTimeInMinutes() {
    this._terminationWaitTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationWaitTimeInMinutesInput() {
    return this._terminationWaitTimeInMinutes;
  }
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
  /**
  * deployment_ready_option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}
  */
  readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
  /**
  * green_fleet_provisioning_option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}
  */
  readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
  /**
  * terminate_blue_instances_on_deployment_success block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}
  */
  readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
}

export function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_ready_option: codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct!.deploymentReadyOption),
    green_fleet_provisioning_option: codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct!.greenFleetProvisioningOption),
    terminate_blue_instances_on_deployment_success: codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct!.terminateBlueInstancesOnDeploymentSuccess),
  }
}

export class CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentReadyOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentReadyOption = this._deploymentReadyOption?.internalValue;
    }
    if (this._greenFleetProvisioningOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenFleetProvisioningOption = this._greenFleetProvisioningOption?.internalValue;
    }
    if (this._terminateBlueInstancesOnDeploymentSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateBlueInstancesOnDeploymentSuccess = this._terminateBlueInstancesOnDeploymentSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentReadyOption.internalValue = undefined;
      this._greenFleetProvisioningOption.internalValue = undefined;
      this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentReadyOption.internalValue = value.deploymentReadyOption;
      this._greenFleetProvisioningOption.internalValue = value.greenFleetProvisioningOption;
      this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value.terminateBlueInstancesOnDeploymentSuccess;
    }
  }

  // deployment_ready_option - computed: false, optional: true, required: false
  private _deploymentReadyOption = new CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference(this, "deployment_ready_option");
  public get deploymentReadyOption() {
    return this._deploymentReadyOption;
  }
  public putDeploymentReadyOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption) {
    this._deploymentReadyOption.internalValue = value;
  }
  public resetDeploymentReadyOption() {
    this._deploymentReadyOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentReadyOptionInput() {
    return this._deploymentReadyOption.internalValue;
  }

  // green_fleet_provisioning_option - computed: false, optional: true, required: false
  private _greenFleetProvisioningOption = new CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference(this, "green_fleet_provisioning_option");
  public get greenFleetProvisioningOption() {
    return this._greenFleetProvisioningOption;
  }
  public putGreenFleetProvisioningOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption) {
    this._greenFleetProvisioningOption.internalValue = value;
  }
  public resetGreenFleetProvisioningOption() {
    this._greenFleetProvisioningOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenFleetProvisioningOptionInput() {
    return this._greenFleetProvisioningOption.internalValue;
  }

  // terminate_blue_instances_on_deployment_success - computed: false, optional: true, required: false
  private _terminateBlueInstancesOnDeploymentSuccess = new CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference(this, "terminate_blue_instances_on_deployment_success");
  public get terminateBlueInstancesOnDeploymentSuccess() {
    return this._terminateBlueInstancesOnDeploymentSuccess;
  }
  public putTerminateBlueInstancesOnDeploymentSuccess(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess) {
    this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value;
  }
  public resetTerminateBlueInstancesOnDeploymentSuccess() {
    this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateBlueInstancesOnDeploymentSuccessInput() {
    return this._terminateBlueInstancesOnDeploymentSuccess.internalValue;
  }
}
export interface CodedeployDeploymentGroupDeploymentStyle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}
  */
  readonly deploymentOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}
  */
  readonly deploymentType?: string;
}

export function codedeployDeploymentGroupDeploymentStyleToTerraform(struct?: CodedeployDeploymentGroupDeploymentStyleOutputReference | CodedeployDeploymentGroupDeploymentStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_option: cdktf.stringToTerraform(struct!.deploymentOption),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
  }
}

export class CodedeployDeploymentGroupDeploymentStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupDeploymentStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentOption = this._deploymentOption;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupDeploymentStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentOption = undefined;
      this._deploymentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentOption = value.deploymentOption;
      this._deploymentType = value.deploymentType;
    }
  }

  // deployment_option - computed: false, optional: true, required: false
  private _deploymentOption?: string; 
  public get deploymentOption() {
    return this.getStringAttribute('deployment_option');
  }
  public set deploymentOption(value: string) {
    this._deploymentOption = value;
  }
  public resetDeploymentOption() {
    this._deploymentOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentOptionInput() {
    return this._deploymentOption;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }
}
export interface CodedeployDeploymentGroupEc2TagFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}
  */
  readonly value?: string;
}

export function codedeployDeploymentGroupEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CodedeployDeploymentGroupEc2TagFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupEc2TagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupEc2TagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CodedeployDeploymentGroupEc2TagFilterList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupEc2TagFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupEc2TagFilterOutputReference {
    return new CodedeployDeploymentGroupEc2TagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}
  */
  readonly value?: string;
}

export function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupEc2TagSetEc2TagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupEc2TagSetEc2TagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CodedeployDeploymentGroupEc2TagSetEc2TagFilterList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupEc2TagSetEc2TagFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference {
    return new CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodedeployDeploymentGroupEc2TagSet {
  /**
  * ec2_tag_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
  */
  readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[] | cdktf.IResolvable;
}

export function codedeployDeploymentGroupEc2TagSetToTerraform(struct?: CodedeployDeploymentGroupEc2TagSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform, true)(struct!.ec2TagFilter),
  }
}

export class CodedeployDeploymentGroupEc2TagSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupEc2TagSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2TagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2TagFilter = this._ec2TagFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupEc2TagSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ec2TagFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ec2TagFilter.internalValue = value.ec2TagFilter;
    }
  }

  // ec2_tag_filter - computed: false, optional: true, required: false
  private _ec2TagFilter = new CodedeployDeploymentGroupEc2TagSetEc2TagFilterList(this, "ec2_tag_filter", true);
  public get ec2TagFilter() {
    return this._ec2TagFilter;
  }
  public putEc2TagFilter(value: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[] | cdktf.IResolvable) {
    this._ec2TagFilter.internalValue = value;
  }
  public resetEc2TagFilter() {
    this._ec2TagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagFilterInput() {
    return this._ec2TagFilter.internalValue;
  }
}

export class CodedeployDeploymentGroupEc2TagSetList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupEc2TagSet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupEc2TagSetOutputReference {
    return new CodedeployDeploymentGroupEc2TagSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodedeployDeploymentGroupEcsService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}
  */
  readonly serviceName: string;
}

export function codedeployDeploymentGroupEcsServiceToTerraform(struct?: CodedeployDeploymentGroupEcsServiceOutputReference | CodedeployDeploymentGroupEcsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class CodedeployDeploymentGroupEcsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupEcsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupEcsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._serviceName = value.serviceName;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}
  */
  readonly name?: string;
}

export function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoElbInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoElbInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoElbInfoList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference {
    return new CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}
  */
  readonly name?: string;
}

export function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference {
    return new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}
  */
  readonly listenerArns: string[];
}

export function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerArns),
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerArns = this._listenerArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listenerArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listenerArns = value.listenerArns;
    }
  }

  // listener_arns - computed: false, optional: false, required: true
  private _listenerArns?: string[]; 
  public get listenerArns() {
    return cdktf.Fn.tolist(this.getListAttribute('listener_arns'));
  }
  public set listenerArns(value: string[]) {
    this._listenerArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnsInput() {
    return this._listenerArns;
  }
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}
  */
  readonly name: string;
}

export function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference {
    return new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}
  */
  readonly listenerArns: string[];
}

export function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerArns),
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerArns = this._listenerArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listenerArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listenerArns = value.listenerArns;
    }
  }

  // listener_arns - computed: false, optional: false, required: true
  private _listenerArns?: string[]; 
  public get listenerArns() {
    return cdktf.Fn.tolist(this.getListAttribute('listener_arns'));
  }
  public set listenerArns(value: string[]) {
    this._listenerArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnsInput() {
    return this._listenerArns;
  }
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
  /**
  * prod_traffic_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}
  */
  readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
  /**
  * target_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group CodedeployDeploymentGroup#target_group}
  */
  readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[] | cdktf.IResolvable;
  /**
  * test_traffic_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}
  */
  readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
}

export function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prod_traffic_route: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct!.prodTrafficRoute),
    target_group: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform, true)(struct!.targetGroup),
    test_traffic_route: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct!.testTrafficRoute),
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prodTrafficRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prodTrafficRoute = this._prodTrafficRoute?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    if (this._testTrafficRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.testTrafficRoute = this._testTrafficRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prodTrafficRoute.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
      this._testTrafficRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prodTrafficRoute.internalValue = value.prodTrafficRoute;
      this._targetGroup.internalValue = value.targetGroup;
      this._testTrafficRoute.internalValue = value.testTrafficRoute;
    }
  }

  // prod_traffic_route - computed: false, optional: false, required: true
  private _prodTrafficRoute = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference(this, "prod_traffic_route");
  public get prodTrafficRoute() {
    return this._prodTrafficRoute;
  }
  public putProdTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute) {
    this._prodTrafficRoute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prodTrafficRouteInput() {
    return this._prodTrafficRoute.internalValue;
  }

  // target_group - computed: false, optional: false, required: true
  private _targetGroup = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList(this, "target_group", false);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[] | cdktf.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }

  // test_traffic_route - computed: false, optional: true, required: false
  private _testTrafficRoute = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference(this, "test_traffic_route");
  public get testTrafficRoute() {
    return this._testTrafficRoute;
  }
  public putTestTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute) {
    this._testTrafficRoute.internalValue = value;
  }
  public resetTestTrafficRoute() {
    this._testTrafficRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTrafficRouteInput() {
    return this._testTrafficRoute.internalValue;
  }
}
export interface CodedeployDeploymentGroupLoadBalancerInfo {
  /**
  * elb_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#elb_info CodedeployDeploymentGroup#elb_info}
  */
  readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | cdktf.IResolvable;
  /**
  * target_group_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_info CodedeployDeploymentGroup#target_group_info}
  */
  readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | cdktf.IResolvable;
  /**
  * target_group_pair_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}
  */
  readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
}

export function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elb_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform, true)(struct!.elbInfo),
    target_group_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform, true)(struct!.targetGroupInfo),
    target_group_pair_info: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct!.targetGroupPairInfo),
  }
}

export class CodedeployDeploymentGroupLoadBalancerInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodedeployDeploymentGroupLoadBalancerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elbInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbInfo = this._elbInfo?.internalValue;
    }
    if (this._targetGroupInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupInfo = this._targetGroupInfo?.internalValue;
    }
    if (this._targetGroupPairInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupPairInfo = this._targetGroupPairInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elbInfo.internalValue = undefined;
      this._targetGroupInfo.internalValue = undefined;
      this._targetGroupPairInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elbInfo.internalValue = value.elbInfo;
      this._targetGroupInfo.internalValue = value.targetGroupInfo;
      this._targetGroupPairInfo.internalValue = value.targetGroupPairInfo;
    }
  }

  // elb_info - computed: false, optional: true, required: false
  private _elbInfo = new CodedeployDeploymentGroupLoadBalancerInfoElbInfoList(this, "elb_info", true);
  public get elbInfo() {
    return this._elbInfo;
  }
  public putElbInfo(value: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | cdktf.IResolvable) {
    this._elbInfo.internalValue = value;
  }
  public resetElbInfo() {
    this._elbInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInfoInput() {
    return this._elbInfo.internalValue;
  }

  // target_group_info - computed: false, optional: true, required: false
  private _targetGroupInfo = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList(this, "target_group_info", true);
  public get targetGroupInfo() {
    return this._targetGroupInfo;
  }
  public putTargetGroupInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | cdktf.IResolvable) {
    this._targetGroupInfo.internalValue = value;
  }
  public resetTargetGroupInfo() {
    this._targetGroupInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInfoInput() {
    return this._targetGroupInfo.internalValue;
  }

  // target_group_pair_info - computed: false, optional: true, required: false
  private _targetGroupPairInfo = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference(this, "target_group_pair_info");
  public get targetGroupPairInfo() {
    return this._targetGroupPairInfo;
  }
  public putTargetGroupPairInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo) {
    this._targetGroupPairInfo.internalValue = value;
  }
  public resetTargetGroupPairInfo() {
    this._targetGroupPairInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupPairInfoInput() {
    return this._targetGroupPairInfo.internalValue;
  }
}
export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}
  */
  readonly value?: string;
}

export function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupOnPremisesInstanceTagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CodedeployDeploymentGroupOnPremisesInstanceTagFilterList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference {
    return new CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodedeployDeploymentGroupTriggerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}
  */
  readonly triggerEvents: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}
  */
  readonly triggerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}
  */
  readonly triggerTargetArn: string;
}

export function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct?: CodedeployDeploymentGroupTriggerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trigger_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggerEvents),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
    trigger_target_arn: cdktf.stringToTerraform(struct!.triggerTargetArn),
  }
}

export class CodedeployDeploymentGroupTriggerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodedeployDeploymentGroupTriggerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggerEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerEvents = this._triggerEvents;
    }
    if (this._triggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerName = this._triggerName;
    }
    if (this._triggerTargetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerTargetArn = this._triggerTargetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentGroupTriggerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._triggerEvents = undefined;
      this._triggerName = undefined;
      this._triggerTargetArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._triggerEvents = value.triggerEvents;
      this._triggerName = value.triggerName;
      this._triggerTargetArn = value.triggerTargetArn;
    }
  }

  // trigger_events - computed: false, optional: false, required: true
  private _triggerEvents?: string[]; 
  public get triggerEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('trigger_events'));
  }
  public set triggerEvents(value: string[]) {
    this._triggerEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerEventsInput() {
    return this._triggerEvents;
  }

  // trigger_name - computed: false, optional: false, required: true
  private _triggerName?: string; 
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }
  public set triggerName(value: string) {
    this._triggerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNameInput() {
    return this._triggerName;
  }

  // trigger_target_arn - computed: false, optional: false, required: true
  private _triggerTargetArn?: string; 
  public get triggerTargetArn() {
    return this.getStringAttribute('trigger_target_arn');
  }
  public set triggerTargetArn(value: string) {
    this._triggerTargetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTargetArnInput() {
    return this._triggerTargetArn;
  }
}

export class CodedeployDeploymentGroupTriggerConfigurationList extends cdktf.ComplexList {
  public internalValue? : CodedeployDeploymentGroupTriggerConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodedeployDeploymentGroupTriggerConfigurationOutputReference {
    return new CodedeployDeploymentGroupTriggerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group aws_codedeploy_deployment_group}
*/
export class CodedeployDeploymentGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codedeploy_deployment_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group aws_codedeploy_deployment_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodedeployDeploymentGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_deployment_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._autoscalingGroups = config.autoscalingGroups;
    this._deploymentConfigName = config.deploymentConfigName;
    this._deploymentGroupName = config.deploymentGroupName;
    this._id = config.id;
    this._serviceRoleArn = config.serviceRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._alarmConfiguration.internalValue = config.alarmConfiguration;
    this._autoRollbackConfiguration.internalValue = config.autoRollbackConfiguration;
    this._blueGreenDeploymentConfig.internalValue = config.blueGreenDeploymentConfig;
    this._deploymentStyle.internalValue = config.deploymentStyle;
    this._ec2TagFilter.internalValue = config.ec2TagFilter;
    this._ec2TagSet.internalValue = config.ec2TagSet;
    this._ecsService.internalValue = config.ecsService;
    this._loadBalancerInfo.internalValue = config.loadBalancerInfo;
    this._onPremisesInstanceTagFilter.internalValue = config.onPremisesInstanceTagFilter;
    this._triggerConfiguration.internalValue = config.triggerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_groups - computed: false, optional: true, required: false
  private _autoscalingGroups?: string[]; 
  public get autoscalingGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('autoscaling_groups'));
  }
  public set autoscalingGroups(value: string[]) {
    this._autoscalingGroups = value;
  }
  public resetAutoscalingGroups() {
    this._autoscalingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupsInput() {
    return this._autoscalingGroups;
  }

  // compute_platform - computed: true, optional: false, required: false
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }

  // deployment_config_name - computed: false, optional: true, required: false
  private _deploymentConfigName?: string; 
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }
  public set deploymentConfigName(value: string) {
    this._deploymentConfigName = value;
  }
  public resetDeploymentConfigName() {
    this._deploymentConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigNameInput() {
    return this._deploymentConfigName;
  }

  // deployment_group_id - computed: true, optional: false, required: false
  public get deploymentGroupId() {
    return this.getStringAttribute('deployment_group_id');
  }

  // deployment_group_name - computed: false, optional: false, required: true
  private _deploymentGroupName?: string; 
  public get deploymentGroupName() {
    return this.getStringAttribute('deployment_group_name');
  }
  public set deploymentGroupName(value: string) {
    this._deploymentGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupNameInput() {
    return this._deploymentGroupName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // alarm_configuration - computed: false, optional: true, required: false
  private _alarmConfiguration = new CodedeployDeploymentGroupAlarmConfigurationOutputReference(this, "alarm_configuration");
  public get alarmConfiguration() {
    return this._alarmConfiguration;
  }
  public putAlarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration) {
    this._alarmConfiguration.internalValue = value;
  }
  public resetAlarmConfiguration() {
    this._alarmConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmConfigurationInput() {
    return this._alarmConfiguration.internalValue;
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration = new CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // blue_green_deployment_config - computed: false, optional: true, required: false
  private _blueGreenDeploymentConfig = new CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference(this, "blue_green_deployment_config");
  public get blueGreenDeploymentConfig() {
    return this._blueGreenDeploymentConfig;
  }
  public putBlueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig) {
    this._blueGreenDeploymentConfig.internalValue = value;
  }
  public resetBlueGreenDeploymentConfig() {
    this._blueGreenDeploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenDeploymentConfigInput() {
    return this._blueGreenDeploymentConfig.internalValue;
  }

  // deployment_style - computed: false, optional: true, required: false
  private _deploymentStyle = new CodedeployDeploymentGroupDeploymentStyleOutputReference(this, "deployment_style");
  public get deploymentStyle() {
    return this._deploymentStyle;
  }
  public putDeploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle) {
    this._deploymentStyle.internalValue = value;
  }
  public resetDeploymentStyle() {
    this._deploymentStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStyleInput() {
    return this._deploymentStyle.internalValue;
  }

  // ec2_tag_filter - computed: false, optional: true, required: false
  private _ec2TagFilter = new CodedeployDeploymentGroupEc2TagFilterList(this, "ec2_tag_filter", true);
  public get ec2TagFilter() {
    return this._ec2TagFilter;
  }
  public putEc2TagFilter(value: CodedeployDeploymentGroupEc2TagFilter[] | cdktf.IResolvable) {
    this._ec2TagFilter.internalValue = value;
  }
  public resetEc2TagFilter() {
    this._ec2TagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagFilterInput() {
    return this._ec2TagFilter.internalValue;
  }

  // ec2_tag_set - computed: false, optional: true, required: false
  private _ec2TagSet = new CodedeployDeploymentGroupEc2TagSetList(this, "ec2_tag_set", true);
  public get ec2TagSet() {
    return this._ec2TagSet;
  }
  public putEc2TagSet(value: CodedeployDeploymentGroupEc2TagSet[] | cdktf.IResolvable) {
    this._ec2TagSet.internalValue = value;
  }
  public resetEc2TagSet() {
    this._ec2TagSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagSetInput() {
    return this._ec2TagSet.internalValue;
  }

  // ecs_service - computed: false, optional: true, required: false
  private _ecsService = new CodedeployDeploymentGroupEcsServiceOutputReference(this, "ecs_service");
  public get ecsService() {
    return this._ecsService;
  }
  public putEcsService(value: CodedeployDeploymentGroupEcsService) {
    this._ecsService.internalValue = value;
  }
  public resetEcsService() {
    this._ecsService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsServiceInput() {
    return this._ecsService.internalValue;
  }

  // load_balancer_info - computed: false, optional: true, required: false
  private _loadBalancerInfo = new CodedeployDeploymentGroupLoadBalancerInfoOutputReference(this, "load_balancer_info");
  public get loadBalancerInfo() {
    return this._loadBalancerInfo;
  }
  public putLoadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo) {
    this._loadBalancerInfo.internalValue = value;
  }
  public resetLoadBalancerInfo() {
    this._loadBalancerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInfoInput() {
    return this._loadBalancerInfo.internalValue;
  }

  // on_premises_instance_tag_filter - computed: false, optional: true, required: false
  private _onPremisesInstanceTagFilter = new CodedeployDeploymentGroupOnPremisesInstanceTagFilterList(this, "on_premises_instance_tag_filter", true);
  public get onPremisesInstanceTagFilter() {
    return this._onPremisesInstanceTagFilter;
  }
  public putOnPremisesInstanceTagFilter(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | cdktf.IResolvable) {
    this._onPremisesInstanceTagFilter.internalValue = value;
  }
  public resetOnPremisesInstanceTagFilter() {
    this._onPremisesInstanceTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremisesInstanceTagFilterInput() {
    return this._onPremisesInstanceTagFilter.internalValue;
  }

  // trigger_configuration - computed: false, optional: true, required: false
  private _triggerConfiguration = new CodedeployDeploymentGroupTriggerConfigurationList(this, "trigger_configuration", true);
  public get triggerConfiguration() {
    return this._triggerConfiguration;
  }
  public putTriggerConfiguration(value: CodedeployDeploymentGroupTriggerConfiguration[] | cdktf.IResolvable) {
    this._triggerConfiguration.internalValue = value;
  }
  public resetTriggerConfiguration() {
    this._triggerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConfigurationInput() {
    return this._triggerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      autoscaling_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoscalingGroups),
      deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
      deployment_group_name: cdktf.stringToTerraform(this._deploymentGroupName),
      id: cdktf.stringToTerraform(this._id),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      alarm_configuration: codedeployDeploymentGroupAlarmConfigurationToTerraform(this._alarmConfiguration.internalValue),
      auto_rollback_configuration: codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(this._autoRollbackConfiguration.internalValue),
      blue_green_deployment_config: codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(this._blueGreenDeploymentConfig.internalValue),
      deployment_style: codedeployDeploymentGroupDeploymentStyleToTerraform(this._deploymentStyle.internalValue),
      ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagFilterToTerraform, true)(this._ec2TagFilter.internalValue),
      ec2_tag_set: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetToTerraform, true)(this._ec2TagSet.internalValue),
      ecs_service: codedeployDeploymentGroupEcsServiceToTerraform(this._ecsService.internalValue),
      load_balancer_info: codedeployDeploymentGroupLoadBalancerInfoToTerraform(this._loadBalancerInfo.internalValue),
      on_premises_instance_tag_filter: cdktf.listMapper(codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform, true)(this._onPremisesInstanceTagFilter.internalValue),
      trigger_configuration: cdktf.listMapper(codedeployDeploymentGroupTriggerConfigurationToTerraform, true)(this._triggerConfiguration.internalValue),
    };
  }
}
