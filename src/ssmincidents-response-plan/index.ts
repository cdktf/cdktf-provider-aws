// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmincidentsResponsePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}
  */
  readonly chatChannel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}
  */
  readonly engagements?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#id SsmincidentsResponsePlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#tags_all SsmincidentsResponsePlan#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#action SsmincidentsResponsePlan#action}
  */
  readonly action?: SsmincidentsResponsePlanAction;
  /**
  * incident_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}
  */
  readonly incidentTemplate: SsmincidentsResponsePlanIncidentTemplate;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#integration SsmincidentsResponsePlan#integration}
  */
  readonly integration?: SsmincidentsResponsePlanIntegration;
}
export interface SsmincidentsResponsePlanActionSsmAutomationParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}
  */
  readonly values: string[];
}

export function ssmincidentsResponsePlanActionSsmAutomationParameterToTerraform(struct?: SsmincidentsResponsePlanActionSsmAutomationParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanActionSsmAutomationParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanActionSsmAutomationParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

export class SsmincidentsResponsePlanActionSsmAutomationParameterList extends cdktf.ComplexList {
  public internalValue? : SsmincidentsResponsePlanActionSsmAutomationParameter[] | cdktf.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference {
    return new SsmincidentsResponsePlanActionSsmAutomationParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanActionSsmAutomation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}
  */
  readonly documentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}
  */
  readonly dynamicParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}
  */
  readonly targetAccount?: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#parameter SsmincidentsResponsePlan#parameter}
  */
  readonly parameter?: SsmincidentsResponsePlanActionSsmAutomationParameter[] | cdktf.IResolvable;
}

export function ssmincidentsResponsePlanActionSsmAutomationToTerraform(struct?: SsmincidentsResponsePlanActionSsmAutomation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_name: cdktf.stringToTerraform(struct!.documentName),
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    dynamic_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dynamicParameters),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_account: cdktf.stringToTerraform(struct!.targetAccount),
    parameter: cdktf.listMapper(ssmincidentsResponsePlanActionSsmAutomationParameterToTerraform, true)(struct!.parameter),
  }
}

export class SsmincidentsResponsePlanActionSsmAutomationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanActionSsmAutomation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentName = this._documentName;
    }
    if (this._documentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentVersion = this._documentVersion;
    }
    if (this._dynamicParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParameters = this._dynamicParameters;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccount = this._targetAccount;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanActionSsmAutomation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentName = undefined;
      this._documentVersion = undefined;
      this._dynamicParameters = undefined;
      this._roleArn = undefined;
      this._targetAccount = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentName = value.documentName;
      this._documentVersion = value.documentVersion;
      this._dynamicParameters = value.dynamicParameters;
      this._roleArn = value.roleArn;
      this._targetAccount = value.targetAccount;
      this._parameter.internalValue = value.parameter;
    }
  }

  // document_name - computed: false, optional: false, required: true
  private _documentName?: string; 
  public get documentName() {
    return this.getStringAttribute('document_name');
  }
  public set documentName(value: string) {
    this._documentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentNameInput() {
    return this._documentName;
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
  }

  // dynamic_parameters - computed: false, optional: true, required: false
  private _dynamicParameters?: { [key: string]: string }; 
  public get dynamicParameters() {
    return this.getStringMapAttribute('dynamic_parameters');
  }
  public set dynamicParameters(value: { [key: string]: string }) {
    this._dynamicParameters = value;
  }
  public resetDynamicParameters() {
    this._dynamicParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParametersInput() {
    return this._dynamicParameters;
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

  // target_account - computed: false, optional: true, required: false
  private _targetAccount?: string; 
  public get targetAccount() {
    return this.getStringAttribute('target_account');
  }
  public set targetAccount(value: string) {
    this._targetAccount = value;
  }
  public resetTargetAccount() {
    this._targetAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountInput() {
    return this._targetAccount;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new SsmincidentsResponsePlanActionSsmAutomationParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: SsmincidentsResponsePlanActionSsmAutomationParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class SsmincidentsResponsePlanActionSsmAutomationList extends cdktf.ComplexList {
  public internalValue? : SsmincidentsResponsePlanActionSsmAutomation[] | cdktf.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanActionSsmAutomationOutputReference {
    return new SsmincidentsResponsePlanActionSsmAutomationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanAction {
  /**
  * ssm_automation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}
  */
  readonly ssmAutomation?: SsmincidentsResponsePlanActionSsmAutomation[] | cdktf.IResolvable;
}

export function ssmincidentsResponsePlanActionToTerraform(struct?: SsmincidentsResponsePlanActionOutputReference | SsmincidentsResponsePlanAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssm_automation: cdktf.listMapper(ssmincidentsResponsePlanActionSsmAutomationToTerraform, true)(struct!.ssmAutomation),
  }
}

export class SsmincidentsResponsePlanActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmincidentsResponsePlanAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssmAutomation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmAutomation = this._ssmAutomation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssmAutomation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssmAutomation.internalValue = value.ssmAutomation;
    }
  }

  // ssm_automation - computed: false, optional: true, required: false
  private _ssmAutomation = new SsmincidentsResponsePlanActionSsmAutomationList(this, "ssm_automation", false);
  public get ssmAutomation() {
    return this._ssmAutomation;
  }
  public putSsmAutomation(value: SsmincidentsResponsePlanActionSsmAutomation[] | cdktf.IResolvable) {
    this._ssmAutomation.internalValue = value;
  }
  public resetSsmAutomation() {
    this._ssmAutomation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmAutomationInput() {
    return this._ssmAutomation.internalValue;
  }
}
export interface SsmincidentsResponsePlanIncidentTemplateNotificationTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}

export function ssmincidentsResponsePlanIncidentTemplateNotificationTargetToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateNotificationTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}

export class SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanIncidentTemplateNotificationTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIncidentTemplateNotificationTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class SsmincidentsResponsePlanIncidentTemplateNotificationTargetList extends cdktf.ComplexList {
  public internalValue? : SsmincidentsResponsePlanIncidentTemplateNotificationTarget[] | cdktf.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference {
    return new SsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanIncidentTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}
  */
  readonly dedupeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}
  */
  readonly impact: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}
  */
  readonly incidentTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}
  */
  readonly title: string;
  /**
  * notification_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#notification_target SsmincidentsResponsePlan#notification_target}
  */
  readonly notificationTarget?: SsmincidentsResponsePlanIncidentTemplateNotificationTarget[] | cdktf.IResolvable;
}

