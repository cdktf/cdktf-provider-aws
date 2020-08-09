// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html
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
      "connection_id": {
        "type": "string",
        "optional": true
      },
      "connection_type": {
        "type": "string",
        "optional": true
      },
      "content_handling_strategy": {
        "type": "string",
        "optional": true
      },
      "credentials_arn": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "integration_method": {
        "type": "string",
        "optional": true
      },
      "integration_response_selection_expression": {
        "type": "string",
        "computed": true
      },
      "integration_type": {
        "type": "string",
        "required": true
      },
      "integration_uri": {
        "type": "string",
        "optional": true
      },
      "passthrough_behavior": {
        "type": "string",
        "optional": true
      },
      "payload_format_version": {
        "type": "string",
        "optional": true
      },
      "request_templates": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "template_selection_expression": {
        "type": "string",
        "optional": true
      },
      "timeout_milliseconds": {
        "type": "number",
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

export interface Apigatewayv2IntegrationConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly connectionId?: string;
  readonly connectionType?: string;
  readonly contentHandlingStrategy?: string;
  readonly credentialsArn?: string;
  readonly description?: string;
  readonly integrationMethod?: string;
  readonly integrationType: string;
  readonly integrationUri?: string;
  readonly passthroughBehavior?: string;
  readonly payloadFormatVersion?: string;
  readonly requestTemplates?: { [key: string]: string };
  readonly templateSelectionExpression?: string;
  readonly timeoutMilliseconds?: number;
}

// Resource

export class Apigatewayv2Integration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_integration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._connectionId = config.connectionId;
    this._connectionType = config.connectionType;
    this._contentHandlingStrategy = config.contentHandlingStrategy;
    this._credentialsArn = config.credentialsArn;
    this._description = config.description;
    this._integrationMethod = config.integrationMethod;
    this._integrationType = config.integrationType;
    this._integrationUri = config.integrationUri;
    this._passthroughBehavior = config.passthroughBehavior;
    this._payloadFormatVersion = config.payloadFormatVersion;
    this._requestTemplates = config.requestTemplates;
    this._templateSelectionExpression = config.templateSelectionExpression;
    this._timeoutMilliseconds = config.timeoutMilliseconds;
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

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string;
  public get connectionId() {
    return this._connectionId;
  }
  public set connectionId(value: string | undefined) {
    this._connectionId = value;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string;
  public get connectionType() {
    return this._connectionType;
  }
  public set connectionType(value: string | undefined) {
    this._connectionType = value;
  }

  // content_handling_strategy - computed: false, optional: true, required: false
  private _contentHandlingStrategy?: string;
  public get contentHandlingStrategy() {
    return this._contentHandlingStrategy;
  }
  public set contentHandlingStrategy(value: string | undefined) {
    this._contentHandlingStrategy = value;
  }

  // credentials_arn - computed: false, optional: true, required: false
  private _credentialsArn?: string;
  public get credentialsArn() {
    return this._credentialsArn;
  }
  public set credentialsArn(value: string | undefined) {
    this._credentialsArn = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // integration_method - computed: false, optional: true, required: false
  private _integrationMethod?: string;
  public get integrationMethod() {
    return this._integrationMethod;
  }
  public set integrationMethod(value: string | undefined) {
    this._integrationMethod = value;
  }

  // integration_response_selection_expression - computed: true, optional: false, required: true
  public get integrationResponseSelectionExpression() {
    return this.getStringAttribute('integration_response_selection_expression');
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType: string;
  public get integrationType() {
    return this._integrationType;
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }

  // integration_uri - computed: false, optional: true, required: false
  private _integrationUri?: string;
  public get integrationUri() {
    return this._integrationUri;
  }
  public set integrationUri(value: string | undefined) {
    this._integrationUri = value;
  }

  // passthrough_behavior - computed: false, optional: true, required: false
  private _passthroughBehavior?: string;
  public get passthroughBehavior() {
    return this._passthroughBehavior;
  }
  public set passthroughBehavior(value: string | undefined) {
    this._passthroughBehavior = value;
  }

  // payload_format_version - computed: false, optional: true, required: false
  private _payloadFormatVersion?: string;
  public get payloadFormatVersion() {
    return this._payloadFormatVersion;
  }
  public set payloadFormatVersion(value: string | undefined) {
    this._payloadFormatVersion = value;
  }

  // request_templates - computed: false, optional: true, required: false
  private _requestTemplates?: { [key: string]: string };
  public get requestTemplates() {
    return this._requestTemplates;
  }
  public set requestTemplates(value: { [key: string]: string } | undefined) {
    this._requestTemplates = value;
  }

  // template_selection_expression - computed: false, optional: true, required: false
  private _templateSelectionExpression?: string;
  public get templateSelectionExpression() {
    return this._templateSelectionExpression;
  }
  public set templateSelectionExpression(value: string | undefined) {
    this._templateSelectionExpression = value;
  }

  // timeout_milliseconds - computed: false, optional: true, required: false
  private _timeoutMilliseconds?: number;
  public get timeoutMilliseconds() {
    return this._timeoutMilliseconds;
  }
  public set timeoutMilliseconds(value: number | undefined) {
    this._timeoutMilliseconds = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      connection_id: this._connectionId,
      connection_type: this._connectionType,
      content_handling_strategy: this._contentHandlingStrategy,
      credentials_arn: this._credentialsArn,
      description: this._description,
      integration_method: this._integrationMethod,
      integration_type: this._integrationType,
      integration_uri: this._integrationUri,
      passthrough_behavior: this._passthroughBehavior,
      payload_format_version: this._payloadFormatVersion,
      request_templates: this._requestTemplates,
      template_selection_expression: this._templateSelectionExpression,
      timeout_milliseconds: this._timeoutMilliseconds,
    };
  }
}
