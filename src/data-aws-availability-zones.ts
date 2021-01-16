// https://www.terraform.io/docs/providers/aws/r/data_aws_availability_zones.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsAvailabilityZonesConfig extends TerraformMetaArguments {
  readonly allAvailabilityZones?: boolean;
  readonly excludeNames?: string[];
  readonly excludeZoneIds?: string[];
  readonly state?: string;
  /** filter block */
  readonly filter?: DataAwsAvailabilityZonesFilter[];
}
export interface DataAwsAvailabilityZonesFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsAvailabilityZones extends TerraformDataSource {

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
    this._excludeNames = config.excludeNames;
    this._excludeZoneIds = config.excludeZoneIds;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_availability_zones - computed: false, optional: true, required: false
  private _allAvailabilityZones?: boolean;
  public get allAvailabilityZones() {
    return this._allAvailabilityZones;
  }
  public set allAvailabilityZones(value: boolean | undefined) {
    this._allAvailabilityZones = value;
  }

  // exclude_names - computed: false, optional: true, required: false
  private _excludeNames?: string[];
  public get excludeNames() {
    return this._excludeNames;
  }
  public set excludeNames(value: string[] | undefined) {
    this._excludeNames = value;
  }

  // exclude_zone_ids - computed: false, optional: true, required: false
  private _excludeZoneIds?: string[];
  public get excludeZoneIds() {
    return this._excludeZoneIds;
  }
  public set excludeZoneIds(value: string[] | undefined) {
    this._excludeZoneIds = value;
  }

  // group_names - computed: true, optional: false, required: true
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // names - computed: true, optional: false, required: true
  public get names() {
    return this.getListAttribute('names');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // zone_ids - computed: true, optional: false, required: true
  public get zoneIds() {
    return this.getListAttribute('zone_ids');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAvailabilityZonesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsAvailabilityZonesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_availability_zones: this._allAvailabilityZones,
      exclude_names: this._excludeNames,
      exclude_zone_ids: this._excludeZoneIds,
      state: this._state,
      filter: this._filter,
    };
  }
}
