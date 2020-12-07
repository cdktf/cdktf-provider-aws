// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorTargetConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly networkInterfaceId?: string;
  readonly networkLoadBalancerArn?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Ec2TrafficMirrorTarget extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string ) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // network_load_balancer_arn - computed: false, optional: true, required: false
  private _networkLoadBalancerArn?: string;
  public get networkLoadBalancerArn() {
    return this.getStringAttribute('network_load_balancer_arn');
  }
  public set networkLoadBalancerArn(value: string ) {
    this._networkLoadBalancerArn = value;
  }
  public resetNetworkLoadBalancerArn() {
    this._networkLoadBalancerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerArnInput() {
    return this._networkLoadBalancerArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      network_load_balancer_arn: cdktf.stringToTerraform(this._networkLoadBalancerArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
