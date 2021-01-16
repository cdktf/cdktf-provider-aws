// https://www.terraform.io/docs/providers/aws/r/data_aws_rds_orderable_db_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRdsOrderableDbInstanceConfig extends TerraformMetaArguments {
  readonly availabilityZoneGroup?: string;
  readonly engine: string;
  readonly engineVersion?: string;
  readonly instanceClass?: string;
  readonly licenseModel?: string;
  readonly preferredEngineVersions?: string[];
  readonly preferredInstanceClasses?: string[];
  readonly storageType?: string;
  readonly supportsEnhancedMonitoring?: boolean;
  readonly supportsGlobalDatabases?: boolean;
  readonly supportsIamDatabaseAuthentication?: boolean;
  readonly supportsIops?: boolean;
  readonly supportsKerberosAuthentication?: boolean;
  readonly supportsPerformanceInsights?: boolean;
  readonly supportsStorageAutoscaling?: boolean;
  readonly supportsStorageEncryption?: boolean;
  readonly vpc?: boolean;
}

// Resource

export class DataAwsRdsOrderableDbInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRdsOrderableDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_orderable_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZoneGroup = config.availabilityZoneGroup;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._instanceClass = config.instanceClass;
    this._licenseModel = config.licenseModel;
    this._preferredEngineVersions = config.preferredEngineVersions;
    this._preferredInstanceClasses = config.preferredInstanceClasses;
    this._storageType = config.storageType;
    this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
    this._supportsGlobalDatabases = config.supportsGlobalDatabases;
    this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
    this._supportsIops = config.supportsIops;
    this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
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
    return this._availabilityZoneGroup ?? this.getStringAttribute('availability_zone_group');
  }
  public set availabilityZoneGroup(value: string | undefined) {
    this._availabilityZoneGroup = value;
  }

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // engine - computed: false, optional: false, required: true
  private _engine: string;
  public get engine() {
    return this._engine;
  }
  public set engine(value: string) {
    this._engine = value;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this._engineVersion ?? this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string | undefined) {
    this._engineVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string;
  public get instanceClass() {
    return this._instanceClass ?? this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string | undefined) {
    this._instanceClass = value;
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string;
  public get licenseModel() {
    return this._licenseModel ?? this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string | undefined) {
    this._licenseModel = value;
  }

  // max_iops_per_db_instance - computed: true, optional: false, required: true
  public get maxIopsPerDbInstance() {
    return this.getNumberAttribute('max_iops_per_db_instance');
  }

  // max_iops_per_gib - computed: true, optional: false, required: true
  public get maxIopsPerGib() {
    return this.getNumberAttribute('max_iops_per_gib');
  }

  // max_storage_size - computed: true, optional: false, required: true
  public get maxStorageSize() {
    return this.getNumberAttribute('max_storage_size');
  }

  // min_iops_per_db_instance - computed: true, optional: false, required: true
  public get minIopsPerDbInstance() {
    return this.getNumberAttribute('min_iops_per_db_instance');
  }

  // min_iops_per_gib - computed: true, optional: false, required: true
  public get minIopsPerGib() {
    return this.getNumberAttribute('min_iops_per_gib');
  }

  // min_storage_size - computed: true, optional: false, required: true
  public get minStorageSize() {
    return this.getNumberAttribute('min_storage_size');
  }

  // multi_az_capable - computed: true, optional: false, required: true
  public get multiAzCapable() {
    return this.getBooleanAttribute('multi_az_capable');
  }

  // outpost_capable - computed: true, optional: false, required: true
  public get outpostCapable() {
    return this.getBooleanAttribute('outpost_capable');
  }

  // preferred_engine_versions - computed: false, optional: true, required: false
  private _preferredEngineVersions?: string[];
  public get preferredEngineVersions() {
    return this._preferredEngineVersions;
  }
  public set preferredEngineVersions(value: string[] | undefined) {
    this._preferredEngineVersions = value;
  }

  // preferred_instance_classes - computed: false, optional: true, required: false
  private _preferredInstanceClasses?: string[];
  public get preferredInstanceClasses() {
    return this._preferredInstanceClasses;
  }
  public set preferredInstanceClasses(value: string[] | undefined) {
    this._preferredInstanceClasses = value;
  }

  // read_replica_capable - computed: true, optional: false, required: true
  public get readReplicaCapable() {
    return this.getBooleanAttribute('read_replica_capable');
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string;
  public get storageType() {
    return this._storageType ?? this.getStringAttribute('storage_type');
  }
  public set storageType(value: string | undefined) {
    this._storageType = value;
  }

  // supported_engine_modes - computed: true, optional: false, required: true
  public get supportedEngineModes() {
    return this.getListAttribute('supported_engine_modes');
  }

  // supports_enhanced_monitoring - computed: true, optional: true, required: false
  private _supportsEnhancedMonitoring?: boolean;
  public get supportsEnhancedMonitoring() {
    return this._supportsEnhancedMonitoring ?? this.getBooleanAttribute('supports_enhanced_monitoring');
  }
  public set supportsEnhancedMonitoring(value: boolean | undefined) {
    this._supportsEnhancedMonitoring = value;
  }

  // supports_global_databases - computed: true, optional: true, required: false
  private _supportsGlobalDatabases?: boolean;
  public get supportsGlobalDatabases() {
    return this._supportsGlobalDatabases ?? this.getBooleanAttribute('supports_global_databases');
  }
  public set supportsGlobalDatabases(value: boolean | undefined) {
    this._supportsGlobalDatabases = value;
  }

  // supports_iam_database_authentication - computed: true, optional: true, required: false
  private _supportsIamDatabaseAuthentication?: boolean;
  public get supportsIamDatabaseAuthentication() {
    return this._supportsIamDatabaseAuthentication ?? this.getBooleanAttribute('supports_iam_database_authentication');
  }
  public set supportsIamDatabaseAuthentication(value: boolean | undefined) {
    this._supportsIamDatabaseAuthentication = value;
  }

  // supports_iops - computed: true, optional: true, required: false
  private _supportsIops?: boolean;
  public get supportsIops() {
    return this._supportsIops ?? this.getBooleanAttribute('supports_iops');
  }
  public set supportsIops(value: boolean | undefined) {
    this._supportsIops = value;
  }

  // supports_kerberos_authentication - computed: true, optional: true, required: false
  private _supportsKerberosAuthentication?: boolean;
  public get supportsKerberosAuthentication() {
    return this._supportsKerberosAuthentication ?? this.getBooleanAttribute('supports_kerberos_authentication');
  }
  public set supportsKerberosAuthentication(value: boolean | undefined) {
    this._supportsKerberosAuthentication = value;
  }

  // supports_performance_insights - computed: true, optional: true, required: false
  private _supportsPerformanceInsights?: boolean;
  public get supportsPerformanceInsights() {
    return this._supportsPerformanceInsights ?? this.getBooleanAttribute('supports_performance_insights');
  }
  public set supportsPerformanceInsights(value: boolean | undefined) {
    this._supportsPerformanceInsights = value;
  }

  // supports_storage_autoscaling - computed: true, optional: true, required: false
  private _supportsStorageAutoscaling?: boolean;
  public get supportsStorageAutoscaling() {
    return this._supportsStorageAutoscaling ?? this.getBooleanAttribute('supports_storage_autoscaling');
  }
  public set supportsStorageAutoscaling(value: boolean | undefined) {
    this._supportsStorageAutoscaling = value;
  }

  // supports_storage_encryption - computed: true, optional: true, required: false
  private _supportsStorageEncryption?: boolean;
  public get supportsStorageEncryption() {
    return this._supportsStorageEncryption ?? this.getBooleanAttribute('supports_storage_encryption');
  }
  public set supportsStorageEncryption(value: boolean | undefined) {
    this._supportsStorageEncryption = value;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: boolean;
  public get vpc() {
    return this._vpc ?? this.getBooleanAttribute('vpc');
  }
  public set vpc(value: boolean | undefined) {
    this._vpc = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_group: this._availabilityZoneGroup,
      engine: this._engine,
      engine_version: this._engineVersion,
      instance_class: this._instanceClass,
      license_model: this._licenseModel,
      preferred_engine_versions: this._preferredEngineVersions,
      preferred_instance_classes: this._preferredInstanceClasses,
      storage_type: this._storageType,
      supports_enhanced_monitoring: this._supportsEnhancedMonitoring,
      supports_global_databases: this._supportsGlobalDatabases,
      supports_iam_database_authentication: this._supportsIamDatabaseAuthentication,
      supports_iops: this._supportsIops,
      supports_kerberos_authentication: this._supportsKerberosAuthentication,
      supports_performance_insights: this._supportsPerformanceInsights,
      supports_storage_autoscaling: this._supportsStorageAutoscaling,
      supports_storage_encryption: this._supportsStorageEncryption,
      vpc: this._vpc,
    };
  }
}
