// https://www.terraform.io/docs/providers/aws/d/workspaces_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsWorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory#directory_id DataAwsWorkspacesDirectory#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory#id DataAwsWorkspacesDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory#tags DataAwsWorkspacesDirectory#tags}
  */
  readonly tags?: { [key: string]: string };
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory aws_workspaces_directory}
*/
export class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspaces_directory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory aws_workspaces_directory} Data Source
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
        providerVersion: '4.57.0',
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

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
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
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
