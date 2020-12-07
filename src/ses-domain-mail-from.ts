// https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesDomainMailFromConfig extends cdktf.TerraformMetaArguments {
  readonly behaviorOnMxFailure?: string;
  readonly domain: string;
  readonly mailFromDomain: string;
}

// Resource

export class SesDomainMailFrom extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  public set behaviorOnMxFailure(value: string ) {
    this._behaviorOnMxFailure = value;
  }
  public resetBehaviorOnMxFailure() {
    this._behaviorOnMxFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorOnMxFailureInput() {
    return this._behaviorOnMxFailure
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mail_from_domain - computed: false, optional: false, required: true
  private _mailFromDomain: string;
  public get mailFromDomain() {
    return this.getStringAttribute('mail_from_domain');
  }
  public set mailFromDomain(value: string) {
    this._mailFromDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromDomainInput() {
    return this._mailFromDomain
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
