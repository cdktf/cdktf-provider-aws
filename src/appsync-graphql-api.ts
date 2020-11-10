// https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface AppsyncGraphqlApiConfig extends TerraformMetaArguments {
  readonly authenticationType: string;
  readonly name: string;
  readonly schema?: string;
  readonly tags?: { [key: string]: string };
  readonly xrayEnabled?: boolean;
  /** additional_authentication_provider block */
  readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[];
  /** log_config block */
  readonly logConfig?: AppsyncGraphqlApiLogConfig[];
  /** openid_connect_config block */
  readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig[];
  /** user_pool_config block */
  readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig[];
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
  readonly authTtl?: number;
  readonly clientId?: string;
  readonly iatTtl?: number;
  readonly issuer: string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
  readonly appIdClientRegex?: string;
  readonly awsRegion?: string;
  readonly userPoolId: string;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProvider {
  readonly authenticationType: string;
  /** openid_connect_config block */
  readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig[];
  /** user_pool_config block */
  readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig[];
}
export interface AppsyncGraphqlApiLogConfig {
  readonly cloudwatchLogsRoleArn: string;
  readonly excludeVerboseContent?: boolean;
  readonly fieldLogLevel: string;
}
export interface AppsyncGraphqlApiOpenidConnectConfig {
  readonly authTtl?: number;
  readonly clientId?: string;
  readonly iatTtl?: number;
  readonly issuer: string;
}
export interface AppsyncGraphqlApiUserPoolConfig {
  readonly appIdClientRegex?: string;
  readonly awsRegion?: string;
  readonly defaultAction: string;
  readonly userPoolId: string;
}

// Resource

export class AppsyncGraphqlApi extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // uris - computed: true, optional: false, required: false
  public uris(key: string): string {
    return new StringMap(this, 'uris').lookup(key);
  }

  // xray_enabled - computed: false, optional: true, required: false
  private _xrayEnabled?: boolean;
  public get xrayEnabled() {
    return this.getBooleanAttribute('xray_enabled');
  }
  public set xrayEnabled(value: boolean ) {
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
      authentication_type: this._authenticationType,
      name: this._name,
      schema: this._schema,
      tags: this._tags,
      xray_enabled: this._xrayEnabled,
      additional_authentication_provider: this._additionalAuthenticationProvider,
      log_config: this._logConfig,
      openid_connect_config: this._openidConnectConfig,
      user_pool_config: this._userPoolConfig,
    };
  }
}
