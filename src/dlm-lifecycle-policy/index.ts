/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlmLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#default_policy DlmLifecyclePolicy#default_policy}
  */
  readonly defaultPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#region DlmLifecyclePolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * policy_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}
  */
  readonly policyDetails: DlmLifecyclePolicyPolicyDetails;
}
export interface DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmk_arn: cdktf.stringToTerraform(struct!.cmkArn),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmk_arn: {
      value: cdktf.stringToHclTerraform(struct!.cmkArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkArn = this._cmkArn;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmkArn = undefined;
      this._encrypted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmkArn = value.cmkArn;
      this._encrypted = value.encrypted;
    }
  }

  // cmk_arn - computed: false, optional: true, required: false
  private _cmkArn?: string; 
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }
  public set cmkArn(value: string) {
    this._cmkArn = value;
  }
  public resetCmkArn() {
    this._cmkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkArnInput() {
    return this._cmkArn;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit: string;
}

export function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: false, required: true
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
  */
  readonly target: string;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#encryption_configuration DlmLifecyclePolicy#encryption_configuration}
  */
  readonly encryptionConfiguration: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule;
}

export function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    encryption_configuration: dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    retain_rule: dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleToTerraform(struct!.retainRule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_configuration: {
      value: dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationToHclTerraform(struct!.encryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationList",
    },
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._encryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._encryptionConfiguration.internalValue = undefined;
      this._retainRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
      this._retainRule.internalValue = value.retainRule;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration = new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // retain_rule - computed: false, optional: true, required: false
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }
}

export class DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList extends cdktf.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy[] | cdktf.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * cross_region_copy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#cross_region_copy DlmLifecyclePolicy#cross_region_copy}
  */
  readonly crossRegionCopy: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy[] | cdktf.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsActionToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionOutputReference | DlmLifecyclePolicyPolicyDetailsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    cross_region_copy: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyToTerraform, true)(struct!.crossRegionCopy),
  }
}


export function dlmLifecyclePolicyPolicyDetailsActionToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsActionOutputReference | DlmLifecyclePolicyPolicyDetailsAction): any {
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
    cross_region_copy: {
      value: cdktf.listMapperHcl(dlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyToHclTerraform, true)(struct!.crossRegionCopy),
      isBlock: true,
      type: "set",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._crossRegionCopy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionCopy = this._crossRegionCopy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._crossRegionCopy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._crossRegionCopy.internalValue = value.crossRegionCopy;
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

  // cross_region_copy - computed: false, optional: false, required: true
  private _crossRegionCopy = new DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyList(this, "cross_region_copy", true);
  public get crossRegionCopy() {
    return this._crossRegionCopy;
  }
  public putCrossRegionCopy(value: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopy[] | cdktf.IResolvable) {
    this._crossRegionCopy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyInput() {
    return this._crossRegionCopy.internalValue;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsEventSourceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}
  */
  readonly descriptionRegex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}
  */
  readonly snapshotOwner: string[];
}

export function dlmLifecyclePolicyPolicyDetailsEventSourceParametersToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference | DlmLifecyclePolicyPolicyDetailsEventSourceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_regex: cdktf.stringToTerraform(struct!.descriptionRegex),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    snapshot_owner: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.snapshotOwner),
  }
}


export function dlmLifecyclePolicyPolicyDetailsEventSourceParametersToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference | DlmLifecyclePolicyPolicyDetailsEventSourceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_regex: {
      value: cdktf.stringToHclTerraform(struct!.descriptionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_owner: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.snapshotOwner),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsEventSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionRegex = this._descriptionRegex;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._snapshotOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotOwner = this._snapshotOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsEventSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._descriptionRegex = undefined;
      this._eventType = undefined;
      this._snapshotOwner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._descriptionRegex = value.descriptionRegex;
      this._eventType = value.eventType;
      this._snapshotOwner = value.snapshotOwner;
    }
  }

  // description_regex - computed: false, optional: false, required: true
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // snapshot_owner - computed: false, optional: false, required: true
  private _snapshotOwner?: string[]; 
  public get snapshotOwner() {
    return cdktf.Fn.tolist(this.getListAttribute('snapshot_owner'));
  }
  public set snapshotOwner(value: string[]) {
    this._snapshotOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOwnerInput() {
    return this._snapshotOwner;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsEventSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}
  */
  readonly type: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
  */
  readonly parameters: DlmLifecyclePolicyPolicyDetailsEventSourceParameters;
}

export function dlmLifecyclePolicyPolicyDetailsEventSourceToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference | DlmLifecyclePolicyPolicyDetailsEventSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: dlmLifecyclePolicyPolicyDetailsEventSourceParametersToTerraform(struct!.parameters),
  }
}


export function dlmLifecyclePolicyPolicyDetailsEventSourceToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference | DlmLifecyclePolicyPolicyDetailsEventSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: dlmLifecyclePolicyPolicyDetailsEventSourceParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsEventSourceParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsEventSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsEventSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._parameters.internalValue = value.parameters;
    }
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

  // parameters - computed: false, optional: false, required: true
  private _parameters = new DlmLifecyclePolicyPolicyDetailsEventSourceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DlmLifecyclePolicyPolicyDetailsEventSourceParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsExclusions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volumes DlmLifecyclePolicy#exclude_boot_volumes}
  */
  readonly excludeBootVolumes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#exclude_tags DlmLifecyclePolicy#exclude_tags}
  */
  readonly excludeTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#exclude_volume_types DlmLifecyclePolicy#exclude_volume_types}
  */
  readonly excludeVolumeTypes?: string[];
}

