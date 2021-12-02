// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface LoadBalancerBackendServerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#instance_port LoadBalancerBackendServerPolicy#instance_port}
  */
  readonly instancePort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#policy_names LoadBalancerBackendServerPolicy#policy_names}
  */
  readonly policyNames?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy}
*/
export class LoadBalancerBackendServerPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_load_balancer_backend_server_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerBackendServerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerBackendServerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_load_balancer_backend_server_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instancePort = config.instancePort;
    this._loadBalancerName = config.loadBalancerName;
    this._policyNames = config.policyNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_port - computed: false, optional: false, required: true
  private _instancePort?: number; 
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }
  public set instancePort(value: number) {
    this._instancePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePortInput() {
    return this._instancePort;
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
      instance_port: cdktf.numberToTerraform(this._instancePort),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames),
    };
  }
}
