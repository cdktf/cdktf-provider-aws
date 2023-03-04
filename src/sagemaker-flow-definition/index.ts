// https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerFlowDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}
  */
  readonly flowDefinitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#id SagemakerFlowDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * human_loop_activation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}
  */
  readonly humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig;
  /**
  * human_loop_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}
  */
  readonly humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfig;
  /**
  * human_loop_request_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}
  */
  readonly humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource;
  /**
  * output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}
  */
  readonly outputConfig: SagemakerFlowDefinitionOutputConfig;
}
export interface SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}
  */
  readonly humanLoopActivationConditions: string;
}

export function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_loop_activation_conditions: cdktf.stringToTerraform(struct!.humanLoopActivationConditions),
  }
}

export class SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanLoopActivationConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanLoopActivationConditions = this._humanLoopActivationConditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanLoopActivationConditions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanLoopActivationConditions = value.humanLoopActivationConditions;
    }
  }

  // human_loop_activation_conditions - computed: false, optional: false, required: true
  private _humanLoopActivationConditions?: string; 
  public get humanLoopActivationConditions() {
    return this.getStringAttribute('human_loop_activation_conditions');
  }
  public set humanLoopActivationConditions(value: string) {
    this._humanLoopActivationConditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConditionsInput() {
    return this._humanLoopActivationConditions;
  }
}
export interface SagemakerFlowDefinitionHumanLoopActivationConfig {
  /**
  * human_loop_activation_conditions_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}
  */
  readonly humanLoopActivationConditionsConfig?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
}

export function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_loop_activation_conditions_config: sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct!.humanLoopActivationConditionsConfig),
  }
}

export class SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFlowDefinitionHumanLoopActivationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanLoopActivationConditionsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanLoopActivationConditionsConfig = this._humanLoopActivationConditionsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFlowDefinitionHumanLoopActivationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanLoopActivationConditionsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanLoopActivationConditionsConfig.internalValue = value.humanLoopActivationConditionsConfig;
    }
  }

  // human_loop_activation_conditions_config - computed: false, optional: true, required: false
  private _humanLoopActivationConditionsConfig = new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(this, "human_loop_activation_conditions_config");
  public get humanLoopActivationConditionsConfig() {
    return this._humanLoopActivationConditionsConfig;
  }
  public putHumanLoopActivationConditionsConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig) {
    this._humanLoopActivationConditionsConfig.internalValue = value;
  }
  public resetHumanLoopActivationConditionsConfig() {
    this._humanLoopActivationConditionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConditionsConfigInput() {
    return this._humanLoopActivationConditionsConfig.internalValue;
  }
}
export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}
  */
  readonly cents?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}
  */
  readonly dollars?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}
  */
  readonly tenthFractionsOfACent?: number;
}

export function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cents: cdktf.numberToTerraform(struct!.cents),
    dollars: cdktf.numberToTerraform(struct!.dollars),
    tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct!.tenthFractionsOfACent),
  }
}

export class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cents !== undefined) {
      hasAnyValues = true;
      internalValueResult.cents = this._cents;
    }
    if (this._dollars !== undefined) {
      hasAnyValues = true;
      internalValueResult.dollars = this._dollars;
    }
    if (this._tenthFractionsOfACent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenthFractionsOfACent = this._tenthFractionsOfACent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cents = undefined;
      this._dollars = undefined;
      this._tenthFractionsOfACent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cents = value.cents;
      this._dollars = value.dollars;
      this._tenthFractionsOfACent = value.tenthFractionsOfACent;
    }
  }

  // cents - computed: false, optional: true, required: false
  private _cents?: number; 
  public get cents() {
    return this.getNumberAttribute('cents');
  }
  public set cents(value: number) {
    this._cents = value;
  }
  public resetCents() {
    this._cents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centsInput() {
    return this._cents;
  }

  // dollars - computed: false, optional: true, required: false
  private _dollars?: number; 
  public get dollars() {
    return this.getNumberAttribute('dollars');
  }
  public set dollars(value: number) {
    this._dollars = value;
  }
  public resetDollars() {
    this._dollars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarsInput() {
    return this._dollars;
  }

  // tenth_fractions_of_a_cent - computed: false, optional: true, required: false
  private _tenthFractionsOfACent?: number; 
  public get tenthFractionsOfACent() {
    return this.getNumberAttribute('tenth_fractions_of_a_cent');
  }
  public set tenthFractionsOfACent(value: number) {
    this._tenthFractionsOfACent = value;
  }
  public resetTenthFractionsOfACent() {
    this._tenthFractionsOfACent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenthFractionsOfACentInput() {
    return this._tenthFractionsOfACent;
  }
}
export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
  /**
  * amount_in_usd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#amount_in_usd SagemakerFlowDefinition#amount_in_usd}
  */
  readonly amountInUsd?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
}

export function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount_in_usd: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct!.amountInUsd),
  }
}

