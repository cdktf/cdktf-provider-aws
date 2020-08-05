// https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cookie_name": {
        "type": "string",
        "required": true
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

export interface AppCookieStickinessPolicyConfig extends TerraformMetaArguments {
  readonly cookieName: string;
  readonly lbPort: number;
  readonly loadBalancer: string;
  readonly name: string;
}

// Resource

export class AppCookieStickinessPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppCookieStickinessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_app_cookie_stickiness_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cookieName = config.cookieName;
    this._lbPort = config.lbPort;
    this._loadBalancer = config.loadBalancer;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName: string;
  public get cookieName() {
    return this._cookieName;
  }
  public set cookieName(value: string) {
    this._cookieName = value;
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
      cookie_name: this._cookieName,
      lb_port: this._lbPort,
      load_balancer: this._loadBalancer,
      name: this._name,
    };
  }
}
