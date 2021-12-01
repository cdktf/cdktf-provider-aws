// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF
*/
export interface WafRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#name WafRegexMatchSet#name}
  */
  readonly name: string;
  /**
  * regex_match_tuple block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_match_tuple WafRegexMatchSet#regex_match_tuple}
  */
  readonly regexMatchTuple?: WafRegexMatchSetRegexMatchTuple[];
}
export interface WafRegexMatchSetRegexMatchTupleFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#data WafRegexMatchSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#type WafRegexMatchSet#type}
  */
  readonly type: string;
}

export function wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct?: WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference | WafRegexMatchSetRegexMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WafRegexMatchSetRegexMatchTupleFieldToMatch | undefined {
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

  public set internalValue(value: WafRegexMatchSetRegexMatchTupleFieldToMatch | undefined) {
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
export interface WafRegexMatchSetRegexMatchTuple {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}
  */
  readonly regexPatternSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#text_transformation WafRegexMatchSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html#field_to_match WafRegexMatchSet#field_to_match}
  */
  readonly fieldToMatch: WafRegexMatchSetRegexMatchTupleFieldToMatch;
}

export function wafRegexMatchSetRegexMatchTupleToTerraform(struct?: WafRegexMatchSetRegexMatchTuple): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex_pattern_set_id: cdktf.stringToTerraform(struct!.regexPatternSetId),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct!.fieldToMatch),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set}
*/
export class WafRegexMatchSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_waf_regex_match_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafRegexMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafRegexMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_regex_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._regexMatchTuple = config.regexMatchTuple;
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

  // regex_match_tuple - computed: false, optional: true, required: false
  private _regexMatchTuple?: WafRegexMatchSetRegexMatchTuple[]; 
  public get regexMatchTuple() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('regex_match_tuple') as any;
  }
  public set regexMatchTuple(value: WafRegexMatchSetRegexMatchTuple[]) {
    this._regexMatchTuple = value;
  }
  public resetRegexMatchTuple() {
    this._regexMatchTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchTupleInput() {
    return this._regexMatchTuple;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      regex_match_tuple: cdktf.listMapper(wafRegexMatchSetRegexMatchTupleToTerraform)(this._regexMatchTuple),
    };
  }
}
