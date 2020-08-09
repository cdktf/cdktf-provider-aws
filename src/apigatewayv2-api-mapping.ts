// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html
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
      "api_mapping_key": {
        "type": "string",
        "optional": true
      },
      "domain_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "stage": {
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

export interface Apigatewayv2ApiMappingConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly apiMappingKey?: string;
  readonly domainName: string;
  readonly stage: string;
}

// Resource

export class Apigatewayv2ApiMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2ApiMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_api_mapping',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._apiMappingKey = config.apiMappingKey;
    this._domainName = config.domainName;
    this._stage = config.stage;
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

  // api_mapping_key - computed: false, optional: true, required: false
  private _apiMappingKey?: string;
  public get apiMappingKey() {
    return this._apiMappingKey;
  }
  public set apiMappingKey(value: string | undefined) {
    this._apiMappingKey = value;
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

  // stage - computed: false, optional: false, required: true
  private _stage: string;
  public get stage() {
    return this._stage;
  }
  public set stage(value: string) {
    this._stage = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      api_mapping_key: this._apiMappingKey,
      domain_name: this._domainName,
      stage: this._stage,
    };
  }
}
