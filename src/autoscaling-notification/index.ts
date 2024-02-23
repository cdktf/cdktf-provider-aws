// https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification#group_names AutoscalingNotification#group_names}
  */
  readonly groupNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification#id AutoscalingNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification#notifications AutoscalingNotification#notifications}
  */
  readonly notifications: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification#topic_arn AutoscalingNotification#topic_arn}
  */
  readonly topicArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification aws_autoscaling_notification}
*/
export class AutoscalingNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_autoscaling_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalingNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingNotification to import
  * @param importFromId The id of the existing AutoscalingNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_autoscaling_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/autoscaling_notification aws_autoscaling_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_notification',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.38.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupNames = config.groupNames;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupNames),
      id: cdktf.stringToTerraform(this._id),
      notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifications),
      topic_arn: cdktf.stringToTerraform(this._topicArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      topic_arn: {
        value: cdktf.stringToHclTerraform(this._topicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
