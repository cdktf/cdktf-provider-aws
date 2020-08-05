// https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html
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
      "instance_ports": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "load_balancer": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ProxyProtocolPolicyConfig extends TerraformMetaArguments {
  readonly instancePorts: string[];
  readonly loadBalancer: string;
}

// Resource

export class ProxyProtocolPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_ports - computed: false, optional: false, required: true
  private _instancePorts: string[];
  public get instancePorts() {
    return this._instancePorts;
  }
  public set instancePorts(value: string[]) {
    this._instancePorts = value;
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer: string;
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public set loadBalancer(value: string) {
    this._loadBalancer = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_ports: this._instancePorts,
      load_balancer: this._loadBalancer,
    };
  }
}
