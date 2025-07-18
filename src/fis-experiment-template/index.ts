/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FisExperimentTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#id FisExperimentTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#region FisExperimentTemplate#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#action FisExperimentTemplate#action}
  */
  readonly action: FisExperimentTemplateAction[] | cdktf.IResolvable;
  /**
  * experiment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}
  */
  readonly experimentOptions?: FisExperimentTemplateExperimentOptions;
  /**
  * experiment_report_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}
  */
  readonly experimentReportConfiguration?: FisExperimentTemplateExperimentReportConfiguration;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}
  */
  readonly logConfiguration?: FisExperimentTemplateLogConfiguration;
  /**
  * stop_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#stop_condition FisExperimentTemplate#stop_condition}
  */
  readonly stopCondition: FisExperimentTemplateStopCondition[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}
  */
  readonly target?: FisExperimentTemplateTarget[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#timeouts FisExperimentTemplate#timeouts}
  */
  readonly timeouts?: FisExperimentTemplateTimeouts;
}
export interface FisExperimentTemplateActionParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
  */
  readonly value: string;
}

export function fisExperimentTemplateActionParameterToTerraform(struct?: FisExperimentTemplateActionParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fisExperimentTemplateActionParameterToHclTerraform(struct?: FisExperimentTemplateActionParameter | cdktf.IResolvable): any {
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

export class FisExperimentTemplateActionParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FisExperimentTemplateActionParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateActionParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FisExperimentTemplateActionParameterList extends cdktf.ComplexList {
  public internalValue? : FisExperimentTemplateActionParameter[] | cdktf.IResolvable

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
  public get(index: number): FisExperimentTemplateActionParameterOutputReference {
    return new FisExperimentTemplateActionParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FisExperimentTemplateActionTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
  */
  readonly value: string;
}

export function fisExperimentTemplateActionTargetToTerraform(struct?: FisExperimentTemplateActionTargetOutputReference | FisExperimentTemplateActionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fisExperimentTemplateActionTargetToHclTerraform(struct?: FisExperimentTemplateActionTargetOutputReference | FisExperimentTemplateActionTarget): any {
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

export class FisExperimentTemplateActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateActionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateActionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface FisExperimentTemplateAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}
  */
  readonly actionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}
  */
  readonly startAfter?: string[];
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#parameter FisExperimentTemplate#parameter}
  */
  readonly parameter?: FisExperimentTemplateActionParameter[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}
  */
  readonly target?: FisExperimentTemplateActionTarget;
}

export function fisExperimentTemplateActionToTerraform(struct?: FisExperimentTemplateAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    start_after: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.startAfter),
    parameter: cdktf.listMapper(fisExperimentTemplateActionParameterToTerraform, true)(struct!.parameter),
    target: fisExperimentTemplateActionTargetToTerraform(struct!.target),
  }
}


