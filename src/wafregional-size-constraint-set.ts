// https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html
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
      "size_constraints": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "comparison_operator": {
              "type": "string",
              "required": true
            },
            "size": {
              "type": "number",
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

export interface WafregionalSizeConstraintSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** size_constraints block */
  readonly sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
}
export interface WafregionalSizeConstraintSetSizeConstraintsFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafregionalSizeConstraintSetSizeConstraints {
  readonly comparisonOperator: string;
  readonly size: number;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch[];
}

// Resource

export class WafregionalSizeConstraintSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalSizeConstraintSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_size_constraint_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._sizeConstraints = config.sizeConstraints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // size_constraints - computed: false, optional: true, required: false
  private _sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
  public get sizeConstraints() {
    return this._sizeConstraints;
  }
  public set sizeConstraints(value: WafregionalSizeConstraintSetSizeConstraints[] | undefined) {
    this._sizeConstraints = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      size_constraints: this._sizeConstraints,
    };
  }
}
