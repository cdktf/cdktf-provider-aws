// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface DataAwsApigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html#api_id DataAwsApigatewayv2Api#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html#tags DataAwsApigatewayv2Api#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsApigatewayv2ApiCorsConfiguration extends cdktf.ComplexComputedList {

  // allow_credentials - computed: true, optional: false, required: false
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials') as any;
  }

  // allow_headers - computed: true, optional: false, required: false
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }

  // allow_methods - computed: true, optional: false, required: false
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }

  // allow_origins - computed: true, optional: false, required: false
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }

  // expose_headers - computed: true, optional: false, required: false
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api}
*/
export class DataAwsApigatewayv2Api extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_apigatewayv2_api";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApigatewayv2ApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_api',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: true, optional: false, required: false
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

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

  // api_key_selection_expression - computed: true, optional: false, required: false
  public get apiKeySelectionExpression() {
    return this.getStringAttribute('api_key_selection_expression');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cors_configuration - computed: true, optional: false, required: false
  public corsConfiguration(index: string) {
    return new DataAwsApigatewayv2ApiCorsConfiguration(this, 'cors_configuration', index);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_execute_api_endpoint - computed: true, optional: false, required: false
  public get disableExecuteApiEndpoint() {
    return this.getBooleanAttribute('disable_execute_api_endpoint') as any;
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // route_selection_expression - computed: true, optional: false, required: false
  public get routeSelectionExpression() {
    return this.getStringAttribute('route_selection_expression');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