export function fisExperimentTemplateActionToHclTerraform(struct?: FisExperimentTemplateAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_id: {
      value: cdktf.stringToHclTerraform(struct!.actionId),
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
    start_after: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.startAfter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    parameter: {
      value: cdktf.listMapperHcl(fisExperimentTemplateActionParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "FisExperimentTemplateActionParameterList",
    },
    target: {
      value: fisExperimentTemplateActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateActionTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FisExperimentTemplateAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAfter = this._startAfter;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionId = undefined;
      this._description = undefined;
      this._name = undefined;
      this._startAfter = undefined;
      this._parameter.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionId = value.actionId;
      this._description = value.description;
      this._name = value.name;
      this._startAfter = value.startAfter;
      this._parameter.internalValue = value.parameter;
      this._target.internalValue = value.target;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
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

  // start_after - computed: false, optional: true, required: false
  private _startAfter?: string[]; 
  public get startAfter() {
    return cdktf.Fn.tolist(this.getListAttribute('start_after'));
  }
  public set startAfter(value: string[]) {
    this._startAfter = value;
  }
  public resetStartAfter() {
    this._startAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAfterInput() {
    return this._startAfter;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new FisExperimentTemplateActionParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: FisExperimentTemplateActionParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new FisExperimentTemplateActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: FisExperimentTemplateActionTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class FisExperimentTemplateActionList extends cdktf.ComplexList {
  public internalValue? : FisExperimentTemplateAction[] | cdktf.IResolvable

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
  public get(index: number): FisExperimentTemplateActionOutputReference {
    return new FisExperimentTemplateActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FisExperimentTemplateExperimentOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}
  */
  readonly accountTargeting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}
  */
  readonly emptyTargetResolutionMode?: string;
}

export function fisExperimentTemplateExperimentOptionsToTerraform(struct?: FisExperimentTemplateExperimentOptionsOutputReference | FisExperimentTemplateExperimentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_targeting: cdktf.stringToTerraform(struct!.accountTargeting),
    empty_target_resolution_mode: cdktf.stringToTerraform(struct!.emptyTargetResolutionMode),
  }
}


export function fisExperimentTemplateExperimentOptionsToHclTerraform(struct?: FisExperimentTemplateExperimentOptionsOutputReference | FisExperimentTemplateExperimentOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_targeting: {
      value: cdktf.stringToHclTerraform(struct!.accountTargeting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_target_resolution_mode: {
      value: cdktf.stringToHclTerraform(struct!.emptyTargetResolutionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateExperimentOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateExperimentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountTargeting !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountTargeting = this._accountTargeting;
    }
    if (this._emptyTargetResolutionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyTargetResolutionMode = this._emptyTargetResolutionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateExperimentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountTargeting = undefined;
      this._emptyTargetResolutionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountTargeting = value.accountTargeting;
      this._emptyTargetResolutionMode = value.emptyTargetResolutionMode;
    }
  }

  // account_targeting - computed: false, optional: true, required: false
  private _accountTargeting?: string; 
  public get accountTargeting() {
    return this.getStringAttribute('account_targeting');
  }
  public set accountTargeting(value: string) {
    this._accountTargeting = value;
  }
  public resetAccountTargeting() {
    this._accountTargeting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTargetingInput() {
    return this._accountTargeting;
  }

  // empty_target_resolution_mode - computed: false, optional: true, required: false
  private _emptyTargetResolutionMode?: string; 
  public get emptyTargetResolutionMode() {
    return this.getStringAttribute('empty_target_resolution_mode');
  }
  public set emptyTargetResolutionMode(value: string) {
    this._emptyTargetResolutionMode = value;
  }
  public resetEmptyTargetResolutionMode() {
    this._emptyTargetResolutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyTargetResolutionModeInput() {
    return this._emptyTargetResolutionMode;
  }
}
export interface FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#dashboard_arn FisExperimentTemplate#dashboard_arn}
  */
  readonly dashboardArn?: string;
}

export function fisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardToTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_arn: cdktf.stringToTerraform(struct!.dashboardArn),
  }
}


export function fisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardToHclTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_arn: {
      value: cdktf.stringToHclTerraform(struct!.dashboardArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardArn = this._dashboardArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardArn = value.dashboardArn;
    }
  }

  // dashboard_arn - computed: false, optional: true, required: false
  private _dashboardArn?: string; 
  public get dashboardArn() {
    return this.getStringAttribute('dashboard_arn');
  }
  public set dashboardArn(value: string) {
    this._dashboardArn = value;
  }
  public resetDashboardArn() {
    this._dashboardArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardArnInput() {
    return this._dashboardArn;
  }
}

export class FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList extends cdktf.ComplexList {
  public internalValue? : FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard[] | cdktf.IResolvable

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
  public get(index: number): FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference {
    return new FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FisExperimentTemplateExperimentReportConfigurationDataSources {
  /**
  * cloudwatch_dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#cloudwatch_dashboard FisExperimentTemplate#cloudwatch_dashboard}
  */
  readonly cloudwatchDashboard?: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard[] | cdktf.IResolvable;
}

export function fisExperimentTemplateExperimentReportConfigurationDataSourcesToTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference | FisExperimentTemplateExperimentReportConfigurationDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_dashboard: cdktf.listMapper(fisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardToTerraform, true)(struct!.cloudwatchDashboard),
  }
}


export function fisExperimentTemplateExperimentReportConfigurationDataSourcesToHclTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference | FisExperimentTemplateExperimentReportConfigurationDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_dashboard: {
      value: cdktf.listMapperHcl(fisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardToHclTerraform, true)(struct!.cloudwatchDashboard),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateExperimentReportConfigurationDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchDashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchDashboard = this._cloudwatchDashboard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateExperimentReportConfigurationDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchDashboard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchDashboard.internalValue = value.cloudwatchDashboard;
    }
  }

  // cloudwatch_dashboard - computed: false, optional: true, required: false
  private _cloudwatchDashboard = new FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList(this, "cloudwatch_dashboard", false);
  public get cloudwatchDashboard() {
    return this._cloudwatchDashboard;
  }
  public putCloudwatchDashboard(value: FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard[] | cdktf.IResolvable) {
    this._cloudwatchDashboard.internalValue = value;
  }
  public resetCloudwatchDashboard() {
    this._cloudwatchDashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchDashboardInput() {
    return this._cloudwatchDashboard.internalValue;
  }
}
export interface FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}
  */
  readonly prefix?: string;
}

export function fisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationToTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference | FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function fisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationToHclTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference | FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._prefix = value.prefix;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface FisExperimentTemplateExperimentReportConfigurationOutputs {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}
  */
  readonly s3Configuration?: FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration;
}

export function fisExperimentTemplateExperimentReportConfigurationOutputsToTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference | FisExperimentTemplateExperimentReportConfigurationOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_configuration: fisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}


