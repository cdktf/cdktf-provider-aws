// https://www.terraform.io/docs/providers/aws/r/vpc_peering_connection.html
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
        "optional": true,
        "computed": true
      },
      "peer_region": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_vpc_id": {
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
      "vpc_id": {
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
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcPeeringConnectionConfig extends TerraformMetaArguments {
  readonly autoAccept?: boolean;
  readonly peerOwnerId?: string;
  readonly peerRegion?: string;
  readonly peerVpcId: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
  /** accepter block */
  readonly accepter?: VpcPeeringConnectionAccepter[];
  /** requester block */
  readonly requester?: VpcPeeringConnectionRequester[];
  /** timeouts block */
  readonly timeouts?: VpcPeeringConnectionTimeouts;
}
export interface VpcPeeringConnectionAccepter {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionRequester {
  readonly allowClassicLinkToRemoteVpc?: boolean;
  readonly allowRemoteVpcDnsResolution?: boolean;
  readonly allowVpcToRemoteClassicLink?: boolean;
}
export interface VpcPeeringConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class VpcPeeringConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoAccept = config.autoAccept;
    this._peerOwnerId = config.peerOwnerId;
    this._peerRegion = config.peerRegion;
    this._peerVpcId = config.peerVpcId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._accepter = config.accepter;
    this._requester = config.requester;
    this._timeouts = config.timeouts;
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

  // peer_owner_id - computed: true, optional: true, required: false
  private _peerOwnerId?: string;
  public get peerOwnerId() {
    return this._peerOwnerId ?? this.getStringAttribute('peer_owner_id');
  }
  public set peerOwnerId(value: string | undefined) {
    this._peerOwnerId = value;
  }

  // peer_region - computed: true, optional: true, required: false
  private _peerRegion?: string;
  public get peerRegion() {
    return this._peerRegion ?? this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string | undefined) {
    this._peerRegion = value;
  }

  // peer_vpc_id - computed: false, optional: false, required: true
  private _peerVpcId: string;
  public get peerVpcId() {
    return this._peerVpcId;
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // accepter - computed: false, optional: true, required: false
  private _accepter?: VpcPeeringConnectionAccepter[];
  public get accepter() {
    return this._accepter;
  }
  public set accepter(value: VpcPeeringConnectionAccepter[] | undefined) {
    this._accepter = value;
  }

  // requester - computed: false, optional: true, required: false
  private _requester?: VpcPeeringConnectionRequester[];
  public get requester() {
    return this._requester;
  }
  public set requester(value: VpcPeeringConnectionRequester[] | undefined) {
    this._requester = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcPeeringConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: VpcPeeringConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_accept: this._autoAccept,
      peer_owner_id: this._peerOwnerId,
      peer_region: this._peerRegion,
      peer_vpc_id: this._peerVpcId,
      tags: this._tags,
      vpc_id: this._vpcId,
      accepter: this._accepter,
      requester: this._requester,
      timeouts: this._timeouts,
    };
  }
}
