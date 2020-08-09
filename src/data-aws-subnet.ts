// https://www.terraform.io/docs/providers/aws/r/data_aws_subnet.html
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
        "computed": true
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
        "optional": true,
        "computed": true
      },
      "default_for_az": {
        "type": "bool",
        "optional": true,
        "computed": true
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
        "computed": true
      },
      "outpost_arn": {
        "type": "string",
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "state": {
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

// Configuration

export interface DataAwsSubnetConfig extends TerraformMetaArguments {
  readonly availabilityZone?: string;
  readonly availabilityZoneId?: string;
  readonly cidrBlock?: string;
  readonly defaultForAz?: boolean;
  readonly ipv6CidrBlock?: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** filter block */
  readonly filter?: DataAwsSubnetFilter[];
}
export interface DataAwsSubnetFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsSubnet extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSubnetConfig = {}) {
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
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._cidrBlock = config.cidrBlock;
    this._defaultForAz = config.defaultForAz;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._state = config.state;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_ipv6_address_on_creation - computed: true, optional: false, required: true
  public get assignIpv6AddressOnCreation() {
    return this.getBooleanAttribute('assign_ipv6_address_on_creation');
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

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string;
  public get cidrBlock() {
    return this._cidrBlock ?? this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string | undefined) {
    this._cidrBlock = value;
  }

  // default_for_az - computed: true, optional: true, required: false
  private _defaultForAz?: boolean;
  public get defaultForAz() {
    return this._defaultForAz ?? this.getBooleanAttribute('default_for_az');
  }
  public set defaultForAz(value: boolean | undefined) {
    this._defaultForAz = value;
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

  // map_public_ip_on_launch - computed: true, optional: false, required: true
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch');
  }

  // outpost_arn - computed: true, optional: false, required: true
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
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
  private _filter?: DataAwsSubnetFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsSubnetFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      availability_zone_id: this._availabilityZoneId,
      cidr_block: this._cidrBlock,
      default_for_az: this._defaultForAz,
      ipv6_cidr_block: this._ipv6CidrBlock,
      state: this._state,
      tags: this._tags,
      vpc_id: this._vpcId,
      filter: this._filter,
    };
  }
}
