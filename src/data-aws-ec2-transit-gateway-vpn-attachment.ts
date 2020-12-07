// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway_vpn_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2TransitGatewayVpnAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId?: string;
  readonly vpnConnectionId?: string;
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayVpnAttachmentFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEc2TransitGatewayVpnAttachmentFilterToTerraform(struct?: DataAwsEc2TransitGatewayVpnAttachmentFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEc2TransitGatewayVpnAttachment extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string ) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
  }

  // vpn_connection_id - computed: false, optional: true, required: false
  private _vpnConnectionId?: string;
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }
  public set vpnConnectionId(value: string ) {
    this._vpnConnectionId = value;
  }
  public resetVpnConnectionId() {
    this._vpnConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnConnectionIdInput() {
    return this._vpnConnectionId
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEc2TransitGatewayVpnAttachmentFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
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
