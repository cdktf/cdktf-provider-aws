/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#region SagemakerAppImageConfig#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * code_editor_app_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config SagemakerAppImageConfig#code_editor_app_image_config}
  */
  readonly codeEditorAppImageConfig?: SagemakerAppImageConfigCodeEditorAppImageConfig;
  /**
  * jupyter_lab_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#jupyter_lab_image_config SagemakerAppImageConfig#jupyter_lab_image_config}
  */
  readonly jupyterLabImageConfig?: SagemakerAppImageConfigJupyterLabImageConfig;
  /**
  * kernel_gateway_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
  */
  readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}
  */
  readonly containerEnvironmentVariables?: { [key: string]: string };
}

export function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerEntrypoint),
    container_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.containerEnvironmentVariables),
  }
}


export function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.containerEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._containerEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._containerEnvironmentVariables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._containerEnvironmentVariables = value.containerEnvironmentVariables;
    }
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // container_environment_variables - computed: false, optional: true, required: false
  private _containerEnvironmentVariables?: { [key: string]: string }; 
  public get containerEnvironmentVariables() {
    return this.getStringMapAttribute('container_environment_variables');
  }
  public set containerEnvironmentVariables(value: { [key: string]: string }) {
    this._containerEnvironmentVariables = value;
  }
  public resetContainerEnvironmentVariables() {
    this._containerEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEnvironmentVariablesInput() {
    return this._containerEnvironmentVariables;
  }
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}

export function sagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gid: cdktf.numberToTerraform(struct!.defaultGid),
    default_uid: cdktf.numberToTerraform(struct!.defaultUid),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function sagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gid: {
      value: cdktf.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktf.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: false, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: false, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfig {
  /**
  * container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}
  */
  readonly containerConfig?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig;
}

export function sagemakerAppImageConfigCodeEditorAppImageConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_config: sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToTerraform(struct!.containerConfig),
    file_system_config: sagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
  }
}


export function sagemakerAppImageConfigCodeEditorAppImageConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_config: {
      value: sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigList",
    },
    file_system_config: {
      value: sagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConfig.internalValue = undefined;
      this._fileSystemConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConfig.internalValue = value.containerConfig;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
    }
  }

  // container_config - computed: false, optional: true, required: false
  private _containerConfig = new SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }
}
export interface SagemakerAppImageConfigJupyterLabImageConfigContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}
  */
  readonly containerEnvironmentVariables?: { [key: string]: string };
}

export function sagemakerAppImageConfigJupyterLabImageConfigContainerConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerEntrypoint),
    container_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.containerEnvironmentVariables),
  }
}


export function sagemakerAppImageConfigJupyterLabImageConfigContainerConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.containerEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigJupyterLabImageConfigContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._containerEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEnvironmentVariables = this._containerEnvironmentVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._containerEnvironmentVariables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._containerEnvironmentVariables = value.containerEnvironmentVariables;
    }
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // container_environment_variables - computed: false, optional: true, required: false
  private _containerEnvironmentVariables?: { [key: string]: string }; 
  public get containerEnvironmentVariables() {
    return this.getStringMapAttribute('container_environment_variables');
  }
  public set containerEnvironmentVariables(value: { [key: string]: string }) {
    this._containerEnvironmentVariables = value;
  }
  public resetContainerEnvironmentVariables() {
    this._containerEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEnvironmentVariablesInput() {
    return this._containerEnvironmentVariables;
  }
}
export interface SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}

export function sagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gid: cdktf.numberToTerraform(struct!.defaultGid),
    default_uid: cdktf.numberToTerraform(struct!.defaultUid),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function sagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gid: {
      value: cdktf.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktf.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: false, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: false, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface SagemakerAppImageConfigJupyterLabImageConfig {
  /**
  * container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}
  */
  readonly containerConfig?: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig;
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig;
}

export function sagemakerAppImageConfigJupyterLabImageConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_config: sagemakerAppImageConfigJupyterLabImageConfigContainerConfigToTerraform(struct!.containerConfig),
    file_system_config: sagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
  }
}


