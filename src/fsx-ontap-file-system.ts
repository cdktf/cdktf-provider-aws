// https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}
  */
  readonly automaticBackupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}
  */
  readonly dailyAutomaticBackupStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#deployment_type FsxOntapFileSystem#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}
  */
  readonly endpointIpAddressRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}
  */
  readonly fsxAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#kms_key_id FsxOntapFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}
  */
  readonly preferredSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#route_table_ids FsxOntapFileSystem#route_table_ids}
  */
  readonly routeTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#security_group_ids FsxOntapFileSystem#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#storage_capacity FsxOntapFileSystem#storage_capacity}
  */
  readonly storageCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#storage_type FsxOntapFileSystem#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#subnet_ids FsxOntapFileSystem#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#tags FsxOntapFileSystem#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#tags_all FsxOntapFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#throughput_capacity FsxOntapFileSystem#throughput_capacity}
  */
  readonly throughputCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}
  */
  readonly weeklyMaintenanceStartTime?: string;
  /**
  * disk_iops_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}
  */
  readonly diskIopsConfiguration?: FsxOntapFileSystemDiskIopsConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#timeouts FsxOntapFileSystem#timeouts}
  */
  readonly timeouts?: FsxOntapFileSystemTimeouts;
}
export class FsxOntapFileSystemEndpointsIntercluster extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export class FsxOntapFileSystemEndpointsManagement extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export class FsxOntapFileSystemEndpoints extends cdktf.ComplexComputedList {

  // intercluster - computed: true, optional: false, required: false
  public get intercluster() {
    return this.interpolationForAttribute('intercluster') as any;
  }

  // management - computed: true, optional: false, required: false
  public get management() {
    return this.interpolationForAttribute('management') as any;
  }
}
export interface FsxOntapFileSystemDiskIopsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#iops FsxOntapFileSystem#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#mode FsxOntapFileSystem#mode}
  */
  readonly mode?: string;
}

function fsxOntapFileSystemDiskIopsConfigurationToTerraform(struct?: FsxOntapFileSystemDiskIopsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface FsxOntapFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#create FsxOntapFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#delete FsxOntapFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#update FsxOntapFileSystem#update}
  */
  readonly update?: string;
}

function fsxOntapFileSystemTimeoutsToTerraform(struct?: FsxOntapFileSystemTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system}
*/
export class FsxOntapFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_fsx_ontap_file_system";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxOntapFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: FsxOntapFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_ontap_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
    this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
    this._deploymentType = config.deploymentType;
    this._endpointIpAddressRange = config.endpointIpAddressRange;
    this._fsxAdminPassword = config.fsxAdminPassword;
    this._kmsKeyId = config.kmsKeyId;
    this._preferredSubnetId = config.preferredSubnetId;
    this._routeTableIds = config.routeTableIds;
    this._securityGroupIds = config.securityGroupIds;
    this._storageCapacity = config.storageCapacity;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._throughputCapacity = config.throughputCapacity;
    this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
    this._diskIopsConfiguration = config.diskIopsConfiguration;
    this._timeouts = config.timeouts;
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

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType: string;
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
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
    return this._endpointIpAddressRange
  }

  // endpoints - computed: true, optional: false, required: false
  public endpoints(index: string) {
    return new FsxOntapFileSystemEndpoints(this, 'endpoints', index);
  }

  // fsx_admin_password - computed: false, optional: true, required: false
  private _fsxAdminPassword?: string;
  public get fsxAdminPassword() {
    return this.getStringAttribute('fsx_admin_password');
  }
  public set fsxAdminPassword(value: string ) {
    this._fsxAdminPassword = value;
  }
  public resetFsxAdminPassword() {
    this._fsxAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxAdminPasswordInput() {
    return this._fsxAdminPassword
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

  // preferred_subnet_id - computed: false, optional: false, required: true
  private _preferredSubnetId: string;
  public get preferredSubnetId() {
    return this.getStringAttribute('preferred_subnet_id');
  }
  public set preferredSubnetId(value: string) {
    this._preferredSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSubnetIdInput() {
    return this._preferredSubnetId
  }

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[];
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds
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

  // storage_capacity - computed: false, optional: true, required: false
  private _storageCapacity?: number;
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number ) {
    this._storageCapacity = value;
  }
  public resetStorageCapacity() {
    this._storageCapacity = undefined;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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

  // disk_iops_configuration - computed: false, optional: true, required: false
  private _diskIopsConfiguration?: FsxOntapFileSystemDiskIopsConfiguration[];
  public get diskIopsConfiguration() {
    return this.interpolationForAttribute('disk_iops_configuration') as any;
  }
  public set diskIopsConfiguration(value: FsxOntapFileSystemDiskIopsConfiguration[] ) {
    this._diskIopsConfiguration = value;
  }
  public resetDiskIopsConfiguration() {
    this._diskIopsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsConfigurationInput() {
    return this._diskIopsConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FsxOntapFileSystemTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FsxOntapFileSystemTimeouts ) {
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
      automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
      daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      endpoint_ip_address_range: cdktf.stringToTerraform(this._endpointIpAddressRange),
      fsx_admin_password: cdktf.stringToTerraform(this._fsxAdminPassword),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
      route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      storage_type: cdktf.stringToTerraform(this._storageType),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
      weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
      disk_iops_configuration: cdktf.listMapper(fsxOntapFileSystemDiskIopsConfigurationToTerraform)(this._diskIopsConfiguration),
      timeouts: fsxOntapFileSystemTimeoutsToTerraform(this._timeouts),
    };
  }
}
