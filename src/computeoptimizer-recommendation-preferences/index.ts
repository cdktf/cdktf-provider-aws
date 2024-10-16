/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeoptimizerRecommendationPreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}
  */
  readonly enhancedInfrastructureMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}
  */
  readonly inferredWorkloadTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}
  */
  readonly lookBackPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}
  */
  readonly savingsEstimationMode?: string;
  /**
  * external_metrics_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#external_metrics_preference ComputeoptimizerRecommendationPreferences#external_metrics_preference}
  */
  readonly externalMetricsPreference?: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[] | cdktf.IResolvable;
  /**
  * preferred_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#preferred_resource ComputeoptimizerRecommendationPreferences#preferred_resource}
  */
  readonly preferredResource?: ComputeoptimizerRecommendationPreferencesPreferredResource[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#scope ComputeoptimizerRecommendationPreferences#scope}
  */
  readonly scope?: ComputeoptimizerRecommendationPreferencesScope[] | cdktf.IResolvable;
  /**
  * utilization_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#utilization_preference ComputeoptimizerRecommendationPreferences#utilization_preference}
  */
  readonly utilizationPreference?: ComputeoptimizerRecommendationPreferencesUtilizationPreference[] | cdktf.IResolvable;
}
export interface ComputeoptimizerRecommendationPreferencesExternalMetricsPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}
  */
  readonly source: string;
}

export function computeoptimizerRecommendationPreferencesExternalMetricsPreferenceToTerraform(struct?: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function computeoptimizerRecommendationPreferencesExternalMetricsPreferenceToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList extends cdktf.ComplexList {
  public internalValue? : ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[] | cdktf.IResolvable

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
  public get(index: number): ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference {
    return new ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerRecommendationPreferencesPreferredResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}
  */
  readonly excludeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}
  */
  readonly includeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}
  */
  readonly name: string;
}

