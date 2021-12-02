// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
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

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // name - computed: false, optional: true, required: false
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
