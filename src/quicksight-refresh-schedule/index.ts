// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightRefreshScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#schedule_id QuicksightRefreshSchedule#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}
  */
  readonly schedule?: QuicksightRefreshScheduleSchedule[] | cdktf.IResolvable;
}
export interface QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#day_of_month QuicksightRefreshSchedule#day_of_month}
  */
  readonly dayOfMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function quicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayToTerraform(struct?: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.stringToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}

export class QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: string; 
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }
  public set dayOfMonth(value: string) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}

export class QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList extends cdktf.ComplexList {
  public internalValue? : QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[] | cdktf.IResolvable

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
  public get(index: number): QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference {
    return new QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightRefreshScheduleScheduleScheduleFrequency {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#time_of_the_day QuicksightRefreshSchedule#time_of_the_day}
  */
  readonly timeOfTheDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#timezone QuicksightRefreshSchedule#timezone}
  */
  readonly timezone?: string;
  /**
  * refresh_on_day block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#refresh_on_day QuicksightRefreshSchedule#refresh_on_day}
  */
  readonly refreshOnDay?: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[] | cdktf.IResolvable;
}

export function quicksightRefreshScheduleScheduleScheduleFrequencyToTerraform(struct?: QuicksightRefreshScheduleScheduleScheduleFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    time_of_the_day: cdktf.stringToTerraform(struct!.timeOfTheDay),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    refresh_on_day: cdktf.listMapper(quicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayToTerraform, true)(struct!.refreshOnDay),
  }
}

export class QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightRefreshScheduleScheduleScheduleFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._timeOfTheDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfTheDay = this._timeOfTheDay;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._refreshOnDay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshOnDay = this._refreshOnDay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightRefreshScheduleScheduleScheduleFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._timeOfTheDay = undefined;
      this._timezone = undefined;
      this._refreshOnDay.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._timeOfTheDay = value.timeOfTheDay;
      this._timezone = value.timezone;
      this._refreshOnDay.internalValue = value.refreshOnDay;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // time_of_the_day - computed: true, optional: true, required: false
  private _timeOfTheDay?: string; 
  public get timeOfTheDay() {
    return this.getStringAttribute('time_of_the_day');
  }
  public set timeOfTheDay(value: string) {
    this._timeOfTheDay = value;
  }
  public resetTimeOfTheDay() {
    this._timeOfTheDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfTheDayInput() {
    return this._timeOfTheDay;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // refresh_on_day - computed: false, optional: true, required: false
  private _refreshOnDay = new QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList(this, "refresh_on_day", false);
  public get refreshOnDay() {
    return this._refreshOnDay;
  }
  public putRefreshOnDay(value: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[] | cdktf.IResolvable) {
    this._refreshOnDay.internalValue = value;
  }
  public resetRefreshOnDay() {
    this._refreshOnDay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOnDayInput() {
    return this._refreshOnDay.internalValue;
  }
}

export class QuicksightRefreshScheduleScheduleScheduleFrequencyList extends cdktf.ComplexList {
  public internalValue? : QuicksightRefreshScheduleScheduleScheduleFrequency[] | cdktf.IResolvable

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
  public get(index: number): QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference {
    return new QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightRefreshScheduleSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}
  */
  readonly refreshType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#start_after_date_time QuicksightRefreshSchedule#start_after_date_time}
  */
  readonly startAfterDateTime?: string;
  /**
  * schedule_frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule#schedule_frequency QuicksightRefreshSchedule#schedule_frequency}
  */
  readonly scheduleFrequency?: QuicksightRefreshScheduleScheduleScheduleFrequency[] | cdktf.IResolvable;
}

export function quicksightRefreshScheduleScheduleToTerraform(struct?: QuicksightRefreshScheduleSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_type: cdktf.stringToTerraform(struct!.refreshType),
    start_after_date_time: cdktf.stringToTerraform(struct!.startAfterDateTime),
    schedule_frequency: cdktf.listMapper(quicksightRefreshScheduleScheduleScheduleFrequencyToTerraform, true)(struct!.scheduleFrequency),
  }
}

export class QuicksightRefreshScheduleScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuicksightRefreshScheduleSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshType = this._refreshType;
    }
    if (this._startAfterDateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAfterDateTime = this._startAfterDateTime;
    }
    if (this._scheduleFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleFrequency = this._scheduleFrequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightRefreshScheduleSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refreshType = undefined;
      this._startAfterDateTime = undefined;
      this._scheduleFrequency.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refreshType = value.refreshType;
      this._startAfterDateTime = value.startAfterDateTime;
      this._scheduleFrequency.internalValue = value.scheduleFrequency;
    }
  }

  // refresh_type - computed: false, optional: false, required: true
  private _refreshType?: string; 
  public get refreshType() {
    return this.getStringAttribute('refresh_type');
  }
  public set refreshType(value: string) {
    this._refreshType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTypeInput() {
    return this._refreshType;
  }

  // start_after_date_time - computed: true, optional: true, required: false
  private _startAfterDateTime?: string; 
  public get startAfterDateTime() {
    return this.getStringAttribute('start_after_date_time');
  }
  public set startAfterDateTime(value: string) {
    this._startAfterDateTime = value;
  }
  public resetStartAfterDateTime() {
    this._startAfterDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAfterDateTimeInput() {
    return this._startAfterDateTime;
  }

  // schedule_frequency - computed: false, optional: true, required: false
  private _scheduleFrequency = new QuicksightRefreshScheduleScheduleScheduleFrequencyList(this, "schedule_frequency", false);
  public get scheduleFrequency() {
    return this._scheduleFrequency;
  }
  public putScheduleFrequency(value: QuicksightRefreshScheduleScheduleScheduleFrequency[] | cdktf.IResolvable) {
    this._scheduleFrequency.internalValue = value;
  }
  public resetScheduleFrequency() {
    this._scheduleFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleFrequencyInput() {
    return this._scheduleFrequency.internalValue;
  }
}

export class QuicksightRefreshScheduleScheduleList extends cdktf.ComplexList {
  public internalValue? : QuicksightRefreshScheduleSchedule[] | cdktf.IResolvable

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
  public get(index: number): QuicksightRefreshScheduleScheduleOutputReference {
    return new QuicksightRefreshScheduleScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule aws_quicksight_refresh_schedule}
*/
export class QuicksightRefreshSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_refresh_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_refresh_schedule aws_quicksight_refresh_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightRefreshScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightRefreshScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_refresh_schedule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._awsAccountId = config.awsAccountId;
    this._dataSetId = config.dataSetId;
    this._scheduleId = config.scheduleId;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_id - computed: false, optional: false, required: true
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new QuicksightRefreshScheduleScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: QuicksightRefreshScheduleSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      data_set_id: cdktf.stringToTerraform(this._dataSetId),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      schedule: cdktf.listMapper(quicksightRefreshScheduleScheduleToTerraform, true)(this._schedule.internalValue),
    };
  }
}
