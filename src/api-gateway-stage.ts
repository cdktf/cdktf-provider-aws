// https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "cache_cluster_enabled": {
        "type": "bool",
        "optional": true
      },
      "cache_cluster_size": {
        "type": "string",
        "optional": true
      },
      "client_certificate_id": {
        "type": "string",
        "optional": true
      },
      "deployment_id": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "documentation_version": {
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
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "stage_name": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "variables": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "xray_tracing_enabled": {
        "type": "bool",
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayStageConfig extends TerraformMetaArguments {
  readonly cacheClusterEnabled?: boolean;
  readonly cacheClusterSize?: string;
  readonly clientCertificateId?: string;
  readonly deploymentId: string;
  readonly description?: string;
  readonly documentationVersion?: string;
  readonly restApiId: string;
  readonly stageName: string;
  readonly tags?: { [key: string]: string };
  readonly variables?: { [key: string]: string };
  readonly xrayTracingEnabled?: boolean;
  /** access_log_settings block */
  readonly accessLogSettings?: ApiGatewayStageAccessLogSettings[];
}
export interface ApiGatewayStageAccessLogSettings {
  readonly destinationArn: string;
  readonly format: string;
}

// Resource

export class ApiGatewayStage extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayStageConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_stage',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheClusterEnabled = config.cacheClusterEnabled;
    this._cacheClusterSize = config.cacheClusterSize;
    this._clientCertificateId = config.clientCertificateId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._documentationVersion = config.documentationVersion;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
    this._tags = config.tags;
    this._variables = config.variables;
    this._xrayTracingEnabled = config.xrayTracingEnabled;
    this._accessLogSettings = config.accessLogSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cache_cluster_enabled - computed: false, optional: true, required: false
  private _cacheClusterEnabled?: boolean;
  public get cacheClusterEnabled() {
    return this._cacheClusterEnabled;
  }
  public set cacheClusterEnabled(value: boolean | undefined) {
    this._cacheClusterEnabled = value;
  }

  // cache_cluster_size - computed: false, optional: true, required: false
  private _cacheClusterSize?: string;
  public get cacheClusterSize() {
    return this._cacheClusterSize;
  }
  public set cacheClusterSize(value: string | undefined) {
    this._cacheClusterSize = value;
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string;
  public get clientCertificateId() {
    return this._clientCertificateId;
  }
  public set clientCertificateId(value: string | undefined) {
    this._clientCertificateId = value;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this._deploymentId;
  }
  public set deploymentId(value: string) {
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

  // documentation_version - computed: false, optional: true, required: false
  private _documentationVersion?: string;
  public get documentationVersion() {
    return this._documentationVersion;
  }
  public set documentationVersion(value: string | undefined) {
    this._documentationVersion = value;
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

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // stage_name - computed: false, optional: false, required: true
  private _stageName: string;
  public get stageName() {
    return this._stageName;
  }
  public set stageName(value: string) {
    this._stageName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string };
  public get variables() {
    return this._variables;
  }
  public set variables(value: { [key: string]: string } | undefined) {
    this._variables = value;
  }

  // xray_tracing_enabled - computed: false, optional: true, required: false
  private _xrayTracingEnabled?: boolean;
  public get xrayTracingEnabled() {
    return this._xrayTracingEnabled;
  }
  public set xrayTracingEnabled(value: boolean | undefined) {
    this._xrayTracingEnabled = value;
  }

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings?: ApiGatewayStageAccessLogSettings[];
  public get accessLogSettings() {
    return this._accessLogSettings;
  }
  public set accessLogSettings(value: ApiGatewayStageAccessLogSettings[] | undefined) {
    this._accessLogSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_cluster_enabled: this._cacheClusterEnabled,
      cache_cluster_size: this._cacheClusterSize,
      client_certificate_id: this._clientCertificateId,
      deployment_id: this._deploymentId,
      description: this._description,
      documentation_version: this._documentationVersion,
      rest_api_id: this._restApiId,
      stage_name: this._stageName,
      tags: this._tags,
      variables: this._variables,
      xray_tracing_enabled: this._xrayTracingEnabled,
      access_log_settings: this._accessLogSettings,
    };
  }
}
