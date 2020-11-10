// https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html
// generated from terraform resource schema

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
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string;
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string ) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // dynamodb_config - computed: false, optional: true, required: false
  private _dynamodbConfig?: AppsyncDatasourceDynamodbConfig[];
  public get dynamodbConfig() {
    return this.interpolationForAttribute('dynamodb_config') as any;
  }
  public set dynamodbConfig(value: AppsyncDatasourceDynamodbConfig[] ) {
    this._dynamodbConfig = value;
  }
  public resetDynamodbConfig() {
    this._dynamodbConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbConfigInput() {
    return this._dynamodbConfig
  }

  // elasticsearch_config - computed: false, optional: true, required: false
  private _elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig[];
  public get elasticsearchConfig() {
    return this.interpolationForAttribute('elasticsearch_config') as any;
  }
  public set elasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig[] ) {
    this._elasticsearchConfig = value;
  }
  public resetElasticsearchConfig() {
    this._elasticsearchConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigInput() {
    return this._elasticsearchConfig
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig?: AppsyncDatasourceHttpConfig[];
  public get httpConfig() {
    return this.interpolationForAttribute('http_config') as any;
  }
  public set httpConfig(value: AppsyncDatasourceHttpConfig[] ) {
    this._httpConfig = value;
  }
  public resetHttpConfig() {
    this._httpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig?: AppsyncDatasourceLambdaConfig[];
  public get lambdaConfig() {
    return this.interpolationForAttribute('lambda_config') as any;
  }
  public set lambdaConfig(value: AppsyncDatasourceLambdaConfig[] ) {
    this._lambdaConfig = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
