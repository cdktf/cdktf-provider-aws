/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2WebAclLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#id Wafv2WebAclLoggingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * AWS Kinesis Firehose Delivery Stream ARNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#log_destination_configs Wafv2WebAclLoggingConfiguration#log_destination_configs}
  */
  readonly logDestinationConfigs: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#region Wafv2WebAclLoggingConfiguration#region}
  */
  readonly region?: string;
  /**
  * AWS WebACL ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#resource_arn Wafv2WebAclLoggingConfiguration#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * logging_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#logging_filter Wafv2WebAclLoggingConfiguration#logging_filter}
  */
  readonly loggingFilter?: Wafv2WebAclLoggingConfigurationLoggingFilter;
  /**
  * redacted_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#redacted_fields Wafv2WebAclLoggingConfiguration#redacted_fields}
  */
  readonly redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[] | cdktf.IResolvable;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#action Wafv2WebAclLoggingConfiguration#action}
  */
  readonly action: string;
}

export function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
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
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#label_name Wafv2WebAclLoggingConfiguration#label_name}
  */
  readonly labelName: string;
}

export function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
  }
}


export function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_name: {
      value: cdktf.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelName = value.labelName;
    }
  }

  // label_name - computed: false, optional: false, required: true
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition {
  /**
  * action_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#action_condition Wafv2WebAclLoggingConfiguration#action_condition}
  */
  readonly actionCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition;
  /**
  * label_name_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#label_name_condition Wafv2WebAclLoggingConfiguration#label_name_condition}
  */
  readonly labelNameCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition;
}

export function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_condition: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct!.actionCondition),
    label_name_condition: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct!.labelNameCondition),
  }
}


export function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_condition: {
      value: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToHclTerraform(struct!.actionCondition),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionList",
    },
    label_name_condition: {
      value: wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToHclTerraform(struct!.labelNameCondition),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCondition = this._actionCondition?.internalValue;
    }
    if (this._labelNameCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNameCondition = this._labelNameCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionCondition.internalValue = undefined;
      this._labelNameCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionCondition.internalValue = value.actionCondition;
      this._labelNameCondition.internalValue = value.labelNameCondition;
    }
  }

  // action_condition - computed: false, optional: true, required: false
  private _actionCondition = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference(this, "action_condition");
  public get actionCondition() {
    return this._actionCondition;
  }
  public putActionCondition(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition) {
    this._actionCondition.internalValue = value;
  }
  public resetActionCondition() {
    this._actionCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConditionInput() {
    return this._actionCondition.internalValue;
  }

  // label_name_condition - computed: false, optional: true, required: false
  private _labelNameCondition = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference(this, "label_name_condition");
  public get labelNameCondition() {
    return this._labelNameCondition;
  }
  public putLabelNameCondition(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition) {
    this._labelNameCondition.internalValue = value;
  }
  public resetLabelNameCondition() {
    this._labelNameCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameConditionInput() {
    return this._labelNameCondition.internalValue;
  }
}

export class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference {
    return new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#behavior Wafv2WebAclLoggingConfiguration#behavior}
  */
  readonly behavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#requirement Wafv2WebAclLoggingConfiguration#requirement}
  */
  readonly requirement: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#condition Wafv2WebAclLoggingConfiguration#condition}
  */
  readonly condition: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[] | cdktf.IResolvable;
}

export function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    requirement: cdktf.stringToTerraform(struct!.requirement),
    condition: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform, true)(struct!.condition),
  }
}


