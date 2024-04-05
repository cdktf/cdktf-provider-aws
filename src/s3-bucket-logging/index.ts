// https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketLoggingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}
  */
  readonly targetPrefix: string;
  /**
  * target_grant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#target_grant S3BucketLoggingA#target_grant}
  */
  readonly targetGrant?: S3BucketLoggingTargetGrant[] | cdktf.IResolvable;
  /**
  * target_object_key_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#target_object_key_format S3BucketLoggingA#target_object_key_format}
  */
  readonly targetObjectKeyFormat?: S3BucketLoggingTargetObjectKeyFormat;
}
export interface S3BucketLoggingTargetGrantGrantee {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}
  */
  readonly uri?: string;
}

export function s3BucketLoggingTargetGrantGranteeToTerraform(struct?: S3BucketLoggingTargetGrantGranteeOutputReference | S3BucketLoggingTargetGrantGrantee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function s3BucketLoggingTargetGrantGranteeToHclTerraform(struct?: S3BucketLoggingTargetGrantGranteeOutputReference | S3BucketLoggingTargetGrantGrantee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
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

export class S3BucketLoggingTargetGrantGranteeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketLoggingTargetGrantGrantee | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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

  public set internalValue(value: S3BucketLoggingTargetGrantGrantee | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emailAddress = undefined;
      this._id = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emailAddress = value.emailAddress;
      this._id = value.id;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
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
export interface S3BucketLoggingTargetGrant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}
  */
  readonly permission: string;
  /**
  * grantee block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#grantee S3BucketLoggingA#grantee}
  */
  readonly grantee: S3BucketLoggingTargetGrantGrantee;
}

export function s3BucketLoggingTargetGrantToTerraform(struct?: S3BucketLoggingTargetGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    grantee: s3BucketLoggingTargetGrantGranteeToTerraform(struct!.grantee),
  }
}


export function s3BucketLoggingTargetGrantToHclTerraform(struct?: S3BucketLoggingTargetGrant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grantee: {
      value: s3BucketLoggingTargetGrantGranteeToHclTerraform(struct!.grantee),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLoggingTargetGrantGranteeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLoggingTargetGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketLoggingTargetGrant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._grantee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantee = this._grantee?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLoggingTargetGrant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._grantee.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._grantee.internalValue = value.grantee;
    }
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // grantee - computed: false, optional: false, required: true
  private _grantee = new S3BucketLoggingTargetGrantGranteeOutputReference(this, "grantee");
  public get grantee() {
    return this._grantee;
  }
  public putGrantee(value: S3BucketLoggingTargetGrantGrantee) {
    this._grantee.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeInput() {
    return this._grantee.internalValue;
  }
}

export class S3BucketLoggingTargetGrantList extends cdktf.ComplexList {
  public internalValue? : S3BucketLoggingTargetGrant[] | cdktf.IResolvable

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
  public get(index: number): S3BucketLoggingTargetGrantOutputReference {
    return new S3BucketLoggingTargetGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}
  */
  readonly partitionDateSource: string;
}

export function s3BucketLoggingTargetObjectKeyFormatPartitionedPrefixToTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_date_source: cdktf.stringToTerraform(struct!.partitionDateSource),
  }
}


export function s3BucketLoggingTargetObjectKeyFormatPartitionedPrefixToHclTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_date_source: {
      value: cdktf.stringToHclTerraform(struct!.partitionDateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionDateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionDateSource = this._partitionDateSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionDateSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionDateSource = value.partitionDateSource;
    }
  }

  // partition_date_source - computed: false, optional: false, required: true
  private _partitionDateSource?: string; 
  public get partitionDateSource() {
    return this.getStringAttribute('partition_date_source');
  }
  public set partitionDateSource(value: string) {
    this._partitionDateSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionDateSourceInput() {
    return this._partitionDateSource;
  }
}
export interface S3BucketLoggingTargetObjectKeyFormatSimplePrefix {
}

export function s3BucketLoggingTargetObjectKeyFormatSimplePrefixToTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatSimplePrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function s3BucketLoggingTargetObjectKeyFormatSimplePrefixToHclTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference | S3BucketLoggingTargetObjectKeyFormatSimplePrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketLoggingTargetObjectKeyFormatSimplePrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLoggingTargetObjectKeyFormatSimplePrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface S3BucketLoggingTargetObjectKeyFormat {
  /**
  * partitioned_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#partitioned_prefix S3BucketLoggingA#partitioned_prefix}
  */
  readonly partitionedPrefix?: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix;
  /**
  * simple_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#simple_prefix S3BucketLoggingA#simple_prefix}
  */
  readonly simplePrefix?: S3BucketLoggingTargetObjectKeyFormatSimplePrefix;
}

export function s3BucketLoggingTargetObjectKeyFormatToTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatOutputReference | S3BucketLoggingTargetObjectKeyFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partitioned_prefix: s3BucketLoggingTargetObjectKeyFormatPartitionedPrefixToTerraform(struct!.partitionedPrefix),
    simple_prefix: s3BucketLoggingTargetObjectKeyFormatSimplePrefixToTerraform(struct!.simplePrefix),
  }
}


