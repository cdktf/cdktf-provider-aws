/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}
  */
  readonly containerRecipeArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}
  */
  readonly distributionConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}
  */
  readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}
  */
  readonly executionRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#id ImagebuilderImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}
  */
  readonly imageRecipeArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}
  */
  readonly infrastructureConfigurationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#tags_all ImagebuilderImage#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * image_scanning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#image_scanning_configuration ImagebuilderImage#image_scanning_configuration}
  */
  readonly imageScanningConfiguration?: ImagebuilderImageImageScanningConfiguration;
  /**
  * image_tests_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}
  */
  readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#timeouts ImagebuilderImage#timeouts}
  */
  readonly timeouts?: ImagebuilderImageTimeouts;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#workflow ImagebuilderImage#workflow}
  */
  readonly workflow?: ImagebuilderImageWorkflow[] | cdktf.IResolvable;
}
export interface ImagebuilderImageOutputResourcesAmis {
}

export function imagebuilderImageOutputResourcesAmisToTerraform(struct?: ImagebuilderImageOutputResourcesAmis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imagebuilderImageOutputResourcesAmisToHclTerraform(struct?: ImagebuilderImageOutputResourcesAmis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImagebuilderImageOutputResourcesAmisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderImageOutputResourcesAmis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageOutputResourcesAmis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class ImagebuilderImageOutputResourcesAmisList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImagebuilderImageOutputResourcesAmisOutputReference {
    return new ImagebuilderImageOutputResourcesAmisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderImageOutputResourcesContainers {
}

export function imagebuilderImageOutputResourcesContainersToTerraform(struct?: ImagebuilderImageOutputResourcesContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imagebuilderImageOutputResourcesContainersToHclTerraform(struct?: ImagebuilderImageOutputResourcesContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImagebuilderImageOutputResourcesContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderImageOutputResourcesContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageOutputResourcesContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_uris - computed: true, optional: false, required: false
  public get imageUris() {
    return cdktf.Fn.tolist(this.getListAttribute('image_uris'));
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class ImagebuilderImageOutputResourcesContainersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImagebuilderImageOutputResourcesContainersOutputReference {
    return new ImagebuilderImageOutputResourcesContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderImageOutputResources {
}

export function imagebuilderImageOutputResourcesToTerraform(struct?: ImagebuilderImageOutputResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imagebuilderImageOutputResourcesToHclTerraform(struct?: ImagebuilderImageOutputResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImagebuilderImageOutputResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderImageOutputResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageOutputResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amis - computed: true, optional: false, required: false
  private _amis = new ImagebuilderImageOutputResourcesAmisList(this, "amis", true);
  public get amis() {
    return this._amis;
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new ImagebuilderImageOutputResourcesContainersList(this, "containers", true);
  public get containers() {
    return this._containers;
  }
}

export class ImagebuilderImageOutputResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImagebuilderImageOutputResourcesOutputReference {
    return new ImagebuilderImageOutputResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderImageImageScanningConfigurationEcrConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#container_tags ImagebuilderImage#container_tags}
  */
  readonly containerTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#repository_name ImagebuilderImage#repository_name}
  */
  readonly repositoryName?: string;
}

export function imagebuilderImageImageScanningConfigurationEcrConfigurationToTerraform(struct?: ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference | ImagebuilderImageImageScanningConfigurationEcrConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerTags),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
  }
}


export function imagebuilderImageImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference | ImagebuilderImageImageScanningConfigurationEcrConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerTags = this._containerTags;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerTags = undefined;
      this._repositoryName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerTags = value.containerTags;
      this._repositoryName = value.repositoryName;
    }
  }

  // container_tags - computed: false, optional: true, required: false
  private _containerTags?: string[]; 
  public get containerTags() {
    return cdktf.Fn.tolist(this.getListAttribute('container_tags'));
  }
  public set containerTags(value: string[]) {
    this._containerTags = value;
  }
  public resetContainerTags() {
    this._containerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTagsInput() {
    return this._containerTags;
  }

  // repository_name - computed: false, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }
}
export interface ImagebuilderImageImageScanningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#image_scanning_enabled ImagebuilderImage#image_scanning_enabled}
  */
  readonly imageScanningEnabled?: boolean | cdktf.IResolvable;
  /**
  * ecr_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#ecr_configuration ImagebuilderImage#ecr_configuration}
  */
  readonly ecrConfiguration?: ImagebuilderImageImageScanningConfigurationEcrConfiguration;
}

export function imagebuilderImageImageScanningConfigurationToTerraform(struct?: ImagebuilderImageImageScanningConfigurationOutputReference | ImagebuilderImageImageScanningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_scanning_enabled: cdktf.booleanToTerraform(struct!.imageScanningEnabled),
    ecr_configuration: imagebuilderImageImageScanningConfigurationEcrConfigurationToTerraform(struct!.ecrConfiguration),
  }
}


export function imagebuilderImageImageScanningConfigurationToHclTerraform(struct?: ImagebuilderImageImageScanningConfigurationOutputReference | ImagebuilderImageImageScanningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_scanning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.imageScanningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ecr_configuration: {
      value: imagebuilderImageImageScanningConfigurationEcrConfigurationToHclTerraform(struct!.ecrConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ImagebuilderImageImageScanningConfigurationEcrConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImageImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderImageImageScanningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageScanningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageScanningEnabled = this._imageScanningEnabled;
    }
    if (this._ecrConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrConfiguration = this._ecrConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageImageScanningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageScanningEnabled = undefined;
      this._ecrConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageScanningEnabled = value.imageScanningEnabled;
      this._ecrConfiguration.internalValue = value.ecrConfiguration;
    }
  }

  // image_scanning_enabled - computed: false, optional: true, required: false
  private _imageScanningEnabled?: boolean | cdktf.IResolvable; 
  public get imageScanningEnabled() {
    return this.getBooleanAttribute('image_scanning_enabled');
  }
  public set imageScanningEnabled(value: boolean | cdktf.IResolvable) {
    this._imageScanningEnabled = value;
  }
  public resetImageScanningEnabled() {
    this._imageScanningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningEnabledInput() {
    return this._imageScanningEnabled;
  }

  // ecr_configuration - computed: false, optional: true, required: false
  private _ecrConfiguration = new ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference(this, "ecr_configuration");
  public get ecrConfiguration() {
    return this._ecrConfiguration;
  }
  public putEcrConfiguration(value: ImagebuilderImageImageScanningConfigurationEcrConfiguration) {
    this._ecrConfiguration.internalValue = value;
  }
  public resetEcrConfiguration() {
    this._ecrConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrConfigurationInput() {
    return this._ecrConfiguration.internalValue;
  }
}
export interface ImagebuilderImageImageTestsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}
  */
  readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_tests_enabled: cdktf.booleanToTerraform(struct!.imageTestsEnabled),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function imagebuilderImageImageTestsConfigurationToHclTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_tests_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.imageTestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImageImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImagebuilderImageImageTestsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageTestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTestsEnabled = this._imageTestsEnabled;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageImageTestsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageTestsEnabled = undefined;
      this._timeoutMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageTestsEnabled = value.imageTestsEnabled;
      this._timeoutMinutes = value.timeoutMinutes;
    }
  }

  // image_tests_enabled - computed: false, optional: true, required: false
  private _imageTestsEnabled?: boolean | cdktf.IResolvable; 
  public get imageTestsEnabled() {
    return this.getBooleanAttribute('image_tests_enabled');
  }
  public set imageTestsEnabled(value: boolean | cdktf.IResolvable) {
    this._imageTestsEnabled = value;
  }
  public resetImageTestsEnabled() {
    this._imageTestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsEnabledInput() {
    return this._imageTestsEnabled;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}
export interface ImagebuilderImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#create ImagebuilderImage#create}
  */
  readonly create?: string;
}

export function imagebuilderImageTimeoutsToTerraform(struct?: ImagebuilderImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function imagebuilderImageTimeoutsToHclTerraform(struct?: ImagebuilderImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImagebuilderImageTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}
export interface ImagebuilderImageWorkflowParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#name ImagebuilderImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#value ImagebuilderImage#value}
  */
  readonly value: string;
}

export function imagebuilderImageWorkflowParameterToTerraform(struct?: ImagebuilderImageWorkflowParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function imagebuilderImageWorkflowParameterToHclTerraform(struct?: ImagebuilderImageWorkflowParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImageWorkflowParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderImageWorkflowParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageWorkflowParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ImagebuilderImageWorkflowParameterList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderImageWorkflowParameter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImagebuilderImageWorkflowParameterOutputReference {
    return new ImagebuilderImageWorkflowParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImagebuilderImageWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#on_failure ImagebuilderImage#on_failure}
  */
  readonly onFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#parallel_group ImagebuilderImage#parallel_group}
  */
  readonly parallelGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#workflow_arn ImagebuilderImage#workflow_arn}
  */
  readonly workflowArn: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#parameter ImagebuilderImage#parameter}
  */
  readonly parameter?: ImagebuilderImageWorkflowParameter[] | cdktf.IResolvable;
}

export function imagebuilderImageWorkflowToTerraform(struct?: ImagebuilderImageWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: cdktf.stringToTerraform(struct!.onFailure),
    parallel_group: cdktf.stringToTerraform(struct!.parallelGroup),
    workflow_arn: cdktf.stringToTerraform(struct!.workflowArn),
    parameter: cdktf.listMapper(imagebuilderImageWorkflowParameterToTerraform, true)(struct!.parameter),
  }
}


export function imagebuilderImageWorkflowToHclTerraform(struct?: ImagebuilderImageWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: cdktf.stringToHclTerraform(struct!.onFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel_group: {
      value: cdktf.stringToHclTerraform(struct!.parallelGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_arn: {
      value: cdktf.stringToHclTerraform(struct!.workflowArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: cdktf.listMapperHcl(imagebuilderImageWorkflowParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ImagebuilderImageWorkflowParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImagebuilderImageWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ImagebuilderImageWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._parallelGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelGroup = this._parallelGroup;
    }
    if (this._workflowArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowArn = this._workflowArn;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderImageWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onFailure = undefined;
      this._parallelGroup = undefined;
      this._workflowArn = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onFailure = value.onFailure;
      this._parallelGroup = value.parallelGroup;
      this._workflowArn = value.workflowArn;
      this._parameter.internalValue = value.parameter;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string; 
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }
  public set onFailure(value: string) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // parallel_group - computed: false, optional: true, required: false
  private _parallelGroup?: string; 
  public get parallelGroup() {
    return this.getStringAttribute('parallel_group');
  }
  public set parallelGroup(value: string) {
    this._parallelGroup = value;
  }
  public resetParallelGroup() {
    this._parallelGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelGroupInput() {
    return this._parallelGroup;
  }

  // workflow_arn - computed: false, optional: false, required: true
  private _workflowArn?: string; 
  public get workflowArn() {
    return this.getStringAttribute('workflow_arn');
  }
  public set workflowArn(value: string) {
    this._workflowArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowArnInput() {
    return this._workflowArn;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ImagebuilderImageWorkflowParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ImagebuilderImageWorkflowParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class ImagebuilderImageWorkflowList extends cdktf.ComplexList {
  public internalValue? : ImagebuilderImageWorkflow[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ImagebuilderImageWorkflowOutputReference {
    return new ImagebuilderImageWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image aws_imagebuilder_image}
*/
export class ImagebuilderImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_imagebuilder_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImagebuilderImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagebuilderImage to import
  * @param importFromId The id of the existing ImagebuilderImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagebuilderImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_imagebuilder_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/imagebuilder_image aws_imagebuilder_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderImageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_image',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerRecipeArn = config.containerRecipeArn;
    this._distributionConfigurationArn = config.distributionConfigurationArn;
    this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
    this._executionRole = config.executionRole;
    this._id = config.id;
    this._imageRecipeArn = config.imageRecipeArn;
    this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._imageScanningConfiguration.internalValue = config.imageScanningConfiguration;
    this._imageTestsConfiguration.internalValue = config.imageTestsConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._workflow.internalValue = config.workflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_recipe_arn - computed: false, optional: true, required: false
  private _containerRecipeArn?: string; 
  public get containerRecipeArn() {
    return this.getStringAttribute('container_recipe_arn');
  }
  public set containerRecipeArn(value: string) {
    this._containerRecipeArn = value;
  }
  public resetContainerRecipeArn() {
    this._containerRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRecipeArnInput() {
    return this._containerRecipeArn;
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
  public set distributionConfigurationArn(value: string) {
    this._distributionConfigurationArn = value;
  }
  public resetDistributionConfigurationArn() {
    this._distributionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigurationArnInput() {
    return this._distributionConfigurationArn;
  }

  // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable; 
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }
  public set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable) {
    this._enhancedImageMetadataEnabled = value;
  }
  public resetEnhancedImageMetadataEnabled() {
    this._enhancedImageMetadataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedImageMetadataEnabledInput() {
    return this._enhancedImageMetadataEnabled;
  }

  // execution_role - computed: true, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_recipe_arn - computed: false, optional: true, required: false
  private _imageRecipeArn?: string; 
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }
  public set imageRecipeArn(value: string) {
    this._imageRecipeArn = value;
  }
  public resetImageRecipeArn() {
    this._imageRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRecipeArnInput() {
    return this._imageRecipeArn;
  }

  // infrastructure_configuration_arn - computed: false, optional: false, required: true
  private _infrastructureConfigurationArn?: string; 
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }
  public set infrastructureConfigurationArn(value: string) {
    this._infrastructureConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationArnInput() {
    return this._infrastructureConfigurationArn;
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
  private _outputResources = new ImagebuilderImageOutputResourcesList(this, "output_resources", false);
  public get outputResources() {
    return this._outputResources;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // image_scanning_configuration - computed: false, optional: true, required: false
  private _imageScanningConfiguration = new ImagebuilderImageImageScanningConfigurationOutputReference(this, "image_scanning_configuration");
  public get imageScanningConfiguration() {
    return this._imageScanningConfiguration;
  }
  public putImageScanningConfiguration(value: ImagebuilderImageImageScanningConfiguration) {
    this._imageScanningConfiguration.internalValue = value;
  }
  public resetImageScanningConfiguration() {
    this._imageScanningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanningConfigurationInput() {
    return this._imageScanningConfiguration.internalValue;
  }

  // image_tests_configuration - computed: false, optional: true, required: false
  private _imageTestsConfiguration = new ImagebuilderImageImageTestsConfigurationOutputReference(this, "image_tests_configuration");
  public get imageTestsConfiguration() {
    return this._imageTestsConfiguration;
  }
  public putImageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration) {
    this._imageTestsConfiguration.internalValue = value;
  }
  public resetImageTestsConfiguration() {
    this._imageTestsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsConfigurationInput() {
    return this._imageTestsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ImagebuilderImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ImagebuilderImageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new ImagebuilderImageWorkflowList(this, "workflow", true);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: ImagebuilderImageWorkflow[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_recipe_arn: cdktf.stringToTerraform(this._containerRecipeArn),
      distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
      enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
      execution_role: cdktf.stringToTerraform(this._executionRole),
      id: cdktf.stringToTerraform(this._id),
      image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
      infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      image_scanning_configuration: imagebuilderImageImageScanningConfigurationToTerraform(this._imageScanningConfiguration.internalValue),
      image_tests_configuration: imagebuilderImageImageTestsConfigurationToTerraform(this._imageTestsConfiguration.internalValue),
      timeouts: imagebuilderImageTimeoutsToTerraform(this._timeouts.internalValue),
      workflow: cdktf.listMapper(imagebuilderImageWorkflowToTerraform, true)(this._workflow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_recipe_arn: {
        value: cdktf.stringToHclTerraform(this._containerRecipeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution_configuration_arn: {
        value: cdktf.stringToHclTerraform(this._distributionConfigurationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_image_metadata_enabled: {
        value: cdktf.booleanToHclTerraform(this._enhancedImageMetadataEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role: {
        value: cdktf.stringToHclTerraform(this._executionRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_recipe_arn: {
        value: cdktf.stringToHclTerraform(this._imageRecipeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_configuration_arn: {
        value: cdktf.stringToHclTerraform(this._infrastructureConfigurationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      image_scanning_configuration: {
        value: imagebuilderImageImageScanningConfigurationToHclTerraform(this._imageScanningConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagebuilderImageImageScanningConfigurationList",
      },
      image_tests_configuration: {
        value: imagebuilderImageImageTestsConfigurationToHclTerraform(this._imageTestsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImagebuilderImageImageTestsConfigurationList",
      },
      timeouts: {
        value: imagebuilderImageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImagebuilderImageTimeouts",
      },
      workflow: {
        value: cdktf.listMapperHcl(imagebuilderImageWorkflowToHclTerraform, true)(this._workflow.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImagebuilderImageWorkflowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
