// https://www.terraform.io/docs/providers/aws/r/data_aws_vpn_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "amazon_side_asn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "attached_vpc_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface DataAwsVpnGatewayConfig extends TerraformMetaArguments {
  readonly amazonSideAsn?: string;
  readonly attachedVpcId?: string;
  readonly availabilityZone?: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsVpnGatewayFilter[];
}
export interface DataAwsVpnGatewayFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsVpnGateway extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsVpnGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amazonSideAsn = config.amazonSideAsn;
    this._attachedVpcId = config.attachedVpcId;
    this._availabilityZone = config.availabilityZone;
    this._state = config.state;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: true, optional: true, required: false
  private _amazonSideAsn?: string;
  public get amazonSideAsn() {
    return this._amazonSideAsn ?? this.getStringAttribute('amazon_side_asn');
  }
  public set amazonSideAsn(value: string | undefined) {
    this._amazonSideAsn = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attached_vpc_id - computed: true, optional: true, required: false
  private _attachedVpcId?: string;
  public get attachedVpcId() {
    return this._attachedVpcId ?? this.getStringAttribute('attached_vpc_id');
  }
  public set attachedVpcId(value: string | undefined) {
    this._attachedVpcId = value;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpnGatewayFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsVpnGatewayFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: this._amazonSideAsn,
      attached_vpc_id: this._attachedVpcId,
      availability_zone: this._availabilityZone,
      state: this._state,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
