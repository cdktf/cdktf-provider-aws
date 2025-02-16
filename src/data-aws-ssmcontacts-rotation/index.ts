/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/data-sources/ssmcontacts_rotation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsmcontactsRotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}
  */
  readonly arn: string;
}
export interface DataAwsSsmcontactsRotationRecurrenceDailySettings {
}

export function dataAwsSsmcontactsRotationRecurrenceDailySettingsToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceDailySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceDailySettingsToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceDailySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceDailySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceDailySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // minute_of_hour - computed: true, optional: false, required: false
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
}

export class DataAwsSsmcontactsRotationRecurrenceDailySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime {
}

export function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // minute_of_hour - computed: true, optional: false, required: false
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
}

export class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceMonthlySettings {
}

export function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceMonthlySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceMonthlySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // hand_off_time - computed: true, optional: false, required: false
  private _handOffTime = new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(this, "hand_off_time", false);
  public get handOffTime() {
    return this._handOffTime;
  }
}

export class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd {
}

export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // minute_of_hour - computed: true, optional: false, required: false
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart {
}

export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // minute_of_hour - computed: true, optional: false, required: false
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {
}

export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end - computed: true, optional: false, required: false
  private _end = new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(this, "end", false);
  public get end() {
    return this._end;
  }

  // start - computed: true, optional: false, required: false
  private _start = new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(this, "start", false);
  public get start() {
    return this._start;
  }
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoverages {
}

export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoverages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoverages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoverages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoverages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coverage_times - computed: true, optional: false, required: false
  private _coverageTimes = new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(this, "coverage_times", false);
  public get coverageTimes() {
    return this._coverageTimes;
  }

  // map_block_key - computed: true, optional: false, required: false
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
}

export class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime {
}

export function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // minute_of_hour - computed: true, optional: false, required: false
  public get minuteOfHour() {
    return this.getNumberAttribute('minute_of_hour');
  }
}

export class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrenceWeeklySettings {
}

export function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrenceWeeklySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrenceWeeklySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // hand_off_time - computed: true, optional: false, required: false
  private _handOffTime = new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(this, "hand_off_time", false);
  public get handOffTime() {
    return this._handOffTime;
  }
}

export class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSsmcontactsRotationRecurrence {
}

export function dataAwsSsmcontactsRotationRecurrenceToTerraform(struct?: DataAwsSsmcontactsRotationRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSsmcontactsRotationRecurrenceToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSsmcontactsRotationRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSsmcontactsRotationRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSsmcontactsRotationRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // daily_settings - computed: true, optional: false, required: false
  private _dailySettings = new DataAwsSsmcontactsRotationRecurrenceDailySettingsList(this, "daily_settings", false);
  public get dailySettings() {
    return this._dailySettings;
  }

  // monthly_settings - computed: true, optional: false, required: false
  private _monthlySettings = new DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList(this, "monthly_settings", false);
  public get monthlySettings() {
    return this._monthlySettings;
  }

  // number_of_on_calls - computed: true, optional: false, required: false
  public get numberOfOnCalls() {
    return this.getNumberAttribute('number_of_on_calls');
  }

  // recurrence_multiplier - computed: true, optional: false, required: false
  public get recurrenceMultiplier() {
    return this.getNumberAttribute('recurrence_multiplier');
  }

  // shift_coverages - computed: true, optional: false, required: false
  private _shiftCoverages = new DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList(this, "shift_coverages", false);
  public get shiftCoverages() {
    return this._shiftCoverages;
  }

  // weekly_settings - computed: true, optional: false, required: false
  private _weeklySettings = new DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList(this, "weekly_settings", false);
  public get weeklySettings() {
    return this._weeklySettings;
  }
}

export class DataAwsSsmcontactsRotationRecurrenceList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSsmcontactsRotationRecurrenceOutputReference {
    return new DataAwsSsmcontactsRotationRecurrenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/data-sources/ssmcontacts_rotation aws_ssmcontacts_rotation}
*/
export class DataAwsSsmcontactsRotation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmcontacts_rotation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSsmcontactsRotation to import
  * @param importFromId The id of the existing DataAwsSsmcontactsRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/data-sources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSsmcontactsRotation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssmcontacts_rotation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/data-sources/ssmcontacts_rotation aws_ssmcontacts_rotation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsmcontactsRotationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSsmcontactsRotationConfig) {
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
    this._arn = config.arn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // contact_ids - computed: true, optional: false, required: false
  public get contactIds() {
    return this.getListAttribute('contact_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recurrence - computed: true, optional: false, required: false
  private _recurrence = new DataAwsSsmcontactsRotationRecurrenceList(this, "recurrence", false);
  public get recurrence() {
    return this._recurrence;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // time_zone_id - computed: true, optional: false, required: false
  public get timeZoneId() {
    return this.getStringAttribute('time_zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
