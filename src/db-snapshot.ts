// https://www.terraform.io/docs/providers/aws/r/db_snapshot.html
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
        "required": true
      },
      "db_snapshot_arn": {
        "type": "string",
        "computed": true
      },
      "db_snapshot_identifier": {
        "type": "string",
        "required": true
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
      "option_group_name": {
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
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
            "read": {
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

export interface DbSnapshotConfig extends TerraformMetaArguments {
  readonly dbInstanceIdentifier: string;
  readonly dbSnapshotIdentifier: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: DbSnapshotTimeouts;
}
export interface DbSnapshotTimeouts {
  readonly read?: string;
}

// Resource

export class DbSnapshot extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbSnapshotConfig) {
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
    this._tags = config.tags;
    this._timeouts = config.timeouts;
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

  // db_instance_identifier - computed: false, optional: false, required: true
  private _dbInstanceIdentifier: string;
  public get dbInstanceIdentifier() {
    return this._dbInstanceIdentifier;
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }

  // db_snapshot_arn - computed: true, optional: false, required: true
  public get dbSnapshotArn() {
    return this.getStringAttribute('db_snapshot_arn');
  }

  // db_snapshot_identifier - computed: false, optional: false, required: true
  private _dbSnapshotIdentifier: string;
  public get dbSnapshotIdentifier() {
    return this._dbSnapshotIdentifier;
  }
  public set dbSnapshotIdentifier(value: string) {
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

  // option_group_name - computed: true, optional: false, required: true
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // snapshot_type - computed: true, optional: false, required: true
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbSnapshotTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DbSnapshotTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_identifier: this._dbInstanceIdentifier,
      db_snapshot_identifier: this._dbSnapshotIdentifier,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
