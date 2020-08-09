// https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html
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
      "geo_match_constraint": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "type": {
              "type": "string",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
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

export interface WafGeoMatchSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** geo_match_constraint block */
  readonly geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[];
}
export interface WafGeoMatchSetGeoMatchConstraint {
  readonly type: string;
  readonly value: string;
}

// Resource

export class WafGeoMatchSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafGeoMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_geo_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._geoMatchConstraint = config.geoMatchConstraint;
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

  // geo_match_constraint - computed: false, optional: true, required: false
  private _geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[];
  public get geoMatchConstraint() {
    return this._geoMatchConstraint;
  }
  public set geoMatchConstraint(value: WafGeoMatchSetGeoMatchConstraint[] | undefined) {
    this._geoMatchConstraint = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      geo_match_constraint: this._geoMatchConstraint,
    };
  }
}
