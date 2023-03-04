// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}
  */
  readonly allowUnassociatedTargets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}
  */
  readonly cutoff: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#description SsmMaintenanceWindow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#id SsmMaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#name SsmMaintenanceWindow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}
  */
  readonly scheduleOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}
  */
  readonly scheduleTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window aws_ssm_maintenance_window}
*/
export class SsmMaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_maintenance_window";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window aws_ssm_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmMaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUnassociatedTargets = config.allowUnassociatedTargets;
    this._cutoff = config.cutoff;
    this._description = config.description;
    this._duration = config.duration;
    this._enabled = config.enabled;
    this._endDate = config.endDate;
    this._id = config.id;
    this._name = config.name;
    this._schedule = config.schedule;
    this._scheduleOffset = config.scheduleOffset;
    this._scheduleTimezone = config.scheduleTimezone;
    this._startDate = config.startDate;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unassociated_targets - computed: false, optional: true, required: false
  private _allowUnassociatedTargets?: boolean | cdktf.IResolvable; 
  public get allowUnassociatedTargets() {
    return this.getBooleanAttribute('allow_unassociated_targets');
  }
  public set allowUnassociatedTargets(value: boolean | cdktf.IResolvable) {
    this._allowUnassociatedTargets = value;
  }
  public resetAllowUnassociatedTargets() {
    this._allowUnassociatedTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnassociatedTargetsInput() {
    return this._allowUnassociatedTargets;
  }

  // cutoff - computed: false, optional: false, required: true
  private _cutoff?: number; 
  public get cutoff() {
    return this.getNumberAttribute('cutoff');
  }
  public set cutoff(value: number) {
    this._cutoff = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffInput() {
    return this._cutoff;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // schedule_offset - computed: false, optional: true, required: false
  private _scheduleOffset?: number; 
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }
  public set scheduleOffset(value: number) {
    this._scheduleOffset = value;
  }
  public resetScheduleOffset() {
    this._scheduleOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOffsetInput() {
    return this._scheduleOffset;
  }

  // schedule_timezone - computed: false, optional: true, required: false
  private _scheduleTimezone?: string; 
  public get scheduleTimezone() {
    return this.getStringAttribute('schedule_timezone');
  }
  public set scheduleTimezone(value: string) {
    this._scheduleTimezone = value;
  }
  public resetScheduleTimezone() {
    this._scheduleTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimezoneInput() {
    return this._scheduleTimezone;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      schedule_offset: cdktf.numberToTerraform(this._scheduleOffset),
      schedule_timezone: cdktf.stringToTerraform(this._scheduleTimezone),
      start_date: cdktf.stringToTerraform(this._startDate),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
