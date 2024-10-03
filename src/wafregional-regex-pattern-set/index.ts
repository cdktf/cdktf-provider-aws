// https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/wafregional_regex_pattern_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalRegexPatternSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/wafregional_regex_pattern_set#id WafregionalRegexPatternSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/wafregional_regex_pattern_set#name WafregionalRegexPatternSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/wafregional_regex_pattern_set#regex_pattern_strings WafregionalRegexPatternSet#regex_pattern_strings}
  */
  readonly regexPatternStrings?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/wafregional_regex_pattern_set aws_wafregional_regex_pattern_set}
*/
export class WafregionalRegexPatternSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafregional_regex_pattern_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafregionalRegexPatternSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafregionalRegexPatternSet to import
  * @param importFromId The id of the existing WafregionalRegexPatternSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/wafregional_regex_pattern_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafregionalRegexPatternSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafregional_regex_pattern_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/wafregional_regex_pattern_set aws_wafregional_regex_pattern_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalRegexPatternSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalRegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.69.0',
        providerVersionConstraint: '~> 5.0'
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regex_pattern_strings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regexPatternStrings),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