export function dlmLifecyclePolicyPolicyDetailsExclusionsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsExclusionsOutputReference | DlmLifecyclePolicyPolicyDetailsExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_boot_volumes: cdktf.booleanToTerraform(struct!.excludeBootVolumes),
    exclude_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.excludeTags),
    exclude_volume_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeVolumeTypes),
  }
}


export function dlmLifecyclePolicyPolicyDetailsExclusionsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsExclusionsOutputReference | DlmLifecyclePolicyPolicyDetailsExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_boot_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.excludeBootVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.excludeTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclude_volume_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeVolumeTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeBootVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBootVolumes = this._excludeBootVolumes;
    }
    if (this._excludeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTags = this._excludeTags;
    }
    if (this._excludeVolumeTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVolumeTypes = this._excludeVolumeTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeBootVolumes = undefined;
      this._excludeTags = undefined;
      this._excludeVolumeTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeBootVolumes = value.excludeBootVolumes;
      this._excludeTags = value.excludeTags;
      this._excludeVolumeTypes = value.excludeVolumeTypes;
    }
  }

  // exclude_boot_volumes - computed: false, optional: true, required: false
  private _excludeBootVolumes?: boolean | cdktf.IResolvable; 
  public get excludeBootVolumes() {
    return this.getBooleanAttribute('exclude_boot_volumes');
  }
  public set excludeBootVolumes(value: boolean | cdktf.IResolvable) {
    this._excludeBootVolumes = value;
  }
  public resetExcludeBootVolumes() {
    this._excludeBootVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBootVolumesInput() {
    return this._excludeBootVolumes;
  }

  // exclude_tags - computed: false, optional: true, required: false
  private _excludeTags?: { [key: string]: string }; 
  public get excludeTags() {
    return this.getStringMapAttribute('exclude_tags');
  }
  public set excludeTags(value: { [key: string]: string }) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // exclude_volume_types - computed: false, optional: true, required: false
  private _excludeVolumeTypes?: string[]; 
  public get excludeVolumeTypes() {
    return this.getListAttribute('exclude_volume_types');
  }
  public set excludeVolumeTypes(value: string[]) {
    this._excludeVolumeTypes = value;
  }
  public resetExcludeVolumeTypes() {
    this._excludeVolumeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVolumeTypesInput() {
    return this._excludeVolumeTypes;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}
  */
  readonly excludeBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}
  */
  readonly noReboot?: boolean | cdktf.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsParametersToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParametersOutputReference | DlmLifecyclePolicyPolicyDetailsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_boot_volume: cdktf.booleanToTerraform(struct!.excludeBootVolume),
    no_reboot: cdktf.booleanToTerraform(struct!.noReboot),
  }
}


