// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Kinesis
*/
export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#encryption_type KinesisStream#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}
  */
  readonly enforceConsumerDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#kms_key_id KinesisStream#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#name KinesisStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#retention_period KinesisStream#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_count KinesisStream#shard_count}
  */
  readonly shardCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_level_metrics KinesisStream#shard_level_metrics}
  */
  readonly shardLevelMetrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags KinesisStream#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags_all KinesisStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#timeouts KinesisStream#timeouts}
  */
  readonly timeouts?: KinesisStreamTimeouts;
}
export interface KinesisStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#create KinesisStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#delete KinesisStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#update KinesisStream#update}
  */
  readonly update?: string;
}

export function kinesisStreamTimeoutsToTerraform(struct?: KinesisStreamTimeoutsOutputReference | KinesisStreamTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class KinesisStreamTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KinesisStreamTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisStreamTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream}
*/
export class KinesisStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kinesis_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisStreamConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
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
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // enforce_consumer_deletion - computed: false, optional: true, required: false
  private _enforceConsumerDeletion?: boolean | cdktf.IResolvable; 
  public get enforceConsumerDeletion() {
    return this.getBooleanAttribute('enforce_consumer_deletion') as any;
  }
  public set enforceConsumerDeletion(value: boolean | cdktf.IResolvable) {
    this._enforceConsumerDeletion = value;
  }
  public resetEnforceConsumerDeletion() {
    this._enforceConsumerDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceConsumerDeletionInput() {
    return this._enforceConsumerDeletion;
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
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // shard_count - computed: false, optional: false, required: true
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // shard_level_metrics - computed: false, optional: true, required: false
  private _shardLevelMetrics?: string[]; 
  public get shardLevelMetrics() {
    return this.getListAttribute('shard_level_metrics');
  }
  public set shardLevelMetrics(value: string[]) {
    this._shardLevelMetrics = value;
  }
  public resetShardLevelMetrics() {
    this._shardLevelMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardLevelMetricsInput() {
    return this._shardLevelMetrics;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KinesisStreamTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KinesisStreamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeouts: kinesisStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
