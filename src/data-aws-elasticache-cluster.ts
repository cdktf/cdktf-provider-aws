// https://www.terraform.io/docs/providers/aws/r/data_aws_elasticache_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "availability_zone": {
        "type": "string",
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
        "computed": true
      },
      "engine_version": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintenance_window": {
        "type": "string",
        "computed": true
      },
      "node_type": {
        "type": "string",
        "computed": true
      },
      "notification_topic_arn": {
        "type": "string",
        "computed": true
      },
      "num_cache_nodes": {
        "type": "number",
        "computed": true
      },
      "parameter_group_name": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "replication_group_id": {
        "type": "string",
        "computed": true
      },
      "security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "security_group_names": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "snapshot_retention_limit": {
        "type": "number",
        "computed": true
      },
      "snapshot_window": {
        "type": "string",
        "computed": true
      },
      "subnet_group_name": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsElasticacheClusterConfig extends TerraformMetaArguments {
  readonly clusterId: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsElasticacheClusterCacheNodes extends ComplexComputedList {

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

export class DataAwsElasticacheCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: true
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // cache_nodes - computed: true, optional: false, required: true
  public cacheNodes(index: string) {
    return new DataAwsElasticacheClusterCacheNodes(this, 'cache_nodes', index);
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

  // engine - computed: true, optional: false, required: true
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: true, optional: false, required: true
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // maintenance_window - computed: true, optional: false, required: true
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }

  // node_type - computed: true, optional: false, required: true
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // notification_topic_arn - computed: true, optional: false, required: true
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }

  // num_cache_nodes - computed: true, optional: false, required: true
  public get numCacheNodes() {
    return this.getNumberAttribute('num_cache_nodes');
  }

  // parameter_group_name - computed: true, optional: false, required: true
  public get parameterGroupName() {
    return this.getStringAttribute('parameter_group_name');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // replication_group_id - computed: true, optional: false, required: true
  public get replicationGroupId() {
    return this.getStringAttribute('replication_group_id');
  }

  // security_group_ids - computed: true, optional: false, required: true
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // security_group_names - computed: true, optional: false, required: true
  public get securityGroupNames() {
    return this.getListAttribute('security_group_names');
  }

  // snapshot_retention_limit - computed: true, optional: false, required: true
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }

  // snapshot_window - computed: true, optional: false, required: true
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }

  // subnet_group_name - computed: true, optional: false, required: true
  public get subnetGroupName() {
    return this.getStringAttribute('subnet_group_name');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      tags: this._tags,
    };
  }
}
