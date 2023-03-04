// https://www.terraform.io/docs/providers/aws/r/autoscaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#adjustment_type AutoscalingPolicy#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#cooldown AutoscalingPolicy#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#enabled AutoscalingPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#id AutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}
  */
  readonly metricAggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}
  */
  readonly minAdjustmentMagnitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#policy_type AutoscalingPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment?: number;
  /**
  * predictive_scaling_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predictive_scaling_configuration AutoscalingPolicy#predictive_scaling_configuration}
  */
  readonly predictiveScalingConfiguration?: AutoscalingPolicyPredictiveScalingConfiguration;
  /**
  * step_adjustment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#step_adjustment AutoscalingPolicy#step_adjustment}
  */
  readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable;
  /**
  * target_tracking_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#target_tracking_configuration AutoscalingPolicy#target_tracking_configuration}
  */
  readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#value AutoscalingPolicy#value}
  */
  readonly value: string;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#namespace AutoscalingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#dimensions AutoscalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimensions: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform, true)(struct!.dimensions),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimensions.internalValue = value.dimensions;
    }
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
    return this._metricName;
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
    return this._namespace;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#stat AutoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#unit AutoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric AutoscalingPolicy#metric}
  */
  readonly metric: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stat = undefined;
      this._unit = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stat = value.stat;
      this._unit = value.unit;
      this._metric.internalValue = value.metric;
    }
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#expression AutoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#id AutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#label AutoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#return_data AutoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_stat AutoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._returnData = undefined;
      this._metricStat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._returnData = value.returnData;
      this._metricStat.internalValue = value.metricStat;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // return_data - computed: false, optional: true, required: false
  private _returnData?: boolean | cdktf.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktf.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }

  // metric_stat - computed: false, optional: true, required: false
  private _metricStat = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference {
    return new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification {
  /**
  * metric_data_queries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_data_queries AutoscalingPolicy#metric_data_queries}
  */
  readonly metricDataQueries: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_data_queries: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesToTerraform, true)(struct!.metricDataQueries),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDataQueries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDataQueries.internalValue = value.metricDataQueries;
    }
  }

  // metric_data_queries - computed: false, optional: false, required: true
  private _metricDataQueries = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", false);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktf.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#value AutoscalingPolicy#value}
  */
  readonly value: string;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#namespace AutoscalingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#dimensions AutoscalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimensions: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform, true)(struct!.dimensions),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimensions.internalValue = value.dimensions;
    }
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
    return this._metricName;
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
    return this._namespace;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#stat AutoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#unit AutoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric AutoscalingPolicy#metric}
  */
  readonly metric: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stat = undefined;
      this._unit = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stat = value.stat;
      this._unit = value.unit;
      this._metric.internalValue = value.metric;
    }
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#expression AutoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#id AutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#label AutoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#return_data AutoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_stat AutoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._returnData = undefined;
      this._metricStat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._returnData = value.returnData;
      this._metricStat.internalValue = value.metricStat;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // return_data - computed: false, optional: true, required: false
  private _returnData?: boolean | cdktf.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktf.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }

  // metric_stat - computed: false, optional: true, required: false
  private _metricStat = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference {
    return new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification {
  /**
  * metric_data_queries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_data_queries AutoscalingPolicy#metric_data_queries}
  */
  readonly metricDataQueries: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_data_queries: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesToTerraform, true)(struct!.metricDataQueries),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDataQueries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDataQueries.internalValue = value.metricDataQueries;
    }
  }

  // metric_data_queries - computed: false, optional: false, required: true
  private _metricDataQueries = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", false);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktf.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#value AutoscalingPolicy#value}
  */
  readonly value: string;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference {
    return new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#namespace AutoscalingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#dimensions AutoscalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimensions: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform, true)(struct!.dimensions),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimensions.internalValue = value.dimensions;
    }
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
    return this._metricName;
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
    return this._namespace;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#stat AutoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#unit AutoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric AutoscalingPolicy#metric}
  */
  readonly metric: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct!.metric),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stat = undefined;
      this._unit = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stat = value.stat;
      this._unit = value.unit;
      this._metric.internalValue = value.metric;
    }
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#expression AutoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#id AutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#label AutoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#return_data AutoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_stat AutoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct!.metricStat),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._returnData = undefined;
      this._metricStat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._returnData = value.returnData;
      this._metricStat.internalValue = value.metricStat;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // return_data - computed: false, optional: true, required: false
  private _returnData?: boolean | cdktf.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktf.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }

  // metric_stat - computed: false, optional: true, required: false
  private _metricStat = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference {
    return new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification {
  /**
  * metric_data_queries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_data_queries AutoscalingPolicy#metric_data_queries}
  */
  readonly metricDataQueries: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_data_queries: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesToTerraform, true)(struct!.metricDataQueries),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDataQueries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDataQueries.internalValue = value.metricDataQueries;
    }
  }

  // metric_data_queries - computed: false, optional: false, required: true
  private _metricDataQueries = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesList(this, "metric_data_queries", false);
  public get metricDataQueries() {
    return this._metricDataQueries;
  }
  public putMetricDataQueries(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktf.IResolvable) {
    this._metricDataQueries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueriesInput() {
    return this._metricDataQueries.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
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
    return this._predefinedMetricType;
  }

  // resource_label - computed: false, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
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
    return this._predefinedMetricType;
  }

  // resource_label - computed: false, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
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
    return this._predefinedMetricType;
  }

  // resource_label - computed: false, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#target_value AutoscalingPolicy#target_value}
  */
  readonly targetValue: number;
  /**
  * customized_capacity_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#customized_capacity_metric_specification AutoscalingPolicy#customized_capacity_metric_specification}
  */
  readonly customizedCapacityMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification;
  /**
  * customized_load_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#customized_load_metric_specification AutoscalingPolicy#customized_load_metric_specification}
  */
  readonly customizedLoadMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification;
  /**
  * customized_scaling_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#customized_scaling_metric_specification AutoscalingPolicy#customized_scaling_metric_specification}
  */
  readonly customizedScalingMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification;
  /**
  * predefined_load_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_load_metric_specification AutoscalingPolicy#predefined_load_metric_specification}
  */
  readonly predefinedLoadMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
  /**
  * predefined_metric_pair_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_metric_pair_specification AutoscalingPolicy#predefined_metric_pair_specification}
  */
  readonly predefinedMetricPairSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
  /**
  * predefined_scaling_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_scaling_metric_specification AutoscalingPolicy#predefined_scaling_metric_specification}
  */
  readonly predefinedScalingMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
}

