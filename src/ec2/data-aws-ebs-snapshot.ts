// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface DataAwsEbsSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#most_recent DataAwsEbsSnapshot#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#owners DataAwsEbsSnapshot#owners}
  */
  readonly owners?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#restorable_by_user_ids DataAwsEbsSnapshot#restorable_by_user_ids}
  */
  readonly restorableByUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#snapshot_ids DataAwsEbsSnapshot#snapshot_ids}
  */
  readonly snapshotIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#tags DataAwsEbsSnapshot#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#filter DataAwsEbsSnapshot#filter}
  */
  readonly filter?: DataAwsEbsSnapshotFilter[];
}
export interface DataAwsEbsSnapshotFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#name DataAwsEbsSnapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#values DataAwsEbsSnapshot#values}
  */
  readonly values: string[];
}

export function dataAwsEbsSnapshotFilterToTerraform(struct?: DataAwsEbsSnapshotFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot}
*/
export class DataAwsEbsSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ebs_snapshot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEbsSnapshotConfig = {}
  */
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
    return this.getBooleanAttribute('encrypted') as any;
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
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent') as any;
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
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
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // restorable_by_user_ids - computed: false, optional: true, required: false
  private _restorableByUserIds?: string[]; 
  public get restorableByUserIds() {
    return this.getListAttribute('restorable_by_user_ids');
  }
  public set restorableByUserIds(value: string[]) {
    this._restorableByUserIds = value;
  }
  public resetRestorableByUserIds() {
    this._restorableByUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorableByUserIdsInput() {
    return this._restorableByUserIds;
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
  public set snapshotIds(value: string[]) {
    this._snapshotIds = value;
  }
  public resetSnapshotIds() {
    this._snapshotIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdsInput() {
    return this._snapshotIds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEbsSnapshotFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
