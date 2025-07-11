/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsEngineVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}
  */
  readonly defaultOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#engine DataAwsRdsEngineVersion#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#has_major_target DataAwsRdsEngineVersion#has_major_target}
  */
  readonly hasMajorTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#has_minor_target DataAwsRdsEngineVersion#has_minor_target}
  */
  readonly hasMinorTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#id DataAwsRdsEngineVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}
  */
  readonly includeAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#latest DataAwsRdsEngineVersion#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}
  */
  readonly parameterGroupFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#preferred_major_targets DataAwsRdsEngineVersion#preferred_major_targets}
  */
  readonly preferredMajorTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#preferred_upgrade_targets DataAwsRdsEngineVersion#preferred_upgrade_targets}
  */
  readonly preferredUpgradeTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}
  */
  readonly preferredVersions?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#region DataAwsRdsEngineVersion#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#version DataAwsRdsEngineVersion#version}
  */
  readonly version?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#filter DataAwsRdsEngineVersion#filter}
  */
  readonly filter?: DataAwsRdsEngineVersionFilter[] | cdktf.IResolvable;
}
export interface DataAwsRdsEngineVersionFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#name DataAwsRdsEngineVersion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#values DataAwsRdsEngineVersion#values}
  */
  readonly values: string[];
}

export function dataAwsRdsEngineVersionFilterToTerraform(struct?: DataAwsRdsEngineVersionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataAwsRdsEngineVersionFilterToHclTerraform(struct?: DataAwsRdsEngineVersionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsRdsEngineVersionFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsRdsEngineVersionFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRdsEngineVersionFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsRdsEngineVersionFilterList extends cdktf.ComplexList {
  public internalValue? : DataAwsRdsEngineVersionFilter[] | cdktf.IResolvable

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
  public get(index: number): DataAwsRdsEngineVersionFilterOutputReference {
    return new DataAwsRdsEngineVersionFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version aws_rds_engine_version}
*/
export class DataAwsRdsEngineVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_engine_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRdsEngineVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRdsEngineVersion to import
  * @param importFromId The id of the existing DataAwsRdsEngineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRdsEngineVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_engine_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/rds_engine_version aws_rds_engine_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsEngineVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsEngineVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_engine_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
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
    this._includeAll = config.includeAll;
    this._latest = config.latest;
    this._parameterGroupFamily = config.parameterGroupFamily;
    this._preferredMajorTargets = config.preferredMajorTargets;
    this._preferredUpgradeTargets = config.preferredUpgradeTargets;
    this._preferredVersions = config.preferredVersions;
    this._region = config.region;
    this._version = config.version;
    this._filter.internalValue = config.filter;
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

  // include_all - computed: false, optional: true, required: false
  private _includeAll?: boolean | cdktf.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktf.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supported_character_sets - computed: true, optional: false, required: false
  public get supportedCharacterSets() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_character_sets'));
  }

  // supported_feature_names - computed: true, optional: false, required: false
  public get supportedFeatureNames() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_feature_names'));
  }

  // supported_modes - computed: true, optional: false, required: false
  public get supportedModes() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_modes'));
  }

  // supported_timezones - computed: true, optional: false, required: false
  public get supportedTimezones() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_timezones'));
  }

  // supports_certificate_rotation_without_restart - computed: true, optional: false, required: false
  public get supportsCertificateRotationWithoutRestart() {
    return this.getBooleanAttribute('supports_certificate_rotation_without_restart');
  }

  // supports_global_databases - computed: true, optional: false, required: false
  public get supportsGlobalDatabases() {
    return this.getBooleanAttribute('supports_global_databases');
  }

  // supports_integrations - computed: true, optional: false, required: false
  public get supportsIntegrations() {
    return this.getBooleanAttribute('supports_integrations');
  }

  // supports_limitless_database - computed: true, optional: false, required: false
  public get supportsLimitlessDatabase() {
    return this.getBooleanAttribute('supports_limitless_database');
  }

  // supports_local_write_forwarding - computed: true, optional: false, required: false
  public get supportsLocalWriteForwarding() {
    return this.getBooleanAttribute('supports_local_write_forwarding');
  }

  // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
  public get supportsLogExportsToCloudwatch() {
    return this.getBooleanAttribute('supports_log_exports_to_cloudwatch');
  }

  // supports_parallel_query - computed: true, optional: false, required: false
  public get supportsParallelQuery() {
    return this.getBooleanAttribute('supports_parallel_query');
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsRdsEngineVersionFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsRdsEngineVersionFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
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
      include_all: cdktf.booleanToTerraform(this._includeAll),
      latest: cdktf.booleanToTerraform(this._latest),
      parameter_group_family: cdktf.stringToTerraform(this._parameterGroupFamily),
      preferred_major_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredMajorTargets),
      preferred_upgrade_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredUpgradeTargets),
      preferred_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredVersions),
      region: cdktf.stringToTerraform(this._region),
      version: cdktf.stringToTerraform(this._version),
      filter: cdktf.listMapper(dataAwsRdsEngineVersionFilterToTerraform, true)(this._filter.internalValue),
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
      include_all: {
        value: cdktf.booleanToHclTerraform(this._includeAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      filter: {
        value: cdktf.listMapperHcl(dataAwsRdsEngineVersionFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAwsRdsEngineVersionFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
