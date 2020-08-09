// https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "destination_cidr_block": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "local_gateway_route_table_id": {
        "type": "string",
        "required": true
      },
      "local_gateway_virtual_interface_group_id": {
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

export interface Ec2LocalGatewayRouteConfig extends TerraformMetaArguments {
  readonly destinationCidrBlock: string;
  readonly localGatewayRouteTableId: string;
  readonly localGatewayVirtualInterfaceGroupId: string;
}

// Resource

export class Ec2LocalGatewayRoute extends TerraformResource {

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

  // local_gateway_route_table_id - computed: false, optional: false, required: true
  private _localGatewayRouteTableId: string;
  public get localGatewayRouteTableId() {
    return this._localGatewayRouteTableId;
  }
  public set localGatewayRouteTableId(value: string) {
    this._localGatewayRouteTableId = value;
  }

  // local_gateway_virtual_interface_group_id - computed: false, optional: false, required: true
  private _localGatewayVirtualInterfaceGroupId: string;
  public get localGatewayVirtualInterfaceGroupId() {
    return this._localGatewayVirtualInterfaceGroupId;
  }
  public set localGatewayVirtualInterfaceGroupId(value: string) {
    this._localGatewayVirtualInterfaceGroupId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: this._destinationCidrBlock,
      local_gateway_route_table_id: this._localGatewayRouteTableId,
      local_gateway_virtual_interface_group_id: this._localGatewayVirtualInterfaceGroupId,
    };
  }
}
