// https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingNotificationConfig extends cdktf.TerraformMetaArguments {
  readonly groupNames: string[];
  readonly notifications: string[];
  readonly topicArn: string;
}

// Resource

export class AutoscalingNotification extends cdktf.TerraformResource {

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
    return this.getListAttribute('group_names');
  }
  public set groupNames(value: string[]) {
    this._groupNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNamesInput() {
    return this._groupNames
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications: string[];
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn: string;
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
      group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._groupNames),
      notifications: cdktf.listMapper(cdktf.stringToTerraform)(this._notifications),
      topic_arn: cdktf.stringToTerraform(this._topicArn),
    };
  }
}
