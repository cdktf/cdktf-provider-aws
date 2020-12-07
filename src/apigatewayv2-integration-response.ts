// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2IntegrationResponseConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly contentHandlingStrategy?: string;
  readonly integrationId: string;
  readonly integrationResponseKey: string;
  readonly responseTemplates?: { [key: string]: string };
  readonly templateSelectionExpression?: string;
}

// Resource

export class Apigatewayv2IntegrationResponse extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationResponseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_integration_response',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._contentHandlingStrategy = config.contentHandlingStrategy;
    this._integrationId = config.integrationId;
    this._integrationResponseKey = config.integrationResponseKey;
    this._responseTemplates = config.responseTemplates;
    this._templateSelectionExpression = config.templateSelectionExpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId
  }

  // content_handling_strategy - computed: false, optional: true, required: false
  private _contentHandlingStrategy?: string;
  public get contentHandlingStrategy() {
    return this.getStringAttribute('content_handling_strategy');
  }
  public set contentHandlingStrategy(value: string ) {
    this._contentHandlingStrategy = value;
  }
  public resetContentHandlingStrategy() {
    this._contentHandlingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingStrategyInput() {
    return this._contentHandlingStrategy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId: string;
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId
  }

  // integration_response_key - computed: false, optional: false, required: true
  private _integrationResponseKey: string;
  public get integrationResponseKey() {
    return this.getStringAttribute('integration_response_key');
  }
  public set integrationResponseKey(value: string) {
    this._integrationResponseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationResponseKeyInput() {
    return this._integrationResponseKey
  }

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: { [key: string]: string };
  public get responseTemplates() {
    return this.interpolationForAttribute('response_templates') as any;
  }
  public set responseTemplates(value: { [key: string]: string } ) {
    this._responseTemplates = value;
  }
  public resetResponseTemplates() {
    this._responseTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplatesInput() {
    return this._responseTemplates
  }

  // template_selection_expression - computed: false, optional: true, required: false
  private _templateSelectionExpression?: string;
  public get templateSelectionExpression() {
    return this.getStringAttribute('template_selection_expression');
  }
  public set templateSelectionExpression(value: string ) {
    this._templateSelectionExpression = value;
  }
  public resetTemplateSelectionExpression() {
    this._templateSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSelectionExpressionInput() {
    return this._templateSelectionExpression
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      integration_response_key: cdktf.stringToTerraform(this._integrationResponseKey),
      response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
      template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
    };
  }
}
