// https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WorkspacesDirectoryConfig extends TerraformMetaArguments {
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
export interface WorkspacesDirectoryWorkspaceAccessProperties {
  readonly deviceTypeAndroid?: string;
  readonly deviceTypeChromeos?: string;
  readonly deviceTypeIos?: string;
  readonly deviceTypeOsx?: string;
  readonly deviceTypeWeb?: string;
  readonly deviceTypeWindows?: string;
  readonly deviceTypeZeroclient?: string;
}
export interface WorkspacesDirectoryWorkspaceCreationProperties {
  readonly customSecurityGroupId?: string;
  readonly defaultOu?: string;
  readonly enableInternetAccess?: boolean;
  readonly enableMaintenanceMode?: boolean;
  readonly userEnabledAsLocalAdministrator?: boolean;
}

// Resource

export class WorkspacesDirectory extends TerraformResource {

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

  // ip_group_ids - computed: true, optional: true, required: false
  private _ipGroupIds?: string[];
  public get ipGroupIds() {
    return this._ipGroupIds ?? this.getListAttribute('ip_group_ids');
  }
  public set ipGroupIds(value: string[] | undefined) {
    this._ipGroupIds = value;
  }

  // registration_code - computed: true, optional: false, required: true
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds ?? this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // workspace_security_group_id - computed: true, optional: false, required: true
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // self_service_permissions - computed: false, optional: true, required: false
  private _selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
  public get selfServicePermissions() {
    return this._selfServicePermissions;
  }
  public set selfServicePermissions(value: WorkspacesDirectorySelfServicePermissions[] | undefined) {
    this._selfServicePermissions = value;
  }

  // workspace_access_properties - computed: false, optional: true, required: false
  private _workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties[];
  public get workspaceAccessProperties() {
    return this._workspaceAccessProperties;
  }
  public set workspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties[] | undefined) {
    this._workspaceAccessProperties = value;
  }

  // workspace_creation_properties - computed: false, optional: true, required: false
  private _workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties[];
  public get workspaceCreationProperties() {
    return this._workspaceCreationProperties;
  }
  public set workspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties[] | undefined) {
    this._workspaceCreationProperties = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: this._directoryId,
      ip_group_ids: this._ipGroupIds,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      self_service_permissions: this._selfServicePermissions,
      workspace_access_properties: this._workspaceAccessProperties,
      workspace_creation_properties: this._workspaceCreationProperties,
    };
  }
}
