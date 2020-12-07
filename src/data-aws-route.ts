// https://www.terraform.io/docs/providers/aws/r/data_aws_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRouteConfig extends cdktf.TerraformMetaArguments {
  readonly destinationCidrBlock?: string;
  readonly destinationIpv6CidrBlock?: string;
  readonly egressOnlyGatewayId?: string;
  readonly gatewayId?: string;
  readonly instanceId?: string;
  readonly natGatewayId?: string;
  readonly networkInterfaceId?: string;
  readonly routeTableId: string;
  readonly transitGatewayId?: string;
  readonly vpcPeeringConnectionId?: string;
}

// Resource

export class DataAwsRoute extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
    this._egressOnlyGatewayId = config.egressOnlyGatewayId;
    this._gatewayId = config.gatewayId;
    this._instanceId = config.instanceId;
    this._natGatewayId = config.natGatewayId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._routeTableId = config.routeTableId;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_cidr_block - computed: true, optional: true, required: false
  private _destinationCidrBlock?: string;
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  public resetDestinationCidrBlock() {
    this._destinationCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock
  }

  // destination_ipv6_cidr_block - computed: true, optional: true, required: false
  private _destinationIpv6CidrBlock?: string;
  public get destinationIpv6CidrBlock() {
    return this.getStringAttribute('destination_ipv6_cidr_block');
  }
  public set destinationIpv6CidrBlock(value: string) {
    this._destinationIpv6CidrBlock = value;
  }
  public resetDestinationIpv6CidrBlock() {
    this._destinationIpv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpv6CidrBlockInput() {
    return this._destinationIpv6CidrBlock
  }

  // egress_only_gateway_id - computed: true, optional: true, required: false
  private _egressOnlyGatewayId?: string;
  public get egressOnlyGatewayId() {
    return this.getStringAttribute('egress_only_gateway_id');
  }
  public set egressOnlyGatewayId(value: string) {
    this._egressOnlyGatewayId = value;
  }
  public resetEgressOnlyGatewayId() {
    this._egressOnlyGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressOnlyGatewayIdInput() {
    return this._egressOnlyGatewayId
  }

  // gateway_id - computed: true, optional: true, required: false
  private _gatewayId?: string;
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // nat_gateway_id - computed: true, optional: true, required: false
  private _natGatewayId?: string;
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  public resetNatGatewayId() {
    this._natGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId: string;
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId
  }

  // transit_gateway_id - computed: true, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
  }

  // vpc_peering_connection_id - computed: true, optional: true, required: false
  private _vpcPeeringConnectionId?: string;
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  public resetVpcPeeringConnectionId() {
    this._vpcPeeringConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      destination_ipv6_cidr_block: cdktf.stringToTerraform(this._destinationIpv6CidrBlock),
      egress_only_gateway_id: cdktf.stringToTerraform(this._egressOnlyGatewayId),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
    };
  }
}
