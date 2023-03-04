// https://www.terraform.io/docs/providers/aws/r/budgets_budget_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetsBudgetActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#account_id BudgetsBudgetAction#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_type BudgetsBudgetAction#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}
  */
  readonly approvalModel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}
  */
  readonly budgetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#id BudgetsBudgetAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}
  */
  readonly notificationType: string;
  /**
  * action_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold BudgetsBudgetAction#action_threshold}
  */
  readonly actionThreshold: BudgetsBudgetActionActionThreshold;
  /**
  * definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#definition BudgetsBudgetAction#definition}
  */
  readonly definition: BudgetsBudgetActionDefinition;
  /**
  * subscriber block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscriber BudgetsBudgetAction#subscriber}
  */
  readonly subscriber: BudgetsBudgetActionSubscriber[] | cdktf.IResolvable;
}
export interface BudgetsBudgetActionActionThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}
  */
  readonly actionThresholdType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}
  */
  readonly actionThresholdValue: number;
}

export function budgetsBudgetActionActionThresholdToTerraform(struct?: BudgetsBudgetActionActionThresholdOutputReference | BudgetsBudgetActionActionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_threshold_type: cdktf.stringToTerraform(struct!.actionThresholdType),
    action_threshold_value: cdktf.numberToTerraform(struct!.actionThresholdValue),
  }
}

export class BudgetsBudgetActionActionThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetActionActionThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionThresholdType = this._actionThresholdType;
    }
    if (this._actionThresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionThresholdValue = this._actionThresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetActionActionThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionThresholdType = undefined;
      this._actionThresholdValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionThresholdType = value.actionThresholdType;
      this._actionThresholdValue = value.actionThresholdValue;
    }
  }

  // action_threshold_type - computed: false, optional: false, required: true
  private _actionThresholdType?: string; 
  public get actionThresholdType() {
    return this.getStringAttribute('action_threshold_type');
  }
  public set actionThresholdType(value: string) {
    this._actionThresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdTypeInput() {
    return this._actionThresholdType;
  }

  // action_threshold_value - computed: false, optional: false, required: true
  private _actionThresholdValue?: number; 
  public get actionThresholdValue() {
    return this.getNumberAttribute('action_threshold_value');
  }
  public set actionThresholdValue(value: number) {
    this._actionThresholdValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdValueInput() {
    return this._actionThresholdValue;
  }
}
export interface BudgetsBudgetActionDefinitionIamActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#groups BudgetsBudgetAction#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}
  */
  readonly policyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#roles BudgetsBudgetAction#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#users BudgetsBudgetAction#users}
  */
  readonly users?: string[];
}

export function budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference | BudgetsBudgetActionDefinitionIamActionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    policy_arn: cdktf.stringToTerraform(struct!.policyArn),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}

export class BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetActionDefinitionIamActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._policyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyArn = this._policyArn;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetActionDefinitionIamActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
      this._policyArn = undefined;
      this._roles = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
      this._policyArn = value.policyArn;
      this._roles = value.roles;
      this._users = value.users;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface BudgetsBudgetActionDefinitionScpActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}
  */
  readonly targetIds: string[];
}

export function budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference | BudgetsBudgetActionDefinitionScpActionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetIds),
  }
}

export class BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetActionDefinitionScpActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._targetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIds = this._targetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetActionDefinitionScpActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyId = undefined;
      this._targetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyId = value.policyId;
      this._targetIds = value.targetIds;
    }
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // target_ids - computed: false, optional: false, required: true
  private _targetIds?: string[]; 
  public get targetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('target_ids'));
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }
}
export interface BudgetsBudgetActionDefinitionSsmActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}
  */
  readonly actionSubType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#region BudgetsBudgetAction#region}
  */
  readonly region: string;
}

export function budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference | BudgetsBudgetActionDefinitionSsmActionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_sub_type: cdktf.stringToTerraform(struct!.actionSubType),
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetActionDefinitionSsmActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSubType = this._actionSubType;
    }
    if (this._instanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIds = this._instanceIds;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetActionDefinitionSsmActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionSubType = undefined;
      this._instanceIds = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionSubType = value.actionSubType;
      this._instanceIds = value.instanceIds;
      this._region = value.region;
    }
  }

  // action_sub_type - computed: false, optional: false, required: true
  private _actionSubType?: string; 
  public get actionSubType() {
    return this.getStringAttribute('action_sub_type');
  }
  public set actionSubType(value: string) {
    this._actionSubType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSubTypeInput() {
    return this._actionSubType;
  }

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface BudgetsBudgetActionDefinition {
  /**
  * iam_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#iam_action_definition BudgetsBudgetAction#iam_action_definition}
  */
  readonly iamActionDefinition?: BudgetsBudgetActionDefinitionIamActionDefinition;
  /**
  * scp_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#scp_action_definition BudgetsBudgetAction#scp_action_definition}
  */
  readonly scpActionDefinition?: BudgetsBudgetActionDefinitionScpActionDefinition;
  /**
  * ssm_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}
  */
  readonly ssmActionDefinition?: BudgetsBudgetActionDefinitionSsmActionDefinition;
}

export function budgetsBudgetActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionOutputReference | BudgetsBudgetActionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_action_definition: budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct!.iamActionDefinition),
    scp_action_definition: budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct!.scpActionDefinition),
    ssm_action_definition: budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct!.ssmActionDefinition),
  }
}

