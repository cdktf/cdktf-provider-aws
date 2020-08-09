// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_policies": {
        "type": "string",
        "required": true
      },
      "domain_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElasticsearchDomainPolicyConfig extends TerraformMetaArguments {
  readonly accessPolicies: string;
  readonly domainName: string;
}

// Resource

export class ElasticsearchDomainPolicy extends TerraformResource {

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
    return this._accessPolicies;
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policies: this._accessPolicies,
      domain_name: this._domainName,
    };
  }
}
