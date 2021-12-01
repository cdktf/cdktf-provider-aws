// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html#name DataAwsCloudfrontResponseHeadersPolicy#name}
  */
  readonly name?: string;
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getListAttribute('items');
  }
}
export class DataAwsCloudfrontResponseHeadersPolicyCorsConfig extends cdktf.ComplexComputedList {

  // access_control_allow_credentials - computed: true, optional: false, required: false
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials') as any;
  }

  // access_control_allow_headers - computed: true, optional: false, required: false
  public get accessControlAllowHeaders() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_control_allow_headers') as any;
  }

  // access_control_allow_methods - computed: true, optional: false, required: false
  public get accessControlAllowMethods() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_control_allow_methods') as any;
  }

  // access_control_allow_origins - computed: true, optional: false, required: false
  public get accessControlAllowOrigins() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_control_allow_origins') as any;
  }

  // access_control_expose_headers - computed: true, optional: false, required: false
  public get accessControlExposeHeaders() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_control_expose_headers') as any;
  }

  // access_control_max_age_sec - computed: true, optional: false, required: false
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }

  // origin_override - computed: true, optional: false, required: false
  public get originOverride() {
    return this.getBooleanAttribute('origin_override') as any;
  }
}
export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems extends cdktf.ComplexComputedList {

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy extends cdktf.ComplexComputedList {

  // content_security_policy - computed: true, optional: false, required: false
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions extends cdktf.ComplexComputedList {

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions extends cdktf.ComplexComputedList {

  // frame_option - computed: true, optional: false, required: false
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy extends cdktf.ComplexComputedList {

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }

  // referrer_policy - computed: true, optional: false, required: false
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity extends cdktf.ComplexComputedList {

  // access_control_max_age_sec - computed: true, optional: false, required: false
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains') as any;
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }

  // preload - computed: true, optional: false, required: false
  public get preload() {
    return this.getBooleanAttribute('preload') as any;
  }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection extends cdktf.ComplexComputedList {

  // mode_block - computed: true, optional: false, required: false
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block') as any;
  }

  // override - computed: true, optional: false, required: false
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }

  // protection - computed: true, optional: false, required: false
  public get protection() {
    return this.getBooleanAttribute('protection') as any;
  }

  // report_uri - computed: true, optional: false, required: false
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
}
export class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig extends cdktf.ComplexComputedList {

  // content_security_policy - computed: true, optional: false, required: false
  public get contentSecurityPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('content_security_policy') as any;
  }

  // content_type_options - computed: true, optional: false, required: false
  public get contentTypeOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('content_type_options') as any;
  }

  // frame_options - computed: true, optional: false, required: false
  public get frameOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('frame_options') as any;
  }

  // referrer_policy - computed: true, optional: false, required: false
  public get referrerPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('referrer_policy') as any;
  }

  // strict_transport_security - computed: true, optional: false, required: false
  public get strictTransportSecurity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('strict_transport_security') as any;
  }

  // xss_protection - computed: true, optional: false, required: false
  public get xssProtection() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('xss_protection') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
export class DataAwsCloudfrontResponseHeadersPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_response_headers_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCloudfrontResponseHeadersPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsCloudfrontResponseHeadersPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_response_headers_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public corsConfig(index: string) {
    return new DataAwsCloudfrontResponseHeadersPolicyCorsConfig(this, 'cors_config', index);
  }

  // custom_headers_config - computed: true, optional: false, required: false
  public customHeadersConfig(index: string) {
    return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig(this, 'custom_headers_config', index);
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
  public securityHeadersConfig(index: string) {
    return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig(this, 'security_headers_config', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
