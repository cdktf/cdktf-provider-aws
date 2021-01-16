// https://www.terraform.io/docs/providers/aws/r/data_aws_docdb_engine_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsDocdbEngineVersionConfig extends TerraformMetaArguments {
  readonly engine?: string;
  readonly parameterGroupFamily?: string;
  readonly preferredVersions?: string[];
  readonly version?: string;
}

// Resource

export class DataAwsDocdbEngineVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsDocdbEngineVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_engine_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._engine = config.engine;
    this._parameterGroupFamily = config.parameterGroupFamily;
    this._preferredVersions = config.preferredVersions;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine - computed: false, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this._engine;
  }
  public set engine(value: string | undefined) {
    this._engine = value;
  }

  // engine_description - computed: true, optional: false, required: true
  public get engineDescription() {
    return this.getStringAttribute('engine_description');
  }

  // exportable_log_types - computed: true, optional: false, required: true
  public get exportableLogTypes() {
    return this.getListAttribute('exportable_log_types');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // parameter_group_family - computed: true, optional: true, required: false
  private _parameterGroupFamily?: string;
  public get parameterGroupFamily() {
    return this._parameterGroupFamily ?? this.getStringAttribute('parameter_group_family');
  }
  public set parameterGroupFamily(value: string | undefined) {
    this._parameterGroupFamily = value;
  }

  // preferred_versions - computed: false, optional: true, required: false
  private _preferredVersions?: string[];
  public get preferredVersions() {
    return this._preferredVersions;
  }
  public set preferredVersions(value: string[] | undefined) {
    this._preferredVersions = value;
  }

  // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: true
  public get supportsLogExportsToCloudwatch() {
    return this.getBooleanAttribute('supports_log_exports_to_cloudwatch');
  }

  // valid_upgrade_targets - computed: true, optional: false, required: true
  public get validUpgradeTargets() {
    return this.getListAttribute('valid_upgrade_targets');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // version_description - computed: true, optional: false, required: true
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine: this._engine,
      parameter_group_family: this._parameterGroupFamily,
      preferred_versions: this._preferredVersions,
      version: this._version,
    };
  }
}
