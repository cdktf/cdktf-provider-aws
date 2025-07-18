/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}
  */
  readonly administrationRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}
  */
  readonly callAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}
  */
  readonly executionRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#id CloudformationStackSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#name CloudformationStackSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}
  */
  readonly permissionModel?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#region CloudformationStackSet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}
  */
  readonly templateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}
  */
  readonly templateUrl?: string;
  /**
  * auto_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}
  */
  readonly autoDeployment?: CloudformationStackSetAutoDeployment;
  /**
  * managed_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}
  */
  readonly managedExecution?: CloudformationStackSetManagedExecution;
  /**
  * operation_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}
  */
  readonly operationPreferences?: CloudformationStackSetOperationPreferences;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}
  */
  readonly timeouts?: CloudformationStackSetTimeouts;
}
export interface CloudformationStackSetAutoDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#enabled CloudformationStackSet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}
  */
  readonly retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable;
}

export function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeploymentOutputReference | CloudformationStackSetAutoDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retain_stacks_on_account_removal: cdktf.booleanToTerraform(struct!.retainStacksOnAccountRemoval),
  }
}


export function cloudformationStackSetAutoDeploymentToHclTerraform(struct?: CloudformationStackSetAutoDeploymentOutputReference | CloudformationStackSetAutoDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retain_stacks_on_account_removal: {
      value: cdktf.booleanToHclTerraform(struct!.retainStacksOnAccountRemoval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationStackSetAutoDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackSetAutoDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retainStacksOnAccountRemoval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainStacksOnAccountRemoval = this._retainStacksOnAccountRemoval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackSetAutoDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._retainStacksOnAccountRemoval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._retainStacksOnAccountRemoval = value.retainStacksOnAccountRemoval;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // retain_stacks_on_account_removal - computed: false, optional: true, required: false
  private _retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable; 
  public get retainStacksOnAccountRemoval() {
    return this.getBooleanAttribute('retain_stacks_on_account_removal');
  }
  public set retainStacksOnAccountRemoval(value: boolean | cdktf.IResolvable) {
    this._retainStacksOnAccountRemoval = value;
  }
  public resetRetainStacksOnAccountRemoval() {
    this._retainStacksOnAccountRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStacksOnAccountRemovalInput() {
    return this._retainStacksOnAccountRemoval;
  }
}
export interface CloudformationStackSetManagedExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#active CloudformationStackSet#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function cloudformationStackSetManagedExecutionToTerraform(struct?: CloudformationStackSetManagedExecutionOutputReference | CloudformationStackSetManagedExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function cloudformationStackSetManagedExecutionToHclTerraform(struct?: CloudformationStackSetManagedExecutionOutputReference | CloudformationStackSetManagedExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudformationStackSetManagedExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackSetManagedExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackSetManagedExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface CloudformationStackSetOperationPreferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}
  */
  readonly failureToleranceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}
  */
  readonly failureTolerancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}
  */
  readonly maxConcurrentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}
  */
  readonly maxConcurrentPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}
  */
  readonly regionConcurrencyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}
  */
  readonly regionOrder?: string[];
}

export function cloudformationStackSetOperationPreferencesToTerraform(struct?: CloudformationStackSetOperationPreferencesOutputReference | CloudformationStackSetOperationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_tolerance_count: cdktf.numberToTerraform(struct!.failureToleranceCount),
    failure_tolerance_percentage: cdktf.numberToTerraform(struct!.failureTolerancePercentage),
    max_concurrent_count: cdktf.numberToTerraform(struct!.maxConcurrentCount),
    max_concurrent_percentage: cdktf.numberToTerraform(struct!.maxConcurrentPercentage),
    region_concurrency_type: cdktf.stringToTerraform(struct!.regionConcurrencyType),
    region_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionOrder),
  }
}


export function cloudformationStackSetOperationPreferencesToHclTerraform(struct?: CloudformationStackSetOperationPreferencesOutputReference | CloudformationStackSetOperationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudformationStackSetOperationPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudformationStackSetOperationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: CloudformationStackSetOperationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureToleranceCount = undefined;
      this._failureTolerancePercentage = undefined;
      this._maxConcurrentCount = undefined;
      this._maxConcurrentPercentage = undefined;
      this._regionConcurrencyType = undefined;
      this._regionOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureToleranceCount = value.failureToleranceCount;
      this._failureTolerancePercentage = value.failureTolerancePercentage;
      this._maxConcurrentCount = value.maxConcurrentCount;
      this._maxConcurrentPercentage = value.maxConcurrentPercentage;
      this._regionConcurrencyType = value.regionConcurrencyType;
      this._regionOrder = value.regionOrder;
    }
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
export interface CloudformationStackSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#update CloudformationStackSet#update}
  */
  readonly update?: string;
}