export function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_value: cdktf.numberToTerraform(struct!.targetValue),
    customized_capacity_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToTerraform(struct!.customizedCapacityMetricSpecification),
    customized_load_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToTerraform(struct!.customizedLoadMetricSpecification),
    customized_scaling_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToTerraform(struct!.customizedScalingMetricSpecification),
    predefined_load_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct!.predefinedLoadMetricSpecification),
    predefined_metric_pair_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct!.predefinedMetricPairSpecification),
    predefined_scaling_metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct!.predefinedScalingMetricSpecification),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    if (this._customizedCapacityMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedCapacityMetricSpecification = this._customizedCapacityMetricSpecification?.internalValue;
    }
    if (this._customizedLoadMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedLoadMetricSpecification = this._customizedLoadMetricSpecification?.internalValue;
    }
    if (this._customizedScalingMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedScalingMetricSpecification = this._customizedScalingMetricSpecification?.internalValue;
    }
    if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
    }
    if (this._predefinedMetricPairSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricPairSpecification = this._predefinedMetricPairSpecification?.internalValue;
    }
    if (this._predefinedScalingMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetValue = undefined;
      this._customizedCapacityMetricSpecification.internalValue = undefined;
      this._customizedLoadMetricSpecification.internalValue = undefined;
      this._customizedScalingMetricSpecification.internalValue = undefined;
      this._predefinedLoadMetricSpecification.internalValue = undefined;
      this._predefinedMetricPairSpecification.internalValue = undefined;
      this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetValue = value.targetValue;
      this._customizedCapacityMetricSpecification.internalValue = value.customizedCapacityMetricSpecification;
      this._customizedLoadMetricSpecification.internalValue = value.customizedLoadMetricSpecification;
      this._customizedScalingMetricSpecification.internalValue = value.customizedScalingMetricSpecification;
      this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
      this._predefinedMetricPairSpecification.internalValue = value.predefinedMetricPairSpecification;
      this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
    }
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
    return this._targetValue;
  }

  // customized_capacity_metric_specification - computed: false, optional: true, required: false
  private _customizedCapacityMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference(this, "customized_capacity_metric_specification");
  public get customizedCapacityMetricSpecification() {
    return this._customizedCapacityMetricSpecification;
  }
  public putCustomizedCapacityMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification) {
    this._customizedCapacityMetricSpecification.internalValue = value;
  }
  public resetCustomizedCapacityMetricSpecification() {
    this._customizedCapacityMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedCapacityMetricSpecificationInput() {
    return this._customizedCapacityMetricSpecification.internalValue;
  }

  // customized_load_metric_specification - computed: false, optional: true, required: false
  private _customizedLoadMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference(this, "customized_load_metric_specification");
  public get customizedLoadMetricSpecification() {
    return this._customizedLoadMetricSpecification;
  }
  public putCustomizedLoadMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification) {
    this._customizedLoadMetricSpecification.internalValue = value;
  }
  public resetCustomizedLoadMetricSpecification() {
    this._customizedLoadMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedLoadMetricSpecificationInput() {
    return this._customizedLoadMetricSpecification.internalValue;
  }

  // customized_scaling_metric_specification - computed: false, optional: true, required: false
  private _customizedScalingMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference(this, "customized_scaling_metric_specification");
  public get customizedScalingMetricSpecification() {
    return this._customizedScalingMetricSpecification;
  }
  public putCustomizedScalingMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification) {
    this._customizedScalingMetricSpecification.internalValue = value;
  }
  public resetCustomizedScalingMetricSpecification() {
    this._customizedScalingMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedScalingMetricSpecificationInput() {
    return this._customizedScalingMetricSpecification.internalValue;
  }

  // predefined_load_metric_specification - computed: false, optional: true, required: false
  private _predefinedLoadMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
  public get predefinedLoadMetricSpecification() {
    return this._predefinedLoadMetricSpecification;
  }
  public putPredefinedLoadMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification) {
    this._predefinedLoadMetricSpecification.internalValue = value;
  }
  public resetPredefinedLoadMetricSpecification() {
    this._predefinedLoadMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedLoadMetricSpecificationInput() {
    return this._predefinedLoadMetricSpecification.internalValue;
  }

  // predefined_metric_pair_specification - computed: false, optional: true, required: false
  private _predefinedMetricPairSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference(this, "predefined_metric_pair_specification");
  public get predefinedMetricPairSpecification() {
    return this._predefinedMetricPairSpecification;
  }
  public putPredefinedMetricPairSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification) {
    this._predefinedMetricPairSpecification.internalValue = value;
  }
  public resetPredefinedMetricPairSpecification() {
    this._predefinedMetricPairSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricPairSpecificationInput() {
    return this._predefinedMetricPairSpecification.internalValue;
  }

  // predefined_scaling_metric_specification - computed: false, optional: true, required: false
  private _predefinedScalingMetricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
  public get predefinedScalingMetricSpecification() {
    return this._predefinedScalingMetricSpecification;
  }
  public putPredefinedScalingMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification) {
    this._predefinedScalingMetricSpecification.internalValue = value;
  }
  public resetPredefinedScalingMetricSpecification() {
    this._predefinedScalingMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedScalingMetricSpecificationInput() {
    return this._predefinedScalingMetricSpecification.internalValue;
  }
}
export interface AutoscalingPolicyPredictiveScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#max_capacity_breach_behavior AutoscalingPolicy#max_capacity_breach_behavior}
  */
  readonly maxCapacityBreachBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#max_capacity_buffer AutoscalingPolicy#max_capacity_buffer}
  */
  readonly maxCapacityBuffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#mode AutoscalingPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#scheduling_buffer_time AutoscalingPolicy#scheduling_buffer_time}
  */
  readonly schedulingBufferTime?: string;
  /**
  * metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_specification AutoscalingPolicy#metric_specification}
  */
  readonly metricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification;
}

