// https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "dns_name": {
        "type": "string",
        "computed": true
      },
      "export_path": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "import_path": {
        "type": "string",
        "optional": true
      },
      "imported_file_chunk_size": {
        "type": "number",
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

export interface FsxLustreFileSystemConfig extends TerraformMetaArguments {
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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dns_name - computed: true, optional: false, required: true
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      export_path: this._exportPath,
      import_path: this._importPath,
      imported_file_chunk_size: this._importedFileChunkSize,
      security_group_ids: this._securityGroupIds,
      storage_capacity: this._storageCapacity,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      weekly_maintenance_start_time: this._weeklyMaintenanceStartTime,
      timeouts: this._timeouts,
    };
  }
}
