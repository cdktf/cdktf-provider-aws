// https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html
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
      "description": {
        "type": "string",
        "optional": true
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
      "service_role_arn": {
        "type": "string",
        "optional": true
      },
      "type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "dynamodb_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "region": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "table_name": {
              "type": "string",
              "required": true
            },
            "use_caller_credentials": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "elasticsearch_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "endpoint": {
              "type": "string",
              "required": true
            },
            "region": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "http_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "endpoint": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "lambda_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "function_arn": {
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

export interface AppsyncDatasourceConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly description?: string;
  readonly name: string;
  readonly serviceRoleArn?: string;
  readonly type: string;
  /** dynamodb_config block */
  readonly dynamodbConfig?: AppsyncDatasourceDynamodbConfig[];
  /** elasticsearch_config block */
  readonly elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig[];
  /** http_config block */
  readonly httpConfig?: AppsyncDatasourceHttpConfig[];
  /** lambda_config block */
  readonly lambdaConfig?: AppsyncDatasourceLambdaConfig[];
}
export interface AppsyncDatasourceDynamodbConfig {
  readonly region?: string;
  readonly tableName: string;
  readonly useCallerCredentials?: boolean;
}
export interface AppsyncDatasourceElasticsearchConfig {
  readonly endpoint: string;
  readonly region?: string;
}
export interface AppsyncDatasourceHttpConfig {
  readonly endpoint: string;
}
export interface AppsyncDatasourceLambdaConfig {
  readonly functionArn: string;
}

// Resource

export class AppsyncDatasource extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppsyncDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_datasource',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._description = config.description;
    this._name = config.name;
    this._serviceRoleArn = config.serviceRoleArn;
    this._type = config.type;
    this._dynamodbConfig = config.dynamodbConfig;
    this._elasticsearchConfig = config.elasticsearchConfig;
    this._httpConfig = config.httpConfig;
    this._lambdaConfig = config.lambdaConfig;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string;
  public get serviceRoleArn() {
    return this._serviceRoleArn;
  }
  public set serviceRoleArn(value: string | undefined) {
    this._serviceRoleArn = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // dynamodb_config - computed: false, optional: true, required: false
  private _dynamodbConfig?: AppsyncDatasourceDynamodbConfig[];
  public get dynamodbConfig() {
    return this._dynamodbConfig;
  }
  public set dynamodbConfig(value: AppsyncDatasourceDynamodbConfig[] | undefined) {
    this._dynamodbConfig = value;
  }

  // elasticsearch_config - computed: false, optional: true, required: false
  private _elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig[];
  public get elasticsearchConfig() {
    return this._elasticsearchConfig;
  }
  public set elasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig[] | undefined) {
    this._elasticsearchConfig = value;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig?: AppsyncDatasourceHttpConfig[];
  public get httpConfig() {
    return this._httpConfig;
  }
  public set httpConfig(value: AppsyncDatasourceHttpConfig[] | undefined) {
    this._httpConfig = value;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig?: AppsyncDatasourceLambdaConfig[];
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public set lambdaConfig(value: AppsyncDatasourceLambdaConfig[] | undefined) {
    this._lambdaConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      description: this._description,
      name: this._name,
      service_role_arn: this._serviceRoleArn,
      type: this._type,
      dynamodb_config: this._dynamodbConfig,
      elasticsearch_config: this._elasticsearchConfig,
      http_config: this._httpConfig,
      lambda_config: this._lambdaConfig,
    };
  }
}
