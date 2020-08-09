// https://www.terraform.io/docs/providers/aws/r/waf_rule.html
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
      "metric_name": {
        "type": "string",
        "required": true
      },
      "name": {
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
      "predicates": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "data_id": {
              "type": "string",
              "required": true
            },
            "negated": {
              "type": "bool",
              "required": true
            },
            "type": {
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

export interface WafRuleConfig extends TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** predicates block */
  readonly predicates?: WafRulePredicates[];
}
export interface WafRulePredicates {
  readonly dataId: string;
  readonly negated: boolean;
  readonly type: string;
}

// Resource

export class WafRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metricName = config.metricName;
    this._name = config.name;
    this._tags = config.tags;
    this._predicates = config.predicates;
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName: string;
  public get metricName() {
    return this._metricName;
  }
  public set metricName(value: string) {
    this._metricName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates?: WafRulePredicates[];
  public get predicates() {
    return this._predicates;
  }
  public set predicates(value: WafRulePredicates[] | undefined) {
    this._predicates = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: this._metricName,
      name: this._name,
      tags: this._tags,
      predicates: this._predicates,
    };
  }
}
