/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayMulticastGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member#group_ip_address Ec2TransitGatewayMulticastGroupMember#group_ip_address}
  */
  readonly groupIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member#id Ec2TransitGatewayMulticastGroupMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member#network_interface_id Ec2TransitGatewayMulticastGroupMember#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}
  */
  readonly transitGatewayMulticastDomainId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member aws_ec2_transit_gateway_multicast_group_member}
*/
export class Ec2TransitGatewayMulticastGroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2TransitGatewayMulticastGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayMulticastGroupMember to import
  * @param importFromId The id of the existing Ec2TransitGatewayMulticastGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayMulticastGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_multicast_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/ec2_transit_gateway_multicast_group_member aws_ec2_transit_gateway_multicast_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMulticastGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_multicast_group_member',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.48.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupIpAddress = config.groupIpAddress;
    this._id = config.id;
    this._networkInterfaceId = config.networkInterfaceId;
    this._transitGatewayMulticastDomainId = config.transitGatewayMulticastDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ip_address - computed: false, optional: false, required: true
  private _groupIpAddress?: string; 
  public get groupIpAddress() {
    return this.getStringAttribute('group_ip_address');
  }
  public set groupIpAddress(value: string) {
    this._groupIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIpAddressInput() {
    return this._groupIpAddress;
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

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // transit_gateway_multicast_domain_id - computed: false, optional: false, required: true
  private _transitGatewayMulticastDomainId?: string; 
  public get transitGatewayMulticastDomainId() {
    return this.getStringAttribute('transit_gateway_multicast_domain_id');
  }
  public set transitGatewayMulticastDomainId(value: string) {
    this._transitGatewayMulticastDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayMulticastDomainIdInput() {
    return this._transitGatewayMulticastDomainId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_ip_address: cdktf.stringToTerraform(this._groupIpAddress),
      id: cdktf.stringToTerraform(this._id),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      transit_gateway_multicast_domain_id: cdktf.stringToTerraform(this._transitGatewayMulticastDomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_ip_address: {
        value: cdktf.stringToHclTerraform(this._groupIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_multicast_domain_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayMulticastDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
