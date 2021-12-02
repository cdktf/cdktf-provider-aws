// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface LoadBalancerListenerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}
  */
  readonly loadBalancerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#policy_names LoadBalancerListenerPolicy#policy_names}
  */
  readonly policyNames?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy}
*/
export class LoadBalancerListenerPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_load_balancer_listener_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerListenerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerListenerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_load_balancer_listener_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerName = config.loadBalancerName;
    this._loadBalancerPort = config.loadBalancerPort;
    this._policyNames = config.policyNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // load_balancer_port - computed: false, optional: false, required: true
  private _loadBalancerPort?: number; 
  public get loadBalancerPort() {
    return this.getNumberAttribute('load_balancer_port');
  }
  public set loadBalancerPort(value: number) {
    this._loadBalancerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPortInput() {
    return this._loadBalancerPort;
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[]; 
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      load_balancer_port: cdktf.numberToTerraform(this._loadBalancerPort),
      policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames),
    };
  }
}
