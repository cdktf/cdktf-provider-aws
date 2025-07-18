/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#acceleration_status S3Bucket#acceleration_status}
  */
  readonly accelerationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#acl S3Bucket#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#bucket S3Bucket#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
  */
  readonly objectLockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#policy S3Bucket#policy}
  */
  readonly policy?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#region S3Bucket#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#request_payer S3Bucket#request_payer}
  */
  readonly requestPayer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#tags_all S3Bucket#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cors_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#cors_rule S3Bucket#cors_rule}
  */
  readonly corsRule?: S3BucketCorsRule[] | cdktf.IResolvable;
  /**
  * grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#grant S3Bucket#grant}
  */
  readonly grant?: S3BucketGrant[] | cdktf.IResolvable;
  /**
  * lifecycle_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}
  */
  readonly lifecycleRule?: S3BucketLifecycleRule[] | cdktf.IResolvable;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#logging S3Bucket#logging}
  */
  readonly logging?: S3BucketLogging;
  /**
  * object_lock_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}
  */
  readonly objectLockConfiguration?: S3BucketObjectLockConfiguration;
  /**
  * replication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#replication_configuration S3Bucket#replication_configuration}
  */
  readonly replicationConfiguration?: S3BucketReplicationConfiguration;
  /**
  * server_side_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#timeouts S3Bucket#timeouts}
  */
  readonly timeouts?: S3BucketTimeouts;
  /**
  * versioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#versioning S3Bucket#versioning}
  */
  readonly versioning?: S3BucketVersioning;
  /**
  * website block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#website S3Bucket#website}
  */
  readonly website?: S3BucketWebsite;
}
export interface S3BucketCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function s3BucketCorsRuleToTerraform(struct?: S3BucketCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}


export function s3BucketCorsRuleToHclTerraform(struct?: S3BucketCorsRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketCorsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketCorsRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketCorsRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposeHeaders = undefined;
      this._maxAgeSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAgeSeconds = value.maxAgeSeconds;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }
}

