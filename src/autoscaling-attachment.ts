// https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly albTargetGroupArn?: string;
  readonly autoscalingGroupName: string;
  readonly elb?: string;
}

// Resource

export class AutoscalingAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._albTargetGroupArn = config.albTargetGroupArn;
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._elb = config.elb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_target_group_arn - computed: false, optional: true, required: false
  private _albTargetGroupArn?: string;
  public get albTargetGroupArn() {
    return this.getStringAttribute('alb_target_group_arn');
  }
  public set albTargetGroupArn(value: string ) {
    this._albTargetGroupArn = value;
  }
  public resetAlbTargetGroupArn() {
    this._albTargetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albTargetGroupArnInput() {
    return this._albTargetGroupArn
  }

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

  // elb - computed: false, optional: true, required: false
  private _elb?: string;
  public get elb() {
    return this.getStringAttribute('elb');
  }
  public set elb(value: string ) {
    this._elb = value;
  }
  public resetElb() {
    this._elb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInput() {
    return this._elb
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alb_target_group_arn: cdktf.stringToTerraform(this._albTargetGroupArn),
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      elb: cdktf.stringToTerraform(this._elb),
    };
  }
}
