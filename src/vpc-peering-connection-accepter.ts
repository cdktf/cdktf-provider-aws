// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection_accepter_a.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accept_status": {
        "type": "string",
        "computed": true
      },
      "auto_accept": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_owner_id": {
        "type": "string",
        "computed": true
      },
      "peer_region": {
        "type": "string",
        "computed": true
      },
      "peer_vpc_id": {
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
      "vpc_id": {
        "type": "string",
        "computed": true
      },
      "vpc_peering_connection_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "accepter": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "allow_classic_link_to_remote_vpc": {
              "type": "bool",
              "optional": true
            },
            "allow_remote_vpc_dns_resolution": {
              "type": "bool",
              "optional": true
            },
            "allow_vpc_to_remote_classic_link": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "requester": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "allow_classic_link_to_remote_vpc": {
              "type": "bool",
              "optional": true
            },
            "allow_remote_vpc_dns_resolution": {
              "type": "bool",
              "optional": true
            },
            "allow_vpc_to_remote_classic_link": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcPeeringConnectionAccepterAConfig extends TerraformMetaArguments {
  readonly autoAccept?: boolean;
  readonly tags?: { [key: string]: string };
  readonly vpcPeeringConnectionId: string;
  /** accepter block */
  readonly accepter?: VpcPeeringConnectionAccepterAccepter[];
  /** requester block */
  readonly requester?: VpcPeeringConnectionAccepterRequester[];
}
export interface VpcPeeringConnectionAccepterAccepter {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionAccepterRequester {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}

// Resource

export class VpcPeeringConnectionAccepterA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoAccept = config.autoAccept;
    this._tags = config.tags;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._accepter = config.accepter;
    this._requester = config.requester;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_status - computed: true, optional: false, required: true
  public get acceptStatus() {
    return this.getStringAttribute('accept_status');
  }

  // auto_accept - computed: false, optional: true, required: false
  private _autoAccept?: boolean;
  public get autoAccept() {
    return this._autoAccept;
  }
  public set autoAccept(value: boolean | undefined) {
    this._autoAccept = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // peer_owner_id - computed: true, optional: false, required: true
  public get peerOwnerId() {
    return this.getStringAttribute('peer_owner_id');
  }

  // peer_region - computed: true, optional: false, required: true
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // peer_vpc_id - computed: true, optional: false, required: true
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId: string;
  public get vpcPeeringConnectionId() {
    return this._vpcPeeringConnectionId;
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter?: VpcPeeringConnectionAccepterAccepter[];
  public get accepter() {
    return this._accepter;
  }
  public set accepter(value: VpcPeeringConnectionAccepterAccepter[] | undefined) {
    this._accepter = value;
  }

  // requester - computed: false, optional: true, required: false
  private _requester?: VpcPeeringConnectionAccepterRequester[];
  public get requester() {
    return this._requester;
  }
  public set requester(value: VpcPeeringConnectionAccepterRequester[] | undefined) {
    this._requester = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept: this._autoAccept,
      tags: this._tags,
      vpc_peering_connection_id: this._vpcPeeringConnectionId,
      accepter: this._accepter,
      requester: this._requester,
    };
  }
}
