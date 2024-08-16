/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}
  */
  readonly computeEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#compute_environment_name_prefix BatchComputeEnvironment#compute_environment_name_prefix}
  */
  readonly computeEnvironmentNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#id BatchComputeEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}
  */
  readonly serviceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#tags_all BatchComputeEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}
  */
  readonly type: string;
  /**
  * compute_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}
  */
  readonly computeResources?: BatchComputeEnvironmentComputeResources;
  /**
  * eks_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}
  */
  readonly eksConfiguration?: BatchComputeEnvironmentEksConfiguration;
  /**
  * update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}
  */
  readonly updatePolicy?: BatchComputeEnvironmentUpdatePolicy;
}
export interface BatchComputeEnvironmentComputeResourcesEc2Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}
  */
  readonly imageIdOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}
  */
  readonly imageType?: string;
}

export function batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct?: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id_override: cdktf.stringToTerraform(struct!.imageIdOverride),
    image_type: cdktf.stringToTerraform(struct!.imageType),
  }
}


export function batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id_override: {
      value: cdktf.stringToHclTerraform(struct!.imageIdOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageIdOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageIdOverride = this._imageIdOverride;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResourcesEc2Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageIdOverride = undefined;
      this._imageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageIdOverride = value.imageIdOverride;
      this._imageType = value.imageType;
    }
  }

  // image_id_override - computed: true, optional: true, required: false
  private _imageIdOverride?: string; 
  public get imageIdOverride() {
    return this.getStringAttribute('image_id_override');
  }
  public set imageIdOverride(value: string) {
    this._imageIdOverride = value;
  }
  public resetImageIdOverride() {
    this._imageIdOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdOverrideInput() {
    return this._imageIdOverride;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }
}

export class BatchComputeEnvironmentComputeResourcesEc2ConfigurationList extends cdktf.ComplexList {
  public internalValue? : BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktf.IResolvable

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
  public get(index: number): BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference {
    return new BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}
  */
  readonly version?: string;
}

export function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | BatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | BatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface BatchComputeEnvironmentComputeResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}
  */
  readonly bidPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#desired_vcpus BatchComputeEnvironment#desired_vcpus}
  */
  readonly desiredVcpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}
  */
  readonly ec2KeyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}
  */
  readonly instanceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#instance_type BatchComputeEnvironment#instance_type}
  */
  readonly instanceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#max_vcpus BatchComputeEnvironment#max_vcpus}
  */
  readonly maxVcpus: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#min_vcpus BatchComputeEnvironment#min_vcpus}
  */
  readonly minVcpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}
  */
  readonly placementGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}
  */
  readonly spotIamFleetRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}
  */
  readonly subnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}
  */
  readonly type: string;
  /**
  * ec2_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#ec2_configuration BatchComputeEnvironment#ec2_configuration}
  */
  readonly ec2Configuration?: BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktf.IResolvable;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}
  */
  readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate;
}

export function batchComputeEnvironmentComputeResourcesToTerraform(struct?: BatchComputeEnvironmentComputeResourcesOutputReference | BatchComputeEnvironmentComputeResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    bid_percentage: cdktf.numberToTerraform(struct!.bidPercentage),
    desired_vcpus: cdktf.numberToTerraform(struct!.desiredVcpus),
    ec2_key_pair: cdktf.stringToTerraform(struct!.ec2KeyPair),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_role: cdktf.stringToTerraform(struct!.instanceRole),
    instance_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceType),
    max_vcpus: cdktf.numberToTerraform(struct!.maxVcpus),
    min_vcpus: cdktf.numberToTerraform(struct!.minVcpus),
    placement_group: cdktf.stringToTerraform(struct!.placementGroup),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    spot_iam_fleet_role: cdktf.stringToTerraform(struct!.spotIamFleetRole),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    ec2_configuration: cdktf.listMapper(batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform, true)(struct!.ec2Configuration),
    launch_template: batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct!.launchTemplate),
  }
}


