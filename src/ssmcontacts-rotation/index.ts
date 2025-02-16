// https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmcontactsRotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}
  */
  readonly contactIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}
  */
  readonly timeZoneId: string;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}
  */
  readonly recurrence?: SsmcontactsRotationRecurrence[] | cdktf.IResolvable;
}
export interface SsmcontactsRotationRecurrenceDailySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}

export function ssmcontactsRotationRecurrenceDailySettingsToTerraform(struct?: SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktf.numberToTerraform(struct!.minuteOfHour),
  }
}


export function ssmcontactsRotationRecurrenceDailySettingsToHclTerraform(struct?: SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktf.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceDailySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class SsmcontactsRotationRecurrenceDailySettingsList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceDailySettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceDailySettingsOutputReference {
    return new SsmcontactsRotationRecurrenceDailySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}

export function ssmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktf.numberToTerraform(struct!.minuteOfHour),
  }
}


export function ssmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToHclTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktf.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference {
    return new SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceMonthlySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}
  */
  readonly dayOfMonth: number;
  /**
  * hand_off_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}
  */
  readonly handOffTime?: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[] | cdktf.IResolvable;
}

export function ssmcontactsRotationRecurrenceMonthlySettingsToTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    hand_off_time: cdktf.listMapper(ssmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToTerraform, true)(struct!.handOffTime),
  }
}


export function ssmcontactsRotationRecurrenceMonthlySettingsToHclTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hand_off_time: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToHclTerraform, true)(struct!.handOffTime),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceMonthlySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._handOffTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handOffTime = this._handOffTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._handOffTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._handOffTime.internalValue = value.handOffTime;
    }
  }

  // day_of_month - computed: false, optional: false, required: true
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // hand_off_time - computed: false, optional: true, required: false
  private _handOffTime = new SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(this, "hand_off_time", false);
  public get handOffTime() {
    return this._handOffTime;
  }
  public putHandOffTime(value: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[] | cdktf.IResolvable) {
    this._handOffTime.internalValue = value;
  }
  public resetHandOffTime() {
    this._handOffTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handOffTimeInput() {
    return this._handOffTime.internalValue;
  }
}

export class SsmcontactsRotationRecurrenceMonthlySettingsList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceMonthlySettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceMonthlySettingsOutputReference {
    return new SsmcontactsRotationRecurrenceMonthlySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}

export function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktf.numberToTerraform(struct!.minuteOfHour),
  }
}


export function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktf.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference {
    return new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}

export function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktf.numberToTerraform(struct!.minuteOfHour),
  }
}


export function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktf.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference {
    return new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#end SsmcontactsRotation#end}
  */
  readonly end?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[] | cdktf.IResolvable;
  /**
  * start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#start SsmcontactsRotation#start}
  */
  readonly start?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[] | cdktf.IResolvable;
}

export function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.listMapper(ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToTerraform, true)(struct!.end),
    start: cdktf.listMapper(ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToTerraform, true)(struct!.start),
  }
}


export function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList",
    },
    start: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToHclTerraform, true)(struct!.start),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    if (this._start?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end.internalValue = undefined;
      this._start.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end.internalValue = value.end;
      this._start.internalValue = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end = new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(this, "end", false);
  public get end() {
    return this._end;
  }
  public putEnd(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  public resetEnd() {
    this._end.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }

  // start - computed: false, optional: true, required: false
  private _start = new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(this, "start", false);
  public get start() {
    return this._start;
  }
  public putStart(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[] | cdktf.IResolvable) {
    this._start.internalValue = value;
  }
  public resetStart() {
    this._start.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start.internalValue;
  }
}

export class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference {
    return new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceShiftCoverages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * coverage_times block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#coverage_times SsmcontactsRotation#coverage_times}
  */
  readonly coverageTimes?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[] | cdktf.IResolvable;
}

export function ssmcontactsRotationRecurrenceShiftCoveragesToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktf.stringToTerraform(struct!.mapBlockKey),
    coverage_times: cdktf.listMapper(ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToTerraform, true)(struct!.coverageTimes),
  }
}


