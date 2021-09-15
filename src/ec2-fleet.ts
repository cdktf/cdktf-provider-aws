// https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}
  */
  readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags Ec2Fleet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#tags_all Ec2Fleet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances Ec2Fleet#terminate_instances}
  */
  readonly terminateInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#type Ec2Fleet#type}
  */
  readonly type?: string;
  /**
  * launch_template_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_config Ec2Fleet#launch_template_config}
  */
  readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig[];
  /**
  * on_demand_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_options Ec2Fleet#on_demand_options}
  */
  readonly onDemandOptions?: Ec2FleetOnDemandOptions[];
  /**
  * spot_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_options Ec2Fleet#spot_options}
  */
  readonly spotOptions?: Ec2FleetSpotOptions[];
  /**
  * target_capacity_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#target_capacity_specification Ec2Fleet#target_capacity_specification}
  */
  readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#timeouts Ec2Fleet#timeouts}
  */
  readonly timeouts?: Ec2FleetTimeouts;
}
export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_id Ec2Fleet#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_name Ec2Fleet#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#version Ec2Fleet#version}
  */
  readonly version: string;
}

function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface Ec2FleetLaunchTemplateConfigOverride {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#availability_zone Ec2Fleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_type Ec2Fleet#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#max_price Ec2Fleet#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#priority Ec2Fleet#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#subnet_id Ec2Fleet#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#weighted_capacity Ec2Fleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
}

function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    priority: cdktf.numberToTerraform(struct!.priority),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}

export interface Ec2FleetLaunchTemplateConfig {
  /**
  * launch_template_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#launch_template_specification Ec2Fleet#launch_template_specification}
  */
  readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification[];
  /**
  * override block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#override Ec2Fleet#override}
  */
  readonly override?: Ec2FleetLaunchTemplateConfigOverride[];
}

function ec2FleetLaunchTemplateConfigToTerraform(struct?: Ec2FleetLaunchTemplateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_specification: cdktf.listMapper(ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform)(struct!.launchTemplateSpecification),
    override: cdktf.listMapper(ec2FleetLaunchTemplateConfigOverrideToTerraform)(struct!.override),
  }
}

export interface Ec2FleetOnDemandOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
}

function ec2FleetOnDemandOptionsToTerraform(struct?: Ec2FleetOnDemandOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
  }
}

export interface Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#replacement_strategy Ec2Fleet#replacement_strategy}
  */
  readonly replacementStrategy?: string;
}

function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replacement_strategy: cdktf.stringToTerraform(struct!.replacementStrategy),
  }
}

export interface Ec2FleetSpotOptionsMaintenanceStrategies {
  /**
  * capacity_rebalance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#capacity_rebalance Ec2Fleet#capacity_rebalance}
  */
  readonly capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance[];
}

function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity_rebalance: cdktf.listMapper(ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform)(struct!.capacityRebalance),
  }
}

export interface Ec2FleetSpotOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#allocation_strategy Ec2Fleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}
  */
  readonly instancePoolsToUseCount?: number;
  /**
  * maintenance_strategies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#maintenance_strategies Ec2Fleet#maintenance_strategies}
  */
  readonly maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies[];
}

function ec2FleetSpotOptionsToTerraform(struct?: Ec2FleetSpotOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
    maintenance_strategies: cdktf.listMapper(ec2FleetSpotOptionsMaintenanceStrategiesToTerraform)(struct!.maintenanceStrategies),
  }
}

export interface Ec2FleetTargetCapacitySpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#default_target_capacity_type Ec2Fleet#default_target_capacity_type}
  */
  readonly defaultTargetCapacityType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}
  */
  readonly onDemandTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#spot_target_capacity Ec2Fleet#spot_target_capacity}
  */
  readonly spotTargetCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#total_target_capacity Ec2Fleet#total_target_capacity}
  */
  readonly totalTargetCapacity: number;
}

function ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2FleetTargetCapacitySpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_target_capacity_type: cdktf.stringToTerraform(struct!.defaultTargetCapacityType),
    on_demand_target_capacity: cdktf.numberToTerraform(struct!.onDemandTargetCapacity),
    spot_target_capacity: cdktf.numberToTerraform(struct!.spotTargetCapacity),
    total_target_capacity: cdktf.numberToTerraform(struct!.totalTargetCapacity),
  }
}

export interface Ec2FleetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#create Ec2Fleet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#delete Ec2Fleet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html#update Ec2Fleet#update}
  */
  readonly update?: string;
}

function ec2FleetTimeoutsToTerraform(struct?: Ec2FleetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet}
*/
export class Ec2Fleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2FleetConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2FleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
    this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._terminateInstances = config.terminateInstances;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._type = config.type;
    this._launchTemplateConfig = config.launchTemplateConfig;
    this._onDemandOptions = config.onDemandOptions;
    this._spotOptions = config.spotOptions;
    this._targetCapacitySpecification = config.targetCapacitySpecification;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // terminate_instances - computed: false, optional: true, required: false
  private _terminateInstances?: boolean | cdktf.IResolvable;
  public get terminateInstances() {
    return this.getBooleanAttribute('terminate_instances');
  }
  public set terminateInstances(value: boolean | cdktf.IResolvable ) {
    this._terminateInstances = value;
  }
  public resetTerminateInstances() {
    this._terminateInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesInput() {
    return this._terminateInstances
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

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // launch_template_config - computed: false, optional: false, required: true
  private _launchTemplateConfig: Ec2FleetLaunchTemplateConfig[];
  public get launchTemplateConfig() {
    return this.interpolationForAttribute('launch_template_config') as any;
  }
  public set launchTemplateConfig(value: Ec2FleetLaunchTemplateConfig[]) {
    this._launchTemplateConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigInput() {
    return this._launchTemplateConfig
  }

  // on_demand_options - computed: false, optional: true, required: false
  private _onDemandOptions?: Ec2FleetOnDemandOptions[];
  public get onDemandOptions() {
    return this.interpolationForAttribute('on_demand_options') as any;
  }
  public set onDemandOptions(value: Ec2FleetOnDemandOptions[] ) {
    this._onDemandOptions = value;
  }
  public resetOnDemandOptions() {
    this._onDemandOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandOptionsInput() {
    return this._onDemandOptions
  }

  // spot_options - computed: false, optional: true, required: false
  private _spotOptions?: Ec2FleetSpotOptions[];
  public get spotOptions() {
    return this.interpolationForAttribute('spot_options') as any;
  }
  public set spotOptions(value: Ec2FleetSpotOptions[] ) {
    this._spotOptions = value;
  }
  public resetSpotOptions() {
    this._spotOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions
  }

  // target_capacity_specification - computed: false, optional: false, required: true
  private _targetCapacitySpecification: Ec2FleetTargetCapacitySpecification[];
  public get targetCapacitySpecification() {
    return this.interpolationForAttribute('target_capacity_specification') as any;
  }
  public set targetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification[]) {
    this._targetCapacitySpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCapacitySpecificationInput() {
    return this._targetCapacitySpecification
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Ec2FleetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Ec2FleetTimeouts ) {
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
      excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
      replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      terminate_instances: cdktf.booleanToTerraform(this._terminateInstances),
      terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
      type: cdktf.stringToTerraform(this._type),
      launch_template_config: cdktf.listMapper(ec2FleetLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
      on_demand_options: cdktf.listMapper(ec2FleetOnDemandOptionsToTerraform)(this._onDemandOptions),
      spot_options: cdktf.listMapper(ec2FleetSpotOptionsToTerraform)(this._spotOptions),
      target_capacity_specification: cdktf.listMapper(ec2FleetTargetCapacitySpecificationToTerraform)(this._targetCapacitySpecification),
      timeouts: ec2FleetTimeoutsToTerraform(this._timeouts),
    };
  }
}
