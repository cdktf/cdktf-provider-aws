// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayVpcAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly transitGatewayAttachmentId: string;
  readonly transitGatewayDefaultRouteTableAssociation?: boolean;
  readonly transitGatewayDefaultRouteTablePropagation?: boolean;
}

// Resource

export class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {

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

  // dns_support - computed: true, optional: false, required: false
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_support - computed: true, optional: false, required: false
  public get ipv6Support() {
    return this.getStringAttribute('ipv6_support');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId: string;
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId
  }

  // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTableAssociation?: boolean;
  public get transitGatewayDefaultRouteTableAssociation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_association');
  }
  public set transitGatewayDefaultRouteTableAssociation(value: boolean ) {
    this._transitGatewayDefaultRouteTableAssociation = value;
  }
  public resetTransitGatewayDefaultRouteTableAssociation() {
    this._transitGatewayDefaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTableAssociationInput() {
    return this._transitGatewayDefaultRouteTableAssociation
  }

  // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTablePropagation?: boolean;
  public get transitGatewayDefaultRouteTablePropagation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_propagation');
  }
  public set transitGatewayDefaultRouteTablePropagation(value: boolean ) {
    this._transitGatewayDefaultRouteTablePropagation = value;
  }
  public resetTransitGatewayDefaultRouteTablePropagation() {
    this._transitGatewayDefaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTablePropagationInput() {
    return this._transitGatewayDefaultRouteTablePropagation
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_owner_id - computed: true, optional: false, required: false
  public get vpcOwnerId() {
    return this.getStringAttribute('vpc_owner_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
      transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
    };
  }
}