export function sagemakerAppImageConfigJupyterLabImageConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_config: {
      value: sagemakerAppImageConfigJupyterLabImageConfigContainerConfigToHclTerraform(struct!.containerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigJupyterLabImageConfigContainerConfigList",
    },
    file_system_config: {
      value: sagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigJupyterLabImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigJupyterLabImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfig = this._containerConfig?.internalValue;
    }
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigJupyterLabImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerConfig.internalValue = undefined;
      this._fileSystemConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerConfig.internalValue = value.containerConfig;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
    }
  }

  // container_config - computed: false, optional: true, required: false
  private _containerConfig = new SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference(this, "container_config");
  public get containerConfig() {
    return this._containerConfig;
  }
  public putContainerConfig(value: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig) {
    this._containerConfig.internalValue = value;
  }
  public resetContainerConfig() {
    this._containerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigInput() {
    return this._containerConfig.internalValue;
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gid: cdktf.numberToTerraform(struct!.defaultGid),
    default_uid: cdktf.numberToTerraform(struct!.defaultUid),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gid: {
      value: cdktf.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktf.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: false, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: false, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}
  */
  readonly name: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._name = value.name;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
}

export class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList extends cdktf.ComplexList {
  public internalValue? : SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[] | cdktf.IResolvable

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
  public get(index: number): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference {
    return new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfig {
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
  /**
  * kernel_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#kernel_spec SagemakerAppImageConfig#kernel_spec}
  */
  readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[] | cdktf.IResolvable;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_config: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
    kernel_spec: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform, true)(struct!.kernelSpec),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_config: {
      value: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigList",
    },
    kernel_spec: {
      value: cdktf.listMapperHcl(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToHclTerraform, true)(struct!.kernelSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    if (this._kernelSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelSpec = this._kernelSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemConfig.internalValue = undefined;
      this._kernelSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
      this._kernelSpec.internalValue = value.kernelSpec;
    }
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }

  // kernel_spec - computed: false, optional: false, required: true
  private _kernelSpec = new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList(this, "kernel_spec", false);
  public get kernelSpec() {
    return this._kernelSpec;
  }
  public putKernelSpec(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[] | cdktf.IResolvable) {
    this._kernelSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelSpecInput() {
    return this._kernelSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config}
*/
export class SagemakerAppImageConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_app_image_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerAppImageConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerAppImageConfig to import
  * @param importFromId The id of the existing SagemakerAppImageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerAppImageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_app_image_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_app_image_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
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
    this._appImageConfigName = config.appImageConfigName;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._codeEditorAppImageConfig.internalValue = config.codeEditorAppImageConfig;
    this._jupyterLabImageConfig.internalValue = config.jupyterLabImageConfig;
    this._kernelGatewayImageConfig.internalValue = config.kernelGatewayImageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // code_editor_app_image_config - computed: false, optional: true, required: false
  private _codeEditorAppImageConfig = new SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(this, "code_editor_app_image_config");
  public get codeEditorAppImageConfig() {
    return this._codeEditorAppImageConfig;
  }
  public putCodeEditorAppImageConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfig) {
    this._codeEditorAppImageConfig.internalValue = value;
  }
  public resetCodeEditorAppImageConfig() {
    this._codeEditorAppImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppImageConfigInput() {
    return this._codeEditorAppImageConfig.internalValue;
  }

  // jupyter_lab_image_config - computed: false, optional: true, required: false
  private _jupyterLabImageConfig = new SagemakerAppImageConfigJupyterLabImageConfigOutputReference(this, "jupyter_lab_image_config");
  public get jupyterLabImageConfig() {
    return this._jupyterLabImageConfig;
  }
  public putJupyterLabImageConfig(value: SagemakerAppImageConfigJupyterLabImageConfig) {
    this._jupyterLabImageConfig.internalValue = value;
  }
  public resetJupyterLabImageConfig() {
    this._jupyterLabImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabImageConfigInput() {
    return this._jupyterLabImageConfig.internalValue;
  }

  // kernel_gateway_image_config - computed: false, optional: true, required: false
  private _kernelGatewayImageConfig = new SagemakerAppImageConfigKernelGatewayImageConfigOutputReference(this, "kernel_gateway_image_config");
  public get kernelGatewayImageConfig() {
    return this._kernelGatewayImageConfig;
  }
  public putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig) {
    this._kernelGatewayImageConfig.internalValue = value;
  }
  public resetKernelGatewayImageConfig() {
    this._kernelGatewayImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayImageConfigInput() {
    return this._kernelGatewayImageConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_image_config_name: cdktf.stringToTerraform(this._appImageConfigName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      code_editor_app_image_config: sagemakerAppImageConfigCodeEditorAppImageConfigToTerraform(this._codeEditorAppImageConfig.internalValue),
      jupyter_lab_image_config: sagemakerAppImageConfigJupyterLabImageConfigToTerraform(this._jupyterLabImageConfig.internalValue),
      kernel_gateway_image_config: sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(this._kernelGatewayImageConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_image_config_name: {
        value: cdktf.stringToHclTerraform(this._appImageConfigName),
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
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      code_editor_app_image_config: {
        value: sagemakerAppImageConfigCodeEditorAppImageConfigToHclTerraform(this._codeEditorAppImageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAppImageConfigCodeEditorAppImageConfigList",
      },
      jupyter_lab_image_config: {
        value: sagemakerAppImageConfigJupyterLabImageConfigToHclTerraform(this._jupyterLabImageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAppImageConfigJupyterLabImageConfigList",
      },
      kernel_gateway_image_config: {
        value: sagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(this._kernelGatewayImageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
