// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2ClientVpnRouteConfig extends TerraformMetaArguments {
  readonly clientVpnEndpointId: string;
  readonly description?: string;
  readonly destinationCidrBlock: string;
  readonly targetVpcSubnetId: string;
}

// Resource

export class Ec2ClientVpnRoute extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2ClientVpnRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._description = config.description;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._targetVpcSubnetId = config.targetVpcSubnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId: string;
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId
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

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock: string;
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // target_vpc_subnet_id - computed: false, optional: false, required: true
  private _targetVpcSubnetId: string;
  public get targetVpcSubnetId() {
    return this.getStringAttribute('target_vpc_subnet_id');
  }
  public set targetVpcSubnetId(value: string) {
    this._targetVpcSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpcSubnetIdInput() {
    return this._targetVpcSubnetId
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_vpn_endpoint_id: this._clientVpnEndpointId,
      description: this._description,
      destination_cidr_block: this._destinationCidrBlock,
      target_vpc_subnet_id: this._targetVpcSubnetId,
    };
  }
}
