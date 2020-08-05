// https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autoscaling_group_name": {
        "type": "string",
        "required": true
      },
      "default_result": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "heartbeat_timeout": {
        "type": "number",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_transition": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "notification_metadata": {
        "type": "string",
        "optional": true
      },
      "notification_target_arn": {
        "type": "string",
        "optional": true
      },
      "role_arn": {
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

export interface AutoscalingLifecycleHookConfig extends TerraformMetaArguments {
  readonly autoscalingGroupName: string;
  readonly defaultResult?: string;
  readonly heartbeatTimeout?: number;
  readonly lifecycleTransition: string;
  readonly name: string;
  readonly notificationMetadata?: string;
  readonly notificationTargetArn?: string;
  readonly roleArn?: string;
}

// Resource

export class AutoscalingLifecycleHook extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingLifecycleHookConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_lifecycle_hook',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._defaultResult = config.defaultResult;
    this._heartbeatTimeout = config.heartbeatTimeout;
    this._lifecycleTransition = config.lifecycleTransition;
    this._name = config.name;
    this._notificationMetadata = config.notificationMetadata;
    this._notificationTargetArn = config.notificationTargetArn;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName: string;
  public get autoscalingGroupName() {
    return this._autoscalingGroupName;
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }

  // default_result - computed: true, optional: true, required: false
  private _defaultResult?: string;
  public get defaultResult() {
    return this._defaultResult ?? this.getStringAttribute('default_result');
  }
  public set defaultResult(value: string | undefined) {
    this._defaultResult = value;
  }

  // heartbeat_timeout - computed: false, optional: true, required: false
  private _heartbeatTimeout?: number;
  public get heartbeatTimeout() {
    return this._heartbeatTimeout;
  }
  public set heartbeatTimeout(value: number | undefined) {
    this._heartbeatTimeout = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_transition - computed: false, optional: false, required: true
  private _lifecycleTransition: string;
  public get lifecycleTransition() {
    return this._lifecycleTransition;
  }
  public set lifecycleTransition(value: string) {
    this._lifecycleTransition = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // notification_metadata - computed: false, optional: true, required: false
  private _notificationMetadata?: string;
  public get notificationMetadata() {
    return this._notificationMetadata;
  }
  public set notificationMetadata(value: string | undefined) {
    this._notificationMetadata = value;
  }

  // notification_target_arn - computed: false, optional: true, required: false
  private _notificationTargetArn?: string;
  public get notificationTargetArn() {
    return this._notificationTargetArn;
  }
  public set notificationTargetArn(value: string | undefined) {
    this._notificationTargetArn = value;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: this._autoscalingGroupName,
      default_result: this._defaultResult,
      heartbeat_timeout: this._heartbeatTimeout,
      lifecycle_transition: this._lifecycleTransition,
      name: this._name,
      notification_metadata: this._notificationMetadata,
      notification_target_arn: this._notificationTargetArn,
      role_arn: this._roleArn,
    };
  }
}
