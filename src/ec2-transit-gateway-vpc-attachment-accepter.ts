// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dns_support": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_support": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "transit_gateway_attachment_id": {
        "type": "string",
        "required": true
      },
      "transit_gateway_default_route_table_association": {
        "type": "bool",
        "optional": true
      },
      "transit_gateway_default_route_table_propagation": {
        "type": "bool",
        "optional": true
      },
      "transit_gateway_id": {
        "type": "string",
        "computed": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      },
      "vpc_owner_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2TransitGatewayVpcAttachmentAccepterConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly transitGatewayAttachmentId: string;
  readonly transitGatewayDefaultRouteTableAssociation?: boolean;
  readonly transitGatewayDefaultRouteTablePropagation?: boolean;
}

// Resource

export class Ec2TransitGatewayVpcAttachmentAccepter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
    this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_support - computed: true, optional: false, required: true
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_support - computed: true, optional: false, required: true
  public get ipv6Support() {
    return this.getStringAttribute('ipv6_support');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId: string;
  public get transitGatewayAttachmentId() {
    return this._transitGatewayAttachmentId;
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }

  // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTableAssociation?: boolean;
  public get transitGatewayDefaultRouteTableAssociation() {
    return this._transitGatewayDefaultRouteTableAssociation;
  }
  public set transitGatewayDefaultRouteTableAssociation(value: boolean | undefined) {
    this._transitGatewayDefaultRouteTableAssociation = value;
  }

  // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTablePropagation?: boolean;
  public get transitGatewayDefaultRouteTablePropagation() {
    return this._transitGatewayDefaultRouteTablePropagation;
  }
  public set transitGatewayDefaultRouteTablePropagation(value: boolean | undefined) {
    this._transitGatewayDefaultRouteTablePropagation = value;
  }

  // transit_gateway_id - computed: true, optional: false, required: true
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_owner_id - computed: true, optional: false, required: true
  public get vpcOwnerId() {
    return this.getStringAttribute('vpc_owner_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      transit_gateway_attachment_id: this._transitGatewayAttachmentId,
      transit_gateway_default_route_table_association: this._transitGatewayDefaultRouteTableAssociation,
      transit_gateway_default_route_table_propagation: this._transitGatewayDefaultRouteTablePropagation,
    };
  }
}
