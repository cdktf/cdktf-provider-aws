// https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#comment CloudfrontCachePolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#default_ttl CloudfrontCachePolicy#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#id CloudfrontCachePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#max_ttl CloudfrontCachePolicy#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#min_ttl CloudfrontCachePolicy#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#name CloudfrontCachePolicy#name}
  */
  readonly name: string;
  /**
  * parameters_in_cache_key_and_forwarded_to_origin block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
  */
  readonly parametersInCacheKeyAndForwardedToOrigin: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#items CloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined) {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#cookie_behavior CloudfrontCachePolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#cookies CloudfrontCachePolicy#cookies}
  */
  readonly cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct!.cookies),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieBehavior = this._cookieBehavior;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieBehavior = undefined;
      this._cookies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieBehavior = value.cookieBehavior;
      this._cookies.internalValue = value.cookies;
    }
  }

  // cookie_behavior - computed: false, optional: false, required: true
  private _cookieBehavior?: string; 
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }
  public set cookieBehavior(value: string) {
    this._cookieBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieBehaviorInput() {
    return this._cookieBehavior;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#items CloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined) {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#header_behavior CloudfrontCachePolicy#header_behavior}
  */
  readonly headerBehavior?: string;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#headers CloudfrontCachePolicy#headers}
  */
  readonly headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct!.headers),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBehavior = this._headerBehavior;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerBehavior = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerBehavior = value.headerBehavior;
      this._headers.internalValue = value.headers;
    }
  }

  // header_behavior - computed: false, optional: true, required: false
  private _headerBehavior?: string; 
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }
  public set headerBehavior(value: string) {
    this._headerBehavior = value;
  }
  public resetHeaderBehavior() {
    this._headerBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBehaviorInput() {
    return this._headerBehavior;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#items CloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined) {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#query_string_behavior CloudfrontCachePolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * query_strings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#query_strings CloudfrontCachePolicy#query_strings}
  */
  readonly queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct!.queryStrings),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryStringBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringBehavior = this._queryStringBehavior;
    }
    if (this._queryStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStrings = this._queryStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryStringBehavior = undefined;
      this._queryStrings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryStringBehavior = value.queryStringBehavior;
      this._queryStrings.internalValue = value.queryStrings;
    }
  }

  // query_string_behavior - computed: false, optional: false, required: true
  private _queryStringBehavior?: string; 
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }
  public set queryStringBehavior(value: string) {
    this._queryStringBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBehaviorInput() {
    return this._queryStringBehavior;
  }

  // query_strings - computed: false, optional: true, required: false
  private _queryStrings = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(this, "query_strings");
  public get queryStrings() {
    return this._queryStrings;
  }
  public putQueryStrings(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings) {
    this._queryStrings.internalValue = value;
  }
  public resetQueryStrings() {
    this._queryStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsInput() {
    return this._queryStrings.internalValue;
  }
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}
  */
  readonly enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}
  */
  readonly enableAcceptEncodingGzip?: boolean | cdktf.IResolvable;
  /**
  * cookies_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#cookies_config CloudfrontCachePolicy#cookies_config}
  */
  readonly cookiesConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
  /**
  * headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#headers_config CloudfrontCachePolicy#headers_config}
  */
  readonly headersConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
  /**
  * query_strings_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy#query_strings_config CloudfrontCachePolicy#query_strings_config}
  */
  readonly queryStringsConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
    enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct!.enableAcceptEncodingGzip),
    cookies_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct!.cookiesConfig),
    headers_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct!.headersConfig),
    query_strings_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAcceptEncodingBrotli !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceptEncodingBrotli = this._enableAcceptEncodingBrotli;
    }
    if (this._enableAcceptEncodingGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceptEncodingGzip = this._enableAcceptEncodingGzip;
    }
    if (this._cookiesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesConfig = this._cookiesConfig?.internalValue;
    }
    if (this._headersConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersConfig = this._headersConfig?.internalValue;
    }
    if (this._queryStringsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringsConfig = this._queryStringsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAcceptEncodingBrotli = undefined;
      this._enableAcceptEncodingGzip = undefined;
      this._cookiesConfig.internalValue = undefined;
      this._headersConfig.internalValue = undefined;
      this._queryStringsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAcceptEncodingBrotli = value.enableAcceptEncodingBrotli;
      this._enableAcceptEncodingGzip = value.enableAcceptEncodingGzip;
      this._cookiesConfig.internalValue = value.cookiesConfig;
      this._headersConfig.internalValue = value.headersConfig;
      this._queryStringsConfig.internalValue = value.queryStringsConfig;
    }
  }

  // enable_accept_encoding_brotli - computed: false, optional: true, required: false
  private _enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable; 
  public get enableAcceptEncodingBrotli() {
    return this.getBooleanAttribute('enable_accept_encoding_brotli');
  }
  public set enableAcceptEncodingBrotli(value: boolean | cdktf.IResolvable) {
    this._enableAcceptEncodingBrotli = value;
  }
  public resetEnableAcceptEncodingBrotli() {
    this._enableAcceptEncodingBrotli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingBrotliInput() {
    return this._enableAcceptEncodingBrotli;
  }

  // enable_accept_encoding_gzip - computed: false, optional: true, required: false
  private _enableAcceptEncodingGzip?: boolean | cdktf.IResolvable; 
  public get enableAcceptEncodingGzip() {
    return this.getBooleanAttribute('enable_accept_encoding_gzip');
  }
  public set enableAcceptEncodingGzip(value: boolean | cdktf.IResolvable) {
    this._enableAcceptEncodingGzip = value;
  }
  public resetEnableAcceptEncodingGzip() {
    this._enableAcceptEncodingGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingGzipInput() {
    return this._enableAcceptEncodingGzip;
  }

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }
  public putCookiesConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig) {
    this._cookiesConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig.internalValue;
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }
  public putHeadersConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig) {
    this._headersConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig.internalValue;
  }

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
  public putQueryStringsConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig) {
    this._queryStringsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy aws_cloudfront_cache_policy}
*/
export class CloudfrontCachePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_cache_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy aws_cloudfront_cache_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontCachePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_cache_policy',
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
    this._comment = config.comment;
    this._defaultTtl = config.defaultTtl;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
    this._minTtl = config.minTtl;
    this._name = config.name;
    this._parametersInCacheKeyAndForwardedToOrigin.internalValue = config.parametersInCacheKeyAndForwardedToOrigin;
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

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
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

  // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: false, required: true
  private _parametersInCacheKeyAndForwardedToOrigin = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin");
  public get parametersInCacheKeyAndForwardedToOrigin() {
    return this._parametersInCacheKeyAndForwardedToOrigin;
  }
  public putParametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin) {
    this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInCacheKeyAndForwardedToOriginInput() {
    return this._parametersInCacheKeyAndForwardedToOrigin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      id: cdktf.stringToTerraform(this._id),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      min_ttl: cdktf.numberToTerraform(this._minTtl),
      name: cdktf.stringToTerraform(this._name),
      parameters_in_cache_key_and_forwarded_to_origin: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(this._parametersInCacheKeyAndForwardedToOrigin.internalValue),
    };
  }
}
