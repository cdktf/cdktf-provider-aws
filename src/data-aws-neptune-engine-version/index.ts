/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsNeptuneEngineVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#default_only DataAwsNeptuneEngineVersion#default_only}
  */
  readonly defaultOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#has_major_target DataAwsNeptuneEngineVersion#has_major_target}
  */
  readonly hasMajorTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#has_minor_target DataAwsNeptuneEngineVersion#has_minor_target}
  */
  readonly hasMinorTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#latest DataAwsNeptuneEngineVersion#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}
  */
  readonly parameterGroupFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#preferred_major_targets DataAwsNeptuneEngineVersion#preferred_major_targets}
  */
  readonly preferredMajorTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#preferred_upgrade_targets DataAwsNeptuneEngineVersion#preferred_upgrade_targets}
  */
  readonly preferredUpgradeTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}
  */
  readonly preferredVersions?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#region DataAwsNeptuneEngineVersion#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version aws_neptune_engine_version}
*/
export class DataAwsNeptuneEngineVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_neptune_engine_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsNeptuneEngineVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsNeptuneEngineVersion to import
  * @param importFromId The id of the existing DataAwsNeptuneEngineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsNeptuneEngineVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_neptune_engine_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/neptune_engine_version aws_neptune_engine_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNeptuneEngineVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsNeptuneEngineVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_neptune_engine_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
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
    this._defaultOnly = config.defaultOnly;
    this._engine = config.engine;
    this._hasMajorTarget = config.hasMajorTarget;
    this._hasMinorTarget = config.hasMinorTarget;
    this._id = config.id;
    this._latest = config.latest;
    this._parameterGroupFamily = config.parameterGroupFamily;
    this._preferredMajorTargets = config.preferredMajorTargets;
    this._preferredUpgradeTargets = config.preferredUpgradeTargets;
    this._preferredVersions = config.preferredVersions;
    this._region = config.region;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_character_set - computed: true, optional: false, required: false
  public get defaultCharacterSet() {
    return this.getStringAttribute('default_character_set');
  }

  // default_only - computed: false, optional: true, required: false
  private _defaultOnly?: boolean | cdktf.IResolvable; 
  public get defaultOnly() {
    return this.getBooleanAttribute('default_only');
  }
  public set defaultOnly(value: boolean | cdktf.IResolvable) {
    this._defaultOnly = value;
  }
  public resetDefaultOnly() {
    this._defaultOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOnlyInput() {
    return this._defaultOnly;
  }

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
    return cdktf.Fn.tolist(this.getListAttribute('exportable_log_types'));
  }

  // has_major_target - computed: false, optional: true, required: false
  private _hasMajorTarget?: boolean | cdktf.IResolvable; 
  public get hasMajorTarget() {
    return this.getBooleanAttribute('has_major_target');
  }
  public set hasMajorTarget(value: boolean | cdktf.IResolvable) {
    this._hasMajorTarget = value;
  }
  public resetHasMajorTarget() {
    this._hasMajorTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasMajorTargetInput() {
    return this._hasMajorTarget;
  }

  // has_minor_target - computed: false, optional: true, required: false
  private _hasMinorTarget?: boolean | cdktf.IResolvable; 
  public get hasMinorTarget() {
    return this.getBooleanAttribute('has_minor_target');
  }
  public set hasMinorTarget(value: boolean | cdktf.IResolvable) {
    this._hasMinorTarget = value;
  }
  public resetHasMinorTarget() {
    this._hasMinorTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasMinorTargetInput() {
    return this._hasMinorTarget;
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

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean | cdktf.IResolvable; 
  public get latest() {
    return this.getBooleanAttribute('latest');
  }
  public set latest(value: boolean | cdktf.IResolvable) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
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

  // preferred_major_targets - computed: false, optional: true, required: false
  private _preferredMajorTargets?: string[]; 
  public get preferredMajorTargets() {
    return this.getListAttribute('preferred_major_targets');
  }
  public set preferredMajorTargets(value: string[]) {
    this._preferredMajorTargets = value;
  }
  public resetPreferredMajorTargets() {
    this._preferredMajorTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMajorTargetsInput() {
    return this._preferredMajorTargets;
  }

  // preferred_upgrade_targets - computed: false, optional: true, required: false
  private _preferredUpgradeTargets?: string[]; 
  public get preferredUpgradeTargets() {
    return this.getListAttribute('preferred_upgrade_targets');
  }
  public set preferredUpgradeTargets(value: string[]) {
    this._preferredUpgradeTargets = value;
  }
  public resetPreferredUpgradeTargets() {
    this._preferredUpgradeTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUpgradeTargetsInput() {
    return this._preferredUpgradeTargets;
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

  // supported_character_sets - computed: true, optional: false, required: false
  public get supportedCharacterSets() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_character_sets'));
  }

  // supported_timezones - computed: true, optional: false, required: false
  public get supportedTimezones() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_timezones'));
  }

  // supports_global_databases - computed: true, optional: false, required: false
  public get supportsGlobalDatabases() {
    return this.getBooleanAttribute('supports_global_databases');
  }

  // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
  public get supportsLogExportsToCloudwatch() {
    return this.getBooleanAttribute('supports_log_exports_to_cloudwatch');
  }

  // supports_read_replica - computed: true, optional: false, required: false
  public get supportsReadReplica() {
    return this.getBooleanAttribute('supports_read_replica');
  }

  // valid_major_targets - computed: true, optional: false, required: false
  public get validMajorTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_major_targets'));
  }

  // valid_minor_targets - computed: true, optional: false, required: false
  public get validMinorTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_minor_targets'));
  }

  // valid_upgrade_targets - computed: true, optional: false, required: false
  public get validUpgradeTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_upgrade_targets'));
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

  // version_actual - computed: true, optional: false, required: false
  public get versionActual() {
    return this.getStringAttribute('version_actual');
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
      default_only: cdktf.booleanToTerraform(this._defaultOnly),
      engine: cdktf.stringToTerraform(this._engine),
      has_major_target: cdktf.booleanToTerraform(this._hasMajorTarget),
      has_minor_target: cdktf.booleanToTerraform(this._hasMinorTarget),
      id: cdktf.stringToTerraform(this._id),
      latest: cdktf.booleanToTerraform(this._latest),
      parameter_group_family: cdktf.stringToTerraform(this._parameterGroupFamily),
      preferred_major_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredMajorTargets),
      preferred_upgrade_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredUpgradeTargets),
      preferred_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredVersions),
      region: cdktf.stringToTerraform(this._region),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_only: {
        value: cdktf.booleanToHclTerraform(this._defaultOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_major_target: {
        value: cdktf.booleanToHclTerraform(this._hasMajorTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_minor_target: {
        value: cdktf.booleanToHclTerraform(this._hasMinorTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest: {
        value: cdktf.booleanToHclTerraform(this._latest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parameter_group_family: {
        value: cdktf.stringToHclTerraform(this._parameterGroupFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_major_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredMajorTargets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferred_upgrade_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredUpgradeTargets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferred_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
