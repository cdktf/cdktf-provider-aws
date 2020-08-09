// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dns_support": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_support": {
        "type": "string",
        "optional": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
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
        "required": true
      },
      "vpc_id": {
        "type": "string",
        "required": true
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

export interface Ec2TransitGatewayVpcAttachmentConfig extends TerraformMetaArguments {
  readonly dnsSupport?: string;
  readonly ipv6Support?: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  readonly transitGatewayDefaultRouteTableAssociation?: boolean;
  readonly transitGatewayDefaultRouteTablePropagation?: boolean;
  readonly transitGatewayId: string;
  readonly vpcId: string;
}

// Resource

export class Ec2TransitGatewayVpcAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsSupport = config.dnsSupport;
    this._ipv6Support = config.ipv6Support;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
    this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: string;
  public get dnsSupport() {
    return this._dnsSupport;
  }
  public set dnsSupport(value: string | undefined) {
    this._dnsSupport = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_support - computed: false, optional: true, required: false
  private _ipv6Support?: string;
  public get ipv6Support() {
    return this._ipv6Support;
  }
  public set ipv6Support(value: string | undefined) {
    this._ipv6Support = value;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
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

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
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
      dns_support: this._dnsSupport,
      ipv6_support: this._ipv6Support,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      transit_gateway_default_route_table_association: this._transitGatewayDefaultRouteTableAssociation,
      transit_gateway_default_route_table_propagation: this._transitGatewayDefaultRouteTablePropagation,
      transit_gateway_id: this._transitGatewayId,
      vpc_id: this._vpcId,
    };
  }
}
