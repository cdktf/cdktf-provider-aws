// https://www.terraform.io/docs/providers/aws/r/rds_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsClusterConfig extends cdktf.TerraformMetaArguments {
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

function rdsClusterS3ImportToTerraform(struct?: RdsClusterS3Import): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    ingestion_role: cdktf.stringToTerraform(struct!.ingestionRole),
    source_engine: cdktf.stringToTerraform(struct!.sourceEngine),
    source_engine_version: cdktf.stringToTerraform(struct!.sourceEngineVersion),
  }
}

export interface RdsClusterScalingConfiguration {
  readonly autoPause?: boolean;
  readonly maxCapacity?: number;
  readonly minCapacity?: number;
  readonly secondsUntilAutoPause?: number;
  readonly timeoutAction?: string;
}

function rdsClusterScalingConfigurationToTerraform(struct?: RdsClusterScalingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_pause: cdktf.booleanToTerraform(struct!.autoPause),
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    seconds_until_auto_pause: cdktf.numberToTerraform(struct!.secondsUntilAutoPause),
    timeout_action: cdktf.stringToTerraform(struct!.timeoutAction),
  }
}

export interface RdsClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function rdsClusterTimeoutsToTerraform(struct?: RdsClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RdsCluster extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean) {
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

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // backtrack_window - computed: false, optional: true, required: false
  private _backtrackWindow?: number;
  public get backtrackWindow() {
    return this.getNumberAttribute('backtrack_window');
  }
  public set backtrackWindow(value: number ) {
    this._backtrackWindow = value;
  }
  public resetBacktrackWindow() {
    this._backtrackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backtrackWindowInput() {
    return this._backtrackWindow
  }

  // backup_retention_period - computed: false, optional: true, required: false
  private _backupRetentionPeriod?: number;
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number ) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod
  }

  // cluster_identifier - computed: true, optional: true, required: false
  private _clusterIdentifier?: string;
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }

  // cluster_identifier_prefix - computed: true, optional: true, required: false
  private _clusterIdentifierPrefix?: string;
  public get clusterIdentifierPrefix() {
    return this.getStringAttribute('cluster_identifier_prefix');
  }
  public set clusterIdentifierPrefix(value: string) {
    this._clusterIdentifierPrefix = value;
  }
  public resetClusterIdentifierPrefix() {
    this._clusterIdentifierPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierPrefixInput() {
    return this._clusterIdentifierPrefix
  }

  // cluster_members - computed: true, optional: true, required: false
  private _clusterMembers?: string[];
  public get clusterMembers() {
    return this.getListAttribute('cluster_members');
  }
  public set clusterMembers(value: string[]) {
    this._clusterMembers = value;
  }
  public resetClusterMembers() {
    this._clusterMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMembersInput() {
    return this._clusterMembers
  }

  // cluster_resource_id - computed: true, optional: false, required: false
  public get clusterResourceId() {
    return this.getStringAttribute('cluster_resource_id');
  }

  // copy_tags_to_snapshot - computed: false, optional: true, required: false
  private _copyTagsToSnapshot?: boolean;
  public get copyTagsToSnapshot() {
    return this.getBooleanAttribute('copy_tags_to_snapshot');
  }
  public set copyTagsToSnapshot(value: boolean ) {
    this._copyTagsToSnapshot = value;
  }
  public resetCopyTagsToSnapshot() {
    this._copyTagsToSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotInput() {
    return this._copyTagsToSnapshot
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // db_cluster_parameter_group_name - computed: true, optional: true, required: false
  private _dbClusterParameterGroupName?: string;
  public get dbClusterParameterGroupName() {
    return this.getStringAttribute('db_cluster_parameter_group_name');
  }
  public set dbClusterParameterGroupName(value: string) {
    this._dbClusterParameterGroupName = value;
  }
  public resetDbClusterParameterGroupName() {
    this._dbClusterParameterGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterParameterGroupNameInput() {
    return this._dbClusterParameterGroupName
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

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // enable_http_endpoint - computed: false, optional: true, required: false
  private _enableHttpEndpoint?: boolean;
  public get enableHttpEndpoint() {
    return this.getBooleanAttribute('enable_http_endpoint');
  }
  public set enableHttpEndpoint(value: boolean ) {
    this._enableHttpEndpoint = value;
  }
  public resetEnableHttpEndpoint() {
    this._enableHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpEndpointInput() {
    return this._enableHttpEndpoint
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

  // engine - computed: false, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string ) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // engine_mode - computed: false, optional: true, required: false
  private _engineMode?: string;
  public get engineMode() {
    return this.getStringAttribute('engine_mode');
  }
  public set engineMode(value: string ) {
    this._engineMode = value;
  }
  public resetEngineMode() {
    this._engineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineModeInput() {
    return this._engineMode
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

  // global_cluster_identifier - computed: false, optional: true, required: false
  private _globalClusterIdentifier?: string;
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string ) {
    this._globalClusterIdentifier = value;
  }
  public resetGlobalClusterIdentifier() {
    this._globalClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // iam_database_authentication_enabled - computed: false, optional: true, required: false
  private _iamDatabaseAuthenticationEnabled?: boolean;
  public get iamDatabaseAuthenticationEnabled() {
    return this.getBooleanAttribute('iam_database_authentication_enabled');
  }
  public set iamDatabaseAuthenticationEnabled(value: boolean ) {
    this._iamDatabaseAuthenticationEnabled = value;
  }
  public resetIamDatabaseAuthenticationEnabled() {
    this._iamDatabaseAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamDatabaseAuthenticationEnabledInput() {
    return this._iamDatabaseAuthenticationEnabled
  }

  // iam_roles - computed: false, optional: true, required: false
  private _iamRoles?: string[];
  public get iamRoles() {
    return this.getListAttribute('iam_roles');
  }
  public set iamRoles(value: string[] ) {
    this._iamRoles = value;
  }
  public resetIamRoles() {
    this._iamRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRolesInput() {
    return this._iamRoles
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // master_password - computed: false, optional: true, required: false
  private _masterPassword?: string;
  public get masterPassword() {
    return this.getStringAttribute('master_password');
  }
  public set masterPassword(value: string ) {
    this._masterPassword = value;
  }
  public resetMasterPassword() {
    this._masterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordInput() {
    return this._masterPassword
  }

  // master_username - computed: true, optional: true, required: false
  private _masterUsername?: string;
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  public resetMasterUsername() {
    this._masterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername
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

  // preferred_backup_window - computed: true, optional: true, required: false
  private _preferredBackupWindow?: string;
  public get preferredBackupWindow() {
    return this.getStringAttribute('preferred_backup_window');
  }
  public set preferredBackupWindow(value: string) {
    this._preferredBackupWindow = value;
  }
  public resetPreferredBackupWindow() {
    this._preferredBackupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupWindowInput() {
    return this._preferredBackupWindow
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string;
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow
  }

  // reader_endpoint - computed: true, optional: false, required: false
  public get readerEndpoint() {
    return this.getStringAttribute('reader_endpoint');
  }

  // replication_source_identifier - computed: false, optional: true, required: false
  private _replicationSourceIdentifier?: string;
  public get replicationSourceIdentifier() {
    return this.getStringAttribute('replication_source_identifier');
  }
  public set replicationSourceIdentifier(value: string ) {
    this._replicationSourceIdentifier = value;
  }
  public resetReplicationSourceIdentifier() {
    this._replicationSourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSourceIdentifierInput() {
    return this._replicationSourceIdentifier
  }

  // skip_final_snapshot - computed: false, optional: true, required: false
  private _skipFinalSnapshot?: boolean;
  public get skipFinalSnapshot() {
    return this.getBooleanAttribute('skip_final_snapshot');
  }
  public set skipFinalSnapshot(value: boolean ) {
    this._skipFinalSnapshot = value;
  }
  public resetSkipFinalSnapshot() {
    this._skipFinalSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalSnapshotInput() {
    return this._skipFinalSnapshot
  }

  // snapshot_identifier - computed: false, optional: true, required: false
  private _snapshotIdentifier?: string;
  public get snapshotIdentifier() {
    return this.getStringAttribute('snapshot_identifier');
  }
  public set snapshotIdentifier(value: string ) {
    this._snapshotIdentifier = value;
  }
  public resetSnapshotIdentifier() {
    this._snapshotIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdentifierInput() {
    return this._snapshotIdentifier
  }

  // source_region - computed: false, optional: true, required: false
  private _sourceRegion?: string;
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }
  public set sourceRegion(value: string ) {
    this._sourceRegion = value;
  }
  public resetSourceRegion() {
    this._sourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionInput() {
    return this._sourceRegion
  }

  // storage_encrypted - computed: false, optional: true, required: false
  private _storageEncrypted?: boolean;
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean ) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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

  // s3_import - computed: false, optional: true, required: false
  private _s3Import?: RdsClusterS3Import[];
  public get s3Import() {
    return this.interpolationForAttribute('s3_import') as any;
  }
  public set s3Import(value: RdsClusterS3Import[] ) {
    this._s3Import = value;
  }
  public resetS3Import() {
    this._s3Import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ImportInput() {
    return this._s3Import
  }

  // scaling_configuration - computed: false, optional: true, required: false
  private _scalingConfiguration?: RdsClusterScalingConfiguration[];
  public get scalingConfiguration() {
    return this.interpolationForAttribute('scaling_configuration') as any;
  }
  public set scalingConfiguration(value: RdsClusterScalingConfiguration[] ) {
    this._scalingConfiguration = value;
  }
  public resetScalingConfiguration() {
    this._scalingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationInput() {
    return this._scalingConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RdsClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RdsClusterTimeouts ) {
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
      apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      backtrack_window: cdktf.numberToTerraform(this._backtrackWindow),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
      cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
      copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
      database_name: cdktf.stringToTerraform(this._databaseName),
      db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
      db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable_http_endpoint: cdktf.booleanToTerraform(this._enableHttpEndpoint),
      enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
      engine: cdktf.stringToTerraform(this._engine),
      engine_mode: cdktf.stringToTerraform(this._engineMode),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
      global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
      iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
      iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      master_password: cdktf.stringToTerraform(this._masterPassword),
      master_username: cdktf.stringToTerraform(this._masterUsername),
      port: cdktf.numberToTerraform(this._port),
      preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
      preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
      replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
      skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
      snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
      source_region: cdktf.stringToTerraform(this._sourceRegion),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      s3_import: cdktf.listMapper(rdsClusterS3ImportToTerraform)(this._s3Import),
      scaling_configuration: cdktf.listMapper(rdsClusterScalingConfigurationToTerraform)(this._scalingConfiguration),
      timeouts: rdsClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
