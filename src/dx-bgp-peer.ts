// https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "address_family": {
        "type": "string",
        "required": true
      },
      "amazon_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "aws_device": {
        "type": "string",
        "computed": true
      },
      "bgp_asn": {
        "type": "number",
        "required": true
      },
      "bgp_auth_key": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "bgp_peer_id": {
        "type": "string",
        "computed": true
      },
      "bgp_status": {
        "type": "string",
        "computed": true
      },
      "customer_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "virtual_interface_id": {
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

export interface DxBgpPeerConfig extends TerraformMetaArguments {
  readonly addressFamily: string;
  readonly amazonAddress?: string;
  readonly bgpAsn: number;
  readonly bgpAuthKey?: string;
  readonly customerAddress?: string;
  readonly virtualInterfaceId: string;
  /** timeouts block */
  readonly timeouts?: DxBgpPeerTimeouts;
}
export interface DxBgpPeerTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class DxBgpPeer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxBgpPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_bgp_peer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressFamily = config.addressFamily;
    this._amazonAddress = config.amazonAddress;
    this._bgpAsn = config.bgpAsn;
    this._bgpAuthKey = config.bgpAuthKey;
    this._customerAddress = config.customerAddress;
    this._virtualInterfaceId = config.virtualInterfaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily: string;
  public get addressFamily() {
    return this._addressFamily;
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }

  // amazon_address - computed: true, optional: true, required: false
  private _amazonAddress?: string;
  public get amazonAddress() {
    return this._amazonAddress ?? this.getStringAttribute('amazon_address');
  }
  public set amazonAddress(value: string | undefined) {
    this._amazonAddress = value;
  }

  // aws_device - computed: true, optional: false, required: true
  public get awsDevice() {
    return this.getStringAttribute('aws_device');
  }

  // bgp_asn - computed: false, optional: false, required: true
  private _bgpAsn: number;
  public get bgpAsn() {
    return this._bgpAsn;
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }

  // bgp_auth_key - computed: true, optional: true, required: false
  private _bgpAuthKey?: string;
  public get bgpAuthKey() {
    return this._bgpAuthKey ?? this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string | undefined) {
    this._bgpAuthKey = value;
  }

  // bgp_peer_id - computed: true, optional: false, required: true
  public get bgpPeerId() {
    return this.getStringAttribute('bgp_peer_id');
  }

  // bgp_status - computed: true, optional: false, required: true
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string;
  public get customerAddress() {
    return this._customerAddress ?? this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string | undefined) {
    this._customerAddress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // virtual_interface_id - computed: false, optional: false, required: true
  private _virtualInterfaceId: string;
  public get virtualInterfaceId() {
    return this._virtualInterfaceId;
  }
  public set virtualInterfaceId(value: string) {
    this._virtualInterfaceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxBgpPeerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DxBgpPeerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: this._addressFamily,
      amazon_address: this._amazonAddress,
      bgp_asn: this._bgpAsn,
      bgp_auth_key: this._bgpAuthKey,
      customer_address: this._customerAddress,
      virtual_interface_id: this._virtualInterfaceId,
      timeouts: this._timeouts,
    };
  }
}
