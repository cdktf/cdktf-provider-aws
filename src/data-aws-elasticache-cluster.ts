// https://www.terraform.io/docs/providers/aws/r/data_aws_elasticache_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterId: string;
  readonly tags?: { [key: string]: string };
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

// Resource

export class DataAwsElasticacheCluster extends cdktf.TerraformDataSource {

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
  private _clusterId: string;
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
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
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
