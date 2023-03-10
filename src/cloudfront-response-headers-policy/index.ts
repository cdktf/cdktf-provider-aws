// https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#etag CloudfrontResponseHeadersPolicy#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#id CloudfrontResponseHeadersPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}
  */
  readonly name: string;
  /**
  * cors_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#cors_config CloudfrontResponseHeadersPolicy#cors_config}
  */
  readonly corsConfig?: CloudfrontResponseHeadersPolicyCorsConfig;
  /**
  * custom_headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}
  */
  readonly customHeadersConfig?: CloudfrontResponseHeadersPolicyCustomHeadersConfig;
  /**
  * security_headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}
  */
  readonly securityHeadersConfig?: CloudfrontResponseHeadersPolicySecurityHeadersConfig;
  /**
  * server_timing_headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#server_timing_headers_config CloudfrontResponseHeadersPolicy#server_timing_headers_config}
  */
  readonly serverTimingHeadersConfig?: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig;
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[]; 
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
  public set items(value: string[]) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface CloudfrontResponseHeadersPolicyCorsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}
  */
  readonly accessControlAllowCredentials: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#origin_override CloudfrontResponseHeadersPolicy#origin_override}
  */
  readonly originOverride: boolean | cdktf.IResolvable;
  /**
  * access_control_allow_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}
  */
  readonly accessControlAllowHeaders: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
  /**
  * access_control_allow_methods block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}
  */
  readonly accessControlAllowMethods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
  /**
  * access_control_allow_origins block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}
  */
  readonly accessControlAllowOrigins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
  /**
  * access_control_expose_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}
  */
  readonly accessControlExposeHeaders?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
}

