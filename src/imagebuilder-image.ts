// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}
  */
  readonly distributionConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}
  */
  readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_recipe_arn ImagebuilderImage#image_recipe_arn}
  */
  readonly imageRecipeArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}
  */
  readonly infrastructureConfigurationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags ImagebuilderImage#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#tags_all ImagebuilderImage#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * image_tests_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_configuration ImagebuilderImage#image_tests_configuration}
  */
  readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeouts ImagebuilderImage#timeouts}
  */
  readonly timeouts?: ImagebuilderImageTimeouts;
}
export class ImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export class ImagebuilderImageOutputResources extends cdktf.ComplexComputedList {

  // amis - computed: true, optional: false, required: false
  public get amis() {
    return this.interpolationForAttribute('amis') as any;
  }
}
export interface ImagebuilderImageImageTestsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#image_tests_enabled ImagebuilderImage#image_tests_enabled}
  */
  readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#timeout_minutes ImagebuilderImage#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_tests_enabled: cdktf.booleanToTerraform(struct!.imageTestsEnabled),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}

export interface ImagebuilderImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html#create ImagebuilderImage#create}
  */
  readonly create?: string;
}

function imagebuilderImageTimeoutsToTerraform(struct?: ImagebuilderImageTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image}
*/
export class ImagebuilderImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderImageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_image',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._distributionConfigurationArn = config.distributionConfigurationArn;
    this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
    this._imageRecipeArn = config.imageRecipeArn;
    this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._imageTestsConfiguration = config.imageTestsConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // distribution_configuration_arn - computed: false, optional: true, required: false
  private _distributionConfigurationArn?: string;
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }
  public set distributionConfigurationArn(value: string ) {
    this._distributionConfigurationArn = value;
  }
  public resetDistributionConfigurationArn() {
    this._distributionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigurationArnInput() {
    return this._distributionConfigurationArn
  }

  // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }
  public set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable ) {
    this._enhancedImageMetadataEnabled = value;
  }
  public resetEnhancedImageMetadataEnabled() {
    this._enhancedImageMetadataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedImageMetadataEnabledInput() {
    return this._enhancedImageMetadataEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_recipe_arn - computed: false, optional: false, required: true
  private _imageRecipeArn: string;
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }
  public set imageRecipeArn(value: string) {
    this._imageRecipeArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRecipeArnInput() {
    return this._imageRecipeArn
  }

  // infrastructure_configuration_arn - computed: false, optional: false, required: true
  private _infrastructureConfigurationArn: string;
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }
  public set infrastructureConfigurationArn(value: string) {
    this._infrastructureConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationArnInput() {
    return this._infrastructureConfigurationArn
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // output_resources - computed: true, optional: false, required: false
  public outputResources(index: string) {
    return new ImagebuilderImageOutputResources(this, 'output_resources', index);
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // image_tests_configuration - computed: false, optional: true, required: false
  private _imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration[];
  public get imageTestsConfiguration() {
    return this.interpolationForAttribute('image_tests_configuration') as any;
  }
  public set imageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration[] ) {
    this._imageTestsConfiguration = value;
  }
  public resetImageTestsConfiguration() {
    this._imageTestsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsConfigurationInput() {
    return this._imageTestsConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ImagebuilderImageTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ImagebuilderImageTimeouts ) {
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
      distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
      enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
      image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
      infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      image_tests_configuration: cdktf.listMapper(imagebuilderImageImageTestsConfigurationToTerraform)(this._imageTestsConfiguration),
      timeouts: imagebuilderImageTimeoutsToTerraform(this._timeouts),
    };
  }
}
