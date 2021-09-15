// https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrInstanceFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#cluster_id EmrInstanceFleet#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#name EmrInstanceFleet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}
  */
  readonly targetOnDemandCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#target_spot_capacity EmrInstanceFleet#target_spot_capacity}
  */
  readonly targetSpotCapacity?: number;
  /**
  * instance_type_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#instance_type_configs EmrInstanceFleet#instance_type_configs}
  */
  readonly instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[];
  /**
  * launch_specifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#launch_specifications EmrInstanceFleet#launch_specifications}
  */
  readonly launchSpecifications?: EmrInstanceFleetLaunchSpecifications[];
}
export interface EmrInstanceFleetInstanceTypeConfigsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#classification EmrInstanceFleet#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#properties EmrInstanceFleet#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
}

function emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
  }
}

export interface EmrInstanceFleetInstanceTypeConfigsEbsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#iops EmrInstanceFleet#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#size EmrInstanceFleet#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#type EmrInstanceFleet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#volumes_per_instance EmrInstanceFleet#volumes_per_instance}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#bid_price EmrInstanceFleet#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}
  */
  readonly bidPriceAsPercentageOfOnDemandPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#instance_type EmrInstanceFleet#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#weighted_capacity EmrInstanceFleet#weighted_capacity}
  */
  readonly weightedCapacity?: number;
  /**
  * configurations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#configurations EmrInstanceFleet#configurations}
  */
  readonly configurations?: EmrInstanceFleetInstanceTypeConfigsConfigurations[];
  /**
  * ebs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#ebs_config EmrInstanceFleet#ebs_config}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#allocation_strategy EmrInstanceFleet#allocation_strategy}
  */
  readonly allocationStrategy: string;
}

function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
  }
}

export interface EmrInstanceFleetLaunchSpecificationsSpotSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#allocation_strategy EmrInstanceFleet#allocation_strategy}
  */
  readonly allocationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#block_duration_minutes EmrInstanceFleet#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#timeout_action EmrInstanceFleet#timeout_action}
  */
  readonly timeoutAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}
  */
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
  /**
  * on_demand_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#on_demand_specification EmrInstanceFleet#on_demand_specification}
  */
  readonly onDemandSpecification?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[];
  /**
  * spot_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html#spot_specification EmrInstanceFleet#spot_specification}
  */
  readonly spotSpecification?: EmrInstanceFleetLaunchSpecificationsSpotSpecification[];
}

function emrInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrInstanceFleetLaunchSpecifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_demand_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct!.onDemandSpecification),
    spot_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct!.spotSpecification),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet}
*/
export class EmrInstanceFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_emr_instance_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrInstanceFleetConfig
  */
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
