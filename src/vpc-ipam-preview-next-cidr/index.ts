// https://www.terraform.io/docs/providers/aws/r/vpc_ipam_preview_next_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamPreviewNextCidrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}
  */
  readonly disallowedCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}
  */
  readonly netmaskLength?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}
*/
export class VpcIpamPreviewNextCidr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_preview_next_cidr";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr} Resource
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
    this._disallowedCidrs = config.disallowedCidrs;
    this._id = config.id;
    this._ipamPoolId = config.ipamPoolId;
    this._netmaskLength = config.netmaskLength;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disallowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowedCidrs),
      id: cdktf.stringToTerraform(this._id),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      netmask_length: cdktf.numberToTerraform(this._netmaskLength),
    };
  }
}