export function fisExperimentTemplateExperimentReportConfigurationOutputsToHclTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference | FisExperimentTemplateExperimentReportConfigurationOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_configuration: {
      value: fisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateExperimentReportConfigurationOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateExperimentReportConfigurationOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface FisExperimentTemplateExperimentReportConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}
  */
  readonly postExperimentDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}
  */
  readonly preExperimentDuration?: string;
  /**
  * data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}
  */
  readonly dataSources?: FisExperimentTemplateExperimentReportConfigurationDataSources;
  /**
  * outputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}
  */
  readonly outputs?: FisExperimentTemplateExperimentReportConfigurationOutputs;
}

export function fisExperimentTemplateExperimentReportConfigurationToTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationOutputReference | FisExperimentTemplateExperimentReportConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_experiment_duration: cdktf.stringToTerraform(struct!.postExperimentDuration),
    pre_experiment_duration: cdktf.stringToTerraform(struct!.preExperimentDuration),
    data_sources: fisExperimentTemplateExperimentReportConfigurationDataSourcesToTerraform(struct!.dataSources),
    outputs: fisExperimentTemplateExperimentReportConfigurationOutputsToTerraform(struct!.outputs),
  }
}


export function fisExperimentTemplateExperimentReportConfigurationToHclTerraform(struct?: FisExperimentTemplateExperimentReportConfigurationOutputReference | FisExperimentTemplateExperimentReportConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_experiment_duration: {
      value: cdktf.stringToHclTerraform(struct!.postExperimentDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_experiment_duration: {
      value: cdktf.stringToHclTerraform(struct!.preExperimentDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_sources: {
      value: fisExperimentTemplateExperimentReportConfigurationDataSourcesToHclTerraform(struct!.dataSources),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateExperimentReportConfigurationDataSourcesList",
    },
    outputs: {
      value: fisExperimentTemplateExperimentReportConfigurationOutputsToHclTerraform(struct!.outputs),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateExperimentReportConfigurationOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateExperimentReportConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateExperimentReportConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postExperimentDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.postExperimentDuration = this._postExperimentDuration;
    }
    if (this._preExperimentDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.preExperimentDuration = this._preExperimentDuration;
    }
    if (this._dataSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources?.internalValue;
    }
    if (this._outputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateExperimentReportConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postExperimentDuration = undefined;
      this._preExperimentDuration = undefined;
      this._dataSources.internalValue = undefined;
      this._outputs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postExperimentDuration = value.postExperimentDuration;
      this._preExperimentDuration = value.preExperimentDuration;
      this._dataSources.internalValue = value.dataSources;
      this._outputs.internalValue = value.outputs;
    }
  }

  // post_experiment_duration - computed: false, optional: true, required: false
  private _postExperimentDuration?: string; 
  public get postExperimentDuration() {
    return this.getStringAttribute('post_experiment_duration');
  }
  public set postExperimentDuration(value: string) {
    this._postExperimentDuration = value;
  }
  public resetPostExperimentDuration() {
    this._postExperimentDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postExperimentDurationInput() {
    return this._postExperimentDuration;
  }

  // pre_experiment_duration - computed: false, optional: true, required: false
  private _preExperimentDuration?: string; 
  public get preExperimentDuration() {
    return this.getStringAttribute('pre_experiment_duration');
  }
  public set preExperimentDuration(value: string) {
    this._preExperimentDuration = value;
  }
  public resetPreExperimentDuration() {
    this._preExperimentDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExperimentDurationInput() {
    return this._preExperimentDuration;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources = new FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: FisExperimentTemplateExperimentReportConfigurationDataSources) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: FisExperimentTemplateExperimentReportConfigurationOutputs) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }
}
export interface FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}
  */
  readonly logGroupArn: string;
}

export function fisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToTerraform(struct?: FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
  }
}


