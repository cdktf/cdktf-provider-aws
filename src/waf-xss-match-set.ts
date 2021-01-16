// https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafXssMatchSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** xss_match_tuples block */
  readonly xssMatchTuples?: WafXssMatchSetXssMatchTuples[];
}
export interface WafXssMatchSetXssMatchTuplesFieldToMatch {
  readonly data?: string;
  readonly type: string;
}

function wafXssMatchSetXssMatchTuplesFieldToMatchToTerraform(struct?: WafXssMatchSetXssMatchTuplesFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafXssMatchSetXssMatchTuples {
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafXssMatchSetXssMatchTuplesFieldToMatch[];
}

function wafXssMatchSetXssMatchTuplesToTerraform(struct?: WafXssMatchSetXssMatchTuples): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafXssMatchSetXssMatchTuplesFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


// Resource

export class WafXssMatchSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafXssMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_xss_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._xssMatchTuples = config.xssMatchTuples;
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

  // xss_match_tuples - computed: false, optional: true, required: false
  private _xssMatchTuples?: WafXssMatchSetXssMatchTuples[];
  public get xssMatchTuples() {
    return this.interpolationForAttribute('xss_match_tuples') as any;
  }
  public set xssMatchTuples(value: WafXssMatchSetXssMatchTuples[] ) {
    this._xssMatchTuples = value;
  }
  public resetXssMatchTuples() {
    this._xssMatchTuples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssMatchTuplesInput() {
    return this._xssMatchTuples
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      xss_match_tuples: cdktf.listMapper(wafXssMatchSetXssMatchTuplesToTerraform)(this._xssMatchTuples),
    };
  }
}
