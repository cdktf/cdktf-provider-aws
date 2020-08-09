// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway_vpn_attachment.html
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "transit_gateway_id": {
        "type": "string",
        "optional": true
      },
      "vpn_connection_id": {
        "type": "string",
        "optional": true
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
                "list",
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

export interface DataAwsEc2TransitGatewayVpnAttachmentConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId?: string;
  readonly vpnConnectionId?: string;
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayVpnAttachmentFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2TransitGatewayVpnAttachment extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayVpnAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_vpn_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
    this._vpnConnectionId = config.vpnConnectionId;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string | undefined) {
    this._transitGatewayId = value;
  }

  // vpn_connection_id - computed: false, optional: true, required: false
  private _vpnConnectionId?: string;
  public get vpnConnectionId() {
    return this._vpnConnectionId;
  }
  public set vpnConnectionId(value: string | undefined) {
    this._vpnConnectionId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayVpnAttachmentFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2TransitGatewayVpnAttachmentFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      transit_gateway_id: this._transitGatewayId,
      vpn_connection_id: this._vpnConnectionId,
      filter: this._filter,
    };
  }
}
