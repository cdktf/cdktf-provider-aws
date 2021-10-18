// https://www.terraform.io/docs/providers/aws/r/db_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allocated_storage DbInstance#allocated_storage}
  */
  readonly allocatedStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}
  */
  readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#apply_immediately DbInstance#apply_immediately}
  */
  readonly applyImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#availability_zone DbInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_retention_period DbInstance#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#backup_window DbInstance#backup_window}
  */
  readonly backupWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ca_cert_identifier DbInstance#ca_cert_identifier}
  */
  readonly caCertIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#character_set_name DbInstance#character_set_name}
  */
  readonly characterSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}
  */
  readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}
  */
  readonly customerOwnedIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#db_subnet_group_name DbInstance#db_subnet_group_name}
  */
  readonly dbSubnetGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete_automated_backups DbInstance#delete_automated_backups}
  */
  readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#deletion_protection DbInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain DbInstance#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#domain_iam_role_name DbInstance#domain_iam_role_name}
  */
  readonly domainIamRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}
  */
  readonly enabledCloudwatchLogsExports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine DbInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#engine_version DbInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#final_snapshot_identifier DbInstance#final_snapshot_identifier}
  */
  readonly finalSnapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}
  */
  readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier DbInstance#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#identifier_prefix DbInstance#identifier_prefix}
  */
  readonly identifierPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#instance_class DbInstance#instance_class}
  */
  readonly instanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#iops DbInstance#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#kms_key_id DbInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#license_model DbInstance#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#maintenance_window DbInstance#maintenance_window}
  */
  readonly maintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#max_allocated_storage DbInstance#max_allocated_storage}
  */
  readonly maxAllocatedStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_interval DbInstance#monitoring_interval}
  */
  readonly monitoringInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#monitoring_role_arn DbInstance#monitoring_role_arn}
  */
  readonly monitoringRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#multi_az DbInstance#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#name DbInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#nchar_character_set_name DbInstance#nchar_character_set_name}
  */
  readonly ncharCharacterSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#option_group_name DbInstance#option_group_name}
  */
  readonly optionGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#parameter_group_name DbInstance#parameter_group_name}
  */
  readonly parameterGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#password DbInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_enabled DbInstance#performance_insights_enabled}
  */
  readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}
  */
  readonly performanceInsightsKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#performance_insights_retention_period DbInstance#performance_insights_retention_period}
  */
  readonly performanceInsightsRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#port DbInstance#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#publicly_accessible DbInstance#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#replica_mode DbInstance#replica_mode}
  */
  readonly replicaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#replicate_source_db DbInstance#replicate_source_db}
  */
  readonly replicateSourceDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#security_group_names DbInstance#security_group_names}
  */
  readonly securityGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#skip_final_snapshot DbInstance#skip_final_snapshot}
  */
  readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#snapshot_identifier DbInstance#snapshot_identifier}
  */
  readonly snapshotIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_encrypted DbInstance#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#storage_type DbInstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags DbInstance#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#tags_all DbInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timezone DbInstance#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#username DbInstance#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#vpc_security_group_ids DbInstance#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * restore_to_point_in_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_to_point_in_time DbInstance#restore_to_point_in_time}
  */
  readonly restoreToPointInTime?: DbInstanceRestoreToPointInTime[];
  /**
  * s3_import block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#s3_import DbInstance#s3_import}
  */
  readonly s3Import?: DbInstanceS3Import[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#timeouts DbInstance#timeouts}
  */
  readonly timeouts?: DbInstanceTimeouts;
}
export interface DbInstanceRestoreToPointInTime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#restore_time DbInstance#restore_time}
  */
  readonly restoreTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_db_instance_identifier DbInstance#source_db_instance_identifier}
  */
  readonly sourceDbInstanceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_dbi_resource_id DbInstance#source_dbi_resource_id}
  */
  readonly sourceDbiResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#use_latest_restorable_time DbInstance#use_latest_restorable_time}
  */
  readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}

function dbInstanceRestoreToPointInTimeToTerraform(struct?: DbInstanceRestoreToPointInTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    restore_time: cdktf.stringToTerraform(struct!.restoreTime),
    source_db_instance_identifier: cdktf.stringToTerraform(struct!.sourceDbInstanceIdentifier),
    source_dbi_resource_id: cdktf.stringToTerraform(struct!.sourceDbiResourceId),
    use_latest_restorable_time: cdktf.booleanToTerraform(struct!.useLatestRestorableTime),
  }
}

