// https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cache_key_parameters": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "cache_namespace": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "connection_id": {
        "type": "string",
        "optional": true
      },
      "connection_type": {
        "type": "string",
        "optional": true
      },
      "content_handling": {
        "type": "string",
        "optional": true
      },
      "credentials": {
        "type": "string",
        "optional": true
      },
      "http_method": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "integration_http_method": {
        "type": "string",
        "optional": true
      },
      "passthrough_behavior": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "request_parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "request_parameters_in_json": {
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
      "resource_id": {
        "type": "string",
        "required": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "timeout_milliseconds": {
        "type": "number",
        "optional": true
      },
      "type": {
        "type": "string",
        "required": true
      },
      "uri": {
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

export interface ApiGatewayIntegrationConfig extends TerraformMetaArguments {
  readonly cacheKeyParameters?: string[];
  readonly cacheNamespace?: string;
  readonly connectionId?: string;
  readonly connectionType?: string;
  readonly contentHandling?: string;
  readonly credentials?: string;
  readonly httpMethod: string;
  readonly integrationHttpMethod?: string;
  readonly passthroughBehavior?: string;
  readonly requestParameters?: { [key: string]: string };
  readonly requestParametersInJson?: string;
  readonly requestTemplates?: { [key: string]: string };
  readonly resourceId: string;
  readonly restApiId: string;
  readonly timeoutMilliseconds?: number;
  readonly type: string;
  readonly uri?: string;
}

// Resource

export class ApiGatewayIntegration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_integration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheKeyParameters = config.cacheKeyParameters;
    this._cacheNamespace = config.cacheNamespace;
    this._connectionId = config.connectionId;
    this._connectionType = config.connectionType;
    this._contentHandling = config.contentHandling;
    this._credentials = config.credentials;
    this._httpMethod = config.httpMethod;
    this._integrationHttpMethod = config.integrationHttpMethod;
    this._passthroughBehavior = config.passthroughBehavior;
    this._requestParameters = config.requestParameters;
    this._requestParametersInJson = config.requestParametersInJson;
    this._requestTemplates = config.requestTemplates;
    this._resourceId = config.resourceId;
    this._restApiId = config.restApiId;
    this._timeoutMilliseconds = config.timeoutMilliseconds;
    this._type = config.type;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_key_parameters - computed: false, optional: true, required: false
  private _cacheKeyParameters?: string[];
  public get cacheKeyParameters() {
    return this._cacheKeyParameters;
  }
  public set cacheKeyParameters(value: string[] | undefined) {
    this._cacheKeyParameters = value;
  }

  // cache_namespace - computed: true, optional: true, required: false
  private _cacheNamespace?: string;
  public get cacheNamespace() {
    return this._cacheNamespace ?? this.getStringAttribute('cache_namespace');
  }
  public set cacheNamespace(value: string | undefined) {
    this._cacheNamespace = value;
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

  // content_handling - computed: false, optional: true, required: false
  private _contentHandling?: string;
  public get contentHandling() {
    return this._contentHandling;
  }
  public set contentHandling(value: string | undefined) {
    this._contentHandling = value;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string;
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod: string;
  public get httpMethod() {
    return this._httpMethod;
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // integration_http_method - computed: false, optional: true, required: false
  private _integrationHttpMethod?: string;
  public get integrationHttpMethod() {
    return this._integrationHttpMethod;
  }
  public set integrationHttpMethod(value: string | undefined) {
    this._integrationHttpMethod = value;
  }

  // passthrough_behavior - computed: true, optional: true, required: false
  private _passthroughBehavior?: string;
  public get passthroughBehavior() {
    return this._passthroughBehavior ?? this.getStringAttribute('passthrough_behavior');
  }
  public set passthroughBehavior(value: string | undefined) {
    this._passthroughBehavior = value;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: string };
  public get requestParameters() {
    return this._requestParameters;
  }
  public set requestParameters(value: { [key: string]: string } | undefined) {
    this._requestParameters = value;
  }

  // request_parameters_in_json - computed: false, optional: true, required: false
  private _requestParametersInJson?: string;
  public get requestParametersInJson() {
    return this._requestParametersInJson;
  }
  public set requestParametersInJson(value: string | undefined) {
    this._requestParametersInJson = value;
  }

  // request_templates - computed: false, optional: true, required: false
  private _requestTemplates?: { [key: string]: string };
  public get requestTemplates() {
    return this._requestTemplates;
  }
  public set requestTemplates(value: { [key: string]: string } | undefined) {
    this._requestTemplates = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // timeout_milliseconds - computed: false, optional: true, required: false
  private _timeoutMilliseconds?: number;
  public get timeoutMilliseconds() {
    return this._timeoutMilliseconds;
  }
  public set timeoutMilliseconds(value: number | undefined) {
    this._timeoutMilliseconds = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string;
  public get uri() {
    return this._uri;
  }
  public set uri(value: string | undefined) {
    this._uri = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_key_parameters: this._cacheKeyParameters,
      cache_namespace: this._cacheNamespace,
      connection_id: this._connectionId,
      connection_type: this._connectionType,
      content_handling: this._contentHandling,
      credentials: this._credentials,
      http_method: this._httpMethod,
      integration_http_method: this._integrationHttpMethod,
      passthrough_behavior: this._passthroughBehavior,
      request_parameters: this._requestParameters,
      request_parameters_in_json: this._requestParametersInJson,
      request_templates: this._requestTemplates,
      resource_id: this._resourceId,
      rest_api_id: this._restApiId,
      timeout_milliseconds: this._timeoutMilliseconds,
      type: this._type,
      uri: this._uri,
    };
  }
}
