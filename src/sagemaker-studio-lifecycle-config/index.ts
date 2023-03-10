// https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerStudioLifecycleConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}
  */
  readonly studioLifecycleConfigAppType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}
  */
  readonly studioLifecycleConfigContent: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}
  */
  readonly studioLifecycleConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config}
*/
export class SagemakerStudioLifecycleConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_studio_lifecycle_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerStudioLifecycleConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerStudioLifecycleConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_studio_lifecycle_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._id = config.id;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      studio_lifecycle_config_app_type: cdktf.stringToTerraform(this._studioLifecycleConfigAppType),
      studio_lifecycle_config_content: cdktf.stringToTerraform(this._studioLifecycleConfigContent),
      studio_lifecycle_config_name: cdktf.stringToTerraform(this._studioLifecycleConfigName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
