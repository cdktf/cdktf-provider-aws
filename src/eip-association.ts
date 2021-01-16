// https://www.terraform.io/docs/providers/aws/r/eip_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly allocationId?: string;
  readonly allowReassociation?: boolean;
  readonly instanceId?: string;
  readonly networkInterfaceId?: string;
  readonly privateIpAddress?: string;
  readonly publicIp?: string;
}

// Resource

export class EipAssociation extends cdktf.TerraformResource {

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
    return this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string) {
    this._allocationId = value;
  }
  public resetAllocationId() {
    this._allocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdInput() {
    return this._allocationId
  }

  // allow_reassociation - computed: false, optional: true, required: false
  private _allowReassociation?: boolean;
  public get allowReassociation() {
    return this.getBooleanAttribute('allow_reassociation');
  }
  public set allowReassociation(value: boolean ) {
    this._allowReassociation = value;
  }
  public resetAllowReassociation() {
    this._allowReassociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReassociationInput() {
    return this._allowReassociation
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string;
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string;
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_id: cdktf.stringToTerraform(this._allocationId),
      allow_reassociation: cdktf.booleanToTerraform(this._allowReassociation),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      public_ip: cdktf.stringToTerraform(this._publicIp),
    };
  }
}
