// https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrInstanceFleetConfig extends cdktf.TerraformMetaArguments {
  readonly clusterId: string;
  readonly name?: string;
  readonly targetOnDemandCapacity?: number;
  readonly targetSpotCapacity?: number;
  /** instance_type_configs block */
  readonly instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[];
  /** launch_specifications block */
  readonly launchSpecifications?: EmrInstanceFleetLaunchSpecifications[];
}
export interface EmrInstanceFleetInstanceTypeConfigsConfigurations {
  readonly classification?: string;
  readonly properties?: { [key: string]: string };
}

function emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
  }
}

export interface EmrInstanceFleetInstanceTypeConfigsEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
}

function emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsEbsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}

export interface EmrInstanceFleetInstanceTypeConfigs {
  readonly bidPrice?: string;
  readonly bidPriceAsPercentageOfOnDemandPrice?: number;
  readonly instanceType: string;
  readonly weightedCapacity?: number;
  /** configurations block */
  readonly configurations?: EmrInstanceFleetInstanceTypeConfigsConfigurations[];
  /** ebs_config block */
  readonly ebsConfig?: EmrInstanceFleetInstanceTypeConfigsEbsConfig[];
}

function emrInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bid_price: cdktf.stringToTerraform(struct!.bidPrice),
    bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct!.bidPriceAsPercentageOfOnDemandPrice),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
    configurations: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct!.configurations),
    ebs_config: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct!.ebsConfig),
  }
}

export interface EmrInstanceFleetLaunchSpecificationsOnDemandSpecification {
  readonly allocationStrategy: string;
}

function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
  }
}

export interface EmrInstanceFleetLaunchSpecificationsSpotSpecification {
  readonly allocationStrategy: string;
  readonly blockDurationMinutes?: number;
  readonly timeoutAction: string;
  readonly timeoutDurationMinutes: number;
}

function emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsSpotSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
    timeout_duration_minutes: cdktf.numberToTerraform(struct!.timeoutDurationMinutes),
  }
}

export interface EmrInstanceFleetLaunchSpecifications {
  /** on_demand_specification block */
  readonly onDemandSpecification?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[];
  /** spot_specification block */
  readonly spotSpecification?: EmrInstanceFleetLaunchSpecificationsSpotSpecification[];
}

function emrInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrInstanceFleetLaunchSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_demand_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct!.onDemandSpecification),
    spot_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct!.spotSpecification),
  }
}


// Resource

export class EmrInstanceFleet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EmrInstanceFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_instance_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._name = config.name;
    this._targetOnDemandCapacity = config.targetOnDemandCapacity;
    this._targetSpotCapacity = config.targetSpotCapacity;
    this._instanceTypeConfigs = config.instanceTypeConfigs;
    this._launchSpecifications = config.launchSpecifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // provisioned_on_demand_capacity - computed: true, optional: false, required: false
  public get provisionedOnDemandCapacity() {
    return this.getNumberAttribute('provisioned_on_demand_capacity');
  }

  // provisioned_spot_capacity - computed: true, optional: false, required: false
  public get provisionedSpotCapacity() {
    return this.getNumberAttribute('provisioned_spot_capacity');
  }

  // target_on_demand_capacity - computed: false, optional: true, required: false
  private _targetOnDemandCapacity?: number;
  public get targetOnDemandCapacity() {
    return this.getNumberAttribute('target_on_demand_capacity');
  }
  public set targetOnDemandCapacity(value: number ) {
    this._targetOnDemandCapacity = value;
  }
  public resetTargetOnDemandCapacity() {
    this._targetOnDemandCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetOnDemandCapacityInput() {
    return this._targetOnDemandCapacity
  }

  // target_spot_capacity - computed: false, optional: true, required: false
  private _targetSpotCapacity?: number;
  public get targetSpotCapacity() {
    return this.getNumberAttribute('target_spot_capacity');
  }
  public set targetSpotCapacity(value: number ) {
    this._targetSpotCapacity = value;
  }
  public resetTargetSpotCapacity() {
    this._targetSpotCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpotCapacityInput() {
    return this._targetSpotCapacity
  }

  // instance_type_configs - computed: false, optional: true, required: false
  private _instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[];
  public get instanceTypeConfigs() {
    return this.interpolationForAttribute('instance_type_configs') as any;
  }
  public set instanceTypeConfigs(value: EmrInstanceFleetInstanceTypeConfigs[] ) {
    this._instanceTypeConfigs = value;
  }
  public resetInstanceTypeConfigs() {
    this._instanceTypeConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeConfigsInput() {
    return this._instanceTypeConfigs
  }

  // launch_specifications - computed: false, optional: true, required: false
  private _launchSpecifications?: EmrInstanceFleetLaunchSpecifications[];
  public get launchSpecifications() {
    return this.interpolationForAttribute('launch_specifications') as any;
  }
  public set launchSpecifications(value: EmrInstanceFleetLaunchSpecifications[] ) {
    this._launchSpecifications = value;
  }
  public resetLaunchSpecifications() {
    this._launchSpecifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSpecificationsInput() {
    return this._launchSpecifications
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      name: cdktf.stringToTerraform(this._name),
      target_on_demand_capacity: cdktf.numberToTerraform(this._targetOnDemandCapacity),
      target_spot_capacity: cdktf.numberToTerraform(this._targetSpotCapacity),
      instance_type_configs: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsToTerraform)(this._instanceTypeConfigs),
      launch_specifications: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsToTerraform)(this._launchSpecifications),
    };
  }
}
