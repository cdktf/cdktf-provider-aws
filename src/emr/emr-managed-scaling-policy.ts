// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic MapReduce
*/
export interface EmrManagedScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#cluster_id EmrManagedScalingPolicy#cluster_id}
  */
  readonly clusterId: string;
  /**
  * compute_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#compute_limits EmrManagedScalingPolicy#compute_limits}
  */
  readonly computeLimits: EmrManagedScalingPolicyComputeLimits[];
}
export interface EmrManagedScalingPolicyComputeLimits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}
  */
  readonly maximumCapacityUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}
  */
  readonly maximumCoreCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}
  */
  readonly maximumOndemandCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}
  */
  readonly minimumCapacityUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html#unit_type EmrManagedScalingPolicy#unit_type}
  */
  readonly unitType: string;
}

export function emrManagedScalingPolicyComputeLimitsToTerraform(struct?: EmrManagedScalingPolicyComputeLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_capacity_units: cdktf.numberToTerraform(struct!.maximumCapacityUnits),
    maximum_core_capacity_units: cdktf.numberToTerraform(struct!.maximumCoreCapacityUnits),
    maximum_ondemand_capacity_units: cdktf.numberToTerraform(struct!.maximumOndemandCapacityUnits),
    minimum_capacity_units: cdktf.numberToTerraform(struct!.minimumCapacityUnits),
    unit_type: cdktf.stringToTerraform(struct!.unitType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy}
*/
export class EmrManagedScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_emr_managed_scaling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_managed_scaling_policy.html aws_emr_managed_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrManagedScalingPolicyConfig
  */
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
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // compute_limits - computed: false, optional: false, required: true
  private _computeLimits?: EmrManagedScalingPolicyComputeLimits[]; 
  public get computeLimits() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('compute_limits') as any;
  }
  public set computeLimits(value: EmrManagedScalingPolicyComputeLimits[]) {
    this._computeLimits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeLimitsInput() {
    return this._computeLimits;
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
