// https://www.terraform.io/docs/providers/aws/r/glue_classifier.html
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
      "csv_classifier": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "allow_single_column": {
              "type": "bool",
              "optional": true
            },
            "contains_header": {
              "type": "string",
              "optional": true
            },
            "delimiter": {
              "type": "string",
              "optional": true
            },
            "disable_value_trimming": {
              "type": "bool",
              "optional": true
            },
            "header": {
              "type": [
                "list",
                "string"
              ],
              "optional": true
            },
            "quote_symbol": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "grok_classifier": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "classification": {
              "type": "string",
              "required": true
            },
            "custom_patterns": {
              "type": "string",
              "optional": true
            },
            "grok_pattern": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "json_classifier": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "json_path": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "xml_classifier": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "classification": {
              "type": "string",
              "required": true
            },
            "row_tag": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueClassifierConfig extends TerraformMetaArguments {
  readonly name: string;
  /** csv_classifier block */
  readonly csvClassifier?: GlueClassifierCsvClassifier[];
  /** grok_classifier block */
  readonly grokClassifier?: GlueClassifierGrokClassifier[];
  /** json_classifier block */
  readonly jsonClassifier?: GlueClassifierJsonClassifier[];
  /** xml_classifier block */
  readonly xmlClassifier?: GlueClassifierXmlClassifier[];
}
export interface GlueClassifierCsvClassifier {
  readonly allowSingleColumn?: boolean;
  readonly containsHeader?: string;
  readonly delimiter?: string;
  readonly disableValueTrimming?: boolean;
  readonly header?: string[];
  readonly quoteSymbol?: string;
}
export interface GlueClassifierGrokClassifier {
  readonly classification: string;
  readonly customPatterns?: string;
  readonly grokPattern: string;
}
export interface GlueClassifierJsonClassifier {
  readonly jsonPath: string;
}
export interface GlueClassifierXmlClassifier {
  readonly classification: string;
  readonly rowTag: string;
}

// Resource

export class GlueClassifier extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_classifier',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._csvClassifier = config.csvClassifier;
    this._grokClassifier = config.grokClassifier;
    this._jsonClassifier = config.jsonClassifier;
    this._xmlClassifier = config.xmlClassifier;
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

  // csv_classifier - computed: false, optional: true, required: false
  private _csvClassifier?: GlueClassifierCsvClassifier[];
  public get csvClassifier() {
    return this._csvClassifier;
  }
  public set csvClassifier(value: GlueClassifierCsvClassifier[] | undefined) {
    this._csvClassifier = value;
  }

  // grok_classifier - computed: false, optional: true, required: false
  private _grokClassifier?: GlueClassifierGrokClassifier[];
  public get grokClassifier() {
    return this._grokClassifier;
  }
  public set grokClassifier(value: GlueClassifierGrokClassifier[] | undefined) {
    this._grokClassifier = value;
  }

  // json_classifier - computed: false, optional: true, required: false
  private _jsonClassifier?: GlueClassifierJsonClassifier[];
  public get jsonClassifier() {
    return this._jsonClassifier;
  }
  public set jsonClassifier(value: GlueClassifierJsonClassifier[] | undefined) {
    this._jsonClassifier = value;
  }

  // xml_classifier - computed: false, optional: true, required: false
  private _xmlClassifier?: GlueClassifierXmlClassifier[];
  public get xmlClassifier() {
    return this._xmlClassifier;
  }
  public set xmlClassifier(value: GlueClassifierXmlClassifier[] | undefined) {
    this._xmlClassifier = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      csv_classifier: this._csvClassifier,
      grok_classifier: this._grokClassifier,
      json_classifier: this._jsonClassifier,
      xml_classifier: this._xmlClassifier,
    };
  }
}
