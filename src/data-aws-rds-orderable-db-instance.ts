// https://www.terraform.io/docs/providers/aws/r/data_aws_rds_orderable_db_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
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

export class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {

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
    return this._availabilityZoneGroup
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // engine - computed: false, optional: false, required: true
  private _engine: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
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
    return this._engineVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._instanceClass
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
    return this._licenseModel
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
  public set preferredEngineVersions(value: string[] ) {
    this._preferredEngineVersions = value;
  }
  public resetPreferredEngineVersions() {
    this._preferredEngineVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredEngineVersionsInput() {
    return this._preferredEngineVersions
  }

  // preferred_instance_classes - computed: false, optional: true, required: false
  private _preferredInstanceClasses?: string[];
  public get preferredInstanceClasses() {
    return this.getListAttribute('preferred_instance_classes');
  }
  public set preferredInstanceClasses(value: string[] ) {
    this._preferredInstanceClasses = value;
  }
  public resetPreferredInstanceClasses() {
    this._preferredInstanceClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInstanceClassesInput() {
    return this._preferredInstanceClasses
  }

  // read_replica_capable - computed: true, optional: false, required: false
  public get readReplicaCapable() {
    return this.getBooleanAttribute('read_replica_capable');
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
    return this._storageType
  }

  // supported_engine_modes - computed: true, optional: false, required: false
  public get supportedEngineModes() {
    return this.getListAttribute('supported_engine_modes');
  }

  // supports_enhanced_monitoring - computed: true, optional: true, required: false
  private _supportsEnhancedMonitoring?: boolean;
  public get supportsEnhancedMonitoring() {
    return this.getBooleanAttribute('supports_enhanced_monitoring');
  }
  public set supportsEnhancedMonitoring(value: boolean) {
    this._supportsEnhancedMonitoring = value;
  }
  public resetSupportsEnhancedMonitoring() {
    this._supportsEnhancedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsEnhancedMonitoringInput() {
    return this._supportsEnhancedMonitoring
  }

  // supports_global_databases - computed: true, optional: true, required: false
  private _supportsGlobalDatabases?: boolean;
  public get supportsGlobalDatabases() {
    return this.getBooleanAttribute('supports_global_databases');
  }
  public set supportsGlobalDatabases(value: boolean) {
    this._supportsGlobalDatabases = value;
  }
  public resetSupportsGlobalDatabases() {
    this._supportsGlobalDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsGlobalDatabasesInput() {
    return this._supportsGlobalDatabases
  }

  // supports_iam_database_authentication - computed: true, optional: true, required: false
  private _supportsIamDatabaseAuthentication?: boolean;
  public get supportsIamDatabaseAuthentication() {
    return this.getBooleanAttribute('supports_iam_database_authentication');
  }
  public set supportsIamDatabaseAuthentication(value: boolean) {
    this._supportsIamDatabaseAuthentication = value;
  }
  public resetSupportsIamDatabaseAuthentication() {
    this._supportsIamDatabaseAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsIamDatabaseAuthenticationInput() {
    return this._supportsIamDatabaseAuthentication
  }

  // supports_iops - computed: true, optional: true, required: false
  private _supportsIops?: boolean;
  public get supportsIops() {
    return this.getBooleanAttribute('supports_iops');
  }
  public set supportsIops(value: boolean) {
    this._supportsIops = value;
  }
  public resetSupportsIops() {
    this._supportsIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsIopsInput() {
    return this._supportsIops
  }

  // supports_kerberos_authentication - computed: true, optional: true, required: false
  private _supportsKerberosAuthentication?: boolean;
  public get supportsKerberosAuthentication() {
    return this.getBooleanAttribute('supports_kerberos_authentication');
  }
  public set supportsKerberosAuthentication(value: boolean) {
    this._supportsKerberosAuthentication = value;
  }
  public resetSupportsKerberosAuthentication() {
    this._supportsKerberosAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsKerberosAuthenticationInput() {
    return this._supportsKerberosAuthentication
  }

  // supports_performance_insights - computed: true, optional: true, required: false
  private _supportsPerformanceInsights?: boolean;
  public get supportsPerformanceInsights() {
    return this.getBooleanAttribute('supports_performance_insights');
  }
  public set supportsPerformanceInsights(value: boolean) {
    this._supportsPerformanceInsights = value;
  }
  public resetSupportsPerformanceInsights() {
    this._supportsPerformanceInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsPerformanceInsightsInput() {
    return this._supportsPerformanceInsights
  }

  // supports_storage_autoscaling - computed: true, optional: true, required: false
  private _supportsStorageAutoscaling?: boolean;
  public get supportsStorageAutoscaling() {
    return this.getBooleanAttribute('supports_storage_autoscaling');
  }
  public set supportsStorageAutoscaling(value: boolean) {
    this._supportsStorageAutoscaling = value;
  }
  public resetSupportsStorageAutoscaling() {
    this._supportsStorageAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsStorageAutoscalingInput() {
    return this._supportsStorageAutoscaling
  }

  // supports_storage_encryption - computed: true, optional: true, required: false
  private _supportsStorageEncryption?: boolean;
  public get supportsStorageEncryption() {
    return this.getBooleanAttribute('supports_storage_encryption');
  }
  public set supportsStorageEncryption(value: boolean) {
    this._supportsStorageEncryption = value;
  }
  public resetSupportsStorageEncryption() {
    this._supportsStorageEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsStorageEncryptionInput() {
    return this._supportsStorageEncryption
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: boolean;
  public get vpc() {
    return this.getBooleanAttribute('vpc');
  }
  public set vpc(value: boolean) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredEngineVersions),
      preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
      storage_type: cdktf.stringToTerraform(this._storageType),
      supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
      supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
      supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
      supports_iops: cdktf.booleanToTerraform(this._supportsIops),
      supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
      supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
      supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
      supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
      vpc: cdktf.booleanToTerraform(this._vpc),
    };
  }
}
