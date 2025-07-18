/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}
  */
  readonly authorizationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#description CloudwatchEventConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#id CloudwatchEventConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#kms_key_identifier CloudwatchEventConnection#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#name CloudwatchEventConnection#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#region CloudwatchEventConnection#region}
  */
  readonly region?: string;
  /**
  * auth_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}
  */
  readonly authParameters: CloudwatchEventConnectionAuthParameters;
  /**
  * invocation_connectivity_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#invocation_connectivity_parameters CloudwatchEventConnection#invocation_connectivity_parameters}
  */
  readonly invocationConnectivityParameters?: CloudwatchEventConnectionInvocationConnectivityParameters;
}
export interface CloudwatchEventConnectionAuthParametersApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
  */
  readonly value: string;
}

export function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKeyOutputReference | CloudwatchEventConnectionAuthParametersApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudwatchEventConnectionAuthParametersApiKeyToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKeyOutputReference | CloudwatchEventConnectionAuthParametersApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudwatchEventConnectionAuthParametersApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionAuthParametersApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface CloudwatchEventConnectionAuthParametersBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#password CloudwatchEventConnection#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#username CloudwatchEventConnection#username}
  */
  readonly username: string;
}

export function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct?: CloudwatchEventConnectionAuthParametersBasicOutputReference | CloudwatchEventConnectionAuthParametersBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloudwatchEventConnectionAuthParametersBasicToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersBasicOutputReference | CloudwatchEventConnectionAuthParametersBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionAuthParametersBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionAuthParametersBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktf.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktf.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference {
    return new CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktf.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktf.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference {
    return new CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktf.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktf.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference {
    return new CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParameters {
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#body CloudwatchEventConnection#body}
  */
  readonly body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#header CloudwatchEventConnection#header}
  */
  readonly header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | cdktf.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}
  */
  readonly queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | cdktf.IResolvable;
}

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform, true)(struct!.body),
    header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform, true)(struct!.header),
    query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform, true)(struct!.queryString),
  }
}


export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.listMapperHcl(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList",
    },
    header: {
      value: cdktf.listMapperHcl(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList",
    },
    query_string: {
      value: cdktf.listMapperHcl(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body.internalValue = value.body;
      this._header.internalValue = value.header;
      this._queryString.internalValue = value.queryString;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | cdktf.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | cdktf.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface CloudwatchEventConnectionAuthParametersOauthClientParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}
  */
  readonly clientSecret: string;
}

export function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthClientParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function cloudwatchEventConnectionAuthParametersOauthClientParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthClientParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktf.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktf.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference {
    return new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktf.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktf.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference {
    return new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_value_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isValueSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueSecret = this._isValueSecret;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueSecret = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isValueSecret = value.isValueSecret;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_secret - computed: false, optional: true, required: false
  private _isValueSecret?: boolean | cdktf.IResolvable; 
  public get isValueSecret() {
    return this.getBooleanAttribute('is_value_secret');
  }
  public set isValueSecret(value: boolean | cdktf.IResolvable) {
    this._isValueSecret = value;
  }
  public resetIsValueSecret() {
    this._isValueSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueSecretInput() {
    return this._isValueSecret;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference {
    return new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters {
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#body CloudwatchEventConnection#body}
  */
  readonly body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#header CloudwatchEventConnection#header}
  */
  readonly header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | cdktf.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}
  */
  readonly queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | cdktf.IResolvable;
}

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform, true)(struct!.body),
    header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform, true)(struct!.header),
    query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform, true)(struct!.queryString),
  }
}


export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.listMapperHcl(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList",
    },
    header: {
      value: cdktf.listMapperHcl(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList",
    },
    query_string: {
      value: cdktf.listMapperHcl(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body.internalValue = value.body;
      this._header.internalValue = value.header;
      this._queryString.internalValue = value.queryString;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | cdktf.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | cdktf.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface CloudwatchEventConnectionAuthParametersOauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}
  */
  readonly httpMethod: string;
  /**
  * client_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#client_parameters CloudwatchEventConnection#client_parameters}
  */
  readonly clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters;
  /**
  * oauth_http_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}
  */
  readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
}

export function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOutputReference | CloudwatchEventConnectionAuthParametersOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    client_parameters: cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct!.clientParameters),
    oauth_http_parameters: cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct!.oauthHttpParameters),
  }
}


