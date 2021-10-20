// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Notification Service
*/
export namespace SNS {
  export interface SnsPlatformApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}
    */
    readonly eventDeliveryFailureTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}
    */
    readonly eventEndpointCreatedTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}
    */
    readonly eventEndpointDeletedTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}
    */
    readonly eventEndpointUpdatedTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}
    */
    readonly failureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#name SnsPlatformApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#platform SnsPlatformApplication#platform}
    */
    readonly platform: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#platform_credential SnsPlatformApplication#platform_credential}
    */
    readonly platformCredential: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#platform_principal SnsPlatformApplication#platform_principal}
    */
    readonly platformPrincipal?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}
    */
    readonly successFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}
    */
    readonly successFeedbackSampleRate?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application}
  */
  export class SnsPlatformApplication extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sns_platform_application";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsPlatformApplicationConfig
    */
    public constructor(scope: Construct, id: string, config: SnsPlatformApplicationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sns_platform_application',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._eventDeliveryFailureTopicArn = config.eventDeliveryFailureTopicArn;
      this._eventEndpointCreatedTopicArn = config.eventEndpointCreatedTopicArn;
      this._eventEndpointDeletedTopicArn = config.eventEndpointDeletedTopicArn;
      this._eventEndpointUpdatedTopicArn = config.eventEndpointUpdatedTopicArn;
      this._failureFeedbackRoleArn = config.failureFeedbackRoleArn;
      this._name = config.name;
      this._platform = config.platform;
      this._platformCredential = config.platformCredential;
      this._platformPrincipal = config.platformPrincipal;
      this._successFeedbackRoleArn = config.successFeedbackRoleArn;
      this._successFeedbackSampleRate = config.successFeedbackSampleRate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // event_delivery_failure_topic_arn - computed: false, optional: true, required: false
    private _eventDeliveryFailureTopicArn?: string | undefined; 
    public get eventDeliveryFailureTopicArn() {
      return this.getStringAttribute('event_delivery_failure_topic_arn');
    }
    public set eventDeliveryFailureTopicArn(value: string | undefined) {
      this._eventDeliveryFailureTopicArn = value;
    }
    public resetEventDeliveryFailureTopicArn() {
      this._eventDeliveryFailureTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventDeliveryFailureTopicArnInput() {
      return this._eventDeliveryFailureTopicArn
    }

    // event_endpoint_created_topic_arn - computed: false, optional: true, required: false
    private _eventEndpointCreatedTopicArn?: string | undefined; 
    public get eventEndpointCreatedTopicArn() {
      return this.getStringAttribute('event_endpoint_created_topic_arn');
    }
    public set eventEndpointCreatedTopicArn(value: string | undefined) {
      this._eventEndpointCreatedTopicArn = value;
    }
    public resetEventEndpointCreatedTopicArn() {
      this._eventEndpointCreatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventEndpointCreatedTopicArnInput() {
      return this._eventEndpointCreatedTopicArn
    }

    // event_endpoint_deleted_topic_arn - computed: false, optional: true, required: false
    private _eventEndpointDeletedTopicArn?: string | undefined; 
    public get eventEndpointDeletedTopicArn() {
      return this.getStringAttribute('event_endpoint_deleted_topic_arn');
    }
    public set eventEndpointDeletedTopicArn(value: string | undefined) {
      this._eventEndpointDeletedTopicArn = value;
    }
    public resetEventEndpointDeletedTopicArn() {
      this._eventEndpointDeletedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventEndpointDeletedTopicArnInput() {
      return this._eventEndpointDeletedTopicArn
    }

    // event_endpoint_updated_topic_arn - computed: false, optional: true, required: false
    private _eventEndpointUpdatedTopicArn?: string | undefined; 
    public get eventEndpointUpdatedTopicArn() {
      return this.getStringAttribute('event_endpoint_updated_topic_arn');
    }
    public set eventEndpointUpdatedTopicArn(value: string | undefined) {
      this._eventEndpointUpdatedTopicArn = value;
    }
    public resetEventEndpointUpdatedTopicArn() {
      this._eventEndpointUpdatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventEndpointUpdatedTopicArnInput() {
      return this._eventEndpointUpdatedTopicArn
    }

    // failure_feedback_role_arn - computed: false, optional: true, required: false
    private _failureFeedbackRoleArn?: string | undefined; 
    public get failureFeedbackRoleArn() {
      return this.getStringAttribute('failure_feedback_role_arn');
    }
    public set failureFeedbackRoleArn(value: string | undefined) {
      this._failureFeedbackRoleArn = value;
    }
    public resetFailureFeedbackRoleArn() {
      this._failureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureFeedbackRoleArnInput() {
      return this._failureFeedbackRoleArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // platform - computed: false, optional: false, required: true
    private _platform?: string; 
    public get platform() {
      return this.getStringAttribute('platform');
    }
    public set platform(value: string) {
      this._platform = value;
    }
    // Temporarily expose input value. Use with caution.
    public get platformInput() {
      return this._platform
    }

    // platform_credential - computed: false, optional: false, required: true
    private _platformCredential?: string; 
    public get platformCredential() {
      return this.getStringAttribute('platform_credential');
    }
    public set platformCredential(value: string) {
      this._platformCredential = value;
    }
    // Temporarily expose input value. Use with caution.
    public get platformCredentialInput() {
      return this._platformCredential
    }

    // platform_principal - computed: false, optional: true, required: false
    private _platformPrincipal?: string | undefined; 
    public get platformPrincipal() {
      return this.getStringAttribute('platform_principal');
    }
    public set platformPrincipal(value: string | undefined) {
      this._platformPrincipal = value;
    }
    public resetPlatformPrincipal() {
      this._platformPrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformPrincipalInput() {
      return this._platformPrincipal
    }

    // success_feedback_role_arn - computed: false, optional: true, required: false
    private _successFeedbackRoleArn?: string | undefined; 
    public get successFeedbackRoleArn() {
      return this.getStringAttribute('success_feedback_role_arn');
    }
    public set successFeedbackRoleArn(value: string | undefined) {
      this._successFeedbackRoleArn = value;
    }
    public resetSuccessFeedbackRoleArn() {
      this._successFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successFeedbackRoleArnInput() {
      return this._successFeedbackRoleArn
    }

    // success_feedback_sample_rate - computed: false, optional: true, required: false
    private _successFeedbackSampleRate?: string | undefined; 
    public get successFeedbackSampleRate() {
      return this.getStringAttribute('success_feedback_sample_rate');
    }
    public set successFeedbackSampleRate(value: string | undefined) {
      this._successFeedbackSampleRate = value;
    }
    public resetSuccessFeedbackSampleRate() {
      this._successFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successFeedbackSampleRateInput() {
      return this._successFeedbackSampleRate
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        event_delivery_failure_topic_arn: cdktf.stringToTerraform(this._eventDeliveryFailureTopicArn),
        event_endpoint_created_topic_arn: cdktf.stringToTerraform(this._eventEndpointCreatedTopicArn),
        event_endpoint_deleted_topic_arn: cdktf.stringToTerraform(this._eventEndpointDeletedTopicArn),
        event_endpoint_updated_topic_arn: cdktf.stringToTerraform(this._eventEndpointUpdatedTopicArn),
        failure_feedback_role_arn: cdktf.stringToTerraform(this._failureFeedbackRoleArn),
        name: cdktf.stringToTerraform(this._name),
        platform: cdktf.stringToTerraform(this._platform),
        platform_credential: cdktf.stringToTerraform(this._platformCredential),
        platform_principal: cdktf.stringToTerraform(this._platformPrincipal),
        success_feedback_role_arn: cdktf.stringToTerraform(this._successFeedbackRoleArn),
        success_feedback_sample_rate: cdktf.stringToTerraform(this._successFeedbackSampleRate),
      };
    }
  }
  export interface SnsSmsPreferencesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#default_sender_id SnsSmsPreferences#default_sender_id}
    */
    readonly defaultSenderId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#default_sms_type SnsSmsPreferences#default_sms_type}
    */
    readonly defaultSmsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}
    */
    readonly deliveryStatusIamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}
    */
    readonly deliveryStatusSuccessSamplingRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}
    */
    readonly monthlySpendLimit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}
    */
    readonly usageReportS3Bucket?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences}
  */
  export class SnsSmsPreferences extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sns_sms_preferences";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsSmsPreferencesConfig = {}
    */
    public constructor(scope: Construct, id: string, config: SnsSmsPreferencesConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_sns_sms_preferences',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._defaultSenderId = config.defaultSenderId;
      this._defaultSmsType = config.defaultSmsType;
      this._deliveryStatusIamRoleArn = config.deliveryStatusIamRoleArn;
      this._deliveryStatusSuccessSamplingRate = config.deliveryStatusSuccessSamplingRate;
      this._monthlySpendLimit = config.monthlySpendLimit;
      this._usageReportS3Bucket = config.usageReportS3Bucket;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // default_sender_id - computed: false, optional: true, required: false
    private _defaultSenderId?: string | undefined; 
    public get defaultSenderId() {
      return this.getStringAttribute('default_sender_id');
    }
    public set defaultSenderId(value: string | undefined) {
      this._defaultSenderId = value;
    }
    public resetDefaultSenderId() {
      this._defaultSenderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSenderIdInput() {
      return this._defaultSenderId
    }

    // default_sms_type - computed: false, optional: true, required: false
    private _defaultSmsType?: string | undefined; 
    public get defaultSmsType() {
      return this.getStringAttribute('default_sms_type');
    }
    public set defaultSmsType(value: string | undefined) {
      this._defaultSmsType = value;
    }
    public resetDefaultSmsType() {
      this._defaultSmsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSmsTypeInput() {
      return this._defaultSmsType
    }

    // delivery_status_iam_role_arn - computed: false, optional: true, required: false
    private _deliveryStatusIamRoleArn?: string | undefined; 
    public get deliveryStatusIamRoleArn() {
      return this.getStringAttribute('delivery_status_iam_role_arn');
    }
    public set deliveryStatusIamRoleArn(value: string | undefined) {
      this._deliveryStatusIamRoleArn = value;
    }
    public resetDeliveryStatusIamRoleArn() {
      this._deliveryStatusIamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStatusIamRoleArnInput() {
      return this._deliveryStatusIamRoleArn
    }

    // delivery_status_success_sampling_rate - computed: false, optional: true, required: false
    private _deliveryStatusSuccessSamplingRate?: string | undefined; 
    public get deliveryStatusSuccessSamplingRate() {
      return this.getStringAttribute('delivery_status_success_sampling_rate');
    }
    public set deliveryStatusSuccessSamplingRate(value: string | undefined) {
      this._deliveryStatusSuccessSamplingRate = value;
    }
    public resetDeliveryStatusSuccessSamplingRate() {
      this._deliveryStatusSuccessSamplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStatusSuccessSamplingRateInput() {
      return this._deliveryStatusSuccessSamplingRate
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // monthly_spend_limit - computed: false, optional: true, required: false
    private _monthlySpendLimit?: string | undefined; 
    public get monthlySpendLimit() {
      return this.getStringAttribute('monthly_spend_limit');
    }
    public set monthlySpendLimit(value: string | undefined) {
      this._monthlySpendLimit = value;
    }
    public resetMonthlySpendLimit() {
      this._monthlySpendLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monthlySpendLimitInput() {
      return this._monthlySpendLimit
    }

    // usage_report_s3_bucket - computed: false, optional: true, required: false
    private _usageReportS3Bucket?: string | undefined; 
    public get usageReportS3Bucket() {
      return this.getStringAttribute('usage_report_s3_bucket');
    }
    public set usageReportS3Bucket(value: string | undefined) {
      this._usageReportS3Bucket = value;
    }
    public resetUsageReportS3Bucket() {
      this._usageReportS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageReportS3BucketInput() {
      return this._usageReportS3Bucket
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        default_sender_id: cdktf.stringToTerraform(this._defaultSenderId),
        default_sms_type: cdktf.stringToTerraform(this._defaultSmsType),
        delivery_status_iam_role_arn: cdktf.stringToTerraform(this._deliveryStatusIamRoleArn),
        delivery_status_success_sampling_rate: cdktf.stringToTerraform(this._deliveryStatusSuccessSamplingRate),
        monthly_spend_limit: cdktf.stringToTerraform(this._monthlySpendLimit),
        usage_report_s3_bucket: cdktf.stringToTerraform(this._usageReportS3Bucket),
      };
    }
  }
  export interface SnsTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}
    */
    readonly applicationFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}
    */
    readonly applicationSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}
    */
    readonly applicationSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#content_based_deduplication SnsTopic#content_based_deduplication}
    */
    readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#delivery_policy SnsTopic#delivery_policy}
    */
    readonly deliveryPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#display_name SnsTopic#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#fifo_topic SnsTopic#fifo_topic}
    */
    readonly fifoTopic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}
    */
    readonly firehoseFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}
    */
    readonly firehoseSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}
    */
    readonly firehoseSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}
    */
    readonly httpFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}
    */
    readonly httpSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}
    */
    readonly httpSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#kms_master_key_id SnsTopic#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}
    */
    readonly lambdaFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}
    */
    readonly lambdaSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}
    */
    readonly lambdaSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name SnsTopic#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name_prefix SnsTopic#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#policy SnsTopic#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}
    */
    readonly sqsFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}
    */
    readonly sqsSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}
    */
    readonly sqsSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags SnsTopic#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags_all SnsTopic#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}
  */
  export class SnsTopic extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sns_topic";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicConfig = {}
    */
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
      this._contentBasedDeduplication = config.contentBasedDeduplication;
      this._deliveryPolicy = config.deliveryPolicy;
      this._displayName = config.displayName;
      this._fifoTopic = config.fifoTopic;
      this._firehoseFailureFeedbackRoleArn = config.firehoseFailureFeedbackRoleArn;
      this._firehoseSuccessFeedbackRoleArn = config.firehoseSuccessFeedbackRoleArn;
      this._firehoseSuccessFeedbackSampleRate = config.firehoseSuccessFeedbackSampleRate;
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
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_failure_feedback_role_arn - computed: false, optional: true, required: false
    private _applicationFailureFeedbackRoleArn?: string | undefined; 
    public get applicationFailureFeedbackRoleArn() {
      return this.getStringAttribute('application_failure_feedback_role_arn');
    }
    public set applicationFailureFeedbackRoleArn(value: string | undefined) {
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
    private _applicationSuccessFeedbackRoleArn?: string | undefined; 
    public get applicationSuccessFeedbackRoleArn() {
      return this.getStringAttribute('application_success_feedback_role_arn');
    }
    public set applicationSuccessFeedbackRoleArn(value: string | undefined) {
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
    private _applicationSuccessFeedbackSampleRate?: number | undefined; 
    public get applicationSuccessFeedbackSampleRate() {
      return this.getNumberAttribute('application_success_feedback_sample_rate');
    }
    public set applicationSuccessFeedbackSampleRate(value: number | undefined) {
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

    // content_based_deduplication - computed: false, optional: true, required: false
    private _contentBasedDeduplication?: boolean | cdktf.IResolvable | undefined; 
    public get contentBasedDeduplication() {
      return this.getBooleanAttribute('content_based_deduplication') as any;
    }
    public set contentBasedDeduplication(value: boolean | cdktf.IResolvable | undefined) {
      this._contentBasedDeduplication = value;
    }
    public resetContentBasedDeduplication() {
      this._contentBasedDeduplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentBasedDeduplicationInput() {
      return this._contentBasedDeduplication
    }

    // delivery_policy - computed: false, optional: true, required: false
    private _deliveryPolicy?: string | undefined; 
    public get deliveryPolicy() {
      return this.getStringAttribute('delivery_policy');
    }
    public set deliveryPolicy(value: string | undefined) {
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
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
      this._displayName = value;
    }
    public resetDisplayName() {
      this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
      return this._displayName
    }

    // fifo_topic - computed: false, optional: true, required: false
    private _fifoTopic?: boolean | cdktf.IResolvable | undefined; 
    public get fifoTopic() {
      return this.getBooleanAttribute('fifo_topic') as any;
    }
    public set fifoTopic(value: boolean | cdktf.IResolvable | undefined) {
      this._fifoTopic = value;
    }
    public resetFifoTopic() {
      this._fifoTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fifoTopicInput() {
      return this._fifoTopic
    }

    // firehose_failure_feedback_role_arn - computed: false, optional: true, required: false
    private _firehoseFailureFeedbackRoleArn?: string | undefined; 
    public get firehoseFailureFeedbackRoleArn() {
      return this.getStringAttribute('firehose_failure_feedback_role_arn');
    }
    public set firehoseFailureFeedbackRoleArn(value: string | undefined) {
      this._firehoseFailureFeedbackRoleArn = value;
    }
    public resetFirehoseFailureFeedbackRoleArn() {
      this._firehoseFailureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseFailureFeedbackRoleArnInput() {
      return this._firehoseFailureFeedbackRoleArn
    }

    // firehose_success_feedback_role_arn - computed: false, optional: true, required: false
    private _firehoseSuccessFeedbackRoleArn?: string | undefined; 
    public get firehoseSuccessFeedbackRoleArn() {
      return this.getStringAttribute('firehose_success_feedback_role_arn');
    }
    public set firehoseSuccessFeedbackRoleArn(value: string | undefined) {
      this._firehoseSuccessFeedbackRoleArn = value;
    }
    public resetFirehoseSuccessFeedbackRoleArn() {
      this._firehoseSuccessFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseSuccessFeedbackRoleArnInput() {
      return this._firehoseSuccessFeedbackRoleArn
    }

    // firehose_success_feedback_sample_rate - computed: false, optional: true, required: false
    private _firehoseSuccessFeedbackSampleRate?: number | undefined; 
    public get firehoseSuccessFeedbackSampleRate() {
      return this.getNumberAttribute('firehose_success_feedback_sample_rate');
    }
    public set firehoseSuccessFeedbackSampleRate(value: number | undefined) {
      this._firehoseSuccessFeedbackSampleRate = value;
    }
    public resetFirehoseSuccessFeedbackSampleRate() {
      this._firehoseSuccessFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseSuccessFeedbackSampleRateInput() {
      return this._firehoseSuccessFeedbackSampleRate
    }

    // http_failure_feedback_role_arn - computed: false, optional: true, required: false
    private _httpFailureFeedbackRoleArn?: string | undefined; 
    public get httpFailureFeedbackRoleArn() {
      return this.getStringAttribute('http_failure_feedback_role_arn');
    }
    public set httpFailureFeedbackRoleArn(value: string | undefined) {
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
    private _httpSuccessFeedbackRoleArn?: string | undefined; 
    public get httpSuccessFeedbackRoleArn() {
      return this.getStringAttribute('http_success_feedback_role_arn');
    }
    public set httpSuccessFeedbackRoleArn(value: string | undefined) {
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
    private _httpSuccessFeedbackSampleRate?: number | undefined; 
    public get httpSuccessFeedbackSampleRate() {
      return this.getNumberAttribute('http_success_feedback_sample_rate');
    }
    public set httpSuccessFeedbackSampleRate(value: number | undefined) {
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
    private _kmsMasterKeyId?: string | undefined; 
    public get kmsMasterKeyId() {
      return this.getStringAttribute('kms_master_key_id');
    }
    public set kmsMasterKeyId(value: string | undefined) {
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
    private _lambdaFailureFeedbackRoleArn?: string | undefined; 
    public get lambdaFailureFeedbackRoleArn() {
      return this.getStringAttribute('lambda_failure_feedback_role_arn');
    }
    public set lambdaFailureFeedbackRoleArn(value: string | undefined) {
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
    private _lambdaSuccessFeedbackRoleArn?: string | undefined; 
    public get lambdaSuccessFeedbackRoleArn() {
      return this.getStringAttribute('lambda_success_feedback_role_arn');
    }
    public set lambdaSuccessFeedbackRoleArn(value: string | undefined) {
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
    private _lambdaSuccessFeedbackSampleRate?: number | undefined; 
    public get lambdaSuccessFeedbackSampleRate() {
      return this.getNumberAttribute('lambda_success_feedback_sample_rate');
    }
    public set lambdaSuccessFeedbackSampleRate(value: number | undefined) {
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
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
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
    private _sqsFailureFeedbackRoleArn?: string | undefined; 
    public get sqsFailureFeedbackRoleArn() {
      return this.getStringAttribute('sqs_failure_feedback_role_arn');
    }
    public set sqsFailureFeedbackRoleArn(value: string | undefined) {
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
    private _sqsSuccessFeedbackRoleArn?: string | undefined; 
    public get sqsSuccessFeedbackRoleArn() {
      return this.getStringAttribute('sqs_success_feedback_role_arn');
    }
    public set sqsSuccessFeedbackRoleArn(value: string | undefined) {
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
    private _sqsSuccessFeedbackSampleRate?: number | undefined; 
    public get sqsSuccessFeedbackSampleRate() {
      return this.getNumberAttribute('sqs_success_feedback_sample_rate');
    }
    public set sqsSuccessFeedbackSampleRate(value: number | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
        application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
        application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
        content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
        delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
        display_name: cdktf.stringToTerraform(this._displayName),
        fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
        firehose_failure_feedback_role_arn: cdktf.stringToTerraform(this._firehoseFailureFeedbackRoleArn),
        firehose_success_feedback_role_arn: cdktf.stringToTerraform(this._firehoseSuccessFeedbackRoleArn),
        firehose_success_feedback_sample_rate: cdktf.numberToTerraform(this._firehoseSuccessFeedbackSampleRate),
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
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface SnsTopicPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html#arn SnsTopicPolicy#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html#policy SnsTopicPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html aws_sns_topic_policy}
  */
  export class SnsTopicPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sns_topic_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html aws_sns_topic_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: SnsTopicPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sns_topic_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
      return this.getStringAttribute('owner');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface SnsTopicSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}
    */
    readonly confirmationTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#delivery_policy SnsTopicSubscription#delivery_policy}
    */
    readonly deliveryPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#endpoint SnsTopicSubscription#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}
    */
    readonly endpointAutoConfirms?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#filter_policy SnsTopicSubscription#filter_policy}
    */
    readonly filterPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#protocol SnsTopicSubscription#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#raw_message_delivery SnsTopicSubscription#raw_message_delivery}
    */
    readonly rawMessageDelivery?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#redrive_policy SnsTopicSubscription#redrive_policy}
    */
    readonly redrivePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#subscription_role_arn SnsTopicSubscription#subscription_role_arn}
    */
    readonly subscriptionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html#topic_arn SnsTopicSubscription#topic_arn}
    */
    readonly topicArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html aws_sns_topic_subscription}
  */
  export class SnsTopicSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sns_topic_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html aws_sns_topic_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: SnsTopicSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_sns_topic_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._confirmationTimeoutInMinutes = config.confirmationTimeoutInMinutes;
      this._deliveryPolicy = config.deliveryPolicy;
      this._endpoint = config.endpoint;
      this._endpointAutoConfirms = config.endpointAutoConfirms;
      this._filterPolicy = config.filterPolicy;
      this._protocol = config.protocol;
      this._rawMessageDelivery = config.rawMessageDelivery;
      this._redrivePolicy = config.redrivePolicy;
      this._subscriptionRoleArn = config.subscriptionRoleArn;
      this._topicArn = config.topicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // confirmation_timeout_in_minutes - computed: false, optional: true, required: false
    private _confirmationTimeoutInMinutes?: number | undefined; 
    public get confirmationTimeoutInMinutes() {
      return this.getNumberAttribute('confirmation_timeout_in_minutes');
    }
    public set confirmationTimeoutInMinutes(value: number | undefined) {
      this._confirmationTimeoutInMinutes = value;
    }
    public resetConfirmationTimeoutInMinutes() {
      this._confirmationTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confirmationTimeoutInMinutesInput() {
      return this._confirmationTimeoutInMinutes
    }

    // confirmation_was_authenticated - computed: true, optional: false, required: false
    public get confirmationWasAuthenticated() {
      return this.getBooleanAttribute('confirmation_was_authenticated') as any;
    }

    // delivery_policy - computed: false, optional: true, required: false
    private _deliveryPolicy?: string | undefined; 
    public get deliveryPolicy() {
      return this.getStringAttribute('delivery_policy');
    }
    public set deliveryPolicy(value: string | undefined) {
      this._deliveryPolicy = value;
    }
    public resetDeliveryPolicy() {
      this._deliveryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryPolicyInput() {
      return this._deliveryPolicy
    }

    // endpoint - computed: false, optional: false, required: true
    private _endpoint?: string; 
    public get endpoint() {
      return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
      this._endpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
      return this._endpoint
    }

    // endpoint_auto_confirms - computed: false, optional: true, required: false
    private _endpointAutoConfirms?: boolean | cdktf.IResolvable | undefined; 
    public get endpointAutoConfirms() {
      return this.getBooleanAttribute('endpoint_auto_confirms') as any;
    }
    public set endpointAutoConfirms(value: boolean | cdktf.IResolvable | undefined) {
      this._endpointAutoConfirms = value;
    }
    public resetEndpointAutoConfirms() {
      this._endpointAutoConfirms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointAutoConfirmsInput() {
      return this._endpointAutoConfirms
    }

    // filter_policy - computed: false, optional: true, required: false
    private _filterPolicy?: string | undefined; 
    public get filterPolicy() {
      return this.getStringAttribute('filter_policy');
    }
    public set filterPolicy(value: string | undefined) {
      this._filterPolicy = value;
    }
    public resetFilterPolicy() {
      this._filterPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPolicyInput() {
      return this._filterPolicy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // pending_confirmation - computed: true, optional: false, required: false
    public get pendingConfirmation() {
      return this.getBooleanAttribute('pending_confirmation') as any;
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // raw_message_delivery - computed: false, optional: true, required: false
    private _rawMessageDelivery?: boolean | cdktf.IResolvable | undefined; 
    public get rawMessageDelivery() {
      return this.getBooleanAttribute('raw_message_delivery') as any;
    }
    public set rawMessageDelivery(value: boolean | cdktf.IResolvable | undefined) {
      this._rawMessageDelivery = value;
    }
    public resetRawMessageDelivery() {
      this._rawMessageDelivery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rawMessageDeliveryInput() {
      return this._rawMessageDelivery
    }

    // redrive_policy - computed: false, optional: true, required: false
    private _redrivePolicy?: string | undefined; 
    public get redrivePolicy() {
      return this.getStringAttribute('redrive_policy');
    }
    public set redrivePolicy(value: string | undefined) {
      this._redrivePolicy = value;
    }
    public resetRedrivePolicy() {
      this._redrivePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redrivePolicyInput() {
      return this._redrivePolicy
    }

    // subscription_role_arn - computed: false, optional: true, required: false
    private _subscriptionRoleArn?: string | undefined; 
    public get subscriptionRoleArn() {
      return this.getStringAttribute('subscription_role_arn');
    }
    public set subscriptionRoleArn(value: string | undefined) {
      this._subscriptionRoleArn = value;
    }
    public resetSubscriptionRoleArn() {
      this._subscriptionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionRoleArnInput() {
      return this._subscriptionRoleArn
    }

    // topic_arn - computed: false, optional: false, required: true
    private _topicArn?: string; 
    public get topicArn() {
      return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
      this._topicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
      return this._topicArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        confirmation_timeout_in_minutes: cdktf.numberToTerraform(this._confirmationTimeoutInMinutes),
        delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
        endpoint: cdktf.stringToTerraform(this._endpoint),
        endpoint_auto_confirms: cdktf.booleanToTerraform(this._endpointAutoConfirms),
        filter_policy: cdktf.stringToTerraform(this._filterPolicy),
        protocol: cdktf.stringToTerraform(this._protocol),
        raw_message_delivery: cdktf.booleanToTerraform(this._rawMessageDelivery),
        redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
        subscription_role_arn: cdktf.stringToTerraform(this._subscriptionRoleArn),
        topic_arn: cdktf.stringToTerraform(this._topicArn),
      };
    }
  }
  export interface DataAwsSnsTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html#name DataAwsSnsTopic#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html aws_sns_topic}
  */
  export class DataAwsSnsTopic extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_sns_topic";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html aws_sns_topic} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSnsTopicConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSnsTopicConfig) {
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
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
}
