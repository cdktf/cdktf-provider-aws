// https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly logConfig?: AppsyncGraphqlApiLogConfig[];
  /**
  * openid_connect_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig[];
  /**
  * user_pool_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig[];
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

function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
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

function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
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
  readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig[];
  /**
  * user_pool_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html#user_pool_config AppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig[];
}

function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    openid_connect_config: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform)(struct!.openidConnectConfig),
    user_pool_config: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform)(struct!.userPoolConfig),
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

function appsyncGraphqlApiLogConfigToTerraform(struct?: AppsyncGraphqlApiLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsRoleArn),
    exclude_verbose_content: cdktf.booleanToTerraform(struct!.excludeVerboseContent),
    field_log_level: cdktf.stringToTerraform(struct!.fieldLogLevel),
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

function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
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

function appsyncGraphqlApiUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiUserPoolConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
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
  private _authenticationType: string;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string;
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string ) {
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

  // uris - computed: true, optional: false, required: false
  public uris(key: string): string {
    return new cdktf.StringMap(this, 'uris').lookup(key);
  }

  // xray_enabled - computed: false, optional: true, required: false
  private _xrayEnabled?: boolean | cdktf.IResolvable;
  public get xrayEnabled() {
    return this.getBooleanAttribute('xray_enabled');
  }
  public set xrayEnabled(value: boolean | cdktf.IResolvable ) {
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
  private _additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
  public get additionalAuthenticationProvider() {
    return this.interpolationForAttribute('additional_authentication_provider') as any;
  }
  public set additionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[] ) {
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
  private _logConfig?: AppsyncGraphqlApiLogConfig[];
  public get logConfig() {
    return this.interpolationForAttribute('log_config') as any;
  }
  public set logConfig(value: AppsyncGraphqlApiLogConfig[] ) {
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
  private _openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig[];
  public get openidConnectConfig() {
    return this.interpolationForAttribute('openid_connect_config') as any;
  }
  public set openidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig[] ) {
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
  private _userPoolConfig?: AppsyncGraphqlApiUserPoolConfig[];
  public get userPoolConfig() {
    return this.interpolationForAttribute('user_pool_config') as any;
  }
  public set userPoolConfig(value: AppsyncGraphqlApiUserPoolConfig[] ) {
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
      log_config: cdktf.listMapper(appsyncGraphqlApiLogConfigToTerraform)(this._logConfig),
      openid_connect_config: cdktf.listMapper(appsyncGraphqlApiOpenidConnectConfigToTerraform)(this._openidConnectConfig),
      user_pool_config: cdktf.listMapper(appsyncGraphqlApiUserPoolConfigToTerraform)(this._userPoolConfig),
    };
  }
}
