// https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalRegexMatchSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** regex_match_tuple block */
  readonly regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[];
}
export interface WafregionalRegexMatchSetRegexMatchTupleFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafregionalRegexMatchSetRegexMatchTuple {
  readonly regexPatternSetId: string;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch[];
}

// Resource

export class WafregionalRegexMatchSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalRegexMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_regex_match_set',
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
  private _regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[];
  public get regexMatchTuple() {
    return this.interpolationForAttribute('regex_match_tuple') as any;
  }
  public set regexMatchTuple(value: WafregionalRegexMatchSetRegexMatchTuple[] ) {
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
      name: this._name,
      regex_match_tuple: this._regexMatchTuple,
    };
  }
}
