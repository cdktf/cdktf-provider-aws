// https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetsBudgetActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#account_id BudgetsBudgetAction#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_type BudgetsBudgetAction#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#approval_model BudgetsBudgetAction#approval_model}
  */
  readonly approvalModel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#budget_name BudgetsBudgetAction#budget_name}
  */
  readonly budgetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#execution_role_arn BudgetsBudgetAction#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#notification_type BudgetsBudgetAction#notification_type}
  */
  readonly notificationType: string;
  /**
  * action_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold BudgetsBudgetAction#action_threshold}
  */
  readonly actionThreshold: BudgetsBudgetActionActionThreshold[];
  /**
  * definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#definition BudgetsBudgetAction#definition}
  */
  readonly definition: BudgetsBudgetActionDefinition[];
  /**
  * subscriber block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#subscriber BudgetsBudgetAction#subscriber}
  */
  readonly subscriber: BudgetsBudgetActionSubscriber[];
}
export interface BudgetsBudgetActionActionThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold_type BudgetsBudgetAction#action_threshold_type}
  */
  readonly actionThresholdType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold_value BudgetsBudgetAction#action_threshold_value}
  */
  readonly actionThresholdValue: number;
}

function budgetsBudgetActionActionThresholdToTerraform(struct?: BudgetsBudgetActionActionThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_threshold_type: cdktf.stringToTerraform(struct!.actionThresholdType),
    action_threshold_value: cdktf.numberToTerraform(struct!.actionThresholdValue),
  }
}

export interface BudgetsBudgetActionDefinitionIamActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#groups BudgetsBudgetAction#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#policy_arn BudgetsBudgetAction#policy_arn}
  */
  readonly policyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#roles BudgetsBudgetAction#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#users BudgetsBudgetAction#users}
  */
  readonly users?: string[];
}

function budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionIamActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    policy_arn: cdktf.stringToTerraform(struct!.policyArn),
    roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.roles),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
  }
}

export interface BudgetsBudgetActionDefinitionScpActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#policy_id BudgetsBudgetAction#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#target_ids BudgetsBudgetAction#target_ids}
  */
  readonly targetIds: string[];
}

function budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionScpActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    target_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetIds),
  }
}

export interface BudgetsBudgetActionDefinitionSsmActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_sub_type BudgetsBudgetAction#action_sub_type}
  */
  readonly actionSubType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#instance_ids BudgetsBudgetAction#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#region BudgetsBudgetAction#region}
  */
  readonly region: string;
}

function budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionSsmActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_sub_type: cdktf.stringToTerraform(struct!.actionSubType),
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export interface BudgetsBudgetActionDefinition {
  /**
  * iam_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#iam_action_definition BudgetsBudgetAction#iam_action_definition}
  */
  readonly iamActionDefinition?: BudgetsBudgetActionDefinitionIamActionDefinition[];
  /**
  * scp_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#scp_action_definition BudgetsBudgetAction#scp_action_definition}
  */
  readonly scpActionDefinition?: BudgetsBudgetActionDefinitionScpActionDefinition[];
  /**
  * ssm_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}
  */
  readonly ssmActionDefinition?: BudgetsBudgetActionDefinitionSsmActionDefinition[];
}

function budgetsBudgetActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_action_definition: cdktf.listMapper(budgetsBudgetActionDefinitionIamActionDefinitionToTerraform)(struct!.iamActionDefinition),
    scp_action_definition: cdktf.listMapper(budgetsBudgetActionDefinitionScpActionDefinitionToTerraform)(struct!.scpActionDefinition),
    ssm_action_definition: cdktf.listMapper(budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform)(struct!.ssmActionDefinition),
  }
}

export interface BudgetsBudgetActionSubscriber {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#address BudgetsBudgetAction#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#subscription_type BudgetsBudgetAction#subscription_type}
  */
  readonly subscriptionType: string;
}

function budgetsBudgetActionSubscriberToTerraform(struct?: BudgetsBudgetActionSubscriber): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    subscription_type: cdktf.stringToTerraform(struct!.subscriptionType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action}
*/
export class BudgetsBudgetAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_budgets_budget_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetsBudgetActionConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetsBudgetActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_budgets_budget_action',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._actionType = config.actionType;
    this._approvalModel = config.approvalModel;
    this._budgetName = config.budgetName;
    this._executionRoleArn = config.executionRoleArn;
    this._notificationType = config.notificationType;
    this._actionThreshold = config.actionThreshold;
    this._definition = config.definition;
    this._subscriber = config.subscriber;
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

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType: string;
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType
  }

  // approval_model - computed: false, optional: false, required: true
  private _approvalModel: string;
  public get approvalModel() {
    return this.getStringAttribute('approval_model');
  }
  public set approvalModel(value: string) {
    this._approvalModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModelInput() {
    return this._approvalModel
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // budget_name - computed: false, optional: false, required: true
  private _budgetName: string;
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }
  public set budgetName(value: string) {
    this._budgetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNameInput() {
    return this._budgetName
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType: string;
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // action_threshold - computed: false, optional: false, required: true
  private _actionThreshold: BudgetsBudgetActionActionThreshold[];
  public get actionThreshold() {
    return this.interpolationForAttribute('action_threshold') as any;
  }
  public set actionThreshold(value: BudgetsBudgetActionActionThreshold[]) {
    this._actionThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdInput() {
    return this._actionThreshold
  }

  // definition - computed: false, optional: false, required: true
  private _definition: BudgetsBudgetActionDefinition[];
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }
  public set definition(value: BudgetsBudgetActionDefinition[]) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // subscriber - computed: false, optional: false, required: true
  private _subscriber: BudgetsBudgetActionSubscriber[];
  public get subscriber() {
    return this.interpolationForAttribute('subscriber') as any;
  }
  public set subscriber(value: BudgetsBudgetActionSubscriber[]) {
    this._subscriber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      action_type: cdktf.stringToTerraform(this._actionType),
      approval_model: cdktf.stringToTerraform(this._approvalModel),
      budget_name: cdktf.stringToTerraform(this._budgetName),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      action_threshold: cdktf.listMapper(budgetsBudgetActionActionThresholdToTerraform)(this._actionThreshold),
      definition: cdktf.listMapper(budgetsBudgetActionDefinitionToTerraform)(this._definition),
      subscriber: cdktf.listMapper(budgetsBudgetActionSubscriberToTerraform)(this._subscriber),
    };
  }
}
