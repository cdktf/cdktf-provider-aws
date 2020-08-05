// https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html
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
      "authentication_type": {
        "type": "string",
        "required": true
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
      "schema": {
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
      "uris": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "xray_enabled": {
        "type": "bool",
        "optional": true
      }
    },
    "block_types": {
      "additional_authentication_provider": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "authentication_type": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "openid_connect_config": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "auth_ttl": {
                    "type": "number",
                    "optional": true
                  },
                  "client_id": {
                    "type": "string",
                    "optional": true
                  },
                  "iat_ttl": {
                    "type": "number",
                    "optional": true
                  },
                  "issuer": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "user_pool_config": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "app_id_client_regex": {
                    "type": "string",
                    "optional": true
                  },
                  "aws_region": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "user_pool_id": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        }
      },
      "log_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cloudwatch_logs_role_arn": {
              "type": "string",
              "required": true
            },
            "exclude_verbose_content": {
              "type": "bool",
              "optional": true
            },
            "field_log_level": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "openid_connect_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "auth_ttl": {
              "type": "number",
              "optional": true
            },
            "client_id": {
              "type": "string",
              "optional": true
            },
            "iat_ttl": {
              "type": "number",
              "optional": true
            },
            "issuer": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "user_pool_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "app_id_client_regex": {
              "type": "string",
              "optional": true
            },
            "aws_region": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "default_action": {
              "type": "string",
              "required": true
            },
            "user_pool_id": {
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
import { StringMap } from "cdktf";

// Configuration

export interface AppsyncGraphqlApiConfig extends TerraformMetaArguments {
  readonly authenticationType: string;
  readonly name: string;
  readonly schema?: string;
  readonly tags?: { [key: string]: string };
  readonly xrayEnabled?: boolean;
  /** additional_authentication_provider block */
  readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
  /** log_config block */
  readonly logConfig?: AppsyncGraphqlApiLogConfig[];
  /** openid_connect_config block */
  readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig[];
  /** user_pool_config block */
  readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig[];
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
  readonly authTtl?: number;
  readonly clientId?: string;
  readonly iatTtl?: number;
  readonly issuer: string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
  readonly appIdClientRegex?: string;
  readonly awsRegion?: string;
  readonly userPoolId: string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProvider {
  readonly authenticationType: string;
  /** openid_connect_config block */
  readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig[];
  /** user_pool_config block */
  readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig[];
}
export interface AppsyncGraphqlApiLogConfig {
  readonly cloudwatchLogsRoleArn: string;
  readonly excludeVerboseContent?: boolean;
  readonly fieldLogLevel: string;
}
export interface AppsyncGraphqlApiOpenidConnectConfig {
  readonly authTtl?: number;
  readonly clientId?: string;
  readonly iatTtl?: number;
  readonly issuer: string;
}
export interface AppsyncGraphqlApiUserPoolConfig {
  readonly appIdClientRegex?: string;
  readonly awsRegion?: string;
  readonly defaultAction: string;
  readonly userPoolId: string;
}

// Resource

export class AppsyncGraphqlApi extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppsyncGraphqlApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_graphql_api',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authenticationType = config.authenticationType;
    this._name = config.name;
    this._schema = config.schema;
    this._tags = config.tags;
    this._xrayEnabled = config.xrayEnabled;
    this._additionalAuthenticationProvider = config.additionalAuthenticationProvider;
    this._logConfig = config.logConfig;
    this._openidConnectConfig = config.openidConnectConfig;
    this._userPoolConfig = config.userPoolConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType: string;
  public get authenticationType() {
    return this._authenticationType;
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string;
  public get schema() {
    return this._schema;
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // uris - computed: true, optional: false, required: true
  public uris(key: string): string {
    return new StringMap(this, 'uris').lookup(key);
  }

  // xray_enabled - computed: false, optional: true, required: false
  private _xrayEnabled?: boolean;
  public get xrayEnabled() {
    return this._xrayEnabled;
  }
  public set xrayEnabled(value: boolean | undefined) {
    this._xrayEnabled = value;
  }

  // additional_authentication_provider - computed: false, optional: true, required: false
  private _additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
  public get additionalAuthenticationProvider() {
    return this._additionalAuthenticationProvider;
  }
  public set additionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | undefined) {
    this._additionalAuthenticationProvider = value;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: AppsyncGraphqlApiLogConfig[];
  public get logConfig() {
    return this._logConfig;
  }
  public set logConfig(value: AppsyncGraphqlApiLogConfig[] | undefined) {
    this._logConfig = value;
  }

  // openid_connect_config - computed: false, optional: true, required: false
  private _openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig[];
  public get openidConnectConfig() {
    return this._openidConnectConfig;
  }
  public set openidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig[] | undefined) {
    this._openidConnectConfig = value;
  }

  // user_pool_config - computed: false, optional: true, required: false
  private _userPoolConfig?: AppsyncGraphqlApiUserPoolConfig[];
  public get userPoolConfig() {
    return this._userPoolConfig;
  }
  public set userPoolConfig(value: AppsyncGraphqlApiUserPoolConfig[] | undefined) {
    this._userPoolConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_type: this._authenticationType,
      name: this._name,
      schema: this._schema,
      tags: this._tags,
      xray_enabled: this._xrayEnabled,
      additional_authentication_provider: this._additionalAuthenticationProvider,
      log_config: this._logConfig,
      openid_connect_config: this._openidConnectConfig,
      user_pool_config: this._userPoolConfig,
    };
  }
}
