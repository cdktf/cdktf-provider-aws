// https://www.terraform.io/docs/providers/aws/r/data_aws_cloudfront_origin_request_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly id?: string;
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
    return this.interpolationForAttribute('query_strings') as any;
  }
}

// Resource

export class DataAwsCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string ) {
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
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
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
