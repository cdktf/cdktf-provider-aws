// https://www.terraform.io/docs/providers/aws/r/data_aws_availability_zone.html
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
      "group_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_suffix": {
        "type": "string",
        "computed": true
      },
      "network_border_group": {
        "type": "string",
        "computed": true
      },
      "opt_in_status": {
        "type": "string",
        "computed": true
      },
      "region": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "zone_id": {
        "type": "string",
        "optional": true,
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

export interface DataAwsAvailabilityZoneConfig extends TerraformMetaArguments {
  readonly allAvailabilityZones?: boolean;
  readonly name?: string;
  readonly state?: string;
  readonly zoneId?: string;
  /** filter block */
  readonly filter?: DataAwsAvailabilityZoneFilter[];
}
export interface DataAwsAvailabilityZoneFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsAvailabilityZone extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAvailabilityZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_availability_zone',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allAvailabilityZones = config.allAvailabilityZones;
    this._name = config.name;
    this._state = config.state;
    this._zoneId = config.zoneId;
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

  // group_name - computed: true, optional: false, required: true
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_suffix - computed: true, optional: false, required: true
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }

  // network_border_group - computed: true, optional: false, required: true
  public get networkBorderGroup() {
    return this.getStringAttribute('network_border_group');
  }

  // opt_in_status - computed: true, optional: false, required: true
  public get optInStatus() {
    return this.getStringAttribute('opt_in_status');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this._zoneId ?? this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string | undefined) {
    this._zoneId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAvailabilityZoneFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsAvailabilityZoneFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      all_availability_zones: this._allAvailabilityZones,
      name: this._name,
      state: this._state,
      zone_id: this._zoneId,
      filter: this._filter,
    };
  }
}
