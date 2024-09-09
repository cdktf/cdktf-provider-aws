/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamPoolCidrAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}
  */
  readonly disallowedCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}
  */
  readonly netmaskLength?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation aws_vpc_ipam_pool_cidr_allocation}
*/
export class VpcIpamPoolCidrAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_pool_cidr_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpamPoolCidrAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpamPoolCidrAllocation to import
  * @param importFromId The id of the existing VpcIpamPoolCidrAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpamPoolCidrAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_ipam_pool_cidr_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/vpc_ipam_pool_cidr_allocation aws_vpc_ipam_pool_cidr_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamPoolCidrAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamPoolCidrAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_pool_cidr_allocation',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.66.0',
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
    this._cidr = config.cidr;
    this._description = config.description;
    this._disallowedCidrs = config.disallowedCidrs;
    this._id = config.id;
    this._ipamPoolId = config.ipamPoolId;
    this._netmaskLength = config.netmaskLength;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disallowed_cidrs - computed: false, optional: true, required: false
  private _disallowedCidrs?: string[]; 
  public get disallowedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('disallowed_cidrs'));
  }
  public set disallowedCidrs(value: string[]) {
    this._disallowedCidrs = value;
  }
  public resetDisallowedCidrs() {
    this._disallowedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedCidrsInput() {
    return this._disallowedCidrs;
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

  // ipam_pool_allocation_id - computed: true, optional: false, required: false
  public get ipamPoolAllocationId() {
    return this.getStringAttribute('ipam_pool_allocation_id');
  }

  // ipam_pool_id - computed: false, optional: false, required: true
  private _ipamPoolId?: string; 
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
  }

  // netmask_length - computed: true, optional: true, required: false
  private _netmaskLength?: number; 
  public get netmaskLength() {
    return this.getNumberAttribute('netmask_length');
  }
  public set netmaskLength(value: number) {
    this._netmaskLength = value;
  }
  public resetNetmaskLength() {
    this._netmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskLengthInput() {
    return this._netmaskLength;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      description: cdktf.stringToTerraform(this._description),
      disallowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedCidrs),
      id: cdktf.stringToTerraform(this._id),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      netmask_length: cdktf.numberToTerraform(this._netmaskLength),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowed_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disallowedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask_length: {
        value: cdktf.numberToHclTerraform(this._netmaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
