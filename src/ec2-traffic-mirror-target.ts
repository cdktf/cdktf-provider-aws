// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_interface_id": {
        "type": "string",
        "optional": true
      },
      "network_load_balancer_arn": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
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

export interface Ec2TrafficMirrorTargetConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly networkInterfaceId?: string;
  readonly networkLoadBalancerArn?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Ec2TrafficMirrorTarget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorTargetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_traffic_mirror_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._networkInterfaceId = config.networkInterfaceId;
    this._networkLoadBalancerArn = config.networkLoadBalancerArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string | undefined) {
    this._networkInterfaceId = value;
  }

  // network_load_balancer_arn - computed: false, optional: true, required: false
  private _networkLoadBalancerArn?: string;
  public get networkLoadBalancerArn() {
    return this._networkLoadBalancerArn;
  }
  public set networkLoadBalancerArn(value: string | undefined) {
    this._networkLoadBalancerArn = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      network_interface_id: this._networkInterfaceId,
      network_load_balancer_arn: this._networkLoadBalancerArn,
      tags: this._tags,
    };
  }
}