export class S3BucketCorsRuleList extends cdktf.ComplexList {
  public internalValue? : S3BucketCorsRule[] | cdktf.IResolvable

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
  public get(index: number): S3BucketCorsRuleOutputReference {
    return new S3BucketCorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketGrant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#permissions S3Bucket#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#type S3Bucket#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#uri S3Bucket#uri}
  */
  readonly uri?: string;
}

export function s3BucketGrantToTerraform(struct?: S3BucketGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function s3BucketGrantToHclTerraform(struct?: S3BucketGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissions = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissions = value.permissions;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class S3BucketGrantList extends cdktf.ComplexList {
  public internalValue? : S3BucketGrant[] | cdktf.IResolvable

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
  public get(index: number): S3BucketGrantOutputReference {
    return new S3BucketGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#date S3Bucket#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

export function s3BucketLifecycleRuleExpirationToTerraform(struct?: S3BucketLifecycleRuleExpirationOutputReference | S3BucketLifecycleRuleExpiration): any {
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


export function s3BucketLifecycleRuleExpirationToHclTerraform(struct?: S3BucketLifecycleRuleExpirationOutputReference | S3BucketLifecycleRuleExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expired_object_delete_marker: {
      value: cdktf.booleanToHclTerraform(struct!.expiredObjectDeleteMarker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleRuleExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketLifecycleRuleExpiration | undefined {
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

  public set internalValue(value: S3BucketLifecycleRuleExpiration | undefined) {
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
export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#days S3Bucket#days}
  */
  readonly days?: number;
}

export function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference | S3BucketLifecycleRuleNoncurrentVersionExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function s3BucketLifecycleRuleNoncurrentVersionExpirationToHclTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference | S3BucketLifecycleRuleNoncurrentVersionExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketLifecycleRuleNoncurrentVersionExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleRuleNoncurrentVersionExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
    }
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
}
export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass: string;
}

export function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function s3BucketLifecycleRuleNoncurrentVersionTransitionToHclTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._storageClass = value.storageClass;
    }
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

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class S3BucketLifecycleRuleNoncurrentVersionTransitionList extends cdktf.ComplexList {
  public internalValue? : S3BucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable

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
  public get(index: number): S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference {
    return new S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleRuleTransition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#date S3Bucket#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass: string;
}

export function s3BucketLifecycleRuleTransitionToTerraform(struct?: S3BucketLifecycleRuleTransition | cdktf.IResolvable): any {
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


export function s3BucketLifecycleRuleTransitionToHclTerraform(struct?: S3BucketLifecycleRuleTransition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleRuleTransitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketLifecycleRuleTransition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleRuleTransition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._days = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._days = value.days;
      this._storageClass = value.storageClass;
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

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}

export class S3BucketLifecycleRuleTransitionList extends cdktf.ComplexList {
  public internalValue? : S3BucketLifecycleRuleTransition[] | cdktf.IResolvable

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
  public get(index: number): S3BucketLifecycleRuleTransitionOutputReference {
    return new S3BucketLifecycleRuleTransitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLifecycleRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}
  */
  readonly abortIncompleteMultipartUploadDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#enabled S3Bucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#expiration S3Bucket#expiration}
  */
  readonly expiration?: S3BucketLifecycleRuleExpiration;
  /**
  * noncurrent_version_expiration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration;
  /**
  * noncurrent_version_transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#noncurrent_version_transition S3Bucket#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: S3BucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
  /**
  * transition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#transition S3Bucket#transition}
  */
  readonly transition?: S3BucketLifecycleRuleTransition[] | cdktf.IResolvable;
}

export function s3BucketLifecycleRuleToTerraform(struct?: S3BucketLifecycleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_incomplete_multipart_upload_days: cdktf.numberToTerraform(struct!.abortIncompleteMultipartUploadDays),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    expiration: s3BucketLifecycleRuleExpirationToTerraform(struct!.expiration),
    noncurrent_version_expiration: s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform, true)(struct!.noncurrentVersionTransition),
    transition: cdktf.listMapper(s3BucketLifecycleRuleTransitionToTerraform, true)(struct!.transition),
  }
}


export function s3BucketLifecycleRuleToHclTerraform(struct?: S3BucketLifecycleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_incomplete_multipart_upload_days: {
      value: cdktf.numberToHclTerraform(struct!.abortIncompleteMultipartUploadDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expiration: {
      value: s3BucketLifecycleRuleExpirationToHclTerraform(struct!.expiration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLifecycleRuleExpirationList",
    },
    noncurrent_version_expiration: {
      value: s3BucketLifecycleRuleNoncurrentVersionExpirationToHclTerraform(struct!.noncurrentVersionExpiration),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLifecycleRuleNoncurrentVersionExpirationList",
    },
    noncurrent_version_transition: {
      value: cdktf.listMapperHcl(s3BucketLifecycleRuleNoncurrentVersionTransitionToHclTerraform, true)(struct!.noncurrentVersionTransition),
      isBlock: true,
      type: "set",
      storageClassType: "S3BucketLifecycleRuleNoncurrentVersionTransitionList",
    },
    transition: {
      value: cdktf.listMapperHcl(s3BucketLifecycleRuleTransitionToHclTerraform, true)(struct!.transition),
      isBlock: true,
      type: "set",
      storageClassType: "S3BucketLifecycleRuleTransitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLifecycleRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketLifecycleRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortIncompleteMultipartUploadDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortIncompleteMultipartUploadDays = this._abortIncompleteMultipartUploadDays;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._expiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration?.internalValue;
    }
    if (this._noncurrentVersionExpiration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionExpiration = this._noncurrentVersionExpiration?.internalValue;
    }
    if (this._noncurrentVersionTransition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noncurrentVersionTransition = this._noncurrentVersionTransition?.internalValue;
    }
    if (this._transition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLifecycleRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUploadDays = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._tags = undefined;
      this._expiration.internalValue = undefined;
      this._noncurrentVersionExpiration.internalValue = undefined;
      this._noncurrentVersionTransition.internalValue = undefined;
      this._transition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortIncompleteMultipartUploadDays = value.abortIncompleteMultipartUploadDays;
      this._enabled = value.enabled;
      this._id = value.id;
      this._prefix = value.prefix;
      this._tags = value.tags;
      this._expiration.internalValue = value.expiration;
      this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
      this._noncurrentVersionTransition.internalValue = value.noncurrentVersionTransition;
      this._transition.internalValue = value.transition;
    }
  }

  // abort_incomplete_multipart_upload_days - computed: false, optional: true, required: false
  private _abortIncompleteMultipartUploadDays?: number; 
  public get abortIncompleteMultipartUploadDays() {
    return this.getNumberAttribute('abort_incomplete_multipart_upload_days');
  }
  public set abortIncompleteMultipartUploadDays(value: number) {
    this._abortIncompleteMultipartUploadDays = value;
  }
  public resetAbortIncompleteMultipartUploadDays() {
    this._abortIncompleteMultipartUploadDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortIncompleteMultipartUploadDaysInput() {
    return this._abortIncompleteMultipartUploadDays;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // expiration - computed: false, optional: true, required: false
  private _expiration = new S3BucketLifecycleRuleExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }
  public putExpiration(value: S3BucketLifecycleRuleExpiration) {
    this._expiration.internalValue = value;
  }
  public resetExpiration() {
    this._expiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration.internalValue;
  }

  // noncurrent_version_expiration - computed: false, optional: true, required: false
  private _noncurrentVersionExpiration = new S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference(this, "noncurrent_version_expiration");
  public get noncurrentVersionExpiration() {
    return this._noncurrentVersionExpiration;
  }
  public putNoncurrentVersionExpiration(value: S3BucketLifecycleRuleNoncurrentVersionExpiration) {
    this._noncurrentVersionExpiration.internalValue = value;
  }
  public resetNoncurrentVersionExpiration() {
    this._noncurrentVersionExpiration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionExpirationInput() {
    return this._noncurrentVersionExpiration.internalValue;
  }

  // noncurrent_version_transition - computed: false, optional: true, required: false
  private _noncurrentVersionTransition = new S3BucketLifecycleRuleNoncurrentVersionTransitionList(this, "noncurrent_version_transition", true);
  public get noncurrentVersionTransition() {
    return this._noncurrentVersionTransition;
  }
  public putNoncurrentVersionTransition(value: S3BucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable) {
    this._noncurrentVersionTransition.internalValue = value;
  }
  public resetNoncurrentVersionTransition() {
    this._noncurrentVersionTransition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noncurrentVersionTransitionInput() {
    return this._noncurrentVersionTransition.internalValue;
  }

  // transition - computed: false, optional: true, required: false
  private _transition = new S3BucketLifecycleRuleTransitionList(this, "transition", true);
  public get transition() {
    return this._transition;
  }
  public putTransition(value: S3BucketLifecycleRuleTransition[] | cdktf.IResolvable) {
    this._transition.internalValue = value;
  }
  public resetTransition() {
    this._transition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition.internalValue;
  }
}

export class S3BucketLifecycleRuleList extends cdktf.ComplexList {
  public internalValue? : S3BucketLifecycleRule[] | cdktf.IResolvable

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
  public get(index: number): S3BucketLifecycleRuleOutputReference {
    return new S3BucketLifecycleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}
  */
  readonly targetPrefix?: string;
}

export function s3BucketLoggingToTerraform(struct?: S3BucketLoggingOutputReference | S3BucketLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}


export function s3BucketLoggingToHclTerraform(struct?: S3BucketLoggingOutputReference | S3BucketLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_bucket: {
      value: cdktf.stringToHclTerraform(struct!.targetBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_prefix: {
      value: cdktf.stringToHclTerraform(struct!.targetPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBucket = this._targetBucket;
    }
    if (this._targetPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPrefix = this._targetPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetBucket = undefined;
      this._targetPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetBucket = value.targetBucket;
      this._targetPrefix = value.targetPrefix;
    }
  }

  // target_bucket - computed: false, optional: false, required: true
  private _targetBucket?: string; 
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }
  public set targetBucket(value: string) {
    this._targetBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBucketInput() {
    return this._targetBucket;
  }

  // target_prefix - computed: false, optional: true, required: false
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  public resetTargetPrefix() {
    this._targetPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#mode S3Bucket#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#years S3Bucket#years}
  */
  readonly years?: number;
}

export function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    mode: cdktf.stringToTerraform(struct!.mode),
    years: cdktf.numberToTerraform(struct!.years),
  }
}


export function s3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    years: {
      value: cdktf.numberToHclTerraform(struct!.years),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRuleDefaultRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._years !== undefined) {
      hasAnyValues = true;
      internalValueResult.years = this._years;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRuleDefaultRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._mode = undefined;
      this._years = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._mode = value.mode;
      this._years = value.years;
    }
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // years - computed: false, optional: true, required: false
  private _years?: number; 
  public get years() {
    return this.getNumberAttribute('years');
  }
  public set years(value: number) {
    this._years = value;
  }
  public resetYears() {
    this._years = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearsInput() {
    return this._years;
  }
}
export interface S3BucketObjectLockConfigurationRule {
  /**
  * default_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#default_retention S3Bucket#default_retention}
  */
  readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention;
}

export function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRuleOutputReference | S3BucketObjectLockConfigurationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_retention: s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct!.defaultRetention),
  }
}


export function s3BucketObjectLockConfigurationRuleToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleOutputReference | S3BucketObjectLockConfigurationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_retention: {
      value: s3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketObjectLockConfigurationRuleDefaultRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketObjectLockConfigurationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfigurationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultRetention.internalValue = value.defaultRetention;
    }
  }

  // default_retention - computed: false, optional: false, required: true
  private _defaultRetention = new S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetention) {
    this._defaultRetention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention.internalValue;
  }
}
export interface S3BucketObjectLockConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
  */
  readonly objectLockEnabled?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#rule S3Bucket#rule}
  */
  readonly rule?: S3BucketObjectLockConfigurationRule;
}

export function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfigurationOutputReference | S3BucketObjectLockConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_lock_enabled: cdktf.stringToTerraform(struct!.objectLockEnabled),
    rule: s3BucketObjectLockConfigurationRuleToTerraform(struct!.rule),
  }
}


export function s3BucketObjectLockConfigurationToHclTerraform(struct?: S3BucketObjectLockConfigurationOutputReference | S3BucketObjectLockConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_lock_enabled: {
      value: cdktf.stringToHclTerraform(struct!.objectLockEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: s3BucketObjectLockConfigurationRuleToHclTerraform(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketObjectLockConfigurationRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketObjectLockConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketObjectLockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectLockEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLockEnabled = this._objectLockEnabled;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketObjectLockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectLockEnabled = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectLockEnabled = value.objectLockEnabled;
      this._rule.internalValue = value.rule;
    }
  }

  // object_lock_enabled - computed: false, optional: true, required: false
  private _objectLockEnabled?: string; 
  public get objectLockEnabled() {
    return this.getStringAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: string) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new S3BucketObjectLockConfigurationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketObjectLockConfigurationRule) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#owner S3Bucket#owner}
  */
  readonly owner: string;
}

export function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._owner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._owner = value.owner;
    }
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }
}
export interface S3BucketReplicationConfigurationRulesDestinationMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#minutes S3Bucket#minutes}
  */
  readonly minutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference | S3BucketReplicationConfigurationRulesDestinationMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationMetricsToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference | S3BucketReplicationConfigurationRulesDestinationMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
      this._status = value.status;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
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
}
export interface S3BucketReplicationConfigurationRulesDestinationReplicationTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#minutes S3Bucket#minutes}
  */
  readonly minutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status?: string;
}

