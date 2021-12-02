// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Neptune
*/
export interface DataAwsNeptuneEngineVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#engine DataAwsNeptuneEngineVersion#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}
  */
  readonly parameterGroupFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}
  */
  readonly preferredVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html#version DataAwsNeptuneEngineVersion#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version}
*/
export class DataAwsNeptuneEngineVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_neptune_engine_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNeptuneEngineVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsNeptuneEngineVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_neptune_engine_version',
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
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_description - computed: true, optional: false, required: false
  public get engineDescription() {
    return this.getStringAttribute('engine_description');
  }

  // exportable_log_types - computed: true, optional: false, required: false
  public get exportableLogTypes() {
    return this.getListAttribute('exportable_log_types');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parameter_group_family - computed: true, optional: true, required: false
  private _parameterGroupFamily?: string; 
  public get parameterGroupFamily() {
    return this.getStringAttribute('parameter_group_family');
  }
  public set parameterGroupFamily(value: string) {
    this._parameterGroupFamily = value;
  }
  public resetParameterGroupFamily() {
    this._parameterGroupFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterGroupFamilyInput() {
    return this._parameterGroupFamily;
  }

  // preferred_versions - computed: false, optional: true, required: false
  private _preferredVersions?: string[]; 
  public get preferredVersions() {
    return this.getListAttribute('preferred_versions');
  }
  public set preferredVersions(value: string[]) {
    this._preferredVersions = value;
  }
  public resetPreferredVersions() {
    this._preferredVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredVersionsInput() {
    return this._preferredVersions;
  }

  // supported_timezones - computed: true, optional: false, required: false
  public get supportedTimezones() {
    return this.getListAttribute('supported_timezones');
  }

  // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
  public get supportsLogExportsToCloudwatch() {
    return this.getBooleanAttribute('supports_log_exports_to_cloudwatch') as any;
  }

  // supports_read_replica - computed: true, optional: false, required: false
  public get supportsReadReplica() {
    return this.getBooleanAttribute('supports_read_replica') as any;
  }

  // valid_upgrade_targets - computed: true, optional: false, required: false
  public get validUpgradeTargets() {
    return this.getListAttribute('valid_upgrade_targets');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_description - computed: true, optional: false, required: false
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine: cdktf.stringToTerraform(this._engine),
      parameter_group_family: cdktf.stringToTerraform(this._parameterGroupFamily),
      preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
      version: cdktf.stringToTerraform(this._version),
    };
  }
}
