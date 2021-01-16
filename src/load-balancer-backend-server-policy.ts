// https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerBackendServerPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly instancePort: number;
  readonly loadBalancerName: string;
  readonly policyNames?: string[];
}

// Resource

export class LoadBalancerBackendServerPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _instancePort: number;
  public get instancePort() {
    return this.getNumberAttribute('instance_port');
  }
  public set instancePort(value: number) {
    this._instancePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePortInput() {
    return this._instancePort
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName: string;
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[];
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }
  public set policyNames(value: string[] ) {
    this._policyNames = value;
  }
  public resetPolicyNames() {
    this._policyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames
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
