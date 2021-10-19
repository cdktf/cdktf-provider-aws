// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export namespace APIGatewayV2 {
  export interface Apigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}
    */
    readonly apiKeySelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#body Apigatewayv2Api#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#credentials_arn Apigatewayv2Api#credentials_arn}
    */
    readonly credentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#description Apigatewayv2Api#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}
    */
    readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#fail_on_warnings Apigatewayv2Api#fail_on_warnings}
    */
    readonly failOnWarnings?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#name Apigatewayv2Api#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#protocol_type Apigatewayv2Api#protocol_type}
    */
    readonly protocolType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#route_key Apigatewayv2Api#route_key}
    */
    readonly routeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#route_selection_expression Apigatewayv2Api#route_selection_expression}
    */
    readonly routeSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#tags Apigatewayv2Api#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#tags_all Apigatewayv2Api#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#target Apigatewayv2Api#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#version Apigatewayv2Api#version}
    */
    readonly version?: string;
    /**
    * cors_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#cors_configuration Apigatewayv2Api#cors_configuration}
    */
    readonly corsConfiguration?: Apigatewayv2ApiCorsConfiguration;
  }
  export interface Apigatewayv2ApiCorsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_credentials Apigatewayv2Api#allow_credentials}
    */
    readonly allowCredentials?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_headers Apigatewayv2Api#allow_headers}
    */
    readonly allowHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_methods Apigatewayv2Api#allow_methods}
    */
    readonly allowMethods?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#allow_origins Apigatewayv2Api#allow_origins}
    */
    readonly allowOrigins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#expose_headers Apigatewayv2Api#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html#max_age Apigatewayv2Api#max_age}
    */
    readonly maxAge?: number;
  }

  function apigatewayv2ApiCorsConfigurationToTerraform(struct?: Apigatewayv2ApiCorsConfigurationOutputReference | Apigatewayv2ApiCorsConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
      allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
      allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
      allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
      expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
      max_age: cdktf.numberToTerraform(struct!.maxAge),
    }
  }

  export class Apigatewayv2ApiCorsConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // allow_credentials - computed: false, optional: true, required: false
    private _allowCredentials?: boolean | cdktf.IResolvable | undefined; 
    public get allowCredentials() {
      return this.getBooleanAttribute('allow_credentials') as any;
    }
    public set allowCredentials(value: boolean | cdktf.IResolvable | undefined) {
      this._allowCredentials = value;
    }
    public resetAllowCredentials() {
      this._allowCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowCredentialsInput() {
      return this._allowCredentials
    }

    // allow_headers - computed: false, optional: true, required: false
    private _allowHeaders?: string[] | undefined; 
    public get allowHeaders() {
      return this.getListAttribute('allow_headers');
    }
    public set allowHeaders(value: string[] | undefined) {
      this._allowHeaders = value;
    }
    public resetAllowHeaders() {
      this._allowHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowHeadersInput() {
      return this._allowHeaders
    }

    // allow_methods - computed: false, optional: true, required: false
    private _allowMethods?: string[] | undefined; 
    public get allowMethods() {
      return this.getListAttribute('allow_methods');
    }
    public set allowMethods(value: string[] | undefined) {
      this._allowMethods = value;
    }
    public resetAllowMethods() {
      this._allowMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMethodsInput() {
      return this._allowMethods
    }

    // allow_origins - computed: false, optional: true, required: false
    private _allowOrigins?: string[] | undefined; 
    public get allowOrigins() {
      return this.getListAttribute('allow_origins');
    }
    public set allowOrigins(value: string[] | undefined) {
      this._allowOrigins = value;
    }
    public resetAllowOrigins() {
      this._allowOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowOriginsInput() {
      return this._allowOrigins
    }

    // expose_headers - computed: false, optional: true, required: false
    private _exposeHeaders?: string[] | undefined; 
    public get exposeHeaders() {
      return this.getListAttribute('expose_headers');
    }
    public set exposeHeaders(value: string[] | undefined) {
      this._exposeHeaders = value;
    }
    public resetExposeHeaders() {
      this._exposeHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exposeHeadersInput() {
      return this._exposeHeaders
    }

    // max_age - computed: false, optional: true, required: false
    private _maxAge?: number | undefined; 
    public get maxAge() {
      return this.getNumberAttribute('max_age');
    }
    public set maxAge(value: number | undefined) {
      this._maxAge = value;
    }
    public resetMaxAge() {
      this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAgeInput() {
      return this._maxAge
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api}
  */
  export class Apigatewayv2Api extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_api";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ApiConfig
    */
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
      this._body = config.body;
      this._credentialsArn = config.credentialsArn;
      this._description = config.description;
      this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
      this._failOnWarnings = config.failOnWarnings;
      this._name = config.name;
      this._protocolType = config.protocolType;
      this._routeKey = config.routeKey;
      this._routeSelectionExpression = config.routeSelectionExpression;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._target = config.target;
      this._version = config.version;
      this._corsConfiguration = config.corsConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_endpoint - computed: true, optional: false, required: false
    public get apiEndpoint() {
      return this.getStringAttribute('api_endpoint');
    }

    // api_key_selection_expression - computed: false, optional: true, required: false
    private _apiKeySelectionExpression?: string | undefined; 
    public get apiKeySelectionExpression() {
      return this.getStringAttribute('api_key_selection_expression');
    }
    public set apiKeySelectionExpression(value: string | undefined) {
      this._apiKeySelectionExpression = value;
    }
    public resetApiKeySelectionExpression() {
      this._apiKeySelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeySelectionExpressionInput() {
      return this._apiKeySelectionExpression
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // body - computed: false, optional: true, required: false
    private _body?: string | undefined; 
    public get body() {
      return this.getStringAttribute('body');
    }
    public set body(value: string | undefined) {
      this._body = value;
    }
    public resetBody() {
      this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
      return this._body
    }

    // credentials_arn - computed: false, optional: true, required: false
    private _credentialsArn?: string | undefined; 
    public get credentialsArn() {
      return this.getStringAttribute('credentials_arn');
    }
    public set credentialsArn(value: string | undefined) {
      this._credentialsArn = value;
    }
    public resetCredentialsArn() {
      this._credentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsArnInput() {
      return this._credentialsArn
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

    // disable_execute_api_endpoint - computed: false, optional: true, required: false
    private _disableExecuteApiEndpoint?: boolean | cdktf.IResolvable | undefined; 
    public get disableExecuteApiEndpoint() {
      return this.getBooleanAttribute('disable_execute_api_endpoint') as any;
    }
    public set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable | undefined) {
      this._disableExecuteApiEndpoint = value;
    }
    public resetDisableExecuteApiEndpoint() {
      this._disableExecuteApiEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableExecuteApiEndpointInput() {
      return this._disableExecuteApiEndpoint
    }

    // execution_arn - computed: true, optional: false, required: false
    public get executionArn() {
      return this.getStringAttribute('execution_arn');
    }

    // fail_on_warnings - computed: false, optional: true, required: false
    private _failOnWarnings?: boolean | cdktf.IResolvable | undefined; 
    public get failOnWarnings() {
      return this.getBooleanAttribute('fail_on_warnings') as any;
    }
    public set failOnWarnings(value: boolean | cdktf.IResolvable | undefined) {
      this._failOnWarnings = value;
    }
    public resetFailOnWarnings() {
      this._failOnWarnings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnWarningsInput() {
      return this._failOnWarnings
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

    // protocol_type - computed: false, optional: false, required: true
    private _protocolType?: string; 
    public get protocolType() {
      return this.getStringAttribute('protocol_type');
    }
    public set protocolType(value: string) {
      this._protocolType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolTypeInput() {
      return this._protocolType
    }

    // route_key - computed: false, optional: true, required: false
    private _routeKey?: string | undefined; 
    public get routeKey() {
      return this.getStringAttribute('route_key');
    }
    public set routeKey(value: string | undefined) {
      this._routeKey = value;
    }
    public resetRouteKey() {
      this._routeKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeKeyInput() {
      return this._routeKey
    }

    // route_selection_expression - computed: false, optional: true, required: false
    private _routeSelectionExpression?: string | undefined; 
    public get routeSelectionExpression() {
      return this.getStringAttribute('route_selection_expression');
    }
    public set routeSelectionExpression(value: string | undefined) {
      this._routeSelectionExpression = value;
    }
    public resetRouteSelectionExpression() {
      this._routeSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeSelectionExpressionInput() {
      return this._routeSelectionExpression
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

    // target - computed: false, optional: true, required: false
    private _target?: string | undefined; 
    public get target() {
      return this.getStringAttribute('target');
    }
    public set target(value: string | undefined) {
      this._target = value;
    }
    public resetTarget() {
      this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }

    // version - computed: false, optional: true, required: false
    private _version?: string | undefined; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string | undefined) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // cors_configuration - computed: false, optional: true, required: false
    private _corsConfiguration?: Apigatewayv2ApiCorsConfiguration | undefined; 
    private __corsConfigurationOutput = new Apigatewayv2ApiCorsConfigurationOutputReference(this as any, "cors_configuration", true);
    public get corsConfiguration() {
      return this.__corsConfigurationOutput;
    }
    public putCorsConfiguration(value: Apigatewayv2ApiCorsConfiguration | undefined) {
      this._corsConfiguration = value;
    }
    public resetCorsConfiguration() {
      this._corsConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get corsConfigurationInput() {
      return this._corsConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_key_selection_expression: cdktf.stringToTerraform(this._apiKeySelectionExpression),
        body: cdktf.stringToTerraform(this._body),
        credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
        description: cdktf.stringToTerraform(this._description),
        disable_execute_api_endpoint: cdktf.booleanToTerraform(this._disableExecuteApiEndpoint),
        fail_on_warnings: cdktf.booleanToTerraform(this._failOnWarnings),
        name: cdktf.stringToTerraform(this._name),
        protocol_type: cdktf.stringToTerraform(this._protocolType),
        route_key: cdktf.stringToTerraform(this._routeKey),
        route_selection_expression: cdktf.stringToTerraform(this._routeSelectionExpression),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target: cdktf.stringToTerraform(this._target),
        version: cdktf.stringToTerraform(this._version),
        cors_configuration: apigatewayv2ApiCorsConfigurationToTerraform(this._corsConfiguration),
      };
    }
  }
  export interface Apigatewayv2ApiMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#api_id Apigatewayv2ApiMapping#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#api_mapping_key Apigatewayv2ApiMapping#api_mapping_key}
    */
    readonly apiMappingKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#domain_name Apigatewayv2ApiMapping#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html#stage Apigatewayv2ApiMapping#stage}
    */
    readonly stage: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping}
  */
  export class Apigatewayv2ApiMapping extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_api_mapping";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ApiMappingConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2ApiMappingConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_api_mapping',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._apiMappingKey = config.apiMappingKey;
      this._domainName = config.domainName;
      this._stage = config.stage;
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

    // api_mapping_key - computed: false, optional: true, required: false
    private _apiMappingKey?: string | undefined; 
    public get apiMappingKey() {
      return this.getStringAttribute('api_mapping_key');
    }
    public set apiMappingKey(value: string | undefined) {
      this._apiMappingKey = value;
    }
    public resetApiMappingKey() {
      this._apiMappingKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiMappingKeyInput() {
      return this._apiMappingKey
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // stage - computed: false, optional: false, required: true
    private _stage?: string; 
    public get stage() {
      return this.getStringAttribute('stage');
    }
    public set stage(value: string) {
      this._stage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageInput() {
      return this._stage
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        api_mapping_key: cdktf.stringToTerraform(this._apiMappingKey),
        domain_name: cdktf.stringToTerraform(this._domainName),
        stage: cdktf.stringToTerraform(this._stage),
      };
    }
  }
  export interface Apigatewayv2AuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#api_id Apigatewayv2Authorizer#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}
    */
    readonly authorizerCredentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}
    */
    readonly authorizerPayloadFormatVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_type Apigatewayv2Authorizer#authorizer_type}
    */
    readonly authorizerType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}
    */
    readonly enableSimpleResponses?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#identity_sources Apigatewayv2Authorizer#identity_sources}
    */
    readonly identitySources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#name Apigatewayv2Authorizer#name}
    */
    readonly name: string;
    /**
    * jwt_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}
    */
    readonly jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration;
  }
  export interface Apigatewayv2AuthorizerJwtConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#audience Apigatewayv2Authorizer#audience}
    */
    readonly audience?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html#issuer Apigatewayv2Authorizer#issuer}
    */
    readonly issuer?: string;
  }

  function apigatewayv2AuthorizerJwtConfigurationToTerraform(struct?: Apigatewayv2AuthorizerJwtConfigurationOutputReference | Apigatewayv2AuthorizerJwtConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      audience: cdktf.listMapper(cdktf.stringToTerraform)(struct!.audience),
      issuer: cdktf.stringToTerraform(struct!.issuer),
    }
  }

  export class Apigatewayv2AuthorizerJwtConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // audience - computed: false, optional: true, required: false
    private _audience?: string[] | undefined; 
    public get audience() {
      return this.getListAttribute('audience');
    }
    public set audience(value: string[] | undefined) {
      this._audience = value;
    }
    public resetAudience() {
      this._audience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audienceInput() {
      return this._audience
    }

    // issuer - computed: false, optional: true, required: false
    private _issuer?: string | undefined; 
    public get issuer() {
      return this.getStringAttribute('issuer');
    }
    public set issuer(value: string | undefined) {
      this._issuer = value;
    }
    public resetIssuer() {
      this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get issuerInput() {
      return this._issuer
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer}
  */
  export class Apigatewayv2Authorizer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_authorizer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2AuthorizerConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2AuthorizerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_authorizer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._authorizerCredentialsArn = config.authorizerCredentialsArn;
      this._authorizerPayloadFormatVersion = config.authorizerPayloadFormatVersion;
      this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
      this._authorizerType = config.authorizerType;
      this._authorizerUri = config.authorizerUri;
      this._enableSimpleResponses = config.enableSimpleResponses;
      this._identitySources = config.identitySources;
      this._name = config.name;
      this._jwtConfiguration = config.jwtConfiguration;
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

    // authorizer_credentials_arn - computed: false, optional: true, required: false
    private _authorizerCredentialsArn?: string | undefined; 
    public get authorizerCredentialsArn() {
      return this.getStringAttribute('authorizer_credentials_arn');
    }
    public set authorizerCredentialsArn(value: string | undefined) {
      this._authorizerCredentialsArn = value;
    }
    public resetAuthorizerCredentialsArn() {
      this._authorizerCredentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerCredentialsArnInput() {
      return this._authorizerCredentialsArn
    }

    // authorizer_payload_format_version - computed: false, optional: true, required: false
    private _authorizerPayloadFormatVersion?: string | undefined; 
    public get authorizerPayloadFormatVersion() {
      return this.getStringAttribute('authorizer_payload_format_version');
    }
    public set authorizerPayloadFormatVersion(value: string | undefined) {
      this._authorizerPayloadFormatVersion = value;
    }
    public resetAuthorizerPayloadFormatVersion() {
      this._authorizerPayloadFormatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerPayloadFormatVersionInput() {
      return this._authorizerPayloadFormatVersion
    }

    // authorizer_result_ttl_in_seconds - computed: true, optional: true, required: false
    private _authorizerResultTtlInSeconds?: number | undefined; 
    public get authorizerResultTtlInSeconds() {
      return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
    }
    public set authorizerResultTtlInSeconds(value: number | undefined) {
      this._authorizerResultTtlInSeconds = value;
    }
    public resetAuthorizerResultTtlInSeconds() {
      this._authorizerResultTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerResultTtlInSecondsInput() {
      return this._authorizerResultTtlInSeconds
    }

    // authorizer_type - computed: false, optional: false, required: true
    private _authorizerType?: string; 
    public get authorizerType() {
      return this.getStringAttribute('authorizer_type');
    }
    public set authorizerType(value: string) {
      this._authorizerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerTypeInput() {
      return this._authorizerType
    }

    // authorizer_uri - computed: false, optional: true, required: false
    private _authorizerUri?: string | undefined; 
    public get authorizerUri() {
      return this.getStringAttribute('authorizer_uri');
    }
    public set authorizerUri(value: string | undefined) {
      this._authorizerUri = value;
    }
    public resetAuthorizerUri() {
      this._authorizerUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerUriInput() {
      return this._authorizerUri
    }

    // enable_simple_responses - computed: false, optional: true, required: false
    private _enableSimpleResponses?: boolean | cdktf.IResolvable | undefined; 
    public get enableSimpleResponses() {
      return this.getBooleanAttribute('enable_simple_responses') as any;
    }
    public set enableSimpleResponses(value: boolean | cdktf.IResolvable | undefined) {
      this._enableSimpleResponses = value;
    }
    public resetEnableSimpleResponses() {
      this._enableSimpleResponses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSimpleResponsesInput() {
      return this._enableSimpleResponses
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_sources - computed: false, optional: true, required: false
    private _identitySources?: string[] | undefined; 
    public get identitySources() {
      return this.getListAttribute('identity_sources');
    }
    public set identitySources(value: string[] | undefined) {
      this._identitySources = value;
    }
    public resetIdentitySources() {
      this._identitySources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identitySourcesInput() {
      return this._identitySources
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

    // jwt_configuration - computed: false, optional: true, required: false
    private _jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration | undefined; 
    private __jwtConfigurationOutput = new Apigatewayv2AuthorizerJwtConfigurationOutputReference(this as any, "jwt_configuration", true);
    public get jwtConfiguration() {
      return this.__jwtConfigurationOutput;
    }
    public putJwtConfiguration(value: Apigatewayv2AuthorizerJwtConfiguration | undefined) {
      this._jwtConfiguration = value;
    }
    public resetJwtConfiguration() {
      this._jwtConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jwtConfigurationInput() {
      return this._jwtConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        authorizer_credentials_arn: cdktf.stringToTerraform(this._authorizerCredentialsArn),
        authorizer_payload_format_version: cdktf.stringToTerraform(this._authorizerPayloadFormatVersion),
        authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
        authorizer_type: cdktf.stringToTerraform(this._authorizerType),
        authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
        enable_simple_responses: cdktf.booleanToTerraform(this._enableSimpleResponses),
        identity_sources: cdktf.listMapper(cdktf.stringToTerraform)(this._identitySources),
        name: cdktf.stringToTerraform(this._name),
        jwt_configuration: apigatewayv2AuthorizerJwtConfigurationToTerraform(this._jwtConfiguration),
      };
    }
  }
  export interface Apigatewayv2DeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html#api_id Apigatewayv2Deployment#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html#description Apigatewayv2Deployment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html#triggers Apigatewayv2Deployment#triggers}
    */
    readonly triggers?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html aws_apigatewayv2_deployment}
  */
  export class Apigatewayv2Deployment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_deployment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_deployment.html aws_apigatewayv2_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2DeploymentConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2DeploymentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_deployment',
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
      this._triggers = config.triggers;
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

    // auto_deployed - computed: true, optional: false, required: false
    public get autoDeployed() {
      return this.getBooleanAttribute('auto_deployed') as any;
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

    // triggers - computed: false, optional: true, required: false
    private _triggers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get triggers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('triggers') as any;
    }
    public set triggers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._triggers = value;
    }
    public resetTriggers() {
      this._triggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggersInput() {
      return this._triggers
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        description: cdktf.stringToTerraform(this._description),
        triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
      };
    }
  }
  export interface Apigatewayv2DomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name Apigatewayv2DomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags Apigatewayv2DomainName#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags_all Apigatewayv2DomainName#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * domain_name_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}
    */
    readonly domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration;
    /**
    * mutual_tls_authentication block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#timeouts Apigatewayv2DomainName#timeouts}
    */
    readonly timeouts?: Apigatewayv2DomainNameTimeouts;
  }
  export interface Apigatewayv2DomainNameDomainNameConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#certificate_arn Apigatewayv2DomainName#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#endpoint_type Apigatewayv2DomainName#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#security_policy Apigatewayv2DomainName#security_policy}
    */
    readonly securityPolicy: string;
  }

  function apigatewayv2DomainNameDomainNameConfigurationToTerraform(struct?: Apigatewayv2DomainNameDomainNameConfigurationOutputReference | Apigatewayv2DomainNameDomainNameConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
      endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
      security_policy: cdktf.stringToTerraform(struct!.securityPolicy),
    }
  }

  export class Apigatewayv2DomainNameDomainNameConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_arn - computed: false, optional: false, required: true
    private _certificateArn?: string; 
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
      this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // endpoint_type - computed: false, optional: false, required: true
    private _endpointType?: string; 
    public get endpointType() {
      return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
      this._endpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
      return this._endpointType
    }

    // security_policy - computed: false, optional: false, required: true
    private _securityPolicy?: string; 
    public get securityPolicy() {
      return this.getStringAttribute('security_policy');
    }
    public set securityPolicy(value: string) {
      this._securityPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyInput() {
      return this._securityPolicy
    }
  }
  export interface Apigatewayv2DomainNameMutualTlsAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_uri Apigatewayv2DomainName#truststore_uri}
    */
    readonly truststoreUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_version Apigatewayv2DomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
  }

  function apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(struct?: Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference | Apigatewayv2DomainNameMutualTlsAuthentication): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
      truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
    }
  }

  export class Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // truststore_uri - computed: false, optional: false, required: true
    private _truststoreUri?: string; 
    public get truststoreUri() {
      return this.getStringAttribute('truststore_uri');
    }
    public set truststoreUri(value: string) {
      this._truststoreUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get truststoreUriInput() {
      return this._truststoreUri
    }

    // truststore_version - computed: false, optional: true, required: false
    private _truststoreVersion?: string | undefined; 
    public get truststoreVersion() {
      return this.getStringAttribute('truststore_version');
    }
    public set truststoreVersion(value: string | undefined) {
      this._truststoreVersion = value;
    }
    public resetTruststoreVersion() {
      this._truststoreVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get truststoreVersionInput() {
      return this._truststoreVersion
    }
  }
  export interface Apigatewayv2DomainNameTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#create Apigatewayv2DomainName#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#update Apigatewayv2DomainName#update}
    */
    readonly update?: string;
  }

  function apigatewayv2DomainNameTimeoutsToTerraform(struct?: Apigatewayv2DomainNameTimeoutsOutputReference | Apigatewayv2DomainNameTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class Apigatewayv2DomainNameTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name}
  */
  export class Apigatewayv2DomainName extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_domain_name";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2DomainNameConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2DomainNameConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_domain_name',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._domainNameConfiguration = config.domainNameConfiguration;
      this._mutualTlsAuthentication = config.mutualTlsAuthentication;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_mapping_selection_expression - computed: true, optional: false, required: false
    public get apiMappingSelectionExpression() {
      return this.getStringAttribute('api_mapping_selection_expression');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // domain_name_configuration - computed: false, optional: false, required: true
    private _domainNameConfiguration?: Apigatewayv2DomainNameDomainNameConfiguration; 
    private __domainNameConfigurationOutput = new Apigatewayv2DomainNameDomainNameConfigurationOutputReference(this as any, "domain_name_configuration", true);
    public get domainNameConfiguration() {
      return this.__domainNameConfigurationOutput;
    }
    public putDomainNameConfiguration(value: Apigatewayv2DomainNameDomainNameConfiguration) {
      this._domainNameConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameConfigurationInput() {
      return this._domainNameConfiguration
    }

    // mutual_tls_authentication - computed: false, optional: true, required: false
    private _mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication | undefined; 
    private __mutualTlsAuthenticationOutput = new Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference(this as any, "mutual_tls_authentication", true);
    public get mutualTlsAuthentication() {
      return this.__mutualTlsAuthenticationOutput;
    }
    public putMutualTlsAuthentication(value: Apigatewayv2DomainNameMutualTlsAuthentication | undefined) {
      this._mutualTlsAuthentication = value;
    }
    public resetMutualTlsAuthentication() {
      this._mutualTlsAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mutualTlsAuthenticationInput() {
      return this._mutualTlsAuthentication
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Apigatewayv2DomainNameTimeouts | undefined; 
    private __timeoutsOutput = new Apigatewayv2DomainNameTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: Apigatewayv2DomainNameTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_name: cdktf.stringToTerraform(this._domainName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        domain_name_configuration: apigatewayv2DomainNameDomainNameConfigurationToTerraform(this._domainNameConfiguration),
        mutual_tls_authentication: apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication),
        timeouts: apigatewayv2DomainNameTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Apigatewayv2IntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#api_id Apigatewayv2Integration#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#connection_id Apigatewayv2Integration#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#connection_type Apigatewayv2Integration#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}
    */
    readonly contentHandlingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#credentials_arn Apigatewayv2Integration#credentials_arn}
    */
    readonly credentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#description Apigatewayv2Integration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_method Apigatewayv2Integration#integration_method}
    */
    readonly integrationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_subtype Apigatewayv2Integration#integration_subtype}
    */
    readonly integrationSubtype?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_type Apigatewayv2Integration#integration_type}
    */
    readonly integrationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#integration_uri Apigatewayv2Integration#integration_uri}
    */
    readonly integrationUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}
    */
    readonly passthroughBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#payload_format_version Apigatewayv2Integration#payload_format_version}
    */
    readonly payloadFormatVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#request_parameters Apigatewayv2Integration#request_parameters}
    */
    readonly requestParameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#request_templates Apigatewayv2Integration#request_templates}
    */
    readonly requestTemplates?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#template_selection_expression Apigatewayv2Integration#template_selection_expression}
    */
    readonly templateSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}
    */
    readonly timeoutMilliseconds?: number;
    /**
    * response_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#response_parameters Apigatewayv2Integration#response_parameters}
    */
    readonly responseParameters?: Apigatewayv2IntegrationResponseParameters[];
    /**
    * tls_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#tls_config Apigatewayv2Integration#tls_config}
    */
    readonly tlsConfig?: Apigatewayv2IntegrationTlsConfig;
  }
  export interface Apigatewayv2IntegrationResponseParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#mappings Apigatewayv2Integration#mappings}
    */
    readonly mappings: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#status_code Apigatewayv2Integration#status_code}
    */
    readonly statusCode: string;
  }

  function apigatewayv2IntegrationResponseParametersToTerraform(struct?: Apigatewayv2IntegrationResponseParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.mappings),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface Apigatewayv2IntegrationTlsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}
    */
    readonly serverNameToVerify?: string;
  }

  function apigatewayv2IntegrationTlsConfigToTerraform(struct?: Apigatewayv2IntegrationTlsConfigOutputReference | Apigatewayv2IntegrationTlsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      server_name_to_verify: cdktf.stringToTerraform(struct!.serverNameToVerify),
    }
  }

  export class Apigatewayv2IntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // server_name_to_verify - computed: false, optional: true, required: false
    private _serverNameToVerify?: string | undefined; 
    public get serverNameToVerify() {
      return this.getStringAttribute('server_name_to_verify');
    }
    public set serverNameToVerify(value: string | undefined) {
      this._serverNameToVerify = value;
    }
    public resetServerNameToVerify() {
      this._serverNameToVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameToVerifyInput() {
      return this._serverNameToVerify
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration}
  */
  export class Apigatewayv2Integration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_integration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_integration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._connectionId = config.connectionId;
      this._connectionType = config.connectionType;
      this._contentHandlingStrategy = config.contentHandlingStrategy;
      this._credentialsArn = config.credentialsArn;
      this._description = config.description;
      this._integrationMethod = config.integrationMethod;
      this._integrationSubtype = config.integrationSubtype;
      this._integrationType = config.integrationType;
      this._integrationUri = config.integrationUri;
      this._passthroughBehavior = config.passthroughBehavior;
      this._payloadFormatVersion = config.payloadFormatVersion;
      this._requestParameters = config.requestParameters;
      this._requestTemplates = config.requestTemplates;
      this._templateSelectionExpression = config.templateSelectionExpression;
      this._timeoutMilliseconds = config.timeoutMilliseconds;
      this._responseParameters = config.responseParameters;
      this._tlsConfig = config.tlsConfig;
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

    // connection_id - computed: false, optional: true, required: false
    private _connectionId?: string | undefined; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string | undefined) {
      this._connectionId = value;
    }
    public resetConnectionId() {
      this._connectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // connection_type - computed: false, optional: true, required: false
    private _connectionType?: string | undefined; 
    public get connectionType() {
      return this.getStringAttribute('connection_type');
    }
    public set connectionType(value: string | undefined) {
      this._connectionType = value;
    }
    public resetConnectionType() {
      this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTypeInput() {
      return this._connectionType
    }

    // content_handling_strategy - computed: false, optional: true, required: false
    private _contentHandlingStrategy?: string | undefined; 
    public get contentHandlingStrategy() {
      return this.getStringAttribute('content_handling_strategy');
    }
    public set contentHandlingStrategy(value: string | undefined) {
      this._contentHandlingStrategy = value;
    }
    public resetContentHandlingStrategy() {
      this._contentHandlingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHandlingStrategyInput() {
      return this._contentHandlingStrategy
    }

    // credentials_arn - computed: false, optional: true, required: false
    private _credentialsArn?: string | undefined; 
    public get credentialsArn() {
      return this.getStringAttribute('credentials_arn');
    }
    public set credentialsArn(value: string | undefined) {
      this._credentialsArn = value;
    }
    public resetCredentialsArn() {
      this._credentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsArnInput() {
      return this._credentialsArn
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

    // integration_method - computed: false, optional: true, required: false
    private _integrationMethod?: string | undefined; 
    public get integrationMethod() {
      return this.getStringAttribute('integration_method');
    }
    public set integrationMethod(value: string | undefined) {
      this._integrationMethod = value;
    }
    public resetIntegrationMethod() {
      this._integrationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationMethodInput() {
      return this._integrationMethod
    }

    // integration_response_selection_expression - computed: true, optional: false, required: false
    public get integrationResponseSelectionExpression() {
      return this.getStringAttribute('integration_response_selection_expression');
    }

    // integration_subtype - computed: false, optional: true, required: false
    private _integrationSubtype?: string | undefined; 
    public get integrationSubtype() {
      return this.getStringAttribute('integration_subtype');
    }
    public set integrationSubtype(value: string | undefined) {
      this._integrationSubtype = value;
    }
    public resetIntegrationSubtype() {
      this._integrationSubtype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationSubtypeInput() {
      return this._integrationSubtype
    }

    // integration_type - computed: false, optional: false, required: true
    private _integrationType?: string; 
    public get integrationType() {
      return this.getStringAttribute('integration_type');
    }
    public set integrationType(value: string) {
      this._integrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationTypeInput() {
      return this._integrationType
    }

    // integration_uri - computed: false, optional: true, required: false
    private _integrationUri?: string | undefined; 
    public get integrationUri() {
      return this.getStringAttribute('integration_uri');
    }
    public set integrationUri(value: string | undefined) {
      this._integrationUri = value;
    }
    public resetIntegrationUri() {
      this._integrationUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationUriInput() {
      return this._integrationUri
    }

    // passthrough_behavior - computed: false, optional: true, required: false
    private _passthroughBehavior?: string | undefined; 
    public get passthroughBehavior() {
      return this.getStringAttribute('passthrough_behavior');
    }
    public set passthroughBehavior(value: string | undefined) {
      this._passthroughBehavior = value;
    }
    public resetPassthroughBehavior() {
      this._passthroughBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passthroughBehaviorInput() {
      return this._passthroughBehavior
    }

    // payload_format_version - computed: false, optional: true, required: false
    private _payloadFormatVersion?: string | undefined; 
    public get payloadFormatVersion() {
      return this.getStringAttribute('payload_format_version');
    }
    public set payloadFormatVersion(value: string | undefined) {
      this._payloadFormatVersion = value;
    }
    public resetPayloadFormatVersion() {
      this._payloadFormatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFormatVersionInput() {
      return this._payloadFormatVersion
    }

    // request_parameters - computed: false, optional: true, required: false
    private _requestParameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get requestParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('request_parameters') as any;
    }
    public set requestParameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._requestParameters = value;
    }
    public resetRequestParameters() {
      this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParametersInput() {
      return this._requestParameters
    }

    // request_templates - computed: false, optional: true, required: false
    private _requestTemplates?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get requestTemplates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('request_templates') as any;
    }
    public set requestTemplates(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._requestTemplates = value;
    }
    public resetRequestTemplates() {
      this._requestTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestTemplatesInput() {
      return this._requestTemplates
    }

    // template_selection_expression - computed: false, optional: true, required: false
    private _templateSelectionExpression?: string | undefined; 
    public get templateSelectionExpression() {
      return this.getStringAttribute('template_selection_expression');
    }
    public set templateSelectionExpression(value: string | undefined) {
      this._templateSelectionExpression = value;
    }
    public resetTemplateSelectionExpression() {
      this._templateSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateSelectionExpressionInput() {
      return this._templateSelectionExpression
    }

    // timeout_milliseconds - computed: true, optional: true, required: false
    private _timeoutMilliseconds?: number | undefined; 
    public get timeoutMilliseconds() {
      return this.getNumberAttribute('timeout_milliseconds');
    }
    public set timeoutMilliseconds(value: number | undefined) {
      this._timeoutMilliseconds = value;
    }
    public resetTimeoutMilliseconds() {
      this._timeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMillisecondsInput() {
      return this._timeoutMilliseconds
    }

    // response_parameters - computed: false, optional: true, required: false
    private _responseParameters?: Apigatewayv2IntegrationResponseParameters[] | undefined; 
    public get responseParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_parameters') as any;
    }
    public set responseParameters(value: Apigatewayv2IntegrationResponseParameters[] | undefined) {
      this._responseParameters = value;
    }
    public resetResponseParameters() {
      this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
      return this._responseParameters
    }

    // tls_config - computed: false, optional: true, required: false
    private _tlsConfig?: Apigatewayv2IntegrationTlsConfig | undefined; 
    private __tlsConfigOutput = new Apigatewayv2IntegrationTlsConfigOutputReference(this as any, "tls_config", true);
    public get tlsConfig() {
      return this.__tlsConfigOutput;
    }
    public putTlsConfig(value: Apigatewayv2IntegrationTlsConfig | undefined) {
      this._tlsConfig = value;
    }
    public resetTlsConfig() {
      this._tlsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsConfigInput() {
      return this._tlsConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        connection_type: cdktf.stringToTerraform(this._connectionType),
        content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
        credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
        description: cdktf.stringToTerraform(this._description),
        integration_method: cdktf.stringToTerraform(this._integrationMethod),
        integration_subtype: cdktf.stringToTerraform(this._integrationSubtype),
        integration_type: cdktf.stringToTerraform(this._integrationType),
        integration_uri: cdktf.stringToTerraform(this._integrationUri),
        passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
        payload_format_version: cdktf.stringToTerraform(this._payloadFormatVersion),
        request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
        request_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestTemplates),
        template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
        timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
        response_parameters: cdktf.listMapper(apigatewayv2IntegrationResponseParametersToTerraform)(this._responseParameters),
        tls_config: apigatewayv2IntegrationTlsConfigToTerraform(this._tlsConfig),
      };
    }
  }
  export interface Apigatewayv2IntegrationResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#api_id Apigatewayv2IntegrationResponse#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}
    */
    readonly contentHandlingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#integration_id Apigatewayv2IntegrationResponse#integration_id}
    */
    readonly integrationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}
    */
    readonly integrationResponseKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#response_templates Apigatewayv2IntegrationResponse#response_templates}
    */
    readonly responseTemplates?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}
    */
    readonly templateSelectionExpression?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response}
  */
  export class Apigatewayv2IntegrationResponse extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_integration_response";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationResponseConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationResponseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_integration_response',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._contentHandlingStrategy = config.contentHandlingStrategy;
      this._integrationId = config.integrationId;
      this._integrationResponseKey = config.integrationResponseKey;
      this._responseTemplates = config.responseTemplates;
      this._templateSelectionExpression = config.templateSelectionExpression;
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

    // content_handling_strategy - computed: false, optional: true, required: false
    private _contentHandlingStrategy?: string | undefined; 
    public get contentHandlingStrategy() {
      return this.getStringAttribute('content_handling_strategy');
    }
    public set contentHandlingStrategy(value: string | undefined) {
      this._contentHandlingStrategy = value;
    }
    public resetContentHandlingStrategy() {
      this._contentHandlingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHandlingStrategyInput() {
      return this._contentHandlingStrategy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // integration_id - computed: false, optional: false, required: true
    private _integrationId?: string; 
    public get integrationId() {
      return this.getStringAttribute('integration_id');
    }
    public set integrationId(value: string) {
      this._integrationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationIdInput() {
      return this._integrationId
    }

    // integration_response_key - computed: false, optional: false, required: true
    private _integrationResponseKey?: string; 
    public get integrationResponseKey() {
      return this.getStringAttribute('integration_response_key');
    }
    public set integrationResponseKey(value: string) {
      this._integrationResponseKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationResponseKeyInput() {
      return this._integrationResponseKey
    }

    // response_templates - computed: false, optional: true, required: false
    private _responseTemplates?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get responseTemplates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_templates') as any;
    }
    public set responseTemplates(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._responseTemplates = value;
    }
    public resetResponseTemplates() {
      this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTemplatesInput() {
      return this._responseTemplates
    }

    // template_selection_expression - computed: false, optional: true, required: false
    private _templateSelectionExpression?: string | undefined; 
    public get templateSelectionExpression() {
      return this.getStringAttribute('template_selection_expression');
    }
    public set templateSelectionExpression(value: string | undefined) {
      this._templateSelectionExpression = value;
    }
    public resetTemplateSelectionExpression() {
      this._templateSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateSelectionExpressionInput() {
      return this._templateSelectionExpression
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
        integration_id: cdktf.stringToTerraform(this._integrationId),
        integration_response_key: cdktf.stringToTerraform(this._integrationResponseKey),
        response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
        template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
      };
    }
  }
  export interface Apigatewayv2ModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html#api_id Apigatewayv2Model#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html#content_type Apigatewayv2Model#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html#description Apigatewayv2Model#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html#name Apigatewayv2Model#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html#schema Apigatewayv2Model#schema}
    */
    readonly schema: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html aws_apigatewayv2_model}
  */
  export class Apigatewayv2Model extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_model";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html aws_apigatewayv2_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ModelConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2ModelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_model',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._contentType = config.contentType;
      this._description = config.description;
      this._name = config.name;
      this._schema = config.schema;
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

    // content_type - computed: false, optional: false, required: true
    private _contentType?: string; 
    public get contentType() {
      return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
      this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
      return this._contentType
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

    // schema - computed: false, optional: false, required: true
    private _schema?: string; 
    public get schema() {
      return this.getStringAttribute('schema');
    }
    public set schema(value: string) {
      this._schema = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
      return this._schema
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        content_type: cdktf.stringToTerraform(this._contentType),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        schema: cdktf.stringToTerraform(this._schema),
      };
    }
  }
  export interface Apigatewayv2RouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#api_id Apigatewayv2Route#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#api_key_required Apigatewayv2Route#api_key_required}
    */
    readonly apiKeyRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#authorization_scopes Apigatewayv2Route#authorization_scopes}
    */
    readonly authorizationScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#authorization_type Apigatewayv2Route#authorization_type}
    */
    readonly authorizationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#authorizer_id Apigatewayv2Route#authorizer_id}
    */
    readonly authorizerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#model_selection_expression Apigatewayv2Route#model_selection_expression}
    */
    readonly modelSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#operation_name Apigatewayv2Route#operation_name}
    */
    readonly operationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#request_models Apigatewayv2Route#request_models}
    */
    readonly requestModels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#route_key Apigatewayv2Route#route_key}
    */
    readonly routeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}
    */
    readonly routeResponseSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#target Apigatewayv2Route#target}
    */
    readonly target?: string;
    /**
    * request_parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#request_parameter Apigatewayv2Route#request_parameter}
    */
    readonly requestParameter?: Apigatewayv2RouteRequestParameter[];
  }
  export interface Apigatewayv2RouteRequestParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#request_parameter_key Apigatewayv2Route#request_parameter_key}
    */
    readonly requestParameterKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html#required Apigatewayv2Route#required}
    */
    readonly required: boolean | cdktf.IResolvable;
  }

  function apigatewayv2RouteRequestParameterToTerraform(struct?: Apigatewayv2RouteRequestParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      request_parameter_key: cdktf.stringToTerraform(struct!.requestParameterKey),
      required: cdktf.booleanToTerraform(struct!.required),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route}
  */
  export class Apigatewayv2Route extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2RouteConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2RouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._apiKeyRequired = config.apiKeyRequired;
      this._authorizationScopes = config.authorizationScopes;
      this._authorizationType = config.authorizationType;
      this._authorizerId = config.authorizerId;
      this._modelSelectionExpression = config.modelSelectionExpression;
      this._operationName = config.operationName;
      this._requestModels = config.requestModels;
      this._routeKey = config.routeKey;
      this._routeResponseSelectionExpression = config.routeResponseSelectionExpression;
      this._target = config.target;
      this._requestParameter = config.requestParameter;
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

    // api_key_required - computed: false, optional: true, required: false
    private _apiKeyRequired?: boolean | cdktf.IResolvable | undefined; 
    public get apiKeyRequired() {
      return this.getBooleanAttribute('api_key_required') as any;
    }
    public set apiKeyRequired(value: boolean | cdktf.IResolvable | undefined) {
      this._apiKeyRequired = value;
    }
    public resetApiKeyRequired() {
      this._apiKeyRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyRequiredInput() {
      return this._apiKeyRequired
    }

    // authorization_scopes - computed: false, optional: true, required: false
    private _authorizationScopes?: string[] | undefined; 
    public get authorizationScopes() {
      return this.getListAttribute('authorization_scopes');
    }
    public set authorizationScopes(value: string[] | undefined) {
      this._authorizationScopes = value;
    }
    public resetAuthorizationScopes() {
      this._authorizationScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationScopesInput() {
      return this._authorizationScopes
    }

    // authorization_type - computed: false, optional: true, required: false
    private _authorizationType?: string | undefined; 
    public get authorizationType() {
      return this.getStringAttribute('authorization_type');
    }
    public set authorizationType(value: string | undefined) {
      this._authorizationType = value;
    }
    public resetAuthorizationType() {
      this._authorizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationTypeInput() {
      return this._authorizationType
    }

    // authorizer_id - computed: false, optional: true, required: false
    private _authorizerId?: string | undefined; 
    public get authorizerId() {
      return this.getStringAttribute('authorizer_id');
    }
    public set authorizerId(value: string | undefined) {
      this._authorizerId = value;
    }
    public resetAuthorizerId() {
      this._authorizerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerIdInput() {
      return this._authorizerId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // model_selection_expression - computed: false, optional: true, required: false
    private _modelSelectionExpression?: string | undefined; 
    public get modelSelectionExpression() {
      return this.getStringAttribute('model_selection_expression');
    }
    public set modelSelectionExpression(value: string | undefined) {
      this._modelSelectionExpression = value;
    }
    public resetModelSelectionExpression() {
      this._modelSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelSelectionExpressionInput() {
      return this._modelSelectionExpression
    }

    // operation_name - computed: false, optional: true, required: false
    private _operationName?: string | undefined; 
    public get operationName() {
      return this.getStringAttribute('operation_name');
    }
    public set operationName(value: string | undefined) {
      this._operationName = value;
    }
    public resetOperationName() {
      this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationNameInput() {
      return this._operationName
    }

    // request_models - computed: false, optional: true, required: false
    private _requestModels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get requestModels() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('request_models') as any;
    }
    public set requestModels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._requestModels = value;
    }
    public resetRequestModels() {
      this._requestModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestModelsInput() {
      return this._requestModels
    }

    // route_key - computed: false, optional: false, required: true
    private _routeKey?: string; 
    public get routeKey() {
      return this.getStringAttribute('route_key');
    }
    public set routeKey(value: string) {
      this._routeKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeKeyInput() {
      return this._routeKey
    }

    // route_response_selection_expression - computed: false, optional: true, required: false
    private _routeResponseSelectionExpression?: string | undefined; 
    public get routeResponseSelectionExpression() {
      return this.getStringAttribute('route_response_selection_expression');
    }
    public set routeResponseSelectionExpression(value: string | undefined) {
      this._routeResponseSelectionExpression = value;
    }
    public resetRouteResponseSelectionExpression() {
      this._routeResponseSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeResponseSelectionExpressionInput() {
      return this._routeResponseSelectionExpression
    }

    // target - computed: false, optional: true, required: false
    private _target?: string | undefined; 
    public get target() {
      return this.getStringAttribute('target');
    }
    public set target(value: string | undefined) {
      this._target = value;
    }
    public resetTarget() {
      this._target = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }

    // request_parameter - computed: false, optional: true, required: false
    private _requestParameter?: Apigatewayv2RouteRequestParameter[] | undefined; 
    public get requestParameter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('request_parameter') as any;
    }
    public set requestParameter(value: Apigatewayv2RouteRequestParameter[] | undefined) {
      this._requestParameter = value;
    }
    public resetRequestParameter() {
      this._requestParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParameterInput() {
      return this._requestParameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
        authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
        authorization_type: cdktf.stringToTerraform(this._authorizationType),
        authorizer_id: cdktf.stringToTerraform(this._authorizerId),
        model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
        operation_name: cdktf.stringToTerraform(this._operationName),
        request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
        route_key: cdktf.stringToTerraform(this._routeKey),
        route_response_selection_expression: cdktf.stringToTerraform(this._routeResponseSelectionExpression),
        target: cdktf.stringToTerraform(this._target),
        request_parameter: cdktf.listMapper(apigatewayv2RouteRequestParameterToTerraform)(this._requestParameter),
      };
    }
  }
  export interface Apigatewayv2RouteResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#api_id Apigatewayv2RouteResponse#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}
    */
    readonly modelSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#response_models Apigatewayv2RouteResponse#response_models}
    */
    readonly responseModels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#route_id Apigatewayv2RouteResponse#route_id}
    */
    readonly routeId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html#route_response_key Apigatewayv2RouteResponse#route_response_key}
    */
    readonly routeResponseKey: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html aws_apigatewayv2_route_response}
  */
  export class Apigatewayv2RouteResponse extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_route_response";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html aws_apigatewayv2_route_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2RouteResponseConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2RouteResponseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_route_response',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._modelSelectionExpression = config.modelSelectionExpression;
      this._responseModels = config.responseModels;
      this._routeId = config.routeId;
      this._routeResponseKey = config.routeResponseKey;
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // model_selection_expression - computed: false, optional: true, required: false
    private _modelSelectionExpression?: string | undefined; 
    public get modelSelectionExpression() {
      return this.getStringAttribute('model_selection_expression');
    }
    public set modelSelectionExpression(value: string | undefined) {
      this._modelSelectionExpression = value;
    }
    public resetModelSelectionExpression() {
      this._modelSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelSelectionExpressionInput() {
      return this._modelSelectionExpression
    }

    // response_models - computed: false, optional: true, required: false
    private _responseModels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get responseModels() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_models') as any;
    }
    public set responseModels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._responseModels = value;
    }
    public resetResponseModels() {
      this._responseModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseModelsInput() {
      return this._responseModels
    }

    // route_id - computed: false, optional: false, required: true
    private _routeId?: string; 
    public get routeId() {
      return this.getStringAttribute('route_id');
    }
    public set routeId(value: string) {
      this._routeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeIdInput() {
      return this._routeId
    }

    // route_response_key - computed: false, optional: false, required: true
    private _routeResponseKey?: string; 
    public get routeResponseKey() {
      return this.getStringAttribute('route_response_key');
    }
    public set routeResponseKey(value: string) {
      this._routeResponseKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeResponseKeyInput() {
      return this._routeResponseKey
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
        response_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseModels),
        route_id: cdktf.stringToTerraform(this._routeId),
        route_response_key: cdktf.stringToTerraform(this._routeResponseKey),
      };
    }
  }
  export interface Apigatewayv2StageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#api_id Apigatewayv2Stage#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#auto_deploy Apigatewayv2Stage#auto_deploy}
    */
    readonly autoDeploy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#client_certificate_id Apigatewayv2Stage#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#deployment_id Apigatewayv2Stage#deployment_id}
    */
    readonly deploymentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#description Apigatewayv2Stage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#name Apigatewayv2Stage#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#stage_variables Apigatewayv2Stage#stage_variables}
    */
    readonly stageVariables?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags Apigatewayv2Stage#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#tags_all Apigatewayv2Stage#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * access_log_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#access_log_settings Apigatewayv2Stage#access_log_settings}
    */
    readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings;
    /**
    * default_route_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#default_route_settings Apigatewayv2Stage#default_route_settings}
    */
    readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings;
    /**
    * route_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_settings Apigatewayv2Stage#route_settings}
    */
    readonly routeSettings?: Apigatewayv2StageRouteSettings[];
  }
  export interface Apigatewayv2StageAccessLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#destination_arn Apigatewayv2Stage#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#format Apigatewayv2Stage#format}
    */
    readonly format: string;
  }

  function apigatewayv2StageAccessLogSettingsToTerraform(struct?: Apigatewayv2StageAccessLogSettingsOutputReference | Apigatewayv2StageAccessLogSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
      format: cdktf.stringToTerraform(struct!.format),
    }
  }

  export class Apigatewayv2StageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // destination_arn - computed: false, optional: false, required: true
    private _destinationArn?: string; 
    public get destinationArn() {
      return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
      this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
      return this._destinationArn
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
      return this.getStringAttribute('format');
    }
    public set format(value: string) {
      this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
      return this._format
    }
  }
  export interface Apigatewayv2StageDefaultRouteSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
  }

  function apigatewayv2StageDefaultRouteSettingsToTerraform(struct?: Apigatewayv2StageDefaultRouteSettingsOutputReference | Apigatewayv2StageDefaultRouteSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
      detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
      logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
      throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
      throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
    }
  }

  export class Apigatewayv2StageDefaultRouteSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // data_trace_enabled - computed: false, optional: true, required: false
    private _dataTraceEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get dataTraceEnabled() {
      return this.getBooleanAttribute('data_trace_enabled') as any;
    }
    public set dataTraceEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._dataTraceEnabled = value;
    }
    public resetDataTraceEnabled() {
      this._dataTraceEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTraceEnabledInput() {
      return this._dataTraceEnabled
    }

    // detailed_metrics_enabled - computed: false, optional: true, required: false
    private _detailedMetricsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get detailedMetricsEnabled() {
      return this.getBooleanAttribute('detailed_metrics_enabled') as any;
    }
    public set detailedMetricsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._detailedMetricsEnabled = value;
    }
    public resetDetailedMetricsEnabled() {
      this._detailedMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailedMetricsEnabledInput() {
      return this._detailedMetricsEnabled
    }

    // logging_level - computed: true, optional: true, required: false
    private _loggingLevel?: string | undefined; 
    public get loggingLevel() {
      return this.getStringAttribute('logging_level');
    }
    public set loggingLevel(value: string | undefined) {
      this._loggingLevel = value;
    }
    public resetLoggingLevel() {
      this._loggingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingLevelInput() {
      return this._loggingLevel
    }

    // throttling_burst_limit - computed: false, optional: true, required: false
    private _throttlingBurstLimit?: number | undefined; 
    public get throttlingBurstLimit() {
      return this.getNumberAttribute('throttling_burst_limit');
    }
    public set throttlingBurstLimit(value: number | undefined) {
      this._throttlingBurstLimit = value;
    }
    public resetThrottlingBurstLimit() {
      this._throttlingBurstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingBurstLimitInput() {
      return this._throttlingBurstLimit
    }

    // throttling_rate_limit - computed: false, optional: true, required: false
    private _throttlingRateLimit?: number | undefined; 
    public get throttlingRateLimit() {
      return this.getNumberAttribute('throttling_rate_limit');
    }
    public set throttlingRateLimit(value: number | undefined) {
      this._throttlingRateLimit = value;
    }
    public resetThrottlingRateLimit() {
      this._throttlingRateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingRateLimitInput() {
      return this._throttlingRateLimit
    }
  }
  export interface Apigatewayv2StageRouteSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#logging_level Apigatewayv2Stage#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#route_key Apigatewayv2Stage#route_key}
    */
    readonly routeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
  }

  function apigatewayv2StageRouteSettingsToTerraform(struct?: Apigatewayv2StageRouteSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
      detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
      logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
      route_key: cdktf.stringToTerraform(struct!.routeKey),
      throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
      throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage}
  */
  export class Apigatewayv2Stage extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_stage";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2StageConfig
    */
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
      this._tagsAll = config.tagsAll;
      this._accessLogSettings = config.accessLogSettings;
      this._defaultRouteSettings = config.defaultRouteSettings;
      this._routeSettings = config.routeSettings;
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

    // auto_deploy - computed: false, optional: true, required: false
    private _autoDeploy?: boolean | cdktf.IResolvable | undefined; 
    public get autoDeploy() {
      return this.getBooleanAttribute('auto_deploy') as any;
    }
    public set autoDeploy(value: boolean | cdktf.IResolvable | undefined) {
      this._autoDeploy = value;
    }
    public resetAutoDeploy() {
      this._autoDeploy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDeployInput() {
      return this._autoDeploy
    }

    // client_certificate_id - computed: false, optional: true, required: false
    private _clientCertificateId?: string | undefined; 
    public get clientCertificateId() {
      return this.getStringAttribute('client_certificate_id');
    }
    public set clientCertificateId(value: string | undefined) {
      this._clientCertificateId = value;
    }
    public resetClientCertificateId() {
      this._clientCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateIdInput() {
      return this._clientCertificateId
    }

    // deployment_id - computed: true, optional: true, required: false
    private _deploymentId?: string | undefined; 
    public get deploymentId() {
      return this.getStringAttribute('deployment_id');
    }
    public set deploymentId(value: string | undefined) {
      this._deploymentId = value;
    }
    public resetDeploymentId() {
      this._deploymentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentIdInput() {
      return this._deploymentId
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

    // execution_arn - computed: true, optional: false, required: false
    public get executionArn() {
      return this.getStringAttribute('execution_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invoke_url - computed: true, optional: false, required: false
    public get invokeUrl() {
      return this.getStringAttribute('invoke_url');
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

    // stage_variables - computed: false, optional: true, required: false
    private _stageVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get stageVariables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('stage_variables') as any;
    }
    public set stageVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._stageVariables = value;
    }
    public resetStageVariables() {
      this._stageVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageVariablesInput() {
      return this._stageVariables
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

    // access_log_settings - computed: false, optional: true, required: false
    private _accessLogSettings?: Apigatewayv2StageAccessLogSettings | undefined; 
    private __accessLogSettingsOutput = new Apigatewayv2StageAccessLogSettingsOutputReference(this as any, "access_log_settings", true);
    public get accessLogSettings() {
      return this.__accessLogSettingsOutput;
    }
    public putAccessLogSettings(value: Apigatewayv2StageAccessLogSettings | undefined) {
      this._accessLogSettings = value;
    }
    public resetAccessLogSettings() {
      this._accessLogSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogSettingsInput() {
      return this._accessLogSettings
    }

    // default_route_settings - computed: false, optional: true, required: false
    private _defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings | undefined; 
    private __defaultRouteSettingsOutput = new Apigatewayv2StageDefaultRouteSettingsOutputReference(this as any, "default_route_settings", true);
    public get defaultRouteSettings() {
      return this.__defaultRouteSettingsOutput;
    }
    public putDefaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings | undefined) {
      this._defaultRouteSettings = value;
    }
    public resetDefaultRouteSettings() {
      this._defaultRouteSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRouteSettingsInput() {
      return this._defaultRouteSettings
    }

    // route_settings - computed: false, optional: true, required: false
    private _routeSettings?: Apigatewayv2StageRouteSettings[] | undefined; 
    public get routeSettings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('route_settings') as any;
    }
    public set routeSettings(value: Apigatewayv2StageRouteSettings[] | undefined) {
      this._routeSettings = value;
    }
    public resetRouteSettings() {
      this._routeSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeSettingsInput() {
      return this._routeSettings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        auto_deploy: cdktf.booleanToTerraform(this._autoDeploy),
        client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
        deployment_id: cdktf.stringToTerraform(this._deploymentId),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        stage_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._stageVariables),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        access_log_settings: apigatewayv2StageAccessLogSettingsToTerraform(this._accessLogSettings),
        default_route_settings: apigatewayv2StageDefaultRouteSettingsToTerraform(this._defaultRouteSettings),
        route_settings: cdktf.listMapper(apigatewayv2StageRouteSettingsToTerraform)(this._routeSettings),
      };
    }
  }
  export interface Apigatewayv2VpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#name Apigatewayv2VpcLink#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#security_group_ids Apigatewayv2VpcLink#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#subnet_ids Apigatewayv2VpcLink#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#tags Apigatewayv2VpcLink#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html#tags_all Apigatewayv2VpcLink#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html aws_apigatewayv2_vpc_link}
  */
  export class Apigatewayv2VpcLink extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_vpc_link";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html aws_apigatewayv2_vpc_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2VpcLinkConfig
    */
    public constructor(scope: Construct, id: string, config: Apigatewayv2VpcLinkConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_vpc_link',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._securityGroupIds = config.securityGroupIds;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsApigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html#api_id DataAwsApigatewayv2Api#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html#tags DataAwsApigatewayv2Api#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsApigatewayv2ApiCorsConfiguration extends cdktf.ComplexComputedList {

    // allow_credentials - computed: true, optional: false, required: false
    public get allowCredentials() {
      return this.getBooleanAttribute('allow_credentials') as any;
    }

    // allow_headers - computed: true, optional: false, required: false
    public get allowHeaders() {
      return this.getListAttribute('allow_headers');
    }

    // allow_methods - computed: true, optional: false, required: false
    public get allowMethods() {
      return this.getListAttribute('allow_methods');
    }

    // allow_origins - computed: true, optional: false, required: false
    public get allowOrigins() {
      return this.getListAttribute('allow_origins');
    }

    // expose_headers - computed: true, optional: false, required: false
    public get exposeHeaders() {
      return this.getListAttribute('expose_headers');
    }

    // max_age - computed: true, optional: false, required: false
    public get maxAge() {
      return this.getNumberAttribute('max_age');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api}
  */
  export class DataAwsApigatewayv2Api extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_api";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ApiConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ApiConfig) {
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
      this._apiId = config.apiId;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_endpoint - computed: true, optional: false, required: false
    public get apiEndpoint() {
      return this.getStringAttribute('api_endpoint');
    }

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

    // api_key_selection_expression - computed: true, optional: false, required: false
    public get apiKeySelectionExpression() {
      return this.getStringAttribute('api_key_selection_expression');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cors_configuration - computed: true, optional: false, required: false
    public corsConfiguration(index: string) {
      return new DataAwsApigatewayv2ApiCorsConfiguration(this, 'cors_configuration', index);
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // disable_execute_api_endpoint - computed: true, optional: false, required: false
    public get disableExecuteApiEndpoint() {
      return this.getBooleanAttribute('disable_execute_api_endpoint') as any;
    }

    // execution_arn - computed: true, optional: false, required: false
    public get executionArn() {
      return this.getStringAttribute('execution_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // protocol_type - computed: true, optional: false, required: false
    public get protocolType() {
      return this.getStringAttribute('protocol_type');
    }

    // route_selection_expression - computed: true, optional: false, required: false
    public get routeSelectionExpression() {
      return this.getStringAttribute('route_selection_expression');
    }

    // tags - computed: true, optional: true, required: false
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

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsApigatewayv2ApisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#name DataAwsApigatewayv2Apis#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#protocol_type DataAwsApigatewayv2Apis#protocol_type}
    */
    readonly protocolType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#tags DataAwsApigatewayv2Apis#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis}
  */
  export class DataAwsApigatewayv2Apis extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apigatewayv2_apis";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ApisConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ApisConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_apigatewayv2_apis',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._protocolType = config.protocolType;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ids - computed: true, optional: false, required: false
    public get ids() {
      return this.getListAttribute('ids');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // protocol_type - computed: false, optional: true, required: false
    private _protocolType?: string | undefined; 
    public get protocolType() {
      return this.getStringAttribute('protocol_type');
    }
    public set protocolType(value: string | undefined) {
      this._protocolType = value;
    }
    public resetProtocolType() {
      this._protocolType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolTypeInput() {
      return this._protocolType
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        protocol_type: cdktf.stringToTerraform(this._protocolType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
