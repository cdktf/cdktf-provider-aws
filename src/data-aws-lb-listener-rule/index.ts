/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLbListenerRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}
  */
  readonly listenerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}
  */
  readonly priority?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#region DataAwsLbListenerRule#region}
  */
  readonly region?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#action DataAwsLbListenerRule#action}
  */
  readonly action?: DataAwsLbListenerRuleAction[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#condition DataAwsLbListenerRule#condition}
  */
  readonly condition?: DataAwsLbListenerRuleCondition[] | cdktf.IResolvable;
}
export interface DataAwsLbListenerRuleActionAuthenticateCognito {
}

export function dataAwsLbListenerRuleActionAuthenticateCognitoToTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionAuthenticateCognitoToHclTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // authentication_request_extra_params - computed: true, optional: false, required: false
  private _authenticationRequestExtraParams = new cdktf.StringMap(this, "authentication_request_extra_params");
  public get authenticationRequestExtraParams() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }

  // user_pool_client_id - computed: true, optional: false, required: false
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }

  // user_pool_domain - computed: true, optional: false, required: false
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
}

export class DataAwsLbListenerRuleActionAuthenticateCognitoList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionAuthenticateCognito[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference {
    return new DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionAuthenticateOidc {
}

export function dataAwsLbListenerRuleActionAuthenticateOidcToTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionAuthenticateOidcToHclTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // authentication_request_extra_params - computed: true, optional: false, required: false
  private _authenticationRequestExtraParams = new cdktf.StringMap(this, "authentication_request_extra_params");
  public get authenticationRequestExtraParams() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // user_info_endpoint - computed: true, optional: false, required: false
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
}

export class DataAwsLbListenerRuleActionAuthenticateOidcList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionAuthenticateOidc[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionAuthenticateOidcOutputReference {
    return new DataAwsLbListenerRuleActionAuthenticateOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionFixedResponse {
}

export function dataAwsLbListenerRuleActionFixedResponseToTerraform(struct?: DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionFixedResponseToHclTerraform(struct?: DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // message_body - computed: true, optional: false, required: false
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAwsLbListenerRuleActionFixedResponseList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionFixedResponse[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionFixedResponseOutputReference {
    return new DataAwsLbListenerRuleActionFixedResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionForwardStickiness {
}

export function dataAwsLbListenerRuleActionForwardStickinessToTerraform(struct?: DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionForwardStickinessToHclTerraform(struct?: DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionForwardStickinessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsLbListenerRuleActionForwardStickinessList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionForwardStickiness[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionForwardStickinessOutputReference {
    return new DataAwsLbListenerRuleActionForwardStickinessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionForwardTargetGroup {
}

export function dataAwsLbListenerRuleActionForwardTargetGroupToTerraform(struct?: DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionForwardTargetGroupToHclTerraform(struct?: DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsLbListenerRuleActionForwardTargetGroupList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionForwardTargetGroupOutputReference {
    return new DataAwsLbListenerRuleActionForwardTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionForward {
  /**
  * stickiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#stickiness DataAwsLbListenerRule#stickiness}
  */
  readonly stickiness?: DataAwsLbListenerRuleActionForwardStickiness[] | cdktf.IResolvable;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#target_group DataAwsLbListenerRule#target_group}
  */
  readonly targetGroup?: DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
}

export function dataAwsLbListenerRuleActionForwardToTerraform(struct?: DataAwsLbListenerRuleActionForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stickiness: cdktf.listMapper(dataAwsLbListenerRuleActionForwardStickinessToTerraform, true)(struct!.stickiness),
    target_group: cdktf.listMapper(dataAwsLbListenerRuleActionForwardTargetGroupToTerraform, true)(struct!.targetGroup),
  }
}


export function dataAwsLbListenerRuleActionForwardToHclTerraform(struct?: DataAwsLbListenerRuleActionForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stickiness: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionForwardStickinessToHclTerraform, true)(struct!.stickiness),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionForwardStickinessList",
    },
    target_group: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionForwardTargetGroupToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "set",
      storageClassType: "DataAwsLbListenerRuleActionForwardTargetGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionForward | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stickiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickiness = this._stickiness?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionForward | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stickiness.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stickiness.internalValue = value.stickiness;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness = new DataAwsLbListenerRuleActionForwardStickinessList(this, "stickiness", false);
  public get stickiness() {
    return this._stickiness;
  }
  public putStickiness(value: DataAwsLbListenerRuleActionForwardStickiness[] | cdktf.IResolvable) {
    this._stickiness.internalValue = value;
  }
  public resetStickiness() {
    this._stickiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness.internalValue;
  }

  // target_group - computed: false, optional: true, required: false
  private _targetGroup = new DataAwsLbListenerRuleActionForwardTargetGroupList(this, "target_group", true);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  public resetTargetGroup() {
    this._targetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}

export class DataAwsLbListenerRuleActionForwardList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionForward[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionForwardOutputReference {
    return new DataAwsLbListenerRuleActionForwardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleActionRedirect {
}

export function dataAwsLbListenerRuleActionRedirectToTerraform(struct?: DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleActionRedirectToHclTerraform(struct?: DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAwsLbListenerRuleActionRedirectList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionRedirectOutputReference {
    return new DataAwsLbListenerRuleActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleAction {
  /**
  * authenticate_cognito block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#authenticate_cognito DataAwsLbListenerRule#authenticate_cognito}
  */
  readonly authenticateCognito?: DataAwsLbListenerRuleActionAuthenticateCognito[] | cdktf.IResolvable;
  /**
  * authenticate_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#authenticate_oidc DataAwsLbListenerRule#authenticate_oidc}
  */
  readonly authenticateOidc?: DataAwsLbListenerRuleActionAuthenticateOidc[] | cdktf.IResolvable;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#fixed_response DataAwsLbListenerRule#fixed_response}
  */
  readonly fixedResponse?: DataAwsLbListenerRuleActionFixedResponse[] | cdktf.IResolvable;
  /**
  * forward block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#forward DataAwsLbListenerRule#forward}
  */
  readonly forward?: DataAwsLbListenerRuleActionForward[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#redirect DataAwsLbListenerRule#redirect}
  */
  readonly redirect?: DataAwsLbListenerRuleActionRedirect[] | cdktf.IResolvable;
}

export function dataAwsLbListenerRuleActionToTerraform(struct?: DataAwsLbListenerRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_cognito: cdktf.listMapper(dataAwsLbListenerRuleActionAuthenticateCognitoToTerraform, true)(struct!.authenticateCognito),
    authenticate_oidc: cdktf.listMapper(dataAwsLbListenerRuleActionAuthenticateOidcToTerraform, true)(struct!.authenticateOidc),
    fixed_response: cdktf.listMapper(dataAwsLbListenerRuleActionFixedResponseToTerraform, true)(struct!.fixedResponse),
    forward: cdktf.listMapper(dataAwsLbListenerRuleActionForwardToTerraform, true)(struct!.forward),
    redirect: cdktf.listMapper(dataAwsLbListenerRuleActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function dataAwsLbListenerRuleActionToHclTerraform(struct?: DataAwsLbListenerRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_cognito: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionAuthenticateCognitoToHclTerraform, true)(struct!.authenticateCognito),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionAuthenticateCognitoList",
    },
    authenticate_oidc: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionAuthenticateOidcToHclTerraform, true)(struct!.authenticateOidc),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionAuthenticateOidcList",
    },
    fixed_response: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionFixedResponseToHclTerraform, true)(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionFixedResponseList",
    },
    forward: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionForwardToHclTerraform, true)(struct!.forward),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionForwardList",
    },
    redirect: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateCognito?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateCognito = this._authenticateCognito?.internalValue;
    }
    if (this._authenticateOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOidc = this._authenticateOidc?.internalValue;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateCognito.internalValue = undefined;
      this._authenticateOidc.internalValue = undefined;
      this._fixedResponse.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateCognito.internalValue = value.authenticateCognito;
      this._authenticateOidc.internalValue = value.authenticateOidc;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._forward.internalValue = value.forward;
      this._redirect.internalValue = value.redirect;
    }
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // authenticate_cognito - computed: false, optional: true, required: false
  private _authenticateCognito = new DataAwsLbListenerRuleActionAuthenticateCognitoList(this, "authenticate_cognito", false);
  public get authenticateCognito() {
    return this._authenticateCognito;
  }
  public putAuthenticateCognito(value: DataAwsLbListenerRuleActionAuthenticateCognito[] | cdktf.IResolvable) {
    this._authenticateCognito.internalValue = value;
  }
  public resetAuthenticateCognito() {
    this._authenticateCognito.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateCognitoInput() {
    return this._authenticateCognito.internalValue;
  }

  // authenticate_oidc - computed: false, optional: true, required: false
  private _authenticateOidc = new DataAwsLbListenerRuleActionAuthenticateOidcList(this, "authenticate_oidc", false);
  public get authenticateOidc() {
    return this._authenticateOidc;
  }
  public putAuthenticateOidc(value: DataAwsLbListenerRuleActionAuthenticateOidc[] | cdktf.IResolvable) {
    this._authenticateOidc.internalValue = value;
  }
  public resetAuthenticateOidc() {
    this._authenticateOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOidcInput() {
    return this._authenticateOidc.internalValue;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new DataAwsLbListenerRuleActionFixedResponseList(this, "fixed_response", false);
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: DataAwsLbListenerRuleActionFixedResponse[] | cdktf.IResolvable) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new DataAwsLbListenerRuleActionForwardList(this, "forward", false);
  public get forward() {
    return this._forward;
  }
  public putForward(value: DataAwsLbListenerRuleActionForward[] | cdktf.IResolvable) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataAwsLbListenerRuleActionRedirectList(this, "redirect", false);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataAwsLbListenerRuleActionRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class DataAwsLbListenerRuleActionList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleAction[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleActionOutputReference {
    return new DataAwsLbListenerRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionHostHeader {
}

export function dataAwsLbListenerRuleConditionHostHeaderToTerraform(struct?: DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionHostHeaderToHclTerraform(struct?: DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionHostHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionHostHeaderList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionHostHeader[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionHostHeaderOutputReference {
    return new DataAwsLbListenerRuleConditionHostHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionHttpHeader {
}

export function dataAwsLbListenerRuleConditionHttpHeaderToTerraform(struct?: DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionHttpHeaderToHclTerraform(struct?: DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // http_header_name - computed: true, optional: false, required: false
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionHttpHeaderList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionHttpHeader[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionHttpHeaderOutputReference {
    return new DataAwsLbListenerRuleConditionHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionHttpRequestMethod {
}

export function dataAwsLbListenerRuleConditionHttpRequestMethodToTerraform(struct?: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionHttpRequestMethodToHclTerraform(struct?: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionHttpRequestMethodList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionHttpRequestMethod[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference {
    return new DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionPathPattern {
}

export function dataAwsLbListenerRuleConditionPathPatternToTerraform(struct?: DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionPathPatternToHclTerraform(struct?: DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionPathPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionPathPatternList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionPathPattern[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionPathPatternOutputReference {
    return new DataAwsLbListenerRuleConditionPathPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionQueryStringValues {
}

export function dataAwsLbListenerRuleConditionQueryStringValuesToTerraform(struct?: DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionQueryStringValuesToHclTerraform(struct?: DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionQueryStringValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsLbListenerRuleConditionQueryStringValuesList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionQueryStringValues[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionQueryStringValuesOutputReference {
    return new DataAwsLbListenerRuleConditionQueryStringValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionQueryString {
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#values DataAwsLbListenerRule#values}
  */
  readonly values?: DataAwsLbListenerRuleConditionQueryStringValues[] | cdktf.IResolvable;
}

export function dataAwsLbListenerRuleConditionQueryStringToTerraform(struct?: DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(dataAwsLbListenerRuleConditionQueryStringValuesToTerraform, true)(struct!.values),
  }
}


export function dataAwsLbListenerRuleConditionQueryStringToHclTerraform(struct?: DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionQueryStringValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "set",
      storageClassType: "DataAwsLbListenerRuleConditionQueryStringValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleConditionQueryStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values.internalValue = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values = new DataAwsLbListenerRuleConditionQueryStringValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: DataAwsLbListenerRuleConditionQueryStringValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class DataAwsLbListenerRuleConditionQueryStringList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionQueryString[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionQueryStringOutputReference {
    return new DataAwsLbListenerRuleConditionQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleConditionSourceIp {
}

export function dataAwsLbListenerRuleConditionSourceIpToTerraform(struct?: DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsLbListenerRuleConditionSourceIpToHclTerraform(struct?: DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsLbListenerRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAwsLbListenerRuleConditionSourceIpList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleConditionSourceIp[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionSourceIpOutputReference {
    return new DataAwsLbListenerRuleConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLbListenerRuleCondition {
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#host_header DataAwsLbListenerRule#host_header}
  */
  readonly hostHeader?: DataAwsLbListenerRuleConditionHostHeader[] | cdktf.IResolvable;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#http_header DataAwsLbListenerRule#http_header}
  */
  readonly httpHeader?: DataAwsLbListenerRuleConditionHttpHeader[] | cdktf.IResolvable;
  /**
  * http_request_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#http_request_method DataAwsLbListenerRule#http_request_method}
  */
  readonly httpRequestMethod?: DataAwsLbListenerRuleConditionHttpRequestMethod[] | cdktf.IResolvable;
  /**
  * path_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#path_pattern DataAwsLbListenerRule#path_pattern}
  */
  readonly pathPattern?: DataAwsLbListenerRuleConditionPathPattern[] | cdktf.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#query_string DataAwsLbListenerRule#query_string}
  */
  readonly queryString?: DataAwsLbListenerRuleConditionQueryString[] | cdktf.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#source_ip DataAwsLbListenerRule#source_ip}
  */
  readonly sourceIp?: DataAwsLbListenerRuleConditionSourceIp[] | cdktf.IResolvable;
}

export function dataAwsLbListenerRuleConditionToTerraform(struct?: DataAwsLbListenerRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.listMapper(dataAwsLbListenerRuleConditionHostHeaderToTerraform, true)(struct!.hostHeader),
    http_header: cdktf.listMapper(dataAwsLbListenerRuleConditionHttpHeaderToTerraform, true)(struct!.httpHeader),
    http_request_method: cdktf.listMapper(dataAwsLbListenerRuleConditionHttpRequestMethodToTerraform, true)(struct!.httpRequestMethod),
    path_pattern: cdktf.listMapper(dataAwsLbListenerRuleConditionPathPatternToTerraform, true)(struct!.pathPattern),
    query_string: cdktf.listMapper(dataAwsLbListenerRuleConditionQueryStringToTerraform, true)(struct!.queryString),
    source_ip: cdktf.listMapper(dataAwsLbListenerRuleConditionSourceIpToTerraform, true)(struct!.sourceIp),
  }
}


export function dataAwsLbListenerRuleConditionToHclTerraform(struct?: DataAwsLbListenerRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionHostHeaderToHclTerraform, true)(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionHostHeaderList",
    },
    http_header: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionHttpHeaderToHclTerraform, true)(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionHttpHeaderList",
    },
    http_request_method: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionHttpRequestMethodToHclTerraform, true)(struct!.httpRequestMethod),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionHttpRequestMethodList",
    },
    path_pattern: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionPathPatternToHclTerraform, true)(struct!.pathPattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionPathPatternList",
    },
    query_string: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionQueryStringList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionSourceIpToHclTerraform, true)(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsLbListenerRuleConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsLbListenerRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLbListenerRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader?.internalValue;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._httpRequestMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestMethod = this._httpRequestMethod?.internalValue;
    }
    if (this._pathPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLbListenerRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = undefined;
      this._httpHeader.internalValue = undefined;
      this._httpRequestMethod.internalValue = undefined;
      this._pathPattern.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = value.hostHeader;
      this._httpHeader.internalValue = value.httpHeader;
      this._httpRequestMethod.internalValue = value.httpRequestMethod;
      this._pathPattern.internalValue = value.pathPattern;
      this._queryString.internalValue = value.queryString;
      this._sourceIp.internalValue = value.sourceIp;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader = new DataAwsLbListenerRuleConditionHostHeaderList(this, "host_header", false);
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: DataAwsLbListenerRuleConditionHostHeader[] | cdktf.IResolvable) {
    this._hostHeader.internalValue = value;
  }
  public resetHostHeader() {
    this._hostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader.internalValue;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new DataAwsLbListenerRuleConditionHttpHeaderList(this, "http_header", false);
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: DataAwsLbListenerRuleConditionHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // http_request_method - computed: false, optional: true, required: false
  private _httpRequestMethod = new DataAwsLbListenerRuleConditionHttpRequestMethodList(this, "http_request_method", false);
  public get httpRequestMethod() {
    return this._httpRequestMethod;
  }
  public putHttpRequestMethod(value: DataAwsLbListenerRuleConditionHttpRequestMethod[] | cdktf.IResolvable) {
    this._httpRequestMethod.internalValue = value;
  }
  public resetHttpRequestMethod() {
    this._httpRequestMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodInput() {
    return this._httpRequestMethod.internalValue;
  }

  // path_pattern - computed: false, optional: true, required: false
  private _pathPattern = new DataAwsLbListenerRuleConditionPathPatternList(this, "path_pattern", false);
  public get pathPattern() {
    return this._pathPattern;
  }
  public putPathPattern(value: DataAwsLbListenerRuleConditionPathPattern[] | cdktf.IResolvable) {
    this._pathPattern.internalValue = value;
  }
  public resetPathPattern() {
    this._pathPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new DataAwsLbListenerRuleConditionQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: DataAwsLbListenerRuleConditionQueryString[] | cdktf.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new DataAwsLbListenerRuleConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: DataAwsLbListenerRuleConditionSourceIp[] | cdktf.IResolvable) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }
}

export class DataAwsLbListenerRuleConditionList extends cdktf.ComplexList {
  public internalValue? : DataAwsLbListenerRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): DataAwsLbListenerRuleConditionOutputReference {
    return new DataAwsLbListenerRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule}
*/
export class DataAwsLbListenerRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb_listener_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsLbListenerRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsLbListenerRule to import
  * @param importFromId The id of the existing DataAwsLbListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsLbListenerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb_listener_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLbListenerRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsLbListenerRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
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
    this._arn = config.arn;
    this._listenerArn = config.listenerArn;
    this._priority = config.priority;
    this._region = config.region;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // listener_arn - computed: true, optional: true, required: false
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  public resetListenerArn() {
    this._listenerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataAwsLbListenerRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: DataAwsLbListenerRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataAwsLbListenerRuleConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataAwsLbListenerRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
      priority: cdktf.numberToTerraform(this._priority),
      region: cdktf.stringToTerraform(this._region),
      action: cdktf.listMapper(dataAwsLbListenerRuleActionToTerraform, true)(this._action.internalValue),
      condition: cdktf.listMapper(dataAwsLbListenerRuleConditionToTerraform, true)(this._condition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_arn: {
        value: cdktf.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(dataAwsLbListenerRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsLbListenerRuleActionList",
      },
      condition: {
        value: cdktf.listMapperHcl(dataAwsLbListenerRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAwsLbListenerRuleConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
