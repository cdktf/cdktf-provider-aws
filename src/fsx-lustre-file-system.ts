// https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
  readonly autoImportPolicy?: string;
  readonly automaticBackupRetentionDays?: number;
  readonly copyTagsToBackups?: boolean;
  readonly dailyAutomaticBackupStartTime?: string;
  readonly deploymentType?: string;
  readonly driveCacheType?: string;
  readonly exportPath?: string;
  readonly importPath?: string;
  readonly importedFileChunkSize?: number;
  readonly kmsKeyId?: string;
  readonly perUnitStorageThroughput?: number;
  readonly securityGroupIds?: string[];
  readonly storageCapacity: number;
  readonly storageType?: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  readonly weeklyMaintenanceStartTime?: string;
  /** timeouts block */
  readonly timeouts?: FsxLustreFileSystemTimeouts;
}
export interface FsxLustreFileSystemTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function fsxLustreFileSystemTimeoutsToTerraform(struct?: FsxLustreFileSystemTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class FsxLustreFileSystem extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FsxLustreFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_lustre_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoImportPolicy = config.autoImportPolicy;
    this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
    this._copyTagsToBackups = config.copyTagsToBackups;
    this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
    this._deploymentType = config.deploymentType;
    this._driveCacheType = config.driveCacheType;
    this._exportPath = config.exportPath;
    this._importPath = config.importPath;
    this._importedFileChunkSize = config.importedFileChunkSize;
    this._kmsKeyId = config.kmsKeyId;
    this._perUnitStorageThroughput = config.perUnitStorageThroughput;
    this._securityGroupIds = config.securityGroupIds;
    this._storageCapacity = config.storageCapacity;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_import_policy - computed: true, optional: true, required: false
  private _autoImportPolicy?: string;
  public get autoImportPolicy() {
    return this.getStringAttribute('auto_import_policy');
  }
  public set autoImportPolicy(value: string) {
    this._autoImportPolicy = value;
  }
  public resetAutoImportPolicy() {
    this._autoImportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoImportPolicyInput() {
    return this._autoImportPolicy
  }

  // automatic_backup_retention_days - computed: true, optional: true, required: false
  private _automaticBackupRetentionDays?: number;
  public get automaticBackupRetentionDays() {
    return this.getNumberAttribute('automatic_backup_retention_days');
  }
  public set automaticBackupRetentionDays(value: number) {
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

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string;
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string ) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drive_cache_type - computed: false, optional: true, required: false
  private _driveCacheType?: string;
  public get driveCacheType() {
    return this.getStringAttribute('drive_cache_type');
  }
  public set driveCacheType(value: string ) {
    this._driveCacheType = value;
  }
  public resetDriveCacheType() {
    this._driveCacheType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveCacheTypeInput() {
    return this._driveCacheType
  }

  // export_path - computed: true, optional: true, required: false
  private _exportPath?: string;
  public get exportPath() {
    return this.getStringAttribute('export_path');
  }
  public set exportPath(value: string) {
    this._exportPath = value;
  }
  public resetExportPath() {
    this._exportPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPathInput() {
    return this._exportPath
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_path - computed: false, optional: true, required: false
  private _importPath?: string;
  public get importPath() {
    return this.getStringAttribute('import_path');
  }
  public set importPath(value: string ) {
    this._importPath = value;
  }
  public resetImportPath() {
    this._importPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPathInput() {
    return this._importPath
  }

  // imported_file_chunk_size - computed: true, optional: true, required: false
  private _importedFileChunkSize?: number;
  public get importedFileChunkSize() {
    return this.getNumberAttribute('imported_file_chunk_size');
  }
  public set importedFileChunkSize(value: number) {
    this._importedFileChunkSize = value;
  }
  public resetImportedFileChunkSize() {
    this._importedFileChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedFileChunkSizeInput() {
    return this._importedFileChunkSize
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

  // mount_name - computed: true, optional: false, required: false
  public get mountName() {
    return this.getStringAttribute('mount_name');
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // per_unit_storage_throughput - computed: false, optional: true, required: false
  private _perUnitStorageThroughput?: number;
  public get perUnitStorageThroughput() {
    return this.getNumberAttribute('per_unit_storage_throughput');
  }
  public set perUnitStorageThroughput(value: number ) {
    this._perUnitStorageThroughput = value;
  }
  public resetPerUnitStorageThroughput() {
    this._perUnitStorageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitStorageThroughputInput() {
    return this._perUnitStorageThroughput
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

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string;
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string ) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FsxLustreFileSystemTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FsxLustreFileSystemTimeouts ) {
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
      auto_import_policy: cdktf.stringToTerraform(this._autoImportPolicy),
      automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
      copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
      daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      drive_cache_type: cdktf.stringToTerraform(this._driveCacheType),
      export_path: cdktf.stringToTerraform(this._exportPath),
      import_path: cdktf.stringToTerraform(this._importPath),
      imported_file_chunk_size: cdktf.numberToTerraform(this._importedFileChunkSize),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      per_unit_storage_throughput: cdktf.numberToTerraform(this._perUnitStorageThroughput),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
      timeouts: fsxLustreFileSystemTimeoutsToTerraform(this._timeouts),
    };
  }
}
