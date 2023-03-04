// https://www.terraform.io/docs/providers/aws/r/network_acl_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAclAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_association#id NetworkAclAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_association#network_acl_id NetworkAclAssociation#network_acl_id}
  */
  readonly networkAclId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_association#subnet_id NetworkAclAssociation#subnet_id}
  */
  readonly subnetId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_association aws_network_acl_association}
*/
export class NetworkAclAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_network_acl_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_association aws_network_acl_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAclAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAclAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_network_acl_association',
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
    this._id = config.id;
    this._networkAclId = config.networkAclId;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_acl_id - computed: false, optional: false, required: true
  private _networkAclId?: string; 
  public get networkAclId() {
    return this.getStringAttribute('network_acl_id');
  }
  public set networkAclId(value: string) {
    this._networkAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclIdInput() {
    return this._networkAclId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_acl_id: cdktf.stringToTerraform(this._networkAclId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }
}
