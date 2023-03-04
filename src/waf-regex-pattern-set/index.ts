// https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafRegexPatternSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set#id WafRegexPatternSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set#name WafRegexPatternSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set#regex_pattern_strings WafRegexPatternSet#regex_pattern_strings}
  */
  readonly regexPatternStrings?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set aws_waf_regex_pattern_set}
*/
export class WafRegexPatternSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_waf_regex_pattern_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set aws_waf_regex_pattern_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafRegexPatternSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafRegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._regexPatternStrings = config.regexPatternStrings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex_pattern_strings - computed: false, optional: true, required: false
  private _regexPatternStrings?: string[]; 
  public get regexPatternStrings() {
    return cdktf.Fn.tolist(this.getListAttribute('regex_pattern_strings'));
  }
  public set regexPatternStrings(value: string[]) {
    this._regexPatternStrings = value;
  }
  public resetRegexPatternStrings() {
    this._regexPatternStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternStringsInput() {
    return this._regexPatternStrings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      regex_pattern_strings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regexPatternStrings),
    };
  }
}
