// https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesIdentityNotificationTopicConfig extends cdktf.TerraformMetaArguments {
  readonly identity: string;
  readonly includeOriginalHeaders?: boolean;
  readonly notificationType: string;
  readonly topicArn?: string;
}

// Resource

export class SesIdentityNotificationTopic extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _identity: string;
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // include_original_headers - computed: false, optional: true, required: false
  private _includeOriginalHeaders?: boolean;
  public get includeOriginalHeaders() {
    return this.getBooleanAttribute('include_original_headers');
  }
  public set includeOriginalHeaders(value: boolean ) {
    this._includeOriginalHeaders = value;
  }
  public resetIncludeOriginalHeaders() {
    this._includeOriginalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOriginalHeadersInput() {
    return this._includeOriginalHeaders
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType: string;
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string;
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string ) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
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
      identity: cdktf.stringToTerraform(this._identity),
      include_original_headers: cdktf.booleanToTerraform(this._includeOriginalHeaders),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      topic_arn: cdktf.stringToTerraform(this._topicArn),
    };
  }
}
