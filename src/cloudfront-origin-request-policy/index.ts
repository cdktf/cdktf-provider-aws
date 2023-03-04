// https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}
  */
  readonly name: string;
  /**
  * cookies_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
  */
  readonly cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig;
  /**
  * headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}
  */
  readonly headersConfig: CloudfrontOriginRequestPolicyHeadersConfig;
  /**
  * query_strings_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
  */
  readonly queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig;
}
export interface CloudfrontOriginRequestPolicyCookiesConfigCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference | CloudfrontOriginRequestPolicyCookiesConfigCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined) {
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
export interface CloudfrontOriginRequestPolicyCookiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies CloudfrontOriginRequestPolicy#cookies}
  */
  readonly cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies;
}

export function cloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigOutputReference | CloudfrontOriginRequestPolicyCookiesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct!.cookies),
  }
}

export class CloudfrontOriginRequestPolicyCookiesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyCookiesConfig | undefined {
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

  public set internalValue(value: CloudfrontOriginRequestPolicyCookiesConfig | undefined) {
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
  private _cookies = new CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: CloudfrontOriginRequestPolicyCookiesConfigCookies) {
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
export interface CloudfrontOriginRequestPolicyHeadersConfigHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference | CloudfrontOriginRequestPolicyHeadersConfigHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined) {
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
export interface CloudfrontOriginRequestPolicyHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}
  */
  readonly headerBehavior?: string;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers CloudfrontOriginRequestPolicy#headers}
  */
  readonly headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders;
}

export function cloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigOutputReference | CloudfrontOriginRequestPolicyHeadersConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct!.headers),
  }
}

export class CloudfrontOriginRequestPolicyHeadersConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyHeadersConfig | undefined {
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

  public set internalValue(value: CloudfrontOriginRequestPolicyHeadersConfig | undefined) {
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
  private _headers = new CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders) {
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
export interface CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.items),
  }
}

export class CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined) {
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
export interface CloudfrontOriginRequestPolicyQueryStringsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * query_strings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings CloudfrontOriginRequestPolicy#query_strings}
  */
  readonly queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
}

export function cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct!.queryStrings),
  }
}

export class CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontOriginRequestPolicyQueryStringsConfig | undefined {
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

  public set internalValue(value: CloudfrontOriginRequestPolicyQueryStringsConfig | undefined) {
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
  private _queryStrings = new CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(this, "query_strings");
  public get queryStrings() {
    return this._queryStrings;
  }
  public putQueryStrings(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}
*/
export class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_origin_request_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontOriginRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_origin_request_policy',
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
    this._id = config.id;
    this._name = config.name;
    this._cookiesConfig.internalValue = config.cookiesConfig;
    this._headersConfig.internalValue = config.headersConfig;
    this._queryStringsConfig.internalValue = config.queryStringsConfig;
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

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig = new CloudfrontOriginRequestPolicyCookiesConfigOutputReference(this, "cookies_config");
  public get cookiesConfig() {
    return this._cookiesConfig;
  }
  public putCookiesConfig(value: CloudfrontOriginRequestPolicyCookiesConfig) {
    this._cookiesConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig.internalValue;
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig = new CloudfrontOriginRequestPolicyHeadersConfigOutputReference(this, "headers_config");
  public get headersConfig() {
    return this._headersConfig;
  }
  public putHeadersConfig(value: CloudfrontOriginRequestPolicyHeadersConfig) {
    this._headersConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig.internalValue;
  }

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig = new CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(this, "query_strings_config");
  public get queryStringsConfig() {
    return this._queryStringsConfig;
  }
  public putQueryStringsConfig(value: CloudfrontOriginRequestPolicyQueryStringsConfig) {
    this._queryStringsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      cookies_config: cloudfrontOriginRequestPolicyCookiesConfigToTerraform(this._cookiesConfig.internalValue),
      headers_config: cloudfrontOriginRequestPolicyHeadersConfigToTerraform(this._headersConfig.internalValue),
      query_strings_config: cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(this._queryStringsConfig.internalValue),
    };
  }
}
