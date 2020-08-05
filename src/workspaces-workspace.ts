// https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bundle_id": {
        "type": "string",
        "required": true
      },
      "computer_name": {
        "type": "string",
        "computed": true
      },
      "directory_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "computed": true
      },
      "root_volume_encryption_enabled": {
        "type": "bool",
        "optional": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "user_name": {
        "type": "string",
        "required": true
      },
      "user_volume_encryption_enabled": {
        "type": "bool",
        "optional": true
      },
      "volume_encryption_key": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "workspace_properties": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "compute_type_name": {
              "type": "string",
              "optional": true
            },
            "root_volume_size_gib": {
              "type": "number",
              "optional": true
            },
            "running_mode": {
              "type": "string",
              "optional": true
            },
            "running_mode_auto_stop_timeout_in_minutes": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "user_volume_size_gib": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WorkspacesWorkspaceConfig extends TerraformMetaArguments {
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

// Resource

export class WorkspacesWorkspace extends TerraformResource {

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
    return this._bundleId;
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }

  // computer_name - computed: true, optional: false, required: true
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId: string;
  public get directoryId() {
    return this._directoryId;
  }
  public set directoryId(value: string) {
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

  // root_volume_encryption_enabled - computed: false, optional: true, required: false
  private _rootVolumeEncryptionEnabled?: boolean;
  public get rootVolumeEncryptionEnabled() {
    return this._rootVolumeEncryptionEnabled;
  }
  public set rootVolumeEncryptionEnabled(value: boolean | undefined) {
    this._rootVolumeEncryptionEnabled = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName: string;
  public get userName() {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }

  // user_volume_encryption_enabled - computed: false, optional: true, required: false
  private _userVolumeEncryptionEnabled?: boolean;
  public get userVolumeEncryptionEnabled() {
    return this._userVolumeEncryptionEnabled;
  }
  public set userVolumeEncryptionEnabled(value: boolean | undefined) {
    this._userVolumeEncryptionEnabled = value;
  }

  // volume_encryption_key - computed: false, optional: true, required: false
  private _volumeEncryptionKey?: string;
  public get volumeEncryptionKey() {
    return this._volumeEncryptionKey;
  }
  public set volumeEncryptionKey(value: string | undefined) {
    this._volumeEncryptionKey = value;
  }

  // workspace_properties - computed: false, optional: true, required: false
  private _workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties[];
  public get workspaceProperties() {
    return this._workspaceProperties;
  }
  public set workspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties[] | undefined) {
    this._workspaceProperties = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: this._bundleId,
      directory_id: this._directoryId,
      root_volume_encryption_enabled: this._rootVolumeEncryptionEnabled,
      tags: this._tags,
      user_name: this._userName,
      user_volume_encryption_enabled: this._userVolumeEncryptionEnabled,
      volume_encryption_key: this._volumeEncryptionKey,
      workspace_properties: this._workspaceProperties,
    };
  }
}
