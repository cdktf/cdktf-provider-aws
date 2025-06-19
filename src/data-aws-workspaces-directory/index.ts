/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsWorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory#directory_id DataAwsWorkspacesDirectory#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory#id DataAwsWorkspacesDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory#region DataAwsWorkspacesDirectory#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory#tags DataAwsWorkspacesDirectory#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsWorkspacesDirectoryActiveDirectoryConfig {
}

export function dataAwsWorkspacesDirectoryActiveDirectoryConfigToTerraform(struct?: DataAwsWorkspacesDirectoryActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWorkspacesDirectoryActiveDirectoryConfigToHclTerraform(struct?: DataAwsWorkspacesDirectoryActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWorkspacesDirectoryActiveDirectoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsWorkspacesDirectoryActiveDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWorkspacesDirectoryActiveDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // service_account_secret_arn - computed: true, optional: false, required: false
  public get serviceAccountSecretArn() {
    return this.getStringAttribute('service_account_secret_arn');
  }
}

export class DataAwsWorkspacesDirectoryActiveDirectoryConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsWorkspacesDirectoryActiveDirectoryConfigOutputReference {
    return new DataAwsWorkspacesDirectoryActiveDirectoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWorkspacesDirectoryCertificateBasedAuthProperties {
}

export function dataAwsWorkspacesDirectoryCertificateBasedAuthPropertiesToTerraform(struct?: DataAwsWorkspacesDirectoryCertificateBasedAuthProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWorkspacesDirectoryCertificateBasedAuthPropertiesToHclTerraform(struct?: DataAwsWorkspacesDirectoryCertificateBasedAuthProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsWorkspacesDirectoryCertificateBasedAuthProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWorkspacesDirectoryCertificateBasedAuthProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority_arn - computed: true, optional: false, required: false
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAwsWorkspacesDirectoryCertificateBasedAuthPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference {
    return new DataAwsWorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWorkspacesDirectorySamlProperties {
}

export function dataAwsWorkspacesDirectorySamlPropertiesToTerraform(struct?: DataAwsWorkspacesDirectorySamlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWorkspacesDirectorySamlPropertiesToHclTerraform(struct?: DataAwsWorkspacesDirectorySamlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWorkspacesDirectorySamlPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsWorkspacesDirectorySamlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWorkspacesDirectorySamlProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // relay_state_parameter_name - computed: true, optional: false, required: false
  public get relayStateParameterName() {
    return this.getStringAttribute('relay_state_parameter_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_access_url - computed: true, optional: false, required: false
  public get userAccessUrl() {
    return this.getStringAttribute('user_access_url');
  }
}

export class DataAwsWorkspacesDirectorySamlPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsWorkspacesDirectorySamlPropertiesOutputReference {
    return new DataAwsWorkspacesDirectorySamlPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWorkspacesDirectorySelfServicePermissions {
}

export function dataAwsWorkspacesDirectorySelfServicePermissionsToTerraform(struct?: DataAwsWorkspacesDirectorySelfServicePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWorkspacesDirectorySelfServicePermissionsToHclTerraform(struct?: DataAwsWorkspacesDirectorySelfServicePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsWorkspacesDirectorySelfServicePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWorkspacesDirectorySelfServicePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change_compute_type - computed: true, optional: false, required: false
  public get changeComputeType() {
    return this.getBooleanAttribute('change_compute_type');
  }

  // increase_volume_size - computed: true, optional: false, required: false
  public get increaseVolumeSize() {
    return this.getBooleanAttribute('increase_volume_size');
  }

  // rebuild_workspace - computed: true, optional: false, required: false
  public get rebuildWorkspace() {
    return this.getBooleanAttribute('rebuild_workspace');
  }

  // restart_workspace - computed: true, optional: false, required: false
  public get restartWorkspace() {
    return this.getBooleanAttribute('restart_workspace');
  }

  // switch_running_mode - computed: true, optional: false, required: false
  public get switchRunningMode() {
    return this.getBooleanAttribute('switch_running_mode');
  }
}

export class DataAwsWorkspacesDirectorySelfServicePermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsWorkspacesDirectorySelfServicePermissionsOutputReference {
    return new DataAwsWorkspacesDirectorySelfServicePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWorkspacesDirectoryWorkspaceAccessProperties {
}

export function dataAwsWorkspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWorkspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsWorkspacesDirectoryWorkspaceAccessProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWorkspacesDirectoryWorkspaceAccessProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_type_android - computed: true, optional: false, required: false
  public get deviceTypeAndroid() {
    return this.getStringAttribute('device_type_android');
  }

  // device_type_chromeos - computed: true, optional: false, required: false
  public get deviceTypeChromeos() {
    return this.getStringAttribute('device_type_chromeos');
  }

  // device_type_ios - computed: true, optional: false, required: false
  public get deviceTypeIos() {
    return this.getStringAttribute('device_type_ios');
  }

  // device_type_linux - computed: true, optional: false, required: false
  public get deviceTypeLinux() {
    return this.getStringAttribute('device_type_linux');
  }

  // device_type_osx - computed: true, optional: false, required: false
  public get deviceTypeOsx() {
    return this.getStringAttribute('device_type_osx');
  }

  // device_type_web - computed: true, optional: false, required: false
  public get deviceTypeWeb() {
    return this.getStringAttribute('device_type_web');
  }

  // device_type_windows - computed: true, optional: false, required: false
  public get deviceTypeWindows() {
    return this.getStringAttribute('device_type_windows');
  }

  // device_type_zeroclient - computed: true, optional: false, required: false
  public get deviceTypeZeroclient() {
    return this.getStringAttribute('device_type_zeroclient');
  }
}

export class DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference {
    return new DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsWorkspacesDirectoryWorkspaceCreationProperties {
}

export function dataAwsWorkspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsWorkspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsWorkspacesDirectoryWorkspaceCreationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsWorkspacesDirectoryWorkspaceCreationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_security_group_id - computed: true, optional: false, required: false
  public get customSecurityGroupId() {
    return this.getStringAttribute('custom_security_group_id');
  }

  // default_ou - computed: true, optional: false, required: false
  public get defaultOu() {
    return this.getStringAttribute('default_ou');
  }

  // enable_internet_access - computed: true, optional: false, required: false
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }

  // enable_maintenance_mode - computed: true, optional: false, required: false
  public get enableMaintenanceMode() {
    return this.getBooleanAttribute('enable_maintenance_mode');
  }

  // user_enabled_as_local_administrator - computed: true, optional: false, required: false
  public get userEnabledAsLocalAdministrator() {
    return this.getBooleanAttribute('user_enabled_as_local_administrator');
  }
}

export class DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference {
    return new DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory aws_workspaces_directory}
*/
export class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspaces_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsWorkspacesDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsWorkspacesDirectory to import
  * @param importFromId The id of the existing DataAwsWorkspacesDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsWorkspacesDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspaces_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/workspaces_directory aws_workspaces_directory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsWorkspacesDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsWorkspacesDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_directory',
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
    this._directoryId = config.directoryId;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_config - computed: true, optional: false, required: false
  private _activeDirectoryConfig = new DataAwsWorkspacesDirectoryActiveDirectoryConfigList(this, "active_directory_config", true);
  public get activeDirectoryConfig() {
    return this._activeDirectoryConfig;
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // certificate_based_auth_properties - computed: true, optional: false, required: false
  private _certificateBasedAuthProperties = new DataAwsWorkspacesDirectoryCertificateBasedAuthPropertiesList(this, "certificate_based_auth_properties", false);
  public get certificateBasedAuthProperties() {
    return this._certificateBasedAuthProperties;
  }

  // customer_user_name - computed: true, optional: false, required: false
  public get customerUserName() {
    return this.getStringAttribute('customer_user_name');
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // directory_name - computed: true, optional: false, required: false
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // directory_type - computed: true, optional: false, required: false
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }

  // dns_ip_addresses - computed: true, optional: false, required: false
  public get dnsIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_ip_addresses'));
  }

  // iam_role_id - computed: true, optional: false, required: false
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
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

  // ip_group_ids - computed: true, optional: false, required: false
  public get ipGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_group_ids'));
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

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // saml_properties - computed: true, optional: false, required: false
  private _samlProperties = new DataAwsWorkspacesDirectorySamlPropertiesList(this, "saml_properties", false);
  public get samlProperties() {
    return this._samlProperties;
  }

  // self_service_permissions - computed: true, optional: false, required: false
  private _selfServicePermissions = new DataAwsWorkspacesDirectorySelfServicePermissionsList(this, "self_service_permissions", false);
  public get selfServicePermissions() {
    return this._selfServicePermissions;
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
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

  // user_identity_type - computed: true, optional: false, required: false
  public get userIdentityType() {
    return this.getStringAttribute('user_identity_type');
  }

  // workspace_access_properties - computed: true, optional: false, required: false
  private _workspaceAccessProperties = new DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesList(this, "workspace_access_properties", false);
  public get workspaceAccessProperties() {
    return this._workspaceAccessProperties;
  }

  // workspace_creation_properties - computed: true, optional: false, required: false
  private _workspaceCreationProperties = new DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesList(this, "workspace_creation_properties", false);
  public get workspaceCreationProperties() {
    return this._workspaceCreationProperties;
  }

  // workspace_directory_description - computed: true, optional: false, required: false
  public get workspaceDirectoryDescription() {
    return this.getStringAttribute('workspace_directory_description');
  }

  // workspace_directory_name - computed: true, optional: false, required: false
  public get workspaceDirectoryName() {
    return this.getStringAttribute('workspace_directory_name');
  }

  // workspace_security_group_id - computed: true, optional: false, required: false
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // workspace_type - computed: true, optional: false, required: false
  public get workspaceType() {
    return this.getStringAttribute('workspace_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
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
