// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_endpoint": {
        "type": "string",
        "computed": true
      },
      "api_key_selection_expression": {
        "type": "string",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "credentials_arn": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "execution_arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "protocol_type": {
        "type": "string",
        "required": true
      },
      "route_key": {
        "type": "string",
        "optional": true
      },
      "route_selection_expression": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "target": {
        "type": "string",
        "optional": true
      },
      "version": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "cors_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "allow_credentials": {
              "type": "bool",
              "optional": true
            },
            "allow_headers": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "allow_methods": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "allow_origins": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "expose_headers": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "max_age": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2ApiConfig extends TerraformMetaArguments {
  readonly apiKeySelectionExpression?: string;
  readonly credentialsArn?: string;
  readonly description?: string;
  readonly name: string;
  readonly protocolType: string;
  readonly routeKey?: string;
  readonly routeSelectionExpression?: string;
  readonly tags?: { [key: string]: string };
  readonly target?: string;
  readonly version?: string;
  /** cors_configuration block */
  readonly corsConfiguration?: Apigatewayv2ApiCorsConfiguration[];
}
export interface Apigatewayv2ApiCorsConfiguration {
  readonly allowCredentials?: boolean;
  readonly allowHeaders?: string[];
  readonly allowMethods?: string[];
  readonly allowOrigins?: string[];
  readonly exposeHeaders?: string[];
  readonly maxAge?: number;
}

// Resource

export class Apigatewayv2Api extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2ApiConfig) {
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
    this._apiKeySelectionExpression = config.apiKeySelectionExpression;
    this._credentialsArn = config.credentialsArn;
    this._description = config.description;
    this._name = config.name;
    this._protocolType = config.protocolType;
    this._routeKey = config.routeKey;
    this._routeSelectionExpression = config.routeSelectionExpression;
    this._tags = config.tags;
    this._target = config.target;
    this._version = config.version;
    this._corsConfiguration = config.corsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: true, optional: false, required: true
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

  // api_key_selection_expression - computed: false, optional: true, required: false
  private _apiKeySelectionExpression?: string;
  public get apiKeySelectionExpression() {
    return this._apiKeySelectionExpression;
  }
  public set apiKeySelectionExpression(value: string | undefined) {
    this._apiKeySelectionExpression = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // execution_arn - computed: true, optional: false, required: true
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType: string;
  public get protocolType() {
    return this._protocolType;
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }

  // route_key - computed: false, optional: true, required: false
  private _routeKey?: string;
  public get routeKey() {
    return this._routeKey;
  }
  public set routeKey(value: string | undefined) {
    this._routeKey = value;
  }

  // route_selection_expression - computed: false, optional: true, required: false
  private _routeSelectionExpression?: string;
  public get routeSelectionExpression() {
    return this._routeSelectionExpression;
  }
  public set routeSelectionExpression(value: string | undefined) {
    this._routeSelectionExpression = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string;
  public get target() {
    return this._target;
  }
  public set target(value: string | undefined) {
    this._target = value;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version;
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // cors_configuration - computed: false, optional: true, required: false
  private _corsConfiguration?: Apigatewayv2ApiCorsConfiguration[];
  public get corsConfiguration() {
    return this._corsConfiguration;
  }
  public set corsConfiguration(value: Apigatewayv2ApiCorsConfiguration[] | undefined) {
    this._corsConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_selection_expression: this._apiKeySelectionExpression,
      credentials_arn: this._credentialsArn,
      description: this._description,
      name: this._name,
      protocol_type: this._protocolType,
      route_key: this._routeKey,
      route_selection_expression: this._routeSelectionExpression,
      tags: this._tags,
      target: this._target,
      version: this._version,
      cors_configuration: this._corsConfiguration,
    };
  }
}
