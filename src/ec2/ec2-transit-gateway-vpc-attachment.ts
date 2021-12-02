// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface Ec2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}
  */
  readonly applianceModeSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#dns_support Ec2TransitGatewayVpcAttachment#dns_support}
  */
  readonly dnsSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}
  */
  readonly ipv6Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#tags Ec2TransitGatewayVpcAttachment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#tags_all Ec2TransitGatewayVpcAttachment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}
  */
  readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}
  */
  readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}
  */
  readonly transitGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
*/
export class Ec2TransitGatewayVpcAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_transit_gateway_vpc_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayVpcAttachmentConfig
  */
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
    this._applianceModeSupport = config.applianceModeSupport;
    this._dnsSupport = config.dnsSupport;
    this._ipv6Support = config.ipv6Support;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
    this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
    this._transitGatewayId = config.transitGatewayId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_mode_support - computed: false, optional: true, required: false
  private _applianceModeSupport?: string; 
  public get applianceModeSupport() {
    return this.getStringAttribute('appliance_mode_support');
  }
  public set applianceModeSupport(value: string) {
    this._applianceModeSupport = value;
  }
  public resetApplianceModeSupport() {
    this._applianceModeSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceModeSupportInput() {
    return this._applianceModeSupport;
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: string; 
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }
  public set dnsSupport(value: string) {
    this._dnsSupport = value;
  }
  public resetDnsSupport() {
    this._dnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_support - computed: false, optional: true, required: false
  private _ipv6Support?: string; 
  public get ipv6Support() {
    return this.getStringAttribute('ipv6_support');
  }
  public set ipv6Support(value: string) {
    this._ipv6Support = value;
  }
  public resetIpv6Support() {
    this._ipv6Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SupportInput() {
    return this._ipv6Support;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable; 
  public get transitGatewayDefaultRouteTableAssociation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_association') as any;
  }
  public set transitGatewayDefaultRouteTableAssociation(value: boolean | cdktf.IResolvable) {
    this._transitGatewayDefaultRouteTableAssociation = value;
  }
  public resetTransitGatewayDefaultRouteTableAssociation() {
    this._transitGatewayDefaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTableAssociationInput() {
    return this._transitGatewayDefaultRouteTableAssociation;
  }

  // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable; 
  public get transitGatewayDefaultRouteTablePropagation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_propagation') as any;
  }
  public set transitGatewayDefaultRouteTablePropagation(value: boolean | cdktf.IResolvable) {
    this._transitGatewayDefaultRouteTablePropagation = value;
  }
  public resetTransitGatewayDefaultRouteTablePropagation() {
    this._transitGatewayDefaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTablePropagationInput() {
    return this._transitGatewayDefaultRouteTablePropagation;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
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
      appliance_mode_support: cdktf.stringToTerraform(this._applianceModeSupport),
      dns_support: cdktf.stringToTerraform(this._dnsSupport),
      ipv6_support: cdktf.stringToTerraform(this._ipv6Support),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
      transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