export function ssmincidentsResponsePlanIncidentTemplateToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateOutputReference | SsmincidentsResponsePlanIncidentTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedupe_string: cdktf.stringToTerraform(struct!.dedupeString),
    impact: cdktf.numberToTerraform(struct!.impact),
    incident_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.incidentTags),
    summary: cdktf.stringToTerraform(struct!.summary),
    title: cdktf.stringToTerraform(struct!.title),
    notification_target: cdktf.listMapper(ssmincidentsResponsePlanIncidentTemplateNotificationTargetToTerraform, true)(struct!.notificationTarget),
  }
}

export class SsmincidentsResponsePlanIncidentTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmincidentsResponsePlanIncidentTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedupeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeString = this._dedupeString;
    }
    if (this._impact !== undefined) {
      hasAnyValues = true;
      internalValueResult.impact = this._impact;
    }
    if (this._incidentTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentTags = this._incidentTags;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._notificationTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTarget = this._notificationTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIncidentTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedupeString = undefined;
      this._impact = undefined;
      this._incidentTags = undefined;
      this._summary = undefined;
      this._title = undefined;
      this._notificationTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedupeString = value.dedupeString;
      this._impact = value.impact;
      this._incidentTags = value.incidentTags;
      this._summary = value.summary;
      this._title = value.title;
      this._notificationTarget.internalValue = value.notificationTarget;
    }
  }

  // dedupe_string - computed: false, optional: true, required: false
  private _dedupeString?: string; 
  public get dedupeString() {
    return this.getStringAttribute('dedupe_string');
  }
  public set dedupeString(value: string) {
    this._dedupeString = value;
  }
  public resetDedupeString() {
    this._dedupeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeStringInput() {
    return this._dedupeString;
  }

  // impact - computed: false, optional: false, required: true
  private _impact?: number; 
  public get impact() {
    return this.getNumberAttribute('impact');
  }
  public set impact(value: number) {
    this._impact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impactInput() {
    return this._impact;
  }

  // incident_tags - computed: false, optional: true, required: false
  private _incidentTags?: { [key: string]: string }; 
  public get incidentTags() {
    return this.getStringMapAttribute('incident_tags');
  }
  public set incidentTags(value: { [key: string]: string }) {
    this._incidentTags = value;
  }
  public resetIncidentTags() {
    this._incidentTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTagsInput() {
    return this._incidentTags;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // notification_target - computed: false, optional: true, required: false
  private _notificationTarget = new SsmincidentsResponsePlanIncidentTemplateNotificationTargetList(this, "notification_target", true);
  public get notificationTarget() {
    return this._notificationTarget;
  }
  public putNotificationTarget(value: SsmincidentsResponsePlanIncidentTemplateNotificationTarget[] | cdktf.IResolvable) {
    this._notificationTarget.internalValue = value;
  }
  public resetNotificationTarget() {
    this._notificationTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetInput() {
    return this._notificationTarget.internalValue;
  }
}
export interface SsmincidentsResponsePlanIntegrationPagerduty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}
  */
  readonly serviceId: string;
}

export function ssmincidentsResponsePlanIntegrationPagerdutyToTerraform(struct?: SsmincidentsResponsePlanIntegrationPagerduty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
  }
}

export class SsmincidentsResponsePlanIntegrationPagerdutyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanIntegrationPagerduty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIntegrationPagerduty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretId = undefined;
      this._serviceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretId = value.secretId;
      this._serviceId = value.serviceId;
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

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}

