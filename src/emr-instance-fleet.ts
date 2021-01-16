// https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EmrInstanceFleetConfig extends TerraformMetaArguments {
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
export interface EmrInstanceFleetInstanceTypeConfigsEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
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
export interface EmrInstanceFleetLaunchSpecificationsOnDemandSpecification {
  readonly allocationStrategy: string;
}
export interface EmrInstanceFleetLaunchSpecificationsSpotSpecification {
  readonly allocationStrategy: string;
  readonly blockDurationMinutes?: number;
  readonly timeoutAction: string;
  readonly timeoutDurationMinutes: number;
}
export interface EmrInstanceFleetLaunchSpecifications {
  /** on_demand_specification block */
  readonly onDemandSpecification?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[];
  /** spot_specification block */
  readonly spotSpecification?: EmrInstanceFleetLaunchSpecificationsSpotSpecification[];
}

// Resource

export class EmrInstanceFleet extends TerraformResource {

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
    return this._clusterId;
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // provisioned_on_demand_capacity - computed: true, optional: false, required: true
  public get provisionedOnDemandCapacity() {
    return this.getNumberAttribute('provisioned_on_demand_capacity');
  }

  // provisioned_spot_capacity - computed: true, optional: false, required: true
  public get provisionedSpotCapacity() {
    return this.getNumberAttribute('provisioned_spot_capacity');
  }

  // target_on_demand_capacity - computed: false, optional: true, required: false
  private _targetOnDemandCapacity?: number;
  public get targetOnDemandCapacity() {
    return this._targetOnDemandCapacity;
  }
  public set targetOnDemandCapacity(value: number | undefined) {
    this._targetOnDemandCapacity = value;
  }

  // target_spot_capacity - computed: false, optional: true, required: false
  private _targetSpotCapacity?: number;
  public get targetSpotCapacity() {
    return this._targetSpotCapacity;
  }
  public set targetSpotCapacity(value: number | undefined) {
    this._targetSpotCapacity = value;
  }

  // instance_type_configs - computed: false, optional: true, required: false
  private _instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[];
  public get instanceTypeConfigs() {
    return this._instanceTypeConfigs;
  }
  public set instanceTypeConfigs(value: EmrInstanceFleetInstanceTypeConfigs[] | undefined) {
    this._instanceTypeConfigs = value;
  }

  // launch_specifications - computed: false, optional: true, required: false
  private _launchSpecifications?: EmrInstanceFleetLaunchSpecifications[];
  public get launchSpecifications() {
    return this._launchSpecifications;
  }
  public set launchSpecifications(value: EmrInstanceFleetLaunchSpecifications[] | undefined) {
    this._launchSpecifications = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      name: this._name,
      target_on_demand_capacity: this._targetOnDemandCapacity,
      target_spot_capacity: this._targetSpotCapacity,
      instance_type_configs: this._instanceTypeConfigs,
      launch_specifications: this._launchSpecifications,
    };
  }
}
