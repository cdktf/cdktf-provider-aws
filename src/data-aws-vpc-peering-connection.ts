// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc_peering_connection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accepter": {
        "type": [
          "map",
          "bool"
        ],
        "computed": true
      },
      "cidr_block": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_cidr_block": {
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
        "optional": true,
        "computed": true
      },
      "region": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "requester": {
        "type": [
          "map",
          "bool"
        ],
        "computed": true
      },
      "status": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "vpc_id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { BooleanMap } from "cdktf";

// Configuration

export interface DataAwsVpcPeeringConnectionConfig extends TerraformMetaArguments {
  readonly cidrBlock?: string;
  readonly ownerId?: string;
  readonly peerCidrBlock?: string;
  readonly peerOwnerId?: string;
  readonly peerRegion?: string;
  readonly peerVpcId?: string;
  readonly region?: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** filter block */
  readonly filter?: DataAwsVpcPeeringConnectionFilter[];
}
export interface DataAwsVpcPeeringConnectionFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsVpcPeeringConnection extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsVpcPeeringConnectionConfig = {}) {
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
    this._cidrBlock = config.cidrBlock;
    this._ownerId = config.ownerId;
    this._peerCidrBlock = config.peerCidrBlock;
    this._peerOwnerId = config.peerOwnerId;
    this._peerRegion = config.peerRegion;
    this._peerVpcId = config.peerVpcId;
    this._region = config.region;
    this._status = config.status;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepter - computed: true, optional: false, required: true
  public accepter(key: string): boolean {
    return new BooleanMap(this, 'accepter').lookup(key);
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string;
  public get cidrBlock() {
    return this._cidrBlock ?? this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string | undefined) {
    this._cidrBlock = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: string;
  public get ownerId() {
    return this._ownerId ?? this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string | undefined) {
    this._ownerId = value;
  }

  // peer_cidr_block - computed: true, optional: true, required: false
  private _peerCidrBlock?: string;
  public get peerCidrBlock() {
    return this._peerCidrBlock ?? this.getStringAttribute('peer_cidr_block');
  }
  public set peerCidrBlock(value: string | undefined) {
    this._peerCidrBlock = value;
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

  // peer_vpc_id - computed: true, optional: true, required: false
  private _peerVpcId?: string;
  public get peerVpcId() {
    return this._peerVpcId ?? this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string | undefined) {
    this._peerVpcId = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // requester - computed: true, optional: false, required: true
  public requester(key: string): boolean {
    return new BooleanMap(this, 'requester').lookup(key);
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status ?? this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId ?? this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcPeeringConnectionFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsVpcPeeringConnectionFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: this._cidrBlock,
      owner_id: this._ownerId,
      peer_cidr_block: this._peerCidrBlock,
      peer_owner_id: this._peerOwnerId,
      peer_region: this._peerRegion,
      peer_vpc_id: this._peerVpcId,
      region: this._region,
      status: this._status,
      tags: this._tags,
      vpc_id: this._vpcId,
      filter: this._filter,
    };
  }
}
