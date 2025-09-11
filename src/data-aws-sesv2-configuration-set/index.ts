/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSesv2ConfigurationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set#region DataAwsSesv2ConfigurationSet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsSesv2ConfigurationSetDeliveryOptions {
}

export function dataAwsSesv2ConfigurationSetDeliveryOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetDeliveryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetDeliveryOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetDeliveryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetDeliveryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetDeliveryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_delivery_seconds - computed: true, optional: false, required: false
  public get maxDeliverySeconds() {
    return this.getNumberAttribute('max_delivery_seconds');
  }

  // sending_pool_name - computed: true, optional: false, required: false
  public get sendingPoolName() {
    return this.getStringAttribute('sending_pool_name');
  }

  // tls_policy - computed: true, optional: false, required: false
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
}

export class DataAwsSesv2ConfigurationSetDeliveryOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSesv2ConfigurationSetReputationOptions {
}

export function dataAwsSesv2ConfigurationSetReputationOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetReputationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetReputationOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetReputationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetReputationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetReputationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetReputationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_fresh_start - computed: true, optional: false, required: false
  public get lastFreshStart() {
    return this.getStringAttribute('last_fresh_start');
  }

  // reputation_metrics_enabled - computed: true, optional: false, required: false
  public get reputationMetricsEnabled() {
    return this.getBooleanAttribute('reputation_metrics_enabled');
  }
}

export class DataAwsSesv2ConfigurationSetReputationOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetReputationOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetReputationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSesv2ConfigurationSetSendingOptions {
}

export function dataAwsSesv2ConfigurationSetSendingOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetSendingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetSendingOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetSendingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetSendingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetSendingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetSendingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sending_enabled - computed: true, optional: false, required: false
  public get sendingEnabled() {
    return this.getBooleanAttribute('sending_enabled');
  }
}

export class DataAwsSesv2ConfigurationSetSendingOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetSendingOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetSendingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSesv2ConfigurationSetSuppressionOptions {
}

export function dataAwsSesv2ConfigurationSetSuppressionOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetSuppressionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetSuppressionOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetSuppressionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetSuppressionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetSuppressionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // suppressed_reasons - computed: true, optional: false, required: false
  public get suppressedReasons() {
    return this.getListAttribute('suppressed_reasons');
  }
}

export class DataAwsSesv2ConfigurationSetSuppressionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSesv2ConfigurationSetTrackingOptions {
}

export function dataAwsSesv2ConfigurationSetTrackingOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetTrackingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetTrackingOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetTrackingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetTrackingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetTrackingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_redirect_domain - computed: true, optional: false, required: false
  public get customRedirectDomain() {
    return this.getStringAttribute('custom_redirect_domain');
  }

  // https_policy - computed: true, optional: false, required: false
  public get httpsPolicy() {
    return this.getStringAttribute('https_policy');
  }
}

export class DataAwsSesv2ConfigurationSetTrackingOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions {
}

export function dataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // engagement_metrics - computed: true, optional: false, required: false
  public get engagementMetrics() {
    return this.getStringAttribute('engagement_metrics');
  }
}

export class DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions {
}

export function dataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optimized_shared_delivery - computed: true, optional: false, required: false
  public get optimizedSharedDelivery() {
    return this.getStringAttribute('optimized_shared_delivery');
  }
}

export class DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsSesv2ConfigurationSetVdmOptions {
}

export function dataAwsSesv2ConfigurationSetVdmOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSesv2ConfigurationSetVdmOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSesv2ConfigurationSetVdmOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSesv2ConfigurationSetVdmOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSesv2ConfigurationSetVdmOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dashboard_options - computed: true, optional: false, required: false
  private _dashboardOptions = new DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList(this, "dashboard_options", false);
  public get dashboardOptions() {
    return this._dashboardOptions;
  }

  // guardian_options - computed: true, optional: false, required: false
  private _guardianOptions = new DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList(this, "guardian_options", false);
  public get guardianOptions() {
    return this._guardianOptions;
  }
}

export class DataAwsSesv2ConfigurationSetVdmOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsOutputReference {
    return new DataAwsSesv2ConfigurationSetVdmOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set aws_sesv2_configuration_set}
*/
export class DataAwsSesv2ConfigurationSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_configuration_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSesv2ConfigurationSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSesv2ConfigurationSet to import
  * @param importFromId The id of the existing DataAwsSesv2ConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSesv2ConfigurationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_configuration_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/sesv2_configuration_set aws_sesv2_configuration_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSesv2ConfigurationSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSesv2ConfigurationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_configuration_set',
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
    this._configurationSetName = config.configurationSetName;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
  }

  // delivery_options - computed: true, optional: false, required: false
  private _deliveryOptions = new DataAwsSesv2ConfigurationSetDeliveryOptionsList(this, "delivery_options", false);
  public get deliveryOptions() {
    return this._deliveryOptions;
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

  // reputation_options - computed: true, optional: false, required: false
  private _reputationOptions = new DataAwsSesv2ConfigurationSetReputationOptionsList(this, "reputation_options", false);
  public get reputationOptions() {
    return this._reputationOptions;
  }

  // sending_options - computed: true, optional: false, required: false
  private _sendingOptions = new DataAwsSesv2ConfigurationSetSendingOptionsList(this, "sending_options", false);
  public get sendingOptions() {
    return this._sendingOptions;
  }

  // suppression_options - computed: true, optional: false, required: false
  private _suppressionOptions = new DataAwsSesv2ConfigurationSetSuppressionOptionsList(this, "suppression_options", false);
  public get suppressionOptions() {
    return this._suppressionOptions;
  }

  // tags - computed: true, optional: true, required: false
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

  // tracking_options - computed: true, optional: false, required: false
  private _trackingOptions = new DataAwsSesv2ConfigurationSetTrackingOptionsList(this, "tracking_options", false);
  public get trackingOptions() {
    return this._trackingOptions;
  }

  // vdm_options - computed: true, optional: false, required: false
  private _vdmOptions = new DataAwsSesv2ConfigurationSetVdmOptionsList(this, "vdm_options", false);
  public get vdmOptions() {
    return this._vdmOptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_set_name: {
        value: cdktf.stringToHclTerraform(this._configurationSetName),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
