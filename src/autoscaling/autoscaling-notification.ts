// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Auto Scaling
*/
export interface AutoscalingNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification#group_names AutoscalingNotification#group_names}
  */
  readonly groupNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification#notifications AutoscalingNotification#notifications}
  */
  readonly notifications: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification#topic_arn AutoscalingNotification#topic_arn}
  */
  readonly topicArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification aws_autoscaling_notification}
*/
export class AutoscalingNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_autoscaling_notification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification aws_autoscaling_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingNotificationConfig
  */
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
  private _groupNames?: string[]; 
  public get groupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('group_names'));
  }
  public set groupNames(value: string[]) {
    this._groupNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNamesInput() {
    return this._groupNames;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications?: string[]; 
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
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
    return this._topicArn;
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
