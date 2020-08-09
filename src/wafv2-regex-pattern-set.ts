// https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lock_token": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "scope": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "regular_expression": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "regex_string": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 10
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Wafv2RegexPatternSetConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly scope: string;
  readonly tags?: { [key: string]: string };
  /** regular_expression block */
  readonly regularExpression?: Wafv2RegexPatternSetRegularExpression[];
}
export interface Wafv2RegexPatternSetRegularExpression {
  readonly regexString: string;
}

// Resource

export class Wafv2RegexPatternSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
    this._regularExpression = config.regularExpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lock_token - computed: true, optional: false, required: true
  public get lockToken() {
    return this.getStringAttribute('lock_token');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // regular_expression - computed: false, optional: true, required: false
  private _regularExpression?: Wafv2RegexPatternSetRegularExpression[];
  public get regularExpression() {
    return this._regularExpression;
  }
  public set regularExpression(value: Wafv2RegexPatternSetRegularExpression[] | undefined) {
    this._regularExpression = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      scope: this._scope,
      tags: this._tags,
      regular_expression: this._regularExpression,
    };
  }
}
