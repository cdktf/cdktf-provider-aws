// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Batch
*/
export interface BatchSchedulingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * fair_share_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}
  */
  readonly fairSharePolicy?: BatchSchedulingPolicyFairSharePolicy;
}
export interface BatchSchedulingPolicyFairSharePolicyShareDistribution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}
  */
  readonly shareIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}
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

export interface BatchSchedulingPolicyFairSharePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}
  */
  readonly computeReservation?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}
  */
  readonly shareDecaySeconds?: number;
  /**
  * share_distribution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}
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
    share_distribution: cdktf.listMapper(batchSchedulingPolicyFairSharePolicyShareDistributionToTerraform)(struct!.shareDistribution),
  }
}

export class BatchSchedulingPolicyFairSharePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    if (this._shareDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDistribution = this._shareDistribution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchSchedulingPolicyFairSharePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeReservation = undefined;
      this._shareDecaySeconds = undefined;
      this._shareDistribution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeReservation = value.computeReservation;
      this._shareDecaySeconds = value.shareDecaySeconds;
      this._shareDistribution = value.shareDistribution;
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
  private _shareDistribution?: BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable; 
  public get shareDistribution() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('share_distribution')));
  }
  public set shareDistribution(value: BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable) {
    this._shareDistribution = value;
  }
  public resetShareDistribution() {
    this._shareDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDistributionInput() {
    return this._shareDistribution;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy aws_batch_scheduling_policy}
*/
export class BatchSchedulingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_batch_scheduling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy aws_batch_scheduling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchSchedulingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BatchSchedulingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_scheduling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _fairSharePolicy = new BatchSchedulingPolicyFairSharePolicyOutputReference(this, "fair_share_policy", true);
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
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      fair_share_policy: batchSchedulingPolicyFairSharePolicyToTerraform(this._fairSharePolicy.internalValue),
    };
  }
}