export class BudgetsBudgetActionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BudgetsBudgetActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamActionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamActionDefinition = this._iamActionDefinition?.internalValue;
    }
    if (this._scpActionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scpActionDefinition = this._scpActionDefinition?.internalValue;
    }
    if (this._ssmActionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmActionDefinition = this._ssmActionDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamActionDefinition.internalValue = undefined;
      this._scpActionDefinition.internalValue = undefined;
      this._ssmActionDefinition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamActionDefinition.internalValue = value.iamActionDefinition;
      this._scpActionDefinition.internalValue = value.scpActionDefinition;
      this._ssmActionDefinition.internalValue = value.ssmActionDefinition;
    }
  }

  // iam_action_definition - computed: false, optional: true, required: false
  private _iamActionDefinition = new BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference(this, "iam_action_definition");
  public get iamActionDefinition() {
    return this._iamActionDefinition;
  }
  public putIamActionDefinition(value: BudgetsBudgetActionDefinitionIamActionDefinition) {
    this._iamActionDefinition.internalValue = value;
  }
  public resetIamActionDefinition() {
    this._iamActionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamActionDefinitionInput() {
    return this._iamActionDefinition.internalValue;
  }

  // scp_action_definition - computed: false, optional: true, required: false
  private _scpActionDefinition = new BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference(this, "scp_action_definition");
  public get scpActionDefinition() {
    return this._scpActionDefinition;
  }
  public putScpActionDefinition(value: BudgetsBudgetActionDefinitionScpActionDefinition) {
    this._scpActionDefinition.internalValue = value;
  }
  public resetScpActionDefinition() {
    this._scpActionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpActionDefinitionInput() {
    return this._scpActionDefinition.internalValue;
  }

  // ssm_action_definition - computed: false, optional: true, required: false
  private _ssmActionDefinition = new BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference(this, "ssm_action_definition");
  public get ssmActionDefinition() {
    return this._ssmActionDefinition;
  }
  public putSsmActionDefinition(value: BudgetsBudgetActionDefinitionSsmActionDefinition) {
    this._ssmActionDefinition.internalValue = value;
  }
  public resetSsmActionDefinition() {
    this._ssmActionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmActionDefinitionInput() {
    return this._ssmActionDefinition.internalValue;
  }
}
export interface BudgetsBudgetActionSubscriber {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#address BudgetsBudgetAction#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}
  */
  readonly subscriptionType: string;
}

export function budgetsBudgetActionSubscriberToTerraform(struct?: BudgetsBudgetActionSubscriber | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    subscription_type: cdktf.stringToTerraform(struct!.subscriptionType),
  }
}

export class BudgetsBudgetActionSubscriberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetsBudgetActionSubscriber | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._subscriptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionType = this._subscriptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetsBudgetActionSubscriber | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._subscriptionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._subscriptionType = value.subscriptionType;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // subscription_type - computed: false, optional: false, required: true
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }
}

export class BudgetsBudgetActionSubscriberList extends cdktf.ComplexList {
  public internalValue? : BudgetsBudgetActionSubscriber[] | cdktf.IResolvable

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
  public get(index: number): BudgetsBudgetActionSubscriberOutputReference {
    return new BudgetsBudgetActionSubscriberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action aws_budgets_budget_action}
*/
export class BudgetsBudgetAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_budgets_budget_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action aws_budgets_budget_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetsBudgetActionConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetsBudgetActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_budgets_budget_action',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
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
    this._actionType = config.actionType;
    this._approvalModel = config.approvalModel;
    this._budgetName = config.budgetName;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._notificationType = config.notificationType;
    this._actionThreshold.internalValue = config.actionThreshold;
    this._definition.internalValue = config.definition;
    this._subscriber.internalValue = config.subscriber;
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

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // approval_model - computed: false, optional: false, required: true
  private _approvalModel?: string; 
  public get approvalModel() {
    return this.getStringAttribute('approval_model');
  }
  public set approvalModel(value: string) {
    this._approvalModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModelInput() {
    return this._approvalModel;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // budget_name - computed: false, optional: false, required: true
  private _budgetName?: string; 
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }
  public set budgetName(value: string) {
    this._budgetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNameInput() {
    return this._budgetName;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // action_threshold - computed: false, optional: false, required: true
  private _actionThreshold = new BudgetsBudgetActionActionThresholdOutputReference(this, "action_threshold");
  public get actionThreshold() {
    return this._actionThreshold;
  }
  public putActionThreshold(value: BudgetsBudgetActionActionThreshold) {
    this._actionThreshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdInput() {
    return this._actionThreshold.internalValue;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new BudgetsBudgetActionDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: BudgetsBudgetActionDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // subscriber - computed: false, optional: false, required: true
  private _subscriber = new BudgetsBudgetActionSubscriberList(this, "subscriber", true);
  public get subscriber() {
    return this._subscriber;
  }
  public putSubscriber(value: BudgetsBudgetActionSubscriber[] | cdktf.IResolvable) {
    this._subscriber.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      action_threshold: budgetsBudgetActionActionThresholdToTerraform(this._actionThreshold.internalValue),
      definition: budgetsBudgetActionDefinitionToTerraform(this._definition.internalValue),
      subscriber: cdktf.listMapper(budgetsBudgetActionSubscriberToTerraform, true)(this._subscriber.internalValue),
    };
  }
}
