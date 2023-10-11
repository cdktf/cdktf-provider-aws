// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIamPrincipalPolicySimulationConfig extends cdktf.TerraformMetaArguments {
  /**
  * One or more names of actions, like "iam:CreateUser", that should be included in the simulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#action_names DataAwsIamPrincipalPolicySimulation#action_names}
  */
  readonly actionNames: string[];
  /**
  * Additional principal-based policies to use in the simulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#additional_policies_json DataAwsIamPrincipalPolicySimulation#additional_policies_json}
  */
  readonly additionalPoliciesJson?: string[];
  /**
  * ARN of a user to use as the caller of the simulated requests. If not specified, defaults to the principal specified in policy_source_arn, if it is a user ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#caller_arn DataAwsIamPrincipalPolicySimulation#caller_arn}
  */
  readonly callerArn?: string;
  /**
  * Additional permission boundary policies to use in the simulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#permissions_boundary_policies_json DataAwsIamPrincipalPolicySimulation#permissions_boundary_policies_json}
  */
  readonly permissionsBoundaryPoliciesJson?: string[];
  /**
  * ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#policy_source_arn DataAwsIamPrincipalPolicySimulation#policy_source_arn}
  */
  readonly policySourceArn: string;
  /**
  * ARNs of specific resources to use as the targets of the specified actions during simulation. If not specified, the simulator assumes "*" which represents general access across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#resource_arns DataAwsIamPrincipalPolicySimulation#resource_arns}
  */
  readonly resourceArns?: string[];
  /**
  * Specifies the type of simulation to run. Some API operations need a particular resource handling option in order to produce a correct reesult.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#resource_handling_option DataAwsIamPrincipalPolicySimulation#resource_handling_option}
  */
  readonly resourceHandlingOption?: string;
  /**
  * An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID. Defaults to the account given as part of caller_arn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#resource_owner_account_id DataAwsIamPrincipalPolicySimulation#resource_owner_account_id}
  */
  readonly resourceOwnerAccountId?: string;
  /**
  * A resource policy to associate with all of the target resources for simulation purposes. The policy simulator does not automatically retrieve resource-level policies, so if a resource policy is crucial to your test then you must specify here the same policy document associated with your target resource(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#resource_policy_json DataAwsIamPrincipalPolicySimulation#resource_policy_json}
  */
  readonly resourcePolicyJson?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#context DataAwsIamPrincipalPolicySimulation#context}
  */
  readonly context?: DataAwsIamPrincipalPolicySimulationContext[] | cdktf.IResolvable;
}
export interface DataAwsIamPrincipalPolicySimulationResultsMatchedStatements {
}

export function dataAwsIamPrincipalPolicySimulationResultsMatchedStatementsToTerraform(struct?: DataAwsIamPrincipalPolicySimulationResultsMatchedStatements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsIamPrincipalPolicySimulationResultsMatchedStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIamPrincipalPolicySimulationResultsMatchedStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_policy_id - computed: true, optional: false, required: false
  public get sourcePolicyId() {
    return this.getStringAttribute('source_policy_id');
  }

  // source_policy_type - computed: true, optional: false, required: false
  public get sourcePolicyType() {
    return this.getStringAttribute('source_policy_type');
  }
}

