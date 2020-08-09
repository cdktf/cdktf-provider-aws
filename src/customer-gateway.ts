// https://www.terraform.io/docs/providers/aws/r/customer_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "bgp_asn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
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
      "type": {
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

export interface CustomerGatewayConfig extends TerraformMetaArguments {
  readonly bgpAsn: string;
  readonly ipAddress: string;
  readonly tags?: { [key: string]: string };
  readonly type: string;
}

// Resource

export class CustomerGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CustomerGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_customer_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bgpAsn = config.bgpAsn;
    this._ipAddress = config.ipAddress;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bgp_asn - computed: false, optional: false, required: true
  private _bgpAsn: string;
  public get bgpAsn() {
    return this._bgpAsn;
  }
  public set bgpAsn(value: string) {
    this._bgpAsn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: string;
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_asn: this._bgpAsn,
      ip_address: this._ipAddress,
      tags: this._tags,
      type: this._type,
    };
  }
}
