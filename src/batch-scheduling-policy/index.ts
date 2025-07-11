/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchSchedulingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#id BatchSchedulingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#region BatchSchedulingPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * fair_share_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}
  */
  readonly fairSharePolicy?: BatchSchedulingPolicyFairSharePolicy;
}
export interface BatchSchedulingPolicyFairSharePolicyShareDistribution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}
  */
  readonly shareIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}
  */
  readonly weightFactor?: number;
}

export function batchSchedulingPolicyFairSharePolicyShareDistributionToTerraform(struct?: BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    share_identifier: cdktf.stringToTerraform(struct!.shareIdentifier),
    weight_factor: cdktf.numberToTerraform(struct!.weightFactor),
  }
}


export function batchSchedulingPolicyFairSharePolicyShareDistributionToHclTerraform(struct?: BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    share_identifier: {
      value: cdktf.stringToHclTerraform(struct!.shareIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight_factor: {
      value: cdktf.numberToHclTerraform(struct!.weightFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shareIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareIdentifier = this._shareIdentifier;
    }
    if (this._weightFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightFactor = this._weightFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shareIdentifier = undefined;
      this._weightFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shareIdentifier = value.shareIdentifier;
      this._weightFactor = value.weightFactor;
    }
  }

  // share_identifier - computed: false, optional: false, required: true
  private _shareIdentifier?: string; 
  public get shareIdentifier() {
    return this.getStringAttribute('share_identifier');
  }
  public set shareIdentifier(value: string) {
    this._shareIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdentifierInput() {
    return this._shareIdentifier;
  }

  // weight_factor - computed: false, optional: true, required: false
  private _weightFactor?: number; 
  public get weightFactor() {
    return this.getNumberAttribute('weight_factor');
  }
  public set weightFactor(value: number) {
    this._weightFactor = value;
  }
  public resetWeightFactor() {
    this._weightFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightFactorInput() {
    return this._weightFactor;
  }
}

export class BatchSchedulingPolicyFairSharePolicyShareDistributionList extends cdktf.ComplexList {
  public internalValue? : BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable

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
  public get(index: number): BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference {
    return new BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchSchedulingPolicyFairSharePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}
  */
  readonly computeReservation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}
  */
  readonly shareDecaySeconds?: number;
  /**
  * share_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}
  */
  readonly shareDistribution?: BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable;
}

export function batchSchedulingPolicyFairSharePolicyToTerraform(struct?: BatchSchedulingPolicyFairSharePolicyOutputReference | BatchSchedulingPolicyFairSharePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_reservation: cdktf.numberToTerraform(struct!.computeReservation),
    share_decay_seconds: cdktf.numberToTerraform(struct!.shareDecaySeconds),
    share_distribution: cdktf.listMapper(batchSchedulingPolicyFairSharePolicyShareDistributionToTerraform, true)(struct!.shareDistribution),
  }
}


export function batchSchedulingPolicyFairSharePolicyToHclTerraform(struct?: BatchSchedulingPolicyFairSharePolicyOutputReference | BatchSchedulingPolicyFairSharePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_reservation: {
      value: cdktf.numberToHclTerraform(struct!.computeReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_decay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.shareDecaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_distribution: {
      value: cdktf.listMapperHcl(batchSchedulingPolicyFairSharePolicyShareDistributionToHclTerraform, true)(struct!.shareDistribution),
      isBlock: true,
      type: "set",
      storageClassType: "BatchSchedulingPolicyFairSharePolicyShareDistributionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchSchedulingPolicyFairSharePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchSchedulingPolicyFairSharePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeReservation = this._computeReservation;
    }
    if (this._shareDecaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDecaySeconds = this._shareDecaySeconds;
    }
    if (this._shareDistribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDistribution = this._shareDistribution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchSchedulingPolicyFairSharePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeReservation = undefined;
      this._shareDecaySeconds = undefined;
      this._shareDistribution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeReservation = value.computeReservation;
      this._shareDecaySeconds = value.shareDecaySeconds;
      this._shareDistribution.internalValue = value.shareDistribution;
    }
  }

  // compute_reservation - computed: false, optional: true, required: false
  private _computeReservation?: number; 
  public get computeReservation() {
    return this.getNumberAttribute('compute_reservation');
  }
  public set computeReservation(value: number) {
    this._computeReservation = value;
  }
  public resetComputeReservation() {
    this._computeReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeReservationInput() {
    return this._computeReservation;
  }

  // share_decay_seconds - computed: false, optional: true, required: false
  private _shareDecaySeconds?: number; 
  public get shareDecaySeconds() {
    return this.getNumberAttribute('share_decay_seconds');
  }
  public set shareDecaySeconds(value: number) {
    this._shareDecaySeconds = value;
  }
  public resetShareDecaySeconds() {
    this._shareDecaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDecaySecondsInput() {
    return this._shareDecaySeconds;
  }

  // share_distribution - computed: false, optional: true, required: false
  private _shareDistribution = new BatchSchedulingPolicyFairSharePolicyShareDistributionList(this, "share_distribution", true);
  public get shareDistribution() {
    return this._shareDistribution;
  }
  public putShareDistribution(value: BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable) {
    this._shareDistribution.internalValue = value;
  }
  public resetShareDistribution() {
    this._shareDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDistributionInput() {
    return this._shareDistribution.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy aws_batch_scheduling_policy}
*/
export class BatchSchedulingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_batch_scheduling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BatchSchedulingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchSchedulingPolicy to import
  * @param importFromId The id of the existing BatchSchedulingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchSchedulingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_batch_scheduling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/batch_scheduling_policy aws_batch_scheduling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchSchedulingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BatchSchedulingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_scheduling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._fairSharePolicy.internalValue = config.fairSharePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // fair_share_policy - computed: false, optional: true, required: false
  private _fairSharePolicy = new BatchSchedulingPolicyFairSharePolicyOutputReference(this, "fair_share_policy");
  public get fairSharePolicy() {
    return this._fairSharePolicy;
  }
  public putFairSharePolicy(value: BatchSchedulingPolicyFairSharePolicy) {
    this._fairSharePolicy.internalValue = value;
  }
  public resetFairSharePolicy() {
    this._fairSharePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairSharePolicyInput() {
    return this._fairSharePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      fair_share_policy: batchSchedulingPolicyFairSharePolicyToTerraform(this._fairSharePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fair_share_policy: {
        value: batchSchedulingPolicyFairSharePolicyToHclTerraform(this._fairSharePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchSchedulingPolicyFairSharePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