export function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigOutputReference | CloudfrontResponseHeadersPolicyCorsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_allow_credentials: cdktf.booleanToTerraform(struct!.accessControlAllowCredentials),
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    origin_override: cdktf.booleanToTerraform(struct!.originOverride),
    access_control_allow_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct!.accessControlAllowHeaders),
    access_control_allow_methods: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct!.accessControlAllowMethods),
    access_control_allow_origins: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct!.accessControlAllowOrigins),
    access_control_expose_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct!.accessControlExposeHeaders),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyCorsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlAllowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
    }
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._originOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.originOverride = this._originOverride;
    }
    if (this._accessControlAllowHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowHeaders = this._accessControlAllowHeaders?.internalValue;
    }
    if (this._accessControlAllowMethods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowMethods = this._accessControlAllowMethods?.internalValue;
    }
    if (this._accessControlAllowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlAllowOrigins = this._accessControlAllowOrigins?.internalValue;
    }
    if (this._accessControlExposeHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlExposeHeaders = this._accessControlExposeHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessControlAllowCredentials = undefined;
      this._accessControlMaxAgeSec = undefined;
      this._originOverride = undefined;
      this._accessControlAllowHeaders.internalValue = undefined;
      this._accessControlAllowMethods.internalValue = undefined;
      this._accessControlAllowOrigins.internalValue = undefined;
      this._accessControlExposeHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessControlAllowCredentials = value.accessControlAllowCredentials;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._originOverride = value.originOverride;
      this._accessControlAllowHeaders.internalValue = value.accessControlAllowHeaders;
      this._accessControlAllowMethods.internalValue = value.accessControlAllowMethods;
      this._accessControlAllowOrigins.internalValue = value.accessControlAllowOrigins;
      this._accessControlExposeHeaders.internalValue = value.accessControlExposeHeaders;
    }
  }

  // access_control_allow_credentials - computed: false, optional: false, required: true
  private _accessControlAllowCredentials?: boolean | cdktf.IResolvable; 
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials');
  }
  public set accessControlAllowCredentials(value: boolean | cdktf.IResolvable) {
    this._accessControlAllowCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowCredentialsInput() {
    return this._accessControlAllowCredentials;
  }

  // access_control_max_age_sec - computed: false, optional: true, required: false
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  public resetAccessControlMaxAgeSec() {
    this._accessControlMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // origin_override - computed: false, optional: false, required: true
  private _originOverride?: boolean | cdktf.IResolvable; 
  public get originOverride() {
    return this.getBooleanAttribute('origin_override');
  }
  public set originOverride(value: boolean | cdktf.IResolvable) {
    this._originOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originOverrideInput() {
    return this._originOverride;
  }

  // access_control_allow_headers - computed: false, optional: false, required: true
  private _accessControlAllowHeaders = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference(this, "access_control_allow_headers");
  public get accessControlAllowHeaders() {
    return this._accessControlAllowHeaders;
  }
  public putAccessControlAllowHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders) {
    this._accessControlAllowHeaders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowHeadersInput() {
    return this._accessControlAllowHeaders.internalValue;
  }

  // access_control_allow_methods - computed: false, optional: false, required: true
  private _accessControlAllowMethods = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference(this, "access_control_allow_methods");
  public get accessControlAllowMethods() {
    return this._accessControlAllowMethods;
  }
  public putAccessControlAllowMethods(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods) {
    this._accessControlAllowMethods.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowMethodsInput() {
    return this._accessControlAllowMethods.internalValue;
  }

  // access_control_allow_origins - computed: false, optional: false, required: true
  private _accessControlAllowOrigins = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference(this, "access_control_allow_origins");
  public get accessControlAllowOrigins() {
    return this._accessControlAllowOrigins;
  }
  public putAccessControlAllowOrigins(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins) {
    this._accessControlAllowOrigins.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowOriginsInput() {
    return this._accessControlAllowOrigins.internalValue;
  }

  // access_control_expose_headers - computed: false, optional: true, required: false
  private _accessControlExposeHeaders = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference(this, "access_control_expose_headers");
  public get accessControlExposeHeaders() {
    return this._accessControlExposeHeaders;
  }
  public putAccessControlExposeHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders) {
    this._accessControlExposeHeaders.internalValue = value;
  }
  public resetAccessControlExposeHeaders() {
    this._accessControlExposeHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlExposeHeadersInput() {
    return this._accessControlExposeHeaders.internalValue;
  }
}
export interface CloudfrontResponseHeadersPolicyCustomHeadersConfigItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#value CloudfrontResponseHeadersPolicy#value}
  */
  readonly value: string;
}

export function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    override: cdktf.booleanToTerraform(struct!.override),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontResponseHeadersPolicyCustomHeadersConfigItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._override = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._override = value.override;
      this._value = value.value;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
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

export class CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference {
    return new CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontResponseHeadersPolicyCustomHeadersConfig {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyCustomHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform, true)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: cdktf.stringToTerraform(struct!.contentSecurityPolicy),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentSecurityPolicy = undefined;
      this._override = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentSecurityPolicy = value.contentSecurityPolicy;
      this._override = value.override;
    }
  }

  // content_security_policy - computed: false, optional: false, required: true
  private _contentSecurityPolicy?: string; 
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }
  public set contentSecurityPolicy(value: string) {
    this._contentSecurityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._override = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._override = value.override;
    }
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#frame_option CloudfrontResponseHeadersPolicy#frame_option}
  */
  readonly frameOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frame_option: cdktf.stringToTerraform(struct!.frameOption),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frameOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOption = this._frameOption;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frameOption = undefined;
      this._override = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frameOption = value.frameOption;
      this._override = value.override;
    }
  }

  // frame_option - computed: false, optional: false, required: true
  private _frameOption?: string; 
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }
  public set frameOption(value: string) {
    this._frameOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionInput() {
    return this._frameOption;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy: string;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
    referrer_policy: cdktf.stringToTerraform(struct!.referrerPolicy),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._referrerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._override = undefined;
      this._referrerPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._override = value.override;
      this._referrerPolicy = value.referrerPolicy;
    }
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // referrer_policy - computed: false, optional: false, required: true
  private _referrerPolicy?: string; 
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
  public set referrerPolicy(value: string) {
    this._referrerPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy;
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#preload CloudfrontResponseHeadersPolicy#preload}
  */
  readonly preload?: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    override: cdktf.booleanToTerraform(struct!.override),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessControlMaxAgeSec = undefined;
      this._includeSubdomains = undefined;
      this._override = undefined;
      this._preload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
      this._includeSubdomains = value.includeSubdomains;
      this._override = value.override;
      this._preload = value.preload;
    }
  }

  // access_control_max_age_sec - computed: false, optional: false, required: true
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec;
  }

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // preload - computed: false, optional: true, required: false
  private _preload?: boolean | cdktf.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktf.IResolvable) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#mode_block CloudfrontResponseHeadersPolicy#mode_block}
  */
  readonly modeBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#protection CloudfrontResponseHeadersPolicy#protection}
  */
  readonly protection: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#report_uri CloudfrontResponseHeadersPolicy#report_uri}
  */
  readonly reportUri?: string;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode_block: cdktf.booleanToTerraform(struct!.modeBlock),
    override: cdktf.booleanToTerraform(struct!.override),
    protection: cdktf.booleanToTerraform(struct!.protection),
    report_uri: cdktf.stringToTerraform(struct!.reportUri),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modeBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeBlock = this._modeBlock;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._protection !== undefined) {
      hasAnyValues = true;
      internalValueResult.protection = this._protection;
    }
    if (this._reportUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportUri = this._reportUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modeBlock = undefined;
      this._override = undefined;
      this._protection = undefined;
      this._reportUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modeBlock = value.modeBlock;
      this._override = value.override;
      this._protection = value.protection;
      this._reportUri = value.reportUri;
    }
  }

  // mode_block - computed: false, optional: true, required: false
  private _modeBlock?: boolean | cdktf.IResolvable; 
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block');
  }
  public set modeBlock(value: boolean | cdktf.IResolvable) {
    this._modeBlock = value;
  }
  public resetModeBlock() {
    this._modeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeBlockInput() {
    return this._modeBlock;
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // protection - computed: false, optional: false, required: true
  private _protection?: boolean | cdktf.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection');
  }
  public set protection(value: boolean | cdktf.IResolvable) {
    this._protection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // report_uri - computed: false, optional: true, required: false
  private _reportUri?: string; 
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
  public set reportUri(value: string) {
    this._reportUri = value;
  }
  public resetReportUri() {
    this._reportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportUriInput() {
    return this._reportUri;
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfig {
  /**
  * content_security_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
  /**
  * content_type_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}
  */
  readonly contentTypeOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
  /**
  * frame_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#frame_options CloudfrontResponseHeadersPolicy#frame_options}
  */
  readonly frameOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
  /**
  * referrer_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
  /**
  * strict_transport_security block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}
  */
  readonly strictTransportSecurity?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
  /**
  * xss_protection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}
  */
  readonly xssProtection?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct!.contentSecurityPolicy),
    content_type_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct!.contentTypeOptions),
    frame_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct!.frameOptions),
    referrer_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct!.referrerPolicy),
    strict_transport_security: cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct!.strictTransportSecurity),
    xss_protection: cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct!.xssProtection),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy?.internalValue;
    }
    if (this._contentTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeOptions = this._contentTypeOptions?.internalValue;
    }
    if (this._frameOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameOptions = this._frameOptions?.internalValue;
    }
    if (this._referrerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy?.internalValue;
    }
    if (this._strictTransportSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTransportSecurity = this._strictTransportSecurity?.internalValue;
    }
    if (this._xssProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xssProtection = this._xssProtection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentSecurityPolicy.internalValue = undefined;
      this._contentTypeOptions.internalValue = undefined;
      this._frameOptions.internalValue = undefined;
      this._referrerPolicy.internalValue = undefined;
      this._strictTransportSecurity.internalValue = undefined;
      this._xssProtection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentSecurityPolicy.internalValue = value.contentSecurityPolicy;
      this._contentTypeOptions.internalValue = value.contentTypeOptions;
      this._frameOptions.internalValue = value.frameOptions;
      this._referrerPolicy.internalValue = value.referrerPolicy;
      this._strictTransportSecurity.internalValue = value.strictTransportSecurity;
      this._xssProtection.internalValue = value.xssProtection;
    }
  }

  // content_security_policy - computed: false, optional: true, required: false
  private _contentSecurityPolicy = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference(this, "content_security_policy");
  public get contentSecurityPolicy() {
    return this._contentSecurityPolicy;
  }
  public putContentSecurityPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy) {
    this._contentSecurityPolicy.internalValue = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy.internalValue;
  }

  // content_type_options - computed: false, optional: true, required: false
  private _contentTypeOptions = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference(this, "content_type_options");
  public get contentTypeOptions() {
    return this._contentTypeOptions;
  }
  public putContentTypeOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions) {
    this._contentTypeOptions.internalValue = value;
  }
  public resetContentTypeOptions() {
    this._contentTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeOptionsInput() {
    return this._contentTypeOptions.internalValue;
  }

  // frame_options - computed: false, optional: true, required: false
  private _frameOptions = new CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference(this, "frame_options");
  public get frameOptions() {
    return this._frameOptions;
  }
  public putFrameOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions) {
    this._frameOptions.internalValue = value;
  }
  public resetFrameOptions() {
    this._frameOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionsInput() {
    return this._frameOptions.internalValue;
  }

  // referrer_policy - computed: false, optional: true, required: false
  private _referrerPolicy = new CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference(this, "referrer_policy");
  public get referrerPolicy() {
    return this._referrerPolicy;
  }
  public putReferrerPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy) {
    this._referrerPolicy.internalValue = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy.internalValue;
  }

  // strict_transport_security - computed: false, optional: true, required: false
  private _strictTransportSecurity = new CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference(this, "strict_transport_security");
  public get strictTransportSecurity() {
    return this._strictTransportSecurity;
  }
  public putStrictTransportSecurity(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity) {
    this._strictTransportSecurity.internalValue = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity.internalValue;
  }

  // xss_protection - computed: false, optional: true, required: false
  private _xssProtection = new CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference(this, "xss_protection");
  public get xssProtection() {
    return this._xssProtection;
  }
  public putXssProtection(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection) {
    this._xssProtection.internalValue = value;
  }
  public resetXssProtection() {
    this._xssProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssProtectionInput() {
    return this._xssProtection.internalValue;
  }
}
export interface CloudfrontResponseHeadersPolicyServerTimingHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#enabled CloudfrontResponseHeadersPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#sampling_rate CloudfrontResponseHeadersPolicy#sampling_rate}
  */
  readonly samplingRate: number;
}

