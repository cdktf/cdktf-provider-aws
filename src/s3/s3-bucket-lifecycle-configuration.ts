// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expected_bucket_owner S3BucketLifecycleConfiguration#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#rule S3BucketLifecycleConfiguration#rule}
  */
  readonly rule: S3BucketLifecycleConfigurationRule[] | cdktf.IResolvable;
}
export interface S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days_after_initiation S3BucketLifecycleConfiguration#days_after_initiation}
  */
  readonly daysAfterInitiation?: number;
}

export function s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference | S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
  }
}

export class S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysAfterInitiation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: false, optional: true, required: false
  private _daysAfterInitiation?: number; 
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  public resetDaysAfterInitiation() {
    this._daysAfterInitiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface S3BucketLifecycleConfigurationRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expired_object_delete_marker S3BucketLifecycleConfiguration#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

export function s3BucketLifecycleConfigurationRuleExpirationToTerraform(struct?: S3BucketLifecycleConfigurationRuleExpirationOutputReference | S3BucketLifecycleConfigurationRuleExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}

export class S3BucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRuleExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._expiredObjectDeleteMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRuleExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._date = undefined;
      this._days = undefined;
      this._expiredObjectDeleteMarker = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._date = value.date;
      this._days = value.days;
      this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // expired_object_delete_marker - computed: true, optional: true, required: false
  private _expiredObjectDeleteMarker?: boolean | cdktf.IResolvable; 
  public get expiredObjectDeleteMarker() {
    return this.getBooleanAttribute('expired_object_delete_marker');
  }
  public set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable) {
    this._expiredObjectDeleteMarker = value;
  }
  public resetExpiredObjectDeleteMarker() {
    this._expiredObjectDeleteMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredObjectDeleteMarkerInput() {
    return this._expiredObjectDeleteMarker;
  }
}
export interface S3BucketLifecycleConfigurationRuleFilterAnd {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#tags S3BucketLifecycleConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function s3BucketLifecycleConfigurationRuleFilterAndToTerraform(struct?: S3BucketLifecycleConfigurationRuleFilterAndOutputReference | S3BucketLifecycleConfigurationRuleFilterAnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_greater_than: cdktf.numberToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktf.numberToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}

export class S3BucketLifecycleConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRuleFilterAnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRuleFilterAnd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._tags = value.tags;
    }
  }

  // object_size_greater_than - computed: false, optional: true, required: false
  private _objectSizeGreaterThan?: number; 
  public get objectSizeGreaterThan() {
    return this.getNumberAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: number) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: false, optional: true, required: false
  private _objectSizeLessThan?: number; 
  public get objectSizeLessThan() {
    return this.getNumberAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: number) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
}
export interface S3BucketLifecycleConfigurationRuleFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#key S3BucketLifecycleConfiguration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#value S3BucketLifecycleConfiguration#value}
  */
  readonly value: string;
}

export function s3BucketLifecycleConfigurationRuleFilterTagToTerraform(struct?: S3BucketLifecycleConfigurationRuleFilterTagOutputReference | S3BucketLifecycleConfigurationRuleFilterTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class S3BucketLifecycleConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRuleFilterTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRuleFilterTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface S3BucketLifecycleConfigurationRuleFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}
  */
  readonly objectSizeGreaterThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}
  */
  readonly objectSizeLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#and S3BucketLifecycleConfiguration#and}
  */
  readonly and?: S3BucketLifecycleConfigurationRuleFilterAnd;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#tag S3BucketLifecycleConfiguration#tag}
  */
  readonly tag?: S3BucketLifecycleConfigurationRuleFilterTag;
}

export function s3BucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3BucketLifecycleConfigurationRuleFilterOutputReference | S3BucketLifecycleConfigurationRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_size_greater_than: cdktf.stringToTerraform(struct!.objectSizeGreaterThan),
    object_size_less_than: cdktf.stringToTerraform(struct!.objectSizeLessThan),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    and: s3BucketLifecycleConfigurationRuleFilterAndToTerraform(struct!.and),
    tag: s3BucketLifecycleConfigurationRuleFilterTagToTerraform(struct!.tag),
  }
}

