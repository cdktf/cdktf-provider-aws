/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlMultiRegionAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#region S3ControlMultiRegionAccessPoint#region}
  */
  readonly region?: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#details S3ControlMultiRegionAccessPoint#details}
  */
  readonly details: S3ControlMultiRegionAccessPointDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#timeouts S3ControlMultiRegionAccessPoint#timeouts}
  */
  readonly timeouts?: S3ControlMultiRegionAccessPointTimeouts;
}
export interface S3ControlMultiRegionAccessPointDetailsPublicAccessBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}
  */
  readonly blockPublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}

export function s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference | S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}


export function s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToHclTerraform(struct?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference | S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_public_acls: {
      value: cdktf.booleanToHclTerraform(struct!.blockPublicAcls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_public_policy: {
      value: cdktf.booleanToHclTerraform(struct!.blockPublicPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_public_acls: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePublicAcls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_public_buckets: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPublicBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockPublicAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicAcls = this._blockPublicAcls;
    }
    if (this._blockPublicPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPublicPolicy = this._blockPublicPolicy;
    }
    if (this._ignorePublicAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePublicAcls = this._ignorePublicAcls;
    }
    if (this._restrictPublicBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPublicBuckets = this._restrictPublicBuckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockPublicAcls = undefined;
      this._blockPublicPolicy = undefined;
      this._ignorePublicAcls = undefined;
      this._restrictPublicBuckets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockPublicAcls = value.blockPublicAcls;
      this._blockPublicPolicy = value.blockPublicPolicy;
      this._ignorePublicAcls = value.ignorePublicAcls;
      this._restrictPublicBuckets = value.restrictPublicBuckets;
    }
  }

  // block_public_acls - computed: false, optional: true, required: false
  private _blockPublicAcls?: boolean | cdktf.IResolvable; 
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }
  public set blockPublicAcls(value: boolean | cdktf.IResolvable) {
    this._blockPublicAcls = value;
  }
  public resetBlockPublicAcls() {
    this._blockPublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAclsInput() {
    return this._blockPublicAcls;
  }

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktf.IResolvable; 
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }
  public set blockPublicPolicy(value: boolean | cdktf.IResolvable) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy;
  }

  // ignore_public_acls - computed: false, optional: true, required: false
  private _ignorePublicAcls?: boolean | cdktf.IResolvable; 
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }
  public set ignorePublicAcls(value: boolean | cdktf.IResolvable) {
    this._ignorePublicAcls = value;
  }
  public resetIgnorePublicAcls() {
    this._ignorePublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAclsInput() {
    return this._ignorePublicAcls;
  }

  // restrict_public_buckets - computed: false, optional: true, required: false
  private _restrictPublicBuckets?: boolean | cdktf.IResolvable; 
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
  public set restrictPublicBuckets(value: boolean | cdktf.IResolvable) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets;
  }
}
export interface S3ControlMultiRegionAccessPointDetailsRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#bucket_account_id S3ControlMultiRegionAccessPoint#bucket_account_id}
  */
  readonly bucketAccountId?: string;
}

export function s3ControlMultiRegionAccessPointDetailsRegionToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    bucket_account_id: cdktf.stringToTerraform(struct!.bucketAccountId),
  }
}


