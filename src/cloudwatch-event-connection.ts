// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_type CloudwatchEventConnection#authorization_type}
  */
  readonly authorizationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#description CloudwatchEventConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#name CloudwatchEventConnection#name}
  */
  readonly name: string;
  /**
  * auth_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#auth_parameters CloudwatchEventConnection#auth_parameters}
  */
  readonly authParameters: CloudwatchEventConnectionAuthParameters[];
}
export interface CloudwatchEventConnectionAuthParametersApiKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
  */
  readonly value: string;
}

function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudwatchEventConnectionAuthParametersBasic {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#password CloudwatchEventConnection#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#username CloudwatchEventConnection#username}
  */
  readonly username: string;
}

function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct?: CloudwatchEventConnectionAuthParametersBasic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudwatchEventConnectionAuthParametersInvocationHttpParameters {
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
  */
  readonly body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
  */
  readonly header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
  */
  readonly queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
}

function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform)(struct!.body),
    header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform)(struct!.header),
    query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform)(struct!.queryString),
  }
}

export interface CloudwatchEventConnectionAuthParametersOauthClientParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_id CloudwatchEventConnection#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_secret CloudwatchEventConnection#client_secret}
  */
  readonly clientSecret: string;
}

function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
  */
  readonly isValueSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
  */
  readonly value?: string;
}

function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters {
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
  */
  readonly body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
  */
  readonly header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
  */
  readonly queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
}

function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform)(struct!.body),
    header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform)(struct!.header),
    query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform)(struct!.queryString),
  }
}

export interface CloudwatchEventConnectionAuthParametersOauth {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#http_method CloudwatchEventConnection#http_method}
  */
  readonly httpMethod: string;
  /**
  * client_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_parameters CloudwatchEventConnection#client_parameters}
  */
  readonly clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters[];
  /**
  * oauth_http_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}
  */
  readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters[];
}

function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    client_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform)(struct!.clientParameters),
    oauth_http_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform)(struct!.oauthHttpParameters),
  }
}

export interface CloudwatchEventConnectionAuthParameters {
  /**
  * api_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#api_key CloudwatchEventConnection#api_key}
  */
  readonly apiKey?: CloudwatchEventConnectionAuthParametersApiKey[];
  /**
  * basic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#basic CloudwatchEventConnection#basic}
  */
  readonly basic?: CloudwatchEventConnectionAuthParametersBasic[];
  /**
  * invocation_http_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}
  */
  readonly invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters[];
  /**
  * oauth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth CloudwatchEventConnection#oauth}
  */
  readonly oauth?: CloudwatchEventConnectionAuthParametersOauth[];
}

function cloudwatchEventConnectionAuthParametersToTerraform(struct?: CloudwatchEventConnectionAuthParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key: cdktf.listMapper(cloudwatchEventConnectionAuthParametersApiKeyToTerraform)(struct!.apiKey),
    basic: cdktf.listMapper(cloudwatchEventConnectionAuthParametersBasicToTerraform)(struct!.basic),
    invocation_http_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform)(struct!.invocationHttpParameters),
    oauth: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthToTerraform)(struct!.oauth),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection}
*/
export class CloudwatchEventConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudwatch_event_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchEventConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchEventConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._name = config.name;
    this._authParameters = config.authParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorization_type - computed: false, optional: false, required: true
  private _authorizationType: string;
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType
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

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // auth_parameters - computed: false, optional: false, required: true
  private _authParameters: CloudwatchEventConnectionAuthParameters[];
  public get authParameters() {
    return this.interpolationForAttribute('auth_parameters') as any;
  }
  public set authParameters(value: CloudwatchEventConnectionAuthParameters[]) {
    this._authParameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authParametersInput() {
    return this._authParameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      auth_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersToTerraform)(this._authParameters),
    };
  }
}
