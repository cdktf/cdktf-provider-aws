// https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerHumanTaskUiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}
  */
  readonly humanTaskUiName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#id SagemakerHumanTaskUi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#tags_all SagemakerHumanTaskUi#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * ui_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}
  */
  readonly uiTemplate: SagemakerHumanTaskUiUiTemplate;
}
export interface SagemakerHumanTaskUiUiTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}
  */
  readonly content?: string;
}

export function sagemakerHumanTaskUiUiTemplateToTerraform(struct?: SagemakerHumanTaskUiUiTemplateOutputReference | SagemakerHumanTaskUiUiTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}

export class SagemakerHumanTaskUiUiTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerHumanTaskUiUiTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHumanTaskUiUiTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_sha256 - computed: true, optional: false, required: false
  public get contentSha256() {
    return this.getStringAttribute('content_sha256');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui aws_sagemaker_human_task_ui}
*/
export class SagemakerHumanTaskUi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_human_task_ui";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui aws_sagemaker_human_task_ui} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerHumanTaskUiConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerHumanTaskUiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_human_task_ui',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._humanTaskUiName = config.humanTaskUiName;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._uiTemplate.internalValue = config.uiTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // human_task_ui_name - computed: false, optional: false, required: true
  private _humanTaskUiName?: string; 
  public get humanTaskUiName() {
    return this.getStringAttribute('human_task_ui_name');
  }
  public set humanTaskUiName(value: string) {
    this._humanTaskUiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskUiNameInput() {
    return this._humanTaskUiName;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // ui_template - computed: false, optional: false, required: true
  private _uiTemplate = new SagemakerHumanTaskUiUiTemplateOutputReference(this, "ui_template");
  public get uiTemplate() {
    return this._uiTemplate;
  }
  public putUiTemplate(value: SagemakerHumanTaskUiUiTemplate) {
    this._uiTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiTemplateInput() {
    return this._uiTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      human_task_ui_name: cdktf.stringToTerraform(this._humanTaskUiName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      ui_template: sagemakerHumanTaskUiUiTemplateToTerraform(this._uiTemplate.internalValue),
    };
  }
}
