/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEc2ClientVpnEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}
  */
  readonly clientVpnEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#region DataAwsEc2ClientVpnEndpoint#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}
  */
  readonly filter?: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}
  */
  readonly timeouts?: DataAwsEc2ClientVpnEndpointTimeouts;
}
export interface DataAwsEc2ClientVpnEndpointAuthenticationOptions {
}

export function dataAwsEc2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointAuthenticationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2ClientVpnEndpointAuthenticationOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointAuthenticationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2ClientVpnEndpointAuthenticationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2ClientVpnEndpointAuthenticationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_id - computed: true, optional: false, required: false
  public get activeDirectoryId() {
    return this.getStringAttribute('active_directory_id');
  }

  // root_certificate_chain_arn - computed: true, optional: false, required: false
  public get rootCertificateChainArn() {
    return this.getStringAttribute('root_certificate_chain_arn');
  }

  // saml_provider_arn - computed: true, optional: false, required: false
  public get samlProviderArn() {
    return this.getStringAttribute('saml_provider_arn');
  }

  // self_service_saml_provider_arn - computed: true, optional: false, required: false
  public get selfServiceSamlProviderArn() {
    return this.getStringAttribute('self_service_saml_provider_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsEc2ClientVpnEndpointAuthenticationOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference {
    return new DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2ClientVpnEndpointClientConnectOptions {
}

export function dataAwsEc2ClientVpnEndpointClientConnectOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointClientConnectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2ClientVpnEndpointClientConnectOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointClientConnectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2ClientVpnEndpointClientConnectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2ClientVpnEndpointClientConnectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // lambda_function_arn - computed: true, optional: false, required: false
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
}

export class DataAwsEc2ClientVpnEndpointClientConnectOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference {
    return new DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2ClientVpnEndpointClientLoginBannerOptions {
}

export function dataAwsEc2ClientVpnEndpointClientLoginBannerOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2ClientVpnEndpointClientLoginBannerOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2ClientVpnEndpointClientLoginBannerOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // banner_text - computed: true, optional: false, required: false
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference {
    return new DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptions {
}

export function dataAwsEc2ClientVpnEndpointClientRouteEnforcementOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2ClientVpnEndpointClientRouteEnforcementOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
}

export class DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference {
    return new DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2ClientVpnEndpointConnectionLogOptions {
}

export function dataAwsEc2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: DataAwsEc2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsEc2ClientVpnEndpointConnectionLogOptionsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointConnectionLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2ClientVpnEndpointConnectionLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2ClientVpnEndpointConnectionLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_log_group - computed: true, optional: false, required: false
  public get cloudwatchLogGroup() {
    return this.getStringAttribute('cloudwatch_log_group');
  }

  // cloudwatch_log_stream - computed: true, optional: false, required: false
  public get cloudwatchLogStream() {
    return this.getStringAttribute('cloudwatch_log_stream');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsEc2ClientVpnEndpointConnectionLogOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference {
    return new DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2ClientVpnEndpointFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}
  */
  readonly values: string[];
}

export function dataAwsEc2ClientVpnEndpointFilterToTerraform(struct?: DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataAwsEc2ClientVpnEndpointFilterToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEc2ClientVpnEndpointFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2ClientVpnEndpointFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataAwsEc2ClientVpnEndpointFilterList extends cdktf.ComplexList {
  public internalValue? : DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable

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
  public get(index: number): DataAwsEc2ClientVpnEndpointFilterOutputReference {
    return new DataAwsEc2ClientVpnEndpointFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEc2ClientVpnEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}
  */
  readonly read?: string;
}

export function dataAwsEc2ClientVpnEndpointTimeoutsToTerraform(struct?: DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAwsEc2ClientVpnEndpointTimeoutsToHclTerraform(struct?: DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsEc2ClientVpnEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEc2ClientVpnEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}
*/
export class DataAwsEc2ClientVpnEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_client_vpn_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEc2ClientVpnEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEc2ClientVpnEndpoint to import
  * @param importFromId The id of the existing DataAwsEc2ClientVpnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEc2ClientVpnEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_client_vpn_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/data-sources/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEc2ClientVpnEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEc2ClientVpnEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.7.0',
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
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._filter.internalValue = config.filter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_options - computed: true, optional: false, required: false
  private _authenticationOptions = new DataAwsEc2ClientVpnEndpointAuthenticationOptionsList(this, "authentication_options", false);
  public get authenticationOptions() {
    return this._authenticationOptions;
  }

  // client_cidr_block - computed: true, optional: false, required: false
  public get clientCidrBlock() {
    return this.getStringAttribute('client_cidr_block');
  }

  // client_connect_options - computed: true, optional: false, required: false
  private _clientConnectOptions = new DataAwsEc2ClientVpnEndpointClientConnectOptionsList(this, "client_connect_options", false);
  public get clientConnectOptions() {
    return this._clientConnectOptions;
  }

  // client_login_banner_options - computed: true, optional: false, required: false
  private _clientLoginBannerOptions = new DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList(this, "client_login_banner_options", false);
  public get clientLoginBannerOptions() {
    return this._clientLoginBannerOptions;
  }

  // client_route_enforcement_options - computed: true, optional: false, required: false
  private _clientRouteEnforcementOptions = new DataAwsEc2ClientVpnEndpointClientRouteEnforcementOptionsList(this, "client_route_enforcement_options", false);
  public get clientRouteEnforcementOptions() {
    return this._clientRouteEnforcementOptions;
  }

  // client_vpn_endpoint_id - computed: true, optional: true, required: false
  private _clientVpnEndpointId?: string; 
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  public resetClientVpnEndpointId() {
    this._clientVpnEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId;
  }

  // connection_log_options - computed: true, optional: false, required: false
  private _connectionLogOptions = new DataAwsEc2ClientVpnEndpointConnectionLogOptionsList(this, "connection_log_options", false);
  public get connectionLogOptions() {
    return this._connectionLogOptions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
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

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // self_service_portal - computed: true, optional: false, required: false
  public get selfServicePortal() {
    return this.getStringAttribute('self_service_portal');
  }

  // self_service_portal_url - computed: true, optional: false, required: false
  public get selfServicePortalUrl() {
    return this.getStringAttribute('self_service_portal_url');
  }

  // server_certificate_arn - computed: true, optional: false, required: false
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }

  // session_timeout_hours - computed: true, optional: false, required: false
  public get sessionTimeoutHours() {
    return this.getNumberAttribute('session_timeout_hours');
  }

  // split_tunnel - computed: true, optional: false, required: false
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
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

  // transport_protocol - computed: true, optional: false, required: false
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpn_port - computed: true, optional: false, required: false
  public get vpnPort() {
    return this.getNumberAttribute('vpn_port');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsEc2ClientVpnEndpointFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsEc2ClientVpnEndpointFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAwsEc2ClientVpnEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAwsEc2ClientVpnEndpointTimeouts) {
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
      client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsEc2ClientVpnEndpointFilterToTerraform, true)(this._filter.internalValue),
      timeouts: dataAwsEc2ClientVpnEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_vpn_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._clientVpnEndpointId),
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
      filter: {
        value: cdktf.listMapperHcl(dataAwsEc2ClientVpnEndpointFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAwsEc2ClientVpnEndpointFilterList",
      },
      timeouts: {
        value: dataAwsEc2ClientVpnEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAwsEc2ClientVpnEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