export function fisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToHclTerraform(struct?: FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference | FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupArn = value.logGroupArn;
    }
  }

  // log_group_arn - computed: false, optional: false, required: true
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }
}
export interface FisExperimentTemplateLogConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}
  */
  readonly prefix?: string;
}

export function fisExperimentTemplateLogConfigurationS3ConfigurationToTerraform(struct?: FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference | FisExperimentTemplateLogConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function fisExperimentTemplateLogConfigurationS3ConfigurationToHclTerraform(struct?: FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference | FisExperimentTemplateLogConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateLogConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateLogConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._prefix = value.prefix;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface FisExperimentTemplateLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}
  */
  readonly logSchemaVersion: number;
  /**
  * cloudwatch_logs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}
  */
  readonly cloudwatchLogsConfiguration?: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}
  */
  readonly s3Configuration?: FisExperimentTemplateLogConfigurationS3Configuration;
}

export function fisExperimentTemplateLogConfigurationToTerraform(struct?: FisExperimentTemplateLogConfigurationOutputReference | FisExperimentTemplateLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_schema_version: cdktf.numberToTerraform(struct!.logSchemaVersion),
    cloudwatch_logs_configuration: fisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToTerraform(struct!.cloudwatchLogsConfiguration),
    s3_configuration: fisExperimentTemplateLogConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}