export function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRulesDestinationReplicationTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRulesDestinationReplicationTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
      this._status = value.status;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
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
}
export interface S3BucketReplicationConfigurationRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#account_id S3Bucket#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#bucket S3Bucket#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}
  */
  readonly replicaKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * access_control_translation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#access_control_translation S3Bucket#access_control_translation}
  */
  readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#metrics S3Bucket#metrics}
  */
  readonly metrics?: S3BucketReplicationConfigurationRulesDestinationMetrics;
  /**
  * replication_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#replication_time S3Bucket#replication_time}
  */
  readonly replicationTime?: S3BucketReplicationConfigurationRulesDestinationReplicationTime;
}

export function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationOutputReference | S3BucketReplicationConfigurationRulesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    replica_kms_key_id: cdktf.stringToTerraform(struct!.replicaKmsKeyId),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    access_control_translation: s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct!.accessControlTranslation),
    metrics: s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct!.metrics),
    replication_time: s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct!.replicationTime),
  }
}


export function s3BucketReplicationConfigurationRulesDestinationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationOutputReference | S3BucketReplicationConfigurationRulesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.replicaKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_control_translation: {
      value: s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToHclTerraform(struct!.accessControlTranslation),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationList",
    },
    metrics: {
      value: s3BucketReplicationConfigurationRulesDestinationMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationMetricsList",
    },
    replication_time: {
      value: s3BucketReplicationConfigurationRulesDestinationReplicationTimeToHclTerraform(struct!.replicationTime),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationReplicationTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._replicaKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaKmsKeyId = this._replicaKmsKeyId;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._accessControlTranslation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlTranslation = this._accessControlTranslation?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._replicationTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationTime = this._replicationTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._bucket = undefined;
      this._replicaKmsKeyId = undefined;
      this._storageClass = undefined;
      this._accessControlTranslation.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._replicationTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._bucket = value.bucket;
      this._replicaKmsKeyId = value.replicaKmsKeyId;
      this._storageClass = value.storageClass;
      this._accessControlTranslation.internalValue = value.accessControlTranslation;
      this._metrics.internalValue = value.metrics;
      this._replicationTime.internalValue = value.replicationTime;
    }
  }

  // account_id - computed: false, optional: true, required: false
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

  // replica_kms_key_id - computed: false, optional: true, required: false
  private _replicaKmsKeyId?: string; 
  public get replicaKmsKeyId() {
    return this.getStringAttribute('replica_kms_key_id');
  }
  public set replicaKmsKeyId(value: string) {
    this._replicaKmsKeyId = value;
  }
  public resetReplicaKmsKeyId() {
    this._replicaKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaKmsKeyIdInput() {
    return this._replicaKmsKeyId;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // access_control_translation - computed: false, optional: true, required: false
  private _accessControlTranslation = new S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference(this, "access_control_translation");
  public get accessControlTranslation() {
    return this._accessControlTranslation;
  }
  public putAccessControlTranslation(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation) {
    this._accessControlTranslation.internalValue = value;
  }
  public resetAccessControlTranslation() {
    this._accessControlTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlTranslationInput() {
    return this._accessControlTranslation.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: S3BucketReplicationConfigurationRulesDestinationMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // replication_time - computed: false, optional: true, required: false
  private _replicationTime = new S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference(this, "replication_time");
  public get replicationTime() {
    return this._replicationTime;
  }
  public putReplicationTime(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime) {
    this._replicationTime.internalValue = value;
  }
  public resetReplicationTime() {
    this._replicationTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTimeInput() {
    return this._replicationTime.internalValue;
  }
}
export interface S3BucketReplicationConfigurationRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function s3BucketReplicationConfigurationRulesFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilterOutputReference | S3BucketReplicationConfigurationRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function s3BucketReplicationConfigurationRulesFilterToHclTerraform(struct?: S3BucketReplicationConfigurationRulesFilterOutputReference | S3BucketReplicationConfigurationRulesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesFilter | undefined {
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

  public set internalValue(value: S3BucketReplicationConfigurationRulesFilter | undefined) {
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
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#enabled S3Bucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
  /**
  * sse_kms_encrypted_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}
  */
  readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_kms_encrypted_objects: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct!.sseKmsEncryptedObjects),
  }
}


export function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToHclTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sse_kms_encrypted_objects: {
      value: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct!.sseKmsEncryptedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKmsEncryptedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKmsEncryptedObjects = this._sseKmsEncryptedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseKmsEncryptedObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseKmsEncryptedObjects.internalValue = value.sseKmsEncryptedObjects;
    }
  }

  // sse_kms_encrypted_objects - computed: false, optional: true, required: false
  private _sseKmsEncryptedObjects = new S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this, "sse_kms_encrypted_objects");
  public get sseKmsEncryptedObjects() {
    return this._sseKmsEncryptedObjects;
  }
  public putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects) {
    this._sseKmsEncryptedObjects.internalValue = value;
  }
  public resetSseKmsEncryptedObjects() {
    this._sseKmsEncryptedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsEncryptedObjectsInput() {
    return this._sseKmsEncryptedObjects.internalValue;
  }
}
export interface S3BucketReplicationConfigurationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#delete_marker_replication_status S3Bucket#delete_marker_replication_status}
  */
  readonly deleteMarkerReplicationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#priority S3Bucket#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#status S3Bucket#status}
  */
  readonly status: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#destination S3Bucket#destination}
  */
  readonly destination: S3BucketReplicationConfigurationRulesDestination;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#filter S3Bucket#filter}
  */
  readonly filter?: S3BucketReplicationConfigurationRulesFilter;
  /**
  * source_selection_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#source_selection_criteria S3Bucket#source_selection_criteria}
  */
  readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
}

