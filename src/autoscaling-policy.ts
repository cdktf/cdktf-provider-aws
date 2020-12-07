// https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly adjustmentType?: string;
  readonly autoscalingGroupName: string;
  readonly cooldown?: number;
  readonly estimatedInstanceWarmup?: number;
  readonly metricAggregationType?: string;
  readonly minAdjustmentMagnitude?: number;
  readonly minAdjustmentStep?: number;
  readonly name: string;
  readonly policyType?: string;
  readonly scalingAdjustment?: number;
  /** step_adjustment block */
  readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[];
  /** target_tracking_configuration block */
  readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
}
export interface AutoscalingPolicyStepAdjustment {
  readonly metricIntervalLowerBound?: string;
  readonly metricIntervalUpperBound?: string;
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
  readonly name: string;
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
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
  /** metric_dimension block */
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
  readonly predefinedMetricType: string;
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
  readonly disableScaleIn?: boolean;
  readonly targetValue: number;
  /** customized_metric_specification block */
  readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification[];
  /** predefined_metric_specification block */
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


// Resource

export class AutoscalingPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._minAdjustmentStep = config.minAdjustmentStep;
    this._name = config.name;
    this._policyType = config.policyType;
    this._scalingAdjustment = config.scalingAdjustment;
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

  // min_adjustment_step - computed: false, optional: true, required: false
  private _minAdjustmentStep?: number;
  public get minAdjustmentStep() {
    return this.getNumberAttribute('min_adjustment_step');
  }
  public set minAdjustmentStep(value: number ) {
    this._minAdjustmentStep = value;
  }
  public resetMinAdjustmentStep() {
    this._minAdjustmentStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentStepInput() {
    return this._minAdjustmentStep
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
      min_adjustment_step: cdktf.numberToTerraform(this._minAdjustmentStep),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
      step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform)(this._stepAdjustment),
      target_tracking_configuration: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationToTerraform)(this._targetTrackingConfiguration),
    };
  }
}
