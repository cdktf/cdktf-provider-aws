// https://www.terraform.io/docs/providers/aws/r/data_aws_ecr_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcrImageConfig extends cdktf.TerraformMetaArguments {
  readonly imageDigest?: string;
  readonly imageTag?: string;
  readonly registryId?: string;
  readonly repositoryName: string;
}

// Resource

export class DataAwsEcrImage extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._imageDigest
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
  public set imageTag(value: string ) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag
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
    return this._registryId
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName: string;
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName
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
