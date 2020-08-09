// https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "group_names": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "notifications": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "topic_arn": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutoscalingNotificationConfig extends TerraformMetaArguments {
  readonly groupNames: string[];
  readonly notifications: string[];
  readonly topicArn: string;
}

// Resource

export class AutoscalingNotification extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_notification',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupNames = config.groupNames;
    this._notifications = config.notifications;
    this._topicArn = config.topicArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_names - computed: false, optional: false, required: true
  private _groupNames: string[];
  public get groupNames() {
    return this._groupNames;
  }
  public set groupNames(value: string[]) {
    this._groupNames = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications: string[];
  public get notifications() {
    return this._notifications;
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn: string;
  public get topicArn() {
    return this._topicArn;
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group_names: this._groupNames,
      notifications: this._notifications,
      topic_arn: this._topicArn,
    };
  }
}
