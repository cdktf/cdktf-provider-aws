// https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html
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

export interface DxHostedPublicVirtualInterfaceAccepterConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly virtualInterfaceId: string;
  /** timeouts block */
  readonly timeouts?: DxHostedPublicVirtualInterfaceAccepterTimeouts;
}
export interface DxHostedPublicVirtualInterfaceAccepterTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class DxHostedPublicVirtualInterfaceAccepter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxHostedPublicVirtualInterfaceAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_hosted_public_virtual_interface_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._virtualInterfaceId = config.virtualInterfaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // virtual_interface_id - computed: false, optional: false, required: true
  private _virtualInterfaceId: string;
  public get virtualInterfaceId() {
    return this._virtualInterfaceId;
  }
  public set virtualInterfaceId(value: string) {
    this._virtualInterfaceId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxHostedPublicVirtualInterfaceAccepterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DxHostedPublicVirtualInterfaceAccepterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      virtual_interface_id: this._virtualInterfaceId,
      timeouts: this._timeouts,
    };
  }
}
