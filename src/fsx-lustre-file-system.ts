// https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
  readonly exportPath?: string;
  readonly importPath?: string;
  readonly importedFileChunkSize?: number;
  readonly securityGroupIds?: string[];
  readonly storageCapacity: number;
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
    this._exportPath = config.exportPath;
    this._importPath = config.importPath;
    this._importedFileChunkSize = config.importedFileChunkSize;
    this._securityGroupIds = config.securityGroupIds;
    this._storageCapacity = config.storageCapacity;
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

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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
      export_path: cdktf.stringToTerraform(this._exportPath),
      import_path: cdktf.stringToTerraform(this._importPath),
      imported_file_chunk_size: cdktf.numberToTerraform(this._importedFileChunkSize),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
      timeouts: fsxLustreFileSystemTimeoutsToTerraform(this._timeouts),
    };
  }
}
