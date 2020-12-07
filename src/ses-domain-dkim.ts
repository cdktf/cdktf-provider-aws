// https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesDomainDkimConfig extends cdktf.TerraformMetaArguments {
  readonly domain: string;
}

// Resource

export class SesDomainDkim extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesDomainDkimConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_domain_dkim',
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

  // dkim_tokens - computed: true, optional: false, required: false
  public get dkimTokens() {
    return this.getListAttribute('dkim_tokens');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
    };
  }
}
