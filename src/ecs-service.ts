// https://www.terraform.io/docs/providers/aws/r/ecs_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
  readonly cluster?: string;
  readonly deploymentMaximumPercent?: number;
  readonly deploymentMinimumHealthyPercent?: number;
  readonly desiredCount?: number;
  readonly enableEcsManagedTags?: boolean;
  readonly forceNewDeployment?: boolean;
  readonly healthCheckGracePeriodSeconds?: number;
  readonly iamRole?: string;
  readonly launchType?: string;
  readonly name: string;
  readonly platformVersion?: string;
  readonly propagateTags?: string;
  readonly schedulingStrategy?: string;
  readonly tags?: { [key: string]: string };
  readonly taskDefinition?: string;
  /** capacity_provider_strategy block */
  readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
  /** deployment_controller block */
  readonly deploymentController?: EcsServiceDeploymentController[];
  /** load_balancer block */
  readonly loadBalancer?: EcsServiceLoadBalancer[];
  /** network_configuration block */
  readonly networkConfiguration?: EcsServiceNetworkConfiguration[];
  /** ordered_placement_strategy block */
  readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
  /** placement_constraints block */
  readonly placementConstraints?: EcsServicePlacementConstraints[];
  /** placement_strategy block */
  readonly placementStrategy?: EcsServicePlacementStrategy[];
  /** service_registries block */
  readonly serviceRegistries?: EcsServiceServiceRegistries[];
  /** timeouts block */
  readonly timeouts?: EcsServiceTimeouts;
}
export interface EcsServiceCapacityProviderStrategy {
  readonly base?: number;
  readonly capacityProvider: string;
  readonly weight?: number;
}

function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface EcsServiceDeploymentController {
  readonly type?: string;
}

function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentController): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsServiceLoadBalancer {
  readonly containerName: string;
  readonly containerPort: number;
  readonly elbName?: string;
  readonly targetGroupArn?: string;
}

function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    elb_name: cdktf.stringToTerraform(struct!.elbName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}

export interface EcsServiceNetworkConfiguration {
  readonly assignPublicIp?: boolean;
  readonly securityGroups?: string[];
  readonly subnets: string[];
}

function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export interface EcsServiceOrderedPlacementStrategy {
  readonly field?: string;
  readonly type: string;
}

function ecsServiceOrderedPlacementStrategyToTerraform(struct?: EcsServiceOrderedPlacementStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsServicePlacementConstraints {
  readonly expression?: string;
  readonly type: string;
}

function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsServicePlacementStrategy {
  readonly field?: string;
  readonly type: string;
}

function ecsServicePlacementStrategyToTerraform(struct?: EcsServicePlacementStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsServiceServiceRegistries {
  readonly containerName?: string;
  readonly containerPort?: number;
  readonly port?: number;
  readonly registryArn: string;
}

function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    port: cdktf.numberToTerraform(struct!.port),
    registry_arn: cdktf.stringToTerraform(struct!.registryArn),
  }
}

export interface EcsServiceTimeouts {
  readonly delete?: string;
}