export function s3BucketReplicationConfigurationRulesToTerraform(struct?: S3BucketReplicationConfigurationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_marker_replication_status: cdktf.stringToTerraform(struct!.deleteMarkerReplicationStatus),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    destination: s3BucketReplicationConfigurationRulesDestinationToTerraform(struct!.destination),
    filter: s3BucketReplicationConfigurationRulesFilterToTerraform(struct!.filter),
    source_selection_criteria: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct!.sourceSelectionCriteria),
  }
}


export function s3BucketReplicationConfigurationRulesToHclTerraform(struct?: S3BucketReplicationConfigurationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_marker_replication_status: {
      value: cdktf.stringToHclTerraform(struct!.deleteMarkerReplicationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: s3BucketReplicationConfigurationRulesDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesDestinationList",
    },
    filter: {
      value: s3BucketReplicationConfigurationRulesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesFilterList",
    },
    source_selection_criteria: {
      value: s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToHclTerraform(struct!.sourceSelectionCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketReplicationConfigurationRulesSourceSelectionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketReplicationConfigurationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMarkerReplicationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMarkerReplicationStatus = this._deleteMarkerReplicationStatus;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._sourceSelectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSelectionCriteria = this._sourceSelectionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfigurationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteMarkerReplicationStatus = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._priority = undefined;
      this._status = undefined;
      this._destination.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._sourceSelectionCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteMarkerReplicationStatus = value.deleteMarkerReplicationStatus;
      this._id = value.id;
      this._prefix = value.prefix;
      this._priority = value.priority;
      this._status = value.status;
      this._destination.internalValue = value.destination;
      this._filter.internalValue = value.filter;
      this._sourceSelectionCriteria.internalValue = value.sourceSelectionCriteria;
    }
  }

  // delete_marker_replication_status - computed: false, optional: true, required: false
  private _deleteMarkerReplicationStatus?: string; 
  public get deleteMarkerReplicationStatus() {
    return this.getStringAttribute('delete_marker_replication_status');
  }
  public set deleteMarkerReplicationStatus(value: string) {
    this._deleteMarkerReplicationStatus = value;
  }
  public resetDeleteMarkerReplicationStatus() {
    this._deleteMarkerReplicationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMarkerReplicationStatusInput() {
    return this._deleteMarkerReplicationStatus;
  }

  // id - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new S3BucketReplicationConfigurationRulesDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: S3BucketReplicationConfigurationRulesDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new S3BucketReplicationConfigurationRulesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: S3BucketReplicationConfigurationRulesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // source_selection_criteria - computed: false, optional: true, required: false
  private _sourceSelectionCriteria = new S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference(this, "source_selection_criteria");
  public get sourceSelectionCriteria() {
    return this._sourceSelectionCriteria;
  }
  public putSourceSelectionCriteria(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria) {
    this._sourceSelectionCriteria.internalValue = value;
  }
  public resetSourceSelectionCriteria() {
    this._sourceSelectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSelectionCriteriaInput() {
    return this._sourceSelectionCriteria.internalValue;
  }
}

export class S3BucketReplicationConfigurationRulesList extends cdktf.ComplexList {
  public internalValue? : S3BucketReplicationConfigurationRules[] | cdktf.IResolvable

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
  public get(index: number): S3BucketReplicationConfigurationRulesOutputReference {
    return new S3BucketReplicationConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketReplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#role S3Bucket#role}
  */
  readonly role: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#rules S3Bucket#rules}
  */
  readonly rules: S3BucketReplicationConfigurationRules[] | cdktf.IResolvable;
}

export function s3BucketReplicationConfigurationToTerraform(struct?: S3BucketReplicationConfigurationOutputReference | S3BucketReplicationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    rules: cdktf.listMapper(s3BucketReplicationConfigurationRulesToTerraform, true)(struct!.rules),
  }
}


export function s3BucketReplicationConfigurationToHclTerraform(struct?: S3BucketReplicationConfigurationOutputReference | S3BucketReplicationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(s3BucketReplicationConfigurationRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "set",
      storageClassType: "S3BucketReplicationConfigurationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketReplicationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketReplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketReplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._rules.internalValue = value.rules;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new S3BucketReplicationConfigurationRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: S3BucketReplicationConfigurationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}
  */
  readonly sseAlgorithm: string;
}

export function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}


export function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_master_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsMasterKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsMasterKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsMasterKeyId = undefined;
      this._sseAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsMasterKeyId = value.kmsMasterKeyId;
      this._sseAlgorithm = value.sseAlgorithm;
    }
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // sse_algorithm - computed: false, optional: false, required: true
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }
}
export interface S3BucketServerSideEncryptionConfigurationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * apply_server_side_encryption_by_default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}
  */
  readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
}

