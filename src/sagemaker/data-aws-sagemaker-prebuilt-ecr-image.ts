// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface DataAwsSagemakerPrebuiltEcrImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}
  */
  readonly imageTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#region DataAwsSagemakerPrebuiltEcrImage#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}
  */
  readonly repositoryName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image}
*/
export class DataAwsSagemakerPrebuiltEcrImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_prebuilt_ecr_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSagemakerPrebuiltEcrImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSagemakerPrebuiltEcrImageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_prebuilt_ecr_image',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsSuffix = config.dnsSuffix;
    this._imageTag = config.imageTag;
    this._region = config.region;
    this._repositoryName = config.repositoryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // registry_path - computed: true, optional: false, required: false
  public get registryPath() {
    return this.getStringAttribute('registry_path');
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      image_tag: cdktf.stringToTerraform(this._imageTag),
      region: cdktf.stringToTerraform(this._region),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
    };
  }
}
