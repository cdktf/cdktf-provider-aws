// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface EbsSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#description EbsSnapshotCopy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}
  */
  readonly permanentRestore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}
  */
  readonly sourceRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}
  */
  readonly sourceSnapshotId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}
  */
  readonly storageTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}
  */
  readonly temporaryRestoreDays?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy aws_ebs_snapshot_copy}
*/
export class EbsSnapshotCopy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ebs_snapshot_copy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy aws_ebs_snapshot_copy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsSnapshotCopyConfig
  */
  public constructor(scope: Construct, id: string, config: EbsSnapshotCopyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot_copy',
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
    this._permanentRestore = config.permanentRestore;
    this._sourceRegion = config.sourceRegion;
    this._sourceSnapshotId = config.sourceSnapshotId;
    this._storageTier = config.storageTier;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._temporaryRestoreDays = config.temporaryRestoreDays;
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

  // source_region - computed: false, optional: false, required: true
  private _sourceRegion?: string; 
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }
  public set sourceRegion(value: string) {
    this._sourceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionInput() {
    return this._sourceRegion;
  }

  // source_snapshot_id - computed: false, optional: false, required: true
  private _sourceSnapshotId?: string; 
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }
  public set sourceSnapshotId(value: string) {
    this._sourceSnapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotIdInput() {
    return this._sourceSnapshotId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      permanent_restore: cdktf.booleanToTerraform(this._permanentRestore),
      source_region: cdktf.stringToTerraform(this._sourceRegion),
      source_snapshot_id: cdktf.stringToTerraform(this._sourceSnapshotId),
      storage_tier: cdktf.stringToTerraform(this._storageTier),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      temporary_restore_days: cdktf.numberToTerraform(this._temporaryRestoreDays),
    };
  }
}
