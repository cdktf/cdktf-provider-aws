// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export interface SesDomainMailFromConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#behavior_on_mx_failure SesDomainMailFrom#behavior_on_mx_failure}
  */
  readonly behaviorOnMxFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#domain SesDomainMailFrom#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html#mail_from_domain SesDomainMailFrom#mail_from_domain}
  */
  readonly mailFromDomain: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from}
*/
export class SesDomainMailFrom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ses_domain_mail_from";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html aws_ses_domain_mail_from} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesDomainMailFromConfig
  */
  public constructor(scope: Construct, id: string, config: SesDomainMailFromConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_domain_mail_from',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._behaviorOnMxFailure = config.behaviorOnMxFailure;
    this._domain = config.domain;
    this._mailFromDomain = config.mailFromDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior_on_mx_failure - computed: false, optional: true, required: false
  private _behaviorOnMxFailure?: string; 
  public get behaviorOnMxFailure() {
    return this.getStringAttribute('behavior_on_mx_failure');
  }
  public set behaviorOnMxFailure(value: string) {
    this._behaviorOnMxFailure = value;
  }
  public resetBehaviorOnMxFailure() {
    this._behaviorOnMxFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorOnMxFailureInput() {
    return this._behaviorOnMxFailure;
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

  // mail_from_domain - computed: false, optional: false, required: true
  private _mailFromDomain?: string; 
  public get mailFromDomain() {
    return this.getStringAttribute('mail_from_domain');
  }
  public set mailFromDomain(value: string) {
    this._mailFromDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromDomainInput() {
    return this._mailFromDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      behavior_on_mx_failure: cdktf.stringToTerraform(this._behaviorOnMxFailure),
      domain: cdktf.stringToTerraform(this._domain),
      mail_from_domain: cdktf.stringToTerraform(this._mailFromDomain),
    };
  }
}
