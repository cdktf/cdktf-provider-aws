// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS ElastiCache
*/
export namespace ElastiCache {
  export interface ElasticacheClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#apply_immediately ElasticacheCluster#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#availability_zone ElasticacheCluster#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#az_mode ElasticacheCluster#az_mode}
    */
    readonly azMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#cluster_id ElasticacheCluster#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#engine ElasticacheCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#engine_version ElasticacheCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#maintenance_window ElasticacheCluster#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#node_type ElasticacheCluster#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#notification_topic_arn ElasticacheCluster#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#num_cache_nodes ElasticacheCluster#num_cache_nodes}
    */
    readonly numCacheNodes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#parameter_group_name ElasticacheCluster#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#port ElasticacheCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}
    */
    readonly preferredAvailabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#replication_group_id ElasticacheCluster#replication_group_id}
    */
    readonly replicationGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#security_group_ids ElasticacheCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#security_group_names ElasticacheCluster#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_arns ElasticacheCluster#snapshot_arns}
    */
    readonly snapshotArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_name ElasticacheCluster#snapshot_name}
    */
    readonly snapshotName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}
    */
    readonly snapshotRetentionLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#snapshot_window ElasticacheCluster#snapshot_window}
    */
    readonly snapshotWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#subnet_group_name ElasticacheCluster#subnet_group_name}
    */
    readonly subnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#tags ElasticacheCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html#tags_all ElasticacheCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class ElasticacheClusterCacheNodes extends cdktf.ComplexComputedList {

    // address - computed: true, optional: false, required: false
    public get address() {
      return this.getStringAttribute('address');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster}
  */
  export class ElasticacheCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheClusterConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticacheClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applyImmediately = config.applyImmediately;
      this._availabilityZone = config.availabilityZone;
      this._azMode = config.azMode;
      this._clusterId = config.clusterId;
      this._engine = config.engine;
      this._engineVersion = config.engineVersion;
      this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
      this._maintenanceWindow = config.maintenanceWindow;
      this._nodeType = config.nodeType;
      this._notificationTopicArn = config.notificationTopicArn;
      this._numCacheNodes = config.numCacheNodes;
      this._parameterGroupName = config.parameterGroupName;
      this._port = config.port;
      this._preferredAvailabilityZones = config.preferredAvailabilityZones;
      this._replicationGroupId = config.replicationGroupId;
      this._securityGroupIds = config.securityGroupIds;
      this._securityGroupNames = config.securityGroupNames;
      this._snapshotArns = config.snapshotArns;
      this._snapshotName = config.snapshotName;
      this._snapshotRetentionLimit = config.snapshotRetentionLimit;
      this._snapshotWindow = config.snapshotWindow;
      this._subnetGroupName = config.subnetGroupName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
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

    // az_mode - computed: true, optional: true, required: false
    private _azMode?: string | undefined; 
    public get azMode() {
      return this.getStringAttribute('az_mode');
    }
    public set azMode(value: string | undefined) {
      this._azMode = value;
    }
    public resetAzMode() {
      this._azMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get azModeInput() {
      return this._azMode
    }

    // cache_nodes - computed: true, optional: false, required: false
    public cacheNodes(index: string) {
      return new ElasticacheClusterCacheNodes(this, 'cache_nodes', index);
    }

    // cluster_address - computed: true, optional: false, required: false
    public get clusterAddress() {
      return this.getStringAttribute('cluster_address');
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId?: string; 
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
      this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
    }

    // configuration_endpoint - computed: true, optional: false, required: false
    public get configurationEndpoint() {
      return this.getStringAttribute('configuration_endpoint');
    }

    // engine - computed: true, optional: true, required: false
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

    // engine_version_actual - computed: true, optional: false, required: false
    public get engineVersionActual() {
      return this.getStringAttribute('engine_version_actual');
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // maintenance_window - computed: true, optional: true, required: false
    private _maintenanceWindow?: string | undefined; 
    public get maintenanceWindow() {
      return this.getStringAttribute('maintenance_window');
    }
    public set maintenanceWindow(value: string | undefined) {
      this._maintenanceWindow = value;
    }
    public resetMaintenanceWindow() {
      this._maintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceWindowInput() {
      return this._maintenanceWindow
    }

    // node_type - computed: true, optional: true, required: false
    private _nodeType?: string | undefined; 
    public get nodeType() {
      return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string | undefined) {
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
    private _notificationTopicArn?: string | undefined; 
    public get notificationTopicArn() {
      return this.getStringAttribute('notification_topic_arn');
    }
    public set notificationTopicArn(value: string | undefined) {
      this._notificationTopicArn = value;
    }
    public resetNotificationTopicArn() {
      this._notificationTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTopicArnInput() {
      return this._notificationTopicArn
    }

    // num_cache_nodes - computed: true, optional: true, required: false
    private _numCacheNodes?: number | undefined; 
    public get numCacheNodes() {
      return this.getNumberAttribute('num_cache_nodes');
    }
    public set numCacheNodes(value: number | undefined) {
      this._numCacheNodes = value;
    }
    public resetNumCacheNodes() {
      this._numCacheNodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numCacheNodesInput() {
      return this._numCacheNodes
    }

    // parameter_group_name - computed: true, optional: true, required: false
    private _parameterGroupName?: string | undefined; 
    public get parameterGroupName() {
      return this.getStringAttribute('parameter_group_name');
    }
    public set parameterGroupName(value: string | undefined) {
      this._parameterGroupName = value;
    }
    public resetParameterGroupName() {
      this._parameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterGroupNameInput() {
      return this._parameterGroupName
    }

    // port - computed: true, optional: true, required: false
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

    // preferred_availability_zones - computed: false, optional: true, required: false
    private _preferredAvailabilityZones?: string[] | undefined; 
    public get preferredAvailabilityZones() {
      return this.getListAttribute('preferred_availability_zones');
    }
    public set preferredAvailabilityZones(value: string[] | undefined) {
      this._preferredAvailabilityZones = value;
    }
    public resetPreferredAvailabilityZones() {
      this._preferredAvailabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredAvailabilityZonesInput() {
      return this._preferredAvailabilityZones
    }

    // replication_group_id - computed: true, optional: true, required: false
    private _replicationGroupId?: string | undefined; 
    public get replicationGroupId() {
      return this.getStringAttribute('replication_group_id');
    }
    public set replicationGroupId(value: string | undefined) {
      this._replicationGroupId = value;
    }
    public resetReplicationGroupId() {
      this._replicationGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationGroupIdInput() {
      return this._replicationGroupId
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
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
    private _securityGroupNames?: string[] | undefined; 
    public get securityGroupNames() {
      return this.getListAttribute('security_group_names');
    }
    public set securityGroupNames(value: string[] | undefined) {
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
    private _snapshotArns?: string[] | undefined; 
    public get snapshotArns() {
      return this.getListAttribute('snapshot_arns');
    }
    public set snapshotArns(value: string[] | undefined) {
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
    private _snapshotName?: string | undefined; 
    public get snapshotName() {
      return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string | undefined) {
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
    private _snapshotRetentionLimit?: number | undefined; 
    public get snapshotRetentionLimit() {
      return this.getNumberAttribute('snapshot_retention_limit');
    }
    public set snapshotRetentionLimit(value: number | undefined) {
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
    private _snapshotWindow?: string | undefined; 
    public get snapshotWindow() {
      return this.getStringAttribute('snapshot_window');
    }
    public set snapshotWindow(value: string | undefined) {
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
    private _subnetGroupName?: string | undefined; 
    public get subnetGroupName() {
      return this.getStringAttribute('subnet_group_name');
    }
    public set subnetGroupName(value: string | undefined) {
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
        apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        az_mode: cdktf.stringToTerraform(this._azMode),
        cluster_id: cdktf.stringToTerraform(this._clusterId),
        engine: cdktf.stringToTerraform(this._engine),
        engine_version: cdktf.stringToTerraform(this._engineVersion),
        final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
        maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
        node_type: cdktf.stringToTerraform(this._nodeType),
        notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
        num_cache_nodes: cdktf.numberToTerraform(this._numCacheNodes),
        parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
        port: cdktf.numberToTerraform(this._port),
        preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredAvailabilityZones),
        replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
        snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotArns),
        snapshot_name: cdktf.stringToTerraform(this._snapshotName),
        snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
        snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
        subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}
    */
    readonly globalReplicationGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}
    */
    readonly globalReplicationGroupIdSuffix: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html#primary_replication_group_id ElasticacheGlobalReplicationGroup#primary_replication_group_id}
    */
    readonly primaryReplicationGroupId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group}
  */
  export class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_global_replication_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheGlobalReplicationGroupConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticacheGlobalReplicationGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_global_replication_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._globalReplicationGroupDescription = config.globalReplicationGroupDescription;
      this._globalReplicationGroupIdSuffix = config.globalReplicationGroupIdSuffix;
      this._primaryReplicationGroupId = config.primaryReplicationGroupId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actual_engine_version - computed: true, optional: false, required: false
    public get actualEngineVersion() {
      return this.getStringAttribute('actual_engine_version');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // at_rest_encryption_enabled - computed: true, optional: false, required: false
    public get atRestEncryptionEnabled() {
      return this.getBooleanAttribute('at_rest_encryption_enabled') as any;
    }

    // auth_token_enabled - computed: true, optional: false, required: false
    public get authTokenEnabled() {
      return this.getBooleanAttribute('auth_token_enabled') as any;
    }

    // cache_node_type - computed: true, optional: false, required: false
    public get cacheNodeType() {
      return this.getStringAttribute('cache_node_type');
    }

    // cluster_enabled - computed: true, optional: false, required: false
    public get clusterEnabled() {
      return this.getBooleanAttribute('cluster_enabled') as any;
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
      return this.getStringAttribute('engine');
    }

    // engine_version_actual - computed: true, optional: false, required: false
    public get engineVersionActual() {
      return this.getStringAttribute('engine_version_actual');
    }

    // global_replication_group_description - computed: false, optional: true, required: false
    private _globalReplicationGroupDescription?: string | undefined; 
    public get globalReplicationGroupDescription() {
      return this.getStringAttribute('global_replication_group_description');
    }
    public set globalReplicationGroupDescription(value: string | undefined) {
      this._globalReplicationGroupDescription = value;
    }
    public resetGlobalReplicationGroupDescription() {
      this._globalReplicationGroupDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalReplicationGroupDescriptionInput() {
      return this._globalReplicationGroupDescription
    }

    // global_replication_group_id - computed: true, optional: false, required: false
    public get globalReplicationGroupId() {
      return this.getStringAttribute('global_replication_group_id');
    }

    // global_replication_group_id_suffix - computed: false, optional: false, required: true
    private _globalReplicationGroupIdSuffix?: string; 
    public get globalReplicationGroupIdSuffix() {
      return this.getStringAttribute('global_replication_group_id_suffix');
    }
    public set globalReplicationGroupIdSuffix(value: string) {
      this._globalReplicationGroupIdSuffix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get globalReplicationGroupIdSuffixInput() {
      return this._globalReplicationGroupIdSuffix
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // primary_replication_group_id - computed: false, optional: false, required: true
    private _primaryReplicationGroupId?: string; 
    public get primaryReplicationGroupId() {
      return this.getStringAttribute('primary_replication_group_id');
    }
    public set primaryReplicationGroupId(value: string) {
      this._primaryReplicationGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryReplicationGroupIdInput() {
      return this._primaryReplicationGroupId
    }

    // transit_encryption_enabled - computed: true, optional: false, required: false
    public get transitEncryptionEnabled() {
      return this.getBooleanAttribute('transit_encryption_enabled') as any;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        global_replication_group_description: cdktf.stringToTerraform(this._globalReplicationGroupDescription),
        global_replication_group_id_suffix: cdktf.stringToTerraform(this._globalReplicationGroupIdSuffix),
        primary_replication_group_id: cdktf.stringToTerraform(this._primaryReplicationGroupId),
      };
    }
  }
  export interface ElasticacheParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#description ElasticacheParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#family ElasticacheParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#name ElasticacheParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#tags ElasticacheParameterGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#tags_all ElasticacheParameterGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#parameter ElasticacheParameterGroup#parameter}
    */
    readonly parameter?: ElasticacheParameterGroupParameter[];
  }
  export interface ElasticacheParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#name ElasticacheParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html#value ElasticacheParameterGroup#value}
    */
    readonly value: string;
  }

  function elasticacheParameterGroupParameterToTerraform(struct?: ElasticacheParameterGroupParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html aws_elasticache_parameter_group}
  */
  export class ElasticacheParameterGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_parameter_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html aws_elasticache_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheParameterGroupConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticacheParameterGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_parameter_group',
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
    private _parameter?: ElasticacheParameterGroupParameter[] | undefined; 
    public get parameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: ElasticacheParameterGroupParameter[] | undefined) {
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
        parameter: cdktf.listMapper(elasticacheParameterGroupParameterToTerraform)(this._parameter),
      };
    }
  }
  export interface ElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#apply_immediately ElasticacheReplicationGroup#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}
    */
    readonly atRestEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#auth_token ElasticacheReplicationGroup#auth_token}
    */
    readonly authToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}
    */
    readonly automaticFailoverEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#availability_zones ElasticacheReplicationGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#engine ElasticacheReplicationGroup#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#engine_version ElasticacheReplicationGroup#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}
    */
    readonly globalReplicationGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#kms_key_id ElasticacheReplicationGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#maintenance_window ElasticacheReplicationGroup#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}
    */
    readonly multiAzEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#node_type ElasticacheReplicationGroup#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}
    */
    readonly numberCacheClusters?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#port ElasticacheReplicationGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replication_group_description ElasticacheReplicationGroup#replication_group_description}
    */
    readonly replicationGroupDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replication_group_id ElasticacheReplicationGroup#replication_group_id}
    */
    readonly replicationGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#security_group_ids ElasticacheReplicationGroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#security_group_names ElasticacheReplicationGroup#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}
    */
    readonly snapshotArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_name ElasticacheReplicationGroup#snapshot_name}
    */
    readonly snapshotName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}
    */
    readonly snapshotRetentionLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_window ElasticacheReplicationGroup#snapshot_window}
    */
    readonly snapshotWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}
    */
    readonly subnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#tags ElasticacheReplicationGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#tags_all ElasticacheReplicationGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}
    */
    readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * cluster_mode block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#cluster_mode ElasticacheReplicationGroup#cluster_mode}
    */
    readonly clusterMode?: ElasticacheReplicationGroupClusterMode;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#timeouts ElasticacheReplicationGroup#timeouts}
    */
    readonly timeouts?: ElasticacheReplicationGroupTimeouts;
  }
  export interface ElasticacheReplicationGroupClusterMode {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#num_node_groups ElasticacheReplicationGroup#num_node_groups}
    */
    readonly numNodeGroups?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}
    */
    readonly replicasPerNodeGroup: number;
  }

  function elasticacheReplicationGroupClusterModeToTerraform(struct?: ElasticacheReplicationGroupClusterModeOutputReference | ElasticacheReplicationGroupClusterMode): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      num_node_groups: cdktf.numberToTerraform(struct!.numNodeGroups),
      replicas_per_node_group: cdktf.numberToTerraform(struct!.replicasPerNodeGroup),
    }
  }

  export class ElasticacheReplicationGroupClusterModeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // num_node_groups - computed: true, optional: true, required: false
    private _numNodeGroups?: number | undefined; 
    public get numNodeGroups() {
      return this.getNumberAttribute('num_node_groups');
    }
    public set numNodeGroups(value: number | undefined) {
      this._numNodeGroups = value;
    }
    public resetNumNodeGroups() {
      this._numNodeGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numNodeGroupsInput() {
      return this._numNodeGroups
    }

    // replicas_per_node_group - computed: false, optional: false, required: true
    private _replicasPerNodeGroup?: number; 
    public get replicasPerNodeGroup() {
      return this.getNumberAttribute('replicas_per_node_group');
    }
    public set replicasPerNodeGroup(value: number) {
      this._replicasPerNodeGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicasPerNodeGroupInput() {
      return this._replicasPerNodeGroup
    }
  }
  export interface ElasticacheReplicationGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#create ElasticacheReplicationGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#delete ElasticacheReplicationGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#update ElasticacheReplicationGroup#update}
    */
    readonly update?: string;
  }

  function elasticacheReplicationGroupTimeoutsToTerraform(struct?: ElasticacheReplicationGroupTimeoutsOutputReference | ElasticacheReplicationGroupTimeouts): any {
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

  export class ElasticacheReplicationGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group}
  */
  export class ElasticacheReplicationGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_replication_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheReplicationGroupConfig
    */
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
      this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
      this._globalReplicationGroupId = config.globalReplicationGroupId;
      this._kmsKeyId = config.kmsKeyId;
      this._maintenanceWindow = config.maintenanceWindow;
      this._multiAzEnabled = config.multiAzEnabled;
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
      this._tagsAll = config.tagsAll;
      this._transitEncryptionEnabled = config.transitEncryptionEnabled;
      this._clusterMode = config.clusterMode;
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

    // at_rest_encryption_enabled - computed: true, optional: true, required: false
    private _atRestEncryptionEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get atRestEncryptionEnabled() {
      return this.getBooleanAttribute('at_rest_encryption_enabled') as any;
    }
    public set atRestEncryptionEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _authToken?: string | undefined; 
    public get authToken() {
      return this.getStringAttribute('auth_token');
    }
    public set authToken(value: string | undefined) {
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

    // automatic_failover_enabled - computed: false, optional: true, required: false
    private _automaticFailoverEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get automaticFailoverEnabled() {
      return this.getBooleanAttribute('automatic_failover_enabled') as any;
    }
    public set automaticFailoverEnabled(value: boolean | cdktf.IResolvable | undefined) {
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

    // cluster_enabled - computed: true, optional: false, required: false
    public get clusterEnabled() {
      return this.getBooleanAttribute('cluster_enabled') as any;
    }

    // configuration_endpoint_address - computed: true, optional: false, required: false
    public get configurationEndpointAddress() {
      return this.getStringAttribute('configuration_endpoint_address');
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

    // engine_version_actual - computed: true, optional: false, required: false
    public get engineVersionActual() {
      return this.getStringAttribute('engine_version_actual');
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

    // global_replication_group_id - computed: true, optional: true, required: false
    private _globalReplicationGroupId?: string | undefined; 
    public get globalReplicationGroupId() {
      return this.getStringAttribute('global_replication_group_id');
    }
    public set globalReplicationGroupId(value: string | undefined) {
      this._globalReplicationGroupId = value;
    }
    public resetGlobalReplicationGroupId() {
      this._globalReplicationGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalReplicationGroupIdInput() {
      return this._globalReplicationGroupId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
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

    // maintenance_window - computed: true, optional: true, required: false
    private _maintenanceWindow?: string | undefined; 
    public get maintenanceWindow() {
      return this.getStringAttribute('maintenance_window');
    }
    public set maintenanceWindow(value: string | undefined) {
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

    // multi_az_enabled - computed: false, optional: true, required: false
    private _multiAzEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get multiAzEnabled() {
      return this.getBooleanAttribute('multi_az_enabled') as any;
    }
    public set multiAzEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._multiAzEnabled = value;
    }
    public resetMultiAzEnabled() {
      this._multiAzEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzEnabledInput() {
      return this._multiAzEnabled
    }

    // node_type - computed: true, optional: true, required: false
    private _nodeType?: string | undefined; 
    public get nodeType() {
      return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string | undefined) {
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
    private _notificationTopicArn?: string | undefined; 
    public get notificationTopicArn() {
      return this.getStringAttribute('notification_topic_arn');
    }
    public set notificationTopicArn(value: string | undefined) {
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
    private _numberCacheClusters?: number | undefined; 
    public get numberCacheClusters() {
      return this.getNumberAttribute('number_cache_clusters');
    }
    public set numberCacheClusters(value: number | undefined) {
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
    private _parameterGroupName?: string | undefined; 
    public get parameterGroupName() {
      return this.getStringAttribute('parameter_group_name');
    }
    public set parameterGroupName(value: string | undefined) {
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

    // primary_endpoint_address - computed: true, optional: false, required: false
    public get primaryEndpointAddress() {
      return this.getStringAttribute('primary_endpoint_address');
    }

    // reader_endpoint_address - computed: true, optional: false, required: false
    public get readerEndpointAddress() {
      return this.getStringAttribute('reader_endpoint_address');
    }

    // replication_group_description - computed: false, optional: false, required: true
    private _replicationGroupDescription?: string; 
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
    private _replicationGroupId?: string; 
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
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
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
    private _securityGroupNames?: string[] | undefined; 
    public get securityGroupNames() {
      return this.getListAttribute('security_group_names');
    }
    public set securityGroupNames(value: string[] | undefined) {
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
    private _snapshotArns?: string[] | undefined; 
    public get snapshotArns() {
      return this.getListAttribute('snapshot_arns');
    }
    public set snapshotArns(value: string[] | undefined) {
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
    private _snapshotName?: string | undefined; 
    public get snapshotName() {
      return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string | undefined) {
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
    private _snapshotRetentionLimit?: number | undefined; 
    public get snapshotRetentionLimit() {
      return this.getNumberAttribute('snapshot_retention_limit');
    }
    public set snapshotRetentionLimit(value: number | undefined) {
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
    private _snapshotWindow?: string | undefined; 
    public get snapshotWindow() {
      return this.getStringAttribute('snapshot_window');
    }
    public set snapshotWindow(value: string | undefined) {
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
    private _subnetGroupName?: string | undefined; 
    public get subnetGroupName() {
      return this.getStringAttribute('subnet_group_name');
    }
    public set subnetGroupName(value: string | undefined) {
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

    // transit_encryption_enabled - computed: true, optional: true, required: false
    private _transitEncryptionEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get transitEncryptionEnabled() {
      return this.getBooleanAttribute('transit_encryption_enabled') as any;
    }
    public set transitEncryptionEnabled(value: boolean | cdktf.IResolvable | undefined) {
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
    private _clusterMode?: ElasticacheReplicationGroupClusterMode | undefined; 
    private __clusterModeOutput = new ElasticacheReplicationGroupClusterModeOutputReference(this as any, "cluster_mode", true);
    public get clusterMode() {
      return this.__clusterModeOutput;
    }
    public putClusterMode(value: ElasticacheReplicationGroupClusterMode | undefined) {
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
    private _timeouts?: ElasticacheReplicationGroupTimeouts | undefined; 
    private __timeoutsOutput = new ElasticacheReplicationGroupTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ElasticacheReplicationGroupTimeouts | undefined) {
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
        final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
        global_replication_group_id: cdktf.stringToTerraform(this._globalReplicationGroupId),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
        multi_az_enabled: cdktf.booleanToTerraform(this._multiAzEnabled),
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
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        transit_encryption_enabled: cdktf.booleanToTerraform(this._transitEncryptionEnabled),
        cluster_mode: elasticacheReplicationGroupClusterModeToTerraform(this._clusterMode),
        timeouts: elasticacheReplicationGroupTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ElasticacheSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html#description ElasticacheSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html#name ElasticacheSecurityGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html#security_group_names ElasticacheSecurityGroup#security_group_names}
    */
    readonly securityGroupNames: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html aws_elasticache_security_group}
  */
  export class ElasticacheSecurityGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_security_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html aws_elasticache_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheSecurityGroupConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticacheSecurityGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_security_group',
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
      this._securityGroupNames = config.securityGroupNames;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // security_group_names - computed: false, optional: false, required: true
    private _securityGroupNames?: string[]; 
    public get securityGroupNames() {
      return this.getListAttribute('security_group_names');
    }
    public set securityGroupNames(value: string[]) {
      this._securityGroupNames = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupNamesInput() {
      return this._securityGroupNames
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
      };
    }
  }
  export interface ElasticacheSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html#description ElasticacheSubnetGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html#name ElasticacheSubnetGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html#subnet_ids ElasticacheSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html#tags ElasticacheSubnetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html#tags_all ElasticacheSubnetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html aws_elasticache_subnet_group}
  */
  export class ElasticacheSubnetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_subnet_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html aws_elasticache_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheSubnetGroupConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticacheSubnetGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_subnet_group',
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
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#access_string ElasticacheUser#access_string}
    */
    readonly accessString: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#engine ElasticacheUser#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#no_password_required ElasticacheUser#no_password_required}
    */
    readonly noPasswordRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#passwords ElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#tags ElasticacheUser#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#tags_all ElasticacheUser#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#user_id ElasticacheUser#user_id}
    */
    readonly userId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#user_name ElasticacheUser#user_name}
    */
    readonly userName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html aws_elasticache_user}
  */
  export class ElasticacheUser extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_user";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html aws_elasticache_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticacheUserConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_user',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessString = config.accessString;
      this._engine = config.engine;
      this._noPasswordRequired = config.noPasswordRequired;
      this._passwords = config.passwords;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._userId = config.userId;
      this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_string - computed: false, optional: false, required: true
    private _accessString?: string; 
    public get accessString() {
      return this.getStringAttribute('access_string');
    }
    public set accessString(value: string) {
      this._accessString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessStringInput() {
      return this._accessString
    }

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // engine - computed: false, optional: false, required: true
    private _engine?: string; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
      this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
      return this._engine
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // no_password_required - computed: false, optional: true, required: false
    private _noPasswordRequired?: boolean | cdktf.IResolvable | undefined; 
    public get noPasswordRequired() {
      return this.getBooleanAttribute('no_password_required') as any;
    }
    public set noPasswordRequired(value: boolean | cdktf.IResolvable | undefined) {
      this._noPasswordRequired = value;
    }
    public resetNoPasswordRequired() {
      this._noPasswordRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noPasswordRequiredInput() {
      return this._noPasswordRequired
    }

    // passwords - computed: false, optional: true, required: false
    private _passwords?: string[] | undefined; 
    public get passwords() {
      return this.getListAttribute('passwords');
    }
    public set passwords(value: string[] | undefined) {
      this._passwords = value;
    }
    public resetPasswords() {
      this._passwords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordsInput() {
      return this._passwords
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

    // user_id - computed: false, optional: false, required: true
    private _userId?: string; 
    public get userId() {
      return this.getStringAttribute('user_id');
    }
    public set userId(value: string) {
      this._userId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdInput() {
      return this._userId
    }

    // user_name - computed: false, optional: false, required: true
    private _userName?: string; 
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
      this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_string: cdktf.stringToTerraform(this._accessString),
        engine: cdktf.stringToTerraform(this._engine),
        no_password_required: cdktf.booleanToTerraform(this._noPasswordRequired),
        passwords: cdktf.listMapper(cdktf.stringToTerraform)(this._passwords),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user_id: cdktf.stringToTerraform(this._userId),
        user_name: cdktf.stringToTerraform(this._userName),
      };
    }
  }
  export interface ElasticacheUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#engine ElasticacheUserGroup#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#tags ElasticacheUserGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#tags_all ElasticacheUserGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#user_group_id ElasticacheUserGroup#user_group_id}
    */
    readonly userGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#user_ids ElasticacheUserGroup#user_ids}
    */
    readonly userIds?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html aws_elasticache_user_group}
  */
  export class ElasticacheUserGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_user_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html aws_elasticache_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserGroupConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticacheUserGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_user_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._engine = config.engine;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._userGroupId = config.userGroupId;
      this._userIds = config.userIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // engine - computed: false, optional: false, required: true
    private _engine?: string; 
    public get engine() {
      return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
      this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
      return this._engine
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // user_group_id - computed: false, optional: false, required: true
    private _userGroupId?: string; 
    public get userGroupId() {
      return this.getStringAttribute('user_group_id');
    }
    public set userGroupId(value: string) {
      this._userGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userGroupIdInput() {
      return this._userGroupId
    }

    // user_ids - computed: false, optional: true, required: false
    private _userIds?: string[] | undefined; 
    public get userIds() {
      return this.getListAttribute('user_ids');
    }
    public set userIds(value: string[] | undefined) {
      this._userIds = value;
    }
    public resetUserIds() {
      this._userIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdsInput() {
      return this._userIds
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        engine: cdktf.stringToTerraform(this._engine),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user_group_id: cdktf.stringToTerraform(this._userGroupId),
        user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._userIds),
      };
    }
  }
  export interface DataAwsElasticacheClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html#cluster_id DataAwsElasticacheCluster#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html#tags DataAwsElasticacheCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsElasticacheClusterCacheNodes extends cdktf.ComplexComputedList {

    // address - computed: true, optional: false, required: false
    public get address() {
      return this.getStringAttribute('address');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html aws_elasticache_cluster}
  */
  export class DataAwsElasticacheCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html aws_elasticache_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsElasticacheClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterId = config.clusterId;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }

    // cache_nodes - computed: true, optional: false, required: false
    public cacheNodes(index: string) {
      return new DataAwsElasticacheClusterCacheNodes(this, 'cache_nodes', index);
    }

    // cluster_address - computed: true, optional: false, required: false
    public get clusterAddress() {
      return this.getStringAttribute('cluster_address');
    }

    // cluster_id - computed: false, optional: false, required: true
    private _clusterId?: string; 
    public get clusterId() {
      return this.getStringAttribute('cluster_id');
    }
    public set clusterId(value: string) {
      this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdInput() {
      return this._clusterId
    }

    // configuration_endpoint - computed: true, optional: false, required: false
    public get configurationEndpoint() {
      return this.getStringAttribute('configuration_endpoint');
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

    // maintenance_window - computed: true, optional: false, required: false
    public get maintenanceWindow() {
      return this.getStringAttribute('maintenance_window');
    }

    // node_type - computed: true, optional: false, required: false
    public get nodeType() {
      return this.getStringAttribute('node_type');
    }

    // notification_topic_arn - computed: true, optional: false, required: false
    public get notificationTopicArn() {
      return this.getStringAttribute('notification_topic_arn');
    }

    // num_cache_nodes - computed: true, optional: false, required: false
    public get numCacheNodes() {
      return this.getNumberAttribute('num_cache_nodes');
    }

    // parameter_group_name - computed: true, optional: false, required: false
    public get parameterGroupName() {
      return this.getStringAttribute('parameter_group_name');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // replication_group_id - computed: true, optional: false, required: false
    public get replicationGroupId() {
      return this.getStringAttribute('replication_group_id');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }

    // security_group_names - computed: true, optional: false, required: false
    public get securityGroupNames() {
      return this.getListAttribute('security_group_names');
    }

    // snapshot_retention_limit - computed: true, optional: false, required: false
    public get snapshotRetentionLimit() {
      return this.getNumberAttribute('snapshot_retention_limit');
    }

    // snapshot_window - computed: true, optional: false, required: false
    public get snapshotWindow() {
      return this.getStringAttribute('snapshot_window');
    }

    // subnet_group_name - computed: true, optional: false, required: false
    public get subnetGroupName() {
      return this.getStringAttribute('subnet_group_name');
    }

    // tags - computed: true, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_id: cdktf.stringToTerraform(this._clusterId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}
    */
    readonly replicationGroupId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group}
  */
  export class DataAwsElasticacheReplicationGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_replication_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheReplicationGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsElasticacheReplicationGroupConfig) {
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
      this._replicationGroupId = config.replicationGroupId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auth_token_enabled - computed: true, optional: false, required: false
    public get authTokenEnabled() {
      return this.getBooleanAttribute('auth_token_enabled') as any;
    }

    // automatic_failover_enabled - computed: true, optional: false, required: false
    public get automaticFailoverEnabled() {
      return this.getBooleanAttribute('automatic_failover_enabled') as any;
    }

    // configuration_endpoint_address - computed: true, optional: false, required: false
    public get configurationEndpointAddress() {
      return this.getStringAttribute('configuration_endpoint_address');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // member_clusters - computed: true, optional: false, required: false
    public get memberClusters() {
      return this.getListAttribute('member_clusters');
    }

    // multi_az_enabled - computed: true, optional: false, required: false
    public get multiAzEnabled() {
      return this.getBooleanAttribute('multi_az_enabled') as any;
    }

    // node_type - computed: true, optional: false, required: false
    public get nodeType() {
      return this.getStringAttribute('node_type');
    }

    // number_cache_clusters - computed: true, optional: false, required: false
    public get numberCacheClusters() {
      return this.getNumberAttribute('number_cache_clusters');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // primary_endpoint_address - computed: true, optional: false, required: false
    public get primaryEndpointAddress() {
      return this.getStringAttribute('primary_endpoint_address');
    }

    // reader_endpoint_address - computed: true, optional: false, required: false
    public get readerEndpointAddress() {
      return this.getStringAttribute('reader_endpoint_address');
    }

    // replication_group_description - computed: true, optional: false, required: false
    public get replicationGroupDescription() {
      return this.getStringAttribute('replication_group_description');
    }

    // replication_group_id - computed: false, optional: false, required: true
    private _replicationGroupId?: string; 
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

    // snapshot_retention_limit - computed: true, optional: false, required: false
    public get snapshotRetentionLimit() {
      return this.getNumberAttribute('snapshot_retention_limit');
    }

    // snapshot_window - computed: true, optional: false, required: false
    public get snapshotWindow() {
      return this.getStringAttribute('snapshot_window');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
      };
    }
  }
  export interface DataAwsElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#access_string DataAwsElasticacheUser#access_string}
    */
    readonly accessString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#engine DataAwsElasticacheUser#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#no_password_required DataAwsElasticacheUser#no_password_required}
    */
    readonly noPasswordRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#passwords DataAwsElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#user_id DataAwsElasticacheUser#user_id}
    */
    readonly userId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#user_name DataAwsElasticacheUser#user_name}
    */
    readonly userName?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html aws_elasticache_user}
  */
  export class DataAwsElasticacheUser extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticache_user";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html aws_elasticache_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheUserConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsElasticacheUserConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticache_user',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessString = config.accessString;
      this._engine = config.engine;
      this._noPasswordRequired = config.noPasswordRequired;
      this._passwords = config.passwords;
      this._userId = config.userId;
      this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_string - computed: false, optional: true, required: false
    private _accessString?: string | undefined; 
    public get accessString() {
      return this.getStringAttribute('access_string');
    }
    public set accessString(value: string | undefined) {
      this._accessString = value;
    }
    public resetAccessString() {
      this._accessString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessStringInput() {
      return this._accessString
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // no_password_required - computed: false, optional: true, required: false
    private _noPasswordRequired?: boolean | cdktf.IResolvable | undefined; 
    public get noPasswordRequired() {
      return this.getBooleanAttribute('no_password_required') as any;
    }
    public set noPasswordRequired(value: boolean | cdktf.IResolvable | undefined) {
      this._noPasswordRequired = value;
    }
    public resetNoPasswordRequired() {
      this._noPasswordRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noPasswordRequiredInput() {
      return this._noPasswordRequired
    }

    // passwords - computed: false, optional: true, required: false
    private _passwords?: string[] | undefined; 
    public get passwords() {
      return this.getListAttribute('passwords');
    }
    public set passwords(value: string[] | undefined) {
      this._passwords = value;
    }
    public resetPasswords() {
      this._passwords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordsInput() {
      return this._passwords
    }

    // user_id - computed: false, optional: false, required: true
    private _userId?: string; 
    public get userId() {
      return this.getStringAttribute('user_id');
    }
    public set userId(value: string) {
      this._userId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdInput() {
      return this._userId
    }

    // user_name - computed: false, optional: true, required: false
    private _userName?: string | undefined; 
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string | undefined) {
      this._userName = value;
    }
    public resetUserName() {
      this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_string: cdktf.stringToTerraform(this._accessString),
        engine: cdktf.stringToTerraform(this._engine),
        no_password_required: cdktf.booleanToTerraform(this._noPasswordRequired),
        passwords: cdktf.listMapper(cdktf.stringToTerraform)(this._passwords),
        user_id: cdktf.stringToTerraform(this._userId),
        user_name: cdktf.stringToTerraform(this._userName),
      };
    }
  }
}
