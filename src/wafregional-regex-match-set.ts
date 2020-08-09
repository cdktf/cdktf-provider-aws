// https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html
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
      }
    },
    "block_types": {
      "regex_match_tuple": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "regex_pattern_set_id": {
              "type": "string",
              "required": true
            },
            "text_transformation": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "field_to_match": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "data": {
                    "type": "string",
                    "optional": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            }
          }
        }
      }
    }
  }
}
*/
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

  // regex_match_tuple - computed: false, optional: true, required: false
  private _regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[];
  public get regexMatchTuple() {
    return this._regexMatchTuple;
  }
  public set regexMatchTuple(value: WafregionalRegexMatchSetRegexMatchTuple[] | undefined) {
    this._regexMatchTuple = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      regex_match_tuple: this._regexMatchTuple,
    };
  }
}
