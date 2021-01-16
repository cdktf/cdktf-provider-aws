// https://www.terraform.io/docs/providers/aws/r/data_aws_neptune_orderable_db_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsNeptuneOrderableDbInstanceConfig extends TerraformMetaArguments {
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly instanceClass?: string;
  readonly licenseModel?: string;
  readonly preferredInstanceClasses?: string[];
  readonly vpc?: boolean;
}

// Resource

export class DataAwsNeptuneOrderableDbInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsNeptuneOrderableDbInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_neptune_orderable_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._instanceClass = config.instanceClass;
    this._licenseModel = config.licenseModel;
    this._preferredInstanceClasses = config.preferredInstanceClasses;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this._engine;
  }
  public set engine(value: string | undefined) {
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

  // license_model - computed: false, optional: true, required: false
  private _licenseModel?: string;
  public get licenseModel() {
    return this._licenseModel;
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

  // storage_type - computed: true, optional: false, required: true
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // supports_enhanced_monitoring - computed: true, optional: false, required: true
  public get supportsEnhancedMonitoring() {
    return this.getBooleanAttribute('supports_enhanced_monitoring');
  }

  // supports_iam_database_authentication - computed: true, optional: false, required: true
  public get supportsIamDatabaseAuthentication() {
    return this.getBooleanAttribute('supports_iam_database_authentication');
  }

  // supports_iops - computed: true, optional: false, required: true
  public get supportsIops() {
    return this.getBooleanAttribute('supports_iops');
  }

  // supports_performance_insights - computed: true, optional: false, required: true
  public get supportsPerformanceInsights() {
    return this.getBooleanAttribute('supports_performance_insights');
  }

  // supports_storage_encryption - computed: true, optional: false, required: true
  public get supportsStorageEncryption() {
    return this.getBooleanAttribute('supports_storage_encryption');
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
      engine: this._engine,
      engine_version: this._engineVersion,
      instance_class: this._instanceClass,
      license_model: this._licenseModel,
      preferred_instance_classes: this._preferredInstanceClasses,
      vpc: this._vpc,
    };
  }
}
