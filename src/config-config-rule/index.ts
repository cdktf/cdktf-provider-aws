/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfigRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#description ConfigConfigRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#id ConfigConfigRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}
  */
  readonly inputParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#name ConfigConfigRule#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#region ConfigConfigRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#tags ConfigConfigRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#tags_all ConfigConfigRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * evaluation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#evaluation_mode ConfigConfigRule#evaluation_mode}
  */
  readonly evaluationMode?: ConfigConfigRuleEvaluationMode[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#scope ConfigConfigRule#scope}
  */
  readonly scope?: ConfigConfigRuleScope;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#source ConfigConfigRule#source}
  */
  readonly source: ConfigConfigRuleSource;
}
export interface ConfigConfigRuleEvaluationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#mode ConfigConfigRule#mode}
  */
  readonly mode?: string;
}

export function configConfigRuleEvaluationModeToTerraform(struct?: ConfigConfigRuleEvaluationMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function configConfigRuleEvaluationModeToHclTerraform(struct?: ConfigConfigRuleEvaluationMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigRuleEvaluationModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigConfigRuleEvaluationMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigRuleEvaluationMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: true, optional: true, required: false
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
}

export class ConfigConfigRuleEvaluationModeList extends cdktf.ComplexList {
  public internalValue? : ConfigConfigRuleEvaluationMode[] | cdktf.IResolvable

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
  public get(index: number): ConfigConfigRuleEvaluationModeOutputReference {
    return new ConfigConfigRuleEvaluationModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigConfigRuleScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}
  */
  readonly complianceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}
  */
  readonly complianceResourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}
  */
  readonly tagValue?: string;
}

export function configConfigRuleScopeToTerraform(struct?: ConfigConfigRuleScopeOutputReference | ConfigConfigRuleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_resource_id: cdktf.stringToTerraform(struct!.complianceResourceId),
    compliance_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.complianceResourceTypes),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function configConfigRuleScopeToHclTerraform(struct?: ConfigConfigRuleScopeOutputReference | ConfigConfigRuleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.complianceResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compliance_resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.complianceResourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigRuleScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigRuleScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceResourceId = this._complianceResourceId;
    }
    if (this._complianceResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceResourceTypes = this._complianceResourceTypes;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigRuleScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complianceResourceId = undefined;
      this._complianceResourceTypes = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complianceResourceId = value.complianceResourceId;
      this._complianceResourceTypes = value.complianceResourceTypes;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // compliance_resource_id - computed: false, optional: true, required: false
  private _complianceResourceId?: string; 
  public get complianceResourceId() {
    return this.getStringAttribute('compliance_resource_id');
  }
  public set complianceResourceId(value: string) {
    this._complianceResourceId = value;
  }
  public resetComplianceResourceId() {
    this._complianceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceResourceIdInput() {
    return this._complianceResourceId;
  }

  // compliance_resource_types - computed: false, optional: true, required: false
  private _complianceResourceTypes?: string[]; 
  public get complianceResourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_resource_types'));
  }
  public set complianceResourceTypes(value: string[]) {
    this._complianceResourceTypes = value;
  }
  public resetComplianceResourceTypes() {
    this._complianceResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceResourceTypesInput() {
    return this._complianceResourceTypes;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}
export interface ConfigConfigRuleSourceCustomPolicyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}
  */
  readonly enableDebugLogDelivery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}
  */
  readonly policyRuntime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}
  */
  readonly policyText: string;
}

export function configConfigRuleSourceCustomPolicyDetailsToTerraform(struct?: ConfigConfigRuleSourceCustomPolicyDetailsOutputReference | ConfigConfigRuleSourceCustomPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_debug_log_delivery: cdktf.booleanToTerraform(struct!.enableDebugLogDelivery),
    policy_runtime: cdktf.stringToTerraform(struct!.policyRuntime),
    policy_text: cdktf.stringToTerraform(struct!.policyText),
  }
}


