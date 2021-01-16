// https://www.terraform.io/docs/providers/aws/r/data_aws_docdb_orderable_db_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsDocdbOrderableDbInstanceConfig extends TerraformMetaArguments {
  readonly engine?: string;
  readonly engineVersion?: string;
  readonly instanceClass?: string;
  readonly licenseModel?: string;
  readonly preferredInstanceClasses?: string[];
  readonly vpc?: boolean;
}

// Resource

export class DataAwsDocdbOrderableDbInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDocdbOrderableDbInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_orderable_db_instance',
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

  // preferred_instance_classes - computed: false, optional: true, required: false
  private _preferredInstanceClasses?: string[];
  public get preferredInstanceClasses() {
    return this._preferredInstanceClasses;
  }
  public set preferredInstanceClasses(value: string[] | undefined) {
    this._preferredInstanceClasses = value;
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
