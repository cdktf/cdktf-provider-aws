// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEc2TransitGatewayVpnAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#tags DataAwsEc2TransitGatewayVpnAttachment#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#transit_gateway_id DataAwsEc2TransitGatewayVpnAttachment#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#vpn_connection_id DataAwsEc2TransitGatewayVpnAttachment#vpn_connection_id}
  */
  readonly vpnConnectionId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#filter DataAwsEc2TransitGatewayVpnAttachment#filter}
  */
  readonly filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayVpnAttachmentFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#name DataAwsEc2TransitGatewayVpnAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html#values DataAwsEc2TransitGatewayVpnAttachment#values}
  */
  readonly values: string[];
}

export function dataAwsEc2TransitGatewayVpnAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayVpnAttachmentFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html aws_ec2_transit_gateway_vpn_attachment}
*/
export class DataAwsEc2TransitGatewayVpnAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_transit_gateway_vpn_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpn_attachment.html aws_ec2_transit_gateway_vpn_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2TransitGatewayVpnAttachmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayVpnAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_vpn_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._vpnConnectionId = config.vpnConnectionId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
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

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // vpn_connection_id - computed: false, optional: true, required: false
  private _vpnConnectionId?: string; 
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }
  public set vpnConnectionId(value: string) {
    this._vpnConnectionId = value;
  }
  public resetVpnConnectionId() {
    this._vpnConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionIdInput() {
    return this._vpnConnectionId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2TransitGatewayVpnAttachmentFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId),
      filter: cdktf.listMapper(dataAwsEc2TransitGatewayVpnAttachmentFilterToTerraform)(this._filter),
    };
  }
}
