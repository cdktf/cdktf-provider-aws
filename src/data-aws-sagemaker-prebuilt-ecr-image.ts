// https://www.terraform.io/docs/providers/aws/r/data_aws_sagemaker_prebuilt_ecr_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsSagemakerPrebuiltEcrImageConfig extends TerraformMetaArguments {
  readonly dnsSuffix?: string;
  readonly imageTag?: string;
  readonly region?: string;
  readonly repositoryName: string;
}

// Resource

export class DataAwsSagemakerPrebuiltEcrImage extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._dnsSuffix;
  }
  public set dnsSuffix(value: string | undefined) {
    this._dnsSuffix = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string;
  public get imageTag() {
    return this._imageTag;
  }
  public set imageTag(value: string | undefined) {
    this._imageTag = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // registry_id - computed: true, optional: false, required: true
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // registry_path - computed: true, optional: false, required: true
  public get registryPath() {
    return this.getStringAttribute('registry_path');
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName: string;
  public get repositoryName() {
    return this._repositoryName;
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_suffix: this._dnsSuffix,
      image_tag: this._imageTag,
      region: this._region,
      repository_name: this._repositoryName,
    };
  }
}
