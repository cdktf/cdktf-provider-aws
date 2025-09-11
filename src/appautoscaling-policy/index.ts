/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppautoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#region AppautoscalingPolicy#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}
  */
  readonly serviceNamespace: string;
  /**
  * predictive_scaling_policy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predictive_scaling_policy_configuration AppautoscalingPolicy#predictive_scaling_policy_configuration}
  */
  readonly predictiveScalingPolicyConfiguration?: AppautoscalingPolicyPredictiveScalingPolicyConfiguration;
  /**
  * step_scaling_policy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}
  */
  readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration;
  /**
  * target_tracking_scaling_policy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}
  */
  readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}
  */
  readonly value: string;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable | undefined) {
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

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference {
    return new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#dimension AppautoscalingPolicy#dimension}
  */
  readonly dimension?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimension: cdktf.listMapper(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionToTerraform, true)(struct!.dimension),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktf.listMapperHcl(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric | undefined {
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
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimension.internalValue = value.dimension;
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

  // dimension - computed: false, optional: true, required: false
  private _dimension = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#stat AppautoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric AppautoscalingPolicy#metric}
  */
  readonly metric: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricToTerraform(struct!.metric),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat | undefined) {
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
  private _metric = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#expression AppautoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#label AppautoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#return_data AppautoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_stat AppautoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatToTerraform(struct!.metricStat),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_data: {
      value: cdktf.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_stat: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery | cdktf.IResolvable | undefined) {
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
  private _metricStat = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryMetricStat) {
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

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryOutputReference {
    return new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecification {
  /**
  * metric_data_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_data_query AppautoscalingPolicy#metric_data_query}
  */
  readonly metricDataQuery: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery[] | cdktf.IResolvable;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_data_query: cdktf.listMapper(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryToTerraform, true)(struct!.metricDataQuery),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_data_query: {
      value: cdktf.listMapperHcl(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryToHclTerraform, true)(struct!.metricDataQuery),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQuery = this._metricDataQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDataQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDataQuery.internalValue = value.metricDataQuery;
    }
  }

  // metric_data_query - computed: false, optional: false, required: true
  private _metricDataQuery = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueryList(this, "metric_data_query", false);
  public get metricDataQuery() {
    return this._metricDataQuery;
  }
  public putMetricDataQuery(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQuery[] | cdktf.IResolvable) {
    this._metricDataQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueryInput() {
    return this._metricDataQuery.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}
  */
  readonly value: string;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable | undefined) {
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

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference {
    return new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#dimension AppautoscalingPolicy#dimension}
  */
  readonly dimension?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimension: cdktf.listMapper(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionToTerraform, true)(struct!.dimension),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktf.listMapperHcl(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric | undefined {
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
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimension.internalValue = value.dimension;
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

  // dimension - computed: false, optional: true, required: false
  private _dimension = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#stat AppautoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric AppautoscalingPolicy#metric}
  */
  readonly metric: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricToTerraform(struct!.metric),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat | undefined) {
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
  private _metric = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#expression AppautoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#label AppautoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#return_data AppautoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_stat AppautoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatToTerraform(struct!.metricStat),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_data: {
      value: cdktf.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_stat: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery | cdktf.IResolvable | undefined) {
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
  private _metricStat = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryMetricStat) {
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

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryOutputReference {
    return new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecification {
  /**
  * metric_data_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_data_query AppautoscalingPolicy#metric_data_query}
  */
  readonly metricDataQuery: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery[] | cdktf.IResolvable;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_data_query: cdktf.listMapper(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryToTerraform, true)(struct!.metricDataQuery),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_data_query: {
      value: cdktf.listMapperHcl(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryToHclTerraform, true)(struct!.metricDataQuery),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQuery = this._metricDataQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDataQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDataQuery.internalValue = value.metricDataQuery;
    }
  }

  // metric_data_query - computed: false, optional: false, required: true
  private _metricDataQuery = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueryList(this, "metric_data_query", false);
  public get metricDataQuery() {
    return this._metricDataQuery;
  }
  public putMetricDataQuery(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQuery[] | cdktf.IResolvable) {
    this._metricDataQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueryInput() {
    return this._metricDataQuery.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}
  */
  readonly value: string;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension | cdktf.IResolvable | undefined) {
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

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference {
    return new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#dimension AppautoscalingPolicy#dimension}
  */
  readonly dimension?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimension: cdktf.listMapper(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionToTerraform, true)(struct!.dimension),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktf.listMapperHcl(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric | undefined {
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
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._dimension.internalValue = value.dimension;
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

  // dimension - computed: false, optional: true, required: false
  private _dimension = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#stat AppautoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric AppautoscalingPolicy#metric}
  */
  readonly metric: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricToTerraform(struct!.metric),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat | undefined) {
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
  private _metric = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#expression AppautoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#label AppautoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#return_data AppautoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_stat AppautoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatToTerraform(struct!.metricStat),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_data: {
      value: cdktf.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_stat: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery | cdktf.IResolvable | undefined) {
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
  private _metricStat = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryMetricStat) {
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

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryOutputReference {
    return new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecification {
  /**
  * metric_data_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_data_query AppautoscalingPolicy#metric_data_query}
  */
  readonly metricDataQuery: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery[] | cdktf.IResolvable;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_data_query: cdktf.listMapper(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryToTerraform, true)(struct!.metricDataQuery),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_data_query: {
      value: cdktf.listMapperHcl(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryToHclTerraform, true)(struct!.metricDataQuery),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricDataQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDataQuery = this._metricDataQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricDataQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricDataQuery.internalValue = value.metricDataQuery;
    }
  }

  // metric_data_query - computed: false, optional: false, required: true
  private _metricDataQuery = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueryList(this, "metric_data_query", false);
  public get metricDataQuery() {
    return this._metricDataQuery;
  }
  public putMetricDataQuery(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQuery[] | cdktf.IResolvable) {
    this._metricDataQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDataQueryInput() {
    return this._metricDataQuery.internalValue;
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktf.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined) {
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
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktf.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined) {
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
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktf.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined) {
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
export interface AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}
  */
  readonly targetValue: string;
  /**
  * customized_capacity_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#customized_capacity_metric_specification AppautoscalingPolicy#customized_capacity_metric_specification}
  */
  readonly customizedCapacityMetricSpecification?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecification;
  /**
  * customized_load_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#customized_load_metric_specification AppautoscalingPolicy#customized_load_metric_specification}
  */
  readonly customizedLoadMetricSpecification?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecification;
  /**
  * customized_scaling_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#customized_scaling_metric_specification AppautoscalingPolicy#customized_scaling_metric_specification}
  */
  readonly customizedScalingMetricSpecification?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecification;
  /**
  * predefined_load_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_load_metric_specification AppautoscalingPolicy#predefined_load_metric_specification}
  */
  readonly predefinedLoadMetricSpecification?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
  /**
  * predefined_metric_pair_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_metric_pair_specification AppautoscalingPolicy#predefined_metric_pair_specification}
  */
  readonly predefinedMetricPairSpecification?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecification;
  /**
  * predefined_scaling_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_scaling_metric_specification AppautoscalingPolicy#predefined_scaling_metric_specification}
  */
  readonly predefinedScalingMetricSpecification?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_value: cdktf.stringToTerraform(struct!.targetValue),
    customized_capacity_metric_specification: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToTerraform(struct!.customizedCapacityMetricSpecification),
    customized_load_metric_specification: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToTerraform(struct!.customizedLoadMetricSpecification),
    customized_scaling_metric_specification: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToTerraform(struct!.customizedScalingMetricSpecification),
    predefined_load_metric_specification: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct!.predefinedLoadMetricSpecification),
    predefined_metric_pair_specification: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct!.predefinedMetricPairSpecification),
    predefined_scaling_metric_specification: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct!.predefinedScalingMetricSpecification),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_value: {
      value: cdktf.stringToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customized_capacity_metric_specification: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToHclTerraform(struct!.customizedCapacityMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationList",
    },
    customized_load_metric_specification: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToHclTerraform(struct!.customizedLoadMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationList",
    },
    customized_scaling_metric_specification: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToHclTerraform(struct!.customizedScalingMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationList",
    },
    predefined_load_metric_specification: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform(struct!.predefinedLoadMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationList",
    },
    predefined_metric_pair_specification: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform(struct!.predefinedMetricPairSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationList",
    },
    predefined_scaling_metric_specification: {
      value: appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform(struct!.predefinedScalingMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetValue = undefined;
      this._customizedCapacityMetricSpecification.internalValue = undefined;
      this._customizedLoadMetricSpecification.internalValue = undefined;
      this._customizedScalingMetricSpecification.internalValue = undefined;
      this._predefinedLoadMetricSpecification.internalValue = undefined;
      this._predefinedMetricPairSpecification.internalValue = undefined;
      this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _targetValue?: string; 
  public get targetValue() {
    return this.getStringAttribute('target_value');
  }
  public set targetValue(value: string) {
    this._targetValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }

  // customized_capacity_metric_specification - computed: false, optional: true, required: false
  private _customizedCapacityMetricSpecification = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference(this, "customized_capacity_metric_specification");
  public get customizedCapacityMetricSpecification() {
    return this._customizedCapacityMetricSpecification;
  }
  public putCustomizedCapacityMetricSpecification(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedCapacityMetricSpecification) {
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
  private _customizedLoadMetricSpecification = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference(this, "customized_load_metric_specification");
  public get customizedLoadMetricSpecification() {
    return this._customizedLoadMetricSpecification;
  }
  public putCustomizedLoadMetricSpecification(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedLoadMetricSpecification) {
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
  private _customizedScalingMetricSpecification = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference(this, "customized_scaling_metric_specification");
  public get customizedScalingMetricSpecification() {
    return this._customizedScalingMetricSpecification;
  }
  public putCustomizedScalingMetricSpecification(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationCustomizedScalingMetricSpecification) {
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
  private _predefinedLoadMetricSpecification = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference(this, "predefined_load_metric_specification");
  public get predefinedLoadMetricSpecification() {
    return this._predefinedLoadMetricSpecification;
  }
  public putPredefinedLoadMetricSpecification(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedLoadMetricSpecification) {
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
  private _predefinedMetricPairSpecification = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference(this, "predefined_metric_pair_specification");
  public get predefinedMetricPairSpecification() {
    return this._predefinedMetricPairSpecification;
  }
  public putPredefinedMetricPairSpecification(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedMetricPairSpecification) {
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
  private _predefinedScalingMetricSpecification = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference(this, "predefined_scaling_metric_specification");
  public get predefinedScalingMetricSpecification() {
    return this._predefinedScalingMetricSpecification;
  }
  public putPredefinedScalingMetricSpecification(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationPredefinedScalingMetricSpecification) {
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

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationOutputReference {
    return new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyPredictiveScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#max_capacity_breach_behavior AppautoscalingPolicy#max_capacity_breach_behavior}
  */
  readonly maxCapacityBreachBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#max_capacity_buffer AppautoscalingPolicy#max_capacity_buffer}
  */
  readonly maxCapacityBuffer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#mode AppautoscalingPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#scheduling_buffer_time AppautoscalingPolicy#scheduling_buffer_time}
  */
  readonly schedulingBufferTime?: number;
  /**
  * metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_specification AppautoscalingPolicy#metric_specification}
  */
  readonly metricSpecification: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification[] | cdktf.IResolvable;
}

export function appautoscalingPolicyPredictiveScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity_breach_behavior: cdktf.stringToTerraform(struct!.maxCapacityBreachBehavior),
    max_capacity_buffer: cdktf.numberToTerraform(struct!.maxCapacityBuffer),
    mode: cdktf.stringToTerraform(struct!.mode),
    scheduling_buffer_time: cdktf.numberToTerraform(struct!.schedulingBufferTime),
    metric_specification: cdktf.listMapper(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationToTerraform, true)(struct!.metricSpecification),
  }
}


export function appautoscalingPolicyPredictiveScalingPolicyConfigurationToHclTerraform(struct?: AppautoscalingPolicyPredictiveScalingPolicyConfigurationOutputReference | AppautoscalingPolicyPredictiveScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity_breach_behavior: {
      value: cdktf.stringToHclTerraform(struct!.maxCapacityBreachBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_capacity_buffer: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacityBuffer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_buffer_time: {
      value: cdktf.numberToHclTerraform(struct!.schedulingBufferTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_specification: {
      value: cdktf.listMapperHcl(appautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationToHclTerraform, true)(struct!.metricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyPredictiveScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyPredictiveScalingPolicyConfiguration | undefined {
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

  public set internalValue(value: AppautoscalingPolicyPredictiveScalingPolicyConfiguration | undefined) {
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
  private _maxCapacityBuffer?: number; 
  public get maxCapacityBuffer() {
    return this.getNumberAttribute('max_capacity_buffer');
  }
  public set maxCapacityBuffer(value: number) {
    this._maxCapacityBuffer = value;
  }
  public resetMaxCapacityBuffer() {
    this._maxCapacityBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityBufferInput() {
    return this._maxCapacityBuffer;
  }

  // mode - computed: true, optional: true, required: false
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

  // scheduling_buffer_time - computed: true, optional: true, required: false
  private _schedulingBufferTime?: number; 
  public get schedulingBufferTime() {
    return this.getNumberAttribute('scheduling_buffer_time');
  }
  public set schedulingBufferTime(value: number) {
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
  private _metricSpecification = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecificationList(this, "metric_specification", false);
  public get metricSpecification() {
    return this._metricSpecification;
  }
  public putMetricSpecification(value: AppautoscalingPolicyPredictiveScalingPolicyConfigurationMetricSpecification[] | cdktf.IResolvable) {
    this._metricSpecification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSpecificationInput() {
    return this._metricSpecification.internalValue;
  }
}
export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}
  */
  readonly metricIntervalLowerBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}
  */
  readonly metricIntervalUpperBound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}
  */
  readonly scalingAdjustment: number;
}

export function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable): any {
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


export function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToHclTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_interval_lower_bound: {
      value: cdktf.stringToHclTerraform(struct!.metricIntervalLowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_interval_upper_bound: {
      value: cdktf.stringToHclTerraform(struct!.metricIntervalUpperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.scalingAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable | undefined) {
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

export class AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference {
    return new AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}
  */
  readonly cooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}
  */
  readonly metricAggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}
  */
  readonly minAdjustmentMagnitude?: number;
  /**
  * step_adjustment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#step_adjustment AppautoscalingPolicy#step_adjustment}
  */
  readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | cdktf.IResolvable;
}

export function appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference | AppautoscalingPolicyStepScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjustment_type: cdktf.stringToTerraform(struct!.adjustmentType),
    cooldown: cdktf.numberToTerraform(struct!.cooldown),
    metric_aggregation_type: cdktf.stringToTerraform(struct!.metricAggregationType),
    min_adjustment_magnitude: cdktf.numberToTerraform(struct!.minAdjustmentMagnitude),
    step_adjustment: cdktf.listMapper(appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform, true)(struct!.stepAdjustment),
  }
}


export function appautoscalingPolicyStepScalingPolicyConfigurationToHclTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference | AppautoscalingPolicyStepScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjustment_type: {
      value: cdktf.stringToHclTerraform(struct!.adjustmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cooldown: {
      value: cdktf.numberToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.metricAggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_adjustment_magnitude: {
      value: cdktf.numberToHclTerraform(struct!.minAdjustmentMagnitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_adjustment: {
      value: cdktf.listMapperHcl(appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToHclTerraform, true)(struct!.stepAdjustment),
      isBlock: true,
      type: "set",
      storageClassType: "AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyStepScalingPolicyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjustmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentType = this._adjustmentType;
    }
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._metricAggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricAggregationType = this._metricAggregationType;
    }
    if (this._minAdjustmentMagnitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAdjustmentMagnitude = this._minAdjustmentMagnitude;
    }
    if (this._stepAdjustment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepAdjustment = this._stepAdjustment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyStepScalingPolicyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjustmentType = undefined;
      this._cooldown = undefined;
      this._metricAggregationType = undefined;
      this._minAdjustmentMagnitude = undefined;
      this._stepAdjustment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjustmentType = value.adjustmentType;
      this._cooldown = value.cooldown;
      this._metricAggregationType = value.metricAggregationType;
      this._minAdjustmentMagnitude = value.minAdjustmentMagnitude;
      this._stepAdjustment.internalValue = value.stepAdjustment;
    }
  }

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

  // metric_aggregation_type - computed: false, optional: true, required: false
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

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment = new AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList(this, "step_adjustment", true);
  public get stepAdjustment() {
    return this._stepAdjustment;
  }
  public putStepAdjustment(value: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | cdktf.IResolvable) {
    this._stepAdjustment.internalValue = value;
  }
  public resetStepAdjustment() {
    this._stepAdjustment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepAdjustmentInput() {
    return this._stepAdjustment.internalValue;
  }
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}
  */
  readonly value: string;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable | undefined) {
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

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference {
    return new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}
  */
  readonly value: string;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined) {
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

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference {
    return new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}
  */
  readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    dimensions: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined {
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

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined) {
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
  private _dimensions = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable) {
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
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#stat AppautoscalingPolicy#stat}
  */
  readonly stat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric AppautoscalingPolicy#metric}
  */
  readonly metric: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
    metric: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct!.metric),
  }
}


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined {
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

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined) {
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
  private _metric = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#expression AppautoscalingPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#label AppautoscalingPolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#return_data AppautoscalingPolicy#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
  /**
  * metric_stat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_stat AppautoscalingPolicy#metric_stat}
  */
  readonly metricStat?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
    metric_stat: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct!.metricStat),
  }
}


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_data: {
      value: cdktf.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_stat: {
      value: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined) {
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
  private _metricStat = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat) {
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

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList extends cdktf.ComplexList {
  public internalValue? : AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable

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
  public get(index: number): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference {
    return new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}
  */
  readonly statistic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}
  */
  readonly unit?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}
  */
  readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#metrics AppautoscalingPolicy#metrics}
  */
  readonly metrics?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
    dimensions: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform, true)(struct!.dimensions),
    metrics: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsToTerraform, true)(struct!.metrics),
  }
}


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList",
    },
    metrics: {
      value: cdktf.listMapperHcl(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "set",
      storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined {
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
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricName = undefined;
      this._namespace = undefined;
      this._statistic = undefined;
      this._unit = undefined;
      this._dimensions.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._statistic = value.statistic;
      this._unit = value.unit;
      this._dimensions.internalValue = value.dimensions;
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList(this, "metrics", true);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable) {
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
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}
  */
  readonly predefinedMetricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}
  */
  readonly resourceLabel?: string;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_metric_type: {
      value: cdktf.stringToHclTerraform(struct!.predefinedMetricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_label: {
      value: cdktf.stringToHclTerraform(struct!.resourceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined {
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

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined) {
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
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}
  */
  readonly disableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}
  */
  readonly scaleInCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}
  */
  readonly scaleOutCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}
  */
  readonly targetValue: number;
  /**
  * customized_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}
  */
  readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
  /**
  * predefined_metric_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}
  */
  readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
}

export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_scale_in: {
      value: cdktf.booleanToHclTerraform(struct!.disableScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_in_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.scaleInCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out_cooldown: {
      value: cdktf.numberToHclTerraform(struct!.scaleOutCooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_value: {
      value: cdktf.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customized_metric_specification: {
      value: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToHclTerraform(struct!.customizedMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationList",
    },
    predefined_metric_specification: {
      value: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToHclTerraform(struct!.predefinedMetricSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScaleIn = this._disableScaleIn;
    }
    if (this._scaleInCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInCooldown = this._scaleInCooldown;
    }
    if (this._scaleOutCooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
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

  public set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableScaleIn = undefined;
      this._scaleInCooldown = undefined;
      this._scaleOutCooldown = undefined;
      this._targetValue = undefined;
      this._customizedMetricSpecification.internalValue = undefined;
      this._predefinedMetricSpecification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableScaleIn = value.disableScaleIn;
      this._scaleInCooldown = value.scaleInCooldown;
      this._scaleOutCooldown = value.scaleOutCooldown;
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

  // scale_in_cooldown - computed: false, optional: true, required: false
  private _scaleInCooldown?: number; 
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }
  public set scaleInCooldown(value: number) {
    this._scaleInCooldown = value;
  }
  public resetScaleInCooldown() {
    this._scaleInCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInCooldownInput() {
    return this._scaleInCooldown;
  }

  // scale_out_cooldown - computed: false, optional: true, required: false
  private _scaleOutCooldown?: number; 
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }
  public set scaleOutCooldown(value: number) {
    this._scaleOutCooldown = value;
  }
  public resetScaleOutCooldown() {
    this._scaleOutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutCooldownInput() {
    return this._scaleOutCooldown;
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
  private _customizedMetricSpecification = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference(this, "customized_metric_specification");
  public get customizedMetricSpecification() {
    return this._customizedMetricSpecification;
  }
  public putCustomizedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification) {
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
  private _predefinedMetricSpecification = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference(this, "predefined_metric_specification");
  public get predefinedMetricSpecification() {
    return this._predefinedMetricSpecification;
  }
  public putPredefinedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy aws_appautoscaling_policy}
*/
export class AppautoscalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appautoscaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppautoscalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppautoscalingPolicy to import
  * @param importFromId The id of the existing AppautoscalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppautoscalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appautoscaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/appautoscaling_policy aws_appautoscaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppautoscalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._policyType = config.policyType;
    this._region = config.region;
    this._resourceId = config.resourceId;
    this._scalableDimension = config.scalableDimension;
    this._serviceNamespace = config.serviceNamespace;
    this._predictiveScalingPolicyConfiguration.internalValue = config.predictiveScalingPolicyConfiguration;
    this._stepScalingPolicyConfiguration.internalValue = config.stepScalingPolicyConfiguration;
    this._targetTrackingScalingPolicyConfiguration.internalValue = config.targetTrackingScalingPolicyConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_arns - computed: true, optional: false, required: false
  public get alarmArns() {
    return this.getListAttribute('alarm_arns');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
    return this._resourceId;
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
    return this._scalableDimension;
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
    return this._serviceNamespace;
  }

  // predictive_scaling_policy_configuration - computed: false, optional: true, required: false
  private _predictiveScalingPolicyConfiguration = new AppautoscalingPolicyPredictiveScalingPolicyConfigurationOutputReference(this, "predictive_scaling_policy_configuration");
  public get predictiveScalingPolicyConfiguration() {
    return this._predictiveScalingPolicyConfiguration;
  }
  public putPredictiveScalingPolicyConfiguration(value: AppautoscalingPolicyPredictiveScalingPolicyConfiguration) {
    this._predictiveScalingPolicyConfiguration.internalValue = value;
  }
  public resetPredictiveScalingPolicyConfiguration() {
    this._predictiveScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingPolicyConfigurationInput() {
    return this._predictiveScalingPolicyConfiguration.internalValue;
  }

  // step_scaling_policy_configuration - computed: false, optional: true, required: false
  private _stepScalingPolicyConfiguration = new AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference(this, "step_scaling_policy_configuration");
  public get stepScalingPolicyConfiguration() {
    return this._stepScalingPolicyConfiguration;
  }
  public putStepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration) {
    this._stepScalingPolicyConfiguration.internalValue = value;
  }
  public resetStepScalingPolicyConfiguration() {
    this._stepScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepScalingPolicyConfigurationInput() {
    return this._stepScalingPolicyConfiguration.internalValue;
  }

  // target_tracking_scaling_policy_configuration - computed: false, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration = new AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public putTargetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration) {
    this._targetTrackingScalingPolicyConfiguration.internalValue = value;
  }
  public resetTargetTrackingScalingPolicyConfiguration() {
    this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingPolicyConfigurationInput() {
    return this._targetTrackingScalingPolicyConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_type: cdktf.stringToTerraform(this._policyType),
      region: cdktf.stringToTerraform(this._region),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
      service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
      predictive_scaling_policy_configuration: appautoscalingPolicyPredictiveScalingPolicyConfigurationToTerraform(this._predictiveScalingPolicyConfiguration.internalValue),
      step_scaling_policy_configuration: appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(this._stepScalingPolicyConfiguration.internalValue),
      target_tracking_scaling_policy_configuration: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(this._targetTrackingScalingPolicyConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scalable_dimension: {
        value: cdktf.stringToHclTerraform(this._scalableDimension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_namespace: {
        value: cdktf.stringToHclTerraform(this._serviceNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predictive_scaling_policy_configuration: {
        value: appautoscalingPolicyPredictiveScalingPolicyConfigurationToHclTerraform(this._predictiveScalingPolicyConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppautoscalingPolicyPredictiveScalingPolicyConfigurationList",
      },
      step_scaling_policy_configuration: {
        value: appautoscalingPolicyStepScalingPolicyConfigurationToHclTerraform(this._stepScalingPolicyConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppautoscalingPolicyStepScalingPolicyConfigurationList",
      },
      target_tracking_scaling_policy_configuration: {
        value: appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(this._targetTrackingScalingPolicyConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
