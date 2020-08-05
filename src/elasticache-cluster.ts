// https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html
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
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "az_mode": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cache_nodes": {
        "type": [
          "list",
          [
            "object",
            {
              "address": "string",
              "availability_zone": "string",
              "id": "string",
              "port": "number"
            }
          ]
        ],
        "computed": true
      },
      "cluster_address": {
        "type": "string",
        "computed": true
      },
      "cluster_id": {
        "type": "string",
        "required": true
      },
      "configuration_endpoint": {
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "node_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "notification_topic_arn": {
        "type": "string",
        "optional": true
      },
      "num_cache_nodes": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "parameter_group_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "preferred_availability_zones": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "replication_group_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "security_group_names": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "snapshot_arns": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "snapshot_name": {
        "type": "string",
        "optional": true
      },
      "snapshot_retention_limit": {
        "type": "number",
        "optional": true
      },
      "snapshot_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_group_name": {
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface ElasticacheClusterConfig extends TerraformMetaArguments {
  readonly applyImmediately?: boolean;
  readonly availabilityZone?: string;
  readonly availabilityZones?: string[];
  readonly azMode?: string;
  readonly clusterId: string;
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly maintenanceWindow?: string;
  readonly nodeType?: string;
  readonly notificationTopicArn?: string;
  readonly numCacheNodes?: number;
  readonly parameterGroupName?: string;
  readonly port?: number;
  readonly preferredAvailabilityZones?: string[];
  readonly replicationGroupId?: string;
  readonly securityGroupIds?: string[];
  readonly securityGroupNames?: string[];
  readonly snapshotArns?: string[];
  readonly snapshotName?: string;
  readonly snapshotRetentionLimit?: number;
  readonly snapshotWindow?: string;
  readonly subnetGroupName?: string;
  readonly tags?: { [key: string]: string };
}
export class ElasticacheClusterCacheNodes extends ComplexComputedList {

  // address - computed: true, optional: false, required: true
  public get address() {
    return this.getStringAttribute('address');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}

// Resource

export class ElasticacheCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._availabilityZones = config.availabilityZones;
    this._azMode = config.azMode;
    this._clusterId = config.clusterId;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
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

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this._availabilityZones;
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }

  // az_mode - computed: true, optional: true, required: false
  private _azMode?: string;
  public get azMode() {
    return this._azMode ?? this.getStringAttribute('az_mode');
  }
  public set azMode(value: string | undefined) {
    this._azMode = value;
  }

  // cache_nodes - computed: true, optional: false, required: true
  public cacheNodes(index: string) {
    return new ElasticacheClusterCacheNodes(this, 'cache_nodes', index);
  }

  // cluster_address - computed: true, optional: false, required: true
  public get clusterAddress() {
    return this.getStringAttribute('cluster_address');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }

  // configuration_endpoint - computed: true, optional: false, required: true
  public get configurationEndpoint() {
    return this.getStringAttribute('configuration_endpoint');
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string;
  public get maintenanceWindow() {
    return this._maintenanceWindow ?? this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string | undefined) {
    this._maintenanceWindow = value;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string;
  public get nodeType() {
    return this._nodeType ?? this.getStringAttribute('node_type');
  }
  public set nodeType(value: string | undefined) {
    this._nodeType = value;
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string;
  public get notificationTopicArn() {
    return this._notificationTopicArn;
  }
  public set notificationTopicArn(value: string | undefined) {
    this._notificationTopicArn = value;
  }

  // num_cache_nodes - computed: true, optional: true, required: false
  private _numCacheNodes?: number;
  public get numCacheNodes() {
    return this._numCacheNodes ?? this.getNumberAttribute('num_cache_nodes');
  }
  public set numCacheNodes(value: number | undefined) {
    this._numCacheNodes = value;
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string;
  public get parameterGroupName() {
    return this._parameterGroupName ?? this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string | undefined) {
    this._parameterGroupName = value;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port ?? this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // preferred_availability_zones - computed: false, optional: true, required: false
  private _preferredAvailabilityZones?: string[];
  public get preferredAvailabilityZones() {
    return this._preferredAvailabilityZones;
  }
  public set preferredAvailabilityZones(value: string[] | undefined) {
    this._preferredAvailabilityZones = value;
  }

  // replication_group_id - computed: true, optional: true, required: false
  private _replicationGroupId?: string;
  public get replicationGroupId() {
    return this._replicationGroupId ?? this.getStringAttribute('replication_group_id');
  }
  public set replicationGroupId(value: string | undefined) {
    this._replicationGroupId = value;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds ?? this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // security_group_names - computed: true, optional: true, required: false
  private _securityGroupNames?: string[];
  public get securityGroupNames() {
    return this._securityGroupNames ?? this.getListAttribute('security_group_names');
  }
  public set securityGroupNames(value: string[] | undefined) {
    this._securityGroupNames = value;
  }

  // snapshot_arns - computed: false, optional: true, required: false
  private _snapshotArns?: string[];
  public get snapshotArns() {
    return this._snapshotArns;
  }
  public set snapshotArns(value: string[] | undefined) {
    this._snapshotArns = value;
  }

  // snapshot_name - computed: false, optional: true, required: false
  private _snapshotName?: string;
  public get snapshotName() {
    return this._snapshotName;
  }
  public set snapshotName(value: string | undefined) {
    this._snapshotName = value;
  }

  // snapshot_retention_limit - computed: false, optional: true, required: false
  private _snapshotRetentionLimit?: number;
  public get snapshotRetentionLimit() {
    return this._snapshotRetentionLimit;
  }
  public set snapshotRetentionLimit(value: number | undefined) {
    this._snapshotRetentionLimit = value;
  }

  // snapshot_window - computed: true, optional: true, required: false
  private _snapshotWindow?: string;
  public get snapshotWindow() {
    return this._snapshotWindow ?? this.getStringAttribute('snapshot_window');
  }
  public set snapshotWindow(value: string | undefined) {
    this._snapshotWindow = value;
  }

  // subnet_group_name - computed: true, optional: true, required: false
  private _subnetGroupName?: string;
  public get subnetGroupName() {
    return this._subnetGroupName ?? this.getStringAttribute('subnet_group_name');
  }
  public set subnetGroupName(value: string | undefined) {
    this._subnetGroupName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: this._applyImmediately,
      availability_zone: this._availabilityZone,
      availability_zones: this._availabilityZones,
      az_mode: this._azMode,
      cluster_id: this._clusterId,
      engine: this._engine,
      engine_version: this._engineVersion,
      maintenance_window: this._maintenanceWindow,
      node_type: this._nodeType,
      notification_topic_arn: this._notificationTopicArn,
      num_cache_nodes: this._numCacheNodes,
      parameter_group_name: this._parameterGroupName,
      port: this._port,
      preferred_availability_zones: this._preferredAvailabilityZones,
      replication_group_id: this._replicationGroupId,
      security_group_ids: this._securityGroupIds,
      security_group_names: this._securityGroupNames,
      snapshot_arns: this._snapshotArns,
      snapshot_name: this._snapshotName,
      snapshot_retention_limit: this._snapshotRetentionLimit,
      snapshot_window: this._snapshotWindow,
      subnet_group_name: this._subnetGroupName,
      tags: this._tags,
    };
  }
}
