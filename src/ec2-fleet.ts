// https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
  readonly excessCapacityTerminationPolicy?: string;
  readonly replaceUnhealthyInstances?: boolean;
  readonly tags?: { [key: string]: string };
  readonly terminateInstances?: boolean;
  readonly terminateInstancesWithExpiration?: boolean;
  readonly type?: string;
  /** launch_template_config block */
  readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig[];
  /** on_demand_options block */
  readonly onDemandOptions?: Ec2FleetOnDemandOptions[];
  /** spot_options block */
  readonly spotOptions?: Ec2FleetSpotOptions[];
  /** target_capacity_specification block */
  readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification[];
  /** timeouts block */
  readonly timeouts?: Ec2FleetTimeouts;
}
export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
  readonly launchTemplateId?: string;
  readonly launchTemplateName?: string;
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
  readonly availabilityZone?: string;
  readonly instanceType?: string;
  readonly maxPrice?: string;
  readonly priority?: number;
  readonly subnetId?: string;
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
  /** launch_template_specification block */
  readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification[];
  /** override block */
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
  readonly allocationStrategy?: string;
}

function ec2FleetOnDemandOptionsToTerraform(struct?: Ec2FleetOnDemandOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
  }
}

export interface Ec2FleetSpotOptions {
  readonly allocationStrategy?: string;
  readonly instanceInterruptionBehavior?: string;
  readonly instancePoolsToUseCount?: number;
}

function ec2FleetSpotOptionsToTerraform(struct?: Ec2FleetSpotOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    instance_pools_to_use_count: cdktf.numberToTerraform(struct!.instancePoolsToUseCount),
  }
}

export interface Ec2FleetTargetCapacitySpecification {
  readonly defaultTargetCapacityType: string;
  readonly onDemandTargetCapacity?: number;
  readonly spotTargetCapacity?: number;
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
  readonly create?: string;
  readonly delete?: string;
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


// Resource

export class Ec2Fleet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // terminate_instances - computed: false, optional: true, required: false
  private _terminateInstances?: boolean;
  public get terminateInstances() {
    return this.getBooleanAttribute('terminate_instances');
  }
  public set terminateInstances(value: boolean ) {
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
