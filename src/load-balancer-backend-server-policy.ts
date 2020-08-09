// https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html
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
      "instance_port": {
        "type": "number",
        "required": true
      },
      "load_balancer_name": {
        "type": "string",
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

export interface LoadBalancerBackendServerPolicyConfig extends TerraformMetaArguments {
  readonly instancePort: number;
  readonly loadBalancerName: string;
  readonly policyNames?: string[];
}

// Resource

export class LoadBalancerBackendServerPolicy extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_port - computed: false, optional: false, required: true
  private _instancePort: number;
  public get instancePort() {
    return this._instancePort;
  }
  public set instancePort(value: number) {
    this._instancePort = value;
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName: string;
  public get loadBalancerName() {
    return this._loadBalancerName;
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
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
      instance_port: this._instancePort,
      load_balancer_name: this._loadBalancerName,
      policy_names: this._policyNames,
    };
  }
}
