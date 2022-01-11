// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export interface SesDomainIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity#domain SesDomainIdentity#domain}
  */
  readonly domain: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity aws_ses_domain_identity}
*/
export class SesDomainIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ses_domain_identity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity aws_ses_domain_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesDomainIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: SesDomainIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_domain_identity',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // verification_token - computed: true, optional: false, required: false
  public get verificationToken() {
    return this.getStringAttribute('verification_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
    };
  }
}
