// https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly atRestEncryptionEnabled?: boolean;
  readonly authToken?: string;
  readonly autoMinorVersionUpgrade?: boolean;
  readonly automaticFailoverEnabled?: boolean;
  readonly availabilityZones?: string[];
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly kmsKeyId?: string;
  readonly maintenanceWindow?: string;
  readonly nodeType?: string;
  readonly notificationTopicArn?: string;
  readonly numberCacheClusters?: number;
  readonly parameterGroupName?: string;
  readonly port?: number;
  readonly replicationGroupDescription: string;
  readonly replicationGroupId: string;
  readonly securityGroupIds?: string[];
  readonly securityGroupNames?: string[];
  readonly snapshotArns?: string[];
  readonly snapshotName?: string;
  readonly snapshotRetentionLimit?: number;
  readonly snapshotWindow?: string;
  readonly subnetGroupName?: string;
  readonly tags?: { [key: string]: string };
  readonly transitEncryptionEnabled?: boolean;
  /** cluster_mode block */
  readonly clusterMode?: ElasticacheReplicationGroupClusterMode[];
  /** timeouts block */
  readonly timeouts?: ElasticacheReplicationGroupTimeouts;
}
export interface ElasticacheReplicationGroupClusterMode {
  readonly numNodeGroups: number;
  readonly replicasPerNodeGroup: number;
}

function elasticacheReplicationGroupClusterModeToTerraform(struct?: ElasticacheReplicationGroupClusterMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_node_groups: cdktf.numberToTerraform(struct!.numNodeGroups),
    replicas_per_node_group: cdktf.numberToTerraform(struct!.replicasPerNodeGroup),
  }
}

