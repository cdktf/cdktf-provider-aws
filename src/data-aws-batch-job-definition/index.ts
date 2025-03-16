/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition#arn DataAwsBatchJobDefinition#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition#name DataAwsBatchJobDefinition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition#revision DataAwsBatchJobDefinition#revision}
  */
  readonly revision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition#status DataAwsBatchJobDefinition#status}
  */
  readonly status?: string;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktf.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_file_system - computed: true, optional: false, required: false
  public get readOnlyRootFileSystem() {
    return this.getBooleanAttribute('read_only_root_file_system');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktf.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktf.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_file_system - computed: true, optional: false, required: false
  public get readOnlyRootFileSystem() {
    return this.getBooleanAttribute('read_only_root_file_system');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextList(this, "security_context", false);
  public get securityContext() {
    return this._securityContext;
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // empty_dir - computed: true, optional: false, required: false
  private _emptyDir = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirList(this, "empty_dir", false);
  public get emptyDir() {
    return this._emptyDir;
  }

  // host_path - computed: true, optional: false, required: false
  private _hostPath = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathList(this, "host_path", false);
  public get hostPath() {
    return this._hostPath;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodProperties {
}

export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  private _imagePullSecrets = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }

  // init_containers - computed: true, optional: false, required: false
  private _initContainers = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionEksProperties {
}

export function dataAwsBatchJobDefinitionEksPropertiesToTerraform(struct?: DataAwsBatchJobDefinitionEksProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionEksPropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionEksPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionEksProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionEksProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pod_properties - computed: true, optional: false, required: false
  private _podProperties = new DataAwsBatchJobDefinitionEksPropertiesPodPropertiesList(this, "pod_properties", false);
  public get podProperties() {
    return this._podProperties;
  }
}

export class DataAwsBatchJobDefinitionEksPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionEksPropertiesOutputReference {
    return new DataAwsBatchJobDefinitionEksPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_in_gib - computed: true, optional: false, required: false
  public get sizeInGib() {
    return this.getNumberAttribute('size_in_gib');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // init_process_enabled - computed: true, optional: false, required: false
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }

  // max_swap - computed: true, optional: false, required: false
  public get maxSwap() {
    return this.getNumberAttribute('max_swap');
  }

  // shared_memory_size - computed: true, optional: false, required: false
  public get sharedMemorySize() {
    return this.getNumberAttribute('shared_memory_size');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }

  // tmpfs - computed: true, optional: false, required: false
  private _tmpfs = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // secret_options - computed: true, optional: false, required: false
  private _secretOptions = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_architecture - computed: true, optional: false, required: false
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }

  // operating_system_family - computed: true, optional: false, required: false
  public get operatingSystemFamily() {
    return this.getStringAttribute('operating_system_family');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // iam - computed: true, optional: false, required: false
  public get iam() {
    return this.getStringAttribute('iam');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigList(this, "authorization_config", false);
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption - computed: true, optional: false, required: false
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_volume_configuration - computed: true, optional: false, required: false
  private _efsVolumeConfiguration = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationList(this, "efs_volume_configuration", false);
  public get efsVolumeConfiguration() {
    return this._efsVolumeConfiguration;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostList(this, "host", false);
  public get host() {
    return this._host;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  private _ephemeralStorage = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageList(this, "ephemeral_storage", false);
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // fargate_platform_configuration - computed: true, optional: false, required: false
  private _fargatePlatformConfiguration = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationList(this, "fargate_platform_configuration", false);
  public get fargatePlatformConfiguration() {
    return this._fargatePlatformConfiguration;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // job_role_arn - computed: true, optional: false, required: false
  public get jobRoleArn() {
    return this.getStringAttribute('job_role_arn');
  }

  // linux_parameters - computed: true, optional: false, required: false
  private _linuxParameters = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersList(this, "linux_parameters", false);
  public get linuxParameters() {
    return this._linuxParameters;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationList(this, "log_configuration", false);
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // mount_points - computed: true, optional: false, required: false
  private _mountPoints = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // readonly_root_filesystem - computed: true, optional: false, required: false
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }

  // runtime_platform - computed: true, optional: false, required: false
  private _runtimePlatform = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformList(this, "runtime_platform", false);
  public get runtimePlatform() {
    return this._runtimePlatform;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }

  // ulimits - computed: true, optional: false, required: false
  private _ulimits = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsList(this, "ulimits", false);
  public get ulimits() {
    return this._ulimits;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties {
}

export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerList(this, "container", false);
  public get container() {
    return this._container;
  }

  // target_nodes - computed: true, optional: false, required: false
  public get targetNodes() {
    return this.getStringAttribute('target_nodes');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionNodeProperties {
}

export function dataAwsBatchJobDefinitionNodePropertiesToTerraform(struct?: DataAwsBatchJobDefinitionNodeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionNodePropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionNodePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionNodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionNodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // main_node - computed: true, optional: false, required: false
  public get mainNode() {
    return this.getNumberAttribute('main_node');
  }

  // node_range_properties - computed: true, optional: false, required: false
  private _nodeRangeProperties = new DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesList(this, "node_range_properties", false);
  public get nodeRangeProperties() {
    return this._nodeRangeProperties;
  }

  // num_nodes - computed: true, optional: false, required: false
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
}

export class DataAwsBatchJobDefinitionNodePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionNodePropertiesOutputReference {
    return new DataAwsBatchJobDefinitionNodePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit {
}

export function dataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // on_exit_code - computed: true, optional: false, required: false
  public get onExitCode() {
    return this.getStringAttribute('on_exit_code');
  }

  // on_reason - computed: true, optional: false, required: false
  public get onReason() {
    return this.getStringAttribute('on_reason');
  }

  // on_status_reason - computed: true, optional: false, required: false
  public get onStatusReason() {
    return this.getStringAttribute('on_status_reason');
  }
}

export class DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference {
    return new DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionRetryStrategy {
}

export function dataAwsBatchJobDefinitionRetryStrategyToTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionRetryStrategyToHclTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }

  // evaluate_on_exit - computed: true, optional: false, required: false
  private _evaluateOnExit = new DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitList(this, "evaluate_on_exit", false);
  public get evaluateOnExit() {
    return this._evaluateOnExit;
  }
}

export class DataAwsBatchJobDefinitionRetryStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionRetryStrategyOutputReference {
    return new DataAwsBatchJobDefinitionRetryStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsBatchJobDefinitionTimeout {
}

export function dataAwsBatchJobDefinitionTimeoutToTerraform(struct?: DataAwsBatchJobDefinitionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsBatchJobDefinitionTimeoutToHclTerraform(struct?: DataAwsBatchJobDefinitionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsBatchJobDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsBatchJobDefinitionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBatchJobDefinitionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempt_duration_seconds - computed: true, optional: false, required: false
  public get attemptDurationSeconds() {
    return this.getNumberAttribute('attempt_duration_seconds');
  }
}

export class DataAwsBatchJobDefinitionTimeoutList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsBatchJobDefinitionTimeoutOutputReference {
    return new DataAwsBatchJobDefinitionTimeoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition aws_batch_job_definition}
*/
export class DataAwsBatchJobDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_batch_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsBatchJobDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsBatchJobDefinition to import
  * @param importFromId The id of the existing DataAwsBatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsBatchJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_batch_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/data-sources/batch_job_definition aws_batch_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBatchJobDefinitionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsBatchJobDefinitionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_job_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.91.0',
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
    this._arn = config.arn;
    this._name = config.name;
    this._revision = config.revision;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // arn_prefix - computed: true, optional: false, required: false
  public get arnPrefix() {
    return this.getStringAttribute('arn_prefix');
  }

  // container_orchestration_type - computed: true, optional: false, required: false
  public get containerOrchestrationType() {
    return this.getStringAttribute('container_orchestration_type');
  }

  // eks_properties - computed: true, optional: false, required: false
  private _eksProperties = new DataAwsBatchJobDefinitionEksPropertiesList(this, "eks_properties", false);
  public get eksProperties() {
    return this._eksProperties;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_properties - computed: true, optional: false, required: false
  private _nodeProperties = new DataAwsBatchJobDefinitionNodePropertiesList(this, "node_properties", false);
  public get nodeProperties() {
    return this._nodeProperties;
  }

  // retry_strategy - computed: true, optional: false, required: false
  private _retryStrategy = new DataAwsBatchJobDefinitionRetryStrategyList(this, "retry_strategy", false);
  public get retryStrategy() {
    return this._retryStrategy;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // scheduling_priority - computed: true, optional: false, required: false
  public get schedulingPriority() {
    return this.getNumberAttribute('scheduling_priority');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // timeout - computed: true, optional: false, required: false
  private _timeout = new DataAwsBatchJobDefinitionTimeoutList(this, "timeout", false);
  public get timeout() {
    return this._timeout;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      name: cdktf.stringToTerraform(this._name),
      revision: cdktf.numberToTerraform(this._revision),
      status: cdktf.stringToTerraform(this._status),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.numberToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
