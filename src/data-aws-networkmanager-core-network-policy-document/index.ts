// https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#id DataAwsNetworkmanagerCoreNetworkPolicyDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#version DataAwsNetworkmanagerCoreNetworkPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * attachment_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#attachment_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#attachment_policies}
  */
  readonly attachmentPolicies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable;
  /**
  * core_network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#core_network_configuration DataAwsNetworkmanagerCoreNetworkPolicyDocument#core_network_configuration}
  */
  readonly coreNetworkConfiguration: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable;
  /**
  * segment_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segment_actions DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment_actions}
  */
  readonly segmentActions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable;
  /**
  * segments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
  */
  readonly segments: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#association_method DataAwsNetworkmanagerCoreNetworkPolicyDocument#association_method}
  */
  readonly associationMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#require_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_acceptance}
  */
  readonly requireAcceptance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#tag_value_of_key DataAwsNetworkmanagerCoreNetworkPolicyDocument#tag_value_of_key}
  */
  readonly tagValueOfKey?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    association_method: cdktf.stringToTerraform(struct!.associationMethod),
    require_acceptance: cdktf.booleanToTerraform(struct!.requireAcceptance),
    segment: cdktf.stringToTerraform(struct!.segment),
    tag_value_of_key: cdktf.stringToTerraform(struct!.tagValueOfKey),
  }
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
      this._associationMethod = undefined;
      this._requireAcceptance = undefined;
      this._segment = undefined;
      this._tagValueOfKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associationMethod = value.associationMethod;
      this._requireAcceptance = value.requireAcceptance;
      this._segment = value.segment;
      this._tagValueOfKey = value.tagValueOfKey;
    }
  }

  // association_method - computed: false, optional: false, required: true
  private _associationMethod?: string; 
  public get associationMethod() {
    return this.getStringAttribute('association_method');
  }
  public set associationMethod(value: string) {
    this._associationMethod = value;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#key DataAwsNetworkmanagerCoreNetworkPolicyDocument#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#operator DataAwsNetworkmanagerCoreNetworkPolicyDocument#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}
  */
  readonly conditionLogic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#conditions}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#asn DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn}
  */
  readonly asn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#location DataAwsNetworkmanagerCoreNetworkPolicyDocument#location}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#asn_ranges DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn_ranges}
  */
  readonly asnRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#vpn_ecmp_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#vpn_ecmp_support}
  */
  readonly vpnEcmpSupport?: boolean | cdktf.IResolvable;
  /**
  * edge_locations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
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
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#destination_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#destination_cidr_blocks}
  */
  readonly destinationCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#destinations DataAwsNetworkmanagerCoreNetworkPolicyDocument#destinations}
  */
  readonly destinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#mode DataAwsNetworkmanagerCoreNetworkPolicyDocument#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#share_with DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with}
  */
  readonly shareWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#share_with_except DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with_except}
  */
  readonly shareWithExcept?: string[];
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
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#allow_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#allow_filter}
  */
  readonly allowFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#deny_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#deny_filter}
  */
  readonly denyFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#isolate_attachments DataAwsNetworkmanagerCoreNetworkPolicyDocument#isolate_attachments}
  */
  readonly isolateAttachments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document}
*/
export class DataAwsNetworkmanagerCoreNetworkPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_core_network_policy_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document} Data Source
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
        providerVersion: '4.58.0',
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
    this._id = config.id;
    this._version = config.version;
    this._attachmentPolicies.internalValue = config.attachmentPolicies;
    this._coreNetworkConfiguration.internalValue = config.coreNetworkConfiguration;
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
      segment_actions: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform, true)(this._segmentActions.internalValue),
      segments: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform, true)(this._segments.internalValue),
    };
  }
}
