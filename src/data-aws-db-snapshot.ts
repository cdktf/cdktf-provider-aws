// https://www.terraform.io/docs/providers/aws/r/data_aws_db_snapshot.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDbSnapshotConfig extends cdktf.TerraformMetaArguments {
  readonly dbInstanceIdentifier?: string;
  readonly dbSnapshotIdentifier?: string;
  readonly includePublic?: boolean;
  readonly includeShared?: boolean;
  readonly mostRecent?: boolean;
  readonly snapshotType?: string;
}

// Resource

export class DataAwsDbSnapshot extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDbSnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_db_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
    this._includePublic = config.includePublic;
    this._includeShared = config.includeShared;
    this._mostRecent = config.mostRecent;
    this._snapshotType = config.snapshotType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: false, required: false
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // db_instance_identifier - computed: false, optional: true, required: false
  private _dbInstanceIdentifier?: string;
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string ) {
    this._dbInstanceIdentifier = value;
  }
  public resetDbInstanceIdentifier() {
    this._dbInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier
  }

  // db_snapshot_arn - computed: true, optional: false, required: false
  public get dbSnapshotArn() {
    return this.getStringAttribute('db_snapshot_arn');
  }

  // db_snapshot_identifier - computed: false, optional: true, required: false
  private _dbSnapshotIdentifier?: string;
  public get dbSnapshotIdentifier() {
    return this.getStringAttribute('db_snapshot_identifier');
  }
  public set dbSnapshotIdentifier(value: string ) {
    this._dbSnapshotIdentifier = value;
  }
  public resetDbSnapshotIdentifier() {
    this._dbSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSnapshotIdentifierInput() {
    return this._dbSnapshotIdentifier
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_public - computed: false, optional: true, required: false
  private _includePublic?: boolean;
  public get includePublic() {
    return this.getBooleanAttribute('include_public');
  }
  public set includePublic(value: boolean ) {
    this._includePublic = value;
  }
  public resetIncludePublic() {
    this._includePublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePublicInput() {
    return this._includePublic
  }

  // include_shared - computed: false, optional: true, required: false
  private _includeShared?: boolean;
  public get includeShared() {
    return this.getBooleanAttribute('include_shared');
  }
  public set includeShared(value: boolean ) {
    this._includeShared = value;
  }
  public resetIncludeShared() {
    this._includeShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSharedInput() {
    return this._includeShared
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
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

  // option_group_name - computed: true, optional: false, required: false
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // snapshot_create_time - computed: true, optional: false, required: false
  public get snapshotCreateTime() {
    return this.getStringAttribute('snapshot_create_time');
  }

  // snapshot_type - computed: false, optional: true, required: false
  private _snapshotType?: string;
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string ) {
    this._snapshotType = value;
  }
  public resetSnapshotType() {
    this._snapshotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType
  }

  // source_db_snapshot_identifier - computed: true, optional: false, required: false
  public get sourceDbSnapshotIdentifier() {
    return this.getStringAttribute('source_db_snapshot_identifier');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
      db_snapshot_identifier: cdktf.stringToTerraform(this._dbSnapshotIdentifier),
      include_public: cdktf.booleanToTerraform(this._includePublic),
      include_shared: cdktf.booleanToTerraform(this._includeShared),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      snapshot_type: cdktf.stringToTerraform(this._snapshotType),
    };
  }
}
