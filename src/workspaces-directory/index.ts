// https://www.terraform.io/docs/providers/aws/r/workspaces_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}
  */
  readonly ipGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * self_service_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}
  */
  readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions;
  /**
  * workspace_access_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}
  */
  readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties;
  /**
  * workspace_creation_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}
  */
  readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties;
}
export interface WorkspacesDirectorySelfServicePermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}
  */
  readonly changeComputeType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}
  */
  readonly increaseVolumeSize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}
  */
  readonly rebuildWorkspace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}
  */
  readonly restartWorkspace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}
  */
  readonly switchRunningMode?: boolean | cdktf.IResolvable;
}

export function workspacesDirectorySelfServicePermissionsToTerraform(struct?: WorkspacesDirectorySelfServicePermissionsOutputReference | WorkspacesDirectorySelfServicePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_compute_type: cdktf.booleanToTerraform(struct!.changeComputeType),
    increase_volume_size: cdktf.booleanToTerraform(struct!.increaseVolumeSize),
    rebuild_workspace: cdktf.booleanToTerraform(struct!.rebuildWorkspace),
    restart_workspace: cdktf.booleanToTerraform(struct!.restartWorkspace),
    switch_running_mode: cdktf.booleanToTerraform(struct!.switchRunningMode),
  }
}

export class WorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectorySelfServicePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeComputeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeComputeType = this._changeComputeType;
    }
    if (this._increaseVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.increaseVolumeSize = this._increaseVolumeSize;
    }
    if (this._rebuildWorkspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildWorkspace = this._rebuildWorkspace;
    }
    if (this._restartWorkspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartWorkspace = this._restartWorkspace;
    }
    if (this._switchRunningMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchRunningMode = this._switchRunningMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectorySelfServicePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeComputeType = undefined;
      this._increaseVolumeSize = undefined;
      this._rebuildWorkspace = undefined;
      this._restartWorkspace = undefined;
      this._switchRunningMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeComputeType = value.changeComputeType;
      this._increaseVolumeSize = value.increaseVolumeSize;
      this._rebuildWorkspace = value.rebuildWorkspace;
      this._restartWorkspace = value.restartWorkspace;
      this._switchRunningMode = value.switchRunningMode;
    }
  }

  // change_compute_type - computed: false, optional: true, required: false
  private _changeComputeType?: boolean | cdktf.IResolvable; 
  public get changeComputeType() {
    return this.getBooleanAttribute('change_compute_type');
  }
  public set changeComputeType(value: boolean | cdktf.IResolvable) {
    this._changeComputeType = value;
  }
  public resetChangeComputeType() {
    this._changeComputeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeComputeTypeInput() {
    return this._changeComputeType;
  }

  // increase_volume_size - computed: false, optional: true, required: false
  private _increaseVolumeSize?: boolean | cdktf.IResolvable; 
  public get increaseVolumeSize() {
    return this.getBooleanAttribute('increase_volume_size');
  }
  public set increaseVolumeSize(value: boolean | cdktf.IResolvable) {
    this._increaseVolumeSize = value;
  }
  public resetIncreaseVolumeSize() {
    this._increaseVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get increaseVolumeSizeInput() {
    return this._increaseVolumeSize;
  }

  // rebuild_workspace - computed: false, optional: true, required: false
  private _rebuildWorkspace?: boolean | cdktf.IResolvable; 
  public get rebuildWorkspace() {
    return this.getBooleanAttribute('rebuild_workspace');
  }
  public set rebuildWorkspace(value: boolean | cdktf.IResolvable) {
    this._rebuildWorkspace = value;
  }
  public resetRebuildWorkspace() {
    this._rebuildWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildWorkspaceInput() {
    return this._rebuildWorkspace;
  }

  // restart_workspace - computed: false, optional: true, required: false
  private _restartWorkspace?: boolean | cdktf.IResolvable; 
  public get restartWorkspace() {
    return this.getBooleanAttribute('restart_workspace');
  }
  public set restartWorkspace(value: boolean | cdktf.IResolvable) {
    this._restartWorkspace = value;
  }
  public resetRestartWorkspace() {
    this._restartWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartWorkspaceInput() {
    return this._restartWorkspace;
  }

  // switch_running_mode - computed: false, optional: true, required: false
  private _switchRunningMode?: boolean | cdktf.IResolvable; 
  public get switchRunningMode() {
    return this.getBooleanAttribute('switch_running_mode');
  }
  public set switchRunningMode(value: boolean | cdktf.IResolvable) {
    this._switchRunningMode = value;
  }
  public resetSwitchRunningMode() {
    this._switchRunningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchRunningModeInput() {
    return this._switchRunningMode;
  }
}
export interface WorkspacesDirectoryWorkspaceAccessProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}
  */
  readonly deviceTypeAndroid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}
  */
  readonly deviceTypeChromeos?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}
  */
  readonly deviceTypeIos?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}
  */
  readonly deviceTypeLinux?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}
  */
  readonly deviceTypeOsx?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}
  */
  readonly deviceTypeWeb?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}
  */
  readonly deviceTypeWindows?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}
  */
  readonly deviceTypeZeroclient?: string;
}

