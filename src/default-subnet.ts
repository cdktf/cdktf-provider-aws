// https://www.terraform.io/docs/providers/aws/r/default_subnet.html
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
        "required": true
      },
      "availability_zone_id": {
        "type": "string",
        "computed": true
      },
      "cidr_block": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6_cidr_block": {
        "type": "string",
        "computed": true
      },
      "ipv6_cidr_block_association_id": {
        "type": "string",
        "computed": true
      },
      "map_public_ip_on_launch": {
        "type": "bool",
        "optional": true,
        "computed": true
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
        "computed": true
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

export interface DefaultSubnetConfig extends TerraformMetaArguments {
  readonly availabilityZone: string;
  readonly mapPublicIpOnLaunch?: boolean;
  readonly outpostArn?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DefaultSubnetTimeouts;
}
export interface DefaultSubnetTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class DefaultSubnet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DefaultSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_default_subnet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
    this._outpostArn = config.outpostArn;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
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

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone: string;
  public get availabilityZone() {
    return this._availabilityZone;
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }

  // availability_zone_id - computed: true, optional: false, required: true
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_cidr_block - computed: true, optional: false, required: true
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }

  // ipv6_cidr_block_association_id - computed: true, optional: false, required: true
  public get ipv6CidrBlockAssociationId() {
    return this.getStringAttribute('ipv6_cidr_block_association_id');
  }

  // map_public_ip_on_launch - computed: true, optional: true, required: false
  private _mapPublicIpOnLaunch?: boolean;
  public get mapPublicIpOnLaunch() {
    return this._mapPublicIpOnLaunch ?? this.getBooleanAttribute('map_public_ip_on_launch');
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

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DefaultSubnetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DefaultSubnetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      map_public_ip_on_launch: this._mapPublicIpOnLaunch,
      outpost_arn: this._outpostArn,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
