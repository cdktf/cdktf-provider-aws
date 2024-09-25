// https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockGuardrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#blocked_input_messaging BedrockGuardrail#blocked_input_messaging}
  */
  readonly blockedInputMessaging: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#blocked_outputs_messaging BedrockGuardrail#blocked_outputs_messaging}
  */
  readonly blockedOutputsMessaging: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#kms_key_arn BedrockGuardrail#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#tags BedrockGuardrail#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * content_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#content_policy_config BedrockGuardrail#content_policy_config}
  */
  readonly contentPolicyConfig?: BedrockGuardrailContentPolicyConfig[] | cdktf.IResolvable;
  /**
  * contextual_grounding_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#contextual_grounding_policy_config BedrockGuardrail#contextual_grounding_policy_config}
  */
  readonly contextualGroundingPolicyConfig?: BedrockGuardrailContextualGroundingPolicyConfig[] | cdktf.IResolvable;
  /**
  * sensitive_information_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#sensitive_information_policy_config BedrockGuardrail#sensitive_information_policy_config}
  */
  readonly sensitiveInformationPolicyConfig?: BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#timeouts BedrockGuardrail#timeouts}
  */
  readonly timeouts?: BedrockGuardrailTimeouts;
  /**
  * topic_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#topic_policy_config BedrockGuardrail#topic_policy_config}
  */
  readonly topicPolicyConfig?: BedrockGuardrailTopicPolicyConfig[] | cdktf.IResolvable;
  /**
  * word_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#word_policy_config BedrockGuardrail#word_policy_config}
  */
  readonly wordPolicyConfig?: BedrockGuardrailWordPolicyConfig[] | cdktf.IResolvable;
}
export interface BedrockGuardrailContentPolicyConfigFiltersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#input_strength BedrockGuardrail#input_strength}
  */
  readonly inputStrength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#output_strength BedrockGuardrail#output_strength}
  */
  readonly outputStrength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailContentPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_strength: cdktf.stringToTerraform(struct!.inputStrength),
    output_strength: cdktf.stringToTerraform(struct!.outputStrength),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_strength: {
      value: cdktf.stringToHclTerraform(struct!.inputStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_strength: {
      value: cdktf.stringToHclTerraform(struct!.outputStrength),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputStrength = this._inputStrength;
    }
    if (this._outputStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStrength = this._outputStrength;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContentPolicyConfigFiltersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputStrength = undefined;
      this._outputStrength = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputStrength = value.inputStrength;
      this._outputStrength = value.outputStrength;
      this._type = value.type;
    }
  }

  // input_strength - computed: false, optional: false, required: true
  private _inputStrength?: string; 
  public get inputStrength() {
    return this.getStringAttribute('input_strength');
  }
  public set inputStrength(value: string) {
    this._inputStrength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputStrengthInput() {
    return this._inputStrength;
  }

  // output_strength - computed: false, optional: false, required: true
  private _outputStrength?: string; 
  public get outputStrength() {
    return this.getStringAttribute('output_strength');
  }
  public set outputStrength(value: string) {
    this._outputStrength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStrengthInput() {
    return this._outputStrength;
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
}

export class BedrockGuardrailContentPolicyConfigFiltersConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference {
    return new BedrockGuardrailContentPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContentPolicyConfig {
  /**
  * filters_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktf.IResolvable;
}

export function bedrockGuardrailContentPolicyConfigToTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters_config: cdktf.listMapper(bedrockGuardrailContentPolicyConfigFiltersConfigToTerraform, true)(struct!.filtersConfig),
  }
}


export function bedrockGuardrailContentPolicyConfigToHclTerraform(struct?: BedrockGuardrailContentPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters_config: {
      value: cdktf.listMapperHcl(bedrockGuardrailContentPolicyConfigFiltersConfigToHclTerraform, true)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailContentPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContentPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContentPolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContentPolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // filters_config - computed: false, optional: true, required: false
  private _filtersConfig = new BedrockGuardrailContentPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: BedrockGuardrailContentPolicyConfigFiltersConfig[] | cdktf.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}

export class BedrockGuardrailContentPolicyConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailContentPolicyConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailContentPolicyConfigOutputReference {
    return new BedrockGuardrailContentPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#threshold BedrockGuardrail#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._type = value.type;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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
}

export class BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference {
    return new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailContextualGroundingPolicyConfig {
  /**
  * filters_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#filters_config BedrockGuardrail#filters_config}
  */
  readonly filtersConfig?: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktf.IResolvable;
}

export function bedrockGuardrailContextualGroundingPolicyConfigToTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters_config: cdktf.listMapper(bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToTerraform, true)(struct!.filtersConfig),
  }
}


export function bedrockGuardrailContextualGroundingPolicyConfigToHclTerraform(struct?: BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters_config: {
      value: cdktf.listMapperHcl(bedrockGuardrailContextualGroundingPolicyConfigFiltersConfigToHclTerraform, true)(struct!.filtersConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailContextualGroundingPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filtersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConfig = this._filtersConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailContextualGroundingPolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filtersConfig.internalValue = value.filtersConfig;
    }
  }

  // filters_config - computed: false, optional: true, required: false
  private _filtersConfig = new BedrockGuardrailContextualGroundingPolicyConfigFiltersConfigList(this, "filters_config", false);
  public get filtersConfig() {
    return this._filtersConfig;
  }
  public putFiltersConfig(value: BedrockGuardrailContextualGroundingPolicyConfigFiltersConfig[] | cdktf.IResolvable) {
    this._filtersConfig.internalValue = value;
  }
  public resetFiltersConfig() {
    this._filtersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConfigInput() {
    return this._filtersConfig.internalValue;
  }
}

export class BedrockGuardrailContextualGroundingPolicyConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailContextualGroundingPolicyConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailContextualGroundingPolicyConfigOutputReference {
    return new BedrockGuardrailContextualGroundingPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._type = value.type;
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
}

export class BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#action BedrockGuardrail#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#description BedrockGuardrail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#pattern BedrockGuardrail#pattern}
  */
  readonly pattern: string;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._name = undefined;
      this._pattern = undefined;
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
      this._name = value.name;
      this._pattern = value.pattern;
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

  // description - computed: true, optional: true, required: false
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailSensitiveInformationPolicyConfig {
  /**
  * pii_entities_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#pii_entities_config BedrockGuardrail#pii_entities_config}
  */
  readonly piiEntitiesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktf.IResolvable;
  /**
  * regexes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#regexes_config BedrockGuardrail#regexes_config}
  */
  readonly regexesConfig?: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktf.IResolvable;
}

export function bedrockGuardrailSensitiveInformationPolicyConfigToTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pii_entities_config: cdktf.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToTerraform, true)(struct!.piiEntitiesConfig),
    regexes_config: cdktf.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToTerraform, true)(struct!.regexesConfig),
  }
}


