// https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalByteMatchSetConfig extends TerraformMetaArguments {
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
export interface WafregionalByteMatchSetByteMatchTuple {
  readonly positionalConstraint: string;
  readonly targetString?: string;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalByteMatchSetByteMatchTupleFieldToMatch[];
}
export interface WafregionalByteMatchSetByteMatchTuplesFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafregionalByteMatchSetByteMatchTuples {
  readonly positionalConstraint: string;
  readonly targetString?: string;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatch[];
}

// Resource

export class WafregionalByteMatchSet extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // byte_match_tuple - computed: false, optional: true, required: false
  private _byteMatchTuple?: WafregionalByteMatchSetByteMatchTuple[];
  public get byteMatchTuple() {
    return this._byteMatchTuple;
  }
  public set byteMatchTuple(value: WafregionalByteMatchSetByteMatchTuple[] | undefined) {
    this._byteMatchTuple = value;
  }

  // byte_match_tuples - computed: false, optional: true, required: false
  private _byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
  public get byteMatchTuples() {
    return this._byteMatchTuples;
  }
  public set byteMatchTuples(value: WafregionalByteMatchSetByteMatchTuples[] | undefined) {
    this._byteMatchTuples = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      byte_match_tuple: this._byteMatchTuple,
      byte_match_tuples: this._byteMatchTuples,
    };
  }
}
