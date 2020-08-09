// https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html
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
      "availability_zone": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
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
        "optional": true,
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

export interface VpnGatewayConfig extends TerraformMetaArguments {
  readonly amazonSideAsn?: string;
  readonly availabilityZone?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
}

// Resource

export class VpnGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnGatewayConfig = {}) {
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
    this._availabilityZone = config.availabilityZone;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
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

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: this._amazonSideAsn,
      availability_zone: this._availabilityZone,
      tags: this._tags,
      vpc_id: this._vpcId,
    };
  }
}
