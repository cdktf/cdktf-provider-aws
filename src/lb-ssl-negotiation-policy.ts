// https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html
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
      "lb_port": {
        "type": "number",
        "required": true
      },
      "load_balancer": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "attribute": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
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

export interface LbSslNegotiationPolicyConfig extends TerraformMetaArguments {
  readonly lbPort: number;
  readonly loadBalancer: string;
  readonly name: string;
  /** attribute block */
  readonly attribute?: LbSslNegotiationPolicyAttribute[];
}
export interface LbSslNegotiationPolicyAttribute {
  readonly name: string;
  readonly value: string;
}

// Resource

export class LbSslNegotiationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbSslNegotiationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_ssl_negotiation_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._lbPort = config.lbPort;
    this._loadBalancer = config.loadBalancer;
    this._name = config.name;
    this._attribute = config.attribute;
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

  // lb_port - computed: false, optional: false, required: true
  private _lbPort: number;
  public get lbPort() {
    return this._lbPort;
  }
  public set lbPort(value: number) {
    this._lbPort = value;
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer: string;
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public set loadBalancer(value: string) {
    this._loadBalancer = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: LbSslNegotiationPolicyAttribute[];
  public get attribute() {
    return this._attribute;
  }
  public set attribute(value: LbSslNegotiationPolicyAttribute[] | undefined) {
    this._attribute = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      lb_port: this._lbPort,
      load_balancer: this._loadBalancer,
      name: this._name,
      attribute: this._attribute,
    };
  }
}