export function cloudwatchEventConnectionAuthParametersOauthToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOutputReference | CloudwatchEventConnectionAuthParametersOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_parameters: {
      value: cloudwatchEventConnectionAuthParametersOauthClientParametersToHclTerraform(struct!.clientParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersOauthClientParametersList",
    },
    oauth_http_parameters: {
      value: cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToHclTerraform(struct!.oauthHttpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionAuthParametersOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionAuthParametersOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._clientParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientParameters = this._clientParameters?.internalValue;
    }
    if (this._oauthHttpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthHttpParameters = this._oauthHttpParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParametersOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationEndpoint = undefined;
      this._httpMethod = undefined;
      this._clientParameters.internalValue = undefined;
      this._oauthHttpParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._httpMethod = value.httpMethod;
      this._clientParameters.internalValue = value.clientParameters;
      this._oauthHttpParameters.internalValue = value.oauthHttpParameters;
    }
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // client_parameters - computed: false, optional: true, required: false
  private _clientParameters = new CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(this, "client_parameters");
  public get clientParameters() {
    return this._clientParameters;
  }
  public putClientParameters(value: CloudwatchEventConnectionAuthParametersOauthClientParameters) {
    this._clientParameters.internalValue = value;
  }
  public resetClientParameters() {
    this._clientParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientParametersInput() {
    return this._clientParameters.internalValue;
  }

  // oauth_http_parameters - computed: false, optional: false, required: true
  private _oauthHttpParameters = new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(this, "oauth_http_parameters");
  public get oauthHttpParameters() {
    return this._oauthHttpParameters;
  }
  public putOauthHttpParameters(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters) {
    this._oauthHttpParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthHttpParametersInput() {
    return this._oauthHttpParameters.internalValue;
  }
}
export interface CloudwatchEventConnectionAuthParameters {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#api_key CloudwatchEventConnection#api_key}
  */
  readonly apiKey?: CloudwatchEventConnectionAuthParametersApiKey;
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#basic CloudwatchEventConnection#basic}
  */
  readonly basic?: CloudwatchEventConnectionAuthParametersBasic;
  /**
  * invocation_http_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}
  */
  readonly invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#oauth CloudwatchEventConnection#oauth}
  */
  readonly oauth?: CloudwatchEventConnectionAuthParametersOauth;
}

export function cloudwatchEventConnectionAuthParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOutputReference | CloudwatchEventConnectionAuthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct!.apiKey),
    basic: cloudwatchEventConnectionAuthParametersBasicToTerraform(struct!.basic),
    invocation_http_parameters: cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct!.invocationHttpParameters),
    oauth: cloudwatchEventConnectionAuthParametersOauthToTerraform(struct!.oauth),
  }
}


export function cloudwatchEventConnectionAuthParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOutputReference | CloudwatchEventConnectionAuthParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cloudwatchEventConnectionAuthParametersApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersApiKeyList",
    },
    basic: {
      value: cloudwatchEventConnectionAuthParametersBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersBasicList",
    },
    invocation_http_parameters: {
      value: cloudwatchEventConnectionAuthParametersInvocationHttpParametersToHclTerraform(struct!.invocationHttpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersInvocationHttpParametersList",
    },
    oauth: {
      value: cloudwatchEventConnectionAuthParametersOauthToHclTerraform(struct!.oauth),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionAuthParametersOauthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionAuthParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._invocationHttpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationHttpParameters = this._invocationHttpParameters?.internalValue;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey.internalValue = undefined;
      this._basic.internalValue = undefined;
      this._invocationHttpParameters.internalValue = undefined;
      this._oauth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey.internalValue = value.apiKey;
      this._basic.internalValue = value.basic;
      this._invocationHttpParameters.internalValue = value.invocationHttpParameters;
      this._oauth.internalValue = value.oauth;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new CloudwatchEventConnectionAuthParametersApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: CloudwatchEventConnectionAuthParametersApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new CloudwatchEventConnectionAuthParametersBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: CloudwatchEventConnectionAuthParametersBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // invocation_http_parameters - computed: false, optional: true, required: false
  private _invocationHttpParameters = new CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(this, "invocation_http_parameters");
  public get invocationHttpParameters() {
    return this._invocationHttpParameters;
  }
  public putInvocationHttpParameters(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters) {
    this._invocationHttpParameters.internalValue = value;
  }
  public resetInvocationHttpParameters() {
    this._invocationHttpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationHttpParametersInput() {
    return this._invocationHttpParameters.internalValue;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new CloudwatchEventConnectionAuthParametersOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: CloudwatchEventConnectionAuthParametersOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }
}
export interface CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#resource_configuration_arn CloudwatchEventConnection#resource_configuration_arn}
  */
  readonly resourceConfigurationArn: string;
}

export function cloudwatchEventConnectionInvocationConnectivityParametersResourceParametersToTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_configuration_arn: cdktf.stringToTerraform(struct!.resourceConfigurationArn),
  }
}


