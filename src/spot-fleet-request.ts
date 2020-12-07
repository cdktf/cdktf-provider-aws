// https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpotFleetRequestConfig extends cdktf.TerraformMetaArguments {
  readonly allocationStrategy?: string;
  readonly excessCapacityTerminationPolicy?: string;
  readonly fleetType?: string;
  readonly iamFleetRole: string;
  readonly instanceInterruptionBehaviour?: string;
  readonly instancePoolsToUseCount?: number;
  readonly loadBalancers?: string[];
  readonly replaceUnhealthyInstances?: boolean;
  readonly spotPrice?: string;
  readonly tags?: { [key: string]: string };
  readonly targetCapacity: number;
  readonly targetGroupArns?: string[];
  readonly terminateInstancesWithExpiration?: boolean;
  readonly validFrom?: string;
  readonly validUntil?: string;
  readonly waitForFulfillment?: boolean;
  /** launch_specification block */
  readonly launchSpecification?: SpotFleetRequestLaunchSpecification[];
  /** launch_template_config block */
  readonly launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[];
  /** timeouts block */
  readonly timeouts?: SpotFleetRequestTimeouts;
}
export interface SpotFleetRequestLaunchSpecificationEbsBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly deviceName: string;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}

function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
  readonly deviceName: string;
  readonly virtualName: string;
}

function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface SpotFleetRequestLaunchSpecificationRootBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}

function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface SpotFleetRequestLaunchSpecification {
  readonly ami: string;
  readonly associatePublicIpAddress?: boolean;
  readonly availabilityZone?: string;
  readonly ebsOptimized?: boolean;
  readonly iamInstanceProfile?: string;
  readonly iamInstanceProfileArn?: string;
  readonly instanceType: string;
  readonly keyName?: string;
  readonly monitoring?: boolean;
  readonly placementGroup?: string;
  readonly placementTenancy?: string;
  readonly spotPrice?: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
  readonly userData?: string;
  readonly vpcSecurityGroupIds?: string[];
  readonly weightedCapacity?: string;
  /** ebs_block_device block */
  readonly ebsBlockDevice?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
  /** ephemeral_block_device block */
  readonly ephemeralBlockDevice?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
  /** root_block_device block */
  readonly rootBlockDevice?: SpotFleetRequestLaunchSpecificationRootBlockDevice[];
}

function spotFleetRequestLaunchSpecificationToTerraform(struct?: SpotFleetRequestLaunchSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ami: cdktf.stringToTerraform(struct!.ami),
    associate_public_ip_address: cdktf.booleanToTerraform(struct!.associatePublicIpAddress),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    ebs_optimized: cdktf.booleanToTerraform(struct!.ebsOptimized),
    iam_instance_profile: cdktf.stringToTerraform(struct!.iamInstanceProfile),
    iam_instance_profile_arn: cdktf.stringToTerraform(struct!.iamInstanceProfileArn),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    monitoring: cdktf.booleanToTerraform(struct!.monitoring),
    placement_group: cdktf.stringToTerraform(struct!.placementGroup),
    placement_tenancy: cdktf.stringToTerraform(struct!.placementTenancy),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    user_data: cdktf.stringToTerraform(struct!.userData),
    vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpcSecurityGroupIds),
    weighted_capacity: cdktf.stringToTerraform(struct!.weightedCapacity),
    ebs_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform)(struct!.ebsBlockDevice),
    ephemeral_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform)(struct!.ephemeralBlockDevice),
    root_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform)(struct!.rootBlockDevice),
  }
}

export interface SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
  readonly id?: string;
  readonly name?: string;
  readonly version?: string;
}

function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface SpotFleetRequestLaunchTemplateConfigOverrides {
  readonly availabilityZone?: string;
  readonly instanceType?: string;
  readonly priority?: number;
  readonly spotPrice?: string;
  readonly subnetId?: string;
  readonly weightedCapacity?: number;
}

function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    priority: cdktf.numberToTerraform(struct!.priority),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export interface SpotFleetRequestLaunchTemplateConfig {
  /** launch_template_specification block */
  readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification[];
  /** overrides block */
  readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[];
}

function spotFleetRequestLaunchTemplateConfigToTerraform(struct?: SpotFleetRequestLaunchTemplateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform)(struct!.launchTemplateSpecification),
    overrides: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigOverridesToTerraform)(struct!.overrides),
  }
}

