// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcEndpointSecurityGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#replace_default_association VpcEndpointSecurityGroupAssociation#replace_default_association}
  */
  readonly replaceDefaultAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#security_group_id VpcEndpointSecurityGroupAssociation#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association#vpc_endpoint_id VpcEndpointSecurityGroupAssociation#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association aws_vpc_endpoint_security_group_association}
*/
export class VpcEndpointSecurityGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_endpoint_security_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_security_group_association aws_vpc_endpoint_security_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointSecurityGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndpointSecurityGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_security_group_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._replaceDefaultAssociation = config.replaceDefaultAssociation;
    this._securityGroupId = config.securityGroupId;
    this._vpcEndpointId = config.vpcEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // replace_default_association - computed: false, optional: true, required: false
  private _replaceDefaultAssociation?: boolean | cdktf.IResolvable; 
  public get replaceDefaultAssociation() {
    return this.getBooleanAttribute('replace_default_association');
  }
  public set replaceDefaultAssociation(value: boolean | cdktf.IResolvable) {
    this._replaceDefaultAssociation = value;
  }
  public resetReplaceDefaultAssociation() {
    this._replaceDefaultAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceDefaultAssociationInput() {
    return this._replaceDefaultAssociation;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replace_default_association: cdktf.booleanToTerraform(this._replaceDefaultAssociation),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
    };
  }
}
