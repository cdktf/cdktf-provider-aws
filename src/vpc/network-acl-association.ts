// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface NetworkAclAssociationConfig extends cdktf.TerraformMetaArguments {
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
  public static readonly tfResourceType: string = "aws_network_acl_association";

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
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkAclId = config.networkAclId;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      network_acl_id: cdktf.stringToTerraform(this._networkAclId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }
}
