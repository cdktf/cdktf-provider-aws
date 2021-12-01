// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerStudioLifecycleConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}
  */
  readonly studioLifecycleConfigAppType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}
  */
  readonly studioLifecycleConfigContent: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}
  */
  readonly studioLifecycleConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#tags SagemakerStudioLifecycleConfig#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html#tags_all SagemakerStudioLifecycleConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config}
*/
export class SagemakerStudioLifecycleConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_studio_lifecycle_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerStudioLifecycleConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerStudioLifecycleConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_studio_lifecycle_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._studioLifecycleConfigAppType = config.studioLifecycleConfigAppType;
    this._studioLifecycleConfigContent = config.studioLifecycleConfigContent;
    this._studioLifecycleConfigName = config.studioLifecycleConfigName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // studio_lifecycle_config_app_type - computed: false, optional: false, required: true
  private _studioLifecycleConfigAppType?: string; 
  public get studioLifecycleConfigAppType() {
    return this.getStringAttribute('studio_lifecycle_config_app_type');
  }
  public set studioLifecycleConfigAppType(value: string) {
    this._studioLifecycleConfigAppType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioLifecycleConfigAppTypeInput() {
    return this._studioLifecycleConfigAppType;
  }

  // studio_lifecycle_config_content - computed: false, optional: false, required: true
  private _studioLifecycleConfigContent?: string; 
  public get studioLifecycleConfigContent() {
    return this.getStringAttribute('studio_lifecycle_config_content');
  }
  public set studioLifecycleConfigContent(value: string) {
    this._studioLifecycleConfigContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioLifecycleConfigContentInput() {
    return this._studioLifecycleConfigContent;
  }

  // studio_lifecycle_config_name - computed: false, optional: false, required: true
  private _studioLifecycleConfigName?: string; 
  public get studioLifecycleConfigName() {
    return this.getStringAttribute('studio_lifecycle_config_name');
  }
  public set studioLifecycleConfigName(value: string) {
    this._studioLifecycleConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioLifecycleConfigNameInput() {
    return this._studioLifecycleConfigName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      studio_lifecycle_config_app_type: cdktf.stringToTerraform(this._studioLifecycleConfigAppType),
      studio_lifecycle_config_content: cdktf.stringToTerraform(this._studioLifecycleConfigContent),
      studio_lifecycle_config_name: cdktf.stringToTerraform(this._studioLifecycleConfigName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