export class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amountInUsd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amountInUsd = this._amountInUsd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amountInUsd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amountInUsd.internalValue = value.amountInUsd;
    }
  }

  // amount_in_usd - computed: false, optional: true, required: false
  private _amountInUsd = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(this, "amount_in_usd");
  public get amountInUsd() {
    return this._amountInUsd;
  }
  public putAmountInUsd(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd) {
    this._amountInUsd.internalValue = value;
  }
  public resetAmountInUsd() {
    this._amountInUsd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInUsdInput() {
    return this._amountInUsd.internalValue;
  }
}
export interface SagemakerFlowDefinitionHumanLoopConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}
  */
  readonly humanTaskUiArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}
  */
  readonly taskAvailabilityLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}
  */
  readonly taskCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}
  */
  readonly taskDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}
  */
  readonly taskKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}
  */
  readonly taskTimeLimitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}
  */
  readonly taskTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}
  */
  readonly workteamArn: string;
  /**
  * public_workforce_task_price block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}
  */
  readonly publicWorkforceTaskPrice?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
}

export function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigOutputReference | SagemakerFlowDefinitionHumanLoopConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_task_ui_arn: cdktf.stringToTerraform(struct!.humanTaskUiArn),
    task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct!.taskAvailabilityLifetimeInSeconds),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_description: cdktf.stringToTerraform(struct!.taskDescription),
    task_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taskKeywords),
    task_time_limit_in_seconds: cdktf.numberToTerraform(struct!.taskTimeLimitInSeconds),
    task_title: cdktf.stringToTerraform(struct!.taskTitle),
    workteam_arn: cdktf.stringToTerraform(struct!.workteamArn),
    public_workforce_task_price: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct!.publicWorkforceTaskPrice),
  }
}

