// https://www.terraform.io/docs/providers/aws/r/data_aws_ecr_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsEcrRepositoryConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly registryId?: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsEcrRepositoryEncryptionConfiguration extends ComplexComputedList {

  // encryption_type - computed: true, optional: false, required: true
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key - computed: true, optional: false, required: true
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export class DataAwsEcrRepositoryImageScanningConfiguration extends ComplexComputedList {

  // scan_on_push - computed: true, optional: false, required: true
  public get scanOnPush() {
    return this.getBooleanAttribute('scan_on_push');
  }
}

// Resource

export class DataAwsEcrRepository extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEcrRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._registryId = config.registryId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_configuration - computed: true, optional: false, required: true
  public encryptionConfiguration(index: string) {
    return new DataAwsEcrRepositoryEncryptionConfiguration(this, 'encryption_configuration', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image_scanning_configuration - computed: true, optional: false, required: true
  public imageScanningConfiguration(index: string) {
    return new DataAwsEcrRepositoryImageScanningConfiguration(this, 'image_scanning_configuration', index);
  }

  // image_tag_mutability - computed: true, optional: false, required: true
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // registry_id - computed: true, optional: true, required: false
  private _registryId?: string;
  public get registryId() {
    return this._registryId ?? this.getStringAttribute('registry_id');
  }
  public set registryId(value: string | undefined) {
    this._registryId = value;
  }

  // repository_url - computed: true, optional: false, required: true
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      registry_id: this._registryId,
      tags: this._tags,
    };
  }
}
