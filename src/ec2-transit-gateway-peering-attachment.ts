// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly peerAccountId?: string;
  readonly peerRegion: string;
  readonly peerTransitGatewayId: string;
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId: string;
}

// Resource

export class Ec2TransitGatewayPeeringAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._peerAccountId = config.peerAccountId;
    this._peerRegion = config.peerRegion;
    this._peerTransitGatewayId = config.peerTransitGatewayId;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // peer_account_id - computed: true, optional: true, required: false
  private _peerAccountId?: string;
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }
  public set peerAccountId(value: string) {
    this._peerAccountId = value;
  }
  public resetPeerAccountId() {
    this._peerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAccountIdInput() {
    return this._peerAccountId
  }

  // peer_region - computed: false, optional: false, required: true
  private _peerRegion: string;
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion
  }

  // peer_transit_gateway_id - computed: false, optional: false, required: true
  private _peerTransitGatewayId: string;
  public get peerTransitGatewayId() {
    return this.getStringAttribute('peer_transit_gateway_id');
  }
  public set peerTransitGatewayId(value: string) {
    this._peerTransitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTransitGatewayIdInput() {
    return this._peerTransitGatewayId
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

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId: string;
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      peer_account_id: cdktf.stringToTerraform(this._peerAccountId),
      peer_region: cdktf.stringToTerraform(this._peerRegion),
      peer_transit_gateway_id: cdktf.stringToTerraform(this._peerTransitGatewayId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
    };
  }
}
