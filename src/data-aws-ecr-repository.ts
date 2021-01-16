// https://www.terraform.io/docs/providers/aws/r/data_aws_ecr_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcrRepositoryConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly registryId?: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsEcrRepositoryEncryptionConfiguration extends cdktf.ComplexComputedList {

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
}
export class DataAwsEcrRepositoryImageScanningConfiguration extends cdktf.ComplexComputedList {

  // scan_on_push - computed: true, optional: false, required: false
  public get scanOnPush() {
    return this.getBooleanAttribute('scan_on_push');
  }
}

// Resource

export class DataAwsEcrRepository extends cdktf.TerraformDataSource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public encryptionConfiguration(index: string) {
    return new DataAwsEcrRepositoryEncryptionConfiguration(this, 'encryption_configuration', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_scanning_configuration - computed: true, optional: false, required: false
  public imageScanningConfiguration(index: string) {
    return new DataAwsEcrRepositoryImageScanningConfiguration(this, 'image_scanning_configuration', index);
  }

  // image_tag_mutability - computed: true, optional: false, required: false
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      registry_id: cdktf.stringToTerraform(this._registryId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
