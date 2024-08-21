/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrManagedScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * compute_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#compute_limits EmrManagedScalingPolicy#compute_limits}
  */
  readonly computeLimits: EmrManagedScalingPolicyComputeLimits[] | cdktf.IResolvable;
}
export interface EmrManagedScalingPolicyComputeLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}
  */
  readonly maximumCapacityUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}
  */
  readonly maximumCoreCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}
  */
  readonly maximumOndemandCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}
  */
  readonly minimumCapacityUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}
  */
  readonly unitType: string;
}

export function emrManagedScalingPolicyComputeLimitsToTerraform(struct?: EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function emrManagedScalingPolicyComputeLimitsToHclTerraform(struct?: EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_core_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.maximumCoreCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ondemand_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.maximumOndemandCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.minimumCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit_type: {
      value: cdktf.stringToHclTerraform(struct!.unitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrManagedScalingPolicyComputeLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacityUnits = this._maximumCapacityUnits;
    }
    if (this._maximumCoreCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCoreCapacityUnits = this._maximumCoreCapacityUnits;
    }
    if (this._maximumOndemandCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumOndemandCapacityUnits = this._maximumOndemandCapacityUnits;
    }
    if (this._minimumCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumCapacityUnits = this._minimumCapacityUnits;
    }
    if (this._unitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitType = this._unitType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumCapacityUnits = undefined;
      this._maximumCoreCapacityUnits = undefined;
      this._maximumOndemandCapacityUnits = undefined;
      this._minimumCapacityUnits = undefined;
      this._unitType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumCapacityUnits = value.maximumCapacityUnits;
      this._maximumCoreCapacityUnits = value.maximumCoreCapacityUnits;
      this._maximumOndemandCapacityUnits = value.maximumOndemandCapacityUnits;
      this._minimumCapacityUnits = value.minimumCapacityUnits;
      this._unitType = value.unitType;
    }
  }

  // maximum_capacity_units - computed: false, optional: false, required: true
  private _maximumCapacityUnits?: number; 
  public get maximumCapacityUnits() {
    return this.getNumberAttribute('maximum_capacity_units');
  }
  public set maximumCapacityUnits(value: number) {
    this._maximumCapacityUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityUnitsInput() {
    return this._maximumCapacityUnits;
  }

  // maximum_core_capacity_units - computed: false, optional: true, required: false
  private _maximumCoreCapacityUnits?: number; 
  public get maximumCoreCapacityUnits() {
    return this.getNumberAttribute('maximum_core_capacity_units');
  }
  public set maximumCoreCapacityUnits(value: number) {
    this._maximumCoreCapacityUnits = value;
  }
  public resetMaximumCoreCapacityUnits() {
    this._maximumCoreCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCoreCapacityUnitsInput() {
    return this._maximumCoreCapacityUnits;
  }

  // maximum_ondemand_capacity_units - computed: false, optional: true, required: false
  private _maximumOndemandCapacityUnits?: number; 
  public get maximumOndemandCapacityUnits() {
    return this.getNumberAttribute('maximum_ondemand_capacity_units');
  }
  public set maximumOndemandCapacityUnits(value: number) {
    this._maximumOndemandCapacityUnits = value;
  }
  public resetMaximumOndemandCapacityUnits() {
    this._maximumOndemandCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumOndemandCapacityUnitsInput() {
    return this._maximumOndemandCapacityUnits;
  }

  // minimum_capacity_units - computed: false, optional: false, required: true
  private _minimumCapacityUnits?: number; 
  public get minimumCapacityUnits() {
    return this.getNumberAttribute('minimum_capacity_units');
  }
  public set minimumCapacityUnits(value: number) {
    this._minimumCapacityUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCapacityUnitsInput() {
    return this._minimumCapacityUnits;
  }

  // unit_type - computed: false, optional: false, required: true
  private _unitType?: string; 
  public get unitType() {
    return this.getStringAttribute('unit_type');
  }
  public set unitType(value: string) {
    this._unitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitTypeInput() {
    return this._unitType;
  }
}

export class EmrManagedScalingPolicyComputeLimitsList extends cdktf.ComplexList {
  public internalValue? : EmrManagedScalingPolicyComputeLimits[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EmrManagedScalingPolicyComputeLimitsOutputReference {
    return new EmrManagedScalingPolicyComputeLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy aws_emr_managed_scaling_policy}
*/
export class EmrManagedScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_managed_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrManagedScalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrManagedScalingPolicy to import
  * @param importFromId The id of the existing EmrManagedScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrManagedScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_emr_managed_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.1/docs/resources/emr_managed_scaling_policy aws_emr_managed_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrManagedScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EmrManagedScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_managed_scaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.63.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._computeLimits.internalValue = config.computeLimits;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // compute_limits - computed: false, optional: false, required: true
  private _computeLimits = new EmrManagedScalingPolicyComputeLimitsList(this, "compute_limits", true);
  public get computeLimits() {
    return this._computeLimits;
  }
  public putComputeLimits(value: EmrManagedScalingPolicyComputeLimits[] | cdktf.IResolvable) {
    this._computeLimits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeLimitsInput() {
    return this._computeLimits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      compute_limits: cdktf.listMapper(emrManagedScalingPolicyComputeLimitsToTerraform, true)(this._computeLimits.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_limits: {
        value: cdktf.listMapperHcl(emrManagedScalingPolicyComputeLimitsToHclTerraform, true)(this._computeLimits.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrManagedScalingPolicyComputeLimitsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
