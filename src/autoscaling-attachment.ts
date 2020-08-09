// https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alb_target_group_arn": {
        "type": "string",
        "optional": true
      },
      "autoscaling_group_name": {
        "type": "string",
        "required": true
      },
      "elb": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutoscalingAttachmentConfig extends TerraformMetaArguments {
  readonly albTargetGroupArn?: string;
  readonly autoscalingGroupName: string;
  readonly elb?: string;
}

// Resource

export class AutoscalingAttachment extends TerraformResource {

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
    return this._albTargetGroupArn;
  }
  public set albTargetGroupArn(value: string | undefined) {
    this._albTargetGroupArn = value;
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName: string;
  public get autoscalingGroupName() {
    return this._autoscalingGroupName;
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }

  // elb - computed: false, optional: true, required: false
  private _elb?: string;
  public get elb() {
    return this._elb;
  }
  public set elb(value: string | undefined) {
    this._elb = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      alb_target_group_arn: this._albTargetGroupArn,
      autoscaling_group_name: this._autoscalingGroupName,
      elb: this._elb,
    };
  }
}
