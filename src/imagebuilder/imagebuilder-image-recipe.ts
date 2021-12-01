// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Image Builder
*/
export interface ImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#description ImagebuilderImageRecipe#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#name ImagebuilderImageRecipe#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#parent_image ImagebuilderImageRecipe#parent_image}
  */
  readonly parentImage: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#tags ImagebuilderImageRecipe#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#tags_all ImagebuilderImageRecipe#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#version ImagebuilderImageRecipe#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#working_directory ImagebuilderImageRecipe#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * block_device_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}
  */
  readonly blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[];
  /**
  * component block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#component ImagebuilderImageRecipe#component}
  */
  readonly component: ImagebuilderImageRecipeComponent[];
}
export interface ImagebuilderImageRecipeBlockDeviceMappingEbs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}
  */
  readonly deleteOnTermination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#encrypted ImagebuilderImageRecipe#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#iops ImagebuilderImageRecipe#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#kms_key_id ImagebuilderImageRecipe#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#snapshot_id ImagebuilderImageRecipe#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#volume_size ImagebuilderImageRecipe#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#volume_type ImagebuilderImageRecipe#volume_type}
  */
  readonly volumeType?: string;
}

export function imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference | ImagebuilderImageRecipeBlockDeviceMappingEbs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ImagebuilderImageRecipeBlockDeviceMappingEbs | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._deleteOnTermination) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._encrypted) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._volumeSize) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageRecipeBlockDeviceMappingEbs | undefined) {
    if (value === undefined) {
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else {
      this._deleteOnTermination = value.deleteOnTermination;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: string; 
  public get deleteOnTermination() {
    return this.getStringAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: string) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ImagebuilderImageRecipeBlockDeviceMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#device_name ImagebuilderImageRecipe#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#no_device ImagebuilderImageRecipe#no_device}
  */
  readonly noDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#virtual_name ImagebuilderImageRecipe#virtual_name}
  */
  readonly virtualName?: string;
  /**
  * ebs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#ebs ImagebuilderImageRecipe#ebs}
  */
  readonly ebs?: ImagebuilderImageRecipeBlockDeviceMappingEbs;
}

export function imagebuilderImageRecipeBlockDeviceMappingToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.booleanToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    ebs: imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct!.ebs),
  }
}

export interface ImagebuilderImageRecipeComponent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#component_arn ImagebuilderImageRecipe#component_arn}
  */
  readonly componentArn: string;
}

export function imagebuilderImageRecipeComponentToTerraform(struct?: ImagebuilderImageRecipeComponent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}
*/
export class ImagebuilderImageRecipe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_image_recipe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImageRecipeConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parent_image - computed: false, optional: false, required: true
  private _parentImage?: string; 
  public get parentImage() {
    return this.getStringAttribute('parent_image');
  }
  public set parentImage(value: string) {
    this._parentImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentImageInput() {
    return this._parentImage;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // block_device_mapping - computed: false, optional: true, required: false
  private _blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[]; 
  public get blockDeviceMapping() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('block_device_mapping') as any;
  }
  public set blockDeviceMapping(value: ImagebuilderImageRecipeBlockDeviceMapping[]) {
    this._blockDeviceMapping = value;
  }
  public resetBlockDeviceMapping() {
    this._blockDeviceMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingInput() {
    return this._blockDeviceMapping;
  }

  // component - computed: false, optional: false, required: true
  private _component?: ImagebuilderImageRecipeComponent[]; 
  public get component() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('component') as any;
  }
  public set component(value: ImagebuilderImageRecipeComponent[]) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      version: cdktf.stringToTerraform(this._version),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      block_device_mapping: cdktf.listMapper(imagebuilderImageRecipeBlockDeviceMappingToTerraform)(this._blockDeviceMapping),
      component: cdktf.listMapper(imagebuilderImageRecipeComponentToTerraform)(this._component),
    };
  }
}