export function cloudwatchEventConnectionInvocationConnectivityParametersResourceParametersToHclTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_configuration_arn: {
      value: cdktf.stringToHclTerraform(struct!.resourceConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationArn = this._resourceConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceConfigurationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceConfigurationArn = value.resourceConfigurationArn;
    }
  }

  // resource_association_arn - computed: true, optional: false, required: false
  public get resourceAssociationArn() {
    return this.getStringAttribute('resource_association_arn');
  }

  // resource_configuration_arn - computed: false, optional: false, required: true
  private _resourceConfigurationArn?: string; 
  public get resourceConfigurationArn() {
    return this.getStringAttribute('resource_configuration_arn');
  }
  public set resourceConfigurationArn(value: string) {
    this._resourceConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationArnInput() {
    return this._resourceConfigurationArn;
  }
}
export interface CloudwatchEventConnectionInvocationConnectivityParameters {
  /**
  * resource_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#resource_parameters CloudwatchEventConnection#resource_parameters}
  */
  readonly resourceParameters: CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters;
}

export function cloudwatchEventConnectionInvocationConnectivityParametersToTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_parameters: cloudwatchEventConnectionInvocationConnectivityParametersResourceParametersToTerraform(struct!.resourceParameters),
  }
}


export function cloudwatchEventConnectionInvocationConnectivityParametersToHclTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_parameters: {
      value: cloudwatchEventConnectionInvocationConnectivityParametersResourceParametersToHclTerraform(struct!.resourceParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchEventConnectionInvocationConnectivityParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventConnectionInvocationConnectivityParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParameters = this._resourceParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventConnectionInvocationConnectivityParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceParameters.internalValue = value.resourceParameters;
    }
  }

  // resource_parameters - computed: false, optional: false, required: true
  private _resourceParameters = new CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference(this, "resource_parameters");
  public get resourceParameters() {
    return this._resourceParameters;
  }
  public putResourceParameters(value: CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters) {
    this._resourceParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParametersInput() {
    return this._resourceParameters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection aws_cloudwatch_event_connection}
*/
export class CloudwatchEventConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_event_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchEventConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchEventConnection to import
  * @param importFromId The id of the existing CloudwatchEventConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchEventConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_event_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudwatch_event_connection aws_cloudwatch_event_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchEventConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchEventConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_connection',
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
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._id = config.id;
    this._kmsKeyIdentifier = config.kmsKeyIdentifier;
    this._name = config.name;
    this._region = config.region;
    this._authParameters.internalValue = config.authParameters;
    this._invocationConnectivityParameters.internalValue = config.invocationConnectivityParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorization_type - computed: false, optional: false, required: true
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // kms_key_identifier - computed: false, optional: true, required: false
  private _kmsKeyIdentifier?: string; 
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
  public set kmsKeyIdentifier(value: string) {
    this._kmsKeyIdentifier = value;
  }
  public resetKmsKeyIdentifier() {
    this._kmsKeyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdentifierInput() {
    return this._kmsKeyIdentifier;
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

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // auth_parameters - computed: false, optional: false, required: true
  private _authParameters = new CloudwatchEventConnectionAuthParametersOutputReference(this, "auth_parameters");
  public get authParameters() {
    return this._authParameters;
  }
  public putAuthParameters(value: CloudwatchEventConnectionAuthParameters) {
    this._authParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authParametersInput() {
    return this._authParameters.internalValue;
  }

  // invocation_connectivity_parameters - computed: false, optional: true, required: false
  private _invocationConnectivityParameters = new CloudwatchEventConnectionInvocationConnectivityParametersOutputReference(this, "invocation_connectivity_parameters");
  public get invocationConnectivityParameters() {
    return this._invocationConnectivityParameters;
  }
  public putInvocationConnectivityParameters(value: CloudwatchEventConnectionInvocationConnectivityParameters) {
    this._invocationConnectivityParameters.internalValue = value;
  }
  public resetInvocationConnectivityParameters() {
    this._invocationConnectivityParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConnectivityParametersInput() {
    return this._invocationConnectivityParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kms_key_identifier: cdktf.stringToTerraform(this._kmsKeyIdentifier),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      auth_parameters: cloudwatchEventConnectionAuthParametersToTerraform(this._authParameters.internalValue),
      invocation_connectivity_parameters: cloudwatchEventConnectionInvocationConnectivityParametersToTerraform(this._invocationConnectivityParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_type: {
        value: cdktf.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      kms_key_identifier: {
        value: cdktf.stringToHclTerraform(this._kmsKeyIdentifier),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_parameters: {
        value: cloudwatchEventConnectionAuthParametersToHclTerraform(this._authParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventConnectionAuthParametersList",
      },
      invocation_connectivity_parameters: {
        value: cloudwatchEventConnectionInvocationConnectivityParametersToHclTerraform(this._invocationConnectivityParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchEventConnectionInvocationConnectivityParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
