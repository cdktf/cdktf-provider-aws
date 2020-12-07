// https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly cookieName: string;
  readonly lbPort: number;
  readonly loadBalancer: string;
  readonly name: string;
}

// Resource

export class AppCookieStickinessPolicy extends cdktf.TerraformResource {

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
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lb_port - computed: false, optional: false, required: true
  private _lbPort: number;
  public get lbPort() {
    return this.getNumberAttribute('lb_port');
  }
  public set lbPort(value: number) {
    this._lbPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPortInput() {
    return this._lbPort
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer: string;
  public get loadBalancer() {
    return this.getStringAttribute('load_balancer');
  }
  public set loadBalancer(value: string) {
    this._loadBalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      lb_port: cdktf.numberToTerraform(this._lbPort),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
