/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}
  */
  readonly appNetworkAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}
  */
  readonly appSecurityGroupManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}
  */
  readonly authMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#domain_name SagemakerDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#id SagemakerDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#tag_propagation SagemakerDomain#tag_propagation}
  */
  readonly tagPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#tags SagemakerDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#tags_all SagemakerDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}
  */
  readonly vpcId: string;
  /**
  * default_space_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_space_settings SagemakerDomain#default_space_settings}
  */
  readonly defaultSpaceSettings?: SagemakerDomainDefaultSpaceSettings;
  /**
  * default_user_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}
  */
  readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
  /**
  * domain_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#domain_settings SagemakerDomain#domain_settings}
  */
  readonly domainSettings?: SagemakerDomainDomainSettings;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#retention_policy SagemakerDomain#retention_policy}
  */
  readonly retentionPolicy?: SagemakerDomainRetentionPolicy;
}
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
  */
  readonly fileSystemPath: string;
}

export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktf.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: false, optional: false, required: true
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig {
  /**
  * efs_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#efs_file_system_config SagemakerDomain#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig;
}

export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_system_config: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct!.efsFileSystemConfig),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_system_config: {
      value: sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
    }
  }

  // efs_file_system_config - computed: false, optional: true, required: false
  private _efsFileSystemConfig = new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }
}

export class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#gid SagemakerDomain#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#uid SagemakerDomain#uid}
  */
  readonly uid: number;
}

