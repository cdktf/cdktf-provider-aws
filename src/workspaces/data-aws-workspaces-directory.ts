// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WorkSpaces
*/
export interface DataAwsWorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#directory_id DataAwsWorkspacesDirectory#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#tags DataAwsWorkspacesDirectory#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsWorkspacesDirectorySelfServicePermissions extends cdktf.ComplexComputedList {

  // change_compute_type - computed: true, optional: false, required: false
  public get changeComputeType() {
    return this.getBooleanAttribute('change_compute_type') as any;
  }

  // increase_volume_size - computed: true, optional: false, required: false
  public get increaseVolumeSize() {
    return this.getBooleanAttribute('increase_volume_size') as any;
  }

  // rebuild_workspace - computed: true, optional: false, required: false
  public get rebuildWorkspace() {
    return this.getBooleanAttribute('rebuild_workspace') as any;
  }

  // restart_workspace - computed: true, optional: false, required: false
  public get restartWorkspace() {
    return this.getBooleanAttribute('restart_workspace') as any;
  }

  // switch_running_mode - computed: true, optional: false, required: false
  public get switchRunningMode() {
    return this.getBooleanAttribute('switch_running_mode') as any;
  }
}
export class DataAwsWorkspacesDirectoryWorkspaceAccessProperties extends cdktf.ComplexComputedList {

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
export class DataAwsWorkspacesDirectoryWorkspaceCreationProperties extends cdktf.ComplexComputedList {

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
    return this.getBooleanAttribute('enable_internet_access') as any;
  }

  // enable_maintenance_mode - computed: true, optional: false, required: false
  public get enableMaintenanceMode() {
    return this.getBooleanAttribute('enable_maintenance_mode') as any;
  }

  // user_enabled_as_local_administrator - computed: true, optional: false, required: false
  public get userEnabledAsLocalAdministrator() {
    return this.getBooleanAttribute('user_enabled_as_local_administrator') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory}
*/
export class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_workspaces_directory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsWorkspacesDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsWorkspacesDirectoryConfig) {
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
    this._tags = config.tags;
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

  // ip_group_ids - computed: true, optional: false, required: false
  public get ipGroupIds() {
    return this.getListAttribute('ip_group_ids');
  }

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // self_service_permissions - computed: true, optional: false, required: false
  public selfServicePermissions(index: string) {
    return new DataAwsWorkspacesDirectorySelfServicePermissions(this, 'self_service_permissions', index);
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // workspace_access_properties - computed: true, optional: false, required: false
  public workspaceAccessProperties(index: string) {
    return new DataAwsWorkspacesDirectoryWorkspaceAccessProperties(this, 'workspace_access_properties', index);
  }

  // workspace_creation_properties - computed: true, optional: false, required: false
  public workspaceCreationProperties(index: string) {
    return new DataAwsWorkspacesDirectoryWorkspaceCreationProperties(this, 'workspace_creation_properties', index);
  }

  // workspace_security_group_id - computed: true, optional: false, required: false
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
