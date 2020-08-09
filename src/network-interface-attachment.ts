// https://www.terraform.io/docs/providers/aws/r/network_interface_attachment_a.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "attachment_id": {
        "type": "string",
        "computed": true
      },
      "device_index": {
        "type": "number",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "required": true
      },
      "network_interface_id": {
        "type": "string",
        "required": true
      },
      "status": {
        "type": "string",
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

export interface NetworkInterfaceAttachmentAConfig extends TerraformMetaArguments {
  readonly deviceIndex: number;
  readonly instanceId: string;
  readonly networkInterfaceId: string;
}

// Resource

export class NetworkInterfaceAttachmentA extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceAttachmentAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interface_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceIndex = config.deviceIndex;
    this._instanceId = config.instanceId;
    this._networkInterfaceId = config.networkInterfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: true, optional: false, required: true
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // device_index - computed: false, optional: false, required: true
  private _deviceIndex: number;
  public get deviceIndex() {
    return this._deviceIndex;
  }
  public set deviceIndex(value: number) {
    this._deviceIndex = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      device_index: this._deviceIndex,
      instance_id: this._instanceId,
      network_interface_id: this._networkInterfaceId,
    };
  }
}
