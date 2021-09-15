// https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingGroupTagAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#tag AutoscalingGroupTagA#tag}
  */
  readonly tag: AutoscalingGroupTagTag[];
}
export interface AutoscalingGroupTagTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#key AutoscalingGroupTagA#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}
  */
  readonly propagateAtLaunch: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#value AutoscalingGroupTagA#value}
  */
  readonly value: string;
}

function autoscalingGroupTagTagToTerraform(struct?: AutoscalingGroupTagTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    propagate_at_launch: cdktf.booleanToTerraform(struct!.propagateAtLaunch),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag}
*/
export class AutoscalingGroupTagA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_autoscaling_group_tag";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingGroupTagAConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingGroupTagAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_group_tag',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._tag = config.tag;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag - computed: false, optional: false, required: true
  private _tag: AutoscalingGroupTagTag[];
  public get tag() {
    return this.interpolationForAttribute('tag') as any;
  }
  public set tag(value: AutoscalingGroupTagTag[]) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      tag: cdktf.listMapper(autoscalingGroupTagTagToTerraform)(this._tag),
    };
  }
}