export class DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference {
    return new DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsIamPrincipalPolicySimulationResults {
}

export function dataAwsIamPrincipalPolicySimulationResultsToTerraform(struct?: DataAwsIamPrincipalPolicySimulationResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsIamPrincipalPolicySimulationResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsIamPrincipalPolicySimulationResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIamPrincipalPolicySimulationResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // allowed - computed: true, optional: false, required: false
  public get allowed() {
    return this.getBooleanAttribute('allowed');
  }

  // decision - computed: true, optional: false, required: false
  public get decision() {
    return this.getStringAttribute('decision');
  }

  // decision_details - computed: true, optional: false, required: false
  private _decisionDetails = new cdktf.StringMap(this, "decision_details");
  public get decisionDetails() {
    return this._decisionDetails;
  }

  // matched_statements - computed: true, optional: false, required: false
  private _matchedStatements = new DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList(this, "matched_statements", true);
  public get matchedStatements() {
    return this._matchedStatements;
  }

  // missing_context_keys - computed: true, optional: false, required: false
  public get missingContextKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('missing_context_keys'));
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export class DataAwsIamPrincipalPolicySimulationResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsIamPrincipalPolicySimulationResultsOutputReference {
    return new DataAwsIamPrincipalPolicySimulationResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsIamPrincipalPolicySimulationContext {
  /**
  * The key name of the context entry, such as "aws:CurrentTime".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#key DataAwsIamPrincipalPolicySimulation#key}
  */
  readonly key: string;
  /**
  * The type that the simulator should use to interpret the strings given in argument "values".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#type DataAwsIamPrincipalPolicySimulation#type}
  */
  readonly type: string;
  /**
  * One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation#values DataAwsIamPrincipalPolicySimulation#values}
  */
  readonly values: string[];
}

export function dataAwsIamPrincipalPolicySimulationContextToTerraform(struct?: DataAwsIamPrincipalPolicySimulationContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataAwsIamPrincipalPolicySimulationContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsIamPrincipalPolicySimulationContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIamPrincipalPolicySimulationContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsIamPrincipalPolicySimulationContextList extends cdktf.ComplexList {
  public internalValue? : DataAwsIamPrincipalPolicySimulationContext[] | cdktf.IResolvable

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
  public get(index: number): DataAwsIamPrincipalPolicySimulationContextOutputReference {
    return new DataAwsIamPrincipalPolicySimulationContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation aws_iam_principal_policy_simulation}
*/
export class DataAwsIamPrincipalPolicySimulation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_principal_policy_simulation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/data-sources/iam_principal_policy_simulation aws_iam_principal_policy_simulation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIamPrincipalPolicySimulationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsIamPrincipalPolicySimulationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_principal_policy_simulation',
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
    this._actionNames = config.actionNames;
    this._additionalPoliciesJson = config.additionalPoliciesJson;
    this._callerArn = config.callerArn;
    this._permissionsBoundaryPoliciesJson = config.permissionsBoundaryPoliciesJson;
    this._policySourceArn = config.policySourceArn;
    this._resourceArns = config.resourceArns;
    this._resourceHandlingOption = config.resourceHandlingOption;
    this._resourceOwnerAccountId = config.resourceOwnerAccountId;
    this._resourcePolicyJson = config.resourcePolicyJson;
    this._context.internalValue = config.context;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_names - computed: false, optional: false, required: true
  private _actionNames?: string[]; 
  public get actionNames() {
    return cdktf.Fn.tolist(this.getListAttribute('action_names'));
  }
  public set actionNames(value: string[]) {
    this._actionNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNamesInput() {
    return this._actionNames;
  }

  // additional_policies_json - computed: false, optional: true, required: false
  private _additionalPoliciesJson?: string[]; 
  public get additionalPoliciesJson() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_policies_json'));
  }
  public set additionalPoliciesJson(value: string[]) {
    this._additionalPoliciesJson = value;
  }
  public resetAdditionalPoliciesJson() {
    this._additionalPoliciesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPoliciesJsonInput() {
    return this._additionalPoliciesJson;
  }

  // all_allowed - computed: true, optional: false, required: false
  public get allAllowed() {
    return this.getBooleanAttribute('all_allowed');
  }

  // caller_arn - computed: false, optional: true, required: false
  private _callerArn?: string; 
  public get callerArn() {
    return this.getStringAttribute('caller_arn');
  }
  public set callerArn(value: string) {
    this._callerArn = value;
  }
  public resetCallerArn() {
    this._callerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerArnInput() {
    return this._callerArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions_boundary_policies_json - computed: false, optional: true, required: false
  private _permissionsBoundaryPoliciesJson?: string[]; 
  public get permissionsBoundaryPoliciesJson() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions_boundary_policies_json'));
  }
  public set permissionsBoundaryPoliciesJson(value: string[]) {
    this._permissionsBoundaryPoliciesJson = value;
  }
  public resetPermissionsBoundaryPoliciesJson() {
    this._permissionsBoundaryPoliciesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryPoliciesJsonInput() {
    return this._permissionsBoundaryPoliciesJson;
  }

  // policy_source_arn - computed: false, optional: false, required: true
  private _policySourceArn?: string; 
  public get policySourceArn() {
    return this.getStringAttribute('policy_source_arn');
  }
  public set policySourceArn(value: string) {
    this._policySourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySourceArnInput() {
    return this._policySourceArn;
  }

  // resource_arns - computed: false, optional: true, required: false
  private _resourceArns?: string[]; 
  public get resourceArns() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_arns'));
  }
  public set resourceArns(value: string[]) {
    this._resourceArns = value;
  }
  public resetResourceArns() {
    this._resourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnsInput() {
    return this._resourceArns;
  }

  // resource_handling_option - computed: false, optional: true, required: false
  private _resourceHandlingOption?: string; 
  public get resourceHandlingOption() {
    return this.getStringAttribute('resource_handling_option');
  }
  public set resourceHandlingOption(value: string) {
    this._resourceHandlingOption = value;
  }
  public resetResourceHandlingOption() {
    this._resourceHandlingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHandlingOptionInput() {
    return this._resourceHandlingOption;
  }

  // resource_owner_account_id - computed: false, optional: true, required: false
  private _resourceOwnerAccountId?: string; 
  public get resourceOwnerAccountId() {
    return this.getStringAttribute('resource_owner_account_id');
  }
  public set resourceOwnerAccountId(value: string) {
    this._resourceOwnerAccountId = value;
  }
  public resetResourceOwnerAccountId() {
    this._resourceOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceOwnerAccountIdInput() {
    return this._resourceOwnerAccountId;
  }

  // resource_policy_json - computed: false, optional: true, required: false
  private _resourcePolicyJson?: string; 
  public get resourcePolicyJson() {
    return this.getStringAttribute('resource_policy_json');
  }
  public set resourcePolicyJson(value: string) {
    this._resourcePolicyJson = value;
  }
  public resetResourcePolicyJson() {
    this._resourcePolicyJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePolicyJsonInput() {
    return this._resourcePolicyJson;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataAwsIamPrincipalPolicySimulationResultsList(this, "results", true);
  public get results() {
    return this._results;
  }

  // context - computed: false, optional: true, required: false
  private _context = new DataAwsIamPrincipalPolicySimulationContextList(this, "context", true);
  public get context() {
    return this._context;
  }
  public putContext(value: DataAwsIamPrincipalPolicySimulationContext[] | cdktf.IResolvable) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actionNames),
      additional_policies_json: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalPoliciesJson),
      caller_arn: cdktf.stringToTerraform(this._callerArn),
      permissions_boundary_policies_json: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionsBoundaryPoliciesJson),
      policy_source_arn: cdktf.stringToTerraform(this._policySourceArn),
      resource_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceArns),
      resource_handling_option: cdktf.stringToTerraform(this._resourceHandlingOption),
      resource_owner_account_id: cdktf.stringToTerraform(this._resourceOwnerAccountId),
      resource_policy_json: cdktf.stringToTerraform(this._resourcePolicyJson),
      context: cdktf.listMapper(dataAwsIamPrincipalPolicySimulationContextToTerraform, true)(this._context.internalValue),
    };
  }
}
