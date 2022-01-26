// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Budgets
*/
export interface BudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#account_id BudgetsBudget#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#budget_type BudgetsBudget#budget_type}
  */
  readonly budgetType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filters BudgetsBudget#cost_filters}
  */
  readonly costFilters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_amount BudgetsBudget#limit_amount}
  */
  readonly limitAmount: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#limit_unit BudgetsBudget#limit_unit}
  */
  readonly limitUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name_prefix BudgetsBudget#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_end BudgetsBudget#time_period_end}
  */
  readonly timePeriodEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_period_start BudgetsBudget#time_period_start}
  */
  readonly timePeriodStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#time_unit BudgetsBudget#time_unit}
  */
  readonly timeUnit: string;
  /**
  * cost_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_filter BudgetsBudget#cost_filter}
  */
  readonly costFilter?: BudgetsBudgetCostFilter[] | cdktf.IResolvable;
  /**
  * cost_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#cost_types BudgetsBudget#cost_types}
  */
  readonly costTypes?: BudgetsBudgetCostTypes;
  /**
  * notification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification BudgetsBudget#notification}
  */
  readonly notification?: BudgetsBudgetNotification[] | cdktf.IResolvable;
}
export interface BudgetsBudgetCostFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#name BudgetsBudget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#values BudgetsBudget#values}
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
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface BudgetsBudgetCostTypes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_credit BudgetsBudget#include_credit}
  */
  readonly includeCredit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_discount BudgetsBudget#include_discount}
  */
  readonly includeDiscount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}
  */
  readonly includeOtherSubscription?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_recurring BudgetsBudget#include_recurring}
  */
  readonly includeRecurring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_refund BudgetsBudget#include_refund}
  */
  readonly includeRefund?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_subscription BudgetsBudget#include_subscription}
  */
  readonly includeSubscription?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_support BudgetsBudget#include_support}
  */
  readonly includeSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_tax BudgetsBudget#include_tax}
  */
  readonly includeTax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#include_upfront BudgetsBudget#include_upfront}
  */
  readonly includeUpfront?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_amortized BudgetsBudget#use_amortized}
  */
  readonly useAmortized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#use_blended BudgetsBudget#use_blended}
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

export class BudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#notification_type BudgetsBudget#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}
  */
  readonly subscriberEmailAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}
  */
  readonly subscriberSnsTopicArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold BudgetsBudget#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget#threshold_type BudgetsBudget#threshold_type}
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
    subscriber_email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subscriberEmailAddresses),
    subscriber_sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subscriberSnsTopicArns),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget aws_budgets_budget}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget aws_budgets_budget} Resource
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
    this._costTypes.internalValue = config.costTypes;
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

  // cost_filters - computed: true, optional: true, required: false
  private _costFilters?: { [key: string]: string }; 
  public get costFilters() {
    return this.getStringMapAttribute('cost_filters');
  }
  public set costFilters(value: { [key: string]: string }) {
    this._costFilters = value;
  }
  public resetCostFilters() {
    this._costFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costFiltersInput() {
    return this._costFilters;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit_amount - computed: false, optional: false, required: true
  private _limitAmount?: string; 
  public get limitAmount() {
    return this.getStringAttribute('limit_amount');
  }
  public set limitAmount(value: string) {
    this._limitAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitAmountInput() {
    return this._limitAmount;
  }

  // limit_unit - computed: false, optional: false, required: true
  private _limitUnit?: string; 
  public get limitUnit() {
    return this.getStringAttribute('limit_unit');
  }
  public set limitUnit(value: string) {
    this._limitUnit = value;
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

  // cost_filter - computed: false, optional: true, required: false
  private _costFilter?: BudgetsBudgetCostFilter[] | cdktf.IResolvable; 
  public get costFilter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('cost_filter')));
  }
  public set costFilter(value: BudgetsBudgetCostFilter[] | cdktf.IResolvable) {
    this._costFilter = value;
  }
  public resetCostFilter() {
    this._costFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costFilterInput() {
    return this._costFilter;
  }

  // cost_types - computed: false, optional: true, required: false
  private _costTypes = new BudgetsBudgetCostTypesOutputReference(this, "cost_types", true);
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
  private _notification?: BudgetsBudgetNotification[] | cdktf.IResolvable; 
  public get notification() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('notification')));
  }
  public set notification(value: BudgetsBudgetNotification[] | cdktf.IResolvable) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      budget_type: cdktf.stringToTerraform(this._budgetType),
      cost_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._costFilters),
      limit_amount: cdktf.stringToTerraform(this._limitAmount),
      limit_unit: cdktf.stringToTerraform(this._limitUnit),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      time_period_end: cdktf.stringToTerraform(this._timePeriodEnd),
      time_period_start: cdktf.stringToTerraform(this._timePeriodStart),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      cost_filter: cdktf.listMapper(budgetsBudgetCostFilterToTerraform)(this._costFilter),
      cost_types: budgetsBudgetCostTypesToTerraform(this._costTypes.internalValue),
      notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform)(this._notification),
    };
  }
}
