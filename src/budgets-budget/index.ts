/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#account_id BudgetsBudget#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#budget_type BudgetsBudget#budget_type}
  */
  readonly budgetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#id BudgetsBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#limit_amount BudgetsBudget#limit_amount}
  */
  readonly limitAmount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#limit_unit BudgetsBudget#limit_unit}
  */
  readonly limitUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#name BudgetsBudget#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#name_prefix BudgetsBudget#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#tags BudgetsBudget#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#tags_all BudgetsBudget#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#time_period_end BudgetsBudget#time_period_end}
  */
  readonly timePeriodEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#time_period_start BudgetsBudget#time_period_start}
  */
  readonly timePeriodStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#time_unit BudgetsBudget#time_unit}
  */
  readonly timeUnit: string;
  /**
  * auto_adjust_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#auto_adjust_data BudgetsBudget#auto_adjust_data}
  */
  readonly autoAdjustData?: BudgetsBudgetAutoAdjustData;
  /**
  * cost_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#cost_filter BudgetsBudget#cost_filter}
  */
  readonly costFilter?: BudgetsBudgetCostFilter[] | cdktf.IResolvable;
  /**
  * cost_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#cost_types BudgetsBudget#cost_types}
  */
  readonly costTypes?: BudgetsBudgetCostTypes;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#notification BudgetsBudget#notification}
  */
  readonly notification?: BudgetsBudgetNotification[] | cdktf.IResolvable;
  /**
  * planned_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#planned_limit BudgetsBudget#planned_limit}
  */
  readonly plannedLimit?: BudgetsBudgetPlannedLimit[] | cdktf.IResolvable;
}
export interface BudgetsBudgetAutoAdjustDataHistoricalOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#budget_adjustment_period BudgetsBudget#budget_adjustment_period}
  */
  readonly budgetAdjustmentPeriod: number;
}

export function budgetsBudgetAutoAdjustDataHistoricalOptionsToTerraform(struct?: BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference | BudgetsBudgetAutoAdjustDataHistoricalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budget_adjustment_period: cdktf.numberToTerraform(struct!.budgetAdjustmentPeriod),
  }
}


export function budgetsBudgetAutoAdjustDataHistoricalOptionsToHclTerraform(struct?: BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference | BudgetsBudgetAutoAdjustDataHistoricalOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budget_adjustment_period: {
      value: cdktf.numberToHclTerraform(struct!.budgetAdjustmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetAutoAdjustDataHistoricalOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgetAdjustmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetAdjustmentPeriod = this._budgetAdjustmentPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetAutoAdjustDataHistoricalOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._budgetAdjustmentPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._budgetAdjustmentPeriod = value.budgetAdjustmentPeriod;
    }
  }

  // budget_adjustment_period - computed: false, optional: false, required: true
  private _budgetAdjustmentPeriod?: number; 
  public get budgetAdjustmentPeriod() {
    return this.getNumberAttribute('budget_adjustment_period');
  }
  public set budgetAdjustmentPeriod(value: number) {
    this._budgetAdjustmentPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetAdjustmentPeriodInput() {
    return this._budgetAdjustmentPeriod;
  }

  // lookback_available_periods - computed: true, optional: false, required: false
  public get lookbackAvailablePeriods() {
    return this.getNumberAttribute('lookback_available_periods');
  }
}
export interface BudgetsBudgetAutoAdjustData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#auto_adjust_type BudgetsBudget#auto_adjust_type}
  */
  readonly autoAdjustType: string;
  /**
  * historical_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#historical_options BudgetsBudget#historical_options}
  */
  readonly historicalOptions?: BudgetsBudgetAutoAdjustDataHistoricalOptions;
}

export function budgetsBudgetAutoAdjustDataToTerraform(struct?: BudgetsBudgetAutoAdjustDataOutputReference | BudgetsBudgetAutoAdjustData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_adjust_type: cdktf.stringToTerraform(struct!.autoAdjustType),
    historical_options: budgetsBudgetAutoAdjustDataHistoricalOptionsToTerraform(struct!.historicalOptions),
  }
}