export function wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirement: {
      value: cdktf.stringToHclTerraform(struct!.requirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._requirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirement = this._requirement;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._requirement = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._requirement = value.requirement;
      this._condition.internalValue = value.condition;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // requirement - computed: false, optional: false, required: true
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class Wafv2WebAclLoggingConfigurationLoggingFilterFilterList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclLoggingConfigurationLoggingFilterFilter[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference {
    return new Wafv2WebAclLoggingConfigurationLoggingFilterFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#default_behavior Wafv2WebAclLoggingConfiguration#default_behavior}
  */
  readonly defaultBehavior: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#filter Wafv2WebAclLoggingConfiguration#filter}
  */
  readonly filter: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[] | cdktf.IResolvable;
}

export function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_behavior: cdktf.stringToTerraform(struct!.defaultBehavior),
    filter: cdktf.listMapper(wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform, true)(struct!.filter),
  }
}


export function wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_behavior: {
      value: cdktf.stringToHclTerraform(struct!.defaultBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(wafv2WebAclLoggingConfigurationLoggingFilterFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBehavior = this._defaultBehavior;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultBehavior = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultBehavior = value.defaultBehavior;
      this._filter.internalValue = value.filter;
    }
  }

  // default_behavior - computed: false, optional: false, required: true
  private _defaultBehavior?: string; 
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }
  public set defaultBehavior(value: string) {
    this._defaultBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBehaviorInput() {
    return this._defaultBehavior;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new Wafv2WebAclLoggingConfigurationLoggingFilterFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsMethod {
}

export function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString {
}

export function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#name Wafv2WebAclLoggingConfiguration#name}
  */
  readonly name: string;
}

export function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath {
}

export function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclLoggingConfigurationRedactedFields {
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#method Wafv2WebAclLoggingConfiguration#method}
  */
  readonly method?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#query_string Wafv2WebAclLoggingConfiguration#query_string}
  */
  readonly queryString?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString;
  /**
  * single_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#single_header Wafv2WebAclLoggingConfiguration#single_header}
  */
  readonly singleHeader?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader;
  /**
  * uri_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#uri_path Wafv2WebAclLoggingConfiguration#uri_path}
  */
  readonly uriPath?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath;
}

export function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct!.method),
    query_string: wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct!.singleHeader),
    uri_path: wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct!.uriPath),
  }
}


export function wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: wafv2WebAclLoggingConfigurationRedactedFieldsMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsMethodList",
    },
    query_string: {
      value: wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringList",
    },
    single_header: {
      value: wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToHclTerraform(struct!.singleHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderList",
    },
    uri_path: {
      value: wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToHclTerraform(struct!.uriPath),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}

export class Wafv2WebAclLoggingConfigurationRedactedFieldsList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclLoggingConfigurationRedactedFields[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference {
    return new Wafv2WebAclLoggingConfigurationRedactedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration aws_wafv2_web_acl_logging_configuration}
*/
export class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_web_acl_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafv2WebAclLoggingConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv2WebAclLoggingConfiguration to import
  * @param importFromId The id of the existing Wafv2WebAclLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv2WebAclLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_web_acl_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/wafv2_web_acl_logging_configuration aws_wafv2_web_acl_logging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2WebAclLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl_logging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
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
    this._id = config.id;
    this._logDestinationConfigs = config.logDestinationConfigs;
    this._region = config.region;
    this._resourceArn = config.resourceArn;
    this._loggingFilter.internalValue = config.loggingFilter;
    this._redactedFields.internalValue = config.redactedFields;
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

  // log_destination_configs - computed: false, optional: false, required: true
  private _logDestinationConfigs?: string[]; 
  public get logDestinationConfigs() {
    return cdktf.Fn.tolist(this.getListAttribute('log_destination_configs'));
  }
  public set logDestinationConfigs(value: string[]) {
    this._logDestinationConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationConfigsInput() {
    return this._logDestinationConfigs;
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

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
  }

  // logging_filter - computed: false, optional: true, required: false
  private _loggingFilter = new Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference(this, "logging_filter");
  public get loggingFilter() {
    return this._loggingFilter;
  }
  public putLoggingFilter(value: Wafv2WebAclLoggingConfigurationLoggingFilter) {
    this._loggingFilter.internalValue = value;
  }
  public resetLoggingFilter() {
    this._loggingFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingFilterInput() {
    return this._loggingFilter.internalValue;
  }

  // redacted_fields - computed: false, optional: true, required: false
  private _redactedFields = new Wafv2WebAclLoggingConfigurationRedactedFieldsList(this, "redacted_fields", false);
  public get redactedFields() {
    return this._redactedFields;
  }
  public putRedactedFields(value: Wafv2WebAclLoggingConfigurationRedactedFields[] | cdktf.IResolvable) {
    this._redactedFields.internalValue = value;
  }
  public resetRedactedFields() {
    this._redactedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactedFieldsInput() {
    return this._redactedFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_destination_configs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logDestinationConfigs),
      region: cdktf.stringToTerraform(this._region),
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      logging_filter: wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(this._loggingFilter.internalValue),
      redacted_fields: cdktf.listMapper(wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform, true)(this._redactedFields.internalValue),
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
      log_destination_configs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logDestinationConfigs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_arn: {
        value: cdktf.stringToHclTerraform(this._resourceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_filter: {
        value: wafv2WebAclLoggingConfigurationLoggingFilterToHclTerraform(this._loggingFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclLoggingConfigurationLoggingFilterList",
      },
      redacted_fields: {
        value: cdktf.listMapperHcl(wafv2WebAclLoggingConfigurationRedactedFieldsToHclTerraform, true)(this._redactedFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclLoggingConfigurationRedactedFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