export class SagemakerFlowDefinitionHumanLoopConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFlowDefinitionHumanLoopConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanTaskUiArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanTaskUiArn = this._humanTaskUiArn;
    }
    if (this._taskAvailabilityLifetimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskAvailabilityLifetimeInSeconds = this._taskAvailabilityLifetimeInSeconds;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDescription = this._taskDescription;
    }
    if (this._taskKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKeywords = this._taskKeywords;
    }
    if (this._taskTimeLimitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTimeLimitInSeconds = this._taskTimeLimitInSeconds;
    }
    if (this._taskTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTitle = this._taskTitle;
    }
    if (this._workteamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.workteamArn = this._workteamArn;
    }
    if (this._publicWorkforceTaskPrice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicWorkforceTaskPrice = this._publicWorkforceTaskPrice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFlowDefinitionHumanLoopConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanTaskUiArn = undefined;
      this._taskAvailabilityLifetimeInSeconds = undefined;
      this._taskCount = undefined;
      this._taskDescription = undefined;
      this._taskKeywords = undefined;
      this._taskTimeLimitInSeconds = undefined;
      this._taskTitle = undefined;
      this._workteamArn = undefined;
      this._publicWorkforceTaskPrice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanTaskUiArn = value.humanTaskUiArn;
      this._taskAvailabilityLifetimeInSeconds = value.taskAvailabilityLifetimeInSeconds;
      this._taskCount = value.taskCount;
      this._taskDescription = value.taskDescription;
      this._taskKeywords = value.taskKeywords;
      this._taskTimeLimitInSeconds = value.taskTimeLimitInSeconds;
      this._taskTitle = value.taskTitle;
      this._workteamArn = value.workteamArn;
      this._publicWorkforceTaskPrice.internalValue = value.publicWorkforceTaskPrice;
    }
  }

  // human_task_ui_arn - computed: false, optional: false, required: true
  private _humanTaskUiArn?: string; 
  public get humanTaskUiArn() {
    return this.getStringAttribute('human_task_ui_arn');
  }
  public set humanTaskUiArn(value: string) {
    this._humanTaskUiArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskUiArnInput() {
    return this._humanTaskUiArn;
  }

  // task_availability_lifetime_in_seconds - computed: false, optional: true, required: false
  private _taskAvailabilityLifetimeInSeconds?: number; 
  public get taskAvailabilityLifetimeInSeconds() {
    return this.getNumberAttribute('task_availability_lifetime_in_seconds');
  }
  public set taskAvailabilityLifetimeInSeconds(value: number) {
    this._taskAvailabilityLifetimeInSeconds = value;
  }
  public resetTaskAvailabilityLifetimeInSeconds() {
    this._taskAvailabilityLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAvailabilityLifetimeInSecondsInput() {
    return this._taskAvailabilityLifetimeInSeconds;
  }

  // task_count - computed: false, optional: false, required: true
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_description - computed: false, optional: false, required: true
  private _taskDescription?: string; 
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }
  public set taskDescription(value: string) {
    this._taskDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDescriptionInput() {
    return this._taskDescription;
  }

  // task_keywords - computed: false, optional: true, required: false
  private _taskKeywords?: string[]; 
  public get taskKeywords() {
    return cdktf.Fn.tolist(this.getListAttribute('task_keywords'));
  }
  public set taskKeywords(value: string[]) {
    this._taskKeywords = value;
  }
  public resetTaskKeywords() {
    this._taskKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeywordsInput() {
    return this._taskKeywords;
  }

  // task_time_limit_in_seconds - computed: false, optional: true, required: false
  private _taskTimeLimitInSeconds?: number; 
  public get taskTimeLimitInSeconds() {
    return this.getNumberAttribute('task_time_limit_in_seconds');
  }
  public set taskTimeLimitInSeconds(value: number) {
    this._taskTimeLimitInSeconds = value;
  }
  public resetTaskTimeLimitInSeconds() {
    this._taskTimeLimitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeLimitInSecondsInput() {
    return this._taskTimeLimitInSeconds;
  }

  // task_title - computed: false, optional: false, required: true
  private _taskTitle?: string; 
  public get taskTitle() {
    return this.getStringAttribute('task_title');
  }
  public set taskTitle(value: string) {
    this._taskTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTitleInput() {
    return this._taskTitle;
  }

  // workteam_arn - computed: false, optional: false, required: true
  private _workteamArn?: string; 
  public get workteamArn() {
    return this.getStringAttribute('workteam_arn');
  }
  public set workteamArn(value: string) {
    this._workteamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamArnInput() {
    return this._workteamArn;
  }

  // public_workforce_task_price - computed: false, optional: true, required: false
  private _publicWorkforceTaskPrice = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(this, "public_workforce_task_price");
  public get publicWorkforceTaskPrice() {
    return this._publicWorkforceTaskPrice;
  }
  public putPublicWorkforceTaskPrice(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice) {
    this._publicWorkforceTaskPrice.internalValue = value;
  }
  public resetPublicWorkforceTaskPrice() {
    this._publicWorkforceTaskPrice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicWorkforceTaskPriceInput() {
    return this._publicWorkforceTaskPrice.internalValue;
  }
}
export interface SagemakerFlowDefinitionHumanLoopRequestSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}
  */
  readonly awsManagedHumanLoopRequestSource: string;
}

export function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference | SagemakerFlowDefinitionHumanLoopRequestSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_managed_human_loop_request_source: cdktf.stringToTerraform(struct!.awsManagedHumanLoopRequestSource),
  }
}

export class SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFlowDefinitionHumanLoopRequestSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsManagedHumanLoopRequestSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsManagedHumanLoopRequestSource = this._awsManagedHumanLoopRequestSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFlowDefinitionHumanLoopRequestSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsManagedHumanLoopRequestSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsManagedHumanLoopRequestSource = value.awsManagedHumanLoopRequestSource;
    }
  }

  // aws_managed_human_loop_request_source - computed: false, optional: false, required: true
  private _awsManagedHumanLoopRequestSource?: string; 
  public get awsManagedHumanLoopRequestSource() {
    return this.getStringAttribute('aws_managed_human_loop_request_source');
  }
  public set awsManagedHumanLoopRequestSource(value: string) {
    this._awsManagedHumanLoopRequestSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedHumanLoopRequestSourceInput() {
    return this._awsManagedHumanLoopRequestSource;
  }
}
export interface SagemakerFlowDefinitionOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerFlowDefinitionOutputConfigToTerraform(struct?: SagemakerFlowDefinitionOutputConfigOutputReference | SagemakerFlowDefinitionOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export class SagemakerFlowDefinitionOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFlowDefinitionOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFlowDefinitionOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition aws_sagemaker_flow_definition}
*/
export class SagemakerFlowDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_flow_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition aws_sagemaker_flow_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerFlowDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerFlowDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_flow_definition',
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
    this._flowDefinitionName = config.flowDefinitionName;
    this._id = config.id;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._humanLoopActivationConfig.internalValue = config.humanLoopActivationConfig;
    this._humanLoopConfig.internalValue = config.humanLoopConfig;
    this._humanLoopRequestSource.internalValue = config.humanLoopRequestSource;
    this._outputConfig.internalValue = config.outputConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // flow_definition_name - computed: false, optional: false, required: true
  private _flowDefinitionName?: string; 
  public get flowDefinitionName() {
    return this.getStringAttribute('flow_definition_name');
  }
  public set flowDefinitionName(value: string) {
    this._flowDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionNameInput() {
    return this._flowDefinitionName;
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

  // human_loop_activation_config - computed: false, optional: true, required: false
  private _humanLoopActivationConfig = new SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(this, "human_loop_activation_config");
  public get humanLoopActivationConfig() {
    return this._humanLoopActivationConfig;
  }
  public putHumanLoopActivationConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfig) {
    this._humanLoopActivationConfig.internalValue = value;
  }
  public resetHumanLoopActivationConfig() {
    this._humanLoopActivationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConfigInput() {
    return this._humanLoopActivationConfig.internalValue;
  }

  // human_loop_config - computed: false, optional: false, required: true
  private _humanLoopConfig = new SagemakerFlowDefinitionHumanLoopConfigOutputReference(this, "human_loop_config");
  public get humanLoopConfig() {
    return this._humanLoopConfig;
  }
  public putHumanLoopConfig(value: SagemakerFlowDefinitionHumanLoopConfig) {
    this._humanLoopConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopConfigInput() {
    return this._humanLoopConfig.internalValue;
  }

  // human_loop_request_source - computed: false, optional: true, required: false
  private _humanLoopRequestSource = new SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(this, "human_loop_request_source");
  public get humanLoopRequestSource() {
    return this._humanLoopRequestSource;
  }
  public putHumanLoopRequestSource(value: SagemakerFlowDefinitionHumanLoopRequestSource) {
    this._humanLoopRequestSource.internalValue = value;
  }
  public resetHumanLoopRequestSource() {
    this._humanLoopRequestSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopRequestSourceInput() {
    return this._humanLoopRequestSource.internalValue;
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig = new SagemakerFlowDefinitionOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: SagemakerFlowDefinitionOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_definition_name: cdktf.stringToTerraform(this._flowDefinitionName),
      id: cdktf.stringToTerraform(this._id),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      human_loop_activation_config: sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(this._humanLoopActivationConfig.internalValue),
      human_loop_config: sagemakerFlowDefinitionHumanLoopConfigToTerraform(this._humanLoopConfig.internalValue),
      human_loop_request_source: sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(this._humanLoopRequestSource.internalValue),
      output_config: sagemakerFlowDefinitionOutputConfigToTerraform(this._outputConfig.internalValue),
    };
  }
}
