// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html
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
      "peer_account_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_region": {
        "type": "string",
        "required": true
      },
      "peer_transit_gateway_id": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "transit_gateway_id": {
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

export interface Ec2TransitGatewayPeeringAttachmentConfig extends TerraformMetaArguments {
  readonly peerAccountId?: string;
  readonly peerRegion: string;
  readonly peerTransitGatewayId: string;
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId: string;
}

// Resource

export class Ec2TransitGatewayPeeringAttachment extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // peer_account_id - computed: true, optional: true, required: false
  private _peerAccountId?: string;
  public get peerAccountId() {
    return this._peerAccountId ?? this.getStringAttribute('peer_account_id');
  }
  public set peerAccountId(value: string | undefined) {
    this._peerAccountId = value;
  }

  // peer_region - computed: false, optional: false, required: true
  private _peerRegion: string;
  public get peerRegion() {
    return this._peerRegion;
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }

  // peer_transit_gateway_id - computed: false, optional: false, required: true
  private _peerTransitGatewayId: string;
  public get peerTransitGatewayId() {
    return this._peerTransitGatewayId;
  }
  public set peerTransitGatewayId(value: string) {
    this._peerTransitGatewayId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      peer_account_id: this._peerAccountId,
      peer_region: this._peerRegion,
      peer_transit_gateway_id: this._peerTransitGatewayId,
      tags: this._tags,
      transit_gateway_id: this._transitGatewayId,
    };
  }
}
