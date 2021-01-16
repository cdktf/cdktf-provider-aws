// https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EmrManagedScalingPolicyConfig extends TerraformMetaArguments {
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

// Resource

export class EmrManagedScalingPolicy extends TerraformResource {

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

  // compute_limits - computed: false, optional: false, required: true
  private _computeLimits: EmrManagedScalingPolicyComputeLimits[];
  public get computeLimits() {
    return this._computeLimits;
  }
  public set computeLimits(value: EmrManagedScalingPolicyComputeLimits[]) {
    this._computeLimits = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      compute_limits: this._computeLimits,
    };
  }
}
