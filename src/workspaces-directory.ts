// https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#directory_id WorkspacesDirectory#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#ip_group_ids WorkspacesDirectory#ip_group_ids}
  */
  readonly ipGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#subnet_ids WorkspacesDirectory#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags WorkspacesDirectory#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags_all WorkspacesDirectory#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * self_service_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#self_service_permissions WorkspacesDirectory#self_service_permissions}
  */
  readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
  /**
  * workspace_access_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_access_properties WorkspacesDirectory#workspace_access_properties}
  */
  readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties[];
  /**
  * workspace_creation_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}
  */
  readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties[];
}
export interface WorkspacesDirectorySelfServicePermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#change_compute_type WorkspacesDirectory#change_compute_type}
  */
  readonly changeComputeType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#increase_volume_size WorkspacesDirectory#increase_volume_size}
  */
  readonly increaseVolumeSize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#rebuild_workspace WorkspacesDirectory#rebuild_workspace}
  */
  readonly rebuildWorkspace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#restart_workspace WorkspacesDirectory#restart_workspace}
  */
  readonly restartWorkspace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#switch_running_mode WorkspacesDirectory#switch_running_mode}
  */
  readonly switchRunningMode?: boolean | cdktf.IResolvable;
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_android WorkspacesDirectory#device_type_android}
  */
  readonly deviceTypeAndroid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_chromeos WorkspacesDirectory#device_type_chromeos}
  */
  readonly deviceTypeChromeos?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_ios WorkspacesDirectory#device_type_ios}
  */
  readonly deviceTypeIos?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_linux WorkspacesDirectory#device_type_linux}
  */
  readonly deviceTypeLinux?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_osx WorkspacesDirectory#device_type_osx}
  */
  readonly deviceTypeOsx?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_web WorkspacesDirectory#device_type_web}
  */
  readonly deviceTypeWeb?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_windows WorkspacesDirectory#device_type_windows}
  */
  readonly deviceTypeWindows?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}
  */
  readonly deviceTypeZeroclient?: string;
}

function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface WorkspacesDirectoryWorkspaceCreationProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#custom_security_group_id WorkspacesDirectory#custom_security_group_id}
  */
  readonly customSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#default_ou WorkspacesDirectory#default_ou}
  */
  readonly defaultOu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_internet_access WorkspacesDirectory#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}
  */
  readonly enableMaintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}
  */
  readonly userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable;
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory}
*/
export class WorkspacesDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_workspaces_directory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesDirectoryConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      self_service_permissions: cdktf.listMapper(workspacesDirectorySelfServicePermissionsToTerraform)(this._selfServicePermissions),
      workspace_access_properties: cdktf.listMapper(workspacesDirectoryWorkspaceAccessPropertiesToTerraform)(this._workspaceAccessProperties),
      workspace_creation_properties: cdktf.listMapper(workspacesDirectoryWorkspaceCreationPropertiesToTerraform)(this._workspaceCreationProperties),
    };
  }
}
