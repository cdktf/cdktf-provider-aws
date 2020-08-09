// https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_zones": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "db_cluster_identifier": {
        "type": "string",
        "required": true
      },
      "db_cluster_snapshot_arn": {
        "type": "string",
        "computed": true
      },
      "db_cluster_snapshot_identifier": {
        "type": "string",
        "required": true
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
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "snapshot_type": {
        "type": "string",
        "computed": true
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
      "vpc_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DocdbClusterSnapshotConfig extends TerraformMetaArguments {
  readonly dbClusterIdentifier: string;
  readonly dbClusterSnapshotIdentifier: string;
  /** timeouts block */
  readonly timeouts?: DocdbClusterSnapshotTimeouts;
}
export interface DocdbClusterSnapshotTimeouts {
  readonly create?: string;
}

// Resource

export class DocdbClusterSnapshot extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DocdbClusterSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_cluster_snapshot',
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier: string;
  public get dbClusterIdentifier() {
    return this._dbClusterIdentifier;
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }

  // db_cluster_snapshot_arn - computed: true, optional: false, required: true
  public get dbClusterSnapshotArn() {
    return this.getStringAttribute('db_cluster_snapshot_arn');
  }

  // db_cluster_snapshot_identifier - computed: false, optional: false, required: true
  private _dbClusterSnapshotIdentifier: string;
  public get dbClusterSnapshotIdentifier() {
    return this._dbClusterSnapshotIdentifier;
  }
  public set dbClusterSnapshotIdentifier(value: string) {
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

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // snapshot_type - computed: true, optional: false, required: true
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
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

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DocdbClusterSnapshotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DocdbClusterSnapshotTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_cluster_identifier: this._dbClusterIdentifier,
      db_cluster_snapshot_identifier: this._dbClusterSnapshotIdentifier,
      timeouts: this._timeouts,
    };
  }
}