export function ssmcontactsRotationRecurrenceShiftCoveragesToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map_block_key: {
      value: cdktf.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coverage_times: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToHclTerraform, true)(struct!.coverageTimes),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceShiftCoveragesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._coverageTimes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coverageTimes = this._coverageTimes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._coverageTimes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._coverageTimes.internalValue = value.coverageTimes;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // coverage_times - computed: false, optional: true, required: false
  private _coverageTimes = new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(this, "coverage_times", false);
  public get coverageTimes() {
    return this._coverageTimes;
  }
  public putCoverageTimes(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[] | cdktf.IResolvable) {
    this._coverageTimes.internalValue = value;
  }
  public resetCoverageTimes() {
    this._coverageTimes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverageTimesInput() {
    return this._coverageTimes.internalValue;
  }
}

export class SsmcontactsRotationRecurrenceShiftCoveragesList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceShiftCoverages[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesOutputReference {
    return new SsmcontactsRotationRecurrenceShiftCoveragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
  */
  readonly hourOfDay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
  */
  readonly minuteOfHour: number;
}

export function ssmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minute_of_hour: cdktf.numberToTerraform(struct!.minuteOfHour),
  }
}


export function ssmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToHclTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute_of_hour: {
      value: cdktf.numberToHclTerraform(struct!.minuteOfHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minuteOfHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteOfHour = this._minuteOfHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hourOfDay = undefined;
      this._minuteOfHour = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hourOfDay = value.hourOfDay;
      this._minuteOfHour = value.minuteOfHour;
    }
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minute_of_hour - computed: false, optional: false, required: true
  private _minuteOfHour?: number; 
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
  public set minuteOfHour(value: number) {
    this._minuteOfHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteOfHourInput() {
    return this._minuteOfHour;
  }
}

export class SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference {
    return new SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrenceWeeklySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * hand_off_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}
  */
  readonly handOffTime?: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[] | cdktf.IResolvable;
}

export function ssmcontactsRotationRecurrenceWeeklySettingsToTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hand_off_time: cdktf.listMapper(ssmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToTerraform, true)(struct!.handOffTime),
  }
}


export function ssmcontactsRotationRecurrenceWeeklySettingsToHclTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hand_off_time: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToHclTerraform, true)(struct!.handOffTime),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceWeeklySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._handOffTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handOffTime = this._handOffTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._handOffTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._handOffTime.internalValue = value.handOffTime;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hand_off_time - computed: false, optional: true, required: false
  private _handOffTime = new SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(this, "hand_off_time", false);
  public get handOffTime() {
    return this._handOffTime;
  }
  public putHandOffTime(value: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[] | cdktf.IResolvable) {
    this._handOffTime.internalValue = value;
  }
  public resetHandOffTime() {
    this._handOffTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handOffTimeInput() {
    return this._handOffTime.internalValue;
  }
}

export class SsmcontactsRotationRecurrenceWeeklySettingsList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrenceWeeklySettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceWeeklySettingsOutputReference {
    return new SsmcontactsRotationRecurrenceWeeklySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmcontactsRotationRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}
  */
  readonly numberOfOnCalls: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}
  */
  readonly recurrenceMultiplier: number;
  /**
  * daily_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#daily_settings SsmcontactsRotation#daily_settings}
  */
  readonly dailySettings?: SsmcontactsRotationRecurrenceDailySettings[] | cdktf.IResolvable;
  /**
  * monthly_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#monthly_settings SsmcontactsRotation#monthly_settings}
  */
  readonly monthlySettings?: SsmcontactsRotationRecurrenceMonthlySettings[] | cdktf.IResolvable;
  /**
  * shift_coverages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#shift_coverages SsmcontactsRotation#shift_coverages}
  */
  readonly shiftCoverages?: SsmcontactsRotationRecurrenceShiftCoverages[] | cdktf.IResolvable;
  /**
  * weekly_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#weekly_settings SsmcontactsRotation#weekly_settings}
  */
  readonly weeklySettings?: SsmcontactsRotationRecurrenceWeeklySettings[] | cdktf.IResolvable;
}

