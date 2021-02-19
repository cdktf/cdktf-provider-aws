// https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly comment?: string;
  readonly etag?: string;
  readonly name: string;
  /** cookies_config block */
  readonly cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig[];
  /** headers_config block */
  readonly headersConfig: CloudfrontOriginRequestPolicyHeadersConfig[];
  /** query_strings_config block */
  readonly queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig[];
}
export interface CloudfrontOriginRequestPolicyCookiesConfigCookies {
  readonly items?: string[];
}

function cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontOriginRequestPolicyCookiesConfig {
  readonly cookieBehavior: string;
  /** cookies block */
  readonly cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies[];
}

function cloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cdktf.listMapper(cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform)(struct!.cookies),
  }
}

export interface CloudfrontOriginRequestPolicyHeadersConfigHeaders {
  readonly items?: string[];
}

function cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontOriginRequestPolicyHeadersConfig {
  readonly headerBehavior?: string;
  /** headers block */
  readonly headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders[];
}

function cloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cdktf.listMapper(cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform)(struct!.headers),
  }
}

export interface CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
  readonly items?: string[];
}

function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontOriginRequestPolicyQueryStringsConfig {
  readonly queryStringBehavior: string;
  /** query_strings block */
  readonly queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings[];
}

function cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cdktf.listMapper(cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform)(struct!.queryStrings),
  }
}


// Resource

export class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig[];
  public get cookiesConfig() {
    return this.interpolationForAttribute('cookies_config') as any;
  }
  public set cookiesConfig(value: CloudfrontOriginRequestPolicyCookiesConfig[]) {
    this._cookiesConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig: CloudfrontOriginRequestPolicyHeadersConfig[];
  public get headersConfig() {
    return this.interpolationForAttribute('headers_config') as any;
  }
  public set headersConfig(value: CloudfrontOriginRequestPolicyHeadersConfig[]) {
    this._headersConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig
  }

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig[];
  public get queryStringsConfig() {
    return this.interpolationForAttribute('query_strings_config') as any;
  }
  public set queryStringsConfig(value: CloudfrontOriginRequestPolicyQueryStringsConfig[]) {
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
      cookies_config: cdktf.listMapper(cloudfrontOriginRequestPolicyCookiesConfigToTerraform)(this._cookiesConfig),
      headers_config: cdktf.listMapper(cloudfrontOriginRequestPolicyHeadersConfigToTerraform)(this._headersConfig),
      query_strings_config: cdktf.listMapper(cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform)(this._queryStringsConfig),
    };
  }
}
