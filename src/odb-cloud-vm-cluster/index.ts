/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OdbCloudVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the Exadata infrastructure for this VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id OdbCloudVmCluster#cloud_exadata_infrastructure_id}
  */
  readonly cloudExadataInfrastructureId: string;
  /**
  * The name of the Grid Infrastructure (GI) cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#cluster_name OdbCloudVmCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The number of CPU cores to enable on the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count OdbCloudVmCluster#cpu_core_count}
  */
  readonly cpuCoreCount: number;
  /**
  * The size of the data disk group, in terabytes (TBs), to allocate for the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_tbs OdbCloudVmCluster#data_storage_size_in_tbs}
  */
  readonly dataStorageSizeInTbs?: number;
  /**
  * The amount of local node storage, in gigabytes (GBs), to allocate for the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_gbs OdbCloudVmCluster#db_node_storage_size_in_gbs}
  */
  readonly dbNodeStorageSizeInGbs?: number;
  /**
  * The list of database servers for the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#db_servers OdbCloudVmCluster#db_servers}
  */
  readonly dbServers: string[];
  /**
  * A user-friendly name for the VM cluster. This member is required. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#display_name OdbCloudVmCluster#display_name}
  */
  readonly displayName: string;
  /**
  * A valid software version of Oracle Grid Infrastructure (GI). To get the list of valid values, use the ListGiVersions operation and specify the shape of the Exadata infrastructure. Example: 19.0.0.0 This member is required. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#gi_version OdbCloudVmCluster#gi_version}
  */
  readonly giVersion: string;
  /**
  * The host name prefix for the VM cluster. Constraints: - Can't be "localhost" or "hostname". - Can't contain "-version". - The maximum length of the combined hostname and domain is 63 characters. - The hostname must be unique within the subnet. This member is required. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#hostname_prefix OdbCloudVmCluster#hostname_prefix}
  */
  readonly hostnamePrefix: string;
  /**
  * Specifies whether to enable database backups to local Exadata storage for the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled OdbCloudVmCluster#is_local_backup_enabled}
  */
  readonly isLocalBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to create a sparse disk group for the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled OdbCloudVmCluster#is_sparse_diskgroup_enabled}
  */
  readonly isSparseDiskgroupEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Oracle license model to apply to the VM cluster. Default: LICENSE_INCLUDED. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#license_model OdbCloudVmCluster#license_model}
  */
  readonly licenseModel?: string;
  /**
  * The amount of memory, in gigabytes (GBs), to allocate for the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_gbs OdbCloudVmCluster#memory_size_in_gbs}
  */
  readonly memorySizeInGbs?: number;
  /**
  * The unique identifier of the ODB network for the VM cluster. This member is required. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#odb_network_id OdbCloudVmCluster#odb_network_id}
  */
  readonly odbNetworkId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#region OdbCloudVmCluster#region}
  */
  readonly region?: string;
  /**
  * The port number for TCP connections to the single client access name (SCAN) listener. Valid values: 1024–8999 with the following exceptions: 2484 , 6100 , 6200 , 7060, 7070 , 7085 , and 7879Default: 1521. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp OdbCloudVmCluster#scan_listener_port_tcp}
  */
  readonly scanListenerPortTcp?: number;
  /**
  * The public key portion of one or more key pairs used for SSH access to the VM cluster. This member is required. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys OdbCloudVmCluster#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#tags OdbCloudVmCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The configured time zone of the VM cluster. Changing this will create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#timezone OdbCloudVmCluster#timezone}
  */
  readonly timezone?: string;
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#data_collection_options OdbCloudVmCluster#data_collection_options}
  */
  readonly dataCollectionOptions?: OdbCloudVmClusterDataCollectionOptions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#timeouts OdbCloudVmCluster#timeouts}
  */
  readonly timeouts?: OdbCloudVmClusterTimeouts;
}
export interface OdbCloudVmClusterIormConfigCacheDbPlans {
}

