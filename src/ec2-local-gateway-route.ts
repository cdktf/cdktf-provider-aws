// https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2LocalGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  readonly destinationCidrBlock: string;
  readonly localGatewayRouteTableId: string;
  readonly localGatewayVirtualInterfaceGroupId: string;
}

// Resource

export class Ec2LocalGatewayRoute extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // local_gateway_route_table_id - computed: false, optional: false, required: true
  private _localGatewayRouteTableId: string;
  public get localGatewayRouteTableId() {
    return this.getStringAttribute('local_gateway_route_table_id');
  }
  public set localGatewayRouteTableId(value: string) {
    this._localGatewayRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayRouteTableIdInput() {
    return this._localGatewayRouteTableId
  }

  // local_gateway_virtual_interface_group_id - computed: false, optional: false, required: true
  private _localGatewayVirtualInterfaceGroupId: string;
  public get localGatewayVirtualInterfaceGroupId() {
    return this.getStringAttribute('local_gateway_virtual_interface_group_id');
  }
  public set localGatewayVirtualInterfaceGroupId(value: string) {
    this._localGatewayVirtualInterfaceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayVirtualInterfaceGroupIdInput() {
    return this._localGatewayVirtualInterfaceGroupId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
      local_gateway_virtual_interface_group_id: cdktf.stringToTerraform(this._localGatewayVirtualInterfaceGroupId),
    };
  }
}
