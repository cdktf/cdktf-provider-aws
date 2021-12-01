// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon API Gateway Websocket and HTTP APIs
*/
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

export function apigatewayv2IntegrationResponseParametersToTerraform(struct?: Apigatewayv2IntegrationResponseParameters): any {
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

export function apigatewayv2IntegrationTlsConfigToTerraform(struct?: Apigatewayv2IntegrationTlsConfigOutputReference | Apigatewayv2IntegrationTlsConfig): any {
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

  public get internalValue(): Apigatewayv2IntegrationTlsConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._serverNameToVerify) {
      hasAnyValues = true;
      internalValueResult.serverNameToVerify = this._serverNameToVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Apigatewayv2IntegrationTlsConfig | undefined) {
    if (value === undefined) {
      this._serverNameToVerify = undefined;
    }
    else {
      this._serverNameToVerify = value.serverNameToVerify;
    }
  }

  // server_name_to_verify - computed: false, optional: true, required: false
  private _serverNameToVerify?: string; 
  public get serverNameToVerify() {
    return this.getStringAttribute('server_name_to_verify');
  }
  public set serverNameToVerify(value: string) {
    this._serverNameToVerify = value;
  }
  public resetServerNameToVerify() {
    this._serverNameToVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameToVerifyInput() {
    return this._serverNameToVerify;
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
    this._tlsConfig.internalValue = config.tlsConfig;
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

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // content_handling_strategy - computed: false, optional: true, required: false
  private _contentHandlingStrategy?: string; 
  public get contentHandlingStrategy() {
    return this.getStringAttribute('content_handling_strategy');
  }
  public set contentHandlingStrategy(value: string) {
    this._contentHandlingStrategy = value;
  }
  public resetContentHandlingStrategy() {
    this._contentHandlingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingStrategyInput() {
    return this._contentHandlingStrategy;
  }

  // credentials_arn - computed: false, optional: true, required: false
  private _credentialsArn?: string; 
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }
  public set credentialsArn(value: string) {
    this._credentialsArn = value;
  }
  public resetCredentialsArn() {
    this._credentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsArnInput() {
    return this._credentialsArn;
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

  // integration_method - computed: false, optional: true, required: false
  private _integrationMethod?: string; 
  public get integrationMethod() {
    return this.getStringAttribute('integration_method');
  }
  public set integrationMethod(value: string) {
    this._integrationMethod = value;
  }
  public resetIntegrationMethod() {
    this._integrationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationMethodInput() {
    return this._integrationMethod;
  }

  // integration_response_selection_expression - computed: true, optional: false, required: false
  public get integrationResponseSelectionExpression() {
    return this.getStringAttribute('integration_response_selection_expression');
  }

  // integration_subtype - computed: false, optional: true, required: false
  private _integrationSubtype?: string; 
  public get integrationSubtype() {
    return this.getStringAttribute('integration_subtype');
  }
  public set integrationSubtype(value: string) {
    this._integrationSubtype = value;
  }
  public resetIntegrationSubtype() {
    this._integrationSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationSubtypeInput() {
    return this._integrationSubtype;
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
    return this._integrationType;
  }

  // integration_uri - computed: false, optional: true, required: false
  private _integrationUri?: string; 
  public get integrationUri() {
    return this.getStringAttribute('integration_uri');
  }
  public set integrationUri(value: string) {
    this._integrationUri = value;
  }
  public resetIntegrationUri() {
    this._integrationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUriInput() {
    return this._integrationUri;
  }

  // passthrough_behavior - computed: false, optional: true, required: false
  private _passthroughBehavior?: string; 
  public get passthroughBehavior() {
    return this.getStringAttribute('passthrough_behavior');
  }
  public set passthroughBehavior(value: string) {
    this._passthroughBehavior = value;
  }
  public resetPassthroughBehavior() {
    this._passthroughBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughBehaviorInput() {
    return this._passthroughBehavior;
  }

  // payload_format_version - computed: false, optional: true, required: false
  private _payloadFormatVersion?: string; 
  public get payloadFormatVersion() {
    return this.getStringAttribute('payload_format_version');
  }
  public set payloadFormatVersion(value: string) {
    this._payloadFormatVersion = value;
  }
  public resetPayloadFormatVersion() {
    this._payloadFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatVersionInput() {
    return this._payloadFormatVersion;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get requestParameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_parameters') as any;
  }
  public set requestParameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._requestParameters = value;
  }
  public resetRequestParameters() {
    this._requestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters;
  }

  // request_templates - computed: false, optional: true, required: false
  private _requestTemplates?: { [key: string]: string } | cdktf.IResolvable; 
  public get requestTemplates() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_templates') as any;
  }
  public set requestTemplates(value: { [key: string]: string } | cdktf.IResolvable) {
    this._requestTemplates = value;
  }
  public resetRequestTemplates() {
    this._requestTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplatesInput() {
    return this._requestTemplates;
  }

  // template_selection_expression - computed: false, optional: true, required: false
  private _templateSelectionExpression?: string; 
  public get templateSelectionExpression() {
    return this.getStringAttribute('template_selection_expression');
  }
  public set templateSelectionExpression(value: string) {
    this._templateSelectionExpression = value;
  }
  public resetTemplateSelectionExpression() {
    this._templateSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSelectionExpressionInput() {
    return this._templateSelectionExpression;
  }

  // timeout_milliseconds - computed: true, optional: true, required: false
  private _timeoutMilliseconds?: number; 
  public get timeoutMilliseconds() {
    return this.getNumberAttribute('timeout_milliseconds');
  }
  public set timeoutMilliseconds(value: number) {
    this._timeoutMilliseconds = value;
  }
  public resetTimeoutMilliseconds() {
    this._timeoutMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMillisecondsInput() {
    return this._timeoutMilliseconds;
  }

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: Apigatewayv2IntegrationResponseParameters[]; 
  public get responseParameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('response_parameters') as any;
  }
  public set responseParameters(value: Apigatewayv2IntegrationResponseParameters[]) {
    this._responseParameters = value;
  }
  public resetResponseParameters() {
    this._responseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseParametersInput() {
    return this._responseParameters;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new Apigatewayv2IntegrationTlsConfigOutputReference(this as any, "tls_config", true);
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: Apigatewayv2IntegrationTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
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
      tls_config: apigatewayv2IntegrationTlsConfigToTerraform(this._tlsConfig.internalValue),
    };
  }
}
