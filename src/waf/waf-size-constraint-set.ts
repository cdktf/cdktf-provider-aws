// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF
*/
export interface WafSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#name WafSizeConstraintSet#name}
  */
  readonly name: string;
  /**
  * size_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#size_constraints WafSizeConstraintSet#size_constraints}
  */
  readonly sizeConstraints?: WafSizeConstraintSetSizeConstraints[];
}
export interface WafSizeConstraintSetSizeConstraintsFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#data WafSizeConstraintSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#type WafSizeConstraintSet#type}
  */
  readonly type: string;
}

export function wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference | WafSizeConstraintSetSizeConstraintsFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WafSizeConstraintSetSizeConstraintsFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafSizeConstraintSetSizeConstraintsFieldToMatch | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._data) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafSizeConstraintSetSizeConstraintsFieldToMatch | undefined) {
    if (value === undefined) {
      this._data = undefined;
      this._type = undefined;
    }
    else {
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WafSizeConstraintSetSizeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#comparison_operator WafSizeConstraintSet#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#size WafSizeConstraintSet#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#text_transformation WafSizeConstraintSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html#field_to_match WafSizeConstraintSet#field_to_match}
  */
  readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatch;
}

export function wafSizeConstraintSetSizeConstraintsToTerraform(struct?: WafSizeConstraintSetSizeConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct!.fieldToMatch),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set}
*/
export class WafSizeConstraintSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_waf_size_constraint_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafSizeConstraintSetConfig
  */
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

  // size_constraints - computed: false, optional: true, required: false
  private _sizeConstraints?: WafSizeConstraintSetSizeConstraints[]; 
  public get sizeConstraints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('size_constraints') as any;
  }
  public set sizeConstraints(value: WafSizeConstraintSetSizeConstraints[]) {
    this._sizeConstraints = value;
  }
  public resetSizeConstraints() {
    this._sizeConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeConstraintsInput() {
    return this._sizeConstraints;
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
