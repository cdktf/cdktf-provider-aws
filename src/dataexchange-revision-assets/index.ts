/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataexchangeRevisionAssetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}
  */
  readonly finalized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * asset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#asset DataexchangeRevisionAssets#asset}
  */
  readonly asset?: DataexchangeRevisionAssetsAsset[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#timeouts DataexchangeRevisionAssets#timeouts}
  */
  readonly timeouts?: DataexchangeRevisionAssetsTimeouts;
}
export interface DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#kms_key_arn DataexchangeRevisionAssets#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}

export function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantToTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantToHclTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList extends cdktf.ComplexList {
  public internalValue? : DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference {
    return new DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#key_prefixes DataexchangeRevisionAssets#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#keys DataexchangeRevisionAssets#keys}
  */
  readonly keys?: string[];
  /**
  * kms_keys_to_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#kms_keys_to_grant DataexchangeRevisionAssets#kms_keys_to_grant}
  */
  readonly kmsKeysToGrant?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant[] | cdktf.IResolvable;
}

export function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceToTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    kms_keys_to_grant: cdktf.listMapper(dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantToTerraform, true)(struct!.kmsKeysToGrant),
  }
}


export function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceToHclTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable): any {
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
    key_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kms_keys_to_grant: {
      value: cdktf.listMapperHcl(dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantToHclTerraform, true)(struct!.kmsKeysToGrant),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefixes = this._keyPrefixes;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._kmsKeysToGrant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeysToGrant = this._kmsKeysToGrant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefixes = undefined;
      this._keys = undefined;
      this._kmsKeysToGrant.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefixes = value.keyPrefixes;
      this._keys = value.keys;
      this._kmsKeysToGrant.internalValue = value.kmsKeysToGrant;
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

  // key_prefixes - computed: false, optional: true, required: false
  private _keyPrefixes?: string[]; 
  public get keyPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('key_prefixes'));
  }
  public set keyPrefixes(value: string[]) {
    this._keyPrefixes = value;
  }
  public resetKeyPrefixes() {
    this._keyPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixesInput() {
    return this._keyPrefixes;
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // kms_keys_to_grant - computed: false, optional: true, required: false
  private _kmsKeysToGrant = new DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList(this, "kms_keys_to_grant", false);
  public get kmsKeysToGrant() {
    return this._kmsKeysToGrant;
  }
  public putKmsKeysToGrant(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant[] | cdktf.IResolvable) {
    this._kmsKeysToGrant.internalValue = value;
  }
  public resetKmsKeysToGrant() {
    this._kmsKeysToGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeysToGrantInput() {
    return this._kmsKeysToGrant.internalValue;
  }
}

export class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList extends cdktf.ComplexList {
  public internalValue? : DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference {
    return new DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket {
  /**
  * asset_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}
  */
  readonly assetSource?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource[] | cdktf.IResolvable;
}

export function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketToTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_source: cdktf.listMapper(dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceToTerraform, true)(struct!.assetSource),
  }
}


export function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketToHclTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_source: {
      value: cdktf.listMapperHcl(dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceToHclTerraform, true)(struct!.assetSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetSource = this._assetSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = value.assetSource;
    }
  }

  // access_point_alias - computed: true, optional: false, required: false
  public get accessPointAlias() {
    return this.getStringAttribute('access_point_alias');
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // asset_source - computed: false, optional: true, required: false
  private _assetSource = new DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList(this, "asset_source", false);
  public get assetSource() {
    return this._assetSource;
  }
  public putAssetSource(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource[] | cdktf.IResolvable) {
    this._assetSource.internalValue = value;
  }
  public resetAssetSource() {
    this._assetSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSourceInput() {
    return this._assetSource.internalValue;
  }
}

export class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList extends cdktf.ComplexList {
  public internalValue? : DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference {
    return new DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#key DataexchangeRevisionAssets#key}
  */
  readonly key: string;
}

export function dataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceToTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceToHclTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList extends cdktf.ComplexList {
  public internalValue? : DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference {
    return new DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeRevisionAssetsAssetImportAssetsFromS3 {
  /**
  * asset_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}
  */
  readonly assetSource?: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource[] | cdktf.IResolvable;
}

export function dataexchangeRevisionAssetsAssetImportAssetsFromS3ToTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_source: cdktf.listMapper(dataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceToTerraform, true)(struct!.assetSource),
  }
}


export function dataexchangeRevisionAssetsAssetImportAssetsFromS3ToHclTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_source: {
      value: cdktf.listMapperHcl(dataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceToHclTerraform, true)(struct!.assetSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetSource = this._assetSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetSource.internalValue = value.assetSource;
    }
  }

  // asset_source - computed: false, optional: true, required: false
  private _assetSource = new DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList(this, "asset_source", false);
  public get assetSource() {
    return this._assetSource;
  }
  public putAssetSource(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource[] | cdktf.IResolvable) {
    this._assetSource.internalValue = value;
  }
  public resetAssetSource() {
    this._assetSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetSourceInput() {
    return this._assetSource.internalValue;
  }
}

export class DataexchangeRevisionAssetsAssetImportAssetsFromS3List extends cdktf.ComplexList {
  public internalValue? : DataexchangeRevisionAssetsAssetImportAssetsFromS3[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference {
    return new DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#filename DataexchangeRevisionAssets#filename}
  */
  readonly filename: string;
}

export function dataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlToTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function dataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlToHclTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
    }
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}

export class DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList extends cdktf.ComplexList {
  public internalValue? : DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference {
    return new DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeRevisionAssetsAsset {
  /**
  * create_s3_data_access_from_s3_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#create_s3_data_access_from_s3_bucket DataexchangeRevisionAssets#create_s3_data_access_from_s3_bucket}
  */
  readonly createS3DataAccessFromS3Bucket?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket[] | cdktf.IResolvable;
  /**
  * import_assets_from_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#import_assets_from_s3 DataexchangeRevisionAssets#import_assets_from_s3}
  */
  readonly importAssetsFromS3?: DataexchangeRevisionAssetsAssetImportAssetsFromS3[] | cdktf.IResolvable;
  /**
  * import_assets_from_signed_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#import_assets_from_signed_url DataexchangeRevisionAssets#import_assets_from_signed_url}
  */
  readonly importAssetsFromSignedUrl?: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl[] | cdktf.IResolvable;
}

export function dataexchangeRevisionAssetsAssetToTerraform(struct?: DataexchangeRevisionAssetsAsset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_s3_data_access_from_s3_bucket: cdktf.listMapper(dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketToTerraform, true)(struct!.createS3DataAccessFromS3Bucket),
    import_assets_from_s3: cdktf.listMapper(dataexchangeRevisionAssetsAssetImportAssetsFromS3ToTerraform, true)(struct!.importAssetsFromS3),
    import_assets_from_signed_url: cdktf.listMapper(dataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlToTerraform, true)(struct!.importAssetsFromSignedUrl),
  }
}


export function dataexchangeRevisionAssetsAssetToHclTerraform(struct?: DataexchangeRevisionAssetsAsset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_s3_data_access_from_s3_bucket: {
      value: cdktf.listMapperHcl(dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketToHclTerraform, true)(struct!.createS3DataAccessFromS3Bucket),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList",
    },
    import_assets_from_s3: {
      value: cdktf.listMapperHcl(dataexchangeRevisionAssetsAssetImportAssetsFromS3ToHclTerraform, true)(struct!.importAssetsFromS3),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeRevisionAssetsAssetImportAssetsFromS3List",
    },
    import_assets_from_signed_url: {
      value: cdktf.listMapperHcl(dataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlToHclTerraform, true)(struct!.importAssetsFromSignedUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsAssetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataexchangeRevisionAssetsAsset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createS3DataAccessFromS3Bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createS3DataAccessFromS3Bucket = this._createS3DataAccessFromS3Bucket?.internalValue;
    }
    if (this._importAssetsFromS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importAssetsFromS3 = this._importAssetsFromS3?.internalValue;
    }
    if (this._importAssetsFromSignedUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importAssetsFromSignedUrl = this._importAssetsFromSignedUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsAsset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createS3DataAccessFromS3Bucket.internalValue = undefined;
      this._importAssetsFromS3.internalValue = undefined;
      this._importAssetsFromSignedUrl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createS3DataAccessFromS3Bucket.internalValue = value.createS3DataAccessFromS3Bucket;
      this._importAssetsFromS3.internalValue = value.importAssetsFromS3;
      this._importAssetsFromSignedUrl.internalValue = value.importAssetsFromSignedUrl;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // create_s3_data_access_from_s3_bucket - computed: false, optional: true, required: false
  private _createS3DataAccessFromS3Bucket = new DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList(this, "create_s3_data_access_from_s3_bucket", false);
  public get createS3DataAccessFromS3Bucket() {
    return this._createS3DataAccessFromS3Bucket;
  }
  public putCreateS3DataAccessFromS3Bucket(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket[] | cdktf.IResolvable) {
    this._createS3DataAccessFromS3Bucket.internalValue = value;
  }
  public resetCreateS3DataAccessFromS3Bucket() {
    this._createS3DataAccessFromS3Bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createS3DataAccessFromS3BucketInput() {
    return this._createS3DataAccessFromS3Bucket.internalValue;
  }

  // import_assets_from_s3 - computed: false, optional: true, required: false
  private _importAssetsFromS3 = new DataexchangeRevisionAssetsAssetImportAssetsFromS3List(this, "import_assets_from_s3", false);
  public get importAssetsFromS3() {
    return this._importAssetsFromS3;
  }
  public putImportAssetsFromS3(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3[] | cdktf.IResolvable) {
    this._importAssetsFromS3.internalValue = value;
  }
  public resetImportAssetsFromS3() {
    this._importAssetsFromS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importAssetsFromS3Input() {
    return this._importAssetsFromS3.internalValue;
  }

  // import_assets_from_signed_url - computed: false, optional: true, required: false
  private _importAssetsFromSignedUrl = new DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList(this, "import_assets_from_signed_url", false);
  public get importAssetsFromSignedUrl() {
    return this._importAssetsFromSignedUrl;
  }
  public putImportAssetsFromSignedUrl(value: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl[] | cdktf.IResolvable) {
    this._importAssetsFromSignedUrl.internalValue = value;
  }
  public resetImportAssetsFromSignedUrl() {
    this._importAssetsFromSignedUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importAssetsFromSignedUrlInput() {
    return this._importAssetsFromSignedUrl.internalValue;
  }
}

export class DataexchangeRevisionAssetsAssetList extends cdktf.ComplexList {
  public internalValue? : DataexchangeRevisionAssetsAsset[] | cdktf.IResolvable

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
  public get(index: number): DataexchangeRevisionAssetsAssetOutputReference {
    return new DataexchangeRevisionAssetsAssetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataexchangeRevisionAssetsTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#create DataexchangeRevisionAssets#create}
  */
  readonly create?: string;
}

export function dataexchangeRevisionAssetsTimeoutsToTerraform(struct?: DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function dataexchangeRevisionAssetsTimeoutsToHclTerraform(struct?: DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataexchangeRevisionAssetsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets}
*/
export class DataexchangeRevisionAssets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dataexchange_revision_assets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataexchangeRevisionAssets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataexchangeRevisionAssets to import
  * @param importFromId The id of the existing DataexchangeRevisionAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataexchangeRevisionAssets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dataexchange_revision_assets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataexchangeRevisionAssetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataexchangeRevisionAssetsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dataexchange_revision_assets',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._comment = config.comment;
    this._dataSetId = config.dataSetId;
    this._finalized = config.finalized;
    this._forceDestroy = config.forceDestroy;
    this._tags = config.tags;
    this._asset.internalValue = config.asset;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
  }

  // finalized - computed: true, optional: true, required: false
  private _finalized?: boolean | cdktf.IResolvable; 
  public get finalized() {
    return this.getBooleanAttribute('finalized');
  }
  public set finalized(value: boolean | cdktf.IResolvable) {
    this._finalized = value;
  }
  public resetFinalized() {
    this._finalized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizedInput() {
    return this._finalized;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // asset - computed: false, optional: true, required: false
  private _asset = new DataexchangeRevisionAssetsAssetList(this, "asset", true);
  public get asset() {
    return this._asset;
  }
  public putAsset(value: DataexchangeRevisionAssetsAsset[] | cdktf.IResolvable) {
    this._asset.internalValue = value;
  }
  public resetAsset() {
    this._asset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataexchangeRevisionAssetsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataexchangeRevisionAssetsTimeouts) {
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
      comment: cdktf.stringToTerraform(this._comment),
      data_set_id: cdktf.stringToTerraform(this._dataSetId),
      finalized: cdktf.booleanToTerraform(this._finalized),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      asset: cdktf.listMapper(dataexchangeRevisionAssetsAssetToTerraform, true)(this._asset.internalValue),
      timeouts: dataexchangeRevisionAssetsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_set_id: {
        value: cdktf.stringToHclTerraform(this._dataSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      finalized: {
        value: cdktf.booleanToHclTerraform(this._finalized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      asset: {
        value: cdktf.listMapperHcl(dataexchangeRevisionAssetsAssetToHclTerraform, true)(this._asset.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataexchangeRevisionAssetsAssetList",
      },
      timeouts: {
        value: dataexchangeRevisionAssetsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataexchangeRevisionAssetsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