export function batchComputeEnvironmentComputeResourcesToHclTerraform(struct?: BatchComputeEnvironmentComputeResourcesOutputReference | BatchComputeEnvironmentComputeResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bid_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bidPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.desiredVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ec2_key_pair: {
      value: cdktf.stringToHclTerraform(struct!.ec2KeyPair),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role: {
      value: cdktf.stringToHclTerraform(struct!.instanceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.maxVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.minVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    placement_group: {
      value: cdktf.stringToHclTerraform(struct!.placementGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spot_iam_fleet_role: {
      value: cdktf.stringToHclTerraform(struct!.spotIamFleetRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2_configuration: {
      value: cdktf.listMapperHcl(batchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform, true)(struct!.ec2Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "BatchComputeEnvironmentComputeResourcesEc2ConfigurationList",
    },
    launch_template: {
      value: batchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "BatchComputeEnvironmentComputeResourcesLaunchTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentComputeResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchComputeEnvironmentComputeResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._bidPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPercentage = this._bidPercentage;
    }
    if (this._desiredVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredVcpus = this._desiredVcpus;
    }
    if (this._ec2KeyPair !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2KeyPair = this._ec2KeyPair;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRole = this._instanceRole;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._maxVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpus = this._maxVcpus;
    }
    if (this._minVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVcpus = this._minVcpus;
    }
    if (this._placementGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroup = this._placementGroup;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._spotIamFleetRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotIamFleetRole = this._spotIamFleetRole;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._ec2Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2Configuration = this._ec2Configuration?.internalValue;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentComputeResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._bidPercentage = undefined;
      this._desiredVcpus = undefined;
      this._ec2KeyPair = undefined;
      this._imageId = undefined;
      this._instanceRole = undefined;
      this._instanceType = undefined;
      this._maxVcpus = undefined;
      this._minVcpus = undefined;
      this._placementGroup = undefined;
      this._securityGroupIds = undefined;
      this._spotIamFleetRole = undefined;
      this._subnets = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._ec2Configuration.internalValue = undefined;
      this._launchTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._bidPercentage = value.bidPercentage;
      this._desiredVcpus = value.desiredVcpus;
      this._ec2KeyPair = value.ec2KeyPair;
      this._imageId = value.imageId;
      this._instanceRole = value.instanceRole;
      this._instanceType = value.instanceType;
      this._maxVcpus = value.maxVcpus;
      this._minVcpus = value.minVcpus;
      this._placementGroup = value.placementGroup;
      this._securityGroupIds = value.securityGroupIds;
      this._spotIamFleetRole = value.spotIamFleetRole;
      this._subnets = value.subnets;
      this._tags = value.tags;
      this._type = value.type;
      this._ec2Configuration.internalValue = value.ec2Configuration;
      this._launchTemplate.internalValue = value.launchTemplate;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // bid_percentage - computed: false, optional: true, required: false
  private _bidPercentage?: number; 
  public get bidPercentage() {
    return this.getNumberAttribute('bid_percentage');
  }
  public set bidPercentage(value: number) {
    this._bidPercentage = value;
  }
  public resetBidPercentage() {
    this._bidPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPercentageInput() {
    return this._bidPercentage;
  }

  // desired_vcpus - computed: true, optional: true, required: false
  private _desiredVcpus?: number; 
  public get desiredVcpus() {
    return this.getNumberAttribute('desired_vcpus');
  }
  public set desiredVcpus(value: number) {
    this._desiredVcpus = value;
  }
  public resetDesiredVcpus() {
    this._desiredVcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredVcpusInput() {
    return this._desiredVcpus;
  }

  // ec2_key_pair - computed: false, optional: true, required: false
  private _ec2KeyPair?: string; 
  public get ec2KeyPair() {
    return this.getStringAttribute('ec2_key_pair');
  }
  public set ec2KeyPair(value: string) {
    this._ec2KeyPair = value;
  }
  public resetEc2KeyPair() {
    this._ec2KeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2KeyPairInput() {
    return this._ec2KeyPair;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_role - computed: false, optional: true, required: false
  private _instanceRole?: string; 
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }
  public set instanceRole(value: string) {
    this._instanceRole = value;
  }
  public resetInstanceRole() {
    this._instanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleInput() {
    return this._instanceRole;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string[]; 
  public get instanceType() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_type'));
  }
  public set instanceType(value: string[]) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_vcpus - computed: false, optional: false, required: true
  private _maxVcpus?: number; 
  public get maxVcpus() {
    return this.getNumberAttribute('max_vcpus');
  }
  public set maxVcpus(value: number) {
    this._maxVcpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpusInput() {
    return this._maxVcpus;
  }

  // min_vcpus - computed: false, optional: true, required: false
  private _minVcpus?: number; 
  public get minVcpus() {
    return this.getNumberAttribute('min_vcpus');
  }
  public set minVcpus(value: number) {
    this._minVcpus = value;
  }
  public resetMinVcpus() {
    this._minVcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVcpusInput() {
    return this._minVcpus;
  }

  // placement_group - computed: false, optional: true, required: false
  private _placementGroup?: string; 
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }
  public set placementGroup(value: string) {
    this._placementGroup = value;
  }
  public resetPlacementGroup() {
    this._placementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // spot_iam_fleet_role - computed: false, optional: true, required: false
  private _spotIamFleetRole?: string; 
  public get spotIamFleetRole() {
    return this.getStringAttribute('spot_iam_fleet_role');
  }
  public set spotIamFleetRole(value: string) {
    this._spotIamFleetRole = value;
  }
  public resetSpotIamFleetRole() {
    this._spotIamFleetRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotIamFleetRoleInput() {
    return this._spotIamFleetRole;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // ec2_configuration - computed: false, optional: true, required: false
  private _ec2Configuration = new BatchComputeEnvironmentComputeResourcesEc2ConfigurationList(this, "ec2_configuration", false);
  public get ec2Configuration() {
    return this._ec2Configuration;
  }
  public putEc2Configuration(value: BatchComputeEnvironmentComputeResourcesEc2Configuration[] | cdktf.IResolvable) {
    this._ec2Configuration.internalValue = value;
  }
  public resetEc2Configuration() {
    this._ec2Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigurationInput() {
    return this._ec2Configuration.internalValue;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }
}
export interface BatchComputeEnvironmentEksConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}
  */
  readonly eksClusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}
  */
  readonly kubernetesNamespace: string;
}

export function batchComputeEnvironmentEksConfigurationToTerraform(struct?: BatchComputeEnvironmentEksConfigurationOutputReference | BatchComputeEnvironmentEksConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eks_cluster_arn: cdktf.stringToTerraform(struct!.eksClusterArn),
    kubernetes_namespace: cdktf.stringToTerraform(struct!.kubernetesNamespace),
  }
}


export function batchComputeEnvironmentEksConfigurationToHclTerraform(struct?: BatchComputeEnvironmentEksConfigurationOutputReference | BatchComputeEnvironmentEksConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eks_cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.eksClusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_namespace: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentEksConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchComputeEnvironmentEksConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eksClusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksClusterArn = this._eksClusterArn;
    }
    if (this._kubernetesNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNamespace = this._kubernetesNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentEksConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eksClusterArn = undefined;
      this._kubernetesNamespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eksClusterArn = value.eksClusterArn;
      this._kubernetesNamespace = value.kubernetesNamespace;
    }
  }

  // eks_cluster_arn - computed: false, optional: false, required: true
  private _eksClusterArn?: string; 
  public get eksClusterArn() {
    return this.getStringAttribute('eks_cluster_arn');
  }
  public set eksClusterArn(value: string) {
    this._eksClusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksClusterArnInput() {
    return this._eksClusterArn;
  }

  // kubernetes_namespace - computed: false, optional: false, required: true
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }
}
export interface BatchComputeEnvironmentUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}
  */
  readonly jobExecutionTimeoutMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}
  */
  readonly terminateJobsOnUpdate: boolean | cdktf.IResolvable;
}

export function batchComputeEnvironmentUpdatePolicyToTerraform(struct?: BatchComputeEnvironmentUpdatePolicyOutputReference | BatchComputeEnvironmentUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_execution_timeout_minutes: cdktf.numberToTerraform(struct!.jobExecutionTimeoutMinutes),
    terminate_jobs_on_update: cdktf.booleanToTerraform(struct!.terminateJobsOnUpdate),
  }
}


export function batchComputeEnvironmentUpdatePolicyToHclTerraform(struct?: BatchComputeEnvironmentUpdatePolicyOutputReference | BatchComputeEnvironmentUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_execution_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.jobExecutionTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminate_jobs_on_update: {
      value: cdktf.booleanToHclTerraform(struct!.terminateJobsOnUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchComputeEnvironmentUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchComputeEnvironmentUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobExecutionTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobExecutionTimeoutMinutes = this._jobExecutionTimeoutMinutes;
    }
    if (this._terminateJobsOnUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateJobsOnUpdate = this._terminateJobsOnUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchComputeEnvironmentUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobExecutionTimeoutMinutes = undefined;
      this._terminateJobsOnUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobExecutionTimeoutMinutes = value.jobExecutionTimeoutMinutes;
      this._terminateJobsOnUpdate = value.terminateJobsOnUpdate;
    }
  }

  // job_execution_timeout_minutes - computed: false, optional: false, required: true
  private _jobExecutionTimeoutMinutes?: number; 
  public get jobExecutionTimeoutMinutes() {
    return this.getNumberAttribute('job_execution_timeout_minutes');
  }
  public set jobExecutionTimeoutMinutes(value: number) {
    this._jobExecutionTimeoutMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobExecutionTimeoutMinutesInput() {
    return this._jobExecutionTimeoutMinutes;
  }

  // terminate_jobs_on_update - computed: false, optional: false, required: true
  private _terminateJobsOnUpdate?: boolean | cdktf.IResolvable; 
  public get terminateJobsOnUpdate() {
    return this.getBooleanAttribute('terminate_jobs_on_update');
  }
  public set terminateJobsOnUpdate(value: boolean | cdktf.IResolvable) {
    this._terminateJobsOnUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateJobsOnUpdateInput() {
    return this._terminateJobsOnUpdate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment aws_batch_compute_environment}
*/
export class BatchComputeEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_batch_compute_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BatchComputeEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchComputeEnvironment to import
  * @param importFromId The id of the existing BatchComputeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchComputeEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_batch_compute_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.63.0/docs/resources/batch_compute_environment aws_batch_compute_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchComputeEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_compute_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.63.0',
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
    this._computeEnvironmentName = config.computeEnvironmentName;
    this._computeEnvironmentNamePrefix = config.computeEnvironmentNamePrefix;
    this._id = config.id;
    this._serviceRole = config.serviceRole;
    this._state = config.state;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._computeResources.internalValue = config.computeResources;
    this._eksConfiguration.internalValue = config.eksConfiguration;
    this._updatePolicy.internalValue = config.updatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environment_name - computed: true, optional: true, required: false
  private _computeEnvironmentName?: string; 
  public get computeEnvironmentName() {
    return this.getStringAttribute('compute_environment_name');
  }
  public set computeEnvironmentName(value: string) {
    this._computeEnvironmentName = value;
  }
  public resetComputeEnvironmentName() {
    this._computeEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentNameInput() {
    return this._computeEnvironmentName;
  }

  // compute_environment_name_prefix - computed: true, optional: true, required: false
  private _computeEnvironmentNamePrefix?: string; 
  public get computeEnvironmentNamePrefix() {
    return this.getStringAttribute('compute_environment_name_prefix');
  }
  public set computeEnvironmentNamePrefix(value: string) {
    this._computeEnvironmentNamePrefix = value;
  }
  public resetComputeEnvironmentNamePrefix() {
    this._computeEnvironmentNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentNamePrefixInput() {
    return this._computeEnvironmentNamePrefix;
  }

  // ecs_cluster_arn - computed: true, optional: false, required: false
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
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

  // service_role - computed: true, optional: true, required: false
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  public resetServiceRole() {
    this._serviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // compute_resources - computed: false, optional: true, required: false
  private _computeResources = new BatchComputeEnvironmentComputeResourcesOutputReference(this, "compute_resources");
  public get computeResources() {
    return this._computeResources;
  }
  public putComputeResources(value: BatchComputeEnvironmentComputeResources) {
    this._computeResources.internalValue = value;
  }
  public resetComputeResources() {
    this._computeResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourcesInput() {
    return this._computeResources.internalValue;
  }

  // eks_configuration - computed: false, optional: true, required: false
  private _eksConfiguration = new BatchComputeEnvironmentEksConfigurationOutputReference(this, "eks_configuration");
  public get eksConfiguration() {
    return this._eksConfiguration;
  }
  public putEksConfiguration(value: BatchComputeEnvironmentEksConfiguration) {
    this._eksConfiguration.internalValue = value;
  }
  public resetEksConfiguration() {
    this._eksConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksConfigurationInput() {
    return this._eksConfiguration.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new BatchComputeEnvironmentUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: BatchComputeEnvironmentUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
      compute_environment_name_prefix: cdktf.stringToTerraform(this._computeEnvironmentNamePrefix),
      id: cdktf.stringToTerraform(this._id),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      compute_resources: batchComputeEnvironmentComputeResourcesToTerraform(this._computeResources.internalValue),
      eks_configuration: batchComputeEnvironmentEksConfigurationToTerraform(this._eksConfiguration.internalValue),
      update_policy: batchComputeEnvironmentUpdatePolicyToTerraform(this._updatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_environment_name: {
        value: cdktf.stringToHclTerraform(this._computeEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_environment_name_prefix: {
        value: cdktf.stringToHclTerraform(this._computeEnvironmentNamePrefix),
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
      service_role: {
        value: cdktf.stringToHclTerraform(this._serviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_resources: {
        value: batchComputeEnvironmentComputeResourcesToHclTerraform(this._computeResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchComputeEnvironmentComputeResourcesList",
      },
      eks_configuration: {
        value: batchComputeEnvironmentEksConfigurationToHclTerraform(this._eksConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchComputeEnvironmentEksConfigurationList",
      },
      update_policy: {
        value: batchComputeEnvironmentUpdatePolicyToHclTerraform(this._updatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchComputeEnvironmentUpdatePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
