/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#call_as CloudformationStackInstances#call_as}
  */
  readonly callAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#id CloudformationStackInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#parameter_overrides CloudformationStackInstances#parameter_overrides}
  */
  readonly parameterOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#regions CloudformationStackInstances#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#retain_stacks CloudformationStackInstances#retain_stacks}
  */
  readonly retainStacks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#stack_set_name CloudformationStackInstances#stack_set_name}
  */
  readonly stackSetName: string;
  /**
  * deployment_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#deployment_targets CloudformationStackInstances#deployment_targets}
  */
  readonly deploymentTargets?: CloudformationStackInstancesDeploymentTargets;
  /**
  * operation_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#operation_preferences CloudformationStackInstances#operation_preferences}
  */
  readonly operationPreferences?: CloudformationStackInstancesOperationPreferences;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#timeouts CloudformationStackInstances#timeouts}
  */
  readonly timeouts?: CloudformationStackInstancesTimeouts;
}
export interface CloudformationStackInstancesStackInstanceSummaries {
}

export function cloudformationStackInstancesStackInstanceSummariesToTerraform(struct?: CloudformationStackInstancesStackInstanceSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudformationStackInstancesStackInstanceSummariesToHclTerraform(struct?: CloudformationStackInstancesStackInstanceSummaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudformationStackInstancesStackInstanceSummariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudformationStackInstancesStackInstanceSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackInstancesStackInstanceSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // detailed_status - computed: true, optional: false, required: false
  public get detailedStatus() {
    return this.getStringAttribute('detailed_status');
  }

  // drift_status - computed: true, optional: false, required: false
  public get driftStatus() {
    return this.getStringAttribute('drift_status');
  }

  // organizational_unit_id - computed: true, optional: false, required: false
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }
}

export class CloudformationStackInstancesStackInstanceSummariesList extends cdktf.ComplexList {

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
  public get(index: number): CloudformationStackInstancesStackInstanceSummariesOutputReference {
    return new CloudformationStackInstancesStackInstanceSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudformationStackInstancesDeploymentTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#account_filter_type CloudformationStackInstances#account_filter_type}
  */
  readonly accountFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#accounts_url CloudformationStackInstances#accounts_url}
  */
  readonly accountsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#organizational_unit_ids CloudformationStackInstances#organizational_unit_ids}
  */
  readonly organizationalUnitIds?: string[];
}

export function cloudformationStackInstancesDeploymentTargetsToTerraform(struct?: CloudformationStackInstancesDeploymentTargetsOutputReference | CloudformationStackInstancesDeploymentTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_filter_type: cdktf.stringToTerraform(struct!.accountFilterType),
    accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accounts),
    accounts_url: cdktf.stringToTerraform(struct!.accountsUrl),
    organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnitIds),
  }
}


