/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxOpenzfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}
  */
  readonly automaticBackupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}
  */
  readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}
  */
  readonly copyTagsToVolumes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}
  */
  readonly dailyAutomaticBackupStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#delete_options FsxOpenzfsFileSystem#delete_options}
  */
  readonly deleteOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#endpoint_ip_address_range FsxOpenzfsFileSystem#endpoint_ip_address_range}
  */
  readonly endpointIpAddressRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#final_backup_tags FsxOpenzfsFileSystem#final_backup_tags}
  */
  readonly finalBackupTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#preferred_subnet_id FsxOpenzfsFileSystem#preferred_subnet_id}
  */
  readonly preferredSubnetId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#region FsxOpenzfsFileSystem#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#route_table_ids FsxOpenzfsFileSystem#route_table_ids}
  */
  readonly routeTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#skip_final_backup FsxOpenzfsFileSystem#skip_final_backup}
  */
  readonly skipFinalBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}
  */
  readonly storageCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}
  */
  readonly throughputCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}
  */
  readonly weeklyMaintenanceStartTime?: string;
  /**
  * disk_iops_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#disk_iops_configuration FsxOpenzfsFileSystem#disk_iops_configuration}
  */
  readonly diskIopsConfiguration?: FsxOpenzfsFileSystemDiskIopsConfiguration;
  /**
  * root_volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#root_volume_configuration FsxOpenzfsFileSystem#root_volume_configuration}
  */
  readonly rootVolumeConfiguration?: FsxOpenzfsFileSystemRootVolumeConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#timeouts FsxOpenzfsFileSystem#timeouts}
  */
  readonly timeouts?: FsxOpenzfsFileSystemTimeouts;
}
export interface FsxOpenzfsFileSystemDiskIopsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#iops FsxOpenzfsFileSystem#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#mode FsxOpenzfsFileSystem#mode}
  */
  readonly mode?: string;
}

export function fsxOpenzfsFileSystemDiskIopsConfigurationToTerraform(struct?: FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference | FsxOpenzfsFileSystemDiskIopsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function fsxOpenzfsFileSystemDiskIopsConfigurationToHclTerraform(struct?: FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference | FsxOpenzfsFileSystemDiskIopsConfiguration): any {
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

export class FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOpenzfsFileSystemDiskIopsConfiguration | undefined {
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

  public set internalValue(value: FsxOpenzfsFileSystemDiskIopsConfiguration | undefined) {
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

  // mode - computed: false, optional: true, required: false
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
export interface FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#clients FsxOpenzfsFileSystem#clients}
  */
  readonly clients: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#options FsxOpenzfsFileSystem#options}
  */
  readonly options: string[];
}

export function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: cdktf.stringToTerraform(struct!.clients),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
  }
}


export function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: cdktf.stringToHclTerraform(struct!.clients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clients = undefined;
      this._options = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clients = value.clients;
      this._options = value.options;
    }
  }

  // clients - computed: false, optional: false, required: true
  private _clients?: string; 
  public get clients() {
    return this.getStringAttribute('clients');
  }
  public set clients(value: string) {
    this._clients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients;
  }

  // options - computed: false, optional: false, required: true
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }
}

export class FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList extends cdktf.ComplexList {
  public internalValue? : FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[] | cdktf.IResolvable

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
  public get(index: number): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference {
    return new FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports {
  /**
  * client_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#client_configurations FsxOpenzfsFileSystem#client_configurations}
  */
  readonly clientConfigurations: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[] | cdktf.IResolvable;
}

export function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_configurations: cdktf.listMapper(fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsToTerraform, true)(struct!.clientConfigurations),
  }
}


export function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_configurations: {
      value: cdktf.listMapperHcl(fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsToHclTerraform, true)(struct!.clientConfigurations),
      isBlock: true,
      type: "set",
      storageClassType: "FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfigurations = this._clientConfigurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientConfigurations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientConfigurations.internalValue = value.clientConfigurations;
    }
  }

  // client_configurations - computed: false, optional: false, required: true
  private _clientConfigurations = new FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList(this, "client_configurations", true);
  public get clientConfigurations() {
    return this._clientConfigurations;
  }
  public putClientConfigurations(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[] | cdktf.IResolvable) {
    this._clientConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigurationsInput() {
    return this._clientConfigurations.internalValue;
  }
}
export interface FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#storage_capacity_quota_gib FsxOpenzfsFileSystem#storage_capacity_quota_gib}
  */
  readonly storageCapacityQuotaGib: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#type FsxOpenzfsFileSystem#type}
  */
  readonly type: string;
}

