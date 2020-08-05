// https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "regex_pattern_strings": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
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

  // regex_pattern_strings - computed: false, optional: true, required: false
  private _regexPatternStrings?: string[];
  public get regexPatternStrings() {
    return this._regexPatternStrings;
  }
  public set regexPatternStrings(value: string[] | undefined) {
    this._regexPatternStrings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      regex_pattern_strings: this._regexPatternStrings,
    };
  }
}
