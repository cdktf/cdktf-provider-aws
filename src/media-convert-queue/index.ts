/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaConvertQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#concurrent_jobs MediaConvertQueue#concurrent_jobs}
  */
  readonly concurrentJobs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#description MediaConvertQueue#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#id MediaConvertQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#name MediaConvertQueue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}
  */
  readonly pricingPlan?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#region MediaConvertQueue#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#status MediaConvertQueue#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#tags MediaConvertQueue#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#tags_all MediaConvertQueue#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * reservation_plan_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}
  */
  readonly reservationPlanSettings?: MediaConvertQueueReservationPlanSettings;
}
export interface MediaConvertQueueReservationPlanSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#commitment MediaConvertQueue#commitment}
  */
  readonly commitment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}
  */
  readonly renewalType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}
  */
  readonly reservedSlots: number;
}

export function mediaConvertQueueReservationPlanSettingsToTerraform(struct?: MediaConvertQueueReservationPlanSettingsOutputReference | MediaConvertQueueReservationPlanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commitment: cdktf.stringToTerraform(struct!.commitment),
    renewal_type: cdktf.stringToTerraform(struct!.renewalType),
    reserved_slots: cdktf.numberToTerraform(struct!.reservedSlots),
  }
}


export function mediaConvertQueueReservationPlanSettingsToHclTerraform(struct?: MediaConvertQueueReservationPlanSettingsOutputReference | MediaConvertQueueReservationPlanSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commitment: {
      value: cdktf.stringToHclTerraform(struct!.commitment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renewal_type: {
      value: cdktf.stringToHclTerraform(struct!.renewalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_slots: {
      value: cdktf.numberToHclTerraform(struct!.reservedSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaConvertQueueReservationPlanSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MediaConvertQueueReservationPlanSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitment !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitment = this._commitment;
    }
    if (this._renewalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalType = this._renewalType;
    }
    if (this._reservedSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedSlots = this._reservedSlots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaConvertQueueReservationPlanSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitment = undefined;
      this._renewalType = undefined;
      this._reservedSlots = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitment = value.commitment;
      this._renewalType = value.renewalType;
      this._reservedSlots = value.reservedSlots;
    }
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
    return this._commitment;
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
    return this._renewalType;
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
    return this._reservedSlots;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue aws_media_convert_queue}
*/
export class MediaConvertQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_media_convert_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaConvertQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaConvertQueue to import
  * @param importFromId The id of the existing MediaConvertQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaConvertQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_media_convert_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/media_convert_queue aws_media_convert_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaConvertQueueConfig
  */
  public constructor(scope: Construct, id: string, config: MediaConvertQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_media_convert_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.11.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrentJobs = config.concurrentJobs;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._pricingPlan = config.pricingPlan;
    this._region = config.region;
    this._status = config.status;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._reservationPlanSettings.internalValue = config.reservationPlanSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // concurrent_jobs - computed: true, optional: true, required: false
  private _concurrentJobs?: number; 
  public get concurrentJobs() {
    return this.getNumberAttribute('concurrent_jobs');
  }
  public set concurrentJobs(value: number) {
    this._concurrentJobs = value;
  }
  public resetConcurrentJobs() {
    this._concurrentJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentJobsInput() {
    return this._concurrentJobs;
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

  // pricing_plan - computed: false, optional: true, required: false
  private _pricingPlan?: string; 
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }
  public set pricingPlan(value: string) {
    this._pricingPlan = value;
  }
  public resetPricingPlan() {
    this._pricingPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingPlanInput() {
    return this._pricingPlan;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // reservation_plan_settings - computed: false, optional: true, required: false
  private _reservationPlanSettings = new MediaConvertQueueReservationPlanSettingsOutputReference(this, "reservation_plan_settings");
  public get reservationPlanSettings() {
    return this._reservationPlanSettings;
  }
  public putReservationPlanSettings(value: MediaConvertQueueReservationPlanSettings) {
    this._reservationPlanSettings.internalValue = value;
  }
  public resetReservationPlanSettings() {
    this._reservationPlanSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationPlanSettingsInput() {
    return this._reservationPlanSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrent_jobs: cdktf.numberToTerraform(this._concurrentJobs),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      reservation_plan_settings: mediaConvertQueueReservationPlanSettingsToTerraform(this._reservationPlanSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrent_jobs: {
        value: cdktf.numberToHclTerraform(this._concurrentJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_plan: {
        value: cdktf.stringToHclTerraform(this._pricingPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      reservation_plan_settings: {
        value: mediaConvertQueueReservationPlanSettingsToHclTerraform(this._reservationPlanSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaConvertQueueReservationPlanSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
