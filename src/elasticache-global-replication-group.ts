// https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheGlobalReplicationGroupConfig extends cdktf.TerraformMetaArguments {
  readonly globalReplicationGroupDescription?: string;
  readonly globalReplicationGroupIdSuffix: string;
  readonly primaryReplicationGroupId: string;
}

// Resource

export class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this.getBooleanAttribute('at_rest_encryption_enabled');
  }

  // auth_token_enabled - computed: true, optional: false, required: false
  public get authTokenEnabled() {
    return this.getBooleanAttribute('auth_token_enabled');
  }

  // cache_node_type - computed: true, optional: false, required: false
  public get cacheNodeType() {
    return this.getStringAttribute('cache_node_type');
  }

  // cluster_enabled - computed: true, optional: false, required: false
  public get clusterEnabled() {
    return this.getBooleanAttribute('cluster_enabled');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // global_replication_group_description - computed: false, optional: true, required: false
  private _globalReplicationGroupDescription?: string;
  public get globalReplicationGroupDescription() {
    return this.getStringAttribute('global_replication_group_description');
  }
  public set globalReplicationGroupDescription(value: string ) {
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
  private _globalReplicationGroupIdSuffix: string;
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
  private _primaryReplicationGroupId: string;
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
    return this.getBooleanAttribute('transit_encryption_enabled');
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
