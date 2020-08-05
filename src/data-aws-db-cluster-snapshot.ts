// https://www.terraform.io/docs/providers/aws/r/data_aws_db_cluster_snapshot.html
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
      "availability_zones": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "db_cluster_identifier": {
        "type": "string",
        "optional": true
      },
      "db_cluster_snapshot_arn": {
        "type": "string",
        "computed": true
      },
      "db_cluster_snapshot_identifier": {
        "type": "string",
        "optional": true
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
      "source_db_cluster_snapshot_arn": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "storage_encrypted": {
        "type": "bool",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
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

export interface DataAwsDbClusterSnapshotConfig extends TerraformMetaArguments {
  readonly dbClusterIdentifier?: string;
  readonly dbClusterSnapshotIdentifier?: string;
  readonly includePublic?: boolean;
  readonly includeShared?: boolean;
  readonly mostRecent?: boolean;
  readonly snapshotType?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsDbClusterSnapshot extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDbClusterSnapshotConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_db_cluster_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbClusterIdentifier = config.dbClusterIdentifier;
    this._dbClusterSnapshotIdentifier = config.dbClusterSnapshotIdentifier;
    this._includePublic = config.includePublic;
    this._includeShared = config.includeShared;
    this._mostRecent = config.mostRecent;
    this._snapshotType = config.snapshotType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: false, required: true
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // db_cluster_identifier - computed: false, optional: true, required: false
  private _dbClusterIdentifier?: string;
  public get dbClusterIdentifier() {
    return this._dbClusterIdentifier;
  }
  public set dbClusterIdentifier(value: string | undefined) {
    this._dbClusterIdentifier = value;
  }

  // db_cluster_snapshot_arn - computed: true, optional: false, required: true
  public get dbClusterSnapshotArn() {
    return this.getStringAttribute('db_cluster_snapshot_arn');
  }

  // db_cluster_snapshot_identifier - computed: false, optional: true, required: false
  private _dbClusterSnapshotIdentifier?: string;
  public get dbClusterSnapshotIdentifier() {
    return this._dbClusterSnapshotIdentifier;
  }
  public set dbClusterSnapshotIdentifier(value: string | undefined) {
    this._dbClusterSnapshotIdentifier = value;
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

  // source_db_cluster_snapshot_arn - computed: true, optional: false, required: true
  public get sourceDbClusterSnapshotArn() {
    return this.getStringAttribute('source_db_cluster_snapshot_arn');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_encrypted - computed: true, optional: false, required: true
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
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
      db_cluster_identifier: this._dbClusterIdentifier,
      db_cluster_snapshot_identifier: this._dbClusterSnapshotIdentifier,
      include_public: this._includePublic,
      include_shared: this._includeShared,
      most_recent: this._mostRecent,
      snapshot_type: this._snapshotType,
      tags: this._tags,
    };
  }
}
