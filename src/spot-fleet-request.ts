// https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SpotFleetRequestConfig extends TerraformMetaArguments {
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
export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
  readonly deviceName: string;
  readonly virtualName: string;
}
export interface SpotFleetRequestLaunchSpecificationRootBlockDevice {
  readonly deleteOnTermination?: boolean;
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
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
export interface SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
  readonly id?: string;
  readonly name?: string;
  readonly version?: string;
}
export interface SpotFleetRequestLaunchTemplateConfigOverrides {
  readonly availabilityZone?: string;
  readonly instanceType?: string;
  readonly priority?: number;
  readonly spotPrice?: string;
  readonly subnetId?: string;
  readonly weightedCapacity?: number;
}
export interface SpotFleetRequestLaunchTemplateConfig {
  /** launch_template_specification block */
  readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification[];
  /** overrides block */
  readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[];
}
export interface SpotFleetRequestTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class SpotFleetRequest extends TerraformResource {

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
    return this._allocationStrategy;
  }
  public set allocationStrategy(value: string | undefined) {
    this._allocationStrategy = value;
  }

  // client_token - computed: true, optional: false, required: true
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // excess_capacity_termination_policy - computed: false, optional: true, required: false
  private _excessCapacityTerminationPolicy?: string;
  public get excessCapacityTerminationPolicy() {
    return this._excessCapacityTerminationPolicy;
  }
  public set excessCapacityTerminationPolicy(value: string | undefined) {
    this._excessCapacityTerminationPolicy = value;
  }

  // fleet_type - computed: false, optional: true, required: false
  private _fleetType?: string;
  public get fleetType() {
    return this._fleetType;
  }
  public set fleetType(value: string | undefined) {
    this._fleetType = value;
  }

  // iam_fleet_role - computed: false, optional: false, required: true
  private _iamFleetRole: string;
  public get iamFleetRole() {
    return this._iamFleetRole;
  }
  public set iamFleetRole(value: string) {
    this._iamFleetRole = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_interruption_behaviour - computed: false, optional: true, required: false
  private _instanceInterruptionBehaviour?: string;
  public get instanceInterruptionBehaviour() {
    return this._instanceInterruptionBehaviour;
  }
  public set instanceInterruptionBehaviour(value: string | undefined) {
    this._instanceInterruptionBehaviour = value;
  }

  // instance_pools_to_use_count - computed: false, optional: true, required: false
  private _instancePoolsToUseCount?: number;
  public get instancePoolsToUseCount() {
    return this._instancePoolsToUseCount;
  }
  public set instancePoolsToUseCount(value: number | undefined) {
    this._instancePoolsToUseCount = value;
  }

  // load_balancers - computed: true, optional: true, required: false
  private _loadBalancers?: string[];
  public get loadBalancers() {
    return this._loadBalancers ?? this.getListAttribute('load_balancers');
  }
  public set loadBalancers(value: string[] | undefined) {
    this._loadBalancers = value;
  }

  // replace_unhealthy_instances - computed: false, optional: true, required: false
  private _replaceUnhealthyInstances?: boolean;
  public get replaceUnhealthyInstances() {
    return this._replaceUnhealthyInstances;
  }
  public set replaceUnhealthyInstances(value: boolean | undefined) {
    this._replaceUnhealthyInstances = value;
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string;
  public get spotPrice() {
    return this._spotPrice;
  }
  public set spotPrice(value: string | undefined) {
    this._spotPrice = value;
  }

  // spot_request_state - computed: true, optional: false, required: true
  public get spotRequestState() {
    return this.getStringAttribute('spot_request_state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_capacity - computed: false, optional: false, required: true
  private _targetCapacity: number;
  public get targetCapacity() {
    return this._targetCapacity;
  }
  public set targetCapacity(value: number) {
    this._targetCapacity = value;
  }

  // target_group_arns - computed: true, optional: true, required: false
  private _targetGroupArns?: string[];
  public get targetGroupArns() {
    return this._targetGroupArns ?? this.getListAttribute('target_group_arns');
  }
  public set targetGroupArns(value: string[] | undefined) {
    this._targetGroupArns = value;
  }

  // terminate_instances_with_expiration - computed: false, optional: true, required: false
  private _terminateInstancesWithExpiration?: boolean;
  public get terminateInstancesWithExpiration() {
    return this._terminateInstancesWithExpiration;
  }
  public set terminateInstancesWithExpiration(value: boolean | undefined) {
    this._terminateInstancesWithExpiration = value;
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string;
  public get validFrom() {
    return this._validFrom;
  }
  public set validFrom(value: string | undefined) {
    this._validFrom = value;
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string;
  public get validUntil() {
    return this._validUntil;
  }
  public set validUntil(value: string | undefined) {
    this._validUntil = value;
  }

  // wait_for_fulfillment - computed: false, optional: true, required: false
  private _waitForFulfillment?: boolean;
  public get waitForFulfillment() {
    return this._waitForFulfillment;
  }
  public set waitForFulfillment(value: boolean | undefined) {
    this._waitForFulfillment = value;
  }

  // launch_specification - computed: false, optional: true, required: false
  private _launchSpecification?: SpotFleetRequestLaunchSpecification[];
  public get launchSpecification() {
    return this._launchSpecification;
  }
  public set launchSpecification(value: SpotFleetRequestLaunchSpecification[] | undefined) {
    this._launchSpecification = value;
  }

  // launch_template_config - computed: false, optional: true, required: false
  private _launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[];
  public get launchTemplateConfig() {
    return this._launchTemplateConfig;
  }
  public set launchTemplateConfig(value: SpotFleetRequestLaunchTemplateConfig[] | undefined) {
    this._launchTemplateConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpotFleetRequestTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SpotFleetRequestTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_strategy: this._allocationStrategy,
      excess_capacity_termination_policy: this._excessCapacityTerminationPolicy,
      fleet_type: this._fleetType,
      iam_fleet_role: this._iamFleetRole,
      instance_interruption_behaviour: this._instanceInterruptionBehaviour,
      instance_pools_to_use_count: this._instancePoolsToUseCount,
      load_balancers: this._loadBalancers,
      replace_unhealthy_instances: this._replaceUnhealthyInstances,
      spot_price: this._spotPrice,
      tags: this._tags,
      target_capacity: this._targetCapacity,
      target_group_arns: this._targetGroupArns,
      terminate_instances_with_expiration: this._terminateInstancesWithExpiration,
      valid_from: this._validFrom,
      valid_until: this._validUntil,
      wait_for_fulfillment: this._waitForFulfillment,
      launch_specification: this._launchSpecification,
      launch_template_config: this._launchTemplateConfig,
      timeouts: this._timeouts,
    };
  }
}
