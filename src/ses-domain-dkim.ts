// https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dkim_tokens": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "domain": {
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

export interface SesDomainDkimConfig extends TerraformMetaArguments {
  readonly domain: string;
}

// Resource

export class SesDomainDkim extends TerraformResource {

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

  // dkim_tokens - computed: true, optional: false, required: true
  public get dkimTokens() {
    return this.getListAttribute('dkim_tokens');
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
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
      domain: this._domain,
    };
  }
}
