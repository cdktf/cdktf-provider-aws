// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodedeployDeploymentGroupConfig extends cdktf.TerraformMetaArguments {
  readonly appName: string;
  readonly autoscalingGroups?: string[];
  readonly deploymentConfigName?: string;
  readonly deploymentGroupName: string;
  readonly serviceRoleArn: string;
  /** alarm_configuration block */
  readonly alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration[];
  /** auto_rollback_configuration block */
  readonly autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration[];
  /** blue_green_deployment_config block */
  readonly blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig[];
  /** deployment_style block */
  readonly deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle[];
  /** ec2_tag_filter block */
  readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[];
  /** ec2_tag_set block */
  readonly ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[];
  /** ecs_service block */
  readonly ecsService?: CodedeployDeploymentGroupEcsService[];
  /** load_balancer_info block */
  readonly loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo[];
  /** on_premises_instance_tag_filter block */
  readonly onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
  /** trigger_configuration block */
  readonly triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[];
}
export interface CodedeployDeploymentGroupAlarmConfiguration {
  readonly alarms?: string[];
  readonly enabled?: boolean;
  readonly ignorePollAlarmFailure?: boolean;
}

function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct?: CodedeployDeploymentGroupAlarmConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.alarms),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ignore_poll_alarm_failure: cdktf.booleanToTerraform(struct!.ignorePollAlarmFailure),
  }
}

export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
  readonly enabled?: boolean;
  readonly events?: string[];
}

function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct?: CodedeployDeploymentGroupAutoRollbackConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
  }
}

export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
  readonly actionOnTimeout?: string;
  readonly waitTimeInMinutes?: number;
}

function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_on_timeout: cdktf.stringToTerraform(struct!.actionOnTimeout),
    wait_time_in_minutes: cdktf.numberToTerraform(struct!.waitTimeInMinutes),
  }
}

export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  readonly action?: string;
}

function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  readonly action?: string;
  readonly terminationWaitTimeInMinutes?: number;
}

function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    termination_wait_time_in_minutes: cdktf.numberToTerraform(struct!.terminationWaitTimeInMinutes),
  }
}

export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
  /** deployment_ready_option block */
  readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption[];
  /** green_fleet_provisioning_option block */
  readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption[];
  /** terminate_blue_instances_on_deployment_success block */
  readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess[];
}

function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deployment_ready_option: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform)(struct!.deploymentReadyOption),
    green_fleet_provisioning_option: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform)(struct!.greenFleetProvisioningOption),
    terminate_blue_instances_on_deployment_success: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform)(struct!.terminateBlueInstancesOnDeploymentSuccess),
  }
}

export interface CodedeployDeploymentGroupDeploymentStyle {
  readonly deploymentOption?: string;
  readonly deploymentType?: string;
}

function codedeployDeploymentGroupDeploymentStyleToTerraform(struct?: CodedeployDeploymentGroupDeploymentStyle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deployment_option: cdktf.stringToTerraform(struct!.deploymentOption),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
  }
}

export interface CodedeployDeploymentGroupEc2TagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}

function codedeployDeploymentGroupEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}

function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CodedeployDeploymentGroupEc2TagSet {
  /** ec2_tag_filter block */
  readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
}

function codedeployDeploymentGroupEc2TagSetToTerraform(struct?: CodedeployDeploymentGroupEc2TagSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform)(struct!.ec2TagFilter),
  }
}

export interface CodedeployDeploymentGroupEcsService {
  readonly clusterName: string;
  readonly serviceName: string;
}

function codedeployDeploymentGroupEcsServiceToTerraform(struct?: CodedeployDeploymentGroupEcsService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
  readonly name?: string;
}

function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
  readonly name?: string;
}

function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
  readonly listenerArns: string[];
}

function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.listenerArns),
  }
}

export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
  readonly name: string;
}

function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
  readonly listenerArns: string[];
}

function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.listenerArns),
  }
}

export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
  /** prod_traffic_route block */
  readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute[];
  /** target_group block */
  readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
  /** test_traffic_route block */
  readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute[];
}

function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prod_traffic_route: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform)(struct!.prodTrafficRoute),
    target_group: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform)(struct!.targetGroup),
    test_traffic_route: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform)(struct!.testTrafficRoute),
  }
}

