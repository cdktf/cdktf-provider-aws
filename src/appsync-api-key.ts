// https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_id": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "expires": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key": {
        "type": "string",
        "computed": true,
        "sensitive": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppsyncApiKeyConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly description?: string;
  readonly expires?: string;
}

// Resource

export class AppsyncApiKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppsyncApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_api_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._description = config.description;
    this._expires = config.expires;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this._apiId;
  }
  public set apiId(value: string) {
    this._apiId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string;
  public get expires() {
    return this._expires;
  }
  public set expires(value: string | undefined) {
    this._expires = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      description: this._description,
      expires: this._expires,
    };
  }
}
