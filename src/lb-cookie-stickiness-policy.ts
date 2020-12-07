// https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly cookieExpirationPeriod?: number;
  readonly lbPort: number;
  readonly loadBalancer: string;
  readonly name: string;
}

// Resource

export class LbCookieStickinessPolicy extends cdktf.TerraformResource {

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
    return this.getNumberAttribute('cookie_expiration_period');
  }
  public set cookieExpirationPeriod(value: number ) {
    this._cookieExpirationPeriod = value;
  }
  public resetCookieExpirationPeriod() {
    this._cookieExpirationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpirationPeriodInput() {
    return this._cookieExpirationPeriod
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
      cookie_expiration_period: cdktf.numberToTerraform(this._cookieExpirationPeriod),
      lb_port: cdktf.numberToTerraform(this._lbPort),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
