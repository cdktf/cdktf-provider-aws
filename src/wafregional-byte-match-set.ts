// https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalByteMatchSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** byte_match_tuple block */
  readonly byteMatchTuple?: WafregionalByteMatchSetByteMatchTuple[];
  /** byte_match_tuples block */
  readonly byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
}
export interface WafregionalByteMatchSetByteMatchTupleFieldToMatch {
  readonly data?: string;
  readonly type: string;
}

function wafregionalByteMatchSetByteMatchTupleFieldToMatchToTerraform(struct?: WafregionalByteMatchSetByteMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalByteMatchSetByteMatchTuple {
  readonly positionalConstraint: string;
  readonly targetString?: string;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalByteMatchSetByteMatchTupleFieldToMatch[];
}

function wafregionalByteMatchSetByteMatchTupleToTerraform(struct?: WafregionalByteMatchSetByteMatchTuple): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    target_string: cdktf.stringToTerraform(struct!.targetString),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafregionalByteMatchSetByteMatchTupleFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}

export interface WafregionalByteMatchSetByteMatchTuplesFieldToMatch {
  readonly data?: string;
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
  readonly positionalConstraint: string;
  readonly targetString?: string;
  readonly textTransformation: string;
  /** field_to_match block */
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


// Resource

export class WafregionalByteMatchSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._byteMatchTuple = config.byteMatchTuple;
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

  // byte_match_tuple - computed: false, optional: true, required: false
  private _byteMatchTuple?: WafregionalByteMatchSetByteMatchTuple[];
  public get byteMatchTuple() {
    return this.interpolationForAttribute('byte_match_tuple') as any;
  }
  public set byteMatchTuple(value: WafregionalByteMatchSetByteMatchTuple[] ) {
    this._byteMatchTuple = value;
  }
  public resetByteMatchTuple() {
    this._byteMatchTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteMatchTupleInput() {
    return this._byteMatchTuple
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
      byte_match_tuple: cdktf.listMapper(wafregionalByteMatchSetByteMatchTupleToTerraform)(this._byteMatchTuple),
      byte_match_tuples: cdktf.listMapper(wafregionalByteMatchSetByteMatchTuplesToTerraform)(this._byteMatchTuples),
    };
  }
}