export function cloudformationStackSetTimeoutsToTerraform(struct?: CloudformationStackSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudformationStackSetTimeoutsToHclTerraform(struct?: CloudformationStackSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudformationStackSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudformationStackSetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudformationStackSetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._update = value.update;
    }
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set aws_cloudformation_stack_set}
*/
export class CloudformationStackSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudformation_stack_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudformationStackSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudformationStackSet to import
  * @param importFromId The id of the existing CloudformationStackSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudformationStackSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudformation_stack_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudformation_stack_set aws_cloudformation_stack_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationStackSetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationStackSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack_set',
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
    this._administrationRoleArn = config.administrationRoleArn;
    this._callAs = config.callAs;
    this._capabilities = config.capabilities;
    this._description = config.description;
    this._executionRoleName = config.executionRoleName;
    this._id = config.id;
    this._name = config.name;
    this._parameters = config.parameters;
    this._permissionModel = config.permissionModel;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
    this._autoDeployment.internalValue = config.autoDeployment;
    this._managedExecution.internalValue = config.managedExecution;
    this._operationPreferences.internalValue = config.operationPreferences;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_role_arn - computed: false, optional: true, required: false
  private _administrationRoleArn?: string; 
  public get administrationRoleArn() {
    return this.getStringAttribute('administration_role_arn');
  }
  public set administrationRoleArn(value: string) {
    this._administrationRoleArn = value;
  }
  public resetAdministrationRoleArn() {
    this._administrationRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrationRoleArnInput() {
    return this._administrationRoleArn;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // execution_role_name - computed: true, optional: true, required: false
  private _executionRoleName?: string; 
  public get executionRoleName() {
    return this.getStringAttribute('execution_role_name');
  }
  public set executionRoleName(value: string) {
    this._executionRoleName = value;
  }
  public resetExecutionRoleName() {
    this._executionRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleNameInput() {
    return this._executionRoleName;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // permission_model - computed: false, optional: true, required: false
  private _permissionModel?: string; 
  public get permissionModel() {
    return this.getStringAttribute('permission_model');
  }
  public set permissionModel(value: string) {
    this._permissionModel = value;
  }
  public resetPermissionModel() {
    this._permissionModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModelInput() {
    return this._permissionModel;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
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

  // template_body - computed: true, optional: true, required: false
  private _templateBody?: string; 
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody;
  }

  // template_url - computed: false, optional: true, required: false
  private _templateUrl?: string; 
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }
  public set templateUrl(value: string) {
    this._templateUrl = value;
  }
  public resetTemplateUrl() {
    this._templateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUrlInput() {
    return this._templateUrl;
  }

  // auto_deployment - computed: false, optional: true, required: false
  private _autoDeployment = new CloudformationStackSetAutoDeploymentOutputReference(this, "auto_deployment");
  public get autoDeployment() {
    return this._autoDeployment;
  }
  public putAutoDeployment(value: CloudformationStackSetAutoDeployment) {
    this._autoDeployment.internalValue = value;
  }
  public resetAutoDeployment() {
    this._autoDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeploymentInput() {
    return this._autoDeployment.internalValue;
  }

  // managed_execution - computed: false, optional: true, required: false
  private _managedExecution = new CloudformationStackSetManagedExecutionOutputReference(this, "managed_execution");
  public get managedExecution() {
    return this._managedExecution;
  }
  public putManagedExecution(value: CloudformationStackSetManagedExecution) {
    this._managedExecution.internalValue = value;
  }
  public resetManagedExecution() {
    this._managedExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedExecutionInput() {
    return this._managedExecution.internalValue;
  }

  // operation_preferences - computed: false, optional: true, required: false
  private _operationPreferences = new CloudformationStackSetOperationPreferencesOutputReference(this, "operation_preferences");
  public get operationPreferences() {
    return this._operationPreferences;
  }
  public putOperationPreferences(value: CloudformationStackSetOperationPreferences) {
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
  private _timeouts = new CloudformationStackSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudformationStackSetTimeouts) {
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
      administration_role_arn: cdktf.stringToTerraform(this._administrationRoleArn),
      call_as: cdktf.stringToTerraform(this._callAs),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      description: cdktf.stringToTerraform(this._description),
      execution_role_name: cdktf.stringToTerraform(this._executionRoleName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      permission_model: cdktf.stringToTerraform(this._permissionModel),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_url: cdktf.stringToTerraform(this._templateUrl),
      auto_deployment: cloudformationStackSetAutoDeploymentToTerraform(this._autoDeployment.internalValue),
      managed_execution: cloudformationStackSetManagedExecutionToTerraform(this._managedExecution.internalValue),
      operation_preferences: cloudformationStackSetOperationPreferencesToTerraform(this._operationPreferences.internalValue),
      timeouts: cloudformationStackSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administration_role_arn: {
        value: cdktf.stringToHclTerraform(this._administrationRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      call_as: {
        value: cdktf.stringToHclTerraform(this._callAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_name: {
        value: cdktf.stringToHclTerraform(this._executionRoleName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      permission_model: {
        value: cdktf.stringToHclTerraform(this._permissionModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      template_body: {
        value: cdktf.stringToHclTerraform(this._templateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_url: {
        value: cdktf.stringToHclTerraform(this._templateUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_deployment: {
        value: cloudformationStackSetAutoDeploymentToHclTerraform(this._autoDeployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudformationStackSetAutoDeploymentList",
      },
      managed_execution: {
        value: cloudformationStackSetManagedExecutionToHclTerraform(this._managedExecution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudformationStackSetManagedExecutionList",
      },
      operation_preferences: {
        value: cloudformationStackSetOperationPreferencesToHclTerraform(this._operationPreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudformationStackSetOperationPreferencesList",
      },
      timeouts: {
        value: cloudformationStackSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudformationStackSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