export function s3ControlMultiRegionAccessPointDetailsRegionToHclTerraform(struct?: S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_account_id: {
      value: cdktf.stringToHclTerraform(struct!.bucketAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ControlMultiRegionAccessPointDetailsRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAccountId = this._bucketAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlMultiRegionAccessPointDetailsRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._bucketAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._bucketAccountId = value.bucketAccountId;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_account_id - computed: true, optional: true, required: false
  private _bucketAccountId?: string; 
  public get bucketAccountId() {
    return this.getStringAttribute('bucket_account_id');
  }
  public set bucketAccountId(value: string) {
    this._bucketAccountId = value;
  }
  public resetBucketAccountId() {
    this._bucketAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAccountIdInput() {
    return this._bucketAccountId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class S3ControlMultiRegionAccessPointDetailsRegionList extends cdktf.ComplexList {
  public internalValue? : S3ControlMultiRegionAccessPointDetailsRegion[] | cdktf.IResolvable

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
  public get(index: number): S3ControlMultiRegionAccessPointDetailsRegionOutputReference {
    return new S3ControlMultiRegionAccessPointDetailsRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ControlMultiRegionAccessPointDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}
  */
  readonly name: string;
  /**
  * public_access_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}
  */
  readonly publicAccessBlock?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#region S3ControlMultiRegionAccessPoint#region}
  */
  readonly region: S3ControlMultiRegionAccessPointDetailsRegion[] | cdktf.IResolvable;
}

export function s3ControlMultiRegionAccessPointDetailsToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsOutputReference | S3ControlMultiRegionAccessPointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_access_block: s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToTerraform(struct!.publicAccessBlock),
    region: cdktf.listMapper(s3ControlMultiRegionAccessPointDetailsRegionToTerraform, true)(struct!.region),
  }
}


export function s3ControlMultiRegionAccessPointDetailsToHclTerraform(struct?: S3ControlMultiRegionAccessPointDetailsOutputReference | S3ControlMultiRegionAccessPointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_access_block: {
      value: s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToHclTerraform(struct!.publicAccessBlock),
      isBlock: true,
      type: "list",
      storageClassType: "S3ControlMultiRegionAccessPointDetailsPublicAccessBlockList",
    },
    region: {
      value: cdktf.listMapperHcl(s3ControlMultiRegionAccessPointDetailsRegionToHclTerraform, true)(struct!.region),
      isBlock: true,
      type: "set",
      storageClassType: "S3ControlMultiRegionAccessPointDetailsRegionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3ControlMultiRegionAccessPointDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlMultiRegionAccessPointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicAccessBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessBlock = this._publicAccessBlock?.internalValue;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlMultiRegionAccessPointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._publicAccessBlock.internalValue = undefined;
      this._region.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._publicAccessBlock.internalValue = value.publicAccessBlock;
      this._region.internalValue = value.region;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_access_block - computed: false, optional: true, required: false
  private _publicAccessBlock = new S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference(this, "public_access_block");
  public get publicAccessBlock() {
    return this._publicAccessBlock;
  }
  public putPublicAccessBlock(value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock) {
    this._publicAccessBlock.internalValue = value;
  }
  public resetPublicAccessBlock() {
    this._publicAccessBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockInput() {
    return this._publicAccessBlock.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region = new S3ControlMultiRegionAccessPointDetailsRegionList(this, "region", true);
  public get region() {
    return this._region;
  }
  public putRegion(value: S3ControlMultiRegionAccessPointDetailsRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface S3ControlMultiRegionAccessPointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}
  */
  readonly delete?: string;
}

export function s3ControlMultiRegionAccessPointTimeoutsToTerraform(struct?: S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function s3ControlMultiRegionAccessPointTimeoutsToHclTerraform(struct?: S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable): any {
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

export class S3ControlMultiRegionAccessPointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: S3ControlMultiRegionAccessPointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point aws_s3control_multi_region_access_point}
*/
export class S3ControlMultiRegionAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_multi_region_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3ControlMultiRegionAccessPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ControlMultiRegionAccessPoint to import
  * @param importFromId The id of the existing S3ControlMultiRegionAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ControlMultiRegionAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3control_multi_region_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3control_multi_region_access_point aws_s3control_multi_region_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlMultiRegionAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_multi_region_access_point',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._accountId = config.accountId;
    this._id = config.id;
    this._region = config.region;
    this._details.internalValue = config.details;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // details - computed: false, optional: false, required: true
  private _details = new S3ControlMultiRegionAccessPointDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: S3ControlMultiRegionAccessPointDetails) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new S3ControlMultiRegionAccessPointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: S3ControlMultiRegionAccessPointTimeouts) {
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
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      details: s3ControlMultiRegionAccessPointDetailsToTerraform(this._details.internalValue),
      timeouts: s3ControlMultiRegionAccessPointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      details: {
        value: s3ControlMultiRegionAccessPointDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3ControlMultiRegionAccessPointDetailsList",
      },
      timeouts: {
        value: s3ControlMultiRegionAccessPointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3ControlMultiRegionAccessPointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
