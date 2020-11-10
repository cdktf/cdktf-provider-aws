// https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppautoscalingPolicyConfig extends TerraformMetaArguments {
  readonly adjustmentType?: string;
  readonly cooldown?: number;
  readonly metricAggregationType?: string;
  readonly minAdjustmentMagnitude?: number;
  readonly name: string;
  readonly policyType?: string;
  readonly resourceId: string;
  readonly scalableDimension: string;
  readonly serviceNamespace: string;
  /** step_adjustment block */
  readonly stepAdjustment?: AppautoscalingPolicyStepAdjustment[];
  /** step_scaling_policy_configuration block */
  readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration[];
  /** target_tracking_scaling_policy_configuration block */
  readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
}
export interface AppautoscalingPolicyStepAdjustment {
  readonly metricIntervalLowerBound?: string;
  readonly metricIntervalUpperBound?: string;
  readonly scalingAdjustment: number;
}
export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
  readonly metricIntervalLowerBound?: string;
  readonly metricIntervalUpperBound?: string;
  readonly scalingAdjustment: number;
}
export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
  readonly adjustmentType?: string;
  readonly cooldown?: number;
  readonly metricAggregationType?: string;
  readonly minAdjustmentMagnitude?: number;
  /** step_adjustment block */
  readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
  readonly name: string;
  readonly value: string;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
  /** dimensions block */
  readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
  readonly predefinedMetricType: string;
  readonly resourceLabel?: string;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
  readonly disableScaleIn?: boolean;
  readonly scaleInCooldown?: number;
  readonly scaleOutCooldown?: number;
  readonly targetValue: number;
  /** customized_metric_specification block */
  readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification[];
  /** predefined_metric_specification block */
  readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification[];
}

// Resource

export class AppautoscalingPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adjustmentType = config.adjustmentType;
    this._cooldown = config.cooldown;
    this._metricAggregationType = config.metricAggregationType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._name = config.name;
    this._policyType = config.policyType;
    this._resourceId = config.resourceId;
    this._scalableDimension = config.scalableDimension;
    this._serviceNamespace = config.serviceNamespace;
    this._stepAdjustment = config.stepAdjustment;
    this._stepScalingPolicyConfiguration = config.stepScalingPolicyConfiguration;
    this._targetTrackingScalingPolicyConfiguration = config.targetTrackingScalingPolicyConfiguration;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_aggregation_type - computed: false, optional: true, required: false
  private _metricAggregationType?: string;
  public get metricAggregationType() {
    return this.getStringAttribute('metric_aggregation_type');
  }
  public set metricAggregationType(value: string ) {
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension: string;
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace: string;
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace
  }

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment?: AppautoscalingPolicyStepAdjustment[];
  public get stepAdjustment() {
    return this.interpolationForAttribute('step_adjustment') as any;
  }
  public set stepAdjustment(value: AppautoscalingPolicyStepAdjustment[] ) {
    this._stepAdjustment = value;
  }
  public resetStepAdjustment() {
    this._stepAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentInput() {
    return this._stepAdjustment
  }

  // step_scaling_policy_configuration - computed: false, optional: true, required: false
  private _stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration[];
  public get stepScalingPolicyConfiguration() {
    return this.interpolationForAttribute('step_scaling_policy_configuration') as any;
  }
  public set stepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration[] ) {
    this._stepScalingPolicyConfiguration = value;
  }
  public resetStepScalingPolicyConfiguration() {
    this._stepScalingPolicyConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepScalingPolicyConfigurationInput() {
    return this._stepScalingPolicyConfiguration
  }

  // target_tracking_scaling_policy_configuration - computed: false, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
  public get targetTrackingScalingPolicyConfiguration() {
    return this.interpolationForAttribute('target_tracking_scaling_policy_configuration') as any;
  }
  public set targetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[] ) {
    this._targetTrackingScalingPolicyConfiguration = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: this._adjustmentType,
      cooldown: this._cooldown,
      metric_aggregation_type: this._metricAggregationType,
      min_adjustment_magnitude: this._minAdjustmentMagnitude,
      name: this._name,
      policy_type: this._policyType,
      resource_id: this._resourceId,
      scalable_dimension: this._scalableDimension,
      service_namespace: this._serviceNamespace,
      step_adjustment: this._stepAdjustment,
      step_scaling_policy_configuration: this._stepScalingPolicyConfiguration,
      target_tracking_scaling_policy_configuration: this._targetTrackingScalingPolicyConfiguration,
    };
  }
}
