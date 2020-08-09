// https://www.terraform.io/docs/providers/aws/r/rds_cluster.html
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
      "backtrack_window": {
        "type": "number",
        "optional": true
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
      "copy_tags_to_snapshot": {
        "type": "bool",
        "optional": true
      },
      "database_name": {
        "type": "string",
        "optional": true,
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
      "enable_http_endpoint": {
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
      "engine_mode": {
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
      "global_cluster_identifier": {
        "type": "string",
        "optional": true
      },
      "hosted_zone_id": {
        "type": "string",
        "computed": true
      },
      "iam_database_authentication_enabled": {
        "type": "bool",
        "optional": true
      },
      "iam_roles": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
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
        "optional": true,
        "computed": true
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
      "replication_source_identifier": {
        "type": "string",
        "optional": true
      },
      "skip_final_snapshot": {
        "type": "bool",
        "optional": true
      },
      "snapshot_identifier": {
        "type": "string",
        "optional": true
      },
      "source_region": {
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
      "s3_import": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_name": {
              "type": "string",
              "required": true
            },
            "bucket_prefix": {
              "type": "string",
              "optional": true
            },
            "ingestion_role": {
              "type": "string",
              "required": true
            },
            "source_engine": {
              "type": "string",
              "required": true
            },
            "source_engine_version": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "scaling_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "auto_pause": {
              "type": "bool",
              "optional": true
            },
            "max_capacity": {
              "type": "number",
              "optional": true
            },
            "min_capacity": {
              "type": "number",
              "optional": true
            },
            "seconds_until_auto_pause": {
              "type": "number",
              "optional": true
            },
            "timeout_action": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
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

export interface RdsClusterConfig extends TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly availabilityZones?: string[];
  readonly backtrackWindow?: number;
  readonly backupRetentionPeriod?: number;
  readonly clusterIdentifier?: string;
  readonly clusterIdentifierPrefix?: string;
  readonly clusterMembers?: string[];
  readonly copyTagsToSnapshot?: boolean;
  readonly databaseName?: string;
  readonly dbClusterParameterGroupName?: string;
  readonly dbSubnetGroupName?: string;
  readonly deletionProtection?: boolean;
  readonly enableHttpEndpoint?: boolean;
  readonly enabledCloudwatchLogsExports?: string[];
  readonly engine?: string;
  readonly engineMode?: string;
  readonly engineVersion?: string;
  readonly finalSnapshotIdentifier?: string;
  readonly globalClusterIdentifier?: string;
  readonly iamDatabaseAuthenticationEnabled?: boolean;
  readonly iamRoles?: string[];
  readonly kmsKeyId?: string;
  readonly masterPassword?: string;
  readonly masterUsername?: string;
  readonly port?: number;
  readonly preferredBackupWindow?: string;
  readonly preferredMaintenanceWindow?: string;
  readonly replicationSourceIdentifier?: string;
  readonly skipFinalSnapshot?: boolean;
  readonly snapshotIdentifier?: string;
  readonly sourceRegion?: string;
  readonly storageEncrypted?: boolean;
  readonly tags?: { [key: string]: string };
  readonly vpcSecurityGroupIds?: string[];
  /** s3_import block */
  readonly s3Import?: RdsClusterS3Import[];
  /** scaling_configuration block */
  readonly scalingConfiguration?: RdsClusterScalingConfiguration[];
  /** timeouts block */
  readonly timeouts?: RdsClusterTimeouts;
}
export interface RdsClusterS3Import {
  readonly bucketName: string;
  readonly bucketPrefix?: string;
  readonly ingestionRole: string;
  readonly sourceEngine: string;
  readonly sourceEngineVersion: string;
}
export interface RdsClusterScalingConfiguration {
  readonly autoPause?: boolean;
  readonly maxCapacity?: number;
  readonly minCapacity?: number;
  readonly secondsUntilAutoPause?: number;
  readonly timeoutAction?: string;
}
export interface RdsClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class RdsCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RdsClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster',
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
    this._backtrackWindow = config.backtrackWindow;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._clusterIdentifier = config.clusterIdentifier;
    this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
    this._clusterMembers = config.clusterMembers;
    this._copyTagsToSnapshot = config.copyTagsToSnapshot;
    this._databaseName = config.databaseName;
    this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._deletionProtection = config.deletionProtection;
    this._enableHttpEndpoint = config.enableHttpEndpoint;
    this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
    this._engine = config.engine;
    this._engineMode = config.engineMode;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
    this._iamRoles = config.iamRoles;
    this._kmsKeyId = config.kmsKeyId;
    this._masterPassword = config.masterPassword;
    this._masterUsername = config.masterUsername;
    this._port = config.port;
    this._preferredBackupWindow = config.preferredBackupWindow;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._replicationSourceIdentifier = config.replicationSourceIdentifier;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._sourceRegion = config.sourceRegion;
    this._storageEncrypted = config.storageEncrypted;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._s3Import = config.s3Import;
    this._scalingConfiguration = config.scalingConfiguration;
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

  // backtrack_window - computed: false, optional: true, required: false
  private _backtrackWindow?: number;
  public get backtrackWindow() {
    return this._backtrackWindow;
  }
  public set backtrackWindow(value: number | undefined) {
    this._backtrackWindow = value;
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

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean;
  public get copyTagsToSnapshot() {
    return this._copyTagsToSnapshot;
  }
  public set copyTagsToSnapshot(value: boolean | undefined) {
    this._copyTagsToSnapshot = value;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this._databaseName ?? this.getStringAttribute('database_name');
  }
  public set databaseName(value: string | undefined) {
    this._databaseName = value;
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

  // enable_http_endpoint - computed: false, optional: true, required: false
  private _enableHttpEndpoint?: boolean;
  public get enableHttpEndpoint() {
    return this._enableHttpEndpoint;
  }
  public set enableHttpEndpoint(value: boolean | undefined) {
    this._enableHttpEndpoint = value;
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

  // engine_mode - computed: false, optional: true, required: false
  private _engineMode?: string;
  public get engineMode() {
    return this._engineMode;
  }
  public set engineMode(value: string | undefined) {
    this._engineMode = value;
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

  // global_cluster_identifier - computed: false, optional: true, required: false
  private _globalClusterIdentifier?: string;
  public get globalClusterIdentifier() {
    return this._globalClusterIdentifier;
  }
  public set globalClusterIdentifier(value: string | undefined) {
    this._globalClusterIdentifier = value;
  }

  // hosted_zone_id - computed: true, optional: false, required: true
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // iam_database_authentication_enabled - computed: false, optional: true, required: false
  private _iamDatabaseAuthenticationEnabled?: boolean;
  public get iamDatabaseAuthenticationEnabled() {
    return this._iamDatabaseAuthenticationEnabled;
  }
  public set iamDatabaseAuthenticationEnabled(value: boolean | undefined) {
    this._iamDatabaseAuthenticationEnabled = value;
  }

  // iam_roles - computed: false, optional: true, required: false
  private _iamRoles?: string[];
  public get iamRoles() {
    return this._iamRoles;
  }
  public set iamRoles(value: string[] | undefined) {
    this._iamRoles = value;
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

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port ?? this.getNumberAttribute('port');
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

  // replication_source_identifier - computed: false, optional: true, required: false
  private _replicationSourceIdentifier?: string;
  public get replicationSourceIdentifier() {
    return this._replicationSourceIdentifier;
  }
  public set replicationSourceIdentifier(value: string | undefined) {
    this._replicationSourceIdentifier = value;
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

  // source_region - computed: false, optional: true, required: false
  private _sourceRegion?: string;
  public get sourceRegion() {
    return this._sourceRegion;
  }
  public set sourceRegion(value: string | undefined) {
    this._sourceRegion = value;
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

  // s3_import - computed: false, optional: true, required: false
  private _s3Import?: RdsClusterS3Import[];
  public get s3Import() {
    return this._s3Import;
  }
  public set s3Import(value: RdsClusterS3Import[] | undefined) {
    this._s3Import = value;
  }

  // scaling_configuration - computed: false, optional: true, required: false
  private _scalingConfiguration?: RdsClusterScalingConfiguration[];
  public get scalingConfiguration() {
    return this._scalingConfiguration;
  }
  public set scalingConfiguration(value: RdsClusterScalingConfiguration[] | undefined) {
    this._scalingConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RdsClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RdsClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: this._applyImmediately,
      availability_zones: this._availabilityZones,
      backtrack_window: this._backtrackWindow,
      backup_retention_period: this._backupRetentionPeriod,
      cluster_identifier: this._clusterIdentifier,
      cluster_identifier_prefix: this._clusterIdentifierPrefix,
      cluster_members: this._clusterMembers,
      copy_tags_to_snapshot: this._copyTagsToSnapshot,
      database_name: this._databaseName,
      db_cluster_parameter_group_name: this._dbClusterParameterGroupName,
      db_subnet_group_name: this._dbSubnetGroupName,
      deletion_protection: this._deletionProtection,
      enable_http_endpoint: this._enableHttpEndpoint,
      enabled_cloudwatch_logs_exports: this._enabledCloudwatchLogsExports,
      engine: this._engine,
      engine_mode: this._engineMode,
      engine_version: this._engineVersion,
      final_snapshot_identifier: this._finalSnapshotIdentifier,
      global_cluster_identifier: this._globalClusterIdentifier,
      iam_database_authentication_enabled: this._iamDatabaseAuthenticationEnabled,
      iam_roles: this._iamRoles,
      kms_key_id: this._kmsKeyId,
      master_password: this._masterPassword,
      master_username: this._masterUsername,
      port: this._port,
      preferred_backup_window: this._preferredBackupWindow,
      preferred_maintenance_window: this._preferredMaintenanceWindow,
      replication_source_identifier: this._replicationSourceIdentifier,
      skip_final_snapshot: this._skipFinalSnapshot,
      snapshot_identifier: this._snapshotIdentifier,
      source_region: this._sourceRegion,
      storage_encrypted: this._storageEncrypted,
      tags: this._tags,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      s3_import: this._s3Import,
      scaling_configuration: this._scalingConfiguration,
      timeouts: this._timeouts,
    };
  }
}
