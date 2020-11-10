// https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalRegexPatternSetConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly regexPatternStrings?: string[];
}

// Resource

export class WafregionalRegexPatternSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalRegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._regexPatternStrings = config.regexPatternStrings;
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

  // regex_pattern_strings - computed: false, optional: true, required: false
  private _regexPatternStrings?: string[];
  public get regexPatternStrings() {
    return this.getListAttribute('regex_pattern_strings');
  }
  public set regexPatternStrings(value: string[] ) {
    this._regexPatternStrings = value;
  }
  public resetRegexPatternStrings() {
    this._regexPatternStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternStringsInput() {
    return this._regexPatternStrings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      regex_pattern_strings: this._regexPatternStrings,
    };
  }
}