export function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationOutputReference | AutoscalingPolicyPredictiveScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity_breach_behavior: cdktf.stringToTerraform(struct!.maxCapacityBreachBehavior),
    max_capacity_buffer: cdktf.stringToTerraform(struct!.maxCapacityBuffer),
    mode: cdktf.stringToTerraform(struct!.mode),
    scheduling_buffer_time: cdktf.stringToTerraform(struct!.schedulingBufferTime),
    metric_specification: autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct!.metricSpecification),
  }
}

export class AutoscalingPolicyPredictiveScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyPredictiveScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacityBreachBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacityBreachBehavior = this._maxCapacityBreachBehavior;
    }
    if (this._maxCapacityBuffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacityBuffer = this._maxCapacityBuffer;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._schedulingBufferTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingBufferTime = this._schedulingBufferTime;
    }
    if (this._metricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSpecification = this._metricSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyPredictiveScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCapacityBreachBehavior = undefined;
      this._maxCapacityBuffer = undefined;
      this._mode = undefined;
      this._schedulingBufferTime = undefined;
      this._metricSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCapacityBreachBehavior = value.maxCapacityBreachBehavior;
      this._maxCapacityBuffer = value.maxCapacityBuffer;
      this._mode = value.mode;
      this._schedulingBufferTime = value.schedulingBufferTime;
      this._metricSpecification.internalValue = value.metricSpecification;
    }
  }

  // max_capacity_breach_behavior - computed: false, optional: true, required: false
  private _maxCapacityBreachBehavior?: string; 
  public get maxCapacityBreachBehavior() {
    return this.getStringAttribute('max_capacity_breach_behavior');
  }
  public set maxCapacityBreachBehavior(value: string) {
    this._maxCapacityBreachBehavior = value;
  }
  public resetMaxCapacityBreachBehavior() {
    this._maxCapacityBreachBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityBreachBehaviorInput() {
    return this._maxCapacityBreachBehavior;
  }

  // max_capacity_buffer - computed: false, optional: true, required: false
  private _maxCapacityBuffer?: string; 
  public get maxCapacityBuffer() {
    return this.getStringAttribute('max_capacity_buffer');
  }
  public set maxCapacityBuffer(value: string) {
    this._maxCapacityBuffer = value;
  }
  public resetMaxCapacityBuffer() {
    this._maxCapacityBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityBufferInput() {
    return this._maxCapacityBuffer;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // scheduling_buffer_time - computed: false, optional: true, required: false
  private _schedulingBufferTime?: string; 
  public get schedulingBufferTime() {
    return this.getStringAttribute('scheduling_buffer_time');
  }
  public set schedulingBufferTime(value: string) {
    this._schedulingBufferTime = value;
  }
  public resetSchedulingBufferTime() {
    this._schedulingBufferTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingBufferTimeInput() {
    return this._schedulingBufferTime;
  }

  // metric_specification - computed: false, optional: false, required: true
  private _metricSpecification = new AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference(this, "metric_specification");
  public get metricSpecification() {
    return this._metricSpecification;
  }
  public putMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification) {
    this._metricSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSpecificationInput() {
    return this._metricSpecification.internalValue;
  }
}
export interface AutoscalingPolicyStepAdjustment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}
  */
  readonly metricIntervalLowerBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}
  */
  readonly metricIntervalUpperBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment: number;
}