export function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleOutputReference | S3BucketServerSideEncryptionConfigurationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_key_enabled: cdktf.booleanToTerraform(struct!.bucketKeyEnabled),
    apply_server_side_encryption_by_default: s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct!.applyServerSideEncryptionByDefault),
  }
}


export function s3BucketServerSideEncryptionConfigurationRuleToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleOutputReference | S3BucketServerSideEncryptionConfigurationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_key_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bucketKeyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_server_side_encryption_by_default: {
      value: s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToHclTerraform(struct!.applyServerSideEncryptionByDefault),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketServerSideEncryptionConfigurationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketServerSideEncryptionConfigurationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketKeyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketKeyEnabled = this._bucketKeyEnabled;
    }
    if (this._applyServerSideEncryptionByDefault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyServerSideEncryptionByDefault = this._applyServerSideEncryptionByDefault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketServerSideEncryptionConfigurationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketKeyEnabled = undefined;
      this._applyServerSideEncryptionByDefault.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketKeyEnabled = value.bucketKeyEnabled;
      this._applyServerSideEncryptionByDefault.internalValue = value.applyServerSideEncryptionByDefault;
    }
  }

  // bucket_key_enabled - computed: false, optional: true, required: false
  private _bucketKeyEnabled?: boolean | cdktf.IResolvable; 
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }
  public set bucketKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._bucketKeyEnabled = value;
  }
  public resetBucketKeyEnabled() {
    this._bucketKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketKeyEnabledInput() {
    return this._bucketKeyEnabled;
  }

  // apply_server_side_encryption_by_default - computed: false, optional: false, required: true
  private _applyServerSideEncryptionByDefault = new S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference(this, "apply_server_side_encryption_by_default");
  public get applyServerSideEncryptionByDefault() {
    return this._applyServerSideEncryptionByDefault;
  }
  public putApplyServerSideEncryptionByDefault(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault) {
    this._applyServerSideEncryptionByDefault.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applyServerSideEncryptionByDefaultInput() {
    return this._applyServerSideEncryptionByDefault.internalValue;
  }
}
export interface S3BucketServerSideEncryptionConfiguration {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#rule S3Bucket#rule}
  */
  readonly rule: S3BucketServerSideEncryptionConfigurationRule;
}

export function s3BucketServerSideEncryptionConfigurationToTerraform(struct?: S3BucketServerSideEncryptionConfigurationOutputReference | S3BucketServerSideEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct!.rule),
  }
}