export function s3BucketLoggingTargetObjectKeyFormatToHclTerraform(struct?: S3BucketLoggingTargetObjectKeyFormatOutputReference | S3BucketLoggingTargetObjectKeyFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partitioned_prefix: {
      value: s3BucketLoggingTargetObjectKeyFormatPartitionedPrefixToHclTerraform(struct!.partitionedPrefix),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixList",
    },
    simple_prefix: {
      value: s3BucketLoggingTargetObjectKeyFormatSimplePrefixToHclTerraform(struct!.simplePrefix),
      isBlock: true,
      type: "list",
      storageClassType: "S3BucketLoggingTargetObjectKeyFormatSimplePrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3BucketLoggingTargetObjectKeyFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketLoggingTargetObjectKeyFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionedPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionedPrefix = this._partitionedPrefix?.internalValue;
    }
    if (this._simplePrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simplePrefix = this._simplePrefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketLoggingTargetObjectKeyFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionedPrefix.internalValue = undefined;
      this._simplePrefix.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionedPrefix.internalValue = value.partitionedPrefix;
      this._simplePrefix.internalValue = value.simplePrefix;
    }
  }

  // partitioned_prefix - computed: false, optional: true, required: false
  private _partitionedPrefix = new S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference(this, "partitioned_prefix");
  public get partitionedPrefix() {
    return this._partitionedPrefix;
  }
  public putPartitionedPrefix(value: S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix) {
    this._partitionedPrefix.internalValue = value;
  }
  public resetPartitionedPrefix() {
    this._partitionedPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionedPrefixInput() {
    return this._partitionedPrefix.internalValue;
  }

  // simple_prefix - computed: false, optional: true, required: false
  private _simplePrefix = new S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference(this, "simple_prefix");
  public get simplePrefix() {
    return this._simplePrefix;
  }
  public putSimplePrefix(value: S3BucketLoggingTargetObjectKeyFormatSimplePrefix) {
    this._simplePrefix.internalValue = value;
  }
  public resetSimplePrefix() {
    this._simplePrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simplePrefixInput() {
    return this._simplePrefix.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging}
*/
export class S3BucketLoggingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3BucketLoggingA to import
  * @param importFromId The id of the existing S3BucketLoggingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3BucketLoggingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3_bucket_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketLoggingAConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketLoggingAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_logging',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.44.0',
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
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._id = config.id;
    this._targetBucket = config.targetBucket;
    this._targetPrefix = config.targetPrefix;
    this._targetGrant.internalValue = config.targetGrant;
    this._targetObjectKeyFormat.internalValue = config.targetObjectKeyFormat;
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

  // target_prefix - computed: false, optional: false, required: true
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }

  // target_grant - computed: false, optional: true, required: false
  private _targetGrant = new S3BucketLoggingTargetGrantList(this, "target_grant", true);
  public get targetGrant() {
    return this._targetGrant;
  }
  public putTargetGrant(value: S3BucketLoggingTargetGrant[] | cdktf.IResolvable) {
    this._targetGrant.internalValue = value;
  }
  public resetTargetGrant() {
    this._targetGrant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGrantInput() {
    return this._targetGrant.internalValue;
  }

  // target_object_key_format - computed: false, optional: true, required: false
  private _targetObjectKeyFormat = new S3BucketLoggingTargetObjectKeyFormatOutputReference(this, "target_object_key_format");
  public get targetObjectKeyFormat() {
    return this._targetObjectKeyFormat;
  }
  public putTargetObjectKeyFormat(value: S3BucketLoggingTargetObjectKeyFormat) {
    this._targetObjectKeyFormat.internalValue = value;
  }
  public resetTargetObjectKeyFormat() {
    this._targetObjectKeyFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetObjectKeyFormatInput() {
    return this._targetObjectKeyFormat.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      id: cdktf.stringToTerraform(this._id),
      target_bucket: cdktf.stringToTerraform(this._targetBucket),
      target_prefix: cdktf.stringToTerraform(this._targetPrefix),
      target_grant: cdktf.listMapper(s3BucketLoggingTargetGrantToTerraform, true)(this._targetGrant.internalValue),
      target_object_key_format: s3BucketLoggingTargetObjectKeyFormatToTerraform(this._targetObjectKeyFormat.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_bucket_owner: {
        value: cdktf.stringToHclTerraform(this._expectedBucketOwner),
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
      target_bucket: {
        value: cdktf.stringToHclTerraform(this._targetBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_prefix: {
        value: cdktf.stringToHclTerraform(this._targetPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_grant: {
        value: cdktf.listMapperHcl(s3BucketLoggingTargetGrantToHclTerraform, true)(this._targetGrant.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3BucketLoggingTargetGrantList",
      },
      target_object_key_format: {
        value: s3BucketLoggingTargetObjectKeyFormatToHclTerraform(this._targetObjectKeyFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketLoggingTargetObjectKeyFormatList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
