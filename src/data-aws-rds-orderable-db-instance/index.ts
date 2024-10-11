/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}
  */
  readonly availabilityZoneGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#engine_latest_version DataAwsRdsOrderableDbInstance#engine_latest_version}
  */
  readonly engineLatestVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}
  */
  readonly preferredEngineVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}
  */
  readonly preferredInstanceClasses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#read_replica_capable DataAwsRdsOrderableDbInstance#read_replica_capable}
  */
  readonly readReplicaCapable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supported_engine_modes DataAwsRdsOrderableDbInstance#supported_engine_modes}
  */
  readonly supportedEngineModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supported_network_types DataAwsRdsOrderableDbInstance#supported_network_types}
  */
  readonly supportedNetworkTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_clusters DataAwsRdsOrderableDbInstance#supports_clusters}
  */
  readonly supportsClusters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}
  */
  readonly supportsEnhancedMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}
  */
  readonly supportsGlobalDatabases?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}
  */
  readonly supportsIamDatabaseAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}
  */
  readonly supportsIops?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}
  */
  readonly supportsKerberosAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_multi_az DataAwsRdsOrderableDbInstance#supports_multi_az}
  */
  readonly supportsMultiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}
  */
  readonly supportsPerformanceInsights?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}
  */
  readonly supportsStorageAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}
  */
  readonly supportsStorageEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}
  */
  readonly vpc?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance aws_rds_orderable_db_instance}
