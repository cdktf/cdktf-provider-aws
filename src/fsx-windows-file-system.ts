// https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html
// generated from terraform resource schema

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
    return this.getStringAttribute('active_directory_id');
  }
  public set activeDirectoryId(value: string ) {
    this._activeDirectoryId = value;
  }
  public resetActiveDirectoryId() {
    this._activeDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryIdInput() {
    return this._activeDirectoryId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_backup_retention_days - computed: false, optional: true, required: false
  private _automaticBackupRetentionDays?: number;
  public get automaticBackupRetentionDays() {
    return this.getNumberAttribute('automatic_backup_retention_days');
  }
  public set automaticBackupRetentionDays(value: number ) {
    this._automaticBackupRetentionDays = value;
  }
  public resetAutomaticBackupRetentionDays() {
    this._automaticBackupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticBackupRetentionDaysInput() {
    return this._automaticBackupRetentionDays
  }

  // copy_tags_to_backups - computed: false, optional: true, required: false
  private _copyTagsToBackups?: boolean;
  public get copyTagsToBackups() {
    return this.getBooleanAttribute('copy_tags_to_backups');
  }
  public set copyTagsToBackups(value: boolean ) {
    this._copyTagsToBackups = value;
  }
  public resetCopyTagsToBackups() {
    this._copyTagsToBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToBackupsInput() {
    return this._copyTagsToBackups
  }

  // daily_automatic_backup_start_time - computed: true, optional: true, required: false
  private _dailyAutomaticBackupStartTime?: string;
  public get dailyAutomaticBackupStartTime() {
    return this.getStringAttribute('daily_automatic_backup_start_time');
  }
  public set dailyAutomaticBackupStartTime(value: string) {
    this._dailyAutomaticBackupStartTime = value;
  }
  public resetDailyAutomaticBackupStartTime() {
    this._dailyAutomaticBackupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyAutomaticBackupStartTimeInput() {
    return this._dailyAutomaticBackupStartTime
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] ) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // skip_final_backup - computed: false, optional: true, required: false
  private _skipFinalBackup?: boolean;
  public get skipFinalBackup() {
    return this.getBooleanAttribute('skip_final_backup');
  }
  public set skipFinalBackup(value: boolean ) {
    this._skipFinalBackup = value;
  }
  public resetSkipFinalBackup() {
    this._skipFinalBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalBackupInput() {
    return this._skipFinalBackup
  }

  // storage_capacity - computed: false, optional: false, required: true
  private _storageCapacity: number;
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
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

  // throughput_capacity - computed: false, optional: false, required: true
  private _throughputCapacity: number;
  public get throughputCapacity() {
    return this.getNumberAttribute('throughput_capacity');
  }
  public set throughputCapacity(value: number) {
    this._throughputCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputCapacityInput() {
    return this._throughputCapacity
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // weekly_maintenance_start_time - computed: true, optional: true, required: false
  private _weeklyMaintenanceStartTime?: string;
  public get weeklyMaintenanceStartTime() {
    return this.getStringAttribute('weekly_maintenance_start_time');
  }
  public set weeklyMaintenanceStartTime(value: string) {
    this._weeklyMaintenanceStartTime = value;
  }
  public resetWeeklyMaintenanceStartTime() {
    this._weeklyMaintenanceStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceStartTimeInput() {
    return this._weeklyMaintenanceStartTime
  }

  // self_managed_active_directory - computed: false, optional: true, required: false
  private _selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory[];
  public get selfManagedActiveDirectory() {
    return this.interpolationForAttribute('self_managed_active_directory') as any;
  }
  public set selfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory[] ) {
    this._selfManagedActiveDirectory = value;
  }
  public resetSelfManagedActiveDirectory() {
    this._selfManagedActiveDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedActiveDirectoryInput() {
    return this._selfManagedActiveDirectory
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FsxWindowsFileSystemTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FsxWindowsFileSystemTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