export function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference | WorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type_android: cdktf.stringToTerraform(struct!.deviceTypeAndroid),
    device_type_chromeos: cdktf.stringToTerraform(struct!.deviceTypeChromeos),
    device_type_ios: cdktf.stringToTerraform(struct!.deviceTypeIos),
    device_type_linux: cdktf.stringToTerraform(struct!.deviceTypeLinux),
    device_type_osx: cdktf.stringToTerraform(struct!.deviceTypeOsx),
    device_type_web: cdktf.stringToTerraform(struct!.deviceTypeWeb),
    device_type_windows: cdktf.stringToTerraform(struct!.deviceTypeWindows),
    device_type_zeroclient: cdktf.stringToTerraform(struct!.deviceTypeZeroclient),
  }
}

export class WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectoryWorkspaceAccessProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceTypeAndroid !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeAndroid = this._deviceTypeAndroid;
    }
    if (this._deviceTypeChromeos !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeChromeos = this._deviceTypeChromeos;
    }
    if (this._deviceTypeIos !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeIos = this._deviceTypeIos;
    }
    if (this._deviceTypeLinux !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeLinux = this._deviceTypeLinux;
    }
    if (this._deviceTypeOsx !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeOsx = this._deviceTypeOsx;
    }
    if (this._deviceTypeWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeWeb = this._deviceTypeWeb;
    }
    if (this._deviceTypeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeWindows = this._deviceTypeWindows;
    }
    if (this._deviceTypeZeroclient !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeZeroclient = this._deviceTypeZeroclient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectoryWorkspaceAccessProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceTypeAndroid = undefined;
      this._deviceTypeChromeos = undefined;
      this._deviceTypeIos = undefined;
      this._deviceTypeLinux = undefined;
      this._deviceTypeOsx = undefined;
      this._deviceTypeWeb = undefined;
      this._deviceTypeWindows = undefined;
      this._deviceTypeZeroclient = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceTypeAndroid = value.deviceTypeAndroid;
      this._deviceTypeChromeos = value.deviceTypeChromeos;
      this._deviceTypeIos = value.deviceTypeIos;
      this._deviceTypeLinux = value.deviceTypeLinux;
      this._deviceTypeOsx = value.deviceTypeOsx;
      this._deviceTypeWeb = value.deviceTypeWeb;
      this._deviceTypeWindows = value.deviceTypeWindows;
      this._deviceTypeZeroclient = value.deviceTypeZeroclient;
    }
  }

  // device_type_android - computed: false, optional: true, required: false
  private _deviceTypeAndroid?: string; 
  public get deviceTypeAndroid() {
    return this.getStringAttribute('device_type_android');
  }
  public set deviceTypeAndroid(value: string) {
    this._deviceTypeAndroid = value;
  }
  public resetDeviceTypeAndroid() {
    this._deviceTypeAndroid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeAndroidInput() {
    return this._deviceTypeAndroid;
  }

  // device_type_chromeos - computed: false, optional: true, required: false
  private _deviceTypeChromeos?: string; 
  public get deviceTypeChromeos() {
    return this.getStringAttribute('device_type_chromeos');
  }
  public set deviceTypeChromeos(value: string) {
    this._deviceTypeChromeos = value;
  }
  public resetDeviceTypeChromeos() {
    this._deviceTypeChromeos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeChromeosInput() {
    return this._deviceTypeChromeos;
  }

  // device_type_ios - computed: false, optional: true, required: false
  private _deviceTypeIos?: string; 
  public get deviceTypeIos() {
    return this.getStringAttribute('device_type_ios');
  }
  public set deviceTypeIos(value: string) {
    this._deviceTypeIos = value;
  }
  public resetDeviceTypeIos() {
    this._deviceTypeIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeIosInput() {
    return this._deviceTypeIos;
  }

  // device_type_linux - computed: false, optional: true, required: false
  private _deviceTypeLinux?: string; 
  public get deviceTypeLinux() {
    return this.getStringAttribute('device_type_linux');
  }
  public set deviceTypeLinux(value: string) {
    this._deviceTypeLinux = value;
  }
  public resetDeviceTypeLinux() {
    this._deviceTypeLinux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeLinuxInput() {
    return this._deviceTypeLinux;
  }

  // device_type_osx - computed: false, optional: true, required: false
  private _deviceTypeOsx?: string; 
  public get deviceTypeOsx() {
    return this.getStringAttribute('device_type_osx');
  }
  public set deviceTypeOsx(value: string) {
    this._deviceTypeOsx = value;
  }
  public resetDeviceTypeOsx() {
    this._deviceTypeOsx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeOsxInput() {
    return this._deviceTypeOsx;
  }

  // device_type_web - computed: false, optional: true, required: false
  private _deviceTypeWeb?: string; 
  public get deviceTypeWeb() {
    return this.getStringAttribute('device_type_web');
  }
  public set deviceTypeWeb(value: string) {
    this._deviceTypeWeb = value;
  }
  public resetDeviceTypeWeb() {
    this._deviceTypeWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeWebInput() {
    return this._deviceTypeWeb;
  }

  // device_type_windows - computed: false, optional: true, required: false
  private _deviceTypeWindows?: string; 
  public get deviceTypeWindows() {
    return this.getStringAttribute('device_type_windows');
  }
  public set deviceTypeWindows(value: string) {
    this._deviceTypeWindows = value;
  }
  public resetDeviceTypeWindows() {
    this._deviceTypeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeWindowsInput() {
    return this._deviceTypeWindows;
  }

  // device_type_zeroclient - computed: false, optional: true, required: false
  private _deviceTypeZeroclient?: string; 
  public get deviceTypeZeroclient() {
    return this.getStringAttribute('device_type_zeroclient');
  }
  public set deviceTypeZeroclient(value: string) {
    this._deviceTypeZeroclient = value;
  }
  public resetDeviceTypeZeroclient() {
    this._deviceTypeZeroclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeZeroclientInput() {
    return this._deviceTypeZeroclient;
  }
}
export interface WorkspacesDirectoryWorkspaceCreationProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}
  */
  readonly customSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}
  */
  readonly defaultOu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}
  */
  readonly enableMaintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}
  */
  readonly userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable;
}

export function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference | WorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_security_group_id: cdktf.stringToTerraform(struct!.customSecurityGroupId),
    default_ou: cdktf.stringToTerraform(struct!.defaultOu),
    enable_internet_access: cdktf.booleanToTerraform(struct!.enableInternetAccess),
    enable_maintenance_mode: cdktf.booleanToTerraform(struct!.enableMaintenanceMode),
    user_enabled_as_local_administrator: cdktf.booleanToTerraform(struct!.userEnabledAsLocalAdministrator),
  }
}

