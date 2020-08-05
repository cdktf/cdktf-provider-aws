// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html
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
      "content_handling_strategy": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "integration_id": {
        "type": "string",
        "required": true
      },
      "integration_response_key": {
        "type": "string",
        "required": true
      },
      "response_templates": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "template_selection_expression": {
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

export interface Apigatewayv2IntegrationResponseConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly contentHandlingStrategy?: string;
  readonly integrationId: string;
  readonly integrationResponseKey: string;
  readonly responseTemplates?: { [key: string]: string };
  readonly templateSelectionExpression?: string;
}

// Resource

export class Apigatewayv2IntegrationResponse extends TerraformResource {

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
    return this._apiId;
  }
  public set apiId(value: string) {
    this._apiId = value;
  }

  // content_handling_strategy - computed: false, optional: true, required: false
  private _contentHandlingStrategy?: string;
  public get contentHandlingStrategy() {
    return this._contentHandlingStrategy;
  }
  public set contentHandlingStrategy(value: string | undefined) {
    this._contentHandlingStrategy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId: string;
  public get integrationId() {
    return this._integrationId;
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }

  // integration_response_key - computed: false, optional: false, required: true
  private _integrationResponseKey: string;
  public get integrationResponseKey() {
    return this._integrationResponseKey;
  }
  public set integrationResponseKey(value: string) {
    this._integrationResponseKey = value;
  }

  // response_templates - computed: false, optional: true, required: false
  private _responseTemplates?: { [key: string]: string };
  public get responseTemplates() {
    return this._responseTemplates;
  }
  public set responseTemplates(value: { [key: string]: string } | undefined) {
    this._responseTemplates = value;
  }

  // template_selection_expression - computed: false, optional: true, required: false
  private _templateSelectionExpression?: string;
  public get templateSelectionExpression() {
    return this._templateSelectionExpression;
  }
  public set templateSelectionExpression(value: string | undefined) {
    this._templateSelectionExpression = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      content_handling_strategy: this._contentHandlingStrategy,
      integration_id: this._integrationId,
      integration_response_key: this._integrationResponseKey,
      response_templates: this._responseTemplates,
      template_selection_expression: this._templateSelectionExpression,
    };
  }
}
