// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WorkSpaces
*/
export interface WorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#bundle_id WorkspacesWorkspace#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#directory_id WorkspacesWorkspace#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}
  */
  readonly rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags WorkspacesWorkspace#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags_all WorkspacesWorkspace#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_name WorkspacesWorkspace#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}
  */
  readonly userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}
  */
  readonly volumeEncryptionKey?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#timeouts WorkspacesWorkspace#timeouts}
  */
  readonly timeouts?: WorkspacesWorkspaceTimeouts;
  /**
  * workspace_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#workspace_properties WorkspacesWorkspace#workspace_properties}
  */
  readonly workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties;
}
export interface WorkspacesWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#create WorkspacesWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#delete WorkspacesWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#update WorkspacesWorkspace#update}
  */
  readonly update?: string;
}

export function workspacesWorkspaceTimeoutsToTerraform(struct?: WorkspacesWorkspaceTimeoutsOutputReference | WorkspacesWorkspaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class WorkspacesWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WorkspacesWorkspaceTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspaceTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface WorkspacesWorkspaceWorkspaceProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#compute_type_name WorkspacesWorkspace#compute_type_name}
  */
  readonly computeTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}
  */
  readonly rootVolumeSizeGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode WorkspacesWorkspace#running_mode}
  */
  readonly runningMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}
  */
  readonly runningModeAutoStopTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}
  */
  readonly userVolumeSizeGib?: number;
}

export function workspacesWorkspaceWorkspacePropertiesToTerraform(struct?: WorkspacesWorkspaceWorkspacePropertiesOutputReference | WorkspacesWorkspaceWorkspaceProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_type_name: cdktf.stringToTerraform(struct!.computeTypeName),
    root_volume_size_gib: cdktf.numberToTerraform(struct!.rootVolumeSizeGib),
    running_mode: cdktf.stringToTerraform(struct!.runningMode),
    running_mode_auto_stop_timeout_in_minutes: cdktf.numberToTerraform(struct!.runningModeAutoStopTimeoutInMinutes),
    user_volume_size_gib: cdktf.numberToTerraform(struct!.userVolumeSizeGib),
  }
}

