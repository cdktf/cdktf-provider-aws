// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_local_gateway_virtual_interface.html
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
      "local_address": {
        "type": "string",
        "computed": true
      },
      "local_bgp_asn": {
        "type": "number",
        "computed": true
      },
      "local_gateway_id": {
        "type": "string",
        "computed": true
      },
      "local_gateway_virtual_interface_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "peer_address": {
        "type": "string",
        "computed": true
      },
      "peer_bgp_asn": {
        "type": "number",
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
      "vlan": {
        "type": "number",
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

export interface DataAwsEc2LocalGatewayVirtualInterfaceConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2LocalGatewayVirtualInterface extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayVirtualInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_virtual_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
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

  // local_address - computed: true, optional: false, required: true
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // local_bgp_asn - computed: true, optional: false, required: true
  public get localBgpAsn() {
    return this.getNumberAttribute('local_bgp_asn');
  }

  // local_gateway_id - computed: true, optional: false, required: true
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
  }

  // local_gateway_virtual_interface_ids - computed: true, optional: false, required: true
  public get localGatewayVirtualInterfaceIds() {
    return this.getListAttribute('local_gateway_virtual_interface_ids');
  }

  // peer_address - computed: true, optional: false, required: true
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }

  // peer_bgp_asn - computed: true, optional: false, required: true
  public get peerBgpAsn() {
    return this.getNumberAttribute('peer_bgp_asn');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vlan - computed: true, optional: false, required: true
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      filter: this._filter,
    };
  }
}
