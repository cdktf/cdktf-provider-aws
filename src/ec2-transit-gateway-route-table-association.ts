// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_association.html
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
      "resource_id": {
        "type": "string",
        "computed": true
      },
      "resource_type": {
        "type": "string",
        "computed": true
      },
      "transit_gateway_attachment_id": {
        "type": "string",
        "required": true
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

export interface Ec2TransitGatewayRouteTableAssociationConfig extends TerraformMetaArguments {
  readonly transitGatewayAttachmentId: string;
  readonly transitGatewayRouteTableId: string;
}

// Resource

export class Ec2TransitGatewayRouteTableAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_route_table_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
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

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: true
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId: string;
  public get transitGatewayAttachmentId() {
    return this._transitGatewayAttachmentId;
  }
  public set transitGatewayAttachmentId(value: string) {
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
      transit_gateway_attachment_id: this._transitGatewayAttachmentId,
      transit_gateway_route_table_id: this._transitGatewayRouteTableId,
    };
  }
}
