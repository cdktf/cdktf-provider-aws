// https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalXssMatchSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#name WafregionalXssMatchSet#name}
  */
  readonly name: string;
  /**
  * xss_match_tuple block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}
  */
  readonly xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
}
export interface WafregionalXssMatchSetXssMatchTupleFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#data WafregionalXssMatchSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#type WafregionalXssMatchSet#type}
  */
  readonly type: string;
}

function wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform(struct?: WafregionalXssMatchSetXssMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalXssMatchSetXssMatchTuple {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#text_transformation WafregionalXssMatchSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#field_to_match WafregionalXssMatchSet#field_to_match}
  */
  readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch[];
}

function wafregionalXssMatchSetXssMatchTupleToTerraform(struct?: WafregionalXssMatchSetXssMatchTuple): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set}
*/
export class WafregionalXssMatchSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafregional_xss_match_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalXssMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalXssMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_xss_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._xssMatchTuple = config.xssMatchTuple;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // xss_match_tuple - computed: false, optional: true, required: false
  private _xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
  public get xssMatchTuple() {
    return this.interpolationForAttribute('xss_match_tuple') as any;
  }
  public set xssMatchTuple(value: WafregionalXssMatchSetXssMatchTuple[] ) {
    this._xssMatchTuple = value;
  }
  public resetXssMatchTuple() {
    this._xssMatchTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssMatchTupleInput() {
    return this._xssMatchTuple
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      xss_match_tuple: cdktf.listMapper(wafregionalXssMatchSetXssMatchTupleToTerraform)(this._xssMatchTuple),
    };
  }
}
