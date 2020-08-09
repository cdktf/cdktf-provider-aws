// https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "active_directory_id": {
        "type": "string",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "automatic_backup_retention_days": {
        "type": "number",
        "optional": true
      },
      "copy_tags_to_backups": {
        "type": "bool",
        "optional": true
      },
      "daily_automatic_backup_start_time": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_interface_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "skip_final_backup": {
        "type": "bool",
        "optional": true
      },
      "storage_capacity": {
        "type": "number",
        "required": true
      },
      "subnet_ids": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "throughput_capacity": {
        "type": "number",
        "required": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      },
      "weekly_maintenance_start_time": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "self_managed_active_directory": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "dns_ips": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "domain_name": {
              "type": "string",
              "required": true
            },
            "file_system_administrators_group": {
              "type": "string",
              "optional": true
            },
            "organizational_unit_distinguished_name": {
              "type": "string",
              "optional": true
            },
            "password": {
              "type": "string",
              "required": true,
              "sensitive": true
            },
            "username": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FsxWindowsFileSystemConfig extends TerraformMetaArguments {
  readonly activeDirectoryId?: string;
  readonly automaticBackupRetentionDays?: number;
  readonly copyTagsToBackups?: boolean;
  readonly dailyAutomaticBackupStartTime?: string;
  readonly kmsKeyId?: string;
  readonly securityGroupIds?: string[];
  readonly skipFinalBackup?: boolean;
  readonly storageCapacity: number;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  readonly throughputCapacity: number;
  readonly weeklyMaintenanceStartTime?: string;
  /** self_managed_active_directory block */
  readonly selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory[];
  /** timeouts block */
  readonly timeouts?: FsxWindowsFileSystemTimeouts;
}
export interface FsxWindowsFileSystemSelfManagedActiveDirectory {
  readonly dnsIps: string[];
  readonly domainName: string;
  readonly fileSystemAdministratorsGroup?: string;
  readonly organizationalUnitDistinguishedName?: string;
  readonly password: string;
  readonly username: string;
}
export interface FsxWindowsFileSystemTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class FsxWindowsFileSystem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FsxWindowsFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_windows_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activeDirectoryId = config.activeDirectoryId;
    this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
    this._copyTagsToBackups = config.copyTagsToBackups;
    this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
    this._kmsKeyId = config.kmsKeyId;
    this._securityGroupIds = config.securityGroupIds;
    this._skipFinalBackup = config.skipFinalBackup;
    this._storageCapacity = config.storageCapacity;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._throughputCapacity = config.throughputCapacity;
    this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
    this._selfManagedActiveDirectory = config.selfManagedActiveDirectory;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_id - computed: false, optional: true, required: false
  private _activeDirectoryId?: string;
  public get activeDirectoryId() {
    return this._activeDirectoryId;
  }
  public set activeDirectoryId(value: string | undefined) {
    this._activeDirectoryId = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_backup_retention_days - computed: false, optional: true, required: false
  private _automaticBackupRetentionDays?: number;
  public get automaticBackupRetentionDays() {
    return this._automaticBackupRetentionDays;
  }
  public set automaticBackupRetentionDays(value: number | undefined) {
    this._automaticBackupRetentionDays = value;
  }

  // copy_tags_to_backups - computed: false, optional: true, required: false
  private _copyTagsToBackups?: boolean;
  public get copyTagsToBackups() {
    return this._copyTagsToBackups;
  }
  public set copyTagsToBackups(value: boolean | undefined) {
    this._copyTagsToBackups = value;
  }

  // daily_automatic_backup_start_time - computed: true, optional: true, required: false
  private _dailyAutomaticBackupStartTime?: string;
  public get dailyAutomaticBackupStartTime() {
    return this._dailyAutomaticBackupStartTime ?? this.getStringAttribute('daily_automatic_backup_start_time');
  }
  public set dailyAutomaticBackupStartTime(value: string | undefined) {
    this._dailyAutomaticBackupStartTime = value;
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // network_interface_ids - computed: true, optional: false, required: true
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds;
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // skip_final_backup - computed: false, optional: true, required: false
  private _skipFinalBackup?: boolean;
  public get skipFinalBackup() {
    return this._skipFinalBackup;
  }
  public set skipFinalBackup(value: boolean | undefined) {
    this._skipFinalBackup = value;
  }

  // storage_capacity - computed: false, optional: false, required: true
  private _storageCapacity: number;
  public get storageCapacity() {
    return this._storageCapacity;
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
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

  // throughput_capacity - computed: false, optional: false, required: true
  private _throughputCapacity: number;
  public get throughputCapacity() {
    return this._throughputCapacity;
  }
  public set throughputCapacity(value: number) {
    this._throughputCapacity = value;
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // weekly_maintenance_start_time - computed: true, optional: true, required: false
  private _weeklyMaintenanceStartTime?: string;
  public get weeklyMaintenanceStartTime() {
    return this._weeklyMaintenanceStartTime ?? this.getStringAttribute('weekly_maintenance_start_time');
  }
  public set weeklyMaintenanceStartTime(value: string | undefined) {
    this._weeklyMaintenanceStartTime = value;
  }

  // self_managed_active_directory - computed: false, optional: true, required: false
  private _selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory[];
  public get selfManagedActiveDirectory() {
    return this._selfManagedActiveDirectory;
  }
  public set selfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory[] | undefined) {
    this._selfManagedActiveDirectory = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FsxWindowsFileSystemTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FsxWindowsFileSystemTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      active_directory_id: this._activeDirectoryId,
      automatic_backup_retention_days: this._automaticBackupRetentionDays,
      copy_tags_to_backups: this._copyTagsToBackups,
      daily_automatic_backup_start_time: this._dailyAutomaticBackupStartTime,
      kms_key_id: this._kmsKeyId,
      security_group_ids: this._securityGroupIds,
      skip_final_backup: this._skipFinalBackup,
      storage_capacity: this._storageCapacity,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      throughput_capacity: this._throughputCapacity,
      weekly_maintenance_start_time: this._weeklyMaintenanceStartTime,
      self_managed_active_directory: this._selfManagedActiveDirectory,
      timeouts: this._timeouts,
    };
  }
}
