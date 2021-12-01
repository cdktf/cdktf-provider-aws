// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS AppSync
*/
export interface AppsyncDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#api_id AppsyncDatasource#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#description AppsyncDatasource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#name AppsyncDatasource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#service_role_arn AppsyncDatasource#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#type AppsyncDatasource#type}
  */
  readonly type: string;
  /**
  * dynamodb_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#dynamodb_config AppsyncDatasource#dynamodb_config}
  */
  readonly dynamodbConfig?: AppsyncDatasourceDynamodbConfig;
  /**
  * elasticsearch_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#elasticsearch_config AppsyncDatasource#elasticsearch_config}
  */
  readonly elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig;
  /**
  * http_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#http_config AppsyncDatasource#http_config}
  */
  readonly httpConfig?: AppsyncDatasourceHttpConfig;
  /**
  * lambda_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#lambda_config AppsyncDatasource#lambda_config}
  */
  readonly lambdaConfig?: AppsyncDatasourceLambdaConfig;
}
export interface AppsyncDatasourceDynamodbConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#region AppsyncDatasource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#table_name AppsyncDatasource#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#use_caller_credentials AppsyncDatasource#use_caller_credentials}
  */
  readonly useCallerCredentials?: boolean | cdktf.IResolvable;
}

export function appsyncDatasourceDynamodbConfigToTerraform(struct?: AppsyncDatasourceDynamodbConfigOutputReference | AppsyncDatasourceDynamodbConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    use_caller_credentials: cdktf.booleanToTerraform(struct!.useCallerCredentials),
  }
}

export class AppsyncDatasourceDynamodbConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncDatasourceDynamodbConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._region) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tableName) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._useCallerCredentials) {
      hasAnyValues = true;
      internalValueResult.useCallerCredentials = this._useCallerCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceDynamodbConfig | undefined) {
    if (value === undefined) {
      this._region = undefined;
      this._tableName = undefined;
      this._useCallerCredentials = undefined;
    }
    else {
      this._region = value.region;
      this._tableName = value.tableName;
      this._useCallerCredentials = value.useCallerCredentials;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // use_caller_credentials - computed: false, optional: true, required: false
  private _useCallerCredentials?: boolean | cdktf.IResolvable; 
  public get useCallerCredentials() {
    return this.getBooleanAttribute('use_caller_credentials') as any;
  }
  public set useCallerCredentials(value: boolean | cdktf.IResolvable) {
    this._useCallerCredentials = value;
  }
  public resetUseCallerCredentials() {
    this._useCallerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCallerCredentialsInput() {
    return this._useCallerCredentials;
  }
}
export interface AppsyncDatasourceElasticsearchConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#endpoint AppsyncDatasource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#region AppsyncDatasource#region}
  */
  readonly region?: string;
}

export function appsyncDatasourceElasticsearchConfigToTerraform(struct?: AppsyncDatasourceElasticsearchConfigOutputReference | AppsyncDatasourceElasticsearchConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class AppsyncDatasourceElasticsearchConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncDatasourceElasticsearchConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._endpoint) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceElasticsearchConfig | undefined) {
    if (value === undefined) {
      this._endpoint = undefined;
      this._region = undefined;
    }
    else {
      this._endpoint = value.endpoint;
      this._region = value.region;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface AppsyncDatasourceHttpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#endpoint AppsyncDatasource#endpoint}
  */
  readonly endpoint: string;
}

export function appsyncDatasourceHttpConfigToTerraform(struct?: AppsyncDatasourceHttpConfigOutputReference | AppsyncDatasourceHttpConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}

export class AppsyncDatasourceHttpConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncDatasourceHttpConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._endpoint) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceHttpConfig | undefined) {
    if (value === undefined) {
      this._endpoint = undefined;
    }
    else {
      this._endpoint = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface AppsyncDatasourceLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#function_arn AppsyncDatasource#function_arn}
  */
  readonly functionArn: string;
}

export function appsyncDatasourceLambdaConfigToTerraform(struct?: AppsyncDatasourceLambdaConfigOutputReference | AppsyncDatasourceLambdaConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export class AppsyncDatasourceLambdaConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncDatasourceLambdaConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._functionArn) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceLambdaConfig | undefined) {
    if (value === undefined) {
      this._functionArn = undefined;
    }
    else {
      this._functionArn = value.functionArn;
    }
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource}
*/
export class AppsyncDatasource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appsync_datasource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncDatasourceConfig
  */
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
    this._dynamodbConfig.internalValue = config.dynamodbConfig;
    this._elasticsearchConfig.internalValue = config.elasticsearchConfig;
    this._httpConfig.internalValue = config.httpConfig;
    this._lambdaConfig.internalValue = config.lambdaConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dynamodb_config - computed: false, optional: true, required: false
  private _dynamodbConfig = new AppsyncDatasourceDynamodbConfigOutputReference(this as any, "dynamodb_config", true);
  public get dynamodbConfig() {
    return this._dynamodbConfig;
  }
  public putDynamodbConfig(value: AppsyncDatasourceDynamodbConfig) {
    this._dynamodbConfig.internalValue = value;
  }
  public resetDynamodbConfig() {
    this._dynamodbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbConfigInput() {
    return this._dynamodbConfig.internalValue;
  }

  // elasticsearch_config - computed: false, optional: true, required: false
  private _elasticsearchConfig = new AppsyncDatasourceElasticsearchConfigOutputReference(this as any, "elasticsearch_config", true);
  public get elasticsearchConfig() {
    return this._elasticsearchConfig;
  }
  public putElasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig) {
    this._elasticsearchConfig.internalValue = value;
  }
  public resetElasticsearchConfig() {
    this._elasticsearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigInput() {
    return this._elasticsearchConfig.internalValue;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new AppsyncDatasourceHttpConfigOutputReference(this as any, "http_config", true);
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: AppsyncDatasourceHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new AppsyncDatasourceLambdaConfigOutputReference(this as any, "lambda_config", true);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: AppsyncDatasourceLambdaConfig) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      type: cdktf.stringToTerraform(this._type),
      dynamodb_config: appsyncDatasourceDynamodbConfigToTerraform(this._dynamodbConfig.internalValue),
      elasticsearch_config: appsyncDatasourceElasticsearchConfigToTerraform(this._elasticsearchConfig.internalValue),
      http_config: appsyncDatasourceHttpConfigToTerraform(this._httpConfig.internalValue),
      lambda_config: appsyncDatasourceLambdaConfigToTerraform(this._lambdaConfig.internalValue),
    };
  }
}
