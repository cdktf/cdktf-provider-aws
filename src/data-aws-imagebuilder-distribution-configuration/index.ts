/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration#region DataAwsImagebuilderDistributionConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // organization_arns - computed: true, optional: false, required: false
  public get organizationArns() {
    return cdktf.Fn.tolist(this.getListAttribute('organization_arns'));
  }

  // organizational_unit_arns - computed: true, optional: false, required: false
  public get organizationalUnitArns() {
    return cdktf.Fn.tolist(this.getListAttribute('organizational_unit_arns'));
  }

  // user_groups - computed: true, optional: false, required: false
  public get userGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('user_groups'));
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ami_tags - computed: true, optional: false, required: false
  private _amiTags = new cdktf.StringMap(this, "ami_tags");
  public get amiTags() {
    return this._amiTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // launch_permission - computed: true, optional: false, required: false
  private _launchPermission = new DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList(this, "launch_permission", true);
  public get launchPermission() {
    return this._launchPermission;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_account_ids - computed: true, optional: false, required: false
  public get targetAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('target_account_ids'));
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_tags - computed: true, optional: false, required: false
  public get containerTags() {
    return cdktf.Fn.tolist(this.getListAttribute('container_tags'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // target_repository - computed: true, optional: false, required: false
  private _targetRepository = new DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList(this, "target_repository", true);
  public get targetRepository() {
    return this._targetRepository;
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_name - computed: true, optional: false, required: false
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }

  // launch_template_version - computed: true, optional: false, required: false
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_resource_count - computed: true, optional: false, required: false
  public get targetResourceCount() {
    return this.getNumberAttribute('target_resource_count');
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration | undefined) {
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // launch_template - computed: true, optional: false, required: false
  private _launchTemplate = new DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList(this, "launch_template", true);
  public get launchTemplate() {
    return this._launchTemplate;
  }

  // max_parallel_launches - computed: true, optional: false, required: false
  public get maxParallelLaunches() {
    return this.getNumberAttribute('max_parallel_launches');
  }

  // snapshot_configuration - computed: true, optional: false, required: false
  private _snapshotConfiguration = new DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList(this, "snapshot_configuration", true);
  public get snapshotConfiguration() {
    return this._snapshotConfiguration;
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration | undefined) {
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfiguration {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_image_format - computed: true, optional: false, required: false
  public get diskImageFormat() {
    return this.getStringAttribute('disk_image_format');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_prefix - computed: true, optional: false, required: false
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfigurationOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfiguration {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfigurationToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfigurationToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ami_account_id - computed: true, optional: false, required: false
  public get amiAccountId() {
    return this.getStringAttribute('ami_account_id');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfigurationOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsImagebuilderDistributionConfigurationDistribution {
}

export function dataAwsImagebuilderDistributionConfigurationDistributionToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsImagebuilderDistributionConfigurationDistributionToHclTerraform(struct?: DataAwsImagebuilderDistributionConfigurationDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsImagebuilderDistributionConfigurationDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsImagebuilderDistributionConfigurationDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsImagebuilderDistributionConfigurationDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ami_distribution_configuration - computed: true, optional: false, required: false
  private _amiDistributionConfiguration = new DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList(this, "ami_distribution_configuration", true);
  public get amiDistributionConfiguration() {
    return this._amiDistributionConfiguration;
  }

  // container_distribution_configuration - computed: true, optional: false, required: false
  private _containerDistributionConfiguration = new DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList(this, "container_distribution_configuration", true);
  public get containerDistributionConfiguration() {
    return this._containerDistributionConfiguration;
  }

  // fast_launch_configuration - computed: true, optional: false, required: false
  private _fastLaunchConfiguration = new DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList(this, "fast_launch_configuration", true);
  public get fastLaunchConfiguration() {
    return this._fastLaunchConfiguration;
  }

  // launch_template_configuration - computed: true, optional: false, required: false
  private _launchTemplateConfiguration = new DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList(this, "launch_template_configuration", true);
  public get launchTemplateConfiguration() {
    return this._launchTemplateConfiguration;
  }

  // license_configuration_arns - computed: true, optional: false, required: false
  public get licenseConfigurationArns() {
    return cdktf.Fn.tolist(this.getListAttribute('license_configuration_arns'));
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // s3_export_configuration - computed: true, optional: false, required: false
  private _s3ExportConfiguration = new DataAwsImagebuilderDistributionConfigurationDistributionS3ExportConfigurationList(this, "s3_export_configuration", true);
  public get s3ExportConfiguration() {
    return this._s3ExportConfiguration;
  }

  // ssm_parameter_configuration - computed: true, optional: false, required: false
  private _ssmParameterConfiguration = new DataAwsImagebuilderDistributionConfigurationDistributionSsmParameterConfigurationList(this, "ssm_parameter_configuration", true);
  public get ssmParameterConfiguration() {
    return this._ssmParameterConfiguration;
  }
}

export class DataAwsImagebuilderDistributionConfigurationDistributionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsImagebuilderDistributionConfigurationDistributionOutputReference {
    return new DataAwsImagebuilderDistributionConfigurationDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}
*/
export class DataAwsImagebuilderDistributionConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_imagebuilder_distribution_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsImagebuilderDistributionConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsImagebuilderDistributionConfiguration to import
  * @param importFromId The id of the existing DataAwsImagebuilderDistributionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsImagebuilderDistributionConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_imagebuilder_distribution_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsImagebuilderDistributionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsImagebuilderDistributionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_distribution_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arn = config.arn;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribution - computed: true, optional: false, required: false
  private _distribution = new DataAwsImagebuilderDistributionConfigurationDistributionList(this, "distribution", true);
  public get distribution() {
    return this._distribution;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
