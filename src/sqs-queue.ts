// https://www.terraform.io/docs/providers/aws/r/sqs_queue.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "content_based_deduplication": {
        "type": "bool",
        "optional": true
      },
      "delay_seconds": {
        "type": "number",
        "optional": true
      },
      "fifo_queue": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_data_key_reuse_period_seconds": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "kms_master_key_id": {
        "type": "string",
        "optional": true
      },
      "max_message_size": {
        "type": "number",
        "optional": true
      },
      "message_retention_seconds": {
        "type": "number",
        "optional": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "policy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "receive_wait_time_seconds": {
        "type": "number",
        "optional": true
      },
      "redrive_policy": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "visibility_timeout_seconds": {
        "type": "number",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SqsQueueConfig extends TerraformMetaArguments {
  readonly contentBasedDeduplication?: boolean;
  readonly delaySeconds?: number;
  readonly fifoQueue?: boolean;
  readonly kmsDataKeyReusePeriodSeconds?: number;
  readonly kmsMasterKeyId?: string;
  readonly maxMessageSize?: number;
  readonly messageRetentionSeconds?: number;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly policy?: string;
  readonly receiveWaitTimeSeconds?: number;
  readonly redrivePolicy?: string;
  readonly tags?: { [key: string]: string };
  readonly visibilityTimeoutSeconds?: number;
}

// Resource

export class SqsQueue extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqsQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contentBasedDeduplication = config.contentBasedDeduplication;
    this._delaySeconds = config.delaySeconds;
    this._fifoQueue = config.fifoQueue;
    this._kmsDataKeyReusePeriodSeconds = config.kmsDataKeyReusePeriodSeconds;
    this._kmsMasterKeyId = config.kmsMasterKeyId;
    this._maxMessageSize = config.maxMessageSize;
    this._messageRetentionSeconds = config.messageRetentionSeconds;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
    this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
    this._redrivePolicy = config.redrivePolicy;
    this._tags = config.tags;
    this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content_based_deduplication - computed: false, optional: true, required: false
  private _contentBasedDeduplication?: boolean;
  public get contentBasedDeduplication() {
    return this._contentBasedDeduplication;
  }
  public set contentBasedDeduplication(value: boolean | undefined) {
    this._contentBasedDeduplication = value;
  }

  // delay_seconds - computed: false, optional: true, required: false
  private _delaySeconds?: number;
  public get delaySeconds() {
    return this._delaySeconds;
  }
  public set delaySeconds(value: number | undefined) {
    this._delaySeconds = value;
  }

  // fifo_queue - computed: false, optional: true, required: false
  private _fifoQueue?: boolean;
  public get fifoQueue() {
    return this._fifoQueue;
  }
  public set fifoQueue(value: boolean | undefined) {
    this._fifoQueue = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_data_key_reuse_period_seconds - computed: true, optional: true, required: false
  private _kmsDataKeyReusePeriodSeconds?: number;
  public get kmsDataKeyReusePeriodSeconds() {
    return this._kmsDataKeyReusePeriodSeconds ?? this.getNumberAttribute('kms_data_key_reuse_period_seconds');
  }
  public set kmsDataKeyReusePeriodSeconds(value: number | undefined) {
    this._kmsDataKeyReusePeriodSeconds = value;
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string;
  public get kmsMasterKeyId() {
    return this._kmsMasterKeyId;
  }
  public set kmsMasterKeyId(value: string | undefined) {
    this._kmsMasterKeyId = value;
  }

  // max_message_size - computed: false, optional: true, required: false
  private _maxMessageSize?: number;
  public get maxMessageSize() {
    return this._maxMessageSize;
  }
  public set maxMessageSize(value: number | undefined) {
    this._maxMessageSize = value;
  }

  // message_retention_seconds - computed: false, optional: true, required: false
  private _messageRetentionSeconds?: number;
  public get messageRetentionSeconds() {
    return this._messageRetentionSeconds;
  }
  public set messageRetentionSeconds(value: number | undefined) {
    this._messageRetentionSeconds = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy ?? this.getStringAttribute('policy');
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // receive_wait_time_seconds - computed: false, optional: true, required: false
  private _receiveWaitTimeSeconds?: number;
  public get receiveWaitTimeSeconds() {
    return this._receiveWaitTimeSeconds;
  }
  public set receiveWaitTimeSeconds(value: number | undefined) {
    this._receiveWaitTimeSeconds = value;
  }

  // redrive_policy - computed: false, optional: true, required: false
  private _redrivePolicy?: string;
  public get redrivePolicy() {
    return this._redrivePolicy;
  }
  public set redrivePolicy(value: string | undefined) {
    this._redrivePolicy = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // visibility_timeout_seconds - computed: false, optional: true, required: false
  private _visibilityTimeoutSeconds?: number;
  public get visibilityTimeoutSeconds() {
    return this._visibilityTimeoutSeconds;
  }
  public set visibilityTimeoutSeconds(value: number | undefined) {
    this._visibilityTimeoutSeconds = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      content_based_deduplication: this._contentBasedDeduplication,
      delay_seconds: this._delaySeconds,
      fifo_queue: this._fifoQueue,
      kms_data_key_reuse_period_seconds: this._kmsDataKeyReusePeriodSeconds,
      kms_master_key_id: this._kmsMasterKeyId,
      max_message_size: this._maxMessageSize,
      message_retention_seconds: this._messageRetentionSeconds,
      name: this._name,
      name_prefix: this._namePrefix,
      policy: this._policy,
      receive_wait_time_seconds: this._receiveWaitTimeSeconds,
      redrive_policy: this._redrivePolicy,
      tags: this._tags,
      visibility_timeout_seconds: this._visibilityTimeoutSeconds,
    };
  }
}
