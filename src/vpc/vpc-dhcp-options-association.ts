// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcDhcpOptionsAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html#dhcp_options_id VpcDhcpOptionsAssociation#dhcp_options_id}
  */
  readonly dhcpOptionsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html#vpc_id VpcDhcpOptionsAssociation#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association}
*/
export class VpcDhcpOptionsAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_dhcp_options_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html aws_vpc_dhcp_options_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcDhcpOptionsAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcDhcpOptionsAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_dhcp_options_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dhcpOptionsId = config.dhcpOptionsId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_options_id - computed: false, optional: false, required: true
  private _dhcpOptionsId?: string; 
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string) {
    this._dhcpOptionsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsIdInput() {
    return this._dhcpOptionsId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
