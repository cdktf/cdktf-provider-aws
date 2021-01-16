// https://www.terraform.io/docs/providers/aws/r/data_aws_workspaces_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsWorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
  readonly directoryId?: string;
  readonly tags?: { [key: string]: string };
  readonly userName?: string;
  readonly workspaceId?: string;
}
export class DataAwsWorkspacesWorkspaceWorkspaceProperties extends cdktf.ComplexComputedList {

  // compute_type_name - computed: true, optional: false, required: false
  public get computeTypeName() {
    return this.getStringAttribute('compute_type_name');
  }

  // root_volume_size_gib - computed: true, optional: false, required: false
  public get rootVolumeSizeGib() {
    return this.getNumberAttribute('root_volume_size_gib');
  }

  // running_mode - computed: true, optional: false, required: false
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }

  // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: false, required: false
  public get runningModeAutoStopTimeoutInMinutes() {
    return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
  }

  // user_volume_size_gib - computed: true, optional: false, required: false
  public get userVolumeSizeGib() {
    return this.getNumberAttribute('user_volume_size_gib');
  }
}

// Resource

export class DataAwsWorkspacesWorkspace extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsWorkspacesWorkspaceConfig = {}) {
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
    this._directoryId = config.directoryId;
    this._tags = config.tags;
    this._userName = config.userName;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // computer_name - computed: true, optional: false, required: false
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }

  // directory_id - computed: true, optional: true, required: false
  private _directoryId?: string;
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
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

  // root_volume_encryption_enabled - computed: true, optional: false, required: false
  public get rootVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('root_volume_encryption_enabled');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string;
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName
  }

  // user_volume_encryption_enabled - computed: true, optional: false, required: false
  public get userVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('user_volume_encryption_enabled');
  }

  // volume_encryption_key - computed: true, optional: false, required: false
  public get volumeEncryptionKey() {
    return this.getStringAttribute('volume_encryption_key');
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string;
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId
  }

  // workspace_properties - computed: true, optional: false, required: false
  public workspaceProperties(index: string) {
    return new DataAwsWorkspacesWorkspaceWorkspaceProperties(this, 'workspace_properties', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_name: cdktf.stringToTerraform(this._userName),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }
}
