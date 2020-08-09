// https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route_table_vpc_association.html
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
      "local_gateway_id": {
        "type": "string",
        "computed": true
      },
      "local_gateway_route_table_id": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_id": {
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

export interface Ec2LocalGatewayRouteTableVpcAssociationConfig extends TerraformMetaArguments {
  readonly localGatewayRouteTableId: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
}

// Resource

export class Ec2LocalGatewayRouteTableVpcAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_route_table_vpc_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
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

  // local_gateway_id - computed: true, optional: false, required: true
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }

  // local_gateway_route_table_id - computed: false, optional: false, required: true
  private _localGatewayRouteTableId: string;
  public get localGatewayRouteTableId() {
    return this._localGatewayRouteTableId;
  }
  public set localGatewayRouteTableId(value: string) {
    this._localGatewayRouteTableId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      local_gateway_route_table_id: this._localGatewayRouteTableId,
      tags: this._tags,
      vpc_id: this._vpcId,
    };
  }
}
