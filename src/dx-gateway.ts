// https://www.terraform.io/docs/providers/aws/r/dx_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "amazon_side_asn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "owner_account_id": {
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

export interface DxGatewayConfig extends TerraformMetaArguments {
  readonly amazonSideAsn: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: DxGatewayTimeouts;
}
export interface DxGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class DxGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amazonSideAsn = config.amazonSideAsn;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: false, optional: false, required: true
  private _amazonSideAsn: string;
  public get amazonSideAsn() {
    return this._amazonSideAsn;
  }
  public set amazonSideAsn(value: string) {
    this._amazonSideAsn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner_account_id - computed: true, optional: false, required: true
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DxGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: this._amazonSideAsn,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
