// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS AppSync
*/
export namespace AppSync {
  export interface AppsyncApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html#api_id AppsyncApiKey#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html#description AppsyncApiKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html#expires AppsyncApiKey#expires}
    */
    readonly expires?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html aws_appsync_api_key}
  */
  export class AppsyncApiKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appsync_api_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html aws_appsync_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncApiKeyConfig
    */
    public constructor(scope: Construct, id: string, config: AppsyncApiKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appsync_api_key',
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
      this._expires = config.expires;
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
      return this._apiId
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // expires - computed: false, optional: true, required: false
    private _expires?: string | undefined; 
    public get expires() {
      return this.getStringAttribute('expires');
    }
    public set expires(value: string | undefined) {
      this._expires = value;
    }
    public resetExpires() {
      this._expires = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiresInput() {
      return this._expires
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key - computed: true, optional: false, required: false
    public get key() {
      return this.getStringAttribute('key');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        description: cdktf.stringToTerraform(this._description),
        expires: cdktf.stringToTerraform(this._expires),
      };
    }
  }
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

  function appsyncDatasourceDynamodbConfigToTerraform(struct?: AppsyncDatasourceDynamodbConfigOutputReference | AppsyncDatasourceDynamodbConfig): any {
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

    // region - computed: true, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
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
      return this._tableName
    }

    // use_caller_credentials - computed: false, optional: true, required: false
    private _useCallerCredentials?: boolean | cdktf.IResolvable | undefined; 
    public get useCallerCredentials() {
      return this.getBooleanAttribute('use_caller_credentials') as any;
    }
    public set useCallerCredentials(value: boolean | cdktf.IResolvable | undefined) {
      this._useCallerCredentials = value;
    }
    public resetUseCallerCredentials() {
      this._useCallerCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCallerCredentialsInput() {
      return this._useCallerCredentials
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

  function appsyncDatasourceElasticsearchConfigToTerraform(struct?: AppsyncDatasourceElasticsearchConfigOutputReference | AppsyncDatasourceElasticsearchConfig): any {
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
      return this._endpoint
    }

    // region - computed: true, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }
  }
  export interface AppsyncDatasourceHttpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#endpoint AppsyncDatasource#endpoint}
    */
    readonly endpoint: string;
  }

  function appsyncDatasourceHttpConfigToTerraform(struct?: AppsyncDatasourceHttpConfigOutputReference | AppsyncDatasourceHttpConfig): any {
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
      return this._endpoint
    }
  }
  export interface AppsyncDatasourceLambdaConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html#function_arn AppsyncDatasource#function_arn}
    */
    readonly functionArn: string;
  }

  function appsyncDatasourceLambdaConfigToTerraform(struct?: AppsyncDatasourceLambdaConfigOutputReference | AppsyncDatasourceLambdaConfig): any {
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
      return this._functionArn
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
      this._dynamodbConfig = config.dynamodbConfig;
      this._elasticsearchConfig = config.elasticsearchConfig;
      this._httpConfig = config.httpConfig;
      this._lambdaConfig = config.lambdaConfig;
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
      return this._apiId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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
    private _serviceRoleArn?: string | undefined; 
    public get serviceRoleArn() {
      return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string | undefined) {
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
    private _type?: string; 
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
    private _dynamodbConfig?: AppsyncDatasourceDynamodbConfig | undefined; 
    private __dynamodbConfigOutput = new AppsyncDatasourceDynamodbConfigOutputReference(this as any, "dynamodb_config", true);
    public get dynamodbConfig() {
      return this.__dynamodbConfigOutput;
    }
    public putDynamodbConfig(value: AppsyncDatasourceDynamodbConfig | undefined) {
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
    private _elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig | undefined; 
    private __elasticsearchConfigOutput = new AppsyncDatasourceElasticsearchConfigOutputReference(this as any, "elasticsearch_config", true);
    public get elasticsearchConfig() {
      return this.__elasticsearchConfigOutput;
    }
    public putElasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig | undefined) {
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
    private _httpConfig?: AppsyncDatasourceHttpConfig | undefined; 
    private __httpConfigOutput = new AppsyncDatasourceHttpConfigOutputReference(this as any, "http_config", true);
    public get httpConfig() {
      return this.__httpConfigOutput;
    }
    public putHttpConfig(value: AppsyncDatasourceHttpConfig | undefined) {
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
    private _lambdaConfig?: AppsyncDatasourceLambdaConfig | undefined; 
    private __lambdaConfigOutput = new AppsyncDatasourceLambdaConfigOutputReference(this as any, "lambda_config", true);
    public get lambdaConfig() {
      return this.__lambdaConfigOutput;
    }
    public putLambdaConfig(value: AppsyncDatasourceLambdaConfig | undefined) {
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
        api_id: cdktf.stringToTerraform(this._apiId),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
        type: cdktf.stringToTerraform(this._type),
        dynamodb_config: appsyncDatasourceDynamodbConfigToTerraform(this._dynamodbConfig),
        elasticsearch_config: appsyncDatasourceElasticsearchConfigToTerraform(this._elasticsearchConfig),
        http_config: appsyncDatasourceHttpConfigToTerraform(this._httpConfig),
        lambda_config: appsyncDatasourceLambdaConfigToTerraform(this._lambdaConfig),
      };
    }
  }
  export interface AppsyncFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#api_id AppsyncFunction#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#data_source AppsyncFunction#data_source}
    */
    readonly dataSource: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#description AppsyncFunction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#function_version AppsyncFunction#function_version}
    */
    readonly functionVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#name AppsyncFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#request_mapping_template AppsyncFunction#request_mapping_template}
    */
    readonly requestMappingTemplate: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html#response_mapping_template AppsyncFunction#response_mapping_template}
    */
    readonly responseMappingTemplate: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html aws_appsync_function}
  */
  export class AppsyncFunction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appsync_function";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html aws_appsync_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncFunctionConfig
    */
    public constructor(scope: Construct, id: string, config: AppsyncFunctionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appsync_function',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._dataSource = config.dataSource;
      this._description = config.description;
      this._functionVersion = config.functionVersion;
      this._name = config.name;
      this._requestMappingTemplate = config.requestMappingTemplate;
      this._responseMappingTemplate = config.responseMappingTemplate;
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
      return this._apiId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // data_source - computed: false, optional: false, required: true
    private _dataSource?: string; 
    public get dataSource() {
      return this.getStringAttribute('data_source');
    }
    public set dataSource(value: string) {
      this._dataSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceInput() {
      return this._dataSource
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // function_id - computed: true, optional: false, required: false
    public get functionId() {
      return this.getStringAttribute('function_id');
    }

    // function_version - computed: false, optional: true, required: false
    private _functionVersion?: string | undefined; 
    public get functionVersion() {
      return this.getStringAttribute('function_version');
    }
    public set functionVersion(value: string | undefined) {
      this._functionVersion = value;
    }
    public resetFunctionVersion() {
      this._functionVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionVersionInput() {
      return this._functionVersion
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
      return this._name
    }

    // request_mapping_template - computed: false, optional: false, required: true
    private _requestMappingTemplate?: string; 
    public get requestMappingTemplate() {
      return this.getStringAttribute('request_mapping_template');
    }
    public set requestMappingTemplate(value: string) {
      this._requestMappingTemplate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMappingTemplateInput() {
      return this._requestMappingTemplate
    }

    // response_mapping_template - computed: false, optional: false, required: true
    private _responseMappingTemplate?: string; 
    public get responseMappingTemplate() {
      return this.getStringAttribute('response_mapping_template');
    }
    public set responseMappingTemplate(value: string) {
      this._responseMappingTemplate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get responseMappingTemplateInput() {
      return this._responseMappingTemplate
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        data_source: cdktf.stringToTerraform(this._dataSource),
        description: cdktf.stringToTerraform(this._description),
        function_version: cdktf.stringToTerraform(this._functionVersion),
        name: cdktf.stringToTerraform(this._name),
        request_mapping_template: cdktf.stringToTerraform(this._requestMappingTemplate),
        response_mapping_template: cdktf.stringToTerraform(this._responseMappingTemplate),
      };
    }
  }
  export interface AppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#name AppsyncGraphqlApi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#schema AppsyncGraphqlApi#schema}
    */
    readonly schema?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags AppsyncGraphqlApi#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#tags_all AppsyncGraphqlApi#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#xray_enabled AppsyncGraphqlApi#xray_enabled}
    */
    readonly xrayEnabled?: boolean | cdktf.IResolvable;
    /**
    * additional_authentication_provider block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}
    */
    readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
    /**
    * log_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#log_config AppsyncGraphqlApi#log_config}
    */
    readonly logConfig?: AppsyncGraphqlApiLogConfig;
    /**
    * openid_connect_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig;
    /**
    * user_pool_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
    */
    readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig;
  }
  export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}
    */
    readonly issuer: string;
  }

  function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
      client_id: cdktf.stringToTerraform(struct!.clientId),
      iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
      issuer: cdktf.stringToTerraform(struct!.issuer),
    }
  }

  export class AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auth_ttl - computed: false, optional: true, required: false
    private _authTtl?: number | undefined; 
    public get authTtl() {
      return this.getNumberAttribute('auth_ttl');
    }
    public set authTtl(value: number | undefined) {
      this._authTtl = value;
    }
    public resetAuthTtl() {
      this._authTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTtlInput() {
      return this._authTtl
    }

    // client_id - computed: false, optional: true, required: false
    private _clientId?: string | undefined; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string | undefined) {
      this._clientId = value;
    }
    public resetClientId() {
      this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // iat_ttl - computed: false, optional: true, required: false
    private _iatTtl?: number | undefined; 
    public get iatTtl() {
      return this.getNumberAttribute('iat_ttl');
    }
    public set iatTtl(value: number | undefined) {
      this._iatTtl = value;
    }
    public resetIatTtl() {
      this._iatTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iatTtlInput() {
      return this._iatTtl
    }

    // issuer - computed: false, optional: false, required: true
    private _issuer?: string; 
    public get issuer() {
      return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
      this._issuer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
      return this._issuer
    }
  }
  export interface AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}
    */
    readonly userPoolId: string;
  }

  function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
      aws_region: cdktf.stringToTerraform(struct!.awsRegion),
      user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
    }
  }

  export class AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // app_id_client_regex - computed: false, optional: true, required: false
    private _appIdClientRegex?: string | undefined; 
    public get appIdClientRegex() {
      return this.getStringAttribute('app_id_client_regex');
    }
    public set appIdClientRegex(value: string | undefined) {
      this._appIdClientRegex = value;
    }
    public resetAppIdClientRegex() {
      this._appIdClientRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdClientRegexInput() {
      return this._appIdClientRegex
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string | undefined; 
    public get awsRegion() {
      return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string | undefined) {
      this._awsRegion = value;
    }
    public resetAwsRegion() {
      this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
      return this._awsRegion
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }
  }
  export interface AppsyncGraphqlApiAdditionalAuthenticationProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#authentication_type AppsyncGraphqlApi#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * openid_connect_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
    /**
    * user_pool_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
    */
    readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
  }

  function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
      openid_connect_config: appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct!.openidConnectConfig),
      user_pool_config: appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct!.userPoolConfig),
    }
  }

  export interface AppsyncGraphqlApiLogConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}
    */
    readonly cloudwatchLogsRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}
    */
    readonly excludeVerboseContent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#field_log_level AppsyncGraphqlApi#field_log_level}
    */
    readonly fieldLogLevel: string;
  }

  function appsyncGraphqlApiLogConfigToTerraform(struct?: AppsyncGraphqlApiLogConfigOutputReference | AppsyncGraphqlApiLogConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsRoleArn),
      exclude_verbose_content: cdktf.booleanToTerraform(struct!.excludeVerboseContent),
      field_log_level: cdktf.stringToTerraform(struct!.fieldLogLevel),
    }
  }

  export class AppsyncGraphqlApiLogConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cloudwatch_logs_role_arn - computed: false, optional: false, required: true
    private _cloudwatchLogsRoleArn?: string; 
    public get cloudwatchLogsRoleArn() {
      return this.getStringAttribute('cloudwatch_logs_role_arn');
    }
    public set cloudwatchLogsRoleArn(value: string) {
      this._cloudwatchLogsRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsRoleArnInput() {
      return this._cloudwatchLogsRoleArn
    }

    // exclude_verbose_content - computed: false, optional: true, required: false
    private _excludeVerboseContent?: boolean | cdktf.IResolvable | undefined; 
    public get excludeVerboseContent() {
      return this.getBooleanAttribute('exclude_verbose_content') as any;
    }
    public set excludeVerboseContent(value: boolean | cdktf.IResolvable | undefined) {
      this._excludeVerboseContent = value;
    }
    public resetExcludeVerboseContent() {
      this._excludeVerboseContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeVerboseContentInput() {
      return this._excludeVerboseContent
    }

    // field_log_level - computed: false, optional: false, required: true
    private _fieldLogLevel?: string; 
    public get fieldLogLevel() {
      return this.getStringAttribute('field_log_level');
    }
    public set fieldLogLevel(value: string) {
      this._fieldLogLevel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldLogLevelInput() {
      return this._fieldLogLevel
    }
  }
  export interface AppsyncGraphqlApiOpenidConnectConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#auth_ttl AppsyncGraphqlApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#client_id AppsyncGraphqlApi#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#iat_ttl AppsyncGraphqlApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#issuer AppsyncGraphqlApi#issuer}
    */
    readonly issuer: string;
  }

  function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfigOutputReference | AppsyncGraphqlApiOpenidConnectConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
      client_id: cdktf.stringToTerraform(struct!.clientId),
      iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
      issuer: cdktf.stringToTerraform(struct!.issuer),
    }
  }

  export class AppsyncGraphqlApiOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auth_ttl - computed: false, optional: true, required: false
    private _authTtl?: number | undefined; 
    public get authTtl() {
      return this.getNumberAttribute('auth_ttl');
    }
    public set authTtl(value: number | undefined) {
      this._authTtl = value;
    }
    public resetAuthTtl() {
      this._authTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTtlInput() {
      return this._authTtl
    }

    // client_id - computed: false, optional: true, required: false
    private _clientId?: string | undefined; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string | undefined) {
      this._clientId = value;
    }
    public resetClientId() {
      this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // iat_ttl - computed: false, optional: true, required: false
    private _iatTtl?: number | undefined; 
    public get iatTtl() {
      return this.getNumberAttribute('iat_ttl');
    }
    public set iatTtl(value: number | undefined) {
      this._iatTtl = value;
    }
    public resetIatTtl() {
      this._iatTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iatTtlInput() {
      return this._iatTtl
    }

    // issuer - computed: false, optional: false, required: true
    private _issuer?: string; 
    public get issuer() {
      return this.getStringAttribute('issuer');
    }
    public set issuer(value: string) {
      this._issuer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
      return this._issuer
    }
  }
  export interface AppsyncGraphqlApiUserPoolConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#aws_region AppsyncGraphqlApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#default_action AppsyncGraphqlApi#default_action}
    */
    readonly defaultAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_id AppsyncGraphqlApi#user_pool_id}
    */
    readonly userPoolId: string;
  }

  function appsyncGraphqlApiUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiUserPoolConfigOutputReference | AppsyncGraphqlApiUserPoolConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
      aws_region: cdktf.stringToTerraform(struct!.awsRegion),
      default_action: cdktf.stringToTerraform(struct!.defaultAction),
      user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
    }
  }

  export class AppsyncGraphqlApiUserPoolConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // app_id_client_regex - computed: false, optional: true, required: false
    private _appIdClientRegex?: string | undefined; 
    public get appIdClientRegex() {
      return this.getStringAttribute('app_id_client_regex');
    }
    public set appIdClientRegex(value: string | undefined) {
      this._appIdClientRegex = value;
    }
    public resetAppIdClientRegex() {
      this._appIdClientRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdClientRegexInput() {
      return this._appIdClientRegex
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string | undefined; 
    public get awsRegion() {
      return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string | undefined) {
      this._awsRegion = value;
    }
    public resetAwsRegion() {
      this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
      return this._awsRegion
    }

    // default_action - computed: false, optional: false, required: true
    private _defaultAction?: string; 
    public get defaultAction() {
      return this.getStringAttribute('default_action');
    }
    public set defaultAction(value: string) {
      this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionInput() {
      return this._defaultAction
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
      this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
      return this._userPoolId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api}
  */
  export class AppsyncGraphqlApi extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appsync_graphql_api";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncGraphqlApiConfig
    */
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
      this._tagsAll = config.tagsAll;
      this._xrayEnabled = config.xrayEnabled;
      this._additionalAuthenticationProvider = config.additionalAuthenticationProvider;
      this._logConfig = config.logConfig;
      this._openidConnectConfig = config.openidConnectConfig;
      this._userPoolConfig = config.userPoolConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // authentication_type - computed: false, optional: false, required: true
    private _authenticationType?: string; 
    public get authenticationType() {
      return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
      this._authenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
      return this._authenticationType
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
      return this._name
    }

    // schema - computed: false, optional: true, required: false
    private _schema?: string | undefined; 
    public get schema() {
      return this.getStringAttribute('schema');
    }
    public set schema(value: string | undefined) {
      this._schema = value;
    }
    public resetSchema() {
      this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
      return this._schema
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // uris - computed: true, optional: false, required: false
    public uris(key: string): string {
      return new cdktf.StringMap(this, 'uris').lookup(key);
    }

    // xray_enabled - computed: false, optional: true, required: false
    private _xrayEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get xrayEnabled() {
      return this.getBooleanAttribute('xray_enabled') as any;
    }
    public set xrayEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._xrayEnabled = value;
    }
    public resetXrayEnabled() {
      this._xrayEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xrayEnabledInput() {
      return this._xrayEnabled
    }

    // additional_authentication_provider - computed: false, optional: true, required: false
    private _additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | undefined; 
    public get additionalAuthenticationProvider() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('additional_authentication_provider') as any;
    }
    public set additionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | undefined) {
      this._additionalAuthenticationProvider = value;
    }
    public resetAdditionalAuthenticationProvider() {
      this._additionalAuthenticationProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalAuthenticationProviderInput() {
      return this._additionalAuthenticationProvider
    }

    // log_config - computed: false, optional: true, required: false
    private _logConfig?: AppsyncGraphqlApiLogConfig | undefined; 
    private __logConfigOutput = new AppsyncGraphqlApiLogConfigOutputReference(this as any, "log_config", true);
    public get logConfig() {
      return this.__logConfigOutput;
    }
    public putLogConfig(value: AppsyncGraphqlApiLogConfig | undefined) {
      this._logConfig = value;
    }
    public resetLogConfig() {
      this._logConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigInput() {
      return this._logConfig
    }

    // openid_connect_config - computed: false, optional: true, required: false
    private _openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig | undefined; 
    private __openidConnectConfigOutput = new AppsyncGraphqlApiOpenidConnectConfigOutputReference(this as any, "openid_connect_config", true);
    public get openidConnectConfig() {
      return this.__openidConnectConfigOutput;
    }
    public putOpenidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig | undefined) {
      this._openidConnectConfig = value;
    }
    public resetOpenidConnectConfig() {
      this._openidConnectConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openidConnectConfigInput() {
      return this._openidConnectConfig
    }

    // user_pool_config - computed: false, optional: true, required: false
    private _userPoolConfig?: AppsyncGraphqlApiUserPoolConfig | undefined; 
    private __userPoolConfigOutput = new AppsyncGraphqlApiUserPoolConfigOutputReference(this as any, "user_pool_config", true);
    public get userPoolConfig() {
      return this.__userPoolConfigOutput;
    }
    public putUserPoolConfig(value: AppsyncGraphqlApiUserPoolConfig | undefined) {
      this._userPoolConfig = value;
    }
    public resetUserPoolConfig() {
      this._userPoolConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolConfigInput() {
      return this._userPoolConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        authentication_type: cdktf.stringToTerraform(this._authenticationType),
        name: cdktf.stringToTerraform(this._name),
        schema: cdktf.stringToTerraform(this._schema),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        xray_enabled: cdktf.booleanToTerraform(this._xrayEnabled),
        additional_authentication_provider: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform)(this._additionalAuthenticationProvider),
        log_config: appsyncGraphqlApiLogConfigToTerraform(this._logConfig),
        openid_connect_config: appsyncGraphqlApiOpenidConnectConfigToTerraform(this._openidConnectConfig),
        user_pool_config: appsyncGraphqlApiUserPoolConfigToTerraform(this._userPoolConfig),
      };
    }
  }
  export interface AppsyncResolverConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#api_id AppsyncResolver#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#data_source AppsyncResolver#data_source}
    */
    readonly dataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#field AppsyncResolver#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#kind AppsyncResolver#kind}
    */
    readonly kind?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#request_template AppsyncResolver#request_template}
    */
    readonly requestTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#response_template AppsyncResolver#response_template}
    */
    readonly responseTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#type AppsyncResolver#type}
    */
    readonly type: string;
    /**
    * caching_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#caching_config AppsyncResolver#caching_config}
    */
    readonly cachingConfig?: AppsyncResolverCachingConfig;
    /**
    * pipeline_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#pipeline_config AppsyncResolver#pipeline_config}
    */
    readonly pipelineConfig?: AppsyncResolverPipelineConfig;
  }
  export interface AppsyncResolverCachingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#caching_keys AppsyncResolver#caching_keys}
    */
    readonly cachingKeys?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#ttl AppsyncResolver#ttl}
    */
    readonly ttl?: number;
  }

  function appsyncResolverCachingConfigToTerraform(struct?: AppsyncResolverCachingConfigOutputReference | AppsyncResolverCachingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      caching_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachingKeys),
      ttl: cdktf.numberToTerraform(struct!.ttl),
    }
  }

  export class AppsyncResolverCachingConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // caching_keys - computed: false, optional: true, required: false
    private _cachingKeys?: string[] | undefined; 
    public get cachingKeys() {
      return this.getListAttribute('caching_keys');
    }
    public set cachingKeys(value: string[] | undefined) {
      this._cachingKeys = value;
    }
    public resetCachingKeys() {
      this._cachingKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachingKeysInput() {
      return this._cachingKeys
    }

    // ttl - computed: false, optional: true, required: false
    private _ttl?: number | undefined; 
    public get ttl() {
      return this.getNumberAttribute('ttl');
    }
    public set ttl(value: number | undefined) {
      this._ttl = value;
    }
    public resetTtl() {
      this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
      return this._ttl
    }
  }
  export interface AppsyncResolverPipelineConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#functions AppsyncResolver#functions}
    */
    readonly functions?: string[];
  }

  function appsyncResolverPipelineConfigToTerraform(struct?: AppsyncResolverPipelineConfigOutputReference | AppsyncResolverPipelineConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      functions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.functions),
    }
  }

  export class AppsyncResolverPipelineConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // functions - computed: false, optional: true, required: false
    private _functions?: string[] | undefined; 
    public get functions() {
      return this.getListAttribute('functions');
    }
    public set functions(value: string[] | undefined) {
      this._functions = value;
    }
    public resetFunctions() {
      this._functions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionsInput() {
      return this._functions
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver}
  */
  export class AppsyncResolver extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appsync_resolver";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncResolverConfig
    */
    public constructor(scope: Construct, id: string, config: AppsyncResolverConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appsync_resolver',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._dataSource = config.dataSource;
      this._field = config.field;
      this._kind = config.kind;
      this._requestTemplate = config.requestTemplate;
      this._responseTemplate = config.responseTemplate;
      this._type = config.type;
      this._cachingConfig = config.cachingConfig;
      this._pipelineConfig = config.pipelineConfig;
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
      return this._apiId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // data_source - computed: false, optional: true, required: false
    private _dataSource?: string | undefined; 
    public get dataSource() {
      return this.getStringAttribute('data_source');
    }
    public set dataSource(value: string | undefined) {
      this._dataSource = value;
    }
    public resetDataSource() {
      this._dataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceInput() {
      return this._dataSource
    }

    // field - computed: false, optional: false, required: true
    private _field?: string; 
    public get field() {
      return this.getStringAttribute('field');
    }
    public set field(value: string) {
      this._field = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldInput() {
      return this._field
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kind - computed: false, optional: true, required: false
    private _kind?: string | undefined; 
    public get kind() {
      return this.getStringAttribute('kind');
    }
    public set kind(value: string | undefined) {
      this._kind = value;
    }
    public resetKind() {
      this._kind = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kindInput() {
      return this._kind
    }

    // request_template - computed: false, optional: true, required: false
    private _requestTemplate?: string | undefined; 
    public get requestTemplate() {
      return this.getStringAttribute('request_template');
    }
    public set requestTemplate(value: string | undefined) {
      this._requestTemplate = value;
    }
    public resetRequestTemplate() {
      this._requestTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestTemplateInput() {
      return this._requestTemplate
    }

    // response_template - computed: false, optional: true, required: false
    private _responseTemplate?: string | undefined; 
    public get responseTemplate() {
      return this.getStringAttribute('response_template');
    }
    public set responseTemplate(value: string | undefined) {
      this._responseTemplate = value;
    }
    public resetResponseTemplate() {
      this._responseTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTemplateInput() {
      return this._responseTemplate
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
      return this._type
    }

    // caching_config - computed: false, optional: true, required: false
    private _cachingConfig?: AppsyncResolverCachingConfig | undefined; 
    private __cachingConfigOutput = new AppsyncResolverCachingConfigOutputReference(this as any, "caching_config", true);
    public get cachingConfig() {
      return this.__cachingConfigOutput;
    }
    public putCachingConfig(value: AppsyncResolverCachingConfig | undefined) {
      this._cachingConfig = value;
    }
    public resetCachingConfig() {
      this._cachingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachingConfigInput() {
      return this._cachingConfig
    }

    // pipeline_config - computed: false, optional: true, required: false
    private _pipelineConfig?: AppsyncResolverPipelineConfig | undefined; 
    private __pipelineConfigOutput = new AppsyncResolverPipelineConfigOutputReference(this as any, "pipeline_config", true);
    public get pipelineConfig() {
      return this.__pipelineConfigOutput;
    }
    public putPipelineConfig(value: AppsyncResolverPipelineConfig | undefined) {
      this._pipelineConfig = value;
    }
    public resetPipelineConfig() {
      this._pipelineConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineConfigInput() {
      return this._pipelineConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        data_source: cdktf.stringToTerraform(this._dataSource),
        field: cdktf.stringToTerraform(this._field),
        kind: cdktf.stringToTerraform(this._kind),
        request_template: cdktf.stringToTerraform(this._requestTemplate),
        response_template: cdktf.stringToTerraform(this._responseTemplate),
        type: cdktf.stringToTerraform(this._type),
        caching_config: appsyncResolverCachingConfigToTerraform(this._cachingConfig),
        pipeline_config: appsyncResolverPipelineConfigToTerraform(this._pipelineConfig),
      };
    }
  }
}