export function autoscalingPolicyStepAdjustmentToTerraform(struct?: AutoscalingPolicyStepAdjustment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_interval_lower_bound: cdktf.stringToTerraform(struct!.metricIntervalLowerBound),
    metric_interval_upper_bound: cdktf.stringToTerraform(struct!.metricIntervalUpperBound),
    scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
  }
}

export class AutoscalingPolicyStepAdjustmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyStepAdjustment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricIntervalLowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
    }
    if (this._metricIntervalUpperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
    }
    if (this._scalingAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingAdjustment = this._scalingAdjustment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyStepAdjustment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = undefined;
      this._metricIntervalUpperBound = undefined;
      this._scalingAdjustment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricIntervalLowerBound = value.metricIntervalLowerBound;
      this._metricIntervalUpperBound = value.metricIntervalUpperBound;
      this._scalingAdjustment = value.scalingAdjustment;
    }
  }

  // metric_interval_lower_bound - computed: false, optional: true, required: false
  private _metricIntervalLowerBound?: string; 
  public get metricIntervalLowerBound() {
    return this.getStringAttribute('metric_interval_lower_bound');
  }
  public set metricIntervalLowerBound(value: string) {
    this._metricIntervalLowerBound = value;
  }
  public resetMetricIntervalLowerBound() {
    this._metricIntervalLowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalLowerBoundInput() {
    return this._metricIntervalLowerBound;
  }

  // metric_interval_upper_bound - computed: false, optional: true, required: false
  private _metricIntervalUpperBound?: string; 
  public get metricIntervalUpperBound() {
    return this.getStringAttribute('metric_interval_upper_bound');
  }
  public set metricIntervalUpperBound(value: string) {
    this._metricIntervalUpperBound = value;
  }
  public resetMetricIntervalUpperBound() {
    this._metricIntervalUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIntervalUpperBoundInput() {
    return this._metricIntervalUpperBound;
  }

  // scaling_adjustment - computed: false, optional: false, required: true
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }
}

