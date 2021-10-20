// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export namespace CloudFront {
  export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#comment CloudfrontCachePolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#default_ttl CloudfrontCachePolicy#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#etag CloudfrontCachePolicy#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#max_ttl CloudfrontCachePolicy#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#min_ttl CloudfrontCachePolicy#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#name CloudfrontCachePolicy#name}
    */
    readonly name: string;
    /**
    * parameters_in_cache_key_and_forwarded_to_origin block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
    */
    readonly parametersInCacheKeyAndForwardedToOrigin?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
  }
  export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
  }

  function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    }
  }

  export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // items - computed: false, optional: true, required: false
    private _items?: string[] | undefined; 
    public get items() {
      return this.getListAttribute('items');
    }
    public set items(value: string[] | undefined) {
      this._items = value;
    }
    public resetItems() {
      this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
      return this._items
    }
  }
  export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookie_behavior CloudfrontCachePolicy#cookie_behavior}
    */
    readonly cookieBehavior: string;
    /**
    * cookies block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies CloudfrontCachePolicy#cookies}
    */
    readonly cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
  }

  function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
      cookies: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct!.cookies),
    }
  }

  export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._cookieBehavior
    }

    // cookies - computed: false, optional: true, required: false
    private _cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined; 
    private __cookiesOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(this as any, "cookies", true);
    public get cookies() {
      return this.__cookiesOutput;
    }
    public putCookies(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined) {
      this._cookies = value;
    }
    public resetCookies() {
      this._cookies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesInput() {
      return this._cookies
    }
  }
  export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
  }

  function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    }
  }

  export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // items - computed: false, optional: true, required: false
    private _items?: string[] | undefined; 
    public get items() {
      return this.getListAttribute('items');
    }
    public set items(value: string[] | undefined) {
      this._items = value;
    }
    public resetItems() {
      this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
      return this._items
    }
  }
  export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#header_behavior CloudfrontCachePolicy#header_behavior}
    */
    readonly headerBehavior?: string;
    /**
    * headers block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers CloudfrontCachePolicy#headers}
    */
    readonly headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
  }

  function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
      headers: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct!.headers),
    }
  }

  export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // header_behavior - computed: false, optional: true, required: false
    private _headerBehavior?: string | undefined; 
    public get headerBehavior() {
      return this.getStringAttribute('header_behavior');
    }
    public set headerBehavior(value: string | undefined) {
      this._headerBehavior = value;
    }
    public resetHeaderBehavior() {
      this._headerBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerBehaviorInput() {
      return this._headerBehavior
    }

    // headers - computed: false, optional: true, required: false
    private _headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined; 
    private __headersOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(this as any, "headers", true);
    public get headers() {
      return this.__headersOutput;
    }
    public putHeaders(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined) {
      this._headers = value;
    }
    public resetHeaders() {
      this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
      return this._headers
    }
  }
  export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
  }

  function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    }
  }

  export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // items - computed: false, optional: true, required: false
    private _items?: string[] | undefined; 
    public get items() {
      return this.getListAttribute('items');
    }
    public set items(value: string[] | undefined) {
      this._items = value;
    }
    public resetItems() {
      this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
      return this._items
    }
  }
  export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_string_behavior CloudfrontCachePolicy#query_string_behavior}
    */
    readonly queryStringBehavior: string;
    /**
    * query_strings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings CloudfrontCachePolicy#query_strings}
    */
    readonly queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
  }

  function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
      query_strings: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct!.queryStrings),
    }
  }

  export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._queryStringBehavior
    }

    // query_strings - computed: false, optional: true, required: false
    private _queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined; 
    private __queryStringsOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(this as any, "query_strings", true);
    public get queryStrings() {
      return this.__queryStringsOutput;
    }
    public putQueryStrings(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined) {
      this._queryStrings = value;
    }
    public resetQueryStrings() {
      this._queryStrings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringsInput() {
      return this._queryStrings
    }
  }
  export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}
    */
    readonly enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}
    */
    readonly enableAcceptEncodingGzip?: boolean | cdktf.IResolvable;
    /**
    * cookies_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies_config CloudfrontCachePolicy#cookies_config}
    */
    readonly cookiesConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
    /**
    * headers_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers_config CloudfrontCachePolicy#headers_config}
    */
    readonly headersConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
    /**
    * query_strings_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings_config CloudfrontCachePolicy#query_strings_config}
    */
    readonly queryStringsConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
  }

  function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enable_accept_encoding_brotli - computed: false, optional: true, required: false
    private _enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable | undefined; 
    public get enableAcceptEncodingBrotli() {
      return this.getBooleanAttribute('enable_accept_encoding_brotli') as any;
    }
    public set enableAcceptEncodingBrotli(value: boolean | cdktf.IResolvable | undefined) {
      this._enableAcceptEncodingBrotli = value;
    }
    public resetEnableAcceptEncodingBrotli() {
      this._enableAcceptEncodingBrotli = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAcceptEncodingBrotliInput() {
      return this._enableAcceptEncodingBrotli
    }

    // enable_accept_encoding_gzip - computed: false, optional: true, required: false
    private _enableAcceptEncodingGzip?: boolean | cdktf.IResolvable | undefined; 
    public get enableAcceptEncodingGzip() {
      return this.getBooleanAttribute('enable_accept_encoding_gzip') as any;
    }
    public set enableAcceptEncodingGzip(value: boolean | cdktf.IResolvable | undefined) {
      this._enableAcceptEncodingGzip = value;
    }
    public resetEnableAcceptEncodingGzip() {
      this._enableAcceptEncodingGzip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAcceptEncodingGzipInput() {
      return this._enableAcceptEncodingGzip
    }

    // cookies_config - computed: false, optional: false, required: true
    private _cookiesConfig?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig; 
    private __cookiesConfigOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this as any, "cookies_config", true);
    public get cookiesConfig() {
      return this.__cookiesConfigOutput;
    }
    public putCookiesConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig) {
      this._cookiesConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesConfigInput() {
      return this._cookiesConfig
    }

    // headers_config - computed: false, optional: false, required: true
    private _headersConfig?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig; 
    private __headersConfigOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this as any, "headers_config", true);
    public get headersConfig() {
      return this.__headersConfigOutput;
    }
    public putHeadersConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig) {
      this._headersConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get headersConfigInput() {
      return this._headersConfig
    }

    // query_strings_config - computed: false, optional: false, required: true
    private _queryStringsConfig?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig; 
    private __queryStringsConfigOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this as any, "query_strings_config", true);
    public get queryStringsConfig() {
      return this.__queryStringsConfigOutput;
    }
    public putQueryStringsConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig) {
      this._queryStringsConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringsConfigInput() {
      return this._queryStringsConfig
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
  */
  export class CloudfrontCachePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_cache_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCachePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_cache_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._comment = config.comment;
      this._defaultTtl = config.defaultTtl;
      this._etag = config.etag;
      this._maxTtl = config.maxTtl;
      this._minTtl = config.minTtl;
      this._name = config.name;
      this._parametersInCacheKeyAndForwardedToOrigin = config.parametersInCacheKeyAndForwardedToOrigin;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // default_ttl - computed: false, optional: true, required: false
    private _defaultTtl?: number | undefined; 
    public get defaultTtl() {
      return this.getNumberAttribute('default_ttl');
    }
    public set defaultTtl(value: number | undefined) {
      this._defaultTtl = value;
    }
    public resetDefaultTtl() {
      this._defaultTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTtlInput() {
      return this._defaultTtl
    }

    // etag - computed: true, optional: true, required: false
    private _etag?: string | undefined; 
    public get etag() {
      return this.getStringAttribute('etag');
    }
    public set etag(value: string | undefined) {
      this._etag = value;
    }
    public resetEtag() {
      this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get etagInput() {
      return this._etag
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_ttl - computed: false, optional: true, required: false
    private _maxTtl?: number | undefined; 
    public get maxTtl() {
      return this.getNumberAttribute('max_ttl');
    }
    public set maxTtl(value: number | undefined) {
      this._maxTtl = value;
    }
    public resetMaxTtl() {
      this._maxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTtlInput() {
      return this._maxTtl
    }

    // min_ttl - computed: false, optional: true, required: false
    private _minTtl?: number | undefined; 
    public get minTtl() {
      return this.getNumberAttribute('min_ttl');
    }
    public set minTtl(value: number | undefined) {
      this._minTtl = value;
    }
    public resetMinTtl() {
      this._minTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minTtlInput() {
      return this._minTtl
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
      return this._name
    }

    // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: true, required: false
    private _parametersInCacheKeyAndForwardedToOrigin?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined; 
    private __parametersInCacheKeyAndForwardedToOriginOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(this as any, "parameters_in_cache_key_and_forwarded_to_origin", true);
    public get parametersInCacheKeyAndForwardedToOrigin() {
      return this.__parametersInCacheKeyAndForwardedToOriginOutput;
    }
    public putParametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined) {
      this._parametersInCacheKeyAndForwardedToOrigin = value;
    }
    public resetParametersInCacheKeyAndForwardedToOrigin() {
      this._parametersInCacheKeyAndForwardedToOrigin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInCacheKeyAndForwardedToOriginInput() {
      return this._parametersInCacheKeyAndForwardedToOrigin
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        comment: cdktf.stringToTerraform(this._comment),
        default_ttl: cdktf.numberToTerraform(this._defaultTtl),
        etag: cdktf.stringToTerraform(this._etag),
        max_ttl: cdktf.numberToTerraform(this._maxTtl),
        min_ttl: cdktf.numberToTerraform(this._minTtl),
        name: cdktf.stringToTerraform(this._name),
        parameters_in_cache_key_and_forwarded_to_origin: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(this._parametersInCacheKeyAndForwardedToOrigin),
      };
    }
  }
  export interface CloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#aliases CloudfrontDistribution#aliases}
    */
    readonly aliases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#comment CloudfrontDistribution#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_root_object CloudfrontDistribution#default_root_object}
    */
    readonly defaultRootObject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_version CloudfrontDistribution#http_version}
    */
    readonly httpVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}
    */
    readonly isIpv6Enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#price_class CloudfrontDistribution#price_class}
    */
    readonly priceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#retain_on_delete CloudfrontDistribution#retain_on_delete}
    */
    readonly retainOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags CloudfrontDistribution#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#tags_all CloudfrontDistribution#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#wait_for_deployment CloudfrontDistribution#wait_for_deployment}
    */
    readonly waitForDeployment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#web_acl_id CloudfrontDistribution#web_acl_id}
    */
    readonly webAclId?: string;
    /**
    * custom_error_response block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_error_response CloudfrontDistribution#custom_error_response}
    */
    readonly customErrorResponse?: CloudfrontDistributionCustomErrorResponse[];
    /**
    * default_cache_behavior block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_cache_behavior CloudfrontDistribution#default_cache_behavior}
    */
    readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior;
    /**
    * logging_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#logging_config CloudfrontDistribution#logging_config}
    */
    readonly loggingConfig?: CloudfrontDistributionLoggingConfig;
    /**
    * ordered_cache_behavior block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}
    */
    readonly orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[];
    /**
    * origin block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin CloudfrontDistribution#origin}
    */
    readonly origin: CloudfrontDistributionOrigin[];
    /**
    * origin_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_group CloudfrontDistribution#origin_group}
    */
    readonly originGroup?: CloudfrontDistributionOriginGroup[];
    /**
    * restrictions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restrictions CloudfrontDistribution#restrictions}
    */
    readonly restrictions: CloudfrontDistributionRestrictions;
    /**
    * viewer_certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_certificate CloudfrontDistribution#viewer_certificate}
    */
    readonly viewerCertificate: CloudfrontDistributionViewerCertificate;
  }
  export class CloudfrontDistributionTrustedKeyGroupsItems extends cdktf.ComplexComputedList {

    // key_group_id - computed: true, optional: false, required: false
    public get keyGroupId() {
      return this.getStringAttribute('key_group_id');
    }

    // key_pair_ids - computed: true, optional: false, required: false
    public get keyPairIds() {
      return this.getListAttribute('key_pair_ids');
    }
  }
  export class CloudfrontDistributionTrustedKeyGroups extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // items - computed: true, optional: false, required: false
    public get items() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('items') as any;
    }
  }
  export class CloudfrontDistributionTrustedSignersItems extends cdktf.ComplexComputedList {

    // aws_account_number - computed: true, optional: false, required: false
    public get awsAccountNumber() {
      return this.getStringAttribute('aws_account_number');
    }

    // key_pair_ids - computed: true, optional: false, required: false
    public get keyPairIds() {
      return this.getListAttribute('key_pair_ids');
    }
  }
  export class CloudfrontDistributionTrustedSigners extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // items - computed: true, optional: false, required: false
    public get items() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('items') as any;
    }
  }
  export interface CloudfrontDistributionCustomErrorResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}
    */
    readonly errorCachingMinTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#error_code CloudfrontDistribution#error_code}
    */
    readonly errorCode: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_code CloudfrontDistribution#response_code}
    */
    readonly responseCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#response_page_path CloudfrontDistribution#response_page_path}
    */
    readonly responsePagePath?: string;
  }

  function cloudfrontDistributionCustomErrorResponseToTerraform(struct?: CloudfrontDistributionCustomErrorResponse): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      error_caching_min_ttl: cdktf.numberToTerraform(struct!.errorCachingMinTtl),
      error_code: cdktf.numberToTerraform(struct!.errorCode),
      response_code: cdktf.numberToTerraform(struct!.responseCode),
      response_page_path: cdktf.stringToTerraform(struct!.responsePagePath),
    }
  }

  export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
    */
    readonly forward: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
    */
    readonly whitelistedNames?: string[];
  }

  function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      forward: cdktf.stringToTerraform(struct!.forward),
      whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
    }
  }

  export class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // forward - computed: false, optional: false, required: true
    private _forward?: string; 
    public get forward() {
      return this.getStringAttribute('forward');
    }
    public set forward(value: string) {
      this._forward = value;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardInput() {
      return this._forward
    }

    // whitelisted_names - computed: true, optional: true, required: false
    private _whitelistedNames?: string[] | undefined; 
    public get whitelistedNames() {
      return this.getListAttribute('whitelisted_names');
    }
    public set whitelistedNames(value: string[] | undefined) {
      this._whitelistedNames = value;
    }
    public resetWhitelistedNames() {
      this._whitelistedNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get whitelistedNamesInput() {
      return this._whitelistedNames
    }
  }
  export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
    */
    readonly headers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
    */
    readonly queryString: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
    */
    readonly queryStringCacheKeys?: string[];
    /**
    * cookies block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
    */
    readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
  }

  function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValues): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
      query_string: cdktf.booleanToTerraform(struct!.queryString),
      query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
      cookies: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct!.cookies),
    }
  }

  export class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // headers - computed: true, optional: true, required: false
    private _headers?: string[] | undefined; 
    public get headers() {
      return this.getListAttribute('headers');
    }
    public set headers(value: string[] | undefined) {
      this._headers = value;
    }
    public resetHeaders() {
      this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
      return this._headers
    }

    // query_string - computed: false, optional: false, required: true
    private _queryString?: boolean | cdktf.IResolvable; 
    public get queryString() {
      return this.getBooleanAttribute('query_string') as any;
    }
    public set queryString(value: boolean | cdktf.IResolvable) {
      this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
      return this._queryString
    }

    // query_string_cache_keys - computed: true, optional: true, required: false
    private _queryStringCacheKeys?: string[] | undefined; 
    public get queryStringCacheKeys() {
      return this.getListAttribute('query_string_cache_keys');
    }
    public set queryStringCacheKeys(value: string[] | undefined) {
      this._queryStringCacheKeys = value;
    }
    public resetQueryStringCacheKeys() {
      this._queryStringCacheKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringCacheKeysInput() {
      return this._queryStringCacheKeys
    }

    // cookies - computed: false, optional: false, required: true
    private _cookies?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies; 
    private __cookiesOutput = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(this as any, "cookies", true);
    public get cookies() {
      return this.__cookiesOutput;
    }
    public putCookies(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies) {
      this._cookies = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesInput() {
      return this._cookies
    }
  }
  export interface CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
    */
    readonly functionArn: string;
  }

  function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      event_type: cdktf.stringToTerraform(struct!.eventType),
      function_arn: cdktf.stringToTerraform(struct!.functionArn),
    }
  }

  export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
    */
    readonly includeBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}
    */
    readonly lambdaArn: string;
  }

  function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      event_type: cdktf.stringToTerraform(struct!.eventType),
      include_body: cdktf.booleanToTerraform(struct!.includeBody),
      lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    }
  }

  export interface CloudfrontDistributionDefaultCacheBehavior {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
    */
    readonly cachePolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
    */
    readonly cachedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
    */
    readonly compress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
    */
    readonly fieldLevelEncryptionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
    */
    readonly originRequestPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
    */
    readonly realtimeLogConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
    */
    readonly smoothStreaming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
    */
    readonly targetOriginId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
    */
    readonly trustedKeyGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
    */
    readonly trustedSigners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
    */
    readonly viewerProtocolPolicy: string;
    /**
    * forwarded_values block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
    */
    readonly forwardedValues?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
    /**
    * function_association block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_association CloudfrontDistribution#function_association}
    */
    readonly functionAssociation?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[];
    /**
    * lambda_function_association block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
    */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[];
  }

  function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorOutputReference | CloudfrontDistributionDefaultCacheBehavior): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
      cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
      cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
      compress: cdktf.booleanToTerraform(struct!.compress),
      default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
      field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
      max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
      min_ttl: cdktf.numberToTerraform(struct!.minTtl),
      origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
      realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
      smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
      target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
      trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedKeyGroups),
      trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
      viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
      forwarded_values: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct!.forwardedValues),
      function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform)(struct!.functionAssociation),
      lambda_function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform)(struct!.lambdaFunctionAssociation),
    }
  }

  export class CloudfrontDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allowed_methods - computed: false, optional: false, required: true
    private _allowedMethods?: string[]; 
    public get allowedMethods() {
      return this.getListAttribute('allowed_methods');
    }
    public set allowedMethods(value: string[]) {
      this._allowedMethods = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedMethodsInput() {
      return this._allowedMethods
    }

    // cache_policy_id - computed: false, optional: true, required: false
    private _cachePolicyId?: string | undefined; 
    public get cachePolicyId() {
      return this.getStringAttribute('cache_policy_id');
    }
    public set cachePolicyId(value: string | undefined) {
      this._cachePolicyId = value;
    }
    public resetCachePolicyId() {
      this._cachePolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachePolicyIdInput() {
      return this._cachePolicyId
    }

    // cached_methods - computed: false, optional: false, required: true
    private _cachedMethods?: string[]; 
    public get cachedMethods() {
      return this.getListAttribute('cached_methods');
    }
    public set cachedMethods(value: string[]) {
      this._cachedMethods = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cachedMethodsInput() {
      return this._cachedMethods
    }

    // compress - computed: false, optional: true, required: false
    private _compress?: boolean | cdktf.IResolvable | undefined; 
    public get compress() {
      return this.getBooleanAttribute('compress') as any;
    }
    public set compress(value: boolean | cdktf.IResolvable | undefined) {
      this._compress = value;
    }
    public resetCompress() {
      this._compress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressInput() {
      return this._compress
    }

    // default_ttl - computed: true, optional: true, required: false
    private _defaultTtl?: number | undefined; 
    public get defaultTtl() {
      return this.getNumberAttribute('default_ttl');
    }
    public set defaultTtl(value: number | undefined) {
      this._defaultTtl = value;
    }
    public resetDefaultTtl() {
      this._defaultTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTtlInput() {
      return this._defaultTtl
    }

    // field_level_encryption_id - computed: false, optional: true, required: false
    private _fieldLevelEncryptionId?: string | undefined; 
    public get fieldLevelEncryptionId() {
      return this.getStringAttribute('field_level_encryption_id');
    }
    public set fieldLevelEncryptionId(value: string | undefined) {
      this._fieldLevelEncryptionId = value;
    }
    public resetFieldLevelEncryptionId() {
      this._fieldLevelEncryptionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldLevelEncryptionIdInput() {
      return this._fieldLevelEncryptionId
    }

    // max_ttl - computed: true, optional: true, required: false
    private _maxTtl?: number | undefined; 
    public get maxTtl() {
      return this.getNumberAttribute('max_ttl');
    }
    public set maxTtl(value: number | undefined) {
      this._maxTtl = value;
    }
    public resetMaxTtl() {
      this._maxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTtlInput() {
      return this._maxTtl
    }

    // min_ttl - computed: false, optional: true, required: false
    private _minTtl?: number | undefined; 
    public get minTtl() {
      return this.getNumberAttribute('min_ttl');
    }
    public set minTtl(value: number | undefined) {
      this._minTtl = value;
    }
    public resetMinTtl() {
      this._minTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minTtlInput() {
      return this._minTtl
    }

    // origin_request_policy_id - computed: false, optional: true, required: false
    private _originRequestPolicyId?: string | undefined; 
    public get originRequestPolicyId() {
      return this.getStringAttribute('origin_request_policy_id');
    }
    public set originRequestPolicyId(value: string | undefined) {
      this._originRequestPolicyId = value;
    }
    public resetOriginRequestPolicyId() {
      this._originRequestPolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originRequestPolicyIdInput() {
      return this._originRequestPolicyId
    }

    // realtime_log_config_arn - computed: false, optional: true, required: false
    private _realtimeLogConfigArn?: string | undefined; 
    public get realtimeLogConfigArn() {
      return this.getStringAttribute('realtime_log_config_arn');
    }
    public set realtimeLogConfigArn(value: string | undefined) {
      this._realtimeLogConfigArn = value;
    }
    public resetRealtimeLogConfigArn() {
      this._realtimeLogConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get realtimeLogConfigArnInput() {
      return this._realtimeLogConfigArn
    }

    // smooth_streaming - computed: false, optional: true, required: false
    private _smoothStreaming?: boolean | cdktf.IResolvable | undefined; 
    public get smoothStreaming() {
      return this.getBooleanAttribute('smooth_streaming') as any;
    }
    public set smoothStreaming(value: boolean | cdktf.IResolvable | undefined) {
      this._smoothStreaming = value;
    }
    public resetSmoothStreaming() {
      this._smoothStreaming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smoothStreamingInput() {
      return this._smoothStreaming
    }

    // target_origin_id - computed: false, optional: false, required: true
    private _targetOriginId?: string; 
    public get targetOriginId() {
      return this.getStringAttribute('target_origin_id');
    }
    public set targetOriginId(value: string) {
      this._targetOriginId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetOriginIdInput() {
      return this._targetOriginId
    }

    // trusted_key_groups - computed: true, optional: true, required: false
    private _trustedKeyGroups?: string[] | undefined; 
    public get trustedKeyGroups() {
      return this.getListAttribute('trusted_key_groups');
    }
    public set trustedKeyGroups(value: string[] | undefined) {
      this._trustedKeyGroups = value;
    }
    public resetTrustedKeyGroups() {
      this._trustedKeyGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedKeyGroupsInput() {
      return this._trustedKeyGroups
    }

    // trusted_signers - computed: true, optional: true, required: false
    private _trustedSigners?: string[] | undefined; 
    public get trustedSigners() {
      return this.getListAttribute('trusted_signers');
    }
    public set trustedSigners(value: string[] | undefined) {
      this._trustedSigners = value;
    }
    public resetTrustedSigners() {
      this._trustedSigners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedSignersInput() {
      return this._trustedSigners
    }

    // viewer_protocol_policy - computed: false, optional: false, required: true
    private _viewerProtocolPolicy?: string; 
    public get viewerProtocolPolicy() {
      return this.getStringAttribute('viewer_protocol_policy');
    }
    public set viewerProtocolPolicy(value: string) {
      this._viewerProtocolPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get viewerProtocolPolicyInput() {
      return this._viewerProtocolPolicy
    }

    // forwarded_values - computed: false, optional: true, required: false
    private _forwardedValues?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined; 
    private __forwardedValuesOutput = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(this as any, "forwarded_values", true);
    public get forwardedValues() {
      return this.__forwardedValuesOutput;
    }
    public putForwardedValues(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined) {
      this._forwardedValues = value;
    }
    public resetForwardedValues() {
      this._forwardedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardedValuesInput() {
      return this._forwardedValues
    }

    // function_association - computed: false, optional: true, required: false
    private _functionAssociation?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | undefined; 
    public get functionAssociation() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('function_association') as any;
    }
    public set functionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | undefined) {
      this._functionAssociation = value;
    }
    public resetFunctionAssociation() {
      this._functionAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionAssociationInput() {
      return this._functionAssociation
    }

    // lambda_function_association - computed: false, optional: true, required: false
    private _lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | undefined; 
    public get lambdaFunctionAssociation() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('lambda_function_association') as any;
    }
    public set lambdaFunctionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | undefined) {
      this._lambdaFunctionAssociation = value;
    }
    public resetLambdaFunctionAssociation() {
      this._lambdaFunctionAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionAssociationInput() {
      return this._lambdaFunctionAssociation
    }
  }
  export interface CloudfrontDistributionLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#bucket CloudfrontDistribution#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_cookies CloudfrontDistribution#include_cookies}
    */
    readonly includeCookies?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#prefix CloudfrontDistribution#prefix}
    */
    readonly prefix?: string;
  }

  function cloudfrontDistributionLoggingConfigToTerraform(struct?: CloudfrontDistributionLoggingConfigOutputReference | CloudfrontDistributionLoggingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      include_cookies: cdktf.booleanToTerraform(struct!.includeCookies),
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export class CloudfrontDistributionLoggingConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
      this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // include_cookies - computed: false, optional: true, required: false
    private _includeCookies?: boolean | cdktf.IResolvable | undefined; 
    public get includeCookies() {
      return this.getBooleanAttribute('include_cookies') as any;
    }
    public set includeCookies(value: boolean | cdktf.IResolvable | undefined) {
      this._includeCookies = value;
    }
    public resetIncludeCookies() {
      this._includeCookies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeCookiesInput() {
      return this._includeCookies
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }
  }
  export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forward CloudfrontDistribution#forward}
    */
    readonly forward: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#whitelisted_names CloudfrontDistribution#whitelisted_names}
    */
    readonly whitelistedNames?: string[];
  }

  function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      forward: cdktf.stringToTerraform(struct!.forward),
      whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.whitelistedNames),
    }
  }

  export class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // forward - computed: false, optional: false, required: true
    private _forward?: string; 
    public get forward() {
      return this.getStringAttribute('forward');
    }
    public set forward(value: string) {
      this._forward = value;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardInput() {
      return this._forward
    }

    // whitelisted_names - computed: false, optional: true, required: false
    private _whitelistedNames?: string[] | undefined; 
    public get whitelistedNames() {
      return this.getListAttribute('whitelisted_names');
    }
    public set whitelistedNames(value: string[] | undefined) {
      this._whitelistedNames = value;
    }
    public resetWhitelistedNames() {
      this._whitelistedNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get whitelistedNamesInput() {
      return this._whitelistedNames
    }
  }
  export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#headers CloudfrontDistribution#headers}
    */
    readonly headers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string CloudfrontDistribution#query_string}
    */
    readonly queryString: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
    */
    readonly queryStringCacheKeys?: string[];
    /**
    * cookies block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cookies CloudfrontDistribution#cookies}
    */
    readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
  }

  function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValues): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headers),
      query_string: cdktf.booleanToTerraform(struct!.queryString),
      query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.queryStringCacheKeys),
      cookies: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct!.cookies),
    }
  }

  export class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // headers - computed: true, optional: true, required: false
    private _headers?: string[] | undefined; 
    public get headers() {
      return this.getListAttribute('headers');
    }
    public set headers(value: string[] | undefined) {
      this._headers = value;
    }
    public resetHeaders() {
      this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
      return this._headers
    }

    // query_string - computed: false, optional: false, required: true
    private _queryString?: boolean | cdktf.IResolvable; 
    public get queryString() {
      return this.getBooleanAttribute('query_string') as any;
    }
    public set queryString(value: boolean | cdktf.IResolvable) {
      this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
      return this._queryString
    }

    // query_string_cache_keys - computed: true, optional: true, required: false
    private _queryStringCacheKeys?: string[] | undefined; 
    public get queryStringCacheKeys() {
      return this.getListAttribute('query_string_cache_keys');
    }
    public set queryStringCacheKeys(value: string[] | undefined) {
      this._queryStringCacheKeys = value;
    }
    public resetQueryStringCacheKeys() {
      this._queryStringCacheKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringCacheKeysInput() {
      return this._queryStringCacheKeys
    }

    // cookies - computed: false, optional: false, required: true
    private _cookies?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies; 
    private __cookiesOutput = new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(this as any, "cookies", true);
    public get cookies() {
      return this.__cookiesOutput;
    }
    public putCookies(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies) {
      this._cookies = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesInput() {
      return this._cookies
    }
  }
  export interface CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_arn CloudfrontDistribution#function_arn}
    */
    readonly functionArn: string;
  }

  function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      event_type: cdktf.stringToTerraform(struct!.eventType),
      function_arn: cdktf.stringToTerraform(struct!.functionArn),
    }
  }

  export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#include_body CloudfrontDistribution#include_body}
    */
    readonly includeBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_arn CloudfrontDistribution#lambda_arn}
    */
    readonly lambdaArn: string;
  }

  function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      event_type: cdktf.stringToTerraform(struct!.eventType),
      include_body: cdktf.booleanToTerraform(struct!.includeBody),
      lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    }
  }

  export interface CloudfrontDistributionOrderedCacheBehavior {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#allowed_methods CloudfrontDistribution#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cache_policy_id CloudfrontDistribution#cache_policy_id}
    */
    readonly cachePolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cached_methods CloudfrontDistribution#cached_methods}
    */
    readonly cachedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#compress CloudfrontDistribution#compress}
    */
    readonly compress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#default_ttl CloudfrontDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
    */
    readonly fieldLevelEncryptionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#max_ttl CloudfrontDistribution#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#min_ttl CloudfrontDistribution#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
    */
    readonly originRequestPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#path_pattern CloudfrontDistribution#path_pattern}
    */
    readonly pathPattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
    */
    readonly realtimeLogConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#smooth_streaming CloudfrontDistribution#smooth_streaming}
    */
    readonly smoothStreaming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#target_origin_id CloudfrontDistribution#target_origin_id}
    */
    readonly targetOriginId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
    */
    readonly trustedKeyGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#trusted_signers CloudfrontDistribution#trusted_signers}
    */
    readonly trustedSigners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
    */
    readonly viewerProtocolPolicy: string;
    /**
    * forwarded_values block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#forwarded_values CloudfrontDistribution#forwarded_values}
    */
    readonly forwardedValues?: CloudfrontDistributionOrderedCacheBehaviorForwardedValues;
    /**
    * function_association block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#function_association CloudfrontDistribution#function_association}
    */
    readonly functionAssociation?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[];
    /**
    * lambda_function_association block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#lambda_function_association CloudfrontDistribution#lambda_function_association}
    */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[];
  }

  function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
      cache_policy_id: cdktf.stringToTerraform(struct!.cachePolicyId),
      cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachedMethods),
      compress: cdktf.booleanToTerraform(struct!.compress),
      default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
      field_level_encryption_id: cdktf.stringToTerraform(struct!.fieldLevelEncryptionId),
      max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
      min_ttl: cdktf.numberToTerraform(struct!.minTtl),
      origin_request_policy_id: cdktf.stringToTerraform(struct!.originRequestPolicyId),
      path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
      realtime_log_config_arn: cdktf.stringToTerraform(struct!.realtimeLogConfigArn),
      smooth_streaming: cdktf.booleanToTerraform(struct!.smoothStreaming),
      target_origin_id: cdktf.stringToTerraform(struct!.targetOriginId),
      trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedKeyGroups),
      trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.trustedSigners),
      viewer_protocol_policy: cdktf.stringToTerraform(struct!.viewerProtocolPolicy),
      forwarded_values: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct!.forwardedValues),
      function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform)(struct!.functionAssociation),
      lambda_function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform)(struct!.lambdaFunctionAssociation),
    }
  }

  export interface CloudfrontDistributionOriginCustomHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#name CloudfrontDistribution#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#value CloudfrontDistribution#value}
    */
    readonly value: string;
  }

  function cloudfrontDistributionOriginCustomHeaderToTerraform(struct?: CloudfrontDistributionOriginCustomHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudfrontDistributionOriginCustomOriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#http_port CloudfrontDistribution#http_port}
    */
    readonly httpPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#https_port CloudfrontDistribution#https_port}
    */
    readonly httpsPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
    */
    readonly originKeepaliveTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}
    */
    readonly originProtocolPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
    */
    readonly originReadTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}
    */
    readonly originSslProtocols: string[];
  }

  function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct?: CloudfrontDistributionOriginCustomOriginConfigOutputReference | CloudfrontDistributionOriginCustomOriginConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      http_port: cdktf.numberToTerraform(struct!.httpPort),
      https_port: cdktf.numberToTerraform(struct!.httpsPort),
      origin_keepalive_timeout: cdktf.numberToTerraform(struct!.originKeepaliveTimeout),
      origin_protocol_policy: cdktf.stringToTerraform(struct!.originProtocolPolicy),
      origin_read_timeout: cdktf.numberToTerraform(struct!.originReadTimeout),
      origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.originSslProtocols),
    }
  }

  export class CloudfrontDistributionOriginCustomOriginConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // http_port - computed: false, optional: false, required: true
    private _httpPort?: number; 
    public get httpPort() {
      return this.getNumberAttribute('http_port');
    }
    public set httpPort(value: number) {
      this._httpPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPortInput() {
      return this._httpPort
    }

    // https_port - computed: false, optional: false, required: true
    private _httpsPort?: number; 
    public get httpsPort() {
      return this.getNumberAttribute('https_port');
    }
    public set httpsPort(value: number) {
      this._httpsPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpsPortInput() {
      return this._httpsPort
    }

    // origin_keepalive_timeout - computed: false, optional: true, required: false
    private _originKeepaliveTimeout?: number | undefined; 
    public get originKeepaliveTimeout() {
      return this.getNumberAttribute('origin_keepalive_timeout');
    }
    public set originKeepaliveTimeout(value: number | undefined) {
      this._originKeepaliveTimeout = value;
    }
    public resetOriginKeepaliveTimeout() {
      this._originKeepaliveTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originKeepaliveTimeoutInput() {
      return this._originKeepaliveTimeout
    }

    // origin_protocol_policy - computed: false, optional: false, required: true
    private _originProtocolPolicy?: string; 
    public get originProtocolPolicy() {
      return this.getStringAttribute('origin_protocol_policy');
    }
    public set originProtocolPolicy(value: string) {
      this._originProtocolPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originProtocolPolicyInput() {
      return this._originProtocolPolicy
    }

    // origin_read_timeout - computed: false, optional: true, required: false
    private _originReadTimeout?: number | undefined; 
    public get originReadTimeout() {
      return this.getNumberAttribute('origin_read_timeout');
    }
    public set originReadTimeout(value: number | undefined) {
      this._originReadTimeout = value;
    }
    public resetOriginReadTimeout() {
      this._originReadTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originReadTimeoutInput() {
      return this._originReadTimeout
    }

    // origin_ssl_protocols - computed: false, optional: false, required: true
    private _originSslProtocols?: string[]; 
    public get originSslProtocols() {
      return this.getListAttribute('origin_ssl_protocols');
    }
    public set originSslProtocols(value: string[]) {
      this._originSslProtocols = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originSslProtocolsInput() {
      return this._originSslProtocols
    }
  }
  export interface CloudfrontDistributionOriginOriginShield {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_shield_region CloudfrontDistribution#origin_shield_region}
    */
    readonly originShieldRegion: string;
  }

  function cloudfrontDistributionOriginOriginShieldToTerraform(struct?: CloudfrontDistributionOriginOriginShieldOutputReference | CloudfrontDistributionOriginOriginShield): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      origin_shield_region: cdktf.stringToTerraform(struct!.originShieldRegion),
    }
  }

  export class CloudfrontDistributionOriginOriginShieldOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // origin_shield_region - computed: false, optional: false, required: true
    private _originShieldRegion?: string; 
    public get originShieldRegion() {
      return this.getStringAttribute('origin_shield_region');
    }
    public set originShieldRegion(value: string) {
      this._originShieldRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originShieldRegionInput() {
      return this._originShieldRegion
    }
  }
  export interface CloudfrontDistributionOriginS3OriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_access_identity CloudfrontDistribution#origin_access_identity}
    */
    readonly originAccessIdentity: string;
  }

  function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct?: CloudfrontDistributionOriginS3OriginConfigOutputReference | CloudfrontDistributionOriginS3OriginConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      origin_access_identity: cdktf.stringToTerraform(struct!.originAccessIdentity),
    }
  }

  export class CloudfrontDistributionOriginS3OriginConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // origin_access_identity - computed: false, optional: false, required: true
    private _originAccessIdentity?: string; 
    public get originAccessIdentity() {
      return this.getStringAttribute('origin_access_identity');
    }
    public set originAccessIdentity(value: string) {
      this._originAccessIdentity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originAccessIdentityInput() {
      return this._originAccessIdentity
    }
  }
  export interface CloudfrontDistributionOrigin {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#connection_attempts CloudfrontDistribution#connection_attempts}
    */
    readonly connectionAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#connection_timeout CloudfrontDistribution#connection_timeout}
    */
    readonly connectionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#domain_name CloudfrontDistribution#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_path CloudfrontDistribution#origin_path}
    */
    readonly originPath?: string;
    /**
    * custom_header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_header CloudfrontDistribution#custom_header}
    */
    readonly customHeader?: CloudfrontDistributionOriginCustomHeader[];
    /**
    * custom_origin_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#custom_origin_config CloudfrontDistribution#custom_origin_config}
    */
    readonly customOriginConfig?: CloudfrontDistributionOriginCustomOriginConfig;
    /**
    * origin_shield block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_shield CloudfrontDistribution#origin_shield}
    */
    readonly originShield?: CloudfrontDistributionOriginOriginShield;
    /**
    * s3_origin_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#s3_origin_config CloudfrontDistribution#s3_origin_config}
    */
    readonly s3OriginConfig?: CloudfrontDistributionOriginS3OriginConfig;
  }

  function cloudfrontDistributionOriginToTerraform(struct?: CloudfrontDistributionOrigin): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_attempts: cdktf.numberToTerraform(struct!.connectionAttempts),
      connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
      domain_name: cdktf.stringToTerraform(struct!.domainName),
      origin_id: cdktf.stringToTerraform(struct!.originId),
      origin_path: cdktf.stringToTerraform(struct!.originPath),
      custom_header: cdktf.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform)(struct!.customHeader),
      custom_origin_config: cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct!.customOriginConfig),
      origin_shield: cloudfrontDistributionOriginOriginShieldToTerraform(struct!.originShield),
      s3_origin_config: cloudfrontDistributionOriginS3OriginConfigToTerraform(struct!.s3OriginConfig),
    }
  }

  export interface CloudfrontDistributionOriginGroupFailoverCriteria {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#status_codes CloudfrontDistribution#status_codes}
    */
    readonly statusCodes: number[];
  }

  function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference | CloudfrontDistributionOriginGroupFailoverCriteria): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      status_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.statusCodes),
    }
  }

  export class CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // status_codes - computed: false, optional: false, required: true
    private _statusCodes?: number[]; 
    public get statusCodes() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('status_codes') as any;
    }
    public set statusCodes(value: number[]) {
      this._statusCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodesInput() {
      return this._statusCodes
    }
  }
  export interface CloudfrontDistributionOriginGroupMember {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
  }

  function cloudfrontDistributionOriginGroupMemberToTerraform(struct?: CloudfrontDistributionOriginGroupMember): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      origin_id: cdktf.stringToTerraform(struct!.originId),
    }
  }

  export interface CloudfrontDistributionOriginGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
    /**
    * failover_criteria block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#failover_criteria CloudfrontDistribution#failover_criteria}
    */
    readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria;
    /**
    * member block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#member CloudfrontDistribution#member}
    */
    readonly member: CloudfrontDistributionOriginGroupMember[];
  }

  function cloudfrontDistributionOriginGroupToTerraform(struct?: CloudfrontDistributionOriginGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      origin_id: cdktf.stringToTerraform(struct!.originId),
      failover_criteria: cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct!.failoverCriteria),
      member: cdktf.listMapper(cloudfrontDistributionOriginGroupMemberToTerraform)(struct!.member),
    }
  }

  export interface CloudfrontDistributionRestrictionsGeoRestriction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#locations CloudfrontDistribution#locations}
    */
    readonly locations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#restriction_type CloudfrontDistribution#restriction_type}
    */
    readonly restrictionType: string;
  }

  function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference | CloudfrontDistributionRestrictionsGeoRestriction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.locations),
      restriction_type: cdktf.stringToTerraform(struct!.restrictionType),
    }
  }

  export class CloudfrontDistributionRestrictionsGeoRestrictionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // locations - computed: true, optional: true, required: false
    private _locations?: string[] | undefined; 
    public get locations() {
      return this.getListAttribute('locations');
    }
    public set locations(value: string[] | undefined) {
      this._locations = value;
    }
    public resetLocations() {
      this._locations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationsInput() {
      return this._locations
    }

    // restriction_type - computed: false, optional: false, required: true
    private _restrictionType?: string; 
    public get restrictionType() {
      return this.getStringAttribute('restriction_type');
    }
    public set restrictionType(value: string) {
      this._restrictionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionTypeInput() {
      return this._restrictionType
    }
  }
  export interface CloudfrontDistributionRestrictions {
    /**
    * geo_restriction block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#geo_restriction CloudfrontDistribution#geo_restriction}
    */
    readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction;
  }

  function cloudfrontDistributionRestrictionsToTerraform(struct?: CloudfrontDistributionRestrictionsOutputReference | CloudfrontDistributionRestrictions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      geo_restriction: cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct!.geoRestriction),
    }
  }

  export class CloudfrontDistributionRestrictionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // geo_restriction - computed: false, optional: false, required: true
    private _geoRestriction?: CloudfrontDistributionRestrictionsGeoRestriction; 
    private __geoRestrictionOutput = new CloudfrontDistributionRestrictionsGeoRestrictionOutputReference(this as any, "geo_restriction", true);
    public get geoRestriction() {
      return this.__geoRestrictionOutput;
    }
    public putGeoRestriction(value: CloudfrontDistributionRestrictionsGeoRestriction) {
      this._geoRestriction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get geoRestrictionInput() {
      return this._geoRestriction
    }
  }
  export interface CloudfrontDistributionViewerCertificate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}
    */
    readonly acmCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}
    */
    readonly cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#iam_certificate_id CloudfrontDistribution#iam_certificate_id}
    */
    readonly iamCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}
    */
    readonly minimumProtocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html#ssl_support_method CloudfrontDistribution#ssl_support_method}
    */
    readonly sslSupportMethod?: string;
  }

  function cloudfrontDistributionViewerCertificateToTerraform(struct?: CloudfrontDistributionViewerCertificateOutputReference | CloudfrontDistributionViewerCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      acm_certificate_arn: cdktf.stringToTerraform(struct!.acmCertificateArn),
      cloudfront_default_certificate: cdktf.booleanToTerraform(struct!.cloudfrontDefaultCertificate),
      iam_certificate_id: cdktf.stringToTerraform(struct!.iamCertificateId),
      minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
      ssl_support_method: cdktf.stringToTerraform(struct!.sslSupportMethod),
    }
  }

  export class CloudfrontDistributionViewerCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // acm_certificate_arn - computed: false, optional: true, required: false
    private _acmCertificateArn?: string | undefined; 
    public get acmCertificateArn() {
      return this.getStringAttribute('acm_certificate_arn');
    }
    public set acmCertificateArn(value: string | undefined) {
      this._acmCertificateArn = value;
    }
    public resetAcmCertificateArn() {
      this._acmCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmCertificateArnInput() {
      return this._acmCertificateArn
    }

    // cloudfront_default_certificate - computed: false, optional: true, required: false
    private _cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable | undefined; 
    public get cloudfrontDefaultCertificate() {
      return this.getBooleanAttribute('cloudfront_default_certificate') as any;
    }
    public set cloudfrontDefaultCertificate(value: boolean | cdktf.IResolvable | undefined) {
      this._cloudfrontDefaultCertificate = value;
    }
    public resetCloudfrontDefaultCertificate() {
      this._cloudfrontDefaultCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudfrontDefaultCertificateInput() {
      return this._cloudfrontDefaultCertificate
    }

    // iam_certificate_id - computed: false, optional: true, required: false
    private _iamCertificateId?: string | undefined; 
    public get iamCertificateId() {
      return this.getStringAttribute('iam_certificate_id');
    }
    public set iamCertificateId(value: string | undefined) {
      this._iamCertificateId = value;
    }
    public resetIamCertificateId() {
      this._iamCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamCertificateIdInput() {
      return this._iamCertificateId
    }

    // minimum_protocol_version - computed: false, optional: true, required: false
    private _minimumProtocolVersion?: string | undefined; 
    public get minimumProtocolVersion() {
      return this.getStringAttribute('minimum_protocol_version');
    }
    public set minimumProtocolVersion(value: string | undefined) {
      this._minimumProtocolVersion = value;
    }
    public resetMinimumProtocolVersion() {
      this._minimumProtocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumProtocolVersionInput() {
      return this._minimumProtocolVersion
    }

    // ssl_support_method - computed: false, optional: true, required: false
    private _sslSupportMethod?: string | undefined; 
    public get sslSupportMethod() {
      return this.getStringAttribute('ssl_support_method');
    }
    public set sslSupportMethod(value: string | undefined) {
      this._sslSupportMethod = value;
    }
    public resetSslSupportMethod() {
      this._sslSupportMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslSupportMethodInput() {
      return this._sslSupportMethod
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}
  */
  export class CloudfrontDistribution extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_distribution";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontDistributionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_distribution',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._aliases = config.aliases;
      this._comment = config.comment;
      this._defaultRootObject = config.defaultRootObject;
      this._enabled = config.enabled;
      this._httpVersion = config.httpVersion;
      this._isIpv6Enabled = config.isIpv6Enabled;
      this._priceClass = config.priceClass;
      this._retainOnDelete = config.retainOnDelete;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._waitForDeployment = config.waitForDeployment;
      this._webAclId = config.webAclId;
      this._customErrorResponse = config.customErrorResponse;
      this._defaultCacheBehavior = config.defaultCacheBehavior;
      this._loggingConfig = config.loggingConfig;
      this._orderedCacheBehavior = config.orderedCacheBehavior;
      this._origin = config.origin;
      this._originGroup = config.originGroup;
      this._restrictions = config.restrictions;
      this._viewerCertificate = config.viewerCertificate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aliases - computed: false, optional: true, required: false
    private _aliases?: string[] | undefined; 
    public get aliases() {
      return this.getListAttribute('aliases');
    }
    public set aliases(value: string[] | undefined) {
      this._aliases = value;
    }
    public resetAliases() {
      this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasesInput() {
      return this._aliases
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // caller_reference - computed: true, optional: false, required: false
    public get callerReference() {
      return this.getStringAttribute('caller_reference');
    }

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // default_root_object - computed: false, optional: true, required: false
    private _defaultRootObject?: string | undefined; 
    public get defaultRootObject() {
      return this.getStringAttribute('default_root_object');
    }
    public set defaultRootObject(value: string | undefined) {
      this._defaultRootObject = value;
    }
    public resetDefaultRootObject() {
      this._defaultRootObject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRootObjectInput() {
      return this._defaultRootObject
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // http_version - computed: false, optional: true, required: false
    private _httpVersion?: string | undefined; 
    public get httpVersion() {
      return this.getStringAttribute('http_version');
    }
    public set httpVersion(value: string | undefined) {
      this._httpVersion = value;
    }
    public resetHttpVersion() {
      this._httpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpVersionInput() {
      return this._httpVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // in_progress_validation_batches - computed: true, optional: false, required: false
    public get inProgressValidationBatches() {
      return this.getNumberAttribute('in_progress_validation_batches');
    }

    // is_ipv6_enabled - computed: false, optional: true, required: false
    private _isIpv6Enabled?: boolean | cdktf.IResolvable | undefined; 
    public get isIpv6Enabled() {
      return this.getBooleanAttribute('is_ipv6_enabled') as any;
    }
    public set isIpv6Enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._isIpv6Enabled = value;
    }
    public resetIsIpv6Enabled() {
      this._isIpv6Enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isIpv6EnabledInput() {
      return this._isIpv6Enabled
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
      return this.getStringAttribute('last_modified_time');
    }

    // price_class - computed: false, optional: true, required: false
    private _priceClass?: string | undefined; 
    public get priceClass() {
      return this.getStringAttribute('price_class');
    }
    public set priceClass(value: string | undefined) {
      this._priceClass = value;
    }
    public resetPriceClass() {
      this._priceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priceClassInput() {
      return this._priceClass
    }

    // retain_on_delete - computed: false, optional: true, required: false
    private _retainOnDelete?: boolean | cdktf.IResolvable | undefined; 
    public get retainOnDelete() {
      return this.getBooleanAttribute('retain_on_delete') as any;
    }
    public set retainOnDelete(value: boolean | cdktf.IResolvable | undefined) {
      this._retainOnDelete = value;
    }
    public resetRetainOnDelete() {
      this._retainOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainOnDeleteInput() {
      return this._retainOnDelete
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // trusted_key_groups - computed: true, optional: false, required: false
    public trustedKeyGroups(index: string) {
      return new CloudfrontDistributionTrustedKeyGroups(this, 'trusted_key_groups', index);
    }

    // trusted_signers - computed: true, optional: false, required: false
    public trustedSigners(index: string) {
      return new CloudfrontDistributionTrustedSigners(this, 'trusted_signers', index);
    }

    // wait_for_deployment - computed: false, optional: true, required: false
    private _waitForDeployment?: boolean | cdktf.IResolvable | undefined; 
    public get waitForDeployment() {
      return this.getBooleanAttribute('wait_for_deployment') as any;
    }
    public set waitForDeployment(value: boolean | cdktf.IResolvable | undefined) {
      this._waitForDeployment = value;
    }
    public resetWaitForDeployment() {
      this._waitForDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForDeploymentInput() {
      return this._waitForDeployment
    }

    // web_acl_id - computed: false, optional: true, required: false
    private _webAclId?: string | undefined; 
    public get webAclId() {
      return this.getStringAttribute('web_acl_id');
    }
    public set webAclId(value: string | undefined) {
      this._webAclId = value;
    }
    public resetWebAclId() {
      this._webAclId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAclIdInput() {
      return this._webAclId
    }

    // custom_error_response - computed: false, optional: true, required: false
    private _customErrorResponse?: CloudfrontDistributionCustomErrorResponse[] | undefined; 
    public get customErrorResponse() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('custom_error_response') as any;
    }
    public set customErrorResponse(value: CloudfrontDistributionCustomErrorResponse[] | undefined) {
      this._customErrorResponse = value;
    }
    public resetCustomErrorResponse() {
      this._customErrorResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customErrorResponseInput() {
      return this._customErrorResponse
    }

    // default_cache_behavior - computed: false, optional: false, required: true
    private _defaultCacheBehavior?: CloudfrontDistributionDefaultCacheBehavior; 
    private __defaultCacheBehaviorOutput = new CloudfrontDistributionDefaultCacheBehaviorOutputReference(this as any, "default_cache_behavior", true);
    public get defaultCacheBehavior() {
      return this.__defaultCacheBehaviorOutput;
    }
    public putDefaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior) {
      this._defaultCacheBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCacheBehaviorInput() {
      return this._defaultCacheBehavior
    }

    // logging_config - computed: false, optional: true, required: false
    private _loggingConfig?: CloudfrontDistributionLoggingConfig | undefined; 
    private __loggingConfigOutput = new CloudfrontDistributionLoggingConfigOutputReference(this as any, "logging_config", true);
    public get loggingConfig() {
      return this.__loggingConfigOutput;
    }
    public putLoggingConfig(value: CloudfrontDistributionLoggingConfig | undefined) {
      this._loggingConfig = value;
    }
    public resetLoggingConfig() {
      this._loggingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
      return this._loggingConfig
    }

    // ordered_cache_behavior - computed: false, optional: true, required: false
    private _orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[] | undefined; 
    public get orderedCacheBehavior() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ordered_cache_behavior') as any;
    }
    public set orderedCacheBehavior(value: CloudfrontDistributionOrderedCacheBehavior[] | undefined) {
      this._orderedCacheBehavior = value;
    }
    public resetOrderedCacheBehavior() {
      this._orderedCacheBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderedCacheBehaviorInput() {
      return this._orderedCacheBehavior
    }

    // origin - computed: false, optional: false, required: true
    private _origin?: CloudfrontDistributionOrigin[]; 
    public get origin() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('origin') as any;
    }
    public set origin(value: CloudfrontDistributionOrigin[]) {
      this._origin = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originInput() {
      return this._origin
    }

    // origin_group - computed: false, optional: true, required: false
    private _originGroup?: CloudfrontDistributionOriginGroup[] | undefined; 
    public get originGroup() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('origin_group') as any;
    }
    public set originGroup(value: CloudfrontDistributionOriginGroup[] | undefined) {
      this._originGroup = value;
    }
    public resetOriginGroup() {
      this._originGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originGroupInput() {
      return this._originGroup
    }

    // restrictions - computed: false, optional: false, required: true
    private _restrictions?: CloudfrontDistributionRestrictions; 
    private __restrictionsOutput = new CloudfrontDistributionRestrictionsOutputReference(this as any, "restrictions", true);
    public get restrictions() {
      return this.__restrictionsOutput;
    }
    public putRestrictions(value: CloudfrontDistributionRestrictions) {
      this._restrictions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionsInput() {
      return this._restrictions
    }

    // viewer_certificate - computed: false, optional: false, required: true
    private _viewerCertificate?: CloudfrontDistributionViewerCertificate; 
    private __viewerCertificateOutput = new CloudfrontDistributionViewerCertificateOutputReference(this as any, "viewer_certificate", true);
    public get viewerCertificate() {
      return this.__viewerCertificateOutput;
    }
    public putViewerCertificate(value: CloudfrontDistributionViewerCertificate) {
      this._viewerCertificate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get viewerCertificateInput() {
      return this._viewerCertificate
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
        comment: cdktf.stringToTerraform(this._comment),
        default_root_object: cdktf.stringToTerraform(this._defaultRootObject),
        enabled: cdktf.booleanToTerraform(this._enabled),
        http_version: cdktf.stringToTerraform(this._httpVersion),
        is_ipv6_enabled: cdktf.booleanToTerraform(this._isIpv6Enabled),
        price_class: cdktf.stringToTerraform(this._priceClass),
        retain_on_delete: cdktf.booleanToTerraform(this._retainOnDelete),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
        web_acl_id: cdktf.stringToTerraform(this._webAclId),
        custom_error_response: cdktf.listMapper(cloudfrontDistributionCustomErrorResponseToTerraform)(this._customErrorResponse),
        default_cache_behavior: cloudfrontDistributionDefaultCacheBehaviorToTerraform(this._defaultCacheBehavior),
        logging_config: cloudfrontDistributionLoggingConfigToTerraform(this._loggingConfig),
        ordered_cache_behavior: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorToTerraform)(this._orderedCacheBehavior),
        origin: cdktf.listMapper(cloudfrontDistributionOriginToTerraform)(this._origin),
        origin_group: cdktf.listMapper(cloudfrontDistributionOriginGroupToTerraform)(this._originGroup),
        restrictions: cloudfrontDistributionRestrictionsToTerraform(this._restrictions),
        viewer_certificate: cloudfrontDistributionViewerCertificateToTerraform(this._viewerCertificate),
      };
    }
  }
  export interface CloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#code CloudfrontFunction#code}
    */
    readonly code: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#comment CloudfrontFunction#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#name CloudfrontFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#publish CloudfrontFunction#publish}
    */
    readonly publish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#runtime CloudfrontFunction#runtime}
    */
    readonly runtime: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html aws_cloudfront_function}
  */
  export class CloudfrontFunction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_function";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html aws_cloudfront_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFunctionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontFunctionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_function',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._code = config.code;
      this._comment = config.comment;
      this._name = config.name;
      this._publish = config.publish;
      this._runtime = config.runtime;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // code - computed: false, optional: false, required: true
    private _code?: string; 
    public get code() {
      return this.getStringAttribute('code');
    }
    public set code(value: string) {
      this._code = value;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
      return this._code
    }

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // publish - computed: false, optional: true, required: false
    private _publish?: boolean | cdktf.IResolvable | undefined; 
    public get publish() {
      return this.getBooleanAttribute('publish') as any;
    }
    public set publish(value: boolean | cdktf.IResolvable | undefined) {
      this._publish = value;
    }
    public resetPublish() {
      this._publish = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishInput() {
      return this._publish
    }

    // runtime - computed: false, optional: false, required: true
    private _runtime?: string; 
    public get runtime() {
      return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
      this._runtime = value;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
      return this._runtime
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        code: cdktf.stringToTerraform(this._code),
        comment: cdktf.stringToTerraform(this._comment),
        name: cdktf.stringToTerraform(this._name),
        publish: cdktf.booleanToTerraform(this._publish),
        runtime: cdktf.stringToTerraform(this._runtime),
      };
    }
  }
  export interface CloudfrontKeyGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html#comment CloudfrontKeyGroup#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html#items CloudfrontKeyGroup#items}
    */
    readonly items: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html#name CloudfrontKeyGroup#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html aws_cloudfront_key_group}
  */
  export class CloudfrontKeyGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_key_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_key_group.html aws_cloudfront_key_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontKeyGroupConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontKeyGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_key_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._comment = config.comment;
      this._items = config.items;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // items - computed: false, optional: false, required: true
    private _items?: string[]; 
    public get items() {
      return this.getListAttribute('items');
    }
    public set items(value: string[]) {
      this._items = value;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
      return this._items
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
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        comment: cdktf.stringToTerraform(this._comment),
        items: cdktf.listMapper(cdktf.stringToTerraform)(this._items),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface CloudfrontMonitoringSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#distribution_id CloudfrontMonitoringSubscription#distribution_id}
    */
    readonly distributionId: string;
    /**
    * monitoring_subscription block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}
    */
    readonly monitoringSubscription: CloudfrontMonitoringSubscriptionMonitoringSubscription;
  }
  export interface CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}
    */
    readonly realtimeMetricsSubscriptionStatus: string;
  }

  function cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      realtime_metrics_subscription_status: cdktf.stringToTerraform(struct!.realtimeMetricsSubscriptionStatus),
    }
  }

  export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // realtime_metrics_subscription_status - computed: false, optional: false, required: true
    private _realtimeMetricsSubscriptionStatus?: string; 
    public get realtimeMetricsSubscriptionStatus() {
      return this.getStringAttribute('realtime_metrics_subscription_status');
    }
    public set realtimeMetricsSubscriptionStatus(value: string) {
      this._realtimeMetricsSubscriptionStatus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get realtimeMetricsSubscriptionStatusInput() {
      return this._realtimeMetricsSubscriptionStatus
    }
  }
  export interface CloudfrontMonitoringSubscriptionMonitoringSubscription {
    /**
    * realtime_metrics_subscription_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}
    */
    readonly realtimeMetricsSubscriptionConfig: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
  }

  function cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(struct?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference | CloudfrontMonitoringSubscriptionMonitoringSubscription): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      realtime_metrics_subscription_config: cloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigToTerraform(struct!.realtimeMetricsSubscriptionConfig),
    }
  }

  export class CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // realtime_metrics_subscription_config - computed: false, optional: false, required: true
    private _realtimeMetricsSubscriptionConfig?: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig; 
    private __realtimeMetricsSubscriptionConfigOutput = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(this as any, "realtime_metrics_subscription_config", true);
    public get realtimeMetricsSubscriptionConfig() {
      return this.__realtimeMetricsSubscriptionConfigOutput;
    }
    public putRealtimeMetricsSubscriptionConfig(value: CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig) {
      this._realtimeMetricsSubscriptionConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get realtimeMetricsSubscriptionConfigInput() {
      return this._realtimeMetricsSubscriptionConfig
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription}
  */
  export class CloudfrontMonitoringSubscription extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_monitoring_subscription";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_monitoring_subscription.html aws_cloudfront_monitoring_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontMonitoringSubscriptionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontMonitoringSubscriptionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_monitoring_subscription',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._distributionId = config.distributionId;
      this._monitoringSubscription = config.monitoringSubscription;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // distribution_id - computed: false, optional: false, required: true
    private _distributionId?: string; 
    public get distributionId() {
      return this.getStringAttribute('distribution_id');
    }
    public set distributionId(value: string) {
      this._distributionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionIdInput() {
      return this._distributionId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // monitoring_subscription - computed: false, optional: false, required: true
    private _monitoringSubscription?: CloudfrontMonitoringSubscriptionMonitoringSubscription; 
    private __monitoringSubscriptionOutput = new CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(this as any, "monitoring_subscription", true);
    public get monitoringSubscription() {
      return this.__monitoringSubscriptionOutput;
    }
    public putMonitoringSubscription(value: CloudfrontMonitoringSubscriptionMonitoringSubscription) {
      this._monitoringSubscription = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringSubscriptionInput() {
      return this._monitoringSubscription
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        distribution_id: cdktf.stringToTerraform(this._distributionId),
        monitoring_subscription: cloudfrontMonitoringSubscriptionMonitoringSubscriptionToTerraform(this._monitoringSubscription),
      };
    }
  }
  export interface CloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html#comment CloudfrontOriginAccessIdentity#comment}
    */
    readonly comment?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity}
  */
  export class CloudfrontOriginAccessIdentity extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_origin_access_identity";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginAccessIdentityConfig = {}
    */
    public constructor(scope: Construct, id: string, config: CloudfrontOriginAccessIdentityConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_origin_access_identity',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._comment = config.comment;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // caller_reference - computed: true, optional: false, required: false
    public get callerReference() {
      return this.getStringAttribute('caller_reference');
    }

    // cloudfront_access_identity_path - computed: true, optional: false, required: false
    public get cloudfrontAccessIdentityPath() {
      return this.getStringAttribute('cloudfront_access_identity_path');
    }

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // iam_arn - computed: true, optional: false, required: false
    public get iamArn() {
      return this.getStringAttribute('iam_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // s3_canonical_user_id - computed: true, optional: false, required: false
    public get s3CanonicalUserId() {
      return this.getStringAttribute('s3_canonical_user_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        comment: cdktf.stringToTerraform(this._comment),
      };
    }
  }
  export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#comment CloudfrontOriginRequestPolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#etag CloudfrontOriginRequestPolicy#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#name CloudfrontOriginRequestPolicy#name}
    */
    readonly name: string;
    /**
    * cookies_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
    */
    readonly cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig;
    /**
    * headers_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers_config CloudfrontOriginRequestPolicy#headers_config}
    */
    readonly headersConfig: CloudfrontOriginRequestPolicyHeadersConfig;
    /**
    * query_strings_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
    */
    readonly queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig;
  }
  export interface CloudfrontOriginRequestPolicyCookiesConfigCookies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
  }

  function cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference | CloudfrontOriginRequestPolicyCookiesConfigCookies): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    }
  }

  export class CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // items - computed: false, optional: true, required: false
    private _items?: string[] | undefined; 
    public get items() {
      return this.getListAttribute('items');
    }
    public set items(value: string[] | undefined) {
      this._items = value;
    }
    public resetItems() {
      this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
      return this._items
    }
  }
  export interface CloudfrontOriginRequestPolicyCookiesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}
    */
    readonly cookieBehavior: string;
    /**
    * cookies block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies CloudfrontOriginRequestPolicy#cookies}
    */
    readonly cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies;
  }

  function cloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigOutputReference | CloudfrontOriginRequestPolicyCookiesConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
      cookies: cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct!.cookies),
    }
  }

  export class CloudfrontOriginRequestPolicyCookiesConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._cookieBehavior
    }

    // cookies - computed: false, optional: true, required: false
    private _cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined; 
    private __cookiesOutput = new CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(this as any, "cookies", true);
    public get cookies() {
      return this.__cookiesOutput;
    }
    public putCookies(value: CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined) {
      this._cookies = value;
    }
    public resetCookies() {
      this._cookies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesInput() {
      return this._cookies
    }
  }
  export interface CloudfrontOriginRequestPolicyHeadersConfigHeaders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
  }

  function cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference | CloudfrontOriginRequestPolicyHeadersConfigHeaders): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    }
  }

  export class CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // items - computed: false, optional: true, required: false
    private _items?: string[] | undefined; 
    public get items() {
      return this.getListAttribute('items');
    }
    public set items(value: string[] | undefined) {
      this._items = value;
    }
    public resetItems() {
      this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
      return this._items
    }
  }
  export interface CloudfrontOriginRequestPolicyHeadersConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#header_behavior CloudfrontOriginRequestPolicy#header_behavior}
    */
    readonly headerBehavior?: string;
    /**
    * headers block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers CloudfrontOriginRequestPolicy#headers}
    */
    readonly headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders;
  }

  function cloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigOutputReference | CloudfrontOriginRequestPolicyHeadersConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
      headers: cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct!.headers),
    }
  }

  export class CloudfrontOriginRequestPolicyHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // header_behavior - computed: false, optional: true, required: false
    private _headerBehavior?: string | undefined; 
    public get headerBehavior() {
      return this.getStringAttribute('header_behavior');
    }
    public set headerBehavior(value: string | undefined) {
      this._headerBehavior = value;
    }
    public resetHeaderBehavior() {
      this._headerBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerBehaviorInput() {
      return this._headerBehavior
    }

    // headers - computed: false, optional: true, required: false
    private _headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined; 
    private __headersOutput = new CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(this as any, "headers", true);
    public get headers() {
      return this.__headersOutput;
    }
    public putHeaders(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined) {
      this._headers = value;
    }
    public resetHeaders() {
      this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
      return this._headers
    }
  }
  export interface CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
  }

  function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
    }
  }

  export class CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // items - computed: false, optional: true, required: false
    private _items?: string[] | undefined; 
    public get items() {
      return this.getListAttribute('items');
    }
    public set items(value: string[] | undefined) {
      this._items = value;
    }
    public resetItems() {
      this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
      return this._items
    }
  }
  export interface CloudfrontOriginRequestPolicyQueryStringsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}
    */
    readonly queryStringBehavior: string;
    /**
    * query_strings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings CloudfrontOriginRequestPolicy#query_strings}
    */
    readonly queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
  }

  function cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
      query_strings: cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct!.queryStrings),
    }
  }

  export class CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._queryStringBehavior
    }

    // query_strings - computed: false, optional: true, required: false
    private _queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined; 
    private __queryStringsOutput = new CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(this as any, "query_strings", true);
    public get queryStrings() {
      return this.__queryStringsOutput;
    }
    public putQueryStrings(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined) {
      this._queryStrings = value;
    }
    public resetQueryStrings() {
      this._queryStrings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringsInput() {
      return this._queryStrings
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}
  */
  export class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_origin_request_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginRequestPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_origin_request_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._comment = config.comment;
      this._etag = config.etag;
      this._name = config.name;
      this._cookiesConfig = config.cookiesConfig;
      this._headersConfig = config.headersConfig;
      this._queryStringsConfig = config.queryStringsConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // etag - computed: true, optional: true, required: false
    private _etag?: string | undefined; 
    public get etag() {
      return this.getStringAttribute('etag');
    }
    public set etag(value: string | undefined) {
      this._etag = value;
    }
    public resetEtag() {
      this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get etagInput() {
      return this._etag
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // cookies_config - computed: false, optional: false, required: true
    private _cookiesConfig?: CloudfrontOriginRequestPolicyCookiesConfig; 
    private __cookiesConfigOutput = new CloudfrontOriginRequestPolicyCookiesConfigOutputReference(this as any, "cookies_config", true);
    public get cookiesConfig() {
      return this.__cookiesConfigOutput;
    }
    public putCookiesConfig(value: CloudfrontOriginRequestPolicyCookiesConfig) {
      this._cookiesConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesConfigInput() {
      return this._cookiesConfig
    }

    // headers_config - computed: false, optional: false, required: true
    private _headersConfig?: CloudfrontOriginRequestPolicyHeadersConfig; 
    private __headersConfigOutput = new CloudfrontOriginRequestPolicyHeadersConfigOutputReference(this as any, "headers_config", true);
    public get headersConfig() {
      return this.__headersConfigOutput;
    }
    public putHeadersConfig(value: CloudfrontOriginRequestPolicyHeadersConfig) {
      this._headersConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get headersConfigInput() {
      return this._headersConfig
    }

    // query_strings_config - computed: false, optional: false, required: true
    private _queryStringsConfig?: CloudfrontOriginRequestPolicyQueryStringsConfig; 
    private __queryStringsConfigOutput = new CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(this as any, "query_strings_config", true);
    public get queryStringsConfig() {
      return this.__queryStringsConfigOutput;
    }
    public putQueryStringsConfig(value: CloudfrontOriginRequestPolicyQueryStringsConfig) {
      this._queryStringsConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringsConfigInput() {
      return this._queryStringsConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        comment: cdktf.stringToTerraform(this._comment),
        etag: cdktf.stringToTerraform(this._etag),
        name: cdktf.stringToTerraform(this._name),
        cookies_config: cloudfrontOriginRequestPolicyCookiesConfigToTerraform(this._cookiesConfig),
        headers_config: cloudfrontOriginRequestPolicyHeadersConfigToTerraform(this._headersConfig),
        query_strings_config: cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(this._queryStringsConfig),
      };
    }
  }
  export interface CloudfrontPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#comment CloudfrontPublicKey#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#encoded_key CloudfrontPublicKey#encoded_key}
    */
    readonly encodedKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#name CloudfrontPublicKey#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#name_prefix CloudfrontPublicKey#name_prefix}
    */
    readonly namePrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html aws_cloudfront_public_key}
  */
  export class CloudfrontPublicKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_public_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html aws_cloudfront_public_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontPublicKeyConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontPublicKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_public_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._comment = config.comment;
      this._encodedKey = config.encodedKey;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // caller_reference - computed: true, optional: false, required: false
    public get callerReference() {
      return this.getStringAttribute('caller_reference');
    }

    // comment - computed: false, optional: true, required: false
    private _comment?: string | undefined; 
    public get comment() {
      return this.getStringAttribute('comment');
    }
    public set comment(value: string | undefined) {
      this._comment = value;
    }
    public resetComment() {
      this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
      return this._comment
    }

    // encoded_key - computed: false, optional: false, required: true
    private _encodedKey?: string; 
    public get encodedKey() {
      return this.getStringAttribute('encoded_key');
    }
    public set encodedKey(value: string) {
      this._encodedKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encodedKeyInput() {
      return this._encodedKey
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        comment: cdktf.stringToTerraform(this._comment),
        encoded_key: cdktf.stringToTerraform(this._encodedKey),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
      };
    }
  }
  export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#fields CloudfrontRealtimeLogConfig#fields}
    */
    readonly fields: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#name CloudfrontRealtimeLogConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}
    */
    readonly samplingRate: number;
    /**
    * endpoint block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#endpoint CloudfrontRealtimeLogConfig#endpoint}
    */
    readonly endpoint: CloudfrontRealtimeLogConfigEndpoint;
  }
  export interface CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#role_arn CloudfrontRealtimeLogConfig#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_arn CloudfrontRealtimeLogConfig#stream_arn}
    */
    readonly streamArn: string;
  }

  function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference | CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      stream_arn: cdktf.stringToTerraform(struct!.streamArn),
    }
  }

  export class CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._roleArn
    }

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn?: string; 
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
      this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
    }
  }
  export interface CloudfrontRealtimeLogConfigEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_type CloudfrontRealtimeLogConfig#stream_type}
    */
    readonly streamType: string;
    /**
    * kinesis_stream_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}
    */
    readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
  }

  function cloudfrontRealtimeLogConfigEndpointToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointOutputReference | CloudfrontRealtimeLogConfigEndpoint): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      stream_type: cdktf.stringToTerraform(struct!.streamType),
      kinesis_stream_config: cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct!.kinesisStreamConfig),
    }
  }

  export class CloudfrontRealtimeLogConfigEndpointOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // stream_type - computed: false, optional: false, required: true
    private _streamType?: string; 
    public get streamType() {
      return this.getStringAttribute('stream_type');
    }
    public set streamType(value: string) {
      this._streamType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamTypeInput() {
      return this._streamType
    }

    // kinesis_stream_config - computed: false, optional: false, required: true
    private _kinesisStreamConfig?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig; 
    private __kinesisStreamConfigOutput = new CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(this as any, "kinesis_stream_config", true);
    public get kinesisStreamConfig() {
      return this.__kinesisStreamConfigOutput;
    }
    public putKinesisStreamConfig(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig) {
      this._kinesisStreamConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamConfigInput() {
      return this._kinesisStreamConfig
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config}
  */
  export class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_realtime_log_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontRealtimeLogConfigConfig
    */
    public constructor(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_realtime_log_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._fields = config.fields;
      this._name = config.name;
      this._samplingRate = config.samplingRate;
      this._endpoint = config.endpoint;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // fields - computed: false, optional: false, required: true
    private _fields?: string[]; 
    public get fields() {
      return this.getListAttribute('fields');
    }
    public set fields(value: string[]) {
      this._fields = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldsInput() {
      return this._fields
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
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
      return this._samplingRate
    }

    // endpoint - computed: false, optional: false, required: true
    private _endpoint?: CloudfrontRealtimeLogConfigEndpoint; 
    private __endpointOutput = new CloudfrontRealtimeLogConfigEndpointOutputReference(this as any, "endpoint", true);
    public get endpoint() {
      return this.__endpointOutput;
    }
    public putEndpoint(value: CloudfrontRealtimeLogConfigEndpoint) {
      this._endpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
      return this._endpoint
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        fields: cdktf.listMapper(cdktf.stringToTerraform)(this._fields),
        name: cdktf.stringToTerraform(this._name),
        sampling_rate: cdktf.numberToTerraform(this._samplingRate),
        endpoint: cloudfrontRealtimeLogConfigEndpointToTerraform(this._endpoint),
      };
    }
  }
  export interface DataAwsCloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html#id DataAwsCloudfrontCachePolicy#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html#name DataAwsCloudfrontCachePolicy#name}
    */
    readonly name?: string;
  }
  export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies extends cdktf.ComplexComputedList {

    // items - computed: true, optional: false, required: false
    public get items() {
      return this.getListAttribute('items');
    }
  }
  export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig extends cdktf.ComplexComputedList {

    // cookie_behavior - computed: true, optional: false, required: false
    public get cookieBehavior() {
      return this.getStringAttribute('cookie_behavior');
    }

    // cookies - computed: true, optional: false, required: false
    public get cookies() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('cookies') as any;
    }
  }
  export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders extends cdktf.ComplexComputedList {

    // items - computed: true, optional: false, required: false
    public get items() {
      return this.getListAttribute('items');
    }
  }
  export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig extends cdktf.ComplexComputedList {

    // header_behavior - computed: true, optional: false, required: false
    public get headerBehavior() {
      return this.getStringAttribute('header_behavior');
    }

    // headers - computed: true, optional: false, required: false
    public get headers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('headers') as any;
    }
  }
  export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {

    // items - computed: true, optional: false, required: false
    public get items() {
      return this.getListAttribute('items');
    }
  }
  export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig extends cdktf.ComplexComputedList {

    // query_string_behavior - computed: true, optional: false, required: false
    public get queryStringBehavior() {
      return this.getStringAttribute('query_string_behavior');
    }

    // query_strings - computed: true, optional: false, required: false
    public get queryStrings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('query_strings') as any;
    }
  }
  export class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin extends cdktf.ComplexComputedList {

    // cookies_config - computed: true, optional: false, required: false
    public get cookiesConfig() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('cookies_config') as any;
    }

    // enable_accept_encoding_brotli - computed: true, optional: false, required: false
    public get enableAcceptEncodingBrotli() {
      return this.getBooleanAttribute('enable_accept_encoding_brotli') as any;
    }

    // enable_accept_encoding_gzip - computed: true, optional: false, required: false
    public get enableAcceptEncodingGzip() {
      return this.getBooleanAttribute('enable_accept_encoding_gzip') as any;
    }

    // headers_config - computed: true, optional: false, required: false
    public get headersConfig() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('headers_config') as any;
    }

    // query_strings_config - computed: true, optional: false, required: false
    public get queryStringsConfig() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('query_strings_config') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
  */
  export class DataAwsCloudfrontCachePolicy extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_cache_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontCachePolicyConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudfrontCachePolicyConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_cache_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
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

    // default_ttl - computed: true, optional: false, required: false
    public get defaultTtl() {
      return this.getNumberAttribute('default_ttl');
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // id - computed: false, optional: true, required: false
    private _id?: string | undefined; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string | undefined) {
      this._id = value;
    }
    public resetId() {
      this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // max_ttl - computed: true, optional: false, required: false
    public get maxTtl() {
      return this.getNumberAttribute('max_ttl');
    }

    // min_ttl - computed: true, optional: false, required: false
    public get minTtl() {
      return this.getNumberAttribute('min_ttl');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // parameters_in_cache_key_and_forwarded_to_origin - computed: true, optional: false, required: false
    public parametersInCacheKeyAndForwardedToOrigin(index: string) {
      return new DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin(this, 'parameters_in_cache_key_and_forwarded_to_origin', index);
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
  export interface DataAwsCloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html#id DataAwsCloudfrontDistribution#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html#tags DataAwsCloudfrontDistribution#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution}
  */
  export class DataAwsCloudfrontDistribution extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_distribution";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_distribution.html aws_cloudfront_distribution} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontDistributionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudfrontDistributionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_distribution',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._id = config.id;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // in_progress_validation_batches - computed: true, optional: false, required: false
    public get inProgressValidationBatches() {
      return this.getNumberAttribute('in_progress_validation_batches');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
      return this.getStringAttribute('last_modified_time');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        id: cdktf.stringToTerraform(this._id),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsCloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html#name DataAwsCloudfrontFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html#stage DataAwsCloudfrontFunction#stage}
    */
    readonly stage: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html aws_cloudfront_function}
  */
  export class DataAwsCloudfrontFunction extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_function";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html aws_cloudfront_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontFunctionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudfrontFunctionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_function',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._stage = config.stage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // code - computed: true, optional: false, required: false
    public get code() {
      return this.getStringAttribute('code');
    }

    // comment - computed: true, optional: false, required: false
    public get comment() {
      return this.getStringAttribute('comment');
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
      return this.getStringAttribute('last_modified_time');
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
      return this._name
    }

    // runtime - computed: true, optional: false, required: false
    public get runtime() {
      return this.getStringAttribute('runtime');
    }

    // stage - computed: false, optional: false, required: true
    private _stage?: string; 
    public get stage() {
      return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
      this._stage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
      return this._stage
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        stage: cdktf.stringToTerraform(this._stage),
      };
    }
  }
  export interface DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html#region DataAwsCloudfrontLogDeliveryCanonicalUserId#region}
    */
    readonly region?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html aws_cloudfront_log_delivery_canonical_user_id}
  */
  export class DataAwsCloudfrontLogDeliveryCanonicalUserId extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_log_delivery_canonical_user_id";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html aws_cloudfront_log_delivery_canonical_user_id} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_log_delivery_canonical_user_id',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._region = config.region;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // region - computed: false, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        region: cdktf.stringToTerraform(this._region),
      };
    }
  }
  export interface DataAwsCloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html#id DataAwsCloudfrontOriginRequestPolicy#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html#name DataAwsCloudfrontOriginRequestPolicy#name}
    */
    readonly name?: string;
  }
  export class DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies extends cdktf.ComplexComputedList {

    // items - computed: true, optional: false, required: false
    public get items() {
      return this.getListAttribute('items');
    }
  }
  export class DataAwsCloudfrontOriginRequestPolicyCookiesConfig extends cdktf.ComplexComputedList {

    // cookie_behavior - computed: true, optional: false, required: false
    public get cookieBehavior() {
      return this.getStringAttribute('cookie_behavior');
    }

    // cookies - computed: true, optional: false, required: false
    public get cookies() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('cookies') as any;
    }
  }
  export class DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders extends cdktf.ComplexComputedList {

    // items - computed: true, optional: false, required: false
    public get items() {
      return this.getListAttribute('items');
    }
  }
  export class DataAwsCloudfrontOriginRequestPolicyHeadersConfig extends cdktf.ComplexComputedList {

    // header_behavior - computed: true, optional: false, required: false
    public get headerBehavior() {
      return this.getStringAttribute('header_behavior');
    }

    // headers - computed: true, optional: false, required: false
    public get headers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('headers') as any;
    }
  }
  export class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {

    // items - computed: true, optional: false, required: false
    public get items() {
      return this.getListAttribute('items');
    }
  }
  export class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig extends cdktf.ComplexComputedList {

    // query_string_behavior - computed: true, optional: false, required: false
    public get queryStringBehavior() {
      return this.getStringAttribute('query_string_behavior');
    }

    // query_strings - computed: true, optional: false, required: false
    public get queryStrings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('query_strings') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}
  */
  export class DataAwsCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudfront_origin_request_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontOriginRequestPolicyConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudfrontOriginRequestPolicyConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudfront_origin_request_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
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

    // cookies_config - computed: true, optional: false, required: false
    public cookiesConfig(index: string) {
      return new DataAwsCloudfrontOriginRequestPolicyCookiesConfig(this, 'cookies_config', index);
    }

    // etag - computed: true, optional: false, required: false
    public get etag() {
      return this.getStringAttribute('etag');
    }

    // headers_config - computed: true, optional: false, required: false
    public headersConfig(index: string) {
      return new DataAwsCloudfrontOriginRequestPolicyHeadersConfig(this, 'headers_config', index);
    }

    // id - computed: false, optional: true, required: false
    private _id?: string | undefined; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string | undefined) {
      this._id = value;
    }
    public resetId() {
      this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // query_strings_config - computed: true, optional: false, required: false
    public queryStringsConfig(index: string) {
      return new DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig(this, 'query_strings_config', index);
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
}
