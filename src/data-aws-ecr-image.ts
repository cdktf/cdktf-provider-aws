// https://www.terraform.io/docs/providers/aws/r/data_aws_ecr_image.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_digest": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_pushed_at": {
        "type": "number",
        "computed": true
      },
      "image_size_in_bytes": {
        "type": "number",
        "computed": true
      },
      "image_tag": {
        "type": "string",
        "optional": true
      },
      "image_tags": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "registry_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "repository_name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEcrImageConfig extends TerraformMetaArguments {
  readonly imageDigest?: string;
  readonly imageTag?: string;
  readonly registryId?: string;
  readonly repositoryName: string;
}

// Resource

export class DataAwsEcrImage extends TerraformDataSource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string;
  public get imageDigest() {
    return this._imageDigest ?? this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string | undefined) {
    this._imageDigest = value;
  }

  // image_pushed_at - computed: true, optional: false, required: true
  public get imagePushedAt() {
    return this.getNumberAttribute('image_pushed_at');
  }

  // image_size_in_bytes - computed: true, optional: false, required: true
  public get imageSizeInBytes() {
    return this.getNumberAttribute('image_size_in_bytes');
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string;
  public get imageTag() {
    return this._imageTag;
  }
  public set imageTag(value: string | undefined) {
    this._imageTag = value;
  }

  // image_tags - computed: true, optional: false, required: true
  public get imageTags() {
    return this.getListAttribute('image_tags');
  }

  // registry_id - computed: true, optional: true, required: false
  private _registryId?: string;
  public get registryId() {
    return this._registryId ?? this.getStringAttribute('registry_id');
  }
  public set registryId(value: string | undefined) {
    this._registryId = value;
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

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      image_digest: this._imageDigest,
      image_tag: this._imageTag,
      registry_id: this._registryId,
      repository_name: this._repositoryName,
    };
  }
}
