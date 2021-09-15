// https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpotFleetRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#allocation_strategy SpotFleetRequest#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#fleet_type SpotFleetRequest#fleet_type}
  */
  readonly fleetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_fleet_role SpotFleetRequest#iam_fleet_role}
  */
  readonly iamFleetRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}
  */
  readonly instanceInterruptionBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#load_balancers SpotFleetRequest#load_balancers}
  */
  readonly loadBalancers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}
  */
  readonly onDemandAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}
  */
  readonly onDemandMaxTotalPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}
  */
  readonly onDemandTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}
  */
  readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags_all SpotFleetRequest#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_capacity SpotFleetRequest#target_capacity}
  */
  readonly targetCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#target_group_arns SpotFleetRequest#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_from SpotFleetRequest#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#valid_until SpotFleetRequest#valid_until}
  */
  readonly validUntil?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}
  */
  readonly waitForFulfillment?: boolean | cdktf.IResolvable;
  /**
  * launch_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_specification SpotFleetRequest#launch_specification}
  */
  readonly launchSpecification?: SpotFleetRequestLaunchSpecification[];
  /**
  * launch_template_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_config SpotFleetRequest#launch_template_config}
  */
  readonly launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[];
  /**
  * spot_maintenance_strategies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}
  */
  readonly spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#timeouts SpotFleetRequest#timeouts}
  */
  readonly timeouts?: SpotFleetRequestTimeouts;
}
export interface SpotFleetRequestLaunchSpecificationEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#snapshot_id SpotFleetRequest#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}
  */
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
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#device_name SpotFleetRequest#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#virtual_name SpotFleetRequest#virtual_name}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete_on_termination SpotFleetRequest#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#encrypted SpotFleetRequest#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iops SpotFleetRequest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#kms_key_id SpotFleetRequest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#throughput SpotFleetRequest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_size SpotFleetRequest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#volume_type SpotFleetRequest#volume_type}
  */
  readonly volumeType?: string;
}

function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface SpotFleetRequestLaunchSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ami SpotFleetRequest#ami}
  */
  readonly ami: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_optimized SpotFleetRequest#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile SpotFleetRequest#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}
  */
  readonly iamInstanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#key_name SpotFleetRequest#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#monitoring SpotFleetRequest#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_group SpotFleetRequest#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#placement_tenancy SpotFleetRequest#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#tags SpotFleetRequest#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#user_data SpotFleetRequest#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}
  */
  readonly weightedCapacity?: string;
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ebs_block_device SpotFleetRequest#ebs_block_device}
  */
  readonly ebsBlockDevice?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[];
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[];
  /**
  * root_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#root_block_device SpotFleetRequest#root_block_device}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#id SpotFleetRequest#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#name SpotFleetRequest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#version SpotFleetRequest#version}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#availability_zone SpotFleetRequest#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#instance_type SpotFleetRequest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#priority SpotFleetRequest#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#spot_price SpotFleetRequest#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#subnet_id SpotFleetRequest#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#weighted_capacity SpotFleetRequest#weighted_capacity}
  */
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
  /**
  * launch_template_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#launch_template_specification SpotFleetRequest#launch_template_specification}
  */
  readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification[];
  /**
  * overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#overrides SpotFleetRequest#overrides}
  */
  readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[];
}

function spotFleetRequestLaunchTemplateConfigToTerraform(struct?: SpotFleetRequestLaunchTemplateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform)(struct!.launchTemplateSpecification),
    overrides: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigOverridesToTerraform)(struct!.overrides),
  }
}

export interface SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#replacement_strategy SpotFleetRequest#replacement_strategy}
  */
  readonly replacementStrategy?: string;
}

function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
  }
}

export interface SpotFleetRequestSpotMaintenanceStrategies {
  /**
  * capacity_rebalance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#capacity_rebalance SpotFleetRequest#capacity_rebalance}
  */
  readonly capacityRebalance?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance[];
}

function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_rebalance: cdktf.listMapper(spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform)(struct!.capacityRebalance),
  }
}

export interface SpotFleetRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#create SpotFleetRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html#delete SpotFleetRequest#delete}
  */
  readonly delete?: string;
}

