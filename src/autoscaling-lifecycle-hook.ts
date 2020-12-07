// https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingLifecycleHookConfig extends cdktf.TerraformMetaArguments {
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

export class AutoscalingLifecycleHook extends cdktf.TerraformResource {

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
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName
  }

  // default_result - computed: true, optional: true, required: false
  private _defaultResult?: string;
  public get defaultResult() {
    return this.getStringAttribute('default_result');
  }
  public set defaultResult(value: string) {
    this._defaultResult = value;
  }
  public resetDefaultResult() {
    this._defaultResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultInput() {
    return this._defaultResult
  }

  // heartbeat_timeout - computed: false, optional: true, required: false
  private _heartbeatTimeout?: number;
  public get heartbeatTimeout() {
    return this.getNumberAttribute('heartbeat_timeout');
  }
  public set heartbeatTimeout(value: number ) {
    this._heartbeatTimeout = value;
  }
  public resetHeartbeatTimeout() {
    this._heartbeatTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatTimeoutInput() {
    return this._heartbeatTimeout
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_transition - computed: false, optional: false, required: true
  private _lifecycleTransition: string;
  public get lifecycleTransition() {
    return this.getStringAttribute('lifecycle_transition');
  }
  public set lifecycleTransition(value: string) {
    this._lifecycleTransition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleTransitionInput() {
    return this._lifecycleTransition
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // notification_metadata - computed: false, optional: true, required: false
  private _notificationMetadata?: string;
  public get notificationMetadata() {
    return this.getStringAttribute('notification_metadata');
  }
  public set notificationMetadata(value: string ) {
    this._notificationMetadata = value;
  }
  public resetNotificationMetadata() {
    this._notificationMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMetadataInput() {
    return this._notificationMetadata
  }

  // notification_target_arn - computed: false, optional: true, required: false
  private _notificationTargetArn?: string;
  public get notificationTargetArn() {
    return this.getStringAttribute('notification_target_arn');
  }
  public set notificationTargetArn(value: string ) {
    this._notificationTargetArn = value;
  }
  public resetNotificationTargetArn() {
    this._notificationTargetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetArnInput() {
    return this._notificationTargetArn
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string ) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      default_result: cdktf.stringToTerraform(this._defaultResult),
      heartbeat_timeout: cdktf.numberToTerraform(this._heartbeatTimeout),
      lifecycle_transition: cdktf.stringToTerraform(this._lifecycleTransition),
      name: cdktf.stringToTerraform(this._name),
      notification_metadata: cdktf.stringToTerraform(this._notificationMetadata),
      notification_target_arn: cdktf.stringToTerraform(this._notificationTargetArn),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
