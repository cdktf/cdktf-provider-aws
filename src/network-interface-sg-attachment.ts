// https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html
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
      "network_interface_id": {
        "type": "string",
        "required": true
      },
      "security_group_id": {
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

export interface NetworkInterfaceSgAttachmentConfig extends TerraformMetaArguments {
  readonly networkInterfaceId: string;
  readonly securityGroupId: string;
}

// Resource

export class NetworkInterfaceSgAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkInterfaceSgAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_interface_sg_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkInterfaceId = config.networkInterfaceId;
    this._securityGroupId = config.securityGroupId;
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

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId;
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId: string;
  public get securityGroupId() {
    return this._securityGroupId;
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      network_interface_id: this._networkInterfaceId,
      security_group_id: this._securityGroupId,
    };
  }
}