export function configConfigRuleSourceCustomPolicyDetailsToHclTerraform(struct?: ConfigConfigRuleSourceCustomPolicyDetailsOutputReference | ConfigConfigRuleSourceCustomPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_debug_log_delivery: {
      value: cdktf.booleanToHclTerraform(struct!.enableDebugLogDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_runtime: {
      value: cdktf.stringToHclTerraform(struct!.policyRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_text: {
      value: cdktf.stringToHclTerraform(struct!.policyText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigRuleSourceCustomPolicyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigRuleSourceCustomPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDebugLogDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDebugLogDelivery = this._enableDebugLogDelivery;
    }
    if (this._policyRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRuntime = this._policyRuntime;
    }
    if (this._policyText !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyText = this._policyText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigRuleSourceCustomPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableDebugLogDelivery = undefined;
      this._policyRuntime = undefined;
      this._policyText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDebugLogDelivery = value.enableDebugLogDelivery;
      this._policyRuntime = value.policyRuntime;
      this._policyText = value.policyText;
    }
  }

  // enable_debug_log_delivery - computed: false, optional: true, required: false
  private _enableDebugLogDelivery?: boolean | cdktf.IResolvable; 
  public get enableDebugLogDelivery() {
    return this.getBooleanAttribute('enable_debug_log_delivery');
  }
  public set enableDebugLogDelivery(value: boolean | cdktf.IResolvable) {
    this._enableDebugLogDelivery = value;
  }
  public resetEnableDebugLogDelivery() {
    this._enableDebugLogDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDebugLogDeliveryInput() {
    return this._enableDebugLogDelivery;
  }

  // policy_runtime - computed: false, optional: false, required: true
  private _policyRuntime?: string; 
  public get policyRuntime() {
    return this.getStringAttribute('policy_runtime');
  }
  public set policyRuntime(value: string) {
    this._policyRuntime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuntimeInput() {
    return this._policyRuntime;
  }

  // policy_text - computed: false, optional: false, required: true
  private _policyText?: string; 
  public get policyText() {
    return this.getStringAttribute('policy_text');
  }
  public set policyText(value: string) {
    this._policyText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTextInput() {
    return this._policyText;
  }
}
export interface ConfigConfigRuleSourceSourceDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#event_source ConfigConfigRule#event_source}
  */
  readonly eventSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
  */
  readonly maximumExecutionFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#message_type ConfigConfigRule#message_type}
  */
  readonly messageType?: string;
}

export function configConfigRuleSourceSourceDetailToTerraform(struct?: ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_source: cdktf.stringToTerraform(struct!.eventSource),
    maximum_execution_frequency: cdktf.stringToTerraform(struct!.maximumExecutionFrequency),
    message_type: cdktf.stringToTerraform(struct!.messageType),
  }
}


export function configConfigRuleSourceSourceDetailToHclTerraform(struct?: ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_source: {
      value: cdktf.stringToHclTerraform(struct!.eventSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_execution_frequency: {
      value: cdktf.stringToHclTerraform(struct!.maximumExecutionFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigRuleSourceSourceDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSource = this._eventSource;
    }
    if (this._maximumExecutionFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionFrequency = this._maximumExecutionFrequency;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventSource = undefined;
      this._maximumExecutionFrequency = undefined;
      this._messageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventSource = value.eventSource;
      this._maximumExecutionFrequency = value.maximumExecutionFrequency;
      this._messageType = value.messageType;
    }
  }

  // event_source - computed: false, optional: true, required: false
  private _eventSource?: string; 
  public get eventSource() {
    return this.getStringAttribute('event_source');
  }
  public set eventSource(value: string) {
    this._eventSource = value;
  }
  public resetEventSource() {
    this._eventSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceInput() {
    return this._eventSource;
  }

  // maximum_execution_frequency - computed: false, optional: true, required: false
  private _maximumExecutionFrequency?: string; 
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }
  public set maximumExecutionFrequency(value: string) {
    this._maximumExecutionFrequency = value;
  }
  public resetMaximumExecutionFrequency() {
    this._maximumExecutionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionFrequencyInput() {
    return this._maximumExecutionFrequency;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }
}

export class ConfigConfigRuleSourceSourceDetailList extends cdktf.ComplexList {
  public internalValue? : ConfigConfigRuleSourceSourceDetail[] | cdktf.IResolvable

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
  public get(index: number): ConfigConfigRuleSourceSourceDetailOutputReference {
    return new ConfigConfigRuleSourceSourceDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigConfigRuleSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}
  */
  readonly sourceIdentifier?: string;
  /**
  * custom_policy_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}
  */
  readonly customPolicyDetails?: ConfigConfigRuleSourceCustomPolicyDetails;
  /**
  * source_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#source_detail ConfigConfigRule#source_detail}
  */
  readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[] | cdktf.IResolvable;
}

export function configConfigRuleSourceToTerraform(struct?: ConfigConfigRuleSourceOutputReference | ConfigConfigRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
    source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
    custom_policy_details: configConfigRuleSourceCustomPolicyDetailsToTerraform(struct!.customPolicyDetails),
    source_detail: cdktf.listMapper(configConfigRuleSourceSourceDetailToTerraform, true)(struct!.sourceDetail),
  }
}


export function configConfigRuleSourceToHclTerraform(struct?: ConfigConfigRuleSourceOutputReference | ConfigConfigRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_policy_details: {
      value: configConfigRuleSourceCustomPolicyDetailsToHclTerraform(struct!.customPolicyDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ConfigConfigRuleSourceCustomPolicyDetailsList",
    },
    source_detail: {
      value: cdktf.listMapperHcl(configConfigRuleSourceSourceDetailToHclTerraform, true)(struct!.sourceDetail),
      isBlock: true,
      type: "set",
      storageClassType: "ConfigConfigRuleSourceSourceDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigConfigRuleSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigRuleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._sourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIdentifier = this._sourceIdentifier;
    }
    if (this._customPolicyDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicyDetails = this._customPolicyDetails?.internalValue;
    }
    if (this._sourceDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDetail = this._sourceDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigRuleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._owner = undefined;
      this._sourceIdentifier = undefined;
      this._customPolicyDetails.internalValue = undefined;
      this._sourceDetail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._owner = value.owner;
      this._sourceIdentifier = value.sourceIdentifier;
      this._customPolicyDetails.internalValue = value.customPolicyDetails;
      this._sourceDetail.internalValue = value.sourceDetail;
    }
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // source_identifier - computed: false, optional: true, required: false
  private _sourceIdentifier?: string; 
  public get sourceIdentifier() {
    return this.getStringAttribute('source_identifier');
  }
  public set sourceIdentifier(value: string) {
    this._sourceIdentifier = value;
  }
  public resetSourceIdentifier() {
    this._sourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdentifierInput() {
    return this._sourceIdentifier;
  }

  // custom_policy_details - computed: false, optional: true, required: false
  private _customPolicyDetails = new ConfigConfigRuleSourceCustomPolicyDetailsOutputReference(this, "custom_policy_details");
  public get customPolicyDetails() {
    return this._customPolicyDetails;
  }
  public putCustomPolicyDetails(value: ConfigConfigRuleSourceCustomPolicyDetails) {
    this._customPolicyDetails.internalValue = value;
  }
  public resetCustomPolicyDetails() {
    this._customPolicyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyDetailsInput() {
    return this._customPolicyDetails.internalValue;
  }

  // source_detail - computed: false, optional: true, required: false
  private _sourceDetail = new ConfigConfigRuleSourceSourceDetailList(this, "source_detail", true);
  public get sourceDetail() {
    return this._sourceDetail;
  }
  public putSourceDetail(value: ConfigConfigRuleSourceSourceDetail[] | cdktf.IResolvable) {
    this._sourceDetail.internalValue = value;
  }
  public resetSourceDetail() {
    this._sourceDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailInput() {
    return this._sourceDetail.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule aws_config_config_rule}
*/
export class ConfigConfigRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_config_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigConfigRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigConfigRule to import
  * @param importFromId The id of the existing ConfigConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigConfigRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_config_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/config_config_rule aws_config_config_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_config_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
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
    this._description = config.description;
    this._id = config.id;
    this._inputParameters = config.inputParameters;
    this._maximumExecutionFrequency = config.maximumExecutionFrequency;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._evaluationMode.internalValue = config.evaluationMode;
    this._scope.internalValue = config.scope;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // input_parameters - computed: false, optional: true, required: false
  private _inputParameters?: string; 
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }
  public set inputParameters(value: string) {
    this._inputParameters = value;
  }
  public resetInputParameters() {
    this._inputParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputParametersInput() {
    return this._inputParameters;
  }

  // maximum_execution_frequency - computed: false, optional: true, required: false
  private _maximumExecutionFrequency?: string; 
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }
  public set maximumExecutionFrequency(value: string) {
    this._maximumExecutionFrequency = value;
  }
  public resetMaximumExecutionFrequency() {
    this._maximumExecutionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionFrequencyInput() {
    return this._maximumExecutionFrequency;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
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

  // evaluation_mode - computed: false, optional: true, required: false
  private _evaluationMode = new ConfigConfigRuleEvaluationModeList(this, "evaluation_mode", true);
  public get evaluationMode() {
    return this._evaluationMode;
  }
  public putEvaluationMode(value: ConfigConfigRuleEvaluationMode[] | cdktf.IResolvable) {
    this._evaluationMode.internalValue = value;
  }
  public resetEvaluationMode() {
    this._evaluationMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ConfigConfigRuleScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: ConfigConfigRuleScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new ConfigConfigRuleSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ConfigConfigRuleSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      input_parameters: cdktf.stringToTerraform(this._inputParameters),
      maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      evaluation_mode: cdktf.listMapper(configConfigRuleEvaluationModeToTerraform, true)(this._evaluationMode.internalValue),
      scope: configConfigRuleScopeToTerraform(this._scope.internalValue),
      source: configConfigRuleSourceToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      input_parameters: {
        value: cdktf.stringToHclTerraform(this._inputParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_execution_frequency: {
        value: cdktf.stringToHclTerraform(this._maximumExecutionFrequency),
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
      evaluation_mode: {
        value: cdktf.listMapperHcl(configConfigRuleEvaluationModeToHclTerraform, true)(this._evaluationMode.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConfigConfigRuleEvaluationModeList",
      },
      scope: {
        value: configConfigRuleScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigConfigRuleScopeList",
      },
      source: {
        value: configConfigRuleSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigConfigRuleSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
