// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ImagebuilderImageRecipeConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly parentImage: string;
  readonly tags?: { [key: string]: string };
  readonly version: string;
  readonly workingDirectory?: string;
  /** block_device_mapping block */
  readonly blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[];
  /** component block */
  readonly component: ImagebuilderImageRecipeComponent[];
}
export interface ImagebuilderImageRecipeBlockDeviceMappingEbs {
  readonly deleteOnTermination?: string;
  readonly encrypted?: string;
  readonly iops?: number;
  readonly kmsKeyId?: string;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: string;
}
export interface ImagebuilderImageRecipeBlockDeviceMapping {
  readonly deviceName?: string;
  readonly noDevice?: boolean;
  readonly virtualName?: string;
  /** ebs block */
  readonly ebs?: ImagebuilderImageRecipeBlockDeviceMappingEbs[];
}
export interface ImagebuilderImageRecipeComponent {
  readonly componentArn: string;
}

// Resource

export class ImagebuilderImageRecipe extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ImagebuilderImageRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_image_recipe',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._parentImage = config.parentImage;
    this._tags = config.tags;
    this._version = config.version;
    this._workingDirectory = config.workingDirectory;
    this._blockDeviceMapping = config.blockDeviceMapping;
    this._component = config.component;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: true
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner - computed: true, optional: false, required: true
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parent_image - computed: false, optional: false, required: true
  private _parentImage: string;
  public get parentImage() {
    return this._parentImage;
  }
  public set parentImage(value: string) {
    this._parentImage = value;
  }

  // platform - computed: true, optional: false, required: true
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this._version;
  }
  public set version(value: string) {
    this._version = value;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string;
  public get workingDirectory() {
    return this._workingDirectory;
  }
  public set workingDirectory(value: string | undefined) {
    this._workingDirectory = value;
  }

  // block_device_mapping - computed: false, optional: true, required: false
  private _blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[];
  public get blockDeviceMapping() {
    return this._blockDeviceMapping;
  }
  public set blockDeviceMapping(value: ImagebuilderImageRecipeBlockDeviceMapping[] | undefined) {
    this._blockDeviceMapping = value;
  }

  // component - computed: false, optional: false, required: true
  private _component: ImagebuilderImageRecipeComponent[];
  public get component() {
    return this._component;
  }
  public set component(value: ImagebuilderImageRecipeComponent[]) {
    this._component = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      parent_image: this._parentImage,
      tags: this._tags,
      version: this._version,
      working_directory: this._workingDirectory,
      block_device_mapping: this._blockDeviceMapping,
      component: this._component,
    };
  }
}
