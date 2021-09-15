// https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly clientData?: EbsSnapshotImportClientData[];
  /**
  * disk_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import.html#disk_container EbsSnapshotImport#disk_container}
  */
  readonly diskContainer: EbsSnapshotImportDiskContainer[];
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

function ebsSnapshotImportClientDataToTerraform(struct?: EbsSnapshotImportClientData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    upload_end: cdktf.stringToTerraform(struct!.uploadEnd),
    upload_size: cdktf.numberToTerraform(struct!.uploadSize),
    upload_start: cdktf.stringToTerraform(struct!.uploadStart),
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

function ebsSnapshotImportDiskContainerUserBucketToTerraform(struct?: EbsSnapshotImportDiskContainerUserBucket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_key: cdktf.stringToTerraform(struct!.s3Key),
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
  readonly userBucket?: EbsSnapshotImportDiskContainerUserBucket[];
}

function ebsSnapshotImportDiskContainerToTerraform(struct?: EbsSnapshotImportDiskContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    format: cdktf.stringToTerraform(struct!.format),
    url: cdktf.stringToTerraform(struct!.url),
    user_bucket: cdktf.listMapper(ebsSnapshotImportDiskContainerUserBucketToTerraform)(struct!.userBucket),
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

function ebsSnapshotImportTimeoutsToTerraform(struct?: EbsSnapshotImportTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
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
    this._clientData = config.clientData;
    this._diskContainer = config.diskContainer;
    this._timeouts = config.timeouts;
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
    return this._description
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable;
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable ) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
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
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
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
  public set roleName(value: string ) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // client_data - computed: false, optional: true, required: false
  private _clientData?: EbsSnapshotImportClientData[];
  public get clientData() {
    return this.interpolationForAttribute('client_data') as any;
  }
  public set clientData(value: EbsSnapshotImportClientData[] ) {
    this._clientData = value;
  }
  public resetClientData() {
    this._clientData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDataInput() {
    return this._clientData
  }

  // disk_container - computed: false, optional: false, required: true
  private _diskContainer: EbsSnapshotImportDiskContainer[];
  public get diskContainer() {
    return this.interpolationForAttribute('disk_container') as any;
  }
  public set diskContainer(value: EbsSnapshotImportDiskContainer[]) {
    this._diskContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskContainerInput() {
    return this._diskContainer
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EbsSnapshotImportTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EbsSnapshotImportTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
      client_data: cdktf.listMapper(ebsSnapshotImportClientDataToTerraform)(this._clientData),
      disk_container: cdktf.listMapper(ebsSnapshotImportDiskContainerToTerraform)(this._diskContainer),
      timeouts: ebsSnapshotImportTimeoutsToTerraform(this._timeouts),
    };
  }
}
