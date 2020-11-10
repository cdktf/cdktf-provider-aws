// https://www.terraform.io/docs/providers/aws/r/opsworks_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OpsworksApplicationConfig extends TerraformMetaArguments {
  readonly autoBundleOnDeploy?: string;
  readonly awsFlowRubySettings?: string;
  readonly dataSourceArn?: string;
  readonly dataSourceDatabaseName?: string;
  readonly dataSourceType?: string;
  readonly description?: string;
  readonly documentRoot?: string;
  readonly domains?: string[];
  readonly enableSsl?: boolean;
  readonly name: string;
  readonly railsEnv?: string;
  readonly shortName?: string;
  readonly stackId: string;
  readonly type: string;
  /** app_source block */
  readonly appSource?: OpsworksApplicationAppSource[];
  /** environment block */
  readonly environment?: OpsworksApplicationEnvironment[];
  /** ssl_configuration block */
  readonly sslConfiguration?: OpsworksApplicationSslConfiguration[];
}
export interface OpsworksApplicationAppSource {
  readonly password?: string;
  readonly revision?: string;
  readonly sshKey?: string;
  readonly type: string;
  readonly url?: string;
  readonly username?: string;
}
export interface OpsworksApplicationEnvironment {
  readonly key: string;
  readonly secure?: boolean;
  readonly value: string;
}
export interface OpsworksApplicationSslConfiguration {
  readonly certificate: string;
  readonly chain?: string;
  readonly privateKey: string;
}

// Resource

export class OpsworksApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoBundleOnDeploy = config.autoBundleOnDeploy;
    this._awsFlowRubySettings = config.awsFlowRubySettings;
    this._dataSourceArn = config.dataSourceArn;
    this._dataSourceDatabaseName = config.dataSourceDatabaseName;
    this._dataSourceType = config.dataSourceType;
    this._description = config.description;
    this._documentRoot = config.documentRoot;
    this._domains = config.domains;
    this._enableSsl = config.enableSsl;
    this._name = config.name;
    this._railsEnv = config.railsEnv;
    this._shortName = config.shortName;
    this._stackId = config.stackId;
    this._type = config.type;
    this._appSource = config.appSource;
    this._environment = config.environment;
    this._sslConfiguration = config.sslConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_bundle_on_deploy - computed: false, optional: true, required: false
  private _autoBundleOnDeploy?: string;
  public get autoBundleOnDeploy() {
    return this.getStringAttribute('auto_bundle_on_deploy');
  }
  public set autoBundleOnDeploy(value: string ) {
    this._autoBundleOnDeploy = value;
  }
  public resetAutoBundleOnDeploy() {
    this._autoBundleOnDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBundleOnDeployInput() {
    return this._autoBundleOnDeploy
  }

  // aws_flow_ruby_settings - computed: false, optional: true, required: false
  private _awsFlowRubySettings?: string;
  public get awsFlowRubySettings() {
    return this.getStringAttribute('aws_flow_ruby_settings');
  }
  public set awsFlowRubySettings(value: string ) {
    this._awsFlowRubySettings = value;
  }
  public resetAwsFlowRubySettings() {
    this._awsFlowRubySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsFlowRubySettingsInput() {
    return this._awsFlowRubySettings
  }

  // data_source_arn - computed: false, optional: true, required: false
  private _dataSourceArn?: string;
  public get dataSourceArn() {
    return this.getStringAttribute('data_source_arn');
  }
  public set dataSourceArn(value: string ) {
    this._dataSourceArn = value;
  }
  public resetDataSourceArn() {
    this._dataSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceArnInput() {
    return this._dataSourceArn
  }

  // data_source_database_name - computed: false, optional: true, required: false
  private _dataSourceDatabaseName?: string;
  public get dataSourceDatabaseName() {
    return this.getStringAttribute('data_source_database_name');
  }
  public set dataSourceDatabaseName(value: string ) {
    this._dataSourceDatabaseName = value;
  }
  public resetDataSourceDatabaseName() {
    this._dataSourceDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceDatabaseNameInput() {
    return this._dataSourceDatabaseName
  }

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string;
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string ) {
    this._dataSourceType = value;
  }
  public resetDataSourceType() {
    this._dataSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType
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

  // document_root - computed: false, optional: true, required: false
  private _documentRoot?: string;
  public get documentRoot() {
    return this.getStringAttribute('document_root');
  }
  public set documentRoot(value: string ) {
    this._documentRoot = value;
  }
  public resetDocumentRoot() {
    this._documentRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentRootInput() {
    return this._documentRoot
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[];
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[] ) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains
  }

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: boolean;
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean ) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl
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

  // rails_env - computed: false, optional: true, required: false
  private _railsEnv?: string;
  public get railsEnv() {
    return this.getStringAttribute('rails_env');
  }
  public set railsEnv(value: string ) {
    this._railsEnv = value;
  }
  public resetRailsEnv() {
    this._railsEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get railsEnvInput() {
    return this._railsEnv
  }

  // short_name - computed: true, optional: true, required: false
  private _shortName?: string;
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  public resetShortName() {
    this._shortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId
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

  // app_source - computed: false, optional: true, required: false
  private _appSource?: OpsworksApplicationAppSource[];
  public get appSource() {
    return this.interpolationForAttribute('app_source') as any;
  }
  public set appSource(value: OpsworksApplicationAppSource[] ) {
    this._appSource = value;
  }
  public resetAppSource() {
    this._appSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSourceInput() {
    return this._appSource
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: OpsworksApplicationEnvironment[];
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: OpsworksApplicationEnvironment[] ) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // ssl_configuration - computed: false, optional: true, required: false
  private _sslConfiguration?: OpsworksApplicationSslConfiguration[];
  public get sslConfiguration() {
    return this.interpolationForAttribute('ssl_configuration') as any;
  }
  public set sslConfiguration(value: OpsworksApplicationSslConfiguration[] ) {
    this._sslConfiguration = value;
  }
  public resetSslConfiguration() {
    this._sslConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigurationInput() {
    return this._sslConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_bundle_on_deploy: this._autoBundleOnDeploy,
      aws_flow_ruby_settings: this._awsFlowRubySettings,
      data_source_arn: this._dataSourceArn,
      data_source_database_name: this._dataSourceDatabaseName,
      data_source_type: this._dataSourceType,
      description: this._description,
      document_root: this._documentRoot,
      domains: this._domains,
      enable_ssl: this._enableSsl,
      name: this._name,
      rails_env: this._railsEnv,
      short_name: this._shortName,
      stack_id: this._stackId,
      type: this._type,
      app_source: this._appSource,
      environment: this._environment,
      ssl_configuration: this._sslConfiguration,
    };
  }
}
