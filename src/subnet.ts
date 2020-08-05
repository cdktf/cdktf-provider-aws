// https://www.terraform.io/docs/providers/aws/r/subnet.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "assign_ipv6_address_on_creation": {
        "type": "bool",
        "optional": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "availability_zone_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cidr_block": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_cidr_block": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_cidr_block_association_id": {
        "type": "string",
        "computed": true
      },
      "map_public_ip_on_launch": {
        "type": "bool",
        "optional": true
      },
      "outpost_arn": {
        "type": "string",
        "optional": true
      },
      "owner_id": {
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
        "required": true
      }
    },
    "block_types": {
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

export interface SubnetConfig extends TerraformMetaArguments {
  readonly assignIpv6AddressOnCreation?: boolean;
  readonly availabilityZone?: string;
  readonly availabilityZoneId?: string;
  readonly cidrBlock: string;
  readonly ipv6CidrBlock?: string;
  readonly mapPublicIpOnLaunch?: boolean;
  readonly outpostArn?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
  /** timeouts block */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class Subnet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_subnet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._cidrBlock = config.cidrBlock;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
    this._outpostArn = config.outpostArn;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_ipv6_address_on_creation - computed: false, optional: true, required: false
  private _assignIpv6AddressOnCreation?: boolean;
  public get assignIpv6AddressOnCreation() {
    return this._assignIpv6AddressOnCreation;
  }
  public set assignIpv6AddressOnCreation(value: boolean | undefined) {
    this._assignIpv6AddressOnCreation = value;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // availability_zone_id - computed: true, optional: true, required: false
  private _availabilityZoneId?: string;
  public get availabilityZoneId() {
    return this._availabilityZoneId ?? this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string | undefined) {
    this._availabilityZoneId = value;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock: string;
  public get cidrBlock() {
    return this._cidrBlock;
  }
  public set cidrBlock(value: string) {
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

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string;
  public get ipv6CidrBlock() {
    return this._ipv6CidrBlock ?? this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string | undefined) {
    this._ipv6CidrBlock = value;
  }

  // ipv6_cidr_block_association_id - computed: true, optional: false, required: true
  public get ipv6CidrBlockAssociationId() {
    return this.getStringAttribute('ipv6_cidr_block_association_id');
  }

  // map_public_ip_on_launch - computed: false, optional: true, required: false
  private _mapPublicIpOnLaunch?: boolean;
  public get mapPublicIpOnLaunch() {
    return this._mapPublicIpOnLaunch;
  }
  public set mapPublicIpOnLaunch(value: boolean | undefined) {
    this._mapPublicIpOnLaunch = value;
  }

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string;
  public get outpostArn() {
    return this._outpostArn;
  }
  public set outpostArn(value: string | undefined) {
    this._outpostArn = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SubnetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SubnetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_ipv6_address_on_creation: this._assignIpv6AddressOnCreation,
      availability_zone: this._availabilityZone,
      availability_zone_id: this._availabilityZoneId,
      cidr_block: this._cidrBlock,
      ipv6_cidr_block: this._ipv6CidrBlock,
      map_public_ip_on_launch: this._mapPublicIpOnLaunch,
      outpost_arn: this._outpostArn,
      tags: this._tags,
      vpc_id: this._vpcId,
      timeouts: this._timeouts,
    };
  }
}
