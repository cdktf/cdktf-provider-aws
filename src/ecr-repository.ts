// https://www.terraform.io/docs/providers/aws/r/ecr_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_tag_mutability EcrRepository#image_tag_mutability}
  */
  readonly imageTagMutability?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#name EcrRepository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags EcrRepository#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags_all EcrRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_configuration EcrRepository#encryption_configuration}
  */
  readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[];
  /**
  * image_scanning_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_scanning_configuration EcrRepository#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#timeouts EcrRepository#timeouts}
  */
  readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_type EcrRepository#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#kms_key EcrRepository#kms_key}
  */
  readonly kmsKey?: string;
}

function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export interface EcrRepositoryImageScanningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#scan_on_push EcrRepository#scan_on_push}
  */
  readonly scanOnPush: boolean | cdktf.IResolvable;
}

function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scan_on_push: cdktf.booleanToTerraform(struct!.scanOnPush),
  }
}

export interface EcrRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#delete EcrRepository#delete}
  */
  readonly delete?: string;
}

function ecrRepositoryTimeoutsToTerraform(struct?: EcrRepositoryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository}
*/
export class EcrRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecr_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: EcrRepositoryConfig) {
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
    this._imageTagMutability = config.imageTagMutability;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._encryptionConfiguration = config.encryptionConfiguration;
    this._imageScanningConfiguration = config.imageScanningConfiguration;
    this._timeouts = config.timeouts;
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

  // image_tag_mutability - computed: false, optional: true, required: false
  private _imageTagMutability?: string;
  public get imageTagMutability() {
    return this.getStringAttribute('image_tag_mutability');
  }
  public set imageTagMutability(value: string ) {
    this._imageTagMutability = value;
  }
  public resetImageTagMutability() {
    this._imageTagMutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagMutabilityInput() {
    return this._imageTagMutability
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: EcrRepositoryEncryptionConfiguration[] ) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
  public get imageScanningConfiguration() {
    return this.interpolationForAttribute('image_scanning_configuration') as any;
  }
  public set imageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration[] ) {
    this._imageScanningConfiguration = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EcrRepositoryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EcrRepositoryTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_tag_mutability: cdktf.stringToTerraform(this._imageTagMutability),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      encryption_configuration: cdktf.listMapper(ecrRepositoryEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
      image_scanning_configuration: cdktf.listMapper(ecrRepositoryImageScanningConfigurationToTerraform)(this._imageScanningConfiguration),
      timeouts: ecrRepositoryTimeoutsToTerraform(this._timeouts),
    };
  }
}