export interface CodedeployDeploymentGroupLoadBalancerInfo {
  /** elb_info block */
  readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
  /** target_group_info block */
  readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
  /** target_group_pair_info block */
  readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo[];
}

function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    elb_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform)(struct!.elbInfo),
    target_group_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform)(struct!.targetGroupInfo),
    target_group_pair_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform)(struct!.targetGroupPairInfo),
  }
}

export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}

function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CodedeployDeploymentGroupTriggerConfiguration {
  readonly triggerEvents: string[];
  readonly triggerName: string;
  readonly triggerTargetArn: string;
}

function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct?: CodedeployDeploymentGroupTriggerConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trigger_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.triggerEvents),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
    trigger_target_arn: cdktf.stringToTerraform(struct!.triggerTargetArn),
  }
}


// Resource

export class CodedeployDeploymentGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_deployment_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appName = config.appName;
    this._autoscalingGroups = config.autoscalingGroups;
    this._deploymentConfigName = config.deploymentConfigName;
    this._deploymentGroupName = config.deploymentGroupName;
    this._serviceRoleArn = config.serviceRoleArn;
    this._alarmConfiguration = config.alarmConfiguration;
    this._autoRollbackConfiguration = config.autoRollbackConfiguration;
    this._blueGreenDeploymentConfig = config.blueGreenDeploymentConfig;
    this._deploymentStyle = config.deploymentStyle;
    this._ec2TagFilter = config.ec2TagFilter;
    this._ec2TagSet = config.ec2TagSet;
    this._ecsService = config.ecsService;
    this._loadBalancerInfo = config.loadBalancerInfo;
    this._onPremisesInstanceTagFilter = config.onPremisesInstanceTagFilter;
    this._triggerConfiguration = config.triggerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName: string;
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName
  }

  // autoscaling_groups - computed: false, optional: true, required: false
  private _autoscalingGroups?: string[];
  public get autoscalingGroups() {
    return this.getListAttribute('autoscaling_groups');
  }
  public set autoscalingGroups(value: string[] ) {
    this._autoscalingGroups = value;
  }
  public resetAutoscalingGroups() {
    this._autoscalingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupsInput() {
    return this._autoscalingGroups
  }

  // deployment_config_name - computed: false, optional: true, required: false
  private _deploymentConfigName?: string;
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }
  public set deploymentConfigName(value: string ) {
    this._deploymentConfigName = value;
  }
  public resetDeploymentConfigName() {
    this._deploymentConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigNameInput() {
    return this._deploymentConfigName
  }

  // deployment_group_name - computed: false, optional: false, required: true
  private _deploymentGroupName: string;
  public get deploymentGroupName() {
    return this.getStringAttribute('deployment_group_name');
  }
  public set deploymentGroupName(value: string) {
    this._deploymentGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupNameInput() {
    return this._deploymentGroupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // alarm_configuration - computed: false, optional: true, required: false
  private _alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration[];
  public get alarmConfiguration() {
    return this.interpolationForAttribute('alarm_configuration') as any;
  }
  public set alarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration[] ) {
    this._alarmConfiguration = value;
  }
  public resetAlarmConfiguration() {
    this._alarmConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmConfigurationInput() {
    return this._alarmConfiguration
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration[];
  public get autoRollbackConfiguration() {
    return this.interpolationForAttribute('auto_rollback_configuration') as any;
  }
  public set autoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration[] ) {
    this._autoRollbackConfiguration = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration
  }

  // blue_green_deployment_config - computed: false, optional: true, required: false
  private _blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig[];
  public get blueGreenDeploymentConfig() {
    return this.interpolationForAttribute('blue_green_deployment_config') as any;
  }
  public set blueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig[] ) {
    this._blueGreenDeploymentConfig = value;
  }
  public resetBlueGreenDeploymentConfig() {
    this._blueGreenDeploymentConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenDeploymentConfigInput() {
    return this._blueGreenDeploymentConfig
  }

  // deployment_style - computed: false, optional: true, required: false
  private _deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle[];
  public get deploymentStyle() {
    return this.interpolationForAttribute('deployment_style') as any;
  }
  public set deploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle[] ) {
    this._deploymentStyle = value;
  }
  public resetDeploymentStyle() {
    this._deploymentStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStyleInput() {
    return this._deploymentStyle
  }

  // ec2_tag_filter - computed: false, optional: true, required: false
  private _ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[];
  public get ec2TagFilter() {
    return this.interpolationForAttribute('ec2_tag_filter') as any;
  }
  public set ec2TagFilter(value: CodedeployDeploymentGroupEc2TagFilter[] ) {
    this._ec2TagFilter = value;
  }
  public resetEc2TagFilter() {
    this._ec2TagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagFilterInput() {
    return this._ec2TagFilter
  }

  // ec2_tag_set - computed: false, optional: true, required: false
  private _ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[];
  public get ec2TagSet() {
    return this.interpolationForAttribute('ec2_tag_set') as any;
  }
  public set ec2TagSet(value: CodedeployDeploymentGroupEc2TagSet[] ) {
    this._ec2TagSet = value;
  }
  public resetEc2TagSet() {
    this._ec2TagSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2TagSetInput() {
    return this._ec2TagSet
  }

  // ecs_service - computed: false, optional: true, required: false
  private _ecsService?: CodedeployDeploymentGroupEcsService[];
  public get ecsService() {
    return this.interpolationForAttribute('ecs_service') as any;
  }
  public set ecsService(value: CodedeployDeploymentGroupEcsService[] ) {
    this._ecsService = value;
  }
  public resetEcsService() {
    this._ecsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsServiceInput() {
    return this._ecsService
  }

  // load_balancer_info - computed: false, optional: true, required: false
  private _loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo[];
  public get loadBalancerInfo() {
    return this.interpolationForAttribute('load_balancer_info') as any;
  }
  public set loadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo[] ) {
    this._loadBalancerInfo = value;
  }
  public resetLoadBalancerInfo() {
    this._loadBalancerInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInfoInput() {
    return this._loadBalancerInfo
  }

  // on_premises_instance_tag_filter - computed: false, optional: true, required: false
  private _onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
  public get onPremisesInstanceTagFilter() {
    return this.interpolationForAttribute('on_premises_instance_tag_filter') as any;
  }
  public set onPremisesInstanceTagFilter(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] ) {
    this._onPremisesInstanceTagFilter = value;
  }
  public resetOnPremisesInstanceTagFilter() {
    this._onPremisesInstanceTagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremisesInstanceTagFilterInput() {
    return this._onPremisesInstanceTagFilter
  }

  // trigger_configuration - computed: false, optional: true, required: false
  private _triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[];
  public get triggerConfiguration() {
    return this.interpolationForAttribute('trigger_configuration') as any;
  }
  public set triggerConfiguration(value: CodedeployDeploymentGroupTriggerConfiguration[] ) {
    this._triggerConfiguration = value;
  }
  public resetTriggerConfiguration() {
    this._triggerConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConfigurationInput() {
    return this._triggerConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      autoscaling_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._autoscalingGroups),
      deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
      deployment_group_name: cdktf.stringToTerraform(this._deploymentGroupName),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      alarm_configuration: cdktf.listMapper(codedeployDeploymentGroupAlarmConfigurationToTerraform)(this._alarmConfiguration),
      auto_rollback_configuration: cdktf.listMapper(codedeployDeploymentGroupAutoRollbackConfigurationToTerraform)(this._autoRollbackConfiguration),
      blue_green_deployment_config: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform)(this._blueGreenDeploymentConfig),
      deployment_style: cdktf.listMapper(codedeployDeploymentGroupDeploymentStyleToTerraform)(this._deploymentStyle),
      ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagFilterToTerraform)(this._ec2TagFilter),
      ec2_tag_set: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetToTerraform)(this._ec2TagSet),
      ecs_service: cdktf.listMapper(codedeployDeploymentGroupEcsServiceToTerraform)(this._ecsService),
      load_balancer_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoToTerraform)(this._loadBalancerInfo),
      on_premises_instance_tag_filter: cdktf.listMapper(codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform)(this._onPremisesInstanceTagFilter),
      trigger_configuration: cdktf.listMapper(codedeployDeploymentGroupTriggerConfigurationToTerraform)(this._triggerConfiguration),
    };
  }
}
