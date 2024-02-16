/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqsQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}
  */
  readonly deduplicationScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}
  */
  readonly delaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}
  */
  readonly fifoQueue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}
  */
  readonly fifoThroughputLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#id SqsQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}
  */
  readonly kmsDataKeyReusePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}
  */
  readonly maxMessageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}
  */
  readonly messageRetentionSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#name SqsQueue#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#policy SqsQueue#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}
  */
  readonly receiveWaitTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}
  */
  readonly redriveAllowPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}
  */
  readonly redrivePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}
  */
  readonly sqsManagedSseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#tags SqsQueue#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}
  */
  readonly visibilityTimeoutSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue aws_sqs_queue}
*/
export class SqsQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sqs_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqsQueue to import
  * @param importFromId The id of the existing SqsQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqsQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sqs_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/sqs_queue aws_sqs_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqsQueueConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqsQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.37.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentBasedDeduplication = config.contentBasedDeduplication;
    this._deduplicationScope = config.deduplicationScope;
    this._delaySeconds = config.delaySeconds;
    this._fifoQueue = config.fifoQueue;
    this._fifoThroughputLimit = config.fifoThroughputLimit;
    this._id = config.id;
    this._kmsDataKeyReusePeriodSeconds = config.kmsDataKeyReusePeriodSeconds;
    this._kmsMasterKeyId = config.kmsMasterKeyId;
    this._maxMessageSize = config.maxMessageSize;
    this._messageRetentionSeconds = config.messageRetentionSeconds;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
    this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
    this._redriveAllowPolicy = config.redriveAllowPolicy;
    this._redrivePolicy = config.redrivePolicy;
    this._sqsManagedSseEnabled = config.sqsManagedSseEnabled;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content_based_deduplication - computed: false, optional: true, required: false
  private _contentBasedDeduplication?: boolean | cdktf.IResolvable; 
  public get contentBasedDeduplication() {
    return this.getBooleanAttribute('content_based_deduplication');
  }
  public set contentBasedDeduplication(value: boolean | cdktf.IResolvable) {
    this._contentBasedDeduplication = value;
  }
  public resetContentBasedDeduplication() {
    this._contentBasedDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBasedDeduplicationInput() {
    return this._contentBasedDeduplication;
  }

  // deduplication_scope - computed: true, optional: true, required: false
  private _deduplicationScope?: string; 
  public get deduplicationScope() {
    return this.getStringAttribute('deduplication_scope');
  }
  public set deduplicationScope(value: string) {
    this._deduplicationScope = value;
  }
  public resetDeduplicationScope() {
    this._deduplicationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationScopeInput() {
    return this._deduplicationScope;
  }

  // delay_seconds - computed: false, optional: true, required: false
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
  }

  // fifo_queue - computed: false, optional: true, required: false
  private _fifoQueue?: boolean | cdktf.IResolvable; 
  public get fifoQueue() {
    return this.getBooleanAttribute('fifo_queue');
  }
  public set fifoQueue(value: boolean | cdktf.IResolvable) {
    this._fifoQueue = value;
  }
  public resetFifoQueue() {
    this._fifoQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoQueueInput() {
    return this._fifoQueue;
  }

  // fifo_throughput_limit - computed: true, optional: true, required: false
  private _fifoThroughputLimit?: string; 
  public get fifoThroughputLimit() {
    return this.getStringAttribute('fifo_throughput_limit');
  }
  public set fifoThroughputLimit(value: string) {
    this._fifoThroughputLimit = value;
  }
  public resetFifoThroughputLimit() {
    this._fifoThroughputLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoThroughputLimitInput() {
    return this._fifoThroughputLimit;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms_data_key_reuse_period_seconds - computed: true, optional: true, required: false
  private _kmsDataKeyReusePeriodSeconds?: number; 
  public get kmsDataKeyReusePeriodSeconds() {
    return this.getNumberAttribute('kms_data_key_reuse_period_seconds');
  }
  public set kmsDataKeyReusePeriodSeconds(value: number) {
    this._kmsDataKeyReusePeriodSeconds = value;
  }
  public resetKmsDataKeyReusePeriodSeconds() {
    this._kmsDataKeyReusePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsDataKeyReusePeriodSecondsInput() {
    return this._kmsDataKeyReusePeriodSeconds;
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId;
  }

  // max_message_size - computed: false, optional: true, required: false
  private _maxMessageSize?: number; 
  public get maxMessageSize() {
    return this.getNumberAttribute('max_message_size');
  }
  public set maxMessageSize(value: number) {
    this._maxMessageSize = value;
  }
  public resetMaxMessageSize() {
    this._maxMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeInput() {
    return this._maxMessageSize;
  }

  // message_retention_seconds - computed: false, optional: true, required: false
  private _messageRetentionSeconds?: number; 
  public get messageRetentionSeconds() {
    return this.getNumberAttribute('message_retention_seconds');
  }
  public set messageRetentionSeconds(value: number) {
    this._messageRetentionSeconds = value;
  }
  public resetMessageRetentionSeconds() {
    this._messageRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionSecondsInput() {
    return this._messageRetentionSeconds;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // receive_wait_time_seconds - computed: false, optional: true, required: false
  private _receiveWaitTimeSeconds?: number; 
  public get receiveWaitTimeSeconds() {
    return this.getNumberAttribute('receive_wait_time_seconds');
  }
  public set receiveWaitTimeSeconds(value: number) {
    this._receiveWaitTimeSeconds = value;
  }
  public resetReceiveWaitTimeSeconds() {
    this._receiveWaitTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWaitTimeSecondsInput() {
    return this._receiveWaitTimeSeconds;
  }

  // redrive_allow_policy - computed: true, optional: true, required: false
  private _redriveAllowPolicy?: string; 
  public get redriveAllowPolicy() {
    return this.getStringAttribute('redrive_allow_policy');
  }
  public set redriveAllowPolicy(value: string) {
    this._redriveAllowPolicy = value;
  }
  public resetRedriveAllowPolicy() {
    this._redriveAllowPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redriveAllowPolicyInput() {
    return this._redriveAllowPolicy;
  }

  // redrive_policy - computed: true, optional: true, required: false
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  public resetRedrivePolicy() {
    this._redrivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
  }

  // sqs_managed_sse_enabled - computed: true, optional: true, required: false
  private _sqsManagedSseEnabled?: boolean | cdktf.IResolvable; 
  public get sqsManagedSseEnabled() {
    return this.getBooleanAttribute('sqs_managed_sse_enabled');
  }
  public set sqsManagedSseEnabled(value: boolean | cdktf.IResolvable) {
    this._sqsManagedSseEnabled = value;
  }
  public resetSqsManagedSseEnabled() {
    this._sqsManagedSseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsManagedSseEnabledInput() {
    return this._sqsManagedSseEnabled;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // visibility_timeout_seconds - computed: false, optional: true, required: false
  private _visibilityTimeoutSeconds?: number; 
  public get visibilityTimeoutSeconds() {
    return this.getNumberAttribute('visibility_timeout_seconds');
  }
  public set visibilityTimeoutSeconds(value: number) {
    this._visibilityTimeoutSeconds = value;
  }
  public resetVisibilityTimeoutSeconds() {
    this._visibilityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutSecondsInput() {
    return this._visibilityTimeoutSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
      deduplication_scope: cdktf.stringToTerraform(this._deduplicationScope),
      delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
      fifo_queue: cdktf.booleanToTerraform(this._fifoQueue),
      fifo_throughput_limit: cdktf.stringToTerraform(this._fifoThroughputLimit),
      id: cdktf.stringToTerraform(this._id),
      kms_data_key_reuse_period_seconds: cdktf.numberToTerraform(this._kmsDataKeyReusePeriodSeconds),
      kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
      max_message_size: cdktf.numberToTerraform(this._maxMessageSize),
      message_retention_seconds: cdktf.numberToTerraform(this._messageRetentionSeconds),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      policy: cdktf.stringToTerraform(this._policy),
      receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
      redrive_allow_policy: cdktf.stringToTerraform(this._redriveAllowPolicy),
      redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
      sqs_managed_sse_enabled: cdktf.booleanToTerraform(this._sqsManagedSseEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      visibility_timeout_seconds: cdktf.numberToTerraform(this._visibilityTimeoutSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_based_deduplication: {
        value: cdktf.booleanToHclTerraform(this._contentBasedDeduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deduplication_scope: {
        value: cdktf.stringToHclTerraform(this._deduplicationScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_seconds: {
        value: cdktf.numberToHclTerraform(this._delaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fifo_queue: {
        value: cdktf.booleanToHclTerraform(this._fifoQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fifo_throughput_limit: {
        value: cdktf.stringToHclTerraform(this._fifoThroughputLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_data_key_reuse_period_seconds: {
        value: cdktf.numberToHclTerraform(this._kmsDataKeyReusePeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms_master_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsMasterKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_size: {
        value: cdktf.numberToHclTerraform(this._maxMessageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_retention_seconds: {
        value: cdktf.numberToHclTerraform(this._messageRetentionSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_wait_time_seconds: {
        value: cdktf.numberToHclTerraform(this._receiveWaitTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redrive_allow_policy: {
        value: cdktf.stringToHclTerraform(this._redriveAllowPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redrive_policy: {
        value: cdktf.stringToHclTerraform(this._redrivePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqs_managed_sse_enabled: {
        value: cdktf.booleanToHclTerraform(this._sqsManagedSseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      visibility_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._visibilityTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
