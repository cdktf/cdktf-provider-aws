// https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalXssMatchSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** xss_match_tuple block */
  readonly xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
}
export interface WafregionalXssMatchSetXssMatchTupleFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafregionalXssMatchSetXssMatchTuple {
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch[];
}

// Resource

export class WafregionalXssMatchSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      name: this._name,
      xss_match_tuple: this._xssMatchTuple,
    };
  }
}