export function fsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    storage_capacity_quota_gib: cdktf.numberToTerraform(struct!.storageCapacityQuotaGib),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_capacity_quota_gib: {
      value: cdktf.numberToHclTerraform(struct!.storageCapacityQuotaGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._storageCapacityQuotaGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacityQuotaGib = this._storageCapacityQuotaGib;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._storageCapacityQuotaGib = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._storageCapacityQuotaGib = value.storageCapacityQuotaGib;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // storage_capacity_quota_gib - computed: false, optional: false, required: true
  private _storageCapacityQuotaGib?: number; 
  public get storageCapacityQuotaGib() {
    return this.getNumberAttribute('storage_capacity_quota_gib');
  }
  public set storageCapacityQuotaGib(value: number) {
    this._storageCapacityQuotaGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityQuotaGibInput() {
    return this._storageCapacityQuotaGib;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList extends cdktf.ComplexList {
  public internalValue? : FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[] | cdktf.IResolvable

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
  public get(index: number): FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference {
    return new FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxOpenzfsFileSystemRootVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#copy_tags_to_snapshots FsxOpenzfsFileSystem#copy_tags_to_snapshots}
  */
  readonly copyTagsToSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#data_compression_type FsxOpenzfsFileSystem#data_compression_type}
  */
  readonly dataCompressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#read_only FsxOpenzfsFileSystem#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#record_size_kib FsxOpenzfsFileSystem#record_size_kib}
  */
  readonly recordSizeKib?: number;
  /**
  * nfs_exports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#nfs_exports FsxOpenzfsFileSystem#nfs_exports}
  */
  readonly nfsExports?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports;
  /**
  * user_and_group_quotas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#user_and_group_quotas FsxOpenzfsFileSystem#user_and_group_quotas}
  */
  readonly userAndGroupQuotas?: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[] | cdktf.IResolvable;
}

export function fsxOpenzfsFileSystemRootVolumeConfigurationToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference | FsxOpenzfsFileSystemRootVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_tags_to_snapshots: cdktf.booleanToTerraform(struct!.copyTagsToSnapshots),
    data_compression_type: cdktf.stringToTerraform(struct!.dataCompressionType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    record_size_kib: cdktf.numberToTerraform(struct!.recordSizeKib),
    nfs_exports: fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsToTerraform(struct!.nfsExports),
    user_and_group_quotas: cdktf.listMapper(fsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasToTerraform, true)(struct!.userAndGroupQuotas),
  }
}


export function fsxOpenzfsFileSystemRootVolumeConfigurationToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference | FsxOpenzfsFileSystemRootVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_tags_to_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.copyTagsToSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.dataCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_size_kib: {
      value: cdktf.numberToHclTerraform(struct!.recordSizeKib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nfs_exports: {
      value: fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsToHclTerraform(struct!.nfsExports),
      isBlock: true,
      type: "list",
      storageClassType: "FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsList",
    },
    user_and_group_quotas: {
      value: cdktf.listMapperHcl(fsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasToHclTerraform, true)(struct!.userAndGroupQuotas),
      isBlock: true,
      type: "set",
      storageClassType: "FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOpenzfsFileSystemRootVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTagsToSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTagsToSnapshots = this._copyTagsToSnapshots;
    }
    if (this._dataCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCompressionType = this._dataCompressionType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recordSizeKib !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSizeKib = this._recordSizeKib;
    }
    if (this._nfsExports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsExports = this._nfsExports?.internalValue;
    }
    if (this._userAndGroupQuotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAndGroupQuotas = this._userAndGroupQuotas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copyTagsToSnapshots = undefined;
      this._dataCompressionType = undefined;
      this._readOnly = undefined;
      this._recordSizeKib = undefined;
      this._nfsExports.internalValue = undefined;
      this._userAndGroupQuotas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copyTagsToSnapshots = value.copyTagsToSnapshots;
      this._dataCompressionType = value.dataCompressionType;
      this._readOnly = value.readOnly;
      this._recordSizeKib = value.recordSizeKib;
      this._nfsExports.internalValue = value.nfsExports;
      this._userAndGroupQuotas.internalValue = value.userAndGroupQuotas;
    }
  }

  // copy_tags_to_snapshots - computed: false, optional: true, required: false
  private _copyTagsToSnapshots?: boolean | cdktf.IResolvable; 
  public get copyTagsToSnapshots() {
    return this.getBooleanAttribute('copy_tags_to_snapshots');
  }
  public set copyTagsToSnapshots(value: boolean | cdktf.IResolvable) {
    this._copyTagsToSnapshots = value;
  }
  public resetCopyTagsToSnapshots() {
    this._copyTagsToSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToSnapshotsInput() {
    return this._copyTagsToSnapshots;
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

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // record_size_kib - computed: false, optional: true, required: false
  private _recordSizeKib?: number; 
  public get recordSizeKib() {
    return this.getNumberAttribute('record_size_kib');
  }
  public set recordSizeKib(value: number) {
    this._recordSizeKib = value;
  }
  public resetRecordSizeKib() {
    this._recordSizeKib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSizeKibInput() {
    return this._recordSizeKib;
  }

  // nfs_exports - computed: false, optional: true, required: false
  private _nfsExports = new FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference(this, "nfs_exports");
  public get nfsExports() {
    return this._nfsExports;
  }
  public putNfsExports(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports) {
    this._nfsExports.internalValue = value;
  }
  public resetNfsExports() {
    this._nfsExports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsExportsInput() {
    return this._nfsExports.internalValue;
  }

  // user_and_group_quotas - computed: false, optional: true, required: false
  private _userAndGroupQuotas = new FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList(this, "user_and_group_quotas", true);
  public get userAndGroupQuotas() {
    return this._userAndGroupQuotas;
  }
  public putUserAndGroupQuotas(value: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[] | cdktf.IResolvable) {
    this._userAndGroupQuotas.internalValue = value;
  }
  public resetUserAndGroupQuotas() {
    this._userAndGroupQuotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAndGroupQuotasInput() {
    return this._userAndGroupQuotas.internalValue;
  }
}
export interface FsxOpenzfsFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#create FsxOpenzfsFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#delete FsxOpenzfsFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#update FsxOpenzfsFileSystem#update}
  */
  readonly update?: string;
}

export function fsxOpenzfsFileSystemTimeoutsToTerraform(struct?: FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable): any {
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


export function fsxOpenzfsFileSystemTimeoutsToHclTerraform(struct?: FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable): any {
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

export class FsxOpenzfsFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system aws_fsx_openzfs_file_system}
*/
export class FsxOpenzfsFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_openzfs_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FsxOpenzfsFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxOpenzfsFileSystem to import
  * @param importFromId The id of the existing FsxOpenzfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxOpenzfsFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_openzfs_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fsx_openzfs_file_system aws_fsx_openzfs_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxOpenzfsFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: FsxOpenzfsFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_openzfs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
    this._backupId = config.backupId;
    this._copyTagsToBackups = config.copyTagsToBackups;
    this._copyTagsToVolumes = config.copyTagsToVolumes;
    this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
    this._deleteOptions = config.deleteOptions;
    this._deploymentType = config.deploymentType;
    this._endpointIpAddressRange = config.endpointIpAddressRange;
    this._finalBackupTags = config.finalBackupTags;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._preferredSubnetId = config.preferredSubnetId;
    this._region = config.region;
    this._routeTableIds = config.routeTableIds;
    this._securityGroupIds = config.securityGroupIds;
    this._skipFinalBackup = config.skipFinalBackup;
    this._storageCapacity = config.storageCapacity;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._throughputCapacity = config.throughputCapacity;
    this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
    this._diskIopsConfiguration.internalValue = config.diskIopsConfiguration;
    this._rootVolumeConfiguration.internalValue = config.rootVolumeConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_backup_retention_days - computed: false, optional: true, required: false
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

  // copy_tags_to_volumes - computed: false, optional: true, required: false
  private _copyTagsToVolumes?: boolean | cdktf.IResolvable; 
  public get copyTagsToVolumes() {
    return this.getBooleanAttribute('copy_tags_to_volumes');
  }
  public set copyTagsToVolumes(value: boolean | cdktf.IResolvable) {
    this._copyTagsToVolumes = value;
  }
  public resetCopyTagsToVolumes() {
    this._copyTagsToVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToVolumesInput() {
    return this._copyTagsToVolumes;
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

  // delete_options - computed: false, optional: true, required: false
  private _deleteOptions?: string[]; 
  public get deleteOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('delete_options'));
  }
  public set deleteOptions(value: string[]) {
    this._deleteOptions = value;
  }
  public resetDeleteOptions() {
    this._deleteOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionsInput() {
    return this._deleteOptions;
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

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // endpoint_ip_address - computed: true, optional: false, required: false
  public get endpointIpAddress() {
    return this.getStringAttribute('endpoint_ip_address');
  }

  // endpoint_ip_address_range - computed: true, optional: true, required: false
  private _endpointIpAddressRange?: string; 
  public get endpointIpAddressRange() {
    return this.getStringAttribute('endpoint_ip_address_range');
  }
  public set endpointIpAddressRange(value: string) {
    this._endpointIpAddressRange = value;
  }
  public resetEndpointIpAddressRange() {
    this._endpointIpAddressRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressRangeInput() {
    return this._endpointIpAddressRange;
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
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // preferred_subnet_id - computed: false, optional: true, required: false
  private _preferredSubnetId?: string; 
  public get preferredSubnetId() {
    return this.getStringAttribute('preferred_subnet_id');
  }
  public set preferredSubnetId(value: string) {
    this._preferredSubnetId = value;
  }
  public resetPreferredSubnetId() {
    this._preferredSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSubnetIdInput() {
    return this._preferredSubnetId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // root_volume_id - computed: true, optional: false, required: false
  public get rootVolumeId() {
    return this.getStringAttribute('root_volume_id');
  }

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return cdktf.Fn.tolist(this.getListAttribute('route_table_ids'));
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
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

  // throughput_capacity - computed: false, optional: false, required: true
  private _throughputCapacity?: number; 
  public get throughputCapacity() {
    return this.getNumberAttribute('throughput_capacity');
  }
  public set throughputCapacity(value: number) {
    this._throughputCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputCapacityInput() {
    return this._throughputCapacity;
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

  // disk_iops_configuration - computed: false, optional: true, required: false
  private _diskIopsConfiguration = new FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference(this, "disk_iops_configuration");
  public get diskIopsConfiguration() {
    return this._diskIopsConfiguration;
  }
  public putDiskIopsConfiguration(value: FsxOpenzfsFileSystemDiskIopsConfiguration) {
    this._diskIopsConfiguration.internalValue = value;
  }
  public resetDiskIopsConfiguration() {
    this._diskIopsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsConfigurationInput() {
    return this._diskIopsConfiguration.internalValue;
  }

  // root_volume_configuration - computed: false, optional: true, required: false
  private _rootVolumeConfiguration = new FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference(this, "root_volume_configuration");
  public get rootVolumeConfiguration() {
    return this._rootVolumeConfiguration;
  }
  public putRootVolumeConfiguration(value: FsxOpenzfsFileSystemRootVolumeConfiguration) {
    this._rootVolumeConfiguration.internalValue = value;
  }
  public resetRootVolumeConfiguration() {
    this._rootVolumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeConfigurationInput() {
    return this._rootVolumeConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxOpenzfsFileSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxOpenzfsFileSystemTimeouts) {
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
      automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
      backup_id: cdktf.stringToTerraform(this._backupId),
      copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
      copy_tags_to_volumes: cdktf.booleanToTerraform(this._copyTagsToVolumes),
      daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
      delete_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deleteOptions),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      endpoint_ip_address_range: cdktf.stringToTerraform(this._endpointIpAddressRange),
      final_backup_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._finalBackupTags),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
      region: cdktf.stringToTerraform(this._region),
      route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTableIds),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      skip_final_backup: cdktf.booleanToTerraform(this._skipFinalBackup),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
      weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
      disk_iops_configuration: fsxOpenzfsFileSystemDiskIopsConfigurationToTerraform(this._diskIopsConfiguration.internalValue),
      root_volume_configuration: fsxOpenzfsFileSystemRootVolumeConfigurationToTerraform(this._rootVolumeConfiguration.internalValue),
      timeouts: fsxOpenzfsFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      copy_tags_to_volumes: {
        value: cdktf.booleanToHclTerraform(this._copyTagsToVolumes),
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
      delete_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deleteOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_ip_address_range: {
        value: cdktf.stringToHclTerraform(this._endpointIpAddressRange),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_subnet_id: {
        value: cdktf.stringToHclTerraform(this._preferredSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTableIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      throughput_capacity: {
        value: cdktf.numberToHclTerraform(this._throughputCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekly_maintenance_start_time: {
        value: cdktf.stringToHclTerraform(this._weeklyMaintenanceStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_iops_configuration: {
        value: fsxOpenzfsFileSystemDiskIopsConfigurationToHclTerraform(this._diskIopsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxOpenzfsFileSystemDiskIopsConfigurationList",
      },
      root_volume_configuration: {
        value: fsxOpenzfsFileSystemRootVolumeConfigurationToHclTerraform(this._rootVolumeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxOpenzfsFileSystemRootVolumeConfigurationList",
      },
      timeouts: {
        value: fsxOpenzfsFileSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxOpenzfsFileSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