export function cloudformationStackInstancesDeploymentTargetsToHclTerraform(struct?: CloudformationStackInstancesDeploymentTargetsOutputReference | CloudformationStackInstancesDeploymentTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.accountFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    accounts_url: {
      value: cdktf.stringToHclTerraform(struct!.accountsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationalUnitIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationStackInstancesDeploymentTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackInstancesDeploymentTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountFilterType = this._accountFilterType;
    }
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._accountsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountsUrl = this._accountsUrl;
    }
    if (this._organizationalUnitIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitIds = this._organizationalUnitIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackInstancesDeploymentTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountFilterType = undefined;
      this._accounts = undefined;
      this._accountsUrl = undefined;
      this._organizationalUnitIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountFilterType = value.accountFilterType;
      this._accounts = value.accounts;
      this._accountsUrl = value.accountsUrl;
      this._organizationalUnitIds = value.organizationalUnitIds;
    }
  }

  // account_filter_type - computed: false, optional: true, required: false
  private _accountFilterType?: string; 
  public get accountFilterType() {
    return this.getStringAttribute('account_filter_type');
  }
  public set accountFilterType(value: string) {
    this._accountFilterType = value;
  }
  public resetAccountFilterType() {
    this._accountFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountFilterTypeInput() {
    return this._accountFilterType;
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return cdktf.Fn.tolist(this.getListAttribute('accounts'));
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // accounts_url - computed: false, optional: true, required: false
  private _accountsUrl?: string; 
  public get accountsUrl() {
    return this.getStringAttribute('accounts_url');
  }
  public set accountsUrl(value: string) {
    this._accountsUrl = value;
  }
  public resetAccountsUrl() {
    this._accountsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsUrlInput() {
    return this._accountsUrl;
  }

  // organizational_unit_ids - computed: false, optional: true, required: false
  private _organizationalUnitIds?: string[]; 
  public get organizationalUnitIds() {
    return cdktf.Fn.tolist(this.getListAttribute('organizational_unit_ids'));
  }
  public set organizationalUnitIds(value: string[]) {
    this._organizationalUnitIds = value;
  }
  public resetOrganizationalUnitIds() {
    this._organizationalUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdsInput() {
    return this._organizationalUnitIds;
  }
}
export interface CloudformationStackInstancesOperationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#concurrency_mode CloudformationStackInstances#concurrency_mode}
  */
  readonly concurrencyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#failure_tolerance_count CloudformationStackInstances#failure_tolerance_count}
  */
  readonly failureToleranceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#failure_tolerance_percentage CloudformationStackInstances#failure_tolerance_percentage}
  */
  readonly failureTolerancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#max_concurrent_count CloudformationStackInstances#max_concurrent_count}
  */
  readonly maxConcurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#max_concurrent_percentage CloudformationStackInstances#max_concurrent_percentage}
  */
  readonly maxConcurrentPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#region_concurrency_type CloudformationStackInstances#region_concurrency_type}
  */
  readonly regionConcurrencyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#region_order CloudformationStackInstances#region_order}
  */
  readonly regionOrder?: string[];
}

export function cloudformationStackInstancesOperationPreferencesToTerraform(struct?: CloudformationStackInstancesOperationPreferencesOutputReference | CloudformationStackInstancesOperationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency_mode: cdktf.stringToTerraform(struct!.concurrencyMode),
    failure_tolerance_count: cdktf.numberToTerraform(struct!.failureToleranceCount),
    failure_tolerance_percentage: cdktf.numberToTerraform(struct!.failureTolerancePercentage),
    max_concurrent_count: cdktf.numberToTerraform(struct!.maxConcurrentCount),
    max_concurrent_percentage: cdktf.numberToTerraform(struct!.maxConcurrentPercentage),
    region_concurrency_type: cdktf.stringToTerraform(struct!.regionConcurrencyType),
    region_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionOrder),
  }
}