export function s3BucketServerSideEncryptionConfigurationToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationOutputReference | S3BucketServerSideEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: s3BucketServerSideEncryptionConfigurationRuleToHclTerraform(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketServerSideEncryptionConfigurationRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketServerSideEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketServerSideEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new S3BucketServerSideEncryptionConfigurationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3BucketServerSideEncryptionConfigurationRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface S3BucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#create S3Bucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#delete S3Bucket#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#read S3Bucket#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#update S3Bucket#update}
  */
  readonly update?: string;
}

export function s3BucketTimeoutsToTerraform(struct?: S3BucketTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function s3BucketTimeoutsToHclTerraform(struct?: S3BucketTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._read = value.read;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface S3BucketVersioning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#enabled S3Bucket#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}
  */
  readonly mfaDelete?: boolean | cdktf.IResolvable;
}

export function s3BucketVersioningToTerraform(struct?: S3BucketVersioningOutputReference | S3BucketVersioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mfa_delete: cdktf.booleanToTerraform(struct!.mfaDelete),
  }
}


export function s3BucketVersioningToHclTerraform(struct?: S3BucketVersioningOutputReference | S3BucketVersioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mfa_delete: {
      value: cdktf.booleanToHclTerraform(struct!.mfaDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketVersioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketVersioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mfaDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaDelete = this._mfaDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketVersioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._mfaDelete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._mfaDelete = value.mfaDelete;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mfa_delete - computed: false, optional: true, required: false
  private _mfaDelete?: boolean | cdktf.IResolvable; 
  public get mfaDelete() {
    return this.getBooleanAttribute('mfa_delete');
  }
  public set mfaDelete(value: boolean | cdktf.IResolvable) {
    this._mfaDelete = value;
  }
  public resetMfaDelete() {
    this._mfaDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaDeleteInput() {
    return this._mfaDelete;
  }
}
export interface S3BucketWebsite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#error_document S3Bucket#error_document}
  */
  readonly errorDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#index_document S3Bucket#index_document}
  */
  readonly indexDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}
  */
  readonly routingRules?: string;
}

export function s3BucketWebsiteToTerraform(struct?: S3BucketWebsiteOutputReference | S3BucketWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_document: cdktf.stringToTerraform(struct!.errorDocument),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
    redirect_all_requests_to: cdktf.stringToTerraform(struct!.redirectAllRequestsTo),
    routing_rules: cdktf.stringToTerraform(struct!.routingRules),
  }
}


