// https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutoscalingGroupConfig extends TerraformMetaArguments {
  readonly availabilityZones?: string[];
  readonly defaultCooldown?: number;
  readonly desiredCapacity?: number;
  readonly enabledMetrics?: string[];
  readonly forceDelete?: boolean;
  readonly healthCheckGracePeriod?: number;
  readonly healthCheckType?: string;
  readonly launchConfiguration?: string;
  readonly loadBalancers?: string[];
  readonly maxInstanceLifetime?: number;
  readonly maxSize: number;
  readonly metricsGranularity?: string;
  readonly minElbCapacity?: number;
  readonly minSize: number;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly placementGroup?: string;
  readonly protectFromScaleIn?: boolean;
  readonly serviceLinkedRoleArn?: string;
  readonly suspendedProcesses?: string[];
  readonly tags?: { [key: string]: string };
  readonly targetGroupArns?: string[];
  readonly terminationPolicies?: string[];
  readonly vpcZoneIdentifier?: string[];
  readonly waitForCapacityTimeout?: string;
  readonly waitForElbCapacity?: number;
  /** initial_lifecycle_hook block */
  readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
  /** launch_template block */
  readonly launchTemplate?: AutoscalingGroupLaunchTemplate[];
  /** mixed_instances_policy block */
  readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
  /** tag block */
  readonly tag?: AutoscalingGroupTag[];
  /** timeouts block */
  readonly timeouts?: AutoscalingGroupTimeouts;
}
export interface AutoscalingGroupInitialLifecycleHook {
  readonly defaultResult?: string;
  readonly heartbeatTimeout?: number;
  readonly lifecycleTransition: string;
  readonly name: string;
  readonly notificationMetadata?: string;
  readonly notificationTargetArn?: string;
  readonly roleArn?: string;
}
export interface AutoscalingGroupLaunchTemplate {
  readonly id?: string;
  readonly name?: string;
  readonly version?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
  readonly onDemandAllocationStrategy?: string;
  readonly onDemandBaseCapacity?: number;
  readonly onDemandPercentageAboveBaseCapacity?: number;
  readonly spotAllocationStrategy?: string;
  readonly spotInstancePools?: number;
  readonly spotMaxPrice?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  readonly launchTemplateId?: string;
  readonly launchTemplateName?: string;
  readonly version?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
  readonly instanceType?: string;
  readonly weightedCapacity?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
  /** launch_template_specification block */
  readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification[];
  /** override block */
  readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
}
export interface AutoscalingGroupMixedInstancesPolicy {
  /** instances_distribution block */
  readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution[];
  /** launch_template block */
  readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate[];
}
export interface AutoscalingGroupTag {
  readonly key: string;
  readonly propagateAtLaunch: boolean;
  readonly value: string;
}
export interface AutoscalingGroupTimeouts {
  readonly delete?: string;
}

// Resource

