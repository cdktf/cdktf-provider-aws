// https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** size_constraints block */
  readonly sizeConstraints?: WafSizeConstraintSetSizeConstraints[];
}
export interface WafSizeConstraintSetSizeConstraintsFieldToMatch {
  readonly data?: string;
  readonly type: string;
}

function wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafSizeConstraintSetSizeConstraintsFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafSizeConstraintSetSizeConstraints {
  readonly comparisonOperator: string;
  readonly size: number;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatch[];
}

function wafSizeConstraintSetSizeConstraintsToTerraform(struct?: WafSizeConstraintSetSizeConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


// Resource

export class WafSizeConstraintSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafSizeConstraintSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_size_constraint_set',
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
  private _sizeConstraints?: WafSizeConstraintSetSizeConstraints[];
  public get sizeConstraints() {
    return this.interpolationForAttribute('size_constraints') as any;
  }
  public set sizeConstraints(value: WafSizeConstraintSetSizeConstraints[] ) {
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
      size_constraints: cdktf.listMapper(wafSizeConstraintSetSizeConstraintsToTerraform)(this._sizeConstraints),
    };
  }
}
