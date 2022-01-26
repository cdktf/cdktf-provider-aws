// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface ProxyProtocolPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy#instance_ports ProxyProtocolPolicy#instance_ports}
  */
  readonly instancePorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy#load_balancer ProxyProtocolPolicy#load_balancer}
  */
  readonly loadBalancer: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy aws_proxy_protocol_policy}
*/
export class ProxyProtocolPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_proxy_protocol_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy aws_proxy_protocol_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxyProtocolPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ProxyProtocolPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_proxy_protocol_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instancePorts = config.instancePorts;
    this._loadBalancer = config.loadBalancer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_ports - computed: false, optional: false, required: true
  private _instancePorts?: string[]; 
  public get instancePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ports'));
  }
  public set instancePorts(value: string[]) {
    this._instancePorts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePortsInput() {
    return this._instancePorts;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_ports: cdktf.listMapper(cdktf.stringToTerraform)(this._instancePorts),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
    };
  }
}
