// https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafByteMatchSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** byte_match_tuples block */
  readonly byteMatchTuples?: WafByteMatchSetByteMatchTuples[];
}
export interface WafByteMatchSetByteMatchTuplesFieldToMatch {
  readonly data?: string;
  readonly type: string;
}

function wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafByteMatchSetByteMatchTuplesFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafByteMatchSetByteMatchTuples {
  readonly positionalConstraint: string;
  readonly targetString?: string;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafByteMatchSetByteMatchTuplesFieldToMatch[];
}

function wafByteMatchSetByteMatchTuplesToTerraform(struct?: WafByteMatchSetByteMatchTuples): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    target_string: cdktf.stringToTerraform(struct!.targetString),
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


// Resource

export class WafByteMatchSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafByteMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_byte_match_set',
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
  private _byteMatchTuples?: WafByteMatchSetByteMatchTuples[];
  public get byteMatchTuples() {
    return this.interpolationForAttribute('byte_match_tuples') as any;
  }
  public set byteMatchTuples(value: WafByteMatchSetByteMatchTuples[] ) {
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
      byte_match_tuples: cdktf.listMapper(wafByteMatchSetByteMatchTuplesToTerraform)(this._byteMatchTuples),
    };
  }
}
