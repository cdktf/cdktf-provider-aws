// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export interface SesIdentityNotificationTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#identity SesIdentityNotificationTopic#identity}
  */
  readonly identity: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#include_original_headers SesIdentityNotificationTopic#include_original_headers}
  */
  readonly includeOriginalHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#notification_type SesIdentityNotificationTopic#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#topic_arn SesIdentityNotificationTopic#topic_arn}
  */
  readonly topicArn?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic}
*/
export class SesIdentityNotificationTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ses_identity_notification_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesIdentityNotificationTopicConfig
  */
  public constructor(scope: Construct, id: string, config: SesIdentityNotificationTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_identity_notification_topic',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._identity = config.identity;
    this._includeOriginalHeaders = config.includeOriginalHeaders;
    this._notificationType = config.notificationType;
    this._topicArn = config.topicArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // include_original_headers - computed: false, optional: true, required: false
  private _includeOriginalHeaders?: boolean | cdktf.IResolvable; 
  public get includeOriginalHeaders() {
    return this.getBooleanAttribute('include_original_headers') as any;
  }
  public set includeOriginalHeaders(value: boolean | cdktf.IResolvable) {
    this._includeOriginalHeaders = value;
  }
  public resetIncludeOriginalHeaders() {
    this._includeOriginalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOriginalHeadersInput() {
    return this._includeOriginalHeaders;
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity: cdktf.stringToTerraform(this._identity),
      include_original_headers: cdktf.booleanToTerraform(this._includeOriginalHeaders),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      topic_arn: cdktf.stringToTerraform(this._topicArn),
    };
  }
}
