/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#id DataAwsNetworkmanagerCoreNetworkPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#version DataAwsNetworkmanagerCoreNetworkPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * attachment_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#attachment_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#attachment_policies}
  */
  readonly attachmentPolicies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable;
  /**
  * core_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#core_network_configuration DataAwsNetworkmanagerCoreNetworkPolicyDocument#core_network_configuration}
  */
  readonly coreNetworkConfiguration: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable;
  /**
  * network_function_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}
  */
  readonly networkFunctionGroups?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktf.IResolvable;
  /**
  * segment_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#segment_actions DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment_actions}
  */
  readonly segmentActions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable;
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
  */
  readonly segments: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#add_to_network_function_group DataAwsNetworkmanagerCoreNetworkPolicyDocument#add_to_network_function_group}
  */
  readonly addToNetworkFunctionGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#association_method DataAwsNetworkmanagerCoreNetworkPolicyDocument#association_method}
  */
  readonly associationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#require_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_acceptance}
  */
  readonly requireAcceptance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#tag_value_of_key DataAwsNetworkmanagerCoreNetworkPolicyDocument#tag_value_of_key}
  */
  readonly tagValueOfKey?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_to_network_function_group: cdktf.stringToTerraform(struct!.addToNetworkFunctionGroup),
    association_method: cdktf.stringToTerraform(struct!.associationMethod),
    require_acceptance: cdktf.booleanToTerraform(struct!.requireAcceptance),
    segment: cdktf.stringToTerraform(struct!.segment),
    tag_value_of_key: cdktf.stringToTerraform(struct!.tagValueOfKey),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_to_network_function_group: {
      value: cdktf.stringToHclTerraform(struct!.addToNetworkFunctionGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association_method: {
      value: cdktf.stringToHclTerraform(struct!.associationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_acceptance: {
      value: cdktf.booleanToHclTerraform(struct!.requireAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment: {
      value: cdktf.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value_of_key: {
      value: cdktf.stringToHclTerraform(struct!.tagValueOfKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToNetworkFunctionGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToNetworkFunctionGroup = this._addToNetworkFunctionGroup;
    }
    if (this._associationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationMethod = this._associationMethod;
    }
    if (this._requireAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAcceptance = this._requireAcceptance;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._tagValueOfKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueOfKey = this._tagValueOfKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addToNetworkFunctionGroup = undefined;
      this._associationMethod = undefined;
      this._requireAcceptance = undefined;
      this._segment = undefined;
      this._tagValueOfKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addToNetworkFunctionGroup = value.addToNetworkFunctionGroup;
      this._associationMethod = value.associationMethod;
      this._requireAcceptance = value.requireAcceptance;
      this._segment = value.segment;
      this._tagValueOfKey = value.tagValueOfKey;
    }
  }

  // add_to_network_function_group - computed: false, optional: true, required: false
  private _addToNetworkFunctionGroup?: string; 
  public get addToNetworkFunctionGroup() {
    return this.getStringAttribute('add_to_network_function_group');
  }
  public set addToNetworkFunctionGroup(value: string) {
    this._addToNetworkFunctionGroup = value;
  }
  public resetAddToNetworkFunctionGroup() {
    this._addToNetworkFunctionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToNetworkFunctionGroupInput() {
    return this._addToNetworkFunctionGroup;
  }

  // association_method - computed: false, optional: true, required: false
  private _associationMethod?: string; 
  public get associationMethod() {
    return this.getStringAttribute('association_method');
  }
  public set associationMethod(value: string) {
    this._associationMethod = value;
  }
  public resetAssociationMethod() {
    this._associationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationMethodInput() {
    return this._associationMethod;
  }

  // require_acceptance - computed: false, optional: true, required: false
  private _requireAcceptance?: boolean | cdktf.IResolvable; 
  public get requireAcceptance() {
    return this.getBooleanAttribute('require_acceptance');
  }
  public set requireAcceptance(value: boolean | cdktf.IResolvable) {
    this._requireAcceptance = value;
  }
  public resetRequireAcceptance() {
    this._requireAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAcceptanceInput() {
    return this._requireAcceptance;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // tag_value_of_key - computed: false, optional: true, required: false
  private _tagValueOfKey?: string; 
  public get tagValueOfKey() {
    return this.getStringAttribute('tag_value_of_key');
  }
  public set tagValueOfKey(value: string) {
    this._tagValueOfKey = value;
  }
  public resetTagValueOfKey() {
    this._tagValueOfKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueOfKeyInput() {
    return this._tagValueOfKey;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#key DataAwsNetworkmanagerCoreNetworkPolicyDocument#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#operator DataAwsNetworkmanagerCoreNetworkPolicyDocument#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
  */
  readonly value?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}
  */
  readonly conditionLogic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#conditions}
  */
  readonly conditions: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_logic: cdktf.stringToTerraform(struct!.conditionLogic),
    description: cdktf.stringToTerraform(struct!.description),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
    action: dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct!.action),
    conditions: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_logic: {
      value: cdktf.stringToHclTerraform(struct!.conditionLogic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_number: {
      value: cdktf.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionList",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLogic !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLogic = this._conditionLogic;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionLogic = undefined;
      this._description = undefined;
      this._ruleNumber = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionLogic = value.conditionLogic;
      this._description = value.description;
      this._ruleNumber = value.ruleNumber;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
    }
  }

  // condition_logic - computed: false, optional: true, required: false
  private _conditionLogic?: string; 
  public get conditionLogic() {
    return this.getStringAttribute('condition_logic');
  }
  public set conditionLogic(value: string) {
    this._conditionLogic = value;
  }
  public resetConditionLogic() {
    this._conditionLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLogicInput() {
    return this._conditionLogic;
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

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#asn DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn}
  */
  readonly asn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#location DataAwsNetworkmanagerCoreNetworkPolicyDocument#location}
  */
  readonly location: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.stringToTerraform(struct!.asn),
    inside_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insideCidrBlocks),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insideCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._insideCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideCidrBlocks = this._insideCidrBlocks;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._insideCidrBlocks = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._insideCidrBlocks = value.insideCidrBlocks;
      this._location = value.location;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // inside_cidr_blocks - computed: false, optional: true, required: false
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return this.getListAttribute('inside_cidr_blocks');
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  public resetInsideCidrBlocks() {
    this._insideCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#asn_ranges DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn_ranges}
  */
  readonly asnRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#vpn_ecmp_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#vpn_ecmp_support}
  */
  readonly vpnEcmpSupport?: boolean | cdktf.IResolvable;
  /**
  * edge_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asnRanges),
    inside_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insideCidrBlocks),
    vpn_ecmp_support: cdktf.booleanToTerraform(struct!.vpnEcmpSupport),
    edge_locations: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToTerraform, true)(struct!.edgeLocations),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.asnRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inside_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insideCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpn_ecmp_support: {
      value: cdktf.booleanToHclTerraform(struct!.vpnEcmpSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_locations: {
      value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToHclTerraform, true)(struct!.edgeLocations),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnRanges = this._asnRanges;
    }
    if (this._insideCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideCidrBlocks = this._insideCidrBlocks;
    }
    if (this._vpnEcmpSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnEcmpSupport = this._vpnEcmpSupport;
    }
    if (this._edgeLocations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnRanges = undefined;
      this._insideCidrBlocks = undefined;
      this._vpnEcmpSupport = undefined;
      this._edgeLocations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnRanges = value.asnRanges;
      this._insideCidrBlocks = value.insideCidrBlocks;
      this._vpnEcmpSupport = value.vpnEcmpSupport;
      this._edgeLocations.internalValue = value.edgeLocations;
    }
  }

  // asn_ranges - computed: false, optional: false, required: true
  private _asnRanges?: string[]; 
  public get asnRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('asn_ranges'));
  }
  public set asnRanges(value: string[]) {
    this._asnRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnRangesInput() {
    return this._asnRanges;
  }

  // inside_cidr_blocks - computed: false, optional: true, required: false
  private _insideCidrBlocks?: string[]; 
  public get insideCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('inside_cidr_blocks'));
  }
  public set insideCidrBlocks(value: string[]) {
    this._insideCidrBlocks = value;
  }
  public resetInsideCidrBlocks() {
    this._insideCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideCidrBlocksInput() {
    return this._insideCidrBlocks;
  }

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: boolean | cdktf.IResolvable; 
  public get vpnEcmpSupport() {
    return this.getBooleanAttribute('vpn_ecmp_support');
  }
  public set vpnEcmpSupport(value: boolean | cdktf.IResolvable) {
    this._vpnEcmpSupport = value;
  }
  public resetVpnEcmpSupport() {
    this._vpnEcmpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEcmpSupportInput() {
    return this._vpnEcmpSupport;
  }

  // edge_locations - computed: false, optional: false, required: true
  private _edgeLocations = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList(this, "edge_locations", false);
  public get edgeLocations() {
    return this._edgeLocations;
  }
  public putEdgeLocations(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktf.IResolvable) {
    this._edgeLocations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
  */
  readonly requireAttachmentAcceptance: boolean | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    require_attachment_acceptance: cdktf.booleanToTerraform(struct!.requireAttachmentAcceptance),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_attachment_acceptance: {
      value: cdktf.booleanToHclTerraform(struct!.requireAttachmentAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requireAttachmentAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAttachmentAcceptance = this._requireAttachmentAcceptance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._requireAttachmentAcceptance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._requireAttachmentAcceptance = value.requireAttachmentAcceptance;
    }
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

  // require_attachment_acceptance - computed: false, optional: false, required: true
  private _requireAttachmentAcceptance?: boolean | cdktf.IResolvable; 
  public get requireAttachmentAcceptance() {
    return this.getBooleanAttribute('require_attachment_acceptance');
  }
  public set requireAttachmentAcceptance(value: boolean | cdktf.IResolvable) {
    this._requireAttachmentAcceptance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAttachmentAcceptanceInput() {
    return this._requireAttachmentAcceptance;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#edge_sets DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_sets}
  */
  readonly edgeSets?: string[][] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge}
  */
  readonly useEdge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge_location DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge_location}
  */
  readonly useEdgeLocation?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_sets: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.edgeSets),
    use_edge: cdktf.stringToTerraform(struct!.useEdge),
    use_edge_location: cdktf.stringToTerraform(struct!.useEdgeLocation),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_sets: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.edgeSets),
      isBlock: false,
      type: "set",
      storageClassType: "stringListList",
    },
    use_edge: {
      value: cdktf.stringToHclTerraform(struct!.useEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_edge_location: {
      value: cdktf.stringToHclTerraform(struct!.useEdgeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeSets = this._edgeSets;
    }
    if (this._useEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdge = this._useEdge;
    }
    if (this._useEdgeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEdgeLocation = this._useEdgeLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeSets = undefined;
      this._useEdge = undefined;
      this._useEdgeLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeSets = value.edgeSets;
      this._useEdge = value.useEdge;
      this._useEdgeLocation = value.useEdgeLocation;
    }
  }

  // edge_sets - computed: false, optional: true, required: false
  private _edgeSets?: string[][] | cdktf.IResolvable; 
  public get edgeSets() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('edge_sets')));
  }
  public set edgeSets(value: string[][] | cdktf.IResolvable) {
    this._edgeSets = value;
  }
  public resetEdgeSets() {
    this._edgeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeSetsInput() {
    return this._edgeSets;
  }

  // use_edge - computed: false, optional: true, required: false
  private _useEdge?: string; 
  public get useEdge() {
    return this.getStringAttribute('use_edge');
  }
  public set useEdge(value: string) {
    this._useEdge = value;
  }
  public resetUseEdge() {
    this._useEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdgeInput() {
    return this._useEdge;
  }

  // use_edge_location - computed: false, optional: true, required: false
  private _useEdgeLocation?: string; 
  public get useEdgeLocation() {
    return this.getStringAttribute('use_edge_location');
  }
  public set useEdgeLocation(value: string) {
    this._useEdgeLocation = value;
  }
  public resetUseEdgeLocation() {
    this._useEdgeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEdgeLocationInput() {
    return this._useEdgeLocation;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}
  */
  readonly networkFunctionGroups?: string[];
  /**
  * with_edge_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#with_edge_override DataAwsNetworkmanagerCoreNetworkPolicyDocument#with_edge_override}
  */
  readonly withEdgeOverride?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_function_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkFunctionGroups),
    with_edge_override: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToTerraform, true)(struct!.withEdgeOverride),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_function_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkFunctionGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    with_edge_override: {
      value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToHclTerraform, true)(struct!.withEdgeOverride),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFunctionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionGroups = this._networkFunctionGroups;
    }
    if (this._withEdgeOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withEdgeOverride = this._withEdgeOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkFunctionGroups = undefined;
      this._withEdgeOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkFunctionGroups = value.networkFunctionGroups;
      this._withEdgeOverride.internalValue = value.withEdgeOverride;
    }
  }

  // network_function_groups - computed: false, optional: true, required: false
  private _networkFunctionGroups?: string[]; 
  public get networkFunctionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('network_function_groups'));
  }
  public set networkFunctionGroups(value: string[]) {
    this._networkFunctionGroups = value;
  }
  public resetNetworkFunctionGroups() {
    this._networkFunctionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupsInput() {
    return this._networkFunctionGroups;
  }

  // with_edge_override - computed: false, optional: true, required: false
  private _withEdgeOverride = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList(this, "with_edge_override", false);
  public get withEdgeOverride() {
    return this._withEdgeOverride;
  }
  public putWithEdgeOverride(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktf.IResolvable) {
    this._withEdgeOverride.internalValue = value;
  }
  public resetWithEdgeOverride() {
    this._withEdgeOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withEdgeOverrideInput() {
    return this._withEdgeOverride.internalValue;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
  */
  readonly segments?: string[];
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.segments),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.segments),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segments = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segments = value.segments;
    }
  }

  // segments - computed: false, optional: true, required: false
  private _segments?: string[]; 
  public get segments() {
    return cdktf.Fn.tolist(this.getListAttribute('segments'));
  }
  public set segments(value: string[]) {
    this._segments = value;
  }
  public resetSegments() {
    this._segments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#destination_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#destination_cidr_blocks}
  */
  readonly destinationCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#destinations DataAwsNetworkmanagerCoreNetworkPolicyDocument#destinations}
  */
  readonly destinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#mode DataAwsNetworkmanagerCoreNetworkPolicyDocument#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#share_with DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with}
  */
  readonly shareWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#share_with_except DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with_except}
  */
  readonly shareWithExcept?: string[];
  /**
  * via block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#via DataAwsNetworkmanagerCoreNetworkPolicyDocument#via}
  */
  readonly via?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia;
  /**
  * when_sent_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#when_sent_to DataAwsNetworkmanagerCoreNetworkPolicyDocument#when_sent_to}
  */
  readonly whenSentTo?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    destination_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationCidrBlocks),
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    mode: cdktf.stringToTerraform(struct!.mode),
    segment: cdktf.stringToTerraform(struct!.segment),
    share_with: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shareWith),
    share_with_except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shareWithExcept),
    via: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToTerraform(struct!.via),
    when_sent_to: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToTerraform(struct!.whenSentTo),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationCidrBlocks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: cdktf.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_with: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shareWith),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    share_with_except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shareWithExcept),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    via: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToHclTerraform(struct!.via),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaList",
    },
    when_sent_to: {
      value: dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToHclTerraform(struct!.whenSentTo),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrBlocks = this._destinationCidrBlocks;
    }
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._shareWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWith = this._shareWith;
    }
    if (this._shareWithExcept !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWithExcept = this._shareWithExcept;
    }
    if (this._via?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via?.internalValue;
    }
    if (this._whenSentTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenSentTo = this._whenSentTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._destinationCidrBlocks = undefined;
      this._destinations = undefined;
      this._mode = undefined;
      this._segment = undefined;
      this._shareWith = undefined;
      this._shareWithExcept = undefined;
      this._via.internalValue = undefined;
      this._whenSentTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._destinationCidrBlocks = value.destinationCidrBlocks;
      this._destinations = value.destinations;
      this._mode = value.mode;
      this._segment = value.segment;
      this._shareWith = value.shareWith;
      this._shareWithExcept = value.shareWithExcept;
      this._via.internalValue = value.via;
      this._whenSentTo.internalValue = value.whenSentTo;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // destination_cidr_blocks - computed: false, optional: true, required: false
  private _destinationCidrBlocks?: string[]; 
  public get destinationCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_cidr_blocks'));
  }
  public set destinationCidrBlocks(value: string[]) {
    this._destinationCidrBlocks = value;
  }
  public resetDestinationCidrBlocks() {
    this._destinationCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlocksInput() {
    return this._destinationCidrBlocks;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return cdktf.Fn.tolist(this.getListAttribute('destinations'));
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // share_with - computed: false, optional: true, required: false
  private _shareWith?: string[]; 
  public get shareWith() {
    return cdktf.Fn.tolist(this.getListAttribute('share_with'));
  }
  public set shareWith(value: string[]) {
    this._shareWith = value;
  }
  public resetShareWith() {
    this._shareWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithInput() {
    return this._shareWith;
  }

  // share_with_except - computed: false, optional: true, required: false
  private _shareWithExcept?: string[]; 
  public get shareWithExcept() {
    return cdktf.Fn.tolist(this.getListAttribute('share_with_except'));
  }
  public set shareWithExcept(value: string[]) {
    this._shareWithExcept = value;
  }
  public resetShareWithExcept() {
    this._shareWithExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithExceptInput() {
    return this._shareWithExcept;
  }

  // via - computed: false, optional: true, required: false
  private _via = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference(this, "via");
  public get via() {
    return this._via;
  }
  public putVia(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia) {
    this._via.internalValue = value;
  }
  public resetVia() {
    this._via.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via.internalValue;
  }

  // when_sent_to - computed: false, optional: true, required: false
  private _whenSentTo = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference(this, "when_sent_to");
  public get whenSentTo() {
    return this._whenSentTo;
  }
  public putWhenSentTo(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo) {
    this._whenSentTo.internalValue = value;
  }
  public resetWhenSentTo() {
    this._whenSentTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenSentToInput() {
    return this._whenSentTo.internalValue;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#allow_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#allow_filter}
  */
  readonly allowFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#deny_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#deny_filter}
  */
  readonly denyFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#isolate_attachments DataAwsNetworkmanagerCoreNetworkPolicyDocument#isolate_attachments}
  */
  readonly isolateAttachments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
  */
  readonly requireAttachmentAcceptance?: boolean | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowFilter),
    deny_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyFilter),
    description: cdktf.stringToTerraform(struct!.description),
    edge_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.edgeLocations),
    isolate_attachments: cdktf.booleanToTerraform(struct!.isolateAttachments),
    name: cdktf.stringToTerraform(struct!.name),
    require_attachment_acceptance: cdktf.booleanToTerraform(struct!.requireAttachmentAcceptance),
  }
}


export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deny_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denyFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.edgeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    isolate_attachments: {
      value: cdktf.booleanToHclTerraform(struct!.isolateAttachments),
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
    require_attachment_acceptance: {
      value: cdktf.booleanToHclTerraform(struct!.requireAttachmentAcceptance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFilter = this._allowFilter;
    }
    if (this._denyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyFilter = this._denyFilter;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._edgeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeLocations = this._edgeLocations;
    }
    if (this._isolateAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolateAttachments = this._isolateAttachments;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requireAttachmentAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAttachmentAcceptance = this._requireAttachmentAcceptance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFilter = undefined;
      this._denyFilter = undefined;
      this._description = undefined;
      this._edgeLocations = undefined;
      this._isolateAttachments = undefined;
      this._name = undefined;
      this._requireAttachmentAcceptance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFilter = value.allowFilter;
      this._denyFilter = value.denyFilter;
      this._description = value.description;
      this._edgeLocations = value.edgeLocations;
      this._isolateAttachments = value.isolateAttachments;
      this._name = value.name;
      this._requireAttachmentAcceptance = value.requireAttachmentAcceptance;
    }
  }

  // allow_filter - computed: false, optional: true, required: false
  private _allowFilter?: string[]; 
  public get allowFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_filter'));
  }
  public set allowFilter(value: string[]) {
    this._allowFilter = value;
  }
  public resetAllowFilter() {
    this._allowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFilterInput() {
    return this._allowFilter;
  }

  // deny_filter - computed: false, optional: true, required: false
  private _denyFilter?: string[]; 
  public get denyFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('deny_filter'));
  }
  public set denyFilter(value: string[]) {
    this._denyFilter = value;
  }
  public resetDenyFilter() {
    this._denyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyFilterInput() {
    return this._denyFilter;
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

  // edge_locations - computed: false, optional: true, required: false
  private _edgeLocations?: string[]; 
  public get edgeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('edge_locations'));
  }
  public set edgeLocations(value: string[]) {
    this._edgeLocations = value;
  }
  public resetEdgeLocations() {
    this._edgeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeLocationsInput() {
    return this._edgeLocations;
  }

  // isolate_attachments - computed: false, optional: true, required: false
  private _isolateAttachments?: boolean | cdktf.IResolvable; 
  public get isolateAttachments() {
    return this.getBooleanAttribute('isolate_attachments');
  }
  public set isolateAttachments(value: boolean | cdktf.IResolvable) {
    this._isolateAttachments = value;
  }
  public resetIsolateAttachments() {
    this._isolateAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateAttachmentsInput() {
    return this._isolateAttachments;
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

  // require_attachment_acceptance - computed: false, optional: true, required: false
  private _requireAttachmentAcceptance?: boolean | cdktf.IResolvable; 
  public get requireAttachmentAcceptance() {
    return this.getBooleanAttribute('require_attachment_acceptance');
  }
  public set requireAttachmentAcceptance(value: boolean | cdktf.IResolvable) {
    this._requireAttachmentAcceptance = value;
  }
  public resetRequireAttachmentAcceptance() {
    this._requireAttachmentAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAttachmentAcceptanceInput() {
    return this._requireAttachmentAcceptance;
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList extends cdktf.ComplexList {
  public internalValue? : DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable

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
  public get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference {
    return new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document}
*/
export class DataAwsNetworkmanagerCoreNetworkPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_core_network_policy_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsNetworkmanagerCoreNetworkPolicyDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import
  * @param importFromId The id of the existing DataAwsNetworkmanagerCoreNetworkPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_networkmanager_core_network_policy_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_core_network_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.85.0',
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
    this._id = config.id;
    this._version = config.version;
    this._attachmentPolicies.internalValue = config.attachmentPolicies;
    this._coreNetworkConfiguration.internalValue = config.coreNetworkConfiguration;
    this._networkFunctionGroups.internalValue = config.networkFunctionGroups;
    this._segmentActions.internalValue = config.segmentActions;
    this._segments.internalValue = config.segments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // attachment_policies - computed: false, optional: true, required: false
  private _attachmentPolicies = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList(this, "attachment_policies", false);
  public get attachmentPolicies() {
    return this._attachmentPolicies;
  }
  public putAttachmentPolicies(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable) {
    this._attachmentPolicies.internalValue = value;
  }
  public resetAttachmentPolicies() {
    this._attachmentPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentPoliciesInput() {
    return this._attachmentPolicies.internalValue;
  }

  // core_network_configuration - computed: false, optional: false, required: true
  private _coreNetworkConfiguration = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList(this, "core_network_configuration", false);
  public get coreNetworkConfiguration() {
    return this._coreNetworkConfiguration;
  }
  public putCoreNetworkConfiguration(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable) {
    this._coreNetworkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkConfigurationInput() {
    return this._coreNetworkConfiguration.internalValue;
  }

  // network_function_groups - computed: false, optional: true, required: false
  private _networkFunctionGroups = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList(this, "network_function_groups", false);
  public get networkFunctionGroups() {
    return this._networkFunctionGroups;
  }
  public putNetworkFunctionGroups(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktf.IResolvable) {
    this._networkFunctionGroups.internalValue = value;
  }
  public resetNetworkFunctionGroups() {
    this._networkFunctionGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupsInput() {
    return this._networkFunctionGroups.internalValue;
  }

  // segment_actions - computed: false, optional: true, required: false
  private _segmentActions = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList(this, "segment_actions", false);
  public get segmentActions() {
    return this._segmentActions;
  }
  public putSegmentActions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable) {
    this._segmentActions.internalValue = value;
  }
  public resetSegmentActions() {
    this._segmentActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentActionsInput() {
    return this._segmentActions.internalValue;
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      version: cdktf.stringToTerraform(this._version),
      attachment_policies: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToTerraform, true)(this._attachmentPolicies.internalValue),
      core_network_configuration: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToTerraform, true)(this._coreNetworkConfiguration.internalValue),
      network_function_groups: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToTerraform, true)(this._networkFunctionGroups.internalValue),
      segment_actions: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform, true)(this._segmentActions.internalValue),
      segments: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform, true)(this._segments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment_policies: {
        value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToHclTerraform, true)(this._attachmentPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList",
      },
      core_network_configuration: {
        value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToHclTerraform, true)(this._coreNetworkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList",
      },
      network_function_groups: {
        value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToHclTerraform, true)(this._networkFunctionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList",
      },
      segment_actions: {
        value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToHclTerraform, true)(this._segmentActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList",
      },
      segments: {
        value: cdktf.listMapperHcl(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToHclTerraform, true)(this._segments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
