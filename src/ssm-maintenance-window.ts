// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_unassociated_targets": {
        "type": "bool",
        "optional": true
      },
      "cutoff": {
        "type": "number",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "duration": {
        "type": "number",
        "required": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "end_date": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "schedule": {
        "type": "string",
        "required": true
      },
      "schedule_timezone": {
        "type": "string",
        "optional": true
      },
      "start_date": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowConfig extends TerraformMetaArguments {
  readonly allowUnassociatedTargets?: boolean;
  readonly cutoff: number;
  readonly description?: string;
  readonly duration: number;
  readonly enabled?: boolean;
  readonly endDate?: string;
  readonly name: string;
  readonly schedule: string;
  readonly scheduleTimezone?: string;
  readonly startDate?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class SsmMaintenanceWindow extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowUnassociatedTargets = config.allowUnassociatedTargets;
    this._cutoff = config.cutoff;
    this._description = config.description;
    this._duration = config.duration;
    this._enabled = config.enabled;
    this._endDate = config.endDate;
    this._name = config.name;
    this._schedule = config.schedule;
    this._scheduleTimezone = config.scheduleTimezone;
    this._startDate = config.startDate;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unassociated_targets - computed: false, optional: true, required: false
  private _allowUnassociatedTargets?: boolean;
  public get allowUnassociatedTargets() {
    return this._allowUnassociatedTargets;
  }
  public set allowUnassociatedTargets(value: boolean | undefined) {
    this._allowUnassociatedTargets = value;
  }

  // cutoff - computed: false, optional: false, required: true
  private _cutoff: number;
  public get cutoff() {
    return this._cutoff;
  }
  public set cutoff(value: number) {
    this._cutoff = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // duration - computed: false, optional: false, required: true
  private _duration: number;
  public get duration() {
    return this._duration;
  }
  public set duration(value: number) {
    this._duration = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string;
  public get endDate() {
    return this._endDate;
  }
  public set endDate(value: string | undefined) {
    this._endDate = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: string;
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: string) {
    this._schedule = value;
  }

  // schedule_timezone - computed: false, optional: true, required: false
  private _scheduleTimezone?: string;
  public get scheduleTimezone() {
    return this._scheduleTimezone;
  }
  public set scheduleTimezone(value: string | undefined) {
    this._scheduleTimezone = value;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string;
  public get startDate() {
    return this._startDate;
  }
  public set startDate(value: string | undefined) {
    this._startDate = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unassociated_targets: this._allowUnassociatedTargets,
      cutoff: this._cutoff,
      description: this._description,
      duration: this._duration,
      enabled: this._enabled,
      end_date: this._endDate,
      name: this._name,
      schedule: this._schedule,
      schedule_timezone: this._scheduleTimezone,
      start_date: this._startDate,
      tags: this._tags,
    };
  }
}
