// https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity": {
        "type": "string",
        "required": true
      },
      "include_original_headers": {
        "type": "bool",
        "optional": true
      },
      "notification_type": {
        "type": "string",
        "required": true
      },
      "topic_arn": {
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

export interface SesIdentityNotificationTopicConfig extends TerraformMetaArguments {
  readonly identity: string;
  readonly includeOriginalHeaders?: boolean;
  readonly notificationType: string;
  readonly topicArn?: string;
}

// Resource

export class SesIdentityNotificationTopic extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity - computed: false, optional: false, required: true
  private _identity: string;
  public get identity() {
    return this._identity;
  }
  public set identity(value: string) {
    this._identity = value;
  }

  // include_original_headers - computed: false, optional: true, required: false
  private _includeOriginalHeaders?: boolean;
  public get includeOriginalHeaders() {
    return this._includeOriginalHeaders;
  }
  public set includeOriginalHeaders(value: boolean | undefined) {
    this._includeOriginalHeaders = value;
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType: string;
  public get notificationType() {
    return this._notificationType;
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string;
  public get topicArn() {
    return this._topicArn;
  }
  public set topicArn(value: string | undefined) {
    this._topicArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      identity: this._identity,
      include_original_headers: this._includeOriginalHeaders,
      notification_type: this._notificationType,
      topic_arn: this._topicArn,
    };
  }
}
