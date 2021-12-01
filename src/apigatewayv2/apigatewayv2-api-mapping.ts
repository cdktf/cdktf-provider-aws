// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface Apigatewayv2ApiMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#api_id Apigatewayv2ApiMapping#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#api_mapping_key Apigatewayv2ApiMapping#api_mapping_key}
  */
  readonly apiMappingKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#domain_name Apigatewayv2ApiMapping#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#stage Apigatewayv2ApiMapping#stage}
  */
  readonly stage: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping}
*/
export class Apigatewayv2ApiMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_apigatewayv2_api_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2ApiMappingConfig
  */
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
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_mapping_key - computed: false, optional: true, required: false
  private _apiMappingKey?: string; 
  public get apiMappingKey() {
    return this.getStringAttribute('api_mapping_key');
  }
  public set apiMappingKey(value: string) {
    this._apiMappingKey = value;
  }
  public resetApiMappingKey() {
    this._apiMappingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiMappingKeyInput() {
    return this._apiMappingKey;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      api_mapping_key: cdktf.stringToTerraform(this._apiMappingKey),
      domain_name: cdktf.stringToTerraform(this._domainName),
      stage: cdktf.stringToTerraform(this._stage),
    };
  }
}
