// https://www.terraform.io/docs/providers/aws/r/data_aws_ebs_snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEbsSnapshotConfig extends cdktf.TerraformMetaArguments {
  readonly mostRecent?: boolean;
  readonly owners?: string[];
  readonly restorableByUserIds?: string[];
  readonly snapshotIds?: string[];
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEbsSnapshotFilter[];
}
export interface DataAwsEbsSnapshotFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEbsSnapshotFilterToTerraform(struct?: DataAwsEbsSnapshotFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEbsSnapshot extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEbsSnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mostRecent = config.mostRecent;
    this._owners = config.owners;
    this._restorableByUserIds = config.restorableByUserIds;
    this._snapshotIds = config.snapshotIds;
    this._tags = config.tags;
    this._filter = config.filter;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean ) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent
  }

  // owner_alias - computed: true, optional: false, required: false
  public get ownerAlias() {
    return this.getStringAttribute('owner_alias');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[];
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[] ) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners
  }

  // restorable_by_user_ids - computed: false, optional: true, required: false
  private _restorableByUserIds?: string[];
  public get restorableByUserIds() {
    return this.getListAttribute('restorable_by_user_ids');
  }
  public set restorableByUserIds(value: string[] ) {
    this._restorableByUserIds = value;
  }
  public resetRestorableByUserIds() {
    this._restorableByUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorableByUserIdsInput() {
    return this._restorableByUserIds
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // snapshot_ids - computed: false, optional: true, required: false
  private _snapshotIds?: string[];
  public get snapshotIds() {
    return this.getListAttribute('snapshot_ids');
  }
  public set snapshotIds(value: string[] ) {
    this._snapshotIds = value;
  }
  public resetSnapshotIds() {
    this._snapshotIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdsInput() {
    return this._snapshotIds
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEbsSnapshotFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEbsSnapshotFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
      restorable_by_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._restorableByUserIds),
      snapshot_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEbsSnapshotFilterToTerraform)(this._filter),
    };
  }
}