export class AutoscalingPolicyStepAdjustmentList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyStepAdjustmentOutputReference {
    return new AutoscalingPolicyStepAdjustmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#value AutoscalingPolicy#value}
  */
  readonly value: string;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference {
    return new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#name AutoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#value AutoscalingPolicy#value}
  */
  readonly value: string;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference {
    return new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#namespace AutoscalingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * dimensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#dimensions AutoscalingPolicy#dimensions}
  */
  readonly dimensions?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimensions: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform, true)(struct!.dimensions),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimensions.internalValue = value.dimensions;
    }
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
    return this._metricName;
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
    return this._namespace;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#stat AutoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#unit AutoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric AutoscalingPolicy#metric}
  */
  readonly metric: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct!.metric),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stat = undefined;
      this._unit = undefined;
      this._metric.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stat = value.stat;
      this._unit = value.unit;
      this._metric.internalValue = value.metric;
    }
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#expression AutoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#id AutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#label AutoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#return_data AutoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_stat AutoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct!.metricStat),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._returnData = undefined;
      this._metricStat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._returnData = value.returnData;
      this._metricStat.internalValue = value.metricStat;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // return_data - computed: false, optional: true, required: false
  private _returnData?: boolean | cdktf.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktf.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }

  // metric_stat - computed: false, optional: true, required: false
  private _metricStat = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList extends cdktf.ComplexList {
  public internalValue? : AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable

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
  public get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference {
    return new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#namespace AutoscalingPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#statistic AutoscalingPolicy#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#unit AutoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric_dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metric_dimension AutoscalingPolicy#metric_dimension}
  */
  readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable;
  /**
  * metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#metrics AutoscalingPolicy#metrics}
  */
  readonly metrics?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable;
}

export function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform, true)(struct!.metricDimension),
    metrics: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToTerraform, true)(struct!.metrics),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._metricDimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDimension = this._metricDimension?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._statistic = undefined;
      this._unit = undefined;
      this._metricDimension.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._statistic = value.statistic;
      this._unit = value.unit;
      this._metricDimension.internalValue = value.metricDimension;
      this._metrics.internalValue = value.metrics;
    }
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // metric_dimension - computed: false, optional: true, required: false
  private _metricDimension = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList(this, "metric_dimension", false);
  public get metricDimension() {
    return this._metricDimension;
  }
  public putMetricDimension(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable) {
    this._metricDimension.internalValue = value;
  }
  public resetMetricDimension() {
    this._metricDimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDimensionInput() {
    return this._metricDimension.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#resource_label AutoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedMetricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricType = this._predefinedMetricType;
    }
    if (this._resourceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabel = this._resourceLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedMetricType = undefined;
      this._resourceLabel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedMetricType = value.predefinedMetricType;
      this._resourceLabel = value.resourceLabel;
    }
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
    return this._predefinedMetricType;
  }

  // resource_label - computed: false, optional: true, required: false
  private _resourceLabel?: string; 
  public get resourceLabel() {
    return this.getStringAttribute('resource_label');
  }
  public set resourceLabel(value: string) {
    this._resourceLabel = value;
  }
  public resetResourceLabel() {
    this._resourceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelInput() {
    return this._resourceLabel;
  }
}
export interface AutoscalingPolicyTargetTrackingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#disable_scale_in AutoscalingPolicy#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#target_value AutoscalingPolicy#target_value}
  */
  readonly targetValue: number;
  /**
  * customized_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#customized_metric_specification AutoscalingPolicy#customized_metric_specification}
  */
  readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
  /**
  * predefined_metric_specification block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy#predefined_metric_specification AutoscalingPolicy#predefined_metric_specification}
  */
  readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
}

