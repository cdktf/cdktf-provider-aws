// https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "behavior_on_mx_failure": {
        "type": "string",
        "optional": true
      },
      "domain": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "mail_from_domain": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SesDomainMailFromConfig extends TerraformMetaArguments {
  readonly behaviorOnMxFailure?: string;
  readonly domain: string;
  readonly mailFromDomain: string;
}

// Resource

export class SesDomainMailFrom extends TerraformResource {

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
    return this._behaviorOnMxFailure;
  }
  public set behaviorOnMxFailure(value: string | undefined) {
    this._behaviorOnMxFailure = value;
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

  // mail_from_domain - computed: false, optional: false, required: true
  private _mailFromDomain: string;
  public get mailFromDomain() {
    return this._mailFromDomain;
  }
  public set mailFromDomain(value: string) {
    this._mailFromDomain = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      behavior_on_mx_failure: this._behaviorOnMxFailure,
      domain: this._domain,
      mail_from_domain: this._mailFromDomain,
    };
  }
}
