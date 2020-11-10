// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodedeployDeploymentGroupConfig extends TerraformMetaArguments {
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
export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
  readonly enabled?: boolean;
  readonly events?: string[];
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
  readonly actionOnTimeout?: string;
  readonly waitTimeInMinutes?: number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  readonly action?: string;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  readonly action?: string;
  readonly terminationWaitTimeInMinutes?: number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
  /** deployment_ready_option block */
  readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption[];
  /** green_fleet_provisioning_option block */
  readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption[];
  /** terminate_blue_instances_on_deployment_success block */
  readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess[];
}
export interface CodedeployDeploymentGroupDeploymentStyle {
  readonly deploymentOption?: string;
  readonly deploymentType?: string;
}
export interface CodedeployDeploymentGroupEc2TagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}
export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}
export interface CodedeployDeploymentGroupEc2TagSet {
  /** ec2_tag_filter block */
  readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
}
export interface CodedeployDeploymentGroupEcsService {
  readonly clusterName: string;
  readonly serviceName: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
  readonly name?: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
  readonly name?: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
  readonly listenerArns: string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
  readonly name: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
  readonly listenerArns: string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
  /** prod_traffic_route block */
  readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute[];
  /** target_group block */
  readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
  /** test_traffic_route block */
  readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfo {
  /** elb_info block */
  readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
  /** target_group_info block */
  readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
  /** target_group_pair_info block */
  readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo[];
}
export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}
export interface CodedeployDeploymentGroupTriggerConfiguration {
  readonly triggerEvents: string[];
  readonly triggerName: string;
  readonly triggerTargetArn: string;
}

// Resource

export class CodedeployDeploymentGroup extends TerraformResource {

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
      app_name: this._appName,
      autoscaling_groups: this._autoscalingGroups,
      deployment_config_name: this._deploymentConfigName,
      deployment_group_name: this._deploymentGroupName,
      service_role_arn: this._serviceRoleArn,
      alarm_configuration: this._alarmConfiguration,
      auto_rollback_configuration: this._autoRollbackConfiguration,
      blue_green_deployment_config: this._blueGreenDeploymentConfig,
      deployment_style: this._deploymentStyle,
      ec2_tag_filter: this._ec2TagFilter,
      ec2_tag_set: this._ec2TagSet,
      ecs_service: this._ecsService,
      load_balancer_info: this._loadBalancerInfo,
      on_premises_instance_tag_filter: this._onPremisesInstanceTagFilter,
      trigger_configuration: this._triggerConfiguration,
    };
  }
}
