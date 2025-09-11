/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamPreviewNextCidrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}
  */
  readonly disallowedCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}
  */
  readonly netmaskLength?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr#region VpcIpamPreviewNextCidr#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}
*/
export class VpcIpamPreviewNextCidr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_preview_next_cidr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpamPreviewNextCidr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpamPreviewNextCidr to import
  * @param importFromId The id of the existing VpcIpamPreviewNextCidr that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpamPreviewNextCidr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_ipam_preview_next_cidr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamPreviewNextCidrConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamPreviewNextCidrConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipam_preview_next_cidr',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
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
    this._disallowedCidrs = config.disallowedCidrs;
    this._id = config.id;
    this._ipamPoolId = config.ipamPoolId;
    this._netmaskLength = config.netmaskLength;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
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

  // netmask_length - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disallowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedCidrs),
      id: cdktf.stringToTerraform(this._id),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      netmask_length: cdktf.numberToTerraform(this._netmaskLength),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
