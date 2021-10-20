// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS AppAutoScaling
*/
export namespace AppAutoScaling {
  export interface AppautoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#policy_type AppautoscalingPolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_id AppautoscalingPolicy#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scalable_dimension AppautoscalingPolicy#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#service_namespace AppautoscalingPolicy#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * step_scaling_policy_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}
    */
    readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration;
    /**
    * target_tracking_scaling_policy_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
  }
  export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}
    */
    readonly metricIntervalLowerBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}
    */
    readonly metricIntervalUpperBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment: number;
  }

  function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      metric_interval_lower_bound: cdktf.stringToTerraform(struct!.metricIntervalLowerBound),
      metric_interval_upper_bound: cdktf.stringToTerraform(struct!.metricIntervalUpperBound),
      scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
    }
  }

  export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#adjustment_type AppautoscalingPolicy#adjustment_type}
    */
    readonly adjustmentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#cooldown AppautoscalingPolicy#cooldown}
    */
    readonly cooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}
    */
    readonly metricAggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}
    */
    readonly minAdjustmentMagnitude?: number;
    /**
    * step_adjustment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_adjustment AppautoscalingPolicy#step_adjustment}
    */
    readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
  }

  function appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference | AppautoscalingPolicyStepScalingPolicyConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      adjustment_type: cdktf.stringToTerraform(struct!.adjustmentType),
      cooldown: cdktf.numberToTerraform(struct!.cooldown),
      metric_aggregation_type: cdktf.stringToTerraform(struct!.metricAggregationType),
      min_adjustment_magnitude: cdktf.numberToTerraform(struct!.minAdjustmentMagnitude),
      step_adjustment: cdktf.listMapper(appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform)(struct!.stepAdjustment),
    }
  }

  export class AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // adjustment_type - computed: false, optional: true, required: false
    private _adjustmentType?: string | undefined; 
    public get adjustmentType() {
      return this.getStringAttribute('adjustment_type');
    }
    public set adjustmentType(value: string | undefined) {
      this._adjustmentType = value;
    }
    public resetAdjustmentType() {
      this._adjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adjustmentTypeInput() {
      return this._adjustmentType
    }

    // cooldown - computed: false, optional: true, required: false
    private _cooldown?: number | undefined; 
    public get cooldown() {
      return this.getNumberAttribute('cooldown');
    }
    public set cooldown(value: number | undefined) {
      this._cooldown = value;
    }
    public resetCooldown() {
      this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownInput() {
      return this._cooldown
    }

    // metric_aggregation_type - computed: false, optional: true, required: false
    private _metricAggregationType?: string | undefined; 
    public get metricAggregationType() {
      return this.getStringAttribute('metric_aggregation_type');
    }
    public set metricAggregationType(value: string | undefined) {
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
    private _minAdjustmentMagnitude?: number | undefined; 
    public get minAdjustmentMagnitude() {
      return this.getNumberAttribute('min_adjustment_magnitude');
    }
    public set minAdjustmentMagnitude(value: number | undefined) {
      this._minAdjustmentMagnitude = value;
    }
    public resetMinAdjustmentMagnitude() {
      this._minAdjustmentMagnitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minAdjustmentMagnitudeInput() {
      return this._minAdjustmentMagnitude
    }

    // step_adjustment - computed: false, optional: true, required: false
    private _stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | undefined; 
    public get stepAdjustment() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('step_adjustment') as any;
    }
    public set stepAdjustment(value: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | undefined) {
      this._stepAdjustment = value;
    }
    public resetStepAdjustment() {
      this._stepAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepAdjustmentInput() {
      return this._stepAdjustment
    }
  }
  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#value AppautoscalingPolicy#value}
    */
    readonly value: string;
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_name AppautoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#namespace AppautoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#statistic AppautoscalingPolicy#statistic}
    */
    readonly statistic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#unit AppautoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * dimensions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#dimensions AppautoscalingPolicy#dimensions}
    */
    readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      statistic: cdktf.stringToTerraform(struct!.statistic),
      unit: cdktf.stringToTerraform(struct!.unit),
      dimensions: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform)(struct!.dimensions),
    }
  }

  export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName?: string; 
    public get metricName() {
      return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
      this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
      return this._metricName
    }

    // namespace - computed: false, optional: false, required: true
    private _namespace?: string; 
    public get namespace() {
      return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
      this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
      return this._namespace
    }

    // statistic - computed: false, optional: false, required: true
    private _statistic?: string; 
    public get statistic() {
      return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
      this._statistic = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
      return this._statistic
    }

    // unit - computed: false, optional: true, required: false
    private _unit?: string | undefined; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string | undefined) {
      this._unit = value;
    }
    public resetUnit() {
      this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // dimensions - computed: false, optional: true, required: false
    private _dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | undefined; 
    public get dimensions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dimensions') as any;
    }
    public set dimensions(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | undefined) {
      this._dimensions = value;
    }
    public resetDimensions() {
      this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
      return this._dimensions
    }
  }
  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_label AppautoscalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // predefined_metric_type - computed: false, optional: false, required: true
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
      return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
      this._predefinedMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
      return this._predefinedMetricType
    }

    // resource_label - computed: false, optional: true, required: false
    private _resourceLabel?: string | undefined; 
    public get resourceLabel() {
      return this.getStringAttribute('resource_label');
    }
    public set resourceLabel(value: string | undefined) {
      this._resourceLabel = value;
    }
    public resetResourceLabel() {
      this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLabelInput() {
      return this._resourceLabel
    }
  }
  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#disable_scale_in AppautoscalingPolicy#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_value AppautoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * customized_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}
    */
    readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
    /**
    * predefined_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}
    */
    readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
      scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
      scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
      target_value: cdktf.numberToTerraform(struct!.targetValue),
      customized_metric_specification: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct!.customizedMetricSpecification),
      predefined_metric_specification: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct!.predefinedMetricSpecification),
    }
  }

  export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // disable_scale_in - computed: false, optional: true, required: false
    private _disableScaleIn?: boolean | cdktf.IResolvable | undefined; 
    public get disableScaleIn() {
      return this.getBooleanAttribute('disable_scale_in') as any;
    }
    public set disableScaleIn(value: boolean | cdktf.IResolvable | undefined) {
      this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
      this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
      return this._disableScaleIn
    }

    // scale_in_cooldown - computed: false, optional: true, required: false
    private _scaleInCooldown?: number | undefined; 
    public get scaleInCooldown() {
      return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number | undefined) {
      this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
      this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
      return this._scaleInCooldown
    }

    // scale_out_cooldown - computed: false, optional: true, required: false
    private _scaleOutCooldown?: number | undefined; 
    public get scaleOutCooldown() {
      return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number | undefined) {
      this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
      this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
      return this._scaleOutCooldown
    }

    // target_value - computed: false, optional: false, required: true
    private _targetValue?: number; 
    public get targetValue() {
      return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
      this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
      return this._targetValue
    }

    // customized_metric_specification - computed: false, optional: true, required: false
    private _customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined; 
    private __customizedMetricSpecificationOutput = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference(this as any, "customized_metric_specification", true);
    public get customizedMetricSpecification() {
      return this.__customizedMetricSpecificationOutput;
    }
    public putCustomizedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined) {
      this._customizedMetricSpecification = value;
    }
    public resetCustomizedMetricSpecification() {
      this._customizedMetricSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedMetricSpecificationInput() {
      return this._customizedMetricSpecification
    }

    // predefined_metric_specification - computed: false, optional: true, required: false
    private _predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined; 
    private __predefinedMetricSpecificationOutput = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference(this as any, "predefined_metric_specification", true);
    public get predefinedMetricSpecification() {
      return this.__predefinedMetricSpecificationOutput;
    }
    public putPredefinedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined) {
      this._predefinedMetricSpecification = value;
    }
    public resetPredefinedMetricSpecification() {
      this._predefinedMetricSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricSpecificationInput() {
      return this._predefinedMetricSpecification
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy}
  */
  export class AppautoscalingPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appautoscaling_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingPolicyConfig
    */
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
      this._name = config.name;
      this._policyType = config.policyType;
      this._resourceId = config.resourceId;
      this._scalableDimension = config.scalableDimension;
      this._serviceNamespace = config.serviceNamespace;
      this._stepScalingPolicyConfiguration = config.stepScalingPolicyConfiguration;
      this._targetTrackingScalingPolicyConfiguration = config.targetTrackingScalingPolicyConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // policy_type - computed: false, optional: true, required: false
    private _policyType?: string | undefined; 
    public get policyType() {
      return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string | undefined) {
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
    private _resourceId?: string; 
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
    private _scalableDimension?: string; 
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
    private _serviceNamespace?: string; 
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

    // step_scaling_policy_configuration - computed: false, optional: true, required: false
    private _stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration | undefined; 
    private __stepScalingPolicyConfigurationOutput = new AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference(this as any, "step_scaling_policy_configuration", true);
    public get stepScalingPolicyConfiguration() {
      return this.__stepScalingPolicyConfigurationOutput;
    }
    public putStepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration | undefined) {
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
    private _targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined; 
    private __targetTrackingScalingPolicyConfigurationOutput = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(this as any, "target_tracking_scaling_policy_configuration", true);
    public get targetTrackingScalingPolicyConfiguration() {
      return this.__targetTrackingScalingPolicyConfigurationOutput;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined) {
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
        name: cdktf.stringToTerraform(this._name),
        policy_type: cdktf.stringToTerraform(this._policyType),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
        service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
        step_scaling_policy_configuration: appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(this._stepScalingPolicyConfiguration),
        target_tracking_scaling_policy_configuration: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(this._targetTrackingScalingPolicyConfiguration),
      };
    }
  }
  export interface AppautoscalingScheduledActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#end_time AppautoscalingScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#name AppautoscalingScheduledAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#resource_id AppautoscalingScheduledAction#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#schedule AppautoscalingScheduledAction#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#service_namespace AppautoscalingScheduledAction#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#start_time AppautoscalingScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#timezone AppautoscalingScheduledAction#timezone}
    */
    readonly timezone?: string;
    /**
    * scalable_target_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}
    */
    readonly scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction;
  }
  export interface AppautoscalingScheduledActionScalableTargetAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#max_capacity AppautoscalingScheduledAction#max_capacity}
    */
    readonly maxCapacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#min_capacity AppautoscalingScheduledAction#min_capacity}
    */
    readonly minCapacity?: string;
  }

  function appautoscalingScheduledActionScalableTargetActionToTerraform(struct?: AppautoscalingScheduledActionScalableTargetActionOutputReference | AppautoscalingScheduledActionScalableTargetAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
      min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    }
  }

  export class AppautoscalingScheduledActionScalableTargetActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_capacity - computed: false, optional: true, required: false
    private _maxCapacity?: string | undefined; 
    public get maxCapacity() {
      return this.getStringAttribute('max_capacity');
    }
    public set maxCapacity(value: string | undefined) {
      this._maxCapacity = value;
    }
    public resetMaxCapacity() {
      this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
      return this._maxCapacity
    }

    // min_capacity - computed: false, optional: true, required: false
    private _minCapacity?: string | undefined; 
    public get minCapacity() {
      return this.getStringAttribute('min_capacity');
    }
    public set minCapacity(value: string | undefined) {
      this._minCapacity = value;
    }
    public resetMinCapacity() {
      this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
      return this._minCapacity
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action}
  */
  export class AppautoscalingScheduledAction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appautoscaling_scheduled_action";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingScheduledActionConfig
    */
    public constructor(scope: Construct, id: string, config: AppautoscalingScheduledActionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appautoscaling_scheduled_action',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._endTime = config.endTime;
      this._name = config.name;
      this._resourceId = config.resourceId;
      this._scalableDimension = config.scalableDimension;
      this._schedule = config.schedule;
      this._serviceNamespace = config.serviceNamespace;
      this._startTime = config.startTime;
      this._timezone = config.timezone;
      this._scalableTargetAction = config.scalableTargetAction;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // end_time - computed: false, optional: true, required: false
    private _endTime?: string | undefined; 
    public get endTime() {
      return this.getStringAttribute('end_time');
    }
    public set endTime(value: string | undefined) {
      this._endTime = value;
    }
    public resetEndTime() {
      this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
      return this._endTime
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
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
    private _scalableDimension?: string; 
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

    // schedule - computed: false, optional: false, required: true
    private _schedule?: string; 
    public get schedule() {
      return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
      this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // service_namespace - computed: false, optional: false, required: true
    private _serviceNamespace?: string; 
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

    // start_time - computed: false, optional: true, required: false
    private _startTime?: string | undefined; 
    public get startTime() {
      return this.getStringAttribute('start_time');
    }
    public set startTime(value: string | undefined) {
      this._startTime = value;
    }
    public resetStartTime() {
      this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
      return this._startTime
    }

    // timezone - computed: false, optional: true, required: false
    private _timezone?: string | undefined; 
    public get timezone() {
      return this.getStringAttribute('timezone');
    }
    public set timezone(value: string | undefined) {
      this._timezone = value;
    }
    public resetTimezone() {
      this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
      return this._timezone
    }

    // scalable_target_action - computed: false, optional: false, required: true
    private _scalableTargetAction?: AppautoscalingScheduledActionScalableTargetAction; 
    private __scalableTargetActionOutput = new AppautoscalingScheduledActionScalableTargetActionOutputReference(this as any, "scalable_target_action", true);
    public get scalableTargetAction() {
      return this.__scalableTargetActionOutput;
    }
    public putScalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction) {
      this._scalableTargetAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableTargetActionInput() {
      return this._scalableTargetAction
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        end_time: cdktf.stringToTerraform(this._endTime),
        name: cdktf.stringToTerraform(this._name),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
        schedule: cdktf.stringToTerraform(this._schedule),
        service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
        start_time: cdktf.stringToTerraform(this._startTime),
        timezone: cdktf.stringToTerraform(this._timezone),
        scalable_target_action: appautoscalingScheduledActionScalableTargetActionToTerraform(this._scalableTargetAction),
      };
    }
  }
  export interface AppautoscalingTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#max_capacity AppautoscalingTarget#max_capacity}
    */
    readonly maxCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#min_capacity AppautoscalingTarget#min_capacity}
    */
    readonly minCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#resource_id AppautoscalingTarget#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#role_arn AppautoscalingTarget#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#scalable_dimension AppautoscalingTarget#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#service_namespace AppautoscalingTarget#service_namespace}
    */
    readonly serviceNamespace: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target}
  */
  export class AppautoscalingTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appautoscaling_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingTargetConfig
    */
    public constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appautoscaling_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._maxCapacity = config.maxCapacity;
      this._minCapacity = config.minCapacity;
      this._resourceId = config.resourceId;
      this._roleArn = config.roleArn;
      this._scalableDimension = config.scalableDimension;
      this._serviceNamespace = config.serviceNamespace;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_capacity - computed: false, optional: false, required: true
    private _maxCapacity?: number; 
    public get maxCapacity() {
      return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
      this._maxCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
      return this._maxCapacity
    }

    // min_capacity - computed: false, optional: false, required: true
    private _minCapacity?: number; 
    public get minCapacity() {
      return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
      this._minCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
      return this._minCapacity
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
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

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // scalable_dimension - computed: false, optional: false, required: true
    private _scalableDimension?: string; 
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
    private _serviceNamespace?: string; 
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        max_capacity: cdktf.numberToTerraform(this._maxCapacity),
        min_capacity: cdktf.numberToTerraform(this._minCapacity),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
        service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
      };
    }
  }
}
