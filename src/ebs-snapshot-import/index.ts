/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsSnapshotImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#description EbsSnapshotImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#id EbsSnapshotImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}
  */
  readonly permanentRestore?: boolean | cdktf.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#region EbsSnapshotImport#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}
  */
  readonly storageTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#tags EbsSnapshotImport#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}
  */
  readonly temporaryRestoreDays?: number;
  /**
  * client_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}
  */
  readonly clientData?: EbsSnapshotImportClientData;
  /**
  * disk_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}
  */
  readonly diskContainer: EbsSnapshotImportDiskContainer;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}
  */
  readonly timeouts?: EbsSnapshotImportTimeouts;
}
export interface EbsSnapshotImportClientData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#comment EbsSnapshotImport#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}
  */
  readonly uploadEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}
  */
  readonly uploadSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}
  */
  readonly uploadStart?: string;
}

export function ebsSnapshotImportClientDataToTerraform(struct?: EbsSnapshotImportClientDataOutputReference | EbsSnapshotImportClientData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    upload_end: cdktf.stringToTerraform(struct!.uploadEnd),
    upload_size: cdktf.numberToTerraform(struct!.uploadSize),
    upload_start: cdktf.stringToTerraform(struct!.uploadStart),
  }
}


export function ebsSnapshotImportClientDataToHclTerraform(struct?: EbsSnapshotImportClientDataOutputReference | EbsSnapshotImportClientData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_end: {
      value: cdktf.stringToHclTerraform(struct!.uploadEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_size: {
      value: cdktf.numberToHclTerraform(struct!.uploadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_start: {
      value: cdktf.stringToHclTerraform(struct!.uploadStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsSnapshotImportClientDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsSnapshotImportClientData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._uploadEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadEnd = this._uploadEnd;
    }
    if (this._uploadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadSize = this._uploadSize;
    }
    if (this._uploadStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadStart = this._uploadStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsSnapshotImportClientData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._uploadEnd = undefined;
      this._uploadSize = undefined;
      this._uploadStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._uploadEnd = value.uploadEnd;
      this._uploadSize = value.uploadSize;
      this._uploadStart = value.uploadStart;
    }
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

  // upload_end - computed: true, optional: true, required: false
  private _uploadEnd?: string; 
  public get uploadEnd() {
    return this.getStringAttribute('upload_end');
  }
  public set uploadEnd(value: string) {
    this._uploadEnd = value;
  }
  public resetUploadEnd() {
    this._uploadEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadEndInput() {
    return this._uploadEnd;
  }

  // upload_size - computed: true, optional: true, required: false
  private _uploadSize?: number; 
  public get uploadSize() {
    return this.getNumberAttribute('upload_size');
  }
  public set uploadSize(value: number) {
    this._uploadSize = value;
  }
  public resetUploadSize() {
    this._uploadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadSizeInput() {
    return this._uploadSize;
  }

  // upload_start - computed: true, optional: true, required: false
  private _uploadStart?: string; 
  public get uploadStart() {
    return this.getStringAttribute('upload_start');
  }
  public set uploadStart(value: string) {
    this._uploadStart = value;
  }
  public resetUploadStart() {
    this._uploadStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadStartInput() {
    return this._uploadStart;
  }
}
export interface EbsSnapshotImportDiskContainerUserBucket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}
  */
  readonly s3Key: string;
}

export function ebsSnapshotImportDiskContainerUserBucketToTerraform(struct?: EbsSnapshotImportDiskContainerUserBucketOutputReference | EbsSnapshotImportDiskContainerUserBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
  }
}


export function ebsSnapshotImportDiskContainerUserBucketToHclTerraform(struct?: EbsSnapshotImportDiskContainerUserBucketOutputReference | EbsSnapshotImportDiskContainerUserBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_key: {
      value: cdktf.stringToHclTerraform(struct!.s3Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsSnapshotImportDiskContainerUserBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsSnapshotImportDiskContainerUserBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsSnapshotImportDiskContainerUserBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Key = value.s3Key;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: false, required: true
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }
}
export interface EbsSnapshotImportDiskContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#description EbsSnapshotImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#format EbsSnapshotImport#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#url EbsSnapshotImport#url}
  */
  readonly url?: string;
  /**
  * user_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}
  */
  readonly userBucket?: EbsSnapshotImportDiskContainerUserBucket;
}

export function ebsSnapshotImportDiskContainerToTerraform(struct?: EbsSnapshotImportDiskContainerOutputReference | EbsSnapshotImportDiskContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    format: cdktf.stringToTerraform(struct!.format),
    url: cdktf.stringToTerraform(struct!.url),
    user_bucket: ebsSnapshotImportDiskContainerUserBucketToTerraform(struct!.userBucket),
  }
}


export function ebsSnapshotImportDiskContainerToHclTerraform(struct?: EbsSnapshotImportDiskContainerOutputReference | EbsSnapshotImportDiskContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_bucket: {
      value: ebsSnapshotImportDiskContainerUserBucketToHclTerraform(struct!.userBucket),
      isBlock: true,
      type: "list",
      storageClassType: "EbsSnapshotImportDiskContainerUserBucketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsSnapshotImportDiskContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsSnapshotImportDiskContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBucket = this._userBucket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsSnapshotImportDiskContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._format = undefined;
      this._url = undefined;
      this._userBucket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._format = value.format;
      this._url = value.url;
      this._userBucket.internalValue = value.userBucket;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_bucket - computed: false, optional: true, required: false
  private _userBucket = new EbsSnapshotImportDiskContainerUserBucketOutputReference(this, "user_bucket");
  public get userBucket() {
    return this._userBucket;
  }
  public putUserBucket(value: EbsSnapshotImportDiskContainerUserBucket) {
    this._userBucket.internalValue = value;
  }
  public resetUserBucket() {
    this._userBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBucketInput() {
    return this._userBucket.internalValue;
  }
}
export interface EbsSnapshotImportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#create EbsSnapshotImport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#delete EbsSnapshotImport#delete}
  */
  readonly delete?: string;
}

export function ebsSnapshotImportTimeoutsToTerraform(struct?: EbsSnapshotImportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ebsSnapshotImportTimeoutsToHclTerraform(struct?: EbsSnapshotImportTimeouts | cdktf.IResolvable): any {
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

export class EbsSnapshotImportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EbsSnapshotImportTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EbsSnapshotImportTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import aws_ebs_snapshot_import}
*/
export class EbsSnapshotImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ebs_snapshot_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbsSnapshotImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbsSnapshotImport to import
  * @param importFromId The id of the existing EbsSnapshotImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbsSnapshotImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ebs_snapshot_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ebs_snapshot_import aws_ebs_snapshot_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsSnapshotImportConfig
  */
  public constructor(scope: Construct, id: string, config: EbsSnapshotImportConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot_import',
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
    this._description = config.description;
    this._encrypted = config.encrypted;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._permanentRestore = config.permanentRestore;
    this._region = config.region;
    this._roleName = config.roleName;
    this._storageTier = config.storageTier;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._temporaryRestoreDays = config.temporaryRestoreDays;
    this._clientData.internalValue = config.clientData;
    this._diskContainer.internalValue = config.diskContainer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_encryption_key_id - computed: true, optional: false, required: false
  public get dataEncryptionKeyId() {
    return this.getStringAttribute('data_encryption_key_id');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // outpost_arn - computed: true, optional: false, required: false
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }

  // owner_alias - computed: true, optional: false, required: false
  public get ownerAlias() {
    return this.getStringAttribute('owner_alias');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // permanent_restore - computed: false, optional: true, required: false
  private _permanentRestore?: boolean | cdktf.IResolvable; 
  public get permanentRestore() {
    return this.getBooleanAttribute('permanent_restore');
  }
  public set permanentRestore(value: boolean | cdktf.IResolvable) {
    this._permanentRestore = value;
  }
  public resetPermanentRestore() {
    this._permanentRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentRestoreInput() {
    return this._permanentRestore;
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

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // storage_tier - computed: true, optional: true, required: false
  private _storageTier?: string; 
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }
  public set storageTier(value: string) {
    this._storageTier = value;
  }
  public resetStorageTier() {
    this._storageTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTierInput() {
    return this._storageTier;
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

  // temporary_restore_days - computed: false, optional: true, required: false
  private _temporaryRestoreDays?: number; 
  public get temporaryRestoreDays() {
    return this.getNumberAttribute('temporary_restore_days');
  }
  public set temporaryRestoreDays(value: number) {
    this._temporaryRestoreDays = value;
  }
  public resetTemporaryRestoreDays() {
    this._temporaryRestoreDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryRestoreDaysInput() {
    return this._temporaryRestoreDays;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // client_data - computed: false, optional: true, required: false
  private _clientData = new EbsSnapshotImportClientDataOutputReference(this, "client_data");
  public get clientData() {
    return this._clientData;
  }
  public putClientData(value: EbsSnapshotImportClientData) {
    this._clientData.internalValue = value;
  }
  public resetClientData() {
    this._clientData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDataInput() {
    return this._clientData.internalValue;
  }

  // disk_container - computed: false, optional: false, required: true
  private _diskContainer = new EbsSnapshotImportDiskContainerOutputReference(this, "disk_container");
  public get diskContainer() {
    return this._diskContainer;
  }
  public putDiskContainer(value: EbsSnapshotImportDiskContainer) {
    this._diskContainer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskContainerInput() {
    return this._diskContainer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EbsSnapshotImportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EbsSnapshotImportTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      permanent_restore: cdktf.booleanToTerraform(this._permanentRestore),
      region: cdktf.stringToTerraform(this._region),
      role_name: cdktf.stringToTerraform(this._roleName),
      storage_tier: cdktf.stringToTerraform(this._storageTier),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      temporary_restore_days: cdktf.numberToTerraform(this._temporaryRestoreDays),
      client_data: ebsSnapshotImportClientDataToTerraform(this._clientData.internalValue),
      disk_container: ebsSnapshotImportDiskContainerToTerraform(this._diskContainer.internalValue),
      timeouts: ebsSnapshotImportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanent_restore: {
        value: cdktf.booleanToHclTerraform(this._permanentRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_tier: {
        value: cdktf.stringToHclTerraform(this._storageTier),
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
      temporary_restore_days: {
        value: cdktf.numberToHclTerraform(this._temporaryRestoreDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_data: {
        value: ebsSnapshotImportClientDataToHclTerraform(this._clientData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbsSnapshotImportClientDataList",
      },
      disk_container: {
        value: ebsSnapshotImportDiskContainerToHclTerraform(this._diskContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbsSnapshotImportDiskContainerList",
      },
      timeouts: {
        value: ebsSnapshotImportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EbsSnapshotImportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
