// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "blackhole": {
        "type": "bool",
        "optional": true
      },
      "destination_cidr_block": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "transit_gateway_attachment_id": {
        "type": "string",
        "optional": true
      },
      "transit_gateway_route_table_id": {
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

export interface Ec2TransitGatewayRouteConfig extends TerraformMetaArguments {
  readonly blackhole?: boolean;
  readonly destinationCidrBlock: string;
  readonly transitGatewayAttachmentId?: string;
  readonly transitGatewayRouteTableId: string;
}

// Resource

export class Ec2TransitGatewayRoute extends TerraformResource {

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
    return this._blackhole;
  }
  public set blackhole(value: boolean | undefined) {
    this._blackhole = value;
  }

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock: string;
  public get destinationCidrBlock() {
    return this._destinationCidrBlock;
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _transitGatewayAttachmentId?: string;
  public get transitGatewayAttachmentId() {
    return this._transitGatewayAttachmentId;
  }
  public set transitGatewayAttachmentId(value: string | undefined) {
    this._transitGatewayAttachmentId = value;
  }

  // transit_gateway_route_table_id - computed: false, optional: false, required: true
  private _transitGatewayRouteTableId: string;
  public get transitGatewayRouteTableId() {
    return this._transitGatewayRouteTableId;
  }
  public set transitGatewayRouteTableId(value: string) {
    this._transitGatewayRouteTableId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      blackhole: this._blackhole,
      destination_cidr_block: this._destinationCidrBlock,
      transit_gateway_attachment_id: this._transitGatewayAttachmentId,
      transit_gateway_route_table_id: this._transitGatewayRouteTableId,
    };
  }
}
