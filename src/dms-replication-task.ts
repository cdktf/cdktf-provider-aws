// https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
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

export class DmsReplicationTask extends cdktf.TerraformResource {

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
    return this.getStringAttribute('cdc_start_time');
  }
  public set cdcStartTime(value: string ) {
    this._cdcStartTime = value;
  }
  public resetCdcStartTime() {
    this._cdcStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcStartTimeInput() {
    return this._cdcStartTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // migration_type - computed: false, optional: false, required: true
  private _migrationType: string;
  public get migrationType() {
    return this.getStringAttribute('migration_type');
  }
  public set migrationType(value: string) {
    this._migrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationTypeInput() {
    return this._migrationType
  }

  // replication_instance_arn - computed: false, optional: false, required: true
  private _replicationInstanceArn: string;
  public get replicationInstanceArn() {
    return this.getStringAttribute('replication_instance_arn');
  }
  public set replicationInstanceArn(value: string) {
    this._replicationInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInstanceArnInput() {
    return this._replicationInstanceArn
  }

  // replication_task_arn - computed: true, optional: false, required: false
  public get replicationTaskArn() {
    return this.getStringAttribute('replication_task_arn');
  }

  // replication_task_id - computed: false, optional: false, required: true
  private _replicationTaskId: string;
  public get replicationTaskId() {
    return this.getStringAttribute('replication_task_id');
  }
  public set replicationTaskId(value: string) {
    this._replicationTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTaskIdInput() {
    return this._replicationTaskId
  }

  // replication_task_settings - computed: false, optional: true, required: false
  private _replicationTaskSettings?: string;
  public get replicationTaskSettings() {
    return this.getStringAttribute('replication_task_settings');
  }
  public set replicationTaskSettings(value: string ) {
    this._replicationTaskSettings = value;
  }
  public resetReplicationTaskSettings() {
    this._replicationTaskSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTaskSettingsInput() {
    return this._replicationTaskSettings
  }

  // source_endpoint_arn - computed: false, optional: false, required: true
  private _sourceEndpointArn: string;
  public get sourceEndpointArn() {
    return this.getStringAttribute('source_endpoint_arn');
  }
  public set sourceEndpointArn(value: string) {
    this._sourceEndpointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointArnInput() {
    return this._sourceEndpointArn
  }

  // table_mappings - computed: false, optional: false, required: true
  private _tableMappings: string;
  public get tableMappings() {
    return this.getStringAttribute('table_mappings');
  }
  public set tableMappings(value: string) {
    this._tableMappings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMappingsInput() {
    return this._tableMappings
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_endpoint_arn - computed: false, optional: false, required: true
  private _targetEndpointArn: string;
  public get targetEndpointArn() {
    return this.getStringAttribute('target_endpoint_arn');
  }
  public set targetEndpointArn(value: string) {
    this._targetEndpointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEndpointArnInput() {
    return this._targetEndpointArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_start_time: cdktf.stringToTerraform(this._cdcStartTime),
      migration_type: cdktf.stringToTerraform(this._migrationType),
      replication_instance_arn: cdktf.stringToTerraform(this._replicationInstanceArn),
      replication_task_id: cdktf.stringToTerraform(this._replicationTaskId),
      replication_task_settings: cdktf.stringToTerraform(this._replicationTaskSettings),
      source_endpoint_arn: cdktf.stringToTerraform(this._sourceEndpointArn),
      table_mappings: cdktf.stringToTerraform(this._tableMappings),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_endpoint_arn: cdktf.stringToTerraform(this._targetEndpointArn),
    };
  }
}