*/
export class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_orderable_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRdsOrderableDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRdsOrderableDbInstance to import
  * @param importFromId The id of the existing DataAwsRdsOrderableDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRdsOrderableDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_orderable_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/rds_orderable_db_instance aws_rds_orderable_db_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsOrderableDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsOrderableDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_orderable_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.71.0',
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
    this._availabilityZoneGroup = config.availabilityZoneGroup;
    this._engine = config.engine;
    this._engineLatestVersion = config.engineLatestVersion;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._licenseModel = config.licenseModel;
    this._preferredEngineVersions = config.preferredEngineVersions;
    this._preferredInstanceClasses = config.preferredInstanceClasses;
    this._readReplicaCapable = config.readReplicaCapable;
    this._storageType = config.storageType;
    this._supportedEngineModes = config.supportedEngineModes;
    this._supportedNetworkTypes = config.supportedNetworkTypes;
    this._supportsClusters = config.supportsClusters;
    this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
    this._supportsGlobalDatabases = config.supportsGlobalDatabases;
    this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
    this._supportsIops = config.supportsIops;
    this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
    this._supportsMultiAz = config.supportsMultiAz;
    this._supportsPerformanceInsights = config.supportsPerformanceInsights;
    this._supportsStorageAutoscaling = config.supportsStorageAutoscaling;
    this._supportsStorageEncryption = config.supportsStorageEncryption;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone_group - computed: true, optional: true, required: false
  private _availabilityZoneGroup?: string; 
  public get availabilityZoneGroup() {
    return this.getStringAttribute('availability_zone_group');
  }
  public set availabilityZoneGroup(value: string) {
    this._availabilityZoneGroup = value;
  }
  public resetAvailabilityZoneGroup() {
    this._availabilityZoneGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneGroupInput() {
    return this._availabilityZoneGroup;
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_latest_version - computed: false, optional: true, required: false
  private _engineLatestVersion?: boolean | cdktf.IResolvable; 
  public get engineLatestVersion() {
    return this.getBooleanAttribute('engine_latest_version');
  }
  public set engineLatestVersion(value: boolean | cdktf.IResolvable) {
    this._engineLatestVersion = value;
  }
  public resetEngineLatestVersion() {
    this._engineLatestVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineLatestVersionInput() {
    return this._engineLatestVersion;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
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

  // max_iops_per_db_instance - computed: true, optional: false, required: false
  public get maxIopsPerDbInstance() {
    return this.getNumberAttribute('max_iops_per_db_instance');
  }

  // max_iops_per_gib - computed: true, optional: false, required: false
  public get maxIopsPerGib() {
    return this.getNumberAttribute('max_iops_per_gib');
  }

  // max_storage_size - computed: true, optional: false, required: false
  public get maxStorageSize() {
    return this.getNumberAttribute('max_storage_size');
  }

  // min_iops_per_db_instance - computed: true, optional: false, required: false
  public get minIopsPerDbInstance() {
    return this.getNumberAttribute('min_iops_per_db_instance');
  }

  // min_iops_per_gib - computed: true, optional: false, required: false
  public get minIopsPerGib() {
    return this.getNumberAttribute('min_iops_per_gib');
  }

  // min_storage_size - computed: true, optional: false, required: false
  public get minStorageSize() {
    return this.getNumberAttribute('min_storage_size');
  }

  // multi_az_capable - computed: true, optional: false, required: false
  public get multiAzCapable() {
    return this.getBooleanAttribute('multi_az_capable');
  }

  // outpost_capable - computed: true, optional: false, required: false
  public get outpostCapable() {
    return this.getBooleanAttribute('outpost_capable');
  }

  // preferred_engine_versions - computed: false, optional: true, required: false
  private _preferredEngineVersions?: string[]; 
  public get preferredEngineVersions() {
    return this.getListAttribute('preferred_engine_versions');
  }
  public set preferredEngineVersions(value: string[]) {
    this._preferredEngineVersions = value;
  }
  public resetPreferredEngineVersions() {
    this._preferredEngineVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredEngineVersionsInput() {
    return this._preferredEngineVersions;
  }

  // preferred_instance_classes - computed: false, optional: true, required: false
  private _preferredInstanceClasses?: string[]; 
  public get preferredInstanceClasses() {
    return this.getListAttribute('preferred_instance_classes');
  }
  public set preferredInstanceClasses(value: string[]) {
    this._preferredInstanceClasses = value;
  }
  public resetPreferredInstanceClasses() {
    this._preferredInstanceClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInstanceClassesInput() {
    return this._preferredInstanceClasses;
  }

  // read_replica_capable - computed: true, optional: true, required: false
  private _readReplicaCapable?: boolean | cdktf.IResolvable; 
  public get readReplicaCapable() {
    return this.getBooleanAttribute('read_replica_capable');
  }
  public set readReplicaCapable(value: boolean | cdktf.IResolvable) {
    this._readReplicaCapable = value;
  }
  public resetReadReplicaCapable() {
    this._readReplicaCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicaCapableInput() {
    return this._readReplicaCapable;
  }

  // storage_type - computed: true, optional: true, required: false
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

  // supported_engine_modes - computed: true, optional: true, required: false
  private _supportedEngineModes?: string[]; 
  public get supportedEngineModes() {
    return this.getListAttribute('supported_engine_modes');
  }
  public set supportedEngineModes(value: string[]) {
    this._supportedEngineModes = value;
  }
  public resetSupportedEngineModes() {
    this._supportedEngineModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedEngineModesInput() {
    return this._supportedEngineModes;
  }

  // supported_network_types - computed: true, optional: true, required: false
  private _supportedNetworkTypes?: string[]; 
  public get supportedNetworkTypes() {
    return this.getListAttribute('supported_network_types');
  }
  public set supportedNetworkTypes(value: string[]) {
    this._supportedNetworkTypes = value;
  }
  public resetSupportedNetworkTypes() {
    this._supportedNetworkTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedNetworkTypesInput() {
    return this._supportedNetworkTypes;
  }

  // supports_clusters - computed: true, optional: true, required: false
  private _supportsClusters?: boolean | cdktf.IResolvable; 
  public get supportsClusters() {
    return this.getBooleanAttribute('supports_clusters');
  }
  public set supportsClusters(value: boolean | cdktf.IResolvable) {
    this._supportsClusters = value;
  }
  public resetSupportsClusters() {
    this._supportsClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsClustersInput() {
    return this._supportsClusters;
  }

  // supports_enhanced_monitoring - computed: true, optional: true, required: false
  private _supportsEnhancedMonitoring?: boolean | cdktf.IResolvable; 
  public get supportsEnhancedMonitoring() {
    return this.getBooleanAttribute('supports_enhanced_monitoring');
  }
  public set supportsEnhancedMonitoring(value: boolean | cdktf.IResolvable) {
    this._supportsEnhancedMonitoring = value;
  }
  public resetSupportsEnhancedMonitoring() {
    this._supportsEnhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsEnhancedMonitoringInput() {
    return this._supportsEnhancedMonitoring;
  }

  // supports_global_databases - computed: true, optional: true, required: false
  private _supportsGlobalDatabases?: boolean | cdktf.IResolvable; 
  public get supportsGlobalDatabases() {
    return this.getBooleanAttribute('supports_global_databases');
  }
  public set supportsGlobalDatabases(value: boolean | cdktf.IResolvable) {
    this._supportsGlobalDatabases = value;
  }
  public resetSupportsGlobalDatabases() {
    this._supportsGlobalDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsGlobalDatabasesInput() {
    return this._supportsGlobalDatabases;
  }

  // supports_iam_database_authentication - computed: true, optional: true, required: false
  private _supportsIamDatabaseAuthentication?: boolean | cdktf.IResolvable; 
  public get supportsIamDatabaseAuthentication() {
    return this.getBooleanAttribute('supports_iam_database_authentication');
  }
  public set supportsIamDatabaseAuthentication(value: boolean | cdktf.IResolvable) {
    this._supportsIamDatabaseAuthentication = value;
  }
  public resetSupportsIamDatabaseAuthentication() {
    this._supportsIamDatabaseAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsIamDatabaseAuthenticationInput() {
    return this._supportsIamDatabaseAuthentication;
  }

  // supports_iops - computed: true, optional: true, required: false
  private _supportsIops?: boolean | cdktf.IResolvable; 
  public get supportsIops() {
    return this.getBooleanAttribute('supports_iops');
  }
  public set supportsIops(value: boolean | cdktf.IResolvable) {
    this._supportsIops = value;
  }
  public resetSupportsIops() {
    this._supportsIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsIopsInput() {
    return this._supportsIops;
  }

  // supports_kerberos_authentication - computed: true, optional: true, required: false
  private _supportsKerberosAuthentication?: boolean | cdktf.IResolvable; 
  public get supportsKerberosAuthentication() {
    return this.getBooleanAttribute('supports_kerberos_authentication');
  }
  public set supportsKerberosAuthentication(value: boolean | cdktf.IResolvable) {
    this._supportsKerberosAuthentication = value;
  }
  public resetSupportsKerberosAuthentication() {
    this._supportsKerberosAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsKerberosAuthenticationInput() {
    return this._supportsKerberosAuthentication;
  }

  // supports_multi_az - computed: true, optional: true, required: false
  private _supportsMultiAz?: boolean | cdktf.IResolvable; 
  public get supportsMultiAz() {
    return this.getBooleanAttribute('supports_multi_az');
  }
  public set supportsMultiAz(value: boolean | cdktf.IResolvable) {
    this._supportsMultiAz = value;
  }
  public resetSupportsMultiAz() {
    this._supportsMultiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsMultiAzInput() {
    return this._supportsMultiAz;
  }

  // supports_performance_insights - computed: true, optional: true, required: false
  private _supportsPerformanceInsights?: boolean | cdktf.IResolvable; 
  public get supportsPerformanceInsights() {
    return this.getBooleanAttribute('supports_performance_insights');
  }
  public set supportsPerformanceInsights(value: boolean | cdktf.IResolvable) {
    this._supportsPerformanceInsights = value;
  }
  public resetSupportsPerformanceInsights() {
    this._supportsPerformanceInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsPerformanceInsightsInput() {
    return this._supportsPerformanceInsights;
  }

  // supports_storage_autoscaling - computed: true, optional: true, required: false
  private _supportsStorageAutoscaling?: boolean | cdktf.IResolvable; 
  public get supportsStorageAutoscaling() {
    return this.getBooleanAttribute('supports_storage_autoscaling');
  }
  public set supportsStorageAutoscaling(value: boolean | cdktf.IResolvable) {
    this._supportsStorageAutoscaling = value;
  }
  public resetSupportsStorageAutoscaling() {
    this._supportsStorageAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsStorageAutoscalingInput() {
    return this._supportsStorageAutoscaling;
  }

  // supports_storage_encryption - computed: true, optional: true, required: false
  private _supportsStorageEncryption?: boolean | cdktf.IResolvable; 
  public get supportsStorageEncryption() {
    return this.getBooleanAttribute('supports_storage_encryption');
  }
  public set supportsStorageEncryption(value: boolean | cdktf.IResolvable) {
    this._supportsStorageEncryption = value;
  }
  public resetSupportsStorageEncryption() {
    this._supportsStorageEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsStorageEncryptionInput() {
    return this._supportsStorageEncryption;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: boolean | cdktf.IResolvable; 
  public get vpc() {
    return this.getBooleanAttribute('vpc');
  }
  public set vpc(value: boolean | cdktf.IResolvable) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
      engine: cdktf.stringToTerraform(this._engine),
      engine_latest_version: cdktf.booleanToTerraform(this._engineLatestVersion),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredEngineVersions),
      preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredInstanceClasses),
      read_replica_capable: cdktf.booleanToTerraform(this._readReplicaCapable),
      storage_type: cdktf.stringToTerraform(this._storageType),
      supported_engine_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedEngineModes),
      supported_network_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedNetworkTypes),
      supports_clusters: cdktf.booleanToTerraform(this._supportsClusters),
      supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
      supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
      supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
      supports_iops: cdktf.booleanToTerraform(this._supportsIops),
      supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
      supports_multi_az: cdktf.booleanToTerraform(this._supportsMultiAz),
      supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
      supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
      supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
      vpc: cdktf.booleanToTerraform(this._vpc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone_group: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_latest_version: {
        value: cdktf.booleanToHclTerraform(this._engineLatestVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_engine_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredEngineVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferred_instance_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredInstanceClasses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      read_replica_capable: {
        value: cdktf.booleanToHclTerraform(this._readReplicaCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_engine_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedEngineModes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      supported_network_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedNetworkTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      supports_clusters: {
        value: cdktf.booleanToHclTerraform(this._supportsClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_enhanced_monitoring: {
        value: cdktf.booleanToHclTerraform(this._supportsEnhancedMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_global_databases: {
        value: cdktf.booleanToHclTerraform(this._supportsGlobalDatabases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_iam_database_authentication: {
        value: cdktf.booleanToHclTerraform(this._supportsIamDatabaseAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_iops: {
        value: cdktf.booleanToHclTerraform(this._supportsIops),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_kerberos_authentication: {
        value: cdktf.booleanToHclTerraform(this._supportsKerberosAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_multi_az: {
        value: cdktf.booleanToHclTerraform(this._supportsMultiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_performance_insights: {
        value: cdktf.booleanToHclTerraform(this._supportsPerformanceInsights),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_storage_autoscaling: {
        value: cdktf.booleanToHclTerraform(this._supportsStorageAutoscaling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supports_storage_encryption: {
        value: cdktf.booleanToHclTerraform(this._supportsStorageEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc: {
        value: cdktf.booleanToHclTerraform(this._vpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
