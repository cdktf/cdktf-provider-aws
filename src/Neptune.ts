// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Neptune
*/
export namespace Neptune {
  export interface NeptuneClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#apply_immediately NeptuneCluster#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#availability_zones NeptuneCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#backup_retention_period NeptuneCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#cluster_identifier NeptuneCluster#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}
    */
    readonly clusterIdentifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#deletion_protection NeptuneCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}
    */
    readonly enableCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#engine NeptuneCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#engine_version NeptuneCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}
    */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#iam_roles NeptuneCluster#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#kms_key_arn NeptuneCluster#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}
    */
    readonly neptuneClusterParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}
    */
    readonly neptuneSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#port NeptuneCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#preferred_backup_window NeptuneCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#replication_source_identifier NeptuneCluster#replication_source_identifier}
    */
    readonly replicationSourceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#skip_final_snapshot NeptuneCluster#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#snapshot_identifier NeptuneCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#storage_encrypted NeptuneCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#tags NeptuneCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#tags_all NeptuneCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#timeouts NeptuneCluster#timeouts}
    */
    readonly timeouts?: NeptuneClusterTimeouts;
  }
  export interface NeptuneClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#create NeptuneCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#delete NeptuneCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html#update NeptuneCluster#update}
    */
    readonly update?: string;
  }

  function neptuneClusterTimeoutsToTerraform(struct?: NeptuneClusterTimeoutsOutputReference | NeptuneClusterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class NeptuneClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster}
  */
  export class NeptuneCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterConfig = {}
    */
    public constructor(scope: Construct, id: string, config: NeptuneClusterConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_cluster',
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
      this._copyTagsToSnapshot = config.copyTagsToSnapshot;
      this._deletionProtection = config.deletionProtection;
      this._enableCloudwatchLogsExports = config.enableCloudwatchLogsExports;
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
      this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
      this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
      this._iamRoles = config.iamRoles;
      this._kmsKeyArn = config.kmsKeyArn;
      this._neptuneClusterParameterGroupName = config.neptuneClusterParameterGroupName;
      this._neptuneSubnetGroupName = config.neptuneSubnetGroupName;
      this._port = config.port;
      this._preferredBackupWindow = config.preferredBackupWindow;
      this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
      this._replicationSourceIdentifier = config.replicationSourceIdentifier;
      this._skipFinalSnapshot = config.skipFinalSnapshot;
      this._snapshotIdentifier = config.snapshotIdentifier;
      this._storageEncrypted = config.storageEncrypted;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // apply_immediately - computed: true, optional: true, required: false
    private _applyImmediately?: boolean | cdktf.IResolvable | undefined; 
    public get applyImmediately() {
      return this.getBooleanAttribute('apply_immediately') as any;
    }
    public set applyImmediately(value: boolean | cdktf.IResolvable | undefined) {
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
    private _availabilityZones?: string[] | undefined; 
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[] | undefined) {
      this._availabilityZones = value;
    }
    public resetAvailabilityZones() {
      this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
      return this._availabilityZones
    }

    // backup_retention_period - computed: false, optional: true, required: false
    private _backupRetentionPeriod?: number | undefined; 
    public get backupRetentionPeriod() {
      return this.getNumberAttribute('backup_retention_period');
    }
    public set backupRetentionPeriod(value: number | undefined) {
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
    private _clusterIdentifier?: string | undefined; 
    public get clusterIdentifier() {
      return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string | undefined) {
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
    private _clusterIdentifierPrefix?: string | undefined; 
    public get clusterIdentifierPrefix() {
      return this.getStringAttribute('cluster_identifier_prefix');
    }
    public set clusterIdentifierPrefix(value: string | undefined) {
      this._clusterIdentifierPrefix = value;
    }
    public resetClusterIdentifierPrefix() {
      this._clusterIdentifierPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierPrefixInput() {
      return this._clusterIdentifierPrefix
    }

    // cluster_members - computed: true, optional: false, required: false
    public get clusterMembers() {
      return this.getListAttribute('cluster_members');
    }

    // cluster_resource_id - computed: true, optional: false, required: false
    public get clusterResourceId() {
      return this.getStringAttribute('cluster_resource_id');
    }

    // copy_tags_to_snapshot - computed: false, optional: true, required: false
    private _copyTagsToSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get copyTagsToSnapshot() {
      return this.getBooleanAttribute('copy_tags_to_snapshot') as any;
    }
    public set copyTagsToSnapshot(value: boolean | cdktf.IResolvable | undefined) {
      this._copyTagsToSnapshot = value;
    }
    public resetCopyTagsToSnapshot() {
      this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToSnapshotInput() {
      return this._copyTagsToSnapshot
    }

    // deletion_protection - computed: false, optional: true, required: false
    private _deletionProtection?: boolean | cdktf.IResolvable | undefined; 
    public get deletionProtection() {
      return this.getBooleanAttribute('deletion_protection') as any;
    }
    public set deletionProtection(value: boolean | cdktf.IResolvable | undefined) {
      this._deletionProtection = value;
    }
    public resetDeletionProtection() {
      this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
      return this._deletionProtection
    }

    // enable_cloudwatch_logs_exports - computed: false, optional: true, required: false
    private _enableCloudwatchLogsExports?: string[] | undefined; 
    public get enableCloudwatchLogsExports() {
      return this.getListAttribute('enable_cloudwatch_logs_exports');
    }
    public set enableCloudwatchLogsExports(value: string[] | undefined) {
      this._enableCloudwatchLogsExports = value;
    }
    public resetEnableCloudwatchLogsExports() {
      this._enableCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCloudwatchLogsExportsInput() {
      return this._enableCloudwatchLogsExports
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine - computed: false, optional: true, required: false
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
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
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
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
    private _finalSnapshotIdentifier?: string | undefined; 
    public get finalSnapshotIdentifier() {
      return this.getStringAttribute('final_snapshot_identifier');
    }
    public set finalSnapshotIdentifier(value: string | undefined) {
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
    private _iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get iamDatabaseAuthenticationEnabled() {
      return this.getBooleanAttribute('iam_database_authentication_enabled') as any;
    }
    public set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _iamRoles?: string[] | undefined; 
    public get iamRoles() {
      return this.getListAttribute('iam_roles');
    }
    public set iamRoles(value: string[] | undefined) {
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

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // neptune_cluster_parameter_group_name - computed: false, optional: true, required: false
    private _neptuneClusterParameterGroupName?: string | undefined; 
    public get neptuneClusterParameterGroupName() {
      return this.getStringAttribute('neptune_cluster_parameter_group_name');
    }
    public set neptuneClusterParameterGroupName(value: string | undefined) {
      this._neptuneClusterParameterGroupName = value;
    }
    public resetNeptuneClusterParameterGroupName() {
      this._neptuneClusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neptuneClusterParameterGroupNameInput() {
      return this._neptuneClusterParameterGroupName
    }

    // neptune_subnet_group_name - computed: true, optional: true, required: false
    private _neptuneSubnetGroupName?: string | undefined; 
    public get neptuneSubnetGroupName() {
      return this.getStringAttribute('neptune_subnet_group_name');
    }
    public set neptuneSubnetGroupName(value: string | undefined) {
      this._neptuneSubnetGroupName = value;
    }
    public resetNeptuneSubnetGroupName() {
      this._neptuneSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neptuneSubnetGroupNameInput() {
      return this._neptuneSubnetGroupName
    }

    // port - computed: false, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
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
    private _preferredBackupWindow?: string | undefined; 
    public get preferredBackupWindow() {
      return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string | undefined) {
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
    private _preferredMaintenanceWindow?: string | undefined; 
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string | undefined) {
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
    private _replicationSourceIdentifier?: string | undefined; 
    public get replicationSourceIdentifier() {
      return this.getStringAttribute('replication_source_identifier');
    }
    public set replicationSourceIdentifier(value: string | undefined) {
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
    private _skipFinalSnapshot?: boolean | cdktf.IResolvable | undefined; 
    public get skipFinalSnapshot() {
      return this.getBooleanAttribute('skip_final_snapshot') as any;
    }
    public set skipFinalSnapshot(value: boolean | cdktf.IResolvable | undefined) {
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
    private _snapshotIdentifier?: string | undefined; 
    public get snapshotIdentifier() {
      return this.getStringAttribute('snapshot_identifier');
    }
    public set snapshotIdentifier(value: string | undefined) {
      this._snapshotIdentifier = value;
    }
    public resetSnapshotIdentifier() {
      this._snapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdentifierInput() {
      return this._snapshotIdentifier
    }

    // storage_encrypted - computed: false, optional: true, required: false
    private _storageEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }
    public set storageEncrypted(value: boolean | cdktf.IResolvable | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[] | undefined; 
    public get vpcSecurityGroupIds() {
      return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[] | undefined) {
      this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
      this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
      return this._vpcSecurityGroupIds
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: NeptuneClusterTimeouts | undefined; 
    private __timeoutsOutput = new NeptuneClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: NeptuneClusterTimeouts | undefined) {
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
        backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
        copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
        deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
        enable_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enableCloudwatchLogsExports),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
        iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
        iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
        neptune_cluster_parameter_group_name: cdktf.stringToTerraform(this._neptuneClusterParameterGroupName),
        neptune_subnet_group_name: cdktf.stringToTerraform(this._neptuneSubnetGroupName),
        port: cdktf.numberToTerraform(this._port),
        preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
        preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
        replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
        skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
        snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
        storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        timeouts: neptuneClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface NeptuneClusterEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html#cluster_endpoint_identifier NeptuneClusterEndpoint#cluster_endpoint_identifier}
    */
    readonly clusterEndpointIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html#cluster_identifier NeptuneClusterEndpoint#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html#endpoint_type NeptuneClusterEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html#excluded_members NeptuneClusterEndpoint#excluded_members}
    */
    readonly excludedMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html#static_members NeptuneClusterEndpoint#static_members}
    */
    readonly staticMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html#tags NeptuneClusterEndpoint#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html#tags_all NeptuneClusterEndpoint#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html aws_neptune_cluster_endpoint}
  */
  export class NeptuneClusterEndpoint extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_cluster_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html aws_neptune_cluster_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterEndpointConfig
    */
    public constructor(scope: Construct, id: string, config: NeptuneClusterEndpointConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_cluster_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterEndpointIdentifier = config.clusterEndpointIdentifier;
      this._clusterIdentifier = config.clusterIdentifier;
      this._endpointType = config.endpointType;
      this._excludedMembers = config.excludedMembers;
      this._staticMembers = config.staticMembers;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_endpoint_identifier - computed: false, optional: false, required: true
    private _clusterEndpointIdentifier?: string; 
    public get clusterEndpointIdentifier() {
      return this.getStringAttribute('cluster_endpoint_identifier');
    }
    public set clusterEndpointIdentifier(value: string) {
      this._clusterEndpointIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterEndpointIdentifierInput() {
      return this._clusterEndpointIdentifier
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
      return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
      this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
      return this._clusterIdentifier
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // endpoint_type - computed: false, optional: false, required: true
    private _endpointType?: string; 
    public get endpointType() {
      return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
      this._endpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
      return this._endpointType
    }

    // excluded_members - computed: false, optional: true, required: false
    private _excludedMembers?: string[] | undefined; 
    public get excludedMembers() {
      return this.getListAttribute('excluded_members');
    }
    public set excludedMembers(value: string[] | undefined) {
      this._excludedMembers = value;
    }
    public resetExcludedMembers() {
      this._excludedMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedMembersInput() {
      return this._excludedMembers
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // static_members - computed: false, optional: true, required: false
    private _staticMembers?: string[] | undefined; 
    public get staticMembers() {
      return this.getListAttribute('static_members');
    }
    public set staticMembers(value: string[] | undefined) {
      this._staticMembers = value;
    }
    public resetStaticMembers() {
      this._staticMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticMembersInput() {
      return this._staticMembers
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_endpoint_identifier: cdktf.stringToTerraform(this._clusterEndpointIdentifier),
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        endpoint_type: cdktf.stringToTerraform(this._endpointType),
        excluded_members: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedMembers),
        static_members: cdktf.listMapper(cdktf.stringToTerraform)(this._staticMembers),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface NeptuneClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#apply_immediately NeptuneClusterInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#auto_minor_version_upgrade NeptuneClusterInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#availability_zone NeptuneClusterInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#cluster_identifier NeptuneClusterInstance#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#engine NeptuneClusterInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#engine_version NeptuneClusterInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#identifier NeptuneClusterInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#identifier_prefix NeptuneClusterInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#instance_class NeptuneClusterInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#neptune_parameter_group_name NeptuneClusterInstance#neptune_parameter_group_name}
    */
    readonly neptuneParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#neptune_subnet_group_name NeptuneClusterInstance#neptune_subnet_group_name}
    */
    readonly neptuneSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#port NeptuneClusterInstance#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#preferred_backup_window NeptuneClusterInstance#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#preferred_maintenance_window NeptuneClusterInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#promotion_tier NeptuneClusterInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#publicly_accessible NeptuneClusterInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#tags NeptuneClusterInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#tags_all NeptuneClusterInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#timeouts NeptuneClusterInstance#timeouts}
    */
    readonly timeouts?: NeptuneClusterInstanceTimeouts;
  }
  export interface NeptuneClusterInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#create NeptuneClusterInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#delete NeptuneClusterInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#update NeptuneClusterInstance#update}
    */
    readonly update?: string;
  }

  function neptuneClusterInstanceTimeoutsToTerraform(struct?: NeptuneClusterInstanceTimeoutsOutputReference | NeptuneClusterInstanceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class NeptuneClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html aws_neptune_cluster_instance}
  */
  export class NeptuneClusterInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_cluster_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html aws_neptune_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: NeptuneClusterInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_cluster_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applyImmediately = config.applyImmediately;
      this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
      this._availabilityZone = config.availabilityZone;
      this._clusterIdentifier = config.clusterIdentifier;
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
      this._identifier = config.identifier;
      this._identifierPrefix = config.identifierPrefix;
      this._instanceClass = config.instanceClass;
      this._neptuneParameterGroupName = config.neptuneParameterGroupName;
      this._neptuneSubnetGroupName = config.neptuneSubnetGroupName;
      this._port = config.port;
      this._preferredBackupWindow = config.preferredBackupWindow;
      this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
      this._promotionTier = config.promotionTier;
      this._publiclyAccessible = config.publiclyAccessible;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address - computed: true, optional: false, required: false
    public get address() {
      return this.getStringAttribute('address');
    }

    // apply_immediately - computed: true, optional: true, required: false
    private _applyImmediately?: boolean | cdktf.IResolvable | undefined; 
    public get applyImmediately() {
      return this.getBooleanAttribute('apply_immediately') as any;
    }
    public set applyImmediately(value: boolean | cdktf.IResolvable | undefined) {
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
    private _autoMinorVersionUpgrade?: boolean | cdktf.IResolvable | undefined; 
    public get autoMinorVersionUpgrade() {
      return this.getBooleanAttribute('auto_minor_version_upgrade') as any;
    }
    public set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable | undefined) {
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
    private _availabilityZone?: string | undefined; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string | undefined) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
      return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
      this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
      return this._clusterIdentifier
    }

    // dbi_resource_id - computed: true, optional: false, required: false
    public get dbiResourceId() {
      return this.getStringAttribute('dbi_resource_id');
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }

    // engine - computed: false, optional: true, required: false
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
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
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string | undefined; 
    public get identifier() {
      return this.getStringAttribute('identifier');
    }
    public set identifier(value: string | undefined) {
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
    private _identifierPrefix?: string | undefined; 
    public get identifierPrefix() {
      return this.getStringAttribute('identifier_prefix');
    }
    public set identifierPrefix(value: string | undefined) {
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
    private _instanceClass?: string; 
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

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }

    // neptune_parameter_group_name - computed: false, optional: true, required: false
    private _neptuneParameterGroupName?: string | undefined; 
    public get neptuneParameterGroupName() {
      return this.getStringAttribute('neptune_parameter_group_name');
    }
    public set neptuneParameterGroupName(value: string | undefined) {
      this._neptuneParameterGroupName = value;
    }
    public resetNeptuneParameterGroupName() {
      this._neptuneParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neptuneParameterGroupNameInput() {
      return this._neptuneParameterGroupName
    }

    // neptune_subnet_group_name - computed: true, optional: true, required: false
    private _neptuneSubnetGroupName?: string | undefined; 
    public get neptuneSubnetGroupName() {
      return this.getStringAttribute('neptune_subnet_group_name');
    }
    public set neptuneSubnetGroupName(value: string | undefined) {
      this._neptuneSubnetGroupName = value;
    }
    public resetNeptuneSubnetGroupName() {
      this._neptuneSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neptuneSubnetGroupNameInput() {
      return this._neptuneSubnetGroupName
    }

    // port - computed: false, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
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
    private _preferredBackupWindow?: string | undefined; 
    public get preferredBackupWindow() {
      return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string | undefined) {
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
    private _preferredMaintenanceWindow?: string | undefined; 
    public get preferredMaintenanceWindow() {
      return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string | undefined) {
      this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
      this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
      return this._preferredMaintenanceWindow
    }

    // promotion_tier - computed: false, optional: true, required: false
    private _promotionTier?: number | undefined; 
    public get promotionTier() {
      return this.getNumberAttribute('promotion_tier');
    }
    public set promotionTier(value: number | undefined) {
      this._promotionTier = value;
    }
    public resetPromotionTier() {
      this._promotionTier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promotionTierInput() {
      return this._promotionTier
    }

    // publicly_accessible - computed: false, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktf.IResolvable | undefined; 
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
    }
    public set publiclyAccessible(value: boolean | cdktf.IResolvable | undefined) {
      this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
      this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
      return this._publiclyAccessible
    }

    // storage_encrypted - computed: true, optional: false, required: false
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // writer - computed: true, optional: false, required: false
    public get writer() {
      return this.getBooleanAttribute('writer') as any;
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: NeptuneClusterInstanceTimeouts | undefined; 
    private __timeoutsOutput = new NeptuneClusterInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: NeptuneClusterInstanceTimeouts | undefined) {
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
        auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        identifier: cdktf.stringToTerraform(this._identifier),
        identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
        instance_class: cdktf.stringToTerraform(this._instanceClass),
        neptune_parameter_group_name: cdktf.stringToTerraform(this._neptuneParameterGroupName),
        neptune_subnet_group_name: cdktf.stringToTerraform(this._neptuneSubnetGroupName),
        port: cdktf.numberToTerraform(this._port),
        preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
        preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
        promotion_tier: cdktf.numberToTerraform(this._promotionTier),
        publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: neptuneClusterInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface NeptuneClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#description NeptuneClusterParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#family NeptuneClusterParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#name NeptuneClusterParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#name_prefix NeptuneClusterParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#tags NeptuneClusterParameterGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#tags_all NeptuneClusterParameterGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#parameter NeptuneClusterParameterGroup#parameter}
    */
    readonly parameter?: NeptuneClusterParameterGroupParameter[];
  }
  export interface NeptuneClusterParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#apply_method NeptuneClusterParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#name NeptuneClusterParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html#value NeptuneClusterParameterGroup#value}
    */
    readonly value: string;
  }

  function neptuneClusterParameterGroupParameterToTerraform(struct?: NeptuneClusterParameterGroupParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      apply_method: cdktf.stringToTerraform(struct!.applyMethod),
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html aws_neptune_cluster_parameter_group}
  */
  export class NeptuneClusterParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_cluster_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html aws_neptune_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: NeptuneClusterParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_cluster_parameter_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._family = config.family;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._parameter = config.parameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // family - computed: false, optional: false, required: true
    private _family?: string; 
    public get family() {
      return this.getStringAttribute('family');
    }
    public set family(value: string) {
      this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    public get familyInput() {
      return this._family
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // parameter - computed: false, optional: true, required: false
    private _parameter?: NeptuneClusterParameterGroupParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: NeptuneClusterParameterGroupParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        family: cdktf.stringToTerraform(this._family),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        parameter: cdktf.listMapper(neptuneClusterParameterGroupParameterToTerraform)(this._parameter),
      };
    }
  }
  export interface NeptuneClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#db_cluster_identifier NeptuneClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#db_cluster_snapshot_identifier NeptuneClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#timeouts NeptuneClusterSnapshot#timeouts}
    */
    readonly timeouts?: NeptuneClusterSnapshotTimeouts;
  }
  export interface NeptuneClusterSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html#create NeptuneClusterSnapshot#create}
    */
    readonly create?: string;
  }

  function neptuneClusterSnapshotTimeoutsToTerraform(struct?: NeptuneClusterSnapshotTimeoutsOutputReference | NeptuneClusterSnapshotTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export class NeptuneClusterSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html aws_neptune_cluster_snapshot}
  */
  export class NeptuneClusterSnapshot extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_cluster_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html aws_neptune_cluster_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterSnapshotConfig
    */
    public constructor(scope: Construct, id: string, config: NeptuneClusterSnapshotConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_cluster_snapshot',
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

    // allocated_storage - computed: true, optional: false, required: false
    public get allocatedStorage() {
      return this.getNumberAttribute('allocated_storage');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // db_cluster_identifier - computed: false, optional: false, required: true
    private _dbClusterIdentifier?: string; 
    public get dbClusterIdentifier() {
      return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string) {
      this._dbClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
      return this._dbClusterIdentifier
    }

    // db_cluster_snapshot_arn - computed: true, optional: false, required: false
    public get dbClusterSnapshotArn() {
      return this.getStringAttribute('db_cluster_snapshot_arn');
    }

    // db_cluster_snapshot_identifier - computed: false, optional: false, required: true
    private _dbClusterSnapshotIdentifier?: string; 
    public get dbClusterSnapshotIdentifier() {
      return this.getStringAttribute('db_cluster_snapshot_identifier');
    }
    public set dbClusterSnapshotIdentifier(value: string) {
      this._dbClusterSnapshotIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterSnapshotIdentifierInput() {
      return this._dbClusterSnapshotIdentifier
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

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // license_model - computed: true, optional: false, required: false
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // snapshot_type - computed: true, optional: false, required: false
    public get snapshotType() {
      return this.getStringAttribute('snapshot_type');
    }

    // source_db_cluster_snapshot_arn - computed: true, optional: false, required: false
    public get sourceDbClusterSnapshotArn() {
      return this.getStringAttribute('source_db_cluster_snapshot_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // storage_encrypted - computed: true, optional: false, required: false
    public get storageEncrypted() {
      return this.getBooleanAttribute('storage_encrypted') as any;
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: NeptuneClusterSnapshotTimeouts | undefined; 
    private __timeoutsOutput = new NeptuneClusterSnapshotTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: NeptuneClusterSnapshotTimeouts | undefined) {
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
        db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
        db_cluster_snapshot_identifier: cdktf.stringToTerraform(this._dbClusterSnapshotIdentifier),
        timeouts: neptuneClusterSnapshotTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface NeptuneEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#enabled NeptuneEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#event_categories NeptuneEventSubscription#event_categories}
    */
    readonly eventCategories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#name NeptuneEventSubscription#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#name_prefix NeptuneEventSubscription#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#sns_topic_arn NeptuneEventSubscription#sns_topic_arn}
    */
    readonly snsTopicArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#source_ids NeptuneEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#source_type NeptuneEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#tags NeptuneEventSubscription#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#tags_all NeptuneEventSubscription#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#timeouts NeptuneEventSubscription#timeouts}
    */
    readonly timeouts?: NeptuneEventSubscriptionTimeouts;
  }
  export interface NeptuneEventSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#create NeptuneEventSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#delete NeptuneEventSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html#update NeptuneEventSubscription#update}
    */
    readonly update?: string;
  }

  function neptuneEventSubscriptionTimeoutsToTerraform(struct?: NeptuneEventSubscriptionTimeoutsOutputReference | NeptuneEventSubscriptionTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class NeptuneEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html aws_neptune_event_subscription}
  */
  export class NeptuneEventSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_event_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html aws_neptune_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneEventSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: NeptuneEventSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_event_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabled = config.enabled;
      this._eventCategories = config.eventCategories;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._snsTopicArn = config.snsTopicArn;
      this._sourceIds = config.sourceIds;
      this._sourceType = config.sourceType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // customer_aws_id - computed: true, optional: false, required: false
    public get customerAwsId() {
      return this.getStringAttribute('customer_aws_id');
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // event_categories - computed: false, optional: true, required: false
    private _eventCategories?: string[] | undefined; 
    public get eventCategories() {
      return this.getListAttribute('event_categories');
    }
    public set eventCategories(value: string[] | undefined) {
      this._eventCategories = value;
    }
    public resetEventCategories() {
      this._eventCategories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventCategoriesInput() {
      return this._eventCategories
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // sns_topic_arn - computed: false, optional: false, required: true
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
      this._snsTopicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
      return this._snsTopicArn
    }

    // source_ids - computed: false, optional: true, required: false
    private _sourceIds?: string[] | undefined; 
    public get sourceIds() {
      return this.getListAttribute('source_ids');
    }
    public set sourceIds(value: string[] | undefined) {
      this._sourceIds = value;
    }
    public resetSourceIds() {
      this._sourceIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIdsInput() {
      return this._sourceIds
    }

    // source_type - computed: false, optional: true, required: false
    private _sourceType?: string | undefined; 
    public get sourceType() {
      return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string | undefined) {
      this._sourceType = value;
    }
    public resetSourceType() {
      this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
      return this._sourceType
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: NeptuneEventSubscriptionTimeouts | undefined; 
    private __timeoutsOutput = new NeptuneEventSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: NeptuneEventSubscriptionTimeouts | undefined) {
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
        enabled: cdktf.booleanToTerraform(this._enabled),
        event_categories: cdktf.listMapper(cdktf.stringToTerraform)(this._eventCategories),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
        source_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceIds),
        source_type: cdktf.stringToTerraform(this._sourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: neptuneEventSubscriptionTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface NeptuneParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#description NeptuneParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#family NeptuneParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#name NeptuneParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#tags NeptuneParameterGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#tags_all NeptuneParameterGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#parameter NeptuneParameterGroup#parameter}
    */
    readonly parameter?: NeptuneParameterGroupParameter[];
  }
  export interface NeptuneParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#apply_method NeptuneParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#name NeptuneParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html#value NeptuneParameterGroup#value}
    */
    readonly value: string;
  }

  function neptuneParameterGroupParameterToTerraform(struct?: NeptuneParameterGroupParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      apply_method: cdktf.stringToTerraform(struct!.applyMethod),
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html aws_neptune_parameter_group}
  */
  export class NeptuneParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html aws_neptune_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: NeptuneParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_parameter_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._family = config.family;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._parameter = config.parameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // family - computed: false, optional: false, required: true
    private _family?: string; 
    public get family() {
      return this.getStringAttribute('family');
    }
    public set family(value: string) {
      this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    public get familyInput() {
      return this._family
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // parameter - computed: false, optional: true, required: false
    private _parameter?: NeptuneParameterGroupParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: NeptuneParameterGroupParameter[] | undefined) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        family: cdktf.stringToTerraform(this._family),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        parameter: cdktf.listMapper(neptuneParameterGroupParameterToTerraform)(this._parameter),
      };
    }
  }
  export interface NeptuneSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html#description NeptuneSubnetGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html#name NeptuneSubnetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html#name_prefix NeptuneSubnetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html#subnet_ids NeptuneSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html#tags NeptuneSubnetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html#tags_all NeptuneSubnetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html aws_neptune_subnet_group}
  */
  export class NeptuneSubnetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_subnet_group.html aws_neptune_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: NeptuneSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_subnet_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsNeptuneEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#engine DataAwsNeptuneEngineVersion#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}
    */
    readonly parameterGroupFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#version DataAwsNeptuneEngineVersion#version}
    */
    readonly version?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version}
  */
  export class DataAwsNeptuneEngineVersion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_engine_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNeptuneEngineVersionConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsNeptuneEngineVersionConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_engine_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._engine = config.engine;
      this._parameterGroupFamily = config.parameterGroupFamily;
      this._preferredVersions = config.preferredVersions;
      this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // engine - computed: false, optional: true, required: false
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
      this._engine = value;
    }
    public resetEngine() {
      this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
      return this._engine
    }

    // engine_description - computed: true, optional: false, required: false
    public get engineDescription() {
      return this.getStringAttribute('engine_description');
    }

    // exportable_log_types - computed: true, optional: false, required: false
    public get exportableLogTypes() {
      return this.getListAttribute('exportable_log_types');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // parameter_group_family - computed: true, optional: true, required: false
    private _parameterGroupFamily?: string | undefined; 
    public get parameterGroupFamily() {
      return this.getStringAttribute('parameter_group_family');
    }
    public set parameterGroupFamily(value: string | undefined) {
      this._parameterGroupFamily = value;
    }
    public resetParameterGroupFamily() {
      this._parameterGroupFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterGroupFamilyInput() {
      return this._parameterGroupFamily
    }

    // preferred_versions - computed: false, optional: true, required: false
    private _preferredVersions?: string[] | undefined; 
    public get preferredVersions() {
      return this.getListAttribute('preferred_versions');
    }
    public set preferredVersions(value: string[] | undefined) {
      this._preferredVersions = value;
    }
    public resetPreferredVersions() {
      this._preferredVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredVersionsInput() {
      return this._preferredVersions
    }

    // supported_timezones - computed: true, optional: false, required: false
    public get supportedTimezones() {
      return this.getListAttribute('supported_timezones');
    }

    // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
    public get supportsLogExportsToCloudwatch() {
      return this.getBooleanAttribute('supports_log_exports_to_cloudwatch') as any;
    }

    // supports_read_replica - computed: true, optional: false, required: false
    public get supportsReadReplica() {
      return this.getBooleanAttribute('supports_read_replica') as any;
    }

    // valid_upgrade_targets - computed: true, optional: false, required: false
    public get validUpgradeTargets() {
      return this.getListAttribute('valid_upgrade_targets');
    }

    // version - computed: true, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // version_description - computed: true, optional: false, required: false
    public get versionDescription() {
      return this.getStringAttribute('version_description');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        engine: cdktf.stringToTerraform(this._engine),
        parameter_group_family: cdktf.stringToTerraform(this._parameterGroupFamily),
        preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
  export interface DataAwsNeptuneOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#engine DataAwsNeptuneOrderableDbInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}
    */
    readonly instanceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#license_model DataAwsNeptuneOrderableDbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}
    */
    readonly preferredInstanceClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#vpc DataAwsNeptuneOrderableDbInstance#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html aws_neptune_orderable_db_instance}
  */
  export class DataAwsNeptuneOrderableDbInstance extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_neptune_orderable_db_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html aws_neptune_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNeptuneOrderableDbInstanceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsNeptuneOrderableDbInstanceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_neptune_orderable_db_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
      this._instanceClass = config.instanceClass;
      this._licenseModel = config.licenseModel;
      this._preferredInstanceClasses = config.preferredInstanceClasses;
      this._vpc = config.vpc;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // engine - computed: false, optional: true, required: false
    private _engine?: string | undefined; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string | undefined) {
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
    private _engineVersion?: string | undefined; 
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string | undefined) {
      this._engineVersion = value;
    }
    public resetEngineVersion() {
      this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
      return this._engineVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_class - computed: true, optional: true, required: false
    private _instanceClass?: string | undefined; 
    public get instanceClass() {
      return this.getStringAttribute('instance_class');
    }
    public set instanceClass(value: string | undefined) {
      this._instanceClass = value;
    }
    public resetInstanceClass() {
      this._instanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceClassInput() {
      return this._instanceClass
    }

    // license_model - computed: false, optional: true, required: false
    private _licenseModel?: string | undefined; 
    public get licenseModel() {
      return this.getStringAttribute('license_model');
    }
    public set licenseModel(value: string | undefined) {
      this._licenseModel = value;
    }
    public resetLicenseModel() {
      this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseModelInput() {
      return this._licenseModel
    }

    // max_iops_per_db_instance - computed: true, optional: false, required: false
    public get maxIopsPerDbInstance() {
      return this.getNumberAttribute('max_iops_per_db_instance');
    }

    // max_iops_per_gib - computed: true, optional: false, required: false
    public get maxIopsPerGib() {
      return this.getNumberAttribute('max_iops_per_gib');
    }

    // max_storage_size - computed: true, optional: false, required: false
    public get maxStorageSize() {
      return this.getNumberAttribute('max_storage_size');
    }

    // min_iops_per_db_instance - computed: true, optional: false, required: false
    public get minIopsPerDbInstance() {
      return this.getNumberAttribute('min_iops_per_db_instance');
    }

    // min_iops_per_gib - computed: true, optional: false, required: false
    public get minIopsPerGib() {
      return this.getNumberAttribute('min_iops_per_gib');
    }

    // min_storage_size - computed: true, optional: false, required: false
    public get minStorageSize() {
      return this.getNumberAttribute('min_storage_size');
    }

    // multi_az_capable - computed: true, optional: false, required: false
    public get multiAzCapable() {
      return this.getBooleanAttribute('multi_az_capable') as any;
    }

    // preferred_instance_classes - computed: false, optional: true, required: false
    private _preferredInstanceClasses?: string[] | undefined; 
    public get preferredInstanceClasses() {
      return this.getListAttribute('preferred_instance_classes');
    }
    public set preferredInstanceClasses(value: string[] | undefined) {
      this._preferredInstanceClasses = value;
    }
    public resetPreferredInstanceClasses() {
      this._preferredInstanceClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredInstanceClassesInput() {
      return this._preferredInstanceClasses
    }

    // read_replica_capable - computed: true, optional: false, required: false
    public get readReplicaCapable() {
      return this.getBooleanAttribute('read_replica_capable') as any;
    }

    // storage_type - computed: true, optional: false, required: false
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }

    // supports_enhanced_monitoring - computed: true, optional: false, required: false
    public get supportsEnhancedMonitoring() {
      return this.getBooleanAttribute('supports_enhanced_monitoring') as any;
    }

    // supports_iam_database_authentication - computed: true, optional: false, required: false
    public get supportsIamDatabaseAuthentication() {
      return this.getBooleanAttribute('supports_iam_database_authentication') as any;
    }

    // supports_iops - computed: true, optional: false, required: false
    public get supportsIops() {
      return this.getBooleanAttribute('supports_iops') as any;
    }

    // supports_performance_insights - computed: true, optional: false, required: false
    public get supportsPerformanceInsights() {
      return this.getBooleanAttribute('supports_performance_insights') as any;
    }

    // supports_storage_encryption - computed: true, optional: false, required: false
    public get supportsStorageEncryption() {
      return this.getBooleanAttribute('supports_storage_encryption') as any;
    }

    // vpc - computed: true, optional: true, required: false
    private _vpc?: boolean | cdktf.IResolvable | undefined; 
    public get vpc() {
      return this.getBooleanAttribute('vpc') as any;
    }
    public set vpc(value: boolean | cdktf.IResolvable | undefined) {
      this._vpc = value;
    }
    public resetVpc() {
      this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
      return this._vpc
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        instance_class: cdktf.stringToTerraform(this._instanceClass),
        license_model: cdktf.stringToTerraform(this._licenseModel),
        preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
        vpc: cdktf.booleanToTerraform(this._vpc),
      };
    }
  }
}
