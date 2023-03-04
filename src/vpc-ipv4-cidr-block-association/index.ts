// https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpv4CidrBlockAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#cidr_block VpcIpv4CidrBlockAssociation#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#id VpcIpv4CidrBlockAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#ipv4_ipam_pool_id VpcIpv4CidrBlockAssociation#ipv4_ipam_pool_id}
  */
  readonly ipv4IpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#ipv4_netmask_length VpcIpv4CidrBlockAssociation#ipv4_netmask_length}
  */
  readonly ipv4NetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#vpc_id VpcIpv4CidrBlockAssociation#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#timeouts VpcIpv4CidrBlockAssociation#timeouts}
  */
  readonly timeouts?: VpcIpv4CidrBlockAssociationTimeouts;
}
export interface VpcIpv4CidrBlockAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#create VpcIpv4CidrBlockAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association#delete VpcIpv4CidrBlockAssociation#delete}
  */
  readonly delete?: string;
}

export function vpcIpv4CidrBlockAssociationTimeoutsToTerraform(struct?: VpcIpv4CidrBlockAssociationTimeoutsOutputReference | VpcIpv4CidrBlockAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VpcIpv4CidrBlockAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcIpv4CidrBlockAssociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcIpv4CidrBlockAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association aws_vpc_ipv4_cidr_block_association}
*/
export class VpcIpv4CidrBlockAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipv4_cidr_block_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association aws_vpc_ipv4_cidr_block_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpv4CidrBlockAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpv4CidrBlockAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipv4_cidr_block_association',
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
    this._cidrBlock = config.cidrBlock;
    this._id = config.id;
    this._ipv4IpamPoolId = config.ipv4IpamPoolId;
    this._ipv4NetmaskLength = config.ipv4NetmaskLength;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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

  // ipv4_ipam_pool_id - computed: false, optional: true, required: false
  private _ipv4IpamPoolId?: string; 
  public get ipv4IpamPoolId() {
    return this.getStringAttribute('ipv4_ipam_pool_id');
  }
  public set ipv4IpamPoolId(value: string) {
    this._ipv4IpamPoolId = value;
  }
  public resetIpv4IpamPoolId() {
    this._ipv4IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IpamPoolIdInput() {
    return this._ipv4IpamPoolId;
  }

  // ipv4_netmask_length - computed: false, optional: true, required: false
  private _ipv4NetmaskLength?: number; 
  public get ipv4NetmaskLength() {
    return this.getNumberAttribute('ipv4_netmask_length');
  }
  public set ipv4NetmaskLength(value: number) {
    this._ipv4NetmaskLength = value;
  }
  public resetIpv4NetmaskLength() {
    this._ipv4NetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskLengthInput() {
    return this._ipv4NetmaskLength;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcIpv4CidrBlockAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpv4CidrBlockAssociationTimeouts) {
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
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      id: cdktf.stringToTerraform(this._id),
      ipv4_ipam_pool_id: cdktf.stringToTerraform(this._ipv4IpamPoolId),
      ipv4_netmask_length: cdktf.numberToTerraform(this._ipv4NetmaskLength),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: vpcIpv4CidrBlockAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
