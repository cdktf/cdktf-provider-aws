// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS MediaConvert
*/
export namespace MediaConvert {
  export interface MediaConvertQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#description MediaConvertQueue#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#name MediaConvertQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#pricing_plan MediaConvertQueue#pricing_plan}
    */
    readonly pricingPlan?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#status MediaConvertQueue#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#tags MediaConvertQueue#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#tags_all MediaConvertQueue#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * reservation_plan_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}
    */
    readonly reservationPlanSettings?: MediaConvertQueueReservationPlanSettings;
  }
  export interface MediaConvertQueueReservationPlanSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#commitment MediaConvertQueue#commitment}
    */
    readonly commitment: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#renewal_type MediaConvertQueue#renewal_type}
    */
    readonly renewalType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html#reserved_slots MediaConvertQueue#reserved_slots}
    */
    readonly reservedSlots: number;
  }

  function mediaConvertQueueReservationPlanSettingsToTerraform(struct?: MediaConvertQueueReservationPlanSettingsOutputReference | MediaConvertQueueReservationPlanSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      commitment: cdktf.stringToTerraform(struct!.commitment),
      renewal_type: cdktf.stringToTerraform(struct!.renewalType),
      reserved_slots: cdktf.numberToTerraform(struct!.reservedSlots),
    }
  }

  export class MediaConvertQueueReservationPlanSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // commitment - computed: false, optional: false, required: true
    private _commitment?: string; 
    public get commitment() {
      return this.getStringAttribute('commitment');
    }
    public set commitment(value: string) {
      this._commitment = value;
    }
    // Temporarily expose input value. Use with caution.
    public get commitmentInput() {
      return this._commitment
    }

    // renewal_type - computed: false, optional: false, required: true
    private _renewalType?: string; 
    public get renewalType() {
      return this.getStringAttribute('renewal_type');
    }
    public set renewalType(value: string) {
      this._renewalType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get renewalTypeInput() {
      return this._renewalType
    }

    // reserved_slots - computed: false, optional: false, required: true
    private _reservedSlots?: number; 
    public get reservedSlots() {
      return this.getNumberAttribute('reserved_slots');
    }
    public set reservedSlots(value: number) {
      this._reservedSlots = value;
    }
    // Temporarily expose input value. Use with caution.
    public get reservedSlotsInput() {
      return this._reservedSlots
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue}
  */
  export class MediaConvertQueue extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_media_convert_queue";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_convert_queue.html aws_media_convert_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaConvertQueueConfig
    */
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
      this._tagsAll = config.tagsAll;
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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
    private _pricingPlan?: string | undefined; 
    public get pricingPlan() {
      return this.getStringAttribute('pricing_plan');
    }
    public set pricingPlan(value: string | undefined) {
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
    private _status?: string | undefined; 
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // reservation_plan_settings - computed: false, optional: true, required: false
    private _reservationPlanSettings?: MediaConvertQueueReservationPlanSettings | undefined; 
    private __reservationPlanSettingsOutput = new MediaConvertQueueReservationPlanSettingsOutputReference(this as any, "reservation_plan_settings", true);
    public get reservationPlanSettings() {
      return this.__reservationPlanSettingsOutput;
    }
    public putReservationPlanSettings(value: MediaConvertQueueReservationPlanSettings | undefined) {
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
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        reservation_plan_settings: mediaConvertQueueReservationPlanSettingsToTerraform(this._reservationPlanSettings),
      };
    }
  }
}
