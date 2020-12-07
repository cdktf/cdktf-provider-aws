// https://www.terraform.io/docs/providers/aws/r/data_aws_elasticache_replication_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  readonly replicationGroupId: string;
}

// Resource

export class DataAwsElasticacheReplicationGroup extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_clusters - computed: true, optional: false, required: false
  public get memberClusters() {
    return this.getListAttribute('member_clusters');
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

  // replication_group_description - computed: true, optional: false, required: false
  public get replicationGroupDescription() {
    return this.getStringAttribute('replication_group_description');
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
