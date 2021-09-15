// https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#adjustment_type AutoscalingPolicy#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#cooldown AutoscalingPolicy#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}
  */
  readonly metricAggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}
  */
  readonly minAdjustmentMagnitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#policy_type AutoscalingPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment?: number;
  /**
  * predictive_scaling_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predictive_scaling_configuration AutoscalingPolicy#predictive_scaling_configuration}
  */
  readonly predictiveScalingConfiguration?: AutoscalingPolicyPredictiveScalingConfiguration[];
  /**
  * step_adjustment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#step_adjustment AutoscalingPolicy#step_adjustment}
  */
  readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[];
  /**
  * target_tracking_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_tracking_configuration AutoscalingPolicy#target_tracking_configuration}
  */
  readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel: string;
}

function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel: string;
}

function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel: string;
}

function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_value AutoscalingPolicy#target_value}
  */
  readonly targetValue: number;
  /**
  * predefined_load_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_load_metric_specification AutoscalingPolicy#predefined_load_metric_specification}
  */
  readonly predefinedLoadMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification[];
  /**
  * predefined_metric_pair_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_pair_specification AutoscalingPolicy#predefined_metric_pair_specification}
  */
  readonly predefinedMetricPairSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification[];
  /**
  * predefined_scaling_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_scaling_metric_specification AutoscalingPolicy#predefined_scaling_metric_specification}
  */
  readonly predefinedScalingMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification[];
}

function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_value: cdktf.numberToTerraform(struct!.targetValue),
    predefined_load_metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform)(struct!.predefinedLoadMetricSpecification),
    predefined_metric_pair_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform)(struct!.predefinedMetricPairSpecification),
    predefined_scaling_metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform)(struct!.predefinedScalingMetricSpecification),
  }
}

export interface AutoscalingPolicyPredictiveScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#max_capacity_breach_behavior AutoscalingPolicy#max_capacity_breach_behavior}
  */
  readonly maxCapacityBreachBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#max_capacity_buffer AutoscalingPolicy#max_capacity_buffer}
  */
  readonly maxCapacityBuffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#mode AutoscalingPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scheduling_buffer_time AutoscalingPolicy#scheduling_buffer_time}
  */
  readonly schedulingBufferTime?: string;
  /**
  * metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_specification AutoscalingPolicy#metric_specification}
  */
  readonly metricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification[];
}

function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_capacity_breach_behavior: cdktf.stringToTerraform(struct!.maxCapacityBreachBehavior),
    max_capacity_buffer: cdktf.stringToTerraform(struct!.maxCapacityBuffer),
    mode: cdktf.stringToTerraform(struct!.mode),
    scheduling_buffer_time: cdktf.stringToTerraform(struct!.schedulingBufferTime),
    metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform)(struct!.metricSpecification),
  }
}

export interface AutoscalingPolicyStepAdjustment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}
  */
  readonly metricIntervalLowerBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}
  */
  readonly metricIntervalUpperBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment: number;
}

function autoscalingPolicyStepAdjustmentToTerraform(struct?: AutoscalingPolicyStepAdjustment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_interval_lower_bound: cdktf.stringToTerraform(struct!.metricIntervalLowerBound),
    metric_interval_upper_bound: cdktf.stringToTerraform(struct!.metricIntervalUpperBound),
    scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
  }
}

export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#value AutoscalingPolicy#value}
  */
  readonly value: string;
}

function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_name AutoscalingPolicy#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#namespace AutoscalingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#statistic AutoscalingPolicy#statistic}
  */
  readonly statistic: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#unit AutoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric_dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_dimension AutoscalingPolicy#metric_dimension}
  */
  readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
}

function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform)(struct!.metricDimension),
  }
}

export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export interface AutoscalingPolicyTargetTrackingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#disable_scale_in AutoscalingPolicy#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_value AutoscalingPolicy#target_value}
  */
  readonly targetValue: number;
  /**
  * customized_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#customized_metric_specification AutoscalingPolicy#customized_metric_specification}
  */
  readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification[];
  /**
  * predefined_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_specification AutoscalingPolicy#predefined_metric_specification}
  */
  readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification[];
}

