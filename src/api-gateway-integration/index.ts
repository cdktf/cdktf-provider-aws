// https://www.terraform.io/docs/providers/aws/r/api_gateway_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}
  */
  readonly cacheKeyParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}
  */
  readonly cacheNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}
  */
  readonly contentHandling?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}
  */
  readonly integrationHttpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}
  */
  readonly passthroughBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}
  */
  readonly requestParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}
  */
  readonly requestTemplates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}
  */
  readonly timeoutMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}
  */
  readonly uri?: string;
  /**
  * tls_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}
  */
  readonly tlsConfig?: ApiGatewayIntegrationTlsConfig;
}
export interface ApiGatewayIntegrationTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}
  */
  readonly insecureSkipVerification?: boolean | cdktf.IResolvable;
}

export function apiGatewayIntegrationTlsConfigToTerraform(struct?: ApiGatewayIntegrationTlsConfigOutputReference | ApiGatewayIntegrationTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_skip_verification: cdktf.booleanToTerraform(struct!.insecureSkipVerification),
  }
}

export class ApiGatewayIntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayIntegrationTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureSkipVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerification = this._insecureSkipVerification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayIntegrationTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureSkipVerification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureSkipVerification = value.insecureSkipVerification;
    }
  }

  // insecure_skip_verification - computed: false, optional: true, required: false
  private _insecureSkipVerification?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerification() {
    return this.getBooleanAttribute('insecure_skip_verification');
  }
  public set insecureSkipVerification(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerification = value;
  }
  public resetInsecureSkipVerification() {
    this._insecureSkipVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerificationInput() {
    return this._insecureSkipVerification;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration aws_api_gateway_integration}
*/
export class ApiGatewayIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration aws_api_gateway_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_integration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheKeyParameters = config.cacheKeyParameters;
    this._cacheNamespace = config.cacheNamespace;
    this._connectionId = config.connectionId;
    this._connectionType = config.connectionType;
    this._contentHandling = config.contentHandling;
    this._credentials = config.credentials;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._integrationHttpMethod = config.integrationHttpMethod;
    this._passthroughBehavior = config.passthroughBehavior;
    this._requestParameters = config.requestParameters;
    this._requestTemplates = config.requestTemplates;
    this._resourceId = config.resourceId;
    this._restApiId = config.restApiId;
    this._timeoutMilliseconds = config.timeoutMilliseconds;
    this._type = config.type;
    this._uri = config.uri;
    this._tlsConfig.internalValue = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_key_parameters - computed: false, optional: true, required: false
  private _cacheKeyParameters?: string[]; 
  public get cacheKeyParameters() {
    return cdktf.Fn.tolist(this.getListAttribute('cache_key_parameters'));
  }
  public set cacheKeyParameters(value: string[]) {
    this._cacheKeyParameters = value;
  }
  public resetCacheKeyParameters() {
    this._cacheKeyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyParametersInput() {
    return this._cacheKeyParameters;
  }

  // cache_namespace - computed: true, optional: true, required: false
  private _cacheNamespace?: string; 
  public get cacheNamespace() {
    return this.getStringAttribute('cache_namespace');
  }
  public set cacheNamespace(value: string) {
    this._cacheNamespace = value;
  }
  public resetCacheNamespace() {
    this._cacheNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNamespaceInput() {
    return this._cacheNamespace;
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

  // content_handling - computed: false, optional: true, required: false
  private _contentHandling?: string; 
  public get contentHandling() {
    return this.getStringAttribute('content_handling');
  }
  public set contentHandling(value: string) {
    this._contentHandling = value;
  }
  public resetContentHandling() {
    this._contentHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingInput() {
    return this._contentHandling;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integration_http_method - computed: false, optional: true, required: false
  private _integrationHttpMethod?: string; 
  public get integrationHttpMethod() {
    return this.getStringAttribute('integration_http_method');
  }
  public set integrationHttpMethod(value: string) {
    this._integrationHttpMethod = value;
  }
  public resetIntegrationHttpMethod() {
    this._integrationHttpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationHttpMethodInput() {
    return this._integrationHttpMethod;
  }

  // passthrough_behavior - computed: true, optional: true, required: false
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

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: string }; 
  public get requestParameters() {
    return this.getStringMapAttribute('request_parameters');
  }
  public set requestParameters(value: { [key: string]: string }) {
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
  private _requestTemplates?: { [key: string]: string }; 
  public get requestTemplates() {
    return this.getStringMapAttribute('request_templates');
  }
  public set requestTemplates(value: { [key: string]: string }) {
    this._requestTemplates = value;
  }
  public resetRequestTemplates() {
    this._requestTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplatesInput() {
    return this._requestTemplates;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId;
  }

  // timeout_milliseconds - computed: false, optional: true, required: false
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new ApiGatewayIntegrationTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: ApiGatewayIntegrationTlsConfig) {
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
      cache_key_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacheKeyParameters),
      cache_namespace: cdktf.stringToTerraform(this._cacheNamespace),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      content_handling: cdktf.stringToTerraform(this._contentHandling),
      credentials: cdktf.stringToTerraform(this._credentials),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      integration_http_method: cdktf.stringToTerraform(this._integrationHttpMethod),
      passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
      request_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestParameters),
      request_templates: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestTemplates),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
      type: cdktf.stringToTerraform(this._type),
      uri: cdktf.stringToTerraform(this._uri),
      tls_config: apiGatewayIntegrationTlsConfigToTerraform(this._tlsConfig.internalValue),
    };
  }
}
