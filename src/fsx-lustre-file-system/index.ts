// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}
  */
  readonly autoImportPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}
  */
  readonly automaticBackupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}
  */
  readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}
  */
  readonly dailyAutomaticBackupStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}
  */
  readonly dataCompressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}
  */
  readonly driveCacheType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#efa_enabled FsxLustreFileSystem#efa_enabled}
  */
  readonly efaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}
  */
  readonly exportPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}
  */
  readonly fileSystemTypeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#final_backup_tags FsxLustreFileSystem#final_backup_tags}
  */
  readonly finalBackupTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#id FsxLustreFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}
  */
  readonly importPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}
  */
  readonly importedFileChunkSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}
  */
  readonly perUnitStorageThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#skip_final_backup FsxLustreFileSystem#skip_final_backup}
  */
  readonly skipFinalBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}
  */
  readonly storageCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}
  */
  readonly weeklyMaintenanceStartTime?: string;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#log_configuration FsxLustreFileSystem#log_configuration}
  */
  readonly logConfiguration?: FsxLustreFileSystemLogConfiguration;
  /**
  * metadata_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#metadata_configuration FsxLustreFileSystem#metadata_configuration}
  */
  readonly metadataConfiguration?: FsxLustreFileSystemMetadataConfiguration;
  /**
  * root_squash_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#root_squash_configuration FsxLustreFileSystem#root_squash_configuration}
  */
  readonly rootSquashConfiguration?: FsxLustreFileSystemRootSquashConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#timeouts FsxLustreFileSystem#timeouts}
  */
  readonly timeouts?: FsxLustreFileSystemTimeouts;
}
export interface FsxLustreFileSystemLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#level FsxLustreFileSystem#level}
  */
  readonly level?: string;
}

export function fsxLustreFileSystemLogConfigurationToTerraform(struct?: FsxLustreFileSystemLogConfigurationOutputReference | FsxLustreFileSystemLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function fsxLustreFileSystemLogConfigurationToHclTerraform(struct?: FsxLustreFileSystemLogConfigurationOutputReference | FsxLustreFileSystemLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxLustreFileSystemLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxLustreFileSystemLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxLustreFileSystemLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._level = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._level = value.level;
    }
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}
export interface FsxLustreFileSystemMetadataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#iops FsxLustreFileSystem#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#mode FsxLustreFileSystem#mode}
  */
  readonly mode?: string;
}

export function fsxLustreFileSystemMetadataConfigurationToTerraform(struct?: FsxLustreFileSystemMetadataConfigurationOutputReference | FsxLustreFileSystemMetadataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function fsxLustreFileSystemMetadataConfigurationToHclTerraform(struct?: FsxLustreFileSystemMetadataConfigurationOutputReference | FsxLustreFileSystemMetadataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxLustreFileSystemMetadataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxLustreFileSystemMetadataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxLustreFileSystemMetadataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iops = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iops = value.iops;
      this._mode = value.mode;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface FsxLustreFileSystemRootSquashConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#no_squash_nids FsxLustreFileSystem#no_squash_nids}
  */
  readonly noSquashNids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#root_squash FsxLustreFileSystem#root_squash}
  */
  readonly rootSquash?: string;
}

export function fsxLustreFileSystemRootSquashConfigurationToTerraform(struct?: FsxLustreFileSystemRootSquashConfigurationOutputReference | FsxLustreFileSystemRootSquashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_squash_nids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noSquashNids),
    root_squash: cdktf.stringToTerraform(struct!.rootSquash),
  }
}


