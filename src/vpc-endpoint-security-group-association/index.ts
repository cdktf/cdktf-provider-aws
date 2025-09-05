/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointSecurityGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association#id VpcEndpointSecurityGroupAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association#region VpcEndpointSecurityGroupAssociation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association#replace_default_association VpcEndpointSecurityGroupAssociation#replace_default_association}
  */
  readonly replaceDefaultAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association#security_group_id VpcEndpointSecurityGroupAssociation#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association#vpc_endpoint_id VpcEndpointSecurityGroupAssociation#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association aws_vpc_endpoint_security_group_association}
*/
export class VpcEndpointSecurityGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_endpoint_security_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcEndpointSecurityGroupAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcEndpointSecurityGroupAssociation to import
  * @param importFromId The id of the existing VpcEndpointSecurityGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcEndpointSecurityGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_endpoint_security_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/vpc_endpoint_security_group_association aws_vpc_endpoint_security_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointSecurityGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndpointSecurityGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_security_group_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
    this._replaceDefaultAssociation = config.replaceDefaultAssociation;
    this._securityGroupId = config.securityGroupId;
    this._vpcEndpointId = config.vpcEndpointId;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      replace_default_association: cdktf.booleanToTerraform(this._replaceDefaultAssociation),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replace_default_association: {
        value: cdktf.booleanToHclTerraform(this._replaceDefaultAssociation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._vpcEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