export function sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gid = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gid = value.gid;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktf.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: false, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
  */
  readonly idleSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_settings: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: false, optional: true, required: false
  private _idleSettings = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#assumable_role_arns SagemakerDomain#assumable_role_arns}
  */
  readonly assumableRoleArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#execution_role_arns SagemakerDomain#execution_role_arns}
  */
  readonly executionRoleArns?: string[];
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assumable_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assumableRoleArns),
    execution_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.executionRoleArns),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assumable_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assumableRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    execution_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.executionRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumableRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumableRoleArns = this._assumableRoleArns;
    }
    if (this._executionRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArns = this._executionRoleArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assumableRoleArns = undefined;
      this._executionRoleArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assumableRoleArns = value.assumableRoleArns;
      this._executionRoleArns = value.executionRoleArns;
    }
  }

  // assumable_role_arns - computed: false, optional: true, required: false
  private _assumableRoleArns?: string[]; 
  public get assumableRoleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('assumable_role_arns'));
  }
  public set assumableRoleArns(value: string[]) {
    this._assumableRoleArns = value;
  }
  public resetAssumableRoleArns() {
    this._assumableRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumableRoleArnsInput() {
    return this._assumableRoleArns;
  }

  // execution_role_arns - computed: false, optional: true, required: false
  private _executionRoleArns?: string[]; 
  public get executionRoleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('execution_role_arns'));
  }
  public set executionRoleArns(value: string[]) {
    this._executionRoleArns = value;
  }
  public resetExecutionRoleArns() {
    this._executionRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnsInput() {
    return this._executionRoleArns;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
  */
  readonly codeRepository?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
  /**
  * emr_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#emr_settings SagemakerDomain#emr_settings}
  */
  readonly emrSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_lifecycle_config_arn: cdktf.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    code_repository: cdktf.listMapper(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    custom_image: cdktf.listMapper(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    emr_settings: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsToTerraform(struct!.emrSettings),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    built_in_lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_lifecycle_management: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementList",
    },
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecList",
    },
    emr_settings: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsToHclTerraform(struct!.emrSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._emrSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrSettings = this._emrSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtInLifecycleConfigArn = undefined;
      this._lifecycleConfigArns = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._codeRepository.internalValue = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._emrSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._codeRepository.internalValue = value.codeRepository;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._emrSettings.internalValue = value.emrSettings;
    }
  }

  // built_in_lifecycle_config_arn - computed: false, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // app_lifecycle_management - computed: false, optional: true, required: false
  private _appLifecycleManagement = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // emr_settings - computed: false, optional: true, required: false
  private _emrSettings = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference(this, "emr_settings");
  public get emrSettings() {
    return this._emrSettings;
  }
  public putEmrSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings) {
    this._emrSettings.internalValue = value;
  }
  public resetEmrSettings() {
    this._emrSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrSettingsInput() {
    return this._emrSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
  */
  readonly codeRepository?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktf.listMapper(sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    default_resource_spec: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._codeRepository.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._codeRepository.internalValue = value.codeRepository;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference {
    return new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktf.listMapper(sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb SagemakerDomain#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb SagemakerDomain#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb: number;
}

export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings {
  /**
  * default_ebs_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_ebs_storage_settings SagemakerDomain#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_storage_settings: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: false, optional: true, required: false
  private _defaultEbsStorageSettings = new SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultSpaceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#execution_role SagemakerDomain#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#security_groups SagemakerDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * custom_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_file_system_config SagemakerDomain#custom_file_system_config}
  */
  readonly customFileSystemConfig?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
  /**
  * custom_posix_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_posix_user_config SagemakerDomain#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig;
  /**
  * jupyter_lab_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings SagemakerDomain#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings;
  /**
  * jupyter_server_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings;
  /**
  * kernel_gateway_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings;
  /**
  * space_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#space_storage_settings SagemakerDomain#space_storage_settings}
  */
  readonly spaceStorageSettings?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings;
}

export function sagemakerDomainDefaultSpaceSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsOutputReference | SagemakerDomainDefaultSpaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    custom_file_system_config: cdktf.listMapper(sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigToTerraform, true)(struct!.customFileSystemConfig),
    custom_posix_user_config: sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    jupyter_lab_app_settings: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    space_storage_settings: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
  }
}


export function sagemakerDomainDefaultSpaceSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsOutputReference | SagemakerDomainDefaultSpaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_file_system_config: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigToHclTerraform, true)(struct!.customFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigList",
    },
    custom_posix_user_config: {
      value: sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigList",
    },
    jupyter_lab_app_settings: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsList",
    },
    jupyter_server_app_settings: {
      value: sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsList",
    },
    kernel_gateway_app_settings: {
      value: sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsList",
    },
    space_storage_settings: {
      value: sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultSpaceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultSpaceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._customFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfig = this._customFileSystemConfig?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultSpaceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRole = undefined;
      this._securityGroups = undefined;
      this._customFileSystemConfig.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRole = value.executionRole;
      this._securityGroups = value.securityGroups;
      this._customFileSystemConfig.internalValue = value.customFileSystemConfig;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
    }
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // custom_file_system_config - computed: false, optional: true, required: false
  private _customFileSystemConfig = new SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigList(this, "custom_file_system_config", false);
  public get customFileSystemConfig() {
    return this._customFileSystemConfig;
  }
  public putCustomFileSystemConfig(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig[] | cdktf.IResolvable) {
    this._customFileSystemConfig.internalValue = value;
  }
  public resetCustomFileSystemConfig() {
    this._customFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigInput() {
    return this._customFileSystemConfig.internalValue;
  }

  // custom_posix_user_config - computed: false, optional: true, required: false
  private _customPosixUserConfig = new SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
  */
  readonly status?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
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
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#execution_role_arn SagemakerDomain#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
  */
  readonly status?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role_arn: cdktf.stringToTerraform(struct!.executionRoleArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRoleArn = value.executionRoleArn;
      this._status = value.status;
    }
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#amazon_bedrock_role_arn SagemakerDomain#amazon_bedrock_role_arn}
  */
  readonly amazonBedrockRoleArn?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_bedrock_role_arn: cdktf.stringToTerraform(struct!.amazonBedrockRoleArn),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_bedrock_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.amazonBedrockRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonBedrockRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonBedrockRoleArn = this._amazonBedrockRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonBedrockRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonBedrockRoleArn = value.amazonBedrockRoleArn;
    }
  }

  // amazon_bedrock_role_arn - computed: false, optional: true, required: false
  private _amazonBedrockRoleArn?: string; 
  public get amazonBedrockRoleArn() {
    return this.getStringAttribute('amazon_bedrock_role_arn');
  }
  public set amazonBedrockRoleArn(value: string) {
    this._amazonBedrockRoleArn = value;
  }
  public resetAmazonBedrockRoleArn() {
    this._amazonBedrockRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonBedrockRoleArnInput() {
    return this._amazonBedrockRoleArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#data_source_name SagemakerDomain#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#secret_arn SagemakerDomain#secret_arn}
  */
  readonly secretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
  */
  readonly status?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_name: cdktf.stringToTerraform(struct!.dataSourceName),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._secretArn = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._secretArn = value.secretArn;
      this._status = value.status;
    }
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
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
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference {
    return new SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
  */
  readonly status?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
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
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#cross_account_model_register_role_arn SagemakerDomain#cross_account_model_register_role_arn}
  */
  readonly crossAccountModelRegisterRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
  */
  readonly status?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_account_model_register_role_arn: cdktf.stringToTerraform(struct!.crossAccountModelRegisterRoleArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_account_model_register_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountModelRegisterRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountModelRegisterRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountModelRegisterRoleArn = this._crossAccountModelRegisterRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossAccountModelRegisterRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossAccountModelRegisterRoleArn = value.crossAccountModelRegisterRoleArn;
      this._status = value.status;
    }
  }

  // cross_account_model_register_role_arn - computed: false, optional: true, required: false
  private _crossAccountModelRegisterRoleArn?: string; 
  public get crossAccountModelRegisterRoleArn() {
    return this.getStringAttribute('cross_account_model_register_role_arn');
  }
  public set crossAccountModelRegisterRoleArn(value: string) {
    this._crossAccountModelRegisterRoleArn = value;
  }
  public resetCrossAccountModelRegisterRoleArn() {
    this._crossAccountModelRegisterRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountModelRegisterRoleArnInput() {
    return this._crossAccountModelRegisterRoleArn;
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
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#amazon_forecast_role_arn SagemakerDomain#amazon_forecast_role_arn}
  */
  readonly amazonForecastRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
  */
  readonly status?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_forecast_role_arn: cdktf.stringToTerraform(struct!.amazonForecastRoleArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_forecast_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.amazonForecastRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonForecastRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonForecastRoleArn = this._amazonForecastRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonForecastRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonForecastRoleArn = value.amazonForecastRoleArn;
      this._status = value.status;
    }
  }

  // amazon_forecast_role_arn - computed: false, optional: true, required: false
  private _amazonForecastRoleArn?: string; 
  public get amazonForecastRoleArn() {
    return this.getStringAttribute('amazon_forecast_role_arn');
  }
  public set amazonForecastRoleArn(value: string) {
    this._amazonForecastRoleArn = value;
  }
  public resetAmazonForecastRoleArn() {
    this._amazonForecastRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonForecastRoleArnInput() {
    return this._amazonForecastRoleArn;
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
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#s3_artifact_path SagemakerDomain#s3_artifact_path}
  */
  readonly s3ArtifactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_artifact_path: cdktf.stringToTerraform(struct!.s3ArtifactPath),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_artifact_path: {
      value: cdktf.stringToHclTerraform(struct!.s3ArtifactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ArtifactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ArtifactPath = this._s3ArtifactPath;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3ArtifactPath = undefined;
      this._s3KmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3ArtifactPath = value.s3ArtifactPath;
      this._s3KmsKeyId = value.s3KmsKeyId;
    }
  }

  // s3_artifact_path - computed: false, optional: true, required: false
  private _s3ArtifactPath?: string; 
  public get s3ArtifactPath() {
    return this.getStringAttribute('s3_artifact_path');
  }
  public set s3ArtifactPath(value: string) {
    this._s3ArtifactPath = value;
  }
  public resetS3ArtifactPath() {
    this._s3ArtifactPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ArtifactPathInput() {
    return this._s3ArtifactPath;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettings {
  /**
  * direct_deploy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#direct_deploy_settings SagemakerDomain#direct_deploy_settings}
  */
  readonly directDeploySettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings;
  /**
  * emr_serverless_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#emr_serverless_settings SagemakerDomain#emr_serverless_settings}
  */
  readonly emrServerlessSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings;
  /**
  * generative_ai_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#generative_ai_settings SagemakerDomain#generative_ai_settings}
  */
  readonly generativeAiSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings;
  /**
  * identity_provider_oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#identity_provider_oauth_settings SagemakerDomain#identity_provider_oauth_settings}
  */
  readonly identityProviderOauthSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable;
  /**
  * kendra_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#kendra_settings SagemakerDomain#kendra_settings}
  */
  readonly kendraSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings;
  /**
  * model_register_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#model_register_settings SagemakerDomain#model_register_settings}
  */
  readonly modelRegisterSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings;
  /**
  * time_series_forecasting_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#time_series_forecasting_settings SagemakerDomain#time_series_forecasting_settings}
  */
  readonly timeSeriesForecastingSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;
  /**
  * workspace_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#workspace_settings SagemakerDomain#workspace_settings}
  */
  readonly workspaceSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings;
}

export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_deploy_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsToTerraform(struct!.directDeploySettings),
    emr_serverless_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsToTerraform(struct!.emrServerlessSettings),
    generative_ai_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsToTerraform(struct!.generativeAiSettings),
    identity_provider_oauth_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToTerraform, true)(struct!.identityProviderOauthSettings),
    kendra_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsToTerraform(struct!.kendraSettings),
    model_register_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsToTerraform(struct!.modelRegisterSettings),
    time_series_forecasting_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToTerraform(struct!.timeSeriesForecastingSettings),
    workspace_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsToTerraform(struct!.workspaceSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsCanvasAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_deploy_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsToHclTerraform(struct!.directDeploySettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsList",
    },
    emr_serverless_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsToHclTerraform(struct!.emrServerlessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsList",
    },
    generative_ai_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsToHclTerraform(struct!.generativeAiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsList",
    },
    identity_provider_oauth_settings: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToHclTerraform, true)(struct!.identityProviderOauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList",
    },
    kendra_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsToHclTerraform(struct!.kendraSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsList",
    },
    model_register_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsToHclTerraform(struct!.modelRegisterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsList",
    },
    time_series_forecasting_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToHclTerraform(struct!.timeSeriesForecastingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsList",
    },
    workspace_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsToHclTerraform(struct!.workspaceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directDeploySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directDeploySettings = this._directDeploySettings?.internalValue;
    }
    if (this._emrServerlessSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrServerlessSettings = this._emrServerlessSettings?.internalValue;
    }
    if (this._generativeAiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeAiSettings = this._generativeAiSettings?.internalValue;
    }
    if (this._identityProviderOauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderOauthSettings = this._identityProviderOauthSettings?.internalValue;
    }
    if (this._kendraSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraSettings = this._kendraSettings?.internalValue;
    }
    if (this._modelRegisterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelRegisterSettings = this._modelRegisterSettings?.internalValue;
    }
    if (this._timeSeriesForecastingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeriesForecastingSettings = this._timeSeriesForecastingSettings?.internalValue;
    }
    if (this._workspaceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceSettings = this._workspaceSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directDeploySettings.internalValue = undefined;
      this._emrServerlessSettings.internalValue = undefined;
      this._generativeAiSettings.internalValue = undefined;
      this._identityProviderOauthSettings.internalValue = undefined;
      this._kendraSettings.internalValue = undefined;
      this._modelRegisterSettings.internalValue = undefined;
      this._timeSeriesForecastingSettings.internalValue = undefined;
      this._workspaceSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directDeploySettings.internalValue = value.directDeploySettings;
      this._emrServerlessSettings.internalValue = value.emrServerlessSettings;
      this._generativeAiSettings.internalValue = value.generativeAiSettings;
      this._identityProviderOauthSettings.internalValue = value.identityProviderOauthSettings;
      this._kendraSettings.internalValue = value.kendraSettings;
      this._modelRegisterSettings.internalValue = value.modelRegisterSettings;
      this._timeSeriesForecastingSettings.internalValue = value.timeSeriesForecastingSettings;
      this._workspaceSettings.internalValue = value.workspaceSettings;
    }
  }

  // direct_deploy_settings - computed: false, optional: true, required: false
  private _directDeploySettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference(this, "direct_deploy_settings");
  public get directDeploySettings() {
    return this._directDeploySettings;
  }
  public putDirectDeploySettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings) {
    this._directDeploySettings.internalValue = value;
  }
  public resetDirectDeploySettings() {
    this._directDeploySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directDeploySettingsInput() {
    return this._directDeploySettings.internalValue;
  }

  // emr_serverless_settings - computed: false, optional: true, required: false
  private _emrServerlessSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference(this, "emr_serverless_settings");
  public get emrServerlessSettings() {
    return this._emrServerlessSettings;
  }
  public putEmrServerlessSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings) {
    this._emrServerlessSettings.internalValue = value;
  }
  public resetEmrServerlessSettings() {
    this._emrServerlessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrServerlessSettingsInput() {
    return this._emrServerlessSettings.internalValue;
  }

  // generative_ai_settings - computed: false, optional: true, required: false
  private _generativeAiSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference(this, "generative_ai_settings");
  public get generativeAiSettings() {
    return this._generativeAiSettings;
  }
  public putGenerativeAiSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings) {
    this._generativeAiSettings.internalValue = value;
  }
  public resetGenerativeAiSettings() {
    this._generativeAiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeAiSettingsInput() {
    return this._generativeAiSettings.internalValue;
  }

  // identity_provider_oauth_settings - computed: false, optional: true, required: false
  private _identityProviderOauthSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList(this, "identity_provider_oauth_settings", false);
  public get identityProviderOauthSettings() {
    return this._identityProviderOauthSettings;
  }
  public putIdentityProviderOauthSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable) {
    this._identityProviderOauthSettings.internalValue = value;
  }
  public resetIdentityProviderOauthSettings() {
    this._identityProviderOauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderOauthSettingsInput() {
    return this._identityProviderOauthSettings.internalValue;
  }

  // kendra_settings - computed: false, optional: true, required: false
  private _kendraSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference(this, "kendra_settings");
  public get kendraSettings() {
    return this._kendraSettings;
  }
  public putKendraSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings) {
    this._kendraSettings.internalValue = value;
  }
  public resetKendraSettings() {
    this._kendraSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraSettingsInput() {
    return this._kendraSettings.internalValue;
  }

  // model_register_settings - computed: false, optional: true, required: false
  private _modelRegisterSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference(this, "model_register_settings");
  public get modelRegisterSettings() {
    return this._modelRegisterSettings;
  }
  public putModelRegisterSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings) {
    this._modelRegisterSettings.internalValue = value;
  }
  public resetModelRegisterSettings() {
    this._modelRegisterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelRegisterSettingsInput() {
    return this._modelRegisterSettings.internalValue;
  }

  // time_series_forecasting_settings - computed: false, optional: true, required: false
  private _timeSeriesForecastingSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference(this, "time_series_forecasting_settings");
  public get timeSeriesForecastingSettings() {
    return this._timeSeriesForecastingSettings;
  }
  public putTimeSeriesForecastingSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings) {
    this._timeSeriesForecastingSettings.internalValue = value;
  }
  public resetTimeSeriesForecastingSettings() {
    this._timeSeriesForecastingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesForecastingSettingsInput() {
    return this._timeSeriesForecastingSettings.internalValue;
  }

  // workspace_settings - computed: false, optional: true, required: false
  private _workspaceSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference(this, "workspace_settings");
  public get workspaceSettings() {
    return this._workspaceSettings;
  }
  public putWorkspaceSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings) {
    this._workspaceSettings.internalValue = value;
  }
  public resetWorkspaceSettings() {
    this._workspaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSettingsInput() {
    return this._workspaceSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktf.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: false, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
  */
  readonly idleSettings?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_settings: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: false, optional: true, required: false
  private _idleSettings = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageOutputReference {
    return new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_lifecycle_config_arn: cdktf.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    built_in_lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_lifecycle_management: {
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtInLifecycleConfigArn = undefined;
      this._lifecycleConfigArns = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // built_in_lifecycle_config_arn - computed: false, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // app_lifecycle_management - computed: false, optional: true, required: false
  private _appLifecycleManagement = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
  */
  readonly fileSystemPath: string;
}

export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktf.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: false, optional: false, required: true
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfig {
  /**
  * efs_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#efs_file_system_config SagemakerDomain#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig;
}

export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_system_config: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct!.efsFileSystemConfig),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_system_config: {
      value: sagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
    }
  }

  // efs_file_system_config - computed: false, optional: true, required: false
  private _efsFileSystemConfig = new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference(this, "efs_file_system_config");
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }
}

export class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigOutputReference {
    return new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#gid SagemakerDomain#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#uid SagemakerDomain#uid}
  */
  readonly uid: number;
}

export function sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomPosixUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomPosixUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gid = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gid = value.gid;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
  */
  readonly lifecycleManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
  */
  readonly maxIdleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
  */
  readonly minIdleTimeoutInMinutes?: number;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    lifecycle_management: cdktf.stringToTerraform(struct!.lifecycleManagement),
    max_idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.maxIdleTimeoutInMinutes),
    min_idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.minIdleTimeoutInMinutes),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lifecycle_management: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.minIdleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._lifecycleManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleManagement = this._lifecycleManagement;
    }
    if (this._maxIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeoutInMinutes = this._maxIdleTimeoutInMinutes;
    }
    if (this._minIdleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleTimeoutInMinutes = this._minIdleTimeoutInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._lifecycleManagement = undefined;
      this._maxIdleTimeoutInMinutes = undefined;
      this._minIdleTimeoutInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._lifecycleManagement = value.lifecycleManagement;
      this._maxIdleTimeoutInMinutes = value.maxIdleTimeoutInMinutes;
      this._minIdleTimeoutInMinutes = value.minIdleTimeoutInMinutes;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // lifecycle_management - computed: false, optional: true, required: false
  private _lifecycleManagement?: string; 
  public get lifecycleManagement() {
    return this.getStringAttribute('lifecycle_management');
  }
  public set lifecycleManagement(value: string) {
    this._lifecycleManagement = value;
  }
  public resetLifecycleManagement() {
    this._lifecycleManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleManagementInput() {
    return this._lifecycleManagement;
  }

  // max_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _maxIdleTimeoutInMinutes?: number; 
  public get maxIdleTimeoutInMinutes() {
    return this.getNumberAttribute('max_idle_timeout_in_minutes');
  }
  public set maxIdleTimeoutInMinutes(value: number) {
    this._maxIdleTimeoutInMinutes = value;
  }
  public resetMaxIdleTimeoutInMinutes() {
    this._maxIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInMinutesInput() {
    return this._maxIdleTimeoutInMinutes;
  }

  // min_idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _minIdleTimeoutInMinutes?: number; 
  public get minIdleTimeoutInMinutes() {
    return this.getNumberAttribute('min_idle_timeout_in_minutes');
  }
  public set minIdleTimeoutInMinutes(value: number) {
    this._minIdleTimeoutInMinutes = value;
  }
  public resetMinIdleTimeoutInMinutes() {
    this._minIdleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleTimeoutInMinutesInput() {
    return this._minIdleTimeoutInMinutes;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
  /**
  * idle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
  */
  readonly idleSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_settings: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct!.idleSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_settings: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct!.idleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSettings = this._idleSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleSettings.internalValue = value.idleSettings;
    }
  }

  // idle_settings - computed: false, optional: true, required: false
  private _idleSettings = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(this, "idle_settings");
  public get idleSettings() {
    return this._idleSettings;
  }
  public putIdleSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings) {
    this._idleSettings.internalValue = value;
  }
  public resetIdleSettings() {
    this._idleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSettingsInput() {
    return this._idleSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference {
    return new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageOutputReference {
    return new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#assumable_role_arns SagemakerDomain#assumable_role_arns}
  */
  readonly assumableRoleArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#execution_role_arns SagemakerDomain#execution_role_arns}
  */
  readonly executionRoleArns?: string[];
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assumable_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assumableRoleArns),
    execution_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.executionRoleArns),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assumable_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assumableRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    execution_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.executionRoleArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumableRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumableRoleArns = this._assumableRoleArns;
    }
    if (this._executionRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArns = this._executionRoleArns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assumableRoleArns = undefined;
      this._executionRoleArns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assumableRoleArns = value.assumableRoleArns;
      this._executionRoleArns = value.executionRoleArns;
    }
  }

  // assumable_role_arns - computed: false, optional: true, required: false
  private _assumableRoleArns?: string[]; 
  public get assumableRoleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('assumable_role_arns'));
  }
  public set assumableRoleArns(value: string[]) {
    this._assumableRoleArns = value;
  }
  public resetAssumableRoleArns() {
    this._assumableRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumableRoleArnsInput() {
    return this._assumableRoleArns;
  }

  // execution_role_arns - computed: false, optional: true, required: false
  private _executionRoleArns?: string[]; 
  public get executionRoleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('execution_role_arns'));
  }
  public set executionRoleArns(value: string[]) {
    this._executionRoleArns = value;
  }
  public resetExecutionRoleArns() {
    this._executionRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnsInput() {
    return this._executionRoleArns;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
  */
  readonly builtInLifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * app_lifecycle_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
  */
  readonly appLifecycleManagement?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
  */
  readonly codeRepository?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
  /**
  * emr_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#emr_settings SagemakerDomain#emr_settings}
  */
  readonly emrSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings;
}

export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    built_in_lifecycle_config_arn: cdktf.stringToTerraform(struct!.builtInLifecycleConfigArn),
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    app_lifecycle_management: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct!.appLifecycleManagement),
    code_repository: cdktf.listMapper(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
    emr_settings: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsToTerraform(struct!.emrSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    built_in_lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.builtInLifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_lifecycle_management: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct!.appLifecycleManagement),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementList",
    },
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecList",
    },
    emr_settings: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsToHclTerraform(struct!.emrSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtInLifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtInLifecycleConfigArn = this._builtInLifecycleConfigArn;
    }
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._appLifecycleManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLifecycleManagement = this._appLifecycleManagement?.internalValue;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    if (this._emrSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emrSettings = this._emrSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtInLifecycleConfigArn = undefined;
      this._lifecycleConfigArns = undefined;
      this._appLifecycleManagement.internalValue = undefined;
      this._codeRepository.internalValue = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
      this._emrSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtInLifecycleConfigArn = value.builtInLifecycleConfigArn;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._appLifecycleManagement.internalValue = value.appLifecycleManagement;
      this._codeRepository.internalValue = value.codeRepository;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
      this._emrSettings.internalValue = value.emrSettings;
    }
  }

  // built_in_lifecycle_config_arn - computed: false, optional: true, required: false
  private _builtInLifecycleConfigArn?: string; 
  public get builtInLifecycleConfigArn() {
    return this.getStringAttribute('built_in_lifecycle_config_arn');
  }
  public set builtInLifecycleConfigArn(value: string) {
    this._builtInLifecycleConfigArn = value;
  }
  public resetBuiltInLifecycleConfigArn() {
    this._builtInLifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInLifecycleConfigArnInput() {
    return this._builtInLifecycleConfigArn;
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // app_lifecycle_management - computed: false, optional: true, required: false
  private _appLifecycleManagement = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(this, "app_lifecycle_management");
  public get appLifecycleManagement() {
    return this._appLifecycleManagement;
  }
  public putAppLifecycleManagement(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement) {
    this._appLifecycleManagement.internalValue = value;
  }
  public resetAppLifecycleManagement() {
    this._appLifecycleManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLifecycleManagementInput() {
    return this._appLifecycleManagement.internalValue;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }

  // emr_settings - computed: false, optional: true, required: false
  private _emrSettings = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference(this, "emr_settings");
  public get emrSettings() {
    return this._emrSettings;
  }
  public putEmrSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings) {
    this._emrSettings.internalValue = value;
  }
  public resetEmrSettings() {
    this._emrSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emrSettingsInput() {
    return this._emrSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference {
    return new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
  */
  readonly codeRepository?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktf.listMapper(sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._codeRepository.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._codeRepository.internalValue = value.codeRepository;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference {
    return new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference {
    return new SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettings {
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultUserSettingsRSessionAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#access_status SagemakerDomain#access_status}
  */
  readonly accessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#user_group SagemakerDomain#user_group}
  */
  readonly userGroup?: string;
}

export function sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_status: cdktf.stringToTerraform(struct!.accessStatus),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
  }
}


export function sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_status: {
      value: cdktf.stringToHclTerraform(struct!.accessStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktf.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStatus = this._accessStatus;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessStatus = undefined;
      this._userGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessStatus = value.accessStatus;
      this._userGroup = value.userGroup;
    }
  }

  // access_status - computed: false, optional: true, required: false
  private _accessStatus?: string; 
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }
  public set accessStatus(value: string) {
    this._accessStatus = value;
  }
  public resetAccessStatus() {
    this._accessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStatusInput() {
    return this._accessStatus;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_output_option: {
      value: cdktf.stringToHclTerraform(struct!.notebookOutputOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsSharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookOutputOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsSharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookOutputOption = value.notebookOutputOption;
      this._s3KmsKeyId = value.s3KmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // notebook_output_option - computed: false, optional: true, required: false
  private _notebookOutputOption?: string; 
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }
  public set notebookOutputOption(value: string) {
    this._notebookOutputOption = value;
  }
  public resetNotebookOutputOption() {
    this._notebookOutputOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookOutputOptionInput() {
    return this._notebookOutputOption;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb SagemakerDomain#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb SagemakerDomain#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb: number;
}

export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface SagemakerDomainDefaultUserSettingsSpaceStorageSettings {
  /**
  * default_ebs_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_ebs_storage_settings SagemakerDomain#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_storage_settings: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsSpaceStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: false, optional: true, required: false
  private _defaultEbsStorageSettings = new SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettingsStudioWebPortalSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#hidden_app_types SagemakerDomain#hidden_app_types}
  */
  readonly hiddenAppTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#hidden_instance_types SagemakerDomain#hidden_instance_types}
  */
  readonly hiddenInstanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#hidden_ml_tools SagemakerDomain#hidden_ml_tools}
  */
  readonly hiddenMlTools?: string[];
}

export function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference | SagemakerDomainDefaultUserSettingsStudioWebPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hidden_app_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hiddenAppTypes),
    hidden_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hiddenInstanceTypes),
    hidden_ml_tools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hiddenMlTools),
  }
}


export function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference | SagemakerDomainDefaultUserSettingsStudioWebPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hidden_app_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hiddenAppTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hidden_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hiddenInstanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hidden_ml_tools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hiddenMlTools),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hiddenAppTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenAppTypes = this._hiddenAppTypes;
    }
    if (this._hiddenInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenInstanceTypes = this._hiddenInstanceTypes;
    }
    if (this._hiddenMlTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenMlTools = this._hiddenMlTools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hiddenAppTypes = undefined;
      this._hiddenInstanceTypes = undefined;
      this._hiddenMlTools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hiddenAppTypes = value.hiddenAppTypes;
      this._hiddenInstanceTypes = value.hiddenInstanceTypes;
      this._hiddenMlTools = value.hiddenMlTools;
    }
  }

  // hidden_app_types - computed: false, optional: true, required: false
  private _hiddenAppTypes?: string[]; 
  public get hiddenAppTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('hidden_app_types'));
  }
  public set hiddenAppTypes(value: string[]) {
    this._hiddenAppTypes = value;
  }
  public resetHiddenAppTypes() {
    this._hiddenAppTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenAppTypesInput() {
    return this._hiddenAppTypes;
  }

  // hidden_instance_types - computed: false, optional: true, required: false
  private _hiddenInstanceTypes?: string[]; 
  public get hiddenInstanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('hidden_instance_types'));
  }
  public set hiddenInstanceTypes(value: string[]) {
    this._hiddenInstanceTypes = value;
  }
  public resetHiddenInstanceTypes() {
    this._hiddenInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInstanceTypesInput() {
    return this._hiddenInstanceTypes;
  }

  // hidden_ml_tools - computed: false, optional: true, required: false
  private _hiddenMlTools?: string[]; 
  public get hiddenMlTools() {
    return cdktf.Fn.tolist(this.getListAttribute('hidden_ml_tools'));
  }
  public set hiddenMlTools(value: string[]) {
    this._hiddenMlTools = value;
  }
  public resetHiddenMlTools() {
    this._hiddenMlTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenMlToolsInput() {
    return this._hiddenMlTools;
  }
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDefaultUserSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#auto_mount_home_efs SagemakerDomain#auto_mount_home_efs}
  */
  readonly autoMountHomeEfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_landing_uri SagemakerDomain#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#execution_role SagemakerDomain#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#security_groups SagemakerDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#studio_web_portal SagemakerDomain#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * canvas_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#canvas_app_settings SagemakerDomain#canvas_app_settings}
  */
  readonly canvasAppSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettings;
  /**
  * code_editor_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#code_editor_app_settings SagemakerDomain#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings;
  /**
  * custom_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_file_system_config SagemakerDomain#custom_file_system_config}
  */
  readonly customFileSystemConfig?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
  /**
  * custom_posix_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#custom_posix_user_config SagemakerDomain#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig;
  /**
  * jupyter_lab_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings SagemakerDomain#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings;
  /**
  * jupyter_server_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
  /**
  * kernel_gateway_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
  /**
  * r_session_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#r_session_app_settings SagemakerDomain#r_session_app_settings}
  */
  readonly rSessionAppSettings?: SagemakerDomainDefaultUserSettingsRSessionAppSettings;
  /**
  * r_studio_server_pro_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#r_studio_server_pro_app_settings SagemakerDomain#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings;
  /**
  * sharing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}
  */
  readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
  /**
  * space_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#space_storage_settings SagemakerDomain#space_storage_settings}
  */
  readonly spaceStorageSettings?: SagemakerDomainDefaultUserSettingsSpaceStorageSettings;
  /**
  * studio_web_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#studio_web_portal_settings SagemakerDomain#studio_web_portal_settings}
  */
  readonly studioWebPortalSettings?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings;
  /**
  * tensor_board_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings;
}

export function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_mount_home_efs: cdktf.stringToTerraform(struct!.autoMountHomeEfs),
    default_landing_uri: cdktf.stringToTerraform(struct!.defaultLandingUri),
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    studio_web_portal: cdktf.stringToTerraform(struct!.studioWebPortal),
    canvas_app_settings: sagemakerDomainDefaultUserSettingsCanvasAppSettingsToTerraform(struct!.canvasAppSettings),
    code_editor_app_settings: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_config: cdktf.listMapper(sagemakerDomainDefaultUserSettingsCustomFileSystemConfigToTerraform, true)(struct!.customFileSystemConfig),
    custom_posix_user_config: sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    jupyter_lab_app_settings: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    r_session_app_settings: sagemakerDomainDefaultUserSettingsRSessionAppSettingsToTerraform(struct!.rSessionAppSettings),
    r_studio_server_pro_app_settings: sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct!.rStudioServerProAppSettings),
    sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    space_storage_settings: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
    studio_web_portal_settings: sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToTerraform(struct!.studioWebPortalSettings),
    tensor_board_app_settings: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
  }
}


export function sagemakerDomainDefaultUserSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_mount_home_efs: {
      value: cdktf.stringToHclTerraform(struct!.autoMountHomeEfs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_landing_uri: {
      value: cdktf.stringToHclTerraform(struct!.defaultLandingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    studio_web_portal: {
      value: cdktf.stringToHclTerraform(struct!.studioWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canvas_app_settings: {
      value: sagemakerDomainDefaultUserSettingsCanvasAppSettingsToHclTerraform(struct!.canvasAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCanvasAppSettingsList",
    },
    code_editor_app_settings: {
      value: sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsList",
    },
    custom_file_system_config: {
      value: cdktf.listMapperHcl(sagemakerDomainDefaultUserSettingsCustomFileSystemConfigToHclTerraform, true)(struct!.customFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomFileSystemConfigList",
    },
    custom_posix_user_config: {
      value: sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsCustomPosixUserConfigList",
    },
    jupyter_lab_app_settings: {
      value: sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsList",
    },
    jupyter_server_app_settings: {
      value: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsList",
    },
    kernel_gateway_app_settings: {
      value: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsList",
    },
    r_session_app_settings: {
      value: sagemakerDomainDefaultUserSettingsRSessionAppSettingsToHclTerraform(struct!.rSessionAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsRSessionAppSettingsList",
    },
    r_studio_server_pro_app_settings: {
      value: sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsList",
    },
    sharing_settings: {
      value: sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsSharingSettingsList",
    },
    space_storage_settings: {
      value: sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsSpaceStorageSettingsList",
    },
    studio_web_portal_settings: {
      value: sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToHclTerraform(struct!.studioWebPortalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsList",
    },
    tensor_board_app_settings: {
      value: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct!.tensorBoardAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDefaultUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoMountHomeEfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMountHomeEfs = this._autoMountHomeEfs;
    }
    if (this._defaultLandingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLandingUri = this._defaultLandingUri;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._studioWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortal = this._studioWebPortal;
    }
    if (this._canvasAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasAppSettings = this._canvasAppSettings?.internalValue;
    }
    if (this._codeEditorAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
    }
    if (this._customFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfig = this._customFileSystemConfig?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._rSessionAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rSessionAppSettings = this._rSessionAppSettings?.internalValue;
    }
    if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
    }
    if (this._sharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    if (this._studioWebPortalSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortalSettings = this._studioWebPortalSettings?.internalValue;
    }
    if (this._tensorBoardAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDefaultUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoMountHomeEfs = undefined;
      this._defaultLandingUri = undefined;
      this._executionRole = undefined;
      this._securityGroups = undefined;
      this._studioWebPortal = undefined;
      this._canvasAppSettings.internalValue = undefined;
      this._codeEditorAppSettings.internalValue = undefined;
      this._customFileSystemConfig.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._rSessionAppSettings.internalValue = undefined;
      this._rStudioServerProAppSettings.internalValue = undefined;
      this._sharingSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
      this._studioWebPortalSettings.internalValue = undefined;
      this._tensorBoardAppSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoMountHomeEfs = value.autoMountHomeEfs;
      this._defaultLandingUri = value.defaultLandingUri;
      this._executionRole = value.executionRole;
      this._securityGroups = value.securityGroups;
      this._studioWebPortal = value.studioWebPortal;
      this._canvasAppSettings.internalValue = value.canvasAppSettings;
      this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
      this._customFileSystemConfig.internalValue = value.customFileSystemConfig;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._rSessionAppSettings.internalValue = value.rSessionAppSettings;
      this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
      this._studioWebPortalSettings.internalValue = value.studioWebPortalSettings;
      this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
    }
  }

  // auto_mount_home_efs - computed: true, optional: true, required: false
  private _autoMountHomeEfs?: string; 
  public get autoMountHomeEfs() {
    return this.getStringAttribute('auto_mount_home_efs');
  }
  public set autoMountHomeEfs(value: string) {
    this._autoMountHomeEfs = value;
  }
  public resetAutoMountHomeEfs() {
    this._autoMountHomeEfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMountHomeEfsInput() {
    return this._autoMountHomeEfs;
  }

  // default_landing_uri - computed: true, optional: true, required: false
  private _defaultLandingUri?: string; 
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }
  public set defaultLandingUri(value: string) {
    this._defaultLandingUri = value;
  }
  public resetDefaultLandingUri() {
    this._defaultLandingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLandingUriInput() {
    return this._defaultLandingUri;
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // studio_web_portal - computed: true, optional: true, required: false
  private _studioWebPortal?: string; 
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }
  public set studioWebPortal(value: string) {
    this._studioWebPortal = value;
  }
  public resetStudioWebPortal() {
    this._studioWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalInput() {
    return this._studioWebPortal;
  }

  // canvas_app_settings - computed: false, optional: true, required: false
  private _canvasAppSettings = new SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference(this, "canvas_app_settings");
  public get canvasAppSettings() {
    return this._canvasAppSettings;
  }
  public putCanvasAppSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettings) {
    this._canvasAppSettings.internalValue = value;
  }
  public resetCanvasAppSettings() {
    this._canvasAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasAppSettingsInput() {
    return this._canvasAppSettings.internalValue;
  }

  // code_editor_app_settings - computed: false, optional: true, required: false
  private _codeEditorAppSettings = new SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings) {
    this._codeEditorAppSettings.internalValue = value;
  }
  public resetCodeEditorAppSettings() {
    this._codeEditorAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppSettingsInput() {
    return this._codeEditorAppSettings.internalValue;
  }

  // custom_file_system_config - computed: false, optional: true, required: false
  private _customFileSystemConfig = new SagemakerDomainDefaultUserSettingsCustomFileSystemConfigList(this, "custom_file_system_config", false);
  public get customFileSystemConfig() {
    return this._customFileSystemConfig;
  }
  public putCustomFileSystemConfig(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable) {
    this._customFileSystemConfig.internalValue = value;
  }
  public resetCustomFileSystemConfig() {
    this._customFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigInput() {
    return this._customFileSystemConfig.internalValue;
  }

  // custom_posix_user_config - computed: false, optional: true, required: false
  private _customPosixUserConfig = new SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // r_session_app_settings - computed: false, optional: true, required: false
  private _rSessionAppSettings = new SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference(this, "r_session_app_settings");
  public get rSessionAppSettings() {
    return this._rSessionAppSettings;
  }
  public putRSessionAppSettings(value: SagemakerDomainDefaultUserSettingsRSessionAppSettings) {
    this._rSessionAppSettings.internalValue = value;
  }
  public resetRSessionAppSettings() {
    this._rSessionAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rSessionAppSettingsInput() {
    return this._rSessionAppSettings.internalValue;
  }

  // r_studio_server_pro_app_settings - computed: false, optional: true, required: false
  private _rStudioServerProAppSettings = new SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }
  public putRStudioServerProAppSettings(value: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings) {
    this._rStudioServerProAppSettings.internalValue = value;
  }
  public resetRStudioServerProAppSettings() {
    this._rStudioServerProAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProAppSettingsInput() {
    return this._rStudioServerProAppSettings.internalValue;
  }

  // sharing_settings - computed: false, optional: true, required: false
  private _sharingSettings = new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: SagemakerDomainDefaultUserSettingsSharingSettings) {
    this._sharingSettings.internalValue = value;
  }
  public resetSharingSettings() {
    this._sharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingSettingsInput() {
    return this._sharingSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }

  // studio_web_portal_settings - computed: false, optional: true, required: false
  private _studioWebPortalSettings = new SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference(this, "studio_web_portal_settings");
  public get studioWebPortalSettings() {
    return this._studioWebPortalSettings;
  }
  public putStudioWebPortalSettings(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings) {
    this._studioWebPortalSettings.internalValue = value;
  }
  public resetStudioWebPortalSettings() {
    this._studioWebPortalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalSettingsInput() {
    return this._studioWebPortalSettings.internalValue;
  }

  // tensor_board_app_settings - computed: false, optional: true, required: false
  private _tensorBoardAppSettings = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings");
  public get tensorBoardAppSettings() {
    return this._tensorBoardAppSettings;
  }
  public putTensorBoardAppSettings(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings) {
    this._tensorBoardAppSettings.internalValue = value;
  }
  public resetTensorBoardAppSettings() {
    this._tensorBoardAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardAppSettingsInput() {
    return this._tensorBoardAppSettings.internalValue;
  }
}
export interface SagemakerDomainDomainSettingsDockerSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#enable_docker_access SagemakerDomain#enable_docker_access}
  */
  readonly enableDockerAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#vpc_only_trusted_accounts SagemakerDomain#vpc_only_trusted_accounts}
  */
  readonly vpcOnlyTrustedAccounts?: string[];
}

export function sagemakerDomainDomainSettingsDockerSettingsToTerraform(struct?: SagemakerDomainDomainSettingsDockerSettingsOutputReference | SagemakerDomainDomainSettingsDockerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_docker_access: cdktf.stringToTerraform(struct!.enableDockerAccess),
    vpc_only_trusted_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcOnlyTrustedAccounts),
  }
}


export function sagemakerDomainDomainSettingsDockerSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsDockerSettingsOutputReference | SagemakerDomainDomainSettingsDockerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_docker_access: {
      value: cdktf.stringToHclTerraform(struct!.enableDockerAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_only_trusted_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcOnlyTrustedAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsDockerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDomainSettingsDockerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDockerAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDockerAccess = this._enableDockerAccess;
    }
    if (this._vpcOnlyTrustedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOnlyTrustedAccounts = this._vpcOnlyTrustedAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettingsDockerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDockerAccess = undefined;
      this._vpcOnlyTrustedAccounts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDockerAccess = value.enableDockerAccess;
      this._vpcOnlyTrustedAccounts = value.vpcOnlyTrustedAccounts;
    }
  }

  // enable_docker_access - computed: false, optional: true, required: false
  private _enableDockerAccess?: string; 
  public get enableDockerAccess() {
    return this.getStringAttribute('enable_docker_access');
  }
  public set enableDockerAccess(value: string) {
    this._enableDockerAccess = value;
  }
  public resetEnableDockerAccess() {
    this._enableDockerAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDockerAccessInput() {
    return this._enableDockerAccess;
  }

  // vpc_only_trusted_accounts - computed: false, optional: true, required: false
  private _vpcOnlyTrustedAccounts?: string[]; 
  public get vpcOnlyTrustedAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_only_trusted_accounts'));
  }
  public set vpcOnlyTrustedAccounts(value: string[]) {
    this._vpcOnlyTrustedAccounts = value;
  }
  public resetVpcOnlyTrustedAccounts() {
    this._vpcOnlyTrustedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOnlyTrustedAccountsInput() {
    return this._vpcOnlyTrustedAccounts;
  }
}
export interface SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerDomainDomainSettingsRStudioServerProDomainSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#domain_execution_role_arn SagemakerDomain#domain_execution_role_arn}
  */
  readonly domainExecutionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#r_studio_connect_url SagemakerDomain#r_studio_connect_url}
  */
  readonly rStudioConnectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#r_studio_package_manager_url SagemakerDomain#r_studio_package_manager_url}
  */
  readonly rStudioPackageManagerUrl?: string;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec;
}

