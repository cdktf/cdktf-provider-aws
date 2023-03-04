// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2IntegrationResponseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}
  */
  readonly contentHandlingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}
  */
  readonly integrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}
  */
  readonly integrationResponseKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}
  */
  readonly responseTemplates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}
  */
  readonly templateSelectionExpression?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response aws_apigatewayv2_integration_response}
*/
export class Apigatewayv2IntegrationResponse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apigatewayv2_integration_response";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response aws_apigatewayv2_integration_response} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Apigatewayv2IntegrationResponseConfig
  */
  public constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_integration_response',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._contentHandlingStrategy = config.contentHandlingStrategy;
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._integrationResponseKey = config.integrationResponseKey;
    this._responseTemplates = config.responseTemplates;
    this._templateSelectionExpression = config.templateSelectionExpression;
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

  // content_handling_strategy - computed: false, optional: true, required: false
  private _contentHandlingStrategy?: string; 
  public get contentHandlingStrategy() {
    return this.getStringAttribute('content_handling_strategy');
  }
  public set contentHandlingStrategy(value: string) {
    this._contentHandlingStrategy = value;
  }
  public resetContentHandlingStrategy() {
    this._contentHandlingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingStrategyInput() {
    return this._contentHandlingStrategy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // integration_response_key - computed: false, optional: false, required: true
  private _integrationResponseKey?: string; 
  public get integrationResponseKey() {
    return this.getStringAttribute('integration_response_key');
  }
  public set integrationResponseKey(value: string) {
    this._integrationResponseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationResponseKeyInput() {
    return this._integrationResponseKey;
  }

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: { [key: string]: string }; 
  public get responseTemplates() {
    return this.getStringMapAttribute('response_templates');
  }
  public set responseTemplates(value: { [key: string]: string }) {
    this._responseTemplates = value;
  }
  public resetResponseTemplates() {
    this._responseTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplatesInput() {
    return this._responseTemplates;
  }

  // template_selection_expression - computed: false, optional: true, required: false
  private _templateSelectionExpression?: string; 
  public get templateSelectionExpression() {
    return this.getStringAttribute('template_selection_expression');
  }
  public set templateSelectionExpression(value: string) {
    this._templateSelectionExpression = value;
  }
  public resetTemplateSelectionExpression() {
    this._templateSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSelectionExpressionInput() {
    return this._templateSelectionExpression;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      integration_response_key: cdktf.stringToTerraform(this._integrationResponseKey),
      response_templates: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseTemplates),
      template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
    };
  }
}
