// https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
  readonly encryptionType?: string;
  readonly enforceConsumerDeletion?: boolean;
  readonly kmsKeyId?: string;
  readonly name: string;
  readonly retentionPeriod?: number;
  readonly shardCount: number;
  readonly shardLevelMetrics?: string[];
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: KinesisStreamTimeouts;
}
export interface KinesisStreamTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function kinesisStreamTimeoutsToTerraform(struct?: KinesisStreamTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class KinesisStream extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KinesisStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._encryptionType = config.encryptionType;
    this._enforceConsumerDeletion = config.enforceConsumerDeletion;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._retentionPeriod = config.retentionPeriod;
    this._shardCount = config.shardCount;
    this._shardLevelMetrics = config.shardLevelMetrics;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string;
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string ) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType
  }

  // enforce_consumer_deletion - computed: false, optional: true, required: false
  private _enforceConsumerDeletion?: boolean;
  public get enforceConsumerDeletion() {
    return this.getBooleanAttribute('enforce_consumer_deletion');
  }
  public set enforceConsumerDeletion(value: boolean ) {
    this._enforceConsumerDeletion = value;
  }
  public resetEnforceConsumerDeletion() {
    this._enforceConsumerDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceConsumerDeletionInput() {
    return this._enforceConsumerDeletion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number;
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number ) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod
  }

  // shard_count - computed: false, optional: false, required: true
  private _shardCount: number;
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount
  }

  // shard_level_metrics - computed: false, optional: true, required: false
  private _shardLevelMetrics?: string[];
  public get shardLevelMetrics() {
    return this.getListAttribute('shard_level_metrics');
  }
  public set shardLevelMetrics(value: string[] ) {
    this._shardLevelMetrics = value;
  }
  public resetShardLevelMetrics() {
    this._shardLevelMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardLevelMetricsInput() {
    return this._shardLevelMetrics
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KinesisStreamTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KinesisStreamTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_type: cdktf.stringToTerraform(this._encryptionType),
      enforce_consumer_deletion: cdktf.booleanToTerraform(this._enforceConsumerDeletion),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      shard_level_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._shardLevelMetrics),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: kinesisStreamTimeoutsToTerraform(this._timeouts),
    };
  }
}
