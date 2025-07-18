/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}
  */
  readonly firehoseArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#id CloudwatchMetricStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CloudwatchMetricStream#include_linked_accounts_metrics}
  */
  readonly includeLinkedAccountsMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}
  */
  readonly outputFormat: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#region CloudwatchMetricStream#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * exclude_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}
  */
  readonly excludeFilter?: CloudwatchMetricStreamExcludeFilter[] | cdktf.IResolvable;
  /**
  * include_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}
  */
  readonly includeFilter?: CloudwatchMetricStreamIncludeFilter[] | cdktf.IResolvable;
  /**
  * statistics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#statistics_configuration CloudwatchMetricStream#statistics_configuration}
  */
  readonly statisticsConfiguration?: CloudwatchMetricStreamStatisticsConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}
  */
  readonly timeouts?: CloudwatchMetricStreamTimeouts;
}
export interface CloudwatchMetricStreamExcludeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace: string;
}

export function cloudwatchMetricStreamExcludeFilterToTerraform(struct?: CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchMetricStreamExcludeFilterToHclTerraform(struct?: CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamExcludeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamExcludeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: false, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return cdktf.Fn.tolist(this.getListAttribute('metric_names'));
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
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
}

export class CloudwatchMetricStreamExcludeFilterList extends cdktf.ComplexList {
  public internalValue? : CloudwatchMetricStreamExcludeFilter[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchMetricStreamExcludeFilterOutputReference {
    return new CloudwatchMetricStreamExcludeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamIncludeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#metric_names CloudwatchMetricStream#metric_names}
  */
  readonly metricNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace: string;
}

export function cloudwatchMetricStreamIncludeFilterToTerraform(struct?: CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metricNames),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchMetricStreamIncludeFilterToHclTerraform(struct?: CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metricNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamIncludeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNames = this._metricNames;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamIncludeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricNames = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricNames = value.metricNames;
      this._namespace = value.namespace;
    }
  }

  // metric_names - computed: false, optional: true, required: false
  private _metricNames?: string[]; 
  public get metricNames() {
    return cdktf.Fn.tolist(this.getListAttribute('metric_names'));
  }
  public set metricNames(value: string[]) {
    this._metricNames = value;
  }
  public resetMetricNames() {
    this._metricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamesInput() {
    return this._metricNames;
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
}

export class CloudwatchMetricStreamIncludeFilterList extends cdktf.ComplexList {
  public internalValue? : CloudwatchMetricStreamIncludeFilter[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchMetricStreamIncludeFilterOutputReference {
    return new CloudwatchMetricStreamIncludeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamStatisticsConfigurationIncludeMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#metric_name CloudwatchMetricStream#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace: string;
}

export function cloudwatchMetricStreamStatisticsConfigurationIncludeMetricToTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function cloudwatchMetricStreamStatisticsConfigurationIncludeMetricToHclTerraform(struct?: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
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
}

export class CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList extends cdktf.ComplexList {
  public internalValue? : CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference {
    return new CloudwatchMetricStreamStatisticsConfigurationIncludeMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamStatisticsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#additional_statistics CloudwatchMetricStream#additional_statistics}
  */
  readonly additionalStatistics: string[];
  /**
  * include_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#include_metric CloudwatchMetricStream#include_metric}
  */
  readonly includeMetric: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[] | cdktf.IResolvable;
}

export function cloudwatchMetricStreamStatisticsConfigurationToTerraform(struct?: CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_statistics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalStatistics),
    include_metric: cdktf.listMapper(cloudwatchMetricStreamStatisticsConfigurationIncludeMetricToTerraform, true)(struct!.includeMetric),
  }
}


export function cloudwatchMetricStreamStatisticsConfigurationToHclTerraform(struct?: CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_statistics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalStatistics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_metric: {
      value: cdktf.listMapperHcl(cloudwatchMetricStreamStatisticsConfigurationIncludeMetricToHclTerraform, true)(struct!.includeMetric),
      isBlock: true,
      type: "set",
      storageClassType: "CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamStatisticsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStatistics = this._additionalStatistics;
    }
    if (this._includeMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeMetric = this._includeMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamStatisticsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalStatistics = undefined;
      this._includeMetric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalStatistics = value.additionalStatistics;
      this._includeMetric.internalValue = value.includeMetric;
    }
  }

  // additional_statistics - computed: false, optional: false, required: true
  private _additionalStatistics?: string[]; 
  public get additionalStatistics() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_statistics'));
  }
  public set additionalStatistics(value: string[]) {
    this._additionalStatistics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStatisticsInput() {
    return this._additionalStatistics;
  }

  // include_metric - computed: false, optional: false, required: true
  private _includeMetric = new CloudwatchMetricStreamStatisticsConfigurationIncludeMetricList(this, "include_metric", true);
  public get includeMetric() {
    return this._includeMetric;
  }
  public putIncludeMetric(value: CloudwatchMetricStreamStatisticsConfigurationIncludeMetric[] | cdktf.IResolvable) {
    this._includeMetric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMetricInput() {
    return this._includeMetric.internalValue;
  }
}

export class CloudwatchMetricStreamStatisticsConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudwatchMetricStreamStatisticsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchMetricStreamStatisticsConfigurationOutputReference {
    return new CloudwatchMetricStreamStatisticsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchMetricStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#create CloudwatchMetricStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#update CloudwatchMetricStream#update}
  */
  readonly update?: string;
}

export function cloudwatchMetricStreamTimeoutsToTerraform(struct?: CloudwatchMetricStreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudwatchMetricStreamTimeoutsToHclTerraform(struct?: CloudwatchMetricStreamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchMetricStreamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudwatchMetricStreamTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchMetricStreamTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream aws_cloudwatch_metric_stream}
*/
export class CloudwatchMetricStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_metric_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchMetricStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchMetricStream to import
  * @param importFromId The id of the existing CloudwatchMetricStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchMetricStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_metric_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_metric_stream aws_cloudwatch_metric_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchMetricStreamConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_metric_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._firehoseArn = config.firehoseArn;
    this._id = config.id;
    this._includeLinkedAccountsMetrics = config.includeLinkedAccountsMetrics;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._outputFormat = config.outputFormat;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludeFilter.internalValue = config.excludeFilter;
    this._includeFilter.internalValue = config.includeFilter;
    this._statisticsConfiguration.internalValue = config.statisticsConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // firehose_arn - computed: false, optional: false, required: true
  private _firehoseArn?: string; 
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
  }
  public set firehoseArn(value: string) {
    this._firehoseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseArnInput() {
    return this._firehoseArn;
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

  // include_linked_accounts_metrics - computed: false, optional: true, required: false
  private _includeLinkedAccountsMetrics?: boolean | cdktf.IResolvable; 
  public get includeLinkedAccountsMetrics() {
    return this.getBooleanAttribute('include_linked_accounts_metrics');
  }
  public set includeLinkedAccountsMetrics(value: boolean | cdktf.IResolvable) {
    this._includeLinkedAccountsMetrics = value;
  }
  public resetIncludeLinkedAccountsMetrics() {
    this._includeLinkedAccountsMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLinkedAccountsMetricsInput() {
    return this._includeLinkedAccountsMetrics;
  }

  // last_update_date - computed: true, optional: false, required: false
  public get lastUpdateDate() {
    return this.getStringAttribute('last_update_date');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // output_format - computed: false, optional: false, required: true
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // exclude_filter - computed: false, optional: true, required: false
  private _excludeFilter = new CloudwatchMetricStreamExcludeFilterList(this, "exclude_filter", true);
  public get excludeFilter() {
    return this._excludeFilter;
  }
  public putExcludeFilter(value: CloudwatchMetricStreamExcludeFilter[] | cdktf.IResolvable) {
    this._excludeFilter.internalValue = value;
  }
  public resetExcludeFilter() {
    this._excludeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterInput() {
    return this._excludeFilter.internalValue;
  }

  // include_filter - computed: false, optional: true, required: false
  private _includeFilter = new CloudwatchMetricStreamIncludeFilterList(this, "include_filter", true);
  public get includeFilter() {
    return this._includeFilter;
  }
  public putIncludeFilter(value: CloudwatchMetricStreamIncludeFilter[] | cdktf.IResolvable) {
    this._includeFilter.internalValue = value;
  }
  public resetIncludeFilter() {
    this._includeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter.internalValue;
  }

  // statistics_configuration - computed: false, optional: true, required: false
  private _statisticsConfiguration = new CloudwatchMetricStreamStatisticsConfigurationList(this, "statistics_configuration", true);
  public get statisticsConfiguration() {
    return this._statisticsConfiguration;
  }
  public putStatisticsConfiguration(value: CloudwatchMetricStreamStatisticsConfiguration[] | cdktf.IResolvable) {
    this._statisticsConfiguration.internalValue = value;
  }
  public resetStatisticsConfiguration() {
    this._statisticsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsConfigurationInput() {
    return this._statisticsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudwatchMetricStreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudwatchMetricStreamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firehose_arn: cdktf.stringToTerraform(this._firehoseArn),
      id: cdktf.stringToTerraform(this._id),
      include_linked_accounts_metrics: cdktf.booleanToTerraform(this._includeLinkedAccountsMetrics),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      exclude_filter: cdktf.listMapper(cloudwatchMetricStreamExcludeFilterToTerraform, true)(this._excludeFilter.internalValue),
      include_filter: cdktf.listMapper(cloudwatchMetricStreamIncludeFilterToTerraform, true)(this._includeFilter.internalValue),
      statistics_configuration: cdktf.listMapper(cloudwatchMetricStreamStatisticsConfigurationToTerraform, true)(this._statisticsConfiguration.internalValue),
      timeouts: cloudwatchMetricStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firehose_arn: {
        value: cdktf.stringToHclTerraform(this._firehoseArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_linked_accounts_metrics: {
        value: cdktf.booleanToHclTerraform(this._includeLinkedAccountsMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      exclude_filter: {
        value: cdktf.listMapperHcl(cloudwatchMetricStreamExcludeFilterToHclTerraform, true)(this._excludeFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchMetricStreamExcludeFilterList",
      },
      include_filter: {
        value: cdktf.listMapperHcl(cloudwatchMetricStreamIncludeFilterToHclTerraform, true)(this._includeFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchMetricStreamIncludeFilterList",
      },
      statistics_configuration: {
        value: cdktf.listMapperHcl(cloudwatchMetricStreamStatisticsConfigurationToHclTerraform, true)(this._statisticsConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudwatchMetricStreamStatisticsConfigurationList",
      },
      timeouts: {
        value: cloudwatchMetricStreamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudwatchMetricStreamTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
