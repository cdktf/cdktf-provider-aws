// https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsFsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_file_system#id DataAwsFsxOntapFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_file_system#tags DataAwsFsxOntapFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsFsxOntapFileSystemDiskIopsConfiguration {
}

export function dataAwsFsxOntapFileSystemDiskIopsConfigurationToTerraform(struct?: DataAwsFsxOntapFileSystemDiskIopsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsFsxOntapFileSystemDiskIopsConfigurationToHclTerraform(struct?: DataAwsFsxOntapFileSystemDiskIopsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsFsxOntapFileSystemDiskIopsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsFsxOntapFileSystemDiskIopsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAwsFsxOntapFileSystemDiskIopsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference {
    return new DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsFsxOntapFileSystemEndpointsIntercluster {
}

export function dataAwsFsxOntapFileSystemEndpointsInterclusterToTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsIntercluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsFsxOntapFileSystemEndpointsInterclusterToHclTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsIntercluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsFsxOntapFileSystemEndpointsIntercluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsFsxOntapFileSystemEndpointsIntercluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class DataAwsFsxOntapFileSystemEndpointsInterclusterList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference {
    return new DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsFsxOntapFileSystemEndpointsManagement {
}

export function dataAwsFsxOntapFileSystemEndpointsManagementToTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsFsxOntapFileSystemEndpointsManagementToHclTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsFsxOntapFileSystemEndpointsManagementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsFsxOntapFileSystemEndpointsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsFsxOntapFileSystemEndpointsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class DataAwsFsxOntapFileSystemEndpointsManagementList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsFsxOntapFileSystemEndpointsManagementOutputReference {
    return new DataAwsFsxOntapFileSystemEndpointsManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsFsxOntapFileSystemEndpoints {
}

export function dataAwsFsxOntapFileSystemEndpointsToTerraform(struct?: DataAwsFsxOntapFileSystemEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsFsxOntapFileSystemEndpointsToHclTerraform(struct?: DataAwsFsxOntapFileSystemEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsFsxOntapFileSystemEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsFsxOntapFileSystemEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsFsxOntapFileSystemEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intercluster - computed: true, optional: false, required: false
  private _intercluster = new DataAwsFsxOntapFileSystemEndpointsInterclusterList(this, "intercluster", false);
  public get intercluster() {
    return this._intercluster;
  }

  // management - computed: true, optional: false, required: false
  private _management = new DataAwsFsxOntapFileSystemEndpointsManagementList(this, "management", false);
  public get management() {
    return this._management;
  }
}

export class DataAwsFsxOntapFileSystemEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsFsxOntapFileSystemEndpointsOutputReference {
    return new DataAwsFsxOntapFileSystemEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_file_system aws_fsx_ontap_file_system}
*/
export class DataAwsFsxOntapFileSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_ontap_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsFsxOntapFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsFsxOntapFileSystem to import
  * @param importFromId The id of the existing DataAwsFsxOntapFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsFsxOntapFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_ontap_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_file_system aws_fsx_ontap_file_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsFsxOntapFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsFsxOntapFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_ontap_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.62.0',
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
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_backup_retention_days - computed: true, optional: false, required: false
  public get automaticBackupRetentionDays() {
    return this.getNumberAttribute('automatic_backup_retention_days');
  }

  // daily_automatic_backup_start_time - computed: true, optional: false, required: false
  public get dailyAutomaticBackupStartTime() {
    return this.getStringAttribute('daily_automatic_backup_start_time');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // disk_iops_configuration - computed: true, optional: false, required: false
  private _diskIopsConfiguration = new DataAwsFsxOntapFileSystemDiskIopsConfigurationList(this, "disk_iops_configuration", false);
  public get diskIopsConfiguration() {
    return this._diskIopsConfiguration;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // endpoint_ip_address_range - computed: true, optional: false, required: false
  public get endpointIpAddressRange() {
    return this.getStringAttribute('endpoint_ip_address_range');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataAwsFsxOntapFileSystemEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // ha_pairs - computed: true, optional: false, required: false
  public get haPairs() {
    return this.getNumberAttribute('ha_pairs');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // preferred_subnet_id - computed: true, optional: false, required: false
  public get preferredSubnetId() {
    return this.getStringAttribute('preferred_subnet_id');
  }

  // route_table_ids - computed: true, optional: false, required: false
  public get routeTableIds() {
    return cdktf.Fn.tolist(this.getListAttribute('route_table_ids'));
  }

  // storage_capacity - computed: true, optional: false, required: false
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
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

  // throughput_capacity - computed: true, optional: false, required: false
  public get throughputCapacity() {
    return this.getNumberAttribute('throughput_capacity');
  }

  // throughput_capacity_per_ha_pair - computed: true, optional: false, required: false
  public get throughputCapacityPerHaPair() {
    return this.getNumberAttribute('throughput_capacity_per_ha_pair');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // weekly_maintenance_start_time - computed: true, optional: false, required: false
  public get weeklyMaintenanceStartTime() {
    return this.getStringAttribute('weekly_maintenance_start_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
