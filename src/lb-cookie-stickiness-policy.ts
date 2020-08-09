// https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cookie_expiration_period": {
        "type": "number",
        "optional": true
      },
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LbCookieStickinessPolicyConfig extends TerraformMetaArguments {
  readonly cookieExpirationPeriod?: number;
  readonly lbPort: number;
  readonly loadBalancer: string;
  readonly name: string;
}

// Resource

export class LbCookieStickinessPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbCookieStickinessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_cookie_stickiness_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cookieExpirationPeriod = config.cookieExpirationPeriod;
    this._lbPort = config.lbPort;
    this._loadBalancer = config.loadBalancer;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_expiration_period - computed: false, optional: true, required: false
  private _cookieExpirationPeriod?: number;
  public get cookieExpirationPeriod() {
    return this._cookieExpirationPeriod;
  }
  public set cookieExpirationPeriod(value: number | undefined) {
    this._cookieExpirationPeriod = value;
  }

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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_expiration_period: this._cookieExpirationPeriod,
      lb_port: this._lbPort,
      load_balancer: this._loadBalancer,
      name: this._name,
    };
  }
}
