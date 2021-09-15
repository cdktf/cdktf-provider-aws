// https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerHumanTaskUiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}
  */
  readonly humanTaskUiName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#tags SagemakerHumanTaskUi#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#tags_all SagemakerHumanTaskUi#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * ui_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#ui_template SagemakerHumanTaskUi#ui_template}
  */
  readonly uiTemplate: SagemakerHumanTaskUiUiTemplate[];
}
export interface SagemakerHumanTaskUiUiTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#content SagemakerHumanTaskUi#content}
  */
  readonly content?: string;
}

function sagemakerHumanTaskUiUiTemplateToTerraform(struct?: SagemakerHumanTaskUiUiTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui}
*/
export class SagemakerHumanTaskUi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_human_task_ui";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerHumanTaskUiConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerHumanTaskUiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_human_task_ui',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._humanTaskUiName = config.humanTaskUiName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._uiTemplate = config.uiTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // human_task_ui_name - computed: false, optional: false, required: true
  private _humanTaskUiName: string;
  public get humanTaskUiName() {
    return this.getStringAttribute('human_task_ui_name');
  }
  public set humanTaskUiName(value: string) {
    this._humanTaskUiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskUiNameInput() {
    return this._humanTaskUiName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // ui_template - computed: false, optional: false, required: true
  private _uiTemplate: SagemakerHumanTaskUiUiTemplate[];
  public get uiTemplate() {
    return this.interpolationForAttribute('ui_template') as any;
  }
  public set uiTemplate(value: SagemakerHumanTaskUiUiTemplate[]) {
    this._uiTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiTemplateInput() {
    return this._uiTemplate
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      human_task_ui_name: cdktf.stringToTerraform(this._humanTaskUiName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      ui_template: cdktf.listMapper(sagemakerHumanTaskUiUiTemplateToTerraform)(this._uiTemplate),
    };
  }
}
