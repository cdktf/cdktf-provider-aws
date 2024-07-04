/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ec2_public_ipv4_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2PublicIpv4PoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}
  */
  readonly poolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsEc2PublicIpv4PoolPoolAddressRanges {
}

export function dataAwsEc2PublicIpv4PoolPoolAddressRangesToTerraform(struct?: DataAwsEc2PublicIpv4PoolPoolAddressRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2PublicIpv4PoolPoolAddressRangesToHclTerraform(struct?: DataAwsEc2PublicIpv4PoolPoolAddressRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsEc2PublicIpv4PoolPoolAddressRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2PublicIpv4PoolPoolAddressRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_count - computed: true, optional: false, required: false
  public get addressCount() {
    return this.getNumberAttribute('address_count');
  }

  // available_address_count - computed: true, optional: false, required: false
  public get availableAddressCount() {
    return this.getNumberAttribute('available_address_count');
  }

  // first_address - computed: true, optional: false, required: false
  public get firstAddress() {
    return this.getStringAttribute('first_address');
  }

  // last_address - computed: true, optional: false, required: false
  public get lastAddress() {
    return this.getStringAttribute('last_address');
  }
}

export class DataAwsEc2PublicIpv4PoolPoolAddressRangesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference {
    return new DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool}
*/
export class DataAwsEc2PublicIpv4Pool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_public_ipv4_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEc2PublicIpv4Pool to import
  * @param importFromId The id of the existing DataAwsEc2PublicIpv4Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ec2_public_ipv4_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEc2PublicIpv4Pool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_public_ipv4_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2PublicIpv4PoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2PublicIpv4PoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_public_ipv4_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.57.0',
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
    this._id = config.id;
    this._poolId = config.poolId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // network_border_group - computed: true, optional: false, required: false
  public get networkBorderGroup() {
    return this.getStringAttribute('network_border_group');
  }

  // pool_address_ranges - computed: true, optional: false, required: false
  private _poolAddressRanges = new DataAwsEc2PublicIpv4PoolPoolAddressRangesList(this, "pool_address_ranges", false);
  public get poolAddressRanges() {
    return this._poolAddressRanges;
  }

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // total_address_count - computed: true, optional: false, required: false
  public get totalAddressCount() {
    return this.getNumberAttribute('total_address_count');
  }

  // total_available_address_count - computed: true, optional: false, required: false
  public get totalAvailableAddressCount() {
    return this.getNumberAttribute('total_available_address_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pool_id: cdktf.stringToTerraform(this._poolId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
