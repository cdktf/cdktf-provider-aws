// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS ElastiCache
*/
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
  private _globalReplicationGroupDescription?: string; 
  public get globalReplicationGroupDescription() {
    return this.getStringAttribute('global_replication_group_description');
  }
  public set globalReplicationGroupDescription(value: string) {
    this._globalReplicationGroupDescription = value;
  }
  public resetGlobalReplicationGroupDescription() {
    this._globalReplicationGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalReplicationGroupDescriptionInput() {
    return this._globalReplicationGroupDescription;
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
    return this._globalReplicationGroupIdSuffix;
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
    return this._primaryReplicationGroupId;
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
