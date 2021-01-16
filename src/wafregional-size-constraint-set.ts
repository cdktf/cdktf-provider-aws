// https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** size_constraints block */
  readonly sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
}
export interface WafregionalSizeConstraintSetSizeConstraintsFieldToMatch {
  readonly data?: string;
  readonly type: string;
}

function wafregionalSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalSizeConstraintSetSizeConstraints {
  readonly comparisonOperator: string;
  readonly size: number;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch[];
}

function wafregionalSizeConstraintSetSizeConstraintsToTerraform(struct?: WafregionalSizeConstraintSetSizeConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafregionalSizeConstraintSetSizeConstraintsFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


// Resource

export class WafregionalSizeConstraintSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalSizeConstraintSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_size_constraint_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._sizeConstraints = config.sizeConstraints;
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
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // size_constraints - computed: false, optional: true, required: false
  private _sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
  public get sizeConstraints() {
    return this.interpolationForAttribute('size_constraints') as any;
  }
  public set sizeConstraints(value: WafregionalSizeConstraintSetSizeConstraints[] ) {
    this._sizeConstraints = value;
  }
  public resetSizeConstraints() {
    this._sizeConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeConstraintsInput() {
    return this._sizeConstraints
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      size_constraints: cdktf.listMapper(wafregionalSizeConstraintSetSizeConstraintsToTerraform)(this._sizeConstraints),
    };
  }
}
