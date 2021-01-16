// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
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

function imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingEbs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface ImagebuilderImageRecipeBlockDeviceMapping {
  readonly deviceName?: string;
  readonly noDevice?: boolean;
  readonly virtualName?: string;
  /** ebs block */
  readonly ebs?: ImagebuilderImageRecipeBlockDeviceMappingEbs[];
}

function imagebuilderImageRecipeBlockDeviceMappingToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.booleanToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    ebs: cdktf.listMapper(imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform)(struct!.ebs),
  }
}

export interface ImagebuilderImageRecipeComponent {
  readonly componentArn: string;
}

function imagebuilderImageRecipeComponentToTerraform(struct?: ImagebuilderImageRecipeComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
  }
}


// Resource

export class ImagebuilderImageRecipe extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parent_image - computed: false, optional: false, required: true
  private _parentImage: string;
  public get parentImage() {
    return this.getStringAttribute('parent_image');
  }
  public set parentImage(value: string) {
    this._parentImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentImageInput() {
    return this._parentImage
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
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

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string;
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string ) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory
  }

  // block_device_mapping - computed: false, optional: true, required: false
  private _blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[];
  public get blockDeviceMapping() {
    return this.interpolationForAttribute('block_device_mapping') as any;
  }
  public set blockDeviceMapping(value: ImagebuilderImageRecipeBlockDeviceMapping[] ) {
    this._blockDeviceMapping = value;
  }
  public resetBlockDeviceMapping() {
    this._blockDeviceMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingInput() {
    return this._blockDeviceMapping
  }

  // component - computed: false, optional: false, required: true
  private _component: ImagebuilderImageRecipeComponent[];
  public get component() {
    return this.interpolationForAttribute('component') as any;
  }
  public set component(value: ImagebuilderImageRecipeComponent[]) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_image: cdktf.stringToTerraform(this._parentImage),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      block_device_mapping: cdktf.listMapper(imagebuilderImageRecipeBlockDeviceMappingToTerraform)(this._blockDeviceMapping),
      component: cdktf.listMapper(imagebuilderImageRecipeComponentToTerraform)(this._component),
    };
  }
}
