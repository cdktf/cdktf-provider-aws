// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayMulticastGroupSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#group_ip_address Ec2TransitGatewayMulticastGroupSource#group_ip_address}
  */
  readonly groupIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#id Ec2TransitGatewayMulticastGroupSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#network_interface_id Ec2TransitGatewayMulticastGroupSource#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupSource#transit_gateway_multicast_domain_id}
  */
  readonly transitGatewayMulticastDomainId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source aws_ec2_transit_gateway_multicast_group_source}
*/
export class Ec2TransitGatewayMulticastGroupSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_group_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_multicast_group_source aws_ec2_transit_gateway_multicast_group_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMulticastGroupSourceConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastGroupSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_multicast_group_source',
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
}
