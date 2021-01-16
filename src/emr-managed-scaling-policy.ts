// https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrManagedScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly clusterId: string;
  /** compute_limits block */
  readonly computeLimits: EmrManagedScalingPolicyComputeLimits[];
}
export interface EmrManagedScalingPolicyComputeLimits {
  readonly maximumCapacityUnits: number;
  readonly maximumCoreCapacityUnits?: number;
  readonly maximumOndemandCapacityUnits?: number;
  readonly minimumCapacityUnits: number;
  readonly unitType: string;
}

function emrManagedScalingPolicyComputeLimitsToTerraform(struct?: EmrManagedScalingPolicyComputeLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum_capacity_units: cdktf.numberToTerraform(struct!.maximumCapacityUnits),
    maximum_core_capacity_units: cdktf.numberToTerraform(struct!.maximumCoreCapacityUnits),
    maximum_ondemand_capacity_units: cdktf.numberToTerraform(struct!.maximumOndemandCapacityUnits),
    minimum_capacity_units: cdktf.numberToTerraform(struct!.minimumCapacityUnits),
    unit_type: cdktf.stringToTerraform(struct!.unitType),
  }
}


// Resource

export class EmrManagedScalingPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EmrManagedScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_managed_scaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._computeLimits = config.computeLimits;
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

  // compute_limits - computed: false, optional: false, required: true
  private _computeLimits: EmrManagedScalingPolicyComputeLimits[];
  public get computeLimits() {
    return this.interpolationForAttribute('compute_limits') as any;
  }
  public set computeLimits(value: EmrManagedScalingPolicyComputeLimits[]) {
    this._computeLimits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeLimitsInput() {
    return this._computeLimits
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      compute_limits: cdktf.listMapper(emrManagedScalingPolicyComputeLimitsToTerraform)(this._computeLimits),
    };
  }
}
