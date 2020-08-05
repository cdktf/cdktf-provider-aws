// https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html
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
      "domain_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "resolver_endpoint_id": {
        "type": "string",
        "optional": true
      },
      "rule_type": {
        "type": "string",
        "required": true
      },
      "share_status": {
        "type": "string",
        "computed": true
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
      "target_ip": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "ip": {
              "type": "string",
              "required": true
            },
            "port": {
              "type": "number",
              "optional": true
            }
          }
        }
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
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

export interface Route53ResolverRuleConfig extends TerraformMetaArguments {
  readonly domainName: string;
  readonly name?: string;
  readonly resolverEndpointId?: string;
  readonly ruleType: string;
  readonly tags?: { [key: string]: string };
  /** target_ip block */
  readonly targetIp?: Route53ResolverRuleTargetIp[];
  /** timeouts block */
  readonly timeouts?: Route53ResolverRuleTimeouts;
}
export interface Route53ResolverRuleTargetIp {
  readonly ip: string;
  readonly port?: number;
}
export interface Route53ResolverRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class Route53ResolverRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ResolverRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._name = config.name;
    this._resolverEndpointId = config.resolverEndpointId;
    this._ruleType = config.ruleType;
    this._tags = config.tags;
    this._targetIp = config.targetIp;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // resolver_endpoint_id - computed: false, optional: true, required: false
  private _resolverEndpointId?: string;
  public get resolverEndpointId() {
    return this._resolverEndpointId;
  }
  public set resolverEndpointId(value: string | undefined) {
    this._resolverEndpointId = value;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType: string;
  public get ruleType() {
    return this._ruleType;
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }

  // share_status - computed: true, optional: false, required: true
  public get shareStatus() {
    return this.getStringAttribute('share_status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: Route53ResolverRuleTargetIp[];
  public get targetIp() {
    return this._targetIp;
  }
  public set targetIp(value: Route53ResolverRuleTargetIp[] | undefined) {
    this._targetIp = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53ResolverRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: Route53ResolverRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: this._domainName,
      name: this._name,
      resolver_endpoint_id: this._resolverEndpointId,
      rule_type: this._ruleType,
      tags: this._tags,
      target_ip: this._targetIp,
      timeouts: this._timeouts,
    };
  }
}