export class WorkspacesWorkspaceWorkspacePropertiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): WorkspacesWorkspaceWorkspaceProperties | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._computeTypeName) {
      hasAnyValues = true;
      internalValueResult.computeTypeName = this._computeTypeName;
    }
    if (this._rootVolumeSizeGib) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSizeGib = this._rootVolumeSizeGib;
    }
    if (this._runningMode) {
      hasAnyValues = true;
      internalValueResult.runningMode = this._runningMode;
    }
    if (this._runningModeAutoStopTimeoutInMinutes) {
      hasAnyValues = true;
      internalValueResult.runningModeAutoStopTimeoutInMinutes = this._runningModeAutoStopTimeoutInMinutes;
    }
    if (this._userVolumeSizeGib) {
      hasAnyValues = true;
      internalValueResult.userVolumeSizeGib = this._userVolumeSizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspaceWorkspaceProperties | undefined) {
    if (value === undefined) {
      this._computeTypeName = undefined;
      this._rootVolumeSizeGib = undefined;
      this._runningMode = undefined;
      this._runningModeAutoStopTimeoutInMinutes = undefined;
      this._userVolumeSizeGib = undefined;
    }
    else {
      this._computeTypeName = value.computeTypeName;
      this._rootVolumeSizeGib = value.rootVolumeSizeGib;
      this._runningMode = value.runningMode;
      this._runningModeAutoStopTimeoutInMinutes = value.runningModeAutoStopTimeoutInMinutes;
      this._userVolumeSizeGib = value.userVolumeSizeGib;
    }
  }

  // compute_type_name - computed: false, optional: true, required: false
  private _computeTypeName?: string; 
  public get computeTypeName() {
    return this.getStringAttribute('compute_type_name');
  }
  public set computeTypeName(value: string) {
    this._computeTypeName = value;
  }
  public resetComputeTypeName() {
    this._computeTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeNameInput() {
    return this._computeTypeName;
  }

  // root_volume_size_gib - computed: false, optional: true, required: false
  private _rootVolumeSizeGib?: number; 
  public get rootVolumeSizeGib() {
    return this.getNumberAttribute('root_volume_size_gib');
  }
  public set rootVolumeSizeGib(value: number) {
    this._rootVolumeSizeGib = value;
  }
  public resetRootVolumeSizeGib() {
    this._rootVolumeSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeGibInput() {
    return this._rootVolumeSizeGib;
  }

  // running_mode - computed: false, optional: true, required: false
  private _runningMode?: string; 
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }
  public set runningMode(value: string) {
    this._runningMode = value;
  }
  public resetRunningMode() {
    this._runningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningModeInput() {
    return this._runningMode;
  }

  // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: true, required: false
  private _runningModeAutoStopTimeoutInMinutes?: number; 
  public get runningModeAutoStopTimeoutInMinutes() {
    return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
  }
  public set runningModeAutoStopTimeoutInMinutes(value: number) {
    this._runningModeAutoStopTimeoutInMinutes = value;
  }
  public resetRunningModeAutoStopTimeoutInMinutes() {
    this._runningModeAutoStopTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningModeAutoStopTimeoutInMinutesInput() {
    return this._runningModeAutoStopTimeoutInMinutes;
  }

  // user_volume_size_gib - computed: false, optional: true, required: false
  private _userVolumeSizeGib?: number; 
  public get userVolumeSizeGib() {
    return this.getNumberAttribute('user_volume_size_gib');
  }
  public set userVolumeSizeGib(value: number) {
    this._userVolumeSizeGib = value;
  }
  public resetUserVolumeSizeGib() {
    this._userVolumeSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVolumeSizeGibInput() {
    return this._userVolumeSizeGib;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace}
*/
export class WorkspacesWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_workspaces_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_workspace',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bundleId = config.bundleId;
    this._directoryId = config.directoryId;
    this._rootVolumeEncryptionEnabled = config.rootVolumeEncryptionEnabled;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userName = config.userName;
    this._userVolumeEncryptionEnabled = config.userVolumeEncryptionEnabled;
    this._volumeEncryptionKey = config.volumeEncryptionKey;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceProperties.internalValue = config.workspaceProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // computer_name - computed: true, optional: false, required: false
  public get computerName() {
    return this.getStringAttribute('computer_name');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // root_volume_encryption_enabled - computed: false, optional: true, required: false
  private _rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get rootVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('root_volume_encryption_enabled') as any;
  }
  public set rootVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._rootVolumeEncryptionEnabled = value;
  }
  public resetRootVolumeEncryptionEnabled() {
    this._rootVolumeEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeEncryptionEnabledInput() {
    return this._rootVolumeEncryptionEnabled;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_volume_encryption_enabled - computed: false, optional: true, required: false
  private _userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get userVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('user_volume_encryption_enabled') as any;
  }
  public set userVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._userVolumeEncryptionEnabled = value;
  }
  public resetUserVolumeEncryptionEnabled() {
    this._userVolumeEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVolumeEncryptionEnabledInput() {
    return this._userVolumeEncryptionEnabled;
  }

  // volume_encryption_key - computed: false, optional: true, required: false
  private _volumeEncryptionKey?: string; 
  public get volumeEncryptionKey() {
    return this.getStringAttribute('volume_encryption_key');
  }
  public set volumeEncryptionKey(value: string) {
    this._volumeEncryptionKey = value;
  }
  public resetVolumeEncryptionKey() {
    this._volumeEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeEncryptionKeyInput() {
    return this._volumeEncryptionKey;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkspacesWorkspaceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkspacesWorkspaceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_properties - computed: false, optional: true, required: false
  private _workspaceProperties = new WorkspacesWorkspaceWorkspacePropertiesOutputReference(this as any, "workspace_properties", true);
  public get workspaceProperties() {
    return this._workspaceProperties;
  }
  public putWorkspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties) {
    this._workspaceProperties.internalValue = value;
  }
  public resetWorkspaceProperties() {
    this._workspaceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePropertiesInput() {
    return this._workspaceProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      root_volume_encryption_enabled: cdktf.booleanToTerraform(this._rootVolumeEncryptionEnabled),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      user_name: cdktf.stringToTerraform(this._userName),
      user_volume_encryption_enabled: cdktf.booleanToTerraform(this._userVolumeEncryptionEnabled),
      volume_encryption_key: cdktf.stringToTerraform(this._volumeEncryptionKey),
      timeouts: workspacesWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_properties: workspacesWorkspaceWorkspacePropertiesToTerraform(this._workspaceProperties.internalValue),
    };
  }
}