export function dlmLifecyclePolicyPolicyDetailsParametersToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsParametersOutputReference | DlmLifecyclePolicyPolicyDetailsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_boot_volume: {
      value: cdktf.booleanToHclTerraform(struct!.excludeBootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_reboot: {
      value: cdktf.booleanToHclTerraform(struct!.noReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBootVolume = this._excludeBootVolume;
    }
    if (this._noReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReboot = this._noReboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeBootVolume = undefined;
      this._noReboot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeBootVolume = value.excludeBootVolume;
      this._noReboot = value.noReboot;
    }
  }

  // exclude_boot_volume - computed: false, optional: true, required: false
  private _excludeBootVolume?: boolean | cdktf.IResolvable; 
  public get excludeBootVolume() {
    return this.getBooleanAttribute('exclude_boot_volume');
  }
  public set excludeBootVolume(value: boolean | cdktf.IResolvable) {
    this._excludeBootVolume = value;
  }
  public resetExcludeBootVolume() {
    this._excludeBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBootVolumeInput() {
    return this._excludeBootVolume;
  }

  // no_reboot - computed: false, optional: true, required: false
  private _noReboot?: boolean | cdktf.IResolvable; 
  public get noReboot() {
    return this.getBooleanAttribute('no_reboot');
  }
  public set noReboot(value: boolean | cdktf.IResolvable) {
    this._noReboot = value;
  }
  public resetNoReboot() {
    this._noReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRebootInput() {
    return this._noReboot;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRule {
  /**
  * retention_archive_tier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#retention_archive_tier DlmLifecyclePolicy#retention_archive_tier}
  */
  readonly retentionArchiveTier: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTier;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_archive_tier: dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierToTerraform(struct!.retentionArchiveTier),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_archive_tier: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierToHclTerraform(struct!.retentionArchiveTier),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionArchiveTier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionArchiveTier = this._retentionArchiveTier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionArchiveTier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionArchiveTier.internalValue = value.retentionArchiveTier;
    }
  }

  // retention_archive_tier - computed: false, optional: false, required: true
  private _retentionArchiveTier = new DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTierOutputReference(this, "retention_archive_tier");
  public get retentionArchiveTier() {
    return this._retentionArchiveTier;
  }
  public putRetentionArchiveTier(value: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleRetentionArchiveTier) {
    this._retentionArchiveTier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionArchiveTierInput() {
    return this._retentionArchiveTier.internalValue;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleArchiveRule {
  /**
  * archive_retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#archive_retain_rule DlmLifecyclePolicy#archive_retain_rule}
  */
  readonly archiveRetainRule: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRule;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleArchiveRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleToTerraform(struct!.archiveRetainRule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleArchiveRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleToHclTerraform(struct!.archiveRetainRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleArchiveRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveRetainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRetainRule = this._archiveRetainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveRetainRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveRetainRule.internalValue = value.archiveRetainRule;
    }
  }

  // archive_retain_rule - computed: false, optional: false, required: true
  private _archiveRetainRule = new DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRuleOutputReference(this, "archive_retain_rule");
  public get archiveRetainRule() {
    return this._archiveRetainRule;
  }
  public putArchiveRetainRule(value: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleArchiveRetainRule) {
    this._archiveRetainRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRetainRuleInput() {
    return this._archiveRetainRule.internalValue;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScripts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#execute_operation_on_script_failure DlmLifecyclePolicy#execute_operation_on_script_failure}
  */
  readonly executeOperationOnScriptFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#execution_handler DlmLifecyclePolicy#execution_handler}
  */
  readonly executionHandler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#execution_handler_service DlmLifecyclePolicy#execution_handler_service}
  */
  readonly executionHandlerService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#execution_timeout DlmLifecyclePolicy#execution_timeout}
  */
  readonly executionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#maximum_retry_count DlmLifecyclePolicy#maximum_retry_count}
  */
  readonly maximumRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#stages DlmLifecyclePolicy#stages}
  */
  readonly stages?: string[];
}

export function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_operation_on_script_failure: cdktf.booleanToTerraform(struct!.executeOperationOnScriptFailure),
    execution_handler: cdktf.stringToTerraform(struct!.executionHandler),
    execution_handler_service: cdktf.stringToTerraform(struct!.executionHandlerService),
    execution_timeout: cdktf.numberToTerraform(struct!.executionTimeout),
    maximum_retry_count: cdktf.numberToTerraform(struct!.maximumRetryCount),
    stages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stages),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_operation_on_script_failure: {
      value: cdktf.booleanToHclTerraform(struct!.executeOperationOnScriptFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execution_handler: {
      value: cdktf.stringToHclTerraform(struct!.executionHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_handler_service: {
      value: cdktf.stringToHclTerraform(struct!.executionHandlerService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_timeout: {
      value: cdktf.numberToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_retry_count: {
      value: cdktf.numberToHclTerraform(struct!.maximumRetryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScripts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeOperationOnScriptFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOperationOnScriptFailure = this._executeOperationOnScriptFailure;
    }
    if (this._executionHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionHandler = this._executionHandler;
    }
    if (this._executionHandlerService !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionHandlerService = this._executionHandlerService;
    }
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._maximumRetryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryCount = this._maximumRetryCount;
    }
    if (this._stages !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScripts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeOperationOnScriptFailure = undefined;
      this._executionHandler = undefined;
      this._executionHandlerService = undefined;
      this._executionTimeout = undefined;
      this._maximumRetryCount = undefined;
      this._stages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeOperationOnScriptFailure = value.executeOperationOnScriptFailure;
      this._executionHandler = value.executionHandler;
      this._executionHandlerService = value.executionHandlerService;
      this._executionTimeout = value.executionTimeout;
      this._maximumRetryCount = value.maximumRetryCount;
      this._stages = value.stages;
    }
  }

  // execute_operation_on_script_failure - computed: true, optional: true, required: false
  private _executeOperationOnScriptFailure?: boolean | cdktf.IResolvable; 
  public get executeOperationOnScriptFailure() {
    return this.getBooleanAttribute('execute_operation_on_script_failure');
  }
  public set executeOperationOnScriptFailure(value: boolean | cdktf.IResolvable) {
    this._executeOperationOnScriptFailure = value;
  }
  public resetExecuteOperationOnScriptFailure() {
    this._executeOperationOnScriptFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOperationOnScriptFailureInput() {
    return this._executeOperationOnScriptFailure;
  }

  // execution_handler - computed: false, optional: false, required: true
  private _executionHandler?: string; 
  public get executionHandler() {
    return this.getStringAttribute('execution_handler');
  }
  public set executionHandler(value: string) {
    this._executionHandler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionHandlerInput() {
    return this._executionHandler;
  }

  // execution_handler_service - computed: true, optional: true, required: false
  private _executionHandlerService?: string; 
  public get executionHandlerService() {
    return this.getStringAttribute('execution_handler_service');
  }
  public set executionHandlerService(value: string) {
    this._executionHandlerService = value;
  }
  public resetExecutionHandlerService() {
    this._executionHandlerService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionHandlerServiceInput() {
    return this._executionHandlerService;
  }

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: number; 
  public get executionTimeout() {
    return this.getNumberAttribute('execution_timeout');
  }
  public set executionTimeout(value: number) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // maximum_retry_count - computed: true, optional: true, required: false
  private _maximumRetryCount?: number; 
  public get maximumRetryCount() {
    return this.getNumberAttribute('maximum_retry_count');
  }
  public set maximumRetryCount(value: number) {
    this._maximumRetryCount = value;
  }
  public resetMaximumRetryCount() {
    this._maximumRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryCountInput() {
    return this._maximumRetryCount;
  }

  // stages - computed: false, optional: true, required: false
  private _stages?: string[]; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[]) {
    this._stages = value;
  }
  public resetStages() {
    this._stages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}
  */
  readonly times?: string[];
  /**
  * scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#scripts DlmLifecyclePolicy#scripts}
  */
  readonly scripts?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScripts;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
    location: cdktf.stringToTerraform(struct!.location),
    times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.times),
    scripts: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsToTerraform(struct!.scripts),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCreateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.times),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scripts: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsToHclTerraform(struct!.scripts),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    if (this._scripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
      this._location = undefined;
      this._times = undefined;
      this._scripts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
      this._location = value.location;
      this._times = value.times;
      this._scripts.internalValue = value.scripts;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: true, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // times - computed: true, optional: true, required: false
  private _times?: string[]; 
  public get times() {
    return this.getListAttribute('times');
  }
  public set times(value: string[]) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts = new DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScriptsOutputReference(this, "scripts");
  public get scripts() {
    return this._scripts;
  }
  public putScripts(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleScripts) {
    this._scripts.internalValue = value;
  }
  public resetScripts() {
    this._scripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts.internalValue;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit: string;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: false, required: true
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit: string;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: false, required: true
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
  */
  readonly encrypted: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#target_region DlmLifecyclePolicy#target_region}
  */
  readonly targetRegion?: string;
  /**
  * deprecate_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmk_arn: cdktf.stringToTerraform(struct!.cmkArn),
    copy_tags: cdktf.booleanToTerraform(struct!.copyTags),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    target: cdktf.stringToTerraform(struct!.target),
    target_region: cdktf.stringToTerraform(struct!.targetRegion),
    deprecate_rule: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform(struct!.deprecateRule),
    retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform(struct!.retainRule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmk_arn: {
      value: cdktf.stringToHclTerraform(struct!.cmkArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_tags: {
      value: cdktf.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_region: {
      value: cdktf.stringToHclTerraform(struct!.targetRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deprecate_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToHclTerraform(struct!.deprecateRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleList",
    },
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkArn = this._cmkArn;
    }
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRegion = this._targetRegion;
    }
    if (this._deprecateRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmkArn = undefined;
      this._copyTags = undefined;
      this._encrypted = undefined;
      this._target = undefined;
      this._targetRegion = undefined;
      this._deprecateRule.internalValue = undefined;
      this._retainRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmkArn = value.cmkArn;
      this._copyTags = value.copyTags;
      this._encrypted = value.encrypted;
      this._target = value.target;
      this._targetRegion = value.targetRegion;
      this._deprecateRule.internalValue = value.deprecateRule;
      this._retainRule.internalValue = value.retainRule;
    }
  }

  // cmk_arn - computed: false, optional: true, required: false
  private _cmkArn?: string; 
  public get cmkArn() {
    return this.getStringAttribute('cmk_arn');
  }
  public set cmkArn(value: string) {
    this._cmkArn = value;
  }
  public resetCmkArn() {
    this._cmkArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkArnInput() {
    return this._cmkArn;
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktf.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktf.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // encrypted - computed: false, optional: false, required: true
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_region - computed: false, optional: true, required: false
  private _targetRegion?: string; 
  public get targetRegion() {
    return this.getStringAttribute('target_region');
  }
  public set targetRegion(value: string) {
    this._targetRegion = value;
  }
  public resetTargetRegion() {
    this._targetRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionInput() {
    return this._targetRegion;
  }

  // deprecate_rule - computed: false, optional: true, required: false
  private _deprecateRule = new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }
  public putDeprecateRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule) {
    this._deprecateRule.internalValue = value;
  }
  public resetDeprecateRule() {
    this._deprecateRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecateRuleInput() {
    return this._deprecateRule.internalValue;
  }

  // retain_rule - computed: false, optional: true, required: false
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRule) {
    this._retainRule.internalValue = value;
  }
  public resetRetainRule() {
    this._retainRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }
}

export class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList extends cdktf.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | cdktf.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityZones = undefined;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityZones = value.availabilityZones;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_unit: cdktf.stringToTerraform(struct!.intervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.intervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalUnit = this._intervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
      this._intervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_unit - computed: false, optional: true, required: false
  private _intervalUnit?: string; 
  public get intervalUnit() {
    return this.getStringAttribute('interval_unit');
  }
  public set intervalUnit(value: string) {
    this._intervalUnit = value;
  }
  public resetIntervalUnit() {
    this._intervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalUnitInput() {
    return this._intervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleShareRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}
  */
  readonly targetAccounts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}
  */
  readonly unshareInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}
  */
  readonly unshareIntervalUnit?: string;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleShareRuleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleShareRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetAccounts),
    unshare_interval: cdktf.numberToTerraform(struct!.unshareInterval),
    unshare_interval_unit: cdktf.stringToTerraform(struct!.unshareIntervalUnit),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleShareRuleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference | DlmLifecyclePolicyPolicyDetailsScheduleShareRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unshare_interval: {
      value: cdktf.numberToHclTerraform(struct!.unshareInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unshare_interval_unit: {
      value: cdktf.stringToHclTerraform(struct!.unshareIntervalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsScheduleShareRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccounts = this._targetAccounts;
    }
    if (this._unshareInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.unshareInterval = this._unshareInterval;
    }
    if (this._unshareIntervalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unshareIntervalUnit = this._unshareIntervalUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsScheduleShareRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetAccounts = undefined;
      this._unshareInterval = undefined;
      this._unshareIntervalUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetAccounts = value.targetAccounts;
      this._unshareInterval = value.unshareInterval;
      this._unshareIntervalUnit = value.unshareIntervalUnit;
    }
  }

  // target_accounts - computed: false, optional: false, required: true
  private _targetAccounts?: string[]; 
  public get targetAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('target_accounts'));
  }
  public set targetAccounts(value: string[]) {
    this._targetAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountsInput() {
    return this._targetAccounts;
  }

  // unshare_interval - computed: false, optional: true, required: false
  private _unshareInterval?: number; 
  public get unshareInterval() {
    return this.getNumberAttribute('unshare_interval');
  }
  public set unshareInterval(value: number) {
    this._unshareInterval = value;
  }
  public resetUnshareInterval() {
    this._unshareInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unshareIntervalInput() {
    return this._unshareInterval;
  }

  // unshare_interval_unit - computed: false, optional: true, required: false
  private _unshareIntervalUnit?: string; 
  public get unshareIntervalUnit() {
    return this.getStringAttribute('unshare_interval_unit');
  }
  public set unshareIntervalUnit(value: string) {
    this._unshareIntervalUnit = value;
  }
  public resetUnshareIntervalUnit() {
    this._unshareIntervalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unshareIntervalUnitInput() {
    return this._unshareIntervalUnit;
  }
}
export interface DlmLifecyclePolicyPolicyDetailsSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}
  */
  readonly tagsToAdd?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}
  */
  readonly variableTags?: { [key: string]: string };
  /**
  * archive_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#archive_rule DlmLifecyclePolicy#archive_rule}
  */
  readonly archiveRule?: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRule;
  /**
  * create_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#create_rule DlmLifecyclePolicy#create_rule}
  */
  readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule;
  /**
  * cross_region_copy_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#cross_region_copy_rule DlmLifecyclePolicy#cross_region_copy_rule}
  */
  readonly crossRegionCopyRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | cdktf.IResolvable;
  /**
  * deprecate_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule;
  /**
  * fast_restore_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#fast_restore_rule DlmLifecyclePolicy#fast_restore_rule}
  */
  readonly fastRestoreRule?: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule;
  /**
  * share_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#share_rule DlmLifecyclePolicy#share_rule}
  */
  readonly shareRule?: DlmLifecyclePolicyPolicyDetailsScheduleShareRule;
}

export function dlmLifecyclePolicyPolicyDetailsScheduleToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_tags: cdktf.booleanToTerraform(struct!.copyTags),
    name: cdktf.stringToTerraform(struct!.name),
    tags_to_add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tagsToAdd),
    variable_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variableTags),
    archive_rule: dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleToTerraform(struct!.archiveRule),
    create_rule: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct!.createRule),
    cross_region_copy_rule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform, true)(struct!.crossRegionCopyRule),
    deprecate_rule: dlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleToTerraform(struct!.deprecateRule),
    fast_restore_rule: dlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleToTerraform(struct!.fastRestoreRule),
    retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct!.retainRule),
    share_rule: dlmLifecyclePolicyPolicyDetailsScheduleShareRuleToTerraform(struct!.shareRule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsScheduleToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_tags: {
      value: cdktf.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags_to_add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tagsToAdd),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    variable_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variableTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    archive_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleToHclTerraform(struct!.archiveRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleList",
    },
    create_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToHclTerraform(struct!.createRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleList",
    },
    cross_region_copy_rule: {
      value: cdktf.listMapperHcl(dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToHclTerraform, true)(struct!.crossRegionCopyRule),
      isBlock: true,
      type: "set",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList",
    },
    deprecate_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleToHclTerraform(struct!.deprecateRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleList",
    },
    fast_restore_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleToHclTerraform(struct!.fastRestoreRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleList",
    },
    retain_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToHclTerraform(struct!.retainRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleList",
    },
    share_rule: {
      value: dlmLifecyclePolicyPolicyDetailsScheduleShareRuleToHclTerraform(struct!.shareRule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleShareRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tagsToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagsToAdd = this._tagsToAdd;
    }
    if (this._variableTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableTags = this._variableTags;
    }
    if (this._archiveRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveRule = this._archiveRule?.internalValue;
    }
    if (this._createRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRule = this._createRule?.internalValue;
    }
    if (this._crossRegionCopyRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionCopyRule = this._crossRegionCopyRule?.internalValue;
    }
    if (this._deprecateRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecateRule = this._deprecateRule?.internalValue;
    }
    if (this._fastRestoreRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastRestoreRule = this._fastRestoreRule?.internalValue;
    }
    if (this._retainRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainRule = this._retainRule?.internalValue;
    }
    if (this._shareRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareRule = this._shareRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetailsSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyTags = undefined;
      this._name = undefined;
      this._tagsToAdd = undefined;
      this._variableTags = undefined;
      this._archiveRule.internalValue = undefined;
      this._createRule.internalValue = undefined;
      this._crossRegionCopyRule.internalValue = undefined;
      this._deprecateRule.internalValue = undefined;
      this._fastRestoreRule.internalValue = undefined;
      this._retainRule.internalValue = undefined;
      this._shareRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyTags = value.copyTags;
      this._name = value.name;
      this._tagsToAdd = value.tagsToAdd;
      this._variableTags = value.variableTags;
      this._archiveRule.internalValue = value.archiveRule;
      this._createRule.internalValue = value.createRule;
      this._crossRegionCopyRule.internalValue = value.crossRegionCopyRule;
      this._deprecateRule.internalValue = value.deprecateRule;
      this._fastRestoreRule.internalValue = value.fastRestoreRule;
      this._retainRule.internalValue = value.retainRule;
      this._shareRule.internalValue = value.shareRule;
    }
  }

  // copy_tags - computed: true, optional: true, required: false
  private _copyTags?: boolean | cdktf.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktf.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
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

  // tags_to_add - computed: false, optional: true, required: false
  private _tagsToAdd?: { [key: string]: string }; 
  public get tagsToAdd() {
    return this.getStringMapAttribute('tags_to_add');
  }
  public set tagsToAdd(value: { [key: string]: string }) {
    this._tagsToAdd = value;
  }
  public resetTagsToAdd() {
    this._tagsToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsToAddInput() {
    return this._tagsToAdd;
  }

  // variable_tags - computed: false, optional: true, required: false
  private _variableTags?: { [key: string]: string }; 
  public get variableTags() {
    return this.getStringMapAttribute('variable_tags');
  }
  public set variableTags(value: { [key: string]: string }) {
    this._variableTags = value;
  }
  public resetVariableTags() {
    this._variableTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTagsInput() {
    return this._variableTags;
  }

  // archive_rule - computed: false, optional: true, required: false
  private _archiveRule = new DlmLifecyclePolicyPolicyDetailsScheduleArchiveRuleOutputReference(this, "archive_rule");
  public get archiveRule() {
    return this._archiveRule;
  }
  public putArchiveRule(value: DlmLifecyclePolicyPolicyDetailsScheduleArchiveRule) {
    this._archiveRule.internalValue = value;
  }
  public resetArchiveRule() {
    this._archiveRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRuleInput() {
    return this._archiveRule.internalValue;
  }

  // create_rule - computed: false, optional: false, required: true
  private _createRule = new DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference(this, "create_rule");
  public get createRule() {
    return this._createRule;
  }
  public putCreateRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule) {
    this._createRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createRuleInput() {
    return this._createRule.internalValue;
  }

  // cross_region_copy_rule - computed: false, optional: true, required: false
  private _crossRegionCopyRule = new DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleList(this, "cross_region_copy_rule", true);
  public get crossRegionCopyRule() {
    return this._crossRegionCopyRule;
  }
  public putCrossRegionCopyRule(value: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | cdktf.IResolvable) {
    this._crossRegionCopyRule.internalValue = value;
  }
  public resetCrossRegionCopyRule() {
    this._crossRegionCopyRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyRuleInput() {
    return this._crossRegionCopyRule.internalValue;
  }

  // deprecate_rule - computed: false, optional: true, required: false
  private _deprecateRule = new DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleOutputReference(this, "deprecate_rule");
  public get deprecateRule() {
    return this._deprecateRule;
  }
  public putDeprecateRule(value: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule) {
    this._deprecateRule.internalValue = value;
  }
  public resetDeprecateRule() {
    this._deprecateRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecateRuleInput() {
    return this._deprecateRule.internalValue;
  }

  // fast_restore_rule - computed: false, optional: true, required: false
  private _fastRestoreRule = new DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleOutputReference(this, "fast_restore_rule");
  public get fastRestoreRule() {
    return this._fastRestoreRule;
  }
  public putFastRestoreRule(value: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule) {
    this._fastRestoreRule.internalValue = value;
  }
  public resetFastRestoreRule() {
    this._fastRestoreRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastRestoreRuleInput() {
    return this._fastRestoreRule.internalValue;
  }

  // retain_rule - computed: false, optional: false, required: true
  private _retainRule = new DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule) {
    this._retainRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }

  // share_rule - computed: false, optional: true, required: false
  private _shareRule = new DlmLifecyclePolicyPolicyDetailsScheduleShareRuleOutputReference(this, "share_rule");
  public get shareRule() {
    return this._shareRule;
  }
  public putShareRule(value: DlmLifecyclePolicyPolicyDetailsScheduleShareRule) {
    this._shareRule.internalValue = value;
  }
  public resetShareRule() {
    this._shareRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareRuleInput() {
    return this._shareRule.internalValue;
  }
}

export class DlmLifecyclePolicyPolicyDetailsScheduleList extends cdktf.ComplexList {
  public internalValue? : DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable

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
  public get(index: number): DlmLifecyclePolicyPolicyDetailsScheduleOutputReference {
    return new DlmLifecyclePolicyPolicyDetailsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlmLifecyclePolicyPolicyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#create_interval DlmLifecyclePolicy#create_interval}
  */
  readonly createInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#extend_deletion DlmLifecyclePolicy#extend_deletion}
  */
  readonly extendDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#policy_language DlmLifecyclePolicy#policy_language}
  */
  readonly policyLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}
  */
  readonly resourceLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#resource_type DlmLifecyclePolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#retain_interval DlmLifecyclePolicy#retain_interval}
  */
  readonly retainInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}
  */
  readonly targetTags?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#action DlmLifecyclePolicy#action}
  */
  readonly action?: DlmLifecyclePolicyPolicyDetailsAction;
  /**
  * event_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#event_source DlmLifecyclePolicy#event_source}
  */
  readonly eventSource?: DlmLifecyclePolicyPolicyDetailsEventSource;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#exclusions DlmLifecyclePolicy#exclusions}
  */
  readonly exclusions?: DlmLifecyclePolicyPolicyDetailsExclusions;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
  */
  readonly parameters?: DlmLifecyclePolicyPolicyDetailsParameters;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#schedule DlmLifecyclePolicy#schedule}
  */
  readonly schedule?: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_tags: cdktf.booleanToTerraform(struct!.copyTags),
    create_interval: cdktf.numberToTerraform(struct!.createInterval),
    extend_deletion: cdktf.booleanToTerraform(struct!.extendDeletion),
    policy_language: cdktf.stringToTerraform(struct!.policyLanguage),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    resource_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceLocations),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    retain_interval: cdktf.numberToTerraform(struct!.retainInterval),
    target_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targetTags),
    action: dlmLifecyclePolicyPolicyDetailsActionToTerraform(struct!.action),
    event_source: dlmLifecyclePolicyPolicyDetailsEventSourceToTerraform(struct!.eventSource),
    exclusions: dlmLifecyclePolicyPolicyDetailsExclusionsToTerraform(struct!.exclusions),
    parameters: dlmLifecyclePolicyPolicyDetailsParametersToTerraform(struct!.parameters),
    schedule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleToTerraform, true)(struct!.schedule),
  }
}


export function dlmLifecyclePolicyPolicyDetailsToHclTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_tags: {
      value: cdktf.booleanToHclTerraform(struct!.copyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_interval: {
      value: cdktf.numberToHclTerraform(struct!.createInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extend_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.extendDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_language: {
      value: cdktf.stringToHclTerraform(struct!.policyLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retain_interval: {
      value: cdktf.numberToHclTerraform(struct!.retainInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.targetTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    action: {
      value: dlmLifecyclePolicyPolicyDetailsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsActionList",
    },
    event_source: {
      value: dlmLifecyclePolicyPolicyDetailsEventSourceToHclTerraform(struct!.eventSource),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsEventSourceList",
    },
    exclusions: {
      value: dlmLifecyclePolicyPolicyDetailsExclusionsToHclTerraform(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsExclusionsList",
    },
    parameters: {
      value: dlmLifecyclePolicyPolicyDetailsParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsParametersList",
    },
    schedule: {
      value: cdktf.listMapperHcl(dlmLifecyclePolicyPolicyDetailsScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DlmLifecyclePolicyPolicyDetailsScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlmLifecyclePolicyPolicyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlmLifecyclePolicyPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyTags = this._copyTags;
    }
    if (this._createInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.createInterval = this._createInterval;
    }
    if (this._extendDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendDeletion = this._extendDeletion;
    }
    if (this._policyLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyLanguage = this._policyLanguage;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._resourceLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLocations = this._resourceLocations;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._retainInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainInterval = this._retainInterval;
    }
    if (this._targetTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTags = this._targetTags;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._eventSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource?.internalValue;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlmLifecyclePolicyPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._copyTags = undefined;
      this._createInterval = undefined;
      this._extendDeletion = undefined;
      this._policyLanguage = undefined;
      this._policyType = undefined;
      this._resourceLocations = undefined;
      this._resourceType = undefined;
      this._resourceTypes = undefined;
      this._retainInterval = undefined;
      this._targetTags = undefined;
      this._action.internalValue = undefined;
      this._eventSource.internalValue = undefined;
      this._exclusions.internalValue = undefined;
      this._parameters.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._copyTags = value.copyTags;
      this._createInterval = value.createInterval;
      this._extendDeletion = value.extendDeletion;
      this._policyLanguage = value.policyLanguage;
      this._policyType = value.policyType;
      this._resourceLocations = value.resourceLocations;
      this._resourceType = value.resourceType;
      this._resourceTypes = value.resourceTypes;
      this._retainInterval = value.retainInterval;
      this._targetTags = value.targetTags;
      this._action.internalValue = value.action;
      this._eventSource.internalValue = value.eventSource;
      this._exclusions.internalValue = value.exclusions;
      this._parameters.internalValue = value.parameters;
      this._schedule.internalValue = value.schedule;
    }
  }

  // copy_tags - computed: false, optional: true, required: false
  private _copyTags?: boolean | cdktf.IResolvable; 
  public get copyTags() {
    return this.getBooleanAttribute('copy_tags');
  }
  public set copyTags(value: boolean | cdktf.IResolvable) {
    this._copyTags = value;
  }
  public resetCopyTags() {
    this._copyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsInput() {
    return this._copyTags;
  }

  // create_interval - computed: false, optional: true, required: false
  private _createInterval?: number; 
  public get createInterval() {
    return this.getNumberAttribute('create_interval');
  }
  public set createInterval(value: number) {
    this._createInterval = value;
  }
  public resetCreateInterval() {
    this._createInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIntervalInput() {
    return this._createInterval;
  }

  // extend_deletion - computed: false, optional: true, required: false
  private _extendDeletion?: boolean | cdktf.IResolvable; 
  public get extendDeletion() {
    return this.getBooleanAttribute('extend_deletion');
  }
  public set extendDeletion(value: boolean | cdktf.IResolvable) {
    this._extendDeletion = value;
  }
  public resetExtendDeletion() {
    this._extendDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendDeletionInput() {
    return this._extendDeletion;
  }

  // policy_language - computed: true, optional: true, required: false
  private _policyLanguage?: string; 
  public get policyLanguage() {
    return this.getStringAttribute('policy_language');
  }
  public set policyLanguage(value: string) {
    this._policyLanguage = value;
  }
  public resetPolicyLanguage() {
    this._policyLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyLanguageInput() {
    return this._policyLanguage;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // resource_locations - computed: true, optional: true, required: false
  private _resourceLocations?: string[]; 
  public get resourceLocations() {
    return this.getListAttribute('resource_locations');
  }
  public set resourceLocations(value: string[]) {
    this._resourceLocations = value;
  }
  public resetResourceLocations() {
    this._resourceLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLocationsInput() {
    return this._resourceLocations;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // retain_interval - computed: false, optional: true, required: false
  private _retainInterval?: number; 
  public get retainInterval() {
    return this.getNumberAttribute('retain_interval');
  }
  public set retainInterval(value: number) {
    this._retainInterval = value;
  }
  public resetRetainInterval() {
    this._retainInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainIntervalInput() {
    return this._retainInterval;
  }

  // target_tags - computed: false, optional: true, required: false
  private _targetTags?: { [key: string]: string }; 
  public get targetTags() {
    return this.getStringMapAttribute('target_tags');
  }
  public set targetTags(value: { [key: string]: string }) {
    this._targetTags = value;
  }
  public resetTargetTags() {
    this._targetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags;
  }

  // action - computed: false, optional: true, required: false
  private _action = new DlmLifecyclePolicyPolicyDetailsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DlmLifecyclePolicyPolicyDetailsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // event_source - computed: false, optional: true, required: false
  private _eventSource = new DlmLifecyclePolicyPolicyDetailsEventSourceOutputReference(this, "event_source");
  public get eventSource() {
    return this._eventSource;
  }
  public putEventSource(value: DlmLifecyclePolicyPolicyDetailsEventSource) {
    this._eventSource.internalValue = value;
  }
  public resetEventSource() {
    this._eventSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource.internalValue;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new DlmLifecyclePolicyPolicyDetailsExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: DlmLifecyclePolicyPolicyDetailsExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DlmLifecyclePolicyPolicyDetailsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DlmLifecyclePolicyPolicyDetailsParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DlmLifecyclePolicyPolicyDetailsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy}
*/
export class DlmLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dlm_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlmLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlmLifecyclePolicy to import
  * @param importFromId The id of the existing DlmLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlmLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dlm_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/dlm_lifecycle_policy aws_dlm_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlmLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dlm_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.11.0',
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
    this._defaultPolicy = config.defaultPolicy;
    this._description = config.description;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._region = config.region;
    this._state = config.state;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._policyDetails.internalValue = config.policyDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_policy - computed: false, optional: true, required: false
  private _defaultPolicy?: string; 
  public get defaultPolicy() {
    return this.getStringAttribute('default_policy');
  }
  public set defaultPolicy(value: string) {
    this._defaultPolicy = value;
  }
  public resetDefaultPolicy() {
    this._defaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyInput() {
    return this._defaultPolicy;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // policy_details - computed: false, optional: false, required: true
  private _policyDetails = new DlmLifecyclePolicyPolicyDetailsOutputReference(this, "policy_details");
  public get policyDetails() {
    return this._policyDetails;
  }
  public putPolicyDetails(value: DlmLifecyclePolicyPolicyDetails) {
    this._policyDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailsInput() {
    return this._policyDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_policy: cdktf.stringToTerraform(this._defaultPolicy),
      description: cdktf.stringToTerraform(this._description),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      policy_details: dlmLifecyclePolicyPolicyDetailsToTerraform(this._policyDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_policy: {
        value: cdktf.stringToHclTerraform(this._defaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      policy_details: {
        value: dlmLifecyclePolicyPolicyDetailsToHclTerraform(this._policyDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlmLifecyclePolicyPolicyDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