export function bedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform(struct?: BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pii_entities_config: {
      value: cdktf.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigToHclTerraform, true)(struct!.piiEntitiesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList",
    },
    regexes_config: {
      value: cdktf.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigToHclTerraform, true)(struct!.regexesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailSensitiveInformationPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntitiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfig = this._piiEntitiesConfig?.internalValue;
    }
    if (this._regexesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexesConfig = this._regexesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailSensitiveInformationPolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = undefined;
      this._regexesConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntitiesConfig.internalValue = value.piiEntitiesConfig;
      this._regexesConfig.internalValue = value.regexesConfig;
    }
  }

  // pii_entities_config - computed: false, optional: true, required: false
  private _piiEntitiesConfig = new BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfigList(this, "pii_entities_config", false);
  public get piiEntitiesConfig() {
    return this._piiEntitiesConfig;
  }
  public putPiiEntitiesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig[] | cdktf.IResolvable) {
    this._piiEntitiesConfig.internalValue = value;
  }
  public resetPiiEntitiesConfig() {
    this._piiEntitiesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigInput() {
    return this._piiEntitiesConfig.internalValue;
  }

  // regexes_config - computed: false, optional: true, required: false
  private _regexesConfig = new BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfigList(this, "regexes_config", false);
  public get regexesConfig() {
    return this._regexesConfig;
  }
  public putRegexesConfig(value: BedrockGuardrailSensitiveInformationPolicyConfigRegexesConfig[] | cdktf.IResolvable) {
    this._regexesConfig.internalValue = value;
  }
  public resetRegexesConfig() {
    this._regexesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexesConfigInput() {
    return this._regexesConfig.internalValue;
  }
}

export class BedrockGuardrailSensitiveInformationPolicyConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailSensitiveInformationPolicyConfigOutputReference {
    return new BedrockGuardrailSensitiveInformationPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#create BedrockGuardrail#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#delete BedrockGuardrail#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#update BedrockGuardrail#update}
  */
  readonly update?: string;
}

export function bedrockGuardrailTimeoutsToTerraform(struct?: BedrockGuardrailTimeouts | cdktf.IResolvable): any {
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


export function bedrockGuardrailTimeoutsToHclTerraform(struct?: BedrockGuardrailTimeouts | cdktf.IResolvable): any {
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

export class BedrockGuardrailTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockGuardrailTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BedrockGuardrailTimeouts | cdktf.IResolvable | undefined) {
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
export interface BedrockGuardrailTopicPolicyConfigTopicsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#definition BedrockGuardrail#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#examples BedrockGuardrail#examples}
  */
  readonly examples?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#name BedrockGuardrail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    examples: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.examples),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    examples: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.examples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._examples !== undefined) {
      hasAnyValues = true;
      internalValueResult.examples = this._examples;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfigTopicsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._examples = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._examples = value.examples;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // examples - computed: true, optional: true, required: false
  private _examples?: string[]; 
  public get examples() {
    return this.getListAttribute('examples');
  }
  public set examples(value: string[]) {
    this._examples = value;
  }
  public resetExamples() {
    this._examples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get examplesInput() {
    return this._examples;
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
}

export class BedrockGuardrailTopicPolicyConfigTopicsConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference {
    return new BedrockGuardrailTopicPolicyConfigTopicsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailTopicPolicyConfig {
  /**
  * topics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#topics_config BedrockGuardrail#topics_config}
  */
  readonly topicsConfig?: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktf.IResolvable;
}

export function bedrockGuardrailTopicPolicyConfigToTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topics_config: cdktf.listMapper(bedrockGuardrailTopicPolicyConfigTopicsConfigToTerraform, true)(struct!.topicsConfig),
  }
}


export function bedrockGuardrailTopicPolicyConfigToHclTerraform(struct?: BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topics_config: {
      value: cdktf.listMapperHcl(bedrockGuardrailTopicPolicyConfigTopicsConfigToHclTerraform, true)(struct!.topicsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailTopicPolicyConfigTopicsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailTopicPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsConfig = this._topicsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailTopicPolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topicsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topicsConfig.internalValue = value.topicsConfig;
    }
  }

  // topics_config - computed: false, optional: true, required: false
  private _topicsConfig = new BedrockGuardrailTopicPolicyConfigTopicsConfigList(this, "topics_config", false);
  public get topicsConfig() {
    return this._topicsConfig;
  }
  public putTopicsConfig(value: BedrockGuardrailTopicPolicyConfigTopicsConfig[] | cdktf.IResolvable) {
    this._topicsConfig.internalValue = value;
  }
  public resetTopicsConfig() {
    this._topicsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsConfigInput() {
    return this._topicsConfig.internalValue;
  }
}

export class BedrockGuardrailTopicPolicyConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailTopicPolicyConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailTopicPolicyConfigOutputReference {
    return new BedrockGuardrailTopicPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfigManagedWordListsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#type BedrockGuardrail#type}
  */
  readonly type: string;
}

export function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
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
}

export class BedrockGuardrailWordPolicyConfigManagedWordListsConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigManagedWordListsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfigWordsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#text BedrockGuardrail#text}
  */
  readonly text: string;
}

export function bedrockGuardrailWordPolicyConfigWordsConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function bedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailWordPolicyConfigWordsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfigWordsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class BedrockGuardrailWordPolicyConfigWordsConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailWordPolicyConfigWordsConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigWordsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockGuardrailWordPolicyConfig {
  /**
  * managed_word_lists_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#managed_word_lists_config BedrockGuardrail#managed_word_lists_config}
  */
  readonly managedWordListsConfig?: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktf.IResolvable;
  /**
  * words_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#words_config BedrockGuardrail#words_config}
  */
  readonly wordsConfig?: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktf.IResolvable;
}

export function bedrockGuardrailWordPolicyConfigToTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_word_lists_config: cdktf.listMapper(bedrockGuardrailWordPolicyConfigManagedWordListsConfigToTerraform, true)(struct!.managedWordListsConfig),
    words_config: cdktf.listMapper(bedrockGuardrailWordPolicyConfigWordsConfigToTerraform, true)(struct!.wordsConfig),
  }
}


