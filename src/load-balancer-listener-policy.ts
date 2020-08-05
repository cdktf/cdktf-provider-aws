// https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_name": {
        "type": "string",
        "required": true
      },
      "load_balancer_port": {
        "type": "number",
        "required": true
      },
      "policy_names": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName: string;
  public get loadBalancerName() {
    return this._loadBalancerName;
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }

  // load_balancer_port - computed: false, optional: false, required: true
  private _loadBalancerPort: number;
  public get loadBalancerPort() {
    return this._loadBalancerPort;
  }
  public set loadBalancerPort(value: number) {
    this._loadBalancerPort = value;
  }

  // policy_names - computed: false, optional: true, required: false
  private _policyNames?: string[];
  public get policyNames() {
    return this._policyNames;
  }
  public set policyNames(value: string[] | undefined) {
    this._policyNames = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_name: this._loadBalancerName,
      load_balancer_port: this._loadBalancerPort,
      policy_names: this._policyNames,
    };
  }
}
