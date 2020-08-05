// https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html
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
      "base_path": {
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
      "stage_name": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayBasePathMappingConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly basePath?: string;
  readonly domainName: string;
  readonly stageName?: string;
}

// Resource

export class ApiGatewayBasePathMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayBasePathMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_base_path_mapping',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._basePath = config.basePath;
    this._domainName = config.domainName;
    this._stageName = config.stageName;
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

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string;
  public get basePath() {
    return this._basePath;
  }
  public set basePath(value: string | undefined) {
    this._basePath = value;
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

  // stage_name - computed: false, optional: true, required: false
  private _stageName?: string;
  public get stageName() {
    return this._stageName;
  }
  public set stageName(value: string | undefined) {
    this._stageName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      base_path: this._basePath,
      domain_name: this._domainName,
      stage_name: this._stageName,
    };
  }
}