export function cloudfrontResponseHeadersPolicyServerTimingHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyServerTimingHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}

export class CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._samplingRate = value.samplingRate;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sampling_rate - computed: false, optional: false, required: true
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}
*/
export class CloudfrontResponseHeadersPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_response_headers_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontResponseHeadersPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontResponseHeadersPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_response_headers_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._comment = config.comment;
    this._etag = config.etag;
    this._id = config.id;
    this._name = config.name;
    this._corsConfig.internalValue = config.corsConfig;
    this._customHeadersConfig.internalValue = config.customHeadersConfig;
    this._securityHeadersConfig.internalValue = config.securityHeadersConfig;
    this._serverTimingHeadersConfig.internalValue = config.serverTimingHeadersConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // cors_config - computed: false, optional: true, required: false
  private _corsConfig = new CloudfrontResponseHeadersPolicyCorsConfigOutputReference(this, "cors_config");
  public get corsConfig() {
    return this._corsConfig;
  }
  public putCorsConfig(value: CloudfrontResponseHeadersPolicyCorsConfig) {
    this._corsConfig.internalValue = value;
  }
  public resetCorsConfig() {
    this._corsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigInput() {
    return this._corsConfig.internalValue;
  }

  // custom_headers_config - computed: false, optional: true, required: false
  private _customHeadersConfig = new CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference(this, "custom_headers_config");
  public get customHeadersConfig() {
    return this._customHeadersConfig;
  }
  public putCustomHeadersConfig(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig) {
    this._customHeadersConfig.internalValue = value;
  }
  public resetCustomHeadersConfig() {
    this._customHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersConfigInput() {
    return this._customHeadersConfig.internalValue;
  }

  // security_headers_config - computed: false, optional: true, required: false
  private _securityHeadersConfig = new CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference(this, "security_headers_config");
  public get securityHeadersConfig() {
    return this._securityHeadersConfig;
  }
  public putSecurityHeadersConfig(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig) {
    this._securityHeadersConfig.internalValue = value;
  }
  public resetSecurityHeadersConfig() {
    this._securityHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHeadersConfigInput() {
    return this._securityHeadersConfig.internalValue;
  }

  // server_timing_headers_config - computed: false, optional: true, required: false
  private _serverTimingHeadersConfig = new CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference(this, "server_timing_headers_config");
  public get serverTimingHeadersConfig() {
    return this._serverTimingHeadersConfig;
  }
  public putServerTimingHeadersConfig(value: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig) {
    this._serverTimingHeadersConfig.internalValue = value;
  }
  public resetServerTimingHeadersConfig() {
    this._serverTimingHeadersConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTimingHeadersConfigInput() {
    return this._serverTimingHeadersConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      cors_config: cloudfrontResponseHeadersPolicyCorsConfigToTerraform(this._corsConfig.internalValue),
      custom_headers_config: cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(this._customHeadersConfig.internalValue),
      security_headers_config: cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(this._securityHeadersConfig.internalValue),
      server_timing_headers_config: cloudfrontResponseHeadersPolicyServerTimingHeadersConfigToTerraform(this._serverTimingHeadersConfig.internalValue),
    };
  }
}
