// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Registry
*/
export interface DataAwsEcrImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#image_digest DataAwsEcrImage#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#image_tag DataAwsEcrImage#image_tag}
  */
  readonly imageTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#registry_id DataAwsEcrImage#registry_id}
  */
  readonly registryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html#repository_name DataAwsEcrImage#repository_name}
  */
  readonly repositoryName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image}
*/
export class DataAwsEcrImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecr_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcrImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcrImageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_image',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageDigest = config.imageDigest;
    this._imageTag = config.imageTag;
    this._registryId = config.registryId;
    this._repositoryName = config.repositoryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_pushed_at - computed: true, optional: false, required: false
  public get imagePushedAt() {
    return this.getNumberAttribute('image_pushed_at');
  }

  // image_size_in_bytes - computed: true, optional: false, required: false
  public get imageSizeInBytes() {
    return this.getNumberAttribute('image_size_in_bytes');
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

  // image_tags - computed: true, optional: false, required: false
  public get imageTags() {
    return this.getListAttribute('image_tags');
  }

  // registry_id - computed: true, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
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
      image_digest: cdktf.stringToTerraform(this._imageDigest),
      image_tag: cdktf.stringToTerraform(this._imageTag),
      registry_id: cdktf.stringToTerraform(this._registryId),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
    };
  }
}
