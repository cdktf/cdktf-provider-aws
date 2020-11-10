// https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutoscalingPolicyConfig extends TerraformMetaArguments {
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
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
  readonly name: string;
  readonly value: string;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
  /** metric_dimension block */
  readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
}
export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
  readonly predefinedMetricType: string;
  readonly resourceLabel?: string;
}
export interface AutoscalingPolicyTargetTrackingConfiguration {
  readonly disableScaleIn?: boolean;
  readonly targetValue: number;
  /** customized_metric_specification block */
  readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification[];
  /** predefined_metric_specification block */
  readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification[];
}

// Resource

export class AutoscalingPolicy extends TerraformResource {

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
      adjustment_type: this._adjustmentType,
      autoscaling_group_name: this._autoscalingGroupName,
      cooldown: this._cooldown,
      estimated_instance_warmup: this._estimatedInstanceWarmup,
      metric_aggregation_type: this._metricAggregationType,
      min_adjustment_magnitude: this._minAdjustmentMagnitude,
      min_adjustment_step: this._minAdjustmentStep,
      name: this._name,
      policy_type: this._policyType,
      scaling_adjustment: this._scalingAdjustment,
      step_adjustment: this._stepAdjustment,
      target_tracking_configuration: this._targetTrackingConfiguration,
    };
  }
}