export function fisExperimentTemplateLogConfigurationToHclTerraform(struct?: FisExperimentTemplateLogConfigurationOutputReference | FisExperimentTemplateLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_schema_version: {
      value: cdktf.numberToHclTerraform(struct!.logSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloudwatch_logs_configuration: {
      value: fisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationToHclTerraform(struct!.cloudwatchLogsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationList",
    },
    s3_configuration: {
      value: fisExperimentTemplateLogConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateLogConfigurationS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FisExperimentTemplateLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSchemaVersion = this._logSchemaVersion;
    }
    if (this._cloudwatchLogsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsConfiguration = this._cloudwatchLogsConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logSchemaVersion = undefined;
      this._cloudwatchLogsConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logSchemaVersion = value.logSchemaVersion;
      this._cloudwatchLogsConfiguration.internalValue = value.cloudwatchLogsConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // log_schema_version - computed: false, optional: false, required: true
  private _logSchemaVersion?: number; 
  public get logSchemaVersion() {
    return this.getNumberAttribute('log_schema_version');
  }
  public set logSchemaVersion(value: number) {
    this._logSchemaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSchemaVersionInput() {
    return this._logSchemaVersion;
  }

  // cloudwatch_logs_configuration - computed: false, optional: true, required: false
  private _cloudwatchLogsConfiguration = new FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(this, "cloudwatch_logs_configuration");
  public get cloudwatchLogsConfiguration() {
    return this._cloudwatchLogsConfiguration;
  }
  public putCloudwatchLogsConfiguration(value: FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration) {
    this._cloudwatchLogsConfiguration.internalValue = value;
  }
  public resetCloudwatchLogsConfiguration() {
    this._cloudwatchLogsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsConfigurationInput() {
    return this._cloudwatchLogsConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: FisExperimentTemplateLogConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}
export interface FisExperimentTemplateStopCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
  */
  readonly value?: string;
}

export function fisExperimentTemplateStopConditionToTerraform(struct?: FisExperimentTemplateStopCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fisExperimentTemplateStopConditionToHclTerraform(struct?: FisExperimentTemplateStopCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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

export class FisExperimentTemplateStopConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FisExperimentTemplateStopCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateStopCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._value = value.value;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

export class FisExperimentTemplateStopConditionList extends cdktf.ComplexList {
  public internalValue? : FisExperimentTemplateStopCondition[] | cdktf.IResolvable

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
  public get(index: number): FisExperimentTemplateStopConditionOutputReference {
    return new FisExperimentTemplateStopConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FisExperimentTemplateTargetFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}
  */
  readonly values: string[];
}

export function fisExperimentTemplateTargetFilterToTerraform(struct?: FisExperimentTemplateTargetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function fisExperimentTemplateTargetFilterToHclTerraform(struct?: FisExperimentTemplateTargetFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateTargetFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FisExperimentTemplateTargetFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateTargetFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._values = value.values;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class FisExperimentTemplateTargetFilterList extends cdktf.ComplexList {
  public internalValue? : FisExperimentTemplateTargetFilter[] | cdktf.IResolvable

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
  public get(index: number): FisExperimentTemplateTargetFilterOutputReference {
    return new FisExperimentTemplateTargetFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FisExperimentTemplateTargetResourceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}
  */
  readonly value: string;
}

export function fisExperimentTemplateTargetResourceTagToTerraform(struct?: FisExperimentTemplateTargetResourceTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fisExperimentTemplateTargetResourceTagToHclTerraform(struct?: FisExperimentTemplateTargetResourceTag | cdktf.IResolvable): any {
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

export class FisExperimentTemplateTargetResourceTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FisExperimentTemplateTargetResourceTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateTargetResourceTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FisExperimentTemplateTargetResourceTagList extends cdktf.ComplexList {
  public internalValue? : FisExperimentTemplateTargetResourceTag[] | cdktf.IResolvable

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
  public get(index: number): FisExperimentTemplateTargetResourceTagOutputReference {
    return new FisExperimentTemplateTargetResourceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FisExperimentTemplateTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}
  */
  readonly resourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}
  */
  readonly selectionMode: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#filter FisExperimentTemplate#filter}
  */
  readonly filter?: FisExperimentTemplateTargetFilter[] | cdktf.IResolvable;
  /**
  * resource_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#resource_tag FisExperimentTemplate#resource_tag}
  */
  readonly resourceTag?: FisExperimentTemplateTargetResourceTag[] | cdktf.IResolvable;
}

export function fisExperimentTemplateTargetToTerraform(struct?: FisExperimentTemplateTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    resource_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceArns),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    selection_mode: cdktf.stringToTerraform(struct!.selectionMode),
    filter: cdktf.listMapper(fisExperimentTemplateTargetFilterToTerraform, true)(struct!.filter),
    resource_tag: cdktf.listMapper(fisExperimentTemplateTargetResourceTagToTerraform, true)(struct!.resourceTag),
  }
}


export function fisExperimentTemplateTargetToHclTerraform(struct?: FisExperimentTemplateTarget | cdktf.IResolvable): any {
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
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_mode: {
      value: cdktf.stringToHclTerraform(struct!.selectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(fisExperimentTemplateTargetFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "FisExperimentTemplateTargetFilterList",
    },
    resource_tag: {
      value: cdktf.listMapperHcl(fisExperimentTemplateTargetResourceTagToHclTerraform, true)(struct!.resourceTag),
      isBlock: true,
      type: "set",
      storageClassType: "FisExperimentTemplateTargetResourceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FisExperimentTemplateTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FisExperimentTemplateTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resourceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArns = this._resourceArns;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._selectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionMode = this._selectionMode;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._resourceTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTag = this._resourceTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FisExperimentTemplateTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
      this._resourceArns = undefined;
      this._resourceType = undefined;
      this._selectionMode = undefined;
      this._filter.internalValue = undefined;
      this._resourceTag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
      this._resourceArns = value.resourceArns;
      this._resourceType = value.resourceType;
      this._selectionMode = value.selectionMode;
      this._filter.internalValue = value.filter;
      this._resourceTag.internalValue = value.resourceTag;
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // selection_mode - computed: false, optional: false, required: true
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new FisExperimentTemplateTargetFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: FisExperimentTemplateTargetFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // resource_tag - computed: false, optional: true, required: false
  private _resourceTag = new FisExperimentTemplateTargetResourceTagList(this, "resource_tag", true);
  public get resourceTag() {
    return this._resourceTag;
  }
  public putResourceTag(value: FisExperimentTemplateTargetResourceTag[] | cdktf.IResolvable) {
    this._resourceTag.internalValue = value;
  }
  public resetResourceTag() {
    this._resourceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagInput() {
    return this._resourceTag.internalValue;
  }
}

export class FisExperimentTemplateTargetList extends cdktf.ComplexList {
  public internalValue? : FisExperimentTemplateTarget[] | cdktf.IResolvable

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
  public get(index: number): FisExperimentTemplateTargetOutputReference {
    return new FisExperimentTemplateTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FisExperimentTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#create FisExperimentTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#delete FisExperimentTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#update FisExperimentTemplate#update}
  */
  readonly update?: string;
}

export function fisExperimentTemplateTimeoutsToTerraform(struct?: FisExperimentTemplateTimeouts | cdktf.IResolvable): any {
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


export function fisExperimentTemplateTimeoutsToHclTerraform(struct?: FisExperimentTemplateTimeouts | cdktf.IResolvable): any {
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

export class FisExperimentTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FisExperimentTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FisExperimentTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template aws_fis_experiment_template}
*/
export class FisExperimentTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fis_experiment_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FisExperimentTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FisExperimentTemplate to import
  * @param importFromId The id of the existing FisExperimentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FisExperimentTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_fis_experiment_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/fis_experiment_template aws_fis_experiment_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FisExperimentTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: FisExperimentTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fis_experiment_template',
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
    this._description = config.description;
    this._id = config.id;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._action.internalValue = config.action;
    this._experimentOptions.internalValue = config.experimentOptions;
    this._experimentReportConfiguration.internalValue = config.experimentReportConfiguration;
    this._logConfiguration.internalValue = config.logConfiguration;
    this._stopCondition.internalValue = config.stopCondition;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // action - computed: false, optional: false, required: true
  private _action = new FisExperimentTemplateActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: FisExperimentTemplateAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // experiment_options - computed: false, optional: true, required: false
  private _experimentOptions = new FisExperimentTemplateExperimentOptionsOutputReference(this, "experiment_options");
  public get experimentOptions() {
    return this._experimentOptions;
  }
  public putExperimentOptions(value: FisExperimentTemplateExperimentOptions) {
    this._experimentOptions.internalValue = value;
  }
  public resetExperimentOptions() {
    this._experimentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentOptionsInput() {
    return this._experimentOptions.internalValue;
  }

  // experiment_report_configuration - computed: false, optional: true, required: false
  private _experimentReportConfiguration = new FisExperimentTemplateExperimentReportConfigurationOutputReference(this, "experiment_report_configuration");
  public get experimentReportConfiguration() {
    return this._experimentReportConfiguration;
  }
  public putExperimentReportConfiguration(value: FisExperimentTemplateExperimentReportConfiguration) {
    this._experimentReportConfiguration.internalValue = value;
  }
  public resetExperimentReportConfiguration() {
    this._experimentReportConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentReportConfigurationInput() {
    return this._experimentReportConfiguration.internalValue;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new FisExperimentTemplateLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: FisExperimentTemplateLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // stop_condition - computed: false, optional: false, required: true
  private _stopCondition = new FisExperimentTemplateStopConditionList(this, "stop_condition", true);
  public get stopCondition() {
    return this._stopCondition;
  }
  public putStopCondition(value: FisExperimentTemplateStopCondition[] | cdktf.IResolvable) {
    this._stopCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopConditionInput() {
    return this._stopCondition.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new FisExperimentTemplateTargetList(this, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: FisExperimentTemplateTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FisExperimentTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FisExperimentTemplateTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      action: cdktf.listMapper(fisExperimentTemplateActionToTerraform, true)(this._action.internalValue),
      experiment_options: fisExperimentTemplateExperimentOptionsToTerraform(this._experimentOptions.internalValue),
      experiment_report_configuration: fisExperimentTemplateExperimentReportConfigurationToTerraform(this._experimentReportConfiguration.internalValue),
      log_configuration: fisExperimentTemplateLogConfigurationToTerraform(this._logConfiguration.internalValue),
      stop_condition: cdktf.listMapper(fisExperimentTemplateStopConditionToTerraform, true)(this._stopCondition.internalValue),
      target: cdktf.listMapper(fisExperimentTemplateTargetToTerraform, true)(this._target.internalValue),
      timeouts: fisExperimentTemplateTimeoutsToTerraform(this._timeouts.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      action: {
        value: cdktf.listMapperHcl(fisExperimentTemplateActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FisExperimentTemplateActionList",
      },
      experiment_options: {
        value: fisExperimentTemplateExperimentOptionsToHclTerraform(this._experimentOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FisExperimentTemplateExperimentOptionsList",
      },
      experiment_report_configuration: {
        value: fisExperimentTemplateExperimentReportConfigurationToHclTerraform(this._experimentReportConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FisExperimentTemplateExperimentReportConfigurationList",
      },
      log_configuration: {
        value: fisExperimentTemplateLogConfigurationToHclTerraform(this._logConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FisExperimentTemplateLogConfigurationList",
      },
      stop_condition: {
        value: cdktf.listMapperHcl(fisExperimentTemplateStopConditionToHclTerraform, true)(this._stopCondition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FisExperimentTemplateStopConditionList",
      },
      target: {
        value: cdktf.listMapperHcl(fisExperimentTemplateTargetToHclTerraform, true)(this._target.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FisExperimentTemplateTargetList",
      },
      timeouts: {
        value: fisExperimentTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FisExperimentTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
