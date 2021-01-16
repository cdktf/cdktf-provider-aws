// https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
  readonly directoryId: string;
  readonly ipGroupIds?: string[];
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** self_service_permissions block */
  readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
  /** workspace_access_properties block */
  readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties[];
  /** workspace_creation_properties block */
  readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties[];
}
export interface WorkspacesDirectorySelfServicePermissions {
  readonly changeComputeType?: boolean;
  readonly increaseVolumeSize?: boolean;
  readonly rebuildWorkspace?: boolean;
  readonly restartWorkspace?: boolean;
  readonly switchRunningMode?: boolean;
}

function workspacesDirectorySelfServicePermissionsToTerraform(struct?: WorkspacesDirectorySelfServicePermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_compute_type: cdktf.booleanToTerraform(struct!.changeComputeType),
    increase_volume_size: cdktf.booleanToTerraform(struct!.increaseVolumeSize),
    rebuild_workspace: cdktf.booleanToTerraform(struct!.rebuildWorkspace),
    restart_workspace: cdktf.booleanToTerraform(struct!.restartWorkspace),
    switch_running_mode: cdktf.booleanToTerraform(struct!.switchRunningMode),
  }
}

export interface WorkspacesDirectoryWorkspaceAccessProperties {
  readonly deviceTypeAndroid?: string;
  readonly deviceTypeChromeos?: string;
  readonly deviceTypeIos?: string;
  readonly deviceTypeOsx?: string;
  readonly deviceTypeWeb?: string;
  readonly deviceTypeWindows?: string;
  readonly deviceTypeZeroclient?: string;
}

function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_type_android: cdktf.stringToTerraform(struct!.deviceTypeAndroid),
    device_type_chromeos: cdktf.stringToTerraform(struct!.deviceTypeChromeos),
    device_type_ios: cdktf.stringToTerraform(struct!.deviceTypeIos),
    device_type_osx: cdktf.stringToTerraform(struct!.deviceTypeOsx),
    device_type_web: cdktf.stringToTerraform(struct!.deviceTypeWeb),
    device_type_windows: cdktf.stringToTerraform(struct!.deviceTypeWindows),
    device_type_zeroclient: cdktf.stringToTerraform(struct!.deviceTypeZeroclient),
  }
}

export interface WorkspacesDirectoryWorkspaceCreationProperties {
  readonly customSecurityGroupId?: string;
  readonly defaultOu?: string;
  readonly enableInternetAccess?: boolean;
  readonly enableMaintenanceMode?: boolean;
  readonly userEnabledAsLocalAdministrator?: boolean;
}

function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_security_group_id: cdktf.stringToTerraform(struct!.customSecurityGroupId),
    default_ou: cdktf.stringToTerraform(struct!.defaultOu),
    enable_internet_access: cdktf.booleanToTerraform(struct!.enableInternetAccess),
    enable_maintenance_mode: cdktf.booleanToTerraform(struct!.enableMaintenanceMode),
    user_enabled_as_local_administrator: cdktf.booleanToTerraform(struct!.userEnabledAsLocalAdministrator),
  }
}


// Resource

export class WorkspacesDirectory extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorkspacesDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._directoryId = config.directoryId;
    this._ipGroupIds = config.ipGroupIds;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._selfServicePermissions = config.selfServicePermissions;
    this._workspaceAccessProperties = config.workspaceAccessProperties;
    this._workspaceCreationProperties = config.workspaceCreationProperties;
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
  private _directoryId: string;
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId
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
    return this.getListAttribute('dns_ip_addresses');
  }

  // iam_role_id - computed: true, optional: false, required: false
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_group_ids - computed: true, optional: true, required: false
  private _ipGroupIds?: string[];
  public get ipGroupIds() {
    return this.getListAttribute('ip_group_ids');
  }
  public set ipGroupIds(value: string[]) {
    this._ipGroupIds = value;
  }
  public resetIpGroupIds() {
    this._ipGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupIdsInput() {
    return this._ipGroupIds
  }

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
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

  // workspace_security_group_id - computed: true, optional: false, required: false
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // self_service_permissions - computed: false, optional: true, required: false
  private _selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
  public get selfServicePermissions() {
    return this.interpolationForAttribute('self_service_permissions') as any;
  }
  public set selfServicePermissions(value: WorkspacesDirectorySelfServicePermissions[] ) {
    this._selfServicePermissions = value;
  }
  public resetSelfServicePermissions() {
    this._selfServicePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePermissionsInput() {
    return this._selfServicePermissions
  }

  // workspace_access_properties - computed: false, optional: true, required: false
  private _workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties[];
  public get workspaceAccessProperties() {
    return this.interpolationForAttribute('workspace_access_properties') as any;
  }
  public set workspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties[] ) {
    this._workspaceAccessProperties = value;
  }
  public resetWorkspaceAccessProperties() {
    this._workspaceAccessProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAccessPropertiesInput() {
    return this._workspaceAccessProperties
  }

  // workspace_creation_properties - computed: false, optional: true, required: false
  private _workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties[];
  public get workspaceCreationProperties() {
    return this.interpolationForAttribute('workspace_creation_properties') as any;
  }
  public set workspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties[] ) {
    this._workspaceCreationProperties = value;
  }
  public resetWorkspaceCreationProperties() {
    this._workspaceCreationProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCreationPropertiesInput() {
    return this._workspaceCreationProperties
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      ip_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._ipGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      self_service_permissions: cdktf.listMapper(workspacesDirectorySelfServicePermissionsToTerraform)(this._selfServicePermissions),
      workspace_access_properties: cdktf.listMapper(workspacesDirectoryWorkspaceAccessPropertiesToTerraform)(this._workspaceAccessProperties),
      workspace_creation_properties: cdktf.listMapper(workspacesDirectoryWorkspaceCreationPropertiesToTerraform)(this._workspaceCreationProperties),
    };
  }
}
