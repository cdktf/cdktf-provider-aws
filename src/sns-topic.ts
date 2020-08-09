// https://www.terraform.io/docs/providers/aws/r/sns_topic.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_failure_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "application_success_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "application_success_feedback_sample_rate": {
        "type": "number",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "delivery_policy": {
        "type": "string",
        "optional": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "http_failure_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "http_success_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "http_success_feedback_sample_rate": {
        "type": "number",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_master_key_id": {
        "type": "string",
        "optional": true
      },
      "lambda_failure_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "lambda_success_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "lambda_success_feedback_sample_rate": {
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
      "sqs_failure_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "sqs_success_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "sqs_success_feedback_sample_rate": {
        "type": "number",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
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

export interface SnsTopicConfig extends TerraformMetaArguments {
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

export class SnsTopic extends TerraformResource {

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
    return this._applicationFailureFeedbackRoleArn;
  }
  public set applicationFailureFeedbackRoleArn(value: string | undefined) {
    this._applicationFailureFeedbackRoleArn = value;
  }

  // application_success_feedback_role_arn - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackRoleArn?: string;
  public get applicationSuccessFeedbackRoleArn() {
    return this._applicationSuccessFeedbackRoleArn;
  }
  public set applicationSuccessFeedbackRoleArn(value: string | undefined) {
    this._applicationSuccessFeedbackRoleArn = value;
  }

  // application_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackSampleRate?: number;
  public get applicationSuccessFeedbackSampleRate() {
    return this._applicationSuccessFeedbackSampleRate;
  }
  public set applicationSuccessFeedbackSampleRate(value: number | undefined) {
    this._applicationSuccessFeedbackSampleRate = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string;
  public get deliveryPolicy() {
    return this._deliveryPolicy;
  }
  public set deliveryPolicy(value: string | undefined) {
    this._deliveryPolicy = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // http_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _httpFailureFeedbackRoleArn?: string;
  public get httpFailureFeedbackRoleArn() {
    return this._httpFailureFeedbackRoleArn;
  }
  public set httpFailureFeedbackRoleArn(value: string | undefined) {
    this._httpFailureFeedbackRoleArn = value;
  }

  // http_success_feedback_role_arn - computed: false, optional: true, required: false
  private _httpSuccessFeedbackRoleArn?: string;
  public get httpSuccessFeedbackRoleArn() {
    return this._httpSuccessFeedbackRoleArn;
  }
  public set httpSuccessFeedbackRoleArn(value: string | undefined) {
    this._httpSuccessFeedbackRoleArn = value;
  }

  // http_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _httpSuccessFeedbackSampleRate?: number;
  public get httpSuccessFeedbackSampleRate() {
    return this._httpSuccessFeedbackSampleRate;
  }
  public set httpSuccessFeedbackSampleRate(value: number | undefined) {
    this._httpSuccessFeedbackSampleRate = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string;
  public get kmsMasterKeyId() {
    return this._kmsMasterKeyId;
  }
  public set kmsMasterKeyId(value: string | undefined) {
    this._kmsMasterKeyId = value;
  }

  // lambda_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaFailureFeedbackRoleArn?: string;
  public get lambdaFailureFeedbackRoleArn() {
    return this._lambdaFailureFeedbackRoleArn;
  }
  public set lambdaFailureFeedbackRoleArn(value: string | undefined) {
    this._lambdaFailureFeedbackRoleArn = value;
  }

  // lambda_success_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackRoleArn?: string;
  public get lambdaSuccessFeedbackRoleArn() {
    return this._lambdaSuccessFeedbackRoleArn;
  }
  public set lambdaSuccessFeedbackRoleArn(value: string | undefined) {
    this._lambdaSuccessFeedbackRoleArn = value;
  }

  // lambda_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackSampleRate?: number;
  public get lambdaSuccessFeedbackSampleRate() {
    return this._lambdaSuccessFeedbackSampleRate;
  }
  public set lambdaSuccessFeedbackSampleRate(value: number | undefined) {
    this._lambdaSuccessFeedbackSampleRate = value;
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

  // sqs_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsFailureFeedbackRoleArn?: string;
  public get sqsFailureFeedbackRoleArn() {
    return this._sqsFailureFeedbackRoleArn;
  }
  public set sqsFailureFeedbackRoleArn(value: string | undefined) {
    this._sqsFailureFeedbackRoleArn = value;
  }

  // sqs_success_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackRoleArn?: string;
  public get sqsSuccessFeedbackRoleArn() {
    return this._sqsSuccessFeedbackRoleArn;
  }
  public set sqsSuccessFeedbackRoleArn(value: string | undefined) {
    this._sqsSuccessFeedbackRoleArn = value;
  }

  // sqs_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackSampleRate?: number;
  public get sqsSuccessFeedbackSampleRate() {
    return this._sqsSuccessFeedbackSampleRate;
  }
  public set sqsSuccessFeedbackSampleRate(value: number | undefined) {
    this._sqsSuccessFeedbackSampleRate = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_failure_feedback_role_arn: this._applicationFailureFeedbackRoleArn,
      application_success_feedback_role_arn: this._applicationSuccessFeedbackRoleArn,
      application_success_feedback_sample_rate: this._applicationSuccessFeedbackSampleRate,
      delivery_policy: this._deliveryPolicy,
      display_name: this._displayName,
      http_failure_feedback_role_arn: this._httpFailureFeedbackRoleArn,
      http_success_feedback_role_arn: this._httpSuccessFeedbackRoleArn,
      http_success_feedback_sample_rate: this._httpSuccessFeedbackSampleRate,
      kms_master_key_id: this._kmsMasterKeyId,
      lambda_failure_feedback_role_arn: this._lambdaFailureFeedbackRoleArn,
      lambda_success_feedback_role_arn: this._lambdaSuccessFeedbackRoleArn,
      lambda_success_feedback_sample_rate: this._lambdaSuccessFeedbackSampleRate,
      name: this._name,
      name_prefix: this._namePrefix,
      policy: this._policy,
      sqs_failure_feedback_role_arn: this._sqsFailureFeedbackRoleArn,
      sqs_success_feedback_role_arn: this._sqsSuccessFeedbackRoleArn,
      sqs_success_feedback_sample_rate: this._sqsSuccessFeedbackSampleRate,
      tags: this._tags,
    };
  }
}