export function bedrockGuardrailWordPolicyConfigToHclTerraform(struct?: BedrockGuardrailWordPolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_word_lists_config: {
      value: cdktf.listMapperHcl(bedrockGuardrailWordPolicyConfigManagedWordListsConfigToHclTerraform, true)(struct!.managedWordListsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailWordPolicyConfigManagedWordListsConfigList",
    },
    words_config: {
      value: cdktf.listMapperHcl(bedrockGuardrailWordPolicyConfigWordsConfigToHclTerraform, true)(struct!.wordsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockGuardrailWordPolicyConfigWordsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockGuardrailWordPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockGuardrailWordPolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedWordListsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedWordListsConfig = this._managedWordListsConfig?.internalValue;
    }
    if (this._wordsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordsConfig = this._wordsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockGuardrailWordPolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = undefined;
      this._wordsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedWordListsConfig.internalValue = value.managedWordListsConfig;
      this._wordsConfig.internalValue = value.wordsConfig;
    }
  }

  // managed_word_lists_config - computed: false, optional: true, required: false
  private _managedWordListsConfig = new BedrockGuardrailWordPolicyConfigManagedWordListsConfigList(this, "managed_word_lists_config", false);
  public get managedWordListsConfig() {
    return this._managedWordListsConfig;
  }
  public putManagedWordListsConfig(value: BedrockGuardrailWordPolicyConfigManagedWordListsConfig[] | cdktf.IResolvable) {
    this._managedWordListsConfig.internalValue = value;
  }
  public resetManagedWordListsConfig() {
    this._managedWordListsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedWordListsConfigInput() {
    return this._managedWordListsConfig.internalValue;
  }

  // words_config - computed: false, optional: true, required: false
  private _wordsConfig = new BedrockGuardrailWordPolicyConfigWordsConfigList(this, "words_config", false);
  public get wordsConfig() {
    return this._wordsConfig;
  }
  public putWordsConfig(value: BedrockGuardrailWordPolicyConfigWordsConfig[] | cdktf.IResolvable) {
    this._wordsConfig.internalValue = value;
  }
  public resetWordsConfig() {
    this._wordsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsConfigInput() {
    return this._wordsConfig.internalValue;
  }
}

export class BedrockGuardrailWordPolicyConfigList extends cdktf.ComplexList {
  public internalValue? : BedrockGuardrailWordPolicyConfig[] | cdktf.IResolvable

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
  public get(index: number): BedrockGuardrailWordPolicyConfigOutputReference {
    return new BedrockGuardrailWordPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail}
*/
export class BedrockGuardrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockGuardrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockGuardrail to import
  * @param importFromId The id of the existing BedrockGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrock_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/bedrock_guardrail aws_bedrock_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_guardrail',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.68.0',
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
    this._blockedInputMessaging = config.blockedInputMessaging;
    this._blockedOutputsMessaging = config.blockedOutputsMessaging;
    this._description = config.description;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._tags = config.tags;
    this._contentPolicyConfig.internalValue = config.contentPolicyConfig;
    this._contextualGroundingPolicyConfig.internalValue = config.contextualGroundingPolicyConfig;
    this._sensitiveInformationPolicyConfig.internalValue = config.sensitiveInformationPolicyConfig;
    this._timeouts.internalValue = config.timeouts;
    this._topicPolicyConfig.internalValue = config.topicPolicyConfig;
    this._wordPolicyConfig.internalValue = config.wordPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_input_messaging - computed: false, optional: false, required: true
  private _blockedInputMessaging?: string; 
  public get blockedInputMessaging() {
    return this.getStringAttribute('blocked_input_messaging');
  }
  public set blockedInputMessaging(value: string) {
    this._blockedInputMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInputMessagingInput() {
    return this._blockedInputMessaging;
  }

  // blocked_outputs_messaging - computed: false, optional: false, required: true
  private _blockedOutputsMessaging?: string; 
  public get blockedOutputsMessaging() {
    return this.getStringAttribute('blocked_outputs_messaging');
  }
  public set blockedOutputsMessaging(value: string) {
    this._blockedOutputsMessaging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedOutputsMessagingInput() {
    return this._blockedOutputsMessaging;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // guardrail_arn - computed: true, optional: false, required: false
  public get guardrailArn() {
    return this.getStringAttribute('guardrail_arn');
  }

  // guardrail_id - computed: true, optional: false, required: false
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // content_policy_config - computed: false, optional: true, required: false
  private _contentPolicyConfig = new BedrockGuardrailContentPolicyConfigList(this, "content_policy_config", false);
  public get contentPolicyConfig() {
    return this._contentPolicyConfig;
  }
  public putContentPolicyConfig(value: BedrockGuardrailContentPolicyConfig[] | cdktf.IResolvable) {
    this._contentPolicyConfig.internalValue = value;
  }
  public resetContentPolicyConfig() {
    this._contentPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentPolicyConfigInput() {
    return this._contentPolicyConfig.internalValue;
  }

  // contextual_grounding_policy_config - computed: false, optional: true, required: false
  private _contextualGroundingPolicyConfig = new BedrockGuardrailContextualGroundingPolicyConfigList(this, "contextual_grounding_policy_config", false);
  public get contextualGroundingPolicyConfig() {
    return this._contextualGroundingPolicyConfig;
  }
  public putContextualGroundingPolicyConfig(value: BedrockGuardrailContextualGroundingPolicyConfig[] | cdktf.IResolvable) {
    this._contextualGroundingPolicyConfig.internalValue = value;
  }
  public resetContextualGroundingPolicyConfig() {
    this._contextualGroundingPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualGroundingPolicyConfigInput() {
    return this._contextualGroundingPolicyConfig.internalValue;
  }

  // sensitive_information_policy_config - computed: false, optional: true, required: false
  private _sensitiveInformationPolicyConfig = new BedrockGuardrailSensitiveInformationPolicyConfigList(this, "sensitive_information_policy_config", false);
  public get sensitiveInformationPolicyConfig() {
    return this._sensitiveInformationPolicyConfig;
  }
  public putSensitiveInformationPolicyConfig(value: BedrockGuardrailSensitiveInformationPolicyConfig[] | cdktf.IResolvable) {
    this._sensitiveInformationPolicyConfig.internalValue = value;
  }
  public resetSensitiveInformationPolicyConfig() {
    this._sensitiveInformationPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInformationPolicyConfigInput() {
    return this._sensitiveInformationPolicyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockGuardrailTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockGuardrailTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topic_policy_config - computed: false, optional: true, required: false
  private _topicPolicyConfig = new BedrockGuardrailTopicPolicyConfigList(this, "topic_policy_config", false);
  public get topicPolicyConfig() {
    return this._topicPolicyConfig;
  }
  public putTopicPolicyConfig(value: BedrockGuardrailTopicPolicyConfig[] | cdktf.IResolvable) {
    this._topicPolicyConfig.internalValue = value;
  }
  public resetTopicPolicyConfig() {
    this._topicPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPolicyConfigInput() {
    return this._topicPolicyConfig.internalValue;
  }

  // word_policy_config - computed: false, optional: true, required: false
  private _wordPolicyConfig = new BedrockGuardrailWordPolicyConfigList(this, "word_policy_config", false);
  public get wordPolicyConfig() {
    return this._wordPolicyConfig;
  }
  public putWordPolicyConfig(value: BedrockGuardrailWordPolicyConfig[] | cdktf.IResolvable) {
    this._wordPolicyConfig.internalValue = value;
  }
  public resetWordPolicyConfig() {
    this._wordPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordPolicyConfigInput() {
    return this._wordPolicyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_input_messaging: cdktf.stringToTerraform(this._blockedInputMessaging),
      blocked_outputs_messaging: cdktf.stringToTerraform(this._blockedOutputsMessaging),
      description: cdktf.stringToTerraform(this._description),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      content_policy_config: cdktf.listMapper(bedrockGuardrailContentPolicyConfigToTerraform, true)(this._contentPolicyConfig.internalValue),
      contextual_grounding_policy_config: cdktf.listMapper(bedrockGuardrailContextualGroundingPolicyConfigToTerraform, true)(this._contextualGroundingPolicyConfig.internalValue),
      sensitive_information_policy_config: cdktf.listMapper(bedrockGuardrailSensitiveInformationPolicyConfigToTerraform, true)(this._sensitiveInformationPolicyConfig.internalValue),
      timeouts: bedrockGuardrailTimeoutsToTerraform(this._timeouts.internalValue),
      topic_policy_config: cdktf.listMapper(bedrockGuardrailTopicPolicyConfigToTerraform, true)(this._topicPolicyConfig.internalValue),
      word_policy_config: cdktf.listMapper(bedrockGuardrailWordPolicyConfigToTerraform, true)(this._wordPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_input_messaging: {
        value: cdktf.stringToHclTerraform(this._blockedInputMessaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_outputs_messaging: {
        value: cdktf.stringToHclTerraform(this._blockedOutputsMessaging),
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
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      content_policy_config: {
        value: cdktf.listMapperHcl(bedrockGuardrailContentPolicyConfigToHclTerraform, true)(this._contentPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailContentPolicyConfigList",
      },
      contextual_grounding_policy_config: {
        value: cdktf.listMapperHcl(bedrockGuardrailContextualGroundingPolicyConfigToHclTerraform, true)(this._contextualGroundingPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailContextualGroundingPolicyConfigList",
      },
      sensitive_information_policy_config: {
        value: cdktf.listMapperHcl(bedrockGuardrailSensitiveInformationPolicyConfigToHclTerraform, true)(this._sensitiveInformationPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailSensitiveInformationPolicyConfigList",
      },
      timeouts: {
        value: bedrockGuardrailTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockGuardrailTimeouts",
      },
      topic_policy_config: {
        value: cdktf.listMapperHcl(bedrockGuardrailTopicPolicyConfigToHclTerraform, true)(this._topicPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailTopicPolicyConfigList",
      },
      word_policy_config: {
        value: cdktf.listMapperHcl(bedrockGuardrailWordPolicyConfigToHclTerraform, true)(this._wordPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockGuardrailWordPolicyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
