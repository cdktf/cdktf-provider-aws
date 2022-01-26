// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Batch
*/
export interface DataAwsBatchSchedulingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution extends cdktf.ComplexComputedList {

  // share_identifier - computed: true, optional: false, required: false
  public get shareIdentifier() {
    return this.getStringAttribute('share_identifier');
  }

  // weight_factor - computed: true, optional: false, required: false
  public get weightFactor() {
    return this.getNumberAttribute('weight_factor');
  }
}
export class DataAwsBatchSchedulingPolicyFairSharePolicy extends cdktf.ComplexComputedList {

  // compute_reservation - computed: true, optional: false, required: false
  public get computeReservation() {
    return this.getNumberAttribute('compute_reservation');
  }

  // share_decay_seconds - computed: true, optional: false, required: false
  public get shareDecaySeconds() {
    return this.getNumberAttribute('share_decay_seconds');
  }

  // share_distribution - computed: true, optional: false, required: false
  public get shareDistribution() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('share_distribution')));
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy aws_batch_scheduling_policy}
*/
export class DataAwsBatchSchedulingPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_batch_scheduling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy aws_batch_scheduling_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBatchSchedulingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsBatchSchedulingPolicyConfig) {
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
    this._arn = config.arn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // fair_share_policy - computed: true, optional: false, required: false
  public fairSharePolicy(index: string) {
    return new DataAwsBatchSchedulingPolicyFairSharePolicy(this, 'fair_share_policy', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
