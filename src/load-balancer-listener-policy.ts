// https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoadBalancerListenerPolicyConfig extends TerraformMetaArguments {
  readonly loadBalancerName: string;
  readonly loadBalancerPort: number;
  readonly policyNames?: string[];
}

// Resource

export class LoadBalancerListenerPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // load_balancer_port - computed: false, optional: false, required: true
  private _loadBalancerPort: number;
  public get loadBalancerPort() {
    return this.getNumberAttribute('load_balancer_port');
  }
  public set loadBalancerPort(value: number) {
    this._loadBalancerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPortInput() {
    return this._loadBalancerPort
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
      load_balancer_name: this._loadBalancerName,
      load_balancer_port: this._loadBalancerPort,
      policy_names: this._policyNames,
    };
  }
}
