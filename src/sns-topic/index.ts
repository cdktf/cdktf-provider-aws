/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnsTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}
  */
  readonly applicationFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}
  */
  readonly applicationSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}
  */
  readonly applicationSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}
  */
  readonly archivePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#delivery_policy SnsTopic#delivery_policy}
  */
  readonly deliveryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#display_name SnsTopic#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}
  */
  readonly fifoThroughputScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}
  */
  readonly fifoTopic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}
  */
  readonly firehoseFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}
  */
  readonly firehoseSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}
  */
  readonly firehoseSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}
  */
  readonly httpFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}
  */
  readonly httpSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}
  */
  readonly httpSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#id SnsTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}
  */
  readonly lambdaFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}
  */
  readonly lambdaSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}
  */
  readonly lambdaSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#name SnsTopic#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#name_prefix SnsTopic#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#policy SnsTopic#policy}
  */
  readonly policy?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#region SnsTopic#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}
  */
  readonly signatureVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}
  */
  readonly sqsFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}
  */
  readonly sqsSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}
  */
  readonly sqsSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#tags SnsTopic#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#tags_all SnsTopic#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}
  */
  readonly tracingConfig?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic aws_sns_topic}
*/
export class SnsTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sns_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnsTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnsTopic to import
  * @param importFromId The id of the existing SnsTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnsTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sns_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sns_topic aws_sns_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnsTopicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnsTopicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_topic',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
    this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
    this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
    this._archivePolicy = config.archivePolicy;
    this._contentBasedDeduplication = config.contentBasedDeduplication;
    this._deliveryPolicy = config.deliveryPolicy;
    this._displayName = config.displayName;
    this._fifoThroughputScope = config.fifoThroughputScope;
    this._fifoTopic = config.fifoTopic;
    this._firehoseFailureFeedbackRoleArn = config.firehoseFailureFeedbackRoleArn;
    this._firehoseSuccessFeedbackRoleArn = config.firehoseSuccessFeedbackRoleArn;
    this._firehoseSuccessFeedbackSampleRate = config.firehoseSuccessFeedbackSampleRate;
    this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
    this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
    this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
    this._id = config.id;
    this._kmsMasterKeyId = config.kmsMasterKeyId;
    this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
    this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
    this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
    this._region = config.region;
    this._signatureVersion = config.signatureVersion;
    this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
    this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
    this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tracingConfig = config.tracingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _applicationFailureFeedbackRoleArn?: string; 
  public get applicationFailureFeedbackRoleArn() {
    return this.getStringAttribute('application_failure_feedback_role_arn');
  }
  public set applicationFailureFeedbackRoleArn(value: string) {
    this._applicationFailureFeedbackRoleArn = value;
  }
  public resetApplicationFailureFeedbackRoleArn() {
    this._applicationFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFailureFeedbackRoleArnInput() {
    return this._applicationFailureFeedbackRoleArn;
  }

  // application_success_feedback_role_arn - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackRoleArn?: string; 
  public get applicationSuccessFeedbackRoleArn() {
    return this.getStringAttribute('application_success_feedback_role_arn');
  }
  public set applicationSuccessFeedbackRoleArn(value: string) {
    this._applicationSuccessFeedbackRoleArn = value;
  }
  public resetApplicationSuccessFeedbackRoleArn() {
    this._applicationSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSuccessFeedbackRoleArnInput() {
    return this._applicationSuccessFeedbackRoleArn;
  }

  // application_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackSampleRate?: number; 
  public get applicationSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('application_success_feedback_sample_rate');
  }
  public set applicationSuccessFeedbackSampleRate(value: number) {
    this._applicationSuccessFeedbackSampleRate = value;
  }
  public resetApplicationSuccessFeedbackSampleRate() {
    this._applicationSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSuccessFeedbackSampleRateInput() {
    return this._applicationSuccessFeedbackSampleRate;
  }

  // archive_policy - computed: false, optional: true, required: false
  private _archivePolicy?: string; 
  public get archivePolicy() {
    return this.getStringAttribute('archive_policy');
  }
  public set archivePolicy(value: string) {
    this._archivePolicy = value;
  }
  public resetArchivePolicy() {
    this._archivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivePolicyInput() {
    return this._archivePolicy;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // beginning_archive_time - computed: true, optional: false, required: false
  public get beginningArchiveTime() {
    return this.getStringAttribute('beginning_archive_time');
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

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string; 
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string) {
    this._deliveryPolicy = value;
  }
  public resetDeliveryPolicy() {
    this._deliveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPolicyInput() {
    return this._deliveryPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fifo_throughput_scope - computed: true, optional: true, required: false
  private _fifoThroughputScope?: string; 
  public get fifoThroughputScope() {
    return this.getStringAttribute('fifo_throughput_scope');
  }
  public set fifoThroughputScope(value: string) {
    this._fifoThroughputScope = value;
  }
  public resetFifoThroughputScope() {
    this._fifoThroughputScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoThroughputScopeInput() {
    return this._fifoThroughputScope;
  }

  // fifo_topic - computed: false, optional: true, required: false
  private _fifoTopic?: boolean | cdktf.IResolvable; 
  public get fifoTopic() {
    return this.getBooleanAttribute('fifo_topic');
  }
  public set fifoTopic(value: boolean | cdktf.IResolvable) {
    this._fifoTopic = value;
  }
  public resetFifoTopic() {
    this._fifoTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoTopicInput() {
    return this._fifoTopic;
  }

  // firehose_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _firehoseFailureFeedbackRoleArn?: string; 
  public get firehoseFailureFeedbackRoleArn() {
    return this.getStringAttribute('firehose_failure_feedback_role_arn');
  }
  public set firehoseFailureFeedbackRoleArn(value: string) {
    this._firehoseFailureFeedbackRoleArn = value;
  }
  public resetFirehoseFailureFeedbackRoleArn() {
    this._firehoseFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseFailureFeedbackRoleArnInput() {
    return this._firehoseFailureFeedbackRoleArn;
  }

  // firehose_success_feedback_role_arn - computed: false, optional: true, required: false
  private _firehoseSuccessFeedbackRoleArn?: string; 
  public get firehoseSuccessFeedbackRoleArn() {
    return this.getStringAttribute('firehose_success_feedback_role_arn');
  }
  public set firehoseSuccessFeedbackRoleArn(value: string) {
    this._firehoseSuccessFeedbackRoleArn = value;
  }
  public resetFirehoseSuccessFeedbackRoleArn() {
    this._firehoseSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseSuccessFeedbackRoleArnInput() {
    return this._firehoseSuccessFeedbackRoleArn;
  }

  // firehose_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _firehoseSuccessFeedbackSampleRate?: number; 
  public get firehoseSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('firehose_success_feedback_sample_rate');
  }
  public set firehoseSuccessFeedbackSampleRate(value: number) {
    this._firehoseSuccessFeedbackSampleRate = value;
  }
  public resetFirehoseSuccessFeedbackSampleRate() {
    this._firehoseSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseSuccessFeedbackSampleRateInput() {
    return this._firehoseSuccessFeedbackSampleRate;
  }

  // http_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _httpFailureFeedbackRoleArn?: string; 
  public get httpFailureFeedbackRoleArn() {
    return this.getStringAttribute('http_failure_feedback_role_arn');
  }
  public set httpFailureFeedbackRoleArn(value: string) {
    this._httpFailureFeedbackRoleArn = value;
  }
  public resetHttpFailureFeedbackRoleArn() {
    this._httpFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailureFeedbackRoleArnInput() {
    return this._httpFailureFeedbackRoleArn;
  }

  // http_success_feedback_role_arn - computed: false, optional: true, required: false
  private _httpSuccessFeedbackRoleArn?: string; 
  public get httpSuccessFeedbackRoleArn() {
    return this.getStringAttribute('http_success_feedback_role_arn');
  }
  public set httpSuccessFeedbackRoleArn(value: string) {
    this._httpSuccessFeedbackRoleArn = value;
  }
  public resetHttpSuccessFeedbackRoleArn() {
    this._httpSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessFeedbackRoleArnInput() {
    return this._httpSuccessFeedbackRoleArn;
  }

  // http_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _httpSuccessFeedbackSampleRate?: number; 
  public get httpSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('http_success_feedback_sample_rate');
  }
  public set httpSuccessFeedbackSampleRate(value: number) {
    this._httpSuccessFeedbackSampleRate = value;
  }
  public resetHttpSuccessFeedbackSampleRate() {
    this._httpSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessFeedbackSampleRateInput() {
    return this._httpSuccessFeedbackSampleRate;
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

  // lambda_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaFailureFeedbackRoleArn?: string; 
  public get lambdaFailureFeedbackRoleArn() {
    return this.getStringAttribute('lambda_failure_feedback_role_arn');
  }
  public set lambdaFailureFeedbackRoleArn(value: string) {
    this._lambdaFailureFeedbackRoleArn = value;
  }
  public resetLambdaFailureFeedbackRoleArn() {
    this._lambdaFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFailureFeedbackRoleArnInput() {
    return this._lambdaFailureFeedbackRoleArn;
  }

  // lambda_success_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackRoleArn?: string; 
  public get lambdaSuccessFeedbackRoleArn() {
    return this.getStringAttribute('lambda_success_feedback_role_arn');
  }
  public set lambdaSuccessFeedbackRoleArn(value: string) {
    this._lambdaSuccessFeedbackRoleArn = value;
  }
  public resetLambdaSuccessFeedbackRoleArn() {
    this._lambdaSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaSuccessFeedbackRoleArnInput() {
    return this._lambdaSuccessFeedbackRoleArn;
  }

  // lambda_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackSampleRate?: number; 
  public get lambdaSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('lambda_success_feedback_sample_rate');
  }
  public set lambdaSuccessFeedbackSampleRate(value: number) {
    this._lambdaSuccessFeedbackSampleRate = value;
  }
  public resetLambdaSuccessFeedbackSampleRate() {
    this._lambdaSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaSuccessFeedbackSampleRateInput() {
    return this._lambdaSuccessFeedbackSampleRate;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // signature_version - computed: true, optional: true, required: false
  private _signatureVersion?: number; 
  public get signatureVersion() {
    return this.getNumberAttribute('signature_version');
  }
  public set signatureVersion(value: number) {
    this._signatureVersion = value;
  }
  public resetSignatureVersion() {
    this._signatureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureVersionInput() {
    return this._signatureVersion;
  }

  // sqs_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsFailureFeedbackRoleArn?: string; 
  public get sqsFailureFeedbackRoleArn() {
    return this.getStringAttribute('sqs_failure_feedback_role_arn');
  }
  public set sqsFailureFeedbackRoleArn(value: string) {
    this._sqsFailureFeedbackRoleArn = value;
  }
  public resetSqsFailureFeedbackRoleArn() {
    this._sqsFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsFailureFeedbackRoleArnInput() {
    return this._sqsFailureFeedbackRoleArn;
  }

  // sqs_success_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackRoleArn?: string; 
  public get sqsSuccessFeedbackRoleArn() {
    return this.getStringAttribute('sqs_success_feedback_role_arn');
  }
  public set sqsSuccessFeedbackRoleArn(value: string) {
    this._sqsSuccessFeedbackRoleArn = value;
  }
  public resetSqsSuccessFeedbackRoleArn() {
    this._sqsSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsSuccessFeedbackRoleArnInput() {
    return this._sqsSuccessFeedbackRoleArn;
  }

  // sqs_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackSampleRate?: number; 
  public get sqsSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('sqs_success_feedback_sample_rate');
  }
  public set sqsSuccessFeedbackSampleRate(value: number) {
    this._sqsSuccessFeedbackSampleRate = value;
  }
  public resetSqsSuccessFeedbackSampleRate() {
    this._sqsSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsSuccessFeedbackSampleRateInput() {
    return this._sqsSuccessFeedbackSampleRate;
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

  // tracing_config - computed: true, optional: true, required: false
  private _tracingConfig?: string; 
  public get tracingConfig() {
    return this.getStringAttribute('tracing_config');
  }
  public set tracingConfig(value: string) {
    this._tracingConfig = value;
  }
  public resetTracingConfig() {
    this._tracingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
      application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
      application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
      archive_policy: cdktf.stringToTerraform(this._archivePolicy),
      content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
      delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      fifo_throughput_scope: cdktf.stringToTerraform(this._fifoThroughputScope),
      fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
      firehose_failure_feedback_role_arn: cdktf.stringToTerraform(this._firehoseFailureFeedbackRoleArn),
      firehose_success_feedback_role_arn: cdktf.stringToTerraform(this._firehoseSuccessFeedbackRoleArn),
      firehose_success_feedback_sample_rate: cdktf.numberToTerraform(this._firehoseSuccessFeedbackSampleRate),
      http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
      http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
      http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
      id: cdktf.stringToTerraform(this._id),
      kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
      lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
      lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
      lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      policy: cdktf.stringToTerraform(this._policy),
      region: cdktf.stringToTerraform(this._region),
      signature_version: cdktf.numberToTerraform(this._signatureVersion),
      sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
      sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
      sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      tracing_config: cdktf.stringToTerraform(this._tracingConfig),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_failure_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._applicationFailureFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_success_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._applicationSuccessFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_success_feedback_sample_rate: {
        value: cdktf.numberToHclTerraform(this._applicationSuccessFeedbackSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      archive_policy: {
        value: cdktf.stringToHclTerraform(this._archivePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_based_deduplication: {
        value: cdktf.booleanToHclTerraform(this._contentBasedDeduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivery_policy: {
        value: cdktf.stringToHclTerraform(this._deliveryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fifo_throughput_scope: {
        value: cdktf.stringToHclTerraform(this._fifoThroughputScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fifo_topic: {
        value: cdktf.booleanToHclTerraform(this._fifoTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firehose_failure_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._firehoseFailureFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firehose_success_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._firehoseSuccessFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firehose_success_feedback_sample_rate: {
        value: cdktf.numberToHclTerraform(this._firehoseSuccessFeedbackSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_failure_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._httpFailureFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_success_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._httpSuccessFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_success_feedback_sample_rate: {
        value: cdktf.numberToHclTerraform(this._httpSuccessFeedbackSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_master_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsMasterKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_failure_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._lambdaFailureFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_success_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._lambdaSuccessFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_success_feedback_sample_rate: {
        value: cdktf.numberToHclTerraform(this._lambdaSuccessFeedbackSampleRate),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_version: {
        value: cdktf.numberToHclTerraform(this._signatureVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sqs_failure_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._sqsFailureFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqs_success_feedback_role_arn: {
        value: cdktf.stringToHclTerraform(this._sqsSuccessFeedbackRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sqs_success_feedback_sample_rate: {
        value: cdktf.numberToHclTerraform(this._sqsSuccessFeedbackSampleRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      tracing_config: {
        value: cdktf.stringToHclTerraform(this._tracingConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
