// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html
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
      "arn": {
        "type": "string",
        "computed": true
      },
      "auto_deploy": {
        "type": "bool",
        "optional": true
      },
      "client_certificate_id": {
        "type": "string",
        "optional": true
      },
      "deployment_id": {
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
      "invoke_url": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "stage_variables": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "access_log_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "destination_arn": {
              "type": "string",
              "required": true
            },
            "format": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "default_route_settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "data_trace_enabled": {
              "type": "bool",
              "optional": true
            },
            "detailed_metrics_enabled": {
              "type": "bool",
              "optional": true
            },
            "logging_level": {
              "type": "string",
              "optional": true
            },
            "throttling_burst_limit": {
              "type": "number",
              "optional": true
            },
            "throttling_rate_limit": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "route_settings": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "data_trace_enabled": {
              "type": "bool",
              "optional": true
            },
            "detailed_metrics_enabled": {
              "type": "bool",
              "optional": true
            },
            "logging_level": {
              "type": "string",
              "optional": true
            },
            "route_key": {
              "type": "string",
              "required": true
            },
            "throttling_burst_limit": {
              "type": "number",
              "optional": true
            },
            "throttling_rate_limit": {
              "type": "number",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2StageConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly autoDeploy?: boolean;
  readonly clientCertificateId?: string;
  readonly deploymentId?: string;
  readonly description?: string;
  readonly name: string;
  readonly stageVariables?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  /** access_log_settings block */
  readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings[];
  /** default_route_settings block */
  readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings[];
  /** route_settings block */
  readonly routeSettings?: Apigatewayv2StageRouteSettings[];
}
export interface Apigatewayv2StageAccessLogSettings {
  readonly destinationArn: string;
  readonly format: string;
}
export interface Apigatewayv2StageDefaultRouteSettings {
  readonly dataTraceEnabled?: boolean;
  readonly detailedMetricsEnabled?: boolean;
  readonly loggingLevel?: string;
  readonly throttlingBurstLimit?: number;
  readonly throttlingRateLimit?: number;
}
export interface Apigatewayv2StageRouteSettings {
  readonly dataTraceEnabled?: boolean;
  readonly detailedMetricsEnabled?: boolean;
  readonly loggingLevel?: string;
  readonly routeKey: string;
  readonly throttlingBurstLimit?: number;
  readonly throttlingRateLimit?: number;
}

// Resource

export class Apigatewayv2Stage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2StageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_stage',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._autoDeploy = config.autoDeploy;
    this._clientCertificateId = config.clientCertificateId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._name = config.name;
    this._stageVariables = config.stageVariables;
    this._tags = config.tags;
    this._accessLogSettings = config.accessLogSettings;
    this._defaultRouteSettings = config.defaultRouteSettings;
    this._routeSettings = config.routeSettings;
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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_deploy - computed: false, optional: true, required: false
  private _autoDeploy?: boolean;
  public get autoDeploy() {
    return this._autoDeploy;
  }
  public set autoDeploy(value: boolean | undefined) {
    this._autoDeploy = value;
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string;
  public get clientCertificateId() {
    return this._clientCertificateId;
  }
  public set clientCertificateId(value: string | undefined) {
    this._clientCertificateId = value;
  }

  // deployment_id - computed: false, optional: true, required: false
  private _deploymentId?: string;
  public get deploymentId() {
    return this._deploymentId;
  }
  public set deploymentId(value: string | undefined) {
    this._deploymentId = value;
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

  // invoke_url - computed: true, optional: false, required: true
  public get invokeUrl() {
    return this.getStringAttribute('invoke_url');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // stage_variables - computed: false, optional: true, required: false
  private _stageVariables?: { [key: string]: string };
  public get stageVariables() {
    return this._stageVariables;
  }
  public set stageVariables(value: { [key: string]: string } | undefined) {
    this._stageVariables = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings?: Apigatewayv2StageAccessLogSettings[];
  public get accessLogSettings() {
    return this._accessLogSettings;
  }
  public set accessLogSettings(value: Apigatewayv2StageAccessLogSettings[] | undefined) {
    this._accessLogSettings = value;
  }

  // default_route_settings - computed: false, optional: true, required: false
  private _defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings[];
  public get defaultRouteSettings() {
    return this._defaultRouteSettings;
  }
  public set defaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings[] | undefined) {
    this._defaultRouteSettings = value;
  }

  // route_settings - computed: false, optional: true, required: false
  private _routeSettings?: Apigatewayv2StageRouteSettings[];
  public get routeSettings() {
    return this._routeSettings;
  }
  public set routeSettings(value: Apigatewayv2StageRouteSettings[] | undefined) {
    this._routeSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      auto_deploy: this._autoDeploy,
      client_certificate_id: this._clientCertificateId,
      deployment_id: this._deploymentId,
      description: this._description,
      name: this._name,
      stage_variables: this._stageVariables,
      tags: this._tags,
      access_log_settings: this._accessLogSettings,
      default_route_settings: this._defaultRouteSettings,
      route_settings: this._routeSettings,
    };
  }
}