function spotFleetRequestTimeoutsToTerraform(struct?: SpotFleetRequestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request}
*/
export class SpotFleetRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_spot_fleet_request";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpotFleetRequestConfig
  */
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
    this._onDemandAllocationStrategy = config.onDemandAllocationStrategy;
    this._onDemandMaxTotalPrice = config.onDemandMaxTotalPrice;
    this._onDemandTargetCapacity = config.onDemandTargetCapacity;
    this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
    this._spotPrice = config.spotPrice;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._targetCapacity = config.targetCapacity;
    this._targetGroupArns = config.targetGroupArns;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._waitForFulfillment = config.waitForFulfillment;
    this._launchSpecification = config.launchSpecification;
    this._launchTemplateConfig = config.launchTemplateConfig;
    this._spotMaintenanceStrategies = config.spotMaintenanceStrategies;
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

  // on_demand_allocation_strategy - computed: false, optional: true, required: false
  private _onDemandAllocationStrategy?: string;
  public get onDemandAllocationStrategy() {
    return this.getStringAttribute('on_demand_allocation_strategy');
  }
  public set onDemandAllocationStrategy(value: string ) {
    this._onDemandAllocationStrategy = value;
  }
  public resetOnDemandAllocationStrategy() {
    this._onDemandAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandAllocationStrategyInput() {
    return this._onDemandAllocationStrategy
  }

  // on_demand_max_total_price - computed: false, optional: true, required: false
  private _onDemandMaxTotalPrice?: string;
  public get onDemandMaxTotalPrice() {
    return this.getStringAttribute('on_demand_max_total_price');
  }
  public set onDemandMaxTotalPrice(value: string ) {
    this._onDemandMaxTotalPrice = value;
  }
  public resetOnDemandMaxTotalPrice() {
    this._onDemandMaxTotalPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandMaxTotalPriceInput() {
    return this._onDemandMaxTotalPrice
  }

  // on_demand_target_capacity - computed: false, optional: true, required: false
  private _onDemandTargetCapacity?: number;
  public get onDemandTargetCapacity() {
    return this.getNumberAttribute('on_demand_target_capacity');
  }
  public set onDemandTargetCapacity(value: number ) {
    this._onDemandTargetCapacity = value;
  }
  public resetOnDemandTargetCapacity() {
    this._onDemandTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandTargetCapacityInput() {
    return this._onDemandTargetCapacity
  }

  // replace_unhealthy_instances - computed: false, optional: true, required: false
  private _replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
  public get replaceUnhealthyInstances() {
    return this.getBooleanAttribute('replace_unhealthy_instances');
  }
  public set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
  private _terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }
  public set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable ) {
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
  private _waitForFulfillment?: boolean | cdktf.IResolvable;
  public get waitForFulfillment() {
    return this.getBooleanAttribute('wait_for_fulfillment');
  }
  public set waitForFulfillment(value: boolean | cdktf.IResolvable ) {
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

  // spot_maintenance_strategies - computed: false, optional: true, required: false
  private _spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies[];
  public get spotMaintenanceStrategies() {
    return this.interpolationForAttribute('spot_maintenance_strategies') as any;
  }
  public set spotMaintenanceStrategies(value: SpotFleetRequestSpotMaintenanceStrategies[] ) {
    this._spotMaintenanceStrategies = value;
  }
  public resetSpotMaintenanceStrategies() {
    this._spotMaintenanceStrategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaintenanceStrategiesInput() {
    return this._spotMaintenanceStrategies
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
      on_demand_allocation_strategy: cdktf.stringToTerraform(this._onDemandAllocationStrategy),
      on_demand_max_total_price: cdktf.stringToTerraform(this._onDemandMaxTotalPrice),
      on_demand_target_capacity: cdktf.numberToTerraform(this._onDemandTargetCapacity),
      replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      target_capacity: cdktf.numberToTerraform(this._targetCapacity),
      target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
      terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
      launch_specification: cdktf.listMapper(spotFleetRequestLaunchSpecificationToTerraform)(this._launchSpecification),
      launch_template_config: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
      spot_maintenance_strategies: cdktf.listMapper(spotFleetRequestSpotMaintenanceStrategiesToTerraform)(this._spotMaintenanceStrategies),
      timeouts: spotFleetRequestTimeoutsToTerraform(this._timeouts),
    };
  }
}
