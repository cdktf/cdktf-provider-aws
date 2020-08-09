// https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html
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
      "event_delivery_failure_topic_arn": {
        "type": "string",
        "optional": true
      },
      "event_endpoint_created_topic_arn": {
        "type": "string",
        "optional": true
      },
      "event_endpoint_deleted_topic_arn": {
        "type": "string",
        "optional": true
      },
      "event_endpoint_updated_topic_arn": {
        "type": "string",
        "optional": true
      },
      "failure_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "platform": {
        "type": "string",
        "required": true
      },
      "platform_credential": {
        "type": "string",
        "required": true
      },
      "platform_principal": {
        "type": "string",
        "optional": true
      },
      "success_feedback_role_arn": {
        "type": "string",
        "optional": true
      },
      "success_feedback_sample_rate": {
        "type": "string",
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

export interface SnsPlatformApplicationConfig extends TerraformMetaArguments {
  readonly eventDeliveryFailureTopicArn?: string;
  readonly eventEndpointCreatedTopicArn?: string;
  readonly eventEndpointDeletedTopicArn?: string;
  readonly eventEndpointUpdatedTopicArn?: string;
  readonly failureFeedbackRoleArn?: string;
  readonly name: string;
  readonly platform: string;
  readonly platformCredential: string;
  readonly platformPrincipal?: string;
  readonly successFeedbackRoleArn?: string;
  readonly successFeedbackSampleRate?: string;
}

// Resource

export class SnsPlatformApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // event_delivery_failure_topic_arn - computed: false, optional: true, required: false
  private _eventDeliveryFailureTopicArn?: string;
  public get eventDeliveryFailureTopicArn() {
    return this._eventDeliveryFailureTopicArn;
  }
  public set eventDeliveryFailureTopicArn(value: string | undefined) {
    this._eventDeliveryFailureTopicArn = value;
  }

  // event_endpoint_created_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointCreatedTopicArn?: string;
  public get eventEndpointCreatedTopicArn() {
    return this._eventEndpointCreatedTopicArn;
  }
  public set eventEndpointCreatedTopicArn(value: string | undefined) {
    this._eventEndpointCreatedTopicArn = value;
  }

  // event_endpoint_deleted_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointDeletedTopicArn?: string;
  public get eventEndpointDeletedTopicArn() {
    return this._eventEndpointDeletedTopicArn;
  }
  public set eventEndpointDeletedTopicArn(value: string | undefined) {
    this._eventEndpointDeletedTopicArn = value;
  }

  // event_endpoint_updated_topic_arn - computed: false, optional: true, required: false
  private _eventEndpointUpdatedTopicArn?: string;
  public get eventEndpointUpdatedTopicArn() {
    return this._eventEndpointUpdatedTopicArn;
  }
  public set eventEndpointUpdatedTopicArn(value: string | undefined) {
    this._eventEndpointUpdatedTopicArn = value;
  }

  // failure_feedback_role_arn - computed: false, optional: true, required: false
  private _failureFeedbackRoleArn?: string;
  public get failureFeedbackRoleArn() {
    return this._failureFeedbackRoleArn;
  }
  public set failureFeedbackRoleArn(value: string | undefined) {
    this._failureFeedbackRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform - computed: false, optional: false, required: true
  private _platform: string;
  public get platform() {
    return this._platform;
  }
  public set platform(value: string) {
    this._platform = value;
  }

  // platform_credential - computed: false, optional: false, required: true
  private _platformCredential: string;
  public get platformCredential() {
    return this._platformCredential;
  }
  public set platformCredential(value: string) {
    this._platformCredential = value;
  }

  // platform_principal - computed: false, optional: true, required: false
  private _platformPrincipal?: string;
  public get platformPrincipal() {
    return this._platformPrincipal;
  }
  public set platformPrincipal(value: string | undefined) {
    this._platformPrincipal = value;
  }

  // success_feedback_role_arn - computed: false, optional: true, required: false
  private _successFeedbackRoleArn?: string;
  public get successFeedbackRoleArn() {
    return this._successFeedbackRoleArn;
  }
  public set successFeedbackRoleArn(value: string | undefined) {
    this._successFeedbackRoleArn = value;
  }

  // success_feedback_sample_rate - computed: false, optional: true, required: false
  private _successFeedbackSampleRate?: string;
  public get successFeedbackSampleRate() {
    return this._successFeedbackSampleRate;
  }
  public set successFeedbackSampleRate(value: string | undefined) {
    this._successFeedbackSampleRate = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      event_delivery_failure_topic_arn: this._eventDeliveryFailureTopicArn,
      event_endpoint_created_topic_arn: this._eventEndpointCreatedTopicArn,
      event_endpoint_deleted_topic_arn: this._eventEndpointDeletedTopicArn,
      event_endpoint_updated_topic_arn: this._eventEndpointUpdatedTopicArn,
      failure_feedback_role_arn: this._failureFeedbackRoleArn,
      name: this._name,
      platform: this._platform,
      platform_credential: this._platformCredential,
      platform_principal: this._platformPrincipal,
      success_feedback_role_arn: this._successFeedbackRoleArn,
      success_feedback_sample_rate: this._successFeedbackSampleRate,
    };
  }
}
