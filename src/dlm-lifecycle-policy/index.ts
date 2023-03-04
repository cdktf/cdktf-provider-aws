// https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlmLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description DlmLifecyclePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#execution_role_arn DlmLifecyclePolicy#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#id DlmLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#state DlmLifecyclePolicy#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags DlmLifecyclePolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_all DlmLifecyclePolicy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * policy_details block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_details DlmLifecyclePolicy#policy_details}
  */
  readonly policyDetails: DlmLifecyclePolicyPolicyDetails;
}
export interface DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
  */
  readonly target: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encryption_configuration DlmLifecyclePolicy#encryption_configuration}
  */
  readonly encryptionConfiguration: DlmLifecyclePolicyPolicyDetailsActionCrossRegionCopyEncryptionConfiguration;
  /**
  * retain_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * cross_region_copy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cross_region_copy DlmLifecyclePolicy#cross_region_copy}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#description_regex DlmLifecyclePolicy#description_regex}
  */
  readonly descriptionRegex: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_type DlmLifecyclePolicy#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#snapshot_owner DlmLifecyclePolicy#snapshot_owner}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#type DlmLifecyclePolicy#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
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
export interface DlmLifecyclePolicyPolicyDetailsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#exclude_boot_volume DlmLifecyclePolicy#exclude_boot_volume}
  */
  readonly excludeBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#no_reboot DlmLifecyclePolicy#no_reboot}
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
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cron_expression DlmLifecyclePolicy#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
  */
  readonly intervalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#location DlmLifecyclePolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#times DlmLifecyclePolicy#times}
  */
  readonly times?: string[];
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
  }
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
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._interval = value.interval;
      this._intervalUnit = value.intervalUnit;
      this._location = value.location;
      this._times = value.times;
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
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cmk_arn DlmLifecyclePolicy#cmk_arn}
  */
  readonly cmkArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#encrypted DlmLifecyclePolicy#encrypted}
  */
  readonly encrypted: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target DlmLifecyclePolicy#target}
  */
  readonly target: string;
  /**
  * deprecate_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRule;
  /**
  * retain_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
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
    deprecate_rule: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform(struct!.deprecateRule),
    retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform(struct!.retainRule),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#availability_zones DlmLifecyclePolicy#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#count DlmLifecyclePolicy#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval DlmLifecyclePolicy#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#interval_unit DlmLifecyclePolicy#interval_unit}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_accounts DlmLifecyclePolicy#target_accounts}
  */
  readonly targetAccounts: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval DlmLifecyclePolicy#unshare_interval}
  */
  readonly unshareInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#unshare_interval_unit DlmLifecyclePolicy#unshare_interval_unit}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#copy_tags DlmLifecyclePolicy#copy_tags}
  */
  readonly copyTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#name DlmLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#tags_to_add DlmLifecyclePolicy#tags_to_add}
  */
  readonly tagsToAdd?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#variable_tags DlmLifecyclePolicy#variable_tags}
  */
  readonly variableTags?: { [key: string]: string };
  /**
  * create_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#create_rule DlmLifecyclePolicy#create_rule}
  */
  readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule;
  /**
  * cross_region_copy_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#cross_region_copy_rule DlmLifecyclePolicy#cross_region_copy_rule}
  */
  readonly crossRegionCopyRule?: DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRule[] | cdktf.IResolvable;
  /**
  * deprecate_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#deprecate_rule DlmLifecyclePolicy#deprecate_rule}
  */
  readonly deprecateRule?: DlmLifecyclePolicyPolicyDetailsScheduleDeprecateRule;
  /**
  * fast_restore_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#fast_restore_rule DlmLifecyclePolicy#fast_restore_rule}
  */
  readonly fastRestoreRule?: DlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRule;
  /**
  * retain_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#retain_rule DlmLifecyclePolicy#retain_rule}
  */
  readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule;
  /**
  * share_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#share_rule DlmLifecyclePolicy#share_rule}
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
    create_rule: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct!.createRule),
    cross_region_copy_rule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform, true)(struct!.crossRegionCopyRule),
    deprecate_rule: dlmLifecyclePolicyPolicyDetailsScheduleDeprecateRuleToTerraform(struct!.deprecateRule),
    fast_restore_rule: dlmLifecyclePolicyPolicyDetailsScheduleFastRestoreRuleToTerraform(struct!.fastRestoreRule),
    retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct!.retainRule),
    share_rule: dlmLifecyclePolicyPolicyDetailsScheduleShareRuleToTerraform(struct!.shareRule),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#policy_type DlmLifecyclePolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_locations DlmLifecyclePolicy#resource_locations}
  */
  readonly resourceLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#resource_types DlmLifecyclePolicy#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#target_tags DlmLifecyclePolicy#target_tags}
  */
  readonly targetTags?: { [key: string]: string };
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#action DlmLifecyclePolicy#action}
  */
  readonly action?: DlmLifecyclePolicyPolicyDetailsAction;
  /**
  * event_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#event_source DlmLifecyclePolicy#event_source}
  */
  readonly eventSource?: DlmLifecyclePolicyPolicyDetailsEventSource;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#parameters DlmLifecyclePolicy#parameters}
  */
  readonly parameters?: DlmLifecyclePolicyPolicyDetailsParameters;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy#schedule DlmLifecyclePolicy#schedule}
  */
  readonly schedule?: DlmLifecyclePolicyPolicyDetailsSchedule[] | cdktf.IResolvable;
}

export function dlmLifecyclePolicyPolicyDetailsToTerraform(struct?: DlmLifecyclePolicyPolicyDetailsOutputReference | DlmLifecyclePolicyPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    resource_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceLocations),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    target_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.targetTags),
    action: dlmLifecyclePolicyPolicyDetailsActionToTerraform(struct!.action),
    event_source: dlmLifecyclePolicyPolicyDetailsEventSourceToTerraform(struct!.eventSource),
    parameters: dlmLifecyclePolicyPolicyDetailsParametersToTerraform(struct!.parameters),
    schedule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleToTerraform, true)(struct!.schedule),
  }
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
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._resourceLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLocations = this._resourceLocations;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
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
      this._policyType = undefined;
      this._resourceLocations = undefined;
      this._resourceTypes = undefined;
      this._targetTags = undefined;
      this._action.internalValue = undefined;
      this._eventSource.internalValue = undefined;
      this._parameters.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyType = value.policyType;
      this._resourceLocations = value.resourceLocations;
      this._resourceTypes = value.resourceTypes;
      this._targetTags = value.targetTags;
      this._action.internalValue = value.action;
      this._eventSource.internalValue = value.eventSource;
      this._parameters.internalValue = value.parameters;
      this._schedule.internalValue = value.schedule;
    }
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy aws_dlm_lifecycle_policy}
*/
export class DlmLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dlm_lifecycle_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy aws_dlm_lifecycle_policy} Resource
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
        providerVersion: '4.57.0',
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
    this._description = config.description;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
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
      description: cdktf.stringToTerraform(this._description),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      policy_details: dlmLifecyclePolicyPolicyDetailsToTerraform(this._policyDetails.internalValue),
    };
  }
}
