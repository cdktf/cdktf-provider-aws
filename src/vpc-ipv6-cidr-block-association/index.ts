/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpv6CidrBlockAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#assign_generated_ipv6_cidr_block VpcIpv6CidrBlockAssociation#assign_generated_ipv6_cidr_block}
  */
  readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}
  */
  readonly ipv6IpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}
  */
  readonly ipv6NetmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_pool VpcIpv6CidrBlockAssociation#ipv6_pool}
  */
  readonly ipv6Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#timeouts VpcIpv6CidrBlockAssociation#timeouts}
  */
  readonly timeouts?: VpcIpv6CidrBlockAssociationTimeouts;
}
export interface VpcIpv6CidrBlockAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#create VpcIpv6CidrBlockAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#delete VpcIpv6CidrBlockAssociation#delete}
  */
  readonly delete?: string;
}

export function vpcIpv6CidrBlockAssociationTimeoutsToTerraform(struct?: VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vpcIpv6CidrBlockAssociationTimeoutsToHclTerraform(struct?: VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcIpv6CidrBlockAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association aws_vpc_ipv6_cidr_block_association}
*/
export class VpcIpv6CidrBlockAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_ipv6_cidr_block_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpv6CidrBlockAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpv6CidrBlockAssociation to import
  * @param importFromId The id of the existing VpcIpv6CidrBlockAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpv6CidrBlockAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_ipv6_cidr_block_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/vpc_ipv6_cidr_block_association aws_vpc_ipv6_cidr_block_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpv6CidrBlockAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpv6CidrBlockAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipv6_cidr_block_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.72.0',
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
    this._assignGeneratedIpv6CidrBlock = config.assignGeneratedIpv6CidrBlock;
    this._id = config.id;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._ipv6IpamPoolId = config.ipv6IpamPoolId;
    this._ipv6NetmaskLength = config.ipv6NetmaskLength;
    this._ipv6Pool = config.ipv6Pool;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_generated_ipv6_cidr_block - computed: true, optional: true, required: false
  private _assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable; 
  public get assignGeneratedIpv6CidrBlock() {
    return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
  }
  public set assignGeneratedIpv6CidrBlock(value: boolean | cdktf.IResolvable) {
    this._assignGeneratedIpv6CidrBlock = value;
  }
  public resetAssignGeneratedIpv6CidrBlock() {
    this._assignGeneratedIpv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignGeneratedIpv6CidrBlockInput() {
    return this._assignGeneratedIpv6CidrBlock;
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

  // ip_source - computed: true, optional: false, required: false
  public get ipSource() {
    return this.getStringAttribute('ip_source');
  }

  // ipv6_address_attribute - computed: true, optional: false, required: false
  public get ipv6AddressAttribute() {
    return this.getStringAttribute('ipv6_address_attribute');
  }

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6_ipam_pool_id - computed: false, optional: true, required: false
  private _ipv6IpamPoolId?: string; 
  public get ipv6IpamPoolId() {
    return this.getStringAttribute('ipv6_ipam_pool_id');
  }
  public set ipv6IpamPoolId(value: string) {
    this._ipv6IpamPoolId = value;
  }
  public resetIpv6IpamPoolId() {
    this._ipv6IpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6IpamPoolIdInput() {
    return this._ipv6IpamPoolId;
  }

  // ipv6_netmask_length - computed: false, optional: true, required: false
  private _ipv6NetmaskLength?: number; 
  public get ipv6NetmaskLength() {
    return this.getNumberAttribute('ipv6_netmask_length');
  }
  public set ipv6NetmaskLength(value: number) {
    this._ipv6NetmaskLength = value;
  }
  public resetIpv6NetmaskLength() {
    this._ipv6NetmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetmaskLengthInput() {
    return this._ipv6NetmaskLength;
  }

  // ipv6_pool - computed: true, optional: true, required: false
  private _ipv6Pool?: string; 
  public get ipv6Pool() {
    return this.getStringAttribute('ipv6_pool');
  }
  public set ipv6Pool(value: string) {
    this._ipv6Pool = value;
  }
  public resetIpv6Pool() {
    this._ipv6Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PoolInput() {
    return this._ipv6Pool;
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
  private _timeouts = new VpcIpv6CidrBlockAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpv6CidrBlockAssociationTimeouts) {
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
      assign_generated_ipv6_cidr_block: cdktf.booleanToTerraform(this._assignGeneratedIpv6CidrBlock),
      id: cdktf.stringToTerraform(this._id),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      ipv6_ipam_pool_id: cdktf.stringToTerraform(this._ipv6IpamPoolId),
      ipv6_netmask_length: cdktf.numberToTerraform(this._ipv6NetmaskLength),
      ipv6_pool: cdktf.stringToTerraform(this._ipv6Pool),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: vpcIpv6CidrBlockAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_generated_ipv6_cidr_block: {
        value: cdktf.booleanToHclTerraform(this._assignGeneratedIpv6CidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_cidr_block: {
        value: cdktf.stringToHclTerraform(this._ipv6CidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipv6IpamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_netmask_length: {
        value: cdktf.numberToHclTerraform(this._ipv6NetmaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_pool: {
        value: cdktf.stringToHclTerraform(this._ipv6Pool),
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
      timeouts: {
        value: vpcIpv6CidrBlockAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcIpv6CidrBlockAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