export function fsxLustreFileSystemRootSquashConfigurationToHclTerraform(struct?: FsxLustreFileSystemRootSquashConfigurationOutputReference | FsxLustreFileSystemRootSquashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_squash_nids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noSquashNids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    root_squash: {
      value: cdktf.stringToHclTerraform(struct!.rootSquash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxLustreFileSystemRootSquashConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxLustreFileSystemRootSquashConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSquashNids !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSquashNids = this._noSquashNids;
    }
    if (this._rootSquash !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSquash = this._rootSquash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxLustreFileSystemRootSquashConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSquashNids = undefined;
      this._rootSquash = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSquashNids = value.noSquashNids;
      this._rootSquash = value.rootSquash;
    }
  }

  // no_squash_nids - computed: false, optional: true, required: false
  private _noSquashNids?: string[]; 
  public get noSquashNids() {
    return cdktf.Fn.tolist(this.getListAttribute('no_squash_nids'));
  }
  public set noSquashNids(value: string[]) {
    this._noSquashNids = value;
  }
  public resetNoSquashNids() {
    this._noSquashNids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSquashNidsInput() {
    return this._noSquashNids;
  }

  // root_squash - computed: false, optional: true, required: false
  private _rootSquash?: string; 
  public get rootSquash() {
    return this.getStringAttribute('root_squash');
  }
  public set rootSquash(value: string) {
    this._rootSquash = value;
  }
  public resetRootSquash() {
    this._rootSquash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashInput() {
    return this._rootSquash;
  }
}
export interface FsxLustreFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#create FsxLustreFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#update FsxLustreFileSystem#update}
  */
  readonly update?: string;
}

export function fsxLustreFileSystemTimeoutsToTerraform(struct?: FsxLustreFileSystemTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fsxLustreFileSystemTimeoutsToHclTerraform(struct?: FsxLustreFileSystemTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxLustreFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxLustreFileSystemTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxLustreFileSystemTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system aws_fsx_lustre_file_system}
*/
export class FsxLustreFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_lustre_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FsxLustreFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxLustreFileSystem to import
  * @param importFromId The id of the existing FsxLustreFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxLustreFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_lustre_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/fsx_lustre_file_system aws_fsx_lustre_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxLustreFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: FsxLustreFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_lustre_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoImportPolicy = config.autoImportPolicy;
    this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
    this._backupId = config.backupId;
    this._copyTagsToBackups = config.copyTagsToBackups;
    this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
    this._dataCompressionType = config.dataCompressionType;
    this._deploymentType = config.deploymentType;
    this._driveCacheType = config.driveCacheType;
    this._efaEnabled = config.efaEnabled;
    this._exportPath = config.exportPath;
    this._fileSystemTypeVersion = config.fileSystemTypeVersion;
    this._finalBackupTags = config.finalBackupTags;
    this._id = config.id;
    this._importPath = config.importPath;
    this._importedFileChunkSize = config.importedFileChunkSize;
    this._kmsKeyId = config.kmsKeyId;
    this._perUnitStorageThroughput = config.perUnitStorageThroughput;
    this._securityGroupIds = config.securityGroupIds;
    this._skipFinalBackup = config.skipFinalBackup;
    this._storageCapacity = config.storageCapacity;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
    this._logConfiguration.internalValue = config.logConfiguration;
    this._metadataConfiguration.internalValue = config.metadataConfiguration;
    this._rootSquashConfiguration.internalValue = config.rootSquashConfiguration;
    this._timeouts.internalValue = config.timeouts;
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
    return this._autoImportPolicy;
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
    return this._automaticBackupRetentionDays;
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // copy_tags_to_backups - computed: false, optional: true, required: false
  private _copyTagsToBackups?: boolean | cdktf.IResolvable; 
  public get copyTagsToBackups() {
    return this.getBooleanAttribute('copy_tags_to_backups');
  }
  public set copyTagsToBackups(value: boolean | cdktf.IResolvable) {
    this._copyTagsToBackups = value;
  }
  public resetCopyTagsToBackups() {
    this._copyTagsToBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToBackupsInput() {
    return this._copyTagsToBackups;
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
    return this._dailyAutomaticBackupStartTime;
  }

  // data_compression_type - computed: false, optional: true, required: false
  private _dataCompressionType?: string; 
  public get dataCompressionType() {
    return this.getStringAttribute('data_compression_type');
  }
  public set dataCompressionType(value: string) {
    this._dataCompressionType = value;
  }
  public resetDataCompressionType() {
    this._dataCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCompressionTypeInput() {
    return this._dataCompressionType;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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
  public set driveCacheType(value: string) {
    this._driveCacheType = value;
  }
  public resetDriveCacheType() {
    this._driveCacheType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveCacheTypeInput() {
    return this._driveCacheType;
  }

  // efa_enabled - computed: true, optional: true, required: false
  private _efaEnabled?: boolean | cdktf.IResolvable; 
  public get efaEnabled() {
    return this.getBooleanAttribute('efa_enabled');
  }
  public set efaEnabled(value: boolean | cdktf.IResolvable) {
    this._efaEnabled = value;
  }
  public resetEfaEnabled() {
    this._efaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efaEnabledInput() {
    return this._efaEnabled;
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
    return this._exportPath;
  }

  // file_system_type_version - computed: true, optional: true, required: false
  private _fileSystemTypeVersion?: string; 
  public get fileSystemTypeVersion() {
    return this.getStringAttribute('file_system_type_version');
  }
  public set fileSystemTypeVersion(value: string) {
    this._fileSystemTypeVersion = value;
  }
  public resetFileSystemTypeVersion() {
    this._fileSystemTypeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeVersionInput() {
    return this._fileSystemTypeVersion;
  }

  // final_backup_tags - computed: false, optional: true, required: false
  private _finalBackupTags?: { [key: string]: string }; 
  public get finalBackupTags() {
    return this.getStringMapAttribute('final_backup_tags');
  }
  public set finalBackupTags(value: { [key: string]: string }) {
    this._finalBackupTags = value;
  }
  public resetFinalBackupTags() {
    this._finalBackupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBackupTagsInput() {
    return this._finalBackupTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // import_path - computed: false, optional: true, required: false
  private _importPath?: string; 
  public get importPath() {
    return this.getStringAttribute('import_path');
  }
  public set importPath(value: string) {
    this._importPath = value;
  }
  public resetImportPath() {
    this._importPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPathInput() {
    return this._importPath;
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
    return this._importedFileChunkSize;
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
    return this._kmsKeyId;
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
  public set perUnitStorageThroughput(value: number) {
    this._perUnitStorageThroughput = value;
  }
  public resetPerUnitStorageThroughput() {
    this._perUnitStorageThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitStorageThroughputInput() {
    return this._perUnitStorageThroughput;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // skip_final_backup - computed: false, optional: true, required: false
  private _skipFinalBackup?: boolean | cdktf.IResolvable; 
  public get skipFinalBackup() {
    return this.getBooleanAttribute('skip_final_backup');
  }
  public set skipFinalBackup(value: boolean | cdktf.IResolvable) {
    this._skipFinalBackup = value;
  }
  public resetSkipFinalBackup() {
    this._skipFinalBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalBackupInput() {
    return this._skipFinalBackup;
  }

  // storage_capacity - computed: false, optional: true, required: false
  private _storageCapacity?: number; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  public resetStorageCapacity() {
    this._storageCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
    return this._weeklyMaintenanceStartTime;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new FsxLustreFileSystemLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: FsxLustreFileSystemLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // metadata_configuration - computed: false, optional: true, required: false
  private _metadataConfiguration = new FsxLustreFileSystemMetadataConfigurationOutputReference(this, "metadata_configuration");
  public get metadataConfiguration() {
    return this._metadataConfiguration;
  }
  public putMetadataConfiguration(value: FsxLustreFileSystemMetadataConfiguration) {
    this._metadataConfiguration.internalValue = value;
  }
  public resetMetadataConfiguration() {
    this._metadataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConfigurationInput() {
    return this._metadataConfiguration.internalValue;
  }

  // root_squash_configuration - computed: false, optional: true, required: false
  private _rootSquashConfiguration = new FsxLustreFileSystemRootSquashConfigurationOutputReference(this, "root_squash_configuration");
  public get rootSquashConfiguration() {
    return this._rootSquashConfiguration;
  }
  public putRootSquashConfiguration(value: FsxLustreFileSystemRootSquashConfiguration) {
    this._rootSquashConfiguration.internalValue = value;
  }
  public resetRootSquashConfiguration() {
    this._rootSquashConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashConfigurationInput() {
    return this._rootSquashConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxLustreFileSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxLustreFileSystemTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_import_policy: cdktf.stringToTerraform(this._autoImportPolicy),
      automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
      backup_id: cdktf.stringToTerraform(this._backupId),
      copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
      daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
      data_compression_type: cdktf.stringToTerraform(this._dataCompressionType),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      drive_cache_type: cdktf.stringToTerraform(this._driveCacheType),
      efa_enabled: cdktf.booleanToTerraform(this._efaEnabled),
      export_path: cdktf.stringToTerraform(this._exportPath),
      file_system_type_version: cdktf.stringToTerraform(this._fileSystemTypeVersion),
      final_backup_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._finalBackupTags),
      id: cdktf.stringToTerraform(this._id),
      import_path: cdktf.stringToTerraform(this._importPath),
      imported_file_chunk_size: cdktf.numberToTerraform(this._importedFileChunkSize),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      per_unit_storage_throughput: cdktf.numberToTerraform(this._perUnitStorageThroughput),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      skip_final_backup: cdktf.booleanToTerraform(this._skipFinalBackup),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
      log_configuration: fsxLustreFileSystemLogConfigurationToTerraform(this._logConfiguration.internalValue),
      metadata_configuration: fsxLustreFileSystemMetadataConfigurationToTerraform(this._metadataConfiguration.internalValue),
      root_squash_configuration: fsxLustreFileSystemRootSquashConfigurationToTerraform(this._rootSquashConfiguration.internalValue),
      timeouts: fsxLustreFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_import_policy: {
        value: cdktf.stringToHclTerraform(this._autoImportPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_backup_retention_days: {
        value: cdktf.numberToHclTerraform(this._automaticBackupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_tags_to_backups: {
        value: cdktf.booleanToHclTerraform(this._copyTagsToBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      daily_automatic_backup_start_time: {
        value: cdktf.stringToHclTerraform(this._dailyAutomaticBackupStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_compression_type: {
        value: cdktf.stringToHclTerraform(this._dataCompressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drive_cache_type: {
        value: cdktf.stringToHclTerraform(this._driveCacheType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      efa_enabled: {
        value: cdktf.booleanToHclTerraform(this._efaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_path: {
        value: cdktf.stringToHclTerraform(this._exportPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_type_version: {
        value: cdktf.stringToHclTerraform(this._fileSystemTypeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      final_backup_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._finalBackupTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_path: {
        value: cdktf.stringToHclTerraform(this._importPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      imported_file_chunk_size: {
        value: cdktf.numberToHclTerraform(this._importedFileChunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_unit_storage_throughput: {
        value: cdktf.numberToHclTerraform(this._perUnitStorageThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      skip_final_backup: {
        value: cdktf.booleanToHclTerraform(this._skipFinalBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_capacity: {
        value: cdktf.numberToHclTerraform(this._storageCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      weekly_maintenance_start_time: {
        value: cdktf.stringToHclTerraform(this._weeklyMaintenanceStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_configuration: {
        value: fsxLustreFileSystemLogConfigurationToHclTerraform(this._logConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxLustreFileSystemLogConfigurationList",
      },
      metadata_configuration: {
        value: fsxLustreFileSystemMetadataConfigurationToHclTerraform(this._metadataConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxLustreFileSystemMetadataConfigurationList",
      },
      root_squash_configuration: {
        value: fsxLustreFileSystemRootSquashConfigurationToHclTerraform(this._rootSquashConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxLustreFileSystemRootSquashConfigurationList",
      },
      timeouts: {
        value: fsxLustreFileSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxLustreFileSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
