// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface LbSslNegotiationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#lb_port LbSslNegotiationPolicy#lb_port}
  */
  readonly lbPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#load_balancer LbSslNegotiationPolicy#load_balancer}
  */
  readonly loadBalancer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#name LbSslNegotiationPolicy#name}
  */
  readonly name: string;
  /**
  * attribute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#attribute LbSslNegotiationPolicy#attribute}
  */
  readonly attribute?: LbSslNegotiationPolicyAttribute[];
}
export interface LbSslNegotiationPolicyAttribute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#name LbSslNegotiationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#value LbSslNegotiationPolicy#value}
  */
  readonly value: string;
}

export function lbSslNegotiationPolicyAttributeToTerraform(struct?: LbSslNegotiationPolicyAttribute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy}
*/
export class LbSslNegotiationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lb_ssl_negotiation_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbSslNegotiationPolicyConfig
  */
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
  private _lbPort?: number; 
  public get lbPort() {
    return this.getNumberAttribute('lb_port');
  }
  public set lbPort(value: number) {
    this._lbPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPortInput() {
    return this._lbPort;
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer?: string; 
  public get loadBalancer() {
    return this.getStringAttribute('load_balancer');
  }
  public set loadBalancer(value: string) {
    this._loadBalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: LbSslNegotiationPolicyAttribute[]; 
  public get attribute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attribute') as any;
  }
  public set attribute(value: LbSslNegotiationPolicyAttribute[]) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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
