// https://www.terraform.io/docs/providers/aws/r/budgets_budget.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "budget_type": {
        "type": "string",
        "required": true
      },
      "cost_filters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "limit_amount": {
        "type": "string",
        "required": true
      },
      "limit_unit": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "time_period_end": {
        "type": "string",
        "optional": true
      },
      "time_period_start": {
        "type": "string",
        "required": true
      },
      "time_unit": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "cost_types": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "include_credit": {
              "type": "bool",
              "optional": true
            },
            "include_discount": {
              "type": "bool",
              "optional": true
            },
            "include_other_subscription": {
              "type": "bool",
              "optional": true
            },
            "include_recurring": {
              "type": "bool",
              "optional": true
            },
            "include_refund": {
              "type": "bool",
              "optional": true
            },
            "include_subscription": {
              "type": "bool",
              "optional": true
            },
            "include_support": {
              "type": "bool",
              "optional": true
            },
            "include_tax": {
              "type": "bool",
              "optional": true
            },
            "include_upfront": {
              "type": "bool",
              "optional": true
            },
            "use_amortized": {
              "type": "bool",
              "optional": true
            },
            "use_blended": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "notification": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "comparison_operator": {
              "type": "string",
              "required": true
            },
            "notification_type": {
              "type": "string",
              "required": true
            },
            "subscriber_email_addresses": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "subscriber_sns_topic_arns": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "threshold": {
              "type": "number",
              "required": true
            },
            "threshold_type": {
              "type": "string",
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BudgetsBudgetConfig extends TerraformMetaArguments {
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
export interface BudgetsBudgetNotification {
  readonly comparisonOperator: string;
  readonly notificationType: string;
  readonly subscriberEmailAddresses?: string[];
  readonly subscriberSnsTopicArns?: string[];
  readonly threshold: number;
  readonly thresholdType: string;
}

// Resource

export class BudgetsBudget extends TerraformResource {

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
    return this._accountId ?? this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }

  // budget_type - computed: false, optional: false, required: true
  private _budgetType: string;
  public get budgetType() {
    return this._budgetType;
  }
  public set budgetType(value: string) {
    this._budgetType = value;
  }

  // cost_filters - computed: true, optional: true, required: false
  private _costFilters?: { [key: string]: string }
  public get costFilters(): { [key: string]: string } | undefined {
    return this._costFilters; // Getting the computed value is not yet implemented
  }
  public set costFilters(value: { [key: string]: string } | undefined) {
    this._costFilters = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // limit_amount - computed: false, optional: false, required: true
  private _limitAmount: string;
  public get limitAmount() {
    return this._limitAmount;
  }
  public set limitAmount(value: string) {
    this._limitAmount = value;
  }

  // limit_unit - computed: false, optional: false, required: true
  private _limitUnit: string;
  public get limitUnit() {
    return this._limitUnit;
  }
  public set limitUnit(value: string) {
    this._limitUnit = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix ?? this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // time_period_end - computed: false, optional: true, required: false
  private _timePeriodEnd?: string;
  public get timePeriodEnd() {
    return this._timePeriodEnd;
  }
  public set timePeriodEnd(value: string | undefined) {
    this._timePeriodEnd = value;
  }

  // time_period_start - computed: false, optional: false, required: true
  private _timePeriodStart: string;
  public get timePeriodStart() {
    return this._timePeriodStart;
  }
  public set timePeriodStart(value: string) {
    this._timePeriodStart = value;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit: string;
  public get timeUnit() {
    return this._timeUnit;
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }

  // cost_types - computed: false, optional: true, required: false
  private _costTypes?: BudgetsBudgetCostTypes[];
  public get costTypes() {
    return this._costTypes;
  }
  public set costTypes(value: BudgetsBudgetCostTypes[] | undefined) {
    this._costTypes = value;
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: BudgetsBudgetNotification[];
  public get notification() {
    return this._notification;
  }
  public set notification(value: BudgetsBudgetNotification[] | undefined) {
    this._notification = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      budget_type: this._budgetType,
      cost_filters: this._costFilters,
      limit_amount: this._limitAmount,
      limit_unit: this._limitUnit,
      name: this._name,
      name_prefix: this._namePrefix,
      time_period_end: this._timePeriodEnd,
      time_period_start: this._timePeriodStart,
      time_unit: this._timeUnit,
      cost_types: this._costTypes,
      notification: this._notification,
    };
  }
}
