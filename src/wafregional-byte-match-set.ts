// https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalByteMatchSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#name WafregionalByteMatchSet#name}
  */
  readonly name: string;
  /**
  * byte_match_tuples block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}
  */
  readonly byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
}
export interface WafregionalByteMatchSetByteMatchTuplesFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#data WafregionalByteMatchSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#type WafregionalByteMatchSet#type}
  */
  readonly type: string;
}

function wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafregionalByteMatchSetByteMatchTuplesFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalByteMatchSetByteMatchTuples {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#positional_constraint WafregionalByteMatchSet#positional_constraint}
  */
  readonly positionalConstraint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#target_string WafregionalByteMatchSet#target_string}
  */
  readonly targetString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#text_transformation WafregionalByteMatchSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#field_to_match WafregionalByteMatchSet#field_to_match}
  */
  readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatch[];
}

function wafregionalByteMatchSetByteMatchTuplesToTerraform(struct?: WafregionalByteMatchSetByteMatchTuples): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    target_string: cdktf.stringToTerraform(struct!.targetString),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set}
*/
export class WafregionalByteMatchSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafregional_byte_match_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalByteMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalByteMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_byte_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._byteMatchTuples = config.byteMatchTuples;
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

  // byte_match_tuples - computed: false, optional: true, required: false
  private _byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
  public get byteMatchTuples() {
    return this.interpolationForAttribute('byte_match_tuples') as any;
  }
  public set byteMatchTuples(value: WafregionalByteMatchSetByteMatchTuples[] ) {
    this._byteMatchTuples = value;
  }
  public resetByteMatchTuples() {
    this._byteMatchTuples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteMatchTuplesInput() {
    return this._byteMatchTuples
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      byte_match_tuples: cdktf.listMapper(wafregionalByteMatchSetByteMatchTuplesToTerraform)(this._byteMatchTuples),
    };
  }
}