export function ssmcontactsRotationRecurrenceToTerraform(struct?: SsmcontactsRotationRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_on_calls: cdktf.numberToTerraform(struct!.numberOfOnCalls),
    recurrence_multiplier: cdktf.numberToTerraform(struct!.recurrenceMultiplier),
    daily_settings: cdktf.listMapper(ssmcontactsRotationRecurrenceDailySettingsToTerraform, true)(struct!.dailySettings),
    monthly_settings: cdktf.listMapper(ssmcontactsRotationRecurrenceMonthlySettingsToTerraform, true)(struct!.monthlySettings),
    shift_coverages: cdktf.listMapper(ssmcontactsRotationRecurrenceShiftCoveragesToTerraform, true)(struct!.shiftCoverages),
    weekly_settings: cdktf.listMapper(ssmcontactsRotationRecurrenceWeeklySettingsToTerraform, true)(struct!.weeklySettings),
  }
}


export function ssmcontactsRotationRecurrenceToHclTerraform(struct?: SsmcontactsRotationRecurrence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_on_calls: {
      value: cdktf.numberToHclTerraform(struct!.numberOfOnCalls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurrence_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.recurrenceMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daily_settings: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceDailySettingsToHclTerraform, true)(struct!.dailySettings),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceDailySettingsList",
    },
    monthly_settings: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceMonthlySettingsToHclTerraform, true)(struct!.monthlySettings),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceMonthlySettingsList",
    },
    shift_coverages: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceShiftCoveragesToHclTerraform, true)(struct!.shiftCoverages),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceShiftCoveragesList",
    },
    weekly_settings: {
      value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceWeeklySettingsToHclTerraform, true)(struct!.weeklySettings),
      isBlock: true,
      type: "list",
      storageClassType: "SsmcontactsRotationRecurrenceWeeklySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmcontactsRotationRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsmcontactsRotationRecurrence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfOnCalls !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfOnCalls = this._numberOfOnCalls;
    }
    if (this._recurrenceMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceMultiplier = this._recurrenceMultiplier;
    }
    if (this._dailySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySettings = this._dailySettings?.internalValue;
    }
    if (this._monthlySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySettings = this._monthlySettings?.internalValue;
    }
    if (this._shiftCoverages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shiftCoverages = this._shiftCoverages?.internalValue;
    }
    if (this._weeklySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySettings = this._weeklySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmcontactsRotationRecurrence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfOnCalls = undefined;
      this._recurrenceMultiplier = undefined;
      this._dailySettings.internalValue = undefined;
      this._monthlySettings.internalValue = undefined;
      this._shiftCoverages.internalValue = undefined;
      this._weeklySettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfOnCalls = value.numberOfOnCalls;
      this._recurrenceMultiplier = value.recurrenceMultiplier;
      this._dailySettings.internalValue = value.dailySettings;
      this._monthlySettings.internalValue = value.monthlySettings;
      this._shiftCoverages.internalValue = value.shiftCoverages;
      this._weeklySettings.internalValue = value.weeklySettings;
    }
  }

  // number_of_on_calls - computed: false, optional: false, required: true
  private _numberOfOnCalls?: number; 
  public get numberOfOnCalls() {
    return this.getNumberAttribute('number_of_on_calls');
  }
  public set numberOfOnCalls(value: number) {
    this._numberOfOnCalls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfOnCallsInput() {
    return this._numberOfOnCalls;
  }

  // recurrence_multiplier - computed: false, optional: false, required: true
  private _recurrenceMultiplier?: number; 
  public get recurrenceMultiplier() {
    return this.getNumberAttribute('recurrence_multiplier');
  }
  public set recurrenceMultiplier(value: number) {
    this._recurrenceMultiplier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceMultiplierInput() {
    return this._recurrenceMultiplier;
  }

  // daily_settings - computed: false, optional: true, required: false
  private _dailySettings = new SsmcontactsRotationRecurrenceDailySettingsList(this, "daily_settings", false);
  public get dailySettings() {
    return this._dailySettings;
  }
  public putDailySettings(value: SsmcontactsRotationRecurrenceDailySettings[] | cdktf.IResolvable) {
    this._dailySettings.internalValue = value;
  }
  public resetDailySettings() {
    this._dailySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailySettingsInput() {
    return this._dailySettings.internalValue;
  }

  // monthly_settings - computed: false, optional: true, required: false
  private _monthlySettings = new SsmcontactsRotationRecurrenceMonthlySettingsList(this, "monthly_settings", false);
  public get monthlySettings() {
    return this._monthlySettings;
  }
  public putMonthlySettings(value: SsmcontactsRotationRecurrenceMonthlySettings[] | cdktf.IResolvable) {
    this._monthlySettings.internalValue = value;
  }
  public resetMonthlySettings() {
    this._monthlySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlySettingsInput() {
    return this._monthlySettings.internalValue;
  }

  // shift_coverages - computed: false, optional: true, required: false
  private _shiftCoverages = new SsmcontactsRotationRecurrenceShiftCoveragesList(this, "shift_coverages", false);
  public get shiftCoverages() {
    return this._shiftCoverages;
  }
  public putShiftCoverages(value: SsmcontactsRotationRecurrenceShiftCoverages[] | cdktf.IResolvable) {
    this._shiftCoverages.internalValue = value;
  }
  public resetShiftCoverages() {
    this._shiftCoverages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftCoveragesInput() {
    return this._shiftCoverages.internalValue;
  }

  // weekly_settings - computed: false, optional: true, required: false
  private _weeklySettings = new SsmcontactsRotationRecurrenceWeeklySettingsList(this, "weekly_settings", false);
  public get weeklySettings() {
    return this._weeklySettings;
  }
  public putWeeklySettings(value: SsmcontactsRotationRecurrenceWeeklySettings[] | cdktf.IResolvable) {
    this._weeklySettings.internalValue = value;
  }
  public resetWeeklySettings() {
    this._weeklySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklySettingsInput() {
    return this._weeklySettings.internalValue;
  }
}

export class SsmcontactsRotationRecurrenceList extends cdktf.ComplexList {
  public internalValue? : SsmcontactsRotationRecurrence[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmcontactsRotationRecurrenceOutputReference {
    return new SsmcontactsRotationRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation}
*/
export class SsmcontactsRotation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmcontacts_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmcontactsRotation to import
  * @param importFromId The id of the existing SsmcontactsRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmcontactsRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssmcontacts_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmcontactsRotationConfig
  */
  public constructor(scope: Construct, id: string, config: SsmcontactsRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssmcontacts_rotation',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.87.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactIds = config.contactIds;
    this._name = config.name;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._timeZoneId = config.timeZoneId;
    this._recurrence.internalValue = config.recurrence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_ids - computed: false, optional: false, required: true
  private _contactIds?: string[]; 
  public get contactIds() {
    return this.getListAttribute('contact_ids');
  }
  public set contactIds(value: string[]) {
    this._contactIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdsInput() {
    return this._contactIds;
  }

  // id - computed: true, optional: false, required: false
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
    return this._name;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // time_zone_id - computed: false, optional: false, required: true
  private _timeZoneId?: string; 
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }
  public set timeZoneId(value: string) {
    this._timeZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneIdInput() {
    return this._timeZoneId;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new SsmcontactsRotationRecurrenceList(this, "recurrence", false);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: SsmcontactsRotationRecurrence[] | cdktf.IResolvable) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactIds),
      name: cdktf.stringToTerraform(this._name),
      start_time: cdktf.stringToTerraform(this._startTime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_zone_id: cdktf.stringToTerraform(this._timeZoneId),
      recurrence: cdktf.listMapper(ssmcontactsRotationRecurrenceToTerraform, true)(this._recurrence.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
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
      time_zone_id: {
        value: cdktf.stringToHclTerraform(this._timeZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence: {
        value: cdktf.listMapperHcl(ssmcontactsRotationRecurrenceToHclTerraform, true)(this._recurrence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmcontactsRotationRecurrenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
