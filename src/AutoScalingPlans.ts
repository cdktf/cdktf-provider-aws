// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Auto Scaling Plans
*/
export namespace AutoScalingPlans {
  export interface AutoscalingplansScalingPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#name AutoscalingplansScalingPlan#name}
    */
    readonly name: string;
    /**
    * application_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#application_source AutoscalingplansScalingPlan#application_source}
    */
    readonly applicationSource: AutoscalingplansScalingPlanApplicationSource;
    /**
    * scaling_instruction block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scaling_instruction AutoscalingplansScalingPlan#scaling_instruction}
    */
    readonly scalingInstruction: AutoscalingplansScalingPlanScalingInstruction[];
  }
  export interface AutoscalingplansScalingPlanApplicationSourceTagFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#key AutoscalingplansScalingPlan#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#values AutoscalingplansScalingPlan#values}
    */
    readonly values?: string[];
  }

  function autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceTagFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface AutoscalingplansScalingPlanApplicationSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#cloudformation_stack_arn AutoscalingplansScalingPlan#cloudformation_stack_arn}
    */
    readonly cloudformationStackArn?: string;
    /**
    * tag_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#tag_filter AutoscalingplansScalingPlan#tag_filter}
    */
    readonly tagFilter?: AutoscalingplansScalingPlanApplicationSourceTagFilter[];
  }

  function autoscalingplansScalingPlanApplicationSourceToTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceOutputReference | AutoscalingplansScalingPlanApplicationSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudformation_stack_arn: cdktf.stringToTerraform(struct!.cloudformationStackArn),
      tag_filter: cdktf.listMapper(autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform)(struct!.tagFilter),
    }
  }

  export class AutoscalingplansScalingPlanApplicationSourceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudformation_stack_arn - computed: false, optional: true, required: false
    private _cloudformationStackArn?: string | undefined; 
    public get cloudformationStackArn() {
      return this.getStringAttribute('cloudformation_stack_arn');
    }
    public set cloudformationStackArn(value: string | undefined) {
      this._cloudformationStackArn = value;
    }
    public resetCloudformationStackArn() {
      this._cloudformationStackArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudformationStackArnInput() {
      return this._cloudformationStackArn
    }

    // tag_filter - computed: false, optional: true, required: false
    private _tagFilter?: AutoscalingplansScalingPlanApplicationSourceTagFilter[] | undefined; 
    public get tagFilter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tag_filter') as any;
    }
    public set tagFilter(value: AutoscalingplansScalingPlanApplicationSourceTagFilter[] | undefined) {
      this._tagFilter = value;
    }
    public resetTagFilter() {
      this._tagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFilterInput() {
      return this._tagFilter
    }
  }
  export interface AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#dimensions AutoscalingplansScalingPlan#dimensions}
    */
    readonly dimensions?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#metric_name AutoscalingplansScalingPlan#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#namespace AutoscalingplansScalingPlan#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#statistic AutoscalingplansScalingPlan#statistic}
    */
    readonly statistic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#unit AutoscalingplansScalingPlan#unit}
    */
    readonly unit?: string;
  }

  function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      statistic: cdktf.stringToTerraform(struct!.statistic),
      unit: cdktf.stringToTerraform(struct!.unit),
    }
  }

  export class AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // dimensions - computed: false, optional: true, required: false
    private _dimensions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get dimensions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dimensions') as any;
    }
    public set dimensions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._dimensions = value;
    }
    public resetDimensions() {
      this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
      return this._dimensions
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
  }
  export interface AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_load_metric_type AutoscalingplansScalingPlan#predefined_load_metric_type}
    */
    readonly predefinedLoadMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#resource_label AutoscalingplansScalingPlan#resource_label}
    */
    readonly resourceLabel?: string;
  }

  function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      predefined_load_metric_type: cdktf.stringToTerraform(struct!.predefinedLoadMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export class AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // predefined_load_metric_type - computed: false, optional: false, required: true
    private _predefinedLoadMetricType?: string; 
    public get predefinedLoadMetricType() {
      return this.getStringAttribute('predefined_load_metric_type');
    }
    public set predefinedLoadMetricType(value: string) {
      this._predefinedLoadMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedLoadMetricTypeInput() {
      return this._predefinedLoadMetricType
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
  export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#dimensions AutoscalingplansScalingPlan#dimensions}
    */
    readonly dimensions?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#metric_name AutoscalingplansScalingPlan#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#namespace AutoscalingplansScalingPlan#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#statistic AutoscalingplansScalingPlan#statistic}
    */
    readonly statistic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#unit AutoscalingplansScalingPlan#unit}
    */
    readonly unit?: string;
  }

  function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      statistic: cdktf.stringToTerraform(struct!.statistic),
      unit: cdktf.stringToTerraform(struct!.unit),
    }
  }

  export class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // dimensions - computed: false, optional: true, required: false
    private _dimensions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get dimensions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dimensions') as any;
    }
    public set dimensions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._dimensions = value;
    }
    public resetDimensions() {
      this._dimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
      return this._dimensions
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
  }
  export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_scaling_metric_type AutoscalingplansScalingPlan#predefined_scaling_metric_type}
    */
    readonly predefinedScalingMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#resource_label AutoscalingplansScalingPlan#resource_label}
    */
    readonly resourceLabel?: string;
  }

  function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      predefined_scaling_metric_type: cdktf.stringToTerraform(struct!.predefinedScalingMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // predefined_scaling_metric_type - computed: false, optional: false, required: true
    private _predefinedScalingMetricType?: string; 
    public get predefinedScalingMetricType() {
      return this.getStringAttribute('predefined_scaling_metric_type');
    }
    public set predefinedScalingMetricType(value: string) {
      this._predefinedScalingMetricType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedScalingMetricTypeInput() {
      return this._predefinedScalingMetricType
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
  export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#disable_scale_in AutoscalingplansScalingPlan#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#estimated_instance_warmup AutoscalingplansScalingPlan#estimated_instance_warmup}
    */
    readonly estimatedInstanceWarmup?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scale_in_cooldown AutoscalingplansScalingPlan#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scale_out_cooldown AutoscalingplansScalingPlan#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#target_value AutoscalingplansScalingPlan#target_value}
    */
    readonly targetValue: number;
    /**
    * customized_scaling_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#customized_scaling_metric_specification AutoscalingplansScalingPlan#customized_scaling_metric_specification}
    */
    readonly customizedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;
    /**
    * predefined_scaling_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_scaling_metric_specification AutoscalingplansScalingPlan#predefined_scaling_metric_specification}
    */
    readonly predefinedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;
  }

  function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
      estimated_instance_warmup: cdktf.numberToTerraform(struct!.estimatedInstanceWarmup),
      scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
      scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
      target_value: cdktf.numberToTerraform(struct!.targetValue),
      customized_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct!.customizedScalingMetricSpecification),
      predefined_scaling_metric_specification: autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct!.predefinedScalingMetricSpecification),
    }
  }

  export interface AutoscalingplansScalingPlanScalingInstruction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#disable_dynamic_scaling AutoscalingplansScalingPlan#disable_dynamic_scaling}
    */
    readonly disableDynamicScaling?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#max_capacity AutoscalingplansScalingPlan#max_capacity}
    */
    readonly maxCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#min_capacity AutoscalingplansScalingPlan#min_capacity}
    */
    readonly minCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predictive_scaling_max_capacity_behavior AutoscalingplansScalingPlan#predictive_scaling_max_capacity_behavior}
    */
    readonly predictiveScalingMaxCapacityBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predictive_scaling_max_capacity_buffer AutoscalingplansScalingPlan#predictive_scaling_max_capacity_buffer}
    */
    readonly predictiveScalingMaxCapacityBuffer?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predictive_scaling_mode AutoscalingplansScalingPlan#predictive_scaling_mode}
    */
    readonly predictiveScalingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#resource_id AutoscalingplansScalingPlan#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scalable_dimension AutoscalingplansScalingPlan#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scaling_policy_update_behavior AutoscalingplansScalingPlan#scaling_policy_update_behavior}
    */
    readonly scalingPolicyUpdateBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#scheduled_action_buffer_time AutoscalingplansScalingPlan#scheduled_action_buffer_time}
    */
    readonly scheduledActionBufferTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#service_namespace AutoscalingplansScalingPlan#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * customized_load_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#customized_load_metric_specification AutoscalingplansScalingPlan#customized_load_metric_specification}
    */
    readonly customizedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification;
    /**
    * predefined_load_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#predefined_load_metric_specification AutoscalingplansScalingPlan#predefined_load_metric_specification}
    */
    readonly predefinedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification;
    /**
    * target_tracking_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html#target_tracking_configuration AutoscalingplansScalingPlan#target_tracking_configuration}
    */
    readonly targetTrackingConfiguration: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[];
  }

  function autoscalingplansScalingPlanScalingInstructionToTerraform(struct?: AutoscalingplansScalingPlanScalingInstruction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      disable_dynamic_scaling: cdktf.booleanToTerraform(struct!.disableDynamicScaling),
      max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
      min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
      predictive_scaling_max_capacity_behavior: cdktf.stringToTerraform(struct!.predictiveScalingMaxCapacityBehavior),
      predictive_scaling_max_capacity_buffer: cdktf.numberToTerraform(struct!.predictiveScalingMaxCapacityBuffer),
      predictive_scaling_mode: cdktf.stringToTerraform(struct!.predictiveScalingMode),
      resource_id: cdktf.stringToTerraform(struct!.resourceId),
      scalable_dimension: cdktf.stringToTerraform(struct!.scalableDimension),
      scaling_policy_update_behavior: cdktf.stringToTerraform(struct!.scalingPolicyUpdateBehavior),
      scheduled_action_buffer_time: cdktf.numberToTerraform(struct!.scheduledActionBufferTime),
      service_namespace: cdktf.stringToTerraform(struct!.serviceNamespace),
      customized_load_metric_specification: autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct!.customizedLoadMetricSpecification),
      predefined_load_metric_specification: autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct!.predefinedLoadMetricSpecification),
      target_tracking_configuration: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform)(struct!.targetTrackingConfiguration),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan}
  */
  export class AutoscalingplansScalingPlan extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscalingplans_scaling_plan";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingplansScalingPlanConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingplansScalingPlanConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscalingplans_scaling_plan',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._applicationSource = config.applicationSource;
      this._scalingInstruction = config.scalingInstruction;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // scaling_plan_version - computed: true, optional: false, required: false
    public get scalingPlanVersion() {
      return this.getNumberAttribute('scaling_plan_version');
    }

    // application_source - computed: false, optional: false, required: true
    private _applicationSource?: AutoscalingplansScalingPlanApplicationSource; 
    private __applicationSourceOutput = new AutoscalingplansScalingPlanApplicationSourceOutputReference(this as any, "application_source", true);
    public get applicationSource() {
      return this.__applicationSourceOutput;
    }
    public putApplicationSource(value: AutoscalingplansScalingPlanApplicationSource) {
      this._applicationSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationSourceInput() {
      return this._applicationSource
    }

    // scaling_instruction - computed: false, optional: false, required: true
    private _scalingInstruction?: AutoscalingplansScalingPlanScalingInstruction[]; 
    public get scalingInstruction() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('scaling_instruction') as any;
    }
    public set scalingInstruction(value: AutoscalingplansScalingPlanScalingInstruction[]) {
      this._scalingInstruction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingInstructionInput() {
      return this._scalingInstruction
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        application_source: autoscalingplansScalingPlanApplicationSourceToTerraform(this._applicationSource),
        scaling_instruction: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionToTerraform)(this._scalingInstruction),
      };
    }
  }
}