export interface ElasticacheReplicationGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function elasticacheReplicationGroupTimeoutsToTerraform(struct?: ElasticacheReplicationGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ElasticacheReplicationGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticacheReplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_replication_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applyImmediately = config.applyImmediately;
    this._atRestEncryptionEnabled = config.atRestEncryptionEnabled;
    this._authToken = config.authToken;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._automaticFailoverEnabled = config.automaticFailoverEnabled;
    this._availabilityZones = config.availabilityZones;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._kmsKeyId = config.kmsKeyId;
    this._maintenanceWindow = config.maintenanceWindow;
    this._nodeType = config.nodeType;
    this._notificationTopicArn = config.notificationTopicArn;
    this._numberCacheClusters = config.numberCacheClusters;
    this._parameterGroupName = config.parameterGroupName;
    this._port = config.port;
    this._replicationGroupDescription = config.replicationGroupDescription;
    this._replicationGroupId = config.replicationGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._securityGroupNames = config.securityGroupNames;
    this._snapshotArns = config.snapshotArns;
    this._snapshotName = config.snapshotName;
    this._snapshotRetentionLimit = config.snapshotRetentionLimit;
    this._snapshotWindow = config.snapshotWindow;
    this._subnetGroupName = config.subnetGroupName;
    this._tags = config.tags;
    this._transitEncryptionEnabled = config.transitEncryptionEnabled;
    this._clusterMode = config.clusterMode;
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

  // at_rest_encryption_enabled - computed: false, optional: true, required: false
  private _atRestEncryptionEnabled?: boolean;
  public get atRestEncryptionEnabled() {
    return this.getBooleanAttribute('at_rest_encryption_enabled');
  }
  public set atRestEncryptionEnabled(value: boolean ) {
    this._atRestEncryptionEnabled = value;
  }
  public resetAtRestEncryptionEnabled() {
    this._atRestEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atRestEncryptionEnabledInput() {
    return this._atRestEncryptionEnabled
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string;
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string ) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean ) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade
  }

  // automatic_failover_enabled - computed: false, optional: true, required: false
  private _automaticFailoverEnabled?: boolean;
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }
  public set automaticFailoverEnabled(value: boolean ) {
    this._automaticFailoverEnabled = value;
  }
  public resetAutomaticFailoverEnabled() {
    this._automaticFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFailoverEnabledInput() {
    return this._automaticFailoverEnabled
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] ) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // configuration_endpoint_address - computed: true, optional: false, required: false
  public get configurationEndpointAddress() {
    return this.getStringAttribute('configuration_endpoint_address');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
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

  // member_clusters - computed: true, optional: false, required: false
  public get memberClusters() {
    return this.getListAttribute('member_clusters');
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string;
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string;
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string ) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn
  }

  // number_cache_clusters - computed: true, optional: true, required: false
  private _numberCacheClusters?: number;
  public get numberCacheClusters() {
    return this.getNumberAttribute('number_cache_clusters');
  }
  public set numberCacheClusters(value: number) {
    this._numberCacheClusters = value;
  }
  public resetNumberCacheClusters() {
    this._numberCacheClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberCacheClustersInput() {
    return this._numberCacheClusters
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

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // primary_endpoint_address - computed: true, optional: false, required: false
  public get primaryEndpointAddress() {
    return this.getStringAttribute('primary_endpoint_address');
  }

  // replication_group_description - computed: false, optional: false, required: true
  private _replicationGroupDescription: string;
  public get replicationGroupDescription() {
    return this.getStringAttribute('replication_group_description');
  }
  public set replicationGroupDescription(value: string) {
    this._replicationGroupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupDescriptionInput() {
    return this._replicationGroupDescription
  }

  // replication_group_id - computed: false, optional: false, required: true
  private _replicationGroupId: string;
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationGroupIdInput() {
    return this._replicationGroupId
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // security_group_names - computed: true, optional: true, required: false
  private _securityGroupNames?: string[];
  public get securityGroupNames() {
    return this.getListAttribute('security_group_names');
  }
  public set securityGroupNames(value: string[]) {
    this._securityGroupNames = value;
  }
  public resetSecurityGroupNames() {
    this._securityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNamesInput() {
    return this._securityGroupNames
  }

  // snapshot_arns - computed: false, optional: true, required: false
  private _snapshotArns?: string[];
  public get snapshotArns() {
    return this.getListAttribute('snapshot_arns');
  }
  public set snapshotArns(value: string[] ) {
    this._snapshotArns = value;
  }
  public resetSnapshotArns() {
    this._snapshotArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotArnsInput() {
    return this._snapshotArns
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string;
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string ) {
    this._snapshotName = value;
  }
  public resetSnapshotName() {
    this._snapshotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName
  }

  // snapshot_retention_limit - computed: false, optional: true, required: false
  private _snapshotRetentionLimit?: number;
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }
  public set snapshotRetentionLimit(value: number ) {
    this._snapshotRetentionLimit = value;
  }
  public resetSnapshotRetentionLimit() {
    this._snapshotRetentionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionLimitInput() {
    return this._snapshotRetentionLimit
  }

  // snapshot_window - computed: true, optional: true, required: false
  private _snapshotWindow?: string;
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }
  public set snapshotWindow(value: string) {
    this._snapshotWindow = value;
  }
  public resetSnapshotWindow() {
    this._snapshotWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotWindowInput() {
    return this._snapshotWindow
  }

  // subnet_group_name - computed: true, optional: true, required: false
  private _subnetGroupName?: string;
  public get subnetGroupName() {
    return this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string) {
    this._subnetGroupName = value;
  }
  public resetSubnetGroupName() {
    this._subnetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupNameInput() {
    return this._subnetGroupName
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

  // transit_encryption_enabled - computed: false, optional: true, required: false
  private _transitEncryptionEnabled?: boolean;
  public get transitEncryptionEnabled() {
    return this.getBooleanAttribute('transit_encryption_enabled');
  }
  public set transitEncryptionEnabled(value: boolean ) {
    this._transitEncryptionEnabled = value;
  }
  public resetTransitEncryptionEnabled() {
    this._transitEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionEnabledInput() {
    return this._transitEncryptionEnabled
  }

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: ElasticacheReplicationGroupClusterMode[];
  public get clusterMode() {
    return this.interpolationForAttribute('cluster_mode') as any;
  }
  public set clusterMode(value: ElasticacheReplicationGroupClusterMode[] ) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ElasticacheReplicationGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ElasticacheReplicationGroupTimeouts ) {
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
      at_rest_encryption_enabled: cdktf.booleanToTerraform(this._atRestEncryptionEnabled),
      auth_token: cdktf.stringToTerraform(this._authToken),
      auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
      automatic_failover_enabled: cdktf.booleanToTerraform(this._automaticFailoverEnabled),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
      node_type: cdktf.stringToTerraform(this._nodeType),
      notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
      number_cache_clusters: cdktf.numberToTerraform(this._numberCacheClusters),
      parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
      port: cdktf.numberToTerraform(this._port),
      replication_group_description: cdktf.stringToTerraform(this._replicationGroupDescription),
      replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
      snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotArns),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
      snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
      subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      transit_encryption_enabled: cdktf.booleanToTerraform(this._transitEncryptionEnabled),
      cluster_mode: cdktf.listMapper(elasticacheReplicationGroupClusterModeToTerraform)(this._clusterMode),
      timeouts: elasticacheReplicationGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