export function cloudformationStackInstancesOperationPreferencesToHclTerraform(struct?: CloudformationStackInstancesOperationPreferencesOutputReference | CloudformationStackInstancesOperationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency_mode: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_tolerance_count: {
      value: cdktf.numberToHclTerraform(struct!.failureToleranceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_tolerance_percentage: {
      value: cdktf.numberToHclTerraform(struct!.failureTolerancePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_count: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_concurrency_type: {
      value: cdktf.stringToHclTerraform(struct!.regionConcurrencyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationStackInstancesOperationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackInstancesOperationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrencyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyMode = this._concurrencyMode;
    }
    if (this._failureToleranceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureToleranceCount = this._failureToleranceCount;
    }
    if (this._failureTolerancePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureTolerancePercentage = this._failureTolerancePercentage;
    }
    if (this._maxConcurrentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCount = this._maxConcurrentCount;
    }
    if (this._maxConcurrentPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentPercentage = this._maxConcurrentPercentage;
    }
    if (this._regionConcurrencyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionConcurrencyType = this._regionConcurrencyType;
    }
    if (this._regionOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionOrder = this._regionOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackInstancesOperationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrencyMode = undefined;
      this._failureToleranceCount = undefined;
      this._failureTolerancePercentage = undefined;
      this._maxConcurrentCount = undefined;
      this._maxConcurrentPercentage = undefined;
      this._regionConcurrencyType = undefined;
      this._regionOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrencyMode = value.concurrencyMode;
      this._failureToleranceCount = value.failureToleranceCount;
      this._failureTolerancePercentage = value.failureTolerancePercentage;
      this._maxConcurrentCount = value.maxConcurrentCount;
      this._maxConcurrentPercentage = value.maxConcurrentPercentage;
      this._regionConcurrencyType = value.regionConcurrencyType;
      this._regionOrder = value.regionOrder;
    }
  }

  // concurrency_mode - computed: false, optional: true, required: false
  private _concurrencyMode?: string; 
  public get concurrencyMode() {
    return this.getStringAttribute('concurrency_mode');
  }
  public set concurrencyMode(value: string) {
    this._concurrencyMode = value;
  }
  public resetConcurrencyMode() {
    this._concurrencyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyModeInput() {
    return this._concurrencyMode;
  }

  // failure_tolerance_count - computed: false, optional: true, required: false
  private _failureToleranceCount?: number; 
  public get failureToleranceCount() {
    return this.getNumberAttribute('failure_tolerance_count');
  }
  public set failureToleranceCount(value: number) {
    this._failureToleranceCount = value;
  }
  public resetFailureToleranceCount() {
    this._failureToleranceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureToleranceCountInput() {
    return this._failureToleranceCount;
  }

  // failure_tolerance_percentage - computed: false, optional: true, required: false
  private _failureTolerancePercentage?: number; 
  public get failureTolerancePercentage() {
    return this.getNumberAttribute('failure_tolerance_percentage');
  }
  public set failureTolerancePercentage(value: number) {
    this._failureTolerancePercentage = value;
  }
  public resetFailureTolerancePercentage() {
    this._failureTolerancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureTolerancePercentageInput() {
    return this._failureTolerancePercentage;
  }

  // max_concurrent_count - computed: false, optional: true, required: false
  private _maxConcurrentCount?: number; 
  public get maxConcurrentCount() {
    return this.getNumberAttribute('max_concurrent_count');
  }
  public set maxConcurrentCount(value: number) {
    this._maxConcurrentCount = value;
  }
  public resetMaxConcurrentCount() {
    this._maxConcurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCountInput() {
    return this._maxConcurrentCount;
  }

  // max_concurrent_percentage - computed: false, optional: true, required: false
  private _maxConcurrentPercentage?: number; 
  public get maxConcurrentPercentage() {
    return this.getNumberAttribute('max_concurrent_percentage');
  }
  public set maxConcurrentPercentage(value: number) {
    this._maxConcurrentPercentage = value;
  }
  public resetMaxConcurrentPercentage() {
    this._maxConcurrentPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentPercentageInput() {
    return this._maxConcurrentPercentage;
  }

  // region_concurrency_type - computed: false, optional: true, required: false
  private _regionConcurrencyType?: string; 
  public get regionConcurrencyType() {
    return this.getStringAttribute('region_concurrency_type');
  }
  public set regionConcurrencyType(value: string) {
    this._regionConcurrencyType = value;
  }
  public resetRegionConcurrencyType() {
    this._regionConcurrencyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionConcurrencyTypeInput() {
    return this._regionConcurrencyType;
  }

  // region_order - computed: false, optional: true, required: false
  private _regionOrder?: string[]; 
  public get regionOrder() {
    return this.getListAttribute('region_order');
  }
  public set regionOrder(value: string[]) {
    this._regionOrder = value;
  }
  public resetRegionOrder() {
    this._regionOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionOrderInput() {
    return this._regionOrder;
  }
}
export interface CloudformationStackInstancesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#create CloudformationStackInstances#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#delete CloudformationStackInstances#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#update CloudformationStackInstances#update}
  */
  readonly update?: string;
}

export function cloudformationStackInstancesTimeoutsToTerraform(struct?: CloudformationStackInstancesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudformationStackInstancesTimeoutsToHclTerraform(struct?: CloudformationStackInstancesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationStackInstancesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationStackInstancesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackInstancesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances aws_cloudformation_stack_instances}
*/
export class CloudformationStackInstances extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudformation_stack_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudformationStackInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudformationStackInstances to import
  * @param importFromId The id of the existing CloudformationStackInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudformationStackInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudformation_stack_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/cloudformation_stack_instances aws_cloudformation_stack_instances} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationStackInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationStackInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack_instances',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.1',
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
    this._accounts = config.accounts;
    this._callAs = config.callAs;
    this._id = config.id;
    this._parameterOverrides = config.parameterOverrides;
    this._regions = config.regions;
    this._retainStacks = config.retainStacks;
    this._stackSetName = config.stackSetName;
    this._deploymentTargets.internalValue = config.deploymentTargets;
    this._operationPreferences.internalValue = config.operationPreferences;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return cdktf.Fn.tolist(this.getListAttribute('accounts'));
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // call_as - computed: false, optional: true, required: false
  private _callAs?: string; 
  public get callAs() {
    return this.getStringAttribute('call_as');
  }
  public set callAs(value: string) {
    this._callAs = value;
  }
  public resetCallAs() {
    this._callAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAsInput() {
    return this._callAs;
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

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides?: { [key: string]: string }; 
  public get parameterOverrides() {
    return this.getStringMapAttribute('parameter_overrides');
  }
  public set parameterOverrides(value: { [key: string]: string }) {
    this._parameterOverrides = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // retain_stacks - computed: false, optional: true, required: false
  private _retainStacks?: boolean | cdktf.IResolvable; 
  public get retainStacks() {
    return this.getBooleanAttribute('retain_stacks');
  }
  public set retainStacks(value: boolean | cdktf.IResolvable) {
    this._retainStacks = value;
  }
  public resetRetainStacks() {
    this._retainStacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStacksInput() {
    return this._retainStacks;
  }

  // stack_instance_summaries - computed: true, optional: false, required: false
  private _stackInstanceSummaries = new CloudformationStackInstancesStackInstanceSummariesList(this, "stack_instance_summaries", false);
  public get stackInstanceSummaries() {
    return this._stackInstanceSummaries;
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
  }

  // stack_set_name - computed: false, optional: false, required: true
  private _stackSetName?: string; 
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName;
  }

  // deployment_targets - computed: false, optional: true, required: false
  private _deploymentTargets = new CloudformationStackInstancesDeploymentTargetsOutputReference(this, "deployment_targets");
  public get deploymentTargets() {
    return this._deploymentTargets;
  }
  public putDeploymentTargets(value: CloudformationStackInstancesDeploymentTargets) {
    this._deploymentTargets.internalValue = value;
  }
  public resetDeploymentTargets() {
    this._deploymentTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTargetsInput() {
    return this._deploymentTargets.internalValue;
  }

  // operation_preferences - computed: false, optional: true, required: false
  private _operationPreferences = new CloudformationStackInstancesOperationPreferencesOutputReference(this, "operation_preferences");
  public get operationPreferences() {
    return this._operationPreferences;
  }
  public putOperationPreferences(value: CloudformationStackInstancesOperationPreferences) {
    this._operationPreferences.internalValue = value;
  }
  public resetOperationPreferences() {
    this._operationPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationPreferencesInput() {
    return this._operationPreferences.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudformationStackInstancesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudformationStackInstancesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accounts),
      call_as: cdktf.stringToTerraform(this._callAs),
      id: cdktf.stringToTerraform(this._id),
      parameter_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameterOverrides),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      retain_stacks: cdktf.booleanToTerraform(this._retainStacks),
      stack_set_name: cdktf.stringToTerraform(this._stackSetName),
      deployment_targets: cloudformationStackInstancesDeploymentTargetsToTerraform(this._deploymentTargets.internalValue),
      operation_preferences: cloudformationStackInstancesOperationPreferencesToTerraform(this._operationPreferences.internalValue),
      timeouts: cloudformationStackInstancesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      call_as: {
        value: cdktf.stringToHclTerraform(this._callAs),
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
      parameter_overrides: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameterOverrides),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      retain_stacks: {
        value: cdktf.booleanToHclTerraform(this._retainStacks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stack_set_name: {
        value: cdktf.stringToHclTerraform(this._stackSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_targets: {
        value: cloudformationStackInstancesDeploymentTargetsToHclTerraform(this._deploymentTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudformationStackInstancesDeploymentTargetsList",
      },
      operation_preferences: {
        value: cloudformationStackInstancesOperationPreferencesToHclTerraform(this._operationPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudformationStackInstancesOperationPreferencesList",
      },
      timeouts: {
        value: cloudformationStackInstancesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationStackInstancesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
