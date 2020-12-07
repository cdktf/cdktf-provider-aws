// https://www.terraform.io/docs/providers/aws/r/ecr_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
  readonly imageTagMutability?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** image_scanning_configuration block */
  readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
  /** timeouts block */
  readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryImageScanningConfiguration {
  readonly scanOnPush: boolean;
}

function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scan_on_push: cdktf.booleanToTerraform(struct!.scanOnPush),
  }
}

export interface EcrRepositoryTimeouts {
  readonly delete?: string;
}

function ecrRepositoryTimeoutsToTerraform(struct?: EcrRepositoryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class EcrRepository extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      image_scanning_configuration: cdktf.listMapper(ecrRepositoryImageScanningConfigurationToTerraform)(this._imageScanningConfiguration),
      timeouts: ecrRepositoryTimeoutsToTerraform(this._timeouts),
    };
  }
}