export function budgetsBudgetAutoAdjustDataToHclTerraform(struct?: BudgetsBudgetAutoAdjustDataOutputReference | BudgetsBudgetAutoAdjustData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_adjust_type: {
      value: cdktf.stringToHclTerraform(struct!.autoAdjustType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    historical_options: {
      value: budgetsBudgetAutoAdjustDataHistoricalOptionsToHclTerraform(struct!.historicalOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BudgetsBudgetAutoAdjustDataHistoricalOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetsBudgetAutoAdjustDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetAutoAdjustData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAdjustType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAdjustType = this._autoAdjustType;
    }
    if (this._historicalOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicalOptions = this._historicalOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetAutoAdjustData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoAdjustType = undefined;
      this._historicalOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoAdjustType = value.autoAdjustType;
      this._historicalOptions.internalValue = value.historicalOptions;
    }
  }

  // auto_adjust_type - computed: false, optional: false, required: true
  private _autoAdjustType?: string; 
  public get autoAdjustType() {
    return this.getStringAttribute('auto_adjust_type');
  }
  public set autoAdjustType(value: string) {
    this._autoAdjustType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAdjustTypeInput() {
    return this._autoAdjustType;
  }

  // last_auto_adjust_time - computed: true, optional: false, required: false
  public get lastAutoAdjustTime() {
    return this.getStringAttribute('last_auto_adjust_time');
  }

  // historical_options - computed: false, optional: true, required: false
  private _historicalOptions = new BudgetsBudgetAutoAdjustDataHistoricalOptionsOutputReference(this, "historical_options");
  public get historicalOptions() {
    return this._historicalOptions;
  }
  public putHistoricalOptions(value: BudgetsBudgetAutoAdjustDataHistoricalOptions) {
    this._historicalOptions.internalValue = value;
  }
  public resetHistoricalOptions() {
    this._historicalOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalOptionsInput() {
    return this._historicalOptions.internalValue;
  }
}
export interface BudgetsBudgetCostFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#name BudgetsBudget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#values BudgetsBudget#values}
  */
  readonly values: string[];
}

export function budgetsBudgetCostFilterToTerraform(struct?: BudgetsBudgetCostFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function budgetsBudgetCostFilterToHclTerraform(struct?: BudgetsBudgetCostFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetsBudgetCostFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetsBudgetCostFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetCostFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class BudgetsBudgetCostFilterList extends cdktf.ComplexList {
  public internalValue? : BudgetsBudgetCostFilter[] | cdktf.IResolvable

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
  public get(index: number): BudgetsBudgetCostFilterOutputReference {
    return new BudgetsBudgetCostFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetsBudgetCostTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_credit BudgetsBudget#include_credit}
  */
  readonly includeCredit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_discount BudgetsBudget#include_discount}
  */
  readonly includeDiscount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}
  */
  readonly includeOtherSubscription?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_recurring BudgetsBudget#include_recurring}
  */
  readonly includeRecurring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_refund BudgetsBudget#include_refund}
  */
  readonly includeRefund?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_subscription BudgetsBudget#include_subscription}
  */
  readonly includeSubscription?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_support BudgetsBudget#include_support}
  */
  readonly includeSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_tax BudgetsBudget#include_tax}
  */
  readonly includeTax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#include_upfront BudgetsBudget#include_upfront}
  */
  readonly includeUpfront?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#use_amortized BudgetsBudget#use_amortized}
  */
  readonly useAmortized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#use_blended BudgetsBudget#use_blended}
  */
  readonly useBlended?: boolean | cdktf.IResolvable;
}

export function budgetsBudgetCostTypesToTerraform(struct?: BudgetsBudgetCostTypesOutputReference | BudgetsBudgetCostTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_credit: cdktf.booleanToTerraform(struct!.includeCredit),
    include_discount: cdktf.booleanToTerraform(struct!.includeDiscount),
    include_other_subscription: cdktf.booleanToTerraform(struct!.includeOtherSubscription),
    include_recurring: cdktf.booleanToTerraform(struct!.includeRecurring),
    include_refund: cdktf.booleanToTerraform(struct!.includeRefund),
    include_subscription: cdktf.booleanToTerraform(struct!.includeSubscription),
    include_support: cdktf.booleanToTerraform(struct!.includeSupport),
    include_tax: cdktf.booleanToTerraform(struct!.includeTax),
    include_upfront: cdktf.booleanToTerraform(struct!.includeUpfront),
    use_amortized: cdktf.booleanToTerraform(struct!.useAmortized),
    use_blended: cdktf.booleanToTerraform(struct!.useBlended),
  }
}


export function budgetsBudgetCostTypesToHclTerraform(struct?: BudgetsBudgetCostTypesOutputReference | BudgetsBudgetCostTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_credit: {
      value: cdktf.booleanToHclTerraform(struct!.includeCredit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_discount: {
      value: cdktf.booleanToHclTerraform(struct!.includeDiscount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_other_subscription: {
      value: cdktf.booleanToHclTerraform(struct!.includeOtherSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_recurring: {
      value: cdktf.booleanToHclTerraform(struct!.includeRecurring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_refund: {
      value: cdktf.booleanToHclTerraform(struct!.includeRefund),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_subscription: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_support: {
      value: cdktf.booleanToHclTerraform(struct!.includeSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_tax: {
      value: cdktf.booleanToHclTerraform(struct!.includeTax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_upfront: {
      value: cdktf.booleanToHclTerraform(struct!.includeUpfront),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_amortized: {
      value: cdktf.booleanToHclTerraform(struct!.useAmortized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_blended: {
      value: cdktf.booleanToHclTerraform(struct!.useBlended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetCostTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeCredit !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCredit = this._includeCredit;
    }
    if (this._includeDiscount !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDiscount = this._includeDiscount;
    }
    if (this._includeOtherSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeOtherSubscription = this._includeOtherSubscription;
    }
    if (this._includeRecurring !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRecurring = this._includeRecurring;
    }
    if (this._includeRefund !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRefund = this._includeRefund;
    }
    if (this._includeSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubscription = this._includeSubscription;
    }
    if (this._includeSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSupport = this._includeSupport;
    }
    if (this._includeTax !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTax = this._includeTax;
    }
    if (this._includeUpfront !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUpfront = this._includeUpfront;
    }
    if (this._useAmortized !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAmortized = this._useAmortized;
    }
    if (this._useBlended !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBlended = this._useBlended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetCostTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeCredit = undefined;
      this._includeDiscount = undefined;
      this._includeOtherSubscription = undefined;
      this._includeRecurring = undefined;
      this._includeRefund = undefined;
      this._includeSubscription = undefined;
      this._includeSupport = undefined;
      this._includeTax = undefined;
      this._includeUpfront = undefined;
      this._useAmortized = undefined;
      this._useBlended = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeCredit = value.includeCredit;
      this._includeDiscount = value.includeDiscount;
      this._includeOtherSubscription = value.includeOtherSubscription;
      this._includeRecurring = value.includeRecurring;
      this._includeRefund = value.includeRefund;
      this._includeSubscription = value.includeSubscription;
      this._includeSupport = value.includeSupport;
      this._includeTax = value.includeTax;
      this._includeUpfront = value.includeUpfront;
      this._useAmortized = value.useAmortized;
      this._useBlended = value.useBlended;
    }
  }

  // include_credit - computed: false, optional: true, required: false
  private _includeCredit?: boolean | cdktf.IResolvable; 
  public get includeCredit() {
    return this.getBooleanAttribute('include_credit');
  }
  public set includeCredit(value: boolean | cdktf.IResolvable) {
    this._includeCredit = value;
  }
  public resetIncludeCredit() {
    this._includeCredit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCreditInput() {
    return this._includeCredit;
  }

  // include_discount - computed: false, optional: true, required: false
  private _includeDiscount?: boolean | cdktf.IResolvable; 
  public get includeDiscount() {
    return this.getBooleanAttribute('include_discount');
  }
  public set includeDiscount(value: boolean | cdktf.IResolvable) {
    this._includeDiscount = value;
  }
  public resetIncludeDiscount() {
    this._includeDiscount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDiscountInput() {
    return this._includeDiscount;
  }

  // include_other_subscription - computed: false, optional: true, required: false
  private _includeOtherSubscription?: boolean | cdktf.IResolvable; 
  public get includeOtherSubscription() {
    return this.getBooleanAttribute('include_other_subscription');
  }
  public set includeOtherSubscription(value: boolean | cdktf.IResolvable) {
    this._includeOtherSubscription = value;
  }
  public resetIncludeOtherSubscription() {
    this._includeOtherSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOtherSubscriptionInput() {
    return this._includeOtherSubscription;
  }

  // include_recurring - computed: false, optional: true, required: false
  private _includeRecurring?: boolean | cdktf.IResolvable; 
  public get includeRecurring() {
    return this.getBooleanAttribute('include_recurring');
  }
  public set includeRecurring(value: boolean | cdktf.IResolvable) {
    this._includeRecurring = value;
  }
  public resetIncludeRecurring() {
    this._includeRecurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRecurringInput() {
    return this._includeRecurring;
  }

  // include_refund - computed: false, optional: true, required: false
  private _includeRefund?: boolean | cdktf.IResolvable; 
  public get includeRefund() {
    return this.getBooleanAttribute('include_refund');
  }
  public set includeRefund(value: boolean | cdktf.IResolvable) {
    this._includeRefund = value;
  }
  public resetIncludeRefund() {
    this._includeRefund = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRefundInput() {
    return this._includeRefund;
  }

  // include_subscription - computed: false, optional: true, required: false
  private _includeSubscription?: boolean | cdktf.IResolvable; 
  public get includeSubscription() {
    return this.getBooleanAttribute('include_subscription');
  }
  public set includeSubscription(value: boolean | cdktf.IResolvable) {
    this._includeSubscription = value;
  }
  public resetIncludeSubscription() {
    this._includeSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubscriptionInput() {
    return this._includeSubscription;
  }

  // include_support - computed: false, optional: true, required: false
  private _includeSupport?: boolean | cdktf.IResolvable; 
  public get includeSupport() {
    return this.getBooleanAttribute('include_support');
  }
  public set includeSupport(value: boolean | cdktf.IResolvable) {
    this._includeSupport = value;
  }
  public resetIncludeSupport() {
    this._includeSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSupportInput() {
    return this._includeSupport;
  }

  // include_tax - computed: false, optional: true, required: false
  private _includeTax?: boolean | cdktf.IResolvable; 
  public get includeTax() {
    return this.getBooleanAttribute('include_tax');
  }
  public set includeTax(value: boolean | cdktf.IResolvable) {
    this._includeTax = value;
  }
  public resetIncludeTax() {
    this._includeTax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTaxInput() {
    return this._includeTax;
  }

  // include_upfront - computed: false, optional: true, required: false
  private _includeUpfront?: boolean | cdktf.IResolvable; 
  public get includeUpfront() {
    return this.getBooleanAttribute('include_upfront');
  }
  public set includeUpfront(value: boolean | cdktf.IResolvable) {
    this._includeUpfront = value;
  }
  public resetIncludeUpfront() {
    this._includeUpfront = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUpfrontInput() {
    return this._includeUpfront;
  }

  // use_amortized - computed: false, optional: true, required: false
  private _useAmortized?: boolean | cdktf.IResolvable; 
  public get useAmortized() {
    return this.getBooleanAttribute('use_amortized');
  }
  public set useAmortized(value: boolean | cdktf.IResolvable) {
    this._useAmortized = value;
  }
  public resetUseAmortized() {
    this._useAmortized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAmortizedInput() {
    return this._useAmortized;
  }

  // use_blended - computed: false, optional: true, required: false
  private _useBlended?: boolean | cdktf.IResolvable; 
  public get useBlended() {
    return this.getBooleanAttribute('use_blended');
  }
  public set useBlended(value: boolean | cdktf.IResolvable) {
    this._useBlended = value;
  }
  public resetUseBlended() {
    this._useBlended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBlendedInput() {
    return this._useBlended;
  }
}
export interface BudgetsBudgetNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#notification_type BudgetsBudget#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}
  */
  readonly subscriberEmailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}
  */
  readonly subscriberSnsTopicArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#threshold BudgetsBudget#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#threshold_type BudgetsBudget#threshold_type}
  */
  readonly thresholdType: string;
}

export function budgetsBudgetNotificationToTerraform(struct?: BudgetsBudgetNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
    subscriber_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subscriberEmailAddresses),
    subscriber_sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subscriberSnsTopicArns),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}


export function budgetsBudgetNotificationToHclTerraform(struct?: BudgetsBudgetNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_type: {
      value: cdktf.stringToHclTerraform(struct!.notificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscriber_email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subscriberEmailAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subscriber_sns_topic_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subscriberSnsTopicArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetsBudgetNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetsBudgetNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._notificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationType = this._notificationType;
    }
    if (this._subscriberEmailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriberEmailAddresses = this._subscriberEmailAddresses;
    }
    if (this._subscriberSnsTopicArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriberSnsTopicArns = this._subscriberSnsTopicArns;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._notificationType = undefined;
      this._subscriberEmailAddresses = undefined;
      this._subscriberSnsTopicArns = undefined;
      this._threshold = undefined;
      this._thresholdType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._notificationType = value.notificationType;
      this._subscriberEmailAddresses = value.subscriberEmailAddresses;
      this._subscriberSnsTopicArns = value.subscriberSnsTopicArns;
      this._threshold = value.threshold;
      this._thresholdType = value.thresholdType;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // subscriber_email_addresses - computed: false, optional: true, required: false
  private _subscriberEmailAddresses?: string[]; 
  public get subscriberEmailAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('subscriber_email_addresses'));
  }
  public set subscriberEmailAddresses(value: string[]) {
    this._subscriberEmailAddresses = value;
  }
  public resetSubscriberEmailAddresses() {
    this._subscriberEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberEmailAddressesInput() {
    return this._subscriberEmailAddresses;
  }

  // subscriber_sns_topic_arns - computed: false, optional: true, required: false
  private _subscriberSnsTopicArns?: string[]; 
  public get subscriberSnsTopicArns() {
    return cdktf.Fn.tolist(this.getListAttribute('subscriber_sns_topic_arns'));
  }
  public set subscriberSnsTopicArns(value: string[]) {
    this._subscriberSnsTopicArns = value;
  }
  public resetSubscriberSnsTopicArns() {
    this._subscriberSnsTopicArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberSnsTopicArnsInput() {
    return this._subscriberSnsTopicArns;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_type - computed: false, optional: false, required: true
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}

export class BudgetsBudgetNotificationList extends cdktf.ComplexList {
  public internalValue? : BudgetsBudgetNotification[] | cdktf.IResolvable

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
  public get(index: number): BudgetsBudgetNotificationOutputReference {
    return new BudgetsBudgetNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetsBudgetPlannedLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#amount BudgetsBudget#amount}
  */
  readonly amount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#start_time BudgetsBudget#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#unit BudgetsBudget#unit}
  */
  readonly unit: string;
}

export function budgetsBudgetPlannedLimitToTerraform(struct?: BudgetsBudgetPlannedLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.stringToTerraform(struct!.amount),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function budgetsBudgetPlannedLimitToHclTerraform(struct?: BudgetsBudgetPlannedLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.stringToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetsBudgetPlannedLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetsBudgetPlannedLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetPlannedLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._startTime = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._startTime = value.startTime;
      this._unit = value.unit;
    }
  }

  // amount - computed: false, optional: false, required: true
  private _amount?: string; 
  public get amount() {
    return this.getStringAttribute('amount');
  }
  public set amount(value: string) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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
}

export class BudgetsBudgetPlannedLimitList extends cdktf.ComplexList {
  public internalValue? : BudgetsBudgetPlannedLimit[] | cdktf.IResolvable

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
  public get(index: number): BudgetsBudgetPlannedLimitOutputReference {
    return new BudgetsBudgetPlannedLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget aws_budgets_budget}
*/
export class BudgetsBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_budgets_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BudgetsBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BudgetsBudget to import
  * @param importFromId The id of the existing BudgetsBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BudgetsBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_budgets_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/budgets_budget aws_budgets_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetsBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetsBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_budgets_budget',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._accountId = config.accountId;
    this._budgetType = config.budgetType;
    this._id = config.id;
    this._limitAmount = config.limitAmount;
    this._limitUnit = config.limitUnit;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timePeriodEnd = config.timePeriodEnd;
    this._timePeriodStart = config.timePeriodStart;
    this._timeUnit = config.timeUnit;
    this._autoAdjustData.internalValue = config.autoAdjustData;
    this._costFilter.internalValue = config.costFilter;
    this._costTypes.internalValue = config.costTypes;
    this._notification.internalValue = config.notification;
    this._plannedLimit.internalValue = config.plannedLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // budget_type - computed: false, optional: false, required: true
  private _budgetType?: string; 
  public get budgetType() {
    return this.getStringAttribute('budget_type');
  }
  public set budgetType(value: string) {
    this._budgetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetTypeInput() {
    return this._budgetType;
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

  // limit_amount - computed: true, optional: true, required: false
  private _limitAmount?: string; 
  public get limitAmount() {
    return this.getStringAttribute('limit_amount');
  }
  public set limitAmount(value: string) {
    this._limitAmount = value;
  }
  public resetLimitAmount() {
    this._limitAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAmountInput() {
    return this._limitAmount;
  }

  // limit_unit - computed: true, optional: true, required: false
  private _limitUnit?: string; 
  public get limitUnit() {
    return this.getStringAttribute('limit_unit');
  }
  public set limitUnit(value: string) {
    this._limitUnit = value;
  }
  public resetLimitUnit() {
    this._limitUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUnitInput() {
    return this._limitUnit;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // time_period_end - computed: false, optional: true, required: false
  private _timePeriodEnd?: string; 
  public get timePeriodEnd() {
    return this.getStringAttribute('time_period_end');
  }
  public set timePeriodEnd(value: string) {
    this._timePeriodEnd = value;
  }
  public resetTimePeriodEnd() {
    this._timePeriodEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodEndInput() {
    return this._timePeriodEnd;
  }

  // time_period_start - computed: true, optional: true, required: false
  private _timePeriodStart?: string; 
  public get timePeriodStart() {
    return this.getStringAttribute('time_period_start');
  }
  public set timePeriodStart(value: string) {
    this._timePeriodStart = value;
  }
  public resetTimePeriodStart() {
    this._timePeriodStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodStartInput() {
    return this._timePeriodStart;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // auto_adjust_data - computed: false, optional: true, required: false
  private _autoAdjustData = new BudgetsBudgetAutoAdjustDataOutputReference(this, "auto_adjust_data");
  public get autoAdjustData() {
    return this._autoAdjustData;
  }
  public putAutoAdjustData(value: BudgetsBudgetAutoAdjustData) {
    this._autoAdjustData.internalValue = value;
  }
  public resetAutoAdjustData() {
    this._autoAdjustData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAdjustDataInput() {
    return this._autoAdjustData.internalValue;
  }

  // cost_filter - computed: false, optional: true, required: false
  private _costFilter = new BudgetsBudgetCostFilterList(this, "cost_filter", true);
  public get costFilter() {
    return this._costFilter;
  }
  public putCostFilter(value: BudgetsBudgetCostFilter[] | cdktf.IResolvable) {
    this._costFilter.internalValue = value;
  }
  public resetCostFilter() {
    this._costFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costFilterInput() {
    return this._costFilter.internalValue;
  }

  // cost_types - computed: false, optional: true, required: false
  private _costTypes = new BudgetsBudgetCostTypesOutputReference(this, "cost_types");
  public get costTypes() {
    return this._costTypes;
  }
  public putCostTypes(value: BudgetsBudgetCostTypes) {
    this._costTypes.internalValue = value;
  }
  public resetCostTypes() {
    this._costTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costTypesInput() {
    return this._costTypes.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new BudgetsBudgetNotificationList(this, "notification", true);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: BudgetsBudgetNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // planned_limit - computed: false, optional: true, required: false
  private _plannedLimit = new BudgetsBudgetPlannedLimitList(this, "planned_limit", true);
  public get plannedLimit() {
    return this._plannedLimit;
  }
  public putPlannedLimit(value: BudgetsBudgetPlannedLimit[] | cdktf.IResolvable) {
    this._plannedLimit.internalValue = value;
  }
  public resetPlannedLimit() {
    this._plannedLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedLimitInput() {
    return this._plannedLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      budget_type: cdktf.stringToTerraform(this._budgetType),
      id: cdktf.stringToTerraform(this._id),
      limit_amount: cdktf.stringToTerraform(this._limitAmount),
      limit_unit: cdktf.stringToTerraform(this._limitUnit),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      time_period_end: cdktf.stringToTerraform(this._timePeriodEnd),
      time_period_start: cdktf.stringToTerraform(this._timePeriodStart),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      auto_adjust_data: budgetsBudgetAutoAdjustDataToTerraform(this._autoAdjustData.internalValue),
      cost_filter: cdktf.listMapper(budgetsBudgetCostFilterToTerraform, true)(this._costFilter.internalValue),
      cost_types: budgetsBudgetCostTypesToTerraform(this._costTypes.internalValue),
      notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform, true)(this._notification.internalValue),
      planned_limit: cdktf.listMapper(budgetsBudgetPlannedLimitToTerraform, true)(this._plannedLimit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_type: {
        value: cdktf.stringToHclTerraform(this._budgetType),
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
      limit_amount: {
        value: cdktf.stringToHclTerraform(this._limitAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_unit: {
        value: cdktf.stringToHclTerraform(this._limitUnit),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
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
      time_period_end: {
        value: cdktf.stringToHclTerraform(this._timePeriodEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_period_start: {
        value: cdktf.stringToHclTerraform(this._timePeriodStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_adjust_data: {
        value: budgetsBudgetAutoAdjustDataToHclTerraform(this._autoAdjustData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetsBudgetAutoAdjustDataList",
      },
      cost_filter: {
        value: cdktf.listMapperHcl(budgetsBudgetCostFilterToHclTerraform, true)(this._costFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BudgetsBudgetCostFilterList",
      },
      cost_types: {
        value: budgetsBudgetCostTypesToHclTerraform(this._costTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetsBudgetCostTypesList",
      },
      notification: {
        value: cdktf.listMapperHcl(budgetsBudgetNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BudgetsBudgetNotificationList",
      },
      planned_limit: {
        value: cdktf.listMapperHcl(budgetsBudgetPlannedLimitToHclTerraform, true)(this._plannedLimit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BudgetsBudgetPlannedLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
