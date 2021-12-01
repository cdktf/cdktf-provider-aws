// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Security Hub
*/
export interface SecurityhubInsightConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#group_by_attribute SecurityhubInsight#group_by_attribute}
  */
  readonly groupByAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#name SecurityhubInsight#name}
  */
  readonly name: string;
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#filters SecurityhubInsight#filters}
  */
  readonly filters: SecurityhubInsightFilters;
}
export interface SecurityhubInsightFiltersAwsAccountId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersAwsAccountIdToTerraform(struct?: SecurityhubInsightFiltersAwsAccountId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersCompanyName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersCompanyNameToTerraform(struct?: SecurityhubInsightFiltersCompanyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersComplianceStatus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersComplianceStatusToTerraform(struct?: SecurityhubInsightFiltersComplianceStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersConfidence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersConfidenceToTerraform(struct?: SecurityhubInsightFiltersConfidence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersCreatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersCreatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersCreatedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersCreatedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersCreatedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersCreatedAtDateRange;
}

export function securityhubInsightFiltersCreatedAtToTerraform(struct?: SecurityhubInsightFiltersCreatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersCriticality {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersCriticalityToTerraform(struct?: SecurityhubInsightFiltersCriticality): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersDescription {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersDescriptionToTerraform(struct?: SecurityhubInsightFiltersDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsConfidence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsConfidence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsCriticality {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsCriticality): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsTypes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFirstObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference | SecurityhubInsightFiltersFirstObservedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersFirstObservedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersFirstObservedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersFirstObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersFirstObservedAtDateRange;
}

export function securityhubInsightFiltersFirstObservedAtToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersGeneratorId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersGeneratorIdToTerraform(struct?: SecurityhubInsightFiltersGeneratorId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersIdToTerraform(struct?: SecurityhubInsightFiltersId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersKeyword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersKeywordToTerraform(struct?: SecurityhubInsightFiltersKeyword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersLastObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersLastObservedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersLastObservedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersLastObservedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersLastObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersLastObservedAtDateRange;
}

export function securityhubInsightFiltersLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersLastObservedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersMalwareName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwareNameToTerraform(struct?: SecurityhubInsightFiltersMalwareName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersMalwarePath {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwarePathToTerraform(struct?: SecurityhubInsightFiltersMalwarePath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersMalwareState {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwareStateToTerraform(struct?: SecurityhubInsightFiltersMalwareState): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersMalwareType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersMalwareTypeToTerraform(struct?: SecurityhubInsightFiltersMalwareType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationDomain {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationDomain): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv6): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationPort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersNetworkDirection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkDirectionToTerraform(struct?: SecurityhubInsightFiltersNetworkDirection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkProtocol {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkProtocolToTerraform(struct?: SecurityhubInsightFiltersNetworkProtocol): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceDomain {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceDomain): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv6): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceMac {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNetworkSourceMacToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceMac): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkSourcePort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersNetworkSourcePortToTerraform(struct?: SecurityhubInsightFiltersNetworkSourcePort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersNoteText {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNoteTextToTerraform(struct?: SecurityhubInsightFiltersNoteText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNoteUpdatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersNoteUpdatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersNoteUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersNoteUpdatedAtDateRange;
}

export function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersNoteUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersNoteUpdatedByToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessLaunchedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessLaunchedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersProcessLaunchedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersProcessLaunchedAtDateRange;
}

export function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersProcessName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProcessNameToTerraform(struct?: SecurityhubInsightFiltersProcessName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessParentPid {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersProcessParentPidToTerraform(struct?: SecurityhubInsightFiltersProcessParentPid): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersProcessPath {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProcessPathToTerraform(struct?: SecurityhubInsightFiltersProcessPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessPid {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
  */
  readonly eq?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
  */
  readonly gte?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
  */
  readonly lte?: string;
}

export function securityhubInsightFiltersProcessPidToTerraform(struct?: SecurityhubInsightFiltersProcessPid): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersProcessTerminatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessTerminatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersProcessTerminatedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersProcessTerminatedAtDateRange;
}

export function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersProductArn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProductArnToTerraform(struct?: SecurityhubInsightFiltersProductArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProductFields {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProductFieldsToTerraform(struct?: SecurityhubInsightFiltersProductFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProductName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersProductNameToTerraform(struct?: SecurityhubInsightFiltersProductName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRecommendationText {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRecommendationTextToTerraform(struct?: SecurityhubInsightFiltersRecommendationText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRecordState {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRecordStateToTerraform(struct?: SecurityhubInsightFiltersRecordState): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRelatedFindingsId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRelatedFindingsProductArn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsProductArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceImageId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
  */
  readonly cidr: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceContainerImageId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceContainerImageName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersResourceContainerLaunchedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange;
}

export function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersResourceContainerName {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceContainerNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceDetailsOther {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct?: SecurityhubInsightFiltersResourceDetailsOther): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceIdToTerraform(struct?: SecurityhubInsightFiltersResourceId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourcePartition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourcePartitionToTerraform(struct?: SecurityhubInsightFiltersResourcePartition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceRegion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceRegionToTerraform(struct?: SecurityhubInsightFiltersResourceRegion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceTagsToTerraform(struct?: SecurityhubInsightFiltersResourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersResourceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersSeverityLabel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersSeverityLabel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersSourceUrl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersSourceUrlToTerraform(struct?: SecurityhubInsightFiltersSourceUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorCategory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorCategory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange;
}

export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersTitle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersTitleToTerraform(struct?: SecurityhubInsightFiltersTitle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersType {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersTypeToTerraform(struct?: SecurityhubInsightFiltersType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersUpdatedAtDateRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: number;
}

export function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersUpdatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFiltersUpdatedAtDateRange | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._unit) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFiltersUpdatedAtDateRange | undefined) {
    if (value === undefined) {
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityhubInsightFiltersUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
  */
  readonly start?: string;
  /**
  * date_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
  */
  readonly dateRange?: SecurityhubInsightFiltersUpdatedAtDateRange;
}

export function securityhubInsightFiltersUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersUpdatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersUserDefinedValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersUserDefinedValuesToTerraform(struct?: SecurityhubInsightFiltersUserDefinedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersVerificationState {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersVerificationStateToTerraform(struct?: SecurityhubInsightFiltersVerificationState): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersWorkflowStatus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
  */
  readonly value: string;
}

export function securityhubInsightFiltersWorkflowStatusToTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFilters {
  /**
  * aws_account_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#aws_account_id SecurityhubInsight#aws_account_id}
  */
  readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[];
  /**
  * company_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#company_name SecurityhubInsight#company_name}
  */
  readonly companyName?: SecurityhubInsightFiltersCompanyName[];
  /**
  * compliance_status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#compliance_status SecurityhubInsight#compliance_status}
  */
  readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[];
  /**
  * confidence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#confidence SecurityhubInsight#confidence}
  */
  readonly confidence?: SecurityhubInsightFiltersConfidence[];
  /**
  * created_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#created_at SecurityhubInsight#created_at}
  */
  readonly createdAt?: SecurityhubInsightFiltersCreatedAt[];
  /**
  * criticality block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#criticality SecurityhubInsight#criticality}
  */
  readonly criticality?: SecurityhubInsightFiltersCriticality[];
  /**
  * description block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#description SecurityhubInsight#description}
  */
  readonly description?: SecurityhubInsightFiltersDescription[];
  /**
  * finding_provider_fields_confidence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_confidence SecurityhubInsight#finding_provider_fields_confidence}
  */
  readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[];
  /**
  * finding_provider_fields_criticality block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_criticality SecurityhubInsight#finding_provider_fields_criticality}
  */
  readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[];
  /**
  * finding_provider_fields_related_findings_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_related_findings_id SecurityhubInsight#finding_provider_fields_related_findings_id}
  */
  readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[];
  /**
  * finding_provider_fields_related_findings_product_arn block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_related_findings_product_arn SecurityhubInsight#finding_provider_fields_related_findings_product_arn}
  */
  readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[];
  /**
  * finding_provider_fields_severity_label block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_severity_label SecurityhubInsight#finding_provider_fields_severity_label}
  */
  readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[];
  /**
  * finding_provider_fields_severity_original block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_severity_original SecurityhubInsight#finding_provider_fields_severity_original}
  */
  readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[];
  /**
  * finding_provider_fields_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_types SecurityhubInsight#finding_provider_fields_types}
  */
  readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[];
  /**
  * first_observed_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#first_observed_at SecurityhubInsight#first_observed_at}
  */
  readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[];
  /**
  * generator_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#generator_id SecurityhubInsight#generator_id}
  */
  readonly generatorId?: SecurityhubInsightFiltersGeneratorId[];
  /**
  * id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#id SecurityhubInsight#id}
  */
  readonly id?: SecurityhubInsightFiltersId[];
  /**
  * keyword block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#keyword SecurityhubInsight#keyword}
  */
  readonly keyword?: SecurityhubInsightFiltersKeyword[];
  /**
  * last_observed_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#last_observed_at SecurityhubInsight#last_observed_at}
  */
  readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[];
  /**
  * malware_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_name SecurityhubInsight#malware_name}
  */
  readonly malwareName?: SecurityhubInsightFiltersMalwareName[];
  /**
  * malware_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_path SecurityhubInsight#malware_path}
  */
  readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[];
  /**
  * malware_state block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_state SecurityhubInsight#malware_state}
  */
  readonly malwareState?: SecurityhubInsightFiltersMalwareState[];
  /**
  * malware_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_type SecurityhubInsight#malware_type}
  */
  readonly malwareType?: SecurityhubInsightFiltersMalwareType[];
  /**
  * network_destination_domain block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_domain SecurityhubInsight#network_destination_domain}
  */
  readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[];
  /**
  * network_destination_ipv4 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_ipv4 SecurityhubInsight#network_destination_ipv4}
  */
  readonly networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[];
  /**
  * network_destination_ipv6 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_ipv6 SecurityhubInsight#network_destination_ipv6}
  */
  readonly networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[];
  /**
  * network_destination_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_port SecurityhubInsight#network_destination_port}
  */
  readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[];
  /**
  * network_direction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_direction SecurityhubInsight#network_direction}
  */
  readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[];
  /**
  * network_protocol block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_protocol SecurityhubInsight#network_protocol}
  */
  readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[];
  /**
  * network_source_domain block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_domain SecurityhubInsight#network_source_domain}
  */
  readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[];
  /**
  * network_source_ipv4 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_ipv4 SecurityhubInsight#network_source_ipv4}
  */
  readonly networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[];
  /**
  * network_source_ipv6 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_ipv6 SecurityhubInsight#network_source_ipv6}
  */
  readonly networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[];
  /**
  * network_source_mac block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_mac SecurityhubInsight#network_source_mac}
  */
  readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[];
  /**
  * network_source_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_port SecurityhubInsight#network_source_port}
  */
  readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[];
  /**
  * note_text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_text SecurityhubInsight#note_text}
  */
  readonly noteText?: SecurityhubInsightFiltersNoteText[];
  /**
  * note_updated_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_updated_at SecurityhubInsight#note_updated_at}
  */
  readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[];
  /**
  * note_updated_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_updated_by SecurityhubInsight#note_updated_by}
  */
  readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[];
  /**
  * process_launched_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_launched_at SecurityhubInsight#process_launched_at}
  */
  readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[];
  /**
  * process_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_name SecurityhubInsight#process_name}
  */
  readonly processName?: SecurityhubInsightFiltersProcessName[];
  /**
  * process_parent_pid block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_parent_pid SecurityhubInsight#process_parent_pid}
  */
  readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[];
  /**
  * process_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_path SecurityhubInsight#process_path}
  */
  readonly processPath?: SecurityhubInsightFiltersProcessPath[];
  /**
  * process_pid block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_pid SecurityhubInsight#process_pid}
  */
  readonly processPid?: SecurityhubInsightFiltersProcessPid[];
  /**
  * process_terminated_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_terminated_at SecurityhubInsight#process_terminated_at}
  */
  readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[];
  /**
  * product_arn block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_arn SecurityhubInsight#product_arn}
  */
  readonly productArn?: SecurityhubInsightFiltersProductArn[];
  /**
  * product_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_fields SecurityhubInsight#product_fields}
  */
  readonly productFields?: SecurityhubInsightFiltersProductFields[];
  /**
  * product_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_name SecurityhubInsight#product_name}
  */
  readonly productName?: SecurityhubInsightFiltersProductName[];
  /**
  * recommendation_text block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#recommendation_text SecurityhubInsight#recommendation_text}
  */
  readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[];
  /**
  * record_state block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#record_state SecurityhubInsight#record_state}
  */
  readonly recordState?: SecurityhubInsightFiltersRecordState[];
  /**
  * related_findings_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#related_findings_id SecurityhubInsight#related_findings_id}
  */
  readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[];
  /**
  * related_findings_product_arn block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#related_findings_product_arn SecurityhubInsight#related_findings_product_arn}
  */
  readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[];
  /**
  * resource_aws_ec2_instance_iam_instance_profile_arn block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_iam_instance_profile_arn SecurityhubInsight#resource_aws_ec2_instance_iam_instance_profile_arn}
  */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[];
  /**
  * resource_aws_ec2_instance_image_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_image_id SecurityhubInsight#resource_aws_ec2_instance_image_id}
  */
  readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[];
  /**
  * resource_aws_ec2_instance_ipv4_addresses block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_ipv4_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv4_addresses}
  */
  readonly resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[];
  /**
  * resource_aws_ec2_instance_ipv6_addresses block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_ipv6_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv6_addresses}
  */
  readonly resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[];
  /**
  * resource_aws_ec2_instance_key_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_key_name SecurityhubInsight#resource_aws_ec2_instance_key_name}
  */
  readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[];
  /**
  * resource_aws_ec2_instance_launched_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_launched_at SecurityhubInsight#resource_aws_ec2_instance_launched_at}
  */
  readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[];
  /**
  * resource_aws_ec2_instance_subnet_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_subnet_id SecurityhubInsight#resource_aws_ec2_instance_subnet_id}
  */
  readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[];
  /**
  * resource_aws_ec2_instance_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_type SecurityhubInsight#resource_aws_ec2_instance_type}
  */
  readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[];
  /**
  * resource_aws_ec2_instance_vpc_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_vpc_id SecurityhubInsight#resource_aws_ec2_instance_vpc_id}
  */
  readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[];
  /**
  * resource_aws_iam_access_key_created_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_created_at SecurityhubInsight#resource_aws_iam_access_key_created_at}
  */
  readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[];
  /**
  * resource_aws_iam_access_key_status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_status SecurityhubInsight#resource_aws_iam_access_key_status}
  */
  readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[];
  /**
  * resource_aws_iam_access_key_user_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_user_name SecurityhubInsight#resource_aws_iam_access_key_user_name}
  */
  readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[];
  /**
  * resource_aws_s3_bucket_owner_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_s3_bucket_owner_id SecurityhubInsight#resource_aws_s3_bucket_owner_id}
  */
  readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[];
  /**
  * resource_aws_s3_bucket_owner_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_s3_bucket_owner_name SecurityhubInsight#resource_aws_s3_bucket_owner_name}
  */
  readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[];
  /**
  * resource_container_image_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_image_id SecurityhubInsight#resource_container_image_id}
  */
  readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[];
  /**
  * resource_container_image_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_image_name SecurityhubInsight#resource_container_image_name}
  */
  readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[];
  /**
  * resource_container_launched_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_launched_at SecurityhubInsight#resource_container_launched_at}
  */
  readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[];
  /**
  * resource_container_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_name SecurityhubInsight#resource_container_name}
  */
  readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[];
  /**
  * resource_details_other block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_details_other SecurityhubInsight#resource_details_other}
  */
  readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[];
  /**
  * resource_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_id SecurityhubInsight#resource_id}
  */
  readonly resourceId?: SecurityhubInsightFiltersResourceId[];
  /**
  * resource_partition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_partition SecurityhubInsight#resource_partition}
  */
  readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[];
  /**
  * resource_region block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_region SecurityhubInsight#resource_region}
  */
  readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[];
  /**
  * resource_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_tags SecurityhubInsight#resource_tags}
  */
  readonly resourceTags?: SecurityhubInsightFiltersResourceTags[];
  /**
  * resource_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_type SecurityhubInsight#resource_type}
  */
  readonly resourceType?: SecurityhubInsightFiltersResourceType[];
  /**
  * severity_label block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#severity_label SecurityhubInsight#severity_label}
  */
  readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[];
  /**
  * source_url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#source_url SecurityhubInsight#source_url}
  */
  readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[];
  /**
  * threat_intel_indicator_category block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_category SecurityhubInsight#threat_intel_indicator_category}
  */
  readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[];
  /**
  * threat_intel_indicator_last_observed_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_last_observed_at SecurityhubInsight#threat_intel_indicator_last_observed_at}
  */
  readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[];
  /**
  * threat_intel_indicator_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_source SecurityhubInsight#threat_intel_indicator_source}
  */
  readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[];
  /**
  * threat_intel_indicator_source_url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_source_url SecurityhubInsight#threat_intel_indicator_source_url}
  */
  readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[];
  /**
  * threat_intel_indicator_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_type SecurityhubInsight#threat_intel_indicator_type}
  */
  readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[];
  /**
  * threat_intel_indicator_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_value SecurityhubInsight#threat_intel_indicator_value}
  */
  readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[];
  /**
  * title block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#title SecurityhubInsight#title}
  */
  readonly title?: SecurityhubInsightFiltersTitle[];
  /**
  * type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#type SecurityhubInsight#type}
  */
  readonly type?: SecurityhubInsightFiltersType[];
  /**
  * updated_at block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#updated_at SecurityhubInsight#updated_at}
  */
  readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[];
  /**
  * user_defined_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#user_defined_values SecurityhubInsight#user_defined_values}
  */
  readonly userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[];
  /**
  * verification_state block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#verification_state SecurityhubInsight#verification_state}
  */
  readonly verificationState?: SecurityhubInsightFiltersVerificationState[];
  /**
  * workflow_status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#workflow_status SecurityhubInsight#workflow_status}
  */
  readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[];
}

export function securityhubInsightFiltersToTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktf.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform)(struct!.awsAccountId),
    company_name: cdktf.listMapper(securityhubInsightFiltersCompanyNameToTerraform)(struct!.companyName),
    compliance_status: cdktf.listMapper(securityhubInsightFiltersComplianceStatusToTerraform)(struct!.complianceStatus),
    confidence: cdktf.listMapper(securityhubInsightFiltersConfidenceToTerraform)(struct!.confidence),
    created_at: cdktf.listMapper(securityhubInsightFiltersCreatedAtToTerraform)(struct!.createdAt),
    criticality: cdktf.listMapper(securityhubInsightFiltersCriticalityToTerraform)(struct!.criticality),
    description: cdktf.listMapper(securityhubInsightFiltersDescriptionToTerraform)(struct!.description),
    finding_provider_fields_confidence: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform)(struct!.findingProviderFieldsConfidence),
    finding_provider_fields_criticality: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform)(struct!.findingProviderFieldsCriticality),
    finding_provider_fields_related_findings_id: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform)(struct!.findingProviderFieldsRelatedFindingsId),
    finding_provider_fields_related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform)(struct!.findingProviderFieldsRelatedFindingsProductArn),
    finding_provider_fields_severity_label: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform)(struct!.findingProviderFieldsSeverityLabel),
    finding_provider_fields_severity_original: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform)(struct!.findingProviderFieldsSeverityOriginal),
    finding_provider_fields_types: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform)(struct!.findingProviderFieldsTypes),
    first_observed_at: cdktf.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform)(struct!.firstObservedAt),
    generator_id: cdktf.listMapper(securityhubInsightFiltersGeneratorIdToTerraform)(struct!.generatorId),
    id: cdktf.listMapper(securityhubInsightFiltersIdToTerraform)(struct!.id),
    keyword: cdktf.listMapper(securityhubInsightFiltersKeywordToTerraform)(struct!.keyword),
    last_observed_at: cdktf.listMapper(securityhubInsightFiltersLastObservedAtToTerraform)(struct!.lastObservedAt),
    malware_name: cdktf.listMapper(securityhubInsightFiltersMalwareNameToTerraform)(struct!.malwareName),
    malware_path: cdktf.listMapper(securityhubInsightFiltersMalwarePathToTerraform)(struct!.malwarePath),
    malware_state: cdktf.listMapper(securityhubInsightFiltersMalwareStateToTerraform)(struct!.malwareState),
    malware_type: cdktf.listMapper(securityhubInsightFiltersMalwareTypeToTerraform)(struct!.malwareType),
    network_destination_domain: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform)(struct!.networkDestinationDomain),
    network_destination_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv4ToTerraform)(struct!.networkDestinationIpv4),
    network_destination_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv6ToTerraform)(struct!.networkDestinationIpv6),
    network_destination_port: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform)(struct!.networkDestinationPort),
    network_direction: cdktf.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform)(struct!.networkDirection),
    network_protocol: cdktf.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform)(struct!.networkProtocol),
    network_source_domain: cdktf.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform)(struct!.networkSourceDomain),
    network_source_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv4ToTerraform)(struct!.networkSourceIpv4),
    network_source_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv6ToTerraform)(struct!.networkSourceIpv6),
    network_source_mac: cdktf.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform)(struct!.networkSourceMac),
    network_source_port: cdktf.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform)(struct!.networkSourcePort),
    note_text: cdktf.listMapper(securityhubInsightFiltersNoteTextToTerraform)(struct!.noteText),
    note_updated_at: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform)(struct!.noteUpdatedAt),
    note_updated_by: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform)(struct!.noteUpdatedBy),
    process_launched_at: cdktf.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform)(struct!.processLaunchedAt),
    process_name: cdktf.listMapper(securityhubInsightFiltersProcessNameToTerraform)(struct!.processName),
    process_parent_pid: cdktf.listMapper(securityhubInsightFiltersProcessParentPidToTerraform)(struct!.processParentPid),
    process_path: cdktf.listMapper(securityhubInsightFiltersProcessPathToTerraform)(struct!.processPath),
    process_pid: cdktf.listMapper(securityhubInsightFiltersProcessPidToTerraform)(struct!.processPid),
    process_terminated_at: cdktf.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform)(struct!.processTerminatedAt),
    product_arn: cdktf.listMapper(securityhubInsightFiltersProductArnToTerraform)(struct!.productArn),
    product_fields: cdktf.listMapper(securityhubInsightFiltersProductFieldsToTerraform)(struct!.productFields),
    product_name: cdktf.listMapper(securityhubInsightFiltersProductNameToTerraform)(struct!.productName),
    recommendation_text: cdktf.listMapper(securityhubInsightFiltersRecommendationTextToTerraform)(struct!.recommendationText),
    record_state: cdktf.listMapper(securityhubInsightFiltersRecordStateToTerraform)(struct!.recordState),
    related_findings_id: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform)(struct!.relatedFindingsProductArn),
    resource_aws_ec2_instance_iam_instance_profile_arn: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
    resource_aws_ec2_instance_image_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform)(struct!.resourceAwsEc2InstanceImageId),
    resource_aws_ec2_instance_ipv4_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform)(struct!.resourceAwsEc2InstanceIpv4Addresses),
    resource_aws_ec2_instance_ipv6_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform)(struct!.resourceAwsEc2InstanceIpv6Addresses),
    resource_aws_ec2_instance_key_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform)(struct!.resourceAwsEc2InstanceKeyName),
    resource_aws_ec2_instance_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform)(struct!.resourceAwsEc2InstanceLaunchedAt),
    resource_aws_ec2_instance_subnet_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform)(struct!.resourceAwsEc2InstanceSubnetId),
    resource_aws_ec2_instance_type: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform)(struct!.resourceAwsEc2InstanceType),
    resource_aws_ec2_instance_vpc_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform)(struct!.resourceAwsEc2InstanceVpcId),
    resource_aws_iam_access_key_created_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform)(struct!.resourceAwsIamAccessKeyCreatedAt),
    resource_aws_iam_access_key_status: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform)(struct!.resourceAwsIamAccessKeyStatus),
    resource_aws_iam_access_key_user_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform)(struct!.resourceAwsIamAccessKeyUserName),
    resource_aws_s3_bucket_owner_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform)(struct!.resourceAwsS3BucketOwnerId),
    resource_aws_s3_bucket_owner_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform)(struct!.resourceAwsS3BucketOwnerName),
    resource_container_image_id: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform)(struct!.resourceContainerImageId),
    resource_container_image_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform)(struct!.resourceContainerImageName),
    resource_container_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform)(struct!.resourceContainerLaunchedAt),
    resource_container_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform)(struct!.resourceContainerName),
    resource_details_other: cdktf.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform)(struct!.resourceDetailsOther),
    resource_id: cdktf.listMapper(securityhubInsightFiltersResourceIdToTerraform)(struct!.resourceId),
    resource_partition: cdktf.listMapper(securityhubInsightFiltersResourcePartitionToTerraform)(struct!.resourcePartition),
    resource_region: cdktf.listMapper(securityhubInsightFiltersResourceRegionToTerraform)(struct!.resourceRegion),
    resource_tags: cdktf.listMapper(securityhubInsightFiltersResourceTagsToTerraform)(struct!.resourceTags),
    resource_type: cdktf.listMapper(securityhubInsightFiltersResourceTypeToTerraform)(struct!.resourceType),
    severity_label: cdktf.listMapper(securityhubInsightFiltersSeverityLabelToTerraform)(struct!.severityLabel),
    source_url: cdktf.listMapper(securityhubInsightFiltersSourceUrlToTerraform)(struct!.sourceUrl),
    threat_intel_indicator_category: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform)(struct!.threatIntelIndicatorCategory),
    threat_intel_indicator_last_observed_at: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform)(struct!.threatIntelIndicatorLastObservedAt),
    threat_intel_indicator_source: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform)(struct!.threatIntelIndicatorSource),
    threat_intel_indicator_source_url: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform)(struct!.threatIntelIndicatorSourceUrl),
    threat_intel_indicator_type: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform)(struct!.threatIntelIndicatorType),
    threat_intel_indicator_value: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform)(struct!.threatIntelIndicatorValue),
    title: cdktf.listMapper(securityhubInsightFiltersTitleToTerraform)(struct!.title),
    type: cdktf.listMapper(securityhubInsightFiltersTypeToTerraform)(struct!.type),
    updated_at: cdktf.listMapper(securityhubInsightFiltersUpdatedAtToTerraform)(struct!.updatedAt),
    user_defined_values: cdktf.listMapper(securityhubInsightFiltersUserDefinedValuesToTerraform)(struct!.userDefinedValues),
    verification_state: cdktf.listMapper(securityhubInsightFiltersVerificationStateToTerraform)(struct!.verificationState),
    workflow_status: cdktf.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform)(struct!.workflowStatus),
  }
}

export class SecurityhubInsightFiltersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecurityhubInsightFilters | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._awsAccountId) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._companyName) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    if (this._complianceStatus) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus;
    }
    if (this._confidence) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence;
    }
    if (this._createdAt) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._criticality) {
      hasAnyValues = true;
      internalValueResult.criticality = this._criticality;
    }
    if (this._description) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._findingProviderFieldsConfidence) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence;
    }
    if (this._findingProviderFieldsCriticality) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality;
    }
    if (this._findingProviderFieldsRelatedFindingsId) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId;
    }
    if (this._findingProviderFieldsRelatedFindingsProductArn) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn;
    }
    if (this._findingProviderFieldsSeverityLabel) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel;
    }
    if (this._findingProviderFieldsSeverityOriginal) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal;
    }
    if (this._findingProviderFieldsTypes) {
      hasAnyValues = true;
      internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes;
    }
    if (this._firstObservedAt) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt;
    }
    if (this._generatorId) {
      hasAnyValues = true;
      internalValueResult.generatorId = this._generatorId;
    }
    if (this._id) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keyword) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._lastObservedAt) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt;
    }
    if (this._malwareName) {
      hasAnyValues = true;
      internalValueResult.malwareName = this._malwareName;
    }
    if (this._malwarePath) {
      hasAnyValues = true;
      internalValueResult.malwarePath = this._malwarePath;
    }
    if (this._malwareState) {
      hasAnyValues = true;
      internalValueResult.malwareState = this._malwareState;
    }
    if (this._malwareType) {
      hasAnyValues = true;
      internalValueResult.malwareType = this._malwareType;
    }
    if (this._networkDestinationDomain) {
      hasAnyValues = true;
      internalValueResult.networkDestinationDomain = this._networkDestinationDomain;
    }
    if (this._networkDestinationIpv4) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv4 = this._networkDestinationIpv4;
    }
    if (this._networkDestinationIpv6) {
      hasAnyValues = true;
      internalValueResult.networkDestinationIpv6 = this._networkDestinationIpv6;
    }
    if (this._networkDestinationPort) {
      hasAnyValues = true;
      internalValueResult.networkDestinationPort = this._networkDestinationPort;
    }
    if (this._networkDirection) {
      hasAnyValues = true;
      internalValueResult.networkDirection = this._networkDirection;
    }
    if (this._networkProtocol) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol;
    }
    if (this._networkSourceDomain) {
      hasAnyValues = true;
      internalValueResult.networkSourceDomain = this._networkSourceDomain;
    }
    if (this._networkSourceIpv4) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv4 = this._networkSourceIpv4;
    }
    if (this._networkSourceIpv6) {
      hasAnyValues = true;
      internalValueResult.networkSourceIpv6 = this._networkSourceIpv6;
    }
    if (this._networkSourceMac) {
      hasAnyValues = true;
      internalValueResult.networkSourceMac = this._networkSourceMac;
    }
    if (this._networkSourcePort) {
      hasAnyValues = true;
      internalValueResult.networkSourcePort = this._networkSourcePort;
    }
    if (this._noteText) {
      hasAnyValues = true;
      internalValueResult.noteText = this._noteText;
    }
    if (this._noteUpdatedAt) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedAt = this._noteUpdatedAt;
    }
    if (this._noteUpdatedBy) {
      hasAnyValues = true;
      internalValueResult.noteUpdatedBy = this._noteUpdatedBy;
    }
    if (this._processLaunchedAt) {
      hasAnyValues = true;
      internalValueResult.processLaunchedAt = this._processLaunchedAt;
    }
    if (this._processName) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    if (this._processParentPid) {
      hasAnyValues = true;
      internalValueResult.processParentPid = this._processParentPid;
    }
    if (this._processPath) {
      hasAnyValues = true;
      internalValueResult.processPath = this._processPath;
    }
    if (this._processPid) {
      hasAnyValues = true;
      internalValueResult.processPid = this._processPid;
    }
    if (this._processTerminatedAt) {
      hasAnyValues = true;
      internalValueResult.processTerminatedAt = this._processTerminatedAt;
    }
    if (this._productArn) {
      hasAnyValues = true;
      internalValueResult.productArn = this._productArn;
    }
    if (this._productFields) {
      hasAnyValues = true;
      internalValueResult.productFields = this._productFields;
    }
    if (this._productName) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName;
    }
    if (this._recommendationText) {
      hasAnyValues = true;
      internalValueResult.recommendationText = this._recommendationText;
    }
    if (this._recordState) {
      hasAnyValues = true;
      internalValueResult.recordState = this._recordState;
    }
    if (this._relatedFindingsId) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsId = this._relatedFindingsId;
    }
    if (this._relatedFindingsProductArn) {
      hasAnyValues = true;
      internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn;
    }
    if (this._resourceAwsEc2InstanceIamInstanceProfileArn) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn;
    }
    if (this._resourceAwsEc2InstanceImageId) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId;
    }
    if (this._resourceAwsEc2InstanceIpv4Addresses) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv4Addresses = this._resourceAwsEc2InstanceIpv4Addresses;
    }
    if (this._resourceAwsEc2InstanceIpv6Addresses) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceIpv6Addresses = this._resourceAwsEc2InstanceIpv6Addresses;
    }
    if (this._resourceAwsEc2InstanceKeyName) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName;
    }
    if (this._resourceAwsEc2InstanceLaunchedAt) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt;
    }
    if (this._resourceAwsEc2InstanceSubnetId) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId;
    }
    if (this._resourceAwsEc2InstanceType) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType;
    }
    if (this._resourceAwsEc2InstanceVpcId) {
      hasAnyValues = true;
      internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId;
    }
    if (this._resourceAwsIamAccessKeyCreatedAt) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt;
    }
    if (this._resourceAwsIamAccessKeyStatus) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus;
    }
    if (this._resourceAwsIamAccessKeyUserName) {
      hasAnyValues = true;
      internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName;
    }
    if (this._resourceAwsS3BucketOwnerId) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId;
    }
    if (this._resourceAwsS3BucketOwnerName) {
      hasAnyValues = true;
      internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName;
    }
    if (this._resourceContainerImageId) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageId = this._resourceContainerImageId;
    }
    if (this._resourceContainerImageName) {
      hasAnyValues = true;
      internalValueResult.resourceContainerImageName = this._resourceContainerImageName;
    }
    if (this._resourceContainerLaunchedAt) {
      hasAnyValues = true;
      internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt;
    }
    if (this._resourceContainerName) {
      hasAnyValues = true;
      internalValueResult.resourceContainerName = this._resourceContainerName;
    }
    if (this._resourceDetailsOther) {
      hasAnyValues = true;
      internalValueResult.resourceDetailsOther = this._resourceDetailsOther;
    }
    if (this._resourceId) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourcePartition) {
      hasAnyValues = true;
      internalValueResult.resourcePartition = this._resourcePartition;
    }
    if (this._resourceRegion) {
      hasAnyValues = true;
      internalValueResult.resourceRegion = this._resourceRegion;
    }
    if (this._resourceTags) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags;
    }
    if (this._resourceType) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._severityLabel) {
      hasAnyValues = true;
      internalValueResult.severityLabel = this._severityLabel;
    }
    if (this._sourceUrl) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    if (this._threatIntelIndicatorCategory) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory;
    }
    if (this._threatIntelIndicatorLastObservedAt) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt;
    }
    if (this._threatIntelIndicatorSource) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource;
    }
    if (this._threatIntelIndicatorSourceUrl) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl;
    }
    if (this._threatIntelIndicatorType) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType;
    }
    if (this._threatIntelIndicatorValue) {
      hasAnyValues = true;
      internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue;
    }
    if (this._title) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._userDefinedValues) {
      hasAnyValues = true;
      internalValueResult.userDefinedValues = this._userDefinedValues;
    }
    if (this._verificationState) {
      hasAnyValues = true;
      internalValueResult.verificationState = this._verificationState;
    }
    if (this._workflowStatus) {
      hasAnyValues = true;
      internalValueResult.workflowStatus = this._workflowStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubInsightFilters | undefined) {
    if (value === undefined) {
      this._awsAccountId = undefined;
      this._companyName = undefined;
      this._complianceStatus = undefined;
      this._confidence = undefined;
      this._createdAt = undefined;
      this._criticality = undefined;
      this._description = undefined;
      this._findingProviderFieldsConfidence = undefined;
      this._findingProviderFieldsCriticality = undefined;
      this._findingProviderFieldsRelatedFindingsId = undefined;
      this._findingProviderFieldsRelatedFindingsProductArn = undefined;
      this._findingProviderFieldsSeverityLabel = undefined;
      this._findingProviderFieldsSeverityOriginal = undefined;
      this._findingProviderFieldsTypes = undefined;
      this._firstObservedAt = undefined;
      this._generatorId = undefined;
      this._id = undefined;
      this._keyword = undefined;
      this._lastObservedAt = undefined;
      this._malwareName = undefined;
      this._malwarePath = undefined;
      this._malwareState = undefined;
      this._malwareType = undefined;
      this._networkDestinationDomain = undefined;
      this._networkDestinationIpv4 = undefined;
      this._networkDestinationIpv6 = undefined;
      this._networkDestinationPort = undefined;
      this._networkDirection = undefined;
      this._networkProtocol = undefined;
      this._networkSourceDomain = undefined;
      this._networkSourceIpv4 = undefined;
      this._networkSourceIpv6 = undefined;
      this._networkSourceMac = undefined;
      this._networkSourcePort = undefined;
      this._noteText = undefined;
      this._noteUpdatedAt = undefined;
      this._noteUpdatedBy = undefined;
      this._processLaunchedAt = undefined;
      this._processName = undefined;
      this._processParentPid = undefined;
      this._processPath = undefined;
      this._processPid = undefined;
      this._processTerminatedAt = undefined;
      this._productArn = undefined;
      this._productFields = undefined;
      this._productName = undefined;
      this._recommendationText = undefined;
      this._recordState = undefined;
      this._relatedFindingsId = undefined;
      this._relatedFindingsProductArn = undefined;
      this._resourceAwsEc2InstanceIamInstanceProfileArn = undefined;
      this._resourceAwsEc2InstanceImageId = undefined;
      this._resourceAwsEc2InstanceIpv4Addresses = undefined;
      this._resourceAwsEc2InstanceIpv6Addresses = undefined;
      this._resourceAwsEc2InstanceKeyName = undefined;
      this._resourceAwsEc2InstanceLaunchedAt = undefined;
      this._resourceAwsEc2InstanceSubnetId = undefined;
      this._resourceAwsEc2InstanceType = undefined;
      this._resourceAwsEc2InstanceVpcId = undefined;
      this._resourceAwsIamAccessKeyCreatedAt = undefined;
      this._resourceAwsIamAccessKeyStatus = undefined;
      this._resourceAwsIamAccessKeyUserName = undefined;
      this._resourceAwsS3BucketOwnerId = undefined;
      this._resourceAwsS3BucketOwnerName = undefined;
      this._resourceContainerImageId = undefined;
      this._resourceContainerImageName = undefined;
      this._resourceContainerLaunchedAt = undefined;
      this._resourceContainerName = undefined;
      this._resourceDetailsOther = undefined;
      this._resourceId = undefined;
      this._resourcePartition = undefined;
      this._resourceRegion = undefined;
      this._resourceTags = undefined;
      this._resourceType = undefined;
      this._severityLabel = undefined;
      this._sourceUrl = undefined;
      this._threatIntelIndicatorCategory = undefined;
      this._threatIntelIndicatorLastObservedAt = undefined;
      this._threatIntelIndicatorSource = undefined;
      this._threatIntelIndicatorSourceUrl = undefined;
      this._threatIntelIndicatorType = undefined;
      this._threatIntelIndicatorValue = undefined;
      this._title = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
      this._userDefinedValues = undefined;
      this._verificationState = undefined;
      this._workflowStatus = undefined;
    }
    else {
      this._awsAccountId = value.awsAccountId;
      this._companyName = value.companyName;
      this._complianceStatus = value.complianceStatus;
      this._confidence = value.confidence;
      this._createdAt = value.createdAt;
      this._criticality = value.criticality;
      this._description = value.description;
      this._findingProviderFieldsConfidence = value.findingProviderFieldsConfidence;
      this._findingProviderFieldsCriticality = value.findingProviderFieldsCriticality;
      this._findingProviderFieldsRelatedFindingsId = value.findingProviderFieldsRelatedFindingsId;
      this._findingProviderFieldsRelatedFindingsProductArn = value.findingProviderFieldsRelatedFindingsProductArn;
      this._findingProviderFieldsSeverityLabel = value.findingProviderFieldsSeverityLabel;
      this._findingProviderFieldsSeverityOriginal = value.findingProviderFieldsSeverityOriginal;
      this._findingProviderFieldsTypes = value.findingProviderFieldsTypes;
      this._firstObservedAt = value.firstObservedAt;
      this._generatorId = value.generatorId;
      this._id = value.id;
      this._keyword = value.keyword;
      this._lastObservedAt = value.lastObservedAt;
      this._malwareName = value.malwareName;
      this._malwarePath = value.malwarePath;
      this._malwareState = value.malwareState;
      this._malwareType = value.malwareType;
      this._networkDestinationDomain = value.networkDestinationDomain;
      this._networkDestinationIpv4 = value.networkDestinationIpv4;
      this._networkDestinationIpv6 = value.networkDestinationIpv6;
      this._networkDestinationPort = value.networkDestinationPort;
      this._networkDirection = value.networkDirection;
      this._networkProtocol = value.networkProtocol;
      this._networkSourceDomain = value.networkSourceDomain;
      this._networkSourceIpv4 = value.networkSourceIpv4;
      this._networkSourceIpv6 = value.networkSourceIpv6;
      this._networkSourceMac = value.networkSourceMac;
      this._networkSourcePort = value.networkSourcePort;
      this._noteText = value.noteText;
      this._noteUpdatedAt = value.noteUpdatedAt;
      this._noteUpdatedBy = value.noteUpdatedBy;
      this._processLaunchedAt = value.processLaunchedAt;
      this._processName = value.processName;
      this._processParentPid = value.processParentPid;
      this._processPath = value.processPath;
      this._processPid = value.processPid;
      this._processTerminatedAt = value.processTerminatedAt;
      this._productArn = value.productArn;
      this._productFields = value.productFields;
      this._productName = value.productName;
      this._recommendationText = value.recommendationText;
      this._recordState = value.recordState;
      this._relatedFindingsId = value.relatedFindingsId;
      this._relatedFindingsProductArn = value.relatedFindingsProductArn;
      this._resourceAwsEc2InstanceIamInstanceProfileArn = value.resourceAwsEc2InstanceIamInstanceProfileArn;
      this._resourceAwsEc2InstanceImageId = value.resourceAwsEc2InstanceImageId;
      this._resourceAwsEc2InstanceIpv4Addresses = value.resourceAwsEc2InstanceIpv4Addresses;
      this._resourceAwsEc2InstanceIpv6Addresses = value.resourceAwsEc2InstanceIpv6Addresses;
      this._resourceAwsEc2InstanceKeyName = value.resourceAwsEc2InstanceKeyName;
      this._resourceAwsEc2InstanceLaunchedAt = value.resourceAwsEc2InstanceLaunchedAt;
      this._resourceAwsEc2InstanceSubnetId = value.resourceAwsEc2InstanceSubnetId;
      this._resourceAwsEc2InstanceType = value.resourceAwsEc2InstanceType;
      this._resourceAwsEc2InstanceVpcId = value.resourceAwsEc2InstanceVpcId;
      this._resourceAwsIamAccessKeyCreatedAt = value.resourceAwsIamAccessKeyCreatedAt;
      this._resourceAwsIamAccessKeyStatus = value.resourceAwsIamAccessKeyStatus;
      this._resourceAwsIamAccessKeyUserName = value.resourceAwsIamAccessKeyUserName;
      this._resourceAwsS3BucketOwnerId = value.resourceAwsS3BucketOwnerId;
      this._resourceAwsS3BucketOwnerName = value.resourceAwsS3BucketOwnerName;
      this._resourceContainerImageId = value.resourceContainerImageId;
      this._resourceContainerImageName = value.resourceContainerImageName;
      this._resourceContainerLaunchedAt = value.resourceContainerLaunchedAt;
      this._resourceContainerName = value.resourceContainerName;
      this._resourceDetailsOther = value.resourceDetailsOther;
      this._resourceId = value.resourceId;
      this._resourcePartition = value.resourcePartition;
      this._resourceRegion = value.resourceRegion;
      this._resourceTags = value.resourceTags;
      this._resourceType = value.resourceType;
      this._severityLabel = value.severityLabel;
      this._sourceUrl = value.sourceUrl;
      this._threatIntelIndicatorCategory = value.threatIntelIndicatorCategory;
      this._threatIntelIndicatorLastObservedAt = value.threatIntelIndicatorLastObservedAt;
      this._threatIntelIndicatorSource = value.threatIntelIndicatorSource;
      this._threatIntelIndicatorSourceUrl = value.threatIntelIndicatorSourceUrl;
      this._threatIntelIndicatorType = value.threatIntelIndicatorType;
      this._threatIntelIndicatorValue = value.threatIntelIndicatorValue;
      this._title = value.title;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
      this._userDefinedValues = value.userDefinedValues;
      this._verificationState = value.verificationState;
      this._workflowStatus = value.workflowStatus;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: SecurityhubInsightFiltersAwsAccountId[]; 
  public get awsAccountId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('aws_account_id') as any;
  }
  public set awsAccountId(value: SecurityhubInsightFiltersAwsAccountId[]) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: SecurityhubInsightFiltersCompanyName[]; 
  public get companyName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('company_name') as any;
  }
  public set companyName(value: SecurityhubInsightFiltersCompanyName[]) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // compliance_status - computed: false, optional: true, required: false
  private _complianceStatus?: SecurityhubInsightFiltersComplianceStatus[]; 
  public get complianceStatus() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('compliance_status') as any;
  }
  public set complianceStatus(value: SecurityhubInsightFiltersComplianceStatus[]) {
    this._complianceStatus = value;
  }
  public resetComplianceStatus() {
    this._complianceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus;
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence?: SecurityhubInsightFiltersConfidence[]; 
  public get confidence() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('confidence') as any;
  }
  public set confidence(value: SecurityhubInsightFiltersConfidence[]) {
    this._confidence = value;
  }
  public resetConfidence() {
    this._confidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: SecurityhubInsightFiltersCreatedAt[]; 
  public get createdAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('created_at') as any;
  }
  public set createdAt(value: SecurityhubInsightFiltersCreatedAt[]) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // criticality - computed: false, optional: true, required: false
  private _criticality?: SecurityhubInsightFiltersCriticality[]; 
  public get criticality() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('criticality') as any;
  }
  public set criticality(value: SecurityhubInsightFiltersCriticality[]) {
    this._criticality = value;
  }
  public resetCriticality() {
    this._criticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalityInput() {
    return this._criticality;
  }

  // description - computed: false, optional: true, required: false
  private _description?: SecurityhubInsightFiltersDescription[]; 
  public get description() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('description') as any;
  }
  public set description(value: SecurityhubInsightFiltersDescription[]) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // finding_provider_fields_confidence - computed: false, optional: true, required: false
  private _findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[]; 
  public get findingProviderFieldsConfidence() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('finding_provider_fields_confidence') as any;
  }
  public set findingProviderFieldsConfidence(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence[]) {
    this._findingProviderFieldsConfidence = value;
  }
  public resetFindingProviderFieldsConfidence() {
    this._findingProviderFieldsConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsConfidenceInput() {
    return this._findingProviderFieldsConfidence;
  }

  // finding_provider_fields_criticality - computed: false, optional: true, required: false
  private _findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[]; 
  public get findingProviderFieldsCriticality() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('finding_provider_fields_criticality') as any;
  }
  public set findingProviderFieldsCriticality(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality[]) {
    this._findingProviderFieldsCriticality = value;
  }
  public resetFindingProviderFieldsCriticality() {
    this._findingProviderFieldsCriticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsCriticalityInput() {
    return this._findingProviderFieldsCriticality;
  }

  // finding_provider_fields_related_findings_id - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[]; 
  public get findingProviderFieldsRelatedFindingsId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('finding_provider_fields_related_findings_id') as any;
  }
  public set findingProviderFieldsRelatedFindingsId(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[]) {
    this._findingProviderFieldsRelatedFindingsId = value;
  }
  public resetFindingProviderFieldsRelatedFindingsId() {
    this._findingProviderFieldsRelatedFindingsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsIdInput() {
    return this._findingProviderFieldsRelatedFindingsId;
  }

  // finding_provider_fields_related_findings_product_arn - computed: false, optional: true, required: false
  private _findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[]; 
  public get findingProviderFieldsRelatedFindingsProductArn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('finding_provider_fields_related_findings_product_arn') as any;
  }
  public set findingProviderFieldsRelatedFindingsProductArn(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[]) {
    this._findingProviderFieldsRelatedFindingsProductArn = value;
  }
  public resetFindingProviderFieldsRelatedFindingsProductArn() {
    this._findingProviderFieldsRelatedFindingsProductArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsRelatedFindingsProductArnInput() {
    return this._findingProviderFieldsRelatedFindingsProductArn;
  }

  // finding_provider_fields_severity_label - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[]; 
  public get findingProviderFieldsSeverityLabel() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('finding_provider_fields_severity_label') as any;
  }
  public set findingProviderFieldsSeverityLabel(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[]) {
    this._findingProviderFieldsSeverityLabel = value;
  }
  public resetFindingProviderFieldsSeverityLabel() {
    this._findingProviderFieldsSeverityLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityLabelInput() {
    return this._findingProviderFieldsSeverityLabel;
  }

  // finding_provider_fields_severity_original - computed: false, optional: true, required: false
  private _findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[]; 
  public get findingProviderFieldsSeverityOriginal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('finding_provider_fields_severity_original') as any;
  }
  public set findingProviderFieldsSeverityOriginal(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[]) {
    this._findingProviderFieldsSeverityOriginal = value;
  }
  public resetFindingProviderFieldsSeverityOriginal() {
    this._findingProviderFieldsSeverityOriginal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsSeverityOriginalInput() {
    return this._findingProviderFieldsSeverityOriginal;
  }

  // finding_provider_fields_types - computed: false, optional: true, required: false
  private _findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[]; 
  public get findingProviderFieldsTypes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('finding_provider_fields_types') as any;
  }
  public set findingProviderFieldsTypes(value: SecurityhubInsightFiltersFindingProviderFieldsTypes[]) {
    this._findingProviderFieldsTypes = value;
  }
  public resetFindingProviderFieldsTypes() {
    this._findingProviderFieldsTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingProviderFieldsTypesInput() {
    return this._findingProviderFieldsTypes;
  }

  // first_observed_at - computed: false, optional: true, required: false
  private _firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[]; 
  public get firstObservedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('first_observed_at') as any;
  }
  public set firstObservedAt(value: SecurityhubInsightFiltersFirstObservedAt[]) {
    this._firstObservedAt = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt;
  }

  // generator_id - computed: false, optional: true, required: false
  private _generatorId?: SecurityhubInsightFiltersGeneratorId[]; 
  public get generatorId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('generator_id') as any;
  }
  public set generatorId(value: SecurityhubInsightFiltersGeneratorId[]) {
    this._generatorId = value;
  }
  public resetGeneratorId() {
    this._generatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorIdInput() {
    return this._generatorId;
  }

  // id - computed: false, optional: true, required: false
  private _id?: SecurityhubInsightFiltersId[]; 
  public get id() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('id') as any;
  }
  public set id(value: SecurityhubInsightFiltersId[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword?: SecurityhubInsightFiltersKeyword[]; 
  public get keyword() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('keyword') as any;
  }
  public set keyword(value: SecurityhubInsightFiltersKeyword[]) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // last_observed_at - computed: false, optional: true, required: false
  private _lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[]; 
  public get lastObservedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('last_observed_at') as any;
  }
  public set lastObservedAt(value: SecurityhubInsightFiltersLastObservedAt[]) {
    this._lastObservedAt = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt;
  }

  // malware_name - computed: false, optional: true, required: false
  private _malwareName?: SecurityhubInsightFiltersMalwareName[]; 
  public get malwareName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('malware_name') as any;
  }
  public set malwareName(value: SecurityhubInsightFiltersMalwareName[]) {
    this._malwareName = value;
  }
  public resetMalwareName() {
    this._malwareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareNameInput() {
    return this._malwareName;
  }

  // malware_path - computed: false, optional: true, required: false
  private _malwarePath?: SecurityhubInsightFiltersMalwarePath[]; 
  public get malwarePath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('malware_path') as any;
  }
  public set malwarePath(value: SecurityhubInsightFiltersMalwarePath[]) {
    this._malwarePath = value;
  }
  public resetMalwarePath() {
    this._malwarePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwarePathInput() {
    return this._malwarePath;
  }

  // malware_state - computed: false, optional: true, required: false
  private _malwareState?: SecurityhubInsightFiltersMalwareState[]; 
  public get malwareState() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('malware_state') as any;
  }
  public set malwareState(value: SecurityhubInsightFiltersMalwareState[]) {
    this._malwareState = value;
  }
  public resetMalwareState() {
    this._malwareState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStateInput() {
    return this._malwareState;
  }

  // malware_type - computed: false, optional: true, required: false
  private _malwareType?: SecurityhubInsightFiltersMalwareType[]; 
  public get malwareType() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('malware_type') as any;
  }
  public set malwareType(value: SecurityhubInsightFiltersMalwareType[]) {
    this._malwareType = value;
  }
  public resetMalwareType() {
    this._malwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareTypeInput() {
    return this._malwareType;
  }

  // network_destination_domain - computed: false, optional: true, required: false
  private _networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[]; 
  public get networkDestinationDomain() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_destination_domain') as any;
  }
  public set networkDestinationDomain(value: SecurityhubInsightFiltersNetworkDestinationDomain[]) {
    this._networkDestinationDomain = value;
  }
  public resetNetworkDestinationDomain() {
    this._networkDestinationDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationDomainInput() {
    return this._networkDestinationDomain;
  }

  // network_destination_ipv4 - computed: false, optional: true, required: false
  private _networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[]; 
  public get networkDestinationIpv4() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_destination_ipv4') as any;
  }
  public set networkDestinationIpv4(value: SecurityhubInsightFiltersNetworkDestinationIpv4[]) {
    this._networkDestinationIpv4 = value;
  }
  public resetNetworkDestinationIpv4() {
    this._networkDestinationIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv4Input() {
    return this._networkDestinationIpv4;
  }

  // network_destination_ipv6 - computed: false, optional: true, required: false
  private _networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[]; 
  public get networkDestinationIpv6() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_destination_ipv6') as any;
  }
  public set networkDestinationIpv6(value: SecurityhubInsightFiltersNetworkDestinationIpv6[]) {
    this._networkDestinationIpv6 = value;
  }
  public resetNetworkDestinationIpv6() {
    this._networkDestinationIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationIpv6Input() {
    return this._networkDestinationIpv6;
  }

  // network_destination_port - computed: false, optional: true, required: false
  private _networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[]; 
  public get networkDestinationPort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_destination_port') as any;
  }
  public set networkDestinationPort(value: SecurityhubInsightFiltersNetworkDestinationPort[]) {
    this._networkDestinationPort = value;
  }
  public resetNetworkDestinationPort() {
    this._networkDestinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDestinationPortInput() {
    return this._networkDestinationPort;
  }

  // network_direction - computed: false, optional: true, required: false
  private _networkDirection?: SecurityhubInsightFiltersNetworkDirection[]; 
  public get networkDirection() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_direction') as any;
  }
  public set networkDirection(value: SecurityhubInsightFiltersNetworkDirection[]) {
    this._networkDirection = value;
  }
  public resetNetworkDirection() {
    this._networkDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDirectionInput() {
    return this._networkDirection;
  }

  // network_protocol - computed: false, optional: true, required: false
  private _networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[]; 
  public get networkProtocol() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_protocol') as any;
  }
  public set networkProtocol(value: SecurityhubInsightFiltersNetworkProtocol[]) {
    this._networkProtocol = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol;
  }

  // network_source_domain - computed: false, optional: true, required: false
  private _networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[]; 
  public get networkSourceDomain() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_source_domain') as any;
  }
  public set networkSourceDomain(value: SecurityhubInsightFiltersNetworkSourceDomain[]) {
    this._networkSourceDomain = value;
  }
  public resetNetworkSourceDomain() {
    this._networkSourceDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceDomainInput() {
    return this._networkSourceDomain;
  }

  // network_source_ipv4 - computed: false, optional: true, required: false
  private _networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[]; 
  public get networkSourceIpv4() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_source_ipv4') as any;
  }
  public set networkSourceIpv4(value: SecurityhubInsightFiltersNetworkSourceIpv4[]) {
    this._networkSourceIpv4 = value;
  }
  public resetNetworkSourceIpv4() {
    this._networkSourceIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv4Input() {
    return this._networkSourceIpv4;
  }

  // network_source_ipv6 - computed: false, optional: true, required: false
  private _networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[]; 
  public get networkSourceIpv6() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_source_ipv6') as any;
  }
  public set networkSourceIpv6(value: SecurityhubInsightFiltersNetworkSourceIpv6[]) {
    this._networkSourceIpv6 = value;
  }
  public resetNetworkSourceIpv6() {
    this._networkSourceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceIpv6Input() {
    return this._networkSourceIpv6;
  }

  // network_source_mac - computed: false, optional: true, required: false
  private _networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[]; 
  public get networkSourceMac() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_source_mac') as any;
  }
  public set networkSourceMac(value: SecurityhubInsightFiltersNetworkSourceMac[]) {
    this._networkSourceMac = value;
  }
  public resetNetworkSourceMac() {
    this._networkSourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceMacInput() {
    return this._networkSourceMac;
  }

  // network_source_port - computed: false, optional: true, required: false
  private _networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[]; 
  public get networkSourcePort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_source_port') as any;
  }
  public set networkSourcePort(value: SecurityhubInsightFiltersNetworkSourcePort[]) {
    this._networkSourcePort = value;
  }
  public resetNetworkSourcePort() {
    this._networkSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourcePortInput() {
    return this._networkSourcePort;
  }

  // note_text - computed: false, optional: true, required: false
  private _noteText?: SecurityhubInsightFiltersNoteText[]; 
  public get noteText() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('note_text') as any;
  }
  public set noteText(value: SecurityhubInsightFiltersNoteText[]) {
    this._noteText = value;
  }
  public resetNoteText() {
    this._noteText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteTextInput() {
    return this._noteText;
  }

  // note_updated_at - computed: false, optional: true, required: false
  private _noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[]; 
  public get noteUpdatedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('note_updated_at') as any;
  }
  public set noteUpdatedAt(value: SecurityhubInsightFiltersNoteUpdatedAt[]) {
    this._noteUpdatedAt = value;
  }
  public resetNoteUpdatedAt() {
    this._noteUpdatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedAtInput() {
    return this._noteUpdatedAt;
  }

  // note_updated_by - computed: false, optional: true, required: false
  private _noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[]; 
  public get noteUpdatedBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('note_updated_by') as any;
  }
  public set noteUpdatedBy(value: SecurityhubInsightFiltersNoteUpdatedBy[]) {
    this._noteUpdatedBy = value;
  }
  public resetNoteUpdatedBy() {
    this._noteUpdatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteUpdatedByInput() {
    return this._noteUpdatedBy;
  }

  // process_launched_at - computed: false, optional: true, required: false
  private _processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[]; 
  public get processLaunchedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('process_launched_at') as any;
  }
  public set processLaunchedAt(value: SecurityhubInsightFiltersProcessLaunchedAt[]) {
    this._processLaunchedAt = value;
  }
  public resetProcessLaunchedAt() {
    this._processLaunchedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processLaunchedAtInput() {
    return this._processLaunchedAt;
  }

  // process_name - computed: false, optional: true, required: false
  private _processName?: SecurityhubInsightFiltersProcessName[]; 
  public get processName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('process_name') as any;
  }
  public set processName(value: SecurityhubInsightFiltersProcessName[]) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // process_parent_pid - computed: false, optional: true, required: false
  private _processParentPid?: SecurityhubInsightFiltersProcessParentPid[]; 
  public get processParentPid() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('process_parent_pid') as any;
  }
  public set processParentPid(value: SecurityhubInsightFiltersProcessParentPid[]) {
    this._processParentPid = value;
  }
  public resetProcessParentPid() {
    this._processParentPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processParentPidInput() {
    return this._processParentPid;
  }

  // process_path - computed: false, optional: true, required: false
  private _processPath?: SecurityhubInsightFiltersProcessPath[]; 
  public get processPath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('process_path') as any;
  }
  public set processPath(value: SecurityhubInsightFiltersProcessPath[]) {
    this._processPath = value;
  }
  public resetProcessPath() {
    this._processPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPathInput() {
    return this._processPath;
  }

  // process_pid - computed: false, optional: true, required: false
  private _processPid?: SecurityhubInsightFiltersProcessPid[]; 
  public get processPid() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('process_pid') as any;
  }
  public set processPid(value: SecurityhubInsightFiltersProcessPid[]) {
    this._processPid = value;
  }
  public resetProcessPid() {
    this._processPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processPidInput() {
    return this._processPid;
  }

  // process_terminated_at - computed: false, optional: true, required: false
  private _processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[]; 
  public get processTerminatedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('process_terminated_at') as any;
  }
  public set processTerminatedAt(value: SecurityhubInsightFiltersProcessTerminatedAt[]) {
    this._processTerminatedAt = value;
  }
  public resetProcessTerminatedAt() {
    this._processTerminatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processTerminatedAtInput() {
    return this._processTerminatedAt;
  }

  // product_arn - computed: false, optional: true, required: false
  private _productArn?: SecurityhubInsightFiltersProductArn[]; 
  public get productArn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('product_arn') as any;
  }
  public set productArn(value: SecurityhubInsightFiltersProductArn[]) {
    this._productArn = value;
  }
  public resetProductArn() {
    this._productArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productArnInput() {
    return this._productArn;
  }

  // product_fields - computed: false, optional: true, required: false
  private _productFields?: SecurityhubInsightFiltersProductFields[]; 
  public get productFields() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('product_fields') as any;
  }
  public set productFields(value: SecurityhubInsightFiltersProductFields[]) {
    this._productFields = value;
  }
  public resetProductFields() {
    this._productFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFieldsInput() {
    return this._productFields;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: SecurityhubInsightFiltersProductName[]; 
  public get productName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('product_name') as any;
  }
  public set productName(value: SecurityhubInsightFiltersProductName[]) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // recommendation_text - computed: false, optional: true, required: false
  private _recommendationText?: SecurityhubInsightFiltersRecommendationText[]; 
  public get recommendationText() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('recommendation_text') as any;
  }
  public set recommendationText(value: SecurityhubInsightFiltersRecommendationText[]) {
    this._recommendationText = value;
  }
  public resetRecommendationText() {
    this._recommendationText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationTextInput() {
    return this._recommendationText;
  }

  // record_state - computed: false, optional: true, required: false
  private _recordState?: SecurityhubInsightFiltersRecordState[]; 
  public get recordState() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('record_state') as any;
  }
  public set recordState(value: SecurityhubInsightFiltersRecordState[]) {
    this._recordState = value;
  }
  public resetRecordState() {
    this._recordState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordStateInput() {
    return this._recordState;
  }

  // related_findings_id - computed: false, optional: true, required: false
  private _relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[]; 
  public get relatedFindingsId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('related_findings_id') as any;
  }
  public set relatedFindingsId(value: SecurityhubInsightFiltersRelatedFindingsId[]) {
    this._relatedFindingsId = value;
  }
  public resetRelatedFindingsId() {
    this._relatedFindingsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsIdInput() {
    return this._relatedFindingsId;
  }

  // related_findings_product_arn - computed: false, optional: true, required: false
  private _relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[]; 
  public get relatedFindingsProductArn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('related_findings_product_arn') as any;
  }
  public set relatedFindingsProductArn(value: SecurityhubInsightFiltersRelatedFindingsProductArn[]) {
    this._relatedFindingsProductArn = value;
  }
  public resetRelatedFindingsProductArn() {
    this._relatedFindingsProductArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedFindingsProductArnInput() {
    return this._relatedFindingsProductArn;
  }

  // resource_aws_ec2_instance_iam_instance_profile_arn - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[]; 
  public get resourceAwsEc2InstanceIamInstanceProfileArn() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_iam_instance_profile_arn') as any;
  }
  public set resourceAwsEc2InstanceIamInstanceProfileArn(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[]) {
    this._resourceAwsEc2InstanceIamInstanceProfileArn = value;
  }
  public resetResourceAwsEc2InstanceIamInstanceProfileArn() {
    this._resourceAwsEc2InstanceIamInstanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
    return this._resourceAwsEc2InstanceIamInstanceProfileArn;
  }

  // resource_aws_ec2_instance_image_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[]; 
  public get resourceAwsEc2InstanceImageId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_image_id') as any;
  }
  public set resourceAwsEc2InstanceImageId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[]) {
    this._resourceAwsEc2InstanceImageId = value;
  }
  public resetResourceAwsEc2InstanceImageId() {
    this._resourceAwsEc2InstanceImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceImageIdInput() {
    return this._resourceAwsEc2InstanceImageId;
  }

  // resource_aws_ec2_instance_ipv4_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[]; 
  public get resourceAwsEc2InstanceIpv4Addresses() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_ipv4_addresses') as any;
  }
  public set resourceAwsEc2InstanceIpv4Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[]) {
    this._resourceAwsEc2InstanceIpv4Addresses = value;
  }
  public resetResourceAwsEc2InstanceIpv4Addresses() {
    this._resourceAwsEc2InstanceIpv4Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv4AddressesInput() {
    return this._resourceAwsEc2InstanceIpv4Addresses;
  }

  // resource_aws_ec2_instance_ipv6_addresses - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[]; 
  public get resourceAwsEc2InstanceIpv6Addresses() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_ipv6_addresses') as any;
  }
  public set resourceAwsEc2InstanceIpv6Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[]) {
    this._resourceAwsEc2InstanceIpv6Addresses = value;
  }
  public resetResourceAwsEc2InstanceIpv6Addresses() {
    this._resourceAwsEc2InstanceIpv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceIpv6AddressesInput() {
    return this._resourceAwsEc2InstanceIpv6Addresses;
  }

  // resource_aws_ec2_instance_key_name - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[]; 
  public get resourceAwsEc2InstanceKeyName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_key_name') as any;
  }
  public set resourceAwsEc2InstanceKeyName(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[]) {
    this._resourceAwsEc2InstanceKeyName = value;
  }
  public resetResourceAwsEc2InstanceKeyName() {
    this._resourceAwsEc2InstanceKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceKeyNameInput() {
    return this._resourceAwsEc2InstanceKeyName;
  }

  // resource_aws_ec2_instance_launched_at - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[]; 
  public get resourceAwsEc2InstanceLaunchedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_launched_at') as any;
  }
  public set resourceAwsEc2InstanceLaunchedAt(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[]) {
    this._resourceAwsEc2InstanceLaunchedAt = value;
  }
  public resetResourceAwsEc2InstanceLaunchedAt() {
    this._resourceAwsEc2InstanceLaunchedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceLaunchedAtInput() {
    return this._resourceAwsEc2InstanceLaunchedAt;
  }

  // resource_aws_ec2_instance_subnet_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[]; 
  public get resourceAwsEc2InstanceSubnetId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_subnet_id') as any;
  }
  public set resourceAwsEc2InstanceSubnetId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[]) {
    this._resourceAwsEc2InstanceSubnetId = value;
  }
  public resetResourceAwsEc2InstanceSubnetId() {
    this._resourceAwsEc2InstanceSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceSubnetIdInput() {
    return this._resourceAwsEc2InstanceSubnetId;
  }

  // resource_aws_ec2_instance_type - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[]; 
  public get resourceAwsEc2InstanceType() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_type') as any;
  }
  public set resourceAwsEc2InstanceType(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType[]) {
    this._resourceAwsEc2InstanceType = value;
  }
  public resetResourceAwsEc2InstanceType() {
    this._resourceAwsEc2InstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceTypeInput() {
    return this._resourceAwsEc2InstanceType;
  }

  // resource_aws_ec2_instance_vpc_id - computed: false, optional: true, required: false
  private _resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[]; 
  public get resourceAwsEc2InstanceVpcId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_ec2_instance_vpc_id') as any;
  }
  public set resourceAwsEc2InstanceVpcId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[]) {
    this._resourceAwsEc2InstanceVpcId = value;
  }
  public resetResourceAwsEc2InstanceVpcId() {
    this._resourceAwsEc2InstanceVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsEc2InstanceVpcIdInput() {
    return this._resourceAwsEc2InstanceVpcId;
  }

  // resource_aws_iam_access_key_created_at - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[]; 
  public get resourceAwsIamAccessKeyCreatedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_iam_access_key_created_at') as any;
  }
  public set resourceAwsIamAccessKeyCreatedAt(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[]) {
    this._resourceAwsIamAccessKeyCreatedAt = value;
  }
  public resetResourceAwsIamAccessKeyCreatedAt() {
    this._resourceAwsIamAccessKeyCreatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyCreatedAtInput() {
    return this._resourceAwsIamAccessKeyCreatedAt;
  }

  // resource_aws_iam_access_key_status - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[]; 
  public get resourceAwsIamAccessKeyStatus() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_iam_access_key_status') as any;
  }
  public set resourceAwsIamAccessKeyStatus(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[]) {
    this._resourceAwsIamAccessKeyStatus = value;
  }
  public resetResourceAwsIamAccessKeyStatus() {
    this._resourceAwsIamAccessKeyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyStatusInput() {
    return this._resourceAwsIamAccessKeyStatus;
  }

  // resource_aws_iam_access_key_user_name - computed: false, optional: true, required: false
  private _resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[]; 
  public get resourceAwsIamAccessKeyUserName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_iam_access_key_user_name') as any;
  }
  public set resourceAwsIamAccessKeyUserName(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[]) {
    this._resourceAwsIamAccessKeyUserName = value;
  }
  public resetResourceAwsIamAccessKeyUserName() {
    this._resourceAwsIamAccessKeyUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsIamAccessKeyUserNameInput() {
    return this._resourceAwsIamAccessKeyUserName;
  }

  // resource_aws_s3_bucket_owner_id - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[]; 
  public get resourceAwsS3BucketOwnerId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_s3_bucket_owner_id') as any;
  }
  public set resourceAwsS3BucketOwnerId(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[]) {
    this._resourceAwsS3BucketOwnerId = value;
  }
  public resetResourceAwsS3BucketOwnerId() {
    this._resourceAwsS3BucketOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerIdInput() {
    return this._resourceAwsS3BucketOwnerId;
  }

  // resource_aws_s3_bucket_owner_name - computed: false, optional: true, required: false
  private _resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[]; 
  public get resourceAwsS3BucketOwnerName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_aws_s3_bucket_owner_name') as any;
  }
  public set resourceAwsS3BucketOwnerName(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[]) {
    this._resourceAwsS3BucketOwnerName = value;
  }
  public resetResourceAwsS3BucketOwnerName() {
    this._resourceAwsS3BucketOwnerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAwsS3BucketOwnerNameInput() {
    return this._resourceAwsS3BucketOwnerName;
  }

  // resource_container_image_id - computed: false, optional: true, required: false
  private _resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[]; 
  public get resourceContainerImageId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_container_image_id') as any;
  }
  public set resourceContainerImageId(value: SecurityhubInsightFiltersResourceContainerImageId[]) {
    this._resourceContainerImageId = value;
  }
  public resetResourceContainerImageId() {
    this._resourceContainerImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageIdInput() {
    return this._resourceContainerImageId;
  }

  // resource_container_image_name - computed: false, optional: true, required: false
  private _resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[]; 
  public get resourceContainerImageName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_container_image_name') as any;
  }
  public set resourceContainerImageName(value: SecurityhubInsightFiltersResourceContainerImageName[]) {
    this._resourceContainerImageName = value;
  }
  public resetResourceContainerImageName() {
    this._resourceContainerImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerImageNameInput() {
    return this._resourceContainerImageName;
  }

  // resource_container_launched_at - computed: false, optional: true, required: false
  private _resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[]; 
  public get resourceContainerLaunchedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_container_launched_at') as any;
  }
  public set resourceContainerLaunchedAt(value: SecurityhubInsightFiltersResourceContainerLaunchedAt[]) {
    this._resourceContainerLaunchedAt = value;
  }
  public resetResourceContainerLaunchedAt() {
    this._resourceContainerLaunchedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerLaunchedAtInput() {
    return this._resourceContainerLaunchedAt;
  }

  // resource_container_name - computed: false, optional: true, required: false
  private _resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[]; 
  public get resourceContainerName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_container_name') as any;
  }
  public set resourceContainerName(value: SecurityhubInsightFiltersResourceContainerName[]) {
    this._resourceContainerName = value;
  }
  public resetResourceContainerName() {
    this._resourceContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceContainerNameInput() {
    return this._resourceContainerName;
  }

  // resource_details_other - computed: false, optional: true, required: false
  private _resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[]; 
  public get resourceDetailsOther() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_details_other') as any;
  }
  public set resourceDetailsOther(value: SecurityhubInsightFiltersResourceDetailsOther[]) {
    this._resourceDetailsOther = value;
  }
  public resetResourceDetailsOther() {
    this._resourceDetailsOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDetailsOtherInput() {
    return this._resourceDetailsOther;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: SecurityhubInsightFiltersResourceId[]; 
  public get resourceId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_id') as any;
  }
  public set resourceId(value: SecurityhubInsightFiltersResourceId[]) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_partition - computed: false, optional: true, required: false
  private _resourcePartition?: SecurityhubInsightFiltersResourcePartition[]; 
  public get resourcePartition() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_partition') as any;
  }
  public set resourcePartition(value: SecurityhubInsightFiltersResourcePartition[]) {
    this._resourcePartition = value;
  }
  public resetResourcePartition() {
    this._resourcePartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePartitionInput() {
    return this._resourcePartition;
  }

  // resource_region - computed: false, optional: true, required: false
  private _resourceRegion?: SecurityhubInsightFiltersResourceRegion[]; 
  public get resourceRegion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_region') as any;
  }
  public set resourceRegion(value: SecurityhubInsightFiltersResourceRegion[]) {
    this._resourceRegion = value;
  }
  public resetResourceRegion() {
    this._resourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: SecurityhubInsightFiltersResourceTags[]; 
  public get resourceTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_tags') as any;
  }
  public set resourceTags(value: SecurityhubInsightFiltersResourceTags[]) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: SecurityhubInsightFiltersResourceType[]; 
  public get resourceType() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_type') as any;
  }
  public set resourceType(value: SecurityhubInsightFiltersResourceType[]) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // severity_label - computed: false, optional: true, required: false
  private _severityLabel?: SecurityhubInsightFiltersSeverityLabel[]; 
  public get severityLabel() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('severity_label') as any;
  }
  public set severityLabel(value: SecurityhubInsightFiltersSeverityLabel[]) {
    this._severityLabel = value;
  }
  public resetSeverityLabel() {
    this._severityLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLabelInput() {
    return this._severityLabel;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl?: SecurityhubInsightFiltersSourceUrl[]; 
  public get sourceUrl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source_url') as any;
  }
  public set sourceUrl(value: SecurityhubInsightFiltersSourceUrl[]) {
    this._sourceUrl = value;
  }
  public resetSourceUrl() {
    this._sourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // threat_intel_indicator_category - computed: false, optional: true, required: false
  private _threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[]; 
  public get threatIntelIndicatorCategory() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('threat_intel_indicator_category') as any;
  }
  public set threatIntelIndicatorCategory(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory[]) {
    this._threatIntelIndicatorCategory = value;
  }
  public resetThreatIntelIndicatorCategory() {
    this._threatIntelIndicatorCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorCategoryInput() {
    return this._threatIntelIndicatorCategory;
  }

  // threat_intel_indicator_last_observed_at - computed: false, optional: true, required: false
  private _threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[]; 
  public get threatIntelIndicatorLastObservedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('threat_intel_indicator_last_observed_at') as any;
  }
  public set threatIntelIndicatorLastObservedAt(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[]) {
    this._threatIntelIndicatorLastObservedAt = value;
  }
  public resetThreatIntelIndicatorLastObservedAt() {
    this._threatIntelIndicatorLastObservedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorLastObservedAtInput() {
    return this._threatIntelIndicatorLastObservedAt;
  }

  // threat_intel_indicator_source - computed: false, optional: true, required: false
  private _threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[]; 
  public get threatIntelIndicatorSource() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('threat_intel_indicator_source') as any;
  }
  public set threatIntelIndicatorSource(value: SecurityhubInsightFiltersThreatIntelIndicatorSource[]) {
    this._threatIntelIndicatorSource = value;
  }
  public resetThreatIntelIndicatorSource() {
    this._threatIntelIndicatorSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceInput() {
    return this._threatIntelIndicatorSource;
  }

  // threat_intel_indicator_source_url - computed: false, optional: true, required: false
  private _threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[]; 
  public get threatIntelIndicatorSourceUrl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('threat_intel_indicator_source_url') as any;
  }
  public set threatIntelIndicatorSourceUrl(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[]) {
    this._threatIntelIndicatorSourceUrl = value;
  }
  public resetThreatIntelIndicatorSourceUrl() {
    this._threatIntelIndicatorSourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorSourceUrlInput() {
    return this._threatIntelIndicatorSourceUrl;
  }

  // threat_intel_indicator_type - computed: false, optional: true, required: false
  private _threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[]; 
  public get threatIntelIndicatorType() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('threat_intel_indicator_type') as any;
  }
  public set threatIntelIndicatorType(value: SecurityhubInsightFiltersThreatIntelIndicatorType[]) {
    this._threatIntelIndicatorType = value;
  }
  public resetThreatIntelIndicatorType() {
    this._threatIntelIndicatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorTypeInput() {
    return this._threatIntelIndicatorType;
  }

  // threat_intel_indicator_value - computed: false, optional: true, required: false
  private _threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[]; 
  public get threatIntelIndicatorValue() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('threat_intel_indicator_value') as any;
  }
  public set threatIntelIndicatorValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue[]) {
    this._threatIntelIndicatorValue = value;
  }
  public resetThreatIntelIndicatorValue() {
    this._threatIntelIndicatorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelIndicatorValueInput() {
    return this._threatIntelIndicatorValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: SecurityhubInsightFiltersTitle[]; 
  public get title() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('title') as any;
  }
  public set title(value: SecurityhubInsightFiltersTitle[]) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: SecurityhubInsightFiltersType[]; 
  public get type() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('type') as any;
  }
  public set type(value: SecurityhubInsightFiltersType[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: SecurityhubInsightFiltersUpdatedAt[]; 
  public get updatedAt() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('updated_at') as any;
  }
  public set updatedAt(value: SecurityhubInsightFiltersUpdatedAt[]) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // user_defined_values - computed: false, optional: true, required: false
  private _userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[]; 
  public get userDefinedValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_defined_values') as any;
  }
  public set userDefinedValues(value: SecurityhubInsightFiltersUserDefinedValues[]) {
    this._userDefinedValues = value;
  }
  public resetUserDefinedValues() {
    this._userDefinedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedValuesInput() {
    return this._userDefinedValues;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState?: SecurityhubInsightFiltersVerificationState[]; 
  public get verificationState() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('verification_state') as any;
  }
  public set verificationState(value: SecurityhubInsightFiltersVerificationState[]) {
    this._verificationState = value;
  }
  public resetVerificationState() {
    this._verificationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState;
  }

  // workflow_status - computed: false, optional: true, required: false
  private _workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[]; 
  public get workflowStatus() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('workflow_status') as any;
  }
  public set workflowStatus(value: SecurityhubInsightFiltersWorkflowStatus[]) {
    this._workflowStatus = value;
  }
  public resetWorkflowStatus() {
    this._workflowStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowStatusInput() {
    return this._workflowStatus;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight}
*/
export class SecurityhubInsight extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_securityhub_insight";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubInsightConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_insight',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupByAttribute = config.groupByAttribute;
    this._name = config.name;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // group_by_attribute - computed: false, optional: false, required: true
  private _groupByAttribute?: string; 
  public get groupByAttribute() {
    return this.getStringAttribute('group_by_attribute');
  }
  public set groupByAttribute(value: string) {
    this._groupByAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAttributeInput() {
    return this._groupByAttribute;
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
    return this._name;
  }

  // filters - computed: false, optional: false, required: true
  private _filters = new SecurityhubInsightFiltersOutputReference(this as any, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: SecurityhubInsightFilters) {
    this._filters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_by_attribute: cdktf.stringToTerraform(this._groupByAttribute),
      name: cdktf.stringToTerraform(this._name),
      filters: securityhubInsightFiltersToTerraform(this._filters.internalValue),
    };
  }
}
