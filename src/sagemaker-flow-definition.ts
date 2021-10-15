// https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerFlowDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#flow_definition_name SagemakerFlowDefinition#flow_definition_name}
  */
  readonly flowDefinitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#role_arn SagemakerFlowDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags SagemakerFlowDefinition#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags_all SagemakerFlowDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * human_loop_activation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}
  */
  readonly humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig[];
  /**
  * human_loop_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_config SagemakerFlowDefinition#human_loop_config}
  */
  readonly humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfig[];
  /**
  * human_loop_request_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}
  */
  readonly humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource[];
  /**
  * output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#output_config SagemakerFlowDefinition#output_config}
  */
  readonly outputConfig: SagemakerFlowDefinitionOutputConfig[];
}
export interface SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}
  */
  readonly humanLoopActivationConditions: string;
}

function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    human_loop_activation_conditions: cdktf.stringToTerraform(struct!.humanLoopActivationConditions),
  }
}

export interface SagemakerFlowDefinitionHumanLoopActivationConfig {
  /**
  * human_loop_activation_conditions_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}
  */
  readonly humanLoopActivationConditionsConfig?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig[];
}

function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    human_loop_activation_conditions_config: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform)(struct!.humanLoopActivationConditionsConfig),
  }
}

export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#cents SagemakerFlowDefinition#cents}
  */
  readonly cents?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#dollars SagemakerFlowDefinition#dollars}
  */
  readonly dollars?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}
  */
  readonly tenthFractionsOfACent?: number;
}

function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cents: cdktf.numberToTerraform(struct!.cents),
    dollars: cdktf.numberToTerraform(struct!.dollars),
    tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct!.tenthFractionsOfACent),
  }
}

export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
  /**
  * amount_in_usd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#amount_in_usd SagemakerFlowDefinition#amount_in_usd}
  */
  readonly amountInUsd?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd[];
}

function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amount_in_usd: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform)(struct!.amountInUsd),
  }
}

export interface SagemakerFlowDefinitionHumanLoopConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}
  */
  readonly humanTaskUiArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}
  */
  readonly taskAvailabilityLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_count SagemakerFlowDefinition#task_count}
  */
  readonly taskCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_description SagemakerFlowDefinition#task_description}
  */
  readonly taskDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_keywords SagemakerFlowDefinition#task_keywords}
  */
  readonly taskKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}
  */
  readonly taskTimeLimitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_title SagemakerFlowDefinition#task_title}
  */
  readonly taskTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#workteam_arn SagemakerFlowDefinition#workteam_arn}
  */
  readonly workteamArn: string;
  /**
  * public_workforce_task_price block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}
  */
  readonly publicWorkforceTaskPrice?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice[];
}

function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    human_task_ui_arn: cdktf.stringToTerraform(struct!.humanTaskUiArn),
    task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct!.taskAvailabilityLifetimeInSeconds),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_description: cdktf.stringToTerraform(struct!.taskDescription),
    task_keywords: cdktf.listMapper(cdktf.stringToTerraform)(struct!.taskKeywords),
    task_time_limit_in_seconds: cdktf.numberToTerraform(struct!.taskTimeLimitInSeconds),
    task_title: cdktf.stringToTerraform(struct!.taskTitle),
    workteam_arn: cdktf.stringToTerraform(struct!.workteamArn),
    public_workforce_task_price: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform)(struct!.publicWorkforceTaskPrice),
  }
}

export interface SagemakerFlowDefinitionHumanLoopRequestSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}
  */
  readonly awsManagedHumanLoopRequestSource: string;
}

function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopRequestSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_managed_human_loop_request_source: cdktf.stringToTerraform(struct!.awsManagedHumanLoopRequestSource),
  }
}

export interface SagemakerFlowDefinitionOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#kms_key_id SagemakerFlowDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#s3_output_path SagemakerFlowDefinition#s3_output_path}
  */
  readonly s3OutputPath: string;
}

function sagemakerFlowDefinitionOutputConfigToTerraform(struct?: SagemakerFlowDefinitionOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition}
*/
export class SagemakerFlowDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_flow_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerFlowDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerFlowDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_flow_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._flowDefinitionName = config.flowDefinitionName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._humanLoopActivationConfig = config.humanLoopActivationConfig;
    this._humanLoopConfig = config.humanLoopConfig;
    this._humanLoopRequestSource = config.humanLoopRequestSource;
    this._outputConfig = config.outputConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // flow_definition_name - computed: false, optional: false, required: true
  private _flowDefinitionName: string;
  public get flowDefinitionName() {
    return this.getStringAttribute('flow_definition_name');
  }
  public set flowDefinitionName(value: string) {
    this._flowDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionNameInput() {
    return this._flowDefinitionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // human_loop_activation_config - computed: false, optional: true, required: false
  private _humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig[];
  public get humanLoopActivationConfig() {
    return this.interpolationForAttribute('human_loop_activation_config') as any;
  }
  public set humanLoopActivationConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfig[] ) {
    this._humanLoopActivationConfig = value;
  }
  public resetHumanLoopActivationConfig() {
    this._humanLoopActivationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConfigInput() {
    return this._humanLoopActivationConfig
  }

  // human_loop_config - computed: false, optional: false, required: true
  private _humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfig[];
  public get humanLoopConfig() {
    return this.interpolationForAttribute('human_loop_config') as any;
  }
  public set humanLoopConfig(value: SagemakerFlowDefinitionHumanLoopConfig[]) {
    this._humanLoopConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopConfigInput() {
    return this._humanLoopConfig
  }

  // human_loop_request_source - computed: false, optional: true, required: false
  private _humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource[];
  public get humanLoopRequestSource() {
    return this.interpolationForAttribute('human_loop_request_source') as any;
  }
  public set humanLoopRequestSource(value: SagemakerFlowDefinitionHumanLoopRequestSource[] ) {
    this._humanLoopRequestSource = value;
  }
  public resetHumanLoopRequestSource() {
    this._humanLoopRequestSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopRequestSourceInput() {
    return this._humanLoopRequestSource
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig: SagemakerFlowDefinitionOutputConfig[];
  public get outputConfig() {
    return this.interpolationForAttribute('output_config') as any;
  }
  public set outputConfig(value: SagemakerFlowDefinitionOutputConfig[]) {
    this._outputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_definition_name: cdktf.stringToTerraform(this._flowDefinitionName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      human_loop_activation_config: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform)(this._humanLoopActivationConfig),
      human_loop_config: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopConfigToTerraform)(this._humanLoopConfig),
      human_loop_request_source: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform)(this._humanLoopRequestSource),
      output_config: cdktf.listMapper(sagemakerFlowDefinitionOutputConfigToTerraform)(this._outputConfig),
    };
  }
}
