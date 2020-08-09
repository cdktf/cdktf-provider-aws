// https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2FleetConfig extends TerraformMetaArguments {
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
export interface Ec2FleetLaunchTemplateConfigOverride {
  readonly availabilityZone?: string;
  readonly instanceType?: string;
  readonly maxPrice?: string;
  readonly priority?: number;
  readonly subnetId?: string;
  readonly weightedCapacity?: number;
}
export interface Ec2FleetLaunchTemplateConfig {
  /** launch_template_specification block */
  readonly launchTemplateSpecification: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification[];
  /** override block */
  readonly override?: Ec2FleetLaunchTemplateConfigOverride[];
}
export interface Ec2FleetOnDemandOptions {
  readonly allocationStrategy?: string;
}
export interface Ec2FleetSpotOptions {
  readonly allocationStrategy?: string;
  readonly instanceInterruptionBehavior?: string;
  readonly instancePoolsToUseCount?: number;
}
export interface Ec2FleetTargetCapacitySpecification {
  readonly defaultTargetCapacityType: string;
  readonly onDemandTargetCapacity?: number;
  readonly spotTargetCapacity?: number;
  readonly totalTargetCapacity: number;
}
export interface Ec2FleetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class Ec2Fleet extends TerraformResource {

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
    return this._excessCapacityTerminationPolicy;
  }
  public set excessCapacityTerminationPolicy(value: string | undefined) {
    this._excessCapacityTerminationPolicy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // replace_unhealthy_instances - computed: false, optional: true, required: false
  private _replaceUnhealthyInstances?: boolean;
  public get replaceUnhealthyInstances() {
    return this._replaceUnhealthyInstances;
  }
  public set replaceUnhealthyInstances(value: boolean | undefined) {
    this._replaceUnhealthyInstances = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // terminate_instances - computed: false, optional: true, required: false
  private _terminateInstances?: boolean;
  public get terminateInstances() {
    return this._terminateInstances;
  }
  public set terminateInstances(value: boolean | undefined) {
    this._terminateInstances = value;
  }

  // terminate_instances_with_expiration - computed: false, optional: true, required: false
  private _terminateInstancesWithExpiration?: boolean;
  public get terminateInstancesWithExpiration() {
    return this._terminateInstancesWithExpiration;
  }
  public set terminateInstancesWithExpiration(value: boolean | undefined) {
    this._terminateInstancesWithExpiration = value;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // launch_template_config - computed: false, optional: false, required: true
  private _launchTemplateConfig: Ec2FleetLaunchTemplateConfig[];
  public get launchTemplateConfig() {
    return this._launchTemplateConfig;
  }
  public set launchTemplateConfig(value: Ec2FleetLaunchTemplateConfig[]) {
    this._launchTemplateConfig = value;
  }

  // on_demand_options - computed: false, optional: true, required: false
  private _onDemandOptions?: Ec2FleetOnDemandOptions[];
  public get onDemandOptions() {
    return this._onDemandOptions;
  }
  public set onDemandOptions(value: Ec2FleetOnDemandOptions[] | undefined) {
    this._onDemandOptions = value;
  }

  // spot_options - computed: false, optional: true, required: false
  private _spotOptions?: Ec2FleetSpotOptions[];
  public get spotOptions() {
    return this._spotOptions;
  }
  public set spotOptions(value: Ec2FleetSpotOptions[] | undefined) {
    this._spotOptions = value;
  }

  // target_capacity_specification - computed: false, optional: false, required: true
  private _targetCapacitySpecification: Ec2FleetTargetCapacitySpecification[];
  public get targetCapacitySpecification() {
    return this._targetCapacitySpecification;
  }
  public set targetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification[]) {
    this._targetCapacitySpecification = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Ec2FleetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: Ec2FleetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      excess_capacity_termination_policy: this._excessCapacityTerminationPolicy,
      replace_unhealthy_instances: this._replaceUnhealthyInstances,
      tags: this._tags,
      terminate_instances: this._terminateInstances,
      terminate_instances_with_expiration: this._terminateInstancesWithExpiration,
      type: this._type,
      launch_template_config: this._launchTemplateConfig,
      on_demand_options: this._onDemandOptions,
      spot_options: this._spotOptions,
      target_capacity_specification: this._targetCapacitySpecification,
      timeouts: this._timeouts,
    };
  }
}