export function s3BucketWebsiteToHclTerraform(struct?: S3BucketWebsiteOutputReference | S3BucketWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_document: {
      value: cdktf.stringToHclTerraform(struct!.errorDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_document: {
      value: cdktf.stringToHclTerraform(struct!.indexDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_all_requests_to: {
      value: cdktf.stringToHclTerraform(struct!.redirectAllRequestsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_rules: {
      value: cdktf.stringToHclTerraform(struct!.routingRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorDocument = this._errorDocument;
    }
    if (this._indexDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexDocument = this._indexDocument;
    }
    if (this._redirectAllRequestsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAllRequestsTo = this._redirectAllRequestsTo;
    }
    if (this._routingRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingRules = this._routingRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorDocument = undefined;
      this._indexDocument = undefined;
      this._redirectAllRequestsTo = undefined;
      this._routingRules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorDocument = value.errorDocument;
      this._indexDocument = value.indexDocument;
      this._redirectAllRequestsTo = value.redirectAllRequestsTo;
      this._routingRules = value.routingRules;
    }
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument?: string; 
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }
  public set errorDocument(value: string) {
    this._errorDocument = value;
  }
  public resetErrorDocument() {
    this._errorDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument?: string; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string) {
    this._indexDocument = value;
  }
  public resetIndexDocument() {
    this._indexDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument;
  }

  // redirect_all_requests_to - computed: false, optional: true, required: false
  private _redirectAllRequestsTo?: string; 
  public get redirectAllRequestsTo() {
    return this.getStringAttribute('redirect_all_requests_to');
  }
  public set redirectAllRequestsTo(value: string) {
    this._redirectAllRequestsTo = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo;
  }

  // routing_rules - computed: false, optional: true, required: false
  private _routingRules?: string; 
  public get routingRules() {
    return this.getStringAttribute('routing_rules');
  }
  public set routingRules(value: string) {
    this._routingRules = value;
  }
  public resetRoutingRules() {
    this._routingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket aws_s3_bucket}
*/
export class S3Bucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Bucket to import
  * @param importFromId The id of the existing S3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/s3_bucket aws_s3_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3BucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket',
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
    this._accelerationStatus = config.accelerationStatus;
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._bucketPrefix = config.bucketPrefix;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._objectLockEnabled = config.objectLockEnabled;
    this._policy = config.policy;
    this._region = config.region;
    this._requestPayer = config.requestPayer;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._corsRule.internalValue = config.corsRule;
    this._grant.internalValue = config.grant;
    this._lifecycleRule.internalValue = config.lifecycleRule;
    this._logging.internalValue = config.logging;
    this._objectLockConfiguration.internalValue = config.objectLockConfiguration;
    this._replicationConfiguration.internalValue = config.replicationConfiguration;
    this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._versioning.internalValue = config.versioning;
    this._website.internalValue = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceleration_status - computed: true, optional: true, required: false
  private _accelerationStatus?: string; 
  public get accelerationStatus() {
    return this.getStringAttribute('acceleration_status');
  }
  public set accelerationStatus(value: string) {
    this._accelerationStatus = value;
  }
  public resetAccelerationStatus() {
    this._accelerationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationStatusInput() {
    return this._accelerationStatus;
  }

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_domain_name - computed: true, optional: false, required: false
  public get bucketDomainName() {
    return this.getStringAttribute('bucket_domain_name');
  }

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // bucket_region - computed: true, optional: false, required: false
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }

  // bucket_regional_domain_name - computed: true, optional: false, required: false
  public get bucketRegionalDomainName() {
    return this.getStringAttribute('bucket_regional_domain_name');
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

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
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

  // object_lock_enabled - computed: true, optional: true, required: false
  private _objectLockEnabled?: boolean | cdktf.IResolvable; 
  public get objectLockEnabled() {
    return this.getBooleanAttribute('object_lock_enabled');
  }
  public set objectLockEnabled(value: boolean | cdktf.IResolvable) {
    this._objectLockEnabled = value;
  }
  public resetObjectLockEnabled() {
    this._objectLockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockEnabledInput() {
    return this._objectLockEnabled;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

  // request_payer - computed: true, optional: true, required: false
  private _requestPayer?: string; 
  public get requestPayer() {
    return this.getStringAttribute('request_payer');
  }
  public set requestPayer(value: string) {
    this._requestPayer = value;
  }
  public resetRequestPayer() {
    this._requestPayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayerInput() {
    return this._requestPayer;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // website_domain - computed: true, optional: false, required: false
  public get websiteDomain() {
    return this.getStringAttribute('website_domain');
  }

  // website_endpoint - computed: true, optional: false, required: false
  public get websiteEndpoint() {
    return this.getStringAttribute('website_endpoint');
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new S3BucketCorsRuleList(this, "cors_rule", false);
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: S3BucketCorsRule[] | cdktf.IResolvable) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // grant - computed: false, optional: true, required: false
  private _grant = new S3BucketGrantList(this, "grant", true);
  public get grant() {
    return this._grant;
  }
  public putGrant(value: S3BucketGrant[] | cdktf.IResolvable) {
    this._grant.internalValue = value;
  }
  public resetGrant() {
    this._grant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant.internalValue;
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule = new S3BucketLifecycleRuleList(this, "lifecycle_rule", false);
  public get lifecycleRule() {
    return this._lifecycleRule;
  }
  public putLifecycleRule(value: S3BucketLifecycleRule[] | cdktf.IResolvable) {
    this._lifecycleRule.internalValue = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new S3BucketLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: S3BucketLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // object_lock_configuration - computed: false, optional: true, required: false
  private _objectLockConfiguration = new S3BucketObjectLockConfigurationOutputReference(this, "object_lock_configuration");
  public get objectLockConfiguration() {
    return this._objectLockConfiguration;
  }
  public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration) {
    this._objectLockConfiguration.internalValue = value;
  }
  public resetObjectLockConfiguration() {
    this._objectLockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockConfigurationInput() {
    return this._objectLockConfiguration.internalValue;
  }

  // replication_configuration - computed: false, optional: true, required: false
  private _replicationConfiguration = new S3BucketReplicationConfigurationOutputReference(this, "replication_configuration");
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }
  public putReplicationConfiguration(value: S3BucketReplicationConfiguration) {
    this._replicationConfiguration.internalValue = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration.internalValue;
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration = new S3BucketServerSideEncryptionConfigurationOutputReference(this, "server_side_encryption_configuration");
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration) {
    this._serverSideEncryptionConfiguration.internalValue = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new S3BucketTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: S3BucketTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning = new S3BucketVersioningOutputReference(this, "versioning");
  public get versioning() {
    return this._versioning;
  }
  public putVersioning(value: S3BucketVersioning) {
    this._versioning.internalValue = value;
  }
  public resetVersioning() {
    this._versioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new S3BucketWebsiteOutputReference(this, "website");
  public get website() {
    return this._website;
  }
  public putWebsite(value: S3BucketWebsite) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceleration_status: cdktf.stringToTerraform(this._accelerationStatus),
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      object_lock_enabled: cdktf.booleanToTerraform(this._objectLockEnabled),
      policy: cdktf.stringToTerraform(this._policy),
      region: cdktf.stringToTerraform(this._region),
      request_payer: cdktf.stringToTerraform(this._requestPayer),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      cors_rule: cdktf.listMapper(s3BucketCorsRuleToTerraform, true)(this._corsRule.internalValue),
      grant: cdktf.listMapper(s3BucketGrantToTerraform, true)(this._grant.internalValue),
      lifecycle_rule: cdktf.listMapper(s3BucketLifecycleRuleToTerraform, true)(this._lifecycleRule.internalValue),
      logging: s3BucketLoggingToTerraform(this._logging.internalValue),
      object_lock_configuration: s3BucketObjectLockConfigurationToTerraform(this._objectLockConfiguration.internalValue),
      replication_configuration: s3BucketReplicationConfigurationToTerraform(this._replicationConfiguration.internalValue),
      server_side_encryption_configuration: s3BucketServerSideEncryptionConfigurationToTerraform(this._serverSideEncryptionConfiguration.internalValue),
      timeouts: s3BucketTimeoutsToTerraform(this._timeouts.internalValue),
      versioning: s3BucketVersioningToTerraform(this._versioning.internalValue),
      website: s3BucketWebsiteToTerraform(this._website.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceleration_status: {
        value: cdktf.stringToHclTerraform(this._accelerationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
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
      object_lock_enabled: {
        value: cdktf.booleanToHclTerraform(this._objectLockEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
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
      request_payer: {
        value: cdktf.stringToHclTerraform(this._requestPayer),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cors_rule: {
        value: cdktf.listMapperHcl(s3BucketCorsRuleToHclTerraform, true)(this._corsRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketCorsRuleList",
      },
      grant: {
        value: cdktf.listMapperHcl(s3BucketGrantToHclTerraform, true)(this._grant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3BucketGrantList",
      },
      lifecycle_rule: {
        value: cdktf.listMapperHcl(s3BucketLifecycleRuleToHclTerraform, true)(this._lifecycleRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketLifecycleRuleList",
      },
      logging: {
        value: s3BucketLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketLoggingList",
      },
      object_lock_configuration: {
        value: s3BucketObjectLockConfigurationToHclTerraform(this._objectLockConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketObjectLockConfigurationList",
      },
      replication_configuration: {
        value: s3BucketReplicationConfigurationToHclTerraform(this._replicationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketReplicationConfigurationList",
      },
      server_side_encryption_configuration: {
        value: s3BucketServerSideEncryptionConfigurationToHclTerraform(this._serverSideEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketServerSideEncryptionConfigurationList",
      },
      timeouts: {
        value: s3BucketTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketTimeouts",
      },
      versioning: {
        value: s3BucketVersioningToHclTerraform(this._versioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketVersioningList",
      },
      website: {
        value: s3BucketWebsiteToHclTerraform(this._website.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketWebsiteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