export class AutoscalingGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._defaultCooldown = config.defaultCooldown;
    this._desiredCapacity = config.desiredCapacity;
    this._enabledMetrics = config.enabledMetrics;
    this._forceDelete = config.forceDelete;
    this._healthCheckGracePeriod = config.healthCheckGracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._launchConfiguration = config.launchConfiguration;
    this._loadBalancers = config.loadBalancers;
    this._maxInstanceLifetime = config.maxInstanceLifetime;
    this._maxSize = config.maxSize;
    this._metricsGranularity = config.metricsGranularity;
    this._minElbCapacity = config.minElbCapacity;
    this._minSize = config.minSize;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._placementGroup = config.placementGroup;
    this._protectFromScaleIn = config.protectFromScaleIn;
    this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
    this._suspendedProcesses = config.suspendedProcesses;
    this._tags = config.tags;
    this._targetGroupArns = config.targetGroupArns;
    this._terminationPolicies = config.terminationPolicies;
    this._vpcZoneIdentifier = config.vpcZoneIdentifier;
    this._waitForCapacityTimeout = config.waitForCapacityTimeout;
    this._waitForElbCapacity = config.waitForElbCapacity;
    this._initialLifecycleHook = config.initialLifecycleHook;
    this._launchTemplate = config.launchTemplate;
    this._mixedInstancesPolicy = config.mixedInstancesPolicy;
    this._tag = config.tag;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // default_cooldown - computed: true, optional: true, required: false
  private _defaultCooldown?: number;
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number;
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity
  }

  // enabled_metrics - computed: false, optional: true, required: false
  private _enabledMetrics?: string[];
  public get enabledMetrics() {
    return this.getListAttribute('enabled_metrics');
  }
  public set enabledMetrics(value: string[] ) {
    this._enabledMetrics = value;
  }
  public resetEnabledMetrics() {
    this._enabledMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledMetricsInput() {
    return this._enabledMetrics
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean ) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete
  }

  // health_check_grace_period - computed: false, optional: true, required: false
  private _healthCheckGracePeriod?: number;
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }
  public set healthCheckGracePeriod(value: number ) {
    this._healthCheckGracePeriod = value;
  }
  public resetHealthCheckGracePeriod() {
    this._healthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodInput() {
    return this._healthCheckGracePeriod
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string;
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_configuration - computed: false, optional: true, required: false
  private _launchConfiguration?: string;
  public get launchConfiguration() {
    return this.getStringAttribute('launch_configuration');
  }
  public set launchConfiguration(value: string ) {
    this._launchConfiguration = value;
  }
  public resetLaunchConfiguration() {
    this._launchConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchConfigurationInput() {
    return this._launchConfiguration
  }

  // load_balancers - computed: true, optional: true, required: false
  private _loadBalancers?: string[];
  public get loadBalancers() {
    return this.getListAttribute('load_balancers');
  }
  public set loadBalancers(value: string[]) {
    this._loadBalancers = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers
  }

  // max_instance_lifetime - computed: false, optional: true, required: false
  private _maxInstanceLifetime?: number;
  public get maxInstanceLifetime() {
    return this.getNumberAttribute('max_instance_lifetime');
  }
  public set maxInstanceLifetime(value: number ) {
    this._maxInstanceLifetime = value;
  }
  public resetMaxInstanceLifetime() {
    this._maxInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceLifetimeInput() {
    return this._maxInstanceLifetime
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize: number;
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize
  }

  // metrics_granularity - computed: false, optional: true, required: false
  private _metricsGranularity?: string;
  public get metricsGranularity() {
    return this.getStringAttribute('metrics_granularity');
  }
  public set metricsGranularity(value: string ) {
    this._metricsGranularity = value;
  }
  public resetMetricsGranularity() {
    this._metricsGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsGranularityInput() {
    return this._metricsGranularity
  }

  // min_elb_capacity - computed: false, optional: true, required: false
  private _minElbCapacity?: number;
  public get minElbCapacity() {
    return this.getNumberAttribute('min_elb_capacity');
  }
  public set minElbCapacity(value: number ) {
    this._minElbCapacity = value;
  }
  public resetMinElbCapacity() {
    this._minElbCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minElbCapacityInput() {
    return this._minElbCapacity
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize: number;
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize
  }

  // name - computed: true, optional: true, required: false
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
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // placement_group - computed: false, optional: true, required: false
  private _placementGroup?: string;
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string ) {
    this._placementGroup = value;
  }
  public resetPlacementGroup() {
    this._placementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup
  }

  // protect_from_scale_in - computed: false, optional: true, required: false
  private _protectFromScaleIn?: boolean;
  public get protectFromScaleIn() {
    return this.getBooleanAttribute('protect_from_scale_in');
  }
  public set protectFromScaleIn(value: boolean ) {
    this._protectFromScaleIn = value;
  }
  public resetProtectFromScaleIn() {
    this._protectFromScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectFromScaleInInput() {
    return this._protectFromScaleIn
  }

  // service_linked_role_arn - computed: true, optional: true, required: false
  private _serviceLinkedRoleArn?: string;
  public get serviceLinkedRoleArn() {
    return this.getStringAttribute('service_linked_role_arn');
  }
  public set serviceLinkedRoleArn(value: string) {
    this._serviceLinkedRoleArn = value;
  }
  public resetServiceLinkedRoleArn() {
    this._serviceLinkedRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLinkedRoleArnInput() {
    return this._serviceLinkedRoleArn
  }

  // suspended_processes - computed: false, optional: true, required: false
  private _suspendedProcesses?: string[];
  public get suspendedProcesses() {
    return this.getListAttribute('suspended_processes');
  }
  public set suspendedProcesses(value: string[] ) {
    this._suspendedProcesses = value;
  }
  public resetSuspendedProcesses() {
    this._suspendedProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedProcessesInput() {
    return this._suspendedProcesses
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

  // target_group_arns - computed: true, optional: true, required: false
  private _targetGroupArns?: string[];
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }
  public set targetGroupArns(value: string[]) {
    this._targetGroupArns = value;
  }
  public resetTargetGroupArns() {
    this._targetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnsInput() {
    return this._targetGroupArns
  }

  // termination_policies - computed: false, optional: true, required: false
  private _terminationPolicies?: string[];
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }
  public set terminationPolicies(value: string[] ) {
    this._terminationPolicies = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies
  }

  // vpc_zone_identifier - computed: true, optional: true, required: false
  private _vpcZoneIdentifier?: string[];
  public get vpcZoneIdentifier() {
    return this.getListAttribute('vpc_zone_identifier');
  }
  public set vpcZoneIdentifier(value: string[]) {
    this._vpcZoneIdentifier = value;
  }
  public resetVpcZoneIdentifier() {
    this._vpcZoneIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcZoneIdentifierInput() {
    return this._vpcZoneIdentifier
  }

  // wait_for_capacity_timeout - computed: false, optional: true, required: false
  private _waitForCapacityTimeout?: string;
  public get waitForCapacityTimeout() {
    return this.getStringAttribute('wait_for_capacity_timeout');
  }
  public set waitForCapacityTimeout(value: string ) {
    this._waitForCapacityTimeout = value;
  }
  public resetWaitForCapacityTimeout() {
    this._waitForCapacityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityTimeoutInput() {
    return this._waitForCapacityTimeout
  }

  // wait_for_elb_capacity - computed: false, optional: true, required: false
  private _waitForElbCapacity?: number;
  public get waitForElbCapacity() {
    return this.getNumberAttribute('wait_for_elb_capacity');
  }
  public set waitForElbCapacity(value: number ) {
    this._waitForElbCapacity = value;
  }
  public resetWaitForElbCapacity() {
    this._waitForElbCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForElbCapacityInput() {
    return this._waitForElbCapacity
  }

  // initial_lifecycle_hook - computed: false, optional: true, required: false
  private _initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
  public get initialLifecycleHook() {
    return this.interpolationForAttribute('initial_lifecycle_hook') as any;
  }
  public set initialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[] ) {
    this._initialLifecycleHook = value;
  }
  public resetInitialLifecycleHook() {
    this._initialLifecycleHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLifecycleHookInput() {
    return this._initialLifecycleHook
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate?: AutoscalingGroupLaunchTemplate[];
  public get launchTemplate() {
    return this.interpolationForAttribute('launch_template') as any;
  }
  public set launchTemplate(value: AutoscalingGroupLaunchTemplate[] ) {
    this._launchTemplate = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate
  }

  // mixed_instances_policy - computed: false, optional: true, required: false
  private _mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
  public get mixedInstancesPolicy() {
    return this.interpolationForAttribute('mixed_instances_policy') as any;
  }
  public set mixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy[] ) {
    this._mixedInstancesPolicy = value;
  }
  public resetMixedInstancesPolicy() {
    this._mixedInstancesPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedInstancesPolicyInput() {
    return this._mixedInstancesPolicy
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: AutoscalingGroupTag[];
  public get tag() {
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: AutoscalingGroupTag[] ) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutoscalingGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutoscalingGroupTimeouts ) {
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
      availability_zones: this._availabilityZones,
      default_cooldown: this._defaultCooldown,
      desired_capacity: this._desiredCapacity,
      enabled_metrics: this._enabledMetrics,
      force_delete: this._forceDelete,
      health_check_grace_period: this._healthCheckGracePeriod,
      health_check_type: this._healthCheckType,
      launch_configuration: this._launchConfiguration,
      load_balancers: this._loadBalancers,
      max_instance_lifetime: this._maxInstanceLifetime,
      max_size: this._maxSize,
      metrics_granularity: this._metricsGranularity,
      min_elb_capacity: this._minElbCapacity,
      min_size: this._minSize,
      name: this._name,
      name_prefix: this._namePrefix,
      placement_group: this._placementGroup,
      protect_from_scale_in: this._protectFromScaleIn,
      service_linked_role_arn: this._serviceLinkedRoleArn,
      suspended_processes: this._suspendedProcesses,
      tags: this._tags,
      target_group_arns: this._targetGroupArns,
      termination_policies: this._terminationPolicies,
      vpc_zone_identifier: this._vpcZoneIdentifier,
      wait_for_capacity_timeout: this._waitForCapacityTimeout,
      wait_for_elb_capacity: this._waitForElbCapacity,
      initial_lifecycle_hook: this._initialLifecycleHook,
      launch_template: this._launchTemplate,
      mixed_instances_policy: this._mixedInstancesPolicy,
      tag: this._tag,
      timeouts: this._timeouts,
    };
  }
}
