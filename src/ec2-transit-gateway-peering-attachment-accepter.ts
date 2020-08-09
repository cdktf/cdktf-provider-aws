// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html
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
        "computed": true
      },
      "peer_region": {
        "type": "string",
        "computed": true
      },
      "peer_transit_gateway_id": {
        "type": "string",
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
      "transit_gateway_id": {
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

export interface Ec2TransitGatewayPeeringAttachmentAccepterConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly transitGatewayAttachmentId: string;
}

// Resource

export class Ec2TransitGatewayPeeringAttachmentAccepter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment_accepter',
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

  // peer_account_id - computed: true, optional: false, required: true
  public get peerAccountId() {
    return this.getStringAttribute('peer_account_id');
  }

  // peer_region - computed: true, optional: false, required: true
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // peer_transit_gateway_id - computed: true, optional: false, required: true
  public get peerTransitGatewayId() {
    return this.getStringAttribute('peer_transit_gateway_id');
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

  // transit_gateway_id - computed: true, optional: false, required: true
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      transit_gateway_attachment_id: this._transitGatewayAttachmentId,
    };
  }
}
