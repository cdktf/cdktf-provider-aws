// https://www.terraform.io/docs/providers/aws/r/fsx_file_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxFileCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}
  */
  readonly copyTagsToDataRepositoryAssociations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}
  */
  readonly fileCacheType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}
  */
  readonly fileCacheTypeVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}
  */
  readonly storageCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * data_repository_association block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_association FsxFileCache#data_repository_association}
  */
  readonly dataRepositoryAssociation?: FsxFileCacheDataRepositoryAssociation[] | cdktf.IResolvable;
  /**
  * lustre_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#lustre_configuration FsxFileCache#lustre_configuration}
  */
  readonly lustreConfiguration?: FsxFileCacheLustreConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#timeouts FsxFileCache#timeouts}
  */
  readonly timeouts?: FsxFileCacheTimeouts;
}
export interface FsxFileCacheDataRepositoryAssociationNfs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#dns_ips FsxFileCache#dns_ips}
  */
  readonly dnsIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#version FsxFileCache#version}
  */
  readonly version: string;
}

export function fsxFileCacheDataRepositoryAssociationNfsToTerraform(struct?: FsxFileCacheDataRepositoryAssociationNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsIps),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class FsxFileCacheDataRepositoryAssociationNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxFileCacheDataRepositoryAssociationNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIps = this._dnsIps;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxFileCacheDataRepositoryAssociationNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsIps = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsIps = value.dnsIps;
      this._version = value.version;
    }
  }

  // dns_ips - computed: false, optional: true, required: false
  private _dnsIps?: string[]; 
  public get dnsIps() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_ips'));
  }
  public set dnsIps(value: string[]) {
    this._dnsIps = value;
  }
  public resetDnsIps() {
    this._dnsIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpsInput() {
    return this._dnsIps;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class FsxFileCacheDataRepositoryAssociationNfsList extends cdktf.ComplexList {
  public internalValue? : FsxFileCacheDataRepositoryAssociationNfs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxFileCacheDataRepositoryAssociationNfsOutputReference {
    return new FsxFileCacheDataRepositoryAssociationNfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxFileCacheDataRepositoryAssociation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}
  */
  readonly dataRepositoryPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}
  */
  readonly dataRepositorySubdirectories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}
  */
  readonly fileCachePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * nfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#nfs FsxFileCache#nfs}
  */
  readonly nfs?: FsxFileCacheDataRepositoryAssociationNfs[] | cdktf.IResolvable;
}

export function fsxFileCacheDataRepositoryAssociationToTerraform(struct?: FsxFileCacheDataRepositoryAssociation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_repository_path: cdktf.stringToTerraform(struct!.dataRepositoryPath),
    data_repository_subdirectories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataRepositorySubdirectories),
    file_cache_path: cdktf.stringToTerraform(struct!.fileCachePath),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    nfs: cdktf.listMapper(fsxFileCacheDataRepositoryAssociationNfsToTerraform, true)(struct!.nfs),
  }
}

export class FsxFileCacheDataRepositoryAssociationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxFileCacheDataRepositoryAssociation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRepositoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRepositoryPath = this._dataRepositoryPath;
    }
    if (this._dataRepositorySubdirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRepositorySubdirectories = this._dataRepositorySubdirectories;
    }
    if (this._fileCachePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCachePath = this._fileCachePath;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxFileCacheDataRepositoryAssociation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataRepositoryPath = undefined;
      this._dataRepositorySubdirectories = undefined;
      this._fileCachePath = undefined;
      this._tags = undefined;
      this._nfs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataRepositoryPath = value.dataRepositoryPath;
      this._dataRepositorySubdirectories = value.dataRepositorySubdirectories;
      this._fileCachePath = value.fileCachePath;
      this._tags = value.tags;
      this._nfs.internalValue = value.nfs;
    }
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // data_repository_path - computed: false, optional: false, required: true
  private _dataRepositoryPath?: string; 
  public get dataRepositoryPath() {
    return this.getStringAttribute('data_repository_path');
  }
  public set dataRepositoryPath(value: string) {
    this._dataRepositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRepositoryPathInput() {
    return this._dataRepositoryPath;
  }

  // data_repository_subdirectories - computed: false, optional: true, required: false
  private _dataRepositorySubdirectories?: string[]; 
  public get dataRepositorySubdirectories() {
    return cdktf.Fn.tolist(this.getListAttribute('data_repository_subdirectories'));
  }
  public set dataRepositorySubdirectories(value: string[]) {
    this._dataRepositorySubdirectories = value;
  }
  public resetDataRepositorySubdirectories() {
    this._dataRepositorySubdirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRepositorySubdirectoriesInput() {
    return this._dataRepositorySubdirectories;
  }

  // file_cache_id - computed: true, optional: false, required: false
  public get fileCacheId() {
    return this.getStringAttribute('file_cache_id');
  }

  // file_cache_path - computed: false, optional: false, required: true
  private _fileCachePath?: string; 
  public get fileCachePath() {
    return this.getStringAttribute('file_cache_path');
  }
  public set fileCachePath(value: string) {
    this._fileCachePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCachePathInput() {
    return this._fileCachePath;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }

  // imported_file_chunk_size - computed: true, optional: false, required: false
  public get importedFileChunkSize() {
    return this.getNumberAttribute('imported_file_chunk_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // tags - computed: true, optional: true, required: false
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

  // nfs - computed: false, optional: true, required: false
  private _nfs = new FsxFileCacheDataRepositoryAssociationNfsList(this, "nfs", true);
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: FsxFileCacheDataRepositoryAssociationNfs[] | cdktf.IResolvable) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }
}

export class FsxFileCacheDataRepositoryAssociationList extends cdktf.ComplexList {
  public internalValue? : FsxFileCacheDataRepositoryAssociation[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxFileCacheDataRepositoryAssociationOutputReference {
    return new FsxFileCacheDataRepositoryAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxFileCacheLustreConfigurationLogConfiguration {
}

export function fsxFileCacheLustreConfigurationLogConfigurationToTerraform(struct?: FsxFileCacheLustreConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class FsxFileCacheLustreConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxFileCacheLustreConfigurationLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxFileCacheLustreConfigurationLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }
}

export class FsxFileCacheLustreConfigurationLogConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxFileCacheLustreConfigurationLogConfigurationOutputReference {
    return new FsxFileCacheLustreConfigurationLogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxFileCacheLustreConfigurationMetadataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}
  */
  readonly storageCapacity: number;
}

export function fsxFileCacheLustreConfigurationMetadataConfigurationToTerraform(struct?: FsxFileCacheLustreConfigurationMetadataConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_capacity: cdktf.numberToTerraform(struct!.storageCapacity),
  }
}

export class FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxFileCacheLustreConfigurationMetadataConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacity = this._storageCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxFileCacheLustreConfigurationMetadataConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageCapacity = value.storageCapacity;
    }
  }

  // storage_capacity - computed: false, optional: false, required: true
  private _storageCapacity?: number; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity;
  }
}