function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class EcsService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._deploymentMaximumPercent = config.deploymentMaximumPercent;
    this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
    this._desiredCount = config.desiredCount;
    this._enableEcsManagedTags = config.enableEcsManagedTags;
    this._forceNewDeployment = config.forceNewDeployment;
    this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
    this._iamRole = config.iamRole;
    this._launchType = config.launchType;
    this._name = config.name;
    this._platformVersion = config.platformVersion;
    this._propagateTags = config.propagateTags;
    this._schedulingStrategy = config.schedulingStrategy;
    this._tags = config.tags;
    this._taskDefinition = config.taskDefinition;
    this._capacityProviderStrategy = config.capacityProviderStrategy;
    this._deploymentController = config.deploymentController;
    this._loadBalancer = config.loadBalancer;
    this._networkConfiguration = config.networkConfiguration;
    this._orderedPlacementStrategy = config.orderedPlacementStrategy;
    this._placementConstraints = config.placementConstraints;
    this._placementStrategy = config.placementStrategy;
    this._serviceRegistries = config.serviceRegistries;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster
  }

  // deployment_maximum_percent - computed: false, optional: true, required: false
  private _deploymentMaximumPercent?: number;
  public get deploymentMaximumPercent() {
    return this.getNumberAttribute('deployment_maximum_percent');
  }
  public set deploymentMaximumPercent(value: number ) {
    this._deploymentMaximumPercent = value;
  }
  public resetDeploymentMaximumPercent() {
    this._deploymentMaximumPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMaximumPercentInput() {
    return this._deploymentMaximumPercent
  }

  // deployment_minimum_healthy_percent - computed: false, optional: true, required: false
  private _deploymentMinimumHealthyPercent?: number;
  public get deploymentMinimumHealthyPercent() {
    return this.getNumberAttribute('deployment_minimum_healthy_percent');
  }
  public set deploymentMinimumHealthyPercent(value: number ) {
    this._deploymentMinimumHealthyPercent = value;
  }
  public resetDeploymentMinimumHealthyPercent() {
    this._deploymentMinimumHealthyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMinimumHealthyPercentInput() {
    return this._deploymentMinimumHealthyPercent
  }

  // desired_count - computed: false, optional: true, required: false
  private _desiredCount?: number;
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }
  public set desiredCount(value: number ) {
    this._desiredCount = value;
  }
  public resetDesiredCount() {
    this._desiredCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCountInput() {
    return this._desiredCount
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean;
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean ) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags
  }

  // force_new_deployment - computed: false, optional: true, required: false
  private _forceNewDeployment?: boolean;
  public get forceNewDeployment() {
    return this.getBooleanAttribute('force_new_deployment');
  }
  public set forceNewDeployment(value: boolean ) {
    this._forceNewDeployment = value;
  }
  public resetForceNewDeployment() {
    this._forceNewDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewDeploymentInput() {
    return this._forceNewDeployment
  }

  // health_check_grace_period_seconds - computed: false, optional: true, required: false
  private _healthCheckGracePeriodSeconds?: number;
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
  }
  public set healthCheckGracePeriodSeconds(value: number ) {
    this._healthCheckGracePeriodSeconds = value;
  }
  public resetHealthCheckGracePeriodSeconds() {
    this._healthCheckGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodSecondsInput() {
    return this._healthCheckGracePeriodSeconds
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole?: string;
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_type - computed: true, optional: true, required: false
  private _launchType?: string;
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType
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

  // platform_version - computed: true, optional: true, required: false
  private _platformVersion?: string;
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string;
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string ) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags
  }

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string;
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string ) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // task_definition - computed: false, optional: true, required: false
  private _taskDefinition?: string;
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string ) {
    this._taskDefinition = value;
  }
  public resetTaskDefinition() {
    this._taskDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
  public get capacityProviderStrategy() {
    return this.interpolationForAttribute('capacity_provider_strategy') as any;
  }
  public set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] ) {
    this._capacityProviderStrategy = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy
  }

  // deployment_controller - computed: false, optional: true, required: false
  private _deploymentController?: EcsServiceDeploymentController[];
  public get deploymentController() {
    return this.interpolationForAttribute('deployment_controller') as any;
  }
  public set deploymentController(value: EcsServiceDeploymentController[] ) {
    this._deploymentController = value;
  }
  public resetDeploymentController() {
    this._deploymentController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentControllerInput() {
    return this._deploymentController
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer?: EcsServiceLoadBalancer[];
  public get loadBalancer() {
    return this.interpolationForAttribute('load_balancer') as any;
  }
  public set loadBalancer(value: EcsServiceLoadBalancer[] ) {
    this._loadBalancer = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: EcsServiceNetworkConfiguration[];
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }
  public set networkConfiguration(value: EcsServiceNetworkConfiguration[] ) {
    this._networkConfiguration = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration
  }

  // ordered_placement_strategy - computed: false, optional: true, required: false
  private _orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
  public get orderedPlacementStrategy() {
    return this.interpolationForAttribute('ordered_placement_strategy') as any;
  }
  public set orderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[] ) {
    this._orderedPlacementStrategy = value;
  }
  public resetOrderedPlacementStrategy() {
    this._orderedPlacementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedPlacementStrategyInput() {
    return this._orderedPlacementStrategy
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints?: EcsServicePlacementConstraints[];
  public get placementConstraints() {
    return this.interpolationForAttribute('placement_constraints') as any;
  }
  public set placementConstraints(value: EcsServicePlacementConstraints[] ) {
    this._placementConstraints = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints
  }

  // placement_strategy - computed: false, optional: true, required: false
  private _placementStrategy?: EcsServicePlacementStrategy[];
  public get placementStrategy() {
    return this.interpolationForAttribute('placement_strategy') as any;
  }
  public set placementStrategy(value: EcsServicePlacementStrategy[] ) {
    this._placementStrategy = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy
  }

  // service_registries - computed: false, optional: true, required: false
  private _serviceRegistries?: EcsServiceServiceRegistries[];
  public get serviceRegistries() {
    return this.interpolationForAttribute('service_registries') as any;
  }
  public set serviceRegistries(value: EcsServiceServiceRegistries[] ) {
    this._serviceRegistries = value;
  }
  public resetServiceRegistries() {
    this._serviceRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistriesInput() {
    return this._serviceRegistries
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EcsServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EcsServiceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      deployment_maximum_percent: cdktf.numberToTerraform(this._deploymentMaximumPercent),
      deployment_minimum_healthy_percent: cdktf.numberToTerraform(this._deploymentMinimumHealthyPercent),
      desired_count: cdktf.numberToTerraform(this._desiredCount),
      enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
      force_new_deployment: cdktf.booleanToTerraform(this._forceNewDeployment),
      health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      launch_type: cdktf.stringToTerraform(this._launchType),
      name: cdktf.stringToTerraform(this._name),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      propagate_tags: cdktf.stringToTerraform(this._propagateTags),
      scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
      capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
      deployment_controller: cdktf.listMapper(ecsServiceDeploymentControllerToTerraform)(this._deploymentController),
      load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform)(this._loadBalancer),
      network_configuration: cdktf.listMapper(ecsServiceNetworkConfigurationToTerraform)(this._networkConfiguration),
      ordered_placement_strategy: cdktf.listMapper(ecsServiceOrderedPlacementStrategyToTerraform)(this._orderedPlacementStrategy),
      placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
      placement_strategy: cdktf.listMapper(ecsServicePlacementStrategyToTerraform)(this._placementStrategy),
      service_registries: cdktf.listMapper(ecsServiceServiceRegistriesToTerraform)(this._serviceRegistries),
      timeouts: ecsServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
