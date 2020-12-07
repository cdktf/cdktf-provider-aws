// https://www.terraform.io/docs/providers/aws/r/data_aws_availability_zones.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAvailabilityZonesConfig extends cdktf.TerraformMetaArguments {
  readonly allAvailabilityZones?: boolean;
  readonly blacklistedNames?: string[];
  readonly blacklistedZoneIds?: string[];
  readonly excludeNames?: string[];
  readonly excludeZoneIds?: string[];
  readonly groupNames?: string[];
  readonly state?: string;
  /** filter block */
  readonly filter?: DataAwsAvailabilityZonesFilter[];
}
export interface DataAwsAvailabilityZonesFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsAvailabilityZonesFilterToTerraform(struct?: DataAwsAvailabilityZonesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsAvailabilityZones extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAvailabilityZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_availability_zones',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allAvailabilityZones = config.allAvailabilityZones;
    this._blacklistedNames = config.blacklistedNames;
    this._blacklistedZoneIds = config.blacklistedZoneIds;
    this._excludeNames = config.excludeNames;
    this._excludeZoneIds = config.excludeZoneIds;
    this._groupNames = config.groupNames;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_availability_zones - computed: false, optional: true, required: false
  private _allAvailabilityZones?: boolean;
  public get allAvailabilityZones() {
    return this.getBooleanAttribute('all_availability_zones');
  }
  public set allAvailabilityZones(value: boolean ) {
    this._allAvailabilityZones = value;
  }
  public resetAllAvailabilityZones() {
    this._allAvailabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allAvailabilityZonesInput() {
    return this._allAvailabilityZones
  }

  // blacklisted_names - computed: false, optional: true, required: false
  private _blacklistedNames?: string[];
  public get blacklistedNames() {
    return this.getListAttribute('blacklisted_names');
  }
  public set blacklistedNames(value: string[] ) {
    this._blacklistedNames = value;
  }
  public resetBlacklistedNames() {
    this._blacklistedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedNamesInput() {
    return this._blacklistedNames
  }

  // blacklisted_zone_ids - computed: false, optional: true, required: false
  private _blacklistedZoneIds?: string[];
  public get blacklistedZoneIds() {
    return this.getListAttribute('blacklisted_zone_ids');
  }
  public set blacklistedZoneIds(value: string[] ) {
    this._blacklistedZoneIds = value;
  }
  public resetBlacklistedZoneIds() {
    this._blacklistedZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedZoneIdsInput() {
    return this._blacklistedZoneIds
  }

  // exclude_names - computed: false, optional: true, required: false
  private _excludeNames?: string[];
  public get excludeNames() {
    return this.getListAttribute('exclude_names');
  }
  public set excludeNames(value: string[] ) {
    this._excludeNames = value;
  }
  public resetExcludeNames() {
    this._excludeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamesInput() {
    return this._excludeNames
  }

  // exclude_zone_ids - computed: false, optional: true, required: false
  private _excludeZoneIds?: string[];
  public get excludeZoneIds() {
    return this.getListAttribute('exclude_zone_ids');
  }
  public set excludeZoneIds(value: string[] ) {
    this._excludeZoneIds = value;
  }
  public resetExcludeZoneIds() {
    this._excludeZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeZoneIdsInput() {
    return this._excludeZoneIds
  }

  // group_names - computed: false, optional: true, required: false
  private _groupNames?: string[];
  public get groupNames() {
    return this.getListAttribute('group_names');
  }
  public set groupNames(value: string[] ) {
    this._groupNames = value;
  }
  public resetGroupNames() {
    this._groupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNamesInput() {
    return this._groupNames
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // zone_ids - computed: true, optional: false, required: false
  public get zoneIds() {
    return this.getListAttribute('zone_ids');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAvailabilityZonesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsAvailabilityZonesFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
      blacklisted_names: cdktf.listMapper(cdktf.stringToTerraform)(this._blacklistedNames),
      blacklisted_zone_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._blacklistedZoneIds),
      exclude_names: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeNames),
      exclude_zone_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeZoneIds),
      group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._groupNames),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataAwsAvailabilityZonesFilterToTerraform)(this._filter),
    };
  }
}
