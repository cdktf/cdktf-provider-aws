// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerModelPackageGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#model_package_group_description SagemakerModelPackageGroup#model_package_group_description}
  */
  readonly modelPackageGroupDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#model_package_group_name SagemakerModelPackageGroup#model_package_group_name}
  */
  readonly modelPackageGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#tags SagemakerModelPackageGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#tags_all SagemakerModelPackageGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group}
*/
export class SagemakerModelPackageGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_model_package_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelPackageGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model_package_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._modelPackageGroupDescription = config.modelPackageGroupDescription;
    this._modelPackageGroupName = config.modelPackageGroupName;
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

  // model_package_group_description - computed: false, optional: true, required: false
  private _modelPackageGroupDescription?: string; 
  public get modelPackageGroupDescription() {
    return this.getStringAttribute('model_package_group_description');
  }
  public set modelPackageGroupDescription(value: string) {
    this._modelPackageGroupDescription = value;
  }
  public resetModelPackageGroupDescription() {
    this._modelPackageGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupDescriptionInput() {
    return this._modelPackageGroupDescription;
  }

  // model_package_group_name - computed: false, optional: false, required: true
  private _modelPackageGroupName?: string; 
  public get modelPackageGroupName() {
    return this.getStringAttribute('model_package_group_name');
  }
  public set modelPackageGroupName(value: string) {
    this._modelPackageGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageGroupNameInput() {
    return this._modelPackageGroupName;
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
      model_package_group_description: cdktf.stringToTerraform(this._modelPackageGroupDescription),
      model_package_group_name: cdktf.stringToTerraform(this._modelPackageGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
