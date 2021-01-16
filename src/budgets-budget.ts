// https://www.terraform.io/docs/providers/aws/r/budgets_budget.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetsBudgetConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly budgetType: string;
  readonly costFilters?: { [key: string]: string };
  readonly limitAmount: string;
  readonly limitUnit: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly timePeriodEnd?: string;
  readonly timePeriodStart: string;
  readonly timeUnit: string;
  /** cost_types block */
  readonly costTypes?: BudgetsBudgetCostTypes[];
  /** notification block */
  readonly notification?: BudgetsBudgetNotification[];
}
export interface BudgetsBudgetCostTypes {
  readonly includeCredit?: boolean;
  readonly includeDiscount?: boolean;
  readonly includeOtherSubscription?: boolean;
  readonly includeRecurring?: boolean;
  readonly includeRefund?: boolean;
  readonly includeSubscription?: boolean;
  readonly includeSupport?: boolean;
  readonly includeTax?: boolean;
  readonly includeUpfront?: boolean;
  readonly useAmortized?: boolean;
  readonly useBlended?: boolean;
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
  readonly comparisonOperator: string;
  readonly notificationType: string;
  readonly subscriberEmailAddresses?: string[];
  readonly subscriberSnsTopicArns?: string[];
  readonly threshold: number;
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


// Resource

export class BudgetsBudget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _costFilters?: { [key: string]: string }
  public get costFilters(): { [key: string]: string } {
    return this.interpolationForAttribute('cost_filters') as any; // Getting the computed value is not yet implemented
  }
  public set costFilters(value: { [key: string]: string }) {
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

  // time_period_start - computed: false, optional: false, required: true
  private _timePeriodStart: string;
  public get timePeriodStart() {
    return this.getStringAttribute('time_period_start');
  }
  public set timePeriodStart(value: string) {
    this._timePeriodStart = value;
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
      cost_types: cdktf.listMapper(budgetsBudgetCostTypesToTerraform)(this._costTypes),
      notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform)(this._notification),
    };
  }
}
