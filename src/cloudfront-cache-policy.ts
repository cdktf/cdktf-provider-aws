// https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
  readonly comment?: string;
  readonly defaultTtl?: number;
  readonly etag?: string;
  readonly maxTtl?: number;
  readonly minTtl?: number;
  readonly name: string;
  /** parameters_in_cache_key_and_forwarded_to_origin block */
  readonly parametersInCacheKeyAndForwardedToOrigin?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[];
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
  readonly items?: string[];
}

function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  readonly cookieBehavior: string;
  /** cookies block */
  readonly cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies[];
}

function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform)(struct!.cookies),
  }
}

export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
  readonly items?: string[];
}

function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  readonly headerBehavior?: string;
  /** headers block */
  readonly headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders[];
}

function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform)(struct!.headers),
  }
}

export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
  readonly items?: string[];
}

function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  readonly queryStringBehavior: string;
  /** query_strings block */
  readonly queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings[];
}

function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform)(struct!.queryStrings),
  }
}

export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
  readonly enableAcceptEncodingBrotli?: boolean;
  readonly enableAcceptEncodingGzip?: boolean;
  /** cookies_config block */
  readonly cookiesConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig[];
  /** headers_config block */
  readonly headersConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig[];
  /** query_strings_config block */
  readonly queryStringsConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig[];
}

function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
    enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct!.enableAcceptEncodingGzip),
    cookies_config: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform)(struct!.cookiesConfig),
    headers_config: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform)(struct!.headersConfig),
    query_strings_config: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform)(struct!.queryStringsConfig),
  }
}


// Resource

export class CloudfrontCachePolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string ) {
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
  private _defaultTtl?: number;
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number ) {
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
    return this._etag
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number;
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number ) {
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
  private _minTtl?: number;
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number ) {
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
  private _name: string;
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
  private _parametersInCacheKeyAndForwardedToOrigin?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[];
  public get parametersInCacheKeyAndForwardedToOrigin() {
    return this.interpolationForAttribute('parameters_in_cache_key_and_forwarded_to_origin') as any;
  }
  public set parametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[] ) {
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
      parameters_in_cache_key_and_forwarded_to_origin: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform)(this._parametersInCacheKeyAndForwardedToOrigin),
    };
  }
}