export class SsmincidentsResponsePlanIntegrationPagerdutyList extends cdktf.ComplexList {
  public internalValue? : SsmincidentsResponsePlanIntegrationPagerduty[] | cdktf.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanIntegrationPagerdutyOutputReference {
    return new SsmincidentsResponsePlanIntegrationPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanIntegration {
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan#pagerduty SsmincidentsResponsePlan#pagerduty}
  */
  readonly pagerduty?: SsmincidentsResponsePlanIntegrationPagerduty[] | cdktf.IResolvable;
}

export function ssmincidentsResponsePlanIntegrationToTerraform(struct?: SsmincidentsResponsePlanIntegrationOutputReference | SsmincidentsResponsePlanIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pagerduty: cdktf.listMapper(ssmincidentsResponsePlanIntegrationPagerdutyToTerraform, true)(struct!.pagerduty),
  }
}

export class SsmincidentsResponsePlanIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmincidentsResponsePlanIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pagerduty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerduty = this._pagerduty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pagerduty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pagerduty.internalValue = value.pagerduty;
    }
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new SsmincidentsResponsePlanIntegrationPagerdutyList(this, "pagerduty", false);
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: SsmincidentsResponsePlanIntegrationPagerduty[] | cdktf.IResolvable) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan}
*/
export class SsmincidentsResponsePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssmincidents_response_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/ssmincidents_response_plan aws_ssmincidents_response_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmincidentsResponsePlanConfig
  */
  public constructor(scope: Construct, id: string, config: SsmincidentsResponsePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssmincidents_response_plan',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._chatChannel = config.chatChannel;
    this._displayName = config.displayName;
    this._engagements = config.engagements;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._action.internalValue = config.action;
    this._incidentTemplate.internalValue = config.incidentTemplate;
    this._integration.internalValue = config.integration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chat_channel - computed: false, optional: true, required: false
  private _chatChannel?: string[]; 
  public get chatChannel() {
    return cdktf.Fn.tolist(this.getListAttribute('chat_channel'));
  }
  public set chatChannel(value: string[]) {
    this._chatChannel = value;
  }
  public resetChatChannel() {
    this._chatChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatChannelInput() {
    return this._chatChannel;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // engagements - computed: false, optional: true, required: false
  private _engagements?: string[]; 
  public get engagements() {
    return cdktf.Fn.tolist(this.getListAttribute('engagements'));
  }
  public set engagements(value: string[]) {
    this._engagements = value;
  }
  public resetEngagements() {
    this._engagements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementsInput() {
    return this._engagements;
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

  // action - computed: false, optional: true, required: false
  private _action = new SsmincidentsResponsePlanActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SsmincidentsResponsePlanAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // incident_template - computed: false, optional: false, required: true
  private _incidentTemplate = new SsmincidentsResponsePlanIncidentTemplateOutputReference(this, "incident_template");
  public get incidentTemplate() {
    return this._incidentTemplate;
  }
  public putIncidentTemplate(value: SsmincidentsResponsePlanIncidentTemplate) {
    this._incidentTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTemplateInput() {
    return this._incidentTemplate.internalValue;
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new SsmincidentsResponsePlanIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: SsmincidentsResponsePlanIntegration) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chat_channel: cdktf.listMapper(cdktf.stringToTerraform, false)(this._chatChannel),
      display_name: cdktf.stringToTerraform(this._displayName),
      engagements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._engagements),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      action: ssmincidentsResponsePlanActionToTerraform(this._action.internalValue),
      incident_template: ssmincidentsResponsePlanIncidentTemplateToTerraform(this._incidentTemplate.internalValue),
      integration: ssmincidentsResponsePlanIntegrationToTerraform(this._integration.internalValue),
    };
  }
}