export function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationOutputReference | AutoscalingPolicyTargetTrackingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
    customized_metric_specification: autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct!.customizedMetricSpecification),
    predefined_metric_specification: autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct!.predefinedMetricSpecification),
  }
}

export class AutoscalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoscalingPolicyTargetTrackingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    if (this._customizedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
    }
    if (this._predefinedMetricSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingPolicyTargetTrackingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableScaleIn = undefined;
      this._targetValue = undefined;
      this._customizedMetricSpecification.internalValue = undefined;
      this._predefinedMetricSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableScaleIn = value.disableScaleIn;
      this._targetValue = value.targetValue;
      this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
      this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
    }
  }

  // disable_scale_in - computed: false, optional: true, required: false
  private _disableScaleIn?: boolean | cdktf.IResolvable; 
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }
  public set disableScaleIn(value: boolean | cdktf.IResolvable) {
    this._disableScaleIn = value;
  }
  public resetDisableScaleIn() {
    this._disableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScaleInInput() {
    return this._disableScaleIn;
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
    return this._targetValue;
  }

  // customized_metric_specification - computed: false, optional: true, required: false
  private _customizedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification");
  public get customizedMetricSpecification() {
    return this._customizedMetricSpecification;
  }
  public putCustomizedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification) {
    this._customizedMetricSpecification.internalValue = value;
  }
  public resetCustomizedMetricSpecification() {
    this._customizedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedMetricSpecificationInput() {
    return this._customizedMetricSpecification.internalValue;
  }

  // predefined_metric_specification - computed: false, optional: true, required: false
  private _predefinedMetricSpecification = new AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification");
  public get predefinedMetricSpecification() {
    return this._predefinedMetricSpecification;
  }
  public putPredefinedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification) {
    this._predefinedMetricSpecification.internalValue = value;
  }
  public resetPredefinedMetricSpecification() {
    this._predefinedMetricSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedMetricSpecificationInput() {
    return this._predefinedMetricSpecification.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy aws_autoscaling_policy}
*/
export class AutoscalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_autoscaling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy aws_autoscaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_policy',
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
    this._adjustmentType = config.adjustmentType;
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._cooldown = config.cooldown;
    this._enabled = config.enabled;
    this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
    this._id = config.id;
    this._metricAggregationType = config.metricAggregationType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._name = config.name;
    this._policyType = config.policyType;
    this._scalingAdjustment = config.scalingAdjustment;
    this._predictiveScalingConfiguration.internalValue = config.predictiveScalingConfiguration;
    this._stepAdjustment.internalValue = config.stepAdjustment;
    this._targetTrackingConfiguration.internalValue = config.targetTrackingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number; 
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }
  public set cooldown(value: number) {
    this._cooldown = value;
  }
  public resetCooldown() {
    this._cooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // estimated_instance_warmup - computed: false, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
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
    return this._metricAggregationType;
  }

  // min_adjustment_magnitude - computed: false, optional: true, required: false
  private _minAdjustmentMagnitude?: number; 
  public get minAdjustmentMagnitude() {
    return this.getNumberAttribute('min_adjustment_magnitude');
  }
  public set minAdjustmentMagnitude(value: number) {
    this._minAdjustmentMagnitude = value;
  }
  public resetMinAdjustmentMagnitude() {
    this._minAdjustmentMagnitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentMagnitudeInput() {
    return this._minAdjustmentMagnitude;
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

  // scaling_adjustment - computed: false, optional: true, required: false
  private _scalingAdjustment?: number; 
  public get scalingAdjustment() {
    return this.getNumberAttribute('scaling_adjustment');
  }
  public set scalingAdjustment(value: number) {
    this._scalingAdjustment = value;
  }
  public resetScalingAdjustment() {
    this._scalingAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingAdjustmentInput() {
    return this._scalingAdjustment;
  }

  // predictive_scaling_configuration - computed: false, optional: true, required: false
  private _predictiveScalingConfiguration = new AutoscalingPolicyPredictiveScalingConfigurationOutputReference(this, "predictive_scaling_configuration");
  public get predictiveScalingConfiguration() {
    return this._predictiveScalingConfiguration;
  }
  public putPredictiveScalingConfiguration(value: AutoscalingPolicyPredictiveScalingConfiguration) {
    this._predictiveScalingConfiguration.internalValue = value;
  }
  public resetPredictiveScalingConfiguration() {
    this._predictiveScalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingConfigurationInput() {
    return this._predictiveScalingConfiguration.internalValue;
  }

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment = new AutoscalingPolicyStepAdjustmentList(this, "step_adjustment", true);
  public get stepAdjustment() {
    return this._stepAdjustment;
  }
  public putStepAdjustment(value: AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable) {
    this._stepAdjustment.internalValue = value;
  }
  public resetStepAdjustment() {
    this._stepAdjustment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentInput() {
    return this._stepAdjustment.internalValue;
  }

  // target_tracking_configuration - computed: false, optional: true, required: false
  private _targetTrackingConfiguration = new AutoscalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration");
  public get targetTrackingConfiguration() {
    return this._targetTrackingConfiguration;
  }
  public putTargetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration) {
    this._targetTrackingConfiguration.internalValue = value;
  }
  public resetTargetTrackingConfiguration() {
    this._targetTrackingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingConfigurationInput() {
    return this._targetTrackingConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      cooldown: cdktf.numberToTerraform(this._cooldown),
      enabled: cdktf.booleanToTerraform(this._enabled),
      estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
      id: cdktf.stringToTerraform(this._id),
      metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
      min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
      predictive_scaling_configuration: autoscalingPolicyPredictiveScalingConfigurationToTerraform(this._predictiveScalingConfiguration.internalValue),
      step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform, true)(this._stepAdjustment.internalValue),
      target_tracking_configuration: autoscalingPolicyTargetTrackingConfigurationToTerraform(this._targetTrackingConfiguration.internalValue),
    };
  }
}
