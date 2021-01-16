// https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FsxLustreFileSystemConfig extends TerraformMetaArguments {
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

// Resource

export class FsxLustreFileSystem extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_import_policy - computed: true, optional: true, required: false
  private _autoImportPolicy?: string;
  public get autoImportPolicy() {
    return this._autoImportPolicy ?? this.getStringAttribute('auto_import_policy');
  }
  public set autoImportPolicy(value: string | undefined) {
    this._autoImportPolicy = value;
  }

  // automatic_backup_retention_days - computed: true, optional: true, required: false
  private _automaticBackupRetentionDays?: number;
  public get automaticBackupRetentionDays() {
    return this._automaticBackupRetentionDays ?? this.getNumberAttribute('automatic_backup_retention_days');
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

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string;
  public get deploymentType() {
    return this._deploymentType;
  }
  public set deploymentType(value: string | undefined) {
    this._deploymentType = value;
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drive_cache_type - computed: false, optional: true, required: false
  private _driveCacheType?: string;
  public get driveCacheType() {
    return this._driveCacheType;
  }
  public set driveCacheType(value: string | undefined) {
    this._driveCacheType = value;
  }

  // export_path - computed: true, optional: true, required: false
  private _exportPath?: string;
  public get exportPath() {
    return this._exportPath ?? this.getStringAttribute('export_path');
  }
  public set exportPath(value: string | undefined) {
    this._exportPath = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // import_path - computed: false, optional: true, required: false
  private _importPath?: string;
  public get importPath() {
    return this._importPath;
  }
  public set importPath(value: string | undefined) {
    this._importPath = value;
  }

  // imported_file_chunk_size - computed: true, optional: true, required: false
  private _importedFileChunkSize?: number;
  public get importedFileChunkSize() {
    return this._importedFileChunkSize ?? this.getNumberAttribute('imported_file_chunk_size');
  }
  public set importedFileChunkSize(value: number | undefined) {
    this._importedFileChunkSize = value;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId ?? this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // mount_name - computed: true, optional: false, required: true
  public get mountName() {
    return this.getStringAttribute('mount_name');
  }

  // network_interface_ids - computed: true, optional: false, required: true
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // per_unit_storage_throughput - computed: false, optional: true, required: false
  private _perUnitStorageThroughput?: number;
  public get perUnitStorageThroughput() {
    return this._perUnitStorageThroughput;
  }
  public set perUnitStorageThroughput(value: number | undefined) {
    this._perUnitStorageThroughput = value;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[];
  public get securityGroupIds() {
    return this._securityGroupIds;
  }
  public set securityGroupIds(value: string[] | undefined) {
    this._securityGroupIds = value;
  }

  // storage_capacity - computed: false, optional: false, required: true
  private _storageCapacity: number;
  public get storageCapacity() {
    return this._storageCapacity;
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string;
  public get storageType() {
    return this._storageType;
  }
  public set storageType(value: string | undefined) {
    this._storageType = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FsxLustreFileSystemTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FsxLustreFileSystemTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_import_policy: this._autoImportPolicy,
      automatic_backup_retention_days: this._automaticBackupRetentionDays,
      copy_tags_to_backups: this._copyTagsToBackups,
      daily_automatic_backup_start_time: this._dailyAutomaticBackupStartTime,
      deployment_type: this._deploymentType,
      drive_cache_type: this._driveCacheType,
      export_path: this._exportPath,
      import_path: this._importPath,
      imported_file_chunk_size: this._importedFileChunkSize,
      kms_key_id: this._kmsKeyId,
      per_unit_storage_throughput: this._perUnitStorageThroughput,
      security_group_ids: this._securityGroupIds,
      storage_capacity: this._storageCapacity,
      storage_type: this._storageType,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      weekly_maintenance_start_time: this._weeklyMaintenanceStartTime,
      timeouts: this._timeouts,
    };
  }
}