export class FsxFileCacheLustreConfigurationMetadataConfigurationList extends cdktf.ComplexList {
  public internalValue? : FsxFileCacheLustreConfigurationMetadataConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference {
    return new FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxFileCacheLustreConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#deployment_type FsxFileCache#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}
  */
  readonly perUnitStorageThroughput: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}
  */
  readonly weeklyMaintenanceStartTime?: string;
  /**
  * metadata_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#metadata_configuration FsxFileCache#metadata_configuration}
  */
  readonly metadataConfiguration: FsxFileCacheLustreConfigurationMetadataConfiguration[] | cdktf.IResolvable;
}

export function fsxFileCacheLustreConfigurationToTerraform(struct?: FsxFileCacheLustreConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    per_unit_storage_throughput: cdktf.numberToTerraform(struct!.perUnitStorageThroughput),
    weekly_maintenance_start_time: cdktf.stringToTerraform(struct!.weeklyMaintenanceStartTime),
    metadata_configuration: cdktf.listMapper(fsxFileCacheLustreConfigurationMetadataConfigurationToTerraform, true)(struct!.metadataConfiguration),
  }
}

export class FsxFileCacheLustreConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxFileCacheLustreConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._perUnitStorageThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.perUnitStorageThroughput = this._perUnitStorageThroughput;
    }
    if (this._weeklyMaintenanceStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyMaintenanceStartTime = this._weeklyMaintenanceStartTime;
    }
    if (this._metadataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataConfiguration = this._metadataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxFileCacheLustreConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentType = undefined;
      this._perUnitStorageThroughput = undefined;
      this._weeklyMaintenanceStartTime = undefined;
      this._metadataConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentType = value.deploymentType;
      this._perUnitStorageThroughput = value.perUnitStorageThroughput;
      this._weeklyMaintenanceStartTime = value.weeklyMaintenanceStartTime;
      this._metadataConfiguration.internalValue = value.metadataConfiguration;
    }
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new FsxFileCacheLustreConfigurationLogConfigurationList(this, "log_configuration", true);
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // mount_name - computed: true, optional: false, required: false
  public get mountName() {
    return this.getStringAttribute('mount_name');
  }

  // per_unit_storage_throughput - computed: false, optional: false, required: true
  private _perUnitStorageThroughput?: number; 
  public get perUnitStorageThroughput() {
    return this.getNumberAttribute('per_unit_storage_throughput');
  }
  public set perUnitStorageThroughput(value: number) {
    this._perUnitStorageThroughput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitStorageThroughputInput() {
    return this._perUnitStorageThroughput;
  }

  // weekly_maintenance_start_time - computed: false, optional: true, required: false
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

  // metadata_configuration - computed: false, optional: false, required: true
  private _metadataConfiguration = new FsxFileCacheLustreConfigurationMetadataConfigurationList(this, "metadata_configuration", true);
  public get metadataConfiguration() {
    return this._metadataConfiguration;
  }
  public putMetadataConfiguration(value: FsxFileCacheLustreConfigurationMetadataConfiguration[] | cdktf.IResolvable) {
    this._metadataConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConfigurationInput() {
    return this._metadataConfiguration.internalValue;
  }
}

export class FsxFileCacheLustreConfigurationList extends cdktf.ComplexList {
  public internalValue? : FsxFileCacheLustreConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxFileCacheLustreConfigurationOutputReference {
    return new FsxFileCacheLustreConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxFileCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}
  */
  readonly update?: string;
}

export function fsxFileCacheTimeoutsToTerraform(struct?: FsxFileCacheTimeoutsOutputReference | FsxFileCacheTimeouts | cdktf.IResolvable): any {
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

export class FsxFileCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxFileCacheTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FsxFileCacheTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache aws_fsx_file_cache}
*/
export class FsxFileCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_file_cache";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache aws_fsx_file_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxFileCacheConfig
  */
  public constructor(scope: Construct, id: string, config: FsxFileCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_file_cache',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._copyTagsToDataRepositoryAssociations = config.copyTagsToDataRepositoryAssociations;
    this._fileCacheType = config.fileCacheType;
    this._fileCacheTypeVersion = config.fileCacheTypeVersion;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._securityGroupIds = config.securityGroupIds;
    this._storageCapacity = config.storageCapacity;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._dataRepositoryAssociation.internalValue = config.dataRepositoryAssociation;
    this._lustreConfiguration.internalValue = config.lustreConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // copy_tags_to_data_repository_associations - computed: false, optional: true, required: false
  private _copyTagsToDataRepositoryAssociations?: boolean | cdktf.IResolvable; 
  public get copyTagsToDataRepositoryAssociations() {
    return this.getBooleanAttribute('copy_tags_to_data_repository_associations');
  }
  public set copyTagsToDataRepositoryAssociations(value: boolean | cdktf.IResolvable) {
    this._copyTagsToDataRepositoryAssociations = value;
  }
  public resetCopyTagsToDataRepositoryAssociations() {
    this._copyTagsToDataRepositoryAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToDataRepositoryAssociationsInput() {
    return this._copyTagsToDataRepositoryAssociations;
  }

  // data_repository_association_ids - computed: true, optional: false, required: false
  public get dataRepositoryAssociationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('data_repository_association_ids'));
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // file_cache_id - computed: true, optional: false, required: false
  public get fileCacheId() {
    return this.getStringAttribute('file_cache_id');
  }

  // file_cache_type - computed: false, optional: false, required: true
  private _fileCacheType?: string; 
  public get fileCacheType() {
    return this.getStringAttribute('file_cache_type');
  }
  public set fileCacheType(value: string) {
    this._fileCacheType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCacheTypeInput() {
    return this._fileCacheType;
  }

  // file_cache_type_version - computed: false, optional: false, required: true
  private _fileCacheTypeVersion?: string; 
  public get fileCacheTypeVersion() {
    return this.getStringAttribute('file_cache_type_version');
  }
  public set fileCacheTypeVersion(value: string) {
    this._fileCacheTypeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCacheTypeVersionInput() {
    return this._fileCacheTypeVersion;
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

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('network_interface_ids'));
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
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

  // storage_capacity - computed: false, optional: false, required: true
  private _storageCapacity?: number; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity;
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

  // data_repository_association - computed: false, optional: true, required: false
  private _dataRepositoryAssociation = new FsxFileCacheDataRepositoryAssociationList(this, "data_repository_association", true);
  public get dataRepositoryAssociation() {
    return this._dataRepositoryAssociation;
  }
  public putDataRepositoryAssociation(value: FsxFileCacheDataRepositoryAssociation[] | cdktf.IResolvable) {
    this._dataRepositoryAssociation.internalValue = value;
  }
  public resetDataRepositoryAssociation() {
    this._dataRepositoryAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRepositoryAssociationInput() {
    return this._dataRepositoryAssociation.internalValue;
  }

  // lustre_configuration - computed: false, optional: true, required: false
  private _lustreConfiguration = new FsxFileCacheLustreConfigurationList(this, "lustre_configuration", true);
  public get lustreConfiguration() {
    return this._lustreConfiguration;
  }
  public putLustreConfiguration(value: FsxFileCacheLustreConfiguration[] | cdktf.IResolvable) {
    this._lustreConfiguration.internalValue = value;
  }
  public resetLustreConfiguration() {
    this._lustreConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreConfigurationInput() {
    return this._lustreConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxFileCacheTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxFileCacheTimeouts) {
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
      copy_tags_to_data_repository_associations: cdktf.booleanToTerraform(this._copyTagsToDataRepositoryAssociations),
      file_cache_type: cdktf.stringToTerraform(this._fileCacheType),
      file_cache_type_version: cdktf.stringToTerraform(this._fileCacheTypeVersion),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      data_repository_association: cdktf.listMapper(fsxFileCacheDataRepositoryAssociationToTerraform, true)(this._dataRepositoryAssociation.internalValue),
      lustre_configuration: cdktf.listMapper(fsxFileCacheLustreConfigurationToTerraform, true)(this._lustreConfiguration.internalValue),
      timeouts: fsxFileCacheTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
