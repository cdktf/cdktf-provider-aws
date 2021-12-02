// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface EbsSnapshotImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#description EbsSnapshotImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#encrypted EbsSnapshotImport#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#kms_key_id EbsSnapshotImport#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#role_name EbsSnapshotImport#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#tags EbsSnapshotImport#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#tags_all EbsSnapshotImport#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * client_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#client_data EbsSnapshotImport#client_data}
  */
  readonly clientData?: EbsSnapshotImportClientData;
  /**
  * disk_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#disk_container EbsSnapshotImport#disk_container}
  */
  readonly diskContainer: EbsSnapshotImportDiskContainer;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#timeouts EbsSnapshotImport#timeouts}
  */
  readonly timeouts?: EbsSnapshotImportTimeouts;
}
export interface EbsSnapshotImportClientData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#comment EbsSnapshotImport#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_end EbsSnapshotImport#upload_end}
  */
  readonly uploadEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_size EbsSnapshotImport#upload_size}
  */
  readonly uploadSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#upload_start EbsSnapshotImport#upload_start}
  */
  readonly uploadStart?: string;
}

export function ebsSnapshotImportClientDataToTerraform(struct?: EbsSnapshotImportClientDataOutputReference | EbsSnapshotImportClientData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class EbsSnapshotImportClientDataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EbsSnapshotImportClientData | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._comment) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._uploadEnd) {
      hasAnyValues = true;
      internalValueResult.uploadEnd = this._uploadEnd;
    }
    if (this._uploadSize) {
      hasAnyValues = true;
      internalValueResult.uploadSize = this._uploadSize;
    }
    if (this._uploadStart) {
      hasAnyValues = true;
      internalValueResult.uploadStart = this._uploadStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsSnapshotImportClientData | undefined) {
    if (value === undefined) {
      this._comment = undefined;
      this._uploadEnd = undefined;
      this._uploadSize = undefined;
      this._uploadStart = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#s3_bucket EbsSnapshotImport#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#s3_key EbsSnapshotImport#s3_key}
  */
  readonly s3Key: string;
}

export function ebsSnapshotImportDiskContainerUserBucketToTerraform(struct?: EbsSnapshotImportDiskContainerUserBucketOutputReference | EbsSnapshotImportDiskContainerUserBucket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
  }
}

export class EbsSnapshotImportDiskContainerUserBucketOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EbsSnapshotImportDiskContainerUserBucket | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._s3Bucket) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Key) {
      hasAnyValues = true;
      internalValueResult.s3Key = this._s3Key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsSnapshotImportDiskContainerUserBucket | undefined) {
    if (value === undefined) {
      this._s3Bucket = undefined;
      this._s3Key = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#description EbsSnapshotImport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#format EbsSnapshotImport#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#url EbsSnapshotImport#url}
  */
  readonly url?: string;
  /**
  * user_bucket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#user_bucket EbsSnapshotImport#user_bucket}
  */
  readonly userBucket?: EbsSnapshotImportDiskContainerUserBucket;
}

export function ebsSnapshotImportDiskContainerToTerraform(struct?: EbsSnapshotImportDiskContainerOutputReference | EbsSnapshotImportDiskContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class EbsSnapshotImportDiskContainerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EbsSnapshotImportDiskContainer | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._description) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._format) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._url) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userBucket) {
      hasAnyValues = true;
      internalValueResult.userBucket = this._userBucket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsSnapshotImportDiskContainer | undefined) {
    if (value === undefined) {
      this._description = undefined;
      this._format = undefined;
      this._url = undefined;
      this._userBucket.internalValue = undefined;
    }
    else {
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
  private _userBucket = new EbsSnapshotImportDiskContainerUserBucketOutputReference(this as any, "user_bucket", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#create EbsSnapshotImport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#delete EbsSnapshotImport#delete}
  */
  readonly delete?: string;
}

export function ebsSnapshotImportTimeoutsToTerraform(struct?: EbsSnapshotImportTimeoutsOutputReference | EbsSnapshotImportTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class EbsSnapshotImportTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EbsSnapshotImportTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsSnapshotImportTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import}
*/
export class EbsSnapshotImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ebs_snapshot_import";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html aws_ebs_snapshot_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsSnapshotImportConfig
  */
  public constructor(scope: Construct, id: string, config: EbsSnapshotImportConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot_import',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._encrypted = config.encrypted;
    this._kmsKeyId = config.kmsKeyId;
    this._roleName = config.roleName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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
    return this.getBooleanAttribute('encrypted') as any;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // owner_alias - computed: true, optional: false, required: false
  public get ownerAlias() {
    return this.getStringAttribute('owner_alias');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // client_data - computed: false, optional: true, required: false
  private _clientData = new EbsSnapshotImportClientDataOutputReference(this as any, "client_data", true);
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
  private _diskContainer = new EbsSnapshotImportDiskContainerOutputReference(this as any, "disk_container", true);
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
  private _timeouts = new EbsSnapshotImportTimeoutsOutputReference(this as any, "timeouts", true);
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
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      role_name: cdktf.stringToTerraform(this._roleName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      client_data: ebsSnapshotImportClientDataToTerraform(this._clientData.internalValue),
      disk_container: ebsSnapshotImportDiskContainerToTerraform(this._diskContainer.internalValue),
      timeouts: ebsSnapshotImportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
