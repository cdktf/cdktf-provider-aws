// https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html
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
        "optional": true
      },
      "resolver_rule_id": {
        "type": "string",
        "required": true
      },
      "vpc_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
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

export interface Route53ResolverRuleAssociationConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly resolverRuleId: string;
  readonly vpcId: string;
  /** timeouts block */
  readonly timeouts?: Route53ResolverRuleAssociationTimeouts;
}
export interface Route53ResolverRuleAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class Route53ResolverRuleAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ResolverRuleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_rule_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resolverRuleId = config.resolverRuleId;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
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

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // resolver_rule_id - computed: false, optional: false, required: true
  private _resolverRuleId: string;
  public get resolverRuleId() {
    return this._resolverRuleId;
  }
  public set resolverRuleId(value: string) {
    this._resolverRuleId = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53ResolverRuleAssociationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: Route53ResolverRuleAssociationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resolver_rule_id: this._resolverRuleId,
      vpc_id: this._vpcId,
      timeouts: this._timeouts,
    };
  }
}
