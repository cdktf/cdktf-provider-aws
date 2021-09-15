// https://www.terraform.io/docs/providers/aws/r/budgets_budget.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#account_id BudgetsBudget#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#budget_type BudgetsBudget#budget_type}
  */
  readonly budgetType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_filters BudgetsBudget#cost_filters}
  */
  readonly costFilters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#limit_amount BudgetsBudget#limit_amount}
  */
  readonly limitAmount: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#limit_unit BudgetsBudget#limit_unit}
  */
  readonly limitUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name BudgetsBudget#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name_prefix BudgetsBudget#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_period_end BudgetsBudget#time_period_end}
  */
  readonly timePeriodEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_period_start BudgetsBudget#time_period_start}
  */
  readonly timePeriodStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#time_unit BudgetsBudget#time_unit}
  */
  readonly timeUnit: string;
  /**
  * cost_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_filter BudgetsBudget#cost_filter}
  */
  readonly costFilter?: BudgetsBudgetCostFilter[];
  /**
  * cost_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#cost_types BudgetsBudget#cost_types}
  */
  readonly costTypes?: BudgetsBudgetCostTypes[];
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#notification BudgetsBudget#notification}
  */
  readonly notification?: BudgetsBudgetNotification[];
}
export interface BudgetsBudgetCostFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#name BudgetsBudget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#values BudgetsBudget#values}
  */
  readonly values: string[];
}

function budgetsBudgetCostFilterToTerraform(struct?: BudgetsBudgetCostFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface BudgetsBudgetCostTypes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_credit BudgetsBudget#include_credit}
  */
  readonly includeCredit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_discount BudgetsBudget#include_discount}
  */
  readonly includeDiscount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_other_subscription BudgetsBudget#include_other_subscription}
  */
  readonly includeOtherSubscription?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_recurring BudgetsBudget#include_recurring}
  */
  readonly includeRecurring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_refund BudgetsBudget#include_refund}
  */
  readonly includeRefund?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_subscription BudgetsBudget#include_subscription}
  */
  readonly includeSubscription?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_support BudgetsBudget#include_support}
  */
  readonly includeSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_tax BudgetsBudget#include_tax}
  */
  readonly includeTax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#include_upfront BudgetsBudget#include_upfront}
  */
  readonly includeUpfront?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#use_amortized BudgetsBudget#use_amortized}
  */
  readonly useAmortized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#use_blended BudgetsBudget#use_blended}
  */
  readonly useBlended?: boolean | cdktf.IResolvable;
}

function budgetsBudgetCostTypesToTerraform(struct?: BudgetsBudgetCostTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface BudgetsBudgetNotification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#comparison_operator BudgetsBudget#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#notification_type BudgetsBudget#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}
  */
  readonly subscriberEmailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}
  */
  readonly subscriberSnsTopicArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#threshold BudgetsBudget#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html#threshold_type BudgetsBudget#threshold_type}
  */
  readonly thresholdType: string;
}

function budgetsBudgetNotificationToTerraform(struct?: BudgetsBudgetNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
    subscriber_email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subscriberEmailAddresses),
    subscriber_sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subscriberSnsTopicArns),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget}
*/
export class BudgetsBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_budgets_budget";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetsBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetsBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_budgets_budget',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._budgetType = config.budgetType;
    this._costFilters = config.costFilters;
    this._limitAmount = config.limitAmount;
    this._limitUnit = config.limitUnit;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._timePeriodEnd = config.timePeriodEnd;
    this._timePeriodStart = config.timePeriodStart;
    this._timeUnit = config.timeUnit;
    this._costFilter = config.costFilter;
    this._costTypes = config.costTypes;
    this._notification = config.notification;
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
    return this._accountId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // budget_type - computed: false, optional: false, required: true
  private _budgetType: string;
  public get budgetType() {
    return this.getStringAttribute('budget_type');
  }
  public set budgetType(value: string) {
    this._budgetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetTypeInput() {
    return this._budgetType
  }

  // cost_filters - computed: true, optional: true, required: false
  private _costFilters?: { [key: string]: string } | cdktf.IResolvable
  public get costFilters(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('cost_filters') as any; // Getting the computed value is not yet implemented
  }
  public set costFilters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._costFilters = value;
  }
  public resetCostFilters() {
    this._costFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costFiltersInput() {
    return this._costFilters
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit_amount - computed: false, optional: false, required: true
  private _limitAmount: string;
  public get limitAmount() {
    return this.getStringAttribute('limit_amount');
  }
  public set limitAmount(value: string) {
    this._limitAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAmountInput() {
    return this._limitAmount
  }

  // limit_unit - computed: false, optional: false, required: true
  private _limitUnit: string;
  public get limitUnit() {
    return this.getStringAttribute('limit_unit');
  }
  public set limitUnit(value: string) {
    this._limitUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUnitInput() {
    return this._limitUnit
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
    return this._name
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
    return this._namePrefix
  }

  // time_period_end - computed: false, optional: true, required: false
  private _timePeriodEnd?: string;
  public get timePeriodEnd() {
    return this.getStringAttribute('time_period_end');
  }
  public set timePeriodEnd(value: string ) {
    this._timePeriodEnd = value;
  }
  public resetTimePeriodEnd() {
    this._timePeriodEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodEndInput() {
    return this._timePeriodEnd
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
    return this._timePeriodStart
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit: string;
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit
  }

  // cost_filter - computed: false, optional: true, required: false
  private _costFilter?: BudgetsBudgetCostFilter[];
  public get costFilter() {
    return this.interpolationForAttribute('cost_filter') as any;
  }
  public set costFilter(value: BudgetsBudgetCostFilter[] ) {
    this._costFilter = value;
  }
  public resetCostFilter() {
    this._costFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costFilterInput() {
    return this._costFilter
  }

  // cost_types - computed: false, optional: true, required: false
  private _costTypes?: BudgetsBudgetCostTypes[];
  public get costTypes() {
    return this.interpolationForAttribute('cost_types') as any;
  }
  public set costTypes(value: BudgetsBudgetCostTypes[] ) {
    this._costTypes = value;
  }
  public resetCostTypes() {
    this._costTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costTypesInput() {
    return this._costTypes
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: BudgetsBudgetNotification[];
  public get notification() {
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: BudgetsBudgetNotification[] ) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      budget_type: cdktf.stringToTerraform(this._budgetType),
      cost_filters: cdktf.hashMapper(cdktf.anyToTerraform)(this._costFilters),
      limit_amount: cdktf.stringToTerraform(this._limitAmount),
      limit_unit: cdktf.stringToTerraform(this._limitUnit),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      time_period_end: cdktf.stringToTerraform(this._timePeriodEnd),
      time_period_start: cdktf.stringToTerraform(this._timePeriodStart),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      cost_filter: cdktf.listMapper(budgetsBudgetCostFilterToTerraform)(this._costFilter),
      cost_types: cdktf.listMapper(budgetsBudgetCostTypesToTerraform)(this._costTypes),
      notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform)(this._notification),
    };
  }
}
