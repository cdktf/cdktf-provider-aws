// https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy#id DataAwsCloudfrontResponseHeadersPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy#name DataAwsCloudfrontResponseHeadersPolicy#name}
  */
  readonly name?: string;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders {
}

export function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
}

export function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins {
}

export function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders {
}

export function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfig {
}

export function dataAwsCloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_allow_credentials - computed: true, optional: false, required: false
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials');
  }

  // access_control_allow_headers - computed: true, optional: false, required: false
  private _accessControlAllowHeaders = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList(this, "access_control_allow_headers", false);
  public get accessControlAllowHeaders() {
    return this._accessControlAllowHeaders;
  }

  // access_control_allow_methods - computed: true, optional: false, required: false
  private _accessControlAllowMethods = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList(this, "access_control_allow_methods", false);
  public get accessControlAllowMethods() {
    return this._accessControlAllowMethods;
  }

  // access_control_allow_origins - computed: true, optional: false, required: false
  private _accessControlAllowOrigins = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList(this, "access_control_allow_origins", false);
  public get accessControlAllowOrigins() {
    return this._accessControlAllowOrigins;
  }

  // access_control_expose_headers - computed: true, optional: false, required: false
  private _accessControlExposeHeaders = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList(this, "access_control_expose_headers", false);
  public get accessControlExposeHeaders() {
    return this._accessControlExposeHeaders;
  }

  // access_control_max_age_sec - computed: true, optional: false, required: false
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }

  // origin_override - computed: true, optional: false, required: false
  public get originOverride() {
    return this.getBooleanAttribute('origin_override');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems {
}

export function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig {
}

export function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
}

export function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_security_policy - computed: true, optional: false, required: false
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
}

export function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions {
}

export function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frame_option - computed: true, optional: false, required: false
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy {
}

export function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // referrer_policy - computed: true, optional: false, required: false
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
}

export function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_control_max_age_sec - computed: true, optional: false, required: false
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // preload - computed: true, optional: false, required: false
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection {
}

export function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode_block - computed: true, optional: false, required: false
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override');
  }

  // protection - computed: true, optional: false, required: false
  public get protection() {
    return this.getBooleanAttribute('protection');
  }

  // report_uri - computed: true, optional: false, required: false
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig {
}

export function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_security_policy - computed: true, optional: false, required: false
  private _contentSecurityPolicy = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList(this, "content_security_policy", false);
  public get contentSecurityPolicy() {
    return this._contentSecurityPolicy;
  }

  // content_type_options - computed: true, optional: false, required: false
  private _contentTypeOptions = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList(this, "content_type_options", false);
  public get contentTypeOptions() {
    return this._contentTypeOptions;
  }

  // frame_options - computed: true, optional: false, required: false
  private _frameOptions = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList(this, "frame_options", false);
  public get frameOptions() {
    return this._frameOptions;
  }

  // referrer_policy - computed: true, optional: false, required: false
  private _referrerPolicy = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList(this, "referrer_policy", false);
  public get referrerPolicy() {
    return this._referrerPolicy;
  }

  // strict_transport_security - computed: true, optional: false, required: false
  private _strictTransportSecurity = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList(this, "strict_transport_security", false);
  public get strictTransportSecurity() {
    return this._strictTransportSecurity;
  }

  // xss_protection - computed: true, optional: false, required: false
  private _xssProtection = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList(this, "xss_protection", false);
  public get xssProtection() {
    return this._xssProtection;
  }
}

export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig {
}

export function dataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined) {
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

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
}

export class DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference {
    return new DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}
*/
export class DataAwsCloudfrontResponseHeadersPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_response_headers_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudfrontResponseHeadersPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudfrontResponseHeadersPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_response_headers_policy',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // cors_config - computed: true, optional: false, required: false
  private _corsConfig = new DataAwsCloudfrontResponseHeadersPolicyCorsConfigList(this, "cors_config", false);
  public get corsConfig() {
    return this._corsConfig;
  }

  // custom_headers_config - computed: true, optional: false, required: false
  private _customHeadersConfig = new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList(this, "custom_headers_config", false);
  public get customHeadersConfig() {
    return this._customHeadersConfig;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // security_headers_config - computed: true, optional: false, required: false
  private _securityHeadersConfig = new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList(this, "security_headers_config", false);
  public get securityHeadersConfig() {
    return this._securityHeadersConfig;
  }

  // server_timing_headers_config - computed: true, optional: false, required: false
  private _serverTimingHeadersConfig = new DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigList(this, "server_timing_headers_config", false);
  public get serverTimingHeadersConfig() {
    return this._serverTimingHeadersConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
