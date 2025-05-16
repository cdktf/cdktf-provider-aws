// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/vpc_dhcp_options_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcDhcpOptionsAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/vpc_dhcp_options_association#dhcp_options_id VpcDhcpOptionsAssociation#dhcp_options_id}
  */
  readonly dhcpOptionsId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/vpc_dhcp_options_association#id VpcDhcpOptionsAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/vpc_dhcp_options_association#vpc_id VpcDhcpOptionsAssociation#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/vpc_dhcp_options_association aws_vpc_dhcp_options_association}
*/
export class VpcDhcpOptionsAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_dhcp_options_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcDhcpOptionsAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcDhcpOptionsAssociation to import
  * @param importFromId The id of the existing VpcDhcpOptionsAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/vpc_dhcp_options_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcDhcpOptionsAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_dhcp_options_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/vpc_dhcp_options_association aws_vpc_dhcp_options_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcDhcpOptionsAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcDhcpOptionsAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_dhcp_options_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
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
    this._dhcpOptionsId = config.dhcpOptionsId;
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_options_id: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionsId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
