// https://www.terraform.io/docs/providers/aws/r/data_aws_ebs_snapshot_ids.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEbsSnapshotIdsConfig extends cdktf.TerraformMetaArguments {
  readonly owners?: string[];
  readonly restorableByUserIds?: string[];
  /** filter block */
  readonly filter?: DataAwsEbsSnapshotIdsFilter[];
}
export interface DataAwsEbsSnapshotIdsFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsEbsSnapshotIdsFilterToTerraform(struct?: DataAwsEbsSnapshotIdsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsEbsSnapshotIds extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEbsSnapshotIdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_snapshot_ids',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._owners = config.owners;
    this._restorableByUserIds = config.restorableByUserIds;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEbsSnapshotIdsFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsEbsSnapshotIdsFilter[] ) {
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
      owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
      restorable_by_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._restorableByUserIds),
      filter: cdktf.listMapper(dataAwsEbsSnapshotIdsFilterToTerraform)(this._filter),
    };
  }
}
