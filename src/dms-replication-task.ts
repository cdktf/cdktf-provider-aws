// https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cdc_start_time": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "migration_type": {
        "type": "string",
        "required": true
      },
      "replication_instance_arn": {
        "type": "string",
        "required": true
      },
      "replication_task_arn": {
        "type": "string",
        "computed": true
      },
      "replication_task_id": {
        "type": "string",
        "required": true
      },
      "replication_task_settings": {
        "type": "string",
        "optional": true
      },
      "source_endpoint_arn": {
        "type": "string",
        "required": true
      },
      "table_mappings": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "target_endpoint_arn": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DmsReplicationTaskConfig extends TerraformMetaArguments {
  readonly cdcStartTime?: string;
  readonly migrationType: string;
  readonly replicationInstanceArn: string;
  readonly replicationTaskId: string;
  readonly replicationTaskSettings?: string;
  readonly sourceEndpointArn: string;
  readonly tableMappings: string;
  readonly tags?: { [key: string]: string };
  readonly targetEndpointArn: string;
}

// Resource

export class DmsReplicationTask extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DmsReplicationTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_task',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cdcStartTime = config.cdcStartTime;
    this._migrationType = config.migrationType;
    this._replicationInstanceArn = config.replicationInstanceArn;
    this._replicationTaskId = config.replicationTaskId;
    this._replicationTaskSettings = config.replicationTaskSettings;
    this._sourceEndpointArn = config.sourceEndpointArn;
    this._tableMappings = config.tableMappings;
    this._tags = config.tags;
    this._targetEndpointArn = config.targetEndpointArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_start_time - computed: false, optional: true, required: false
  private _cdcStartTime?: string;
  public get cdcStartTime() {
    return this._cdcStartTime;
  }
  public set cdcStartTime(value: string | undefined) {
    this._cdcStartTime = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // migration_type - computed: false, optional: false, required: true
  private _migrationType: string;
  public get migrationType() {
    return this._migrationType;
  }
  public set migrationType(value: string) {
    this._migrationType = value;
  }

  // replication_instance_arn - computed: false, optional: false, required: true
  private _replicationInstanceArn: string;
  public get replicationInstanceArn() {
    return this._replicationInstanceArn;
  }
  public set replicationInstanceArn(value: string) {
    this._replicationInstanceArn = value;
  }

  // replication_task_arn - computed: true, optional: false, required: true
  public get replicationTaskArn() {
    return this.getStringAttribute('replication_task_arn');
  }

  // replication_task_id - computed: false, optional: false, required: true
  private _replicationTaskId: string;
  public get replicationTaskId() {
    return this._replicationTaskId;
  }
  public set replicationTaskId(value: string) {
    this._replicationTaskId = value;
  }

  // replication_task_settings - computed: false, optional: true, required: false
  private _replicationTaskSettings?: string;
  public get replicationTaskSettings() {
    return this._replicationTaskSettings;
  }
  public set replicationTaskSettings(value: string | undefined) {
    this._replicationTaskSettings = value;
  }

  // source_endpoint_arn - computed: false, optional: false, required: true
  private _sourceEndpointArn: string;
  public get sourceEndpointArn() {
    return this._sourceEndpointArn;
  }
  public set sourceEndpointArn(value: string) {
    this._sourceEndpointArn = value;
  }

  // table_mappings - computed: false, optional: false, required: true
  private _tableMappings: string;
  public get tableMappings() {
    return this._tableMappings;
  }
  public set tableMappings(value: string) {
    this._tableMappings = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_endpoint_arn - computed: false, optional: false, required: true
  private _targetEndpointArn: string;
  public get targetEndpointArn() {
    return this._targetEndpointArn;
  }
  public set targetEndpointArn(value: string) {
    this._targetEndpointArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_start_time: this._cdcStartTime,
      migration_type: this._migrationType,
      replication_instance_arn: this._replicationInstanceArn,
      replication_task_id: this._replicationTaskId,
      replication_task_settings: this._replicationTaskSettings,
      source_endpoint_arn: this._sourceEndpointArn,
      table_mappings: this._tableMappings,
      tags: this._tags,
      target_endpoint_arn: this._targetEndpointArn,
    };
  }
}
