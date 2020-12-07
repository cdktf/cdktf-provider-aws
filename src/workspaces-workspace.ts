// https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
  readonly bundleId: string;
  readonly directoryId: string;
  readonly rootVolumeEncryptionEnabled?: boolean;
  readonly tags?: { [key: string]: string };
  readonly userName: string;
  readonly userVolumeEncryptionEnabled?: boolean;
  readonly volumeEncryptionKey?: string;
  /** workspace_properties block */
  readonly workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties[];
}
export interface WorkspacesWorkspaceWorkspaceProperties {
  readonly computeTypeName?: string;
  readonly rootVolumeSizeGib?: number;
  readonly runningMode?: string;
  readonly runningModeAutoStopTimeoutInMinutes?: number;
  readonly userVolumeSizeGib?: number;
}

function workspacesWorkspaceWorkspacePropertiesToTerraform(struct?: WorkspacesWorkspaceWorkspaceProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    compute_type_name: cdktf.stringToTerraform(struct!.computeTypeName),
    root_volume_size_gib: cdktf.numberToTerraform(struct!.rootVolumeSizeGib),
    running_mode: cdktf.stringToTerraform(struct!.runningMode),
    running_mode_auto_stop_timeout_in_minutes: cdktf.numberToTerraform(struct!.runningModeAutoStopTimeoutInMinutes),
    user_volume_size_gib: cdktf.numberToTerraform(struct!.userVolumeSizeGib),
  }
}


// Resource

export class WorkspacesWorkspace extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._userName = config.userName;
    this._userVolumeEncryptionEnabled = config.userVolumeEncryptionEnabled;
    this._volumeEncryptionKey = config.volumeEncryptionKey;
    this._workspaceProperties = config.workspaceProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId: string;
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId
  }

  // computer_name - computed: true, optional: false, required: false
  public get computerName() {
    return this.getStringAttribute('computer_name');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // root_volume_encryption_enabled - computed: false, optional: true, required: false
  private _rootVolumeEncryptionEnabled?: boolean;
  public get rootVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('root_volume_encryption_enabled');
  }
  public set rootVolumeEncryptionEnabled(value: boolean ) {
    this._rootVolumeEncryptionEnabled = value;
  }
  public resetRootVolumeEncryptionEnabled() {
    this._rootVolumeEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeEncryptionEnabledInput() {
    return this._rootVolumeEncryptionEnabled
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // user_name - computed: false, optional: false, required: true
  private _userName: string;
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName
  }

  // user_volume_encryption_enabled - computed: false, optional: true, required: false
  private _userVolumeEncryptionEnabled?: boolean;
  public get userVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('user_volume_encryption_enabled');
  }
  public set userVolumeEncryptionEnabled(value: boolean ) {
    this._userVolumeEncryptionEnabled = value;
  }
  public resetUserVolumeEncryptionEnabled() {
    this._userVolumeEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVolumeEncryptionEnabledInput() {
    return this._userVolumeEncryptionEnabled
  }

  // volume_encryption_key - computed: false, optional: true, required: false
  private _volumeEncryptionKey?: string;
  public get volumeEncryptionKey() {
    return this.getStringAttribute('volume_encryption_key');
  }
  public set volumeEncryptionKey(value: string ) {
    this._volumeEncryptionKey = value;
  }
  public resetVolumeEncryptionKey() {
    this._volumeEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeEncryptionKeyInput() {
    return this._volumeEncryptionKey
  }

  // workspace_properties - computed: false, optional: true, required: false
  private _workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties[];
  public get workspaceProperties() {
    return this.interpolationForAttribute('workspace_properties') as any;
  }
  public set workspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties[] ) {
    this._workspaceProperties = value;
  }
  public resetWorkspaceProperties() {
    this._workspaceProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePropertiesInput() {
    return this._workspaceProperties
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
      user_name: cdktf.stringToTerraform(this._userName),
      user_volume_encryption_enabled: cdktf.booleanToTerraform(this._userVolumeEncryptionEnabled),
      volume_encryption_key: cdktf.stringToTerraform(this._volumeEncryptionKey),
      workspace_properties: cdktf.listMapper(workspacesWorkspaceWorkspacePropertiesToTerraform)(this._workspaceProperties),
    };
  }
}
