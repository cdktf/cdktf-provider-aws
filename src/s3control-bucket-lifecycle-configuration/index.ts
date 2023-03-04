// https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#rule S3ControlBucketLifecycleConfiguration#rule}
  */
  readonly rule: S3ControlBucketLifecycleConfigurationRule[] | cdktf.IResolvable;
}
export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}
  */
  readonly daysAfterInitiation: number;
}

export function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference | S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_after_initiation: cdktf.numberToTerraform(struct!.daysAfterInitiation),
  }
}

export class S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterInitiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysAfterInitiation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysAfterInitiation = value.daysAfterInitiation;
    }
  }

  // days_after_initiation - computed: false, optional: false, required: true
  private _daysAfterInitiation?: number; 
  public get daysAfterInitiation() {
    return this.getNumberAttribute('days_after_initiation');
  }
  public set daysAfterInitiation(value: number) {
    this._daysAfterInitiation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterInitiationInput() {
    return this._daysAfterInitiation;
  }
}
export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

export function s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference | S3ControlBucketLifecycleConfigurationRuleExpiration): any {
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

export class S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlBucketLifecycleConfigurationRuleExpiration | undefined {
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

  public set internalValue(value: S3ControlBucketLifecycleConfigurationRuleExpiration | undefined) {
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

  // expired_object_delete_marker - computed: false, optional: true, required: false
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
export interface S3ControlBucketLifecycleConfigurationRuleFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleFilterOutputReference | S3ControlBucketLifecycleConfigurationRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}

export class S3ControlBucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlBucketLifecycleConfigurationRuleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: S3ControlBucketLifecycleConfigurationRuleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._tags = value.tags;
    }
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
export interface S3ControlBucketLifecycleConfigurationRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}
  */
  readonly status?: string;
  /**
  * abort_incomplete_multipart_upload block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
  */
  readonly abortIncompleteMultipartUpload?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
  /**
  * expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#expiration S3ControlBucketLifecycleConfiguration#expiration}
  */
  readonly expiration?: S3ControlBucketLifecycleConfigurationRuleExpiration;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration#filter S3ControlBucketLifecycleConfiguration#filter}
  */
  readonly filter?: S3ControlBucketLifecycleConfigurationRuleFilter;
}

export function s3ControlBucketLifecycleConfigurationRuleToTerraform(struct?: S3ControlBucketLifecycleConfigurationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
    abort_incomplete_multipart_upload: s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct!.abortIncompleteMultipartUpload),
    expiration: s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct!.expiration),
    filter: s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct!.filter),
  }
}

export class S3ControlBucketLifecycleConfigurationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3ControlBucketLifecycleConfigurationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
    }
    if (this._expiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlBucketLifecycleConfigurationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._status = undefined;
      this._abortIncompleteMultipartUpload.internalValue = undefined;
      this._expiration.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._status = value.status;
      this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
      this._expiration.internalValue = value.expiration;
      this._filter.internalValue = value.filter;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // abort_incomplete_multipart_upload - computed: false, optional: true, required: false
  private _abortIncompleteMultipartUpload = new S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference(this, "abort_incomplete_multipart_upload");
  public get abortIncompleteMultipartUpload() {
    return this._abortIncompleteMultipartUpload;
  }
  public putAbortIncompleteMultipartUpload(value: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload) {
    this._abortIncompleteMultipartUpload.internalValue = value;
  }
  public resetAbortIncompleteMultipartUpload() {
    this._abortIncompleteMultipartUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadInput() {
    return this._abortIncompleteMultipartUpload.internalValue;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration = new S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: S3ControlBucketLifecycleConfigurationRuleExpiration) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new S3ControlBucketLifecycleConfigurationRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3ControlBucketLifecycleConfigurationRuleFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class S3ControlBucketLifecycleConfigurationRuleList extends cdktf.ComplexList {
  public internalValue? : S3ControlBucketLifecycleConfigurationRule[] | cdktf.IResolvable

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
  public get(index: number): S3ControlBucketLifecycleConfigurationRuleOutputReference {
    return new S3ControlBucketLifecycleConfigurationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration aws_s3control_bucket_lifecycle_configuration}
*/
export class S3ControlBucketLifecycleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_bucket_lifecycle_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration aws_s3control_bucket_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlBucketLifecycleConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlBucketLifecycleConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_bucket_lifecycle_configuration',
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
    this._bucket = config.bucket;
    this._id = config.id;
    this._rule.internalValue = config.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new S3ControlBucketLifecycleConfigurationRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3ControlBucketLifecycleConfigurationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      rule: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleToTerraform, true)(this._rule.internalValue),
    };
  }
}