export class WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectoryWorkspaceCreationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurityGroupId = this._customSecurityGroupId;
    }
    if (this._defaultOu !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOu = this._defaultOu;
    }
    if (this._enableInternetAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetAccess = this._enableInternetAccess;
    }
    if (this._enableMaintenanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMaintenanceMode = this._enableMaintenanceMode;
    }
    if (this._userEnabledAsLocalAdministrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEnabledAsLocalAdministrator = this._userEnabledAsLocalAdministrator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectoryWorkspaceCreationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSecurityGroupId = undefined;
      this._defaultOu = undefined;
      this._enableInternetAccess = undefined;
      this._enableMaintenanceMode = undefined;
      this._userEnabledAsLocalAdministrator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSecurityGroupId = value.customSecurityGroupId;
      this._defaultOu = value.defaultOu;
      this._enableInternetAccess = value.enableInternetAccess;
      this._enableMaintenanceMode = value.enableMaintenanceMode;
      this._userEnabledAsLocalAdministrator = value.userEnabledAsLocalAdministrator;
    }
  }

  // custom_security_group_id - computed: false, optional: true, required: false
  private _customSecurityGroupId?: string; 
  public get customSecurityGroupId() {
    return this.getStringAttribute('custom_security_group_id');
  }
  public set customSecurityGroupId(value: string) {
    this._customSecurityGroupId = value;
  }
  public resetCustomSecurityGroupId() {
    this._customSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupIdInput() {
    return this._customSecurityGroupId;
  }

  // default_ou - computed: false, optional: true, required: false
  private _defaultOu?: string; 
  public get defaultOu() {
    return this.getStringAttribute('default_ou');
  }
  public set defaultOu(value: string) {
    this._defaultOu = value;
  }
  public resetDefaultOu() {
    this._defaultOu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOuInput() {
    return this._defaultOu;
  }

  // enable_internet_access - computed: false, optional: true, required: false
  private _enableInternetAccess?: boolean | cdktf.IResolvable; 
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }
  public set enableInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableInternetAccess = value;
  }
  public resetEnableInternetAccess() {
    this._enableInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetAccessInput() {
    return this._enableInternetAccess;
  }

  // enable_maintenance_mode - computed: false, optional: true, required: false
  private _enableMaintenanceMode?: boolean | cdktf.IResolvable; 
  public get enableMaintenanceMode() {
    return this.getBooleanAttribute('enable_maintenance_mode');
  }
  public set enableMaintenanceMode(value: boolean | cdktf.IResolvable) {
    this._enableMaintenanceMode = value;
  }
  public resetEnableMaintenanceMode() {
    this._enableMaintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMaintenanceModeInput() {
    return this._enableMaintenanceMode;
  }

  // user_enabled_as_local_administrator - computed: false, optional: true, required: false
  private _userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable; 
  public get userEnabledAsLocalAdministrator() {
    return this.getBooleanAttribute('user_enabled_as_local_administrator');
  }
  public set userEnabledAsLocalAdministrator(value: boolean | cdktf.IResolvable) {
    this._userEnabledAsLocalAdministrator = value;
  }
  public resetUserEnabledAsLocalAdministrator() {
    this._userEnabledAsLocalAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEnabledAsLocalAdministratorInput() {
    return this._userEnabledAsLocalAdministrator;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory aws_workspaces_directory}
*/
export class WorkspacesDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspaces_directory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory aws_workspaces_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
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
    this._ipGroupIds = config.ipGroupIds;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._selfServicePermissions.internalValue = config.selfServicePermissions;
    this._workspaceAccessProperties.internalValue = config.workspaceAccessProperties;
    this._workspaceCreationProperties.internalValue = config.workspaceCreationProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
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

  // ip_group_ids - computed: true, optional: true, required: false
  private _ipGroupIds?: string[]; 
  public get ipGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_group_ids'));
  }
  public set ipGroupIds(value: string[]) {
    this._ipGroupIds = value;
  }
  public resetIpGroupIds() {
    this._ipGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupIdsInput() {
    return this._ipGroupIds;
  }

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // workspace_security_group_id - computed: true, optional: false, required: false
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // self_service_permissions - computed: false, optional: true, required: false
  private _selfServicePermissions = new WorkspacesDirectorySelfServicePermissionsOutputReference(this, "self_service_permissions");
  public get selfServicePermissions() {
    return this._selfServicePermissions;
  }
  public putSelfServicePermissions(value: WorkspacesDirectorySelfServicePermissions) {
    this._selfServicePermissions.internalValue = value;
  }
  public resetSelfServicePermissions() {
    this._selfServicePermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePermissionsInput() {
    return this._selfServicePermissions.internalValue;
  }

  // workspace_access_properties - computed: false, optional: true, required: false
  private _workspaceAccessProperties = new WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(this, "workspace_access_properties");
  public get workspaceAccessProperties() {
    return this._workspaceAccessProperties;
  }
  public putWorkspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties) {
    this._workspaceAccessProperties.internalValue = value;
  }
  public resetWorkspaceAccessProperties() {
    this._workspaceAccessProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAccessPropertiesInput() {
    return this._workspaceAccessProperties.internalValue;
  }

  // workspace_creation_properties - computed: false, optional: true, required: false
  private _workspaceCreationProperties = new WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(this, "workspace_creation_properties");
  public get workspaceCreationProperties() {
    return this._workspaceCreationProperties;
  }
  public putWorkspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties) {
    this._workspaceCreationProperties.internalValue = value;
  }
  public resetWorkspaceCreationProperties() {
    this._workspaceCreationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCreationPropertiesInput() {
    return this._workspaceCreationProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      id: cdktf.stringToTerraform(this._id),
      ip_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      self_service_permissions: workspacesDirectorySelfServicePermissionsToTerraform(this._selfServicePermissions.internalValue),
      workspace_access_properties: workspacesDirectoryWorkspaceAccessPropertiesToTerraform(this._workspaceAccessProperties.internalValue),
      workspace_creation_properties: workspacesDirectoryWorkspaceCreationPropertiesToTerraform(this._workspaceCreationProperties.internalValue),
    };
  }
}
