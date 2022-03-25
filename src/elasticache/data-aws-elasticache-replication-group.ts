// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS ElastiCache
*/
export interface DataAwsElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}
  */
  readonly replicationGroupId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group aws_elasticache_replication_group}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group aws_elasticache_replication_group} Data Source
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
    return this.getBooleanAttribute('auth_token_enabled');
  }

  // automatic_failover_enabled - computed: true, optional: false, required: false
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }

  // configuration_endpoint_address - computed: true, optional: false, required: false
  public get configurationEndpointAddress() {
    return this.getStringAttribute('configuration_endpoint_address');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_clusters - computed: true, optional: false, required: false
  public get memberClusters() {
    return cdktf.Fn.tolist(this.getListAttribute('member_clusters'));
  }

  // multi_az_enabled - computed: true, optional: false, required: false
  public get multiAzEnabled() {
    return this.getBooleanAttribute('multi_az_enabled');
  }

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // num_cache_clusters - computed: true, optional: false, required: false
  public get numCacheClusters() {
    return this.getNumberAttribute('num_cache_clusters');
  }

  // num_node_groups - computed: true, optional: false, required: false
  public get numNodeGroups() {
    return this.getNumberAttribute('num_node_groups');
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

  // replicas_per_node_group - computed: true, optional: false, required: false
  public get replicasPerNodeGroup() {
    return this.getNumberAttribute('replicas_per_node_group');
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
    return this._replicationGroupId;
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
