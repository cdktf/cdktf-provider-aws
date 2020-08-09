// https://www.terraform.io/docs/providers/aws/r/data_aws_availability_zones.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "all_availability_zones": {
        "type": "bool",
        "optional": true
      },
      "blacklisted_names": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "blacklisted_zone_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "exclude_names": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "exclude_zone_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "group_names": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "names": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "zone_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsAvailabilityZonesConfig extends TerraformMetaArguments {
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
    return this._allAvailabilityZones;
  }
  public set allAvailabilityZones(value: boolean | undefined) {
    this._allAvailabilityZones = value;
  }

  // blacklisted_names - computed: false, optional: true, required: false
  private _blacklistedNames?: string[];
  public get blacklistedNames() {
    return this._blacklistedNames;
  }
  public set blacklistedNames(value: string[] | undefined) {
    this._blacklistedNames = value;
  }

  // blacklisted_zone_ids - computed: false, optional: true, required: false
  private _blacklistedZoneIds?: string[];
  public get blacklistedZoneIds() {
    return this._blacklistedZoneIds;
  }
  public set blacklistedZoneIds(value: string[] | undefined) {
    this._blacklistedZoneIds = value;
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

  // group_names - computed: false, optional: true, required: false
  private _groupNames?: string[];
  public get groupNames() {
    return this._groupNames;
  }
  public set groupNames(value: string[] | undefined) {
    this._groupNames = value;
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

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      all_availability_zones: this._allAvailabilityZones,
      blacklisted_names: this._blacklistedNames,
      blacklisted_zone_ids: this._blacklistedZoneIds,
      exclude_names: this._excludeNames,
      exclude_zone_ids: this._excludeZoneIds,
      group_names: this._groupNames,
      state: this._state,
      filter: this._filter,
    };
  }
}
