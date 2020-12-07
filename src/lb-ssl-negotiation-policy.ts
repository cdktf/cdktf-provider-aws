// https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbSslNegotiationPolicyConfig extends cdktf.TerraformMetaArguments {
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

function lbSslNegotiationPolicyAttributeToTerraform(struct?: LbSslNegotiationPolicyAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class LbSslNegotiationPolicy extends cdktf.TerraformResource {

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

  // attribute - computed: false, optional: true, required: false
  private _attribute?: LbSslNegotiationPolicyAttribute[];
  public get attribute() {
    return this.interpolationForAttribute('attribute') as any;
  }
  public set attribute(value: LbSslNegotiationPolicyAttribute[] ) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lb_port: cdktf.numberToTerraform(this._lbPort),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
      name: cdktf.stringToTerraform(this._name),
      attribute: cdktf.listMapper(lbSslNegotiationPolicyAttributeToTerraform)(this._attribute),
    };
  }
}