export class S3BucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRuleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectSizeGreaterThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
    }
    if (this._objectSizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRuleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectSizeGreaterThan = undefined;
      this._objectSizeLessThan = undefined;
      this._prefix = undefined;
      this._and.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectSizeGreaterThan = value.objectSizeGreaterThan;
      this._objectSizeLessThan = value.objectSizeLessThan;
      this._prefix = value.prefix;
      this._and.internalValue = value.and;
      this._tag.internalValue = value.tag;
    }
  }

  // object_size_greater_than - computed: false, optional: true, required: false
  private _objectSizeGreaterThan?: string; 
  public get objectSizeGreaterThan() {
    return this.getStringAttribute('object_size_greater_than');
  }
  public set objectSizeGreaterThan(value: string) {
    this._objectSizeGreaterThan = value;
  }
  public resetObjectSizeGreaterThan() {
    this._objectSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeGreaterThanInput() {
    return this._objectSizeGreaterThan;
  }

  // object_size_less_than - computed: false, optional: true, required: false
  private _objectSizeLessThan?: string; 
  public get objectSizeLessThan() {
    return this.getStringAttribute('object_size_less_than');
  }
  public set objectSizeLessThan(value: string) {
    this._objectSizeLessThan = value;
  }
  public resetObjectSizeLessThan() {
    this._objectSizeLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSizeLessThanInput() {
    return this._objectSizeLessThan;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // and - computed: false, optional: true, required: false
  private _and = new S3BucketLifecycleConfigurationRuleFilterAndOutputReference(this, "and", true);
  public get and() {
    return this._and;
  }
  public putAnd(value: S3BucketLifecycleConfigurationRuleFilterAnd) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new S3BucketLifecycleConfigurationRuleFilterTagOutputReference(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: S3BucketLifecycleConfigurationRuleFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}
  */
  readonly noncurrentDays?: number;
}

export function s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference | S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_noncurrent_versions: cdktf.stringToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktf.numberToTerraform(struct!.noncurrentDays),
  }
}

export class S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerNoncurrentVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
    }
    if (this._noncurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentDays = this._noncurrentDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newerNoncurrentVersions = undefined;
      this._noncurrentDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newerNoncurrentVersions = value.newerNoncurrentVersions;
      this._noncurrentDays = value.noncurrentDays;
    }
  }

  // newer_noncurrent_versions - computed: false, optional: true, required: false
  private _newerNoncurrentVersions?: string; 
  public get newerNoncurrentVersions() {
    return this.getStringAttribute('newer_noncurrent_versions');
  }
  public set newerNoncurrentVersions(value: string) {
    this._newerNoncurrentVersions = value;
  }
  public resetNewerNoncurrentVersions() {
    this._newerNoncurrentVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerNoncurrentVersionsInput() {
    return this._newerNoncurrentVersions;
  }

  // noncurrent_days - computed: false, optional: true, required: false
  private _noncurrentDays?: number; 
  public get noncurrentDays() {
    return this.getNumberAttribute('noncurrent_days');
  }
  public set noncurrentDays(value: number) {
    this._noncurrentDays = value;
  }
  public resetNoncurrentDays() {
    this._noncurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentDaysInput() {
    return this._noncurrentDays;
  }
}
export interface S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}
  */
  readonly newerNoncurrentVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}
  */
  readonly noncurrentDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}
  */
  readonly storageClass: string;
}

export function s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_noncurrent_versions: cdktf.stringToTerraform(struct!.newerNoncurrentVersions),
    noncurrent_days: cdktf.numberToTerraform(struct!.noncurrentDays),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface S3BucketLifecycleConfigurationRuleTransition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}
  */
  readonly storageClass: string;
}

export function s3BucketLifecycleConfigurationRuleTransitionToTerraform(struct?: S3BucketLifecycleConfigurationRuleTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface S3BucketLifecycleConfigurationRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#status S3BucketLifecycleConfiguration#status}
  */
  readonly status: string;
  /**
  * abort_incomplete_multipart_upload block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3BucketLifecycleConfiguration#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
  /**
  * expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#expiration S3BucketLifecycleConfiguration#expiration}
  */
  readonly expiration?: S3BucketLifecycleConfigurationRuleExpiration;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#filter S3BucketLifecycleConfiguration#filter}
  */
  readonly filter?: S3BucketLifecycleConfigurationRuleFilter;
  /**
  * noncurrent_version_expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_version_expiration S3BucketLifecycleConfiguration#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration;
  /**
  * noncurrent_version_transition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#noncurrent_version_transition S3BucketLifecycleConfiguration#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
  /**
  * transition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration#transition S3BucketLifecycleConfiguration#transition}
  */
  readonly transition?: S3BucketLifecycleConfigurationRuleTransition[] | cdktf.IResolvable;
}

export function s3BucketLifecycleConfigurationRuleToTerraform(struct?: S3BucketLifecycleConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    status: cdktf.stringToTerraform(struct!.status),
    abort_incomplete_multipart_upload: s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration: s3BucketLifecycleConfigurationRuleExpirationToTerraform(struct!.expiration),
    filter: s3BucketLifecycleConfigurationRuleFilterToTerraform(struct!.filter),
    noncurrent_version_expiration: s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform)(struct!.noncurrentVersionTransition),
    transition: cdktf.listMapper(s3BucketLifecycleConfigurationRuleTransitionToTerraform)(struct!.transition),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration}
*/
export class S3BucketLifecycleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_lifecycle_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketLifecycleConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketLifecycleConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_lifecycle_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: S3BucketLifecycleConfigurationRule[] | cdktf.IResolvable; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule');
  }
  public set rule(value: S3BucketLifecycleConfigurationRule[] | cdktf.IResolvable) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      rule: cdktf.listMapper(s3BucketLifecycleConfigurationRuleToTerraform)(this._rule),
    };
  }
}
