// https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

function wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct?: WafRegexMatchSetRegexMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
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
  readonly fieldToMatch: WafRegexMatchSetRegexMatchTupleFieldToMatch[];
}

function wafRegexMatchSetRegexMatchTupleToTerraform(struct?: WafRegexMatchSetRegexMatchTuple): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    regex_pattern_set_id: cdktf.stringToTerraform(struct!.regexPatternSetId),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform)(struct!.fieldToMatch),
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

  // regex_match_tuple - computed: false, optional: true, required: false
  private _regexMatchTuple?: WafRegexMatchSetRegexMatchTuple[];
  public get regexMatchTuple() {
    return this.interpolationForAttribute('regex_match_tuple') as any;
  }
  public set regexMatchTuple(value: WafRegexMatchSetRegexMatchTuple[] ) {
    this._regexMatchTuple = value;
  }
  public resetRegexMatchTuple() {
    this._regexMatchTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchTupleInput() {
    return this._regexMatchTuple
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
