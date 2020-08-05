// https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "apply_immediately": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "backup_retention_period": {
        "type": "number",
        "optional": true
      },
      "cluster_identifier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_identifier_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_members": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "cluster_resource_id": {
        "type": "string",
        "computed": true
      },
      "db_cluster_parameter_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "db_subnet_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "deletion_protection": {
        "type": "bool",
        "optional": true
      },
      "enabled_cloudwatch_logs_exports": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "endpoint": {
        "type": "string",
        "computed": true
      },
      "engine": {
        "type": "string",
        "optional": true
      },
      "engine_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "final_snapshot_identifier": {
        "type": "string",
        "optional": true
      },
      "hosted_zone_id": {
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
        "optional": true,
        "computed": true
      },
      "master_password": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "master_username": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true
      },
      "preferred_backup_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "preferred_maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "reader_endpoint": {
        "type": "string",
        "computed": true
      },
      "skip_final_snapshot": {
        "type": "bool",
        "optional": true
      },
      "snapshot_identifier": {
        "type": "string",
        "optional": true
      },
      "storage_encrypted": {
        "type": "bool",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "vpc_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
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
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
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

export interface DocdbClusterConfig extends TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly availabilityZones?: string[];
  readonly backupRetentionPeriod?: number;
  readonly clusterIdentifier?: string;
  readonly clusterIdentifierPrefix?: string;
  readonly clusterMembers?: string[];
  readonly dbClusterParameterGroupName?: string;
  readonly dbSubnetGroupName?: string;
  readonly deletionProtection?: boolean;
  readonly enabledCloudwatchLogsExports?: string[];
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly finalSnapshotIdentifier?: string;
  readonly kmsKeyId?: string;
  readonly masterPassword?: string;
  readonly masterUsername?: string;
  readonly port?: number;
  readonly preferredBackupWindow?: string;
  readonly preferredMaintenanceWindow?: string;
  readonly skipFinalSnapshot?: boolean;
  readonly snapshotIdentifier?: string;
  readonly storageEncrypted?: boolean;
  readonly tags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  /** timeouts block */
  readonly timeouts?: DocdbClusterTimeouts;
}
export interface DocdbClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DocdbCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DocdbClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applyImmediately = config.applyImmediately;
    this._availabilityZones = config.availabilityZones;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
    this._clusterMembers = config.clusterMembers;
    this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._deletionProtection = config.deletionProtection;
    this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._kmsKeyId = config.kmsKeyId;
    this._masterPassword = config.masterPassword;
    this._masterUsername = config.masterUsername;
    this._port = config.port;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._storageEncrypted = config.storageEncrypted;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean;
  public get applyImmediately() {
    return this._applyImmediately ?? this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | undefined) {
    this._applyImmediately = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this._availabilityZones ?? this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }

  // backup_retention_period - computed: false, optional: true, required: false
  private _backupRetentionPeriod?: number;
  public get backupRetentionPeriod() {
    return this._backupRetentionPeriod;
  }
  public set backupRetentionPeriod(value: number | undefined) {
    this._backupRetentionPeriod = value;
  }

  // cluster_identifier - computed: true, optional: true, required: false
  private _clusterIdentifier?: string;
  public get clusterIdentifier() {
    return this._clusterIdentifier ?? this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string | undefined) {
    this._clusterIdentifier = value;
  }

  // cluster_identifier_prefix - computed: true, optional: true, required: false
  private _clusterIdentifierPrefix?: string;
  public get clusterIdentifierPrefix() {
    return this._clusterIdentifierPrefix ?? this.getStringAttribute('cluster_identifier_prefix');
  }
  public set clusterIdentifierPrefix(value: string | undefined) {
    this._clusterIdentifierPrefix = value;
  }

  // cluster_members - computed: true, optional: true, required: false
  private _clusterMembers?: string[];
  public get clusterMembers() {
    return this._clusterMembers ?? this.getListAttribute('cluster_members');
  }
  public set clusterMembers(value: string[] | undefined) {
    this._clusterMembers = value;
  }

  // cluster_resource_id - computed: true, optional: false, required: true
  public get clusterResourceId() {
    return this.getStringAttribute('cluster_resource_id');
  }

  // db_cluster_parameter_group_name - computed: true, optional: true, required: false
  private _dbClusterParameterGroupName?: string;
  public get dbClusterParameterGroupName() {
    return this._dbClusterParameterGroupName ?? this.getStringAttribute('db_cluster_parameter_group_name');
  }
  public set dbClusterParameterGroupName(value: string | undefined) {
    this._dbClusterParameterGroupName = value;
  }

  // db_subnet_group_name - computed: true, optional: true, required: false
  private _dbSubnetGroupName?: string;
  public get dbSubnetGroupName() {
    return this._dbSubnetGroupName ?? this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string | undefined) {
    this._dbSubnetGroupName = value;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this._deletionProtection;
  }
  public set deletionProtection(value: boolean | undefined) {
    this._deletionProtection = value;
  }

  // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
  private _enabledCloudwatchLogsExports?: string[];
  public get enabledCloudwatchLogsExports() {
    return this._enabledCloudwatchLogsExports;
  }
  public set enabledCloudwatchLogsExports(value: string[] | undefined) {
    this._enabledCloudwatchLogsExports = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this._engine;
  }
  public set engine(value: string | undefined) {
    this._engine = value;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this._engineVersion ?? this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string | undefined) {
    this._engineVersion = value;
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string;
  public get finalSnapshotIdentifier() {
    return this._finalSnapshotIdentifier;
  }
  public set finalSnapshotIdentifier(value: string | undefined) {
    this._finalSnapshotIdentifier = value;
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string;
  public get masterPassword() {
    return this._masterPassword;
  }
  public set masterPassword(value: string | undefined) {
    this._masterPassword = value;
  }

  // master_username - computed: true, optional: true, required: false
  private _masterUsername?: string;
  public get masterUsername() {
    return this._masterUsername ?? this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string | undefined) {
    this._masterUsername = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string;
  public get preferredBackupWindow() {
    return this._preferredBackupWindow ?? this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string | undefined) {
    this._preferredBackupWindow = value;
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string;
  public get preferredMaintenanceWindow() {
    return this._preferredMaintenanceWindow ?? this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string | undefined) {
    this._preferredMaintenanceWindow = value;
  }

  // reader_endpoint - computed: true, optional: false, required: true
  public get readerEndpoint() {
    return this.getStringAttribute('reader_endpoint');
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean;
  public get skipFinalSnapshot() {
    return this._skipFinalSnapshot;
  }
  public set skipFinalSnapshot(value: boolean | undefined) {
    this._skipFinalSnapshot = value;
  }

  // snapshot_identifier - computed: false, optional: true, required: false
  private _snapshotIdentifier?: string;
  public get snapshotIdentifier() {
    return this._snapshotIdentifier;
  }
  public set snapshotIdentifier(value: string | undefined) {
    this._snapshotIdentifier = value;
  }

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean;
  public get storageEncrypted() {
    return this._storageEncrypted;
  }
  public set storageEncrypted(value: boolean | undefined) {
    this._storageEncrypted = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this._vpcSecurityGroupIds ?? this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[] | undefined) {
    this._vpcSecurityGroupIds = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DocdbClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DocdbClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: this._applyImmediately,
      availability_zones: this._availabilityZones,
      backup_retention_period: this._backupRetentionPeriod,
      cluster_identifier: this._clusterIdentifier,
      cluster_identifier_prefix: this._clusterIdentifierPrefix,
      cluster_members: this._clusterMembers,
      db_cluster_parameter_group_name: this._dbClusterParameterGroupName,
      db_subnet_group_name: this._dbSubnetGroupName,
      deletion_protection: this._deletionProtection,
      enabled_cloudwatch_logs_exports: this._enabledCloudwatchLogsExports,
      engine: this._engine,
      engine_version: this._engineVersion,
      final_snapshot_identifier: this._finalSnapshotIdentifier,
      kms_key_id: this._kmsKeyId,
      master_password: this._masterPassword,
      master_username: this._masterUsername,
      port: this._port,
      preferred_backup_window: this._preferredBackupWindow,
      preferred_maintenance_window: this._preferredMaintenanceWindow,
      skip_final_snapshot: this._skipFinalSnapshot,
      snapshot_identifier: this._snapshotIdentifier,
      storage_encrypted: this._storageEncrypted,
      tags: this._tags,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      timeouts: this._timeouts,
    };
  }
}