export function computeoptimizerRecommendationPreferencesPreferredResourceToTerraform(struct?: ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeList),
    include_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeList),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeoptimizerRecommendationPreferencesPreferredResourceToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList;
    }
    if (this._includeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeList = this._includeList;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeList = undefined;
      this._includeList = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeList = value.excludeList;
      this._includeList = value.includeList;
      this._name = value.name;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList?: string[]; 
  public get excludeList() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_list'));
  }
  public set excludeList(value: string[]) {
    this._excludeList = value;
  }
  public resetExcludeList() {
    this._excludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList;
  }

  // include_list - computed: false, optional: true, required: false
  private _includeList?: string[]; 
  public get includeList() {
    return cdktf.Fn.tolist(this.getListAttribute('include_list'));
  }
  public set includeList(value: string[]) {
    this._includeList = value;
  }
  public resetIncludeList() {
    this._includeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeListInput() {
    return this._includeList;
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
}

export class ComputeoptimizerRecommendationPreferencesPreferredResourceList extends cdktf.ComplexList {
  public internalValue? : ComputeoptimizerRecommendationPreferencesPreferredResource[] | cdktf.IResolvable

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
  public get(index: number): ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference {
    return new ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerRecommendationPreferencesScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}
  */
  readonly value: string;
}

export function computeoptimizerRecommendationPreferencesScopeToTerraform(struct?: ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function computeoptimizerRecommendationPreferencesScopeToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable): any {
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

export class ComputeoptimizerRecommendationPreferencesScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable | undefined) {
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

export class ComputeoptimizerRecommendationPreferencesScopeList extends cdktf.ComplexList {
  public internalValue? : ComputeoptimizerRecommendationPreferencesScope[] | cdktf.IResolvable

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
  public get(index: number): ComputeoptimizerRecommendationPreferencesScopeOutputReference {
    return new ComputeoptimizerRecommendationPreferencesScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}
  */
  readonly headroom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}
  */
  readonly threshold?: string;
}

export function computeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersToTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headroom: cdktf.stringToTerraform(struct!.headroom),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function computeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headroom: {
      value: cdktf.stringToHclTerraform(struct!.headroom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headroom !== undefined) {
      hasAnyValues = true;
      internalValueResult.headroom = this._headroom;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headroom = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headroom = value.headroom;
      this._threshold = value.threshold;
    }
  }

  // headroom - computed: false, optional: false, required: true
  private _headroom?: string; 
  public get headroom() {
    return this.getStringAttribute('headroom');
  }
  public set headroom(value: string) {
    this._headroom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headroomInput() {
    return this._headroom;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList extends cdktf.ComplexList {
  public internalValue? : ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[] | cdktf.IResolvable

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
  public get(index: number): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference {
    return new ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeoptimizerRecommendationPreferencesUtilizationPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}
  */
  readonly metricName: string;
  /**
  * metric_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#metric_parameters ComputeoptimizerRecommendationPreferences#metric_parameters}
  */
  readonly metricParameters?: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[] | cdktf.IResolvable;
}

export function computeoptimizerRecommendationPreferencesUtilizationPreferenceToTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_parameters: cdktf.listMapper(computeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersToTerraform, true)(struct!.metricParameters),
  }
}


export function computeoptimizerRecommendationPreferencesUtilizationPreferenceToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable): any {
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
    metric_parameters: {
      value: cdktf.listMapperHcl(computeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersToHclTerraform, true)(struct!.metricParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricParameters = this._metricParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._metricParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._metricParameters.internalValue = value.metricParameters;
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

  // metric_parameters - computed: false, optional: true, required: false
  private _metricParameters = new ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList(this, "metric_parameters", false);
  public get metricParameters() {
    return this._metricParameters;
  }
  public putMetricParameters(value: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[] | cdktf.IResolvable) {
    this._metricParameters.internalValue = value;
  }
  public resetMetricParameters() {
    this._metricParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricParametersInput() {
    return this._metricParameters.internalValue;
  }
}

export class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList extends cdktf.ComplexList {
  public internalValue? : ComputeoptimizerRecommendationPreferencesUtilizationPreference[] | cdktf.IResolvable

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
  public get(index: number): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference {
    return new ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences}
*/
export class ComputeoptimizerRecommendationPreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_computeoptimizer_recommendation_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeoptimizerRecommendationPreferences to import
  * @param importFromId The id of the existing ComputeoptimizerRecommendationPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeoptimizerRecommendationPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_computeoptimizer_recommendation_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeoptimizerRecommendationPreferencesConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeoptimizerRecommendationPreferencesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_computeoptimizer_recommendation_preferences',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.72.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enhancedInfrastructureMetrics = config.enhancedInfrastructureMetrics;
    this._inferredWorkloadTypes = config.inferredWorkloadTypes;
    this._lookBackPeriod = config.lookBackPeriod;
    this._resourceType = config.resourceType;
    this._savingsEstimationMode = config.savingsEstimationMode;
    this._externalMetricsPreference.internalValue = config.externalMetricsPreference;
    this._preferredResource.internalValue = config.preferredResource;
    this._scope.internalValue = config.scope;
    this._utilizationPreference.internalValue = config.utilizationPreference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enhanced_infrastructure_metrics - computed: false, optional: true, required: false
  private _enhancedInfrastructureMetrics?: string; 
  public get enhancedInfrastructureMetrics() {
    return this.getStringAttribute('enhanced_infrastructure_metrics');
  }
  public set enhancedInfrastructureMetrics(value: string) {
    this._enhancedInfrastructureMetrics = value;
  }
  public resetEnhancedInfrastructureMetrics() {
    this._enhancedInfrastructureMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedInfrastructureMetricsInput() {
    return this._enhancedInfrastructureMetrics;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inferred_workload_types - computed: false, optional: true, required: false
  private _inferredWorkloadTypes?: string; 
  public get inferredWorkloadTypes() {
    return this.getStringAttribute('inferred_workload_types');
  }
  public set inferredWorkloadTypes(value: string) {
    this._inferredWorkloadTypes = value;
  }
  public resetInferredWorkloadTypes() {
    this._inferredWorkloadTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferredWorkloadTypesInput() {
    return this._inferredWorkloadTypes;
  }

  // look_back_period - computed: true, optional: true, required: false
  private _lookBackPeriod?: string; 
  public get lookBackPeriod() {
    return this.getStringAttribute('look_back_period');
  }
  public set lookBackPeriod(value: string) {
    this._lookBackPeriod = value;
  }
  public resetLookBackPeriod() {
    this._lookBackPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackPeriodInput() {
    return this._lookBackPeriod;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // savings_estimation_mode - computed: false, optional: true, required: false
  private _savingsEstimationMode?: string; 
  public get savingsEstimationMode() {
    return this.getStringAttribute('savings_estimation_mode');
  }
  public set savingsEstimationMode(value: string) {
    this._savingsEstimationMode = value;
  }
  public resetSavingsEstimationMode() {
    this._savingsEstimationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savingsEstimationModeInput() {
    return this._savingsEstimationMode;
  }

  // external_metrics_preference - computed: false, optional: true, required: false
  private _externalMetricsPreference = new ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList(this, "external_metrics_preference", false);
  public get externalMetricsPreference() {
    return this._externalMetricsPreference;
  }
  public putExternalMetricsPreference(value: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[] | cdktf.IResolvable) {
    this._externalMetricsPreference.internalValue = value;
  }
  public resetExternalMetricsPreference() {
    this._externalMetricsPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMetricsPreferenceInput() {
    return this._externalMetricsPreference.internalValue;
  }

  // preferred_resource - computed: false, optional: true, required: false
  private _preferredResource = new ComputeoptimizerRecommendationPreferencesPreferredResourceList(this, "preferred_resource", false);
  public get preferredResource() {
    return this._preferredResource;
  }
  public putPreferredResource(value: ComputeoptimizerRecommendationPreferencesPreferredResource[] | cdktf.IResolvable) {
    this._preferredResource.internalValue = value;
  }
  public resetPreferredResource() {
    this._preferredResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredResourceInput() {
    return this._preferredResource.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ComputeoptimizerRecommendationPreferencesScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ComputeoptimizerRecommendationPreferencesScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // utilization_preference - computed: false, optional: true, required: false
  private _utilizationPreference = new ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList(this, "utilization_preference", false);
  public get utilizationPreference() {
    return this._utilizationPreference;
  }
  public putUtilizationPreference(value: ComputeoptimizerRecommendationPreferencesUtilizationPreference[] | cdktf.IResolvable) {
    this._utilizationPreference.internalValue = value;
  }
  public resetUtilizationPreference() {
    this._utilizationPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationPreferenceInput() {
    return this._utilizationPreference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enhanced_infrastructure_metrics: cdktf.stringToTerraform(this._enhancedInfrastructureMetrics),
      inferred_workload_types: cdktf.stringToTerraform(this._inferredWorkloadTypes),
      look_back_period: cdktf.stringToTerraform(this._lookBackPeriod),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      savings_estimation_mode: cdktf.stringToTerraform(this._savingsEstimationMode),
      external_metrics_preference: cdktf.listMapper(computeoptimizerRecommendationPreferencesExternalMetricsPreferenceToTerraform, true)(this._externalMetricsPreference.internalValue),
      preferred_resource: cdktf.listMapper(computeoptimizerRecommendationPreferencesPreferredResourceToTerraform, true)(this._preferredResource.internalValue),
      scope: cdktf.listMapper(computeoptimizerRecommendationPreferencesScopeToTerraform, true)(this._scope.internalValue),
      utilization_preference: cdktf.listMapper(computeoptimizerRecommendationPreferencesUtilizationPreferenceToTerraform, true)(this._utilizationPreference.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enhanced_infrastructure_metrics: {
        value: cdktf.stringToHclTerraform(this._enhancedInfrastructureMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inferred_workload_types: {
        value: cdktf.stringToHclTerraform(this._inferredWorkloadTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      look_back_period: {
        value: cdktf.stringToHclTerraform(this._lookBackPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      savings_estimation_mode: {
        value: cdktf.stringToHclTerraform(this._savingsEstimationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_metrics_preference: {
        value: cdktf.listMapperHcl(computeoptimizerRecommendationPreferencesExternalMetricsPreferenceToHclTerraform, true)(this._externalMetricsPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList",
      },
      preferred_resource: {
        value: cdktf.listMapperHcl(computeoptimizerRecommendationPreferencesPreferredResourceToHclTerraform, true)(this._preferredResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeoptimizerRecommendationPreferencesPreferredResourceList",
      },
      scope: {
        value: cdktf.listMapperHcl(computeoptimizerRecommendationPreferencesScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeoptimizerRecommendationPreferencesScopeList",
      },
      utilization_preference: {
        value: cdktf.listMapperHcl(computeoptimizerRecommendationPreferencesUtilizationPreferenceToHclTerraform, true)(this._utilizationPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
