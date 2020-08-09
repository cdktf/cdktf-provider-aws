// https://www.terraform.io/docs/providers/aws/r/eip_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allocation_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "allow_reassociation": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_interface_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "private_ip_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "public_ip": {
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

export interface EipAssociationConfig extends TerraformMetaArguments {
  readonly allocationId?: string;
  readonly allowReassociation?: boolean;
  readonly instanceId?: string;
  readonly networkInterfaceId?: string;
  readonly privateIpAddress?: string;
  readonly publicIp?: string;
}

// Resource

export class EipAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EipAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_eip_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocationId = config.allocationId;
    this._allowReassociation = config.allowReassociation;
    this._instanceId = config.instanceId;
    this._networkInterfaceId = config.networkInterfaceId;
    this._privateIpAddress = config.privateIpAddress;
    this._publicIp = config.publicIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_id - computed: true, optional: true, required: false
  private _allocationId?: string;
  public get allocationId() {
    return this._allocationId ?? this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string | undefined) {
    this._allocationId = value;
  }

  // allow_reassociation - computed: false, optional: true, required: false
  private _allowReassociation?: boolean;
  public get allowReassociation() {
    return this._allowReassociation;
  }
  public set allowReassociation(value: boolean | undefined) {
    this._allowReassociation = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId ?? this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string;
  public get networkInterfaceId() {
    return this._networkInterfaceId ?? this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string | undefined) {
    this._networkInterfaceId = value;
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string;
  public get privateIpAddress() {
    return this._privateIpAddress ?? this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string | undefined) {
    this._privateIpAddress = value;
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string;
  public get publicIp() {
    return this._publicIp ?? this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string | undefined) {
    this._publicIp = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_id: this._allocationId,
      allow_reassociation: this._allowReassociation,
      instance_id: this._instanceId,
      network_interface_id: this._networkInterfaceId,
      private_ip_address: this._privateIpAddress,
      public_ip: this._publicIp,
    };
  }
}
