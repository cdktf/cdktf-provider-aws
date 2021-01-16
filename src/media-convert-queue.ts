// https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaConvertQueueConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly pricingPlan?: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  /** reservation_plan_settings block */
  readonly reservationPlanSettings?: MediaConvertQueueReservationPlanSettings[];
}
export interface MediaConvertQueueReservationPlanSettings {
  readonly commitment: string;
  readonly renewalType: string;
  readonly reservedSlots: number;
}

function mediaConvertQueueReservationPlanSettingsToTerraform(struct?: MediaConvertQueueReservationPlanSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    commitment: cdktf.stringToTerraform(struct!.commitment),
    renewal_type: cdktf.stringToTerraform(struct!.renewalType),
    reserved_slots: cdktf.numberToTerraform(struct!.reservedSlots),
  }
}


// Resource

export class MediaConvertQueue extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MediaConvertQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_media_convert_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._pricingPlan = config.pricingPlan;
    this._status = config.status;
    this._tags = config.tags;
    this._reservationPlanSettings = config.reservationPlanSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // pricing_plan - computed: false, optional: true, required: false
  private _pricingPlan?: string;
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }
  public set pricingPlan(value: string ) {
    this._pricingPlan = value;
  }
  public resetPricingPlan() {
    this._pricingPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingPlanInput() {
    return this._pricingPlan
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
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

  // reservation_plan_settings - computed: false, optional: true, required: false
  private _reservationPlanSettings?: MediaConvertQueueReservationPlanSettings[];
  public get reservationPlanSettings() {
    return this.interpolationForAttribute('reservation_plan_settings') as any;
  }
  public set reservationPlanSettings(value: MediaConvertQueueReservationPlanSettings[] ) {
    this._reservationPlanSettings = value;
  }
  public resetReservationPlanSettings() {
    this._reservationPlanSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationPlanSettingsInput() {
    return this._reservationPlanSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      reservation_plan_settings: cdktf.listMapper(mediaConvertQueueReservationPlanSettingsToTerraform)(this._reservationPlanSettings),
    };
  }
}
