// https://www.terraform.io/docs/providers/aws/r/db_instance.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "address": {
        "type": "string",
        "computed": true
      },
      "allocated_storage": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "allow_major_version_upgrade": {
        "type": "bool",
        "optional": true
      },
      "apply_immediately": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "auto_minor_version_upgrade": {
        "type": "bool",
        "optional": true
      },
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "backup_retention_period": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "backup_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ca_cert_identifier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "character_set_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "copy_tags_to_snapshot": {
        "type": "bool",
        "optional": true
      },
      "db_subnet_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "delete_automated_backups": {
        "type": "bool",
        "optional": true
      },
      "deletion_protection": {
        "type": "bool",
        "optional": true
      },
      "domain": {
        "type": "string",
        "optional": true
      },
      "domain_iam_role_name": {
        "type": "string",
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
        "optional": true,
        "computed": true
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
      "iam_database_authentication_enabled": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identifier": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identifier_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_class": {
        "type": "string",
        "required": true
      },
      "iops": {
        "type": "number",
        "optional": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "license_model": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_allocated_storage": {
        "type": "number",
        "optional": true
      },
      "monitoring_interval": {
        "type": "number",
        "optional": true
      },
      "monitoring_role_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "multi_az": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "option_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "parameter_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "password": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "performance_insights_enabled": {
        "type": "bool",
        "optional": true
      },
      "performance_insights_kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "performance_insights_retention_period": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "publicly_accessible": {
        "type": "bool",
        "optional": true
      },
      "replicas": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "replicate_source_db": {
        "type": "string",
        "optional": true
      },
      "resource_id": {
        "type": "string",
        "computed": true
      },
      "security_group_names": {
        "type": [
          "set",
          "string"
        ],
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
      "status": {
        "type": "string",
        "computed": true
      },
      "storage_encrypted": {
        "type": "bool",
        "optional": true
      },
      "storage_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "timezone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "username": {
        "type": "string",
        "optional": true,
        "computed": true
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

export interface DbInstanceConfig extends TerraformMetaArguments {
  readonly allocatedStorage?: number;
  readonly allowMajorVersionUpgrade?: boolean;
  readonly applyImmediately?: boolean;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly availabilityZone?: string;
  readonly backupRetentionPeriod?: number;
  readonly backupWindow?: string;
  readonly caCertIdentifier?: string;
  readonly characterSetName?: string;
  readonly copyTagsToSnapshot?: boolean;
  readonly dbSubnetGroupName?: string;
  readonly deleteAutomatedBackups?: boolean;
  readonly deletionProtection?: boolean;
  readonly domain?: string;
  readonly domainIamRoleName?: string;
  readonly enabledCloudwatchLogsExports?: string[];
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly finalSnapshotIdentifier?: string;
  readonly iamDatabaseAuthenticationEnabled?: boolean;
  readonly identifier?: string;
  readonly identifierPrefix?: string;
  readonly instanceClass: string;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly licenseModel?: string;
  readonly maintenanceWindow?: string;
  readonly maxAllocatedStorage?: number;
  readonly monitoringInterval?: number;
  readonly monitoringRoleArn?: string;
  readonly multiAz?: boolean;
  readonly name?: string;
  readonly optionGroupName?: string;
  readonly parameterGroupName?: string;
  readonly password?: string;
  readonly performanceInsightsEnabled?: boolean;
  readonly performanceInsightsKmsKeyId?: string;
  readonly performanceInsightsRetentionPeriod?: number;
  readonly port?: number;
  readonly publiclyAccessible?: boolean;
  readonly replicateSourceDb?: string;
  readonly securityGroupNames?: string[];
  readonly skipFinalSnapshot?: boolean;
  readonly snapshotIdentifier?: string;
  readonly storageEncrypted?: boolean;
  readonly storageType?: string;
  readonly tags?: { [key: string]: string };
  readonly timezone?: string;
  readonly username?: string;
  readonly vpcSecurityGroupIds?: string[];
  /** s3_import block */
  readonly s3Import?: DbInstanceS3Import[];
  /** timeouts block */
  readonly timeouts?: DbInstanceTimeouts;
}
export interface DbInstanceS3Import {
  readonly bucketName: string;
  readonly bucketPrefix?: string;
  readonly ingestionRole: string;
  readonly sourceEngine: string;
  readonly sourceEngineVersion: string;
}
export interface DbInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DbInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocatedStorage = config.allocatedStorage;
    this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
    this._applyImmediately = config.applyImmediately;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupWindow = config.backupWindow;
    this._caCertIdentifier = config.caCertIdentifier;
    this._characterSetName = config.characterSetName;
    this._copyTagsToSnapshot = config.copyTagsToSnapshot;
    this._dbSubnetGroupName = config.dbSubnetGroupName;
    this._deleteAutomatedBackups = config.deleteAutomatedBackups;
    this._deletionProtection = config.deletionProtection;
    this._domain = config.domain;
    this._domainIamRoleName = config.domainIamRoleName;
    this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
    this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
    this._identifier = config.identifier;
    this._identifierPrefix = config.identifierPrefix;
    this._instanceClass = config.instanceClass;
    this._iops = config.iops;
    this._kmsKeyId = config.kmsKeyId;
    this._licenseModel = config.licenseModel;
    this._maintenanceWindow = config.maintenanceWindow;
    this._maxAllocatedStorage = config.maxAllocatedStorage;
    this._monitoringInterval = config.monitoringInterval;
    this._monitoringRoleArn = config.monitoringRoleArn;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._optionGroupName = config.optionGroupName;
    this._parameterGroupName = config.parameterGroupName;
    this._password = config.password;
    this._performanceInsightsEnabled = config.performanceInsightsEnabled;
    this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
    this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
    this._port = config.port;
    this._publiclyAccessible = config.publiclyAccessible;
    this._replicateSourceDb = config.replicateSourceDb;
    this._securityGroupNames = config.securityGroupNames;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._storageEncrypted = config.storageEncrypted;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._username = config.username;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._s3Import = config.s3Import;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: true
  public get address() {
    return this.getStringAttribute('address');
  }

  // allocated_storage - computed: true, optional: true, required: false
  private _allocatedStorage?: number;
  public get allocatedStorage() {
    return this._allocatedStorage ?? this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number | undefined) {
    this._allocatedStorage = value;
  }

  // allow_major_version_upgrade - computed: false, optional: true, required: false
  private _allowMajorVersionUpgrade?: boolean;
  public get allowMajorVersionUpgrade() {
    return this._allowMajorVersionUpgrade;
  }
  public set allowMajorVersionUpgrade(value: boolean | undefined) {
    this._allowMajorVersionUpgrade = value;
  }

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

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this._autoMinorVersionUpgrade;
  }
  public set autoMinorVersionUpgrade(value: boolean | undefined) {
    this._autoMinorVersionUpgrade = value;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: number;
  public get backupRetentionPeriod() {
    return this._backupRetentionPeriod ?? this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number | undefined) {
    this._backupRetentionPeriod = value;
  }

  // backup_window - computed: true, optional: true, required: false
  private _backupWindow?: string;
  public get backupWindow() {
    return this._backupWindow ?? this.getStringAttribute('backup_window');
  }
  public set backupWindow(value: string | undefined) {
    this._backupWindow = value;
  }

  // ca_cert_identifier - computed: true, optional: true, required: false
  private _caCertIdentifier?: string;
  public get caCertIdentifier() {
    return this._caCertIdentifier ?? this.getStringAttribute('ca_cert_identifier');
  }
  public set caCertIdentifier(value: string | undefined) {
    this._caCertIdentifier = value;
  }

  // character_set_name - computed: true, optional: true, required: false
  private _characterSetName?: string;
  public get characterSetName() {
    return this._characterSetName ?? this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string | undefined) {
    this._characterSetName = value;
  }

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean;
  public get copyTagsToSnapshot() {
    return this._copyTagsToSnapshot;
  }
  public set copyTagsToSnapshot(value: boolean | undefined) {
    this._copyTagsToSnapshot = value;
  }

  // db_subnet_group_name - computed: true, optional: true, required: false
  private _dbSubnetGroupName?: string;
  public get dbSubnetGroupName() {
    return this._dbSubnetGroupName ?? this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string | undefined) {
    this._dbSubnetGroupName = value;
  }

  // delete_automated_backups - computed: false, optional: true, required: false
  private _deleteAutomatedBackups?: boolean;
  public get deleteAutomatedBackups() {
    return this._deleteAutomatedBackups;
  }
  public set deleteAutomatedBackups(value: boolean | undefined) {
    this._deleteAutomatedBackups = value;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this._deletionProtection;
  }
  public set deletionProtection(value: boolean | undefined) {
    this._deletionProtection = value;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // domain_iam_role_name - computed: false, optional: true, required: false
  private _domainIamRoleName?: string;
  public get domainIamRoleName() {
    return this._domainIamRoleName;
  }
  public set domainIamRoleName(value: string | undefined) {
    this._domainIamRoleName = value;
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

  // engine - computed: true, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this._engine ?? this.getStringAttribute('engine');
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

  // iam_database_authentication_enabled - computed: false, optional: true, required: false
  private _iamDatabaseAuthenticationEnabled?: boolean;
  public get iamDatabaseAuthenticationEnabled() {
    return this._iamDatabaseAuthenticationEnabled;
  }
  public set iamDatabaseAuthenticationEnabled(value: boolean | undefined) {
    this._iamDatabaseAuthenticationEnabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string;
  public get identifier() {
    return this._identifier ?? this.getStringAttribute('identifier');
  }
  public set identifier(value: string | undefined) {
    this._identifier = value;
  }

  // identifier_prefix - computed: true, optional: true, required: false
  private _identifierPrefix?: string;
  public get identifierPrefix() {
    return this._identifierPrefix ?? this.getStringAttribute('identifier_prefix');
  }
  public set identifierPrefix(value: string | undefined) {
    this._identifierPrefix = value;
  }

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass: string;
  public get instanceClass() {
    return this._instanceClass;
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number;
  public get iops() {
    return this._iops;
  }
  public set iops(value: number | undefined) {
    this._iops = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string;
  public get licenseModel() {
    return this._licenseModel ?? this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string | undefined) {
    this._licenseModel = value;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string;
  public get maintenanceWindow() {
    return this._maintenanceWindow ?? this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string | undefined) {
    this._maintenanceWindow = value;
  }

  // max_allocated_storage - computed: false, optional: true, required: false
  private _maxAllocatedStorage?: number;
  public get maxAllocatedStorage() {
    return this._maxAllocatedStorage;
  }
  public set maxAllocatedStorage(value: number | undefined) {
    this._maxAllocatedStorage = value;
  }

  // monitoring_interval - computed: false, optional: true, required: false
  private _monitoringInterval?: number;
  public get monitoringInterval() {
    return this._monitoringInterval;
  }
  public set monitoringInterval(value: number | undefined) {
    this._monitoringInterval = value;
  }

  // monitoring_role_arn - computed: true, optional: true, required: false
  private _monitoringRoleArn?: string;
  public get monitoringRoleArn() {
    return this._monitoringRoleArn ?? this.getStringAttribute('monitoring_role_arn');
  }
  public set monitoringRoleArn(value: string | undefined) {
    this._monitoringRoleArn = value;
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean;
  public get multiAz() {
    return this._multiAz ?? this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | undefined) {
    this._multiAz = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // option_group_name - computed: true, optional: true, required: false
  private _optionGroupName?: string;
  public get optionGroupName() {
    return this._optionGroupName ?? this.getStringAttribute('option_group_name');
  }
  public set optionGroupName(value: string | undefined) {
    this._optionGroupName = value;
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string;
  public get parameterGroupName() {
    return this._parameterGroupName ?? this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string | undefined) {
    this._parameterGroupName = value;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }

  // performance_insights_enabled - computed: false, optional: true, required: false
  private _performanceInsightsEnabled?: boolean;
  public get performanceInsightsEnabled() {
    return this._performanceInsightsEnabled;
  }
  public set performanceInsightsEnabled(value: boolean | undefined) {
    this._performanceInsightsEnabled = value;
  }

  // performance_insights_kms_key_id - computed: true, optional: true, required: false
  private _performanceInsightsKmsKeyId?: string;
  public get performanceInsightsKmsKeyId() {
    return this._performanceInsightsKmsKeyId ?? this.getStringAttribute('performance_insights_kms_key_id');
  }
  public set performanceInsightsKmsKeyId(value: string | undefined) {
    this._performanceInsightsKmsKeyId = value;
  }

  // performance_insights_retention_period - computed: true, optional: true, required: false
  private _performanceInsightsRetentionPeriod?: number;
  public get performanceInsightsRetentionPeriod() {
    return this._performanceInsightsRetentionPeriod ?? this.getNumberAttribute('performance_insights_retention_period');
  }
  public set performanceInsightsRetentionPeriod(value: number | undefined) {
    this._performanceInsightsRetentionPeriod = value;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port ?? this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean;
  public get publiclyAccessible() {
    return this._publiclyAccessible;
  }
  public set publiclyAccessible(value: boolean | undefined) {
    this._publiclyAccessible = value;
  }

  // replicas - computed: true, optional: false, required: true
  public get replicas() {
    return this.getListAttribute('replicas');
  }

  // replicate_source_db - computed: false, optional: true, required: false
  private _replicateSourceDb?: string;
  public get replicateSourceDb() {
    return this._replicateSourceDb;
  }
  public set replicateSourceDb(value: string | undefined) {
    this._replicateSourceDb = value;
  }

  // resource_id - computed: true, optional: false, required: true
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // security_group_names - computed: false, optional: true, required: false
  private _securityGroupNames?: string[];
  public get securityGroupNames() {
    return this._securityGroupNames;
  }
  public set securityGroupNames(value: string[] | undefined) {
    this._securityGroupNames = value;
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

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean;
  public get storageEncrypted() {
    return this._storageEncrypted;
  }
  public set storageEncrypted(value: boolean | undefined) {
    this._storageEncrypted = value;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string;
  public get storageType() {
    return this._storageType ?? this.getStringAttribute('storage_type');
  }
  public set storageType(value: string | undefined) {
    this._storageType = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this._timezone ?? this.getStringAttribute('timezone');
  }
  public set timezone(value: string | undefined) {
    this._timezone = value;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string;
  public get username() {
    return this._username ?? this.getStringAttribute('username');
  }
  public set username(value: string | undefined) {
    this._username = value;
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
  private _s3Import?: DbInstanceS3Import[];
  public get s3Import() {
    return this._s3Import;
  }
  public set s3Import(value: DbInstanceS3Import[] | undefined) {
    this._s3Import = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DbInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_storage: this._allocatedStorage,
      allow_major_version_upgrade: this._allowMajorVersionUpgrade,
      apply_immediately: this._applyImmediately,
      auto_minor_version_upgrade: this._autoMinorVersionUpgrade,
      availability_zone: this._availabilityZone,
      backup_retention_period: this._backupRetentionPeriod,
      backup_window: this._backupWindow,
      ca_cert_identifier: this._caCertIdentifier,
      character_set_name: this._characterSetName,
      copy_tags_to_snapshot: this._copyTagsToSnapshot,
      db_subnet_group_name: this._dbSubnetGroupName,
      delete_automated_backups: this._deleteAutomatedBackups,
      deletion_protection: this._deletionProtection,
      domain: this._domain,
      domain_iam_role_name: this._domainIamRoleName,
      enabled_cloudwatch_logs_exports: this._enabledCloudwatchLogsExports,
      engine: this._engine,
      engine_version: this._engineVersion,
      final_snapshot_identifier: this._finalSnapshotIdentifier,
      iam_database_authentication_enabled: this._iamDatabaseAuthenticationEnabled,
      identifier: this._identifier,
      identifier_prefix: this._identifierPrefix,
      instance_class: this._instanceClass,
      iops: this._iops,
      kms_key_id: this._kmsKeyId,
      license_model: this._licenseModel,
      maintenance_window: this._maintenanceWindow,
      max_allocated_storage: this._maxAllocatedStorage,
      monitoring_interval: this._monitoringInterval,
      monitoring_role_arn: this._monitoringRoleArn,
      multi_az: this._multiAz,
      name: this._name,
      option_group_name: this._optionGroupName,
      parameter_group_name: this._parameterGroupName,
      password: this._password,
      performance_insights_enabled: this._performanceInsightsEnabled,
      performance_insights_kms_key_id: this._performanceInsightsKmsKeyId,
      performance_insights_retention_period: this._performanceInsightsRetentionPeriod,
      port: this._port,
      publicly_accessible: this._publiclyAccessible,
      replicate_source_db: this._replicateSourceDb,
      security_group_names: this._securityGroupNames,
      skip_final_snapshot: this._skipFinalSnapshot,
      snapshot_identifier: this._snapshotIdentifier,
      storage_encrypted: this._storageEncrypted,
      storage_type: this._storageType,
      tags: this._tags,
      timezone: this._timezone,
      username: this._username,
      vpc_security_group_ids: this._vpcSecurityGroupIds,
      s3_import: this._s3Import,
      timeouts: this._timeouts,
    };
  }
}
