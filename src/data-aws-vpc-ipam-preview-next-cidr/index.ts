// https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsVpcIpamPreviewNextCidrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}
  */
  readonly disallowedCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}
  */
  readonly netmaskLength?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#timeouts DataAwsVpcIpamPreviewNextCidr#timeouts}
  */
  readonly timeouts?: DataAwsVpcIpamPreviewNextCidrTimeouts;
}
export interface DataAwsVpcIpamPreviewNextCidrTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}
  */
  readonly read?: string;
}

export function dataAwsVpcIpamPreviewNextCidrTimeoutsToTerraform(struct?: DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference | DataAwsVpcIpamPreviewNextCidrTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsVpcIpamPreviewNextCidrTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsVpcIpamPreviewNextCidrTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}
*/
export class DataAwsVpcIpamPreviewNextCidr extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipam_preview_next_cidr";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpcIpamPreviewNextCidrConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsVpcIpamPreviewNextCidrConfig) {
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
    this._timeouts.internalValue = config.timeouts;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAwsVpcIpamPreviewNextCidrTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      timeouts: dataAwsVpcIpamPreviewNextCidrTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
