// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
  readonly amazonSideAsn?: number;
  readonly autoAcceptSharedAttachments?: string;
  readonly defaultRouteTableAssociation?: string;
  readonly defaultRouteTablePropagation?: string;
  readonly description?: string;
  readonly dnsSupport?: string;
  readonly tags?: { [key: string]: string };
  readonly vpnEcmpSupport?: string;
}

// Resource

export class Ec2TransitGateway extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amazonSideAsn = config.amazonSideAsn;
    this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
    this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
    this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
    this._description = config.description;
    this._dnsSupport = config.dnsSupport;
    this._tags = config.tags;
    this._vpnEcmpSupport = config.vpnEcmpSupport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: false, optional: true, required: false
  private _amazonSideAsn?: number;
  public get amazonSideAsn() {
    return this.getNumberAttribute('amazon_side_asn');
  }
  public set amazonSideAsn(value: number ) {
    this._amazonSideAsn = value;
  }
  public resetAmazonSideAsn() {
    this._amazonSideAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSideAsnInput() {
    return this._amazonSideAsn
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_default_route_table_id - computed: true, optional: false, required: false
  public get associationDefaultRouteTableId() {
    return this.getStringAttribute('association_default_route_table_id');
  }

  // auto_accept_shared_attachments - computed: false, optional: true, required: false
  private _autoAcceptSharedAttachments?: string;
  public get autoAcceptSharedAttachments() {
    return this.getStringAttribute('auto_accept_shared_attachments');
  }
  public set autoAcceptSharedAttachments(value: string ) {
    this._autoAcceptSharedAttachments = value;
  }
  public resetAutoAcceptSharedAttachments() {
    this._autoAcceptSharedAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptSharedAttachmentsInput() {
    return this._autoAcceptSharedAttachments
  }

  // default_route_table_association - computed: false, optional: true, required: false
  private _defaultRouteTableAssociation?: string;
  public get defaultRouteTableAssociation() {
    return this.getStringAttribute('default_route_table_association');
  }
  public set defaultRouteTableAssociation(value: string ) {
    this._defaultRouteTableAssociation = value;
  }
  public resetDefaultRouteTableAssociation() {
    this._defaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTableAssociationInput() {
    return this._defaultRouteTableAssociation
  }

  // default_route_table_propagation - computed: false, optional: true, required: false
  private _defaultRouteTablePropagation?: string;
  public get defaultRouteTablePropagation() {
    return this.getStringAttribute('default_route_table_propagation');
  }
  public set defaultRouteTablePropagation(value: string ) {
    this._defaultRouteTablePropagation = value;
  }
  public resetDefaultRouteTablePropagation() {
    this._defaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTablePropagationInput() {
    return this._defaultRouteTablePropagation
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: string;
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }
  public set dnsSupport(value: string ) {
    this._dnsSupport = value;
  }
  public resetDnsSupport() {
    this._dnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // propagation_default_route_table_id - computed: true, optional: false, required: false
  public get propagationDefaultRouteTableId() {
    return this.getStringAttribute('propagation_default_route_table_id');
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

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: string;
  public get vpnEcmpSupport() {
    return this.getStringAttribute('vpn_ecmp_support');
  }
  public set vpnEcmpSupport(value: string ) {
    this._vpnEcmpSupport = value;
  }
  public resetVpnEcmpSupport() {
    this._vpnEcmpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEcmpSupportInput() {
    return this._vpnEcmpSupport
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: cdktf.numberToTerraform(this._amazonSideAsn),
      auto_accept_shared_attachments: cdktf.stringToTerraform(this._autoAcceptSharedAttachments),
      default_route_table_association: cdktf.stringToTerraform(this._defaultRouteTableAssociation),
      default_route_table_propagation: cdktf.stringToTerraform(this._defaultRouteTablePropagation),
      description: cdktf.stringToTerraform(this._description),
      dns_support: cdktf.stringToTerraform(this._dnsSupport),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpn_ecmp_support: cdktf.stringToTerraform(this._vpnEcmpSupport),
    };
  }
}
