// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Notification Service
*/
export interface SnsPlatformApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}
  */
  readonly eventDeliveryFailureTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}
  */
  readonly eventEndpointCreatedTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}
  */
  readonly eventEndpointDeletedTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}
  */
  readonly eventEndpointUpdatedTopicArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}
  */
  readonly failureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}
  */
  readonly platform: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}
  */
  readonly platformCredential: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}
  */
  readonly platformPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}
  */
  readonly successFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}
  */
  readonly successFeedbackSampleRate?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application aws_sns_platform_application}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application aws_sns_platform_application} Resource
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
  private _eventDeliveryFailureTopicArn?: string; 
  public get eventDeliveryFailureTopicArn() {
    return this.getStringAttribute('event_delivery_failure_topic_arn');
  }
  public set eventDeliveryFailureTopicArn(value: string) {
    this._eventDeliveryFailureTopicArn = value;
  }
  public resetEventDeliveryFailureTopicArn() {
    this._eventDeliveryFailureTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeliveryFailureTopicArnInput() {
    return this._eventDeliveryFailureTopicArn;
  }

  // event_endpoint_created_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointCreatedTopicArn?: string; 
  public get eventEndpointCreatedTopicArn() {
    return this.getStringAttribute('event_endpoint_created_topic_arn');
  }
  public set eventEndpointCreatedTopicArn(value: string) {
    this._eventEndpointCreatedTopicArn = value;
  }
  public resetEventEndpointCreatedTopicArn() {
    this._eventEndpointCreatedTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointCreatedTopicArnInput() {
    return this._eventEndpointCreatedTopicArn;
  }

  // event_endpoint_deleted_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointDeletedTopicArn?: string; 
  public get eventEndpointDeletedTopicArn() {
    return this.getStringAttribute('event_endpoint_deleted_topic_arn');
  }
  public set eventEndpointDeletedTopicArn(value: string) {
    this._eventEndpointDeletedTopicArn = value;
  }
  public resetEventEndpointDeletedTopicArn() {
    this._eventEndpointDeletedTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointDeletedTopicArnInput() {
    return this._eventEndpointDeletedTopicArn;
  }

  // event_endpoint_updated_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointUpdatedTopicArn?: string; 
  public get eventEndpointUpdatedTopicArn() {
    return this.getStringAttribute('event_endpoint_updated_topic_arn');
  }
  public set eventEndpointUpdatedTopicArn(value: string) {
    this._eventEndpointUpdatedTopicArn = value;
  }
  public resetEventEndpointUpdatedTopicArn() {
    this._eventEndpointUpdatedTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEndpointUpdatedTopicArnInput() {
    return this._eventEndpointUpdatedTopicArn;
  }

  // failure_feedback_role_arn - computed: false, optional: true, required: false
  private _failureFeedbackRoleArn?: string; 
  public get failureFeedbackRoleArn() {
    return this.getStringAttribute('failure_feedback_role_arn');
  }
  public set failureFeedbackRoleArn(value: string) {
    this._failureFeedbackRoleArn = value;
  }
  public resetFailureFeedbackRoleArn() {
    this._failureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureFeedbackRoleArnInput() {
    return this._failureFeedbackRoleArn;
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
    return this._name;
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
    return this._platform;
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
    return this._platformCredential;
  }

  // platform_principal - computed: false, optional: true, required: false
  private _platformPrincipal?: string; 
  public get platformPrincipal() {
    return this.getStringAttribute('platform_principal');
  }
  public set platformPrincipal(value: string) {
    this._platformPrincipal = value;
  }
  public resetPlatformPrincipal() {
    this._platformPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformPrincipalInput() {
    return this._platformPrincipal;
  }

  // success_feedback_role_arn - computed: false, optional: true, required: false
  private _successFeedbackRoleArn?: string; 
  public get successFeedbackRoleArn() {
    return this.getStringAttribute('success_feedback_role_arn');
  }
  public set successFeedbackRoleArn(value: string) {
    this._successFeedbackRoleArn = value;
  }
  public resetSuccessFeedbackRoleArn() {
    this._successFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successFeedbackRoleArnInput() {
    return this._successFeedbackRoleArn;
  }

  // success_feedback_sample_rate - computed: false, optional: true, required: false
  private _successFeedbackSampleRate?: string; 
  public get successFeedbackSampleRate() {
    return this.getStringAttribute('success_feedback_sample_rate');
  }
  public set successFeedbackSampleRate(value: string) {
    this._successFeedbackSampleRate = value;
  }
  public resetSuccessFeedbackSampleRate() {
    this._successFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successFeedbackSampleRateInput() {
    return this._successFeedbackSampleRate;
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
