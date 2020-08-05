// https://www.terraform.io/docs/providers/aws/r/data_aws_db_snapshot.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allocated_storage": {
        "type": "number",
        "computed": true
      },
      "availability_zone": {
        "type": "string",
        "computed": true
      },
      "db_instance_identifier": {
        "type": "string",
        "optional": true
      },
      "db_snapshot_arn": {
        "type": "string",
        "computed": true
      },
      "db_snapshot_identifier": {
        "type": "string",
        "optional": true
      },
      "encrypted": {
        "type": "bool",
        "computed": true
      },
      "engine": {
        "type": "string",
        "computed": true
      },
      "engine_version": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "include_public": {
        "type": "bool",
        "optional": true
      },
      "include_shared": {
        "type": "bool",
        "optional": true
      },
      "iops": {
        "type": "number",
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "license_model": {
        "type": "string",
        "computed": true
      },
      "most_recent": {
        "type": "bool",
        "optional": true
      },
      "option_group_name": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "snapshot_create_time": {
        "type": "string",
        "computed": true
      },
      "snapshot_type": {
        "type": "string",
        "optional": true
      },
      "source_db_snapshot_identifier": {
        "type": "string",
        "computed": true
      },
      "source_region": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "storage_type": {
        "type": "string",
        "computed": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsDbSnapshotConfig extends TerraformMetaArguments {
  readonly dbInstanceIdentifier?: string;
  readonly dbSnapshotIdentifier?: string;
  readonly includePublic?: boolean;
  readonly includeShared?: boolean;
  readonly mostRecent?: boolean;
  readonly snapshotType?: string;
}

// Resource

export class DataAwsDbSnapshot extends TerraformDataSource {

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

  // allocated_storage - computed: true, optional: false, required: true
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // db_instance_identifier - computed: false, optional: true, required: false
  private _dbInstanceIdentifier?: string;
  public get dbInstanceIdentifier() {
    return this._dbInstanceIdentifier;
  }
  public set dbInstanceIdentifier(value: string | undefined) {
    this._dbInstanceIdentifier = value;
  }

  // db_snapshot_arn - computed: true, optional: false, required: true
  public get dbSnapshotArn() {
    return this.getStringAttribute('db_snapshot_arn');
  }

  // db_snapshot_identifier - computed: false, optional: true, required: false
  private _dbSnapshotIdentifier?: string;
  public get dbSnapshotIdentifier() {
    return this._dbSnapshotIdentifier;
  }
  public set dbSnapshotIdentifier(value: string | undefined) {
    this._dbSnapshotIdentifier = value;
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // engine - computed: true, optional: false, required: true
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: true
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // include_public - computed: false, optional: true, required: false
  private _includePublic?: boolean;
  public get includePublic() {
    return this._includePublic;
  }
  public set includePublic(value: boolean | undefined) {
    this._includePublic = value;
  }

  // include_shared - computed: false, optional: true, required: false
  private _includeShared?: boolean;
  public get includeShared() {
    return this._includeShared;
  }
  public set includeShared(value: boolean | undefined) {
    this._includeShared = value;
  }

  // iops - computed: true, optional: false, required: true
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean;
  public get mostRecent() {
    return this._mostRecent;
  }
  public set mostRecent(value: boolean | undefined) {
    this._mostRecent = value;
  }

  // option_group_name - computed: true, optional: false, required: true
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // snapshot_create_time - computed: true, optional: false, required: true
  public get snapshotCreateTime() {
    return this.getStringAttribute('snapshot_create_time');
  }

  // snapshot_type - computed: false, optional: true, required: false
  private _snapshotType?: string;
  public get snapshotType() {
    return this._snapshotType;
  }
  public set snapshotType(value: string | undefined) {
    this._snapshotType = value;
  }

  // source_db_snapshot_identifier - computed: true, optional: false, required: true
  public get sourceDbSnapshotIdentifier() {
    return this.getStringAttribute('source_db_snapshot_identifier');
  }

  // source_region - computed: true, optional: false, required: true
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: true, optional: false, required: true
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_identifier: this._dbInstanceIdentifier,
      db_snapshot_identifier: this._dbSnapshotIdentifier,
      include_public: this._includePublic,
      include_shared: this._includeShared,
      most_recent: this._mostRecent,
      snapshot_type: this._snapshotType,
    };
  }
}
