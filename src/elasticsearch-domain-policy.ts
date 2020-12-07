// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchDomainPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly accessPolicies: string;
  readonly domainName: string;
}

// Resource

export class ElasticsearchDomainPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElasticsearchDomainPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticsearch_domain_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicies = config.accessPolicies;
    this._domainName = config.domainName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: false, optional: false, required: true
  private _accessPolicies: string;
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
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
      access_policies: cdktf.stringToTerraform(this._accessPolicies),
      domain_name: cdktf.stringToTerraform(this._domainName),
    };
  }
}
