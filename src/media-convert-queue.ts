// https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MediaConvertQueueConfig extends TerraformMetaArguments {
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

// Resource

export class MediaConvertQueue extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // pricing_plan - computed: false, optional: true, required: false
  private _pricingPlan?: string;
  public get pricingPlan() {
    return this._pricingPlan;
  }
  public set pricingPlan(value: string | undefined) {
    this._pricingPlan = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this._status;
  }
  public set status(value: string | undefined) {
    this._status = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // reservation_plan_settings - computed: false, optional: true, required: false
  private _reservationPlanSettings?: MediaConvertQueueReservationPlanSettings[];
  public get reservationPlanSettings() {
    return this._reservationPlanSettings;
  }
  public set reservationPlanSettings(value: MediaConvertQueueReservationPlanSettings[] | undefined) {
    this._reservationPlanSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      pricing_plan: this._pricingPlan,
      status: this._status,
      tags: this._tags,
      reservation_plan_settings: this._reservationPlanSettings,
    };
  }
}