function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
    customized_metric_specification: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform)(struct!.customizedMetricSpecification),
    predefined_metric_specification: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform)(struct!.predefinedMetricSpecification),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy}
*/
export class AutoscalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_autoscaling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adjustmentType = config.adjustmentType;
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._cooldown = config.cooldown;
    this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
    this._metricAggregationType = config.metricAggregationType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._name = config.name;
    this._policyType = config.policyType;
    this._scalingAdjustment = config.scalingAdjustment;
    this._predictiveScalingConfiguration = config.predictiveScalingConfiguration;
    this._stepAdjustment = config.stepAdjustment;
    this._targetTrackingConfiguration = config.targetTrackingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string;
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string ) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName: string;
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number;
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number ) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown
  }

  // estimated_instance_warmup - computed: false, optional: true, required: false
  private _estimatedInstanceWarmup?: number;
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number ) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_aggregation_type - computed: true, optional: true, required: false
  private _metricAggregationType?: string;
  public get metricAggregationType() {
    return this.getStringAttribute('metric_aggregation_type');
  }
  public set metricAggregationType(value: string) {
    this._metricAggregationType = value;
  }
  public resetMetricAggregationType() {
    this._metricAggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAggregationTypeInput() {
    return this._metricAggregationType
  }

  // min_adjustment_magnitude - computed: false, optional: true, required: false
  private _minAdjustmentMagnitude?: number;
  public get minAdjustmentMagnitude() {
    return this.getNumberAttribute('min_adjustment_magnitude');
  }
  public set minAdjustmentMagnitude(value: number ) {
    this._minAdjustmentMagnitude = value;
  }
  public resetMinAdjustmentMagnitude() {
    this._minAdjustmentMagnitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentMagnitudeInput() {
    return this._minAdjustmentMagnitude
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string;
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string ) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType
  }

  // scaling_adjustment - computed: false, optional: true, required: false
  private _scalingAdjustment?: number;
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number ) {
    this._scalingAdjustment = value;
  }
  public resetScalingAdjustment() {
    this._scalingAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment
  }

  // predictive_scaling_configuration - computed: false, optional: true, required: false
  private _predictiveScalingConfiguration?: AutoscalingPolicyPredictiveScalingConfiguration[];
  public get predictiveScalingConfiguration() {
    return this.interpolationForAttribute('predictive_scaling_configuration') as any;
  }
  public set predictiveScalingConfiguration(value: AutoscalingPolicyPredictiveScalingConfiguration[] ) {
    this._predictiveScalingConfiguration = value;
  }
  public resetPredictiveScalingConfiguration() {
    this._predictiveScalingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingConfigurationInput() {
    return this._predictiveScalingConfiguration
  }

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment?: AutoscalingPolicyStepAdjustment[];
  public get stepAdjustment() {
    return this.interpolationForAttribute('step_adjustment') as any;
  }
  public set stepAdjustment(value: AutoscalingPolicyStepAdjustment[] ) {
    this._stepAdjustment = value;
  }
  public resetStepAdjustment() {
    this._stepAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentInput() {
    return this._stepAdjustment
  }

  // target_tracking_configuration - computed: false, optional: true, required: false
  private _targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
  public get targetTrackingConfiguration() {
    return this.interpolationForAttribute('target_tracking_configuration') as any;
  }
  public set targetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration[] ) {
    this._targetTrackingConfiguration = value;
  }
  public resetTargetTrackingConfiguration() {
    this._targetTrackingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingConfigurationInput() {
    return this._targetTrackingConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      cooldown: cdktf.numberToTerraform(this._cooldown),
      estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
      metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
      min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
      predictive_scaling_configuration: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationToTerraform)(this._predictiveScalingConfiguration),
      step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform)(this._stepAdjustment),
      target_tracking_configuration: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationToTerraform)(this._targetTrackingConfiguration),
    };
  }
}
