// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  readonly blackhole?: boolean;
  readonly destinationCidrBlock: string;
  readonly transitGatewayAttachmentId?: string;
  readonly transitGatewayRouteTableId: string;
}

// Resource

export class Ec2TransitGatewayRoute extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blackhole = config.blackhole;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blackhole - computed: false, optional: true, required: false
  private _blackhole?: boolean;
  public get blackhole() {
    return this.getBooleanAttribute('blackhole');
  }
  public set blackhole(value: boolean ) {
    this._blackhole = value;
  }
  public resetBlackhole() {
    this._blackhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackholeInput() {
    return this._blackhole
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

  // transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _transitGatewayAttachmentId?: string;
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string ) {
    this._transitGatewayAttachmentId = value;
  }
  public resetTransitGatewayAttachmentId() {
    this._transitGatewayAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId
  }

  // transit_gateway_route_table_id - computed: false, optional: false, required: true
  private _transitGatewayRouteTableId: string;
  public get transitGatewayRouteTableId() {
    return this.getStringAttribute('transit_gateway_route_table_id');
  }
  public set transitGatewayRouteTableId(value: string) {
    this._transitGatewayRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayRouteTableIdInput() {
    return this._transitGatewayRouteTableId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blackhole: cdktf.booleanToTerraform(this._blackhole),
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
    };
  }
}
