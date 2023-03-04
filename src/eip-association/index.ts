// https://www.terraform.io/docs/providers/aws/r/eip_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association#allocation_id EipAssociation#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association#allow_reassociation EipAssociation#allow_reassociation}
  */
  readonly allowReassociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association#id EipAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association#instance_id EipAssociation#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association#network_interface_id EipAssociation#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association#private_ip_address EipAssociation#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip_association#public_ip EipAssociation#public_ip}
  */
  readonly publicIp?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip_association aws_eip_association}
*/
export class EipAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eip_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip_association aws_eip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EipAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EipAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_eip_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationId = config.allocationId;
    this._allowReassociation = config.allowReassociation;
    this._id = config.id;
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
    return this._allocationId;
  }

  // allow_reassociation - computed: false, optional: true, required: false
  private _allowReassociation?: boolean | cdktf.IResolvable; 
  public get allowReassociation() {
    return this.getBooleanAttribute('allow_reassociation');
  }
  public set allowReassociation(value: boolean | cdktf.IResolvable) {
    this._allowReassociation = value;
  }
  public resetAllowReassociation() {
    this._allowReassociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReassociationInput() {
    return this._allowReassociation;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._instanceId;
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
    return this._networkInterfaceId;
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
    return this._privateIpAddress;
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
    return this._publicIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_id: cdktf.stringToTerraform(this._allocationId),
      allow_reassociation: cdktf.booleanToTerraform(this._allowReassociation),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      public_ip: cdktf.stringToTerraform(this._publicIp),
    };
  }
}
