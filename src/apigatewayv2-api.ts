// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly corsConfiguration?: Apigatewayv2ApiCorsConfiguration[];
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

function apigatewayv2ApiCorsConfigurationToTerraform(struct?: Apigatewayv2ApiCorsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowMethods),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
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
  private _apiKeySelectionExpression?: string;
  public get apiKeySelectionExpression() {
    return this.getStringAttribute('api_key_selection_expression');
  }
  public set apiKeySelectionExpression(value: string ) {
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
  private _body?: string;
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string ) {
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
  private _credentialsArn?: string;
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }
  public set credentialsArn(value: string ) {
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

  // disable_execute_api_endpoint - computed: false, optional: true, required: false
  private _disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
  public get disableExecuteApiEndpoint() {
    return this.getBooleanAttribute('disable_execute_api_endpoint');
  }
  public set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable ) {
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
  private _failOnWarnings?: boolean | cdktf.IResolvable;
  public get failOnWarnings() {
    return this.getBooleanAttribute('fail_on_warnings');
  }
  public set failOnWarnings(value: boolean | cdktf.IResolvable ) {
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

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType: string;
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
  private _routeKey?: string;
  public get routeKey() {
    return this.getStringAttribute('route_key');
  }
  public set routeKey(value: string ) {
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
  private _routeSelectionExpression?: string;
  public get routeSelectionExpression() {
    return this.getStringAttribute('route_selection_expression');
  }
  public set routeSelectionExpression(value: string ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _target?: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string ) {
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
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string ) {
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
  private _corsConfiguration?: Apigatewayv2ApiCorsConfiguration[];
  public get corsConfiguration() {
    return this.interpolationForAttribute('cors_configuration') as any;
  }
  public set corsConfiguration(value: Apigatewayv2ApiCorsConfiguration[] ) {
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
      cors_configuration: cdktf.listMapper(apigatewayv2ApiCorsConfigurationToTerraform)(this._corsConfiguration),
    };
  }
}