export function odbCloudVmClusterIormConfigCacheDbPlansToTerraform(struct?: OdbCloudVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbCloudVmClusterIormConfigCacheDbPlansToHclTerraform(struct?: OdbCloudVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbCloudVmClusterIormConfigCacheDbPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OdbCloudVmClusterIormConfigCacheDbPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbCloudVmClusterIormConfigCacheDbPlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // flash_cache_limit - computed: true, optional: false, required: false
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // share - computed: true, optional: false, required: false
  public get share() {
    return this.getNumberAttribute('share');
  }
}

export class OdbCloudVmClusterIormConfigCacheDbPlansList extends cdktf.ComplexList {

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
  public get(index: number): OdbCloudVmClusterIormConfigCacheDbPlansOutputReference {
    return new OdbCloudVmClusterIormConfigCacheDbPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbCloudVmClusterIormConfigCache {
}

export function odbCloudVmClusterIormConfigCacheToTerraform(struct?: OdbCloudVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbCloudVmClusterIormConfigCacheToHclTerraform(struct?: OdbCloudVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbCloudVmClusterIormConfigCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OdbCloudVmClusterIormConfigCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbCloudVmClusterIormConfigCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_plans - computed: true, optional: false, required: false
  private _dbPlans = new OdbCloudVmClusterIormConfigCacheDbPlansList(this, "db_plans", false);
  public get dbPlans() {
    return this._dbPlans;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // objective - computed: true, optional: false, required: false
  public get objective() {
    return this.getStringAttribute('objective');
  }
}

export class OdbCloudVmClusterIormConfigCacheList extends cdktf.ComplexList {

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
  public get(index: number): OdbCloudVmClusterIormConfigCacheOutputReference {
    return new OdbCloudVmClusterIormConfigCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbCloudVmClusterDataCollectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled OdbCloudVmCluster#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled OdbCloudVmCluster#is_health_monitoring_enabled}
  */
  readonly isHealthMonitoringEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled OdbCloudVmCluster#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled: boolean | cdktf.IResolvable;
}

export function odbCloudVmClusterDataCollectionOptionsToTerraform(struct?: OdbCloudVmClusterDataCollectionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_diagnostics_events_enabled: cdktf.booleanToTerraform(struct!.isDiagnosticsEventsEnabled),
    is_health_monitoring_enabled: cdktf.booleanToTerraform(struct!.isHealthMonitoringEnabled),
    is_incident_logs_enabled: cdktf.booleanToTerraform(struct!.isIncidentLogsEnabled),
  }
}


export function odbCloudVmClusterDataCollectionOptionsToHclTerraform(struct?: OdbCloudVmClusterDataCollectionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_diagnostics_events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDiagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_health_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isHealthMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_incident_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isIncidentLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbCloudVmClusterDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OdbCloudVmClusterDataCollectionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDiagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiagnosticsEventsEnabled = this._isDiagnosticsEventsEnabled;
    }
    if (this._isHealthMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthMonitoringEnabled = this._isHealthMonitoringEnabled;
    }
    if (this._isIncidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncidentLogsEnabled = this._isIncidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbCloudVmClusterDataCollectionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDiagnosticsEventsEnabled = undefined;
      this._isHealthMonitoringEnabled = undefined;
      this._isIncidentLogsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDiagnosticsEventsEnabled = value.isDiagnosticsEventsEnabled;
      this._isHealthMonitoringEnabled = value.isHealthMonitoringEnabled;
      this._isIncidentLogsEnabled = value.isIncidentLogsEnabled;
    }
  }

  // is_diagnostics_events_enabled - computed: false, optional: false, required: true
  private _isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable; 
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }
  public set isDiagnosticsEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._isDiagnosticsEventsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiagnosticsEventsEnabledInput() {
    return this._isDiagnosticsEventsEnabled;
  }

  // is_health_monitoring_enabled - computed: false, optional: false, required: true
  private _isHealthMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }
  public set isHealthMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._isHealthMonitoringEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthMonitoringEnabledInput() {
    return this._isHealthMonitoringEnabled;
  }

  // is_incident_logs_enabled - computed: false, optional: false, required: true
  private _isIncidentLogsEnabled?: boolean | cdktf.IResolvable; 
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
  public set isIncidentLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._isIncidentLogsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncidentLogsEnabledInput() {
    return this._isIncidentLogsEnabled;
  }
}

export class OdbCloudVmClusterDataCollectionOptionsList extends cdktf.ComplexList {
  public internalValue? : OdbCloudVmClusterDataCollectionOptions[] | cdktf.IResolvable

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
  public get(index: number): OdbCloudVmClusterDataCollectionOptionsOutputReference {
    return new OdbCloudVmClusterDataCollectionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbCloudVmClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#create OdbCloudVmCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#delete OdbCloudVmCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#update OdbCloudVmCluster#update}
  */
  readonly update?: string;
}

export function odbCloudVmClusterTimeoutsToTerraform(struct?: OdbCloudVmClusterTimeouts | cdktf.IResolvable): any {
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


export function odbCloudVmClusterTimeoutsToHclTerraform(struct?: OdbCloudVmClusterTimeouts | cdktf.IResolvable): any {
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

export class OdbCloudVmClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbCloudVmClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OdbCloudVmClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster aws_odb_cloud_vm_cluster}
*/
export class OdbCloudVmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_cloud_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OdbCloudVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OdbCloudVmCluster to import
  * @param importFromId The id of the existing OdbCloudVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OdbCloudVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_cloud_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_vm_cluster aws_odb_cloud_vm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OdbCloudVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OdbCloudVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_cloud_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.14.0',
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
    this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
    this._clusterName = config.clusterName;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._dbNodeStorageSizeInGbs = config.dbNodeStorageSizeInGbs;
    this._dbServers = config.dbServers;
    this._displayName = config.displayName;
    this._giVersion = config.giVersion;
    this._hostnamePrefix = config.hostnamePrefix;
    this._isLocalBackupEnabled = config.isLocalBackupEnabled;
    this._isSparseDiskgroupEnabled = config.isSparseDiskgroupEnabled;
    this._licenseModel = config.licenseModel;
    this._memorySizeInGbs = config.memorySizeInGbs;
    this._odbNetworkId = config.odbNetworkId;
    this._region = config.region;
    this._scanListenerPortTcp = config.scanListenerPortTcp;
    this._sshPublicKeys = config.sshPublicKeys;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._dataCollectionOptions.internalValue = config.dataCollectionOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloud_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _cloudExadataInfrastructureId?: string; 
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }
  public set cloudExadataInfrastructureId(value: string) {
    this._cloudExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataInfrastructureIdInput() {
    return this._cloudExadataInfrastructureId;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_core_count - computed: false, optional: false, required: true
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_storage_size_in_tbs - computed: true, optional: true, required: false
  private _dataStorageSizeInTbs?: number; 
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }
  public resetDataStorageSizeInTbs() {
    this._dataStorageSizeInTbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInTbsInput() {
    return this._dataStorageSizeInTbs;
  }

  // db_node_storage_size_in_gbs - computed: true, optional: true, required: false
  private _dbNodeStorageSizeInGbs?: number; 
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }
  public set dbNodeStorageSizeInGbs(value: number) {
    this._dbNodeStorageSizeInGbs = value;
  }
  public resetDbNodeStorageSizeInGbs() {
    this._dbNodeStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeStorageSizeInGbsInput() {
    return this._dbNodeStorageSizeInGbs;
  }

  // db_servers - computed: false, optional: false, required: true
  private _dbServers?: string[]; 
  public get dbServers() {
    return cdktf.Fn.tolist(this.getListAttribute('db_servers'));
  }
  public set dbServers(value: string[]) {
    this._dbServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServersInput() {
    return this._dbServers;
  }

  // disk_redundancy - computed: true, optional: false, required: false
  public get diskRedundancy() {
    return this.getStringAttribute('disk_redundancy');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // gi_version - computed: false, optional: false, required: true
  private _giVersion?: string; 
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }
  public set giVersion(value: string) {
    this._giVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get giVersionInput() {
    return this._giVersion;
  }

  // hostname_prefix - computed: false, optional: false, required: true
  private _hostnamePrefix?: string; 
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string) {
    this._hostnamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamePrefixInput() {
    return this._hostnamePrefix;
  }

  // hostname_prefix_computed - computed: true, optional: false, required: false
  public get hostnamePrefixComputed() {
    return this.getStringAttribute('hostname_prefix_computed');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iorm_config_cache - computed: true, optional: false, required: false
  private _iormConfigCache = new OdbCloudVmClusterIormConfigCacheList(this, "iorm_config_cache", false);
  public get iormConfigCache() {
    return this._iormConfigCache;
  }

  // is_local_backup_enabled - computed: true, optional: true, required: false
  private _isLocalBackupEnabled?: boolean | cdktf.IResolvable; 
  public get isLocalBackupEnabled() {
    return this.getBooleanAttribute('is_local_backup_enabled');
  }
  public set isLocalBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._isLocalBackupEnabled = value;
  }
  public resetIsLocalBackupEnabled() {
    this._isLocalBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLocalBackupEnabledInput() {
    return this._isLocalBackupEnabled;
  }

  // is_sparse_diskgroup_enabled - computed: true, optional: true, required: false
  private _isSparseDiskgroupEnabled?: boolean | cdktf.IResolvable; 
  public get isSparseDiskgroupEnabled() {
    return this.getBooleanAttribute('is_sparse_diskgroup_enabled');
  }
  public set isSparseDiskgroupEnabled(value: boolean | cdktf.IResolvable) {
    this._isSparseDiskgroupEnabled = value;
  }
  public resetIsSparseDiskgroupEnabled() {
    this._isSparseDiskgroupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSparseDiskgroupEnabledInput() {
    return this._isSparseDiskgroupEnabled;
  }

  // last_update_history_entry_id - computed: true, optional: false, required: false
  public get lastUpdateHistoryEntryId() {
    return this.getStringAttribute('last_update_history_entry_id');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // memory_size_in_gbs - computed: true, optional: true, required: false
  private _memorySizeInGbs?: number; 
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }
  public set memorySizeInGbs(value: number) {
    this._memorySizeInGbs = value;
  }
  public resetMemorySizeInGbs() {
    this._memorySizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInGbsInput() {
    return this._memorySizeInGbs;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // odb_network_id - computed: false, optional: false, required: true
  private _odbNetworkId?: string; 
  public get odbNetworkId() {
    return this.getStringAttribute('odb_network_id');
  }
  public set odbNetworkId(value: string) {
    this._odbNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkIdInput() {
    return this._odbNetworkId;
  }

  // percent_progress - computed: true, optional: false, required: false
  public get percentProgress() {
    return this.getNumberAttribute('percent_progress');
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

  // scan_dns_name - computed: true, optional: false, required: false
  public get scanDnsName() {
    return this.getStringAttribute('scan_dns_name');
  }

  // scan_dns_record_id - computed: true, optional: false, required: false
  public get scanDnsRecordId() {
    return this.getStringAttribute('scan_dns_record_id');
  }

  // scan_ip_ids - computed: true, optional: false, required: false
  public get scanIpIds() {
    return this.getListAttribute('scan_ip_ids');
  }

  // scan_listener_port_tcp - computed: true, optional: true, required: false
  private _scanListenerPortTcp?: number; 
  public get scanListenerPortTcp() {
    return this.getNumberAttribute('scan_listener_port_tcp');
  }
  public set scanListenerPortTcp(value: number) {
    this._scanListenerPortTcp = value;
  }
  public resetScanListenerPortTcp() {
    this._scanListenerPortTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerPortTcpInput() {
    return this._scanListenerPortTcp;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_keys'));
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // storage_size_in_gbs - computed: true, optional: false, required: false
  public get storageSizeInGbs() {
    return this.getNumberAttribute('storage_size_in_gbs');
  }

  // system_version - computed: true, optional: false, required: false
  public get systemVersion() {
    return this.getStringAttribute('system_version');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // vip_ids - computed: true, optional: false, required: false
  public get vipIds() {
    return this.getListAttribute('vip_ids');
  }

  // data_collection_options - computed: false, optional: true, required: false
  private _dataCollectionOptions = new OdbCloudVmClusterDataCollectionOptionsList(this, "data_collection_options", false);
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: OdbCloudVmClusterDataCollectionOptions[] | cdktf.IResolvable) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OdbCloudVmClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OdbCloudVmClusterTimeouts) {
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
      cloud_exadata_infrastructure_id: cdktf.stringToTerraform(this._cloudExadataInfrastructureId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      data_storage_size_in_tbs: cdktf.numberToTerraform(this._dataStorageSizeInTbs),
      db_node_storage_size_in_gbs: cdktf.numberToTerraform(this._dbNodeStorageSizeInGbs),
      db_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbServers),
      display_name: cdktf.stringToTerraform(this._displayName),
      gi_version: cdktf.stringToTerraform(this._giVersion),
      hostname_prefix: cdktf.stringToTerraform(this._hostnamePrefix),
      is_local_backup_enabled: cdktf.booleanToTerraform(this._isLocalBackupEnabled),
      is_sparse_diskgroup_enabled: cdktf.booleanToTerraform(this._isSparseDiskgroupEnabled),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      memory_size_in_gbs: cdktf.numberToTerraform(this._memorySizeInGbs),
      odb_network_id: cdktf.stringToTerraform(this._odbNetworkId),
      region: cdktf.stringToTerraform(this._region),
      scan_listener_port_tcp: cdktf.numberToTerraform(this._scanListenerPortTcp),
      ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeys),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      data_collection_options: cdktf.listMapper(odbCloudVmClusterDataCollectionOptionsToTerraform, true)(this._dataCollectionOptions.internalValue),
      timeouts: odbCloudVmClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_size_in_tbs: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInTbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_node_storage_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._dbNodeStorageSizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gi_version: {
        value: cdktf.stringToHclTerraform(this._giVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_prefix: {
        value: cdktf.stringToHclTerraform(this._hostnamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_local_backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._isLocalBackupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sparse_diskgroup_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSparseDiskgroupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._memorySizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      odb_network_id: {
        value: cdktf.stringToHclTerraform(this._odbNetworkId),
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
      scan_listener_port_tcp: {
        value: cdktf.numberToHclTerraform(this._scanListenerPortTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_collection_options: {
        value: cdktf.listMapperHcl(odbCloudVmClusterDataCollectionOptionsToHclTerraform, true)(this._dataCollectionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbCloudVmClusterDataCollectionOptionsList",
      },
      timeouts: {
        value: odbCloudVmClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OdbCloudVmClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
