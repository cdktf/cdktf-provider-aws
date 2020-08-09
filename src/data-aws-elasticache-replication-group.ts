// https://www.terraform.io/docs/providers/aws/r/data_aws_elasticache_replication_group.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "auth_token_enabled": {
        "type": "bool",
        "computed": true
      },
      "automatic_failover_enabled": {
        "type": "bool",
        "computed": true
      },
      "configuration_endpoint_address": {
        "type": "string",
        "computed": true
      },
      "id": {
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
        "computed": true
      },
      "number_cache_clusters": {
        "type": "number",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "primary_endpoint_address": {
        "type": "string",
        "computed": true
      },
      "replication_group_description": {
        "type": "string",
        "computed": true
      },
      "replication_group_id": {
        "type": "string",
        "required": true
      },
      "snapshot_retention_limit": {
        "type": "number",
        "computed": true
      },
      "snapshot_window": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsElasticacheReplicationGroupConfig extends TerraformMetaArguments {
  readonly replicationGroupId: string;
}

// Resource

export class DataAwsElasticacheReplicationGroup extends TerraformDataSource {

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

  // auth_token_enabled - computed: true, optional: false, required: true
  public get authTokenEnabled() {
    return this.getBooleanAttribute('auth_token_enabled');
  }

  // automatic_failover_enabled - computed: true, optional: false, required: true
  public get automaticFailoverEnabled() {
    return this.getBooleanAttribute('automatic_failover_enabled');
  }

  // configuration_endpoint_address - computed: true, optional: false, required: true
  public get configurationEndpointAddress() {
    return this.getStringAttribute('configuration_endpoint_address');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // member_clusters - computed: true, optional: false, required: true
  public get memberClusters() {
    return this.getListAttribute('member_clusters');
  }

  // node_type - computed: true, optional: false, required: true
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // number_cache_clusters - computed: true, optional: false, required: true
  public get numberCacheClusters() {
    return this.getNumberAttribute('number_cache_clusters');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // primary_endpoint_address - computed: true, optional: false, required: true
  public get primaryEndpointAddress() {
    return this.getStringAttribute('primary_endpoint_address');
  }

  // replication_group_description - computed: true, optional: false, required: true
  public get replicationGroupDescription() {
    return this.getStringAttribute('replication_group_description');
  }

  // replication_group_id - computed: false, optional: false, required: true
  private _replicationGroupId: string;
  public get replicationGroupId() {
    return this._replicationGroupId;
  }
  public set replicationGroupId(value: string) {
    this._replicationGroupId = value;
  }

  // snapshot_retention_limit - computed: true, optional: false, required: true
  public get snapshotRetentionLimit() {
    return this.getNumberAttribute('snapshot_retention_limit');
  }

  // snapshot_window - computed: true, optional: false, required: true
  public get snapshotWindow() {
    return this.getStringAttribute('snapshot_window');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_group_id: this._replicationGroupId,
    };
  }
}
