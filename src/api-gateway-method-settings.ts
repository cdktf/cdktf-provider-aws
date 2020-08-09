// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "method_path": {
        "type": "string",
        "required": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "stage_name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "settings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cache_data_encrypted": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "cache_ttl_in_seconds": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "caching_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "data_trace_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "logging_level": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "metrics_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "require_authorization_for_cache_control": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "throttling_burst_limit": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "throttling_rate_limit": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "unauthorized_cache_control_header_strategy": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "min_items": 1,
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

export interface ApiGatewayMethodSettingsConfig extends TerraformMetaArguments {
  readonly methodPath: string;
  readonly restApiId: string;
  readonly stageName: string;
  /** settings block */
  readonly settings: ApiGatewayMethodSettingsSettings[];
}
export interface ApiGatewayMethodSettingsSettings {
  readonly cacheDataEncrypted?: boolean;
  readonly cacheTtlInSeconds?: number;
  readonly cachingEnabled?: boolean;
  readonly dataTraceEnabled?: boolean;
  readonly loggingLevel?: string;
  readonly metricsEnabled?: boolean;
  readonly requireAuthorizationForCacheControl?: boolean;
  readonly throttlingBurstLimit?: number;
  readonly throttlingRateLimit?: number;
  readonly unauthorizedCacheControlHeaderStrategy?: string;
}

// Resource

export class ApiGatewayMethodSettings extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._methodPath = config.methodPath;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // method_path - computed: false, optional: false, required: true
  private _methodPath: string;
  public get methodPath() {
    return this._methodPath;
  }
  public set methodPath(value: string) {
    this._methodPath = value;
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

  // settings - computed: false, optional: false, required: true
  private _settings: ApiGatewayMethodSettingsSettings[];
  public get settings() {
    return this._settings;
  }
  public set settings(value: ApiGatewayMethodSettingsSettings[]) {
    this._settings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      method_path: this._methodPath,
      rest_api_id: this._restApiId,
      stage_name: this._stageName,
      settings: this._settings,
    };
  }
}
