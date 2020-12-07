// https://www.terraform.io/docs/providers/aws/r/sns_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnsTopicConfig extends cdktf.TerraformMetaArguments {
  readonly applicationFailureFeedbackRoleArn?: string;
  readonly applicationSuccessFeedbackRoleArn?: string;
  readonly applicationSuccessFeedbackSampleRate?: number;
  readonly deliveryPolicy?: string;
  readonly displayName?: string;
  readonly httpFailureFeedbackRoleArn?: string;
  readonly httpSuccessFeedbackRoleArn?: string;
  readonly httpSuccessFeedbackSampleRate?: number;
  readonly kmsMasterKeyId?: string;
  readonly lambdaFailureFeedbackRoleArn?: string;
  readonly lambdaSuccessFeedbackRoleArn?: string;
  readonly lambdaSuccessFeedbackSampleRate?: number;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly policy?: string;
  readonly sqsFailureFeedbackRoleArn?: string;
  readonly sqsSuccessFeedbackRoleArn?: string;
  readonly sqsSuccessFeedbackSampleRate?: number;
  readonly tags?: { [key: string]: string };
}

// Resource

export class SnsTopic extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SnsTopicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_topic',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
    this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
    this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
    this._deliveryPolicy = config.deliveryPolicy;
    this._displayName = config.displayName;
    this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
    this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
    this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
    this._kmsMasterKeyId = config.kmsMasterKeyId;
    this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
    this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
    this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
    this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
    this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
    this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _applicationFailureFeedbackRoleArn?: string;
  public get applicationFailureFeedbackRoleArn() {
    return this.getStringAttribute('application_failure_feedback_role_arn');
  }
  public set applicationFailureFeedbackRoleArn(value: string ) {
    this._applicationFailureFeedbackRoleArn = value;
  }
  public resetApplicationFailureFeedbackRoleArn() {
    this._applicationFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFailureFeedbackRoleArnInput() {
    return this._applicationFailureFeedbackRoleArn
  }

  // application_success_feedback_role_arn - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackRoleArn?: string;
  public get applicationSuccessFeedbackRoleArn() {
    return this.getStringAttribute('application_success_feedback_role_arn');
  }
  public set applicationSuccessFeedbackRoleArn(value: string ) {
    this._applicationSuccessFeedbackRoleArn = value;
  }
  public resetApplicationSuccessFeedbackRoleArn() {
    this._applicationSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSuccessFeedbackRoleArnInput() {
    return this._applicationSuccessFeedbackRoleArn
  }

  // application_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackSampleRate?: number;
  public get applicationSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('application_success_feedback_sample_rate');
  }
  public set applicationSuccessFeedbackSampleRate(value: number ) {
    this._applicationSuccessFeedbackSampleRate = value;
  }
  public resetApplicationSuccessFeedbackSampleRate() {
    this._applicationSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSuccessFeedbackSampleRateInput() {
    return this._applicationSuccessFeedbackSampleRate
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string;
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string ) {
    this._deliveryPolicy = value;
  }
  public resetDeliveryPolicy() {
    this._deliveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPolicyInput() {
    return this._deliveryPolicy
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // http_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _httpFailureFeedbackRoleArn?: string;
  public get httpFailureFeedbackRoleArn() {
    return this.getStringAttribute('http_failure_feedback_role_arn');
  }
  public set httpFailureFeedbackRoleArn(value: string ) {
    this._httpFailureFeedbackRoleArn = value;
  }
  public resetHttpFailureFeedbackRoleArn() {
    this._httpFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailureFeedbackRoleArnInput() {
    return this._httpFailureFeedbackRoleArn
  }

  // http_success_feedback_role_arn - computed: false, optional: true, required: false
  private _httpSuccessFeedbackRoleArn?: string;
  public get httpSuccessFeedbackRoleArn() {
    return this.getStringAttribute('http_success_feedback_role_arn');
  }
  public set httpSuccessFeedbackRoleArn(value: string ) {
    this._httpSuccessFeedbackRoleArn = value;
  }
  public resetHttpSuccessFeedbackRoleArn() {
    this._httpSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessFeedbackRoleArnInput() {
    return this._httpSuccessFeedbackRoleArn
  }

  // http_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _httpSuccessFeedbackSampleRate?: number;
  public get httpSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('http_success_feedback_sample_rate');
  }
  public set httpSuccessFeedbackSampleRate(value: number ) {
    this._httpSuccessFeedbackSampleRate = value;
  }
  public resetHttpSuccessFeedbackSampleRate() {
    this._httpSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessFeedbackSampleRateInput() {
    return this._httpSuccessFeedbackSampleRate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string;
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string ) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId
  }

  // lambda_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaFailureFeedbackRoleArn?: string;
  public get lambdaFailureFeedbackRoleArn() {
    return this.getStringAttribute('lambda_failure_feedback_role_arn');
  }
  public set lambdaFailureFeedbackRoleArn(value: string ) {
    this._lambdaFailureFeedbackRoleArn = value;
  }
  public resetLambdaFailureFeedbackRoleArn() {
    this._lambdaFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFailureFeedbackRoleArnInput() {
    return this._lambdaFailureFeedbackRoleArn
  }

  // lambda_success_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackRoleArn?: string;
  public get lambdaSuccessFeedbackRoleArn() {
    return this.getStringAttribute('lambda_success_feedback_role_arn');
  }
  public set lambdaSuccessFeedbackRoleArn(value: string ) {
    this._lambdaSuccessFeedbackRoleArn = value;
  }
  public resetLambdaSuccessFeedbackRoleArn() {
    this._lambdaSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaSuccessFeedbackRoleArnInput() {
    return this._lambdaSuccessFeedbackRoleArn
  }

  // lambda_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackSampleRate?: number;
  public get lambdaSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('lambda_success_feedback_sample_rate');
  }
  public set lambdaSuccessFeedbackSampleRate(value: number ) {
    this._lambdaSuccessFeedbackSampleRate = value;
  }
  public resetLambdaSuccessFeedbackSampleRate() {
    this._lambdaSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaSuccessFeedbackSampleRateInput() {
    return this._lambdaSuccessFeedbackSampleRate
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
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
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
    return this._policy
  }

  // sqs_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsFailureFeedbackRoleArn?: string;
  public get sqsFailureFeedbackRoleArn() {
    return this.getStringAttribute('sqs_failure_feedback_role_arn');
  }
  public set sqsFailureFeedbackRoleArn(value: string ) {
    this._sqsFailureFeedbackRoleArn = value;
  }
  public resetSqsFailureFeedbackRoleArn() {
    this._sqsFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsFailureFeedbackRoleArnInput() {
    return this._sqsFailureFeedbackRoleArn
  }

  // sqs_success_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackRoleArn?: string;
  public get sqsSuccessFeedbackRoleArn() {
    return this.getStringAttribute('sqs_success_feedback_role_arn');
  }
  public set sqsSuccessFeedbackRoleArn(value: string ) {
    this._sqsSuccessFeedbackRoleArn = value;
  }
  public resetSqsSuccessFeedbackRoleArn() {
    this._sqsSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsSuccessFeedbackRoleArnInput() {
    return this._sqsSuccessFeedbackRoleArn
  }

  // sqs_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackSampleRate?: number;
  public get sqsSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('sqs_success_feedback_sample_rate');
  }
  public set sqsSuccessFeedbackSampleRate(value: number ) {
    this._sqsSuccessFeedbackSampleRate = value;
  }
  public resetSqsSuccessFeedbackSampleRate() {
    this._sqsSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsSuccessFeedbackSampleRateInput() {
    return this._sqsSuccessFeedbackSampleRate
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
      application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
      application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
      delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
      http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
      http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
      kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
      lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
      lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
      lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      policy: cdktf.stringToTerraform(this._policy),
      sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
      sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
      sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
