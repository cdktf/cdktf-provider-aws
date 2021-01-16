// https://www.terraform.io/docs/providers/aws/r/data_aws_workspaces_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsWorkspacesWorkspaceConfig extends TerraformMetaArguments {
  readonly directoryId?: string;
  readonly tags?: { [key: string]: string };
  readonly userName?: string;
  readonly workspaceId?: string;
}
export class DataAwsWorkspacesWorkspaceWorkspaceProperties extends ComplexComputedList {

  // compute_type_name - computed: true, optional: false, required: true
  public get computeTypeName() {
    return this.getStringAttribute('compute_type_name');
  }

  // root_volume_size_gib - computed: true, optional: false, required: true
  public get rootVolumeSizeGib() {
    return this.getNumberAttribute('root_volume_size_gib');
  }

  // running_mode - computed: true, optional: false, required: true
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }

  // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: false, required: true
  public get runningModeAutoStopTimeoutInMinutes() {
    return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
  }

  // user_volume_size_gib - computed: true, optional: false, required: true
  public get userVolumeSizeGib() {
    return this.getNumberAttribute('user_volume_size_gib');
  }
}

// Resource

export class DataAwsWorkspacesWorkspace extends TerraformDataSource {

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

  // bundle_id - computed: true, optional: false, required: true
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }

  // computer_name - computed: true, optional: false, required: true
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }

  // directory_id - computed: true, optional: true, required: false
  private _directoryId?: string;
  public get directoryId() {
    return this._directoryId ?? this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string | undefined) {
    this._directoryId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // root_volume_encryption_enabled - computed: true, optional: false, required: true
  public get rootVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('root_volume_encryption_enabled');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string;
  public get userName() {
    return this._userName ?? this.getStringAttribute('user_name');
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }

  // user_volume_encryption_enabled - computed: true, optional: false, required: true
  public get userVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('user_volume_encryption_enabled');
  }

  // volume_encryption_key - computed: true, optional: false, required: true
  public get volumeEncryptionKey() {
    return this.getStringAttribute('volume_encryption_key');
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string;
  public get workspaceId() {
    return this._workspaceId ?? this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string | undefined) {
    this._workspaceId = value;
  }

  // workspace_properties - computed: true, optional: false, required: true
  public workspaceProperties(index: string) {
    return new DataAwsWorkspacesWorkspaceWorkspaceProperties(this, 'workspace_properties', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: this._directoryId,
      tags: this._tags,
      user_name: this._userName,
      workspace_id: this._workspaceId,
    };
  }
}