export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_execution_role_arn: cdktf.stringToTerraform(struct!.domainExecutionRoleArn),
    r_studio_connect_url: cdktf.stringToTerraform(struct!.rStudioConnectUrl),
    r_studio_package_manager_url: cdktf.stringToTerraform(struct!.rStudioPackageManagerUrl),
    default_resource_spec: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.domainExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_connect_url: {
      value: cdktf.stringToHclTerraform(struct!.rStudioConnectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    r_studio_package_manager_url: {
      value: cdktf.stringToHclTerraform(struct!.rStudioPackageManagerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_resource_spec: {
      value: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDomainSettingsRStudioServerProDomainSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainExecutionRoleArn = this._domainExecutionRoleArn;
    }
    if (this._rStudioConnectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioConnectUrl = this._rStudioConnectUrl;
    }
    if (this._rStudioPackageManagerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioPackageManagerUrl = this._rStudioPackageManagerUrl;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainExecutionRoleArn = undefined;
      this._rStudioConnectUrl = undefined;
      this._rStudioPackageManagerUrl = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainExecutionRoleArn = value.domainExecutionRoleArn;
      this._rStudioConnectUrl = value.rStudioConnectUrl;
      this._rStudioPackageManagerUrl = value.rStudioPackageManagerUrl;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // domain_execution_role_arn - computed: false, optional: false, required: true
  private _domainExecutionRoleArn?: string; 
  public get domainExecutionRoleArn() {
    return this.getStringAttribute('domain_execution_role_arn');
  }
  public set domainExecutionRoleArn(value: string) {
    this._domainExecutionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainExecutionRoleArnInput() {
    return this._domainExecutionRoleArn;
  }

  // r_studio_connect_url - computed: false, optional: true, required: false
  private _rStudioConnectUrl?: string; 
  public get rStudioConnectUrl() {
    return this.getStringAttribute('r_studio_connect_url');
  }
  public set rStudioConnectUrl(value: string) {
    this._rStudioConnectUrl = value;
  }
  public resetRStudioConnectUrl() {
    this._rStudioConnectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioConnectUrlInput() {
    return this._rStudioConnectUrl;
  }

  // r_studio_package_manager_url - computed: false, optional: true, required: false
  private _rStudioPackageManagerUrl?: string; 
  public get rStudioPackageManagerUrl() {
    return this.getStringAttribute('r_studio_package_manager_url');
  }
  public set rStudioPackageManagerUrl(value: string) {
    this._rStudioPackageManagerUrl = value;
  }
  public resetRStudioPackageManagerUrl() {
    this._rStudioPackageManagerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioPackageManagerUrlInput() {
    return this._rStudioPackageManagerUrl;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerDomainDomainSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}
  */
  readonly executionRoleIdentityConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * docker_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#docker_settings SagemakerDomain#docker_settings}
  */
  readonly dockerSettings?: SagemakerDomainDomainSettingsDockerSettings;
  /**
  * r_studio_server_pro_domain_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#r_studio_server_pro_domain_settings SagemakerDomain#r_studio_server_pro_domain_settings}
  */
  readonly rStudioServerProDomainSettings?: SagemakerDomainDomainSettingsRStudioServerProDomainSettings;
}

export function sagemakerDomainDomainSettingsToTerraform(struct?: SagemakerDomainDomainSettingsOutputReference | SagemakerDomainDomainSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role_identity_config: cdktf.stringToTerraform(struct!.executionRoleIdentityConfig),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    docker_settings: sagemakerDomainDomainSettingsDockerSettingsToTerraform(struct!.dockerSettings),
    r_studio_server_pro_domain_settings: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToTerraform(struct!.rStudioServerProDomainSettings),
  }
}


export function sagemakerDomainDomainSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsOutputReference | SagemakerDomainDomainSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_role_identity_config: {
      value: cdktf.stringToHclTerraform(struct!.executionRoleIdentityConfig),
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
    docker_settings: {
      value: sagemakerDomainDomainSettingsDockerSettingsToHclTerraform(struct!.dockerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDomainSettingsDockerSettingsList",
    },
    r_studio_server_pro_domain_settings: {
      value: sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct!.rStudioServerProDomainSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerDomainDomainSettingsRStudioServerProDomainSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainDomainSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainDomainSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRoleIdentityConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleIdentityConfig = this._executionRoleIdentityConfig;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._dockerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSettings = this._dockerSettings?.internalValue;
    }
    if (this._rStudioServerProDomainSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProDomainSettings = this._rStudioServerProDomainSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainDomainSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRoleIdentityConfig = undefined;
      this._securityGroupIds = undefined;
      this._dockerSettings.internalValue = undefined;
      this._rStudioServerProDomainSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRoleIdentityConfig = value.executionRoleIdentityConfig;
      this._securityGroupIds = value.securityGroupIds;
      this._dockerSettings.internalValue = value.dockerSettings;
      this._rStudioServerProDomainSettings.internalValue = value.rStudioServerProDomainSettings;
    }
  }

  // execution_role_identity_config - computed: false, optional: true, required: false
  private _executionRoleIdentityConfig?: string; 
  public get executionRoleIdentityConfig() {
    return this.getStringAttribute('execution_role_identity_config');
  }
  public set executionRoleIdentityConfig(value: string) {
    this._executionRoleIdentityConfig = value;
  }
  public resetExecutionRoleIdentityConfig() {
    this._executionRoleIdentityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleIdentityConfigInput() {
    return this._executionRoleIdentityConfig;
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

  // docker_settings - computed: false, optional: true, required: false
  private _dockerSettings = new SagemakerDomainDomainSettingsDockerSettingsOutputReference(this, "docker_settings");
  public get dockerSettings() {
    return this._dockerSettings;
  }
  public putDockerSettings(value: SagemakerDomainDomainSettingsDockerSettings) {
    this._dockerSettings.internalValue = value;
  }
  public resetDockerSettings() {
    this._dockerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSettingsInput() {
    return this._dockerSettings.internalValue;
  }

  // r_studio_server_pro_domain_settings - computed: false, optional: true, required: false
  private _rStudioServerProDomainSettings = new SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference(this, "r_studio_server_pro_domain_settings");
  public get rStudioServerProDomainSettings() {
    return this._rStudioServerProDomainSettings;
  }
  public putRStudioServerProDomainSettings(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettings) {
    this._rStudioServerProDomainSettings.internalValue = value;
  }
  public resetRStudioServerProDomainSettings() {
    this._rStudioServerProDomainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProDomainSettingsInput() {
    return this._rStudioServerProDomainSettings.internalValue;
  }
}
export interface SagemakerDomainRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}
  */
  readonly homeEfsFileSystem?: string;
}

export function sagemakerDomainRetentionPolicyToTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    home_efs_file_system: cdktf.stringToTerraform(struct!.homeEfsFileSystem),
  }
}


export function sagemakerDomainRetentionPolicyToHclTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    home_efs_file_system: {
      value: cdktf.stringToHclTerraform(struct!.homeEfsFileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDomainRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homeEfsFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeEfsFileSystem = this._homeEfsFileSystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDomainRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._homeEfsFileSystem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._homeEfsFileSystem = value.homeEfsFileSystem;
    }
  }

  // home_efs_file_system - computed: false, optional: true, required: false
  private _homeEfsFileSystem?: string; 
  public get homeEfsFileSystem() {
    return this.getStringAttribute('home_efs_file_system');
  }
  public set homeEfsFileSystem(value: string) {
    this._homeEfsFileSystem = value;
  }
  public resetHomeEfsFileSystem() {
    this._homeEfsFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeEfsFileSystemInput() {
    return this._homeEfsFileSystem;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain aws_sagemaker_domain}
*/
export class SagemakerDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerDomain to import
  * @param importFromId The id of the existing SagemakerDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/sagemaker_domain aws_sagemaker_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDomainConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.83.0',
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
    this._appNetworkAccessType = config.appNetworkAccessType;
    this._appSecurityGroupManagement = config.appSecurityGroupManagement;
    this._authMode = config.authMode;
    this._domainName = config.domainName;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._subnetIds = config.subnetIds;
    this._tagPropagation = config.tagPropagation;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
    this._defaultSpaceSettings.internalValue = config.defaultSpaceSettings;
    this._defaultUserSettings.internalValue = config.defaultUserSettings;
    this._domainSettings.internalValue = config.domainSettings;
    this._retentionPolicy.internalValue = config.retentionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: false, optional: true, required: false
  private _appNetworkAccessType?: string; 
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }
  public set appNetworkAccessType(value: string) {
    this._appNetworkAccessType = value;
  }
  public resetAppNetworkAccessType() {
    this._appNetworkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkAccessTypeInput() {
    return this._appNetworkAccessType;
  }

  // app_security_group_management - computed: false, optional: true, required: false
  private _appSecurityGroupManagement?: string; 
  public get appSecurityGroupManagement() {
    return this.getStringAttribute('app_security_group_management');
  }
  public set appSecurityGroupManagement(value: string) {
    this._appSecurityGroupManagement = value;
  }
  public resetAppSecurityGroupManagement() {
    this._appSecurityGroupManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecurityGroupManagementInput() {
    return this._appSecurityGroupManagement;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
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

  // security_group_id_for_domain_boundary - computed: true, optional: false, required: false
  public get securityGroupIdForDomainBoundary() {
    return this.getStringAttribute('security_group_id_for_domain_boundary');
  }

  // single_sign_on_application_arn - computed: true, optional: false, required: false
  public get singleSignOnApplicationArn() {
    return this.getStringAttribute('single_sign_on_application_arn');
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tag_propagation - computed: false, optional: true, required: false
  private _tagPropagation?: string; 
  public get tagPropagation() {
    return this.getStringAttribute('tag_propagation');
  }
  public set tagPropagation(value: string) {
    this._tagPropagation = value;
  }
  public resetTagPropagation() {
    this._tagPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPropagationInput() {
    return this._tagPropagation;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // default_space_settings - computed: false, optional: true, required: false
  private _defaultSpaceSettings = new SagemakerDomainDefaultSpaceSettingsOutputReference(this, "default_space_settings");
  public get defaultSpaceSettings() {
    return this._defaultSpaceSettings;
  }
  public putDefaultSpaceSettings(value: SagemakerDomainDefaultSpaceSettings) {
    this._defaultSpaceSettings.internalValue = value;
  }
  public resetDefaultSpaceSettings() {
    this._defaultSpaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSpaceSettingsInput() {
    return this._defaultSpaceSettings.internalValue;
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings = new SagemakerDomainDefaultUserSettingsOutputReference(this, "default_user_settings");
  public get defaultUserSettings() {
    return this._defaultUserSettings;
  }
  public putDefaultUserSettings(value: SagemakerDomainDefaultUserSettings) {
    this._defaultUserSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserSettingsInput() {
    return this._defaultUserSettings.internalValue;
  }

  // domain_settings - computed: false, optional: true, required: false
  private _domainSettings = new SagemakerDomainDomainSettingsOutputReference(this, "domain_settings");
  public get domainSettings() {
    return this._domainSettings;
  }
  public putDomainSettings(value: SagemakerDomainDomainSettings) {
    this._domainSettings.internalValue = value;
  }
  public resetDomainSettings() {
    this._domainSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSettingsInput() {
    return this._domainSettings.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new SagemakerDomainRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: SagemakerDomainRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
      app_security_group_management: cdktf.stringToTerraform(this._appSecurityGroupManagement),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tag_propagation: cdktf.stringToTerraform(this._tagPropagation),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      default_space_settings: sagemakerDomainDefaultSpaceSettingsToTerraform(this._defaultSpaceSettings.internalValue),
      default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings.internalValue),
      domain_settings: sagemakerDomainDomainSettingsToTerraform(this._domainSettings.internalValue),
      retention_policy: sagemakerDomainRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_network_access_type: {
        value: cdktf.stringToHclTerraform(this._appNetworkAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_security_group_management: {
        value: cdktf.stringToHclTerraform(this._appSecurityGroupManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_propagation: {
        value: cdktf.stringToHclTerraform(this._tagPropagation),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_space_settings: {
        value: sagemakerDomainDefaultSpaceSettingsToHclTerraform(this._defaultSpaceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerDomainDefaultSpaceSettingsList",
      },
      default_user_settings: {
        value: sagemakerDomainDefaultUserSettingsToHclTerraform(this._defaultUserSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerDomainDefaultUserSettingsList",
      },
      domain_settings: {
        value: sagemakerDomainDomainSettingsToHclTerraform(this._domainSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerDomainDomainSettingsList",
      },
      retention_policy: {
        value: sagemakerDomainRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerDomainRetentionPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
