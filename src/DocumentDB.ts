// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DocumentDB
*/
export namespace DocumentDB {
  export interface DocdbClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#apply_immediately DocdbCluster#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#availability_zones DocdbCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#backup_retention_period DocdbCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_identifier DocdbCluster#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}
    */
    readonly clusterIdentifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_members DocdbCluster#cluster_members}
    */
    readonly clusterMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}
    */
    readonly dbClusterParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#db_subnet_group_name DocdbCluster#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#deletion_protection DocdbCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}
    */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#engine DocdbCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#engine_version DocdbCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#kms_key_id DocdbCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#master_password DocdbCluster#master_password}
    */
    readonly masterPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#master_username DocdbCluster#master_username}
    */
    readonly masterUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#port DocdbCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#preferred_backup_window DocdbCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#skip_final_snapshot DocdbCluster#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#snapshot_identifier DocdbCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#storage_encrypted DocdbCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#tags DocdbCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#tags_all DocdbCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#timeouts DocdbCluster#timeouts}
    */
    readonly timeouts?: DocdbClusterTimeouts;
  }
  export interface DocdbClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#create DocdbCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#delete DocdbCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#update DocdbCluster#update}
    */
    readonly update?: string;
  }

  function docdbClusterTimeoutsToTerraform(struct?: DocdbClusterTimeoutsOutputReference | DocdbClusterTimeouts): any {
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

  export class DocdbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster}
  */
  export class DocdbCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_docdb_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterConfig = {}
    */
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

    // cluster_members - computed: true, optional: true, required: false
    private _clusterMembers?: string[] | undefined; 
    public get clusterMembers() {
      return this.getListAttribute('cluster_members');
    }
    public set clusterMembers(value: string[] | undefined) {
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

    // db_cluster_parameter_group_name - computed: true, optional: true, required: false
    private _dbClusterParameterGroupName?: string | undefined; 
    public get dbClusterParameterGroupName() {
      return this.getStringAttribute('db_cluster_parameter_group_name');
    }
    public set dbClusterParameterGroupName(value: string | undefined) {
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
    private _dbSubnetGroupName?: string | undefined; 
    public get dbSubnetGroupName() {
      return this.getStringAttribute('db_subnet_group_name');
    }
    public set dbSubnetGroupName(value: string | undefined) {
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

    // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
    private _enabledCloudwatchLogsExports?: string[] | undefined; 
    public get enabledCloudwatchLogsExports() {
      return this.getListAttribute('enabled_cloudwatch_logs_exports');
    }
    public set enabledCloudwatchLogsExports(value: string[] | undefined) {
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
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
    private _masterPassword?: string | undefined; 
    public get masterPassword() {
      return this.getStringAttribute('master_password');
    }
    public set masterPassword(value: string | undefined) {
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
    private _masterUsername?: string | undefined; 
    public get masterUsername() {
      return this.getStringAttribute('master_username');
    }
    public set masterUsername(value: string | undefined) {
      this._masterUsername = value;
    }
    public resetMasterUsername() {
      this._masterUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUsernameInput() {
      return this._masterUsername
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
    private _timeouts?: DocdbClusterTimeouts | undefined; 
    private __timeoutsOutput = new DocdbClusterTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DocdbClusterTimeouts | undefined) {
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
        cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
        db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
        db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
        deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
        enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        master_password: cdktf.stringToTerraform(this._masterPassword),
        master_username: cdktf.stringToTerraform(this._masterUsername),
        port: cdktf.numberToTerraform(this._port),
        preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
        preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
        skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
        snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
        storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
        timeouts: docdbClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DocdbClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#apply_immediately DocdbClusterInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#availability_zone DocdbClusterInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}
    */
    readonly caCertIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#cluster_identifier DocdbClusterInstance#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#engine DocdbClusterInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#identifier DocdbClusterInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#identifier_prefix DocdbClusterInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#instance_class DocdbClusterInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#promotion_tier DocdbClusterInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#tags DocdbClusterInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#tags_all DocdbClusterInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#timeouts DocdbClusterInstance#timeouts}
    */
    readonly timeouts?: DocdbClusterInstanceTimeouts;
  }
  export interface DocdbClusterInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#create DocdbClusterInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#delete DocdbClusterInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#update DocdbClusterInstance#update}
    */
    readonly update?: string;
  }

  function docdbClusterInstanceTimeoutsToTerraform(struct?: DocdbClusterInstanceTimeoutsOutputReference | DocdbClusterInstanceTimeouts): any {
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

  export class DocdbClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance}
  */
  export class DocdbClusterInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_docdb_cluster_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: DocdbClusterInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_docdb_cluster_instance',
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
      this._caCertIdentifier = config.caCertIdentifier;
      this._clusterIdentifier = config.clusterIdentifier;
      this._engine = config.engine;
      this._identifier = config.identifier;
      this._identifierPrefix = config.identifierPrefix;
      this._instanceClass = config.instanceClass;
      this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
      this._promotionTier = config.promotionTier;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
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

    // ca_cert_identifier - computed: true, optional: true, required: false
    private _caCertIdentifier?: string | undefined; 
    public get caCertIdentifier() {
      return this.getStringAttribute('ca_cert_identifier');
    }
    public set caCertIdentifier(value: string | undefined) {
      this._caCertIdentifier = value;
    }
    public resetCaCertIdentifier() {
      this._caCertIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertIdentifierInput() {
      return this._caCertIdentifier
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

    // db_subnet_group_name - computed: true, optional: false, required: false
    public get dbSubnetGroupName() {
      return this.getStringAttribute('db_subnet_group_name');
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

    // engine_version - computed: true, optional: false, required: false
    public get engineVersion() {
      return this.getStringAttribute('engine_version');
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

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // preferred_backup_window - computed: true, optional: false, required: false
    public get preferredBackupWindow() {
      return this.getStringAttribute('preferred_backup_window');
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

    // publicly_accessible - computed: true, optional: false, required: false
    public get publiclyAccessible() {
      return this.getBooleanAttribute('publicly_accessible') as any;
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
    private _timeouts?: DocdbClusterInstanceTimeouts | undefined; 
    private __timeoutsOutput = new DocdbClusterInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DocdbClusterInstanceTimeouts | undefined) {
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
        ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
        cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
        engine: cdktf.stringToTerraform(this._engine),
        identifier: cdktf.stringToTerraform(this._identifier),
        identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
        instance_class: cdktf.stringToTerraform(this._instanceClass),
        preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
        promotion_tier: cdktf.numberToTerraform(this._promotionTier),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: docdbClusterInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DocdbClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#description DocdbClusterParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#family DocdbClusterParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#name DocdbClusterParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#name_prefix DocdbClusterParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#tags DocdbClusterParameterGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#tags_all DocdbClusterParameterGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#parameter DocdbClusterParameterGroup#parameter}
    */
    readonly parameter?: DocdbClusterParameterGroupParameter[];
  }
  export interface DocdbClusterParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#apply_method DocdbClusterParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#name DocdbClusterParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html#value DocdbClusterParameterGroup#value}
    */
    readonly value: string;
  }

  function docdbClusterParameterGroupParameterToTerraform(struct?: DocdbClusterParameterGroupParameter): any {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html aws_docdb_cluster_parameter_group}
  */
  export class DocdbClusterParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_docdb_cluster_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html aws_docdb_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DocdbClusterParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_docdb_cluster_parameter_group',
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
    private _parameter?: DocdbClusterParameterGroupParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: DocdbClusterParameterGroupParameter[] | undefined) {
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
        parameter: cdktf.listMapper(docdbClusterParameterGroupParameterToTerraform)(this._parameter),
      };
    }
  }
  export interface DocdbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#db_cluster_identifier DocdbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#db_cluster_snapshot_identifier DocdbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#timeouts DocdbClusterSnapshot#timeouts}
    */
    readonly timeouts?: DocdbClusterSnapshotTimeouts;
  }
  export interface DocdbClusterSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html#create DocdbClusterSnapshot#create}
    */
    readonly create?: string;
  }

  function docdbClusterSnapshotTimeoutsToTerraform(struct?: DocdbClusterSnapshotTimeoutsOutputReference | DocdbClusterSnapshotTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export class DocdbClusterSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html aws_docdb_cluster_snapshot}
  */
  export class DocdbClusterSnapshot extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_docdb_cluster_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html aws_docdb_cluster_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterSnapshotConfig
    */
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
    private _timeouts?: DocdbClusterSnapshotTimeouts | undefined; 
    private __timeoutsOutput = new DocdbClusterSnapshotTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DocdbClusterSnapshotTimeouts | undefined) {
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
        timeouts: docdbClusterSnapshotTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DocdbSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html#description DocdbSubnetGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html#name DocdbSubnetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html#name_prefix DocdbSubnetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html#subnet_ids DocdbSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html#tags DocdbSubnetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html#tags_all DocdbSubnetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html aws_docdb_subnet_group}
  */
  export class DocdbSubnetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_docdb_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_subnet_group.html aws_docdb_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DocdbSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_docdb_subnet_group',
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
  export interface DataAwsDocdbEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#engine DataAwsDocdbEngineVersion#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#parameter_group_family DataAwsDocdbEngineVersion#parameter_group_family}
    */
    readonly parameterGroupFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#preferred_versions DataAwsDocdbEngineVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html#version DataAwsDocdbEngineVersion#version}
    */
    readonly version?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html aws_docdb_engine_version}
  */
  export class DataAwsDocdbEngineVersion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_docdb_engine_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version.html aws_docdb_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDocdbEngineVersionConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsDocdbEngineVersionConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_docdb_engine_version',
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

    // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
    public get supportsLogExportsToCloudwatch() {
      return this.getBooleanAttribute('supports_log_exports_to_cloudwatch') as any;
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
  export interface DataAwsDocdbOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#engine DataAwsDocdbOrderableDbInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#engine_version DataAwsDocdbOrderableDbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#instance_class DataAwsDocdbOrderableDbInstance#instance_class}
    */
    readonly instanceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#license_model DataAwsDocdbOrderableDbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}
    */
    readonly preferredInstanceClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html#vpc DataAwsDocdbOrderableDbInstance#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html aws_docdb_orderable_db_instance}
  */
  export class DataAwsDocdbOrderableDbInstance extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_docdb_orderable_db_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/docdb_orderable_db_instance.html aws_docdb_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDocdbOrderableDbInstanceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsDocdbOrderableDbInstanceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_docdb_orderable_db_instance',
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
