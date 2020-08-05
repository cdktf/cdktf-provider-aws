// https://www.terraform.io/docs/providers/aws/r/route53_record.html
// generated from terraform resource schema

/*
{
  "version": 2,
  "block": {
    "attributes": {
      "allow_overwrite": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "fqdn": {
        "type": "string",
        "computed": true
      },
      "health_check_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "multivalue_answer_routing_policy": {
        "type": "bool",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "records": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "set_identifier": {
        "type": "string",
        "optional": true
      },
      "ttl": {
        "type": "number",
        "optional": true
      },
      "type": {
        "type": "string",
        "required": true
      },
      "zone_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "alias": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "evaluate_target_health": {
              "type": "bool",
              "required": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "zone_id": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "failover_routing_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "type": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "geolocation_routing_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "continent": {
              "type": "string",
              "optional": true
            },
            "country": {
              "type": "string",
              "optional": true
            },
            "subdivision": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "latency_routing_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "region": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "weighted_routing_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "weight": {
              "type": "number",
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

export interface Route53RecordConfig extends TerraformMetaArguments {
  readonly allowOverwrite?: boolean;
  readonly healthCheckId?: string;
  readonly multivalueAnswerRoutingPolicy?: boolean;
  readonly name: string;
  readonly records?: string[];
  readonly setIdentifier?: string;
  readonly ttl?: number;
  readonly type: string;
  readonly zoneId: string;
  /** alias block */
  readonly alias?: Route53RecordAlias[];
  /** failover_routing_policy block */
  readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[];
  /** geolocation_routing_policy block */
  readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[];
  /** latency_routing_policy block */
  readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[];
  /** weighted_routing_policy block */
  readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[];
}
export interface Route53RecordAlias {
  readonly evaluateTargetHealth: boolean;
  readonly name: string;
  readonly zoneId: string;
}
export interface Route53RecordFailoverRoutingPolicy {
  readonly type: string;
}
export interface Route53RecordGeolocationRoutingPolicy {
  readonly continent?: string;
  readonly country?: string;
  readonly subdivision?: string;
}
export interface Route53RecordLatencyRoutingPolicy {
  readonly region: string;
}
export interface Route53RecordWeightedRoutingPolicy {
  readonly weight: number;
}

// Resource

export class Route53Record extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53RecordConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_record',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowOverwrite = config.allowOverwrite;
    this._healthCheckId = config.healthCheckId;
    this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
    this._name = config.name;
    this._records = config.records;
    this._setIdentifier = config.setIdentifier;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._alias = config.alias;
    this._failoverRoutingPolicy = config.failoverRoutingPolicy;
    this._geolocationRoutingPolicy = config.geolocationRoutingPolicy;
    this._latencyRoutingPolicy = config.latencyRoutingPolicy;
    this._weightedRoutingPolicy = config.weightedRoutingPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_overwrite - computed: true, optional: true, required: false
  private _allowOverwrite?: boolean;
  public get allowOverwrite() {
    return this._allowOverwrite ?? this.getBooleanAttribute('allow_overwrite');
  }
  public set allowOverwrite(value: boolean | undefined) {
    this._allowOverwrite = value;
  }

  // fqdn - computed: true, optional: false, required: true
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string;
  public get healthCheckId() {
    return this._healthCheckId;
  }
  public set healthCheckId(value: string | undefined) {
    this._healthCheckId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // multivalue_answer_routing_policy - computed: false, optional: true, required: false
  private _multivalueAnswerRoutingPolicy?: boolean;
  public get multivalueAnswerRoutingPolicy() {
    return this._multivalueAnswerRoutingPolicy;
  }
  public set multivalueAnswerRoutingPolicy(value: boolean | undefined) {
    this._multivalueAnswerRoutingPolicy = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // records - computed: false, optional: true, required: false
  private _records?: string[];
  public get records() {
    return this._records;
  }
  public set records(value: string[] | undefined) {
    this._records = value;
  }

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string;
  public get setIdentifier() {
    return this._setIdentifier;
  }
  public set setIdentifier(value: string | undefined) {
    this._setIdentifier = value;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this._ttl;
  }
  public set ttl(value: number | undefined) {
    this._ttl = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId: string;
  public get zoneId() {
    return this._zoneId;
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: Route53RecordAlias[];
  public get alias() {
    return this._alias;
  }
  public set alias(value: Route53RecordAlias[] | undefined) {
    this._alias = value;
  }

  // failover_routing_policy - computed: false, optional: true, required: false
  private _failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[];
  public get failoverRoutingPolicy() {
    return this._failoverRoutingPolicy;
  }
  public set failoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy[] | undefined) {
    this._failoverRoutingPolicy = value;
  }

  // geolocation_routing_policy - computed: false, optional: true, required: false
  private _geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[];
  public get geolocationRoutingPolicy() {
    return this._geolocationRoutingPolicy;
  }
  public set geolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy[] | undefined) {
    this._geolocationRoutingPolicy = value;
  }

  // latency_routing_policy - computed: false, optional: true, required: false
  private _latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[];
  public get latencyRoutingPolicy() {
    return this._latencyRoutingPolicy;
  }
  public set latencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy[] | undefined) {
    this._latencyRoutingPolicy = value;
  }

  // weighted_routing_policy - computed: false, optional: true, required: false
  private _weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[];
  public get weightedRoutingPolicy() {
    return this._weightedRoutingPolicy;
  }
  public set weightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy[] | undefined) {
    this._weightedRoutingPolicy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_overwrite: this._allowOverwrite,
      health_check_id: this._healthCheckId,
      multivalue_answer_routing_policy: this._multivalueAnswerRoutingPolicy,
      name: this._name,
      records: this._records,
      set_identifier: this._setIdentifier,
      ttl: this._ttl,
      type: this._type,
      zone_id: this._zoneId,
      alias: this._alias,
      failover_routing_policy: this._failoverRoutingPolicy,
      geolocation_routing_policy: this._geolocationRoutingPolicy,
      latency_routing_policy: this._latencyRoutingPolicy,
      weighted_routing_policy: this._weightedRoutingPolicy,
    };
  }
}
