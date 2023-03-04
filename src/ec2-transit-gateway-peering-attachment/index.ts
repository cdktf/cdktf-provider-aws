// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}
  */
  readonly peerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}
  */
  readonly peerRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}
  */
  readonly peerTransitGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}
  */
  readonly transitGatewayId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment}
*/
export class Ec2TransitGatewayPeeringAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_peering_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayPeeringAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._peerAccountId = config.peerAccountId;
    this._peerRegion = config.peerRegion;
    this._peerTransitGatewayId = config.peerTransitGatewayId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayId = config.transitGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._peerAccountId;
  }

  // peer_region - computed: false, optional: false, required: true
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // peer_transit_gateway_id - computed: false, optional: false, required: true
  private _peerTransitGatewayId?: string; 
  public get peerTransitGatewayId() {
    return this.getStringAttribute('peer_transit_gateway_id');
  }
  public set peerTransitGatewayId(value: string) {
    this._peerTransitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTransitGatewayIdInput() {
    return this._peerTransitGatewayId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      peer_account_id: cdktf.stringToTerraform(this._peerAccountId),
      peer_region: cdktf.stringToTerraform(this._peerRegion),
      peer_transit_gateway_id: cdktf.stringToTerraform(this._peerTransitGatewayId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
    };
  }
}
