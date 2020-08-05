// https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "apply_immediately": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "at_rest_encryption_enabled": {
        "type": "bool",
        "optional": true
      },
      "auth_token": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "auto_minor_version_upgrade": {
        "type": "bool",
        "optional": true
      },
      "automatic_failover_enabled": {
        "type": "bool",
        "optional": true
      },
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "configuration_endpoint_address": {
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true
      },
      "maintenance_window": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "member_clusters": {
        "type": [
          "set",
          "string"
        ],
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
      "number_cache_clusters": {
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
        "optional": true
      },
      "primary_endpoint_address": {
        "type": "string",
        "computed": true
      },
      "replication_group_description": {
        "type": "string",
        "required": true
      },
      "replication_group_id": {
        "type": "string",
        "required": true
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
      },
      "transit_encryption_enabled": {
        "type": "bool",
        "optional": true
      }
    },
    "block_types": {
      "cluster_mode": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "num_node_groups": {
              "type": "number",
              "required": true
            },
            "replicas_per_node_group": {
              "type": "number",
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

export interface ElasticacheReplicationGroupConfig extends TerraformMetaArguments {
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
export interface ElasticacheReplicationGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ElasticacheReplicationGroup extends TerraformResource {

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
    return this._applyImmediately ?? this.getBooleanAttribute('apply_immediately');
  }
  public set applyImmediately(value: boolean | undefined) {
    this._applyImmediately = value;
  }

  // at_rest_encryption_enabled - computed: false, optional: true, required: false
  private _atRestEncryptionEnabled?: boolean;
  public get atRestEncryptionEnabled() {
    return this._atRestEncryptionEnabled;
  }
  public set atRestEncryptionEnabled(value: boolean | undefined) {
    this._atRestEncryptionEnabled = value;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken?: string;
  public get authToken() {
    return this._authToken;
  }
  public set authToken(value: string | undefined) {
    this._authToken = value;
  }

  // auto_minor_version_upgrade - computed: false, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean;
  public get autoMinorVersionUpgrade() {
    return this._autoMinorVersionUpgrade;
  }
  public set autoMinorVersionUpgrade(value: boolean | undefined) {
    this._autoMinorVersionUpgrade = value;
  }

  // automatic_failover_enabled - computed: false, optional: true, required: false
  private _automaticFailoverEnabled?: boolean;
  public get automaticFailoverEnabled() {
    return this._automaticFailoverEnabled;
  }
  public set automaticFailoverEnabled(value: boolean | undefined) {
    this._automaticFailoverEnabled = value;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this._availabilityZones;
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }

  // configuration_endpoint_address - computed: true, optional: false, required: true
  public get configurationEndpointAddress() {
    return this.getStringAttribute('configuration_endpoint_address');
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow?: string;
  public get maintenanceWindow() {
    return this._maintenanceWindow ?? this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string | undefined) {
    this._maintenanceWindow = value;
  }

  // member_clusters - computed: true, optional: false, required: true
  public get memberClusters() {
    return this.getListAttribute('member_clusters');
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

  // number_cache_clusters - computed: true, optional: true, required: false
  private _numberCacheClusters?: number;
  public get numberCacheClusters() {
    return this._numberCacheClusters ?? this.getNumberAttribute('number_cache_clusters');
  }
  public set numberCacheClusters(value: number | undefined) {
    this._numberCacheClusters = value;
  }

  // parameter_group_name - computed: true, optional: true, required: false
  private _parameterGroupName?: string;
  public get parameterGroupName() {
    return this._parameterGroupName ?? this.getStringAttribute('parameter_group_name');
  }
  public set parameterGroupName(value: string | undefined) {
    this._parameterGroupName = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // primary_endpoint_address - computed: true, optional: false, required: true
  public get primaryEndpointAddress() {
    return this.getStringAttribute('primary_endpoint_address');
  }

  // replication_group_description - computed: false, optional: false, required: true
  private _replicationGroupDescription: string;
  public get replicationGroupDescription() {
    return this._replicationGroupDescription;
  }
  public set replicationGroupDescription(value: string) {
    this._replicationGroupDescription = value;
  }

  // replication_group_id - computed: false, optional: false, required: true
  private _replicationGroupId: string;
  public get replicationGroupId() {
    return this._replicationGroupId;
  }
  public set replicationGroupId(value: string) {
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

  // transit_encryption_enabled - computed: false, optional: true, required: false
  private _transitEncryptionEnabled?: boolean;
  public get transitEncryptionEnabled() {
    return this._transitEncryptionEnabled;
  }
  public set transitEncryptionEnabled(value: boolean | undefined) {
    this._transitEncryptionEnabled = value;
  }

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: ElasticacheReplicationGroupClusterMode[];
  public get clusterMode() {
    return this._clusterMode;
  }
  public set clusterMode(value: ElasticacheReplicationGroupClusterMode[] | undefined) {
    this._clusterMode = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ElasticacheReplicationGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ElasticacheReplicationGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_immediately: this._applyImmediately,
      at_rest_encryption_enabled: this._atRestEncryptionEnabled,
      auth_token: this._authToken,
      auto_minor_version_upgrade: this._autoMinorVersionUpgrade,
      automatic_failover_enabled: this._automaticFailoverEnabled,
      availability_zones: this._availabilityZones,
      engine: this._engine,
      engine_version: this._engineVersion,
      kms_key_id: this._kmsKeyId,
      maintenance_window: this._maintenanceWindow,
      node_type: this._nodeType,
      notification_topic_arn: this._notificationTopicArn,
      number_cache_clusters: this._numberCacheClusters,
      parameter_group_name: this._parameterGroupName,
      port: this._port,
      replication_group_description: this._replicationGroupDescription,
      replication_group_id: this._replicationGroupId,
      security_group_ids: this._securityGroupIds,
      security_group_names: this._securityGroupNames,
      snapshot_arns: this._snapshotArns,
      snapshot_name: this._snapshotName,
      snapshot_retention_limit: this._snapshotRetentionLimit,
      snapshot_window: this._snapshotWindow,
      subnet_group_name: this._subnetGroupName,
      tags: this._tags,
      transit_encryption_enabled: this._transitEncryptionEnabled,
      cluster_mode: this._clusterMode,
      timeouts: this._timeouts,
    };
  }
}
