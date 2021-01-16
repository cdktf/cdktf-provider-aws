// https://www.terraform.io/docs/providers/aws/r/data_aws_workspaces_directory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsWorkspacesDirectoryConfig extends TerraformMetaArguments {
  readonly directoryId: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsWorkspacesDirectorySelfServicePermissions extends ComplexComputedList {

  // change_compute_type - computed: true, optional: false, required: true
  public get changeComputeType() {
    return this.getBooleanAttribute('change_compute_type');
  }

  // increase_volume_size - computed: true, optional: false, required: true
  public get increaseVolumeSize() {
    return this.getBooleanAttribute('increase_volume_size');
  }

  // rebuild_workspace - computed: true, optional: false, required: true
  public get rebuildWorkspace() {
    return this.getBooleanAttribute('rebuild_workspace');
  }

  // restart_workspace - computed: true, optional: false, required: true
  public get restartWorkspace() {
    return this.getBooleanAttribute('restart_workspace');
  }

  // switch_running_mode - computed: true, optional: false, required: true
  public get switchRunningMode() {
    return this.getBooleanAttribute('switch_running_mode');
  }
}
export class DataAwsWorkspacesDirectoryWorkspaceAccessProperties extends ComplexComputedList {

  // device_type_android - computed: true, optional: false, required: true
  public get deviceTypeAndroid() {
    return this.getStringAttribute('device_type_android');
  }

  // device_type_chromeos - computed: true, optional: false, required: true
  public get deviceTypeChromeos() {
    return this.getStringAttribute('device_type_chromeos');
  }

  // device_type_ios - computed: true, optional: false, required: true
  public get deviceTypeIos() {
    return this.getStringAttribute('device_type_ios');
  }

  // device_type_osx - computed: true, optional: false, required: true
  public get deviceTypeOsx() {
    return this.getStringAttribute('device_type_osx');
  }

  // device_type_web - computed: true, optional: false, required: true
  public get deviceTypeWeb() {
    return this.getStringAttribute('device_type_web');
  }

  // device_type_windows - computed: true, optional: false, required: true
  public get deviceTypeWindows() {
    return this.getStringAttribute('device_type_windows');
  }

  // device_type_zeroclient - computed: true, optional: false, required: true
  public get deviceTypeZeroclient() {
    return this.getStringAttribute('device_type_zeroclient');
  }
}
export class DataAwsWorkspacesDirectoryWorkspaceCreationProperties extends ComplexComputedList {

  // custom_security_group_id - computed: true, optional: false, required: true
  public get customSecurityGroupId() {
    return this.getStringAttribute('custom_security_group_id');
  }

  // default_ou - computed: true, optional: false, required: true
  public get defaultOu() {
    return this.getStringAttribute('default_ou');
  }

  // enable_internet_access - computed: true, optional: false, required: true
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }

  // enable_maintenance_mode - computed: true, optional: false, required: true
  public get enableMaintenanceMode() {
    return this.getBooleanAttribute('enable_maintenance_mode');
  }

  // user_enabled_as_local_administrator - computed: true, optional: false, required: true
  public get userEnabledAsLocalAdministrator() {
    return this.getBooleanAttribute('user_enabled_as_local_administrator');
  }
}

// Resource

export class DataAwsWorkspacesDirectory extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // alias - computed: true, optional: false, required: true
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // customer_user_name - computed: true, optional: false, required: true
  public get customerUserName() {
    return this.getStringAttribute('customer_user_name');
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId: string;
  public get directoryId() {
    return this._directoryId;
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }

  // directory_name - computed: true, optional: false, required: true
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // directory_type - computed: true, optional: false, required: true
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }

  // dns_ip_addresses - computed: true, optional: false, required: true
  public get dnsIpAddresses() {
    return this.getListAttribute('dns_ip_addresses');
  }

  // iam_role_id - computed: true, optional: false, required: true
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_group_ids - computed: true, optional: false, required: true
  public get ipGroupIds() {
    return this.getListAttribute('ip_group_ids');
  }

  // registration_code - computed: true, optional: false, required: true
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // self_service_permissions - computed: true, optional: false, required: true
  public selfServicePermissions(index: string) {
    return new DataAwsWorkspacesDirectorySelfServicePermissions(this, 'self_service_permissions', index);
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // workspace_access_properties - computed: true, optional: false, required: true
  public workspaceAccessProperties(index: string) {
    return new DataAwsWorkspacesDirectoryWorkspaceAccessProperties(this, 'workspace_access_properties', index);
  }

  // workspace_creation_properties - computed: true, optional: false, required: true
  public workspaceCreationProperties(index: string) {
    return new DataAwsWorkspacesDirectoryWorkspaceCreationProperties(this, 'workspace_creation_properties', index);
  }

  // workspace_security_group_id - computed: true, optional: false, required: true
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: this._directoryId,
      tags: this._tags,
    };
  }
}
