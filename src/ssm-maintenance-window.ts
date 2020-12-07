// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
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

export class SsmMaintenanceWindow extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('allow_unassociated_targets');
  }
  public set allowUnassociatedTargets(value: boolean ) {
    this._allowUnassociatedTargets = value;
  }
  public resetAllowUnassociatedTargets() {
    this._allowUnassociatedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnassociatedTargetsInput() {
    return this._allowUnassociatedTargets
  }

  // cutoff - computed: false, optional: false, required: true
  private _cutoff: number;
  public get cutoff() {
    return this.getNumberAttribute('cutoff');
  }
  public set cutoff(value: number) {
    this._cutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffInput() {
    return this._cutoff
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // duration - computed: false, optional: false, required: true
  private _duration: number;
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string;
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string ) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // schedule_timezone - computed: false, optional: true, required: false
  private _scheduleTimezone?: string;
  public get scheduleTimezone() {
    return this.getStringAttribute('schedule_timezone');
  }
  public set scheduleTimezone(value: string ) {
    this._scheduleTimezone = value;
  }
  public resetScheduleTimezone() {
    this._scheduleTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimezoneInput() {
    return this._scheduleTimezone
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string;
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string ) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unassociated_targets: cdktf.booleanToTerraform(this._allowUnassociatedTargets),
      cutoff: cdktf.numberToTerraform(this._cutoff),
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.numberToTerraform(this._duration),
      enabled: cdktf.booleanToTerraform(this._enabled),
      end_date: cdktf.stringToTerraform(this._endDate),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      schedule_timezone: cdktf.stringToTerraform(this._scheduleTimezone),
      start_date: cdktf.stringToTerraform(this._startDate),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