export interface SpotFleetRequestTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function spotFleetRequestTimeoutsToTerraform(struct?: SpotFleetRequestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class SpotFleetRequest extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpotFleetRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_spot_fleet_request',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocationStrategy = config.allocationStrategy;
    this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
    this._fleetType = config.fleetType;
    this._iamFleetRole = config.iamFleetRole;
    this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
    this._instancePoolsToUseCount = config.instancePoolsToUseCount;
    this._loadBalancers = config.loadBalancers;
    this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
    this._spotPrice = config.spotPrice;
    this._tags = config.tags;
    this._targetCapacity = config.targetCapacity;
    this._targetGroupArns = config.targetGroupArns;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._waitForFulfillment = config.waitForFulfillment;
    this._launchSpecification = config.launchSpecification;
    this._launchTemplateConfig = config.launchTemplateConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string;
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string ) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // excess_capacity_termination_policy - computed: false, optional: true, required: false
  private _excessCapacityTerminationPolicy?: string;
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }
  public set excessCapacityTerminationPolicy(value: string ) {
    this._excessCapacityTerminationPolicy = value;
  }
  public resetExcessCapacityTerminationPolicy() {
    this._excessCapacityTerminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessCapacityTerminationPolicyInput() {
    return this._excessCapacityTerminationPolicy
  }

  // fleet_type - computed: false, optional: true, required: false
  private _fleetType?: string;
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string ) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType
  }

  // iam_fleet_role - computed: false, optional: false, required: true
  private _iamFleetRole: string;
  public get iamFleetRole() {
    return this.getStringAttribute('iam_fleet_role');
  }
  public set iamFleetRole(value: string) {
    this._iamFleetRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamFleetRoleInput() {
    return this._iamFleetRole
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_interruption_behaviour - computed: false, optional: true, required: false
  private _instanceInterruptionBehaviour?: string;
  public get instanceInterruptionBehaviour() {
    return this.getStringAttribute('instance_interruption_behaviour');
  }
  public set instanceInterruptionBehaviour(value: string ) {
    this._instanceInterruptionBehaviour = value;
  }
  public resetInstanceInterruptionBehaviour() {
    this._instanceInterruptionBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviourInput() {
    return this._instanceInterruptionBehaviour
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number;
  public get instancePoolsToUseCount() {
    return this.getNumberAttribute('instance_pools_to_use_count');
  }
  public set instancePoolsToUseCount(value: number ) {
    this._instancePoolsToUseCount = value;
  }
  public resetInstancePoolsToUseCount() {
    this._instancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolsToUseCountInput() {
    return this._instancePoolsToUseCount
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

  // replace_unhealthy_instances - computed: false, optional: true, required: false
  private _replaceUnhealthyInstances?: boolean;
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }
  public set replaceUnhealthyInstances(value: boolean ) {
    this._replaceUnhealthyInstances = value;
  }
  public resetReplaceUnhealthyInstances() {
    this._replaceUnhealthyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceUnhealthyInstancesInput() {
    return this._replaceUnhealthyInstances
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string;
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string ) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice
  }

  // spot_request_state - computed: true, optional: false, required: false
  public get spotRequestState() {
    return this.getStringAttribute('spot_request_state');
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

  // target_capacity - computed: false, optional: false, required: true
  private _targetCapacity: number;
  public get targetCapacity() {
    return this.getNumberAttribute('target_capacity');
  }
  public set targetCapacity(value: number) {
    this._targetCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacityInput() {
    return this._targetCapacity
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

  // terminate_instances_with_expiration - computed: false, optional: true, required: false
  private _terminateInstancesWithExpiration?: boolean;
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }
  public set terminateInstancesWithExpiration(value: boolean ) {
    this._terminateInstancesWithExpiration = value;
  }
  public resetTerminateInstancesWithExpiration() {
    this._terminateInstancesWithExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesWithExpirationInput() {
    return this._terminateInstancesWithExpiration
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string;
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string ) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string;
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string ) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil
  }

  // wait_for_fulfillment - computed: false, optional: true, required: false
  private _waitForFulfillment?: boolean;
  public get waitForFulfillment() {
    return this.getBooleanAttribute('wait_for_fulfillment');
  }
  public set waitForFulfillment(value: boolean ) {
    this._waitForFulfillment = value;
  }
  public resetWaitForFulfillment() {
    this._waitForFulfillment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForFulfillmentInput() {
    return this._waitForFulfillment
  }

  // launch_specification - computed: false, optional: true, required: false
  private _launchSpecification?: SpotFleetRequestLaunchSpecification[];
  public get launchSpecification() {
    return this.interpolationForAttribute('launch_specification') as any;
  }
  public set launchSpecification(value: SpotFleetRequestLaunchSpecification[] ) {
    this._launchSpecification = value;
  }
  public resetLaunchSpecification() {
    this._launchSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationInput() {
    return this._launchSpecification
  }

  // launch_template_config - computed: false, optional: true, required: false
  private _launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[];
  public get launchTemplateConfig() {
    return this.interpolationForAttribute('launch_template_config') as any;
  }
  public set launchTemplateConfig(value: SpotFleetRequestLaunchTemplateConfig[] ) {
    this._launchTemplateConfig = value;
  }
  public resetLaunchTemplateConfig() {
    this._launchTemplateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigInput() {
    return this._launchTemplateConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpotFleetRequestTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpotFleetRequestTimeouts ) {
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
      allocation_strategy: cdktf.stringToTerraform(this._allocationStrategy),
      excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
      fleet_type: cdktf.stringToTerraform(this._fleetType),
      iam_fleet_role: cdktf.stringToTerraform(this._iamFleetRole),
      instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
      instance_pools_to_use_count: cdktf.numberToTerraform(this._instancePoolsToUseCount),
      load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
      replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_capacity: cdktf.numberToTerraform(this._targetCapacity),
      target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
      terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
      launch_specification: cdktf.listMapper(spotFleetRequestLaunchSpecificationToTerraform)(this._launchSpecification),
      launch_template_config: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
      timeouts: spotFleetRequestTimeoutsToTerraform(this._timeouts),
    };
  }
}
