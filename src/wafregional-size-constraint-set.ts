// https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalSizeConstraintSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** size_constraints block */
  readonly sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
}
export interface WafregionalSizeConstraintSetSizeConstraintsFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafregionalSizeConstraintSetSizeConstraints {
  readonly comparisonOperator: string;
  readonly size: number;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch[];
}

// Resource

export class WafregionalSizeConstraintSet extends TerraformResource {

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
      name: this._name,
      size_constraints: this._sizeConstraints,
    };
  }
}