export interface DbInstanceS3Import {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_name DbInstance#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#bucket_prefix DbInstance#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#ingestion_role DbInstance#ingestion_role}
  */
  readonly ingestionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine DbInstance#source_engine}
  */
  readonly sourceEngine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#source_engine_version DbInstance#source_engine_version}
  */
  readonly sourceEngineVersion: string;
}

function dbInstanceS3ImportToTerraform(struct?: DbInstanceS3Import): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    ingestion_role: cdktf.stringToTerraform(struct!.ingestionRole),
    source_engine: cdktf.stringToTerraform(struct!.sourceEngine),
    source_engine_version: cdktf.stringToTerraform(struct!.sourceEngineVersion),
  }
}

export interface DbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#create DbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#delete DbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html#update DbInstance#update}
  */
  readonly update?: string;
}

function dbInstanceTimeoutsToTerraform(struct?: DbInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance}
*/
export class DbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbInstanceConfig
  */
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
    this._customerOwnedIpEnabled = config.customerOwnedIpEnabled;
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
    this._ncharCharacterSetName = config.ncharCharacterSetName;
    this._optionGroupName = config.optionGroupName;
    this._parameterGroupName = config.parameterGroupName;
    this._password = config.password;
    this._performanceInsightsEnabled = config.performanceInsightsEnabled;
    this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
    this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
    this._port = config.port;
    this._publiclyAccessible = config.publiclyAccessible;
    this._replicaMode = config.replicaMode;
    this._replicateSourceDb = config.replicateSourceDb;
    this._securityGroupNames = config.securityGroupNames;
    this._skipFinalSnapshot = config.skipFinalSnapshot;
    this._snapshotIdentifier = config.snapshotIdentifier;
    this._storageEncrypted = config.storageEncrypted;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timezone = config.timezone;
    this._username = config.username;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._restoreToPointInTime = config.restoreToPointInTime;
    this._s3Import = config.s3Import;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // allocated_storage - computed: true, optional: true, required: false
  private _allocatedStorage?: number;
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number) {
    this._allocatedStorage = value;
  }
  public resetAllocatedStorage() {
    this._allocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedStorageInput() {
    return this._allocatedStorage
  }

  // allow_major_version_upgrade - computed: false, optional: true, required: false
  private _allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
  public get allowMajorVersionUpgrade() {
    return this.getBooleanAttribute('allow_major_version_upgrade');
  }
  public set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable ) {
    this._allowMajorVersionUpgrade = value;
  }
  public resetAllowMajorVersionUpgrade() {
    this._allowMajorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMajorVersionUpgradeInput() {
    return this._allowMajorVersionUpgrade
  }

  // apply_immediately - computed: true, optional: true, required: false
  private _applyImmediately?: boolean | cdktf.IResolvable;
  public get applyImmediately() {
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | cdktf.IResolvable) {
    this._applyImmediately = value;
  }
  public resetApplyImmediately() {
    this._applyImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyImmediatelyInput() {
    return this._applyImmediately
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable ) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: number;
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod
  }

  // backup_window - computed: true, optional: true, required: false
  private _backupWindow?: string;
  public get backupWindow() {
    return this.getStringAttribute('backup_window');
  }
  public set backupWindow(value: string) {
    this._backupWindow = value;
  }
  public resetBackupWindow() {
    this._backupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowInput() {
    return this._backupWindow
  }

  // ca_cert_identifier - computed: true, optional: true, required: false
  private _caCertIdentifier?: string;
  public get caCertIdentifier() {
    return this.getStringAttribute('ca_cert_identifier');
  }
  public set caCertIdentifier(value: string) {
    this._caCertIdentifier = value;
  }
  public resetCaCertIdentifier() {
    this._caCertIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertIdentifierInput() {
    return this._caCertIdentifier
  }

  // character_set_name - computed: true, optional: true, required: false
  private _characterSetName?: string;
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
  }
  public resetCharacterSetName() {
    this._characterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetNameInput() {
    return this._characterSetName
  }

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean | cdktf.IResolvable;
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }
  public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable ) {
    this._copyTagsToSnapshot = value;
  }
  public resetCopyTagsToSnapshot() {
    this._copyTagsToSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotInput() {
    return this._copyTagsToSnapshot
  }

  // customer_owned_ip_enabled - computed: false, optional: true, required: false
  private _customerOwnedIpEnabled?: boolean | cdktf.IResolvable;
  public get customerOwnedIpEnabled() {
    return this.getBooleanAttribute('customer_owned_ip_enabled');
  }
  public set customerOwnedIpEnabled(value: boolean | cdktf.IResolvable ) {
    this._customerOwnedIpEnabled = value;
  }
  public resetCustomerOwnedIpEnabled() {
    this._customerOwnedIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpEnabledInput() {
    return this._customerOwnedIpEnabled
  }

  // db_subnet_group_name - computed: true, optional: true, required: false
  private _dbSubnetGroupName?: string;
  public get dbSubnetGroupName() {
    return this.getStringAttribute('db_subnet_group_name');
  }
  public set dbSubnetGroupName(value: string) {
    this._dbSubnetGroupName = value;
  }
  public resetDbSubnetGroupName() {
    this._dbSubnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSubnetGroupNameInput() {
    return this._dbSubnetGroupName
  }

  // delete_automated_backups - computed: false, optional: true, required: false
  private _deleteAutomatedBackups?: boolean | cdktf.IResolvable;
  public get deleteAutomatedBackups() {
    return this.getBooleanAttribute('delete_automated_backups');
  }
  public set deleteAutomatedBackups(value: boolean | cdktf.IResolvable ) {
    this._deleteAutomatedBackups = value;
  }
  public resetDeleteAutomatedBackups() {
    this._deleteAutomatedBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutomatedBackupsInput() {
    return this._deleteAutomatedBackups
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string ) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // domain_iam_role_name - computed: false, optional: true, required: false
  private _domainIamRoleName?: string;
  public get domainIamRoleName() {
    return this.getStringAttribute('domain_iam_role_name');
  }
  public set domainIamRoleName(value: string ) {
    this._domainIamRoleName = value;
  }
  public resetDomainIamRoleName() {
    this._domainIamRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIamRoleNameInput() {
    return this._domainIamRoleName
  }

  // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
  private _enabledCloudwatchLogsExports?: string[];
  public get enabledCloudwatchLogsExports() {
    return this.getListAttribute('enabled_cloudwatch_logs_exports');
  }
  public set enabledCloudwatchLogsExports(value: string[] ) {
    this._enabledCloudwatchLogsExports = value;
  }
  public resetEnabledCloudwatchLogsExports() {
    this._enabledCloudwatchLogsExports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledCloudwatchLogsExportsInput() {
    return this._enabledCloudwatchLogsExports
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion
  }

  // engine_version_actual - computed: true, optional: false, required: false
  public get engineVersionActual() {
    return this.getStringAttribute('engine_version_actual');
  }

  // final_snapshot_identifier - computed: false, optional: true, required: false
  private _finalSnapshotIdentifier?: string;
  public get finalSnapshotIdentifier() {
    return this.getStringAttribute('final_snapshot_identifier');
  }
  public set finalSnapshotIdentifier(value: string ) {
    this._finalSnapshotIdentifier = value;
  }
  public resetFinalSnapshotIdentifier() {
    this._finalSnapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalSnapshotIdentifierInput() {
    return this._finalSnapshotIdentifier
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // iam_database_authentication_enabled - computed: false, optional: true, required: false
  private _iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
  public get iamDatabaseAuthenticationEnabled() {
    return this.getBooleanAttribute('iam_database_authentication_enabled');
  }
  public set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable ) {
    this._iamDatabaseAuthenticationEnabled = value;
  }
  public resetIamDatabaseAuthenticationEnabled() {
    this._iamDatabaseAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamDatabaseAuthenticationEnabledInput() {
    return this._iamDatabaseAuthenticationEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string;
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier
  }

  // identifier_prefix - computed: true, optional: true, required: false
  private _identifierPrefix?: string;
  public get identifierPrefix() {
    return this.getStringAttribute('identifier_prefix');
  }
  public set identifierPrefix(value: string) {
    this._identifierPrefix = value;
  }
  public resetIdentifierPrefix() {
    this._identifierPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierPrefixInput() {
    return this._identifierPrefix
  }

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass: string;
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number;
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number ) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // latest_restorable_time - computed: true, optional: false, required: false
  public get latestRestorableTime() {
    return this.getStringAttribute('latest_restorable_time');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string;
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string;
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow
  }

  // max_allocated_storage - computed: false, optional: true, required: false
  private _maxAllocatedStorage?: number;
  public get maxAllocatedStorage() {
    return this.getNumberAttribute('max_allocated_storage');
  }
  public set maxAllocatedStorage(value: number ) {
    this._maxAllocatedStorage = value;
  }
  public resetMaxAllocatedStorage() {
    this._maxAllocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllocatedStorageInput() {
    return this._maxAllocatedStorage
  }

  // monitoring_interval - computed: false, optional: true, required: false
  private _monitoringInterval?: number;
  public get monitoringInterval() {
    return this.getNumberAttribute('monitoring_interval');
  }
  public set monitoringInterval(value: number ) {
    this._monitoringInterval = value;
  }
  public resetMonitoringInterval() {
    this._monitoringInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIntervalInput() {
    return this._monitoringInterval
  }

  // monitoring_role_arn - computed: true, optional: true, required: false
  private _monitoringRoleArn?: string;
  public get monitoringRoleArn() {
    return this.getStringAttribute('monitoring_role_arn');
  }
  public set monitoringRoleArn(value: string) {
    this._monitoringRoleArn = value;
  }
  public resetMonitoringRoleArn() {
    this._monitoringRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRoleArnInput() {
    return this._monitoringRoleArn
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable;
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // nchar_character_set_name - computed: true, optional: true, required: false
  private _ncharCharacterSetName?: string;
  public get ncharCharacterSetName() {
    return this.getStringAttribute('nchar_character_set_name');
  }
  public set ncharCharacterSetName(value: string) {
    this._ncharCharacterSetName = value;
  }
  public resetNcharCharacterSetName() {
    this._ncharCharacterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharCharacterSetNameInput() {
    return this._ncharCharacterSetName
  }

  // option_group_name - computed: true, optional: true, required: false
  private _optionGroupName?: string;
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }
  public set optionGroupName(value: string) {
    this._optionGroupName = value;
  }
  public resetOptionGroupName() {
    this._optionGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionGroupNameInput() {
    return this._optionGroupName
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string;
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string) {
    this._parameterGroupName = value;
  }
  public resetParameterGroupName() {
    this._parameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupNameInput() {
    return this._parameterGroupName
  }

  // password - computed: false, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string ) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // performance_insights_enabled - computed: false, optional: true, required: false
  private _performanceInsightsEnabled?: boolean | cdktf.IResolvable;
  public get performanceInsightsEnabled() {
    return this.getBooleanAttribute('performance_insights_enabled');
  }
  public set performanceInsightsEnabled(value: boolean | cdktf.IResolvable ) {
    this._performanceInsightsEnabled = value;
  }
  public resetPerformanceInsightsEnabled() {
    this._performanceInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsEnabledInput() {
    return this._performanceInsightsEnabled
  }

  // performance_insights_kms_key_id - computed: true, optional: true, required: false
  private _performanceInsightsKmsKeyId?: string;
  public get performanceInsightsKmsKeyId() {
    return this.getStringAttribute('performance_insights_kms_key_id');
  }
  public set performanceInsightsKmsKeyId(value: string) {
    this._performanceInsightsKmsKeyId = value;
  }
  public resetPerformanceInsightsKmsKeyId() {
    this._performanceInsightsKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsKmsKeyIdInput() {
    return this._performanceInsightsKmsKeyId
  }

  // performance_insights_retention_period - computed: true, optional: true, required: false
  private _performanceInsightsRetentionPeriod?: number;
  public get performanceInsightsRetentionPeriod() {
    return this.getNumberAttribute('performance_insights_retention_period');
  }
  public set performanceInsightsRetentionPeriod(value: number) {
    this._performanceInsightsRetentionPeriod = value;
  }
  public resetPerformanceInsightsRetentionPeriod() {
    this._performanceInsightsRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceInsightsRetentionPeriodInput() {
    return this._performanceInsightsRetentionPeriod
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // publicly_accessible - computed: false, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable;
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable ) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible
  }

  // replica_mode - computed: false, optional: true, required: false
  private _replicaMode?: string;
  public get replicaMode() {
    return this.getStringAttribute('replica_mode');
  }
  public set replicaMode(value: string ) {
    this._replicaMode = value;
  }
  public resetReplicaMode() {
    this._replicaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaModeInput() {
    return this._replicaMode
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getListAttribute('replicas');
  }

  // replicate_source_db - computed: false, optional: true, required: false
  private _replicateSourceDb?: string;
  public get replicateSourceDb() {
    return this.getStringAttribute('replicate_source_db');
  }
  public set replicateSourceDb(value: string ) {
    this._replicateSourceDb = value;
  }
  public resetReplicateSourceDb() {
    this._replicateSourceDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateSourceDbInput() {
    return this._replicateSourceDb
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // security_group_names - computed: false, optional: true, required: false
  private _securityGroupNames?: string[];
  public get securityGroupNames() {
    return this.getListAttribute('security_group_names');
  }
  public set securityGroupNames(value: string[] ) {
    this._securityGroupNames = value;
  }
  public resetSecurityGroupNames() {
    this._securityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNamesInput() {
    return this._securityGroupNames
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean | cdktf.IResolvable;
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean | cdktf.IResolvable ) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot
  }

  // snapshot_identifier - computed: true, optional: true, required: false
  private _snapshotIdentifier?: string;
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }
  public set snapshotIdentifier(value: string) {
    this._snapshotIdentifier = value;
  }
  public resetSnapshotIdentifier() {
    this._snapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdentifierInput() {
    return this._snapshotIdentifier
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean | cdktf.IResolvable;
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean | cdktf.IResolvable ) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string;
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string;
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // username - computed: true, optional: true, required: false
  private _username?: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // restore_to_point_in_time - computed: false, optional: true, required: false
  private _restoreToPointInTime?: DbInstanceRestoreToPointInTime[];
  public get restoreToPointInTime() {
    return this.interpolationForAttribute('restore_to_point_in_time') as any;
  }
  public set restoreToPointInTime(value: DbInstanceRestoreToPointInTime[] ) {
    this._restoreToPointInTime = value;
  }
  public resetRestoreToPointInTime() {
    this._restoreToPointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToPointInTimeInput() {
    return this._restoreToPointInTime
  }

  // s3_import - computed: false, optional: true, required: false
  private _s3Import?: DbInstanceS3Import[];
  public get s3Import() {
    return this.interpolationForAttribute('s3_import') as any;
  }
  public set s3Import(value: DbInstanceS3Import[] ) {
    this._s3Import = value;
  }
  public resetS3Import() {
    this._s3Import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ImportInput() {
    return this._s3Import
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DbInstanceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
      allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      backup_window: cdktf.stringToTerraform(this._backupWindow),
      ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
      character_set_name: cdktf.stringToTerraform(this._characterSetName),
      copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
      customer_owned_ip_enabled: cdktf.booleanToTerraform(this._customerOwnedIpEnabled),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      delete_automated_backups: cdktf.booleanToTerraform(this._deleteAutomatedBackups),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      domain: cdktf.stringToTerraform(this._domain),
      domain_iam_role_name: cdktf.stringToTerraform(this._domainIamRoleName),
      enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
      identifier: cdktf.stringToTerraform(this._identifier),
      identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      iops: cdktf.numberToTerraform(this._iops),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      max_allocated_storage: cdktf.numberToTerraform(this._maxAllocatedStorage),
      monitoring_interval: cdktf.numberToTerraform(this._monitoringInterval),
      monitoring_role_arn: cdktf.stringToTerraform(this._monitoringRoleArn),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      nchar_character_set_name: cdktf.stringToTerraform(this._ncharCharacterSetName),
      option_group_name: cdktf.stringToTerraform(this._optionGroupName),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      password: cdktf.stringToTerraform(this._password),
      performance_insights_enabled: cdktf.booleanToTerraform(this._performanceInsightsEnabled),
      performance_insights_kms_key_id: cdktf.stringToTerraform(this._performanceInsightsKmsKeyId),
      performance_insights_retention_period: cdktf.numberToTerraform(this._performanceInsightsRetentionPeriod),
      port: cdktf.numberToTerraform(this._port),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      replica_mode: cdktf.stringToTerraform(this._replicaMode),
      replicate_source_db: cdktf.stringToTerraform(this._replicateSourceDb),
      security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timezone: cdktf.stringToTerraform(this._timezone),
      username: cdktf.stringToTerraform(this._username),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      restore_to_point_in_time: cdktf.listMapper(dbInstanceRestoreToPointInTimeToTerraform)(this._restoreToPointInTime),
      s3_import: cdktf.listMapper(dbInstanceS3ImportToTerraform)(this._s3Import),
      timeouts: dbInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
